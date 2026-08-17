import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionProps, Text } from "@mantine/core";
import { UswdsTheme } from "../../themes/uswds-theme";
import {
  UswdsAlertColors,
  UswdsButtonColors,
} from "../../themes/uswds-colors-contextual";

const DATA: Record<string, string>[] = [
  {
    title: "First Amendment",
    content:
      "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
  },
  {
    title: "Second Amendment",
    content:
      "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
  },
];

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "USWDS Components/Accordion",
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

type Story = StoryObj<typeof Accordion>;

const renderComponent = (args: AccordionProps<boolean>) => (
  <Accordion {...args}>
    {DATA.map((item, index) => (
      <Accordion.Item value={`item-${index + 1}`}>
        <Accordion.Control>{item.title}</Accordion.Control>
        <Accordion.Panel>
          <Text>{item.content}</Text>
        </Accordion.Panel>
      </Accordion.Item>
    ))}
  </Accordion>
);

export const Borderless: Story = {
  args: {
    variant: "separated",
    multiple: false,
  },
  render: renderComponent,
};

export const Bordered: Story = {
  args: {
    variant: "contained",
    multiple: false,
  },
  render: renderComponent,
};
