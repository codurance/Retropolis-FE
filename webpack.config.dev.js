const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:5000'),
      'process.env.GOOGLE_AUTH_CLIENT_ID': JSON.stringify('737986592333-avqc5vceiv50h5lc7rp3269h00rrvjgo.apps.googleusercontent.com')
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
