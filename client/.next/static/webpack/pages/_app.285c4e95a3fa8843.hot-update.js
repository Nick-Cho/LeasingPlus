"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/cards/ChoresColumn.js":
/*!******************************************!*\
  !*** ./components/cards/ChoresColumn.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ChoresColumn(param1) {\n    var chores = param1.chores;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n        droppableId: \"col-1\",\n        children: function(provided) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread({\n                style: {\n                    display: 'flex',\n                    flexDirection: 'column'\n                }\n            }, provided.droppableProps, {\n                ref: provided.innerRef,\n                children: chores.map(function(param) {\n                    var _id = param._id, name = param.name, details = param.details, completed = param.completed;\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this));\n                })\n            }), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n_c = ChoresColumn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChoresColumn);\nvar _c;\n$RefreshReg$(_c, \"ChoresColumn\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0NvbHVtbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUMvQ0csWUFBWSxDQUFDLE1BQVEsRUFBRSxDQUFDO1FBQVZDLE1BQU0sR0FBUCxNQUFRLENBQVBBLE1BQU07O0lBQzNCLE1BQU0sNkVBQ0hILDBEQUFTO1FBQUNJLFdBQVcsRUFBRyxDQUFPO2tCQUM3QkMsUUFBUSxDQUFSQSxRQUFROzBCQUNULE1BQ04sQ0FBQyw4REFETUMsQ0FBRztnQkFDRkMsS0FBSyxFQUFFLENBQUM7b0JBQ05DLE9BQU8sRUFBRSxDQUFNO29CQUNmQyxhQUFhLEVBQUUsQ0FBUTtnQkFDekIsQ0FBQztlQUNHSixRQUFRLENBQUNLLGNBQWM7Z0JBQzNCQyxHQUFHLEVBQUlOLFFBQVEsQ0FBQ08sUUFBUTswQkFFdkJULE1BQU0sQ0FBQ1UsR0FBRyxDQUFDLFFBQVEsUUFBMEIsQ0FBQzt3QkFBakNDLEdBQUcsU0FBSEEsR0FBRyxFQUFDQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztvQkFDeEMsTUFBTSw2RUFDSFgsQ0FBRztrQ0FDRFMsSUFBSTs7Ozs7O2dCQUdYLENBQUM7Ozs7Ozs7Ozs7OztBQUtULENBQUM7S0F2QlFiLFlBQVk7QUF5QnJCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmVzQ29sdW1uLmpzPzJjNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Ryb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmZ1bmN0aW9uIENob3Jlc0NvbHVtbih7Y2hvcmVzfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkID0gXCJjb2wtMVwiPlxyXG4gICAgICB7cHJvdmlkZWQgPT4gKCBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgIHJlZiA9IHtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaG9yZXMubWFwKCh7X2lkLG5hbWUsIGRldGFpbHMsIGNvbXBsZXRlZH0pPT57XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+KX1cclxuICAgIDwvRHJvcHBhYmxlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hvcmVzQ29sdW1uIl0sIm5hbWVzIjpbIlJlYWN0IiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlIiwiQ2hvcmVzQ29sdW1uIiwiY2hvcmVzIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwibWFwIiwiX2lkIiwibmFtZSIsImRldGFpbHMiLCJjb21wbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards/ChoresColumn.js\n");

/***/ })

});