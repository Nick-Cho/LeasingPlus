"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./pages/user/dashboard.js":
/*!*********************************!*\
  !*** ./pages/user/dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    // useEffect(()=>{setState({user:{\"test\": \"asdf\", \"name\": \"Nick\", \"landlord\": false}, token: \"test\"})}\n    // ,[])\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state && state.user.rentPaid || state.user.rentCollected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 col-md-4 pb-4\",\n                    style: {\n                        backgroundColor: \"rgb(30,30,30)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"inline\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    width: 75,\n                                    height: 65,\n                                    className: \"px-3 pt-4\",\n                                    alt: \"\",\n                                    style: {\n                                        display: \"inline\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    className: \"display-3 text-light text-center font\",\n                                    children: state && state.user.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"px-3 text-light font\",\n                                    children: \" Tenants \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                state.user.tenants.map(function(tenant) {\n                                    console.log(tenant);\n                                })\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    children: [\n                                        \"Monthly Rent: $\",\n                                        state.user.rent\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: \"Rent Status: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"\\n              \".concat(rentStatus === \"Rent collected\" ? \"text-success\" : rentStatus === \"Rent processing\" ? \"text-warning\" : \"text-danger\", \"\\n              \"),\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: rentStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"bg-dark text-light form-control\",\n                                placeholder: \"Search for tenants\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsR0FBRyxDQUFDRixNQUFNO2dDQUNwQixDQUFDOzs7OzRHQUlBRyxDQUFFO29DQUFDZixTQUFTLEVBQUcsQ0FBaUI7O3dDQUFDLENBQWU7d0NBQUNoQixLQUFLLENBQUNPLElBQUksQ0FBQ3lCLElBQUk7Ozs7Ozs7NEdBQ2hFRCxDQUFFO29DQUFDZixTQUFTLEVBQUcsQ0FBaUI7b0NBQUNKLEtBQUssRUFBSSxDQUFDSzt3Q0FBQUEsT0FBTyxFQUFFLENBQVE7b0NBQUEsQ0FBQzs4Q0FBRSxDQUFhOzs7Ozs7NEdBQzVFYyxDQUFFO29DQUNIZixTQUFTLEVBQUssQ0FDZCxrQkFFZSxNQUNmLENBSEVkLFVBQVUsS0FBSyxDQUFnQixrQkFBRSxDQUFjLGdCQUNqREEsVUFBVSxLQUFLLENBQWlCLG1CQUFHLENBQWMsZ0JBQ2pELENBQWEsY0FBRSxDQUNmO29DQUNBVSxLQUFLLEVBQUUsQ0FBQ0s7d0NBQUFBLE9BQU8sRUFBQyxDQUFRO29DQUFBLENBQUM7OENBQ3RCZixVQUFVOzs7Ozs7Ozs7Ozs7Ozs0RkFPbEJTLENBQUc7b0JBQUNLLFNBQVMsRUFBRyxDQUFVOzBHQUN4QmlCLENBQUk7OEdBQ0Z0QixDQUFHOzRCQUFDdUIsS0FBSyxFQUFDLENBQVk7a0hBQ3BCQyxDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBTztnQ0FBQ3BCLFNBQVMsRUFBRyxDQUFpQztnQ0FBQ3FCLFdBQVcsRUFBQyxDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEgsQ0FBQztHQWhFdUJ0QyxTQUFTOztRQUtoQkQsa0RBQVM7OztLQUxGQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZGFzaGJvYXJkLmpzPzM4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgd2FsbHBhcGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhbGxwYXBlci5qcGdcIiAgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtyZW50U3RhdHVzLHNldFJlbnRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gdXNlRWZmZWN0KCgpPT57c2V0U3RhdGUoe3VzZXI6e1widGVzdFwiOiBcImFzZGZcIiwgXCJuYW1lXCI6IFwiTmlja1wiLCBcImxhbmRsb3JkXCI6IGZhbHNlfSwgdG9rZW46IFwidGVzdFwifSl9XHJcbiAgLy8gLFtdKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXIpID09IFwie31cIil7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnVzZXIucmVudENvbGxlY3RlZCl7XHJcbiAgICAgIHNldFJlbnRTdGF0dXMoXCJSZW50IGNvbGxlY3RlZFwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWQgJiYgc3RhdGUudXNlci5yZW50UGFpZCl7XHJcbiAgICAgIHNldFJlbnRTdGF0dXMoXCJSZW50IHByb2Nlc3NpbmdcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghc3RhdGUudXNlci5yZW50UGFpZCl7XHJcbiAgICAgIHNldFJlbnRTdGF0dXMoXCJSZW50IHVucGFpZFwiKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGUgJiYgc3RhdGUudXNlci5yZW50UGFpZCB8fCBzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWRdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmdUb3A6IFwiNHJlbVwifX0gY2xhc3NOYW1lID1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93IGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtdC00IGNvbC1tZC00IHBiLTRcIiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcInJnYigzMCwzMCwzMClcIn19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZSA9IHt7ZGlzcGxheTogXCJpbmxpbmVcIn19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge3dhbGxwYXBlcn0gd2lkdGg9ezc1fSBoZWlnaHQ9ezY1fSBjbGFzc05hbWUgPVwicHgtMyBwdC00XCIgYWx0ID0gXCJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fS8+XHJcbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fSBjbGFzc05hbWUgPSBcImRpc3BsYXktMyB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyIGZvbnRcIj57c3RhdGUgJiYgc3RhdGUudXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge3N0YXRlLnVzZXIubGFuZGxvcmQgPyBcclxuICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0IGZvbnRcIj4gVGVuYW50cyA8L2gzPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZS51c2VyLnRlbmFudHMubWFwKCh0ZW5hbnQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW5hbnQpXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0gXCJweC0zIHRleHQtbGlnaHRcIj5Nb250aGx5IFJlbnQ6ICR7c3RhdGUudXNlci5yZW50fTwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCIgc3R5bGUgPSB7e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fT5SZW50IFN0YXR1czogPC9oND5cclxuICAgICAgICAgICAgICA8aDQgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2BcclxuICAgICAgICAgICAgICAke3JlbnRTdGF0dXMgPT09IFwiUmVudCBjb2xsZWN0ZWRcIj8gXCJ0ZXh0LXN1Y2Nlc3NcIjogXHJcbiAgICAgICAgICAgICAgcmVudFN0YXR1cyA9PT0gXCJSZW50IHByb2Nlc3NpbmdcIiA/IFwidGV4dC13YXJuaW5nXCI6IFxyXG4gICAgICAgICAgICAgIFwidGV4dC1kYW5nZXJcIiB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJpbmxpbmVcIn19PlxyXG4gICAgICAgICAgICAgICAge3JlbnRTdGF0dXN9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sLW1kLTUnPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZSA9IFwiYmctZGFyayB0ZXh0LWxpZ2h0IGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB0ZW5hbnRzXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0Iiwid2FsbHBhcGVyIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJEYXNoYm9hcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVudFN0YXR1cyIsInNldFJlbnRTdGF0dXMiLCJyb3V0ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsInB1c2giLCJyZW50Q29sbGVjdGVkIiwicmVudFBhaWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsInBhZGRpbmdUb3AiLCJjbGFzc05hbWUiLCJkaXNwbGF5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMiIsIm5hbWUiLCJsYW5kbG9yZCIsImgzIiwidGVuYW50cyIsIm1hcCIsInRlbmFudCIsImNvbnNvbGUiLCJsb2ciLCJoNCIsInJlbnQiLCJmb3JtIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});