# Security Policy

## Supported versions

Pylon UI is pre-`1.0.0`. Only the most recently published version receives
security fixes — there are no long-term support branches. If you are pinned to
an older version, upgrade to the latest release before reporting an issue.

| Version                  | Supported          |
| ------------------------ | ------------------ |
| Latest `0.0.x` release   | :white_check_mark: |
| Any earlier release      | :x:                |

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Use GitHub's private vulnerability reporting instead:

1. Go to the [Security tab](https://github.com/BridgePhase/pylon-ui/security)
   of this repository.
2. Choose **Report a vulnerability** to open a private advisory
   ([direct link](https://github.com/BridgePhase/pylon-ui/security/advisories/new)).

Only repository maintainers can see the report. Please include:

- The Pylon UI version, plus your React and Mantine versions.
- Which component or export is affected.
- Steps to reproduce, ideally as a minimal snippet or repository.
- The impact you believe the issue has.

### What to expect

- We aim to acknowledge a report within **5 business days**.
- If the report is accepted, we will work on a fix, publish a patch release, and
  credit you in the advisory unless you prefer to remain anonymous.
- If we decide the report is not a vulnerability, we will explain why and, where
  it makes sense, suggest opening a public issue instead.

## Scope

Pylon UI is a client-side React component library. It ships no server, performs
no network calls of its own, and stores no credentials. The reports most relevant
to this project are:

- Component APIs that render caller-supplied strings as HTML, or otherwise open
  an injection path.
- Theme or class-name logic that defeats a USWDS accessibility or security
  affordance.
- Build or release pipeline weaknesses that could let unreviewed code reach the
  published npm package.

### Dependency advisories

Dependency updates are automated with [Renovate](./renovate.jsonc), so most
advisories in `@mantine/*`, `@uswds/uswds`, or React are picked up without a
report. If you spot an advisory affecting a Pylon UI dependency that Renovate has
not already opened a PR for, a **normal public issue is fine** — no private
disclosure needed for something already public upstream.
