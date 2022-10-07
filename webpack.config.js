const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
   const config = await createExpoWebpackConfigAsync(
      {
         ...env,
         resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            alias: {
               '@src': path.resolve(__dirname, 'src'),
            },
         },
         module: {
            rules: [
               {
                  test: /\.(t|j)sx?$/,
                  exclude: /node_modules\/(?!()\/).*/,
                  use: {
                     loader: 'babel-loader',
                  },
               },
            ],
         },
         babel: {
            dangerouslyAddModulePathsToTranspile: [
               // Ensure that all packages starting with @evanbacon are transpiled.
               '@evanbacon',
            ],
         },
      },
      argv
   );
   return config;
};


