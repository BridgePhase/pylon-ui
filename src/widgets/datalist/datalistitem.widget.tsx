import { Flex } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useStyles } from './_datalist.styles';
import { DataListItemProps } from './_datalistitem.types';

export const DataListItem: React.FC<PropsWithChildren<DataListItemProps>> = ({
  image,
  children,
  side,
}) => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.datalistItem} gap={'sm'} px="sm">
      {image}
      <div style={{ flex: 1 }}>{children}</div>
      {side && <div>{side}</div>}
    </Flex>
  );
};
