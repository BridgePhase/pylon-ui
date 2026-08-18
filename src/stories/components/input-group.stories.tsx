import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, Fieldset, Select, Stack, TextInput } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `InputGroup` — a fieldset grouping related fields under a legend — maps
 * onto Mantine's `Fieldset`. `Fieldset` is not themed, so apply the USWDS class
 * names through `classNames`: `usa-fieldset` on the root and `usa-legend` on the
 * legend.
 *
 * `Checkbox.Group` is themed and already emits those class names, so a group of
 * checkboxes needs no extra wrapper.
 */
const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: "USWDS Components/InputGroup",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    classNames: { root: "usa-fieldset", legend: "usa-legend" },
    variant: "unstyled",
  },
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: { legend: "Mailing address" },
  render: (args) => (
    <Fieldset {...args}>
      <Stack gap="sm">
        <TextInput label="Street address" />
        <TextInput label="City" />
        <Select
          label="State"
          data={["Maryland", "Virginia", "West Virginia"]}
        />
        <TextInput label="ZIP code" />
      </Stack>
    </Fieldset>
  ),
};

/** Nested fieldsets — USWDS uses these for multi-part questions. */
export const Nested: Story = {
  args: { legend: "Contact preferences" },
  render: (args) => (
    <Fieldset {...args}>
      <Stack gap="md">
        <TextInput label="Email address" />
        <Fieldset {...args} legend="How should we reach you?">
          <Checkbox.Group label="Select all that apply">
            <Checkbox label="Email" checked onChange={() => undefined} />
            <Checkbox
              label="Phone"
              checked={false}
              onChange={() => undefined}
            />
            <Checkbox label="Mail" checked={false} onChange={() => undefined} />
          </Checkbox.Group>
        </Fieldset>
      </Stack>
    </Fieldset>
  ),
};
