const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const ManifestPlugin = require('webpack-manifest-plugin');
const devMode = process.env.NODE_ENV === 'development';
const plugins = [
    new webpack.DefinePlugin({
        __CLIENT__: true,
        __SERVER__: false,
        __DEV__: devMode,
    }),
    new ManifestPlugin({
        fileName: 'asset-manifest.json',
        isAsset:false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
];

if(devMode) plugins.push(new webpack.HotModuleReplacementPlugin());

const entry = ['babel-polyfill' , path.resolve(__dirname, "../src/index.js")];
if(devMode) entry.splice(1,0,'webpack-hot-middleware/client.js?reload=true&noInfo=true');

module.exports = merge(baseConfig,{
    mode: "development",
    devtool: devMode ? "cheap-module-source-map" : "source-map",
    entry: entry,
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'static/js/[name].js',
        publicPath: "/",
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
                    name: 'libs'
                }
            }
        },
    },
    plugins,
});

