import { MantineThemeColorsOverride } from "@mantine/core";
import {
  UswdsColorBlue,
  UswdsColorBlueCool,
  UswdsColorCyan,
  UswdsColorGray,
  UswdsColorGreen,
  UswdsColorOrange,
  UswdsColorRed,
  UswdsColorRedVivid,
  UswdsColorYellow,
} from "./uswds-colors-tokens";

// Button colors
export const UswdsColorDefault = UswdsColorBlue;
export const UswdsColorSecondary = UswdsColorRed;
export const UswdsColorAccent = UswdsColorCyan;
export const UswdsColorAccentWarm = UswdsColorOrange;
export const UswdsColorBase = UswdsColorGray;

export const UswdsButtonColors: MantineThemeColorsOverride = {
  default: UswdsColorDefault,
  secondary: UswdsColorSecondary,
  accent: UswdsColorAccent,
  "accent-warm": UswdsColorAccentWarm,
  base: UswdsColorBase,
};

// Alert colors
export const UswdsColorInfo = UswdsColorBlueCool;
export const UswdsColorWarning = UswdsColorYellow;
export const UswdsColorSuccess = UswdsColorGreen;
export const UswdsColorError = UswdsColorRed;
export const UswdsColorEmergency = UswdsColorRedVivid;

export const UswdsAlertColors: MantineThemeColorsOverride = {
  info: UswdsColorInfo,
  warning: UswdsColorWarning,
  success: UswdsColorSuccess,
  error: UswdsColorError,
  emergency: UswdsColorEmergency,
};
