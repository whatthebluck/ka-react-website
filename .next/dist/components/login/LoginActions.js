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

              dispatch({ type: "LOADING", loading: true });

              _context.prev = 1;
              _context.next = 4;
              return _firebase2.default.auth().signInWithEmailAndPassword(email, password);

            case 4:
              user = _context.sent;

              _reactCookie2.default.save('userId', user.uid, { path: '/' });
              dispatch({ type: "AUTH_SUCCESS" });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](1);
              return _context.abrupt('return', dispatch({
                type: "ERROR",
                message: _context.t0.message
              }));

            case 12:

              dispatch({ type: "LOADING", loading: false });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 9]]);
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

            dispatch({ type: "LOADING", loading: true });

            _context2.next = 3;
            return _firebase2.default.auth().signOut();

          case 3:
            _reactCookie2.default.remove('userId', { path: '/' });

            dispatch({ type: 'REMOVE_AUTH' });
            dispatch({ type: "LOADING", loading: false });

          case 6:
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