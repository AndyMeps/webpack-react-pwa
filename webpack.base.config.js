/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve('./src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.jsx?$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.hbs',
      title: 'Webpack React PWA',
      meta: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1.0',
        description: 'React with Webpack and PWA features.',
      },
    }),
    new WebpackPwaManifest({
      inject: true,
      name: 'webpack-react-pwa',
      short_name: 'WRP',
      description: 'React with Webpack and PWA features.',
      background_color: '#ffffff',
      theme_color: '#317EFB',
      crossorigin: null,
      icons: [
      ],
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
