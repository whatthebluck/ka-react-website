'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _LoginActions = require('./LoginActions');

var actions = _interopRequireWildcard(_LoginActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/Logout.js';


var handleLogout = function handleLogout(dispatch) {
  return function (e) {
    e.preventDefault();
    dispatch(actions.logout);
  };
};

var Logout = function Logout(_ref) {
  var dispatch = _ref.dispatch;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'You are logged in. ', _react2.default.createElement('a', { href: '#', onClick: handleLogout(dispatch), __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Logout'));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state.login);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Logout);