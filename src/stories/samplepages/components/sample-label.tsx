import { PylonLabel } from "../../../widgets/text/label/label";

export const SampleLabelMantine: React.FC = () => {
  return (
    <>
      <p>
        <PylonLabel text="Text input label" />
      </p>
      <p>
        <PylonLabel text="Text input error" error />
      </p>
      <p>
        <PylonLabel text="Text input" hint="(optional)" />
      </p>
      <p>
        <PylonLabel text="Text input" required />
      </p>
    </>
  );
};

export const SampleLabelUswds: React.FC = () => {
  return (
    <>
      <p>
        <label data-testid="label" className="usa-label" htmlFor="testInput">
          Text input label
        </label>
      </p>
      <p>
        <label
          data-testid="label"
          className="usa-label usa-label--error"
          htmlFor="testInputError"
        >
          Text input error
        </label>
      </p>
      <p>
        <label
          data-testid="label"
          className="usa-label"
          htmlFor="testInputHint"
        >
          Text input<span className="usa-hint"> (optional)</span>
        </label>
      </p>
      <p>
        <label
          data-testid="label"
          className="usa-label"
          htmlFor="testInputRequired"
        >
          Text input{" "}
          <abbr title="required" className="usa-hint usa-hint--required">
            *
          </abbr>
        </label>
      </p>
    </>
  );
};
