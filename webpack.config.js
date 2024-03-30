const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        // use: 'babel-loader'
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html'
  //   })
  // ]
};
