import { Box } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { ReactNode } from "react";

export const HeaderNav: React.FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const items = Array.isArray(children) ? [...children] : [children];

  return (
    <Box component="nav" className="usa-nav" ml="auto">
      <ul
        className="usa-nav__primary usa-accordion"
        style={{ alignItems: "center" }}
      >
        {items.map((item) => (
          <li className="usa-nav__primary-item" key={useId()}>
            {item}
          </li>
        ))}
      </ul>
    </Box>
  );
};
