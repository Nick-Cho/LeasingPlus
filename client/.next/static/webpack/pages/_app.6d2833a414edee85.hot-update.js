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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref[0], setColumns = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        console.log(source, destination);\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns[source.droppableId];\n        var end = columns[destination.droppableId];\n        console.log(start, end);\n        if (start === end) {\n            var newChores = start.chores.splice(source.index, 1);\n            newChores.splice(destination.index, 0, start.chores[source.index]);\n            var newCol = {\n                name: start.name,\n                chores: newChores\n            };\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            setColumns.apply(void 0, _toConsumableArray(columns).concat([\n                newCol\n            ]));\n            return null;\n        }\n        return null;\n    };\n    var handleDragEnd = function(result) {\n        console.log(result.source, result.destination);\n    // const items = Array.from(chores);\n    // const [reorderedItem] = items.splice(result.source.index, 1);\n    // items.splice(result.destination.index, 0 ,reorderedItem);\n    // setChores(items);\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: handleDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aG9yZXNMaXN0LmpzP2I2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmltcG9ydCBDaG9yZXNDb2x1bW4gZnJvbSAnLi9DaG9yZXNDb2x1bW4nXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob3JlcygpIHtcclxuY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDb2x1bW5zKGV4YW1wbGVDb2x1bW5zKVxyXG59LFtdKVxyXG5jb25zdCBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxyXG4gIC8vIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQgfHwgZGVzdGluYXRpb24gPT09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICBpZiAoXHJcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4ICYmXHJcbiAgICBzb3VyY2UuZHJvcHBhYmxlSWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXHJcbiAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICBcclxuICBjb25zdCBzdGFydCA9IGNvbHVtbnNbc291cmNlLmRyb3BwYWJsZUlkXVxyXG4gIGNvbnN0IGVuZCA9IGNvbHVtbnNbZGVzdGluYXRpb24uZHJvcHBhYmxlSWRdXHJcbiAgY29uc29sZS5sb2coc3RhcnQsIGVuZClcclxuICBpZiAoc3RhcnQgPT09IGVuZCl7XHJcbiAgICBjb25zdCBuZXdDaG9yZXMgPSBzdGFydC5jaG9yZXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7ICBcclxuICAgIG5ld0Nob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLHN0YXJ0LmNob3Jlc1tzb3VyY2UuaW5kZXhdKVxyXG4gICAgY29uc3QgbmV3Q29sPXtcclxuICAgICAgbmFtZTogc3RhcnQubmFtZSwgXHJcbiAgICAgIGNob3JlczogbmV3Q2hvcmVzLFxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSB0aGUgaXRlbSB3aXRoaW4gdGhlIGxpc3RcclxuICAgIC8vIFN0YXJ0IGJ5IG1ha2luZyBhIG5ldyBsaXN0IHdpdGhvdXQgdGhlIGRyYWdnZWQgaXRlbVxyXG4gICAgc2V0Q29sdW1ucyguLi5jb2x1bW5zLCBuZXdDb2wpO1xyXG4gICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpPT57XHJcbiAgIGNvbnNvbGUubG9nKHJlc3VsdC5zb3VyY2UsIHJlc3VsdC5kZXN0aW5hdGlvbilcclxuICAvLyBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oY2hvcmVzKTtcclxuICAvLyBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgLy8gaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCAscmVvcmRlcmVkSXRlbSk7XHJcbiAgLy8gc2V0Q2hvcmVzKGl0ZW1zKTtcclxufVxyXG5cclxuY29uc3QgZXhhbXBsZUNvbHVtbnMgPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiSnVsaWVcIixcclxuICAgIGNob3JlczogW3tcclxuICAgICAgX2lkOiBcIjEyMzIxYXNkXCIsXHJcbiAgICAgIHVzZXJfaWQ6IFwiMjM0MjM1MWFkMTIzYXNkXCIsXHJcbiAgICAgIG5hbWU6IFwiQ2xlYW4gRGlzaGVzXCIsXHJcbiAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IFwiMTIzMTIzXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2QyYXNkMlwiLFxyXG4gICAgICAgIG5hbWU6IFwiVGFrZSBvdXQgdHJhc2hcIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDp0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOlwiMWFzZGYzYXNmXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2Q4YXNkODJcIixcclxuICAgICAgICBuYW1lOlwiQ2xlYW4gV2FzaHJvb21cIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDpmYWxzZSwgIFxyXG4gICAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOaWNrXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhcmFoXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJvblwiLFxyXG4gICAgY2hvcmVzOltdXHJcbiAgfVxyXG5dXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnInLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMjRweCBhdXRvJyxcclxuICAgICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICAgIGdhcDogJzhweCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hvcmVzQ29sdW1uIGNvbHVtbiA9IHtjb2x1bW59Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgLy8gPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgLy8gICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiY2hvcmVzXCI+XHJcbiAgICAvLyAgICAgeyhwcm92aWRlZCk9PlxyXG4gICAgLy8gICAgICAgKDx1bCB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IGNsYXNzTmFtZSA9IFwiY2hvcmVzIGxpc3QtZ3JvdXBcIiByZWYgPSB7cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgIHtjaG9yZXMubWFwKCh7X2lkLCB1c2VyX2lkLCBuYW1lLCBkZXRhaWxzLGNvbXBsZXRlZH0sIGluZGV4KT0+e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4oXHJcbiAgICAvLyAgICAgICAgICAgPERyYWdnYWJsZSBrZXkgPSB7X2lkfSBkcmFnZ2FibGVJZD17X2lkfSBpbmRleCA9e2luZGV4fT5cclxuICAgIC8vICAgICAgICAgICAgIHsocHJvdmlkZWQpPT4oICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtXCIgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIDxoNT57bmFtZX08L2g1PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgPC9saT5cclxuICAgIC8vICAgICAgICAgICAgICAgKX1cclxuICAgIC8vICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgfSl9XHJcbiAgICAvLyAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAvLyAgICAgPC91bD5cclxuICAgIC8vICAgICApfVxyXG4gICAgLy8gICA8L0Ryb3BwYWJsZT5cclxuICAgIC8vIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZSIsIkNob3Jlc0NvbHVtbiIsIkNob3JlcyIsImNvbHVtbnMiLCJzZXRDb2x1bW5zIiwiZXhhbXBsZUNvbHVtbnMiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJpbmRleCIsImRyb3BwYWJsZUlkIiwic3RhcnQiLCJlbmQiLCJuZXdDaG9yZXMiLCJjaG9yZXMiLCJzcGxpY2UiLCJuZXdDb2wiLCJuYW1lIiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsIl9pZCIsInVzZXJfaWQiLCJkZXRhaWxzIiwiY29tcGxldGVkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsIndpZHRoIiwiZ2FwIiwibWFwIiwiY29sdW1uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});