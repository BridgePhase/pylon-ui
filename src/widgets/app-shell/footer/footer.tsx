import { Box, Flex, Stack } from "@mantine/core";
import { ReactNode } from "react";

export const PylonFooter: React.FC<{
  size?: "big" | "medium" | "slim";
  heading?: ReactNode;
  image: ReactNode;
  children?: ReactNode;
  preFooter?: ReactNode;
}> = ({
  size = "medium",
  heading,
  image,
  children = null,
  preFooter = null,
}) => {
  const footer = (
    <Box
      className={`usa-footer__${preFooter ? "secondary" : "primary"}-section`}
    >
      <Flex
        className={`usa-footer__logo usa-footer__${size} grid-row grid-gap-2`}
        data-testid="footerLogo"
      >
        <Box className="grid-col-auto" flex="0 auto">
          {image}
        </Box>
        <Box className="grid-col-auto" flex="1 auto">
          {heading}
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Box>
  );

  if (preFooter) {
    return (
      <Stack gap={0}>
        <Box className="usa-footer__primary-section">{preFooter}</Box>
        {footer}
      </Stack>
    );
  }

  return footer;
};
