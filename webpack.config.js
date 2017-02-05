const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/app/scripts/main'),
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
  devtool: 'inline-source-map'
};
