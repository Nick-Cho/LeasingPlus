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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchTenants; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction SearchTenants() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var searchUser = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return axios.get(\"/search-user/\".concat(query));\n                    case 4:\n                        response = _ctx.sent;\n                        if (response.data.success == true) {\n                            console.log(response.data.user);\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function searchUser(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-md-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    onSubmit: searchUser,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        class: \"form-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            value: query,\n                            onChange: function(e) {\n                                setQuery(e.target.value);\n                            },\n                            className: \"bg-dark text-light form-control\",\n                            placeholder: \"Search for tenants to add to your lease\",\n                            style: {\n                                border: \"0.2px solid white\",\n                                borderRadius: \"5px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-md-4 container-fluid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"btn btn-outline-success col-12\",\n                    children: \"Search\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\SearchTenants.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n};\n_s(SearchTenants, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = SearchTenants;\nvar _c;\n$RefreshReg$(_c, \"SearchTenants\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFRlbmFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsUUFBUSxDQUFDQyxhQUFhLEdBQUcsQ0FBQzs7SUFDdkMsR0FBSyxDQUFxQkQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJFLEtBQUssR0FBY0YsR0FBWSxLQUF4QkcsUUFBUSxHQUFJSCxHQUFZO0lBQ3RDLEdBQUssQ0FBQ0ksVUFBVTsrTEFBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO2dCQUd2QkMsUUFBUTs7Ozt3QkFGaEJELENBQUMsQ0FBQ0UsY0FBYzs7OytCQUVTQyxLQUFLLENBQUNDLEdBQUcsQ0FBRSxDQUFhLGVBQVEsT0FBTlAsS0FBSzs7d0JBQWhESSxRQUFRO3dCQUNkLEVBQUUsRUFBRUEsUUFBUSxDQUFDSSxJQUFJLENBQUNDLE9BQU8sSUFBSSxJQUFJLEVBQUMsQ0FBQzs0QkFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRLENBQUNJLElBQUksQ0FBQ0ksSUFBSTt3QkFDaEMsQ0FBQzs7Ozs7O3dCQUVERixPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFWS1QsVUFBVSxDQUFVQyxDQUFDOzs7O0lBWTNCLE1BQU0sNkVBRUhVLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQVU7O3dGQUN4QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQVU7c0dBQ3hCQyxDQUFJO29CQUFDQyxRQUFRLEVBQUVkLFVBQVU7MEdBQ3ZCVyxDQUFHO3dCQUFDSSxLQUFLLEVBQUMsQ0FBWTs4R0FDcEJDLENBQUs7NEJBQ05DLElBQUksRUFBQyxDQUFPOzRCQUNaQyxLQUFLLEVBQUlwQixLQUFLOzRCQUNkcUIsUUFBUSxFQUFJLFFBQVEsQ0FBUGxCLENBQUMsRUFBRyxDQUFDRjtnQ0FBQUEsUUFBUSxDQUFDRSxDQUFDLENBQUNtQixNQUFNLENBQUNGLEtBQUs7NEJBQUMsQ0FBQzs0QkFDM0NOLFNBQVMsRUFBRyxDQUFpQzs0QkFDN0NTLFdBQVcsRUFBQyxDQUF5Qzs0QkFDckRDLEtBQUssRUFBSSxDQUFDQztnQ0FBQUEsTUFBTSxFQUFFLENBQW1CO2dDQUFFQyxZQUFZLEVBQUUsQ0FBSzs0QkFBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS2hFYixDQUFHO2dCQUFDQyxTQUFTLEVBQUcsQ0FBMEI7c0dBQ3hDYSxDQUFNO29CQUFDYixTQUFTLEVBQUMsQ0FBZ0M7OEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakUsQ0FBQztHQXBDdUJmLGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaFRlbmFudHMuanM/Y2Y3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFRlbmFudHMoKSB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzZWFyY2hVc2VyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC9zZWFyY2gtdXNlci8ke3F1ZXJ5fWApIFxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudXNlcilcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3cgbXQtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLW1kLThcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VhcmNoVXNlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHtxdWVyeX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKT0+e3NldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX19IFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBcImJnLWRhcmsgdGV4dC1saWdodCBmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHRlbmFudHMgdG8gYWRkIHRvIHlvdXIgbGVhc2VcIlxyXG4gICAgICAgICAgICBzdHlsZSA9IHt7Ym9yZGVyOiBcIjAuMnB4IHNvbGlkIHdoaXRlXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIn19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLW1kLTQgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBjb2wtMTJcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2VhcmNoVGVuYW50cyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZWFyY2hVc2VyIiwiZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsImdldCIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzcyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchTenants.js\n");

/***/ })

});