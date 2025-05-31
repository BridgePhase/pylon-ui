import { AnchorVariant, ButtonVariant, MantineSize } from "@mantine/core";

type ExtendedAnchorVariant =
  | AnchorVariant
  | "default"
  | "external"
  | "external-alt";

declare module "@mantine/core" {
  export interface AnchorProps {
    variant?: ExtendedAnchorVariant;
  }
}
