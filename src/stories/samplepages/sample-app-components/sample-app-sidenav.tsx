import {
  Flex,
  Highlight,
  NavLink,
  ScrollArea,
  Text,
  TextInput,
} from "@mantine/core";
import { STYLING_PAGES, SAMPLE_COMPONENTS } from "../sample-app";
import { useLocation } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export const SampleAppSideNav = () => {
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStylingPages = STYLING_PAGES.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredComponents = SAMPLE_COMPONENTS.filter((page) =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollArea offsetScrollbars="x">
      <TextInput
        label={null}
        mt={0}
        w="calc(100% - 10px)"
        inputWrapperOrder={["input"]}
        mx="auto"
        mb="sm"
        size="xs"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.currentTarget.value)}
        placeholder="Search..."
        rightSection={<IconSearch color="white" size={20} />}
        rightSectionProps={{
          className: "usa-button",
          style: {
            marginRight: 0,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 0,
          },
        }}
      />

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
