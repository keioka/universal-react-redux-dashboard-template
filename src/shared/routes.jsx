import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  Home,
  Customer,
  Chat
} from './containers'

import {
  ListCustomers,
  ListChatHistory,
  ListChatPending,
  ListTransaction,
} from './components'

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='/customers' component={Customer}>
      <IndexRoute component={ListCustomers} />
    </Route>
    <Route path='/chats' component={Chat}>
      <Route path='/chats/pending' component={ListChatPending} />
      <Route path='/chats/history' component={ListChatHistory} />
    </Route>
    <Route path='/transactions' component={Chat}>
      <IndexRoute component={ListTransaction} />
    </Route>

    <Route path='/admin' component={Chat}>
      <Route path='/admin/operators' component={Chat} />
    </Route>
  </Route>
)