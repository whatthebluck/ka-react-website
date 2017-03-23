import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'
import LoginReducer from './redux/reducers/login'
import RegisterReducer from './redux/reducers/register'
import AuthReducer from './redux/reducers/auth'


const reducers = combineReducers({
  user: AuthReducer,
  login: LoginReducer,
  register: RegisterReducer,
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