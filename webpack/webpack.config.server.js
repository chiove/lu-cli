const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = merge(baseConfig, {
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  watch: devMode,
  mode: process.env.NODE_ENV,
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
    layout: ['babel-polyfill', path.resolve(__dirname, '../src/layout/index.js')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build/server/'),
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          presets: [
            [
              require.resolve('@babel/preset-env'),
              {
                modules: false,
              },
            ],
            require.resolve('@babel/preset-react'),
          ],
          plugins: ['./webpack/no-require-css'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __DEV__: devMode,
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['** / *', 'server'],
    // }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
});
