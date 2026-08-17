<!--
  Your PR title must be a Conventional Commit — we squash-merge, so the title
  becomes the commit message that release tooling reads.

  Examples:  feat: add stepper component
             fix: correct TextInput description class name
             docs: clarify installation steps

  See CONTRIBUTING.md for the full list of types.
-->

## What this changes

<!-- A sentence or two. If it fixes an open issue, add "Fixes #123". -->

## Why

<!-- The problem being solved, or the USWDS pattern being matched. -->

## How it was verified

<!--
  For component changes, say what you checked and where — a Storybook story, the
  sample app's side-by-side comparison, a specific browser, screen reader output.
  Screenshots or before/after images help a lot for styling changes.
-->

## Checklist

- [ ] PR title is a valid Conventional Commit
- [ ] `npm run lint` passes
- [ ] `npm test` passes
- [ ] `npm run build` passes
- [ ] Added or updated a **story** in `src/stories/` for each meaningful state
- [ ] Added or updated a **`*.spec.tsx`** test next to the component
- [ ] New components are exported so they reach `src/index.ts`
- [ ] Did **not** hand-edit the version in `package.json` or
      `.release-please-manifest.json`

## Notes for reviewers

<!--
  Optional. Anything you want a reviewer to look at closely: a layer choice from
  ARCHITECTURE.md, a USWDS modifier that has no Mantine equivalent, a known
  limitation you hit, or a follow-up you deliberately left out of scope.
-->
