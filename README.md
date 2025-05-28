# Pylon UI

## Running Sample App

```bash
nvm use
npm install
npm run dev
```

## USWDS Component Targets

Components used in Waves application:

| USWDS             | Mantine             | Progress                                                            |
| ----------------- | ------------------- | ------------------------------------------------------------------- |
| Accordion         | Accordion           | ![](https://img.shields.io/badge/done-83e22b)                       |
| Address           | –                   | ![](https://img.shields.io/badge/need%20alternative-8A2BE2)         |
| Alert             | Alert               | ![](https://img.shields.io/badge/done-83e22b)                       |
| Breadcrumb        | Breadcrumbs\*       | ![](https://img.shields.io/badge/done-83e22b)                       |
| BreadcrumbItem    | Breadcrumbs\*       | ![](https://img.shields.io/badge/done-83e22b)                       |
| Button            | Button              | ![](https://img.shields.io/badge/done-83e22b)                       |
| ButtonGroup       | –                   | ![](https://img.shields.io/badge/unnecessary%3f-2b83e2)             |
| Card              | Card                | ![](https://img.shields.io/badge/done-83e22b)                       |
| CardBody          | Card.Section\*\*    | ![](https://img.shields.io/badge/done-83e22b)                       |
| CardGroup         | –                   | ![](https://img.shields.io/badge/unnecessary%3f-2b83e2)             |
| CardHeader        | Card.Section\*\*    | ![](https://img.shields.io/badge/done-83e22b)                       |
| Checkbox          | Checkbox            | ![](https://img.shields.io/badge/done-83e22b)                       |
| CollectionHeading | –                   | ![](https://img.shields.io/badge/need%20alternative-8A2BE2)         |
| CollectionItem    | –                   | ![](https://img.shields.io/badge/need%20alternative-8A2BE2)         |
| CollectionMeta    | –                   | ![](https://img.shields.io/badge/need%20alternative-8A2BE2)         |
| DatePicker        | DateInput           | ![](https://img.shields.io/badge/in%20progress-e28a2b)              |
| ErrorMessage      | Input.Error         | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Footer            | AppShell.Footer     | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| FormGroup         | Fieldset?           | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Grid              | Grid                | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| GridContainer     | Container           | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Header            | AppShell.Header     | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Icon              | Icon                | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| InputGroup        | FieldSet            | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| InputSuffix       | TextInput           | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Label             | InputWrapper.Label  | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Link              | Anchor              | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Logo              | PylonAppShellFooter | ![](https://img.shields.io/badge/done-83e22b)                       |
| Modal             | Modal               | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| ModalFooter       | Modal.Content       | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| ModalHeading      | Modal.Header        | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| ModalRef          | Modal.Stack         | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| ModalToggleButton | CloseButton?        | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| NavMenuButton     | NavLink             | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Pagination        | Pagination          | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| PrimaryNav        | AppShell.Navbar     | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| RequiredMarker    | –                   | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Select            | Select              | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| StepIndicator     | Stepper             | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| StepIndicatorStep | Stepper.Step        | ![](https://img.shields.io/badge/backlog-e22b83)                    |
| Table             | Table               | ![](https://img.shields.io/badge/done-83e22b)                       |
| Tag               | Badge               | ![](https://img.shields.io/badge/done-83e22b)                       |
| TextInput         | TextInput           | ![](https://img.shields.io/badge/in%20progress-e28a2b)              |
| TextInputMask     | –                   | [react-imask](https://www.npmjs.com/package/react-imask) + `Input`? |
| Title             | Title               | ![](https://img.shields.io/badge/backlog-e22b83)                    |

## React + TypeScript + Vite Template README

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
