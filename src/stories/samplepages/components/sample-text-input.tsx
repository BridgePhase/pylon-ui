import { TextInput } from "@mantine/core";

export const SampleTextInputMantine: React.FC = () => {
  return (
    <>
      <h3>Text Input Form Group</h3>

      <TextInput label="Text input label" />

      <h3>Text Input Error Form Group</h3>

      <TextInput label="Text input label" error="Helpful error message" />
    </>
  );
};

export const SampleTextInputUswds: React.FC = () => {
  return (
    <>
      <h3>Text Input Form Group</h3>

      <div data-testid="formGroup" className="usa-form-group">
        <label
          data-testid="label"
          className="usa-label"
          htmlFor="input-type-text"
        >
          Text input label
        </label>
        <input
          data-testid="textInput"
          className="usa-input"
          id="input-type-text"
          type="text"
          name="input-type-text"
        />
      </div>

      <h3>Text Input Error Form Group</h3>

      <div
        data-testid="formGroup"
        className="usa-form-group usa-form-group--error"
      >
        <label
          data-testid="label"
          className="usa-label usa-label--error"
          htmlFor="input-type-text"
        >
          Text input label
        </label>
        <span
          data-testid="errorMessage"
          className="usa-error-message"
          role="alert"
        >
          Helpful error message
        </span>
        <input
          data-testid="textInput"
          className="usa-input usa-input--error"
          id="input-type-text"
          type="text"
          name="input-type-text"
        />
      </div>
    </>
  );
};
