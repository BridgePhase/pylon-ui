import { Avatar, Badge, Group, Text } from "@mantine/core";
import { IconMail, IconPhone, IconStar } from "@tabler/icons-react";
import { DataListItem } from "../../../widgets/datalist/datalistitem.widget";
import { InteractiveDataListItem } from "../../../widgets/datalist/interactivedatalistitem.widget";
import type { InteractiveDataListItemProps } from "../../../widgets/datalist/_datalistitem.types";

export function SimpleDataListItemStory() {
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
}

export function DataListItemWithAvatarStory() {
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
}

export function DataListItemWithAvatarAndSideContextStory() {
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
}

type InteractiveDataListItemStoryProps = Pick<
  InteractiveDataListItemProps,
  "onSelect"
>;

export function InteractiveDataListItemStory({
  onSelect,
}: InteractiveDataListItemStoryProps) {
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
}
