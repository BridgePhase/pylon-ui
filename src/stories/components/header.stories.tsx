import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell, Button, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBlocks, IconHome, IconTools } from "@tabler/icons-react";
import { PylonHeader } from "../../widgets/app-shell/header/header";
import { HeaderNavItemProps } from "../../widgets/app-shell/header/header-nav-item";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Header` is `PylonHeader`. It wraps Mantine's `AppShell.Header` and
 * assembles the whole USWDS header: the site title and logo, an optional row of
 * secondary `mainItems`, the mobile menu `Burger`, and the primary navigation
 * band built from `navItems`.
 *
 * It has to sit inside an `AppShell`, which owns the header height — the stories
 * below supply one.
 */
const NAV_ITEMS: HeaderNavItemProps[] = [
  { id: "home", href: "#", body: null, icon: <IconHome />, current: true },
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

const meta: Meta<typeof PylonHeader> = {
  component: PylonHeader,
  title: "USWDS Components/Header",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  args: {
    shortTitle: "PylonUI",
    longTitle: "Pylon UI Toolkit",
    logo: <Image src="/pylon.png" w={40} fit="contain" alt="" />,
  },
};
export default meta;

type Story = StoryObj<typeof PylonHeader>;

/**
 * `opened` and `toggle` drive the mobile menu button, so they come from
 * `useDisclosure` in the consuming app.
 */
const HeaderDemo: React.FC<
  Partial<React.ComponentProps<typeof PylonHeader>>
> = (props) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell header={{ height: { base: 49, desktop: 123 } }}>
      <PylonHeader
        shortTitle="PylonUI"
        longTitle="Pylon UI Toolkit"
        logo={<Image src="/pylon.png" w={40} fit="contain" alt="" />}
        opened={opened}
        toggle={toggle}
        {...props}
      />
      <AppShell.Main />
    </AppShell>
  );
};

/** Title and logo only — no navigation band. */
export const TitleOnly: Story = {
  render: () => <HeaderDemo />,
};

export const WithPrimaryNav: Story = {
  render: () => <HeaderDemo navItems={NAV_ITEMS} />,
};

/** `mainItems` fill the right side of the title row. */
export const WithSecondaryItems: Story = {
  render: () => (
    <HeaderDemo
      navItems={NAV_ITEMS}
      mainItems={[
        <Text key="username" fw="lighter" fz="0.9rem">
          Username
        </Text>,
        <Button key="logout">Logout</Button>,
      ]}
    />
  ),
};

/**
 * Dark bands: `mainBg` / `navBg` set the colors, and `mainDark` / `navDark` flip
 * the text and nav-item styling to their light-on-dark variants.
 */
export const DarkBands: Story = {
  render: () => (
    <HeaderDemo
      navItems={NAV_ITEMS}
      mainBg="#AF3036"
      mainDark
      navBg="#414142"
      navDark
      mainItems={[<Button key="logout">Logout</Button>]}
    />
  ),
};
