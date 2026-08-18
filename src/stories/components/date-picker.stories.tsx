import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInput } from "@mantine/dates";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `DatePicker` maps onto Mantine's `DateInput`. This mapping is still in
 * progress: `DateInput` gets the USWDS form-group, label, hint, and input
 * styling, but not USWDS's calendar toggle button.
 *
 * For the calendar button and popover, use `PylonDatePicker` — see the
 * Pylon Components / DatePicker story.
 */
const meta: Meta<typeof DateInput> = {
  component: DateInput,
  title: "USWDS Components/DatePicker",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: "Appointment date",
    description: "mm/dd/yyyy",
    valueFormat: "MM/DD/YYYY",
  },
};
export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: "2026-07-04" },
};

export const WithError: Story = {
  args: { error: "Enter a date in the mm/dd/yyyy format" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
