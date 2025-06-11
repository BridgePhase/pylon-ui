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
import { PylonFooterHeading } from "../../widgets/app-shell/footer/footer-heading";
import { PylonFooter } from "../../widgets/app-shell/footer/footer";

import icon from "/pylon.png";
import { useDisclosure } from "@mantine/hooks";
import { SampleLogoUswds, SampleLogoMantine } from "./components/sample-logo";
import { SampleLinkMantine, SampleLinkUswds } from "./components/sample-link";
import { IconBrandGithub } from "@tabler/icons-react";
import {
  SampleModalMantine,
  SampleModalUswds,
} from "./components/sample-modal";
import { HeaderTitle } from "../../widgets/app-shell/header/header-title";
import {
  SampleTitleMantine,
  SampleTitleUswds,
} from "./components/sample-title";
import {
  SampleLabelUswds,
  SampleLabelMantine,
} from "./components/sample-label";
import {
  SampleFooterUswds,
  SampleFooterMantine,
} from "./components/sample-footer";
import {
  SampleFooterItemsMantine,
  SampleFooterItemsUswds,
} from "./components/sample-footer-tems";
import { PylonFooterItems } from "../../widgets/app-shell/footer/footer-items";
import {
  SampleCollectionUswds,
  SampleCollectionMantine,
} from "./components/sample-collection";
import {
  SampleTextInputMantine,
  SampleTextInputUswds,
} from "./components/sample-text-input";
import { SampleGridUswds, SampleGridMantine } from "./components/sample-grid";
import {
  SampleInputPrefixSuffixUswds,
  SampleInputPrefixSuffixMantine,
} from "./components/sample-input-prefix-suffix";
import {
  SamplePaginationMantine,
  SamplePaginationUswds,
} from "./components/sample-pagination";
import {
  SampleHeaderMantine,
  SampleHeaderUswds,
} from "./components/sample-header";
import { HeaderNav } from "../../widgets/app-shell/header/header-nav";
import { HeaderNavLink } from "../../widgets/app-shell/header/header-nav-link";
import {
  SampleSelectMantine,
  SampleSelectUswds,
} from "./components/sample-select";
import { LandingPage } from "./pages/landing.page";

export interface SampleComponent {
  name: string;
  uswdsComponent?: ReactNode;
  mantineComponent?: ReactNode;
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
    name: "Collection",
    uswdsComponent: <SampleCollectionUswds />,
    mantineComponent: <SampleCollectionMantine />,
  },
  {
    name: "Datepicker",
    uswdsComponent: <SampleDatepickerUswds />,
    mantineComponent: <SampleDatepickerMantine />,
  },
  {
    name: "Footer",
    uswdsComponent: <SampleFooterUswds />,
    mantineComponent: <SampleFooterMantine />,
  },
  {
    name: "Footer Item / Address",
    uswdsComponent: <SampleFooterItemsUswds />,
    mantineComponent: <SampleFooterItemsMantine />,
  },
  {
    name: "Grid / Grid Container",
    uswdsComponent: <SampleGridUswds />,
    mantineComponent: <SampleGridMantine />,
  },
  {
    name: "Header / Primary Nav",
    uswdsComponent: <SampleHeaderUswds />,
    mantineComponent: <SampleHeaderMantine />,
  },
  {
    name: "Input Group / Input Suffix",
    uswdsComponent: <SampleInputPrefixSuffixUswds />,
    mantineComponent: <SampleInputPrefixSuffixMantine />,
  },
  {
    name: "Label / Required Marker",
    uswdsComponent: <SampleLabelUswds />,
    mantineComponent: <SampleLabelMantine />,
  },
  {
    name: "Link",
    uswdsComponent: <SampleLinkUswds />,
    mantineComponent: <SampleLinkMantine />,
  },
  {
    name: "Logo",
    uswdsComponent: <SampleLogoUswds />,
    mantineComponent: <SampleLogoMantine />,
  },
  {
    name: "Modal / Modal Heading",
    uswdsComponent: <SampleModalUswds />,
    mantineComponent: <SampleModalMantine />,
  },
  {
    name: "Pagination",
    uswdsComponent: <SamplePaginationUswds />,
    mantineComponent: <SamplePaginationMantine />,
  },
  {
    name: "Select",
    uswdsComponent: <SampleSelectUswds />,
    mantineComponent: <SampleSelectMantine />,
  },
  { name: "Step Indicator / Step Indicator Step" },
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
  {
    name: "TextInput",
    uswdsComponent: <SampleTextInputUswds />,
    mantineComponent: <SampleTextInputMantine />,
  },
  { name: "TextInputMask" },
  {
    name: "Title",
    uswdsComponent: <SampleTitleUswds />,
    mantineComponent: <SampleTitleMantine />,
  },
];

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
