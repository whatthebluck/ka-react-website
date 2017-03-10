'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/LoginForm.js';


var Login = function Login(_ref) {
  var form = _ref.form,
      handleSubmit = _ref.handleSubmit,
      login = _ref.login,
      handleLogin = _ref.handleLogin,
      error = _ref.error;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, login.loading, _react2.default.createElement('form', { method: 'POST', onSubmit: handleSubmit(handleLogin), __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'password', name: 'password', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('input', { type: 'submit', value: 'Log in', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), error && _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, error));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _redux.compose)((0, _reduxForm.reduxForm)({ form: 'login' }), (0, _reactRedux.connect)(mapStateToProps))(Login);