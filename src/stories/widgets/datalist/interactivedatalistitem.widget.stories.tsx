import type { Meta, StoryObj } from "@storybook/react-vite";
import { InteractiveDataListItem } from "../../../widgets/datalist/interactivedatalistitem.widget";
import { InteractiveDataListItemStory } from "./datalist-story-items";

const meta: Meta<typeof InteractiveDataListItem> = {
  component: InteractiveDataListItem,
  title: "Additional Widgets/DataList/InteractiveDataListItem",
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

type Story = StoryObj<typeof InteractiveDataListItem>;

export const InteractiveListItem: Story = {
  args: {
    onSelect: () => undefined,
  },
  argTypes: {
    onSelect: {
      action: "Clicked datalist item",
    },
  },
  render: ({ onSelect = () => undefined }) => (
    <InteractiveDataListItemStory onSelect={onSelect} />
  ),
};
