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
exports.id = "pages/user/payments/stripe-return";
exports.ids = ["pages/user/payments/stripe-return"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    const token = state && state.token ? state.token : \" \";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n            value: [\n                state,\n                setState\n            ],\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\context\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRCxFQUFvRTtJQUNwRVQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZPLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDTCxLQUFLLEdBQUdILEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxHQUFHLENBQUc7SUFFdERSLG9GQUE2QyxJQUFNLE9BQU8sRUFBRVEsS0FBSztJQUNqRVIsK0RBQXNCLEdBQUdrQiwyQkFBMkI7SUFHcEQsTUFBTSw2RUFBQzs4RkFFRmhCLFdBQVcsQ0FBQ21CLFFBQVE7WUFBQ0MsS0FBSyxFQUFJLENBQUNqQjtnQkFBQUEsS0FBSztnQkFBRUMsUUFBUTtZQUFBLENBQUM7c0JBQzdDRixRQUFROzs7Ozs7O0FBSWpCLENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy9hdHRlbXB0aW5nIHRvIGdldCBhdXRoZW50aWNhdGlvbiBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlIG9uIHN0YXJ0dXBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA/IHN0YXRlLnRva2VuIDogXCIgXCI7XHJcblxyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9ICBgQmVhcmVyICR7dG9rZW59YDtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+ICAgIFxyXG4gICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/user/payments/stripe-return.js":
/*!**********************************************!*\
  !*** ./pages/user/payments/stripe-return.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index.js */ \"./context/index.js\");\n\n\n\n\nfunction stripeReturn() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"state:\", state);\n        const account = axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://api.stripe.com/v1/accounts/${state.stripe_id}`);\n        console.log(account);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"stripe-return\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\payments\\\\stripe-return.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripeReturn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3BheW1lbnRzL3N0cmlwZS1yZXR1cm4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3VCO0FBQ0s7U0FFNUNLLFlBQVksR0FBRyxDQUFDO0lBQ3ZCLEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUlKLGlEQUFVLENBQUNDLDBEQUFXO0lBQy9DRixnREFBUyxLQUFLLENBQUM7UUFDYk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFSCxLQUFLO1FBQzNCLEtBQUssQ0FBQ0ksT0FBTyxHQUFHVixnREFBUyxFQUFFLG1DQUFtQyxFQUFFTSxLQUFLLENBQUNNLFNBQVM7UUFDL0VKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO0lBQ3JCLENBQUM7SUFDRCxNQUFNLDZFQUNIRyxDQUFHO2tCQUFDLENBQWE7Ozs7OztBQUV0QixDQUFDO0FBRUQsaUVBQWVSLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy91c2VyL3BheW1lbnRzL3N0cmlwZS1yZXR1cm4uanM/NWYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9pbmRleC5qc1wiXHJcblxyXG5mdW5jdGlvbiBzdHJpcGVSZXR1cm4oKSB7XHJcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc29sZS5sb2coXCJzdGF0ZTpcIiAsc3RhdGUpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuc3RyaXBlLmNvbS92MS9hY2NvdW50cy8ke3N0YXRlLnN0cmlwZV9pZH1gKVxyXG4gICAgY29uc29sZS5sb2coYWNjb3VudCk7XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5zdHJpcGUtcmV0dXJuPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJpcGVSZXR1cm4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInN0cmlwZVJldHVybiIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudCIsImdldCIsInN0cmlwZV9pZCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/payments/stripe-return.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/payments/stripe-return.js"));
module.exports = __webpack_exports__;

})();