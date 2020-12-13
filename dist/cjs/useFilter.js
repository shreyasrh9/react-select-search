"use strict";

exports.__esModule = true;
exports["default"] = useFilter;

var _react = require("react");

var _fuzzySearch = _interopRequireDefault(require("./fuzzySearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useFilter(filter, fuse) {
  return (0, _react.useCallback)(function (q, o) {
    var nextOptions = o;

    if (q.length && fuse) {
      nextOptions = (0, _fuzzySearch["default"])(q, nextOptions, fuse);
    }

    if (filter) {
      nextOptions = filter(q, nextOptions);
    }

    return nextOptions;
  }, [filter, fuse]);
}