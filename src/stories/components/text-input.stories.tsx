import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `TextInput` maps onto Mantine's `TextInput`. The theme supplies the
 * USWDS form-group, label, hint, input, and error class names, and orders the
 * wrapper as label → hint → error → input to match USWDS.
 *
 * For a masked input, see Pylon Components / TextInputMask.
 */
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "USWDS Components/TextInput",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: "Text input label",
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

/** `description` renders as the USWDS hint, between the label and the input. */
export const WithHint: Story = {
  args: { description: "For example, 123 Main Street" },
};

export const Required: Story = {
  args: { required: true },
};

/** `error` adds `usa-input--error` and the USWDS error message. */
export const WithError: Story = {
  args: { error: "Helpful error message" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Cannot be edited" },
};

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: "Read-only value" },
};
