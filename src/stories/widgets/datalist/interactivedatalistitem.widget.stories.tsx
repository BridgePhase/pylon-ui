import { Badge, Group, Text } from "@mantine/core";
import type { Meta, StoryFn } from "@storybook/react";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { InteractiveDataListItem } from "../../../widgets/datalist/interactivedatalistitem.widget";

const meta: Meta<typeof InteractiveDataListItem> = {
  component: InteractiveDataListItem,
  title: "Widgets/DataList/InteractiveDataListItem",
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

type Story = StoryFn<typeof InteractiveDataListItem>;

export const InteractiveListItem: Story = ({ onSelect }) => {
  return (
    <InteractiveDataListItem onSelect={onSelect}>
      <Group>
        <Text span>John Doe (this element is interactive)</Text>
        <Badge>developer</Badge>
      </Group>
      <Group>
        <IconMail />
        <Text>john.doe@rebar.candidate.io</Text>
      </Group>
      <Group>
        <IconPhone />
        <Text>(555) 555 - 1234</Text>
      </Group>
    </InteractiveDataListItem>
  );
};

InteractiveListItem.argTypes = {
  onSelect: {
    action: "Clicked datalist item",
  },
};
