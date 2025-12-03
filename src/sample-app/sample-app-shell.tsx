import {
  AppShell,
  Image,
  Text,
  Group,
  Anchor,
  Box,
  ActionIcon,
  Tooltip,
  Container,
  Button,
} from "@mantine/core";
import { ComponentComparison } from "./sample-app-components/component-comparison";
import { Routes, Route, useLocation } from "react-router-dom";
import { PylonFooterHeading } from "../widgets/app-shell/footer/footer-heading";
import { PylonFooter } from "../widgets/app-shell/footer/footer";

import icon from "/pylon.png";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBlocks,
  IconBrandGithub,
  IconHome,
  IconTools,
} from "@tabler/icons-react";
import { PylonFooterItems } from "../widgets/app-shell/footer/footer-items";
import { LandingPage } from "./pages/landing.page";
import { STYLE_GUIDES } from "./sample-app-style-guides";
import { SAMPLE_COMPONENTS } from "./sample-app-components";
import { PylonHeader } from "../widgets/app-shell/header/header";
import { SampleAppSideNav } from "./sample-app-components/sample-app-sidenav";

export const SampleAppShell: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();
  return (
    <AppShell
      header={{ height: { base: 49, desktop: 123 } }}
      navbar={{
        width: 0, //270,
        breakpoint: "desktop", // this comes from USWDS
        collapsed: { mobile: !opened, desktop: false },
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
        miw={450}
        mainItems={[
          <Text fw="lighter" fz="0.9rem">
            Username
          </Text>,
          <Button>Logout</Button>,
        ]}
        navItems={[
          {
            href: "/",
            id: "home",
            current: pathname === "/",
            body: null,
            icon: <IconHome />,
          },
          {
            id: "styling",
            body: "Styling",
            current: pathname.startsWith("/styling"),
            icon: <IconTools />,
            children: STYLE_GUIDES.map((item) => {
              return {
                href: `/styling/${item.name.toLowerCase()}`,
                body: item.name,
                id: item.name,
              };
            }),
          },
          {
            id: "components",
            body: "Components",
            current: pathname.startsWith("/components"),
            icon: <IconBlocks />,
            children: SAMPLE_COMPONENTS.map((item) => {
              return {
                href: `/components/${item.name.toLowerCase()}`,
                body: item.name,
                id: item.name,
              };
            }),
          },
          {
            id: "repo",
            onClick: () =>
              (window.location.href =
                "https://github.com/BridgePhase/pylon-ui"),
            body: "Repository",
            icon: <IconBrandGithub />,
            ml: "auto",
          },
        ]}
      />

      <AppShell.Navbar display={opened ? "inherit" : "none"}>
        <SampleAppSideNav />
      </AppShell.Navbar>

      <AppShell.Main
        style={{ flexDirection: "column" }}
        display="flex"
        miw={450}
      >
        <Box style={{ flexGrow: 1 }} m="xl">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {STYLE_GUIDES.map((styling) => (
              <Route
                key={styling.name}
                path={`/styling/${styling.name.toLowerCase()}`}
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
                  <Anchor href="https://bridgephase.com/" variant="external">
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
  );
};
