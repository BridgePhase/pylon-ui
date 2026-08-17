# Pylon UI

Pylon UI provides [USWDS design system](https://designsystem.digital.gov/)-styled and compliant components built on the [Mantine component library](https://mantine.dev/).

The project is intended as a convenience for developers that are targeting a USWDS-compliant application with React, but prefer working with the Mantine ecosystem than existing React implementations of USWDS (e.g. [trussworks/react-uswds](https://trussworks.github.io/react-uswds/)).

## Running Sample App

Pylon UI has been written and tested using Node v.24. It contains a `.nvmrc` which specifies this version target, so that if you have the [Node Version Manager (NVM)](https://sukiphan.medium.com/how-to-install-nvm-node-version-manager-on-macos-d9fe432cc7db) tool installed (e.g. via the [Homebrew package manager](https://brew.sh/) with `brew install nvm`) you can switch to it by just running `nvm use`.

```bash
nvm use
npm install
npm run dev
```

## Using Pylon UI in Another Project

Pylon UI is published as a public package on the npm registry, so consuming projects do not need a GitHub Packages token or project-level `.npmrc` registry mapping.

### Import Pylon UI

In your project, install Pylon UI by running: `npm install @bridgephasenpm/pylon-ui`

### Update Your Application Code

Update your project's `App` component to import the required components and styles. Note that Mantine's components are exposed via Pylon UI; your app need not import these directly from Mantine.

```tsx
import { MantineProvider, UswdsTheme, Button } from "@bridgephasenpm/pylon-ui";
import "@mantine/core/styles.css";
import "@bridgephasenpm/pylon-ui/dist/pylon-ui.css";

function App() {
  return (
    <MantineProvider theme={UswdsTheme} forceColorScheme="light">
      // Your app root component
    </MantineProvider>
  );
}
```

## Known Issues

- Mantine Grid container doesn't work with USWDS styles imported (SimpleGrid does work)
- Alerts don't support USWDS slim or headingLevel properties
- DateInput is not USWDS themed yet
  - May require a custom component?

## USWDS Component Targets

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
