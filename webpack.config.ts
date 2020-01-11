import * as path from "path";
import { Configuration } from "webpack";
import * as CopyPlugin from "copy-webpack-plugin";

const configuration: Configuration = {
    devtool: "source-map",
    entry: "./src",
    mode: "production",
    target: "node",
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin(["package.json", "README.md"]),
        new CopyPlugin([{ from: "src/@types" }]),
    ],
    output: {
        filename: "main.js",
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, "lib"),
    },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
};

export default configuration;
