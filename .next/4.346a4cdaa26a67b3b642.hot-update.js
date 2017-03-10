webpackHotUpdate(4,{

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(652);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(567);

__webpack_require__(611);

var _reactStripeCheckout = __webpack_require__(776);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _Login = __webpack_require__(761);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/Page.js';

// TODO - move to an action
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
      lineNumber: 18
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, props.title), _react2.default.createElement(_Login2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Purchase single product ', _react2.default.createElement(_reactStripeCheckout2.default, {
    token: onToken,
    stripeKey: 'pk_test_fMqC4KwF8gDKdeO6HtmBFWTT',
    amount: 6000,
    currency: 'USD',
    panelLabel: 'Pay',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Test')));
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Page);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/components/Page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/components/Page.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MDY1ZGNiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVM7O0FBQ1Q7O0FBQ087Ozs7QUFDVzs7Ozs7Ozs7O0FBR2xCO0FBQ0EsSUFBTTt3RUFBVSxpQkFBTyxPQUFQO1FBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTt5QkFDYTtzQkFFekI7b0JBQU0seUJBQWUsRUFBRSxPQUFPLE1BQU07QUFEcEMsYUFEbUI7O2VBQWY7QUFEUTswQkFLZDs0QkFMYzttQkFLSSxPQUFPOztlQUxYO21DQUFBOzt3QkFLTiwrQkFMTTs7ZUFBQTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQVY7OzhCQUFBOzRCQUFBO0FBQUE7QUFBTjs7QUFRQSxJQUFNLE9BQU8sY0FBQyxPQUNaO3lCQUNFOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0U7O2dCQUFBO2tCQUFLO0FBQUw7QUFBQSxXQUVBLHdCQUFDOztnQkFBRDtrQkFFQTtBQUZBO0FBQUEsc0JBRUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUE2Qiw0Q0FBQztXQUU1QjtlQUNBO1lBQ0E7Y0FDQTtnQkFBVzs7Z0JBTGdCO2tCQUFBO0FBQUE7QUFDM0IsS0FVUDtBQUdEOzsyQ0FBdUI7U0FBUztBQUFqQixHQUF3QixNIiwiZmlsZSI6IjQuMzQ2YTRjZGFhMjZhNjdiM2I2NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBTdHJpcGVDaGVja291dCBmcm9tICdyZWFjdC1zdHJpcGUtY2hlY2tvdXQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4vTG9naW4nXG5cblxuLy8gVE9ETyAtIG1vdmUgdG8gYW4gYWN0aW9uXG5jb25zdCBvblRva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gIGNvbnN0IGNoYXJnZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvY2hhcmdlJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9rZW46IHRva2VuLmlkIH0pXG4gIH0pXG4gIGNvbnNvbGUubG9nKGF3YWl0IGNoYXJnZS5qc29uKCkpXG59XG5cbmNvbnN0IFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuXG4gICAgICA8TG9naW4gLz5cblxuICAgICAgPGRpdj5QdXJjaGFzZSBzaW5nbGUgcHJvZHVjdCA8U3RyaXBlQ2hlY2tvdXRcbiAgICAgICAgdG9rZW49e29uVG9rZW59XG4gICAgICAgIHN0cmlwZUtleT1cInBrX3Rlc3RfZk1xQzRLd0Y4Z0RLZGVPNkh0bUJGV1RUXCJcbiAgICAgICAgYW1vdW50PXs2MDAwfVxuICAgICAgICBjdXJyZW5jeT0nVVNEJ1xuICAgICAgICBwYW5lbExhYmVsPVwiUGF5XCJcbiAgICAgID5cbiAgICAgICAgVGVzdFxuICAgICAgPC9TdHJpcGVDaGVja291dD48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKFBhZ2UpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9QYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==