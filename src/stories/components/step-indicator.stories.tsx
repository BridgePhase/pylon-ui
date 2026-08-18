import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper, Text } from "@mantine/core";
import { useState } from "react";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `StepIndicator` maps onto Mantine's `Stepper`, and `StepIndicatorStep`
 * onto `Stepper.Step`. The theme renders the segments as
 * `usa-step-indicator__segment` and hides Mantine's step icons and separators.
 *
 * USWDS also shows a "Step 2 of 5" heading above the segments — that part is
 * `PylonStepperHeading`; see Pylon Components / StepIndicatorHeading.
 */
const STEPS = [
  "Personal information",
  "Household status",
  "Supporting documents",
  "Signature",
  "Review and submit",
];

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "USWDS Components/StepIndicator",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const renderSteps = (args: { active: number }) => (
  <Stepper {...args} onStepClick={() => null}>
    {STEPS.map((step) => (
      <Stepper.Step key={step} label={step}>
        <Text>{step}</Text>
      </Stepper.Step>
    ))}
    <Stepper.Completed>
      <Text>All steps complete.</Text>
    </Stepper.Completed>
  </Stepper>
);

export const FirstStep: Story = {
  args: { active: 0 },
  render: renderSteps,
};

/** Two steps complete, the third current, the rest not started. */
export const InProgress: Story = {
  args: { active: 2 },
  render: renderSteps,
};

export const LastStep: Story = {
  args: { active: STEPS.length - 1 },
  render: renderSteps,
};

/** Past the last step: `Stepper.Completed` renders instead of a step body. */
export const Complete: Story = {
  args: { active: STEPS.length },
  render: renderSteps,
};

const StepperDemo: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      {STEPS.map((step) => (
        <Stepper.Step key={step} label={step}>
          <Text>{step}</Text>
        </Stepper.Step>
      ))}
      <Stepper.Completed>
        <Text>All steps complete.</Text>
      </Stepper.Completed>
    </Stepper>
  );
};

/** Clicking a segment moves to it — USWDS allows this once a step is reachable. */
export const Interactive: Story = {
  render: () => <StepperDemo />,
};
