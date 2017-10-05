const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './out-jit/main.jit.js',
  output: {
    path: path.resolve(__dirname, './dist-jit'),
    filename: 'bundle.js'
  },
  plugins: [
    // Ignore `Critical dependency: the request of a dependency is an expression` warnings.
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)esm5/,
      __dirname
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
