/**
 * React Modal Box
 */
var path    = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist/"),
    filename: "index.js",
    library: ["react-modal-box"],
    libraryTarget: "umd",
    publicPath: "/dist/"
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /.jsx?$/,  loader: 'babel-loader',  exclude: /node_modules/,  query: {presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};