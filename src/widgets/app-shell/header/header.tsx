import { AppShell, Burger, Flex, MantineColor, Stack } from "@mantine/core";
import { ReactNode } from "react";
import { HeaderNav } from "./header-nav";
import { HeaderTitle } from "./header-title";
import { HeaderNavItemProps } from "./header-nav-item";

export const PylonHeader: React.FC<{
  shortTitle: string;
  longTitle: string;
  logo: ReactNode;
  opened: boolean;
  toggle: () => void;
  mainItems?: ReactNode[];
  navItems?: HeaderNavItemProps[];
  mainBg?: MantineColor;
  navBg?: MantineColor;
  mainDark?: boolean;
  navDark?: boolean;
}> = ({
  shortTitle,
  longTitle,
  logo,
  opened,
  toggle,
  mainItems = [],
  navItems = [],
  navBg = "gray.1",
  mainBg = "red.1",
  mainDark = false,
  navDark = false,
}) => {
  return (
    <AppShell.Header
      display="flex"
      component="div"
      style={{
        alignItems: "center",
      }}
      miw={450}
    >
      <Stack w="100%" gap={0}>
        {/* Main header */}
        <Flex
          component="header"
          pl="lg"
          bg={mainBg}
          align="center"
          c={mainDark ? "white" : "black"}
          className="usa-header usa-header--basic site-header"
        >
          <HeaderTitle
            shortText={shortTitle}
            longText={longTitle}
            logo={logo}
            dark={mainDark}
          />
          {mainItems && mainItems.length > 0 && (
            <Flex
              ml="auto"
              className="usa-nav__secondary"
              direction="row"
              my="auto"
              align="baseline"
              justify="flex-end"
              gap="sm"
              bottom="auto"
            >
              {...mainItems}
            </Flex>
          )}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="64rem"
            size="sm"
            color="white"
            ml="md"
            mr="0"
          />
        </Flex>
        {/* Primary navigation (under header) */}
        {navItems && navItems.length > 0 && (
          <Flex
            pb={10}
            px="lg"
            bg={navBg}
            component="nav"
            aria-label="Primary navigation"
            className="usa-nav site-nav"
          >
            <Flex className="usa-nav__inner site-nav__inner" pt="xs" w="100%">
              <HeaderNav items={navItems} dark={navDark} />
            </Flex>
          </Flex>
        )}
      </Stack>
    </AppShell.Header>
  );
};
