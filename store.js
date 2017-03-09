import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import './lib/init-firebase'


import LoginReducer from './components/login/LoginReducer'


const reducers = combineReducers({
  login: LoginReducer
})


export const initStore = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}