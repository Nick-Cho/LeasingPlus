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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav(param) {\n    var setShowLogin = param.setShowLogin;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext), state = ref[0], setState = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var logout = function() {\n        //console.log(\"executing logout\")\n        window.localStorage.removeItem(\"auth\");\n        setState({\n            user: {},\n            token: \"\"\n        });\n        console.log(state);\n        router.push(\"/\");\n    };\n    //For Testing\n    // useEffect(()=>{console.log(state.user)}\n    // ,[])\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: \"absolute\"\n        },\n        className: \"container-fluid navbar navbar-expand-lg navbar-light bg-dark\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand text-light\",\n                    href: \"/\",\n                    children: \"Leasing+\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                !state && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-end\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-item nav-link text-light\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                onClick: function() {\n                                    setShowLogin(true);\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \" nav-item nav-link text-light\",\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                onClick: function() {\n                                    setShowLogin(true);\n                                },\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-item\",\n                                href: \"/features\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link text-light\",\n                                    children: \"Features\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                state && state.user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse justify-content-end\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"nav-item\",\n                                    href: \"/user/dashboard\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link text-light\",\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            state && state.user && state.user.landlord || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"nav-item\",\n                                    href: \"/user/invites\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-link text-light\",\n                                        children: \"Invites\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link text-light\",\n                                    style: {\n                                        cursor: \"pointer\"\n                                    },\n                                    onClick: logout,\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"nav-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_s(Nav, \"uwal1nlCjR6zsENuIPII/d8HuYo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7b0NBQUNHLElBQUksRUFBRyxDQUFlOzBIQUNoREQsQ0FBQzt3Q0FBQ0YsU0FBUyxFQUFHLENBQXFCO2tEQUFDLENBRXJDOzs7Ozs7Ozs7Ozs7Ozs7O3dHQUlMUSxDQUFFO2dDQUFDUixTQUFTLEVBQUcsQ0FBVTtzSEFDdkJFLENBQUM7b0NBQUNGLFNBQVMsRUFBRyxDQUFxQjtvQ0FBQ0YsS0FBSyxFQUFJLENBQUNRO3dDQUFBQSxNQUFNLEVBQUUsQ0FBUztvQ0FBQSxDQUFDO29DQUFFQyxPQUFPLEVBQUluQixNQUFNOzhDQUFFLENBRXRGOzs7Ozs7Ozs7Ozt3R0FHRG9CLENBQUU7Z0NBQUNSLFNBQVMsRUFBRyxDQUFVO3NIQUN2QlUsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEIsQ0FBQztHQTdFUTNCLEdBQUc7O1FBRUtKLGtEQUFTOzs7S0FGakJJLEdBQUc7QUErRVosK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvaW5kZXhcIlxyXG5mdW5jdGlvbiBOYXYoe3NldFNob3dMb2dpbn0pIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyBcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT57XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZXhlY3V0aW5nIGxvZ291dFwiKVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIHNldFN0YXRlKHt1c2VyOiB7fSwgdG9rZW46IFwiXCJ9KTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcbiAgLy9Gb3IgVGVzdGluZ1xyXG4gIC8vIHVzZUVmZmVjdCgoKT0+e2NvbnNvbGUubG9nKHN0YXRlLnVzZXIpfVxyXG4gIC8vICxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgc3R5bGU9IHt7cG9zaXRpb246IFwiYWJzb2x1dGVcIn19IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctZGFya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCB0ZXh0LWxpZ2h0XCIgaHJlZiA9IFwiL1wiPkxlYXNpbmcrPC9hPlxyXG5cclxuICAgICAgICB7IXN0YXRlICYmIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rIHRleHQtbGlnaHRcIiBcclxuICAgICAgICAgICAgc3R5bGUgPSB7e2N1cnNvcjpcInBvaW50ZXJcIn19IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3NldFNob3dMb2dpbih0cnVlKX19PlxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBuYXYtaXRlbSBuYXYtbGluayB0ZXh0LWxpZ2h0XCIgXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PntzZXRTaG93TG9naW4odHJ1ZSl9fT5cclxuICAgICAgICAgICAgU2lnbnVwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgaHJlZj1cIi9mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtbGlnaHRcIiA+RmVhdHVyZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuXHJcbiAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCIgaHJlZiA9XCIvdXNlci9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+RGFzaGJvYXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5sYW5kbG9yZCB8fCBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZSA9IFwibmF2LWl0ZW1cIiBocmVmID0gXCIvdXNlci9pbnZpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnZpdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lID0gXCJuYXYtbGluayB0ZXh0LWxpZ2h0XCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrID0ge2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiTmF2Iiwic2V0U2hvd0xvZ2luIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm5hdiIsInN0eWxlIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsImlkIiwidWwiLCJjdXJzb3IiLCJvbkNsaWNrIiwibGkiLCJsYW5kbG9yZCIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});