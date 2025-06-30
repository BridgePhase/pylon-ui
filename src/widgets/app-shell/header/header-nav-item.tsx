import cx from "clsx";
import {
  Anchor,
  Group,
  List,
  MantineSpacing,
  Menu,
  StyleProp,
} from "@mantine/core";
import { ReactNode } from "react";
import { HeaderNavLink } from "./header-nav-link";
import { IconCaretDownFilled } from "@tabler/icons-react";

import classes from "./header-nav-item.module.css";

export interface HeaderNavItemProps {
  id: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
  icon?: ReactNode;
  ml?: StyleProp<MantineSpacing>;
  body: ReactNode;
  dark?: boolean;
  children?: HeaderNavItemProps[];
}

export const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  href,
  onClick,
  current,
  icon,
  ml = 0,
  body,
  dark,
  children,
}) => {
  let item: ReactNode;
  if (href) {
    item = (
      <HeaderNavLink href={href} current={current}>
        <Group align="center">
          {icon} {body}
        </Group>
      </HeaderNavLink>
    );
  } else if (onClick) {
    // Button style link
    item = (
      <Anchor
        ml={"-1rem"}
        mr={"-1rem"}
        onClick={onClick}
        display="block"
        td="none"
        px="xs"
        py={2}
        className={cx({
          [classes.pylonHeaderNavItem]: true,
          [classes.pylonHeaderNavItemButton]: true,
          [classes.pylonHeaderNavItemDark]: dark,
          [classes.pylonHeaderNavItemLight]: !dark,
          [classes.pylonHeaderNavItemCurrent]: current,
        })}
      >
        <Group gap={4} wrap="nowrap">
          {icon}
          {body}
        </Group>
      </Anchor>
    );
  } else {
    item = (
      <Group gap={5} align="center" wrap="nowrap">
        {icon} {body}
      </Group>
    );
  }

  let content;
  if (children && children.length > 0) {
    // Menu
    content = (
      <Menu offset={0}>
        <Menu.Target>
          <Group
            ml={"-1rem"}
            mr={"-1rem"}
            style={{ cursor: "pointer" }}
            gap={4}
            className={cx({
              [classes.pylonHeaderNavItem]: true,
              [classes.pylonHeaderNavItemButton]: true,
              [classes.pylonHeaderNavItemDark]: dark,
              [classes.pylonHeaderNavItemLight]: !dark,
              [classes.pylonHeaderNavItemCurrent]: current,
            })}
            wrap="nowrap"
          >
            {item}
            <IconCaretDownFilled opacity={0.5} size={12} />
          </Group>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-item-menu-dropdown">
          <List type="unordered" listStyleType="none">
            {children.map((item) => (
              <Menu.Item
                key={item.id}
                id={item.id}
                onClick={
                  item.onClick
                    ? item.onClick
                    : () => (window.location.href = item.href ?? "#")
                }
                leftSection={item.icon}
                ml={item.ml}
              >
                {item.body}
              </Menu.Item>
            ))}
          </List>
        </Menu.Dropdown>
      </Menu>
    );
  } else {
    content = item;
  }

  return (
    <List.Item
      px="md"
      ml={ml}
      className="usa-nav__submenu-item"
      style={{
        alignContent: "flex-end",
      }}
    >
      {content}
    </List.Item>
  );
};
