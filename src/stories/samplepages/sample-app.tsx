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
import {
  SampleDatepickerMantine,
  SampleDatepickerUswds,
} from "./components/sample-datepicker";

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
];

export const SampleApp: React.FC<SampleAppProps> = ({
  theme,
  // buttonColors = theme.colors,
}) => {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <BrowserRouter>
        <AppShell
          navbar={{
            width: { xs: 300 },
            breakpoint: 300,
          }}
          padding="md"
        >
          <AppShell.Header
            h={60}
            p="xs"
            className="usa-header usa-header--basic"
          >
            <Flex>
              <Image
                src="https://placehold.co/80x50/DDDDDD/AF3036"
                width="80px"
                mr="auto"
              />
              <Group>
                <Text c="dimmed">Username</Text>
                <Button>Logout</Button>
              </Group>
            </Flex>
          </AppShell.Header>

          <AppShell.Navbar p="xs">
            <SampleAppSideNav />
          </AppShell.Navbar>

          <AppShell.Main pt={80}>
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
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
};
