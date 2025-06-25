import { Text, Title, Stack, Box, Grid, SimpleGrid } from "@mantine/core";
import { BarChart } from "@mantine/charts";

export const LandingPage = () => {
  return (
    <Stack>
      <Title order={2}>Lorem Ipsum</Title>
      <Text className="font-heading-sm text-italic">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..."
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus
        pulvinar commodo. Nullam dignissim semper ipsum, id dapibus nibh maximus
        at. Suspendisse purus nulla, ullamcorper sed vulputate ut, malesuada
        pharetra magna. Nulla commodo sit amet sem eget consequat. Cras
        hendrerit leo in ante pulvinar, non molestie est rhoncus. Nunc rutrum
        luctus rutrum. Mauris sagittis dui dui. Vivamus eget purus tincidunt,
        tempor turpis fringilla, blandit erat. Curabitur id pellentesque diam.
        Donec volutpat elit in ante venenatis rutrum. Vestibulum vehicula
        pellentesque libero, sit amet feugiat tellus sagittis et. Fusce mollis
        nunc nec ex posuere aliquet. Donec pellentesque odio vitae odio
        ultrices, ac lobortis lorem dapibus. Mauris at suscipit urna.
      </Text>
      <BarChart
        h={300}
        orientation="horizontal"
        withBarValueLabel
        dataKey="date"
        xAxisProps={{
          domain: [0, 10],
        }}
        barChartProps={{
          margin: {
            top: 10,
            right: 0,
            left: -20,
            bottom: 10,
          },
          barGap: 2,
        }}
        yAxisProps={{
          domain: [0, 100],
        }}
        data={[{ arithmetic: [0, 10], exponential: [0, 100] }]}
        textColor={"black"}
        series={[
          {
            color: "red",
            name: "arithmetic",
          },
          {
            color: "green",
            name: "exponential",
          },
        ]}
      />
      <Text>
        Nulla ut volutpat ligula. In porta ac ligula sit amet faucibus. Sed leo
        ipsum, varius eget dapibus et, vehicula sit amet nulla. Cras nisi purus,
        aliquam sit amet dapibus ut, rhoncus vitae mi. In vulputate erat at
        magna vulputate commodo. Nulla dictum metus ut dapibus aliquam. Maecenas
        ac dui consequat, ullamcorper massa semper, tristique diam.
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
        in, congue euismod nunc. Pellentesque sed mi vel neque ultricies sodales
        condimentum eu metus. Proin libero magna, iaculis sollicitudin tincidunt
        non, laoreet id dolor. Aenean ut justo vestibulum, auctor elit sit amet,
        tincidunt massa. Integer hendrerit tincidunt mauris ut placerat. Fusce
        congue eleifend leo vitae euismod. Nullam metus urna, ornare nec elit
        et, sollicitudin ullamcorper lorem. Maecenas a lorem quis sem blandit
        varius sed sed nunc.
      </Text>
      <Text>
        Maecenas eget interdum nibh, eu congue nisl. Nam vestibulum ipsum sed
        augue ultrices tempus. Donec orci lacus, volutpat id vehicula at, varius
        a magna. Nullam suscipit orci non tortor pretium dignissim. Pellentesque
        vel condimentum quam. Mauris maximus nunc a mattis dapibus. In vehicula
        urna nibh, nec hendrerit enim eleifend non. Aenean id facilisis metus.
        Sed odio nulla, vestibulum vitae sollicitudin ut, pretium in libero.
      </Text>
      <Text>
        Quisque placerat efficitur felis, sit amet porta erat tincidunt nec.
        Curabitur at elementum augue. Pellentesque sodales odio mi, ut imperdiet
        enim luctus in. Etiam sed faucibus augue, ut sollicitudin sapien. Nam
        cursus sodales orci suscipit gravida. Nam laoreet mi augue, sed
        efficitur elit tincidunt id. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed malesuada fermentum nibh eget finibus. Vivamus
        libero turpis, pulvinar id sapien sed, tincidunt congue mi. Praesent
        ultricies tellus at congue imperdiet. Pellentesque faucibus mi a leo
        dignissim, nec auctor metus tincidunt. Phasellus id lacus non lectus
        efficitur aliquet vel id purus.
      </Text>
    </Stack>
  );
};
