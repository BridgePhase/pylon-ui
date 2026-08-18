import type { Meta, StoryObj } from "@storybook/react-vite";
import { PylonCollectionItem } from "../../widgets/collection/collection-item";
import { COLLECTION_ITEMS } from "./collection-items";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `CollectionItem` is `PylonCollectionItem`. `PylonCollection` renders these
 * for you from its `items` array; use the item directly when you need to build
 * the list yourself.
 *
 * It renders an `<li>`, so it has to sit inside a `usa-collection` list — the
 * decorator below supplies one.
 */
const meta: Meta<typeof PylonCollectionItem> = {
  component: PylonCollectionItem,
  title: "USWDS Components/CollectionItem",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
  decorators: [(Story) => <ul className="usa-collection">{Story()}</ul>],
};
export default meta;

type Story = StoryObj<typeof PylonCollectionItem>;

export const Default: Story = {
  args: COLLECTION_ITEMS[0],
};

/** No meta rows — just the heading and the description. */
export const WithoutMetas: Story = {
  args: { ...COLLECTION_ITEMS[1], metas: [] },
};

/** Tags only, for a topic list without a byline. */
export const TagsOnly: Story = {
  args: {
    ...COLLECTION_ITEMS[2],
    metas: COLLECTION_ITEMS[2].metas.filter((meta) => meta.tags),
  },
};
