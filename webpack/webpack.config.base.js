const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';
module.exports = {
    resolve: {
        alias: {
            src: path.join(__dirname, '../src'),
        }
    },
    optimization:{
        splitChunks: {
            chunks: 'all',
            name: 'chunk',
        }
    },
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
                        modules: false
                    }
                    ],
                    require.resolve('@babel/preset-react')
                ],
                plugins: []
                }
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'static/images/[name].[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')()],
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: devMode,
                        },
                    },
                ],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename:'static/css/[name].css',
            chunkFilename: 'static/css/[name].css',
        }),
      ],
}
