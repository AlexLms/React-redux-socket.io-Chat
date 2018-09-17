module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // ? plugins for babel
            plugins: [
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
              ['import', { libraryName: '@material-ui/core' }],
            ],
          },
        },
      },
    ],
  },
});
