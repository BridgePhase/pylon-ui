import type { Preview } from "@storybook/react-vite";
import { MantineProvider } from "@mantine/core";
import { UswdsTheme } from "../src/themes/uswds-theme";

import "@mantine/core/styles.css";

const preview: Preview = {
  parameters: {
    // actions: {  argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (renderStory: any) => (
    <MantineProvider theme={UswdsTheme} forceColorScheme="light">
      Now with Mantine!
      {renderStory()}
    </MantineProvider>
  ),
];

export default preview;
