import type { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor, Container, Group, Image, Text } from "@mantine/core";
import { PylonFooter } from "../../widgets/app-shell/footer/footer";
import { PylonFooterHeading } from "../../widgets/app-shell/footer/footer-heading";
import { PylonFooterItems } from "../../widgets/app-shell/footer/footer-items";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Footer` is `PylonFooter`. Mantine has no footer component, so this one
 * builds the USWDS structure directly: a logo row with a heading, an optional
 * `preFooter` band above it, and `children` for the contact block.
 *
 * `size` selects the USWDS footer variant — `big`, `medium`, or `slim`.
 */
const LOGO = <Image src="/pylon.png" mah="5rem" alt="" />;

const meta: Meta<typeof PylonFooter> = {
  component: PylonFooter,
  title: "USWDS Components/Footer",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    image: LOGO,
    heading: <PylonFooterHeading text="Name of Agency" />,
  },
};
export default meta;

type Story = StoryObj<typeof PylonFooter>;

export const Medium: Story = {
  args: { size: "medium" },
};

export const Big: Story = {
  args: { size: "big" },
};

export const Slim: Story = {
  args: { size: "slim" },
};

/** `preFooter` adds a band above the logo row, promoted to the primary section. */
export const WithPreFooter: Story = {
  args: {
    preFooter: (
      <Text ta="center" fs="italic">
        We're the thing that explodes when there's too much friction in the air.
      </Text>
    ),
  },
};

/** `children` sits beside the heading — the usual place for the contact block. */
export const WithContactInfo: Story = {
  args: {
    children: (
      <Container>
        <PylonFooterItems
          items={[
            <Group key="copyright" className="font-serif-xs" gap="xs">
              ©2026
              <Anchor href="https://bridgephase.com/" variant="external">
                BridgePhase, LLC
              </Anchor>
            </Group>,
            <Anchor key="phone" href="tel:123-456-7890">
              (123) 456 - 7890
            </Anchor>,
          ]}
        />
      </Container>
    ),
  },
};
