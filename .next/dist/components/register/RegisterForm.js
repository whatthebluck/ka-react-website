'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/register/RegisterForm.js';

// import StripeCheckout from 'react-stripe-checkout';

var RegisterForm = function RegisterForm(_ref) {
  var form = _ref.form,
      handleSubmit = _ref.handleSubmit,
      register = _ref.register,
      handleRegister = _ref.handleRegister,
      error = _ref.error;

  // TODO - move to an action
  var onToken = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(token) {
      var charge;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('http://localhost:3001/charge', {
                method: 'POST',
                body: (0, _stringify2.default)({ token: token.id })
              });

            case 2:
              charge = _context.sent;
              _context.t0 = console;
              _context.next = 6;
              return charge.json();

            case 6:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function onToken(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, register.loading, _react2.default.createElement('form', { method: 'POST', onSubmit: handleSubmit(handleRegister), __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'firstName', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'lastName', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'text', name: 'email', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_reduxForm.Field, { component: 'input', type: 'password', name: 'password', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('input', { type: 'submit', value: 'Register', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), error && _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, error));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _redux.compose)((0, _reduxForm.reduxForm)({ form: 'register' }), (0, _reactRedux.connect)(mapStateToProps))(RegisterForm);