import {
  Divider,
  Flex,
  Group,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Tabs,
} from "@mantine/core";
import {
  IconAperture,
  IconLayoutColumns,
  IconLayoutRows,
  IconLayoutSidebar,
  IconPokeball,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { SampleComponent } from "../sample-app";
import { IconLabel, LABEL_MANTINE, LABEL_USWDS } from "./icon-label";

export const ComponentComparison: React.FC<{ component: SampleComponent }> = ({
  component,
}) => {
  const [numCols, setNumCols] = useState<number>(2);

  return (
    <Tabs defaultValue="both" variant="pills">
      <Tabs.List mb="md">
        <Tabs.Tab value="uswds" leftSection={<IconAperture color="#C08081" />}>
          USWDS
        </Tabs.Tab>
        <Tabs.Tab
          value="mantine"
          leftSection={<IconPokeball color="#80BFBE" />}
        >
          Themed Mantine
        </Tabs.Tab>
        <Divider orientation="vertical" />
        <Tabs.Tab
          value="both"
          leftSection={
            numCols === 2 ? <IconLayoutColumns /> : <IconLayoutRows />
          }
        >
          Both
        </Tabs.Tab>
        <Tabs.Tab
          value="split"
          leftSection={<IconLayoutSidebar rotate={Math.PI} />}
        >
          Split View
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="uswds">{component.uswdsComponent}</Tabs.Panel>
      <Tabs.Panel value="mantine">{component.mantineComponent}</Tabs.Panel>
      <Tabs.Panel value="both">
        <Flex w="100%" gap="xs" align="center" mb="xs">
          <Divider size="xs" style={{ flexGrow: 1 }} />
          <SegmentedControl
            size="xs"
            value={numCols.toString()}
            onChange={(newValue) => setNumCols(parseInt(newValue))}
            data={[
              {
                value: "2",
                label: (
                  <Group wrap="nowrap" gap="xs">
                    <IconLayoutColumns size={16} /> Vertical
                  </Group>
                ),
              },
              {
                value: "1",
                label: (
                  <Group wrap="nowrap" gap="xs">
                    <IconLayoutRows size={16} /> Horizontal
                  </Group>
                ),
              },
            ]}
          />{" "}
          <Divider size="xs" style={{ flexGrow: 1 }} />
        </Flex>
        <SimpleGrid cols={numCols}>
          <Stack gap={0} justify="flex-start">
            {LABEL_USWDS}
            {component.uswdsComponent}
          </Stack>
          <Stack gap={0}>
            {LABEL_MANTINE}
            {component.mantineComponent}
          </Stack>
        </SimpleGrid>
      </Tabs.Panel>
      <Tabs.Panel value="split">
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={
            <>
              <IconLabel
                label="USWDS"
                icon={<IconAperture />}
                color="#C08081"
                pos="absolute"
              />
              {component.uswdsComponent}
            </>
          }
          itemTwo={
            <>
              <IconLabel
                label="Themed Mantine"
                icon={<IconPokeball />}
                color="#80BFBE"
                pos="absolute"
                right
              />
              {component.mantineComponent}
            </>
          }
          keyboardIncrement="5%"
          position={50}
          style={{
            backgroundColor: "white",
            backgroundImage:
              "\n      linear-gradient(45deg, #eeea 25%, transparent 25%),\n      linear-gradient(-45deg, #eeea 25%, transparent 25%),\n      linear-gradient(45deg, transparent 75%, #eeea 75%),\n      linear-gradient(-45deg, transparent 75%, #eeea 75%)",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            backgroundSize: "20px 20px",
            width: "100%",
          }}
        />
      </Tabs.Panel>
    </Tabs>
  );
};
