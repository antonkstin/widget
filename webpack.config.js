const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
     main: './src/index.js' 
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: 'index.css'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}