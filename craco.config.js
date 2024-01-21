var path = require('path');
var webpack = require('webpack');
var markdown = require('./markdown');

module.exports = {
  webpack: {
    configure: function (config) {
      markdown();

      return config;
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'),
      },
    },
    alias: {
      '@app': path.resolve(__dirname, 'src/app.tsx'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
};
