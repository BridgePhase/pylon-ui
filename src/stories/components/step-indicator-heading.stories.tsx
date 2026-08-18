import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper, Text } from "@mantine/core";
import { PylonStepperHeading } from "../../widgets/stepper/stepper-heading";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS's step indicator carries a "Step 2 of 5 — Household status" heading above
 * its segments. Mantine's `Stepper` has no equivalent, so that heading is
 * `PylonStepperHeading`. It renders the USWDS counter markup, including the
 * screen-reader-only "Step" text.
 *
 * The segments themselves are the themed `Stepper`; see
 * USWDS Components / StepIndicator.
 */
const STEPS = [
  "Personal information",
  "Household status",
  "Supporting documents",
  "Signature",
  "Review and submit",
];

const meta: Meta<typeof PylonStepperHeading> = {
  component: PylonStepperHeading,
  title: "USWDS Components/StepIndicatorHeading",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    label: STEPS[1],
    stepNumber: 2,
    totalStepCount: STEPS.length,
  },
};
export default meta;

type Story = StoryObj<typeof PylonStepperHeading>;

export const Default: Story = {};

export const FirstStep: Story = {
  args: { label: STEPS[0], stepNumber: 1 },
};

export const LastStep: Story = {
  args: { label: STEPS[STEPS.length - 1], stepNumber: STEPS.length },
};

/**
 * In place: render the heading inside the current `Stepper.Step` so it changes
 * with the active step, as the sample app does.
 */
export const WithStepper: Story = {
  render: () => (
    <Stepper active={1} onStepClick={() => null}>
      {STEPS.map((step, index) => (
        <Stepper.Step key={step} label={step}>
          <PylonStepperHeading
            label={step}
            stepNumber={index + 1}
            totalStepCount={STEPS.length}
          />
        </Stepper.Step>
      ))}
      <Stepper.Completed>
        <Text>All steps complete.</Text>
      </Stepper.Completed>
    </Stepper>
  ),
};
