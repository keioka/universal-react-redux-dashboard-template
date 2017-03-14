/* ************
  Reducer
************ */

// Reducer is filter action to merge necessary data to store (huge javascript object).
// Each action should be labeled by developer and fileter by switch case (just swicth case). GET_USERS_SUCCESS 

import { combineReducers } from 'redux' // https://github.com/reactjs/redux/blob/master/src/combineReducers.js
import { routerReducer } from 'react-router-redux'

import { chat } from './chat/reducer'
import { customer } from './customer/reducer'
import { organization } from './organization/reducer'
import { transaction } from './transaction/reducer'

export default combineReducers({
  customer,
  chat,
  organization,
  transaction,
  routing: routerReducer,
})