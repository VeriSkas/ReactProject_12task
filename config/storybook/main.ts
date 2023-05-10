import { Configuration } from 'webpack';

import { loadersHandler } from '../buildConfig/loaders';
import { resolversHandler } from '../buildConfig/resolvers';

export default {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config: Configuration, { configType }: any) => {
    config?.module?.rules?.push(...loadersHandler(configType.toLowerCase() === 'development'));
    config?.resolve?.extensions?.push(...(resolversHandler().extensions ?? []));

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
