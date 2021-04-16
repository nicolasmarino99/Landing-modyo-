const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/index.js', './src/apiCalls.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'assets', '**', '*'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};