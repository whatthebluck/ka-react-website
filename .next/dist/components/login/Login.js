'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('isomorphic-fetch');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Logout = require('./Logout');

var _Logout2 = _interopRequireDefault(_Logout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/Login.js';


var Login = function Login(_ref) {
  var loggedIn = _ref.loggedIn;

  if (!loggedIn) return _react2.default.createElement(_LoginForm2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  });
  if (loggedIn) return _react2.default.createElement(_Logout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  });
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state.login);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);