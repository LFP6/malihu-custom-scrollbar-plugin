var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery.mCustomScrollbar.js',
    library: 'mCustomScrollbar'
  },
  externals: ['jquery'],
  module: {
    rules: [
      {
        test: /\.png/,
        use: [
          { loader: 'url-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
};