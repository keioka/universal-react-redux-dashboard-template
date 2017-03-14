var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: [
    './index.js'
  ],
  output: {
    path: './public/assess/javascript',
    filename: 'bundle.js',
    publicPath: './public/assess/javascript'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
　　　　　test: /(normalize\.css)$/,
     　　loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?camelCase&modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss-loader?browsers=last 2 version!sass-loader?outputStyle=expanded&sourceMap' 
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader', 'svg-react']
      },
      {
        test: /\.mp4$/,
        loader: 'file'
      }
    ]
  }
}