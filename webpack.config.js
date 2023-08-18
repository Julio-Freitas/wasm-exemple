const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'site'),
        filename: 'main.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: './template.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "site")
        }),
    ],
  mode: 'development',
 devServer: {
    port: 8080,
  },
};
