import { Button, Code, Group, Space, TextInput } from "@mantine/core";
import { PylonMaskedTextInput } from "../../../widgets/form/masked-text-input/masked-text-input";
import { Controller, useForm } from "react-hook-form";

export const SampleTextInputMantine: React.FC = () => {
  const {
    getValues,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ phone: string }>({
    mode: "onTouched",
    defaultValues: { phone: "" },
  });
  return (
    <>
      <h3>Text Input Form Group</h3>

      <TextInput label="Text input label" />

      <h3>Text Input Error Form Group</h3>

      <TextInput label="Text input label" error="Helpful error message" />

      <h3>Text Input with Mask</h3>

      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log("data:", data);
        })}
      >
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone Number is required",
            maxLength: {
              value: 10,
              message: "Phone Number must be 10 numbers long",
            },
            minLength: {
              value: 10,
              message: "Phone Number must be 10 numbers long",
            },
          }}
          render={({ field: { ...field } }) => {
            return (
              <PylonMaskedTextInput
                label="US Telephone Number"
                description="For example, 123-456-7890"
                mask="000-000-0000"
                placeholder="___-___-____"
                refCallback={(value: string) => {
                  setValue("phone", value);
                }}
                required
                error={errors.phone ? errors.phone.message : undefined}
                {...field}
              />
            );
          }}
        />
        <Space h="md" />
        <Group>
          <Button type="submit">Submit</Button>
          Form value: <Code>{JSON.stringify(getValues())}</Code>
        </Group>
      </form>
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

      <h3>Text Input with Mask</h3>

      <form data-testid="form" className="usa-form">
        <label
          id="tel"
          data-testid="label"
          className="usa-label"
          htmlFor="input-type-tel"
        >
          US Telephone Number
        </label>
        <span id="hint-tel" className="usa-hint">
          For example, 123-456-7890
        </span>
        <span className="usa-input-mask">
          <span
            className="usa-input-mask--content"
            aria-hidden="true"
            data-testid="input-type-telMask"
          >
            <i></i>___-___-____
          </span>
          <input
            data-testid="textInput"
            className="usa-input usa-masked"
            id="input-type-tel"
            maxLength={12}
            aria-labelledby="tel"
            aria-describedby="hint-tel"
            pattern="\d{3}-\d{3}-\d{4}"
            type="tel"
            value=""
            onChange={() => null}
            name="input-type-tel"
          />
        </span>
      </form>
    </>
  );
};
