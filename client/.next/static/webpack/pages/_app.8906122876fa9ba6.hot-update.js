"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav(param) {\n    var setShowLogin = param.setShowLogin;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext), state = ref[0], setState = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var logout = function() {\n        //console.log(\"executing logout\")\n        window.localStorage.removeItem(\"auth\");\n        setState({\n            user: {},\n            token: \"\"\n        });\n        console.log(state);\n        router.push(\"/\");\n    };\n    //For Testing\n    // useEffect(()=>{console.log(state.user)}\n    // ,[])\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: \"absolute\"\n        },\n        className: \"container-fluid navbar navbar-expand-lg navbar-light bg-dark\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand text-light\",\n                    href: \"/\",\n                    children: \"Leasing+\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                state || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-end\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-item nav-link text-light\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                onClick: function() {\n                                    setShowLogin(true);\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \" nav-item nav-link text-light\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                onClick: function() {\n                                    setShowLogin(true);\n                                },\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-item\",\n                                href: \"/features\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link text-light\",\n                                    children: \"Features\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                state && state.user && JSON.stringify(state.user) !== \"{}\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-end\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"nav-item\",\n                                    href: \"/user/dashboard\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link text-light\",\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            state && state.user && state.user.landlord || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"nav-item\",\n                                    href: \"/user/invites\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link text-light\",\n                                        children: \"Invites\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link text-light\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    onClick: logout,\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_s(Nav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1YsU0FBUyxFQUFHLENBQVU7c0hBQ3ZCdEIsa0RBQUk7b0NBQUNzQixTQUFTLEVBQUcsQ0FBVTtvQ0FBQ0csSUFBSSxFQUFHLENBQWU7MEhBQ2hERCxDQUFDO3dDQUFDRixTQUFTLEVBQUcsQ0FBcUI7a0RBQUMsQ0FFckM7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBSUxVLENBQUU7Z0NBQUNWLFNBQVMsRUFBRyxDQUFVO3NIQUN2QkUsQ0FBQztvQ0FBQ0YsU0FBUyxFQUFHLENBQXFCO29DQUFDRixLQUFLLEVBQUksQ0FBQ1E7d0NBQUFBLE1BQU0sRUFBRSxDQUFTO29DQUFBLENBQUM7b0NBQUVDLE9BQU8sRUFBSW5CLE1BQU07OENBQUUsQ0FFdEY7Ozs7Ozs7Ozs7O3dHQUdEc0IsQ0FBRTtnQ0FBQ1YsU0FBUyxFQUFHLENBQVU7c0hBQ3ZCWSxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQixDQUFDO0dBN0VRN0IsR0FBRzs7UUFFS0osa0RBQVM7OztLQUZqQkksR0FBRztBQStFWiwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9pbmRleFwiXHJcbmZ1bmN0aW9uIE5hdih7c2V0U2hvd0xvZ2lufSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PntcclxuICAgIC8vY29uc29sZS5sb2coXCJleGVjdXRpbmcgbG9nb3V0XCIpXHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgc2V0U3RhdGUoe3VzZXI6IHt9LCB0b2tlbjogXCJcIn0pO1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuICAvL0ZvciBUZXN0aW5nXHJcbiAgLy8gdXNlRWZmZWN0KCgpPT57Y29uc29sZS5sb2coc3RhdGUudXNlcil9XHJcbiAgLy8gLFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBzdHlsZT0ge3twb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHRleHQtbGlnaHRcIiBocmVmID0gXCIvXCI+TGVhc2luZys8L2E+XHJcblxyXG4gICAgICAgIHtzdGF0ZSB8fCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtbGluayB0ZXh0LWxpZ2h0XCIgXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PntzZXRTaG93TG9naW4odHJ1ZSl9fT5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgbmF2LWl0ZW0gbmF2LWxpbmsgdGV4dC1saWdodFwiIFxyXG4gICAgICAgICAgICBzdHlsZSA9IHt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57c2V0U2hvd0xvZ2luKHRydWUpfX0+XHJcbiAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGhyZWY9XCIvZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCIgPkZlYXR1cmVzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcblxyXG4gICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXIpICE9PVwie31cIiAmJiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCIgaHJlZiA9XCIvdXNlci9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5sYW5kbG9yZCB8fCBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZSA9IFwibmF2LWl0ZW1cIiBocmVmID0gXCIvdXNlci9pbnZpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnZpdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrID0ge2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiTmF2Iiwic2V0U2hvd0xvZ2luIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm5hdiIsInN0eWxlIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsImlkIiwidWwiLCJjdXJzb3IiLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsImxpIiwibGFuZGxvcmQiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});