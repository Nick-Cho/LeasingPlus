"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./components/forms/ForgotPasswordForm.js":
/*!************************************************!*\
  !*** ./components/forms/ForgotPasswordForm.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForgotPasswordForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction ForgotPasswordForm(param) {\n    var handleSubmit = param.handleSubmit, email = param.email, setEmail = param.setEmail, newPswd = param.newPswd, setNewPswd = param.setNewPswd, secret = param.secret, setSecret = param.setSecret;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPswd = ref[0], setShowPswd = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), confirmPswd = ref1[0], setConfirmPswd = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            style: {\n                backgroundColor: \"rgb(30,30,30)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-light font\",\n                    children: \" Forgot Password\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"form-group p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted form-text\",\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control bg-dark text-light font\",\n                            placeholder: \"Enter email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            class: \"form-text text-muted\",\n                            children: \"We'll never share your email with anyone else.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"form-group px-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted form-text\",\n                            children: \"New Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: showPswd ? \"text\" : \"password\",\n                            class: \"form-control bg-dark text-light font\",\n                            placeholder: \"Enter New Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-muted form-text\",\n                            children: \"Confirm Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: showPswd ? \"text\" : \"password\",\n                            onChange: function(e) {\n                                setConfirmPswd(e.target.value);\n                            },\n                            class: \"form-control bg-dark text-light font\",\n                            placeholder: \"Confirm New Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"form-group p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            class: \"form-check-input font\",\n                            onClick: function() {\n                                setShowPswd(!showPswd);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            class: \"form-check-label text-light px-2\",\n                            children: \"Show Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form group p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-text text-muted\",\n                                    children: \"Pick a question to use for password recovery\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"form-control bg-dark text-light font\",\n                                    style: {\n                                        borderColor: \"gray\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"What is your favourite color?\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"What is your first friend's name?\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"What is your first pet's name?\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter Answer To Password Recovery Question\",\n                                className: \"form-control bg-dark text-light font\",\n                                style: {\n                                    borderColor: \"gray\"\n                                },\n                                onChange: function(e) {\n                                    return setSecret(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group p-2 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        class: \"login-button\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\ForgotPasswordForm.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(ForgotPasswordForm, \"NrnhVNJE10CLD4UIeTQ0aDaDg7U=\");\n_c = ForgotPasswordForm;\nvar _c;\n$RefreshReg$(_c, \"ForgotPasswordForm\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7O0FBRWYsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQyxLQVExQyxFQUFFLENBQUM7UUFQRkMsWUFBWSxHQUQ2QixLQVExQyxDQVBDQSxZQUFZLEVBQ1pDLEtBQUssR0FGb0MsS0FRMUMsQ0FOQ0EsS0FBSyxFQUNMQyxRQUFRLEdBSGlDLEtBUTFDLENBTENBLFFBQVEsRUFDUkMsT0FBTyxHQUprQyxLQVExQyxDQUpDQSxPQUFPLEVBQ1BDLFVBQVUsR0FMK0IsS0FRMUMsQ0FIQ0EsVUFBVSxFQUNWQyxNQUFNLEdBTm1DLEtBUTFDLENBRkNBLE1BQU0sRUFDTkMsU0FBUyxHQVBnQyxLQVExQyxDQURDQSxTQUFTOztJQUVULEdBQUssQ0FBMkJSLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDUyxRQUFRLEdBQWlCVCxHQUFlLEtBQTlCVSxXQUFXLEdBQUlWLEdBQWU7SUFDL0MsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNXLFdBQVcsR0FBb0JYLElBQVksS0FBOUJZLGNBQWMsR0FBSVosSUFBWTtJQUNsRCxNQUFNOzhGQUVEYSxDQUFJO1lBQUNDLFFBQVEsRUFBRVosWUFBWTtZQUFHYSxLQUFLLEVBQUUsQ0FBQ0M7Z0JBQUFBLGVBQWUsRUFBRSxDQUFlO1lBQUEsQ0FBQzs7NEZBQ3JFQyxDQUFFO29CQUFDQyxTQUFTLEVBQUUsQ0FBaUI7OEJBQUMsQ0FBZ0I7Ozs7Ozs0RkFDaERDLENBQUc7b0JBQUNDLEtBQUssRUFBQyxDQUFnQjs7b0dBQ3hCQyxDQUFLOzRCQUFDSCxTQUFTLEVBQUMsQ0FBc0I7c0NBQUMsQ0FBYTs7Ozs7O29HQUNwREksQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU87NEJBQUNMLFNBQVMsRUFBQyxDQUFzQzs0QkFBQ00sV0FBVyxFQUFDLENBQWE7Ozs7OztvR0FDN0ZDLENBQUs7NEJBQUNMLEtBQUssRUFBQyxDQUFzQjtzQ0FBQyxDQUE4Qzs7Ozs7Ozs7Ozs7OzRGQUVuRkQsQ0FBRztvQkFBQ0MsS0FBSyxFQUFDLENBQWlCOztvR0FDekJDLENBQUs7NEJBQUNILFNBQVMsRUFBQyxDQUFzQjtzQ0FBQyxDQUFZOzs7Ozs7b0dBQ25ESSxDQUFLOzRCQUFDQyxJQUFJLEVBQUdkLFFBQVEsR0FBRyxDQUFNLFFBQUUsQ0FBVTs0QkFBRVcsS0FBSyxFQUFDLENBQXNDOzRCQUFDSSxXQUFXLEVBQUMsQ0FBb0I7Ozs7OztvR0FDekhILENBQUs7NEJBQUNILFNBQVMsRUFBQyxDQUFzQjtzQ0FBQyxDQUFnQjs7Ozs7O29HQUN2REksQ0FBSzs0QkFBQ0MsSUFBSSxFQUFHZCxRQUFRLEdBQUcsQ0FBTSxRQUFFLENBQVU7NEJBQUVpQixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUcsQ0FBQ2Y7Z0NBQUFBLGNBQWMsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7NEJBQUMsQ0FBQzs0QkFBRVQsS0FBSyxFQUFDLENBQXNDOzRCQUFDSSxXQUFXLEVBQUMsQ0FBc0I7Ozs7Ozs7Ozs7Ozs0RkFHOUtMLENBQUc7b0JBQUNDLEtBQUssRUFBQyxDQUFnQjs7b0dBQ3hCRSxDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBVTs0QkFBQ0gsS0FBSyxFQUFDLENBQXVCOzRCQUFDVSxPQUFPLEVBQUcsUUFBUSxHQUFKLENBQUNwQjtnQ0FBQUEsV0FBVyxFQUFFRCxRQUFROzRCQUFDLENBQUM7Ozs7OztvR0FDMUZZLENBQUs7NEJBQUNELEtBQUssRUFBQyxDQUFrQztzQ0FBRSxDQUFhOzs7Ozs7Ozs7Ozs7OztvR0FJN0RELENBQUc7NEJBQUNELFNBQVMsRUFBRyxDQUFnQjs7NEdBQzlCRyxDQUFLO29DQUFDSCxTQUFTLEVBQUUsQ0FBc0I7OENBQUMsQ0FFekM7Ozs7Ozs0R0FDQ2EsQ0FBTTtvQ0FBQ2IsU0FBUyxFQUFHLENBQXNDO29DQUFDSCxLQUFLLEVBQUksQ0FBQ2lCO3dDQUFBQSxXQUFXLEVBQUUsQ0FBTTtvQ0FBQSxDQUFDOztvSEFDdEZDLENBQU07c0RBQUMsQ0FBNkI7Ozs7OztvSEFDcENBLENBQU07c0RBQUMsQ0FBaUM7Ozs7OztvSEFDeENBLENBQU07c0RBQUMsQ0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0FJekNkLENBQUc7NEJBQUNELFNBQVMsRUFBRyxDQUFnQjtrSEFDOUJJLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFNO2dDQUFDQyxXQUFXLEVBQUUsQ0FBNEM7Z0NBQUNOLFNBQVMsRUFBRyxDQUFzQztnQ0FBQ0gsS0FBSyxFQUFJLENBQUNpQjtvQ0FBQUEsV0FBVyxFQUFFLENBQU07Z0NBQUEsQ0FBQztnQ0FBRU4sUUFBUSxFQUFHLFFBQVEsQ0FBUEMsQ0FBQztvQ0FBS25CLE1BQU0sQ0FBTkEsU0FBUyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OzRGQUc3TVYsQ0FBRztvQkFBQ0QsU0FBUyxFQUFHLENBQTRCOzBHQUMxQ2dCLENBQU07d0JBQUNYLElBQUksRUFBQyxDQUFRO3dCQUFDSCxLQUFLLEVBQUMsQ0FBYztrQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0QsQ0FBQztHQXZEdUJuQixrQkFBa0I7S0FBbEJBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm1zL0ZvcmdvdFBhc3N3b3JkRm9ybS5qcz8wZTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmRGb3JtKHtcclxuICBoYW5kbGVTdWJtaXQsXHJcbiAgZW1haWwsXHJcbiAgc2V0RW1haWwsXHJcbiAgbmV3UHN3ZCxcclxuICBzZXROZXdQc3dkLFxyXG4gIHNlY3JldCxcclxuICBzZXRTZWNyZXQsXHJcbn0pIHtcclxuICBjb25zdCBbc2hvd1Bzd2QsIHNldFNob3dQc3dkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29uZmlybVBzd2QsIHNldENvbmZpcm1Qc3dkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMwLDMwLDMwKVwifX0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0gXCJ0ZXh0LWxpZ2h0IGZvbnRcIj4gRm9yZ290IFBhc3N3b3JkPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBwLTJcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvcm0tdGV4dFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtbGlnaHQgZm9udFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIi8+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvcm0tdGV4dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT0ge3Nob3dQc3dkID8gXCJ0ZXh0XCI6IFwicGFzc3dvcmRcIn0gY2xhc3M9XCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LWxpZ2h0IGZvbnRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5ldyBQYXNzd29yZFwiLz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvcm0tdGV4dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9IHtzaG93UHN3ZCA/IFwidGV4dFwiOiBcInBhc3N3b3JkXCJ9IG9uQ2hhbmdlPXsoZSk9PntzZXRDb25maXJtUHN3ZChlLnRhcmdldC52YWx1ZSl9fSBjbGFzcz1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtbGlnaHQgZm9udFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHAtMlwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBmb250XCIgb25DbGljayA9eygpPT57c2V0U2hvd1Bzd2QoIXNob3dQc3dkKX19Lz5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgdGV4dC1saWdodCBweC0yXCIgPlNob3cgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZm9ybSBncm91cCBwLTInPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lID0nZm9ybS10ZXh0IHRleHQtbXV0ZWQnPlxyXG4gICAgICAgICAgICAgIFBpY2sgYSBxdWVzdGlvbiB0byB1c2UgZm9yIHBhc3N3b3JkIHJlY292ZXJ5XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LWxpZ2h0IGZvbnRcIiBzdHlsZSA9IHt7Ym9yZGVyQ29sb3I6IFwiZ3JheVwifX0+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGlzIHlvdXIgZmF2b3VyaXRlIGNvbG9yPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+V2hhdCBpcyB5b3VyIGZpcnN0IGZyaWVuZCdzIG5hbWU/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5XaGF0IGlzIHlvdXIgZmlyc3QgcGV0J3MgbmFtZT88L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwIHAtMic+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSAnRW50ZXIgQW5zd2VyIFRvIFBhc3N3b3JkIFJlY292ZXJ5IFF1ZXN0aW9uJyBjbGFzc05hbWUgPSBcImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtbGlnaHQgZm9udFwiIHN0eWxlID0ge3tib3JkZXJDb2xvcjogXCJncmF5XCJ9fSBvbkNoYW5nZT0geyhlKSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1ncm91cCBwLTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibG9naW4tYnV0dG9uXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb3Jnb3RQYXNzd29yZEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlbWFpbCIsInNldEVtYWlsIiwibmV3UHN3ZCIsInNldE5ld1Bzd2QiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJzaG93UHN3ZCIsInNldFNob3dQc3dkIiwiY29uZmlybVBzd2QiLCJzZXRDb25maXJtUHN3ZCIsImZvcm0iLCJvblN1Ym1pdCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzcyIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzbWFsbCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DbGljayIsInNlbGVjdCIsImJvcmRlckNvbG9yIiwib3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/ForgotPasswordForm.js\n");

/***/ })

});