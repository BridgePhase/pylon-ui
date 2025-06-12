import { Text, Title } from "@mantine/core";

export const TypographyPage = () => {
  return (
    <>
      <Title order={2}>Typography</Title>
      <Text variant="prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        erat, fringilla vitae dapibus eu, elementum at augue.
      </Text>
      <Title order={3}>Level 3 Heading</Title>
      <Text variant="prose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend
        mattis rutrum. Vivamus at venenatis tortor. Mauris nec leo nulla. Donec
        ut mattis justo. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Duis orci dui, vulputate eget libero ut,
        pulvinar tristique libero.
      </Text>
      <Title order={4}>Level 4 Heading</Title>
      <Title order={5}>Level 5 Heading</Title>
      <Title order={6}>Level 6 Heading</Title>
    </>
  );
};
