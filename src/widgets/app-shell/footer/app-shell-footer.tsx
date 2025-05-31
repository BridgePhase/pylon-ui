import { Box } from "@mantine/core";

export const PylonAppShellFooter: React.FC<{
  size?: "big" | "medium" | "slim";
  heading?: React.ReactNode;
  image: React.ReactNode;
}> = ({ size = "medium", heading, image }) => {
  return (
    <Box className="usa-footer__secondary-section">
      <div
        className={`usa-footer__logo usa-footer__${size} grid-row grid-gap-2`}
        data-testid="footerLogo"
      >
        <div className="grid-col-auto">{image}</div>
        <div className="grid-col-auto">{heading}</div>
      </div>
    </Box>
  );
};
