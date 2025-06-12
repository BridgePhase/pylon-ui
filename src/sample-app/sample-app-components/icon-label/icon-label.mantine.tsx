import { IconPokeball } from "@tabler/icons-react";
import { IconLabel } from "./icon-label";
import React from "react";

export const IconLabelMantine: React.FC = () => (
  <IconLabel
    label="Themed Mantine"
    icon={<IconPokeball />}
    color="#80BFBE"
    right
  />
);
