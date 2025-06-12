import { Stepper } from "@mantine/core";
import { PylonStepperHeading } from "../../../widgets/stepper/stepper-heading";

export const SampleStepIndicatorMantine: React.FC = () => {
  const steps = [
    "Personal information",
    "Household status",
    "Supporting documents",
    "Signature",
    "Review and submit",
  ];
  return (
    <Stepper active={2} onStepClick={() => null}>
      {steps.map((step, index) => (
        <Stepper.Step label={step}>
          <PylonStepperHeading
            label={step}
            stepNumber={index + 1}
            totalStepCount={steps.length}
          />
        </Stepper.Step>
      ))}

      <Stepper.Completed>
        Completed, click back button to get to previous step
      </Stepper.Completed>
    </Stepper>
  );
};

export const SampleStepIndicatorUswds: React.FC = () => {
  return (
    <div
      className="usa-step-indicator"
      data-testid="step-indicator"
      aria-label="progress"
    >
      <ol className="usa-step-indicator__segments">
        <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
          <span className="usa-step-indicator__segment-label">
            Personal information&nbsp;
            <span data-testid="srStatusText" className="usa-sr-only">
              completed
            </span>
          </span>
        </li>
        <li className="usa-step-indicator__segment usa-step-indicator__segment--complete">
          <span className="usa-step-indicator__segment-label">
            Household status&nbsp;
            <span data-testid="srStatusText" className="usa-sr-only">
              completed
            </span>
          </span>
        </li>
        <li
          className="usa-step-indicator__segment usa-step-indicator__segment--current"
          aria-current="true"
        >
          <span className="usa-step-indicator__segment-label">
            Supporting documents&nbsp;
          </span>
        </li>
        <li className="usa-step-indicator__segment">
          <span className="usa-step-indicator__segment-label">
            Signature&nbsp;
            <span data-testid="srStatusText" className="usa-sr-only">
              not completed
            </span>
          </span>
        </li>
        <li className="usa-step-indicator__segment">
          <span className="usa-step-indicator__segment-label">
            Review and submit&nbsp;
            <span data-testid="srStatusText" className="usa-sr-only">
              not completed
            </span>
          </span>
        </li>
      </ol>
      <div className="usa-step-indicator__header">
        <h4 className="usa-step-indicator__heading">
          <span className="usa-step-indicator__heading-counter">
            <span className="usa-sr-only" data-testid="step-text">
              Step
            </span>
            <span className="usa-step-indicator__current-step">3</span>&nbsp;
            <span className="usa-step-indicator__total-steps">of 5</span>&nbsp;
          </span>
          <span className="usa-step-indicator__heading-text">
            Supporting documents
          </span>
        </h4>
      </div>
    </div>
  );
};
