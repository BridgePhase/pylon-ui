import { MantineThemeOverride, Select } from "@mantine/core";
import { MantineTheme } from "../../../themes/mantine-theme";
import { UswdsTheme } from "../../../themes";

const THEMES: Record<string, MantineThemeOverride> = {
  "USWDS Theme": UswdsTheme,
  "Mantine Default": MantineTheme,
};

export const ThemeSelect: React.FC<{
  onChange: (theme: MantineThemeOverride) => void;
}> = ({ onChange }) => {
  return (
    <Select
      defaultValue={Object.keys(THEMES)[0]}
      data={Object.keys(THEMES)}
      onChange={(key) => {
        if (key) {
          onChange(THEMES[key]);
        }
      }}
    />
  );
};
