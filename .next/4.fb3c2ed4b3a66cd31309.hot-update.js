webpackHotUpdate(4,{

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(49);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(600);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(572);

var _AuthActions = __webpack_require__(629);

var _Page = __webpack_require__(603);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stephen.bluck/Documents/repos/ka-react-website/pages/index.js?entry';
// import Link from 'next/link'


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { title: 'Home Page', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch((0, _AuthActions.auth)(req));
      return { isServer: isServer };
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    dispatch({
      type: 'SET_LOGGED_IN',
      loggedIn: !!searchCookies
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9BdXRoQWN0aW9ucy5qcz9hYjBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ087Ozs7QUFDQTs7OztBQUNtQjs7QUFDTDs7QUFDSjs7Ozs7OztBQUxqQjs7O0lBUU07Ozs7Ozs7Ozs7OzZCQVFGOzZCQUNHLGdDQUFLLE9BQU07b0JBQVo7c0JBRUg7QUFGRztPQUFBOzs7OzBDQVA4QztVQUFBO1VBQUE7VUFBQSxnQkFDaEQ7O1lBQU0sU0FBUyx1QkFDZjthQUFPLEVBQUUsVUFDVjs7Ozs7RUFMaUIsZ0JBY3BCOztrQkFBeUIsa0RBQVcsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI3QixJQUFNLHNCQUFPO1NBQU8sb0JBQ3pCO1FBQU0sZ0JBQWdCLE1BQU0sSUFBSSxRQUFRLE9BQU8sTUFBTSxpQkFDckQ7O1lBRUU7Z0JBQVUsQ0FBQyxDQUVkO0FBSEc7QUFIZ0I7QUFBYixFIiwiZmlsZSI6IjQuZmIzYzJlZDRiM2E2NmNkMzEzMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL0F1dGhBY3Rpb25zJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJ1xuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSwgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChhdXRoKHJlcSkpXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgdGl0bGU9XCJIb21lIFBhZ2VcIiAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShJbmRleClcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImV4cG9ydCBjb25zdCBhdXRoID0gcmVxID0+IGRpc3BhdGNoID0+IHtcbiAgY29uc3Qgc2VhcmNoQ29va2llcyA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZS5tYXRjaCgvdXNlcklkPVxcdysvZykgOiBudWxsXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiAnU0VUX0xPR0dFRF9JTicsXG4gICAgbG9nZ2VkSW46ICEhc2VhcmNoQ29va2llc1xuICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9BdXRoQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=