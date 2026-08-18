import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card, Image, Text, Title } from "@mantine/core";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `Card` maps onto Mantine's `Card`, and both `CardHeader` and `CardBody`
 * map onto `Card.Section` — position determines the role, with the first section
 * styled as the card header.
 *
 * For a set of cards, see the `PylonCardGroup` story under Pylon Components.
 */
const meta: Meta<typeof Card> = {
  component: Card,
  title: "USWDS Components/Card",
  tags: ["autodocs"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof Card>;

/** Header, body, and footer sections. */
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section>
        <Title order={4}>Florida Keys</Title>
      </Card.Section>
      <Card.Section>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
          tenetur quo cupiditate, eaque qui officia recusandae.
        </Text>
      </Card.Section>
      <Card.Section>
        <Button>Visit Florida Keys</Button>
      </Card.Section>
    </Card>
  ),
};

/** A media section between the header and the body. */
export const WithMedia: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section>
        <Title order={4}>Florida Keys</Title>
      </Card.Section>
      <Card.Section>
        <Image src="/pylon.png" h={120} fit="contain" alt="" />
      </Card.Section>
      <Card.Section>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum
          tenetur quo cupiditate, eaque qui officia recusandae.
        </Text>
      </Card.Section>
      <Card.Section>
        <Button>Visit Florida Keys</Button>
      </Card.Section>
    </Card>
  ),
};

/** Header and body only — no call to action. */
export const HeaderAndBodyOnly: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Section>
        <Title order={4}>Card heading</Title>
      </Card.Section>
      <Card.Section>
        <Text>
          A card with only a header and a body still renders the first section
          as the USWDS card header.
        </Text>
      </Card.Section>
    </Card>
  ),
};
