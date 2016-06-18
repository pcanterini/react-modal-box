module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./examples/example.js"
  },
  module: {
    loaders: [
      { test: /.jsx?$/,  loader: 'babel-loader',  exclude: /node_modules/,  query: {presets: ['es2015', 'react']}},
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};