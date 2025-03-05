import { alpha, Group, Text } from "@mantine/core";
import { IconAperture, IconPokeball } from "@tabler/icons-react";
import React, { ReactNode } from "react";

export const IconLabel: React.FC<{
  label: string;
  icon: ReactNode;
  color?: string;
  right?: boolean;
  pos?: "static" | "absolute";
}> = ({ label, icon, color = "#000", right = false, pos = "static" }) => {
  return (
    <Group
      gap="3"
      pos={pos}
      left={right ? "" : "0"}
      right={right ? "0" : ""}
      bg={alpha(color, 0.67)}
      h="30px"
      px="10px"
      c="white"
      lh="30px"
      justify="center"
    >
      {icon}
      <Text>{label}</Text>
    </Group>
  );
};

export const LABEL_USWDS = (
  <IconLabel label="USWDS" icon={<IconAperture />} color="#C08081" />
);

export const LABEL_MANTINE = (
  <IconLabel
    label="Themed Mantine"
    icon={<IconPokeball />}
    color="#80BFBE"
    right
  />
);
