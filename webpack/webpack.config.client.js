const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devMode = process.env.NODE_ENV === 'development';

const plugins = [
    new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __DEV__: devMode,
    }),
    new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: '/'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
];

if(devMode) plugins.push(new webpack.HotModuleReplacementPlugin());

const entry = ['babel-polyfill' , path.resolve(__dirname, "../src/index.js")];
if(devMode) entry.splice(1,0,'webpack-hot-middleware/client.js?reload=true&noInfo=true');

module.exports = merge(baseConfig,{
    mode: "development",
    devtool: devMode ? "source-map" : "hidden-source-map",
    entry: entry,
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: "/",
    },
    plugins,
});

