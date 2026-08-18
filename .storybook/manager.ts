import { addons } from "storybook/manager-api";
import {
  defaultConfig,
  type TagBadgeParameters,
} from "storybook-addon-tag-badges/manager-helpers";

addons.setConfig({
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
