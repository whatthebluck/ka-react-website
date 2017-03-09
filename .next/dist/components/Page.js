'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('isomorphic-fetch');

var _reactStripeCheckout = require('react-stripe-checkout');

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/Page.js';

var onToken = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(token) {
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
    return _ref.apply(this, arguments);
  };
}();

var Page = function Page(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, (0, _stringify2.default)(props, null, 2)), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, props.title), _react2.default.createElement(_Login2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Purchase single product ', _react2.default.createElement(_reactStripeCheckout2.default, {
    token: onToken,
    stripeKey: 'pk_test_fMqC4KwF8gDKdeO6HtmBFWTT',
    amount: 6000,
    currency: 'USD',
    panelLabel: 'Pay',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Test')));
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Page);