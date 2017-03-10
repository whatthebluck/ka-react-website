webpackHotUpdate(4,{

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = exports.auth = function auth(req) {
  return function (dispatch) {
    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;
    searchCookies && dispatch({ type: 'AUTH_SUCCESS', userId: searchCookies[0].replace('userId=', '') });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQXV0aEFjdGlvbnMuanM/MTM5MmM4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFPLElBQU0sc0JBQU87U0FBTyxvQkFDekI7UUFBTSxnQkFBZ0IsTUFBTSxJQUFJLFFBQVEsT0FBTyxNQUFNLGlCQUNyRDtxQkFBaUIsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLFFBQVEsY0FBYyxHQUFHLFFBQVEsV0FDbkY7QUFIbUI7QUFBYixFIiwiZmlsZSI6IjQuOGNjM2FhMjMzNDdkMmQxMzdjZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoID0gcmVxID0+IGRpc3BhdGNoID0+IHtcbiAgY29uc3Qgc2VhcmNoQ29va2llcyA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZS5tYXRjaCgvdXNlcklkPVxcdysvZykgOiBudWxsXG4gIHNlYXJjaENvb2tpZXMgJiYgZGlzcGF0Y2goe3R5cGU6ICdBVVRIX1NVQ0NFU1MnLCB1c2VySWQ6IHNlYXJjaENvb2tpZXNbMF0ucmVwbGFjZSgndXNlcklkPScsICcnKX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hdXRoL0F1dGhBY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==