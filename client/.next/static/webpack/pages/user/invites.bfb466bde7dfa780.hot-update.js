"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/invites",{

/***/ "./pages/user/invites.js":
/*!*******************************!*\
  !*** ./pages/user/invites.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index.js */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cards_InvitesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cards/InvitesList */ \"./components/cards/InvitesList.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Invites() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), invites = ref1[0], setInvites = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (JSON.stringify(state.user) == \"{}\") {\n            router.push(\"/\");\n        }\n        setInvites(state.user.invites);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        style: {\n            paddingTop: \"4rem\",\n            backgroundColor: \"black\",\n            minHeight: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offset-md-2 col-md-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"display-3 text-center text-light header\",\n                        children: \"Invites\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_InvitesList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        invites: invites\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n}\n_s(Invites, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Invites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Invites);\nvar _c;\n$RefreshReg$(_c, \"Invites\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ludml0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRDtBQUNGO0FBQ2I7QUFDdUI7O1NBQ25ETSxPQUFPLEdBQUcsQ0FBQzs7SUFDbEIsR0FBSyxDQUFxQkwsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNFLDBEQUFXLEdBQXpDSSxLQUFLLEdBQWNOLEdBQXVCLEtBQW5DTyxRQUFRLEdBQUlQLEdBQXVCO0lBQ2pELEdBQUssQ0FBeUJDLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBbENPLE9BQU8sR0FBZ0JQLElBQVksS0FBMUJRLFVBQVUsR0FBSVIsSUFBWTtJQUMxQyxHQUFLLENBQUNTLE1BQU0sR0FBR1Asc0RBQVM7SUFJeEJKLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYixFQUFFLEVBQUVZLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixLQUFLLENBQUNPLElBQUksS0FBSyxDQUFJLEtBQUMsQ0FBQztZQUN0Q0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRztRQUNqQixDQUFDO1FBQ0RMLFVBQVUsQ0FBQ0gsS0FBSyxDQUFDTyxJQUFJLENBQUNMLE9BQU87SUFDL0IsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sNkVBQ0hPLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQWlCO1FBQUNDLEtBQUssRUFBSSxDQUFDQztZQUFBQSxVQUFVLEVBQUUsQ0FBTTtZQUFFQyxlQUFlLEVBQUUsQ0FBTztZQUFFQyxTQUFTLEVBQUUsQ0FBTztRQUFBLENBQUM7OEZBQzNHTCxDQUFHO1lBQUNDLFNBQVMsRUFBRyxDQUFLO2tHQUNuQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQXNCOztnR0FDcENLLENBQUU7d0JBQUNMLFNBQVMsRUFBRyxDQUF5QztrQ0FBQyxDQUFPOzs7Ozs7Z0dBQ2hFWixxRUFBVzt3QkFBQ0ksT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZDLENBQUM7R0F4QlFILE9BQU87O1FBR0NGLGtEQUFTOzs7S0FIakJFLE9BQU87QUEwQmhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvaW52aXRlcy5qcz8wMTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9pbmRleC5qcydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSW52aXRlc0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkcy9JbnZpdGVzTGlzdCdcclxuZnVuY3Rpb24gSW52aXRlcygpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtpbnZpdGVzLCBzZXRJbnZpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXIpID09IFwie31cIil7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgfVxyXG4gICAgc2V0SW52aXRlcyhzdGF0ZS51c2VyLmludml0ZXMpO1xyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGUgPSB7e3BhZGRpbmdUb3A6IFwiNHJlbVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJvZmZzZXQtbWQtMiBjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwiZGlzcGxheS0zIHRleHQtY2VudGVyIHRleHQtbGlnaHQgaGVhZGVyXCI+SW52aXRlczwvaDE+XHJcbiAgICAgICAgICA8SW52aXRlc0xpc3QgaW52aXRlcz17aW52aXRlc30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52aXRlcyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIkludml0ZXNMaXN0IiwiSW52aXRlcyIsInN0YXRlIiwic2V0U3RhdGUiLCJpbnZpdGVzIiwic2V0SW52aXRlcyIsInJvdXRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/invites.js\n");

/***/ })

});