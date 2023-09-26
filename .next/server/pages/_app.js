module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/lyuiseo/Desktop/code/study/nodebird/pages/_app.js\";\n\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJfanN4REVWIiwiX0ZyYWdtZW50IiwiY2hpbGRyZW4iLCJIZWFkIiwiY2hhclNldCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUNPO0FBQ1A7QUFDa0I7QUFBQTtBQUFBO0FBRTlDLE1BQU1BLFFBQVEsR0FBQ0EsQ0FBQztFQUFDQztBQUFTLENBQUMsS0FBRztFQUMxQixvQkFDSUMsb0VBQUEsQ0FBQUMsOERBQUE7SUFBQUMsUUFBQSxnQkFDQUYsb0VBQUEsQ0FBQ0csZ0RBQUk7TUFBQUQsUUFBQSxnQkFDREYsb0VBQUE7UUFBTUksT0FBTyxFQUFDO01BQU87UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUUsQ0FBQyxlQUN4QlIsb0VBQUE7UUFBQUUsUUFBQTtNQUFBO1FBQUFHLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUFzQixDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ3JCLENBQUMsZUFDUFIsb0VBQUEsQ0FBQ0QsU0FBUztNQUFBTSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBRSxDQUFDO0VBQUEsZUFDWCxDQUFDO0FBRVgsQ0FBQztBQUVEVixRQUFRLENBQUNXLFNBQVMsR0FBRTtFQUNoQlYsU0FBUyxFQUFFVyxpREFBUyxDQUFDQyxXQUFXLENBQUNDO0FBQ3JDLENBQUM7QUFDY0MsNEhBQU8sQ0FBQ0MsU0FBUyxDQUFDaEIsUUFBUSxDQUFDIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBOb2RlQmlyZD0oe0NvbXBvbmVudH0pPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbk5vZGVCaXJkLnByb3BUeXBlcyA9e1xuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nconst initialState = {\n  user: {\n    isLoggendIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n};\n\n//action creator\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = data => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\n//(이전상태, 액션) => 다음상태 \nconst rootReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload);\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          user: action.data\n        })\n      });\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: false,\n          user: null\n        })\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlbmRJbiIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiX29iamVjdFNwcmVhZCIsInBheWxvYWQiLCJpc0xvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRTNDLE1BQU1BLFlBQVksR0FBRTtFQUNoQkMsSUFBSSxFQUFDO0lBQ0RDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCRCxJQUFJLEVBQUUsSUFBSTtJQUNWRSxVQUFVLEVBQUcsQ0FBQyxDQUFDO0lBQ2ZDLFNBQVMsRUFBRSxDQUFDO0VBQ2hCLENBQUM7RUFDREMsSUFBSSxFQUFFO0lBQ0ZDLFNBQVMsRUFBQztFQUNkO0FBQ0osQ0FBQzs7QUFFRDtBQUNPLE1BQU1DLFdBQVcsR0FBRUMsSUFBSSxJQUFHO0VBQzdCLE9BQU87SUFDSEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQ7RUFDSixDQUFDO0FBQ0wsQ0FBQztBQUNNLE1BQU1FLFlBQVksR0FBRUYsSUFBSSxJQUFHO0VBQzlCLE9BQU87SUFDSEMsSUFBSSxFQUFFO0VBQ1YsQ0FBQztBQUNMLENBQUM7O0FBR0Q7QUFDQSxNQUFNRSxXQUFXLEdBQUVBLENBQUNDLEtBQUssR0FBR1osWUFBWSxFQUFFYSxNQUFNLEtBQUc7RUFDL0MsUUFBT0EsTUFBTSxDQUFDSixJQUFJO0lBQ2QsS0FBS0ssMERBQU87TUFDWixPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBV0gsS0FBSyxHQUFLQyxNQUFNLENBQUNHLE9BQU87SUFDbkMsS0FBSyxRQUFRO01BQ1QsT0FBQUQsYUFBQSxDQUFBQSxhQUFBLEtBQ09ILEtBQUs7UUFDUlgsSUFBSSxFQUFBYyxhQUFBLENBQUFBLGFBQUEsS0FDR0gsS0FBSyxDQUFDWCxJQUFJO1VBQ2JnQixVQUFVLEVBQUcsSUFBSTtVQUNqQmhCLElBQUksRUFBRVksTUFBTSxDQUFDTDtRQUFJO01BQ3BCO0lBRVQsS0FBSyxTQUFTO01BQ1YsT0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQ09ILEtBQUs7UUFDUlgsSUFBSSxFQUFBYyxhQUFBLENBQUFBLGFBQUEsS0FDR0gsS0FBSyxDQUFDWCxJQUFJO1VBQ2JnQixVQUFVLEVBQUcsS0FBSztVQUNsQmhCLElBQUksRUFBRTtRQUFJO01BQ2I7SUFFVDtNQUNBLE9BQU9XLEtBQUs7RUFDaEI7QUFDSixDQUFDO0FBRWNELDBFQUFXIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuICAgIHVzZXI6e1xuICAgICAgICBpc0xvZ2dlbmRJbjogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIHNpZ25VcERhdGEgOiB7fSxcbiAgICAgICAgbG9naW5EYXRhOiB7fSxcbiAgICB9LFxuICAgIHBvc3QgOntcbiAgICAgICAgbWFpblBvc3RzOltdLFxuICAgIH1cbn07XG5cbi8vYWN0aW9uIGNyZWF0b3JcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbj0oZGF0YSk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcbiAgICAgICAgZGF0YSxcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbj0oZGF0YSk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXG4gICAgfVxufTtcblxuXG4vLyjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcIFxuY29uc3Qgcm9vdFJlZHVjZXIgPShzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgSFlEUkFURTogXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgY2FzZSAnTE9HX0lOJyA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXI6e1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnTE9HX09VVCcgOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VyOntcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\nconst configureStore = () => {\n  const store = creatStore(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  store.dispatch({\n    type: 'CHANGE_NICKNAME',\n    data: 'boogie'\n  });\n  return store;\n};\nconst wrapper = next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default()(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjcmVhdFN0b3JlIiwicmVkdWNlciIsImRpc3BhdGNoIiwidHlwZSIsImRhdGEiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDYjtBQUNBO0FBRWxDLE1BQU1BLGNBQWMsR0FBQ0EsQ0FBQSxLQUFJO0VBQ3JCLE1BQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDQyxpREFBTyxDQUFDO0VBQ2pDRixLQUFLLENBQUNHLFFBQVEsQ0FBQztJQUNYQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxJQUFJLEVBQUU7RUFDVixDQUFDLENBQUM7RUFDRixPQUFPTCxLQUFLO0FBQ2hCLENBQUM7QUFDRCxNQUFNTSxPQUFPLEdBQUdDLHlEQUFhLENBQUNSLGNBQWMsRUFBRTtFQUFDUyxLQUFLO0FBQXlDLENBQUMsQ0FBQztBQUVoRkYsc0VBQU8iLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVXcmFwcGVyIGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlPSgpPT57XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdFN0b3JlKHJlZHVjZXIpO1xuICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXG4gICAgICAgIGRhdGE6ICdib29naWUnLFxuICAgIH0pXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });