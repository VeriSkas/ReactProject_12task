import path, { join } from 'path';
import { fileURLToPath } from 'url';

import { pluginsHandler } from './config/plugins.js';
import { optimizationHandler } from './config/optimization.js';
import { moduleHandler } from './config/module.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env, argv) => {
  const isDevMode = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: join(__dirname, 'dist'),
      filename: isDevMode ? '[name].js' : 'bundle.[chunkhash].js',
    },
    plugins: pluginsHandler(isDevMode, join(__dirname, 'public', 'index.html')),
    module: moduleHandler(isDevMode),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    },
    optimization: optimizationHandler(isDevMode),
    devtool: isDevMode ? 'eval-source-map' : 'eval-cheap-module-source-map',
    devServer: {
      port: 3000,
      static: join(__dirname, 'public'),
      hot: true,
      open: true,
      liveReload: true,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
