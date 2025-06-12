import type { Meta, StoryObj } from "@storybook/react-vite";
import { SampleApp } from "../../sample-app/sample-app";
import { DEFAULT_THEME } from "@mantine/core";
import { UswdsTheme } from "../../themes/uswds-theme";
import {
  UswdsAlertColors,
  UswdsButtonColors,
} from "../../themes/uswds-colors-contextual";

const meta: Meta<typeof SampleApp> = {
  component: SampleApp,
  title: "Themes/Default",
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
export default meta;

type Story = StoryObj<typeof SampleApp>;

export const Default: Story = {
  args: { theme: DEFAULT_THEME },
};

export const USWDS: Story = {
  args: {
    theme: UswdsTheme,
    alertColors: UswdsAlertColors,
    buttonColors: UswdsButtonColors,
  },
};
