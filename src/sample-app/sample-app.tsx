import {
  MantineProvider,
  MantineThemeOverride,
  MantineThemeColorsOverride,
} from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import { SampleAppShell } from "./sample-app-shell";

type SampleAppProps = {
  theme: MantineThemeOverride;
  buttonColors?: MantineThemeColorsOverride;
  alertColors?: MantineThemeColorsOverride;
};

export const SampleApp: React.FC<SampleAppProps> = ({ theme }) => {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <BrowserRouter>
        <SampleAppShell />
      </BrowserRouter>
    </MantineProvider>
  );
};
