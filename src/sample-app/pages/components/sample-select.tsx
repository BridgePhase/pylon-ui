import { Select } from "@mantine/core";

export const SampleSelectMantine: React.FC = () => {
  return (
    <>
      <h3>Text Input Form Group</h3>

      <Select
        label="Select label"
        data={[
          { label: "Option A", value: "value1" },
          { label: "Option B", value: "value2" },
          { label: "Option C", value: "value3" },
          {
            label:
              "Option of extra length to demonstrate how content like this will look different",
            value: "valueBIG",
          },
        ]}
      />

      <h3>Disabled</h3>

      <Select label="Select label" disabled error="Helpful error message" />
    </>
  );
};

export const SampleSelectUswds: React.FC = () => {
  return (
    <>
      <h3>Basic</h3>

      <div data-testid="formGroup" className="usa-form-group">
        <label data-testid="label" className="usa-label" htmlFor="input-select">
          Select label
        </label>
        <select
          data-testid="Select"
          className="usa-select"
          id="input-select"
          name="input-select"
        >
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
          <option value="valueBIG">
            Option of extra length to demonstrate how content like this will
            look different
          </option>
        </select>
      </div>

      <h3>Disabled / Error</h3>

      <div
        data-testid="formGroup"
        className="usa-form-group usa-form-group--error"
      >
        <label
          data-testid="label"
          className="usa-label usa-label--error"
          htmlFor="input-type-text"
        >
          Select input label
        </label>
        <span
          data-testid="errorMessage"
          className="usa-error-message"
          role="alert"
        >
          Helpful error message
        </span>
        <select
          data-testid="Select"
          className="usa-select"
          id="input-select"
          name="input-select"
          disabled
        >
          <option>- Select - </option>
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
          <option value="valueBIG">
            Option of extra length to demonstrate how content like this will
            look different
          </option>
        </select>
      </div>
    </>
  );
};
