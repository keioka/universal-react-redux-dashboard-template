var webpack = require('webpack');
var { resolve } = require('path');

/* Environment Setting */
var dev = process.env.NODE_ENV === 'development' ? true : false;
var staging = process.env.NODE_ENV === 'staging' ? true : false;
var production = process.env.NODE_ENV === 'production' ? true : false;
var debug = process.env.DEBUG_MODE === 'true' ? true : false;
var browser = process.env.BROWSER === 'true'

/* Require webpack base */
var webpackBase = require('./webpack.base.js');

/* Set webpack dev */
var devServer = 'http://' + require("ip").address() + ':5001'

var webpackDev = Object.assign({}, webpackBase, {
  name: 'client:development',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-hot-middleware/client?path=' + devServer + '/__webpack_hmr',
    'webpack/hot/only-dev-server',
    resolve(__dirname, '../../../client')
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '/static/'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.DefinePlugin({
      __PROD__: production,
      __STG__: staging,
      __DEV__: dev,
      __DEBUG__: debug,
      __BROWSER__: browser,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, '/static/'),
    // match the output path
    publicPath: '/static/',
    // match the output `publicPath`
    headers: { "Access-Control-Allow-Origin": "*" }
  }
});

module.exports = webpackDev;