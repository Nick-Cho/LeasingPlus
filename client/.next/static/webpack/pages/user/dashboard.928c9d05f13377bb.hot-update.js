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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserList(param) {\n    var tenants = param.tenants;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3\",\n        style: {\n            backgroundColor: \"rgb(30,30,30)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: tenants,\n            renderItem: function(tenant) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.List.Item.Meta, {\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between px-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"col-sm-4 text-light font\",\n                                    children: tenant.name\n                                }, void 0, false, void 0, void 0),\n                                state && state.user && state.user.tenants.includes(tenant._id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"\".concat(tenant._id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"offset-sm-5 col-sm-3 btn btn-success\",\n                                        children: \"Invite\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"offset-sm-5 col-sm-3 btn btn-success\",\n                                    disabled: true,\n                                    children: \"Invited\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0)\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0);\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\UserList.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\UserList.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n};\n_s(UserList, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = UserList;\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1VzZXJMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUNtQjtBQUNmOztBQUNqQixRQUFRLENBQUNLLFFBQVEsQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFYQyxPQUFPLEdBQVIsS0FBUyxDQUFSQSxPQUFPOztJQUN2QyxHQUFLLENBQW9CRixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0QsdURBQVcsR0FBeENJLEtBQUssR0FBYUgsR0FBdUIsS0FBbkNJLFFBQVEsR0FBSUosR0FBdUI7SUFDaEQsTUFBTSw2RUFDSEssQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBTTtRQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsZUFBZSxFQUFFLENBQWU7UUFBQSxDQUFDOzhGQUM5RFgsc0NBQUk7WUFBQ1ksVUFBVSxFQUFDLENBQVk7WUFBQ0MsVUFBVSxFQUFJUixPQUFPO1lBQUVTLFVBQVUsRUFBRSxRQUFRLENBQVBDLE1BQU07OEJBQ3RFLE1BQU1DLENBQUFBLDZEQUFBQSxDQUFMaEIsMkNBQVM7MEdBQ1BBLGdEQUFjO3dCQUNia0IsS0FBSyw4RUFDRlYsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFHLENBQXFDOzs0R0FDbkRVLENBQUU7b0NBQUNWLFNBQVMsRUFBQyxDQUEwQjs4Q0FBR00sTUFBTSxDQUFDSyxJQUFJOztnQ0FDckRkLEtBQUssSUFBSUEsS0FBSyxDQUFDZSxJQUFJLElBQUlmLEtBQUssQ0FBQ2UsSUFBSSxDQUFDaEIsT0FBTyxDQUFDaUIsUUFBUSxDQUFDUCxNQUFNLENBQUNRLEdBQUcsZ0ZBQzNEdEIsa0RBQUk7b0NBQUN1QixJQUFJLEVBQUcsR0FBYSxPQUFYVCxNQUFNLENBQUNRLEdBQUc7MEhBQ3RCRSxDQUFNO3dDQUFDaEIsU0FBUyxFQUFDLENBQXNDO2tEQUFDLENBQU07O2dKQUdoRWdCLENBQU07b0NBQUNoQixTQUFTLEVBQUMsQ0FBc0M7b0NBQUNpQixRQUFRLEVBQUksSUFBSTs4Q0FBRSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVwRyxDQUFDO0dBekJ1QnRCLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL1VzZXJMaXN0LmpzP2ZkZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdmF0YXIsTGlzdH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleCdcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGlzdCh7dGVuYW50c30pIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSBcIm10LTNcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJyZ2IoMzAsMzAsMzApXCJ9fSA+XHJcbiAgICAgIDxMaXN0IGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCIgZGF0YVNvdXJjZSA9IHt0ZW5hbnRzfSByZW5kZXJJdGVtPXsodGVuYW50KT0+IChcclxuICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHB4LTNcIiA+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY29sLXNtLTQgdGV4dC1saWdodCBmb250XCIgPnt0ZW5hbnQubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci50ZW5hbnRzLmluY2x1ZGVzKHRlbmFudC5faWQpID9cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7dGVuYW50Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9mZnNldC1zbS01IGNvbC1zbS0zIGJ0biBidG4tc3VjY2Vzc1wiPkludml0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib2Zmc2V0LXNtLTUgY29sLXNtLTMgYnRuIGJ0bi1zdWNjZXNzXCIgZGlzYWJsZWQgPSB7dHJ1ZX0+SW52aXRlZDwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkF2YXRhciIsIkxpc3QiLCJMaW5rIiwiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiVXNlckxpc3QiLCJ0ZW5hbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwidGVuYW50IiwiSXRlbSIsIk1ldGEiLCJ0aXRsZSIsImg1IiwibmFtZSIsInVzZXIiLCJpbmNsdWRlcyIsIl9pZCIsImhyZWYiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/UserList.js\n");

/***/ })

});