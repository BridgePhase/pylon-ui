import { MantineThemeOverride } from "@mantine/core";
import "@uswds/uswds/css/uswds.css";
import { UswdsAlertColors, UswdsButtonColors } from "./uswds-colors-contextual";
import { UswdsColorTokens } from "./uswds-colors-tokens";
import classes from "./components/NavLink.module.css";

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
        item: "usa-accordion__heading",
        control: "usa-accordion__button",
      },
      styles: () => ({
        label: {
          fontSize: "1.06rem",
          fontWeight: "unset",
        },
      }),
    },
    Alert: {
      classNames: {
        root: "usa-alert",
        body: "usa-alert__body",
        title: "usa-alert__heading",
        message: "usa-alert__text",
      },
    },
    AppShell: {
      classNames: {
        navbar: "usa-sidenav",
      },
    },
    Button: {},
    Text: {
      defaultProps: {
        lh: 1.5,
      },
    },
    NavLink: {
      classNames: {
        root: `${classes.pylonSideNavItem} usa-sidenav__item`,
        // root: `usa-sidenav__item ${}`,
        children: `${classes.pylonSideNavItemSubList} usa-sidenav__sublist`,
        section: classes.pylonSideNavItemSection,
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
