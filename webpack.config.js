const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    inline: true,
    port: 8081
 },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
           }
        },
        {
          test: /\.(css|scss)$/,
          loaders: "style-loader!css-loader"
      },
      {
        loader: 'json-loader',
        test: /\.json?$/
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['eslint-loader', 'babel-loader']
    },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './index.html',
        inject: false
      }
    )
  ],
};
