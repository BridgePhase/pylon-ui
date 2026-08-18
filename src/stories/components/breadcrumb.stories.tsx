import type { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor, Breadcrumbs, BreadcrumbsProps, Text } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Breadcrumb` and `BreadcrumbItem` are both covered by Mantine's
 * `Breadcrumbs` — it renders the list and its items together. Use `Anchor` for
 * linked crumbs and `Text` for the current page.
 */
const BREADCRUMB_TRAIL = [
  "Home",
  "Federal Contracting",
  "Contracting assistance programs",
  "Economically disadvantaged women-owned small business federal contracting program",
];

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "USWDS Components/Breadcrumb",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const renderTrail = (args: BreadcrumbsProps) => (
  <Breadcrumbs {...args}>
    {BREADCRUMB_TRAIL.map((crumb, index) =>
      index === BREADCRUMB_TRAIL.length - 1 ? (
        <Text key={crumb}>{crumb}</Text>
      ) : (
        <Anchor key={crumb} href="#">
          {crumb}
        </Anchor>
      ),
    )}
  </Breadcrumbs>
);

export const Default: Story = {
  args: { variant: "default" },
  render: renderTrail,
};

/** `usa-breadcrumb--wrap`: crumbs wrap instead of truncating on narrow screens. */
export const Wrapping: Story = {
  args: { variant: "wrap" },
  render: renderTrail,
};
