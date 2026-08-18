import type { Preview, Decorator } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { UswdsTheme } from "../src/themes/uswds-theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["USWDS Components", "Additional Widgets"],
      },
    },
  },
};

export const decorators: Decorator[] = [
  (renderStory) => (
    <MantineProvider theme={UswdsTheme} forceColorScheme="light">
      <BrowserRouter>{renderStory()}</BrowserRouter>
    </MantineProvider>
  ),
];

export default preview;
