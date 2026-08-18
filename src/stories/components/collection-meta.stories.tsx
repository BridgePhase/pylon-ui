import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonCollectionMeta } from "../../widgets/collection/collection-meta";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `CollectionMeta` is `PylonCollectionMeta` — the `usa-collection__meta`
 * list under a collection item. `items` are plain meta nodes (a byline, a date);
 * `tags` render as `usa-tag` list items. `ariaLabel` names the list for screen
 * readers, so give each meta row on an item a distinct one.
 */
const meta: Meta<typeof PylonCollectionMeta> = {
  component: PylonCollectionMeta,
  title: "USWDS Components/CollectionMeta",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof PylonCollectionMeta>;

export const Items: Story = {
  args: {
    ariaLabel: "More Information",
    items: [<>By Sondra Alnsworth and Constance Lu</>, <>September 30, 2020</>],
  },
};

export const Tags: Story = {
  args: {
    ariaLabel: "Topics",
    tags: [{ label: "PMA" }, { label: "OMB" }, { label: "Success Story" }],
  },
};

/** `variant` maps to a `usa-tag--*` modifier — `new` highlights recent items. */
export const TagVariants: Story = {
  args: {
    ariaLabel: "Topics",
    tags: [{ label: "New", variant: "new" }, { label: "PMA" }],
  },
};

/** Items and tags can share one row. */
export const ItemsAndTags: Story = {
  args: {
    ariaLabel: "More Information",
    items: [<>By Constance Lu</>, <>September 30, 2020</>],
    tags: [{ label: "SBA" }],
  },
};
