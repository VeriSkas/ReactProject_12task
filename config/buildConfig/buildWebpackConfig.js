import { pluginsHandler } from './plugins.js';
import { loadersHandler } from './loaders.js';
import { optimizationHandler } from './optimization.js';
import { resolversHandler } from './resolvers.js';
import { devServerHandler } from './devServer.js';

export const buildWebpackConfig = (options) => {
  const { isDevMode, paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: isDevMode ? '[name].js' : 'bundle.[chunkhash].js',
    },
    plugins: pluginsHandler(options),
    module: {
      rules: loadersHandler(options),
    },
    resolve: resolversHandler(),
    optimization: optimizationHandler(options),
    devtool: isDevMode ? 'eval-source-map' : 'eval-cheap-module-source-map',
    devServer: devServerHandler(options),
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
