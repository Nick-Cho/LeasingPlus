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

/***/ "./components/cards/Chore.js":
/*!***********************************!*\
  !*** ./components/cards/Chore.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Chore(param) {\n    var completed = param.completed, name = param.name, _id = param._id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), check = ref[0], setCheck = ref[1];\n    var updateCheck = function() {\n        var _ref = _asyncToGenerator(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/check-chore\", {\n                            chore_id: _id\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        setCheck(!check);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function updateCheck() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCheck(completed);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                className: \"text-light\",\n                style: {\n                    display: \"inline\"\n                },\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                style: {\n                    marginLeft: \"1rem\"\n                },\n                checked: check,\n                onChange: updateCheck,\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"text-light\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                className: \"text-danger font\",\n                style: {\n                    cursor: \"pointer\",\n                    marginLeft: \"1rem\",\n                    display: \"inline\"\n                },\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n_s(Chore, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Chore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chore);\nvar _c;\n$RefreshReg$(_c, \"Chore\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUN0QjtBQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUNuQ0ssS0FBSyxDQUFDLEtBQXFCLEVBQUUsQ0FBQztRQUF2QkMsU0FBUyxHQUFWLEtBQXFCLENBQXBCQSxTQUFTLEVBQUNDLElBQUksR0FBZixLQUFxQixDQUFWQSxJQUFJLEVBQUVDLEdBQUcsR0FBcEIsS0FBcUIsQ0FBSkEsR0FBRzs7SUFDakMsR0FBSyxDQUFxQlAsR0FBVSxHQUFWQSwrQ0FBUSxJQUEzQlEsS0FBSyxHQUFjUixHQUFVLEtBQXRCUyxRQUFRLEdBQUlULEdBQVU7SUFFcEMsR0FBSyxDQUFDVSxXQUFXO2dNQUFHLFFBQVEsV0FBRyxDQUFDO2dCQUN4QkMsUUFBUTs7Ozs7K0JBQVNULGdEQUFTLENBQUMsQ0FBYyxlQUFDLENBQUNXOzRCQUFBQSxRQUFRLEVBQUVOLEdBQUc7d0JBQUEsQ0FBQzs7d0JBQXpESSxRQUFRO3dCQUNkRixRQUFRLEVBQUVELEtBQUs7Ozs7OztRQUNqQixDQUFDO3dCQUhLRSxXQUFXOzs7O0lBSWpCVCxnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2JRLFFBQVEsQ0FBQ0osU0FBUztJQUNwQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osTUFBTSw2RUFDSFMsQ0FBRzs7d0ZBQ0RDLENBQUU7Z0JBQUNDLFNBQVMsRUFBRyxDQUFZO2dCQUFDQyxLQUFLLEVBQUksQ0FBQ0M7b0JBQUFBLE9BQU8sRUFBQyxDQUFRO2dCQUFBLENBQUM7MEJBQUdaLElBQUk7Ozs7Ozt3RkFDOURhLENBQUs7Z0JBQUNGLEtBQUssRUFBRSxDQUFDO29CQUFDRyxVQUFVLEVBQUUsQ0FBTTtnQkFBQSxDQUFDO2dCQUFFQyxPQUFPLEVBQUViLEtBQUs7Z0JBQUVjLFFBQVEsRUFBSVosV0FBVztnQkFBQ2EsSUFBSSxFQUFFLENBQVU7Ozs7Ozt3RkFDNUZwQix5REFBWTtnQkFBQ2EsU0FBUyxFQUFHLENBQVk7Ozs7Ozt3RkFDckNELENBQUU7Z0JBQUNDLFNBQVMsRUFBRyxDQUFrQjtnQkFBQ0MsS0FBSyxFQUFJLENBQUNPO29CQUFBQSxNQUFNLEVBQUUsQ0FBUztvQkFBRUosVUFBVSxFQUFFLENBQU07b0JBQUVGLE9BQU8sRUFBQyxDQUFRO2dCQUFBLENBQUM7MEJBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBRzlHLENBQUM7R0FsQlFkLEtBQUs7S0FBTEEsS0FBSztBQW9CZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0Nob3JlLmpzP2NlNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBFZGl0T3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuZnVuY3Rpb24gQ2hvcmUoe2NvbXBsZXRlZCxuYW1lLCBfaWR9KSB7XHJcbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIGNvbnN0IHVwZGF0ZUNoZWNrID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnB1dChcIi9jaGVjay1jaG9yZVwiLHtjaG9yZV9pZDogX2lkfSk7XHJcbiAgICBzZXRDaGVjayghY2hlY2spOyBcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRDaGVjayhjb21wbGV0ZWQpO1xyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoNSBjbGFzc05hbWUgPSBcInRleHQtbGlnaHRcIiBzdHlsZSA9IHt7ZGlzcGxheTpcImlubGluZVwifX0+e25hbWV9PC9oNT5cclxuICAgICAgPGlucHV0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMXJlbVwifX0gY2hlY2tlZD17Y2hlY2t9IG9uQ2hhbmdlID0ge3VwZGF0ZUNoZWNrfXR5cGU9IFwiY2hlY2tib3hcIi8+XHJcbiAgICAgIDxFZGl0T3V0bGluZWQgY2xhc3NOYW1lID0gXCJ0ZXh0LWxpZ2h0XCIvPlxyXG4gICAgICA8aDUgY2xhc3NOYW1lID0gXCJ0ZXh0LWRhbmdlciBmb250XCIgc3R5bGUgPSB7e2N1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbkxlZnQ6IFwiMXJlbVwiLCBkaXNwbGF5OlwiaW5saW5lXCJ9fT5YPC9oNT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hvcmUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRWRpdE91dGxpbmVkIiwiQ2hvcmUiLCJjb21wbGV0ZWQiLCJuYW1lIiwiX2lkIiwiY2hlY2siLCJzZXRDaGVjayIsInVwZGF0ZUNoZWNrIiwicmVzcG9uc2UiLCJwdXQiLCJjaG9yZV9pZCIsImRpdiIsImg1IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5wdXQiLCJtYXJnaW5MZWZ0IiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidHlwZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/Chore.js\n");

/***/ })

});