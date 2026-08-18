import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container, Grid, SimpleGrid, Text } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Grid` maps onto Mantine's `Grid` (the theme adds `grid-container` and
 * `grid-col`), and `GridContainer` onto `Container`.
 *
 * Known limitation: Mantine's `Grid` conflicts with some of the imported USWDS
 * styles. `SimpleGrid` is unaffected — prefer it when the layout is a plain set
 * of equal columns.
 */
const CELL_STYLE = {
  border: "1px solid",
  padding: "1rem",
  backgroundColor: "rgb(225, 231, 241)",
};

const cell = (label: string) => <div style={CELL_STYLE}>{label}</div>;

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "USWDS Components/Grid",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Grid>;

/** Three equal columns. `Grid.Col` defaults to `span={1}` under this theme. */
export const ThreeColumns: Story = {
  args: { columns: 3 },
  render: (args) => (
    <Grid {...args}>
      <Grid.Col>{cell("Content")}</Grid.Col>
      <Grid.Col>{cell("Content")}</Grid.Col>
      <Grid.Col>{cell("Content")}</Grid.Col>
    </Grid>
  ),
};

/** Uneven columns, using `span` on each `Grid.Col`. */
export const UnevenColumns: Story = {
  args: { columns: 12 },
  render: (args) => (
    <Grid {...args}>
      <Grid.Col span={8}>{cell("span 8")}</Grid.Col>
      <Grid.Col span={4}>{cell("span 4")}</Grid.Col>
    </Grid>
  ),
};

/**
 * `SimpleGrid` — the recommended alternative for equal columns, and responsive
 * by breakpoint. USWDS breakpoint names (`mobile`, `tablet`, `desktop`, …) are
 * registered on the theme, so you can use them here.
 */
export const SimpleGridAlternative: Story = {
  render: () => (
    <SimpleGrid cols={{ base: 1, tablet: 2, desktop: 3 }} spacing="md">
      {cell("Content")}
      {cell("Content")}
      {cell("Content")}
    </SimpleGrid>
  ),
};

/** `GridContainer` — Mantine's `Container` constrains and centers page content. */
export const GridContainer: Story = {
  render: () => (
    <Container style={CELL_STYLE}>
      <Text>
        A grid container centers its content and caps the line length at the
        container's maximum width.
      </Text>
    </Container>
  ),
};
