'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    searchCookies && dispatch({ type: 'AUTH_SUCCESS' });
  };
};