/**
 What is redux?
  - Redux is a framework using flux pattern.
  - Flux is one of the way to handles data flow like MVC.
  - Flux is always single data way.

It starts from UI. If you try to static website, you might not need to have flux pattern.
View -> Action -> Reducer


// View: React. It is UI part which is binded some action to your UI. And also listening if data is changed or not.
// Action: Callback-ish
// Reducer: Filetering all action by swith case
// Store: Huge javascript object whose changes listened by view.
// View: Back to React and the component which is listening Store changes called container.

/* ************
  Middleware
************ */

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const middlewares = [thunk]
const loggerMiddleware = createLogger()

if (__DEV__ && __DEBUG__) {
  middlewares.push(loggerMiddleware)
}


import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../shared/redux/reducers'

function configureStore(initialState={}) {
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middlewares),
  )(createStore)
  return createStoreWithMiddleware(reducers, initialState)
}


// This is a part of universal rendering.
const store = window.__REDUX_STORE__ ? configureStore(window.__REDUX_STORE__) : configureStore()

import React, { Component } from 'react'
import { render } from 'react-dom'


/* ************
  Rendering
************ */
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { routes } from '../shared/routes.jsx'

const DOMRender = (routes)=> {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.querySelector('#content')
  );
}

DOMRender(routes)

if (module.hot) {
  module.hot.accept('../shared/routes.jsx', () => {
    DOMRender(routes)
  });
}
