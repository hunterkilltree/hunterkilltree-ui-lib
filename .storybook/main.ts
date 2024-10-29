export default {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  typescript: {
    // Enables the `react-docgen-typescript` parser.
    // See https://storybook.js.org/docs/api/main-config/main-config-typescript for more information about this option.
    reactDocgen: "react-docgen-typescript",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
