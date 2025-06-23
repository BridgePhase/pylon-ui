import {
  AppShell,
  Image,
  Text,
  Group,
  MantineProvider,
  MantineThemeOverride,
  MantineThemeColorsOverride,
  Anchor,
  Box,
  ActionIcon,
  Tooltip,
  Container,
  Button,
} from "@mantine/core";
import { ComponentComparison } from "./sample-app-components/component-comparison";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SampleAppSideNav } from "./sample-app-components/sample-app-sidenav";
import { PylonFooterHeading } from "../widgets/app-shell/footer/footer-heading";
import { PylonFooter } from "../widgets/app-shell/footer/footer";

import icon from "/pylon.png";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconHelpCircleFilled,
  IconHome,
} from "@tabler/icons-react";
import { PylonFooterItems } from "../widgets/app-shell/footer/footer-items";
import { LandingPage } from "./pages/landing.page";
import { STYLE_GUIDES } from "./sample-app-style-guides";
import { SAMPLE_COMPONENTS } from "./sample-app-components";
import { PylonHeader } from "../widgets/app-shell/header/header";

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
          header={{ height: 123 }}
          navbar={{
            width: 270,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <PylonHeader
            shortTitle="PylonUI"
            longTitle="Pylon UI Toolkit"
            logo={<Image src="/pylon.png" w={40} fit="contain" />}
            opened={opened}
            toggle={toggle}
            mainBg="#AF3036"
            mainDark
            navBg="#414142"
            navDark
            mainItems={[
              <Text fw="lighter" fz="0.9rem">
                Username
              </Text>,
              <Button>Logout</Button>,
            ]}
            navItems={[
              {
                href: "/",
                key: "home",
                current: true,
                body: <>Sample App</>,
                icon: <IconHome />,
              },
              {
                key: "other",
                body: "Other Stuff",
                children: [
                  { href: "/", key: "repo", body: <>Repository</> },
                  { href: "/", key: "npmjs", body: <>NPMJS</> },
                ],
              },
              {
                href: "/",
                key: "help",
                body: <>Help</>,
                icon: <IconHelpCircleFilled />,
                ml: "auto",
              },
            ]}
          />

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
              preFooter={
                <Text tt="uppercase" ta="center" c="bp-red" fw="lighter">
                  For internal use only
                </Text>
              }
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
