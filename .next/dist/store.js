'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

require('./lib/init-firebase');

var _reduxForm = require('redux-form');

var _LoginReducer = require('./components/login/LoginReducer');

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

var _RegisterReducer = require('./components/register/RegisterReducer');

var _RegisterReducer2 = _interopRequireDefault(_RegisterReducer);

var _AuthReducer = require('./components/auth/AuthReducer');

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  user: _AuthReducer2.default,
  login: _LoginReducer2.default,
  register: _RegisterReducer2.default,
  form: _reduxForm.reducer
});

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : _redux.compose;

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducers, initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};