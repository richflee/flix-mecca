const path = require("path");
const {
  NODE_ENV = "production"
} = process.env;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./src/index.ts",
  mode: NODE_ENV,
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  watch: NODE_ENV === "development",
};