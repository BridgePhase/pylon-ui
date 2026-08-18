import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataListWidget } from "../../../widgets/datalist/datalist.widget";
import {
  DataListItemWithAvatarAndSideContextStory,
  DataListItemWithAvatarStory,
  InteractiveDataListItemStory,
  SimpleDataListItemStory,
} from "./datalist-story-items";

const meta: Meta<typeof DataListWidget> = {
  component: DataListWidget,
  title: "Additional Widgets/DataList/DataListWidget",
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

type Story = StoryObj<typeof DataListWidget>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <SimpleDataListItemStory />
        <DataListItemWithAvatarStory />
        <DataListItemWithAvatarAndSideContextStory />
        <InteractiveDataListItemStory
          onSelect={() => alert("clicked the interactive one")}
        />
      </>
    ),
  },
};
