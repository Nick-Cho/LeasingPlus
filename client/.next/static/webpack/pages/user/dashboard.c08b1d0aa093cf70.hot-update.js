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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    // useEffect(()=>{setState({user:{\"test\": \"asdf\", \"name\": \"Nick\", \"landlord\": false}, token: \"test\"})}\n    // ,[])\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state.user.rentPaid || state.user.rentCollected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            height: \"auto\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 col-md-4 pb-4\",\n                style: {\n                    backgroundColor: \"rgb(30,30,30)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"inline\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                width: 75,\n                                height: 65,\n                                className: \"px-3 pt-4\",\n                                alt: \"\",\n                                style: {\n                                    display: \"inline\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    display: \"inline\"\n                                },\n                                className: \"display-3 text-light text-center font\",\n                                children: state.user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"px-3 text-light font\",\n                            children: \" Tenants \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"px-3 text-light\",\n                                children: [\n                                    \"Monthly Rent: $\",\n                                    state.user.rent\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"px-3 text-light\",\n                                style: {\n                                    display: \"inline\"\n                                },\n                                children: \"Rent Status: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"\\n              \".concat(rentStatus === \"Rent collected\" ? \"text-success\" : rentStatus === \"Rent processing\" ? \"text-warning\" : \"text-danger\", \"\\n              \"),\n                                style: {\n                                    display: \"inline\"\n                                },\n                                children: rentStatus\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRjtBQUNPO0FBQzNCO0FBQ1M7O0FBQ3hCLFFBQVEsQ0FBQ08sU0FBUyxHQUFHLENBQUM7O0lBQ25DLEdBQUssQ0FBb0JQLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDRywwREFBVyxHQUF4Q0ssS0FBSyxHQUFhUixHQUF1QixLQUFuQ1MsUUFBUSxHQUFJVCxHQUF1QjtJQUNoRCxHQUFLLENBQThCQyxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF2Q1MsVUFBVSxHQUFrQlQsSUFBWSxLQUE3QlUsYUFBYSxHQUFJVixJQUFZO0lBQy9DLEVBQXNHO0lBQ3RHLEVBQU87SUFDUCxHQUFLLENBQUNXLE1BQU0sR0FBR04sc0RBQVM7SUFDeEJKLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYixFQUFFLEVBQUVXLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixLQUFLLENBQUNPLElBQUksS0FBSyxDQUFJLEtBQUMsQ0FBQztZQUN0Q0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRztRQUNqQixDQUFDO1FBQ0QsRUFBRSxFQUFFUixLQUFLLENBQUNPLElBQUksQ0FBQ0UsYUFBYSxFQUFDLENBQUM7WUFDNUJOLGFBQWEsQ0FBQyxDQUFnQjtRQUNoQyxDQUFDLE1BQ0ksRUFBRSxHQUFHSCxLQUFLLENBQUNPLElBQUksQ0FBQ0UsYUFBYSxJQUFJVCxLQUFLLENBQUNPLElBQUksQ0FBQ0csUUFBUSxFQUFDLENBQUM7WUFDekRQLGFBQWEsQ0FBQyxDQUFpQjtRQUNqQyxDQUFDLE1BQ0ksRUFBRSxHQUFHSCxLQUFLLENBQUNPLElBQUksQ0FBQ0csUUFBUSxFQUFDLENBQUM7WUFDN0JQLGFBQWEsQ0FBQyxDQUFhO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0g7UUFBQUEsS0FBSyxDQUFDTyxJQUFJLENBQUNHLFFBQVEsSUFBSVYsS0FBSyxDQUFDTyxJQUFJLENBQUNFLGFBQWE7SUFBQSxDQUFDO0lBQ3BELE1BQU0sNkVBQ0hFLENBQUc7UUFBQ0MsS0FBSyxFQUFJLENBQUNDO1lBQUFBLGVBQWUsRUFBRSxDQUFPO1lBQUNDLE1BQU0sRUFBRSxDQUFNO1lBQUVDLFNBQVMsRUFBRSxDQUFPO1lBQUVDLFVBQVUsRUFBRSxDQUFNO1FBQUEsQ0FBQztRQUFFQyxTQUFTLEVBQUUsQ0FBaUI7OEZBQzFITixDQUFHO1lBQUNNLFNBQVMsRUFBRyxDQUFLO2tHQUNuQk4sQ0FBRztnQkFBQ00sU0FBUyxFQUFHLENBQW9CO2dCQUFDTCxLQUFLLEVBQUksQ0FBQ0M7b0JBQUFBLGVBQWUsRUFBRSxDQUFlO2dCQUFBLENBQUM7O2dHQUM5RUYsQ0FBRzt3QkFBQ0MsS0FBSyxFQUFJLENBQUNNOzRCQUFBQSxPQUFPLEVBQUUsQ0FBUTt3QkFBQSxDQUFDOzt3R0FDOUJyQixtREFBSztnQ0FBQ3NCLEdBQUcsRUFBSXZCLG9FQUFTO2dDQUFFd0IsS0FBSyxFQUFFLEVBQUU7Z0NBQUVOLE1BQU0sRUFBRSxFQUFFO2dDQUFFRyxTQUFTLEVBQUUsQ0FBVztnQ0FBQ0ksR0FBRyxFQUFHLENBQUU7Z0NBQUNULEtBQUssRUFBRSxDQUFDTTtvQ0FBQUEsT0FBTyxFQUFFLENBQVE7Z0NBQUEsQ0FBQzs7Ozs7O3dHQUN6R0ksQ0FBRTtnQ0FBQ1YsS0FBSyxFQUFFLENBQUNNO29DQUFBQSxPQUFPLEVBQUUsQ0FBUTtnQ0FBQSxDQUFDO2dDQUFFRCxTQUFTLEVBQUcsQ0FBdUM7MENBQUVqQixLQUFLLENBQUNPLElBQUksQ0FBQ2dCLElBQUk7Ozs7Ozs7Ozs7OztvQkFHckd2QixLQUFLLENBQUNPLElBQUksQ0FBQ2lCLFFBQVE7OEdBRWZDLENBQUU7NEJBQUNSLFNBQVMsRUFBRyxDQUFzQjtzQ0FBQyxDQUFTOzs7Ozs7Ozt3R0FJL0NTLENBQUU7Z0NBQUNULFNBQVMsRUFBRyxDQUFpQjs7b0NBQUMsQ0FBZTtvQ0FBQ2pCLEtBQUssQ0FBQ08sSUFBSSxDQUFDb0IsSUFBSTs7Ozs7Ozt3R0FDaEVELENBQUU7Z0NBQUNULFNBQVMsRUFBRyxDQUFpQjtnQ0FBQ0wsS0FBSyxFQUFJLENBQUNNO29DQUFBQSxPQUFPLEVBQUUsQ0FBUTtnQ0FBQSxDQUFDOzBDQUFFLENBQWE7Ozs7Ozt3R0FDNUVRLENBQUU7Z0NBQ0hULFNBQVMsRUFBSyxDQUNkLGtCQUVlLE1BQ2YsQ0FIRWYsVUFBVSxLQUFLLENBQWdCLGtCQUFFLENBQWMsZ0JBQ2pEQSxVQUFVLEtBQUssQ0FBaUIsbUJBQUcsQ0FBYyxnQkFDakQsQ0FBYSxjQUFFLENBQ2Y7Z0NBQ0FVLEtBQUssRUFBRSxDQUFDTTtvQ0FBQUEsT0FBTyxFQUFDLENBQVE7Z0NBQUEsQ0FBQzswQ0FDdEJoQixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0IsQ0FBQztHQXJEdUJILFNBQVM7O1FBS2hCRCxrREFBUzs7O0tBTEZDLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9kYXNoYm9hcmQuanM/MzhjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsIHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L2luZGV4LmpzXCI7XHJcbmltcG9ydCB3YWxscGFwZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvd2FsbHBhcGVyLmpwZ1wiICBcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3JlbnRTdGF0dXMsc2V0UmVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyB1c2VFZmZlY3QoKCk9PntzZXRTdGF0ZSh7dXNlcjp7XCJ0ZXN0XCI6IFwiYXNkZlwiLCBcIm5hbWVcIjogXCJOaWNrXCIsIFwibGFuZGxvcmRcIjogZmFsc2V9LCB0b2tlbjogXCJ0ZXN0XCJ9KX1cclxuICAvLyAsW10pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc3RhdGUudXNlcikgPT0gXCJ7fVwiKXtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGUudXNlci5yZW50Q29sbGVjdGVkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgY29sbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudENvbGxlY3RlZCAmJiBzdGF0ZS51c2VyLnJlbnRQYWlkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgcHJvY2Vzc2luZ1wiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFzdGF0ZS51c2VyLnJlbnRQYWlkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgdW5wYWlkXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZS51c2VyLnJlbnRQYWlkIHx8IHN0YXRlLnVzZXIucmVudENvbGxlY3RlZF0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wiLGhlaWdodDogXCJhdXRvXCIsIG1pbkhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nVG9wOiBcIjRyZW1cIn19IGNsYXNzTmFtZSA9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtdC00IGNvbC1tZC00IHBiLTRcIiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcInJnYigzMCwzMCwzMClcIn19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZSA9IHt7ZGlzcGxheTogXCJpbmxpbmVcIn19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge3dhbGxwYXBlcn0gd2lkdGg9ezc1fSBoZWlnaHQ9ezY1fSBjbGFzc05hbWUgPVwicHgtMyBwdC00XCIgYWx0ID0gXCJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fS8+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fSBjbGFzc05hbWUgPSBcImRpc3BsYXktMyB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyIGZvbnRcIj57c3RhdGUudXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge3N0YXRlLnVzZXIubGFuZGxvcmQgPyBcclxuICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0IGZvbnRcIj4gVGVuYW50cyA8L2gyPlxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCI+TW9udGhseSBSZW50OiAke3N0YXRlLnVzZXIucmVudH08L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSBcInB4LTMgdGV4dC1saWdodFwiIHN0eWxlID0ge3tkaXNwbGF5OiBcImlubGluZVwifX0+UmVudCBTdGF0dXM6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg0IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtgXHJcbiAgICAgICAgICAgICAgJHtyZW50U3RhdHVzID09PSBcIlJlbnQgY29sbGVjdGVkXCI/IFwidGV4dC1zdWNjZXNzXCI6IFxyXG4gICAgICAgICAgICAgIHJlbnRTdGF0dXMgPT09IFwiUmVudCBwcm9jZXNzaW5nXCIgPyBcInRleHQtd2FybmluZ1wiOiBcclxuICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyXCIgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lXCJ9fT5cclxuICAgICAgICAgICAgICAgIHtyZW50U3RhdHVzfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIndhbGxwYXBlciIsIkltYWdlIiwidXNlUm91dGVyIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlbnRTdGF0dXMiLCJzZXRSZW50U3RhdHVzIiwicm91dGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJwdXNoIiwicmVudENvbGxlY3RlZCIsInJlbnRQYWlkIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nVG9wIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDEiLCJuYW1lIiwibGFuZGxvcmQiLCJoMiIsImg0IiwicmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});