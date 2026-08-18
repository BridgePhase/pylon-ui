import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonProps, Flex } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Button` maps onto Mantine's `Button`. The USWDS style modifier is the
 * Mantine `variant`, `size="xl"` produces `usa-button--big`, and `unstyled`
 * produces `usa-button--unstyled`.
 */
const meta: Meta<typeof Button> = {
  component: Button,
  title: "USWDS Components/Button",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    type: "button",
    children: "Click me",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

/** Every button state side by side, so the variant's disabled styling is visible. */
const renderStates = (args: ButtonProps) => (
  <Flex
    className={
      args.variant === "outline-inverse" ? "bg-base-darkest padding-1" : ""
    }
    style={{ width: "fit-content" }}
    align="center"
    gap="xs"
  >
    <Button {...args}>Default</Button>
    <Button {...args} disabled>
      Disabled
    </Button>
    <Button {...args} aria-disabled="true">
      aria-disabled
    </Button>
  </Flex>
);

export const Primary: Story = {
  args: { variant: "primary" },
  render: renderStates,
};

export const Secondary: Story = {
  args: { variant: "secondary" },
  render: renderStates,
};

export const AccentCool: Story = {
  args: { variant: "accent-cool" },
  render: renderStates,
};

export const AccentWarm: Story = {
  args: { variant: "accent-warm" },
  render: renderStates,
};

export const Base: Story = {
  args: { variant: "base" },
  render: renderStates,
};

export const Outline: Story = {
  args: { variant: "outline" },
  render: renderStates,
};

/** `usa-button--outline usa-button--inverse`, for use on a dark background. */
export const OutlineInverse: Story = {
  args: { variant: "outline-inverse" },
  render: renderStates,
};

/** `usa-button--unstyled`: renders as a plain text link. */
export const Unstyled: Story = {
  args: { variant: "primary", unstyled: true },
  render: renderStates,
};

/** `size="xl"` produces the USWDS big button. */
export const Big: Story = {
  args: { variant: "primary", size: "xl" },
  render: renderStates,
};
