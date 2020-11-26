
const CopyPlugin = require('copy-webpack-plugin');
const webpack    = require('webpack');
const path       = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'comments.bundle.js',
    path: path.resolve(__dirname, 'client/dist/js'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: path.resolve(__dirname, 'client/public/'),
          to: path.resolve(__dirname, 'client/dist')
        },
      ],
    }),
  ],
}