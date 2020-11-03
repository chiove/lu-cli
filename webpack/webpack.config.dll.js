const path = require('path');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV === 'development';
const vendors = [
  'react',
  'react-dom',
  'react-router',
  'axios',
  'antd',
  'moment',
];

module.exports = {
  mode: 'none',
  devtool: devMode ? 'cheap-module-source-map' : 'source-map',
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, '../.dll'),
    filename: 'dll.js',
    library: '[name]_[hash:5]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../.dll', 'manifest.json'),
      name: '[name]_[hash:5]',
    }),
  ],
};
