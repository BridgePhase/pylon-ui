import { Box } from "@mantine/core";
import { ReactNode } from "react";

export const HeaderNav: React.FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const items = Array.isArray(children) ? [...children] : [children];

  return (
    <Box component="nav" className="usa-nav" ml="auto">
      <ul className="usa-nav__primary usa-accordion">
        {items.map((item) => (
          <li className="usa-nav__primary-item">{item}</li>
        ))}
      </ul>
    </Box>
  );
};
