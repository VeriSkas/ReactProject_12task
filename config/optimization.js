import TerserPlugin from 'terser-webpack-plugin';

export const optimizationHandler = (isDevMode) => {
  return isDevMode
    ? { minimize: false }
    : {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                passes: 2,
              },
            },
          }),
        ],
        splitChunks: {
          chunks: 'all',
        },
      };
};
