import AuthResource from './resource.js'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './actionType'

export const loginRequest = ({ email, password }) => (dispatch) => {

  AuthResource.login({email, password})
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error (response.statusText)
  })
  .then((currentUser) => {
    dispatch(LoginSuccess(currentUser))
  })
  .catch((error) => {
    dispatch(LoginError(error))
  })

}

const loginPending = () => ({type: LOGIN_PENDING})

const loginSuccess = (currentUser) => ({
  type: LOGIN_SUCCESS,
  currentUser
})

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
})