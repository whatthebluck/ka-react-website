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

var _RegisterActions = require('./RegisterActions');

var _RegisterForm = require('./RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/register/Register.js';


var Register = function (_React$Component) {
  (0, _inherits3.default)(Register, _React$Component);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call.apply(_ref, [this].concat(args))), _this), _this.handleRegister = function (values) {

      return _this.props.dispatch((0, _RegisterActions.register)(values));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Register, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_RegisterForm2.default, { handleRegister: this.handleRegister, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      });
    }
  }]);

  return Register;
}(_react2.default.Component);

// container part


function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Register);