import type { Preview, Decorator } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { UswdsTheme } from "../src/themes/uswds-theme";

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

export const decorators: Decorator[] = [
  (renderStory) => (
    <MantineProvider theme={UswdsTheme} forceColorScheme="light">
      <BrowserRouter>
        Now with Mantine!
        {renderStory()}
      </BrowserRouter>
    </MantineProvider>
  ),
];

export default preview;
