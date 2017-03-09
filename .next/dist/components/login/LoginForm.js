'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _LoginActions = require('./LoginActions');

var actions = _interopRequireWildcard(_LoginActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/LoginForm.js';


var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login(props) {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

    _this.handleChange = function (key) {
      return function (e) {
        return _this.setState((0, _defineProperty3.default)({}, key, e.target.value));
      };
    };

    _this.handleLogin = function (e) {
      e.preventDefault();
      _this.props.dispatch(actions.login(_this.state.email, _this.state.password));
    };

    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      if (!this.props.loggedIn) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement('form', { method: 'POST', onSubmit: this.handleLogin, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement('input', { type: 'text', name: 'email', onChange: this.handleChange('email'), value: this.state.email, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }), _react2.default.createElement('input', { type: 'password', name: 'password', onChange: this.handleChange('password'), value: this.state.password, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }), _react2.default.createElement('input', { type: 'submit', value: 'Log in', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        })), this.props.loginError && _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, this.props.loginError));
      }

      if (this.props.loggedIn) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, 'You are logged in. ', _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, 'Logout'));
      }
    }
  }]);

  return Login;
}(_react2.default.Component);
// container part


function mapStateToProps(state) {
  return (0, _extends3.default)({}, state.login);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);