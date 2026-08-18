import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Stack, TextInput } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `ErrorMessage` maps onto Mantine's `Input.Error`. Most of the time you
 * don't render it yourself — the themed inputs (`TextInput`, `Select`,
 * `DateInput`) already emit it with the `usa-error-message` class when you pass
 * an `error` prop. Use `Input.Error` directly for errors that don't belong to a
 * single field.
 */
const meta: Meta<typeof Input.Error> = {
  component: Input.Error,
  title: "USWDS Components/ErrorMessage",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Input.Error>;

/** Standalone: add `usa-error-message` yourself when rendering `Input.Error` directly. */
export const Standalone: Story = {
  args: {
    className: "usa-error-message",
    children: "Helpful error message",
  },
};

/** Rendered by a field: `TextInput`'s `error` prop already applies the class. */
export const OnAField: Story = {
  render: () => (
    <Stack>
      <TextInput label="Text input label" error="Helpful error message" />
    </Stack>
  ),
};
