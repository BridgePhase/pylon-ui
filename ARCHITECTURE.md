# Architecture

This document explains how Pylon UI turns Mantine components into USWDS-compliant
markup. Read it before adding or changing a component — the main decision you will
face is _which of the four layers below_ your change belongs in, and that choice is
not obvious from the file tree alone.

If you are looking for setup, commands, and the PR process, see
[CONTRIBUTING.md](./CONTRIBUTING.md) instead.

## The core idea

USWDS is a CSS design system: its appearance and its accessibility affordances are
driven by class names like `usa-alert usa-alert--warning`. Mantine is a React
component library that owns its own markup and styling.

Pylon UI bridges the two by **making Mantine emit USWDS class names**, then loading
real USWDS CSS to style them. Consumers write ordinary Mantine code; the DOM comes
out looking like hand-written USWDS. Almost nothing here reimplements a component
from scratch.

## The four layers

Changes land in one of these. They are listed in order of preference — prefer the
earliest layer that can express what you need.

### 1. The theme override — `src/themes/uswds-theme.tsx`

The primary layer, and where most work happens. `UswdsTheme` is a
`MantineThemeOverride` whose `components` map uses Mantine's `Component.extend()`
to attach USWDS classes to each component's internal element slots:

```tsx
Alert: Alert.extend({
  classNames: (_theme, props) => ({
    root: `usa-alert usa-alert--${[props.color?.toLowerCase()]}  usa-alert--${props.variant}`,
    body: "usa-alert__body",
    title: "usa-alert__heading",
    label: "usa-alert__text",
  }),
  defaultProps: { radius: 0 },
  styles: () => ({ root: { padding: 0, borderTop: 0, /* … */ } }),
}),
```

Three tools are available inside `extend()`, each with a distinct job:

- **`classNames`** — the main event. Map Mantine's slots (`root`, `body`, `label`,
  `control`, …) onto USWDS block and element classes. Where a USWDS _modifier_
  corresponds to a Mantine prop, translate it: `props.variant === "separated"`
  becomes `usa-accordion--bordered`, `props.color` becomes
  `usa-alert--warning`. Use `clsx` (imported as `cx`) for conditional classes.
- **`defaultProps`** — turn off Mantine behavior that USWDS supplies itself, e.g.
  `chevron: null` on Accordion because USWDS draws its own indicator, or
  `radius: 0` where USWDS expects square corners.
- **`styles`** — narrowly neutralize Mantine's own CSS where it fights USWDS
  (resetting padding and borders so the USWDS rules win). This is a patch
  mechanism, not a styling mechanism: if you find yourself _designing_ in
  `styles`, the USWDS class is probably missing or wrong.

The same file also carries the token layer: `theme.colors` is assembled from
`UswdsAlertColors`, `UswdsButtonColors`, and `UswdsColorTokens`, USWDS breakpoints
are mapped onto Mantine's breakpoint scale, and the type scale uses USWDS's
normalized Source Sans Pro sizes. Token sources live alongside it:

| File                         | Holds                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `uswds-colors-tokens.ts`     | The USWDS color token palette, as Mantine color tuples.                                                                        |
| `uswds-colors-contextual.ts` | Contextual palettes (alert and button colors) keyed to USWDS semantics.                                                        |
| `uswds-constants.ts`         | Enums for USWDS vocabularies — `UswdsContexts`, `UswdsAlertVariants` — so prop-to-modifier mapping is not stringly typed.      |
| `mantine.d.ts`               | Module augmentation extending Mantine prop types where Pylon adds variants (e.g. `AnchorProps["variant"]` gains `"external"`). |

### 2. Component CSS modules — `src/themes/components/*.module.css`

Use these when a rule needs a selector that `styles` cannot express: Mantine's
runtime `data-*` state attributes, or descendant selectors into slots you do not
control. `Card.module.css` is the representative example — it styles
`&[data-first-section]` and `> :only-child` to make Mantine's card sections behave
like `usa-card__header` and `usa-card__heading`.

Import the module in `uswds-theme.tsx` and reference its class from `classNames`,
so the module stays attached to the component it belongs to.

### 3. Global stylesheet — `src/themes/uswds-theme.scss`

This file does two things.

First, it is the **CSS entry point**. It imports Mantine's stylesheets and USWDS's
compiled CSS:

```scss
@import "@mantine/core/styles.css";
@import "@mantine/charts/styles.css";
@import "@mantine/dates/styles.css";
@import "@uswds/uswds/css/uswds.css";
```

Because `uswds-theme.tsx` imports this file, everything above ends up bundled into
the single `dist/pylon-ui.css` that consumers import — which is why consumers do
**not** need to import Mantine or USWDS CSS separately.

Second, it holds global patches for places where Mantine's DOM and USWDS's
expected DOM genuinely disagree and no per-component hook is enough — the
pagination control, the step indicator, the primary nav's light/dark treatments,
and the date picker. Treat this as the layer of last resort: rules here are global,
so they are the easiest to break something with. Prefer a scoped `pylon-*` class
(as the date picker does with `.pylon-date-picker-root`) over bare element or
Mantine-internal selectors.

### 4. Wrapper widgets — `src/widgets/`

Write a component only when Mantine has nothing to theme. Two cases qualify:

- **USWDS patterns with no Mantine counterpart.** These are usually thin —
  `PylonCardGroup` is a `Stack` carrying `usa-card-group`, `PylonLabel` emits a
  `usa-label` with its hint and required marker. Thin is correct; resist adding
  props Mantine already provides.
- **Composite patterns** that assemble several themed components into a USWDS
  pattern: `app-shell/` (header, nav, footer), `collection/`, `datalist/`,
  `stepper/`, `login/`, and the `form/` pieces (`date-picker`, `label`,
  `masked-text-input`, `required-marker`).

Name public wrappers `Pylon*` so consumers can tell at a glance what came from
Pylon versus straight from Mantine.

## Choosing a layer

```
Does Mantine already render something close?
├─ Yes → can USWDS classes + defaultProps get you there?
│         ├─ Yes → theme override (layer 1)
│         └─ No  → does the rule need Mantine data-* state or descendants?
│                   ├─ Yes → component CSS module (layer 2)
│                   └─ No  → global SCSS, scoped with a pylon-* class (layer 3)
└─ No  → wrapper widget in src/widgets/ (layer 4)
```

## The public API

`src/index.ts` is the whole published surface:

```ts
export * from "./widgets";
export * from "./themes";
export * from "@mantine/core";
export * from "@mantine/charts";
export * from "@mantine/dates";
export * from "@mantine/form";
export * from "@mantine/hooks";
```

Two consequences worth knowing:

1. **Pylon re-exports Mantine.** Consumers import `MantineProvider`, `Button`, and
   hooks _from Pylon UI_, not from `@mantine/core`. This keeps a single Mantine
   instance in play and means a consumer never has to know which components are
   themed and which are pass-through.
2. **A component is not shipped until it is exported.** Adding a file under
   `src/widgets/` does nothing for consumers until it reaches `src/index.ts`
   through the intermediate `index.ts` barrels.

The library build ([vite.config.ts](./vite.config.ts)) externalizes `react` and
`react-dom` and emits ESM, UMD, and type declarations. Only `dist/` is published.

## The sample app and Storybook

Two development surfaces, both excluded from the published package:

- **Storybook** (`npm run storybook`) is the component documentation. Stories in
  `src/stories/` are also the fixtures for tests — specs compose stories with
  Storybook's `composeStory`, and `vitest.setup.ts` applies the same
  `MantineProvider`/`UswdsTheme` decorator that `.storybook/preview.tsx` does, so a
  story renders identically in both places.
- **The sample app** (`npm run dev`, in `src/sample-app/`) is a browsing surface
  for the whole library: per-component pages under `pages/components/`, plus color
  and typography style guides. Its `component-comparison.tsx` renders a Pylon
  component beside hand-written USWDS markup, which is the fastest way to check
  fidelity while working.

## Known structural constraints

Consequences of the wrapping approach that are worth knowing before you debug them
(see also **Known Limitations** in the [README](./README.md)):

- **Mantine's `Grid` conflicts with USWDS CSS.** USWDS's grid rules and Mantine's
  both claim the same layout responsibilities. `SimpleGrid` works; prefer it.
- **Not every USWDS modifier maps to a Mantine prop.** Alert's `slim` and
  `headingLevel` have no Mantine equivalent, so they are unsupported rather than
  half-mapped.
- **Components with rich interactive internals resist theming.** The date picker
  needed a scoped wrapper plus global CSS to suppress Mantine's own dropdown; a
  fully custom component may eventually be the right answer there.
