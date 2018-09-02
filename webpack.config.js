/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    },
    devtool : 'source-map',
    module: {
        rules: [{
        test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
                presets: ["babel-preset-env", "babel-preset-react"],
                 plugins: ["transform-class-properties", "transform-runtime",  "transform-async-to-generator", "transform-object-rest-spread"],
            }
         }
        }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        'template': "./sandbox/index.html",
        'inject': "body"
      })
  ]   
}