import {
  Accordion,
  AppShell,
  Navbar,
  NavLink,
  Header,
  Image,
  Flex,
  Text,
  Group,
  Button,
  Title,
  Table,
  ColorSwatch,
  Alert,
  Stack,
  MantineProvider,
  MantineThemeOverride,
  MantineThemeColorsOverride,
} from "@mantine/core";

type SampleAppProps = {
  theme: MantineThemeOverride;
  buttonColors?: MantineThemeColorsOverride;
  alertColors?: MantineThemeColorsOverride;
};

export const SampleApp: React.FC<SampleAppProps> = ({
  theme,
  buttonColors = theme.colors,
  alertColors = theme.colors,
}) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
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
          </Navbar>
        }
        header={
          <Header height={60} p="xs" className="usa-header usa-header--basic">
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
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Stack>
          <Title order={1}>Sample Application</Title>
          <Title order={2}>Typography</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            erat, fringilla vitae dapibus eu, elementum at augue.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            eleifend mattis rutrum. Vivamus at venenatis tortor. Mauris nec leo
            nulla. Donec ut mattis justo. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Duis orci
            dui, vulputate eget libero ut, pulvinar tristique libero.
            Pellentesque semper pharetra urna, id iaculis nunc finibus a.
            Pellentesque sed leo ac nisi cursus condimentum non eget urna. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Vivamus sed leo nisi. Maecenas accumsan leo lectus,
            in dictum enim accumsan vitae. Suspendisse dignissim lorem sit amet
            nunc ullamcorper, nec ultricies sapien fringilla. Duis in nulla
            nibh. Curabitur eget tortor tincidunt, rhoncus mauris vel, tempus
            tortor.
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
                        <th>
                          <Text ta="center">{shade}</Text>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {theme &&
                      theme.colors &&
                      Object.keys(theme.colors).map((color) => (
                        <tr>
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
                              <td>
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
            <Accordion.Item value="alerts">
              <Accordion.Control>Alerts</Accordion.Control>
              <Accordion.Panel>
                <Title order={2}>Alerts</Title>
                {alertColors &&
                  Object.keys(alertColors).map((color) => (
                    <Alert title={color} color={color}>
                      Here's a {color} alert
                    </Alert>
                  ))}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="buttons">
              <Accordion.Control>Buttons</Accordion.Control>
              <Accordion.Panel>
                <Title order={2}>Alerts</Title>
                {buttonColors &&
                  Object.keys(buttonColors).map((color) => (
                    <Button color={color}>Here's a {color} button</Button>
                  ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </AppShell>
    </MantineProvider>
  );
};
