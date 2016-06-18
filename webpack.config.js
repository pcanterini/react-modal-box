module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./examples/events.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};