const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/main.scss")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist/css"]),
        new MiniCssExtractPlugin({
            filename: "/css/[name].bundle.css",
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            port: 9000,
            files: ["./dist/*.html"],
            server: { baseDir: ["dist"] }
        })
    ],
    watch: true,
    devtool: "inline-source-map",
};