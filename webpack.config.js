const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    // hot: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|avif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
};
