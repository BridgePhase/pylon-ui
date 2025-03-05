import { Box, Checkbox, Title } from "@mantine/core";
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
        <Box key={variant}>
          <Title order={3} className="usa-prose">
            {variant}
          </Title>

          <Checkbox.Group label="Select any historical figure" value={values}>
            {OPTIONS.map((option) => (
              <Checkbox
                key={option}
                label={option}
                variant={variant}
                checked={values.includes(option)}
                onChange={() => {
                  console.log(">>> clicked", option);
                  if (values.includes(option)) {
                    console.log(">>> removing");
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
        </Box>
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

      {/* <h3>Tile</h3>
      <form className="usa-form">
        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Select any historical figure</legend>
          <div className="usa-checkbox">
            <input
              className="usa-checkbox__input usa-checkbox__input--tile"
              id="check-historical-truth-2"
              type="checkbox"
              name="historical-figures-2"
              value="sojourner-truth"
              defaultChecked
            />
            <label
              className="usa-checkbox__label"
              htmlFor="check-historical-truth-2"
            >
              Sojourner Truth
              <span className="usa-checkbox__label-description">
                This is optional text that can be used to describe the label in
                more detail.
              </span>
            </label>
          </div>
          <div className="usa-checkbox">
            <input
              className="usa-checkbox__input usa-checkbox__input--tile"
              id="check-historical-douglass-2"
              type="checkbox"
              name="historical-figures-2"
              value="frederick-douglass"
            />
            <label
              className="usa-checkbox__label"
              htmlFor="check-historical-douglass-2"
            >
              Frederick Douglass
            </label>
          </div>
          <div className="usa-checkbox">
            <input
              className="usa-checkbox__input usa-checkbox__input--tile"
              id="check-historical-washington-2"
              type="checkbox"
              name="historical-figures-2"
              value="booker-t-washington"
            />
            <label
              className="usa-checkbox__label"
              htmlFor="check-historical-washington-2"
            >
              Booker T. Washington
            </label>
          </div>
          <div className="usa-checkbox">
            <input
              className="usa-checkbox__input usa-checkbox__input--tile"
              id="check-historical-carver-2"
              type="checkbox"
              name="historical-figures-2"
              value="george-washington-carver"
              disabled
            />
            <label
              className="usa-checkbox__label"
              htmlFor="check-historical-carver-2"
            >
              George Washington Carver
            </label>
          </div>
        </fieldset>
      </form> */}
    </>
  );
};
