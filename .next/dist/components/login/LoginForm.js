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
      login = _ref.login;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('form', { method: 'POST', onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'password', name: 'password', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('input', { type: 'submit', value: 'Log in', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), login.error && _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, login.error));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _redux.compose)((0, _reduxForm.reduxForm)({ form: 'login' }), (0, _reactRedux.connect)(mapStateToProps))(Login);