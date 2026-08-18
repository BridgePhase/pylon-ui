import type { Meta, StoryObj } from "@storybook/react-vite";
import { Code, Group, Stack } from "@mantine/core";
import { useState } from "react";
import { PylonMaskedTextInput } from "../../widgets/form/masked-text-input/masked-text-input";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `TextInputMask` is `PylonMaskedTextInput`. Mantine has no masked input,
 * so this one pairs `react-imask` with Mantine's `InputWrapper` and the USWDS
 * form-group, label, hint, and error class names.
 *
 * It is write-only from the caller's side: rather than `value` / `onChange`, it
 * reports the unmasked value through `refCallback`, which makes it easy to drop
 * into a `react-hook-form` `Controller`.
 */
const meta: Meta<typeof PylonMaskedTextInput> = {
  component: PylonMaskedTextInput,
  title: "USWDS Components/TextInputMask",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: "U.S. telephone number",
    description: "For example, 123-456-7890",
    mask: "000-000-0000",
    placeholder: "___-___-____",
  },
};
export default meta;

type Story = StoryObj<typeof PylonMaskedTextInput>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

/** `error` adds `usa-input--error` and the USWDS error message. */
export const WithError: Story = {
  args: {
    required: true,
    error: "Phone number must be 10 digits long",
  },
};

/** Any `react-imask` pattern works — `0` is a digit, `a` a letter, `*` either. */
export const OtherMasks: Story = {
  render: () => (
    <Stack>
      <PylonMaskedTextInput
        label="Social Security number"
        description="For example, 123-45-6789"
        mask="000-00-0000"
        placeholder="___-__-____"
      />
      <PylonMaskedTextInput
        label="ZIP code"
        description="For example, 20590-0001"
        mask="00000-0000"
        placeholder="_____-____"
      />
      <PylonMaskedTextInput
        label="Date"
        description="mm/dd/yyyy"
        mask="00/00/0000"
        placeholder="__/__/____"
      />
    </Stack>
  ),
};

const MaskedInputWithValue: React.FC = () => {
  const [phone, setPhone] = useState("");
  return (
    <Stack>
      <PylonMaskedTextInput
        label="U.S. telephone number"
        description="For example, 123-456-7890"
        mask="000-000-0000"
        placeholder="___-___-____"
        refCallback={setPhone}
      />
      <Group>
        Unmasked value: <Code>{JSON.stringify(phone)}</Code>
      </Group>
    </Stack>
  );
};

/** `refCallback` receives the value with the mask characters stripped out. */
export const ReadingTheValue: Story = {
  render: () => <MaskedInputWithValue />,
};
