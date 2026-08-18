import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonCollectionHeading } from "../../widgets/collection/collection-heading";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `CollectionHeading` is `PylonCollectionHeading` — the linked `<h3>` at
 * the top of a collection item. `PylonCollectionItem` renders one for you; use it
 * directly only when composing an item by hand.
 */
const meta: Meta<typeof PylonCollectionHeading> = {
  component: PylonCollectionHeading,
  title: "USWDS Components/CollectionHeading",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof PylonCollectionHeading>;

export const Default: Story = {
  args: {
    heading: "Gears of Government President’s Award winners",
    href: "https://www.performance.gov/presidents-winners-press-release/",
  },
};

/** `heading` is a node, so it can carry its own markup. */
export const WithMarkup: Story = {
  args: {
    heading: (
      <>
        September 2020 updates <em>show progress</em> on agency priority goals
      </>
    ),
    href: "https://www.performance.gov/sba-wosb-dashboard/",
  },
};
