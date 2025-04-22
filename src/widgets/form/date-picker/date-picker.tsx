import { ActionIcon, Flex, Popover } from "@mantine/core";
import { Calendar, DateInput, DateInputProps } from "@mantine/dates";
import React, { useState } from "react";

export const PylonDatePicker: React.FC<DateInputProps> = (props) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  return (
    <Flex
      wrap="nowrap"
      align="flex-end"
      w="100%"
      gap={0}
      className="pylon-date-picker-root"
    >
      <DateInput {...props} />
      <Popover
        offset={0}
        position="bottom-end"
        withinPortal
        opened={calendarOpen}
        trapFocus
      >
        <Popover.Target>
          <ActionIcon
            className="usa-date-picker__button pylon-date-picker-button"
            radius={0}
            color="gray.1"
            style={{
              alignSelf: "unset",
              padding: "20px 0",
              position: "absolute",
              right: 15,
              backgroundColor: calendarOpen
                ? "var(--mantine-color-gray-2)"
                : "",
            }}
            onClick={(_event) => setCalendarOpen(!calendarOpen)}
          />
        </Popover.Target>
        <Popover.Dropdown p={0} className="pylon-date-picker-dropdown">
          <Calendar
            bg="gray.3"
            firstDayOfWeek={0}
            ff='"Public Sans Web", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            className="pylon-date-picker"
            role="application"
            defaultDate={new Date()}
          />
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
};
