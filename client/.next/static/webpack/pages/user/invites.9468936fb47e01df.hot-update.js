"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/invites",{

/***/ "./components/cards/InvitesList.js":
/*!*****************************************!*\
  !*** ./components/cards/InvitesList.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Invite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Invite.js */ \"./components/cards/Invite.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InvitesList(param) {\n    var invites = param.invites;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), sender = ref[0], setSender = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row col-md-6 offset-md-3 bg-dark container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: invites,\n            renderItem: function(invite) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item.Meta, {\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invite_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                setSender: setSender,\n                                sender: sender,\n                                invite: invite\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\InvitesList.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\InvitesList.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n_s(InvitesList, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = InvitesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvitesList);\nvar _c;\n$RefreshReg$(_c, \"InvitesList\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0ludml0ZXNMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDaEI7QUFDQTtBQUNPOztTQUV2QkssV0FBVyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87O0lBQzNCLEdBQUssQ0FBc0JOLEdBQVUsR0FBVkEsK0NBQVEsSUFBNUJPLE1BQU0sR0FBY1AsR0FBVSxLQUF2QlEsU0FBUyxHQUFJUixHQUFVO0lBRXJDLE1BQU0sNkVBQ0hTLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQWtEOzhGQUNoRVIsc0NBQUk7WUFBQ1MsVUFBVSxFQUFDLENBQVk7WUFBQ0MsVUFBVSxFQUFJTixPQUFPO1lBQUVPLFVBQVUsRUFBRSxRQUFRLENBQVBDLE1BQU07OEJBQ3RFLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMYiwyQ0FBUzswR0FDUEEsZ0RBQWM7d0JBQ2JlLEtBQUssOEVBQ0ZSLENBQUc7a0hBQ0NMLGtEQUFNO2dDQUFDSSxTQUFTLEVBQUlBLFNBQVM7Z0NBQUVELE1BQU0sRUFBRUEsTUFBTTtnQ0FBRU8sTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBU2hGLENBQUM7R0FuQlFULFdBQVc7S0FBWEEsV0FBVztBQXFCcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9JbnZpdGVzTGlzdC5qcz85MWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7TGlzdH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSW52aXRlIGZyb20gXCIuL0ludml0ZS5qc1wiXHJcblxyXG5mdW5jdGlvbiBJbnZpdGVzTGlzdCh7aW52aXRlc30pIHtcclxuICBjb25zdCBbc2VuZGVyLHNldFNlbmRlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcInJvdyBjb2wtbWQtNiBvZmZzZXQtbWQtMyBiZy1kYXJrIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8TGlzdCBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiIGRhdGFTb3VyY2UgPSB7aW52aXRlc30gcmVuZGVySXRlbT17KGludml0ZSk9PihcclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW52aXRlIHNldFNlbmRlciA9IHtzZXRTZW5kZXJ9IHNlbmRlcj17c2VuZGVyfSBpbnZpdGU9e2ludml0ZX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0ZXNMaXN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGlzdCIsImF4aW9zIiwiSW52aXRlIiwiSW52aXRlc0xpc3QiLCJpbnZpdGVzIiwic2VuZGVyIiwic2V0U2VuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaW52aXRlIiwiSXRlbSIsIk1ldGEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/InvitesList.js\n");

/***/ })

});