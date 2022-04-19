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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns[source.droppableId];\n        var end = columns[destination.droppableId];\n        if (start === end) {\n            var newChores = start.chores.splice(source.index, 1);\n            newChores.splice(destination.index, 0, start.chores[source.index]);\n            var newCol = {\n                name: start.name,\n                chores: newChores\n            };\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            setColumns.apply(void 0, _toConsumableArray(columns).concat([\n                newCol\n            ]));\n            return null;\n        }\n        return null;\n    };\n    var handleDragEnd = function(result) {\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Ozs7Ozs7Ozs7O0FBNkJaLENBQUM7R0E3SHVCcEMsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmVzTGlzdC5qcz9iNmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIlxyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tICcuL0Nob3Jlc0NvbHVtbidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvcmVzKCkge1xyXG5jb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldENvbHVtbnMoZXhhbXBsZUNvbHVtbnMpXHJcbn0sW10pXHJcbmNvbnN0IG9uRHJhZ0VuZCA9ICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xyXG4gIC8vIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQgfHwgZGVzdGluYXRpb24gPT09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICBpZiAoXHJcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4ICYmXHJcbiAgICBzb3VyY2UuZHJvcHBhYmxlSWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXHJcbiAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICBcclxuICBjb25zdCBzdGFydCA9IGNvbHVtbnNbc291cmNlLmRyb3BwYWJsZUlkXVxyXG4gIGNvbnN0IGVuZCA9IGNvbHVtbnNbZGVzdGluYXRpb24uZHJvcHBhYmxlSWRdXHJcbiAgaWYgKHN0YXJ0ID09PSBlbmQpe1xyXG4gICAgY29uc3QgbmV3Q2hvcmVzID0gc3RhcnQuY2hvcmVzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpOyAgXHJcbiAgICBuZXdDaG9yZXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwICxzdGFydC5jaG9yZXNbc291cmNlLmluZGV4XSlcclxuICAgIGNvbnN0IG5ld0NvbD17XHJcbiAgICAgIG5hbWU6IHN0YXJ0Lm5hbWUsIFxyXG4gICAgICBjaG9yZXM6IG5ld0Nob3JlcyxcclxuICAgIH1cclxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gd2l0aGluIHRoZSBsaXN0XHJcbiAgICAvLyBTdGFydCBieSBtYWtpbmcgYSBuZXcgbGlzdCB3aXRob3V0IHRoZSBkcmFnZ2VkIGl0ZW1cclxuICAgIHNldENvbHVtbnMoLi4uY29sdW1ucywgbmV3Q29sKTtcclxuICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZURyYWdFbmQgPSAocmVzdWx0KT0+e1xyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjaG9yZXMpO1xyXG4gIGNvbnN0IFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwICxyZW9yZGVyZWRJdGVtKTtcclxuICBzZXRDaG9yZXMoaXRlbXMpO1xyXG59XHJcblxyXG5jb25zdCBleGFtcGxlQ29sdW1ucyA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJKdWxpZVwiLFxyXG4gICAgY2hvcmVzOiBbe1xyXG4gICAgICBfaWQ6IFwiMTIzMjFhc2RcIixcclxuICAgICAgdXNlcl9pZDogXCIyMzQyMzUxYWQxMjNhc2RcIixcclxuICAgICAgbmFtZTogXCJDbGVhbiBEaXNoZXNcIixcclxuICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogXCIxMjMxMjNcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDJhc2QyXCIsXHJcbiAgICAgICAgbmFtZTogXCJUYWtlIG91dCB0cmFzaFwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOnRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6XCIxYXNkZjNhc2ZcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDhhc2Q4MlwiLFxyXG4gICAgICAgIG5hbWU6XCJDbGVhbiBXYXNocm9vbVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOmZhbHNlLCAgXHJcbiAgICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5pY2tcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2FyYWhcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUm9uXCIsXHJcbiAgICBjaG9yZXM6W11cclxuICB9XHJcbl1cclxuICByZXR1cm4gKFxyXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcclxuICAgICAgICAgIG1hcmdpbjogJzI0cHggYXV0bycsXHJcbiAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKT0+e1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENob3Jlc0xpc3QgY29sdW1uID0ge2NvbHVtbn0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAvLyA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAvLyAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJjaG9yZXNcIj5cclxuICAgIC8vICAgICB7KHByb3ZpZGVkKT0+XHJcbiAgICAvLyAgICAgICAoPHVsIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gY2xhc3NOYW1lID0gXCJjaG9yZXMgbGlzdC1ncm91cFwiIHJlZiA9IHtwcm92aWRlZC5pbm5lclJlZn0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAge2Nob3Jlcy5tYXAoKHtfaWQsIHVzZXJfaWQsIG5hbWUsIGRldGFpbHMsY29tcGxldGVkfSwgaW5kZXgpPT57XHJcbiAgICAvLyAgICAgICAgIHJldHVybihcclxuICAgIC8vICAgICAgICAgICA8RHJhZ2dhYmxlIGtleSA9IHtfaWR9IGRyYWdnYWJsZUlkPXtfaWR9IGluZGV4ID17aW5kZXh9PlxyXG4gICAgLy8gICAgICAgICAgICAgeyhwcm92aWRlZCk9PiggIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW1cIiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgPGg1PntuYW1lfTwvaDU+XHJcbiAgICAvLyAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgLy8gICAgICAgICAgICAgICApfVxyXG4gICAgLy8gICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyAgICAgICB9KX1cclxuICAgIC8vICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgIC8vICAgICA8L3VsPlxyXG4gICAgLy8gICAgICl9XHJcbiAgICAvLyAgIDwvRHJvcHBhYmxlPlxyXG4gICAgLy8gPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlIiwiQ2hvcmVzTGlzdCIsIkNob3JlcyIsImNvbHVtbnMiLCJzZXRDb2x1bW5zIiwiZXhhbXBsZUNvbHVtbnMiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInVuZGVmaW5lZCIsImluZGV4IiwiZHJvcHBhYmxlSWQiLCJzdGFydCIsImVuZCIsIm5ld0Nob3JlcyIsImNob3JlcyIsInNwbGljZSIsIm5ld0NvbCIsIm5hbWUiLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic2V0Q2hvcmVzIiwiX2lkIiwidXNlcl9pZCIsImRldGFpbHMiLCJjb21wbGV0ZWQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luIiwid2lkdGgiLCJnYXAiLCJtYXAiLCJjb2x1bW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});