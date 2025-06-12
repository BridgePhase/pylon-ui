import { PropsWithChildren } from "react";
import { InteractiveDataListItemProps } from "./_datalistitem.types";
import { Flex, UnstyledButton } from "@mantine/core";

export const InteractiveDataListItem: React.FC<
  PropsWithChildren<InteractiveDataListItemProps>
> = ({ image, children, side, onSelect }) => {
  return (
    <UnstyledButton
      className="datalistItem datalistItemInteractive"
      onClick={onSelect}
      w="100%"
    >
      <Flex gap={"sm"}>
        {image}
        <div style={{ flex: 1 }}>{children}</div>
        {side && <div>{side}</div>}
      </Flex>
    </UnstyledButton>
  );
};
