import {
  AppShell,
  Image,
  Flex,
  Text,
  Group,
  Button,
  MantineProvider,
  MantineThemeOverride,
  MantineThemeColorsOverride,
  Stack,
  Burger,
  Anchor,
  Box,
} from "@mantine/core";
import {
  SampleAccordionMantine,
  SampleAccordionUswds,
} from "./components/sample-accordion";
import { ReactNode } from "react";
import {
  SampleAlertMantine,
  SampleAlertUswds,
} from "./components/sample-alert";
import {
  SampleBreadcrumbsMantine,
  SampleBreadcrumbsUswds,
} from "./components/sample-breadcrumbs";
import { ComponentComparison } from "./sample-app-components/component-comparison";
import {
  SampleButtonMantine,
  SampleButtonUswds,
} from "./components/sample-button";
import { SampleCardMantine, SampleCardUswds } from "./components/sample-card";
import {
  SampleTableMantine,
  SampleTableUswds,
} from "./components/sample-table";
import {
  SampleCheckboxMantine,
  SampleCheckboxUswds,
} from "./components/sample-checkbox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ColorsPage } from "./pages/colors.page";
import { TypographyPage } from "./pages/typography.page";
import { SampleAppSideNav } from "./sample-app-components/sample-app-sidenav";
import { SampleTagMantine, SampleTagUswds } from "./components/sample-tag";
import {
  SampleDatepickerMantine,
  SampleDatepickerUswds,
} from "./components/sample-datepicker";
import { AppShellFooterHeading } from "../../widgets/app-shell/footer/app-shell-footer-heading";
import { PylonAppShellFooter } from "../../widgets/app-shell/footer/app-shell-footer";

import icon from "/pylon.png";
import { useDisclosure } from "@mantine/hooks";

export interface SampleComponent {
  name: string;
  uswdsComponent: ReactNode;
  mantineComponent: ReactNode;
}
export interface StylingPage {
  name: string;
  page: ReactNode;
}

type SampleAppProps = {
  theme: MantineThemeOverride;
  buttonColors?: MantineThemeColorsOverride;
  alertColors?: MantineThemeColorsOverride;
};

export const STYLING_PAGES: StylingPage[] = [
  { name: "Typography", page: <TypographyPage /> },
  { name: "Colors", page: <ColorsPage /> },
];

export const SAMPLE_COMPONENTS: SampleComponent[] = [
  {
    name: "Accordion",
    uswdsComponent: <SampleAccordionUswds />,
    mantineComponent: <SampleAccordionMantine />,
  },
  {
    name: "Alert",
    uswdsComponent: <SampleAlertUswds />,
    mantineComponent: <SampleAlertMantine />,
  },
  {
    name: "Breadcrumbs",
    uswdsComponent: <SampleBreadcrumbsUswds />,
    mantineComponent: <SampleBreadcrumbsMantine />,
  },
  {
    name: "Button",
    uswdsComponent: <SampleButtonUswds />,
    mantineComponent: <SampleButtonMantine />,
  },
  {
    name: "Card",
    uswdsComponent: <SampleCardUswds />,
    mantineComponent: <SampleCardMantine />,
  },
  {
    name: "Checkbox",
    uswdsComponent: <SampleCheckboxUswds />,
    mantineComponent: <SampleCheckboxMantine />,
  },
  {
    name: "Datepicker",
    uswdsComponent: <SampleDatepickerUswds />,
    mantineComponent: <SampleDatepickerMantine />,
  },
  {
    name: "Table",
    uswdsComponent: <SampleTableUswds />,
    mantineComponent: <SampleTableMantine />,
  },
  {
    name: "Tag",
    uswdsComponent: <SampleTagUswds />,
    mantineComponent: <SampleTagMantine />,
  },
];

export const SampleApp: React.FC<SampleAppProps> = ({
  theme,
  // buttonColors = theme.colors,
}) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <BrowserRouter>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          // aside={{
          //   width: 300,
          //   breakpoint: "md",
          //   collapsed: { desktop: false, mobile: true },
          // }}
          // padding="md"
        >
          <AppShell.Header className="usa-header usa-header--basic">
            <Flex align="center" m="xs">
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                  color="#000"
                />
                <Image src="/pylon.png" w={40} fit="contain" />
                <Anchor href="/" c="#">
                  <Text
                    className="font-body-lg text-bold"
                    ml={-25}
                    td="default"
                    c="#414142"
                  >
                    Pylon UI
                  </Text>
                </Anchor>
              </Group>
              <Group ml="auto">
                <Text c="dimmed">Username</Text>
                <Button>Logout</Button>
              </Group>
            </Flex>
          </AppShell.Header>

          <AppShell.Navbar p="xs">
            <SampleAppSideNav />
          </AppShell.Navbar>

          <AppShell.Main style={{ flexDirection: "column" }} display="flex">
            <Box style={{ flexGrow: 1 }} mx="md">
              <Routes>
                {STYLING_PAGES.map((styling) => (
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
            <PylonAppShellFooter
              heading={
                <Stack gap={0}>
                  <AppShellFooterHeading text="Pylon UI" />
                  <p className="font-serif-xs">©2025 BridgePhase, LLC</p>
                </Stack>
              }
              image={<Image src={icon} mah="5rem" />}
            />
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
};
