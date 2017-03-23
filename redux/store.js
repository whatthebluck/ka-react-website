import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'
import AuthReducer from './reducers/auth'
import AppReducer from './reducers/app'


const reducers = combineReducers({
  app: AppReducer,
  user: AuthReducer,
  form: formReducer,
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


export const initStore = (initialState) => {
  return createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware))
  )
}