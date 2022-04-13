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

/***/ "./components/cards/UserList.js":
/*!**************************************!*\
  !*** ./components/cards/UserList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserList(param) {\n    var tenants = param.tenants;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(state.user.tenants.includes(tenants[0]._id));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3\",\n        style: {\n            backgroundColor: \"rgb(30,30,30)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: tenants,\n            renderItem: function(tenant) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item.Meta, {\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between px-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"col-sm-4 text-light font\",\n                                    children: tenant.name\n                                }, void 0, false, void 0, void 0),\n                                state && state.user && state.user.tenants.includes(tenant._id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"offset-sm-5 col-sm-3 btn btn-success\",\n                                    disabled: true,\n                                    children: \"Invited\"\n                                }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"\".concat(tenant._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"offset-sm-5 col-sm-3 btn btn-success\",\n                                        children: \"Invite\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\UserList.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\UserList.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_s(UserList, \"fLVqO3p0FcvnEO4nGi6SNKkqK10=\");\n_c = UserList;\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1VzZXJMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUNtQjtBQUNKOztBQUM1QixRQUFRLENBQUNNLFFBQVEsQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFYQyxPQUFPLEdBQVIsS0FBUyxDQUFSQSxPQUFPOztJQUN2QyxHQUFLLENBQW9CSCxHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0QsdURBQVcsR0FBeENLLEtBQUssR0FBYUosR0FBdUIsS0FBbkNLLFFBQVEsR0FBSUwsR0FBdUI7SUFDaERDLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYkssT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQ0ksSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ04sT0FBTyxDQUFDLENBQUMsRUFBRU8sR0FBRztJQUN4RCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBTTtRQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsZUFBZSxFQUFFLENBQWU7UUFBQSxDQUFDOzhGQUM5RGpCLHNDQUFJO1lBQUNrQixVQUFVLEVBQUMsQ0FBWTtZQUFDQyxVQUFVLEVBQUliLE9BQU87WUFBRWMsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsTUFBTTs4QkFDdEUsTUFBTUMsQ0FBQUEsNkRBQUFBLENBQUx0QiwyQ0FBUzswR0FDUEEsZ0RBQWM7d0JBQ2J3QixLQUFLLDhFQUNGVixDQUFHOzRCQUFDQyxTQUFTLEVBQUcsQ0FBcUM7OzRHQUNuRFUsQ0FBRTtvQ0FBQ1YsU0FBUyxFQUFDLENBQTBCOzhDQUFHTSxNQUFNLENBQUNLLElBQUk7O2dDQUNyRG5CLEtBQUssSUFBSUEsS0FBSyxDQUFDSSxJQUFJLElBQUlKLEtBQUssQ0FBQ0ksSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDUixHQUFHLGdGQUMzRGMsQ0FBTTtvQ0FBQ1osU0FBUyxFQUFDLENBQXNDO29DQUFDYSxRQUFRLEVBQUksSUFBSTs4Q0FBRSxDQUFPO2dKQUVqRjNCLGtEQUFJO29DQUFDNEIsSUFBSSxFQUFHLEdBQWEsT0FBWFIsTUFBTSxDQUFDUixHQUFHOzBIQUN0QmMsQ0FBTTt3Q0FBQ1osU0FBUyxFQUFDLENBQXNDO2tEQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVduRixDQUFDO0dBNUJ1QlYsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvVXNlckxpc3QuanM/ZmRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F2YXRhcixMaXN0fSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0L2luZGV4J1xyXG5pbXBvcnQge3VzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckxpc3Qoe3RlbmFudHN9KSB7XHJcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS51c2VyLnRlbmFudHMuaW5jbHVkZXModGVuYW50c1swXS5faWQpKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJtdC0zXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMwLDMwLDMwKVwifX0gPlxyXG4gICAgICA8TGlzdCBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiIGRhdGFTb3VyY2UgPSB7dGVuYW50c30gcmVuZGVySXRlbT17KHRlbmFudCk9PiAoXHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC0zXCIgPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNvbC1zbS00IHRleHQtbGlnaHQgZm9udFwiID57dGVuYW50Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIudGVuYW50cy5pbmNsdWRlcyh0ZW5hbnQuX2lkKSA/XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib2Zmc2V0LXNtLTUgY29sLXNtLTMgYnRuIGJ0bi1zdWNjZXNzXCIgZGlzYWJsZWQgPSB7dHJ1ZX0+SW52aXRlZDwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3RlbmFudC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvZmZzZXQtc20tNSBjb2wtc20tMyBidG4gYnRuLXN1Y2Nlc3NcIj5JbnZpdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJMaXN0IiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJMaXN0IiwidGVuYW50cyIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImluY2x1ZGVzIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJ0ZW5hbnQiLCJJdGVtIiwiTWV0YSIsInRpdGxlIiwiaDUiLCJuYW1lIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/UserList.js\n");

/***/ })

});