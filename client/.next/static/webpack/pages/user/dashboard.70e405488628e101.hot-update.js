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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_SearchTenants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchTenants */ \"./components/SearchTenants.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state && (state.user.rentPaid || state.user.rentCollected)\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 col-md-4 pb-4\",\n                    style: {\n                        backgroundColor: \"rgb(30,30,30)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: 75,\n                            height: 65,\n                            className: \"px-3 pt-4\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                display: \"inline-block\"\n                            },\n                            className: \"display-3 text-light text-center font\",\n                            children: state && state.user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"px-3 text-light font\",\n                                    children: \" Tenants \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this),\n                                state.user.tenants.map(function(tenant) {\n                                    console.log(tenant);\n                                })\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    children: [\n                                        \"Monthly Rent: $\",\n                                        state.user.rent\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: \"Rent Status: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"\\n                \".concat(rentStatus === \"Rent collected\" ? \"text-success\" : rentStatus === \"Rent processing\" ? \"text-warning\" : \"text-danger\", \"\\n                \"),\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: rentStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offset-md-1 col-md-7\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchTenants__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUcsQ0FBaUI7b0NBQUNKLEtBQUssRUFBSSxDQUFDVTt3Q0FBQUEsT0FBTyxFQUFFLENBQVE7b0NBQUEsQ0FBQzs4Q0FBRSxDQUFhOzs7Ozs7NEdBQzVFUyxDQUFFO29DQUNIZixTQUFTLEVBQUssQ0FDZCxvQkFFZSxNQUNmLENBSEVkLFVBQVUsS0FBSyxDQUFnQixrQkFBRSxDQUFjLGdCQUNqREEsVUFBVSxLQUFLLENBQWlCLG1CQUFHLENBQWMsZ0JBQ2pELENBQWEsY0FBRSxDQUNmO29DQUNBVSxLQUFLLEVBQUUsQ0FBQ1U7d0NBQUFBLE9BQU8sRUFBQyxDQUFRO29DQUFBLENBQUM7OENBQ3RCcEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFTdEJTLENBQUc7Z0JBQUNLLFNBQVMsRUFBRyxDQUFzQjtzR0FDbENsQixpRUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QixDQUFDO0dBN0R1QkMsU0FBUzs7UUFHaEJGLGtEQUFTOzs7S0FIRkUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvaW5kZXguanNcIjtcclxuaW1wb3J0IHdhbGxwYXBlciBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy93YWxscGFwZXIuanBnXCIgIFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFRlbmFudHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVGVuYW50c1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3JlbnRTdGF0dXMsc2V0UmVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmIChKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VyKSA9PSBcInt9XCIpe1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBjb2xsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghc3RhdGUudXNlci5yZW50Q29sbGVjdGVkICYmIHN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBwcm9jZXNzaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCB1bnBhaWRcIik7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlICYmIChzdGF0ZS51c2VyLnJlbnRQYWlkIHx8IHN0YXRlLnVzZXIucmVudENvbGxlY3RlZCldKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmdUb3A6IFwiNHJlbVwifX0gY2xhc3NOYW1lID1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIm10LTQgY29sLW1kLTQgcGItNFwiIHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMwLDMwLDMwKVwifX0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPEltYWdlIHNyYyA9IHt3YWxscGFwZXJ9IHdpZHRoPXs3NX0gaGVpZ2h0PXs2NX0gY2xhc3NOYW1lID1cInB4LTMgcHQtNFwiIGFsdCA9IFwiXCIgLz5cclxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19IGNsYXNzTmFtZSA9IFwiZGlzcGxheS0zIHRleHQtbGlnaHQgdGV4dC1jZW50ZXIgZm9udFwiPntzdGF0ZSAmJiBzdGF0ZS51c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7c3RhdGUudXNlci5sYW5kbG9yZCA/IFxyXG4gICAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0IGZvbnRcIj4gVGVuYW50cyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7c3RhdGUudXNlci50ZW5hbnRzLm1hcCgodGVuYW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW5hbnQpXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCI+TW9udGhseSBSZW50OiAke3N0YXRlLnVzZXIucmVudH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCIgc3R5bGUgPSB7e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fT5SZW50IFN0YXR1czogPC9oND5cclxuICAgICAgICAgICAgICAgIDxoNCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtgXHJcbiAgICAgICAgICAgICAgICAke3JlbnRTdGF0dXMgPT09IFwiUmVudCBjb2xsZWN0ZWRcIj8gXCJ0ZXh0LXN1Y2Nlc3NcIjogXHJcbiAgICAgICAgICAgICAgICByZW50U3RhdHVzID09PSBcIlJlbnQgcHJvY2Vzc2luZ1wiID8gXCJ0ZXh0LXdhcm5pbmdcIjogXHJcbiAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyXCIgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTpcImlubGluZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW50U3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8Lz4pICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ29mZnNldC1tZC0xIGNvbC1tZC03Jz5cclxuICAgICAgICAgIDxTZWFyY2hUZW5hbnRzLz4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIndhbGxwYXBlciIsIkltYWdlIiwidXNlUm91dGVyIiwiU2VhcmNoVGVuYW50cyIsIkRhc2hib2FyZCIsInN0YXRlIiwic2V0U3RhdGUiLCJyZW50U3RhdHVzIiwic2V0UmVudFN0YXR1cyIsInJvdXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwicHVzaCIsInJlbnRDb2xsZWN0ZWQiLCJyZW50UGFpZCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwicGFkZGluZ1RvcCIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDIiLCJkaXNwbGF5IiwibmFtZSIsImxhbmRsb3JkIiwiaDMiLCJ0ZW5hbnRzIiwibWFwIiwidGVuYW50IiwiY29uc29sZSIsImxvZyIsImg0IiwicmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});