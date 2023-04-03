const { resolve } = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            passes: 2,
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    filename: 'bundle.[chunghash].js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
});
