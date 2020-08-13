const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const nodeExternals = require('webpack-node-externals');
const devMode = process.env.NODE_ENV === 'development';

module.exports = merge(baseConfig, {
    devtool: devMode ? "source-map" : "hidden-source-map",
    mode:process.env.NODE_ENV,
    entry: {
        app:['babel-polyfill',path.resolve(__dirname, "../src/index.js")],
        layout:['babel-polyfill',path.resolve(__dirname, "../src/layout/index.js")],
    },
    output: {
        filename: 'server/[name].js',
        path: path.resolve(__dirname, '../build/'),
        libraryTarget: 'commonjs2',
        publicPath: "/",
    },
    target: 'node',
    externals: nodeExternals(),
    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: false,
            __SERVER__: true,
            __DEV__: devMode,
        }),
    ],
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/,
    }
  })