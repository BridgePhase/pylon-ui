import { Accordion, Stack, Text, Title } from "@mantine/core";

export const SampleAccordionMantine: React.FC = () => {
  return (
    <Stack gap="md" my="md">
      <Title order={3}>Default</Title>
      <Accordion defaultValue="a1">
        <Accordion.Item value="a1">
          <Accordion.Control>First Amendment</Accordion.Control>
          <Accordion.Panel>
            <Text variant="prose">
              Congress shall make no law respecting an establishment of
              religion, or prohibiting the free exercise thereof; or abridging
              the freedom of speech, or of the press; or the right of the people
              peaceably to assemble, and to petition the Government for a
              redress of grievances.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="a2">
          <Accordion.Control>Second Amendment</Accordion.Control>
        </Accordion.Item>
      </Accordion>

      <Title order={3}>Separated</Title>
      <Accordion defaultValue="a1" variant="separated">
        <Accordion.Item value="a1">
          <Accordion.Control>First Amendment</Accordion.Control>
          <Accordion.Panel>
            <Text variant="prose">
              Congress shall make no law respecting an establishment of
              religion, or prohibiting the free exercise thereof; or abridging
              the freedom of speech, or of the press; or the right of the people
              peaceably to assemble, and to petition the Government for a
              redress of grievances.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="a2">
          <Accordion.Control>Second Amendment</Accordion.Control>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export const SampleAccordionUswds: React.FC = () => {
  return (
    <Stack gap="md" my="md">
      <Title order={3}>Default</Title>
      <div className="usa-accordion">
        <h4 className="usa-accordion__heading">
          <button
            type="button"
            className="usa-accordion__button"
            aria-expanded="true"
            aria-controls="a1"
          >
            First Amendment
          </button>
        </h4>
        <div id="a1" className="usa-accordion__content usa-prose">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </div>
        <h4 className="usa-accordion__heading">
          <button
            type="button"
            className="usa-accordion__button"
            aria-expanded="false"
            aria-controls="a2"
          >
            Second Amendment
          </button>
        </h4>
        <div id="a2" className="usa-accordion__content usa-prose" hidden={true}>
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
          <ul>
            <li>This is a list item</li>
            <li>Another list item</li>
          </ul>
        </div>
      </div>

      <Title order={3}>Bordered</Title>
      <div className="usa-accordion usa-accordion--bordered">
        <h4 className="usa-accordion__heading">
          <button
            type="button"
            className="usa-accordion__button"
            aria-expanded="true"
            aria-controls="a1"
          >
            First Amendment
          </button>
        </h4>
        <div id="a1" className="usa-accordion__content usa-prose">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </div>
        <h4 className="usa-accordion__heading">
          <button
            type="button"
            className="usa-accordion__button"
            aria-expanded="false"
            aria-controls="a2"
          >
            Second Amendment
          </button>
        </h4>
        <div id="a2" className="usa-accordion__content usa-prose" hidden={true}>
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
          <ul>
            <li>This is a list item</li>
            <li>Another list item</li>
          </ul>
        </div>
      </div>
    </Stack>
  );
};
