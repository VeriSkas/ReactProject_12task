import { Configuration } from 'webpack';

import { loadersHandler } from '../buildConfig/loaders';
import { resolversHandler } from '../buildConfig/resolvers';

export const webpackFinalConfig = async (
  config: Configuration,
  { configType }: any
): Promise<Configuration> => {
  config?.module?.rules?.push(...loadersHandler(configType.toLowerCase() === 'development'));
  config?.resolve?.extensions?.push(...(resolversHandler().extensions ?? []));

  return config;
};
