import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // Static builds are served from a subpath on GitHub Pages
  // (/pylon-ui/), so emit relative asset URLs. Dev keeps the default
  // base so HMR is unaffected.
  viteFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "./";
    }
    return config;
  },
};
export default config;
