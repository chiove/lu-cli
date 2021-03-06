const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HappyPack = require('happypack');

if (!fs.existsSync(path.join(__dirname, '../.dll/dll.js'))) {
  throw Error(chalk.red('未发现 dll 文件，请运行 npm run build:dll 进行构建'));
}
const dllManifest = require('../.dll/manifest');

const happyThreadPool = HappyPack.ThreadPool({size: require('os').cpus().length - 1});
const devMode = process.env.NODE_ENV === 'development';
module.exports = {
  resolve: {
    alias: {
      src: path.join(__dirname, '../src'),
    },
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=babel',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 1024 * 10,
          name: 'static/images/[name].[hash].[ext]',
        },
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
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },
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
              lessOptions: {
                modifyVars: {
                  '@primary-color': '#1890ff', // 全局主色 '#1890ff'
                  '@link-color': '#1890ff', // 链接色
                  '@success-color': '#52c41a', // 成功色
                  '@warning-color': '#faad14', // 警告色
                  '@error-color': '#f5222d', // 错误色
                  '@font-size-base': '14px', // 主字号
                  '@heading-color': 'rgba(0, 0, 0, 0.85);', // 标题色
                  '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
                  '@text-color-secondary ': 'rgba(0, 0, 0, 0.45)', // 次文本色
                  '@disabled-color ': 'rgba(0, 0, 0, 0.25)', // 失效色
                  '@border-radius-base': '2px', // 组件/浮层圆角
                  '@border-color-base': '#d9d9d9', // 边框色
                  '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12) , 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05) ', // 浮层阴影
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // new HardSourceWebpackPlugin(),
    // new HardSourceWebpackPlugin.ExcludeModulePlugin([
    //   {
    //     test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
    //   },
    //   {
    //     test: /url-loader[\\/]dist/,
    //   },
    // ]),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].css',
    }),
    new webpack.DllReferencePlugin({
      manifest: dllManifest,
    }),
    new HappyPack({
      id: 'babel',
      loaders: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      ],
      threadPool: happyThreadPool,
      verboseWhenProfiling: true,
    }),
  ],
  cache: true,
};
