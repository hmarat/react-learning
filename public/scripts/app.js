"use strict";

var _IndesicionApp = require("./components/IndesicionApp");

var _IndesicionApp2 = _interopRequireDefault(_IndesicionApp);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_IndesicionApp2.default, null), document.getElementById("app"));
