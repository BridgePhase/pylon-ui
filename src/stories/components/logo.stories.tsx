import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image, Text } from "@mantine/core";
import { PylonFooter } from "../../widgets/app-shell/footer/footer";
import { PylonFooterHeading } from "../../widgets/app-shell/footer/footer-heading";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Logo` — the agency mark and name in a footer — is the `image` and
 * `heading` pair on `PylonFooter`. `PylonFooterHeading` renders the
 * `usa-footer__logo-heading` text next to the mark.
 *
 * For the header's logo and site title, see Pylon Components / Title.
 */
const meta: Meta<typeof PylonFooter> = {
  component: PylonFooter,
  title: "USWDS Components/Logo",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    image: <Image src="/pylon.png" mah="5rem" alt="" />,
    heading: <PylonFooterHeading text="Name of Agency" />,
  },
};
export default meta;

type Story = StoryObj<typeof PylonFooter>;

export const Default: Story = {};

/** Mark only — omit `heading` when the logo already contains the agency name. */
export const ImageOnly: Story = {
  args: { heading: undefined },
};

/** Name only, for agencies without a mark. */
export const HeadingOnly: Story = {
  args: { image: null },
};

/** `heading` is a node, so it does not have to be `PylonFooterHeading`. */
export const CustomHeading: Story = {
  args: {
    heading: (
      <Text className="usa-footer__logo-heading" fw={700}>
        Name of Agency
        <Text span display="block" fz="sm" fw={400}>
          A tagline for the agency
        </Text>
      </Text>
    ),
  },
};
