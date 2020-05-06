const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: {
    dashboard: "./src/client/views/dashboard/index.js",
    app: ["babel-polyfill", "./src/client/index.js"],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    port: 8081,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  mode: "development",
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      // inject: false,
      // filename: "./test.html",
      // favicon: "./public/favicon.ico",
      template: "./public/index.html",
    }),
  ],
};
