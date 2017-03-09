import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cookie from 'react-cookie'
import firebase from 'firebase'
import './lib/init-firebase'

const initialState = {
  email: "stephenbluck@msn.com",
  password: 'Vampire2.',
  loggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN': return { loggedIn: action.loggedIn }
    default: return state
  }
}


export const auth = req => dispatch => {
  const searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null
  dispatch({ type: 'SET_LOGGED_IN', loggedIn: !!searchCookies})
}

export const login = (email, password) => async dispatch => {
  const user = await firebase.auth()
    .signInWithEmailAndPassword(email, password)
  cookie.save('userId', user.uid, { path: '/' });
  return dispatch({ type: "SET_LOGGED_IN", loggedIn: true })
}

export const logout = dispatch => {
  firebase.auth().signOut()
  cookie.remove('userId', { path: '/' })
  dispatch({ type: 'SET_LOGGED_IN', loggedIn: false})
}



export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}