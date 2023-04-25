import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const pluginsHandler = (isDevMode, path) => {
  const pluginsArr = [
    new HtmlWebpackPlugin({
      template: path,
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
