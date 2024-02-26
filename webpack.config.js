const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: {
        excelScript: "./src/xlsx.full.min.js",
        serviceWorker: "./src/serviceWorker.js",
        contentScript: "./src/content.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
    watch: true,
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "static"}]
        })
    ]
}