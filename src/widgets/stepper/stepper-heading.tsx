export type PylonStepperHeadingProps = {
  label: string;
  stepNumber: number;
  totalStepCount: number;
};

export const PylonStepperHeading: React.FC<PylonStepperHeadingProps> = ({
  label,
  stepNumber,
  totalStepCount,
}) => {
  return (
    <div className="usa-step-indicator__header">
      <h4
        className="usa-step-indicator__heading"
        style={{ marginTop: "0.9rem" }}
      >
        <span className="usa-step-indicator__heading-counter">
          <span className="usa-sr-only" data-testid="step-text">
            Step
          </span>
          <span className="usa-step-indicator__current-step">{stepNumber}</span>
          &nbsp;
          <span className="usa-step-indicator__total-steps">
            of {totalStepCount}
          </span>
          &nbsp;
        </span>
        <span className="usa-step-indicator__heading-text">{label}</span>
      </h4>
    </div>
  );
};
