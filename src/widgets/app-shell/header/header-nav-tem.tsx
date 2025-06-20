import { ReactNode } from "react";

export const HeaderNavItem: React.FC<{
  item: ReactNode;
}> = ({ item }) => {
  return <li className="usa-nav__submenu-item">{item}</li>;
};
