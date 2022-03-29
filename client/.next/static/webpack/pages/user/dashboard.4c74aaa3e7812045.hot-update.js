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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_SearchTenants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchTenants */ \"./components/SearchTenants.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    // useEffect(()=>{setState({user:{\"test\": \"asdf\", \"name\": \"Nick\", \"landlord\": false}, token: \"test\"})}\n    // ,[])\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        if (state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (!state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (!state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state && state.user.rentPaid || state.user.rentCollected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 col-md-4 pb-4\",\n                    style: {\n                        backgroundColor: \"rgb(30,30,30)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"inline\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    width: 75,\n                                    height: 65,\n                                    className: \"px-3 pt-4\",\n                                    alt: \"\",\n                                    style: {\n                                        display: \"inline\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    className: \"display-3 text-light text-center font\",\n                                    children: state && state.user.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        state.user.landlord ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"px-3 text-light font\",\n                                    children: \" Tenants \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                state.user.tenants.map(function(tenant) {\n                                    console.log(tenant);\n                                })\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    children: [\n                                        \"Monthly Rent: $\",\n                                        state.user.rent\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"px-3 text-light\",\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: \"Rent Status: \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"\\n              \".concat(rentStatus === \"Rent collected\" ? \"text-success\" : rentStatus === \"Rent processing\" ? \"text-warning\" : \"text-danger\", \"\\n              \"),\n                                    style: {\n                                        display: \"inline\"\n                                    },\n                                    children: rentStatus\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchTenants__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"zcOYs/u4nDmFWqRhxPg97UdUhWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtnQ0FDcEIsQ0FBQzs7Ozs0R0FJQUcsQ0FBRTtvQ0FBQ2YsU0FBUyxFQUFHLENBQWlCOzt3Q0FBQyxDQUFlO3dDQUFDaEIsS0FBSyxDQUFDTyxJQUFJLENBQUN5QixJQUFJOzs7Ozs7OzRHQUNoRUQsQ0FBRTtvQ0FBQ2YsU0FBUyxFQUFHLENBQWlCO29DQUFDSixLQUFLLEVBQUksQ0FBQ0s7d0NBQUFBLE9BQU8sRUFBRSxDQUFRO29DQUFBLENBQUM7OENBQUUsQ0FBYTs7Ozs7OzRHQUM1RWMsQ0FBRTtvQ0FDSGYsU0FBUyxFQUFLLENBQ2Qsa0JBRWUsTUFDZixDQUhFZCxVQUFVLEtBQUssQ0FBZ0Isa0JBQUUsQ0FBYyxnQkFDakRBLFVBQVUsS0FBSyxDQUFpQixtQkFBRyxDQUFjLGdCQUNqRCxDQUFhLGNBQUUsQ0FDZjtvQ0FDQVUsS0FBSyxFQUFFLENBQUNLO3dDQUFBQSxPQUFPLEVBQUMsQ0FBUTtvQ0FBQSxDQUFDOzhDQUN0QmYsVUFBVTs7Ozs7Ozs7Ozs7Ozs7NEZBTWxCUyxDQUFHO29CQUFDSyxTQUFTLEVBQUcsQ0FBVTswR0FDeEJsQixpRUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCLENBQUM7R0EzRHVCQyxTQUFTOztRQUtoQkYsa0RBQVM7OztLQUxGRSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZGFzaGJvYXJkLmpzPzM4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgd2FsbHBhcGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhbGxwYXBlci5qcGdcIiAgXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2VhcmNoVGVuYW50cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hUZW5hbnRzXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcmVudFN0YXR1cyxzZXRSZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e3NldFN0YXRlKHt1c2VyOntcInRlc3RcIjogXCJhc2RmXCIsIFwibmFtZVwiOiBcIk5pY2tcIiwgXCJsYW5kbG9yZFwiOiBmYWxzZX0sIHRva2VuOiBcInRlc3RcIn0pfVxyXG4gIC8vICxbXSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmIChKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VyKSA9PSBcInt9XCIpe1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBjb2xsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghc3RhdGUudXNlci5yZW50Q29sbGVjdGVkICYmIHN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBwcm9jZXNzaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCB1bnBhaWRcIik7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlICYmIHN0YXRlLnVzZXIucmVudFBhaWQgfHwgc3RhdGUudXNlci5yZW50Q29sbGVjdGVkXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIG1pbkhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nVG9wOiBcIjRyZW1cIn19IGNsYXNzTmFtZSA9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvdyBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibXQtNCBjb2wtbWQtNCBwYi00XCIgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJyZ2IoMzAsMzAsMzApXCJ9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2Rpc3BsYXk6IFwiaW5saW5lXCJ9fT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYyA9IHt3YWxscGFwZXJ9IHdpZHRoPXs3NX0gaGVpZ2h0PXs2NX0gY2xhc3NOYW1lID1cInB4LTMgcHQtNFwiIGFsdCA9IFwiXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0vPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX0gY2xhc3NOYW1lID0gXCJkaXNwbGF5LTMgdGV4dC1saWdodCB0ZXh0LWNlbnRlciBmb250XCI+e3N0YXRlICYmIHN0YXRlLnVzZXIubmFtZX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtzdGF0ZS51c2VyLmxhbmRsb3JkID8gXHJcbiAgICAgICAgICAgICg8PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWUgPSBcInB4LTMgdGV4dC1saWdodCBmb250XCI+IFRlbmFudHMgPC9oMz5cclxuICAgICAgICAgICAgICB7c3RhdGUudXNlci50ZW5hbnRzLm1hcCgodGVuYW50KT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVuYW50KVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHgtMyB0ZXh0LWxpZ2h0XCI+TW9udGhseSBSZW50OiAke3N0YXRlLnVzZXIucmVudH08L2g0PlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSBcInB4LTMgdGV4dC1saWdodFwiIHN0eWxlID0ge3tkaXNwbGF5OiBcImlubGluZVwifX0+UmVudCBTdGF0dXM6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg0IFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtgXHJcbiAgICAgICAgICAgICAgJHtyZW50U3RhdHVzID09PSBcIlJlbnQgY29sbGVjdGVkXCI/IFwidGV4dC1zdWNjZXNzXCI6IFxyXG4gICAgICAgICAgICAgIHJlbnRTdGF0dXMgPT09IFwiUmVudCBwcm9jZXNzaW5nXCIgPyBcInRleHQtd2FybmluZ1wiOiBcclxuICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyXCIgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lXCJ9fT5cclxuICAgICAgICAgICAgICAgIHtyZW50U3RhdHVzfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbC1tZC01Jz5cclxuICAgICAgICAgIDxTZWFyY2hUZW5hbnRzLz4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJ3YWxscGFwZXIiLCJJbWFnZSIsInVzZVJvdXRlciIsIlNlYXJjaFRlbmFudHMiLCJEYXNoYm9hcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVudFN0YXR1cyIsInNldFJlbnRTdGF0dXMiLCJyb3V0ZXIiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlciIsInB1c2giLCJyZW50Q29sbGVjdGVkIiwicmVudFBhaWQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsInBhZGRpbmdUb3AiLCJjbGFzc05hbWUiLCJkaXNwbGF5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMiIsIm5hbWUiLCJsYW5kbG9yZCIsImgzIiwidGVuYW50cyIsIm1hcCIsInRlbmFudCIsImNvbnNvbGUiLCJsb2ciLCJoNCIsInJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});