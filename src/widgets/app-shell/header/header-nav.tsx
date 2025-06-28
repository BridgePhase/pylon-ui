import { HeaderNavItem, HeaderNavItemProps } from "./header-nav-item";
import { List } from "@mantine/core";

export const HeaderNav: React.FC<{
  items: HeaderNavItemProps[];
  dark?: boolean;
}> = ({ items, dark = false }) => {
  return (
    <List
      style={{ flexGrow: 1 }}
      className={`usa-nav__primary usa-nav__primary--desktop usa-nav__primary--${
        dark ? "dark" : "light"
      }`}
      type="unordered"
      listStyleType="none"
    >
      {items.map((item) => (
        <HeaderNavItem
          key={item.id}
          id={item.id}
          href={item.href}
          onClick={item.onClick}
          current={item.current}
          icon={item.icon}
          ml={item.ml}
          body={item.body}
          dark={dark}
        >
          {item.children}
        </HeaderNavItem>
      ))}
    </List>
  );
};
