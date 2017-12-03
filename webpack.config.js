const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'prototype-pe.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
};
