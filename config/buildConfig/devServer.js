export const devServerHandler = ({ port, paths }) => {
  return {
    port,
    static: paths.public,
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
  };
};
