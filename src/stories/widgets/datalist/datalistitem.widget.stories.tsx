import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataListItem } from "../../../widgets/datalist/datalistitem.widget";
import {
  DataListItemWithAvatarAndSideContextStory,
  DataListItemWithAvatarStory,
  SimpleDataListItemStory,
} from "./datalist-story-items";

const meta: Meta<typeof DataListItem> = {
  component: DataListItem,
  title: "Widgets/DataList/DataListItem",
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataListItem>;

export const SimpleListItem: Story = {
  render: () => <SimpleDataListItemStory />,
};

export const ListItemWithAvatar: Story = {
  render: () => <DataListItemWithAvatarStory />,
};

export const ListItemWithAvatarAndSideContext: Story = {
  render: () => <DataListItemWithAvatarAndSideContextStory />,
};
