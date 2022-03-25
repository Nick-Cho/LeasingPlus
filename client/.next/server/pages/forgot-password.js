"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/forgot-password";
exports.ids = ["pages/forgot-password"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    // useEffect(() => {\n    //   setState(JSON.parse(window.localStorage.getItem('auth')));\n    // }, []);\n    // const router = useRouter();\n    const token = state && state.token ? state.token : \" \";\n    //axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    // Forcing user to log in if login token has expired\n    //axios.interceptors.response.use(\n    //   function (response) {\n    //   return response;\n    // }, \n    // function (error) {\n    //   // Do something with request error\n    //   let res = error.response;\n    //   //console.log(error);\n    //   //console.log(\"axios interceptor error\", error);\n    //   if (res.status === 401 && !res.config.__isRetryRequest){\n    //     setState({user: {}, token: \"\"});\n    //     window.localStorage.removeItem(\"auth\");\n    //     router.push(\"/login\");\n    //   }\n    //   else{\n    //     return error.response;\n    //   }\n    // });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\context\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRCxFQUFvRTtJQUNwRSxFQUFvQjtJQUNwQixFQUErRDtJQUMvRCxFQUFVO0lBRVYsRUFBOEI7SUFFOUIsS0FBSyxDQUFDQSxLQUFLLEdBQUdILEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxHQUFHLENBQUc7SUFFdEQsRUFBdUQ7SUFDdkRSLG9GQUE2QyxJQUFNLE9BQU8sRUFBRVEsS0FBSztJQUNqRSxFQUFvRDtJQUNwRCxFQUFrQztJQUNsQyxFQUEwQjtJQUMxQixFQUFxQjtJQUNyQixFQUFNO0lBQ04sRUFBcUI7SUFDckIsRUFBdUM7SUFDdkMsRUFBOEI7SUFDOUIsRUFBMEI7SUFDMUIsRUFBcUQ7SUFDckQsRUFBNkQ7SUFDN0QsRUFBdUM7SUFDdkMsRUFBOEM7SUFDOUMsRUFBNkI7SUFDN0IsRUFBTTtJQUNOLEVBQVU7SUFDVixFQUE2QjtJQUM3QixFQUFNO0lBRU4sRUFBTTtJQUVOLE1BQU0sNkVBQ0hOLFdBQVcsQ0FBQ1UsUUFBUTtRQUFDQyxLQUFLLEVBQUksQ0FBQ1I7WUFBQUEsS0FBSztZQUFDQyxRQUFRO1FBQUEsQ0FBQztrQkFDNUNGLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy9hdHRlbXB0aW5nIHRvIGdldCBhdXRoZW50aWNhdGlvbiBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlIG9uIHN0YXJ0dXBcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiBcclxuICBjb25zdCB0b2tlbiA9IHN0YXRlICYmIHN0YXRlLnRva2VuID8gc3RhdGUudG9rZW4gOiBcIiBcIjtcclxuXHJcbiAgLy9heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9ICBgQmVhcmVyICR7dG9rZW59YDtcclxuICAvLyBGb3JjaW5nIHVzZXIgdG8gbG9nIGluIGlmIGxvZ2luIHRva2VuIGhhcyBleHBpcmVkXHJcbiAgLy9heGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIC8vICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgLy8gICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgLy8gfSwgXHJcbiAgLy8gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgLy8gICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXHJcbiAgLy8gICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyAgIC8vY29uc29sZS5sb2coXCJheGlvcyBpbnRlcmNlcHRvciBlcnJvclwiLCBlcnJvcik7XHJcbiAgLy8gICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3Qpe1xyXG4gIC8vICAgICBzZXRTdGF0ZSh7dXNlcjoge30sIHRva2VuOiBcIlwifSk7XHJcbiAgLy8gICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhcIik7XHJcbiAgLy8gICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgZWxzZXtcclxuICAvLyAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyB9KTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge1tzdGF0ZSxzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index.js */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ForgotPassword() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_1__.UserContext);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid min-vh-100\",\n        style: {\n            backgroundColor: \"black\",\n            overflow: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-light\",\n                children: \" forgot password page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-light\",\n                style: {\n                    paddingTop: \"100rem\"\n                },\n                children: \"  forgot password page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\forgot-password.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ047QUFDSjtTQUM1QkksY0FBYyxHQUFHLENBQUM7SUFDekIsS0FBSyxNQUFFQyxLQUFLLE1BQUNDLFFBQVEsTUFBSUwsaURBQVUsQ0FBQ0QsMERBQVc7SUFFL0MsTUFBTSw2RUFDSE8sQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBNEI7UUFBQ0MsS0FBSyxFQUFJLENBQUNDO1lBQUFBLGVBQWUsRUFBRSxDQUFPO1lBQUVDLFFBQVEsRUFBRSxDQUFRO1FBQUEsQ0FBQzs7d0ZBQ2xHQyxDQUFFO2dCQUFDSixTQUFTLEVBQUUsQ0FBWTswQkFBQyxDQUFxQjs7Ozs7O3dGQUNoREksQ0FBRTtnQkFBQ0osU0FBUyxFQUFFLENBQVlDO2dCQUFBQSxLQUFLLEVBQUksQ0FBQ0k7b0JBQUFBLFVBQVUsRUFBQyxDQUFRO2dCQUFBLENBQUM7MEJBQUUsQ0FBc0I7Ozs7Ozs7Ozs7OztBQUd2RixDQUFDO0FBRUQsaUVBQWVULGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanM/MWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4LmpzJztcclxuaW1wb3J0IHt1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5mdW5jdGlvbiBGb3Jnb3RQYXNzd29yZCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXItZmx1aWQgbWluLXZoLTEwMFwiIHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0gXCJ0ZXh0LWxpZ2h0XCI+IGZvcmdvdCBwYXNzd29yZCBwYWdlPC9oMT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0gXCJ0ZXh0LWxpZ2h0XCJzdHlsZSA9IHt7cGFkZGluZ1RvcDpcIjEwMHJlbVwifX0+ICBmb3Jnb3QgcGFzc3dvcmQgcGFnZTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9yZ290UGFzc3dvcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsImgxIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/forgot-password.js"));
module.exports = __webpack_exports__;

})();