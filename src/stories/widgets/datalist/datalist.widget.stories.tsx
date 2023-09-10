import type { Meta, StoryObj } from "@storybook/react";
import { DataListWidget } from "../../../widgets/datalist/datalist.widget";
import {
  ListItemWithAvatar,
  ListItemWithAvatarAndSideContext,
  SimpleListItem,
} from "./datalistitem.widget.stories";
import { InteractiveListItem } from "./interactivedatalistitem.widget.stories";

const meta: Meta<typeof DataListWidget> = {
  component: DataListWidget,
  title: "Widgets/DataList/DataListWidget",
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
        <SimpleListItem />
        <ListItemWithAvatar />
        <ListItemWithAvatarAndSideContext />
        <InteractiveListItem
          onSelect={() => alert("clicked the interactive one")}
        />
      </>
    ),
  },
};
