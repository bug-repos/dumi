"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/divider/style");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var _indexModule = _interopRequireDefault(require("./index.module.less"));

var _classnames = _interopRequireDefault(require("classnames"));

var _default = function _default(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("h1", {
    className: (0, _classnames.default)(_index.default['bar-center'], _indexModule.default.test)
  }, /*#__PURE__*/_react.default.createElement(_divider.default, {
    type: "vertical"
  }), title, /*#__PURE__*/_react.default.createElement(_divider.default, {
    type: "vertical"
  }));
};

exports.default = _default;