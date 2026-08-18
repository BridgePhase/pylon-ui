import type { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor, Box, Text } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Link` maps onto Mantine's `Anchor`. The theme adds `usa-link`, and the
 * `variant` prop selects the USWDS modifier: `external` adds
 * `usa-link--external`, and `external-alt` adds `usa-link--alt` for use on a
 * dark background.
 */
const EXTERNAL_HREF = "https://designsystem.digital.gov/components/link/";

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  title: "USWDS Components/Link",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  render: () => (
    <Text>
      This is <Anchor href="#">a text link</Anchor> on a light background.
    </Text>
  ),
};

/** `usa-color-text-visited` styles a link that has already been followed. */
export const Visited: Story = {
  render: () => (
    <Text>
      This is{" "}
      <Anchor href="#" className="usa-color-text-visited">
        a visited link
      </Anchor>
      .
    </Text>
  ),
};

/** `variant="external"` marks a link that leaves the site. */
export const External: Story = {
  render: () => (
    <Text>
      This is a link that opens in the current tab and goes to an{" "}
      <Anchor variant="external" rel="noreferrer" href={EXTERNAL_HREF}>
        external website
      </Anchor>
      .
    </Text>
  ),
};

export const ExternalInNewTab: Story = {
  render: () => (
    <Text>
      This is a link that opens in a new tab and goes to an{" "}
      <Anchor
        variant="external"
        rel="noreferrer"
        target="_blank"
        href={EXTERNAL_HREF}
      >
        external website
      </Anchor>
      .
    </Text>
  ),
};

/** On a dark background, use `usa-dark-background`; `external-alt` inverts the icon. */
export const OnDarkBackground: Story = {
  render: () => (
    <Box className="usa-dark-background padding-2 display-inline-block">
      <Text>
        This is <Anchor href="#">a text link on a dark background</Anchor>.
      </Text>
      <Text>
        <Anchor variant="external-alt" rel="noreferrer" href={EXTERNAL_HREF}>
          This
        </Anchor>{" "}
        is an alternate external text link on a dark background.
      </Text>
    </Box>
  ),
};
