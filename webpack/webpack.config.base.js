const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
// 多线程运行
const happyThreadPool = HappyPack.ThreadPool({size: 4});
const devMode = process.env.NODE_ENV === 'development';
module.exports = {
  resolve: {
    alias: {
      src: path.join(__dirname, '../src'),
    },
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
                modules: false,
              },
            ],
            require.resolve('@babel/preset-react'),
          ],
          plugins: [],
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
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
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[name].css',
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['cache-loader', 'babel-loader?cacheDirectory'],
      threadPool: happyThreadPool,
      verboseWhenProfiling: true,
    }),
    new HappyPack({
      id: 'styles',
      loaders: ['css-loader', 'less-loader'],
      threadPool: happyThreadPool,
      verboseWhenProfiling: true,
    }),
  ],
};
