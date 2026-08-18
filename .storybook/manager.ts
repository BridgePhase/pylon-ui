// tsconfig only includes src/, so this file misses the vite/client asset
// module declarations that src/vite-env.d.ts pulls in for the png import.
/// <reference types="vite/client" />
import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";
import {
  defaultConfig,
  type TagBadgeParameters,
} from "storybook-addon-tag-badges/manager-helpers";
// The manager bundle inlines image imports as data URLs, so the mark survives
// the relative base path the production build uses for GitHub Pages.
import brandImage from "./pylon-wordmark.png";

const pylonTheme = create({
  base: "light",
  // Replaces the Storybook wordmark in the sidebar header. brandTitle is the
  // image's alt text once brandImage is set.
  brandTitle: "Pylon UI",
  brandImage,
  brandUrl: "https://github.com/BridgePhase/pylon-ui",
  brandTarget: "_self",
});

addons.setConfig({
  theme: pylonTheme,
  tagBadges: [
    // Add an entry that matches 'frog' and displays a cool badge in the sidebar only
    {
      tags: "pylon",
      badge: {
        text: "Pylon",
        style: {
          backgroundColor: "#AF3036",
          color: "#ffffff",
        },
        tooltip:
          "This is a component that was built by Pylon because no USWDS equivalent existed in Mantine",
      },
      display: {
        sidebar: [
          {
            type: "component",
            skipInherited: true,
          },
        ],
        toolbar: false,
        mdx: true,
      },
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
