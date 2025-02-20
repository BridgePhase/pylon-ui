import { Avatar, Badge, Group, Text } from "@mantine/core";
import type { Meta, StoryFn } from "@storybook/react";
import { IconMail, IconPhone, IconStar } from "@tabler/icons-react";
import { DataListItem } from "../../../widgets/datalist/datalistitem.widget";

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

type Story = StoryFn<typeof DataListItem>;

export const SimpleListItem: Story = () => {
  return (
    <DataListItem>
      <Group>
        <Text span>John Doe</Text>
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
    </DataListItem>
  );
};

export const ListItemWithAvatar: Story = () => {
  return (
    <DataListItem image={<Avatar size={"xl"} />}>
      <Group>
        <Text span>John Doe</Text>
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
    </DataListItem>
  );
};

export const ListItemWithAvatarAndSideContext: Story = () => {
  return (
    <DataListItem
      image={<Avatar size={"xl"} />}
      side={
        <Group gap={"xs"}>
          <IconStar />
          <IconStar />
          <IconStar />
        </Group>
      }
    >
      <Group>
        <Text span>John Doe</Text>
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
    </DataListItem>
  );
};
