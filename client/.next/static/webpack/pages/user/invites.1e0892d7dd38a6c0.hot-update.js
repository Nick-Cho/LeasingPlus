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

/***/ "./components/cards/Invite.js":
/*!************************************!*\
  !*** ./components/cards/Invite.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Invite(param) {\n    var invite = param.invite;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), sender = ref[0], setSender = ref[1];\n    var getUser = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/get-user/\".concat(invite.sender_id, \".str\"));\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(\"Get user response: \", response);\n                        setSender(response.data.user);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getUser();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-between px-4 font\",\n        children: JSON.stringify(sender) === '{}' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                    className: \"text-light\",\n                    children: [\n                        \" \",\n                        sender.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"btn btn-success\",\n                    children: \" View \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_s(Invite, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Invite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Invite);\nvar _c;\n$RefreshReg$(_c, \"Invite\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0ludml0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUNoQkcsTUFBTSxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVZDLE1BQU0sR0FBUCxLQUFRLENBQVBBLE1BQU07O0lBQ3JCLEdBQUssQ0FBdUJILEdBQVUsR0FBVkEsK0NBQVEsSUFBN0JJLE1BQU0sR0FBZUosR0FBVSxLQUF2QkssU0FBUyxHQUFJTCxHQUFVO0lBQ3RDLEdBQUssQ0FBQ00sT0FBTzsrTEFBRyxRQUFRLFdBQUcsQ0FBQztnQkFFcEJDLFFBQVE7Ozs7OzsrQkFBU04sZ0RBQVMsQ0FBRSxDQUFVLFlBQW1CLE1BQUksQ0FBckJFLE1BQU0sQ0FBQ00sU0FBUyxFQUFDLENBQUk7O3dCQUE3REYsUUFBUTt3QkFDZEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBcUIsc0JBQUVKLFFBQVE7d0JBQzNDRixTQUFTLENBQUNFLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxJQUFJOzs7Ozs7d0JBRTVCSCxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBR2IsQ0FBQzt3QkFUS0wsT0FBTzs7OztJQVdiUCxnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2JPLE9BQU87SUFDVCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSw2RUFDSFEsQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBMEM7a0JBQ3ZEQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2IsTUFBTSxNQUFNLENBQUk7OzRGQUU1QmMsQ0FBRTtvQkFBQ0gsU0FBUyxFQUFHLENBQVk7O3dCQUFDLENBQUM7d0JBQUNYLE1BQU0sQ0FBQ2UsSUFBSTs7Ozs7Ozs0RkFDekNDLENBQUk7b0JBQUNMLFNBQVMsRUFBQyxDQUFpQjs4QkFBQyxDQUFNOzs7Ozs7Ozs7Ozs7O0FBTWxELENBQUM7R0E1QlFiLE1BQU07S0FBTkEsTUFBTTtBQThCZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0ludml0ZS5qcz8xYjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuZnVuY3Rpb24gSW52aXRlKHtpbnZpdGV9KSB7XHJcbiAgY29uc3QgW3NlbmRlciwgc2V0U2VuZGVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZ2V0VXNlciA9IGFzeW5jKCkgPT4ge1xyXG4gICAgdHJ5eyBcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvZ2V0LXVzZXIvJHtpbnZpdGUuc2VuZGVyX2lkfS5zdHJgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiR2V0IHVzZXIgcmVzcG9uc2U6IFwiLCByZXNwb25zZSlcclxuICAgIHNldFNlbmRlcihyZXNwb25zZS5kYXRhLnVzZXIpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0VXNlcigpO1xyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHB4LTQgZm9udFwiPlxyXG4gICAgICB7IEpTT04uc3RyaW5naWZ5KHNlbmRlcikgPT09ICd7fScgICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWUgPSBcInRleHQtbGlnaHRcIj4ge3NlbmRlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj4gVmlldyA8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0ZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW52aXRlIiwiaW52aXRlIiwic2VuZGVyIiwic2V0U2VuZGVyIiwiZ2V0VXNlciIsInJlc3BvbnNlIiwiZ2V0Iiwic2VuZGVyX2lkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImg0IiwibmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards/Invite.js\n");

/***/ })

});