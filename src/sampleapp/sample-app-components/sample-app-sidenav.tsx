import { Flex, Highlight, NavLink, ScrollArea, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import React from "react";
import { STYLE_GUIDES } from "../../sample-app/sample-app-style-guides";
import { SAMPLE_COMPONENTS } from "../../sample-app/sample-app-components";

export const SampleAppSideNav: React.FC<{ searchQuery: string }> = ({
  searchQuery,
}) => {
  const { pathname } = useLocation();

  const filteredStylingPages = STYLE_GUIDES.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredComponents = SAMPLE_COMPONENTS.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollArea offsetScrollbars="x">
      <NavLink
        label={
          <Flex gap={3} align="center" w="100%">
            <Text fw="bold" size="sm">
              Styling
            </Text>
          </Flex>
        }
      >
        {filteredStylingPages.map((page) => {
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
      </NavLink>
      {filteredComponents.length > 0 && (
        <NavLink
          label={
            <Flex gap={3} align="center" w="100%">
              <Text fw="bold" size="sm">
                Components
              </Text>
            </Flex>
          }
        >
          {filteredComponents.map((page) => {
            if (!page.mantineComponent || !page.uswdsComponent) {
              return (
                <NavLink
                  key={page.name}
                  label={
                    <Highlight highlight={searchQuery} size="sm">
                      {page.name}
                    </Highlight>
                  }
                  disabled
                />
              );
            }
            const path = `/components/${page.name.toLowerCase()}`;
            return (
              <NavLink
                key={page.name}
                label={
                  <Highlight highlight={searchQuery} size="sm">
                    {page.name}
                  </Highlight>
                }
                active={pathname === path}
                href={path}
              />
            );
          })}
        </NavLink>
      )}
    </ScrollArea>
  );
};
