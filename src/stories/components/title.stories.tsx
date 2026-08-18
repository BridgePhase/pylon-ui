import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Image } from "@mantine/core";
import { HeaderTitle } from "../../widgets/app-shell/header/header-title";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Title` — the site name in the header — is `HeaderTitle`. It renders the
 * USWDS navbar and logo markup, and shows `shortText` below the desktop
 * breakpoint and `longText` at desktop width and up. `PylonHeader` renders one
 * for you.
 */
const meta: Meta<typeof HeaderTitle> = {
  component: HeaderTitle,
  title: "USWDS Components/Title",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    shortText: "USWDS",
    longText: "U.S. Web Design System (USWDS)",
  },
};
export default meta;

type Story = StoryObj<typeof HeaderTitle>;

export const Default: Story = {};

export const WithLogo: Story = {
  args: {
    logo: <Image src="/pylon.png" w={40} fit="contain" alt="" />,
  },
};

/** `dark` switches the title text to white for a dark header band. */
export const OnDarkBackground: Story = {
  args: {
    dark: true,
    logo: <Image src="/pylon.png" w={40} fit="contain" alt="" />,
  },
  decorators: [
    (Story) => (
      <Box bg="#AF3036" pl="lg">
        {Story()}
      </Box>
    ),
  ],
};
