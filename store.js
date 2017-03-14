import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import './lib/init-firebase'


import { reducer as formReducer } from 'redux-form'
import LoginReducer from './components/login/LoginReducer'
import RegisterReducer from './components/register/RegisterReducer'
import AuthReducer from './components/auth/AuthReducer'


const reducers = combineReducers({
  user: AuthReducer,
  login: LoginReducer,
  register: RegisterReducer,
  form: formReducer,
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const initStore = (initialState) => {
  return createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware))
  )
}