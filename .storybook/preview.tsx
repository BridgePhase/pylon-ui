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
    options: {
      // Sidebar order otherwise follows the glob's file order, which drifts
      // from the titles: masked-text-input.stories.tsx is TextInputMask, and
      // "-" sorts before "." so ButtonGroup/CardGroup and the Collection*
      // entries all land above their base component. Sort by title instead.
      // `order` pins the two top-level groups, which alphabetical sorting
      // would otherwise flip; stories within a component keep their
      // declaration order, since equal titles compare as equal.
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
