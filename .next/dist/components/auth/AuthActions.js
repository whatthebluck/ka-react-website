'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    dispatch({
      type: 'SET_LOGGED_IN',
      loggedIn: !!searchCookies
    });
  };
};