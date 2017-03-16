"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/stephen.bluck/Documents/repos/ka-react-website/components/login/Logout.js";


var Logout = function Logout(_ref) {
  var handleLogout = _ref.handleLogout;

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "You are logged in. ", _react2.default.createElement("a", { href: "#", onClick: handleLogout, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Logout"));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Logout);