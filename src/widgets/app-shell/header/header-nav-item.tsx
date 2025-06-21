import { List } from "@mantine/core";
import { ReactNode } from "react";

export const HeaderNavItem: React.FC<{
  item: ReactNode;
}> = ({ item }) => {
  return (
    <List.Item px="md" className="usa-nav__submenu-item">
      {item}
    </List.Item>
  );
};
