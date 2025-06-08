import cx from "clsx";
import {
  Alert,
  Anchor,
  Badge,
  Breadcrumbs,
  Burger,
  Button,
  Card,
  Checkbox,
  Grid,
  GridCol,
  MantineThemeOverride,
  Modal,
  Table,
  TableScrollContainer,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { UswdsAlertColors, UswdsButtonColors } from "./uswds-colors-contextual";
import { UswdsColorTokens } from "./uswds-colors-tokens";
import { DateInput } from "@mantine/dates";
import breadrumbsClasses from "./components/Breadcrumbs.module.css";
import navLinkClasses from "./components/NavLink.module.css";
import textClasses from "./components/Text.module.css";
import cardClasses from "./components/Card.module.css";
import checkboxClasses from "./components/Checkbox.module.css";

import "./uswds-theme.scss";

export const UswdsTheme: MantineThemeOverride = {
  // Colors
  autoContrast: true,
  black: "base",
  colors: Object.assign(UswdsAlertColors, UswdsButtonColors, UswdsColorTokens),
  primaryColor: "default",
  primaryShade: 5,

  // Typography
  fontFamily:
    "Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
  // Based on normalized size for Source Sans Pro: https://designsystem.digital.gov/design-tokens/typesetting/overview/#fonts-with-normalization-applied-2
  // Standard size is "md", other sizes are scaled based on Mantine font size ratios.
  fontSizes: {
    xs: "0.77rem",
    sm: "0.83rem",
    md: "1.06rem",
    lg: "1.23rem",
    xl: "1.51rem",
  },
  lineHeights: { xs: "1.2" },
  headings: {
    fontFamily: "Merriweather Web",
    sizes: {
      h1: { fontSize: "46.8px" /* .font-heading-3xl */ },
      h2: { fontSize: "31.2px" /* .font-heading-xl  */ },
      h3: { fontSize: "21.5px" /* .font-heading-lg  */ },
      h4: { fontSize: "16.6px" /* .font-heading-md  */ },
      h5: { fontSize: "14.6px" /* .font-heading-xs  */ },
      h6: { fontSize: "12.7px" /* .font-heading-3xs */ },
    },
  },

  // Component Styling
  defaultRadius: "0.25rem",
  components: {
    Accordion: {
      defaultProps: {
        chevron: null,
      },
      classNames: {
        root: "usa-accordion",
        item: "usa-accordion__heading",
        control: "usa-accordion__button",
        content: "usa-accordion__content",
        label: "usa-accordion__label",
      },
      styles: () => ({
        item: {
          border: 0,
        },
        label: {
          fontSize: "1.06rem",
          fontWeight: "unset",
        },
      }),
    },

    Alert: Alert.extend({
      classNames: (_theme, props) => ({
        root: `usa-alert usa-alert--${[
          props.color?.toLowerCase(),
        ]}  usa-alert--${props.variant}`,
        body: "usa-alert__body",
        title: "usa-alert__heading",
        label: "usa-alert__text",
      }),
      defaultProps: {
        radius: 0,
      },
      styles: () => ({
        root: {
          padding: 0,
          borderTop: 0,
          borderRight: 0,
          borderBottom: 0,
        },
        title: {
          marginBottom: "-2px",
          overflow: "visible",
        },
        label: {
          overflow: "visible",
          display: "inline",
        },
        message: {
          fontSize: "1.06rem",
          fontWeight: "unset",
        },
      }),
    }),

    Anchor: Anchor.extend({
      defaultProps: {
        variant: "default",
        underline: "hover",
      },
      classNames: (_theme, props) => ({
        root: cx({
          ["usa-link"]: true,
          ["usa-link--external"]:
            props.variant === "external" || props.variant === "external-alt",
          ["usa-link--alt"]: props.variant === "external-alt",
        }),
      }),
    }),

    AppShell: {
      classNames: {
        navbar: "usa-sidenav",
        header: "usa-header usa-header--basic site-header",
      },
    },

    AppShellHeader: {
      defaultProps: {
        component: "header",
      },
    },

    Badge: Badge.extend({
      classNames: (_theme, props) => ({
        root: cx({
          ["usa-tag"]: true,
          ["usa-tag--big"]: props.size === "big",
        }),
      }),
      styles: {
        root: {
          fontWeight: "inherit",
          border: "inherit",
          letterSpacing: "inherit",
          display: "inline",
        },
      },
    }),

    Breadcrumbs: Breadcrumbs.extend({
      classNames: (_theme, props) => ({
        root: `${
          breadrumbsClasses.pylonBreadcrumbs
        } usa-breadcrumb usa-breadcrumb--${props.variant ?? "default"}`,
        breadcrumb: `usa-breadcrumb__list-item ${breadrumbsClasses.pylonBreadcrumbItem} breadcrumb-${props.variant}`,
      }),
      defaultProps: {
        separator: "",
        variant: "default",
      },
      styles: () => ({
        separator: {
          display: "none",
        },
      }),
    }),

    Button: Button.extend({
      classNames: (_theme, props) => ({
        root: cx({
          ["usa-button"]: true,
          ["usa-button--unstyled"]: props.unstyled,
          ["usa-button--big"]: props.size === "xl",
          [`usa-button--${props.variant}`]: props.variant !== "outline-inverse",
          [`usa-button--outline usa-button--inverse`]:
            props.variant === "outline-inverse",
        }),
      }),
      styles: {
        root: {
          height: "39.2px",
        },
        inner: {},
        label: {
          overflow: "visible",
          whiteSpace: "nowrap",
        },
      },
    }),

    Burger: Burger.extend({
      classNames: {
        root: "usa-menu-btn",
      },
    }),

    Card: Card.extend({
      classNames: () => ({
        root: "usa-card__container",
        section: `usa-card__body ${cardClasses.pylonCardBody}`,
      }),
      defaultProps: {
        w: "100%",
        variant: "default",
      },
    }),

    Checkbox: Checkbox.extend({
      classNames: () => ({
        root: checkboxClasses.pylonCheckboxRoot,
        label: checkboxClasses.pylonCheckboxLabel,
        input: checkboxClasses.pylonCheckboxInput,
        icon: checkboxClasses.pylonCheckboxIcon,
      }),
    }),

    CheckboxGroup: Checkbox.Group.extend({
      classNames: {
        root: `usa-fieldset ${checkboxClasses.pylonCheckboxGroup}`,
        label: `usa-legend ${checkboxClasses.pylonCheckboxLegend}`,
      },
    }),

    DateInput: DateInput.extend({
      classNames: () => ({
        root: "usa-form-group",
        label: "usa-label",
        description: "usa-hint",
        wrapper: "usa-date-picker",
        input: "usa-input",
      }),
      defaultProps: {
        w: "inherit",
      },
    }),

    Grid: Grid.extend({
      classNames: () => ({
        root: "grid-container",
        col: "grid-col",
      }),
      defaultProps: {
        gutter: 0,
      },
    }),
    GridCol: GridCol.extend({
      defaultProps: {
        span: 1,
      },
    }),

    Modal: Modal.extend({
      classNames: {
        root: "usa-modal",
        inner: "usa-modal__content",
        content: "usa-modal__main",
        header: "",
        overlay: "",
        title: "usa-modal__heading",
        body: "",
        close: "usa-button usa-modal__close",
      },
      styles: () => ({
        content: {
          maxHeight: "fit-content",
          paddingTop: 32,
          paddingBottom: 32,
        },
        title: {
          fontWeight: 700,
        },
      }),
    }),

    NavLink: {
      classNames: {
        root: `${navLinkClasses.pylonSideNavItem} usa-sidenav__item`,
        children: `${navLinkClasses.pylonSideNavItemSubList} usa-sidenav__sublist`,
        section: navLinkClasses.pylonSideNavItemSection,
      },
      defaultProps: {
        childrenOffset: 0,
        defaultOpened: true,
      },
    },

    Table: Table.extend({
      classNames: (_theme, props) => ({
        table: cx({
          [`usa-table`]: true,
          ["usa-table--striped"]: props.striped,
          ["usa-table--borderless"]: !props.withTableBorder,
          ["usa-table--sticky-header"]: props.stickyHeader,
          ["usa-table--stacked"]: props.verticalSpacing === "stacked",
        }),
      }),
      styles: (_theme, props) => ({
        caption: {
          color: "inherit",
        },
        table: {
          border: props.verticalSpacing === "stacked" ? "none" : undefined,
        },
        thead: {
          top: props.stickyHeaderOffset,
        },
      }),
      defaultProps: {
        captionSide: "top",
        withTableBorder: true,
        withColumnBorders: true,
        w: "inherit",
      },
    }),

    TableScrollContainer: TableScrollContainer.extend({
      classNames: () => ({
        scrollContainer: "usa-table-container--scrollable",
      }),
      defaultProps: {
        minWidth: 0,
        type: "native",
        tabIndex: 0,
      },
    }),

    Text: Text.extend({
      classNames: textClasses,
    }),

    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        root: cx({
          ["usa-form-group"]: true,
          ["usa-form-group--error"]: props.error,
        }),
        label: cx({
          ["usa-label"]: true,
          ["usa-label--error"]: props.error,
        }),
        input: cx({
          ["usa-input"]: true,
          ["usa-input--error"]: props.error,
        }),
        error: "usa-error-message",
      }),
      defaultProps: {
        leftSectionProps: {
          className: "usa-input-prefix",
          style: {
            marginTop: "8px",
            height: "38px",
            borderRadius: 0,
          },
        },
        rightSectionProps: {
          className: "usa-input-suffix",
          style: {
            marginTop: "8px",
            marginRight: "15px",
            height: "38px",
            borderRadius: 0,
          },
        },
      },
      styles: {
        root: {
          display: "flex",
          flexDirection: "column",
        },
        label: {
          order: -2,
        },
        error: {
          order: -1,
          fontSize: "1.06rem",
        },
        input: {
          order: 2,
        },
      },
    }),

    Title: Title.extend({
      styles: {
        root: {
          fontSize: "1.17em",
          lineHeight: "1.6em",
          marginBlockEnd: "1em",
          marginBlockStart: "1em",
        },
      },
    }),

    Tooltip: {
      defaultProps: {
        withArrow: true,
      },
    },
  },
};
