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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // console.log(source, destination)\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        if (JSON.stringify(start) === JSON.stringify(end)) {\n            var chores = Array.from(start[0].chores);\n            var ref = _slicedToArray(chores.splice(source.index, 1), 1), newChore = ref[0];\n            chores.splice(destination.index, 0, newChore);\n            var newCol = {\n                name: start[0].name,\n                chores: chores\n            };\n            // console.log(newCol)\n            var newColumns = Array.from(columns);\n            // newColumns[newColumns.findIndex((element)=>{element.name == newCol.name})] = newCol;\n            console.log(String(newCol.name));\n            console.log(newColumns.findIndex(function(element) {\n                return String(element.name) == String(newCol.name);\n            }));\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            setColumns(newColumns);\n            return null;\n        }\n        return null;\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDbEMsR0FBSyxDQUF5QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JRLFVBQVUsQ0FBQ0MsY0FBYztJQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxRQUFxQixDQUFDO1lBQTNCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsV0FBVyxTQUFYQSxXQUFXO1FBQ3RDLEVBQW1DO1FBQ25DLEVBQXFDO1FBQ3JDLEVBQXdDO1FBQ3hDLEVBQUUsRUFBRUEsV0FBVyxLQUFLQyxTQUFTLElBQUlELFdBQVcsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFbEUsRUFBMkM7UUFDM0MsRUFBRSxFQUNBQSxXQUFXLENBQUNFLEtBQUssS0FBS0gsTUFBTSxDQUFDRyxLQUFLLElBQ2xDSCxNQUFNLENBQUNJLFdBQVcsS0FBS0gsV0FBVyxDQUFDRyxXQUFXLEVBRTlDLE1BQU0sQ0FBQyxJQUFJO1FBRWIsR0FBSyxDQUFDQyxLQUFLLEdBQUlULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFJLENBQUM7WUFBQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDSSxXQUFXLEtBQUtJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJO1FBQUMsQ0FBQztRQUNuRyxHQUFLLENBQUNDLEdBQUcsR0FBR2QsT0FBTyxDQUFDVSxNQUFNLENBQUMsUUFB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QyxtQkFBbUIsRUFBRSxDQUFhO2dCQUNsQ0MsTUFBTSxFQUFFLENBQVc7Z0JBQ25CQyxLQUFLLEVBQUUsQ0FBSztnQkFDWkMsR0FBRyxFQUFFLENBQUs7WUFDWixDQUFDO3NCQUVBdEMsT0FBTyxDQUFDdUMsR0FBRyxDQUFDLFFBQVEsQ0FBUDVCLE1BQU0sRUFBRUosS0FBSyxFQUFHLENBQUM7Z0JBQzdCLE1BQU0sNkVBQ0x5QixDQUFHOzBHQUNEbEMscURBQVk7d0JBQUNhLE1BQU0sRUFBSUEsTUFBTTt3QkFBRUosS0FBSyxFQUFJQSxLQUFLOzs7Ozs7Ozs7OztZQUUvQyxDQUFDOzs7Ozs7Ozs7OztBQTZCWixDQUFDO0dBbEl1QlIsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmVzTGlzdC5qcz9iNmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIlxyXG5pbXBvcnQgQ2hvcmVzQ29sdW1uIGZyb20gJy4vQ2hvcmVzQ29sdW1uJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9yZXMoKSB7XHJcbmNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldENvbHVtbnMoZXhhbXBsZUNvbHVtbnMpXHJcbn0sW10pXHJcbmNvbnN0IG9uRHJhZ0VuZCA9ICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHNvdXJjZSwgZGVzdGluYXRpb24pXHJcbiAgLy8gY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvbHVtbnMpO1xyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cclxuICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHdlJ3JlIGFjdHVhbGx5IG1vdmluZyB0aGUgaXRlbVxyXG4gIGlmIChcclxuICAgIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXggJiZcclxuICAgIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWRcclxuICApXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIFxyXG4gIGNvbnN0IHN0YXJ0ID0gIGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT4ge3JldHVybiBTdHJpbmcoc291cmNlLmRyb3BwYWJsZUlkKSA9PSBTdHJpbmcoY29sdW1uLm5hbWUpfSlcclxuICBjb25zdCBlbmQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKT0+e3JldHVybiBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG5cclxuICBpZiAoSlNPTi5zdHJpbmdpZnkoc3RhcnQpID09PSBKU09OLnN0cmluZ2lmeShlbmQpKXtcclxuICAgIFxyXG4gICAgY29uc3QgY2hvcmVzID0gQXJyYXkuZnJvbShzdGFydFswXS5jaG9yZXMpXHJcbiAgICBjb25zdCBbbmV3Q2hvcmVdID0gY2hvcmVzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpOyAgXHJcbiAgICBcclxuICAgIGNob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLCBuZXdDaG9yZSk7XHJcbiAgICBjb25zdCBuZXdDb2w9e1xyXG4gICAgICBuYW1lOiBzdGFydFswXS5uYW1lLCBcclxuICAgICAgY2hvcmVzOiBjaG9yZXMsXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdDb2wpXHJcbiAgICBjb25zdCBuZXdDb2x1bW5zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAgIC8vIG5ld0NvbHVtbnNbbmV3Q29sdW1ucy5maW5kSW5kZXgoKGVsZW1lbnQpPT57ZWxlbWVudC5uYW1lID09IG5ld0NvbC5uYW1lfSldID0gbmV3Q29sO1xyXG4gICAgY29uc29sZS5sb2coU3RyaW5nKG5ld0NvbC5uYW1lKSlcclxuICAgIGNvbnNvbGUubG9nKG5ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e3JldHVybihTdHJpbmcoZWxlbWVudC5uYW1lKSA9PSBTdHJpbmcobmV3Q29sLm5hbWUpKX0pKVxyXG4gICAgLy8gTW92ZSB0aGUgaXRlbSB3aXRoaW4gdGhlIGxpc3RcclxuICAgIC8vIFN0YXJ0IGJ5IG1ha2luZyBhIG5ldyBsaXN0IHdpdGhvdXQgdGhlIGRyYWdnZWQgaXRlbVxyXG4gICAgc2V0Q29sdW1ucyhuZXdDb2x1bW5zKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbmNvbnN0IGV4YW1wbGVDb2x1bW5zID0gW1xyXG4gIHsgXHJcbiAgICBuYW1lOiBcIkp1bGllXCIsXHJcbiAgICBjaG9yZXM6IFt7XHJcbiAgICAgIF9pZDogXCIxMjMyMWFzZFwiLFxyXG4gICAgICB1c2VyX2lkOiBcIjIzNDIzNTFhZDEyM2FzZFwiLFxyXG4gICAgICBuYW1lOiBcIkNsZWFuIERpc2hlc1wiLFxyXG4gICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiBcIjEyMzEyM1wiLFxyXG4gICAgICAgIHVzZXJfaWQ6IFwiMTIzYXNkMmFzZDJcIixcclxuICAgICAgICBuYW1lOiBcIlRha2Ugb3V0IHRyYXNoXCIsXHJcbiAgICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgICBjb21wbGV0ZWQ6dHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIF9pZDpcIjFhc2RmM2FzZlwiLFxyXG4gICAgICAgIHVzZXJfaWQ6IFwiMTIzYXNkOGFzZDgyXCIsXHJcbiAgICAgICAgbmFtZTpcIkNsZWFuIFdhc2hyb29tXCIsXHJcbiAgICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgICBjb21wbGV0ZWQ6ZmFsc2UsICBcclxuICAgICAgfV1cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTmlja1wiLFxyXG4gICAgY2hvcmVzOiBbXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTYXJhaFwiLFxyXG4gICAgY2hvcmVzOiBbXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSb25cIixcclxuICAgIGNob3JlczpbXVxyXG4gIH1cclxuXVxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnInLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMjRweCBhdXRvJyxcclxuICAgICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICAgIGdhcDogJzhweCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KT0+e1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENob3Jlc0NvbHVtbiBjb2x1bW4gPSB7Y29sdW1ufSBpbmRleCA9IHtpbmRleH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAvLyA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAvLyAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJjaG9yZXNcIj5cclxuICAgIC8vICAgICB7KHByb3ZpZGVkKT0+XHJcbiAgICAvLyAgICAgICAoPHVsIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gY2xhc3NOYW1lID0gXCJjaG9yZXMgbGlzdC1ncm91cFwiIHJlZiA9IHtwcm92aWRlZC5pbm5lclJlZn0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAge2Nob3Jlcy5tYXAoKHtfaWQsIHVzZXJfaWQsIG5hbWUsIGRldGFpbHMsY29tcGxldGVkfSwgaW5kZXgpPT57XHJcbiAgICAvLyAgICAgICAgIHJldHVybihcclxuICAgIC8vICAgICAgICAgICA8RHJhZ2dhYmxlIGtleSA9IHtfaWR9IGRyYWdnYWJsZUlkPXtfaWR9IGluZGV4ID17aW5kZXh9PlxyXG4gICAgLy8gICAgICAgICAgICAgeyhwcm92aWRlZCk9PiggIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW1cIiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgPGg1PntuYW1lfTwvaDU+XHJcbiAgICAvLyAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgLy8gICAgICAgICAgICAgICApfVxyXG4gICAgLy8gICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyAgICAgICB9KX1cclxuICAgIC8vICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgIC8vICAgICA8L3VsPlxyXG4gICAgLy8gICAgICl9XHJcbiAgICAvLyAgIDwvRHJvcHBhYmxlPlxyXG4gICAgLy8gPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlIiwiQ2hvcmVzQ29sdW1uIiwiQ2hvcmVzIiwiY29sdW1ucyIsInNldENvbHVtbnMiLCJleGFtcGxlQ29sdW1ucyIsIm9uRHJhZ0VuZCIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJkcm9wcGFibGVJZCIsInN0YXJ0IiwiZmlsdGVyIiwiY29sdW1uIiwiU3RyaW5nIiwibmFtZSIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaG9yZXMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJuZXdDaG9yZSIsIm5ld0NvbCIsIm5ld0NvbHVtbnMiLCJjb25zb2xlIiwibG9nIiwiZmluZEluZGV4IiwiZWxlbWVudCIsIl9pZCIsInVzZXJfaWQiLCJkZXRhaWxzIiwiY29tcGxldGVkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsIndpZHRoIiwiZ2FwIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});