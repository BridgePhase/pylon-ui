import { createStyles } from "@mantine/emotion";

export const useStyles = createStyles((theme, _, u) => ({
  datalistItemInteractive: {
    width: "100%",
  },
  datalistItem: {
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[3],
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    "&:hover": {
      [u.dark]: {
        backgroundColor: theme.colors.dark[8],
      },
      [u.light]: {
        backgroundColor: theme.colors.gray[0],
      },
    },
  },
}));
