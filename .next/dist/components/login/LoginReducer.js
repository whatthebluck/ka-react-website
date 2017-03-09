'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  loggedIn: false,
  loginError: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { loggedIn: action.loggedIn, loginError: null };
    case 'SET_LOGIN_ERROR':
      return { loginError: action.message };
    default:
      return state;
  }
};