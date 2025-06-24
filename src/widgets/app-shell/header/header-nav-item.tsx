import {
  Button,
  Group,
  List,
  MantineSpacing,
  Menu,
  StyleProp,
} from "@mantine/core";
import { ReactNode } from "react";
import { HeaderNavLink } from "./header-nav-link";
import { IconCaretDownFilled } from "@tabler/icons-react";

export interface HeaderNavItemProps {
  id: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
  icon?: ReactNode;
  ml?: StyleProp<MantineSpacing>;
  body: ReactNode;
  children?: HeaderNavItemProps[];
}

export const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  href,
  onClick,
  current,
  icon,
  ml = 0,
  body,
  children,
}) => {
  let item: ReactNode;
  if (href) {
    item = (
      <HeaderNavLink href={href} current={current}>
        <Group gap="xs" align="center">
          {icon} {body}
        </Group>
      </HeaderNavLink>
    );
  } else if (onClick) {
    item = (
      <Button
        onClick={onClick}
        variant={current ? "light" : "subtle"}
        leftSection={icon}
      >
        {body}
      </Button>
    );
  } else {
    item = (
      <Group gap={5} align="center">
        {icon} {body}
      </Group>
    );
  }

  let content;
  if (children && children.length > 0) {
    content = (
      <Menu>
        <Menu.Target>
          <Group style={{ cursor: "pointer" }}>
            {item}
            <IconCaretDownFilled />
          </Group>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-item-menu-dropdown">
          <List type="unordered" listStyleType="none">
            {children.map((item) => (
              <HeaderNavItem
                key={item.id}
                id={item.id}
                href={item.href}
                onClick={item.onClick}
                current={item.current}
                icon={item.icon}
                ml={item.ml}
                body={item.body}
              >
                {item.children}
              </HeaderNavItem>
            ))}
          </List>
        </Menu.Dropdown>
      </Menu>
    );
  } else {
    content = item;
  }

  return (
    <List.Item px="md" ml={ml} className="usa-nav__submenu-item">
      {content}
    </List.Item>
  );
};
