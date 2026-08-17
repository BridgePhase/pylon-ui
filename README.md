# Pylon UI

[![npm](https://img.shields.io/npm/v/@bridgephasenpm/pylon-ui)](https://www.npmjs.com/package/@bridgephasenpm/pylon-ui)
[![CI](https://github.com/BridgePhase/pylon-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/BridgePhase/pylon-ui/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/@bridgephasenpm/pylon-ui)](./LICENSE)

Pylon UI provides [USWDS design system](https://designsystem.digital.gov/)-styled and compliant components built on the [Mantine component library](https://mantine.dev/).

The project is intended as a convenience for developers that are targeting a USWDS-compliant application with React, but prefer working with the Mantine ecosystem than existing React implementations of USWDS (e.g. [trussworks/react-uswds](https://trussworks.github.io/react-uswds/)).

**[Component documentation (Storybook)](https://bridgephase.github.io/pylon-ui/)** ·
[npm package](https://www.npmjs.com/package/@bridgephasenpm/pylon-ui) ·
[Contributing](./CONTRIBUTING.md) ·
[Architecture](./ARCHITECTURE.md)

## Project Status

Pylon UI is pre-`1.0.0` and under active development. The public API in
`src/index.ts` may change between releases — while below 1.0, breaking changes
arrive in **minor** version bumps, so pin an exact version if you need
stability. See [CHANGELOG.md](./CHANGELOG.md) for what changed in each release.

## Requirements

| Requirement | Version                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| React       | 19                                                                                     |
| Node        | 24 (development only; see `.nvmrc`)                                                    |
| Mantine     | 8.3.x (bundled as a dependency — see [Architecture](./ARCHITECTURE.md#the-public-api)) |
| USWDS       | 3.x (bundled as a dependency)                                                          |

## Running Sample App

Pylon UI has been written and tested using Node v.24. It contains a `.nvmrc` which specifies this version target, so that if you have the [Node Version Manager (NVM)](https://sukiphan.medium.com/how-to-install-nvm-node-version-manager-on-macos-d9fe432cc7db) tool installed (e.g. via the [Homebrew package manager](https://brew.sh/) with `brew install nvm`) you can switch to it by just running `nvm use`.

```bash
nvm use
npm install
npm run dev        # sample app: every component, plus color and typography guides
npm run storybook  # component documentation at http://localhost:6006
```

The sample app is the fastest way to see the library as a whole — its component
pages render each Pylon component beside hand-written USWDS markup so you can
check fidelity directly. For the full development workflow (tests, lint,
conventions), see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Using Pylon UI in Another Project

Pylon UI is published as a public package on the npm registry, so consuming projects do not need a GitHub Packages token or project-level `.npmrc` registry mapping.

### Import Pylon UI

In your project, install Pylon UI by running: `npm install @bridgephasenpm/pylon-ui`

### Update Your Application Code

Update your project's `App` component to import the required components and styles. Note that Mantine's components are exposed via Pylon UI; your app need not import these directly from Mantine.

```tsx
import { MantineProvider, UswdsTheme, Button } from "@bridgephasenpm/pylon-ui";
import "@bridgephasenpm/pylon-ui/dist/pylon-ui.css";

function App() {
  return (
    <MantineProvider theme={UswdsTheme} forceColorScheme="light">
      {/* Your app root component */}
      <Button>Get started</Button>
    </MantineProvider>
  );
}
```

A few things worth knowing about this setup:

- **One stylesheet is enough.** `dist/pylon-ui.css` already bundles Mantine's
  stylesheets and USWDS's compiled CSS, so you do not need to import
  `@mantine/core/styles.css` or `@uswds/uswds` yourself. Importing Mantine's CSS
  again afterward can override Pylon's theming.
- **Import components from Pylon UI, not Mantine.** Pylon re-exports all of
  `@mantine/core`, `charts`, `dates`, `form`, and `hooks`, so a single import
  path covers both themed Pylon components and plain Mantine ones.
- **`forceColorScheme="light"`** is recommended: USWDS styling here targets the
  light color scheme, and Mantine's dark scheme is not themed.

### Fonts

USWDS typography expects Source Sans Pro (body) and Merriweather (headings). The
theme references them by name but does not load them — serve or import them in
your application, as USWDS's
[typography guidance](https://designsystem.digital.gov/design-tokens/typesetting/font-family/)
describes.

## Known Limitations

These are consequences of theming Mantine rather than reimplementing USWDS. If one
blocks you, please
[open an issue](https://github.com/BridgePhase/pylon-ui/issues/new/choose) — the
list below is what we know about, not a decision to leave it that way.

- **Mantine's `Grid` conflicts with the imported USWDS styles.** Use `SimpleGrid`,
  which works correctly.
- **`Alert` does not support USWDS's `slim` or `headingLevel` options**, because
  Mantine's Alert has no equivalent prop to map them onto.
- **`DateInput` is only partially themed.** It currently needs a scoped wrapper and
  global CSS overrides; matching USWDS's date picker fully may require a custom
  component.

## USWDS Component Coverage

How each USWDS component is provided. `Pylon*` entries are components this library
adds; everything else is a Mantine component with USWDS theming applied.

| USWDS             | Mantine                | Status                                                 |
| ----------------- | ---------------------- | ------------------------------------------------------ |
| Accordion         | Accordion              | ![](https://img.shields.io/badge/done-83e22b)          |
| Address           | PylonFooterItems       | ![](https://img.shields.io/badge/done-83e22b)          |
| Alert             | Alert                  | ![](https://img.shields.io/badge/done-83e22b)          |
| Breadcrumb        | Breadcrumbs\*          | ![](https://img.shields.io/badge/done-83e22b)          |
| BreadcrumbItem    | Breadcrumbs\*          | ![](https://img.shields.io/badge/done-83e22b)          |
| Button            | Button                 | ![](https://img.shields.io/badge/done-83e22b)          |
| ButtonGroup       | Group                  | ![](https://img.shields.io/badge/done-83e22b)          |
| Card              | Card                   | ![](https://img.shields.io/badge/done-83e22b)          |
| CardBody          | Card.Section\*\*       | ![](https://img.shields.io/badge/done-83e22b)          |
| CardGroup         | PylonCardGroup         | ![](https://img.shields.io/badge/done-83e22b)          |
| CardHeader        | Card.Section\*\*       | ![](https://img.shields.io/badge/done-83e22b)          |
| Checkbox          | Checkbox               | ![](https://img.shields.io/badge/done-83e22b)          |
| Collection        | PylonCollection        | ![](https://img.shields.io/badge/done-83e22b)          |
| CollectionHeading | PylonCollectionHeading | ![](https://img.shields.io/badge/done-83e22b)          |
| CollectionItem    | PylonCollectionItem    | ![](https://img.shields.io/badge/done-83e22b)          |
| CollectionMeta    | PylonCollectionMeta    | ![](https://img.shields.io/badge/done-83e22b)          |
| DatePicker        | DateInput              | ![](https://img.shields.io/badge/in%20progress-e28a2b) |
| ErrorMessage      | Input.Error            | ![](https://img.shields.io/badge/done-83e22b)          |
| Footer            | PylonFooter            | ![](https://img.shields.io/badge/done-83e22b)          |
| Grid              | Grid                   | ![](https://img.shields.io/badge/done-83e22b)          |
| GridContainer     | Container              | ![](https://img.shields.io/badge/done-83e22b)          |
| Header            | AppShell.Header        | ![](https://img.shields.io/badge/done-83e22b)          |
| Icon              | Icon                   | ![](https://img.shields.io/badge/done-83e22b)          |
| InputGroup        | FieldSet               | ![](https://img.shields.io/badge/done-83e22b)          |
| InputSuffix       | TextInput              | ![](https://img.shields.io/badge/done-83e22b)          |
| Label             | PylonLabel             | ![](https://img.shields.io/badge/done-83e22b)          |
| Link              | Anchor                 | ![](https://img.shields.io/badge/done-83e22b)          |
| Logo              | PylonFooter            | ![](https://img.shields.io/badge/done-83e22b)          |
| Modal             | Modal                  | ![](https://img.shields.io/badge/done-83e22b)          |
| ModalRef          | useModalsStack         | ![](https://img.shields.io/badge/done-83e22b)          |
| NavMenuButton     | Burger                 | ![](https://img.shields.io/badge/done-83e22b)          |
| Pagination        | Pagination             | ![](https://img.shields.io/badge/done-83e22b)          |
| PrimaryNav        | PylonHeaderNav         | ![](https://img.shields.io/badge/done-83e22b)          |
| RequiredMarker    | –                      | ![](https://img.shields.io/badge/done-83e22b)          |
| Select            | Select                 | ![](https://img.shields.io/badge/done-83e22b)          |
| StepIndicator     | Stepper                | ![](https://img.shields.io/badge/done-83e22b)          |
| StepIndicatorStep | Stepper.Step           | ![](https://img.shields.io/badge/done-83e22b)          |
| Table             | Table                  | ![](https://img.shields.io/badge/done-83e22b)          |
| Tag               | Badge                  | ![](https://img.shields.io/badge/done-83e22b)          |
| TextInput         | TextInput              | ![](https://img.shields.io/badge/done-83e22b)          |
| TextInputMask     | PylonMaskedTextInput   | ![](https://img.shields.io/badge/done-83e22b)          |
| Title             | AppShellHeaderTitle    | ![](https://img.shields.io/badge/done-83e22b)          |

\* One Mantine component covers both USWDS components — `Breadcrumbs` renders the
list and its items together.

\*\* Both map to `Card.Section`; position determines the role, with the first
section styled as the card header.

A USWDS component you need that isn't listed here?
[Request it](https://github.com/BridgePhase/pylon-ui/issues/new/choose).

## Contributing

Contributions are welcome. [CONTRIBUTING.md](./CONTRIBUTING.md) covers environment
setup, the test and story conventions, Conventional Commit requirements, and the
pull request process. [ARCHITECTURE.md](./ARCHITECTURE.md) explains how the USWDS
theming actually works and which layer a given change belongs in — read it before
adding or changing a component.

Participation is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md).

Maintainers: see [RELEASING.md](./RELEASING.md) for the release process.

## Security

To report a vulnerability, please use GitHub's private vulnerability reporting
rather than a public issue. See [SECURITY.md](./SECURITY.md) for details and
scope.

## License and attribution

Pylon UI is released under the [MIT License](./LICENSE).

This project builds on, and depends on, two upstream projects:

- [Mantine](https://mantine.dev/) (MIT), which provides the underlying components.
- The [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS), whose
  compiled CSS and class-name conventions Pylon UI applies to those components.

Pylon UI is an independent project. It is **not affiliated with, endorsed by, or
sponsored by** the U.S. General Services Administration, the U.S. Web Design
System team, or the Mantine project. USWDS compliance here is a best-effort
mapping — validate your own application against USWDS and Section 508
requirements before relying on it.
