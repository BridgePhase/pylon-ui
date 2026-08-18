import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `NavMenuButton` — the button that opens the mobile navigation — maps
 * onto Mantine's `Burger`, which the theme renders as `usa-menu-btn`. Pair it
 * with `useDisclosure`, and use `hiddenFrom` to show it only below the USWDS
 * desktop breakpoint. `PylonHeader` already includes one.
 */
const meta: Meta<typeof Burger> = {
  component: Burger,
  title: "USWDS Components/NavMenuButton",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Burger>;

const BurgerDemo: React.FC<{ dark?: boolean }> = ({ dark = false }) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box
      bg={dark ? "base.9" : undefined}
      p="sm"
      style={{ width: "fit-content" }}
    >
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        color={dark ? "white" : "black"}
        aria-label="Toggle navigation menu"
      />
    </Box>
  );
};

export const Default: Story = {
  render: () => <BurgerDemo />,
};

/** On the dark header band USWDS uses, set `color="white"`. */
export const OnDarkBackground: Story = {
  render: () => <BurgerDemo dark />,
};

/** Hidden at desktop width and up, matching USWDS's mobile-only menu button. */
export const MobileOnly: Story = {
  args: {
    opened: false,
    hiddenFrom: "desktop",
    size: "sm",
    "aria-label": "Toggle navigation menu",
  },
};
