import { Anchor } from "@mantine/core";

export const SampleLinkMantine: React.FC = () => {
  return (
    <>
      <p>
        This is <Anchor href="javascript:void(0);">a text link</Anchor> on a
        light background.
      </p>
      <p>
        This is{" "}
        <Anchor href="javascript:void(0);" className="usa-color-text-visited">
          a visited link
        </Anchor>
        .
      </p>
      <p>
        This is a link that opens in the <em>current</em> tab and goes to an{" "}
        <Anchor
          variant="external"
          rel="noreferrer"
          href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
        >
          external website
        </Anchor>
        .
      </p>
      <p>
        This is a link that opens in a <em>new</em> tab and goes to an{" "}
        <Anchor
          variant="external"
          rel="noreferrer"
          target="_blank"
          href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
        >
          external website
        </Anchor>
        .
      </p>
      <div className="usa-dark-background padding-1 display-inline-block">
        <p>
          This is{" "}
          <Anchor href="javascript:void(0);">
            a text link on a dark background
          </Anchor>
          .
        </p>
        <p>
          <Anchor
            variant="external-alt"
            className="usa-link usa-link--alt usa-link--external"
            rel="noreferrer"
            href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
          >
            This
          </Anchor>{" "}
          is an alternate external text link on a dark background.
        </p>
      </div>
    </>
  );
};

export const SampleLinkUswds: React.FC = () => {
  return (
    <>
      <p>
        This is{" "}
        <a className="usa-link" href="javascript:void(0);">
          a text link
        </a>{" "}
        on a light background.
      </p>
      <p>
        This is{" "}
        <a
          className="usa-link usa-color-text-visited"
          href="javascript:void(0);"
        >
          a visited link
        </a>
        .
      </p>
      <p>
        This is a link that opens in the <em>current</em> tab and goes to an{" "}
        <a
          className="usa-link usa-link--external"
          rel="noreferrer"
          href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
        >
          external website
        </a>
        .
      </p>
      <p>
        This is a link that opens in a <em>new</em> tab and goes to an{" "}
        <a
          className="usa-link usa-link--external"
          rel="noreferrer"
          target="_blank"
          href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
        >
          external website
        </a>
        .
      </p>
      <div className="usa-dark-background padding-1 display-inline-block">
        <p>
          This is{" "}
          <a className="usa-link" href="javascript:void(0);">
            a text link on a dark background
          </a>
          .
        </p>
        <p>
          <a
            className="usa-link usa-link--alt usa-link--external"
            rel="noreferrer"
            href="https://i.giphy.com/media/WPzQF6ruiIIVzHNlwX/source.gif"
          >
            This
          </a>{" "}
          is an alternate external text link on a dark background.
        </p>
      </div>
    </>
  );
};
