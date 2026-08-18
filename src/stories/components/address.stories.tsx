import type { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor, Group, Text } from "@mantine/core";
import { PylonFooterItems } from "../../widgets/app-shell/footer/footer-items";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Address` — the contact block inside a footer — is `PylonFooterItems`.
 * It renders a semantic `<address>` with the USWDS contact-info grid, and lays
 * out whatever nodes you hand it in `items`.
 */
const meta: Meta<typeof PylonFooterItems> = {
  component: PylonFooterItems,
  title: "USWDS Components/Address",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof PylonFooterItems>;

export const Default: Story = {
  args: {
    items: [
      <Anchor key="phone" href="tel:123-456-7890">
        (123) 456 - 7890
      </Anchor>,
      <Anchor key="email" href="mailto:thisnotfake@emailaddress.com">
        thisnotfake@emailaddress.com
      </Anchor>,
    ],
  },
};

/** Items are arbitrary nodes, so plain text works alongside links. */
export const WithMailingAddress: Story = {
  args: {
    items: [
      <Text key="street">1200 New Jersey Avenue, SE</Text>,
      <Text key="city">Washington, DC 20590</Text>,
      <Anchor key="phone" href="tel:123-456-7890">
        (123) 456 - 7890
      </Anchor>,
    ],
  },
};

/** A single item — USWDS's slim footer often carries only a copyright line. */
export const SingleItem: Story = {
  args: {
    items: [
      <Group key="copyright" gap="xs">
        ©2026
        <Anchor href="https://bridgephase.com/" variant="external">
          BridgePhase, LLC
        </Anchor>
      </Group>,
    ],
  },
};
