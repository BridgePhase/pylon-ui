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
      {required && (
        <abbr
          title="required"
          className="usa-hint usa-hint--required margin-left-05"
        >
          *
        </abbr>
      )}
      {hint && <span className="usa-hint"> {hint}</span>}
    </label>
  );
};
