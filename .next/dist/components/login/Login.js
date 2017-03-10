'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

require('isomorphic-fetch');

var _LoginActions = require('./LoginActions');

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Logout = require('./Logout');

var _Logout2 = _interopRequireDefault(_Logout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/Login.js';


var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();
      var email = _this.props.form.login.values.email;
      var password = _this.props.form.login.values.password;
      _this.props.dispatch((0, _LoginActions.login)(email, password));
    }, _this.handleLogout = function (e) {
      e.preventDefault();
      _this.props.dispatch(_LoginActions.logout);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {

      if (!this.props.auth) {
        return _react2.default.createElement(_LoginForm2.default, { handleSubmit: this.handleSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      } else {
        return _react2.default.createElement(_Logout2.default, { handleLogout: this.handleLogout, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
      }
    }
  }]);

  return Login;
}(_react2.default.Component);

// container part


function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);