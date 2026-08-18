import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonCollection } from "../../widgets/collection/collection";
import { COLLECTION_ITEMS } from "./collection-items";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Collection` is `PylonCollection` — a `usa-collection` list built from an
 * `items` array. Each item becomes a `PylonCollectionItem`, which in turn renders
 * a heading, a description, and any number of meta rows.
 */
const meta: Meta<typeof PylonCollection> = {
  component: PylonCollection,
  title: "USWDS Components/Collection",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof PylonCollection>;

export const Default: Story = {
  args: { items: COLLECTION_ITEMS },
};

export const SingleItem: Story = {
  args: { items: [COLLECTION_ITEMS[0]] },
};

/** Items need no metas — omit them for a plain list of headings and summaries. */
export const WithoutMetas: Story = {
  args: {
    items: COLLECTION_ITEMS.map((item) => ({ ...item, metas: [] })),
  },
};
