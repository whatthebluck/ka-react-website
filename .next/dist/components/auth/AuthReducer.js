'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = false;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.userId;
    case 'REMOVE_AUTH':
      return false;
    default:
      return state;
  }
};