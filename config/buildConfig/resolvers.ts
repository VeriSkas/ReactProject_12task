import { ResolveOptions } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { BuildOptions } from './types';

export const resolversHandler = (options?: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    plugins: [new TsconfigPathsPlugin({ configFile: options?.paths.tsConfig })],
  };
};
