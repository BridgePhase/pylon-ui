# Contributing to Pylon UI

Thanks for contributing! Pylon UI is a React component library that wraps
[Mantine](https://mantine.dev/) with a [USWDS](https://designsystem.digital.gov/)
theme. This guide covers how to set up your environment, the conventions we
follow, and what happens to your changes after they're merged.

## Prerequisites

- **Node v24** — the version is pinned in `.nvmrc`. If you use
  [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the repo root.
- **npm** — this project uses npm with a committed `package-lock.json`, and CI
  installs with `npm ci`. Please use npm (not yarn/pnpm) so the lockfile stays
  consistent.

## Getting started

```bash
nvm use            # switch to Node 24
npm install        # install dependencies
npm run dev        # run the sample app (Vite dev server)
npm run storybook  # browse components in isolation (http://localhost:6006)
```

## Project layout

| Path | What it holds |
|---|---|
| `src/widgets/` | The components. Each component's tests live next to it as `*.spec.tsx`. |
| `src/stories/` | Storybook stories, mirroring the widget structure. |
| `src/themes/` | The USWDS Mantine theme. |
| `src/index.ts` | The public entry point — exports everything consumers can import. |
| `src/App.tsx`, `src/sample-app/`, `src/main.tsx` | The local sample app for development. Not part of the published package (only `dist/` is published). |

## Development workflow

Before opening a PR, make sure all three of these pass locally — they're exactly
what CI runs:

```bash
npm run lint   # ESLint (flat config, zero warnings allowed)
npm test       # Vitest test suite
npm run build  # tsc type-check + Vite library build
```

Useful extras:

- `npm run test:watch` — re-run tests as you edit.
- `npm run test:coverage` — test run with a coverage report.

### Tests

Tests use **Vitest** + **React Testing Library**, and reuse Storybook stories as
fixtures via Storybook's `composeStory` ("portable stories"). This keeps tests
and stories from drifting apart — a story is both the thing you preview in
Storybook and the input to its test. The shared setup in `vitest.setup.ts`
applies the same `MantineProvider`/USWDS decorator that Storybook uses, so
composed stories render the same way in tests.

### Adding or changing a component

1. Add/edit the component under `src/widgets/`.
2. Export it from the appropriate index so it reaches `src/index.ts` (otherwise
   consumers can't import it).
3. Add a **story** under `src/stories/` for each meaningful state.
4. Add a **`*.spec.tsx`** test next to the component (compose the story you wrote
   and assert behavior).

## Commit messages (Conventional Commits)

We use [Conventional Commits](https://www.conventionalcommits.org/). This is not
just style — our release tooling (release-please) reads commit messages to decide
the next version and to generate the changelog. Use the type that matches your
change:

| Prefix | Meaning | Effect on version |
|---|---|---|
| `feat:` | A new feature | Minor bump |
| `fix:` | A bug fix | Patch bump |
| `feat!:` or a `BREAKING CHANGE:` footer | Breaking change | See note below |
| `chore:`, `docs:`, `refactor:`, `test:`, `style:` | Housekeeping | No release |

Examples:

```
feat: add date picker variant
fix: correct TextInput description class name
docs: clarify installation steps
```

> **Note:** We're currently pre-`1.0.0`. Below 1.0, a breaking change bumps the
> **minor** version (not major) by default — release-please won't jump to
> `1.0.0` on its own.

## Opening a pull request

1. Branch off `main` and make your changes.
2. Commit using the conventions above. **Do not edit the version** in
   `package.json` or `.release-please-manifest.json` — release tooling owns those.
3. Push and open a PR against `main`. The **CI** workflow runs lint, tests, and
   the build on your PR.
4. We **squash-merge** PRs, which means the **PR title becomes the commit message**
   release-please reads — so give your PR a Conventional Commit title (e.g.
   `feat: add stepper component`). A **PR Title** check validates this
   automatically and will fail until the title is a valid Conventional Commit.
5. A maintainer reviews and merges once CI is green.

## How releases happen (you don't have to do anything)

Releases are automated with [release-please](https://github.com/googleapis/release-please):

- Merging your PR to `main` does **not** publish anything immediately.
- release-please opens/maintains a single **release PR** that accumulates all
  merged changes, bumps the version, and updates `CHANGELOG.md`.
- When maintainers merge that release PR, the version is tagged, a GitHub release
  is created, and the package is built and published.

So as a contributor: write good Conventional Commit messages, make sure lint /
tests / build pass, and the versioning and publishing are handled for you.
