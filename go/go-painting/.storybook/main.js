const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../styles/css/globals.css",
    ...getStoriesPaths()
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
}