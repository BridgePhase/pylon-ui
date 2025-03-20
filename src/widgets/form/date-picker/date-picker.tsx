import { ActionIcon, Group, Popover } from "@mantine/core";
import { Calendar, DateInput, DateInputProps } from "@mantine/dates";
import React from "react";

export const PylonDatePicker: React.FC<DateInputProps> = (props) => {
  return (
    <Group wrap="nowrap" align="flex-end" w="100%" gap={0}>
      <DateInput {...props} />
      <Popover offset={0} position="bottom-end" withinPortal>
        <Popover.Target>
          <ActionIcon
            className="usa-date-picker__button"
            radius={0}
            color="gray.1"
            style={{ alignSelf: "unset", padding: "20px 0" }}
          />
        </Popover.Target>
        <Popover.Dropdown p={0}>
          <Calendar
            bg="gray.3"
            firstDayOfWeek={0}
            ff='"Public Sans Web", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            styles={() => ({
              root: {
                marginTop: "-3px",
              },
              outside: {
                opacity: 0.9,
              },
              weekday: {
                color: "black",
              },
              week: {
                color: "pink",
              },
            })}
            className="pylon-date-picker"
            role="application"
          />
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
};
