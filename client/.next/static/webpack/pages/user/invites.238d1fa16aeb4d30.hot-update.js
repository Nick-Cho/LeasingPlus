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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Invite(param) {\n    var invite = param.invite, sender = param.sender, setSender = param.setSender;\n    _s();\n    var getUser = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/get-user/\".concat(invite.sender_id));\n                    case 2:\n                        response = _ctx.sent;\n                        //console.log(\"Get user response: \", response)\n                        setSender(response.data.user);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // console.log(\"Sender: \", sender);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getUser();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-between px-4 text-light font\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"pt-2 text-light font\",\n                children: [\n                    \" \",\n                    sender.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: \"btn btn-success\",\n                children: \" View \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Invite.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n_s(Invite, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Invite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Invite);\nvar _c;\n$RefreshReg$(_c, \"Invite\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0ludml0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQ2hCRSxNQUFNLENBQUMsS0FBeUIsRUFBRSxDQUFDO1FBQTNCQyxNQUFNLEdBQVAsS0FBeUIsQ0FBeEJBLE1BQU0sRUFBQ0MsTUFBTSxHQUFkLEtBQXlCLENBQWpCQSxNQUFNLEVBQUNDLFNBQVMsR0FBeEIsS0FBeUIsQ0FBVkEsU0FBUzs7SUFDdEMsR0FBSyxDQUFDQyxPQUFPOytMQUFHLFFBQVEsV0FBRyxDQUFDO2dCQUNwQkMsUUFBUTs7Ozs7K0JBQVNOLGdEQUFTLENBQUUsQ0FBVSxZQUFtQixPQUFqQkUsTUFBTSxDQUFDTSxTQUFTOzt3QkFBeERGLFFBQVE7d0JBQ2QsRUFBOEM7d0JBQzlDRixTQUFTLENBQUNFLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxJQUFJOzs7Ozs7UUFDNUIsRUFBbUM7UUFDckMsQ0FBQzt3QkFMS0wsT0FBTzs7OztJQU9iTixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2JNLE9BQU87SUFDVCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSw2RUFDSE0sQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBcUQ7O3dGQUNuRUMsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFHLENBQXNCOztvQkFBQyxDQUFDO29CQUFDVCxNQUFNLENBQUNXLElBQUk7Ozs7Ozs7d0ZBRW5EQyxDQUFJO2dCQUFDSCxTQUFTLEVBQUMsQ0FBaUI7MEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSTlDLENBQUM7R0FwQlFYLE1BQU07S0FBTkEsTUFBTTtBQXNCZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0ludml0ZS5qcz8xYjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5mdW5jdGlvbiBJbnZpdGUoe2ludml0ZSxzZW5kZXIsc2V0U2VuZGVyfSkge1xyXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYygpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvZ2V0LXVzZXIvJHtpbnZpdGUuc2VuZGVyX2lkfWApO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkdldCB1c2VyIHJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpXHJcbiAgICBzZXRTZW5kZXIocmVzcG9uc2UuZGF0YS51c2VyKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJTZW5kZXI6IFwiLCBzZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtNCB0ZXh0LWxpZ2h0IGZvbnRcIj5cclxuICAgICAgPGg0IGNsYXNzTmFtZSA9IFwicHQtMiB0ZXh0LWxpZ2h0IGZvbnRcIj4ge3NlbmRlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPiBWaWV3IDwvc3Bhbj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0ZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJheGlvcyIsIkludml0ZSIsImludml0ZSIsInNlbmRlciIsInNldFNlbmRlciIsImdldFVzZXIiLCJyZXNwb25zZSIsImdldCIsInNlbmRlcl9pZCIsImRhdGEiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJuYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/Invite.js\n");

/***/ })

});