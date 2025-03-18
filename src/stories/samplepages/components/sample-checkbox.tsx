import { Checkbox, Stack } from "@mantine/core";
import { useState } from "react";

const OPTIONS = [
  "Sojourner Truth",
  "Frederick Douglass",
  "Booker T. Washington",
  "George Washington Carver",
];
const OPTIONS_DISABLED = ["George Washington Carver"];

export const SampleCheckboxMantine: React.FC = () => {
  const [values, setValues] = useState<string[]>([OPTIONS[0]]);
  return (
    <>
      {["Default"].map((variant) => (
        <Stack key={variant} gap={0}>
          <h3>{variant}</h3>

          <Checkbox.Group label="Select any historical figure" value={values}>
            {OPTIONS.map((option) => (
              <Checkbox
                key={option}
                label={option}
                variant={variant}
                checked={values.includes(option)}
                onChange={() => {
                  if (values.includes(option)) {
                    const newValues = [...values];
                    newValues.splice(values.indexOf(option), 1);
                    setValues(newValues);
                  } else {
                    setValues([...values, option]);
                  }
                }}
                disabled={OPTIONS_DISABLED.includes(option)}
              />
            ))}
          </Checkbox.Group>
        </Stack>
      ))}
    </>
  );
};

export const SampleCheckboxUswds: React.FC = () => {
  return (
    <>
      <h3>Default</h3>

      <fieldset className="usa-fieldset">
        <legend className="usa-legend">Select any historical figure</legend>
        <div className="usa-checkbox">
          <input
            className="usa-checkbox__input"
            id="check-historical-truth"
            type="checkbox"
            name="historical-figures"
            value="sojourner-truth"
            defaultChecked
          />
          <label
            className="usa-checkbox__label"
            htmlFor="check-historical-truth"
          >
            Sojourner Truth
          </label>
        </div>
        <div className="usa-checkbox">
          <input
            className="usa-checkbox__input"
            id="check-historical-douglass"
            type="checkbox"
            name="historical-figures"
            value="frederick-douglass"
          />
          <label
            className="usa-checkbox__label"
            htmlFor="check-historical-douglass"
          >
            Frederick Douglass
          </label>
        </div>
        <div className="usa-checkbox">
          <input
            className="usa-checkbox__input"
            id="check-historical-washington"
            type="checkbox"
            name="historical-figures"
            value="booker-t-washington"
          />
          <label
            className="usa-checkbox__label"
            htmlFor="check-historical-washington"
          >
            Booker T. Washington
          </label>
        </div>
        <div className="usa-checkbox">
          <input
            className="usa-checkbox__input"
            id="check-historical-carver"
            type="checkbox"
            name="historical-figures"
            value="george-washington-carver"
            disabled
          />
          <label
            className="usa-checkbox__label"
            htmlFor="check-historical-carver"
          >
            George Washington Carver
          </label>
        </div>
      </fieldset>
    </>
  );
};
