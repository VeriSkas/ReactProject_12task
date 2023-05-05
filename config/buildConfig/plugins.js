import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const pluginsHandler = ({ isDevMode, paths }) => {
  const pluginsArr = [
    new HtmlWebpackPlugin({
      template: paths.entryHtml,
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDevMode),
    }),
    new CleanWebpackPlugin(),
  ];

  if (!isDevMode) {
    pluginsArr.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    );
  }

  return pluginsArr;
};
