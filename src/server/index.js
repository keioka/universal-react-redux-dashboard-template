import React from 'react'
import ReactDOM from 'react-dom/server'
import { Provider } from 'react-redux'
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect'

import { Router, Route, RouterContext, browserHistory } from 'react-router'
import { match } from 'react-router'
import createHistory from 'react-router/lib/createMemoryHistory' // createMemoryHistory is for server side and not to use browser hisotry but cache history in memory

//*************
// Webpack
//*************
import webpack from 'webpack'

//**************
// Web server
//**************
import Express from 'express'

//**************
// Util
//**************
import path from 'path'
import PrettyError from 'pretty-error'

const pe = new PrettyError()
pe.start()
const debug = require('debug')("App:Server")


//************************
// Container & Component
//************************
import HTML from '../shared/component/HTML/html'

//************************
// Routes
//************************
import createRoutes from '../shared/routes'

var fs = require('fs');
var babelrc = fs.readFileSync(path.resolve('.babelrc'));
var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(config);

//****************************
// Config and Intialize store
//****************************
import reducers from '../shared/reducer'
import configureStore from '../shared/store/configureStore'

const store = configureStore()

debug("Intializing Application...")

const app = new Express()

// add this middleware to Express to return .js.gz
// so you can still load bundle.js from the html but will receive bundle.js.gz
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.use('/public', Express.static('./public'))


app.get('/*', (req, res) => {
  const history = createHistory(req.original)
  match({ history, })
})


















