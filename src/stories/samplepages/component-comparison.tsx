import { Group, Tabs, Text } from "@mantine/core";
import {
  IconAperture,
  IconCaretLeftRightFilled,
  IconPokeball,
} from "@tabler/icons-react";
import React from "react";
import { ReactCompareSlider } from "react-compare-slider";
import { SampleComponent } from "./sample-app";

export const ComponentComparison: React.FC<{ component: SampleComponent }> = ({
  component,
}) => {
  return (
    <Tabs defaultValue="split" variant="outline">
      <Tabs.List>
        <Tabs.Tab value="split" leftSection={<IconCaretLeftRightFilled />}>
          Split View
        </Tabs.Tab>
        <Tabs.Tab value="uswds" leftSection={<IconAperture color="#C08081" />}>
          USWDS
        </Tabs.Tab>
        <Tabs.Tab
          value="mantine"
          leftSection={<IconPokeball color="#80BFBE" />}
        >
          Mantine
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="split" p="md">
        <ReactCompareSlider
          boundsPadding={0}
          itemOne={
            <>
              <Group
                gap="3"
                pos="absolute"
                left="0"
                bg="#000a"
                h="30px"
                px="10px"
                c="white"
                lh="30px"
              >
                <IconAperture />
                <Text>USWDS</Text>
              </Group>
              {component.uswdsComponent}
            </>
          }
          itemTwo={
            <>
              <Group
                gap="3"
                pos="absolute"
                right="0"
                bg="#000a"
                h="30px"
                px="10px"
                c="white"
                lh="30px"
              >
                <IconPokeball />
                <Text>Themed Mantine</Text>
              </Group>
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
      <Tabs.Panel
        value="uswds"
        p="md"
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderTop: "0",
        }}
      >
        {component.uswdsComponent}
      </Tabs.Panel>
      <Tabs.Panel
        value="mantine"
        p="md"
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderTop: "0",
        }}
      >
        {component.mantineComponent}
      </Tabs.Panel>
    </Tabs>
  );
};
