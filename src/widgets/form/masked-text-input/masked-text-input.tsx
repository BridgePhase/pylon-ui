import { Input, InputWrapper } from "@mantine/core";
import { IMaskInput } from "react-imask";

export type PylonMaskedTextInputProps = {
  label: string;
  description?: string;
  mask: string;
  placeholder?: string;
};

export const PylonMaskedTextInput: React.FC<PylonMaskedTextInputProps> = ({
  label,
  description,
  mask,
  placeholder,
}: PylonMaskedTextInputProps) => {
  return (
    <InputWrapper className="usa-form-group">
      <Input.Label className="usa-label">{label}</Input.Label>
      {description && (
        <Input.Description className="usa-hint">
          {description}
        </Input.Description>
      )}
      <IMaskInput
        className="usa-input"
        mask={mask}
        placeholder={placeholder}
        lazy={false}
      />
    </InputWrapper>
  );
};
