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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Chore(param) {\n    var completed = param.completed, name = param.name, _id = param._id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), check = ref[0], setCheck = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showChore = ref1[0], setShowChore = ref1[1];\n    var updateCheck = function() {\n        var _ref = _asyncToGenerator(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"/check-chore\", {\n                            chore_id: _id\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        setCheck(!check);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function updateCheck() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var deleteChore = function() {\n        var _ref = _asyncToGenerator(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(_id);\n                        // const response = await axios.delete(\"/delete-chore\", {chore_id: _id});\n                        // console.log(response)\n                        setShowChore(true);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function deleteChore() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCheck(completed);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        hidden: showChore,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                className: \"text-light\",\n                style: {\n                    display: \"inline\"\n                },\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                style: {\n                    marginLeft: \"1rem\"\n                },\n                checked: check,\n                onChange: updateCheck,\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                className: \"text-danger font\",\n                onClick: deleteChore,\n                style: {\n                    cursor: \"pointer\",\n                    marginLeft: \"1rem\",\n                    display: \"inline\"\n                },\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\Chore.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(Chore, \"L4qw7OdHcfW40fT2oadAPo7jiuc=\");\n_c = Chore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chore);\nvar _c;\n$RefreshReg$(_c, \"Chore\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStDO0FBQ3RCO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQ3JDSyxLQUFLLENBQUMsS0FBc0IsRUFBRSxDQUFDO1FBQXhCQyxTQUFTLEdBQVYsS0FBc0IsQ0FBckJBLFNBQVMsRUFBRUMsSUFBSSxHQUFoQixLQUFzQixDQUFWQSxJQUFJLEVBQUVDLEdBQUcsR0FBckIsS0FBc0IsQ0FBSkEsR0FBRzs7SUFDbEMsR0FBSyxDQUFxQlAsR0FBVSxHQUFWQSwrQ0FBUSxJQUEzQlEsS0FBSyxHQUFjUixHQUFVLEtBQXRCUyxRQUFRLEdBQUlULEdBQVU7SUFDcEMsR0FBSyxDQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBeENVLFNBQVMsR0FBaUJWLElBQWUsS0FBL0JXLFlBQVksR0FBSVgsSUFBZTtJQUVoRCxHQUFLLENBQUNZLFdBQVc7Z01BQUcsUUFBUSxXQUFHLENBQUM7Z0JBQ3hCQyxRQUFROzs7OzsrQkFBU1gsZ0RBQVMsQ0FBQyxDQUFjLGVBQUMsQ0FBQ2E7NEJBQUFBLFFBQVEsRUFBRVIsR0FBRzt3QkFBQSxDQUFDOzt3QkFBekRNLFFBQVE7d0JBQ2RKLFFBQVEsRUFBRUQsS0FBSzs7Ozs7O1FBQ2pCLENBQUM7d0JBSEtJLFdBQVc7Ozs7SUFLakIsR0FBSyxDQUFDSSxXQUFXO2dNQUFHLFFBQVEsV0FBRyxDQUFDOzs7O3dCQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLEdBQUc7d0JBQ2YsRUFBeUU7d0JBQ3pFLEVBQXdCO3dCQUN4QkksWUFBWSxDQUFDLElBQUk7Ozs7OztRQUNuQixDQUFDO3dCQUxLSyxXQUFXOzs7O0lBT2pCZixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2JRLFFBQVEsQ0FBQ0osU0FBUztJQUNwQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osTUFBTSw2RUFFSGMsQ0FBRztRQUFDQyxNQUFNLEVBQUVWLFNBQVM7O3dGQUNuQlcsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFHLENBQVk7Z0JBQUNDLEtBQUssRUFBSSxDQUFDQztvQkFBQUEsT0FBTyxFQUFDLENBQVE7Z0JBQUEsQ0FBQzswQkFBR2xCLElBQUk7Ozs7Ozt3RkFDOURtQixDQUFLO2dCQUFDRixLQUFLLEVBQUUsQ0FBQztvQkFBQ0csVUFBVSxFQUFFLENBQU07Z0JBQUEsQ0FBQztnQkFBRUMsT0FBTyxFQUFFbkIsS0FBSztnQkFBRW9CLFFBQVEsRUFBSWhCLFdBQVc7Z0JBQUNpQixJQUFJLEVBQUUsQ0FBVTs7Ozs7O3dGQUU1RlIsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFHLENBQWtCO2dCQUFDUSxPQUFPLEVBQUVkLFdBQVc7Z0JBQUVPLEtBQUssRUFBSSxDQUFDUTtvQkFBQUEsTUFBTSxFQUFFLENBQVM7b0JBQUVMLFVBQVUsRUFBRSxDQUFNO29CQUFFRixPQUFPLEVBQUMsQ0FBUTtnQkFBQSxDQUFDOzBCQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQUlwSSxDQUFDO0dBN0JRcEIsS0FBSztLQUFMQSxLQUFLO0FBK0JkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmUuanM/Y2U1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHtFZGl0T3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmZ1bmN0aW9uIENob3JlKHtjb21wbGV0ZWQsIG5hbWUsIF9pZH0pIHtcclxuICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dDaG9yZSxzZXRTaG93Q2hvcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB1cGRhdGVDaGVjayA9IGFzeW5jKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXCIvY2hlY2stY2hvcmVcIix7Y2hvcmVfaWQ6IF9pZH0pO1xyXG4gICAgc2V0Q2hlY2soIWNoZWNrKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVDaG9yZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coX2lkKTtcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2RlbGV0ZS1jaG9yZVwiLCB7Y2hvcmVfaWQ6IF9pZH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICBzZXRTaG93Q2hvcmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldENoZWNrKGNvbXBsZXRlZCk7XHJcbiAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGhpZGRlbj17c2hvd0Nob3JlfT5cclxuICAgICAgPGg1IGNsYXNzTmFtZSA9IFwidGV4dC1saWdodFwiIHN0eWxlID0ge3tkaXNwbGF5OlwiaW5saW5lXCJ9fT57bmFtZX08L2g1PlxyXG4gICAgICA8aW5wdXQgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxcmVtXCJ9fSBjaGVja2VkPXtjaGVja30gb25DaGFuZ2UgPSB7dXBkYXRlQ2hlY2t9dHlwZT0gXCJjaGVja2JveFwiLz5cclxuICAgICAgey8qIDxFZGl0T3V0bGluZWQgY2xhc3NOYW1lID0gXCJ0ZXh0LWxpZ2h0XCIvPiAqL31cclxuICAgICAgPGg1IGNsYXNzTmFtZSA9IFwidGV4dC1kYW5nZXIgZm9udFwiIG9uQ2xpY2s9e2RlbGV0ZUNob3JlfSBzdHlsZSA9IHt7Y3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luTGVmdDogXCIxcmVtXCIsIGRpc3BsYXk6XCJpbmxpbmVcIn19Plg8L2g1PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob3JlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkVkaXRPdXRsaW5lZCIsIkNob3JlIiwiY29tcGxldGVkIiwibmFtZSIsIl9pZCIsImNoZWNrIiwic2V0Q2hlY2siLCJzaG93Q2hvcmUiLCJzZXRTaG93Q2hvcmUiLCJ1cGRhdGVDaGVjayIsInJlc3BvbnNlIiwicHV0IiwiY2hvcmVfaWQiLCJkZWxldGVDaG9yZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoaWRkZW4iLCJoNSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImlucHV0IiwibWFyZ2luTGVmdCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInR5cGUiLCJvbkNsaWNrIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/Chore.js\n");

/***/ })

});