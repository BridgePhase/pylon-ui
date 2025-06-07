import React, { ReactNode } from "react";
import { Stack } from "@mantine/core";

export const PylonCardGroup: React.FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  return <Stack className="usa-card-group">{children}</Stack>;
};
