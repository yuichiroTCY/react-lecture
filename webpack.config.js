var path = require('path')

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'app.js',
    path: path.resolve('./public'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-runtime',
          ],
          presets: [
            'react', 'es2015', 'stage-0'
          ]
        },
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    inline: true,
  },
}
