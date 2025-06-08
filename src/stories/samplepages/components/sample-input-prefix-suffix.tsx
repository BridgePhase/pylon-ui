import { TextInput } from "@mantine/core";
import { IconCreditCard, IconSearch } from "@tabler/icons-react";

export const SampleInputPrefixSuffixMantine: React.FC = () => {
  return (
    <>
      <h3>Input Prefix</h3>
      <h4>As Text</h4>
      <TextInput label="Input label" leftSection={<>cvc</>} />
      <h4>As Icon</h4>
      <TextInput label="Input label" leftSection={<IconCreditCard />} />
      <h3>Input Suffix</h3>
      <h4>As Text</h4>
      <TextInput label="Input label" rightSection={<>lbs.</>} />
      <h4>As Icon</h4>
      <TextInput label="Input label" rightSection={<IconSearch />} />
    </>
  );
};

export const SampleInputPrefixSuffixUswds: React.FC = () => {
  return (
    <>
      <h3>Input Prefix</h3>
      <h4>As Text</h4>
      <div data-testid="formGroup" className="usa-form-group">
        <label data-testid="label" className="usa-label" htmlFor="cvc">
          Input label
        </label>
        <div data-testid="inputGroup" className="usa-input-group">
          <div
            className="usa-input-prefix"
            aria-hidden="true"
            data-testid="InputPrefix"
          >
            cvc
          </div>
          <input
            data-testid="textInput"
            className="usa-input"
            id="cvc"
            type="text"
            name="cvc"
          />
        </div>
      </div>
      <h4>As Icon</h4>
      <div data-testid="formGroup" className="usa-form-group">
        <label data-testid="label" className="usa-label" htmlFor="cvc">
          Input label
        </label>
        <div data-testid="inputGroup" className="usa-input-group">
          <div
            className="usa-input-prefix"
            aria-hidden="true"
            data-testid="InputPrefix"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="usa-icon"
              focusable="false"
              role="img"
            >
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
            </svg>
          </div>
          <input
            data-testid="textInput"
            className="usa-input"
            id="cvc"
            type="text"
            name="cvc"
          />
        </div>
      </div>

      <h3>Input Suffix</h3>
      <h4>As Text</h4>
      <div data-testid="formGroup" className="usa-form-group">
        <label data-testid="label" className="usa-label" htmlFor="search">
          Input label
        </label>
        <div data-testid="inputGroup" className="usa-input-group">
          <input
            data-testid="textInput"
            className="usa-input"
            id="search"
            type="search"
            name="search"
          />
          <div
            className="usa-input-suffix"
            aria-hidden="true"
            data-testid="InputSuffix"
          >
            lbs.
          </div>
        </div>
      </div>
      <h4>As Icon</h4>
      <div data-testid="formGroup" className="usa-form-group">
        <label data-testid="label" className="usa-label" htmlFor="search">
          Input label
        </label>
        <div data-testid="inputGroup" className="usa-input-group">
          <input
            data-testid="textInput"
            className="usa-input"
            id="search"
            type="search"
            name="search"
          />
          <div
            className="usa-input-suffix"
            aria-hidden="true"
            data-testid="InputSuffix"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="usa-icon"
              focusable="false"
              role="img"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
