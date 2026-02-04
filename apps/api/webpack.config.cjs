const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/api'), // compiled output
    clean: true,
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    }),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node', // Node.js backend
      compiler: 'tsc', // TypeScript compiler
      main: './src/main.ts', // Entry file relative to this webpack.config.js
      tsConfig: './tsconfig.app.json', // TS config for the app
      // ✅ removed assets completely
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'], // support TS, JS, JSON imports
  },
};
