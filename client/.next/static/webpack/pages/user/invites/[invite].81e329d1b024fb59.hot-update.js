"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/invites/[invite]",{

/***/ "./pages/user/invites/[invite].js":
/*!****************************************!*\
  !*** ./pages/user/invites/[invite].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction ViewInvite() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), invite = ref[0], setInvite = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    var getInvite = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(state);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"get-invite/\".concat(router.query.invite), {\n                            user_id: state.user._id\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getInvite(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getInvite();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            paddingTop: \"4rem\",\n            minHeight: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"offset-md-3 col-md-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"text-light text-center\",\n                children: \"Invite?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n}\n_s(ViewInvite, \"pmRyDloXaxKMVaUDFQGylcp+Pi0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ViewInvite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewInvite);\nvar _c;\n$RefreshReg$(_c, \"ViewInvite\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ludml0ZXMvW2ludml0ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDSDtBQUN6QjtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQzVCTSxVQUFVLEdBQUcsQ0FBQzs7SUFDckIsR0FBSyxDQUFzQk4sR0FBVSxHQUFWQSwrQ0FBUSxJQUE1Qk8sTUFBTSxHQUFjUCxHQUFVLEtBQXRCUSxTQUFTLEdBQUdSLEdBQVU7SUFDckMsR0FBSyxDQUFDUyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEdBQUssQ0FBb0JKLElBQXVCLEdBQXZCQSxpREFBVSxDQUFDRSx1REFBVyxHQUF4Q08sS0FBSyxHQUFhVCxJQUF1QixLQUFuQ1UsUUFBUSxHQUFJVixJQUF1QjtJQUVoRCxHQUFLLENBQUNXLFNBQVM7K0xBQUcsUUFBUSxTQUFEQyxDQUFDLEVBQUssQ0FBQztnQkFFeEJDLFFBQVE7Ozs7d0JBRGRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLOzsrQkFDTU4sZ0RBQVMsQ0FBRSxDQUFXLGFBQXNCLE9BQXBCSyxNQUFNLENBQUNTLEtBQUssQ0FBQ1gsTUFBTSxHQUFJLENBQUM7NEJBQ3JFWSxPQUFPLEVBQUVULEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxHQUFHO3dCQUN6QixDQUFDOzt3QkFGS1AsUUFBUTt3QkFHZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7Ozs7OztRQUN0QixDQUFDO3dCQU5LRixTQUFTLENBQVVDLENBQUM7Ozs7SUFRMUJYLGdEQUFTLENBQUMsUUFDWCxHQURlLENBQUM7UUFDYlUsU0FBUztJQUNYLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixNQUFNLDZFQUNIVSxDQUFHO1FBQUNDLEtBQUssRUFBSSxDQUFDQztZQUFBQSxlQUFlLEVBQUUsQ0FBTztZQUFFQyxVQUFVLEVBQUMsQ0FBTTtZQUFFQyxTQUFTLEVBQUUsQ0FBTztRQUFBLENBQUM7OEZBQzVFSixDQUFHO1lBQUNLLFNBQVMsRUFBRSxDQUFzQjtrR0FDbkNDLENBQUU7Z0JBQUNELFNBQVMsRUFBRyxDQUF3QjswQkFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3hELENBQUM7R0ExQlFyQixVQUFVOztRQUVGRCxrREFBUzs7O0tBRmpCQyxVQUFVO0FBNEJuQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2ludml0ZXMvW2ludml0ZV0uanM/OWQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFZpZXdJbnZpdGUoKSB7XHJcbiAgY29uc3QgW2ludml0ZSwgc2V0SW52aXRlXT0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0SW52aXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBnZXQtaW52aXRlLyR7cm91dGVyLnF1ZXJ5Lmludml0ZX1gLCB7XHJcbiAgICAgIHVzZXJfaWQ6IHN0YXRlLnVzZXIuX2lkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0SW52aXRlKClcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgcGFkZGluZ1RvcDpcIjRyZW1cIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCJ9fT4gXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSBcIm9mZnNldC1tZC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwidGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPkludml0ZT88L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld0ludml0ZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiVmlld0ludml0ZSIsImludml0ZSIsInNldEludml0ZSIsInJvdXRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXRJbnZpdGUiLCJlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicXVlcnkiLCJ1c2VyX2lkIiwidXNlciIsIl9pZCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/invites/[invite].js\n");

/***/ })

});