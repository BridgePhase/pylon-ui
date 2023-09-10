import { Flex } from '@mantine/core';
import { ReactNode } from 'react';

export interface DataListWidgetProps {
  children: ReactNode;
}

/**
 * Allows for the creation of a data list. The data list provides a compact and
 * responsive way to display and interact with. Each item in the data list can be
 * one of `<DataListItem>` or `<InteractiveDataListItem>`. The `InteractiveDataListItem`
 * provides a way to handle a click event on the particular element to handle events
 * that could trigger a detailed view, navigation, etc.
 */
export const DataListWidget: React.FC<DataListWidgetProps> = ({ children }) => {
  return <Flex direction={'column'}>{children}</Flex>;
};
