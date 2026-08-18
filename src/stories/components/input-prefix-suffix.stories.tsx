import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "@mantine/core";
import { IconCreditCard, IconSearch } from "@tabler/icons-react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `InputSuffix` (and its prefix counterpart) map onto `TextInput`'s
 * `rightSection` and `leftSection`. The theme wires those sections up with the
 * `usa-input-suffix` and `usa-input-prefix` class names, so text or an icon
 * dropped into them is styled correctly.
 */
const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "USWDS Components/InputSuffix",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: "Input label",
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const PrefixAsText: Story = {
  args: { leftSection: "cvc" },
};

export const PrefixAsIcon: Story = {
  args: { leftSection: <IconCreditCard /> },
};

export const SuffixAsText: Story = {
  args: { rightSection: "lbs." },
};

export const SuffixAsIcon: Story = {
  args: { rightSection: <IconSearch /> },
};

export const PrefixAndSuffix: Story = {
  args: { leftSection: "$", rightSection: ".00" },
};
