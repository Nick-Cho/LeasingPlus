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

/***/ "./components/SearchTenants.js":
/*!*************************************!*\
  !*** ./components/SearchTenants.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchTenants; }\n/* harmony export */ });\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/index */ \"./context/index.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction SearchTenants() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), query = ref1[0], setQuery = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), result = ref2[0], setResult = ref2[1];\n    var searchUser = function() {\n        var _ref = _asyncToGenerator(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response, filtered;\n            return C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/search-user/\".concat(query));\n                    case 4:\n                        response = _ctx.sent;\n                        if (response.data.success == true) {\n                            filtered = response.data.user.filter(function(p) {\n                                p._id !== user._id;\n                            });\n                            setResult();\n                            console.log(response.data.user);\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function searchUser(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: searchUser,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" row form-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"col-md-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: query,\n                            onChange: function(e) {\n                                setQuery(e.target.value);\n                            },\n                            className: \"bg-dark text-light form-control\",\n                            placeholder: \"Search for tenants to add to your lease\",\n                            style: {\n                                border: \"0.2px solid white\",\n                                borderRadius: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"container-fluid col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-outline-success col-12\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\n_s(SearchTenants, \"fQIEEuIJV21AuYJ/fa/x1bLUUpQ=\");\n_c = SearchTenants;\nvar _c;\n$RefreshReg$(_c, \"SearchTenants\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFRlbmFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2hCO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzdCLFFBQVEsQ0FBQ0ksYUFBYSxHQUFHLENBQUM7O0lBQ3ZDLEdBQUssQ0FBcUJILEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDRSx1REFBVyxHQUF6Q0UsS0FBSyxHQUFjSixHQUF1QixLQUFuQ0ssUUFBUSxHQUFJTCxHQUF1QjtJQUNqRCxHQUFLLENBQXFCRCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5Qk8sS0FBSyxHQUFjUCxJQUFZLEtBQXhCUSxRQUFRLEdBQUlSLElBQVk7SUFDdEMsR0FBSyxDQUF1QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFoQ1MsTUFBTSxHQUFlVCxJQUFZLEtBQXpCVSxTQUFTLEdBQUlWLElBQVk7SUFDeEMsR0FBSyxDQUFDVyxVQUFVO2dNQUFHLFFBQVEsU0FBREMsQ0FBQyxFQUFLLENBQUM7Z0JBR3ZCQyxRQUFRLEVBRVJDLFFBQVE7Ozs7d0JBSmhCRixDQUFDLENBQUNHLGNBQWM7OzsrQkFFU2IsZ0RBQVMsQ0FBRSxDQUFhLGVBQVEsT0FBTkssS0FBSzs7d0JBQWhETSxRQUFRO3dCQUNkLEVBQUUsRUFBRUEsUUFBUSxDQUFDSSxJQUFJLENBQUNDLE9BQU8sSUFBSSxJQUFJLEVBQUMsQ0FBQzs0QkFDN0JKLFFBQVEsR0FBR0QsUUFBUSxDQUFDSSxJQUFJLENBQUNFLElBQUksQ0FBQ0MsTUFBTSxDQUFDLFFBQVFDLENBQVBDLENBQUMsRUFBRyxDQUFDQTtnQ0FBQUEsQ0FBQyxDQUFDRCxHQUFHLEtBQUtGLElBQUksQ0FBQ0UsR0FBRzs0QkFBQSxDQUFDOzRCQUNsRVgsU0FBUzs0QkFDVGEsT0FBTyxDQUFDQyxHQUFHLENBQUNYLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDRSxJQUFJO3dCQUNoQyxDQUFDOzs7Ozs7d0JBRURJLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFZixDQUFDO3dCQVpLYixVQUFVLENBQVVDLENBQUM7Ozs7SUFjM0IsTUFBTSw2RUFFSGEsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBTTs4RkFDcEJDLENBQUk7WUFBQ0MsUUFBUSxFQUFFakIsVUFBVTtrR0FDdkJjLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Z0dBQzdCRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUcsQ0FBVTs4R0FDeEJHLENBQUs7NEJBQ05DLElBQUksRUFBQyxDQUFNOzRCQUNYQyxLQUFLLEVBQUl4QixLQUFLOzRCQUNkeUIsUUFBUSxFQUFJLFFBQVEsQ0FBUHBCLENBQUMsRUFBRyxDQUFDSjtnQ0FBQUEsUUFBUSxDQUFDSSxDQUFDLENBQUNxQixNQUFNLENBQUNGLEtBQUs7NEJBQUMsQ0FBQzs0QkFDM0NMLFNBQVMsRUFBRyxDQUFpQzs0QkFDN0NRLFdBQVcsRUFBQyxDQUF5Qzs0QkFDckRDLEtBQUssRUFBSSxDQUFDQztnQ0FBQUEsTUFBTSxFQUFFLENBQW1CO2dDQUFFQyxZQUFZLEVBQUUsQ0FBSzs0QkFBQSxDQUFDOzs7Ozs7Ozs7OztnR0FHNURaLENBQUc7d0JBQUNDLFNBQVMsRUFBRyxDQUEwQjs4R0FDeENZLENBQU07NEJBQUNSLElBQUksRUFBQyxDQUFROzRCQUFDSixTQUFTLEVBQUMsQ0FBZ0M7c0NBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5GLENBQUM7R0F4Q3VCdEIsYUFBYTtLQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoVGVuYW50cy5qcz9jZjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFRlbmFudHMoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc2VhcmNoVXNlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvc2VhcmNoLXVzZXIvJHtxdWVyeX1gKSBcclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKXtcclxuICAgICAgICBsZXQgZmlsdGVyZWQgPSByZXNwb25zZS5kYXRhLnVzZXIuZmlsdGVyKChwKT0+e3AuX2lkICE9PSB1c2VyLl9pZH0pXHJcbiAgICAgICAgc2V0UmVzdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnVzZXIpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibXQtNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNoVXNlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIHZhbHVlID0ge3F1ZXJ5fSBcclxuICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpPT57c2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiYmctZGFyayB0ZXh0LWxpZ2h0IGZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdGVuYW50cyB0byBhZGQgdG8geW91ciBsZWFzZVwiXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tib3JkZXI6IFwiMC4ycHggc29saWQgd2hpdGVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwifX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbnRhaW5lci1mbHVpZCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBjb2wtMTJcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImF4aW9zIiwiVXNlckNvbnRleHQiLCJTZWFyY2hUZW5hbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzZWFyY2hVc2VyIiwiZSIsInJlc3BvbnNlIiwiZmlsdGVyZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdldCIsImRhdGEiLCJzdWNjZXNzIiwidXNlciIsImZpbHRlciIsIl9pZCIsInAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchTenants.js\n");

/***/ })

});