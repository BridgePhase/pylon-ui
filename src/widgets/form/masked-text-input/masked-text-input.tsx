import { Input, InputWrapper } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { forwardRef } from "react";

export type PylonMaskedTextInputProps = {
  label: string;
  description?: string;
  mask: string;
  placeholder?: string;
  /** Contents of `Input.Error` component. If not set, error is not rendered. */
  error?: React.ReactNode;
  required?: boolean;
};

export const PylonMaskedTextInput = forwardRef(function PylonMaskedTextInput(
  {
    label,
    description,
    mask,
    placeholder,
    error,
    required = false,
  }: PylonMaskedTextInputProps,
  ref
) {
  return (
    <InputWrapper
      required={required}
      className={`usa-form-group usa-form-group--${error ? "error" : "valid"}`}
    >
      <Input.Label
        className={`usa-label usa-label--${error ? "error" : "valid"}`}
      >
        {label}
      </Input.Label>
      {description && (
        <Input.Description className="usa-hint">
          {description}
        </Input.Description>
      )}
      {error && (
        <Input.Error className="usa-error-message">{error}</Input.Error>
      )}
      <IMaskInput
        ref={ref}
        className={`usa-input usa-input--${error ? "error" : "valid"}`}
        mask={mask}
        placeholder={placeholder}
        lazy={false}
      />
    </InputWrapper>
  );
});
