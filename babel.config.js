module.exports = {
  presets: [
    'babel-preset-expo'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extenstions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};