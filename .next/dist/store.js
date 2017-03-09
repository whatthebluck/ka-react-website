'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.logout = exports.login = exports.auth = exports.reducer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

require('./lib/init-firebase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var initialState = {
  email: "stephenbluck@msn.com",
  password: 'Vampire2.',
  loggedIn: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { loggedIn: action.loggedIn };
    default:
      return state;
  }
};

var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    dispatch({ type: 'SET_LOGGED_IN', loggedIn: !!searchCookies });
  };
};

var login = exports.login = function login(email, password) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _firebase2.default.auth().signInWithEmailAndPassword(email, password);

            case 2:
              user = _context.sent;

              _reactCookie2.default.save('userId', user.uid, { path: '/' });
              return _context.abrupt('return', dispatch({ type: "SET_LOGGED_IN", loggedIn: true }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function logout(dispatch) {
  _firebase2.default.auth().signOut();
  _reactCookie2.default.remove('userId', { path: '/' });
  dispatch({ type: 'SET_LOGGED_IN', loggedIn: false });
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};