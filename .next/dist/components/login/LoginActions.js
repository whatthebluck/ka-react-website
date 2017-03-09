'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var login = exports.login = function login(email, password) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _firebase2.default.auth().signInWithEmailAndPassword(email, password);

            case 3:
              user = _context.sent;

              _reactCookie2.default.save('userId', user.uid, { path: '/' });
              return _context.abrupt('return', dispatch({
                type: "SET_LOGGED_IN",
                loggedIn: true
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', dispatch({
                type: "SET_LOGIN_ERROR",
                message: _context.t0.message
              }));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dispatch) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _firebase2.default.auth().signOut();

          case 2:
            _reactCookie2.default.remove('userId', { path: '/' });
            dispatch({
              type: 'SET_LOGGED_IN',
              loggedIn: false
            });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function logout(_x2) {
    return _ref2.apply(this, arguments);
  };
}();