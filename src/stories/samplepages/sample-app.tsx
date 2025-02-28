import {
  Accordion,
  AppShell,
  NavLink,
  Image,
  Flex,
  Text,
  Group,
  Button,
  Title,
  Table,
  ColorSwatch,
  Stack,
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
import { ComponentComparison } from "./component-comparison";
import {
  SampleButtonMantine,
  SampleButtonUswds,
} from "./components/sample-button";
import { SampleCardMantine, SampleCardUswds } from "./components/sample-card";

export interface SampleComponent {
  name: string;
  uswdsComponent: ReactNode;
  mantineComponent: ReactNode;
}

type SampleAppProps = {
  theme: MantineThemeOverride;
  buttonColors?: MantineThemeColorsOverride;
  alertColors?: MantineThemeColorsOverride;
};

const SAMPLE_COMPONENTS: SampleComponent[] = [
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
];

export const SampleApp: React.FC<SampleAppProps> = ({
  theme,
  // buttonColors = theme.colors,
}) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        navbar={{
          width: { xs: 300 },
          breakpoint: 300,
        }}
        padding="md"
      >
        <AppShell.Header h={60} p="xs" className="usa-header usa-header--basic">
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

        <AppShell.Navbar p="xs" h={500}>
          <NavLink label="Parent link" />
          <NavLink label="Current page" active>
            <NavLink label="Child link" />
            <NavLink label="Child link">
              <NavLink label="Grandchild link" />
              <NavLink label="Grandchild link" active />
              <NavLink label="Grandchild link" />
            </NavLink>
            <NavLink label="Child link" />
          </NavLink>
          <NavLink label="Parent link" />
        </AppShell.Navbar>

        <AppShell.Main>
          <Stack pt={72}>
            <Title order={1}>Sample Application</Title>
            <Title order={2}>Typography</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi erat, fringilla vitae dapibus eu, elementum at augue.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eleifend mattis rutrum. Vivamus at venenatis tortor. Mauris nec
              leo nulla. Donec ut mattis justo. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Duis orci
              dui, vulputate eget libero ut, pulvinar tristique libero.
            </Text>
            <Accordion>
              <Accordion.Item value="colors">
                <Accordion.Control>Colors</Accordion.Control>
                <Accordion.Panel>
                  <Title order={2}>Colors</Title>
                  <Table>
                    <thead>
                      <tr>
                        <th rowSpan={2}>Color</th>
                        <th colSpan={10}>Shade</th>
                      </tr>
                      <tr>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                          <th key={shade}>
                            <Text ta="center">{shade}</Text>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {theme &&
                        theme.colors &&
                        Object.keys(theme.colors).map((color) => (
                          <tr key={color}>
                            <th>{color}</th>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => {
                              if (!theme || !theme.colors) {
                                return null;
                              }

                              const themeColor = theme.colors[color];

                              if (!themeColor) {
                                return null;
                              }

                              const colorHex = themeColor[shade];
                              return (
                                <td key={shade}>
                                  <ColorSwatch
                                    mx="auto"
                                    color={colorHex ?? "transparent"}
                                  />
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </Accordion.Panel>
              </Accordion.Item>

              {SAMPLE_COMPONENTS.map((component) => (
                <Accordion.Item value={component.name} key={component.name}>
                  <Accordion.Control>{component.name}</Accordion.Control>
                  <Accordion.Panel>
                    <ComponentComparison component={component} />
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
