/*jshint esversion:9*/

const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = env => {
    return {
        devtool: "cheap-module-inline-source-map",
        mode: "development",
        entry: {
            "main": "./src/main.ts",
            "backgroundmanga": "./src/background-main.ts"
        },
        output: {
            filename: "[name].js",
            path: resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new DefinePlugin({
                BASE_URL: JSON.stringify(process.cwd())
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: "asdasdasd",
                template: 'public/index.html'
            })
        ]
    };
}; 1