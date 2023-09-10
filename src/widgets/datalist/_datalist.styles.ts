import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  datalistItemInteractive: {
    width: '100%',
  },
  datalistItem: {
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[3],
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));
