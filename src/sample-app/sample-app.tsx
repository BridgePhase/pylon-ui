import {
  AppShell,
  Image,
  Text,
  Group,
  MantineProvider,
  MantineThemeOverride,
  MantineThemeColorsOverride,
  Burger,
  Anchor,
  Box,
  ActionIcon,
  Tooltip,
  Container,
} from "@mantine/core";
import { ComponentComparison } from "./sample-app-components/component-comparison";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SampleAppSideNav } from "./sample-app-components/sample-app-sidenav";
import { PylonFooterHeading } from "../widgets/app-shell/footer/footer-heading";
import { PylonFooter } from "../widgets/app-shell/footer/footer";

import icon from "/pylon.png";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub } from "@tabler/icons-react";
import { HeaderTitle } from "../widgets/app-shell/header/header-title";
import { PylonFooterItems } from "../widgets/app-shell/footer/footer-items";
import { HeaderNav } from "../widgets/app-shell/header/header-nav";
import { HeaderNavLink } from "../widgets/app-shell/header/header-nav-link";
import { LandingPage } from "./pages/landing.page";
import { STYLE_GUIDES } from "./sample-app-style-guides";
import { SAMPLE_COMPONENTS } from "./sample-app-components";

type SampleAppProps = {
  theme: MantineThemeOverride;
  buttonColors?: MantineThemeColorsOverride;
  alertColors?: MantineThemeColorsOverride;
};

export const SampleApp: React.FC<SampleAppProps> = ({ theme }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <BrowserRouter>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 270,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header
            px="lg"
            bg="#e29699"
            display="flex"
            style={{
              alignItems: "center",
            }}
            miw={450}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="white"
            />
            <HeaderTitle
              shortText="PylonUI"
              longText="Pylon UI Toolkit"
              logo={<Image src="/pylon.png" w={40} fit="contain" />}
            />
            <HeaderNav>
              <Box className="usa-nav__primary-item">
                <Text fw="lighter" fz="0.9rem">
                  Username
                </Text>
              </Box>
              <HeaderNavLink href="#">Logout</HeaderNavLink>
            </HeaderNav>
          </AppShell.Header>

          <AppShell.Navbar p="xs">
            <SampleAppSideNav />
          </AppShell.Navbar>

          <AppShell.Main
            style={{ flexDirection: "column" }}
            display="flex"
            miw={450}
          >
            <Box style={{ flexGrow: 1 }} mx="xl">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {STYLE_GUIDES.map((styling) => (
                  <Route
                    key={styling.name}
                    path={`/${styling.name.toLowerCase()}`}
                    element={styling.page}
                  />
                ))}
                {SAMPLE_COMPONENTS.map((component) => (
                  <Route
                    key={component.name}
                    path={`/components/${component.name.toLowerCase()}`}
                    element={<ComponentComparison component={component} />}
                  />
                ))}
              </Routes>
            </Box>
            <PylonFooter
              heading={<PylonFooterHeading text="Pylon UI" />}
              image={<Image src={icon} mah="5rem" />}
            >
              <Container>
                <PylonFooterItems
                  items={[
                    <Group className="font-serif-xs" gap="xs">
                      ©2025{" "}
                      <Anchor
                        href="https://bridgephase.com/"
                        variant="external"
                      >
                        BridgePhase, LLC
                      </Anchor>
                    </Group>,
                    <Tooltip label="Pylon UI Git Repository">
                      <Anchor href="https://github.com/BridgePhase/pylon-ui">
                        <ActionIcon color="#AF3036">
                          <IconBrandGithub />
                        </ActionIcon>
                      </Anchor>
                    </Tooltip>,
                  ]}
                />
              </Container>
            </PylonFooter>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
};
