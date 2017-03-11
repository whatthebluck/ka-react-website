webpackHotUpdate(5,{

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = exports.auth = function auth(req) {
  return function (dispatch) {

    var searchCookies = req ? req.headers.cookie.match(/userId=\w+/g) : null;

    if (searchCookies) {
      dispatch({
        type: 'AUTH_SUCCESS',
        userId: searchCookies[0].replace('userId=', '')
      });
    }
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stephen.bluck/Documents/repos/ka-react-website/components/auth/AuthActions.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQXV0aEFjdGlvbnMuanM/ZDhmNzRlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFPLElBQU0sc0JBQU87U0FBTyxvQkFFekI7O1FBQU0sZ0JBQWdCLE1BQU0sSUFBSSxRQUFRLE9BQU8sTUFBTSxpQkFFckQ7O1FBQUcsZUFDRDs7Y0FFRTtnQkFBUSxjQUFjLEdBQUcsUUFBUSxXQUVwQztBQUhHO0FBS0w7QUFYbUI7QUFBYixFIiwiZmlsZSI6IjUuOTQ2MTBlYjU4MmFiNGY2OTg3ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhdXRoID0gcmVxID0+IGRpc3BhdGNoID0+IHtcblxuICBjb25zdCBzZWFyY2hDb29raWVzID0gcmVxID8gcmVxLmhlYWRlcnMuY29va2llLm1hdGNoKC91c2VySWQ9XFx3Ky9nKSA6IG51bGxcblxuICBpZihzZWFyY2hDb29raWVzKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FVVEhfU1VDQ0VTUycsXG4gICAgICB1c2VySWQ6IHNlYXJjaENvb2tpZXNbMF0ucmVwbGFjZSgndXNlcklkPScsICcnKVxuICAgIH0pXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9BdXRoQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=