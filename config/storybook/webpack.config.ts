import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { loadersHandler } from '../buildConfig/loaders';
import { resolversHandler } from '../buildConfig/resolvers';

export const webpackFinalConfig = async (
  config: Configuration,
  { configType }: any
): Promise<Configuration> => {
  const isDevMode = configType.toLowerCase() === 'development';

  config?.module?.rules?.push(...loadersHandler(isDevMode));
  config?.resolve?.extensions?.push(...(resolversHandler().extensions ?? []));
  config.resolve = {
    ...(config.resolve ?? {}),
    alias: {
      ...(config.resolve?.alias ?? {}),
      app: resolve(__dirname, '../../src/app/'),
      entities: resolve(__dirname, '../../src/entities/'),
      features: resolve(__dirname, '../../src/features/'),
      shared: resolve(__dirname, '../../src/shared/'),
      pages: resolve(__dirname, '../../src/pages/'),
      widgets: resolve(__dirname, '../../src/widgets/'),
      config: resolve(__dirname, '../../config/'),
      public: resolve(__dirname, '../../public/'),
    },
  };
  config?.plugins?.push(
    ...[
      new webpack.DefinePlugin({
        _IS_DEV_: JSON.stringify(isDevMode),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ]
  );

  return config;
};
