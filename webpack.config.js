/* webpack.config.js ： Webpack 的設定檔 */

const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: true,
  },
  externals: [nodeExternals()],
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {   //設定你的檔案選項
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/views', to: 'views' },
      { from: 'src/public', to: 'public' },
    ])
  ],
}