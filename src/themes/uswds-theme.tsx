import { MantineThemeOverride } from "@mantine/core";
import "@uswds/uswds/css/uswds.css";
import { UswdsAlertColors, UswdsButtonColors } from "./uswds-colors-contextual";
import { UswdsColorTokens } from "./uswds-colors-tokens";

export const UswdsTheme: MantineThemeOverride = {
  //  dir: 'ltr' | 'rtl';
  primaryShade: 5,
  //  focusRing: 'auto' | 'always' | 'never';
  defaultRadius: "0.25rem",
  //  loader: LoaderType;
  colorScheme: "light",
  //  white: string;
  black: "base",
  colors: Object.assign(UswdsAlertColors, UswdsButtonColors, UswdsColorTokens),
  fontFamily:
    "Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
  lineHeight: 1.2,
  //  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  //  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: "default",
  //  respectReducedMotion: boolean;
  //  cursorType: 'default' | 'pointer';
  //  defaultGradient: MantineGradient;
  //  fontSizes: MantineSizes;
  //  radius: MantineSizes;
  //  spacing: MantineSizes;
  //  breakpoints: MantineSizes;
  //  shadows: Record<MantineSize, string>;
  headings: {
    fontFamily: "Merriweather Web",
    sizes: {
      h1: { fontSize: "2rem" },
    },
  },
  //  other: MantineThemeOther;
  //  activeStyles: CSSObject;
  //  datesLocale: string;
  components: {
    Accordion: {
      defaultProps: {
        chevron: null,
      },
      classNames: {
        item: "usa-accordion__heading",
        control: "usa-accordion__button",
      },
      styles: (_theme) => ({
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
    Button: {},
    Text: {
      defaultProps: {
        lh: 1.5,
      },
    },
    Navbar: {
      styles: (theme) => ({
        root: {
          "> .mantine-NavLink-root:first-child": {
            borderTop: "1px solid gray",
          },
          "> .mantine-NavLink-root[data-active]": {
            paddingLeft: "8px",
            "&:before": {
              width: "4px",
              height: "150%",
              background: `#005ea2`,
              content: `""`,
              borderRadius: "2px",
              position: "relative",
              left: "-7px",
            },
          },
          "> div > .mantine-NavLink-children": {
            outline: "2px solid orange",
          },
        },
      }),
    },
    NavLink: {
      defaultProps: {
        childrenOffset: 0,
        defaultOpened: true,
      },
      styles: (theme) => ({
        root: {
          borderBottom: "1px solid gray",
          "&[data-active]": {
            background: "transparent",
            fontWeight: "bold",
          },
        },
        rightSection: {
          display: "none",
        },
      }),
    },
  },
  globalStyles: (_theme) => ({
    ".mantine-NavLink-children > .mantine-NavLink-root": {
      paddingLeft: "28px",
    },
    ".mantine-NavLink-children .mantine-NavLink-children > .mantine-NavLink-root":
      {
        paddingLeft: "56px",
      },
  }),
  //  focusRingStyles: MantineFocusRingStyles;
};
