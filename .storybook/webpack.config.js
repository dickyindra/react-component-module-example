const merge = require("webpack-merge")

const baseConfig = require("../webpack.common.js")

module.exports = ({ config: defaultConfig }) =>
    merge(baseConfig, {
        ...defaultConfig,
        mode: "development"
    })
