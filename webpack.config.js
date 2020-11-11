const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
}
