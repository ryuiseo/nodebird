webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UserProfile */ \"./components/UserProfile.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ \"./components/LoginForm.js\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/lyuiseo/Desktop/\\u1106\\u116E\\u110C\\u1166 \\u1111\\u1169\\u11AF\\u1103\\u1165/study/nodebird/components/AppLayout.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n  var children = _ref.children;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n    isLoggedIn = _useState[0],\n    setIsLoggedIn = _useState[1];\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    mode: \"horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"\\uB178\\uB4DC\\uBC84\\uB4DC\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"\\uD504\\uB85C\\uD544\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"].Search, {\n    enterButton: true,\n    style: {\n      verticalAlign: 'middle'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"\\uD68C\\uC6D0\\uAC00\\uC785\")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    gutter: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, isLoggedIn ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 43\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n    xs: 24,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://github.com/ryuiseo\",\n    target: \"_blank\",\n    rel: \"noreferrer noopener\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"Made by Jenna\"))));\n};\n_s(AppLayout, \"g0MSgNVZk+vKiEFnDJ9VPEfswFA=\");\n_c = AppLayout;\nAppLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/ZDczYiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJfcmVmIiwiX3MiLCJjaGlsZHJlbiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJNZW51IiwibW9kZSIsIkl0ZW0iLCJMaW5rIiwiaHJlZiIsIklucHV0IiwiU2VhcmNoIiwiZW50ZXJCdXR0b24iLCJzdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJSb3ciLCJndXR0ZXIiLCJDb2wiLCJ4cyIsIm1kIiwiVXNlclByb2ZpbGUiLCJMb2dpbkZvcm0iLCJ0YXJnZXQiLCJyZWwiLCJfYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDTjtBQUNTO0FBQ087QUFDTztBQUNKO0FBRWhELElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUFDLEVBQUE7RUFBQSxJQUFmQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtFQUMzQixJQUFBQyxTQUFBLEdBQW9DQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUE1Q0MsVUFBVSxHQUFBRixTQUFBO0lBQUVHLGFBQWEsR0FBQUgsU0FBQTtFQUVoQyxPQUNFSSxLQUFBO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0VQLEtBQUEsQ0FBQ1EseUNBQUk7SUFBQ0MsSUFBSSxFQUFDLFlBQVk7SUFBQVIsTUFBQSxFQUFBQyxL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QUFDM0IsQ0FBQztBQUNjdkMsd0VBQVMsRUFBQztBQUFBLElBQUFtQyxFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSAsIElucHV0LCBSb3csIENvbH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZSc7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWVudSBtb2RlPSdob3Jpem9udGFsJz5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT7rhbjrk5zrsoTrk5w8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgIDxhPu2UhOuhnO2VhDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgPElucHV0LlNlYXJjaCBlbnRlckJ1dHRvbiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0vPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgICA8Um93IGd1dHRlcj17OH0+XG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgLz4gOiA8TG9naW5Gb3JtIC8+fVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vcnl1aXNlbycgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcic+TWFkZSBieSBKZW5uYTwvYT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgIDwvZGl2PlxuICApO1xufTtcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var UserProfile = function UserProfile() {};\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsa0RBQU1BLFdBQVcsR0FBQyxTQUFaQSxXQUFXQSxDQUFBLEVBQUssQ0FFdEIsQ0FBQztBQUFBQyxFQUFBLEdBRktELFdBQVc7QUFHRkEsMEVBQVcsRUFBQztBQUFBLElBQUFDLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJQcm9maWxlPSgpPT57XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})