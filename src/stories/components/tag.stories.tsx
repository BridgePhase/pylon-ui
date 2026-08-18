import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Group } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Tag` maps onto Mantine's `Badge`, which the theme renders as
 * `usa-tag`. `size="big"` produces `usa-tag--big`.
 */
const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "USWDS Components/Tag",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    children: "New",
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

/** `usa-tag--big`. */
export const Big: Story = {
  args: { size: "big", children: "Big" },
};

/** Tags accept any of the theme's colors. */
export const Colors: Story = {
  render: () => (
    <Group gap="sm">
      <Badge>Default</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="base">Base</Badge>
    </Group>
  ),
};
