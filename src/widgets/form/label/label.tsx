import { RequiredMarker } from "../required-marker/required-marker";

export const PylonLabel: React.FC<{
  text: React.ReactNode;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: boolean;
  required?: boolean;
}> = ({ text, htmlFor, hint, error = false, required = false }) => {
  return (
    <label
      data-testid="label"
      className={`usa-label usa-label--${error ? "error" : "default"}`}
      htmlFor={htmlFor}
    >
      {text}
      {required && <RequiredMarker />}
      {hint && <span className="usa-hint"> {hint}</span>}
    </label>
  );
};
