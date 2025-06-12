import { Flex, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import { PropsWithChildren } from "react";
import { DataListItemProps } from "./_datalistitem.types";
import { useHover } from "@mantine/hooks";

export const DataListItem: React.FC<PropsWithChildren<DataListItemProps>> = ({
  image,
  children,
  side,
}) => {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const { hovered, ref } = useHover();
  return (
    <Flex
      className="datalistItem"
      gap="sm"
      p="sm"
      style={{
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
        backgroundColor: hovered
          ? colorScheme === "light"
            ? theme.colors.gray[0]
            : theme.colors.gray[8]
          : "inherit",
      }}
      ref={ref}
    >
      {image}
      <div style={{ flex: 1 }}>{children}</div>
      {side && <div>{side}</div>}
    </Flex>
  );
};
