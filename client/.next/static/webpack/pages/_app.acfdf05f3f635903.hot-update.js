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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction ChoresColumn(param1) {\n    var column = param1.column;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n        droppableId: index,\n        children: function(provided1) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread({\n                style: {\n                    display: 'flex',\n                    flexDirection: 'column'\n                }\n            }, provided1.droppableProps, {\n                ref: provided1.innerRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: column.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    column.chores.map(function(param, index) {\n                        var _id = param._id, name = param.name, details = param.details, completed = param.completed;\n                        var _this1 = _this;\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                            draggableId: name,\n                            index: index,\n                            children: function(provided) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread({\n                                    ref: provided.innerRef\n                                }, provided.draggableProps, provided.dragHandleProps, {\n                                    children: name\n                                }), void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, _this1);\n                            }\n                        }, _id, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this));\n                    }),\n                    provided1.placeholder\n                ]\n            }), void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresColumn.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n_c = ChoresColumn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChoresColumn);\nvar _c;\n$RefreshReg$(_c, \"ChoresColumn\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0NvbHVtbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUMvQ0csWUFBWSxDQUFDLE1BQVEsRUFBRSxDQUFDO1FBQVZDLE1BQU0sR0FBUCxNQUFRLENBQVBBLE1BQU07O0lBQzNCLE1BQU0sNkVBQ0hILDBEQUFTO1FBQUNJLFdBQVcsRUFBSUMsS0FBSztrQkFDNUJDLFFBQVEsQ0FBUkEsU0FBUTswQkFDVCxNQUNOLENBQUMsOERBRE1DLENBQUc7Z0JBQ0ZDLEtBQUssRUFBRSxDQUFDO29CQUNOQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsYUFBYSxFQUFFLENBQVE7Z0JBQ3pCLENBQUM7ZUFDR0osU0FBUSxDQUFDSyxjQUFjO2dCQUMzQkMsR0FBRyxFQUFJTixTQUFRLENBQUNPLFFBQVE7O2dHQUV2QkMsQ0FBRTtrQ0FBRVgsTUFBTSxDQUFDWSxJQUFJOzs7Ozs7b0JBQ2ZaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDQyxHQUFHLENBQUMsUUFBUSxRQUF5QlosS0FBSyxFQUFHLENBQUM7NEJBQXhDYSxHQUFHLFNBQUhBLEdBQUcsRUFBQ0gsSUFBSSxTQUFKQSxJQUFJLEVBQUVJLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O3dCQUMvQyxNQUFNLDZFQUNIbkIsMERBQVM7NEJBQWFvQixXQUFXLEVBQUlOLElBQUk7NEJBQUVWLEtBQUssRUFBSUEsS0FBSztzQ0FDdkRDLFFBQVEsQ0FBUkEsUUFBUTs4Q0FDVCxNQUNkLENBQUMsOERBRGNDLENBQUc7b0NBQ0pLLEdBQUcsRUFBR04sUUFBUSxDQUFDTyxRQUFRO21DQUNuQlAsUUFBUSxDQUFDZ0IsY0FBYyxFQUN2QmhCLFFBQVEsQ0FBQ2lCLGVBQWU7OENBRXpCUixJQUFJOzs7Ozs7OzJCQVBTRyxHQUFHOzs7OztvQkFXekIsQ0FBQztvQkFDQVosU0FBUSxDQUFDa0IsV0FBVzs7Ozs7Ozs7Ozs7OztBQUk3QixDQUFDO0tBL0JRdEIsWUFBWTtBQWlDckIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DaG9yZXNDb2x1bW4uanM/MmM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RHJvcHBhYmxlLCBEcmFnZ2FibGV9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCJcclxuZnVuY3Rpb24gQ2hvcmVzQ29sdW1uKHtjb2x1bW59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQgPSB7aW5kZXh9PlxyXG4gICAgICB7cHJvdmlkZWQgPT4gKCBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgIHJlZiA9IHtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMj57Y29sdW1uLm5hbWV9PC9oMj5cclxuICAgICAgICB7Y29sdW1uLmNob3Jlcy5tYXAoKHtfaWQsbmFtZSwgZGV0YWlscywgY29tcGxldGVkfSwgaW5kZXgpPT57XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RHJhZ2dhYmxlIGtleSA9IHtfaWR9IGRyYWdnYWJsZUlkID0ge25hbWV9IGluZGV4ID0ge2luZGV4fT5cclxuICAgICAgICAgICAgICB7cHJvdmlkZWQgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWYgPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgIDwvZGl2Pil9XHJcbiAgICA8L0Ryb3BwYWJsZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob3Jlc0NvbHVtbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZSIsIkNob3Jlc0NvbHVtbiIsImNvbHVtbiIsImRyb3BwYWJsZUlkIiwiaW5kZXgiLCJwcm92aWRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiaDIiLCJuYW1lIiwiY2hvcmVzIiwibWFwIiwiX2lkIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresColumn.js\n");

/***/ })

});