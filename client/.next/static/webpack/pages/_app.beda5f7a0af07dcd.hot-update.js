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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        console.log(source, destination);\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns[source.droppableId];\n        var end = columns[destination.droppableId];\n        console.log(start, end);\n        // if (start === end){\n        //   const newChores = start.chores.splice(source.index, 1);  \n        //   newChores.splice(destination.index, 0 ,start.chores[source.index])\n        //   const newCol={\n        //     name: start.name, \n        //     chores: newChores,\n        //   }\n        //   // Move the item within the list\n        //   // Start by making a new list without the dragged item\n        //   setColumns(...columns, newCol);\n        //   return null\n        //   }\n        return null;\n    };\n    var handleDragEnd = function(result) {\n        //  console.log(result.source, result.destination)\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7b0JBQ3ZCRixJQUFJLEVBQUMsQ0FBZ0I7b0JBQ3JCRyxPQUFPLEVBQUUsQ0FBRTtvQkFDWEMsU0FBUyxFQUFDLEtBQUs7Z0JBQ2pCLENBQUM7WUFBQSxDQUFDO1FBQ04sQ0FBQztRQUNELENBQUM7WUFDQ0osSUFBSSxFQUFFLENBQU07WUFDWkosTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNaLENBQUM7UUFDRCxDQUFDO1lBQ0NJLElBQUksRUFBRSxDQUFPO1lBQ2JKLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDWixDQUFDO1FBQ0QsQ0FBQztZQUNDSSxJQUFJLEVBQUUsQ0FBSztZQUNYSixNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNILENBQUM7SUFDQyxNQUFNLDZFQUNIdkIsZ0VBQWU7UUFBQ1EsU0FBUyxFQUFFQSxTQUFTOzhGQUNsQ3dCLENBQUc7WUFDRkMsS0FBSyxFQUFFLENBQUM7Z0JBQ05DLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxtQkFBbUIsRUFBRSxDQUFhO2dCQUNsQ0MsTUFBTSxFQUFFLENBQVc7Z0JBQ25CQyxLQUFLLEVBQUUsQ0FBSztnQkFDWkMsR0FBRyxFQUFFLENBQUs7WUFDWixDQUFDO3NCQUVBakMsT0FBTyxDQUFDa0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFHLENBQUM7Z0JBQ3RCLE1BQU0sNkVBQ0xSLENBQUc7MEdBQ0Q3QixxREFBWTt3QkFBQ3FDLE1BQU0sRUFBSUEsTUFBTTs7Ozs7Ozs7Ozs7WUFFL0IsQ0FBQzs7Ozs7Ozs7Ozs7QUE2QlosQ0FBQztHQWpJdUJwQyxNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DaG9yZXNMaXN0LmpzP2I2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmltcG9ydCBDaG9yZXNDb2x1bW4gZnJvbSAnLi9DaG9yZXNDb2x1bW4nXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob3JlcygpIHtcclxuY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDb2x1bW5zKGV4YW1wbGVDb2x1bW5zKVxyXG59LFtdKVxyXG5jb25zdCBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxyXG4gIC8vIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQgfHwgZGVzdGluYXRpb24gPT09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICBpZiAoXHJcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4ICYmXHJcbiAgICBzb3VyY2UuZHJvcHBhYmxlSWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXHJcbiAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICBcclxuICBjb25zdCBzdGFydCA9IGNvbHVtbnNbc291cmNlLmRyb3BwYWJsZUlkXVxyXG4gIGNvbnN0IGVuZCA9IGNvbHVtbnNbZGVzdGluYXRpb24uZHJvcHBhYmxlSWRdXHJcbiAgY29uc29sZS5sb2coc3RhcnQsIGVuZClcclxuICAvLyBpZiAoc3RhcnQgPT09IGVuZCl7XHJcbiAgLy8gICBjb25zdCBuZXdDaG9yZXMgPSBzdGFydC5jaG9yZXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7ICBcclxuICAvLyAgIG5ld0Nob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLHN0YXJ0LmNob3Jlc1tzb3VyY2UuaW5kZXhdKVxyXG4gIC8vICAgY29uc3QgbmV3Q29sPXtcclxuICAvLyAgICAgbmFtZTogc3RhcnQubmFtZSwgXHJcbiAgLy8gICAgIGNob3JlczogbmV3Q2hvcmVzLFxyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gTW92ZSB0aGUgaXRlbSB3aXRoaW4gdGhlIGxpc3RcclxuICAvLyAgIC8vIFN0YXJ0IGJ5IG1ha2luZyBhIG5ldyBsaXN0IHdpdGhvdXQgdGhlIGRyYWdnZWQgaXRlbVxyXG4gICAgXHJcbiAgLy8gICBzZXRDb2x1bW5zKC4uLmNvbHVtbnMsIG5ld0NvbCk7XHJcbiAgLy8gICByZXR1cm4gbnVsbFxyXG4gIC8vICAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCk9PntcclxuICAvLyAgY29uc29sZS5sb2cocmVzdWx0LnNvdXJjZSwgcmVzdWx0LmRlc3RpbmF0aW9uKVxyXG4gIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjaG9yZXMpO1xyXG4gIGNvbnN0IFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwICxyZW9yZGVyZWRJdGVtKTtcclxuICBzZXRDaG9yZXMoaXRlbXMpO1xyXG59XHJcblxyXG5jb25zdCBleGFtcGxlQ29sdW1ucyA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJKdWxpZVwiLFxyXG4gICAgY2hvcmVzOiBbe1xyXG4gICAgICBfaWQ6IFwiMTIzMjFhc2RcIixcclxuICAgICAgdXNlcl9pZDogXCIyMzQyMzUxYWQxMjNhc2RcIixcclxuICAgICAgbmFtZTogXCJDbGVhbiBEaXNoZXNcIixcclxuICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogXCIxMjMxMjNcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDJhc2QyXCIsXHJcbiAgICAgICAgbmFtZTogXCJUYWtlIG91dCB0cmFzaFwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOnRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6XCIxYXNkZjNhc2ZcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDhhc2Q4MlwiLFxyXG4gICAgICAgIG5hbWU6XCJDbGVhbiBXYXNocm9vbVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOmZhbHNlLCAgXHJcbiAgICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5pY2tcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2FyYWhcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUm9uXCIsXHJcbiAgICBjaG9yZXM6W11cclxuICB9XHJcbl1cclxuICByZXR1cm4gKFxyXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcclxuICAgICAgICAgIG1hcmdpbjogJzI0cHggYXV0bycsXHJcbiAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKT0+e1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENob3Jlc0NvbHVtbiBjb2x1bW4gPSB7Y29sdW1ufS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgIC8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgIC8vICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImNob3Jlc1wiPlxyXG4gICAgLy8gICAgIHsocHJvdmlkZWQpPT5cclxuICAgIC8vICAgICAgICg8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSBjbGFzc05hbWUgPSBcImNob3JlcyBsaXN0LWdyb3VwXCIgcmVmID0ge3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB7Y2hvcmVzLm1hcCgoe19pZCwgdXNlcl9pZCwgbmFtZSwgZGV0YWlscyxjb21wbGV0ZWR9LCBpbmRleCk9PntcclxuICAgIC8vICAgICAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICAgIDxEcmFnZ2FibGUga2V5ID0ge19pZH0gZHJhZ2dhYmxlSWQ9e19pZH0gaW5kZXggPXtpbmRleH0+XHJcbiAgICAvLyAgICAgICAgICAgICB7KHByb3ZpZGVkKT0+KCAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgIC8vICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKX1cclxuICAgIC8vICAgPC9Ecm9wcGFibGU+XHJcbiAgICAvLyA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNDb2x1bW4iLCJDaG9yZXMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImV4YW1wbGVDb2x1bW5zIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJkcm9wcGFibGVJZCIsInN0YXJ0IiwiZW5kIiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hvcmVzIiwic3BsaWNlIiwicmVvcmRlcmVkSXRlbSIsInNldENob3JlcyIsIm5hbWUiLCJfaWQiLCJ1c2VyX2lkIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCIsIm1hcCIsImNvbHVtbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});