import { NavLink } from "@mantine/core";
import { STYLING_PAGES, SAMPLE_COMPONENTS } from "../sample-app";
import { useLocation } from "react-router-dom";

export const SampleAppSideNav = () => {
  const { pathname } = useLocation();
  console.log("Location:", location);
  return (
    <>
      {STYLING_PAGES.map((page) => {
        const path = `/${page.name.toLowerCase()}`;
        return (
          <NavLink
            key={page.name}
            label={page.name}
            href={path}
            active={pathname === path}
          />
        );
      })}
      <NavLink label="Components" disabled>
        {SAMPLE_COMPONENTS.map((page) => {
          const path = `/components/${page.name.toLowerCase()}`;
          return (
            <NavLink
              key={page.name}
              label={page.name}
              active={pathname === path}
              href={path}
            />
          );
        })}
      </NavLink>
    </>
  );
};
