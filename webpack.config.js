const path = require("path")
const merge = require("webpack-merge")

const baseConfig = require("./webpack.common.js")

module.exports = merge(baseConfig, {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve("lib"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    }
})
