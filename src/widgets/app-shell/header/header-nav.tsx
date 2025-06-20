import { ReactNode } from "react";
import { HeaderNavItem } from "./header-nav-tem";

export const HeaderNav: React.FC<{
  items: ReactNode[];
}> = ({ items }) => {
  return (
    <ul className="usa-nav__primary usa-nav__primary--desktop ">
      {items.map((item) => (
        <HeaderNavItem item={item} />
      ))}
    </ul>
  );
};
