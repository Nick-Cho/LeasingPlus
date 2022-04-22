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

/***/ "./components/cards/ChoresList.js":
/*!****************************************!*\
  !*** ./components/cards/ChoresList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores(param1) {\n    var chores1 = param1.chores;\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(chores1);\n    }, []);\n    //function to update the chores array when moved in the drag and drop\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        if (JSON.stringify(start) === JSON.stringify(end)) {\n            var chores = Array.from(start[0].chores);\n            var ref = _slicedToArray(chores.splice(source.index, 1), 1), newChore = ref[0];\n            chores.splice(destination.index, 0, newChore);\n            var newCol = {\n                name: start[0].name,\n                chores: chores\n            };\n            var newColumns = Array.from(columns);\n            newColumns[newColumns.findIndex(function(element) {\n                return String(element.name) == String(newCol.name);\n            })] = newCol;\n            setColumns(newColumns);\n        } else {\n            var newStartChores = start[0].chores.filter(function(chore) {\n                return String(chore.name) !== String(start[0].chores[source.index].name);\n            });\n            var newStartCol = {\n                name: start[0].name,\n                chores: newStartChores\n            };\n            var newEndChores = end[0].chores;\n            newEndChores.splice(destination.index, 0, start[0].chores[source.index]);\n            var newEndCol = {\n                name: end[0].name,\n                chores: newEndChores\n            };\n            var newColumns1 = Array.from(columns);\n            newColumns1[newColumns1.findIndex(function(element) {\n                return String(element.name) == String(newStartCol.name);\n            })] = newStartCol;\n            newColumns1[newColumns1.findIndex(function(element) {\n                return String(element.name) == String(newEndCol.name);\n            })] = newEndCol;\n            setColumns(newColumns1);\n        }\n        console.log(columns);\n        return null;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '2fr 2fr 2fr',\n                margin: '24px auto',\n                width: '90%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxLQUFLRCxNQUFNLENBQUNpQixTQUFTLENBQUNoQixJQUFJO1lBQUUsQ0FBQyxLQUFLZ0IsU0FBUztZQUNqSDNCLFVBQVUsQ0FBQ29CLFdBQVU7UUFDdkIsQ0FBQztRQUNEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQzlCLE9BQU87UUFDbkIsTUFBTSxDQUFDLElBQUk7SUFDYixDQUFDO0lBRUMsTUFBTSw2RUFDSFAsZ0VBQWU7UUFBQ1MsU0FBUyxFQUFFQSxTQUFTOzhGQUNsQzZCLENBQUc7WUFDRkMsS0FBSyxFQUFFLENBQUM7Z0JBQ05DLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxtQkFBbUIsRUFBRSxDQUFhO2dCQUNsQ0MsTUFBTSxFQUFFLENBQVc7Z0JBQ25CQyxLQUFLLEVBQUUsQ0FBSztnQkFDWkMsR0FBRyxFQUFFLENBQUs7WUFDWixDQUFDO3NCQUVBckMsT0FBTyxDQUFDc0MsR0FBRyxDQUFDLFFBQVEsQ0FBUDVCLE1BQU0sRUFBRUosS0FBSyxFQUFHLENBQUM7Z0JBQzdCLE1BQU0sNkVBQ0x5QixDQUFHOzBHQUNEbkMscURBQVk7d0JBQUNjLE1BQU0sRUFBSUEsTUFBTTt3QkFBRUosS0FBSyxFQUFJQSxLQUFLOzs7Ozs7Ozs7OztZQUUvQyxDQUFDOzs7Ozs7Ozs7OztBQU1aLENBQUM7R0E5RXVCUixNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DaG9yZXNMaXN0LmpzP2I2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmltcG9ydCBDaG9yZXNDb2x1bW4gZnJvbSAnLi9DaG9yZXNDb2x1bW4nXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9yZXMoe2Nob3Jlc30pIHtcclxuY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiAgc2V0Q29sdW1ucyhjaG9yZXMpXHJcbn0sW10pXHJcblxyXG4vL2Z1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY2hvcmVzIGFycmF5IHdoZW4gbW92ZWQgaW4gdGhlIGRyYWcgYW5kIGRyb3BcclxuY29uc3Qgb25EcmFnRW5kID0gKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KSA9PiB7XHJcbiAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSB2YWxpZCBkZXN0aW5hdGlvblxyXG4gIGlmIChkZXN0aW5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGRlc3RpbmF0aW9uID09PSBudWxsKSByZXR1cm4gbnVsbFxyXG5cclxuICAvLyBNYWtlIHN1cmUgd2UncmUgYWN0dWFsbHkgbW92aW5nIHRoZSBpdGVtXHJcbiAgaWYgKFxyXG4gICAgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCAmJlxyXG4gICAgc291cmNlLmRyb3BwYWJsZUlkID09PSBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZFxyXG4gIClcclxuICAgIHJldHVybiBudWxsXHJcbiAgXHJcbiAgY29uc3Qgc3RhcnQgPSAgY29sdW1ucy5maWx0ZXIoKGNvbHVtbik9PiB7cmV0dXJuIFN0cmluZyhzb3VyY2UuZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG4gIGNvbnN0IGVuZCA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT57cmV0dXJuIFN0cmluZyhkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCkgPT0gU3RyaW5nKGNvbHVtbi5uYW1lKX0pXHJcblxyXG4gIGlmIChKU09OLnN0cmluZ2lmeShzdGFydCkgPT09IEpTT04uc3RyaW5naWZ5KGVuZCkpe1xyXG4gICAgXHJcbiAgICBjb25zdCBjaG9yZXMgPSBBcnJheS5mcm9tKHN0YXJ0WzBdLmNob3JlcylcclxuICAgIGNvbnN0IFtuZXdDaG9yZV0gPSBjaG9yZXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7ICBcclxuICAgIGNob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLCBuZXdDaG9yZSk7XHJcbiAgICBjb25zdCBuZXdDb2w9e1xyXG4gICAgICBuYW1lOiBzdGFydFswXS5uYW1lLCBcclxuICAgICAgY2hvcmVzOiBjaG9yZXMsXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdDb2x1bW5zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAgIG5ld0NvbHVtbnNbbmV3Q29sdW1ucy5maW5kSW5kZXgoKGVsZW1lbnQpPT57cmV0dXJuKFN0cmluZyhlbGVtZW50Lm5hbWUpID09IFN0cmluZyhuZXdDb2wubmFtZSkpfSldID0gbmV3Q29sO1xyXG4gICAgc2V0Q29sdW1ucyhuZXdDb2x1bW5zKTtcclxuICB9IFxyXG4gIGVsc2V7XHJcbiAgICBjb25zdCBuZXdTdGFydENob3JlcyA9IHN0YXJ0WzBdLmNob3Jlcy5maWx0ZXIoKGNob3JlKT0+e3JldHVybiBTdHJpbmcoY2hvcmUubmFtZSkgIT09IFN0cmluZyhzdGFydFswXS5jaG9yZXNbc291cmNlLmluZGV4XS5uYW1lKX0pO1xyXG4gICAgY29uc3QgbmV3U3RhcnRDb2wgPSB7XHJcbiAgICAgIG5hbWU6IHN0YXJ0WzBdLm5hbWUsXHJcbiAgICAgIGNob3JlczogbmV3U3RhcnRDaG9yZXNcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0VuZENob3JlcyA9IGVuZFswXS5jaG9yZXM7XHJcbiAgICBuZXdFbmRDaG9yZXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwICxzdGFydFswXS5jaG9yZXNbc291cmNlLmluZGV4XSlcclxuICAgIGNvbnN0IG5ld0VuZENvbD0ge1xyXG4gICAgICBuYW1lOiBlbmRbMF0ubmFtZSxcclxuICAgICAgY2hvcmVzOiBuZXdFbmRDaG9yZXMsXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdDb2x1bW5zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAgIG5ld0NvbHVtbnNbbmV3Q29sdW1ucy5maW5kSW5kZXgoKGVsZW1lbnQpPT57cmV0dXJuKFN0cmluZyhlbGVtZW50Lm5hbWUpID09IFN0cmluZyhuZXdTdGFydENvbC5uYW1lKSl9KV0gPSBuZXdTdGFydENvbDtcclxuICAgIG5ld0NvbHVtbnNbbmV3Q29sdW1ucy5maW5kSW5kZXgoKGVsZW1lbnQpPT57cmV0dXJuKFN0cmluZyhlbGVtZW50Lm5hbWUpID09IFN0cmluZyhuZXdFbmRDb2wubmFtZSkpfSldID0gbmV3RW5kQ29sO1xyXG4gICAgc2V0Q29sdW1ucyhuZXdDb2x1bW5zKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coY29sdW1ucylcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzJmciAyZnIgMmZyJyxcclxuICAgICAgICAgIG1hcmdpbjogJzI0cHggYXV0bycsXHJcbiAgICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCk9PntcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaG9yZXNDb2x1bW4gY29sdW1uID0ge2NvbHVtbn0gaW5kZXggPSB7aW5kZXh9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNDb2x1bW4iLCJheGlvcyIsIkNob3JlcyIsImNob3JlcyIsImNvbHVtbnMiLCJzZXRDb2x1bW5zIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJ1bmRlZmluZWQiLCJpbmRleCIsImRyb3BwYWJsZUlkIiwic3RhcnQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJTdHJpbmciLCJuYW1lIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsIm5ld0Nob3JlIiwibmV3Q29sIiwibmV3Q29sdW1ucyIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJuZXdTdGFydENob3JlcyIsImNob3JlIiwibmV3U3RhcnRDb2wiLCJuZXdFbmRDaG9yZXMiLCJuZXdFbmRDb2wiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsIndpZHRoIiwiZ2FwIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});