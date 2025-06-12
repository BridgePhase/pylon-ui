import { Button, Flex } from "@mantine/core";

const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "accent-cool",
  "accent-warm",
  "base",
  "outline",
  "outline-inverse",
];

export const SampleButtonMantine: React.FC = () => {
  return (
    <>
      {BUTTON_VARIANTS.map((variant) => {
        let heading = variant.replace("-", " ");
        heading = heading.charAt(0).toLocaleUpperCase() + heading.substring(1);
        if (variant.indexOf("outline")) {
          heading += " color";
        }
        return (
          <div key={variant}>
            <h3>{heading}</h3>

            <Flex
              className={
                variant.endsWith("-inverse") ? "bg-base-darkest padding-1" : ""
              }
              style={{ width: "fit-content" }}
              align="center"
            >
              <Button type="button" variant={variant}>
                Default
              </Button>
              <Button type="button" variant={variant} disabled>
                Disabled
              </Button>
              <Button type="button" variant={variant} aria-disabled="true">
                aria-disabled
              </Button>
              <Button type="button" variant={variant} unstyled>
                Unstyled button
              </Button>
            </Flex>
          </div>
        );
      })}
      <h3>Big button</h3>

      <div>
        <Button type="button" variant="primary" size="xl">
          Default
        </Button>
        <Button type="button" variant="primary" disabled size="xl">
          Disabled
        </Button>
        <Button type="button" variant="primary" aria-disabled="true" size="xl">
          aria-disabled
        </Button>
        <Button type="button" variant="primary" unstyled size="xl">
          Unstyled button
        </Button>
      </div>
    </>
  );
};

export const SampleButtonUswds: React.FC = () => {
  return (
    <div>
      <h3>Primary color</h3>
      <button className="usa-button" type="button">
        Default
      </button>
      <button className="usa-button" type="button" disabled>
        Disabled
      </button>
      <button className="usa-button" type="button" aria-disabled="true">
        aria-disabled
      </button>
      <button className="usa-button usa-button--unstyled" type="button">
        Unstyled button
      </button>

      <h3>Secondary color</h3>
      <button className="usa-button usa-button--secondary" type="button">
        Default
      </button>
      <button
        className="usa-button usa-button--secondary"
        type="button"
        disabled
      >
        Disabled
      </button>
      <button
        className="usa-button usa-button--secondary"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--secondary usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>

      <h3>Accent cool color</h3>
      <button className="usa-button usa-button--accent-cool" type="button">
        Default
      </button>
      <button
        className="usa-button usa-button--accent-cool"
        type="button"
        disabled
      >
        Disabled
      </button>
      <button
        className="usa-button usa-button--accent-cool"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--accent-cool usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>

      <h3>Accent warm color</h3>
      <button className="usa-button usa-button--accent-warm" type="button">
        Default
      </button>
      <button
        className="usa-button usa-button--accent-warm"
        type="button"
        disabled
      >
        Disabled
      </button>
      <button
        className="usa-button usa-button--accent-warm"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--accent-warm usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>

      <h3>Base color</h3>
      <button className="usa-button usa-button--base" type="button">
        Default
      </button>
      <button className="usa-button usa-button--base" type="button" disabled>
        Disabled
      </button>
      <button
        className="usa-button usa-button--base"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--base usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>

      <h3>Outline</h3>
      <button className="usa-button usa-button--outline" type="button">
        Default
      </button>
      <button className="usa-button usa-button--outline" type="button" disabled>
        Disabled
      </button>
      <button
        className="usa-button usa-button--outline"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--outline usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>

      <h3>Outline inverse</h3>
      <div
        className="bg-base-darkest padding-1"
        style={{ maxWidth: "fit-content" }}
      >
        <button
          className="usa-button usa-button--outline usa-button--inverse"
          type="button"
        >
          Default
        </button>
        <button
          className="usa-button usa-button--outline usa-button--inverse"
          type="button"
          disabled
        >
          Disabled
        </button>
        <button
          className="usa-button usa-button--outline usa-button--inverse"
          type="button"
          aria-disabled="true"
        >
          aria-disabled
        </button>
        <button
          className="usa-button usa-button--outline usa-button--inverse usa-button--unstyled"
          type="button"
        >
          Unstyled button
        </button>
      </div>

      <h3>Big button</h3>
      <button className="usa-button usa-button--big" type="button">
        Default
      </button>
      <button className="usa-button usa-button--big" type="button" disabled>
        Disabled
      </button>
      <button
        className="usa-button usa-button--big"
        type="button"
        aria-disabled="true"
      >
        aria-disabled
      </button>
      <button
        className="usa-button usa-button--big usa-button--unstyled"
        type="button"
      >
        Unstyled button
      </button>
    </div>
  );
};
