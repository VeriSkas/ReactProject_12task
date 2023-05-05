import path, { join } from 'path';
import { fileURLToPath } from 'url';

import { buildWebpackConfig } from './config/buildConfig/buildWebpackConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env, argv) => {
  const isDevMode = argv.mode === 'development';
  const paths = {
    entry: join(__dirname, 'src', 'index.tsx'),
    entryHtml: join(__dirname, 'public', 'index.html'),
    build: join(__dirname, 'build'),
    public: join(__dirname, 'public'),
  };
  const mode = env.mode || 'development';
  const port = env.port || 3000;

  return buildWebpackConfig({
    isDevMode,
    paths,
    mode,
    port,
  });
};
