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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/wallpaper.jpg */ \"./public/images/wallpaper.jpg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_SearchTenants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SearchTenants */ \"./components/SearchTenants.js\");\n/* harmony import */ var _components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/DashboardSidebar */ \"./components/DashboardSidebar.js\");\n/* harmony import */ var _components_cards_ChoresList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/cards/ChoresList */ \"./components/cards/ChoresList.js\");\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), rentStatus = ref1[0], setRentStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), tenants = ref2[0], setTenants = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), roommates = ref3[0], setRoommates = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), stop = ref4[0], setStop = ref4[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var getRoommates = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(roommates.length >= state && state.user && state.user.roomates && state.user.roommates.length)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        {\n                            state && state.user && state.user.roommates && state.user.roommates.map(function(roommate) {\n                                axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/get-user/\".concat(roommate)).then(function(response) {\n                                    roommates.push(response.data.user);\n                                    setRoommates(_toConsumableArray(roommates));\n                                });\n                            });\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getRoommates() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getTenants = function() {\n        // console.log(tenants.length >= state.user.tenants.length)\n        if (tenants.length >= state && state.user && state.user.tenants && state.user.tenants.length) {\n            return;\n        } else {\n            state && state.user && state.user.tenants && state.user.tenants.map(function(tenant) {\n                axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/get-user/\".concat(tenant)).then(function(response) {\n                    tenants.push(response.data.user);\n                    setTenants(_toConsumableArray(tenants));\n                });\n            });\n        }\n    // console.log(\"Logging tenants\", tenants)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(state);\n        if (!state && !state.user) {\n            router.push(\"/\");\n        }\n        if (state && state.user && state.user.rentCollected) {\n            setRentStatus(\"Rent collected\");\n        } else if (state && state.user && !state.user.rentCollected && state.user.rentPaid) {\n            setRentStatus(\"Rent processing\");\n        } else if (state && state.user && !state.user.rentPaid) {\n            setRentStatus(\"Rent unpaid\");\n        }\n    }, [\n        state && state.user && (state.user.rentPaid || state.user.rentCollected)\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!stop) {\n            getRoommates();\n            getTenants();\n            setStop(true);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    wallpaper: _public_images_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    tenants: tenants,\n                    roommates: roommates,\n                    rentStatus: rentStatus\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                state && state.user && state.user.landlord && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"col-md-7 offset-md-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_SearchTenants__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this),\n                state && state.user && !state.user.landlord && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-4 col-md-7 offset-md-1\",\n                    style: {\n                        backgroundColor: \"rgb(20,23,23)\",\n                        borderRadius: \"15px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            className: \"text-light text-center display-4 font\",\n                            children: \"Chores\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_cards_ChoresList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\dashboard.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this));\n};\n_s(Dashboard, \"gF3SkSkuJnHPceAGvgZyY3OYoc4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7UUFDZCxDQUFDO0lBRUgsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sNkVBQ0htQixDQUFHO1FBQUNDLEtBQUssRUFBSSxDQUFDQztZQUFBQSxlQUFlLEVBQUUsQ0FBTztZQUFFQyxTQUFTLEVBQUUsQ0FBTztZQUFFQyxVQUFVLEVBQUUsQ0FBTTtRQUFBLENBQUM7UUFBRUMsU0FBUyxFQUFFLENBQWlCOzhGQUMzR0wsQ0FBRztZQUFDSyxTQUFTLEVBQUcsQ0FBSzs7NEZBQ25CcEMsb0VBQWdCO29CQUFDSCxTQUFTLEVBQUVBLG9FQUFTO29CQUFFVSxPQUFPLEVBQUVBLE9BQU87b0JBQUVFLFNBQVMsRUFBRUEsU0FBUztvQkFBRUosVUFBVSxFQUFFQSxVQUFVOzs7Ozs7Z0JBQ3JHRixLQUFLLElBQUlBLEtBQUssQ0FBQ2EsSUFBSSxJQUFJYixLQUFLLENBQUNhLElBQUksQ0FBQ3FCLFFBQVEsZ0ZBQ3hDTixDQUFHO29CQUFDSyxTQUFTLEVBQUcsQ0FBdUI7MEdBQ3JDckMsaUVBQWE7Ozs7Ozs7Ozs7Z0JBR2pCSSxLQUFLLElBQUlBLEtBQUssQ0FBQ2EsSUFBSSxLQUFLYixLQUFLLENBQUNhLElBQUksQ0FBQ3FCLFFBQVEsZ0ZBQ3pDTixDQUFHO29CQUFDSyxTQUFTLEVBQUcsQ0FBMkI7b0JBQUNKLEtBQUssRUFBSSxDQUFDQzt3QkFBQUEsZUFBZSxFQUFFLENBQWU7d0JBQUVLLFlBQVksRUFBRSxDQUFNO29CQUFBLENBQUM7O29HQUMzR0MsQ0FBRTs0QkFBQ0gsU0FBUyxFQUFDLENBQXVDO3NDQUFDLENBQU07Ozs7OztvR0FDM0RuQyxvRUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQixDQUFDO0dBaEZ1QkMsU0FBUzs7UUFNaEJKLGtEQUFTOzs7S0FORkksU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcz8zOGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvaW5kZXguanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgd2FsbHBhcGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3dhbGxwYXBlci5qcGdcIiAgXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IFNlYXJjaFRlbmFudHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVGVuYW50c1wiXHJcbmltcG9ydCBEYXNoYm9hcmRTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkU2lkZWJhcidcclxuaW1wb3J0IENob3JlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3JlbnRTdGF0dXMsc2V0UmVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGVuYW50cyxzZXRUZW5hbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcm9vbW1hdGVzLHNldFJvb21tYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0b3Asc2V0U3RvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0Um9vbW1hdGVzID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAocm9vbW1hdGVzLmxlbmd0aCA+PSBzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIucm9vbWF0ZXMgJiYgc3RhdGUudXNlci5yb29tbWF0ZXMubGVuZ3RoKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZXsgXHJcbiAgICAgIHN0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5yb29tbWF0ZXMgJiYgc3RhdGUudXNlci5yb29tbWF0ZXMubWFwKChyb29tbWF0ZSk9PntcclxuICAgICAgYXhpb3MuZ2V0KGAvZ2V0LXVzZXIvJHtyb29tbWF0ZX1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpPT4ge3Jvb21tYXRlcy5wdXNoKHJlc3BvbnNlLmRhdGEudXNlcik7IHNldFJvb21tYXRlcyhbLi4ucm9vbW1hdGVzXSl9KVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VGVuYW50cyA9ICgpID0+IHsgICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZW5hbnRzLmxlbmd0aCA+PSBzdGF0ZS51c2VyLnRlbmFudHMubGVuZ3RoKVxyXG4gICAgaWYgKHRlbmFudHMubGVuZ3RoID49IHN0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci50ZW5hbnRzICYmIHN0YXRlLnVzZXIudGVuYW50cy5sZW5ndGgpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIudGVuYW50cyAmJiBzdGF0ZS51c2VyLnRlbmFudHMubWFwKCh0ZW5hbnQpPT57XHJcbiAgICAgIGF4aW9zLmdldChgL2dldC11c2VyLyR7dGVuYW50fWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7dGVuYW50cy5wdXNoKHJlc3BvbnNlLmRhdGEudXNlcik7IHNldFRlbmFudHMoWy4uLnRlbmFudHNdKX0pO1xyXG4gICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coXCJMb2dnaW5nIHRlbmFudHNcIiwgdGVuYW50cylcclxuICB9XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gICAgaWYgKCFzdGF0ZSAmJiAhc3RhdGUudXNlcil7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5yZW50Q29sbGVjdGVkKXtcclxuICAgICAgc2V0UmVudFN0YXR1cyhcIlJlbnQgY29sbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdGUgJiYgc3RhdGUudXNlciAmJiAhc3RhdGUudXNlci5yZW50Q29sbGVjdGVkICYmIHN0YXRlLnVzZXIucmVudFBhaWQpe1xyXG4gICAgICBzZXRSZW50U3RhdHVzKFwiUmVudCBwcm9jZXNzaW5nXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdGUgJiYgc3RhdGUudXNlciAmJiAhc3RhdGUudXNlci5yZW50UGFpZCl7XHJcbiAgICAgIHNldFJlbnRTdGF0dXMoXCJSZW50IHVucGFpZFwiKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGUgJiYgc3RhdGUudXNlciAmJiAoc3RhdGUudXNlci5yZW50UGFpZCB8fCBzdGF0ZS51c2VyLnJlbnRDb2xsZWN0ZWQpXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmICghc3RvcCl7XHJcbiAgICAgIGdldFJvb21tYXRlcygpO1xyXG4gICAgICBnZXRUZW5hbnRzKCk7XHJcbiAgICAgIHNldFN0b3AodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9LFtdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIsIHBhZGRpbmdUb3A6IFwiNHJlbVwifX0gY2xhc3NOYW1lID1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPERhc2hib2FyZFNpZGViYXIgd2FsbHBhcGVyPXt3YWxscGFwZXJ9IHRlbmFudHM9e3RlbmFudHN9IHJvb21tYXRlcz17cm9vbW1hdGVzfSByZW50U3RhdHVzPXtyZW50U3RhdHVzfS8+XHJcbiAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5sYW5kbG9yZCAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29sLW1kLTcgb2Zmc2V0LW1kLTEgJz5cclxuICAgICAgICAgICAgPFNlYXJjaFRlbmFudHMvPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9IFxyXG4gICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmICFzdGF0ZS51c2VyLmxhbmRsb3JkICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbXQtNCBjb2wtbWQtNyBvZmZzZXQtbWQtMScgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJyZ2IoMjAsMjMsMjMpXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCJ9fT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGlnaHQgdGV4dC1jZW50ZXIgZGlzcGxheS00IGZvbnRcIj5DaG9yZXM8L2g0PlxyXG4gICAgICAgICAgICA8Q2hvcmVzLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJheGlvcyIsIndhbGxwYXBlciIsInVzZVJvdXRlciIsIlNlYXJjaFRlbmFudHMiLCJEYXNoYm9hcmRTaWRlYmFyIiwiQ2hvcmVzIiwiRGFzaGJvYXJkIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlbnRTdGF0dXMiLCJzZXRSZW50U3RhdHVzIiwidGVuYW50cyIsInNldFRlbmFudHMiLCJyb29tbWF0ZXMiLCJzZXRSb29tbWF0ZXMiLCJzdG9wIiwic2V0U3RvcCIsInJvdXRlciIsImdldFJvb21tYXRlcyIsImxlbmd0aCIsInVzZXIiLCJyb29tYXRlcyIsIm1hcCIsInJvb21tYXRlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHVzaCIsImRhdGEiLCJnZXRUZW5hbnRzIiwidGVuYW50IiwiY29uc29sZSIsImxvZyIsInJlbnRDb2xsZWN0ZWQiLCJyZW50UGFpZCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwicGFkZGluZ1RvcCIsImNsYXNzTmFtZSIsImxhbmRsb3JkIiwiYm9yZGVyUmFkaXVzIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ })

});