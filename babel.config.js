module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens/index.ts',
          '@navigation': './src/navigation/index.ts',
          '@components': './src/components/index.ts',
        },
      },
      'react-native-paper/babel',
    ],
  ],
};
