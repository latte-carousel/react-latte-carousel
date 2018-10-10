const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".jsx", ".js"],
    },
    plugins: [new CleanWebpackPlugin(["./dist"]), new webpack.BannerPlugin(fs.readFileSync("./src/version", "utf8"))],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "react-latte-carousel.min.js",
        library: "ReactLatte",
        libraryTarget: "umd",
        globalObject: `(typeof window !== "undefined" ? window : this)`,
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React",
        },
        "latte-carousel": {
            commonjs: "latte-carousel",
            commonjs2: "latte-carousel",
            amd: "latte-carousel",
            root: "latte",
        },
    },
};
