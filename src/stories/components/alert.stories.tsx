import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Anchor } from "@mantine/core";
import {
  UswdsAlertVariants,
  UswdsContexts,
} from "../../themes/uswds-constants";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Alert` maps onto Mantine's `Alert`. The USWDS status (info, warning,
 * success, error, emergency) is the Mantine `color`, and the USWDS modifier
 * (slim, no-icon) is the Mantine `variant`.
 */
const ALERT_TEXT = (
  <>
    Lorem ipsum dolor sit amet, <Anchor href="#">consectetur adipiscing</Anchor>{" "}
    elit, sed do eiusmod.
  </>
);

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "USWDS Components/Alert",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    children: ALERT_TEXT,
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { color: UswdsContexts.Info, title: "Informative status" },
};

export const Warning: Story = {
  args: { color: UswdsContexts.Warning, title: "Warning status" },
};

export const Success: Story = {
  args: { color: UswdsContexts.Success, title: "Success status" },
};

export const Error: Story = {
  args: { color: UswdsContexts.Error, title: "Error status" },
};

export const Emergency: Story = {
  args: { color: UswdsContexts.Emergency, title: "Emergency status" },
};

/** `usa-alert--slim`: no heading, reduced padding. */
export const Slim: Story = {
  args: { color: UswdsContexts.Info, variant: UswdsAlertVariants.Slim },
};

/** `usa-alert--no-icon`: drops the status icon. */
export const NoIcon: Story = {
  args: { color: UswdsContexts.Info, variant: UswdsAlertVariants.NoIcon },
};
