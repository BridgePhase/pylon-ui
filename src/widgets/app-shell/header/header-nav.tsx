import { ReactNode } from "react";
import { HeaderNavItem } from "./header-nav-item";
import { List } from "@mantine/core";

export const HeaderNav: React.FC<{
  items: ReactNode[];
}> = ({ items }) => {
  return (
    <List
      className="usa-nav__primary usa-nav__primary--desktop"
      type="unordered"
      listStyleType="none"
    >
      {items.map((item) => (
        <HeaderNavItem item={item} />
      ))}
    </List>
  );
};
