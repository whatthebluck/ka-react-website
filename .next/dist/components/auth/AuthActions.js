'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUser = exports.setUser = exports.auth = undefined;

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = exports.auth = function auth(req) {
  return function (dispatch) {

    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;

    if (searchCookies) {
      dispatch({
        type: 'SET_USER',
        userId: searchCookies[0].replace('userId=', '')
      });
    }
  };
};

var setUser = exports.setUser = function setUser(userId) {
  return function (dispatch) {
    _reactCookie2.default.save('userId', userId, { path: '/' });
    dispatch({ type: 'SET_USER', userId: userId });
  };
};

var removeUser = exports.removeUser = function removeUser() {
  return function (dispatch) {
    _reactCookie2.default.remove('userId', { path: '/' });
    dispatch({ type: 'REMOVE_USER' });
  };
};