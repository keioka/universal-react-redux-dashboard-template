var Express = require('express');
var webpack = require('webpack');
var path = require('path');
var ip = require('ip');

var debug = require('debug')("Build:Webpack")
debug('Webpack Hot loader setting is started..')

// ************************
// React HotWatch
// ************************
var webpackDevConfig = require('../client/webpack.dev.js');

// *********************
// React hot config
// *********************
var devServer = 'http://' + require("ip").address() + ':5001'
debug("Setting dev server on: " + devServer)

// webpackConfig.module.loaders[0].loaders.push('react-hot', 'jsx?harmony');

// *************************
// Dev server configure
// *************************

debug("Config setting")

var webpackDev = webpack(webpackDevConfig);

var host = 'localhost';
var port =  5001;

var serverOptions = {
  hot: true,
  log: console.log,
  inline: true,
  publicPath: devServer + webpackDev.options.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true }
};

//*************************
// Dev server configure
//*************************

var app = new Express();

app.use(require('webpack-dev-middleware')(webpackDev, serverOptions));
app.use(require('webpack-hot-middleware')(webpackDev, {
  path: '/__webpack_hmr'
}));

//app.use('/build', Express.static('./build'))
var assetsPath = path.resolve('public')
app.use('/public', Express.static(assetsPath))

app.get('/*', (req, res) => {
  var devIndexHtmlPath = path.resolve(__dirname, './dev-index.html')
  res.status(200).sendFile(devIndexHtmlPath);
})

app.listen(5001, require('ip').address, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
