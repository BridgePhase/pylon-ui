import {
  Text,
  Title,
  Stack,
  Box,
  Grid,
  SimpleGrid,
  Group,
  TextInput,
} from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { SampleAppSideNav } from "../sample-app-components/sample-app-sidenav";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

export const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Group wrap="nowrap" gap="xl" align="flex-start">
      <Stack>
        <TextInput
          label={null}
          mt={9}
          w="calc(100% - 10px)"
          inputWrapperOrder={["input"]}
          mx="auto"
          mb="sm"
          size="xs"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.currentTarget.value)}
          placeholder="Search..."
          rightSection={<IconSearch color="white" size={20} />}
          rightSectionProps={{
            className: "usa-button",
            style: {
              marginRight: 0,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 0,
              height: 30,
            },
          }}
          classNames={{
            root: "usa-search",
            input: "usa-search__input",
          }}
        />
        <Title order={3} m="0">
          Contents
        </Title>
        <SampleAppSideNav searchQuery={searchQuery} />
      </Stack>

      <Stack mih={10}>
        <Title order={2}>Lorem Ipsum</Title>
        <Text className="font-heading-sm text-italic">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
          pulvinar commodo. Nullam dignissim semper ipsum, id dapibus nibh
          maximus at. Suspendisse purus nulla, ullamcorper sed vulputate ut,
          malesuada pharetra magna. Nulla commodo sit amet sem eget consequat.
          Cras hendrerit leo in ante pulvinar, non molestie est rhoncus. Nunc
          rutrum luctus rutrum. Mauris sagittis dui dui. Vivamus eget purus
          tincidunt, tempor turpis fringilla, blandit erat. Curabitur id
          pellentesque diam. Donec volutpat elit in ante venenatis rutrum.
          Vestibulum vehicula pellentesque libero, sit amet feugiat tellus
          sagittis et. Fusce mollis nunc nec ex posuere aliquet. Donec
          pellentesque odio vitae odio ultrices, ac lobortis lorem dapibus.
          Mauris at suscipit urna.
        </Text>
        <BarChart
          h={300}
          withBarValueLabel
          dataKey="xKey"
          data={[
            { xKey: "arithmetic", first: 1, second: 2, third: 3, fourth: 4 },
            { xKey: "exponential", first: 1, second: 2, third: 4, fourth: 8 },
          ]}
          series={[
            {
              color: "red.4",
              name: "first",
            },
            {
              color: "green.4",
              name: "second",
            },
            {
              color: "blue.4",
              name: "third",
            },
            {
              color: "orange.4",
              name: "fourth",
            },
          ]}
        />
        <Text>
          Nulla ut volutpat ligula. In porta ac ligula sit amet faucibus. Sed
          leo ipsum, varius eget dapibus et, vehicula sit amet nulla. Cras nisi
          purus, aliquam sit amet dapibus ut, rhoncus vitae mi. In vulputate
          erat at magna vulputate commodo. Nulla dictum metus ut dapibus
          aliquam. Maecenas ac dui consequat, ullamcorper massa semper,
          tristique diam.
        </Text>

        <Grid bg="red.2" mt="md" h="20vh" w="100%">
          <Grid.Col span={9}>
            <Box bg="orange.4">A</Box>
          </Grid.Col>

          <Grid.Col span={3}>
            <Box bg="yellow.4">B</Box>
          </Grid.Col>

          <Grid.Col span={6}>
            <Box bg="green.4">C</Box>
          </Grid.Col>

          <Grid.Col span={6}>
            <Box bg="blue.4">D</Box>
          </Grid.Col>
        </Grid>

        <SimpleGrid cols={2} bg="red.2" mt="md" h="20vh" w="100%">
          <Box bg="orange.4">A</Box>
          <Box bg="yellow.4">B</Box>
          <Box bg="green.4">C</Box>
          <Box bg="blue.4">D</Box>
        </SimpleGrid>

        <Text>
          Cras quis vestibulum libero. Praesent est felis, ultrices quis turpis
          in, congue euismod nunc. Pellentesque sed mi vel neque ultricies
          sodales condimentum eu metus. Proin libero magna, iaculis sollicitudin
          tincidunt non, laoreet id dolor. Aenean ut justo vestibulum, auctor
          elit sit amet, tincidunt massa. Integer hendrerit tincidunt mauris ut
          placerat. Fusce congue eleifend leo vitae euismod. Nullam metus urna,
          ornare nec elit et, sollicitudin ullamcorper lorem. Maecenas a lorem
          quis sem blandit varius sed sed nunc.
        </Text>
        <Text>
          Maecenas eget interdum nibh, eu congue nisl. Nam vestibulum ipsum sed
          augue ultrices tempus. Donec orci lacus, volutpat id vehicula at,
          varius a magna. Nullam suscipit orci non tortor pretium dignissim.
          Pellentesque vel condimentum quam. Mauris maximus nunc a mattis
          dapibus. In vehicula urna nibh, nec hendrerit enim eleifend non.
          Aenean id facilisis metus. Sed odio nulla, vestibulum vitae
          sollicitudin ut, pretium in libero.
        </Text>
        <Text>
          Quisque placerat efficitur felis, sit amet porta erat tincidunt nec.
          Curabitur at elementum augue. Pellentesque sodales odio mi, ut
          imperdiet enim luctus in. Etiam sed faucibus augue, ut sollicitudin
          sapien. Nam cursus sodales orci suscipit gravida. Nam laoreet mi
          augue, sed efficitur elit tincidunt id. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed malesuada fermentum nibh eget
          finibus. Vivamus libero turpis, pulvinar id sapien sed, tincidunt
          congue mi. Praesent ultricies tellus at congue imperdiet. Pellentesque
          faucibus mi a leo dignissim, nec auctor metus tincidunt. Phasellus id
          lacus non lectus efficitur aliquet vel id purus.
        </Text>
      </Stack>
    </Group>
  );
};
