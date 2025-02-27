import { Alert, Breadcrumbs, MantineThemeOverride, Text } from "@mantine/core";
import { UswdsAlertColors, UswdsButtonColors } from "./uswds-colors-contextual";
import { UswdsColorTokens } from "./uswds-colors-tokens";
import breadrumbsClasses from "./components/Breadcrumbs.module.css";
import navLinkClasses from "./components/NavLink.module.css";
import textClasses from "./components/Text.module.css";

import "./uswds-theme.scss";

export const UswdsTheme: MantineThemeOverride = {
  autoContrast: true,
  primaryShade: 5,
  defaultRadius: "0.25rem",
  black: "base",
  colors: Object.assign(UswdsAlertColors, UswdsButtonColors, UswdsColorTokens),
  fontFamily:
    "Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
  lineHeights: { xs: "1.2" },
  primaryColor: "default",
  headings: {
    fontFamily: "Merriweather Web",
    sizes: {
      h1: { fontSize: "2rem" },
    },
  },
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
        root: `usa-alert usa-alert--${[props.color?.toLowerCase()]}  usa-alert--${props.variant}`,
        body: "usa-alert__body",
        title: "usa-alert__heading",
        label: "usa-alert__text",
      }),
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
    Anchor: {
      defaultProps: {
        variant: "default",
        underline: "hover",
      },
    },
    AppShell: {
      classNames: {
        navbar: "usa-sidenav",
      },
    },
    Button: {},
    Text: Text.extend({
      classNames: textClasses,
    }),
    Breadcrumbs: Breadcrumbs.extend({
      classNames: (_theme, props) => ({
        root: `${breadrumbsClasses.pylonBreadcrumbs} usa-breadcrumb usa-breadcrumb--${props.variant ?? "default"}`,
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
    NavLink: {
      classNames: {
        root: `${navLinkClasses.pylonSideNavItem} usa-sidenav__item`,
        // root: `usa-sidenav__item ${}`,
        children: `${navLinkClasses.pylonSideNavItemSubList} usa-sidenav__sublist`,
        section: navLinkClasses.pylonSideNavItemSection,
      },
      defaultProps: {
        childrenOffset: 0,
        defaultOpened: true,
      },
      // styles: (theme: MantineThemeOverride) => ({
      // children: {
      //   background: "#00aa0022",
      //   "> .mantine-NavLink-root": {
      //     paddingLeft: "28px",
      //   },
      //   ".mantine-NavLink-children .mantine-NavLink-children > .mantine-NavLink-root":
      //     {
      //       paddingLeft: "56px",
      //     },
      // },
      // }),
    },
  },
};
