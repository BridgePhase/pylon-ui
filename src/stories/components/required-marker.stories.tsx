import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonLabel } from "../../widgets/form/label/label";
import { RequiredMarker } from "../../widgets/form/required-marker/required-marker";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `RequiredMarker` is `RequiredMarker` — the `<abbr title="required">*</abbr>`
 * that USWDS puts after a required field's label. It has no equivalent in
 * Mantine, and it takes no props.
 *
 * `PylonLabel required` renders it for you, which is how you'll usually reach it.
 */
const meta: Meta<typeof RequiredMarker> = {
  component: RequiredMarker,
  title: "USWDS Components/RequiredMarker",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof RequiredMarker>;

export const Default: Story = {};

/** In place: `PylonLabel required` appends the marker after the label text. */
export const OnALabel: Story = {
  render: () => <PylonLabel text="Text input label" required />,
};

/** Marking a fieldset legend, where no Mantine input renders one for you. */
export const OnALegend: Story = {
  render: () => (
    <fieldset className="usa-fieldset">
      <legend className="usa-legend">
        Mailing address
        <RequiredMarker />
      </legend>
      <input className="usa-input" aria-label="Mailing address" />
    </fieldset>
  ),
};
