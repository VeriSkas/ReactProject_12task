import webpack, { Configuration } from 'webpack';
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
