# Pylon UI

Pylon UI contains the frontend React components used as part of the standard BridgePhase Tech Challenge toolkit.

Pylon UI is being significantly enhanced to allow React development using the [Mantine component library](https://mantine.dev/) but with a custom theme applied which applies styling and DOM class name conventions which adhere to the [USWDS design system](https://designsystem.digital.gov/). The motivation for this is that Mantine has proven to be a more convenient library for quickly standing up frontends than existing React implementations of USWDS (e.g. [trussworks/react-uswds](https://trussworks.github.io/react-uswds/)).

## Running Sample App

Pylon UI has been written and tested using Node v.24. It contains a `.nvmrc` which specifies this version target, so that if you have the [Node Version Manager (NVM)](https://sukiphan.medium.com/how-to-install-nvm-node-version-manager-on-macos-d9fe432cc7db) tool installed (e.g. via the [Homebrew package manager](https://brew.sh/) with `brew install nvm`) you can switch to it by just running `nvm use`.

```bash
nvm use
npm install
npm run dev
```

## Using Pylon UI in Another Project

So as to not leave Pylon UI's source open to the world, to use it in your project you'll hae to set up a Personal Access Token (PAT) with permission to access repositories owned by the [BridgePhase organization in GitHub](https://github.com/BridgePhase/).

**Note:** If you are not adding Pylon UI to a new project, but joining a project that is already using it, you should only have to complete the first two sections to set up your local environment.

### 1. Create a Personal Access Token (PAT)

First we will create a PAT so that our local NPM can authenticate with GitHub (and verify that we are in the BridgePhase organization).

- From your GitHub Profile page, open [Developer settings](https://github.com/settings/apps)
- Expand **Personal Access Tokens** and open [Tokens (classic)](https://github.com/settings/tokens)
- Click **Generate new token** and select **Generate new token (classic)**
- If prompted, reauthenticate with GitHub
- Enter a note describing that this token will be used to read packages, along with a reasonable expiration date
- Check the **read:packages** permission and click **Generate token**
- When prompted, copy the value of your token (this will be your only chance to see it from GitHub, and you will need it later)

### 2. Configure your Environment to Use Your PAT

Next we will configure NPM to use our new token when accessing the GitHub package registry.

- Open your `~/.npmrc` file
- Add a new line: `//npm.pkg.github.com/:_authToken=MY_PAT_TOKEN`, where `MY_PAT_TOKEN` is replaced with the value you copied from GitHub above.

### 3. Configure your Project to Use the GitHub Registry

Now we'll tell our project to use the GitHub package repository for BridgePhase packages.

- In your project, in the same directory as your `package.json` file, create a new `.npmrc` file
- In the new `.npmrc` add a line: `@bridgephase:registry=https://npm.pkg.github.com`

### 4. Import Pylon into your Project

Now you should be able import projects in the `@bridgephase` namespace via the GitHub package registry.

- In your project, import Pylon UI by running: `npm install @bridgephase/pylon-ui`

## Known Issues

- Mantine Grid container doesn't work with USWDS styles imported (SimpleGrid does work)
- Alerts don't support USWDS slim or headingLevel properties
- DateInput is not USWDS themed yet
  - May require a custom component?

## USWDS Component Targets

Components used in Waves application:

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

## Packaging Release

To package a new release of Pylon UI to the GitHub Packages Registry:

- Merge contributor pull requests into `main` using conventional commit messages, such as `fix: correct button styles` or `feat: add date picker variant`
- The [Release](https://github.com/BridgePhase/pylon-ui/actions/workflows/release.yaml) action will automatically create or update a release pull request
- Review and merge the release pull request when maintainers are ready to publish
- Release Please creates the matching version tag and GitHub release
- The same action builds and publishes the package to GitHub Packages
