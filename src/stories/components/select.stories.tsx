import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Select` maps onto Mantine's `Select`. The theme supplies the USWDS
 * form-group, label, hint, and error class names, defaults the placeholder to
 * `- Select -`, and orders the wrapper as label → hint → error → input to match
 * USWDS.
 */
const OPTIONS = [
  { label: "Option A", value: "value1" },
  { label: "Option B", value: "value2" },
  { label: "Option C", value: "value3" },
  {
    label:
      "Option of extra length to demonstrate how content like this will look different",
    value: "valueBIG",
  },
];

const meta: Meta<typeof Select> = {
  component: Select,
  title: "USWDS Components/Select",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: "Select label",
    data: OPTIONS,
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

/** `description` renders as the USWDS hint, above the input. */
export const WithHint: Story = {
  args: { description: "Choose the option that applies to you" },
};

export const WithValue: Story = {
  args: { defaultValue: "value2" },
};

export const WithError: Story = {
  args: { error: "Helpful error message" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "value1" },
};
