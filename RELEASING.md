# Releasing

Maintainer reference for publishing Pylon UI. **Contributors do not need this
document** — see the release section of [CONTRIBUTING.md](./CONTRIBUTING.md) for
what merging a PR does. Nothing here needs to be run by hand in the normal case.

## The normal path (automated)

Releases are driven by [release-please](https://github.com/googleapis/release-please)
in [`.github/workflows/release.yaml`](./.github/workflows/release.yaml), which runs
on every push to `main`.

1. **Merge contributor PRs into `main`** with Conventional Commit titles (`feat:`,
   `fix:`, …). PRs are squash-merged, so the PR title becomes the commit message
   release-please reads. The
   [PR Title](./.github/workflows/pr-title.yml) check enforces this.
2. **release-please opens or updates a release PR.** It accumulates every
   releasable change since the last release, bumps the version in `package.json`
   and `.release-please-manifest.json`, and rewrites `CHANGELOG.md`. This PR sits
   open and keeps updating itself — merging feature PRs never publishes anything on
   its own.
3. **Review and merge the release PR** when you are ready to publish. Check that
   the version bump and changelog match what you expect.
4. **The same workflow finishes the job.** On the release commit it creates the
   version tag and GitHub release, then runs lint, tests, and the build, and
   publishes to npm with `npm publish --access public`.

Because publishing is gated on lint, test, and build passing on the released
commit, a broken release commit fails before it reaches npm rather than after.

## Versioning

We follow [Conventional Commits](https://www.conventionalcommits.org/) and
semantic versioning, with one pre-1.0 caveat:

| Commit type | Version effect |
| --- | --- |
| `fix:` | Patch bump |
| `feat:` | Minor bump |
| `feat!:` / `BREAKING CHANGE:` footer | Minor bump **while below 1.0** |
| `chore:`, `docs:`, `refactor:`, `test:`, `style:` | No release |

The project is pre-`1.0.0`, so release-please bumps the **minor** version for
breaking changes and will not move to `1.0.0` on its own. Going 1.0 is a
deliberate decision: it means committing to the current public API in
`src/index.ts`, and it requires a manual version bump plus an update to
`.release-please-manifest.json`.

**Never hand-edit the version** in `package.json` or
`.release-please-manifest.json` outside of that deliberate 1.0 step —
release-please owns those files, and manual edits cause conflicting release PRs.

## Required repository configuration

The automated path depends on these being present:

| Secret / setting | Used by | Purpose |
| --- | --- | --- |
| `NPM_TOKEN` | release, publish-package | npm automation token with publish rights to `@bridgephasenpm`. |
| `RELEASE_PLEASE_APP_ID` | release | GitHub App ID used to open release PRs (a bot token, so release PRs trigger CI). |
| `RELEASE_PLEASE_APP_PRIVATE_KEY` | release | Private key for the same GitHub App. |

If `NPM_TOKEN` expires, the release workflow fails at the publish step *after*
tagging and creating the GitHub release. Rotate the token, then use the manual
workflow below to publish the already-created tag — do not re-run release-please.

## Manual publish (recovery only)

[`.github/workflows/publish-package.yml`](./.github/workflows/publish-package.yml)
is a `workflow_dispatch` job for republishing an existing tag when the automated
publish step failed. Run it from the Actions tab with the release tag (for example
`v0.0.37`).

It checks out that tag, verifies the tag is `v`-prefixed and matches
`package.json`'s version, then lints, tests, builds, and publishes. The version
check exists so a mistyped tag cannot publish the wrong contents.

Use it only for recovery. Publishing a version that release-please has not tagged
puts npm and the changelog out of sync.

## Post-release checks

- Confirm the new version appears on
  [npm](https://www.npmjs.com/package/@bridgephasenpm/pylon-ui).
- Confirm the GitHub release and tag exist, and that `CHANGELOG.md` on `main`
  reflects the release.
- Confirm the [Storybook deploy](./.github/workflows/deploy-storybook.yml)
  succeeded, so the published docs match the released code.
