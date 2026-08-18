import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonLabel } from "../../widgets/form/label/label";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Label` is `PylonLabel`. The themed inputs (`TextInput`, `Select`, …)
 * already render their own USWDS label, so reach for this one when you need a
 * label on something that isn't a Mantine input — pass `htmlFor` to tie it to the
 * control.
 *
 * `required` appends the `RequiredMarker`; see Pylon Components / RequiredMarker.
 */
const meta: Meta<typeof PylonLabel> = {
  component: PylonLabel,
  title: "USWDS Components/Label",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    text: "Text input label",
  },
};
export default meta;

type Story = StoryObj<typeof PylonLabel>;

export const Default: Story = {};

/** `usa-label--error`, to pair with an input in its error state. */
export const Error: Story = {
  args: { text: "Text input error", error: true },
};

/** `hint` renders as `usa-hint` beside the label text. */
export const WithHint: Story = {
  args: { text: "Text input", hint: "(optional)" },
};

export const Required: Story = {
  args: { text: "Text input", required: true },
};

/** `htmlFor` associates the label with a control it doesn't wrap. */
export const ForAControl: Story = {
  args: { text: "Favorite color", htmlFor: "favorite-color" },
  render: (args) => (
    <>
      <PylonLabel {...args} />
      <input className="usa-input" id="favorite-color" name="favorite-color" />
    </>
  ),
};
