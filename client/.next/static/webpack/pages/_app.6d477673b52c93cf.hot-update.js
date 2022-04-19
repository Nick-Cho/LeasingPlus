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

/***/ "./components/cards/ChoresList.js":
/*!****************************************!*\
  !*** ./components/cards/ChoresList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // console.log(source, destination)\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        if (JSON.stringify(start) === JSON.stringify(end)) {\n            var chores = Array.from(start[0].chores);\n            var ref = _slicedToArray(chores.splice(source.index, 1), 1), newChore = ref[0];\n            chores.splice(destination.index, 0, newChore);\n            console.log(chores);\n            var newCol = {\n                name: start[0].name,\n                chores: chores,\n                user_id: start[0].user_id,\n                _id: start[0]._id,\n                details: start[0]._id,\n                completed: start[0].completed\n            };\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            columns[destination.index] = newCol;\n            return null;\n        }\n        return null;\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDbEMsR0FBSyxDQUF5QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JRLFVBQVUsQ0FBQ0MsY0FBYztJQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxRQUFxQixDQUFDO1lBQTNCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsV0FBVyxTQUFYQSxXQUFXO1FBQ3RDLEVBQW1DO1FBQ25DLEVBQXFDO1FBQ3JDLEVBQXdDO1FBQ3hDLEVBQUUsRUFBRUEsV0FBVyxLQUFLQyxTQUFTLElBQUlELFdBQVcsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFbEUsRUFBMkM7UUFDM0MsRUFBRSxFQUNBQSxXQUFXLENBQUNFLEtBQUssS0FBS0gsTUFBTSxDQUFDRyxLQUFLLElBQ2xDSCxNQUFNLENBQUNJLFdBQVcsS0FBS0gsV0FBVyxDQUFDRyxXQUFXLEVBRTlDLE1BQU0sQ0FBQyxJQUFJO1FBRWIsR0FBSyxDQUFDQyxLQUFLLEdBQUlULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFJLENBQUM7WUFBQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDSSxXQUFXLEtBQUtJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJO1FBQUMsQ0FBQztRQUNuRyxHQUFLLENBQUNDLEdBQUcsR0FBR2QsT0FBTyxDQUFDVSxNQUFNLENBQUMsUUFB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SztnQkFDWkMsR0FBRyxFQUFFLENBQUs7WUFDWixDQUFDO3NCQUVBbkMsT0FBTyxDQUFDb0MsR0FBRyxDQUFDLFFBQVEsQ0FBUHpCLE1BQU0sRUFBRUosS0FBSyxFQUFHLENBQUM7Z0JBQzdCLE1BQU0sNkVBQ0xzQixDQUFHOzBHQUNEL0IscURBQVk7d0JBQUNhLE1BQU0sRUFBSUEsTUFBTTt3QkFBRUosS0FBSyxFQUFJQSxLQUFLOzs7Ozs7Ozs7OztZQUUvQyxDQUFDOzs7Ozs7Ozs7OztBQTZCWixDQUFDO0dBbkl1QlIsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmVzTGlzdC5qcz9iNmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIlxyXG5pbXBvcnQgQ2hvcmVzQ29sdW1uIGZyb20gJy4vQ2hvcmVzQ29sdW1uJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9yZXMoKSB7XHJcbmNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldENvbHVtbnMoZXhhbXBsZUNvbHVtbnMpXHJcbn0sW10pXHJcbmNvbnN0IG9uRHJhZ0VuZCA9ICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHNvdXJjZSwgZGVzdGluYXRpb24pXHJcbiAgLy8gY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvbHVtbnMpO1xyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cclxuICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHdlJ3JlIGFjdHVhbGx5IG1vdmluZyB0aGUgaXRlbVxyXG4gIGlmIChcclxuICAgIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXggJiZcclxuICAgIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWRcclxuICApXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIFxyXG4gIGNvbnN0IHN0YXJ0ID0gIGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT4ge3JldHVybiBTdHJpbmcoc291cmNlLmRyb3BwYWJsZUlkKSA9PSBTdHJpbmcoY29sdW1uLm5hbWUpfSlcclxuICBjb25zdCBlbmQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKT0+e3JldHVybiBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG4gIFxyXG5cclxuICBpZiAoSlNPTi5zdHJpbmdpZnkoc3RhcnQpID09PSBKU09OLnN0cmluZ2lmeShlbmQpKXtcclxuICAgIFxyXG4gICAgY29uc3QgY2hvcmVzID0gQXJyYXkuZnJvbShzdGFydFswXS5jaG9yZXMpXHJcbiAgICBjb25zdCBbbmV3Q2hvcmVdID0gY2hvcmVzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpOyAgXHJcbiAgICBcclxuICAgIGNob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLCBuZXdDaG9yZSlcclxuICAgIGNvbnNvbGUubG9nKGNob3Jlcyk7XHJcbiAgICBjb25zdCBuZXdDb2w9e1xyXG4gICAgICBuYW1lOiBzdGFydFswXS5uYW1lLCBcclxuICAgICAgY2hvcmVzOiBjaG9yZXMsXHJcbiAgICAgIHVzZXJfaWQ6IHN0YXJ0WzBdLnVzZXJfaWQsXHJcbiAgICAgIF9pZDogc3RhcnRbMF0uX2lkLFxyXG4gICAgICBkZXRhaWxzOiBzdGFydFswXS5faWQsXHJcbiAgICAgIGNvbXBsZXRlZDogc3RhcnRbMF0uY29tcGxldGVkXHJcbiAgICB9XHJcbiAgICAvLyBNb3ZlIHRoZSBpdGVtIHdpdGhpbiB0aGUgbGlzdFxyXG4gICAgLy8gU3RhcnQgYnkgbWFraW5nIGEgbmV3IGxpc3Qgd2l0aG91dCB0aGUgZHJhZ2dlZCBpdGVtXHJcbiAgICBjb2x1bW5zW2Rlc3RpbmF0aW9uLmluZGV4XSA9IG5ld0NvbFxyXG4gICAgXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuY29uc3QgZXhhbXBsZUNvbHVtbnMgPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiSnVsaWVcIixcclxuICAgIGNob3JlczogW3tcclxuICAgICAgX2lkOiBcIjEyMzIxYXNkXCIsXHJcbiAgICAgIHVzZXJfaWQ6IFwiMjM0MjM1MWFkMTIzYXNkXCIsXHJcbiAgICAgIG5hbWU6IFwiQ2xlYW4gRGlzaGVzXCIsXHJcbiAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IFwiMTIzMTIzXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2QyYXNkMlwiLFxyXG4gICAgICAgIG5hbWU6IFwiVGFrZSBvdXQgdHJhc2hcIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDp0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOlwiMWFzZGYzYXNmXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2Q4YXNkODJcIixcclxuICAgICAgICBuYW1lOlwiQ2xlYW4gV2FzaHJvb21cIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDpmYWxzZSwgIFxyXG4gICAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOaWNrXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhcmFoXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJvblwiLFxyXG4gICAgY2hvcmVzOltdXHJcbiAgfVxyXG5dXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyIDFmcicsXHJcbiAgICAgICAgICBtYXJnaW46ICcyNHB4IGF1dG8nLFxyXG4gICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgZ2FwOiAnOHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hvcmVzQ29sdW1uIGNvbHVtbiA9IHtjb2x1bW59IGluZGV4ID0ge2luZGV4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgIC8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgIC8vICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImNob3Jlc1wiPlxyXG4gICAgLy8gICAgIHsocHJvdmlkZWQpPT5cclxuICAgIC8vICAgICAgICg8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSBjbGFzc05hbWUgPSBcImNob3JlcyBsaXN0LWdyb3VwXCIgcmVmID0ge3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB7Y2hvcmVzLm1hcCgoe19pZCwgdXNlcl9pZCwgbmFtZSwgZGV0YWlscyxjb21wbGV0ZWR9LCBpbmRleCk9PntcclxuICAgIC8vICAgICAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICAgIDxEcmFnZ2FibGUga2V5ID0ge19pZH0gZHJhZ2dhYmxlSWQ9e19pZH0gaW5kZXggPXtpbmRleH0+XHJcbiAgICAvLyAgICAgICAgICAgICB7KHByb3ZpZGVkKT0+KCAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgIC8vICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKX1cclxuICAgIC8vICAgPC9Ecm9wcGFibGU+XHJcbiAgICAvLyA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNDb2x1bW4iLCJDaG9yZXMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImV4YW1wbGVDb2x1bW5zIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJ1bmRlZmluZWQiLCJpbmRleCIsImRyb3BwYWJsZUlkIiwic3RhcnQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJTdHJpbmciLCJuYW1lIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImNob3JlcyIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsIm5ld0Nob3JlIiwiY29uc29sZSIsImxvZyIsIm5ld0NvbCIsInVzZXJfaWQiLCJfaWQiLCJkZXRhaWxzIiwiY29tcGxldGVkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsIndpZHRoIiwiZ2FwIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});