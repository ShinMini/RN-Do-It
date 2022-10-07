const path = require('path');
const pak = require('./package.json');

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'babel-preset-expo'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
        extenstions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};