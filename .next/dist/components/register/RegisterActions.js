'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

require('../../lib/init-firebase');

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var register = exports.register = function register(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      email = _ref.email,
      password = _ref.password;
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
      var displayName, user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              dispatch({ type: "LOADING", loading: true });

              _context.prev = 1;
              displayName = firstName + ' ' + lastName;
              _context.next = 5;
              return _firebase2.default.auth().createUserWithEmailAndPassword(email, password);

            case 5:
              user = _firebase2.default.auth().currentUser;
              _context.next = 8;
              return user.updateProfile({ displayName: displayName });

            case 8:

              _reactCookie2.default.save('userId', user.uid, { path: '/' });

              dispatch({ type: "AUTH_SUCCESS", userId: user.uid });

              dispatch({ type: "LOADING", loading: false });

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](1);

              dispatch({ type: "LOADING", loading: false });
              throw new _reduxForm.SubmissionError({ _error: _context.t0.message });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 13]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};