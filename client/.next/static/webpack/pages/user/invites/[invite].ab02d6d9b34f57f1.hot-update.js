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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction ViewInvite() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), invite = ref[0], setInvite = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    var getInvite = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(state);\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"get-invite/invite_id=\".concat(router.query.invite, \"/&sender_id=\").concat(state.user._id));\n                    case 3:\n                        response = _ctx.sent;\n                        console.log(response);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getInvite(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getInvite();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            paddingTop: \"4rem\",\n            minHeight: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"offset-md-3 col-md-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"text-light text-center\",\n                children: \"Invite?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n}\n_s(ViewInvite, \"pmRyDloXaxKMVaUDFQGylcp+Pi0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ViewInvite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewInvite);\nvar _c;\n$RefreshReg$(_c, \"ViewInvite\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ludml0ZXMvW2ludml0ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDSDtBQUN6QjtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQzVCTSxVQUFVLEdBQUcsQ0FBQzs7SUFDckIsR0FBSyxDQUFzQk4sR0FBVSxHQUFWQSwrQ0FBUSxJQUE1Qk8sTUFBTSxHQUFjUCxHQUFVLEtBQXRCUSxTQUFTLEdBQUdSLEdBQVU7SUFDckMsR0FBSyxDQUFDUyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEdBQUssQ0FBb0JKLElBQXVCLEdBQXZCQSxpREFBVSxDQUFDRSx1REFBVyxHQUF4Q08sS0FBSyxHQUFhVCxJQUF1QixLQUFuQ1UsUUFBUSxHQUFJVixJQUF1QjtJQUVoRCxHQUFLLENBQUNXLFNBQVM7K0xBQUcsUUFBUSxTQUFEQyxDQUFDLEVBQUssQ0FBQztnQkFFeEJDLFFBQVE7Ozs7d0JBRGRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLOzsrQkFDTU4sZ0RBQVMsQ0FBRSxDQUFxQix1QkFBb0NNLE1BQWMsQ0FBaERELE1BQU0sQ0FBQ1MsS0FBSyxDQUFDWCxNQUFNLEVBQUMsQ0FBWSxlQUFpQixPQUFmRyxLQUFLLENBQUNTLElBQUksQ0FBQ0MsR0FBRzs7d0JBQW5HTixRQUFRO3dCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUTs7Ozs7O1FBQ3RCLENBQUM7d0JBSktGLFNBQVMsQ0FBVUMsQ0FBQzs7OztJQU0xQlgsZ0RBQVMsQ0FBQyxRQUNYLEdBRGUsQ0FBQztRQUNiVSxTQUFTO0lBQ1gsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNKLE1BQU0sNkVBQ0hTLENBQUc7UUFBQ0MsS0FBSyxFQUFJLENBQUNDO1lBQUFBLGVBQWUsRUFBRSxDQUFPO1lBQUVDLFVBQVUsRUFBQyxDQUFNO1lBQUVDLFNBQVMsRUFBRSxDQUFPO1FBQUEsQ0FBQzs4RkFDNUVKLENBQUc7WUFBQ0ssU0FBUyxFQUFFLENBQXNCO2tHQUNuQ0MsQ0FBRTtnQkFBQ0QsU0FBUyxFQUFHLENBQXdCOzBCQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEQsQ0FBQztHQXhCUXBCLFVBQVU7O1FBRUZELGtEQUFTOzs7S0FGakJDLFVBQVU7QUEwQm5CLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvaW52aXRlcy9baW52aXRlXS5qcz85ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvaW5kZXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gVmlld0ludml0ZSgpIHtcclxuICBjb25zdCBbaW52aXRlLCBzZXRJbnZpdGVdPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBcclxuICBjb25zdCBnZXRJbnZpdGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGdldC1pbnZpdGUvaW52aXRlX2lkPSR7cm91dGVyLnF1ZXJ5Lmludml0ZX0vJnNlbmRlcl9pZD0ke3N0YXRlLnVzZXIuX2lkfWApO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGdldEludml0ZSgpXHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIHBhZGRpbmdUb3A6XCI0cmVtXCIsIG1pbkhlaWdodDogXCIxMDB2aFwifX0+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJvZmZzZXQtbWQtMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWUgPSBcInRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5JbnZpdGU/PC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdJbnZpdGUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJheGlvcyIsInVzZVJvdXRlciIsIlZpZXdJbnZpdGUiLCJpbnZpdGUiLCJzZXRJbnZpdGUiLCJyb3V0ZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiZ2V0SW52aXRlIiwiZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImdldCIsInF1ZXJ5IiwidXNlciIsIl9pZCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/invites/[invite].js\n");

/***/ })

});