import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Group } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `ButtonGroup` maps onto Mantine's `Group`. `Group` is not themed, so add
 * the USWDS class names yourself: `usa-button-group`, plus
 * `usa-button-group--segmented` for the segmented form.
 */
const meta: Meta<typeof Group> = {
  component: Group,
  title: "USWDS Components/ButtonGroup",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: { className: "usa-button-group", gap: "sm" },
  render: (args) => (
    <Group {...args}>
      <Button variant="outline">Back</Button>
      <Button variant="primary">Continue</Button>
    </Group>
  ),
};

/**
 * `usa-button-group--segmented`: buttons sit flush against one another, so the
 * group needs no gap.
 */
export const Segmented: Story = {
  args: {
    className: "usa-button-group usa-button-group--segmented",
    gap: 0,
  },
  render: (args) => (
    <Group {...args}>
      <Button variant="primary">Map</Button>
      <Button variant="outline">Satellite</Button>
      <Button variant="outline">Hybrid</Button>
    </Group>
  ),
};
