import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Flex } from "@mantine/core";
import { IconBlocks, IconHome, IconTools } from "@tabler/icons-react";
import { HeaderNav } from "../../widgets/app-shell/header/header-nav";
import { HeaderNavItemProps } from "../../widgets/app-shell/header/header-nav-item";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `PrimaryNav` is `HeaderNav`. Each entry in `items` becomes a
 * `HeaderNavItem`, which renders as a link (`href`), a button (`onClick`), a
 * dropdown menu (`children`), or plain text (none of those). `current` marks the
 * active item with `usa-current`, and `ml: "auto"` pushes an item to the far end.
 *
 * `PylonHeader` renders this band for you — reach for `HeaderNav` directly only
 * when you are assembling your own header.
 */
const ITEMS: HeaderNavItemProps[] = [
  { id: "home", href: "#", body: "Home", icon: <IconHome />, current: true },
  {
    id: "styling",
    body: "Styling",
    icon: <IconTools />,
    children: [
      { id: "colors", href: "#", body: "Colors" },
      { id: "typography", href: "#", body: "Typography" },
    ],
  },
  {
    id: "components",
    body: "Components",
    icon: <IconBlocks />,
    children: [
      { id: "accordion", href: "#", body: "Accordion" },
      { id: "table", href: "#", body: "Table" },
    ],
  },
];

const meta: Meta<typeof HeaderNav> = {
  component: HeaderNav,
  title: "USWDS Components/PrimaryNav",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: { items: ITEMS },
};
export default meta;

type Story = StoryObj<typeof HeaderNav>;

/** The nav band belongs in a `usa-nav` wrapper, as `PylonHeader` provides. */
const navBand = (background: string, children: React.ReactNode) => (
  <Box bg={background} px="lg" pb={10} className="usa-nav site-nav">
    <Flex className="usa-nav__inner site-nav__inner" pt="xs" w="100%">
      {children}
    </Flex>
  </Box>
);

export const Light: Story = {
  render: (args) => navBand("gray.1", <HeaderNav {...args} dark={false} />),
};

export const Dark: Story = {
  args: { dark: true },
  render: (args) => navBand("#414142", <HeaderNav {...args} />),
};

/** Links only — no dropdowns. */
export const LinksOnly: Story = {
  args: {
    items: [
      { id: "home", href: "#", body: "Home", current: true },
      { id: "about", href: "#", body: "About" },
      { id: "contact", href: "#", body: "Contact" },
    ],
  },
  render: (args) => navBand("gray.1", <HeaderNav {...args} />),
};

/** A button item runs `onClick` instead of navigating; `ml: "auto"` right-aligns it. */
export const WithButtonItem: Story = {
  args: {
    items: [
      ...ITEMS,
      {
        id: "repo",
        body: "Repository",
        onClick: () => alert("Opening the repository"),
        ml: "auto",
      },
    ],
  },
  render: (args) => navBand("gray.1", <HeaderNav {...args} />),
};
