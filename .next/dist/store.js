'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

require('./lib/init-firebase');

var _LoginReducer = require('./components/login/LoginReducer');

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  login: _LoginReducer2.default
});

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};