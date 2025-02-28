import { Button, Card, Stack, Text, Title } from "@mantine/core";

export const SampleCardMantine: React.FC = () => {
  return (
    <>
      <Stack className="usa-card-group">
        <Card>
          <Card.Section>
            <Title order={4}>Card</Title>
          </Card.Section>
          <Card.Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              earum tenetur quo cupiditate, eaque qui officia recusandae.
            </Text>
          </Card.Section>
          <Card.Section>
            <Button>Visit Florida Keys</Button>
          </Card.Section>
        </Card>
      </Stack>
    </>
  );
};

export const SampleCardUswds: React.FC = () => {
  return (
    <ul className="usa-card-group">
      <li className="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
        <div className="usa-card__container">
          <div className="usa-card__header">
            <h4 className="usa-card__heading">Card</h4>
          </div>
          <div className="usa-card__body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              earum tenetur quo cupiditate, eaque qui officia recusandae.
            </p>
          </div>
          <div className="usa-card__footer">
            <a href="#" className="usa-button">
              Visit Florida Keys
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};
