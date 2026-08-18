import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Checkbox` maps onto Mantine's `Checkbox`, and a USWDS checkbox fieldset
 * onto `Checkbox.Group` (which the theme renders as `usa-fieldset` /
 * `usa-legend`). `variant="tiled"` produces the USWDS tiled checkbox.
 *
 * The USWDS theme keys its checked and disabled styling off each checkbox's own
 * props, so pass `checked` and `onChange` to the individual `Checkbox` elements
 * rather than letting `Checkbox.Group` manage them.
 */
const OPTIONS = [
  "Sojourner Truth",
  "Frederick Douglass",
  "Booker T. Washington",
  "George Washington Carver",
];

const CheckboxSet: React.FC<{
  variant?: string;
  withDescription?: boolean;
  disabledOptions?: string[];
}> = ({ variant, withDescription = false, disabledOptions = [] }) => {
  const [values, setValues] = useState<string[]>([OPTIONS[0]]);

  const toggle = (option: string) =>
    setValues(
      values.includes(option)
        ? values.filter((value) => value !== option)
        : [...values, option],
    );

  return (
    <Checkbox.Group label="Select any historical figure" value={values}>
      {OPTIONS.map((option, index) => (
        <Checkbox
          key={option}
          label={option}
          variant={variant}
          checked={values.includes(option)}
          onChange={() => toggle(option)}
          disabled={disabledOptions.includes(option)}
          description={
            withDescription && index === 0
              ? "This is optional text that can be used to describe the label in more detail."
              : undefined
          }
        />
      ))}
    </Checkbox.Group>
  );
};

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "USWDS Components/Checkbox",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <CheckboxSet />,
};

/** A disabled option keeps its label legible but cannot be toggled. */
export const WithDisabledOption: Story = {
  render: () => <CheckboxSet disabledOptions={["George Washington Carver"]} />,
};

/** `variant="tiled"`: each option becomes a bordered tile. */
export const Tiled: Story = {
  render: () => <CheckboxSet variant="tiled" />,
};

/** A tile can carry a description under its label. */
export const TiledWithDescription: Story = {
  render: () => <CheckboxSet variant="tiled" withDescription />,
};
