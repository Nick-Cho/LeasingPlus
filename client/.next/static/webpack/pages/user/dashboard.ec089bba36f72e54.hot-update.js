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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    // useEffect(()=>{setState({user:{\"test\": \"asdf\", \"name\": \"Nick\", \"landlord\": false}, token: \"test\"})}\n    // ,[])\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state && state.user.rentPaid || state.user.rentCollected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            height: \"auto\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 col-md-4 pb-4\",\n                    style: {\n                        backgroundColor: \"rgb(30,30,30)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"inline\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    width: 75,\n                                    height: 65,\n                                    className: \"px-3 pt-4\",\n                                    alt: \"\",\n                                    style: {\n                                        display: \"inline\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    className: \"display-3 text-light text-center font\",\n                                    children: state && state.user.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"px-3 text-light font\",\n                                    children: \" Tenants \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                state.user.tenants.map(function(tenant) {\n                                    console.log(tenant);\n                                })\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    children: [\n                                        \"Monthly Rent: $\",\n                                        state.user.rent\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: \"Rent Status: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"\\n              \".concat(rentStatus === \"Rent collected\" ? \"text-success\" : rentStatus === \"Rent processing\" ? \"text-warning\" : \"text-danger\", \"\\n              \"),\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: rentStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text form-control\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO29DQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07Z0NBQ3BCLENBQUM7Ozs7NEdBSUFHLENBQUU7b0NBQUNkLFNBQVMsRUFBRyxDQUFpQjs7d0NBQUMsQ0FBZTt3Q0FBQ2pCLEtBQUssQ0FBQ08sSUFBSSxDQUFDeUIsSUFBSTs7Ozs7Ozs0R0FDaEVELENBQUU7b0NBQUNkLFNBQVMsRUFBRyxDQUFpQjtvQ0FBQ0wsS0FBSyxFQUFJLENBQUNNO3dDQUFBQSxPQUFPLEVBQUUsQ0FBUTtvQ0FBQSxDQUFDOzhDQUFFLENBQWE7Ozs7Ozs0R0FDNUVhLENBQUU7b0NBQ0hkLFNBQVMsRUFBSyxDQUNkLGtCQUVlLE1BQ2YsQ0FIRWYsVUFBVSxLQUFLLENBQWdCLGtCQUFFLENBQWMsZ0JBQ2pEQSxVQUFVLEtBQUssQ0FBaUIsbUJBQUcsQ0FBYyxnQkFDakQsQ0FBYSxjQUFFLENBQ2Y7b0NBQ0FVLEtBQUssRUFBRSxDQUFDTTt3Q0FBQUEsT0FBTyxFQUFDLENBQVE7b0NBQUEsQ0FBQzs4Q0FDdEJoQixVQUFVOzs7Ozs7Ozs7Ozs7Ozs0RkFPbEJTLENBQUc7b0JBQUNNLFNBQVMsRUFBRyxDQUFVOzBHQUN4QmdCLENBQUk7OEdBQ0Z0QixDQUFHOzRCQUFDTSxTQUFTLEVBQUcsQ0FBWTtrSEFDMUJpQixDQUFLO2dDQUFDQyxJQUFJLEVBQUMsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdDLENBQUM7R0FoRXVCcEMsU0FBUzs7UUFLaEJELGtEQUFTOzs7S0FMRkMsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvaW5kZXguanNcIjtcclxuaW1wb3J0IHdhbGxwYXBlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YWxscGFwZXIuanBnXCIgIFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcmVudFN0YXR1cyxzZXRSZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldFN0YXRlKHt1c2VyOntcInRlc3RcIjogXCJhc2RmXCIsIFwibmFtZVwiOiBcIk5pY2tcIiwgXCJsYW5kbG9yZFwiOiBmYWxzZX0sIHRva2VuOiBcInRlc3RcIn0pfVxyXG4gIC8vICxbXSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmIChKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VyKSA9PSBcInt9XCIpe1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBjb2xsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghc3RhdGUudXNlci5yZW50Q29sbGVjdGVkICYmIHN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBwcm9jZXNzaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCB1bnBhaWRcIik7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlICYmIHN0YXRlLnVzZXIucmVudFBhaWQgfHwgc3RhdGUudXNlci5yZW50Q29sbGVjdGVkXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsaGVpZ2h0OiBcImF1dG9cIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmdUb3A6IFwiNHJlbVwifX0gY2xhc3NOYW1lID1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm10LTQgY29sLW1kLTQgcGItNFwiIHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMwLDMwLDMwKVwifX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tkaXNwbGF5OiBcImlubGluZVwifX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7d2FsbHBhcGVyfSB3aWR0aD17NzV9IGhlaWdodD17NjV9IGNsYXNzTmFtZSA9XCJweC0zIHB0LTRcIiBhbHQgPSBcIlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19Lz5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19IGNsYXNzTmFtZSA9IFwiZGlzcGxheS0zIHRleHQtbGlnaHQgdGV4dC1jZW50ZXIgZm9udFwiPntzdGF0ZSAmJiBzdGF0ZS51c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7c3RhdGUudXNlci5sYW5kbG9yZCA/IFxyXG4gICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lID0gXCJweC0zIHRleHQtbGlnaHQgZm9udFwiPiBUZW5hbnRzIDwvaDM+XHJcbiAgICAgICAgICAgICAge3N0YXRlLnVzZXIudGVuYW50cy5tYXAoKHRlbmFudCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbmFudClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSBcInB4LTMgdGV4dC1saWdodFwiPk1vbnRobHkgUmVudDogJHtzdGF0ZS51c2VyLnJlbnR9PC9oND5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0gXCJweC0zIHRleHQtbGlnaHRcIiBzdHlsZSA9IHt7ZGlzcGxheTogXCJpbmxpbmVcIn19PlJlbnQgU3RhdHVzOiA8L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBcclxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7YFxyXG4gICAgICAgICAgICAgICR7cmVudFN0YXR1cyA9PT0gXCJSZW50IGNvbGxlY3RlZFwiPyBcInRleHQtc3VjY2Vzc1wiOiBcclxuICAgICAgICAgICAgICByZW50U3RhdHVzID09PSBcIlJlbnQgcHJvY2Vzc2luZ1wiID8gXCJ0ZXh0LXdhcm5pbmdcIjogXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0LWRhbmdlclwiIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZVwifX0+XHJcbiAgICAgICAgICAgICAgICB7cmVudFN0YXR1c31cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdjb2wtbWQtNSc+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHQgZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0Iiwid2FsbHBhcGVyIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJEYXNoYm9hcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVudFN0YXR1cyIsInNldFJlbnRTdGF0dXMiLCJyb3V0ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsInB1c2giLCJyZW50Q29sbGVjdGVkIiwicmVudFBhaWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm1pbkhlaWdodCIsInBhZGRpbmdUb3AiLCJjbGFzc05hbWUiLCJkaXNwbGF5Iiwic3JjIiwid2lkdGgiLCJhbHQiLCJoMiIsIm5hbWUiLCJsYW5kbG9yZCIsImgzIiwidGVuYW50cyIsIm1hcCIsInRlbmFudCIsImNvbnNvbGUiLCJsb2ciLCJoNCIsInJlbnQiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});