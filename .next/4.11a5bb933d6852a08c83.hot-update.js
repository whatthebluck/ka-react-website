webpackHotUpdate(4,{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.logout = exports.login = exports.auth = exports.reducer = undefined;

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _redux = __webpack_require__(580);

var _reduxThunk = __webpack_require__(615);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactCookie = __webpack_require__(601);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _firebase = __webpack_require__(569);

var _firebase2 = _interopRequireDefault(_firebase);

__webpack_require__(604);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var initialState = {
  email: "stephenbluck@msn.com",
  password: 'Vampire2.',
  loggedIn: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { loggedIn: action.loggedIn };
    default:
      return state;
  }
};

var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    dispatch({ type: 'SET_LOGGED_IN', loggedIn: !!searchCookies });
  };
};

var login = exports.login = function login(email, password) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _firebase2.default.auth().signInWithEmailAndPassword(email, password);

            case 2:
              user = _context.sent;

              _reactCookie2.default.save('userId', user.uid, { path: '/' });
              return _context.abrupt('return', dispatch({ type: "SET_LOGGED_IN", loggedIn: true }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function logout(dispatch) {
  _firebase2.default.auth().signOut();
  _reactCookie2.default.remove('userId', { path: '/' });
  dispatch({ type: 'SET_LOGGED_IN', loggedIn: false });
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9jMTgyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjs7QUFDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRVAsSUFBTTtTQUVKO1lBQ0E7WUFHRjtBQUxFOztBQUtLLElBQU0sNEJBQVUsbUJBQWtDO01BQUE7TUFBQSxtQkFDdkQ7O1VBQVEsT0FDTjtTQUFzQjthQUFPLEVBQUUsVUFBVSxPQUN6QztBQUFTO2FBRVo7O0FBR0Q7O0FBQU8sSUFBTSxzQkFBTztTQUFPLG9CQUN6QjtRQUFNLGdCQUFnQixNQUFNLElBQUksUUFBUSxPQUFPLE1BQU0saUJBQ3JEO2FBQVMsRUFBRSxNQUFNLGlCQUFpQixVQUFVLENBQUMsQ0FDOUM7QUFIbUI7QUFLcEI7O0FBQU8sSUFBTSx3QkFBUSxlQUFDLE9BQU8sVUFBUjtxQkFBQTswRUFBcUIsaUJBQU0sVUFBTjtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNyQixtQkFBUyxPQUN6QiwyQkFBMkIsT0FBTzs7aUJBRC9CO0FBRGtDLDhCQUd4Qzs7b0NBQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxFQUFFLE1BQU07K0NBQ2pDLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixVQUFVOztpQkFKWDtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBQUFyQjs7MEJBQUE7OEJBQUE7QUFBQTtBQUFBO0FBT3JCOztBQUFPLElBQU0sMEJBQVMsMEJBQ3BCO3FCQUFTLE9BQ1Q7d0JBQU8sT0FBTyxVQUFVLEVBQUUsTUFDMUI7V0FBUyxFQUFFLE1BQU0saUJBQWlCLFVBQ25DO0FBSUQ7O0FBQU8sSUFBTSxnQ0FBWSxtQkFBQyxjQUN4QjtTQUFPLHdCQUFZLFNBQVMsY0FDN0I7QUFGTSxFIiwiZmlsZSI6IjQuMTFhNWJiOTMzZDY4NTJhMDhjODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcbmltcG9ydCAnLi9saWIvaW5pdC1maXJlYmFzZSdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogXCJzdGVwaGVuYmx1Y2tAbXNuLmNvbVwiLFxuICBwYXNzd29yZDogJ1ZhbXBpcmUyLicsXG4gIGxvZ2dlZEluOiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfTE9HR0VEX0lOJzogcmV0dXJuIHsgbG9nZ2VkSW46IGFjdGlvbi5sb2dnZWRJbiB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgYXV0aCA9IHJlcSA9PiBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHNlYXJjaENvb2tpZXMgPSByZXEgPyByZXEuaGVhZGVycy5jb29raWUubWF0Y2goL3VzZXJJZD1cXHcrL2cpIDogbnVsbFxuICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfTE9HR0VEX0lOJywgbG9nZ2VkSW46ICEhc2VhcmNoQ29va2llc30pXG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGZpcmViYXNlLmF1dGgoKVxuICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gIGNvb2tpZS5zYXZlKCd1c2VySWQnLCB1c2VyLnVpZCwgeyBwYXRoOiAnLycgfSk7XG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0xPR0dFRF9JTlwiLCBsb2dnZWRJbjogdHJ1ZSB9KVxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gZGlzcGF0Y2ggPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXG4gIGNvb2tpZS5yZW1vdmUoJ3VzZXJJZCcsIHsgcGF0aDogJy8nIH0pXG4gIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9MT0dHRURfSU4nLCBsb2dnZWRJbjogZmFsc2V9KVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9