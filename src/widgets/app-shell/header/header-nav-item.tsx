import { Group, List, MantineSpacing, Menu, StyleProp } from "@mantine/core";
import { ReactNode } from "react";
import { HeaderNavLink } from "./header-nav-link";
import { IconCaretDownFilled } from "@tabler/icons-react";

export interface HeaderNavItemProps {
  key: string;
  href?: string;
  current?: boolean;
  icon?: ReactNode;
  ml?: StyleProp<MantineSpacing>;
  body: ReactNode;
  children?: HeaderNavItemProps[];
}

export const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  key,
  href,
  current,
  icon,
  ml = 0,
  body,
  children,
}) => {
  const item = href ? (
    <HeaderNavLink href={href} current={current} key={key}>
      <Group gap="xs" align="center">
        {icon} {body}
      </Group>
    </HeaderNavLink>
  ) : (
    <Group gap={5} align="center" key={key}>
      {icon} {body}
    </Group>
  );

  let content;
  if (children && children.length > 0) {
    content = (
      <Menu>
        <Menu.Target>
          <Group>
            {item}
            <IconCaretDownFilled />
          </Group>
        </Menu.Target>
        <Menu.Dropdown className="header-nav-item-menu-dropdown">
          <List type="unordered" listStyleType="none">
            {children.map((child) => (
              <HeaderNavItem {...child} />
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
