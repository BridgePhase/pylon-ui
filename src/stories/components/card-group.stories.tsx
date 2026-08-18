import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card, Text, Title } from "@mantine/core";
import { PylonCardGroup } from "../../widgets/card/card-group";
import { SHARED_DOCS } from "../story-docs";

/**
 * USWDS `CardGroup` is `PylonCardGroup` — a `Stack` carrying the
 * `usa-card-group` class, which gives the cards inside it USWDS's shared
 * spacing and alignment. The cards themselves are Mantine `Card`s; see
 * USWDS Components / Card.
 */
const card = (heading: string, body: string) => (
  <Card key={heading}>
    <Card.Section>
      <Title order={4}>{heading}</Title>
    </Card.Section>
    <Card.Section>
      <Text>{body}</Text>
    </Card.Section>
    <Card.Section>
      <Button>Learn more</Button>
    </Card.Section>
  </Card>
);

const meta: Meta<typeof PylonCardGroup> = {
  component: PylonCardGroup,
  title: "USWDS Components/CardGroup",
  tags: ["autodocs", "pylon"],
  parameters: { docs: { ...SHARED_DOCS } },
};
export default meta;

type Story = StoryObj<typeof PylonCardGroup>;

export const Default: Story = {
  args: {
    children: [
      card(
        "Florida Keys",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.",
      ),
      card(
        "Everglades",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
      ),
      card(
        "Big Cypress",
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ),
    ],
  },
};

/** A group of one is still worth wrapping — it keeps the USWDS card spacing. */
export const SingleCard: Story = {
  args: {
    children: card(
      "Florida Keys",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ),
  },
};
