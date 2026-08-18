import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group, Stack, Text } from "@mantine/core";
import {
  IconAlertTriangle,
  IconCalendarEvent,
  IconCheck,
  IconChevronRight,
  IconSearch,
} from "@tabler/icons-react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Icon` is a sprite of icons with the `usa-icon` class. Pylon UI ships
 * `@tabler/icons-react` instead of the sprite, so an icon here is a Tabler icon
 * with `className="usa-icon"` — that class carries the USWDS sizing and
 * `currentColor` fill, and the `usa-icon--size-*` classes scale it.
 */
const meta: Meta<typeof IconSearch> = {
  component: IconSearch,
  title: "USWDS Components/Icon",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    className: "usa-icon",
  },
};
export default meta;

type Story = StoryObj<typeof IconSearch>;

export const Default: Story = {};

/** The `usa-icon--size-*` classes step the icon up from its default size. */
export const Sizes: Story = {
  render: () => (
    <Group align="center" gap="md">
      {[3, 4, 5, 6, 7, 8, 9].map((size) => (
        <Stack key={size} align="center" gap={4}>
          <IconSearch className={`usa-icon usa-icon--size-${size}`} />
          <Text size="xs">size-{size}</Text>
        </Stack>
      ))}
    </Group>
  ),
};

/** Icons inherit the surrounding text color through `currentColor`. */
export const InheritsColor: Story = {
  render: () => (
    <Stack gap="xs">
      <Group c="error.5" gap="xs">
        <IconAlertTriangle className="usa-icon" />
        <Text>Something needs your attention</Text>
      </Group>
      <Group c="success.5" gap="xs">
        <IconCheck className="usa-icon" />
        <Text>Saved</Text>
      </Group>
    </Stack>
  ),
};

/** A few icons commonly paired with USWDS patterns. */
export const CommonIcons: Story = {
  render: () => (
    <Group gap="lg">
      <IconSearch className="usa-icon" />
      <IconCalendarEvent className="usa-icon" />
      <IconChevronRight className="usa-icon" />
      <IconCheck className="usa-icon" />
      <IconAlertTriangle className="usa-icon" />
    </Group>
  ),
};
