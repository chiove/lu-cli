const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const ManifestPlugin = require('webpack-manifest-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const devMode = process.env.NODE_ENV === 'development';
const plugins = [
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEV__: devMode,
  }),
  new ManifestPlugin({
    fileName: 'asset-manifest.json',
    isAsset: false,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];

if (devMode) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin({
      format: `${chalk.cyan.bold('编译进度：') + chalk.magenta.bold('[:bar]')} ${chalk.cyan.bold(':percent')}  (耗时：${chalk.cyan.bold(':elapsed')}秒)`,
      width: 100,
      stream: process.stdout ? process.stdout : undefined,
    })
  );
}

const entry = ['babel-polyfill', path.resolve(__dirname, '../src/index.js')];
if (devMode) entry.splice(1, 0, 'webpack-hot-middleware/client.js?reload=true&noInfo=true');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  entry,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunk',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.less$/,
          chunks: 'all',
          enforce: true,
        },
        libs: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'libs',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins,
});

