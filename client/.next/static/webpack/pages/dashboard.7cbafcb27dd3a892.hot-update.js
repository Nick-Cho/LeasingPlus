"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    // useEffect(()=>{setState({user:{\"test\": \"asdf\", \"name\": \"Nick\", \"landlord\": false}, token: \"test\"})}\n    // ,[])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected for this month\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent being processed\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            overflow: \"hidden\",\n            height: \"auto\"\n        },\n        className: \"min-vh-100 container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                width: 75,\n                                height: 65,\n                                className: \"px-3 pt-4\",\n                                alt: \"\",\n                                style: {\n                                    display: \"inline\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    display: \"inline\"\n                                },\n                                className: \"display-3 text-light text-center\",\n                                children: state.user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"px-3 text-light\",\n                                children: [\n                                    \"Monthly Rent: $\",\n                                    state.user.rent\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"px-3 text-light\",\n                                children: [\n                                    \"Rent Status: \",\n                                    rentStatus\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\dashboard.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"66TQW7IOoc8TeSns4oHlRYKrJso=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNMO0FBQ087QUFDeEI7O0FBQ2YsUUFBUSxDQUFDTSxTQUFTLEdBQUcsQ0FBQzs7SUFDbkMsR0FBSyxDQUFvQk4sR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNHLDBEQUFXLEdBQXhDSSxLQUFLLEdBQWFQLEdBQXVCLEtBQW5DUSxRQUFRLEdBQUlSLEdBQXVCO0lBQ2hELEdBQUssQ0FBOEJDLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXZDUSxVQUFVLEdBQWtCUixJQUFZLEtBQTdCUyxhQUFhLEdBQUlULElBQVk7SUFDL0MsRUFBc0c7SUFDdEcsRUFBTztJQUVQQyxnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2IsRUFBRSxFQUFFSyxLQUFLLENBQUNJLElBQUksQ0FBQ0MsYUFBYSxFQUFDLENBQUM7WUFDNUJGLGFBQWEsQ0FBQyxDQUErQjtRQUMvQyxDQUFDLE1BQ0ksRUFBRSxHQUFHSCxLQUFLLENBQUNJLElBQUksQ0FBQ0MsYUFBYSxJQUFJTCxLQUFLLENBQUNJLElBQUksQ0FBQ0UsUUFBUSxFQUFDLENBQUM7WUFDekRILGFBQWEsQ0FBQyxDQUFzQjtRQUN0QyxDQUFDLE1BQ0ksRUFBRSxHQUFHSCxLQUFLLENBQUNJLElBQUksQ0FBQ0UsUUFBUSxFQUFDLENBQUM7WUFDN0JILGFBQWEsQ0FBQyxDQUFhO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxLQUFLLEVBQUksQ0FBQ0M7WUFBQUEsZUFBZSxFQUFFLENBQU87WUFBRUMsUUFBUSxFQUFFLENBQVE7WUFBRUMsTUFBTSxFQUFFLENBQU07UUFBQSxDQUFDO1FBQUVDLFNBQVMsRUFBRSxDQUE0Qjs4RkFDbEhMLENBQUc7WUFBQ0ssU0FBUyxFQUFHLENBQUs7a0dBQ25CTCxDQUFHO2dCQUFDSyxTQUFTLEVBQUcsQ0FBVTs7Z0dBQ3hCTCxDQUFHO3dCQUFDQyxLQUFLLEVBQUksQ0FBQ0s7NEJBQUFBLE9BQU8sRUFBRSxDQUFRO3dCQUFBLENBQUM7O3dHQUM5QmYsbURBQUs7Z0NBQUNnQixHQUFHLEVBQUlqQixvRUFBUztnQ0FBRWtCLEtBQUssRUFBRSxFQUFFO2dDQUFFSixNQUFNLEVBQUUsRUFBRTtnQ0FBRUMsU0FBUyxFQUFFLENBQVc7Z0NBQUNJLEdBQUcsRUFBRyxDQUFFO2dDQUFDUixLQUFLLEVBQUUsQ0FBQ0s7b0NBQUFBLE9BQU8sRUFBRSxDQUFRO2dDQUFBLENBQUM7Ozs7Ozt3R0FDekdJLENBQUU7Z0NBQUNULEtBQUssRUFBRSxDQUFDSztvQ0FBQUEsT0FBTyxFQUFFLENBQVE7Z0NBQUEsQ0FBQztnQ0FBRUQsU0FBUyxFQUFHLENBQWtDOzBDQUFFWixLQUFLLENBQUNJLElBQUksQ0FBQ2MsSUFBSTs7Ozs7Ozs7Ozs7O29CQUdoR2xCLEtBQUssQ0FBQ0ksSUFBSSxDQUFDZSxRQUFROzt3R0FNZkMsQ0FBRTtnQ0FBQ1IsU0FBUyxFQUFHLENBQWlCOztvQ0FBQyxDQUFlO29DQUFDWixLQUFLLENBQUNJLElBQUksQ0FBQ2lCLElBQUk7Ozs7Ozs7d0dBQ2hFRCxDQUFFO2dDQUFDUixTQUFTLEVBQUcsQ0FBaUI7O29DQUFDLENBQWE7b0NBQUNWLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEUsQ0FBQztHQXhDdUJILFNBQVM7S0FBVEEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4LmpzXCI7XHJcbmltcG9ydCB3YWxscGFwZXIgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvd2FsbHBhcGVyLmpwZ1wiICBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcmVudFN0YXR1cyxzZXRSZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldFN0YXRlKHt1c2VyOntcInRlc3RcIjogXCJhc2RmXCIsIFwibmFtZVwiOiBcIk5pY2tcIiwgXCJsYW5kbG9yZFwiOiBmYWxzZX0sIHRva2VuOiBcInRlc3RcIn0pfVxyXG4gIC8vICxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZiAoc3RhdGUudXNlci5yZW50Q29sbGVjdGVkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgY29sbGVjdGVkIGZvciB0aGlzIG1vbnRoXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudENvbGxlY3RlZCAmJiBzdGF0ZS51c2VyLnJlbnRQYWlkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgYmVpbmcgcHJvY2Vzc2VkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCB1bnBhaWRcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgaGVpZ2h0OiBcImF1dG9cIn19IGNsYXNzTmFtZSA9XCJtaW4tdmgtMTAwIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1tZC00XCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tkaXNwbGF5OiBcImlubGluZVwifX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7d2FsbHBhcGVyfSB3aWR0aD17NzV9IGhlaWdodD17NjV9IGNsYXNzTmFtZSA9XCJweC0zIHB0LTRcIiBhbHQgPSBcIlwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19Lz5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19IGNsYXNzTmFtZSA9IFwiZGlzcGxheS0zIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj57c3RhdGUudXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge3N0YXRlLnVzZXIubGFuZGxvcmQgPyBcclxuICAgICAgICAgICAgKDw+XHJcblxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCI+TW9udGhseSBSZW50OiAke3N0YXRlLnVzZXIucmVudH08L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSBcInB4LTMgdGV4dC1saWdodFwiPlJlbnQgU3RhdHVzOiB7cmVudFN0YXR1c308L2g0PlxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJ3YWxscGFwZXIiLCJJbWFnZSIsIkRhc2hib2FyZCIsInN0YXRlIiwic2V0U3RhdGUiLCJyZW50U3RhdHVzIiwic2V0UmVudFN0YXR1cyIsInVzZXIiLCJyZW50Q29sbGVjdGVkIiwicmVudFBhaWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDEiLCJuYW1lIiwibGFuZGxvcmQiLCJoNCIsInJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});