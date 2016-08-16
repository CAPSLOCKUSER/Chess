var webpack = require('webpack');
var PROD = JSON.parse(process.env.PRODUCTION || 'false');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  debug: !!PROD,
  devtool: PROD ? '' : 'source-map',
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        exclude: /values\.scss$/,
        loader: 'style!css!autoprefixer!sass'
      }
    ]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true,
      },
      output: {
        comments: false
      }
    })
  ] : []
};
