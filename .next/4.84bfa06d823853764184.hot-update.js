webpackHotUpdate(4,{

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(652);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(573);

var _reactRedux = __webpack_require__(567);

var _reduxForm = __webpack_require__(606);

var _reactStripeCheckout = __webpack_require__(837);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/components/register/RegisterForm.js';

var RegisterForm = function RegisterForm(_ref) {
  var email = _ref.email,
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
  }), _react2.default.createElement(_reactStripeCheckout2.default, {
    token: onToken,
    email: email,
    stripeKey: 'pk_test_fMqC4KwF8gDKdeO6HtmBFWTT',
    amount: 6000,
    currency: 'USD',
    panelLabel: 'Pay',
    opened: function opened() {
      return console.log('open!');
    },
    closed: function closed() {
      return console.log('closed!');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('input', { type: 'submit', value: 'Register', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }))), error && _react2.default.createElement('strong', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, error));
};

// container part
function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
}

var selector = (0, _reduxForm.formValueSelector)('register');

exports.default = (0, _redux.compose)((0, _reduxForm.reduxForm)({ form: 'register' }), (0, _reactRedux.connect)(function (state) {
  return { email: selector(state, 'email') };
}), (0, _reactRedux.connect)(mapStateToProps))(RegisterForm);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/components/register/RegisterForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/components/register/RegisterForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS5qcz9mNmIxYzQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNFOztBQUNBOztBQUNrQjs7QUFDcEI7Ozs7Ozs7OztBQUVQLElBQU0sZUFBZSw0QkFBNkQ7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBLGFBRWhGOztBQUNBO01BQU07MkVBQVUsaUJBQU8sT0FBUDtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzJCQUNhO3dCQUV6QjtzQkFBTSx5QkFBZSxFQUFFLE9BQU8sTUFBTTtBQURwQyxlQURtQjs7aUJBQWY7QUFEUTs0QkFLZDs4QkFMYztxQkFLSSxPQUFPOztpQkFMWDtxQ0FBQTs7MEJBS04sK0JBTE07O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQVY7O2dDQUFBOytCQUFBO0FBQUE7QUFTTjs7eUJBQ0U7O2dCQUFBO2tCQUNJO0FBREo7QUFBQSxjQUVFLGlEQUFNLFFBQU8sUUFBTyxVQUFVLGFBQWE7Z0JBQTNDO2tCQUNFO0FBREY7cUJBQ0csa0NBQU0sV0FBVSxTQUFRLE1BQUssUUFBTyxNQUFLO2dCQUExQztrQkFDQTtBQURBO3NCQUNDLGtDQUFNLFdBQVUsU0FBUSxNQUFLLFFBQU8sTUFBSztnQkFBMUM7a0JBQ0E7QUFEQTtzQkFDQyxrQ0FBTSxXQUFVLFNBQVEsTUFBSyxRQUFPLE1BQUs7Z0JBQTFDO2tCQUNBO0FBREE7c0JBQ0Msa0NBQU0sV0FBVSxTQUFRLE1BQUssWUFBVyxNQUFLO2dCQUE5QztrQkFDQTtBQURBO3NCQUNDO1dBRUM7V0FDQTtlQUNBO1lBQ0E7Y0FDQTtnQkFDQTtZQUFRO2FBQU0sUUFBUSxJQUFJO0FBQzFCO1lBQVE7YUFBTSxRQUFRLElBQUk7QUFSNUI7O2dCQUFBO2tCQVVFO0FBVkY7QUFDRSw4Q0FTTyxNQUFLLFVBQVMsT0FBTTtnQkFBM0I7a0JBR0g7QUFIRztpQ0FHTTs7Z0JBQUE7a0JBQVM7QUFBVDtBQUFBLEtBS2Y7QUF0Q0Q7O0FBeUNBO0FBQ0EsU0FBUyxnQkFBZ0IsT0FDdkI7b0NBQ0Q7OztBQUVELElBQU0sV0FBVyxrQ0FFakI7O3NDQUNFLDBCQUFVLEVBQUUsTUFBTSx3Q0FDVixpQkFDTjtTQUFPLEVBQUMsT0FBUSxTQUFTLE9BQzFCO0FBRkQsRUFGYSxFQUtiLHlCQUFRLGtCQUNSLGMiLCJmaWxlIjoiNC44NGJmYTA2ZDgyMzg1Mzc2NDE4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBTdHJpcGVDaGVja291dCBmcm9tICdyZWFjdC1zdHJpcGUtY2hlY2tvdXQnO1xuXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoeyBlbWFpbCwgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgaGFuZGxlUmVnaXN0ZXIsIGVycm9yfSkgPT4ge1xuXG4gIC8vIFRPRE8gLSBtb3ZlIHRvIGFuIGFjdGlvblxuICBjb25zdCBvblRva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gICAgY29uc3QgY2hhcmdlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFyZ2UnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9rZW46IHRva2VuLmlkIH0pXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhd2FpdCBjaGFyZ2UuanNvbigpKVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IHJlZ2lzdGVyLmxvYWRpbmcgfVxuICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoaGFuZGxlUmVnaXN0ZXIpfT5cbiAgICAgICAgPEZpZWxkIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIvPlxuICAgICAgICA8RmllbGQgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiLz5cbiAgICAgICAgPEZpZWxkIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIi8+XG4gICAgICAgIDxGaWVsZCBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiLz5cbiAgICAgICAgPFN0cmlwZUNoZWNrb3V0XG4gICAgICAgICAgdG9rZW49e29uVG9rZW59XG4gICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgIHN0cmlwZUtleT1cInBrX3Rlc3RfZk1xQzRLd0Y4Z0RLZGVPNkh0bUJGV1RUXCJcbiAgICAgICAgICBhbW91bnQ9ezYwMDB9XG4gICAgICAgICAgY3VycmVuY3k9J1VTRCdcbiAgICAgICAgICBwYW5lbExhYmVsPVwiUGF5XCJcbiAgICAgICAgICBvcGVuZWQ9eygpID0+IGNvbnNvbGUubG9nKCdvcGVuIScpfVxuICAgICAgICAgIGNsb3NlZD17KCkgPT4gY29uc29sZS5sb2coJ2Nsb3NlZCEnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWdpc3RlclwiLz5cbiAgICAgICAgPC9TdHJpcGVDaGVja291dD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtlcnJvciAmJiA8c3Ryb25nPntlcnJvcn08L3N0cm9uZz59XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cblxuLy8gY29udGFpbmVyIHBhcnRcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4gey4uLnN0YXRlfTtcbn1cblxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcigncmVnaXN0ZXInKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICByZWR1eEZvcm0oeyBmb3JtOiAncmVnaXN0ZXInIH0pLFxuICBjb25uZWN0KHN0YXRlID0+IHtcbiAgICByZXR1cm4ge2VtYWlsOiAgc2VsZWN0b3Ioc3RhdGUsICdlbWFpbCcpfVxuICB9KSxcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpXG4pKFJlZ2lzdGVyRm9ybSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS5qcyJdLCJzb3VyY2VSb290IjoiIn0=