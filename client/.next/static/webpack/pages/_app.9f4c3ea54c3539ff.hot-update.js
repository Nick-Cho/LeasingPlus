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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // console.log(source, destination)\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        console.log(start == end);\n        if (start === end) {\n            var newChores = start.chores.splice(source.index, 1);\n            newChores.splice(destination.index, 0, start.chores[source.index]);\n            var newCol = {\n                name: start.name,\n                chores: newChores\n            };\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            console.log(_toConsumableArray(columns).concat([\n                newCol\n            ]));\n            setColumns(_toConsumableArray(columns).concat([\n                newCol\n            ]));\n            return null;\n        }\n        return null;\n    };\n    var handleDragEnd = function(result) {\n        //  console.log(result.source, result.destination)\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDbEMsR0FBSyxDQUF5QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JRLFVBQVUsQ0FBQ0MsY0FBYztJQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxRQUFxQixDQUFDO1lBQTNCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsV0FBVyxTQUFYQSxXQUFXO1FBQ3RDLEVBQW1DO1FBQ25DLEVBQXFDO1FBQ3JDLEVBQXdDO1FBQ3hDLEVBQUUsRUFBRUEsV0FBVyxLQUFLQyxTQUFTLElBQUlELFdBQVcsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFbEUsRUFBMkM7UUFDM0MsRUFBRSxFQUNBQSxXQUFXLENBQUNFLEtBQUssS0FBS0gsTUFBTSxDQUFDRyxLQUFLLElBQ2xDSCxNQUFNLENBQUNJLFdBQVcsS0FBS0gsV0FBVyxDQUFDRyxXQUFXLEVBRTlDLE1BQU0sQ0FBQyxJQUFJO1FBRWIsR0FBSyxDQUFDQyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFJLENBQUM7WUFBQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDSSxXQUFXLEtBQUtJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJO1FBQUMsQ0FBQztRQUNsRyxHQUFLLENBQUNDLEdBQUcsR0FBR2QsT0FBTyxDQUFDVSxNQUFNLENBQUMsUUFBUSxDQUFQQyxNQUFNLEVBQUcsQ0FBQztZQUFBLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxXQUFXLENBQUNHLFdBQVcsS0FBS0ksTUFBTSxDQUFDRCxNQUFNLENBQUNFLElBQUk7UUFBQyxDQUFDO1FBQ3BHRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxJQUFJSyxHQUFHO1FBQ3hCLEVBQUUsRUFBRUwsS0FBSyxLQUFLSyxHQUFHLEVBQUMsQ0FBQztZQUNqQixHQUFLLENBQUNHLFNBQVMsR0FBR1IsS0FBSyxDQUFDUyxNQUFNLENBQUNDLE1BQU0sQ0FBQ2YsTUFBTSxDQUFDRyxLQUFLLEVBQUUsQ0FBQztZQUNyRFUsU0FBUyxDQUFDRSxNQUFNLENBQUNkLFdBQVcsQ0FBQ0UsS0FBSyxFQUFFLENBQUMsRUFBRUUsS0FBSyxDQUFDUyxNQUFNLENBQUNkLE1BQU0sQ0FBQ0csS0FBSztZQUNoRSxHQUFLLENBQUNhLE1BQU0sR0FBQyxDQUFDO2dCQUNaUCxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ksSUFBSTtnQkFDaEJLLE1BQU0sRUFBRUQsU0FBUztZQUNuQixDQUFDO1lBQ0QsRUFBZ0M7WUFDaEMsRUFBc0Q7WUFDdERGLE9BQU8sQ0FBQ0MsR0FBRyxvQkFBS2hCLE9BQU8sU0FBWCxDQUFDO2dCQUFXb0IsTUFBTTtZQUFBLENBQUM7WUFDL0JuQixVQUFVLG9CQUFLRCxPQUFPLFNBQVgsQ0FBQztnQkFBWW9CLE1BQU07WUFBQSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJO1FBQ1gsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztJQUVELEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVEsQ0FBUEMsTUFBTSxFQUFHLENBQUM7UUFDL0IsRUFBa0Q7UUFDbEQsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUCxNQUFNO1FBQy9CLEdBQUssQ0FBbUJLLEdBQW9DLGtCQUFwQ0EsS0FBSyxDQUFDSixNQUFNLENBQUNHLE1BQU0sQ0FBQ2xCLE1BQU0sQ0FBQ0csS0FBSyxFQUFFLENBQUMsT0FBcERtQixhQUFhLEdBQUlILEdBQW9DO1FBQzVEQSxLQUFLLENBQUNKLE1BQU0sQ0FBQ0csTUFBTSxDQUFDakIsV0FBVyxDQUFDRSxLQUFLLEVBQUUsQ0FBQyxFQUFFbUIsYUFBYTtRQUN2REMsU0FBUyxDQUFDSixLQUFLO0lBQ2pCLENBQUM7SUFFRCxHQUFLLENBQUNyQixjQUFjLEdBQUcsQ0FBQztRQUN0QixDQUFDO1lBQ0NXLElBQUksRUFBRSxDQUFPO1lBQ2JLLE1BQU0sRUFBRSxDQUFDO2dCQUFBLENBQUM7b0JBQ1JVLEdBQUcsRUFBRSxDQUFVO29CQUNmQyxPQUFPLEVBQUUsQ0FBaUI7b0JBQzFCaEIsSUFBSSxFQUFFLENBQWM7b0JBQ3BCaUIsT0FBTyxFQUFFLENBQUU7b0JBQ1hDLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixDQUFDO2dCQUNELENBQUM7b0JBQ0NILEdBQUcsRUFBRSxDQUFRO29CQUNiQyxPQUFPLEVBQUUsQ0FBYTtvQkFDdEJoQixJQUFJLEVBQUUsQ0FBZ0I7b0JBQ3RCaUIsT0FBTyxFQUFFLENBQUU7b0JBQ1hDLFNBQVMsRUFBQyxJQUFJO2dCQUNoQixDQUFDO2dCQUNELENBQUM7b0JBQ0NILEdBQUcsRUFBQyxDQUFXO29CQUNmQyxPQUFPLEVBQUUsQ0FBYztvQkFDdkJoQixJQUFJLEVBQUMsQ0FBZ0I7b0JBQ3JCaUIsT0FBTyxFQUFFLENBQUU7b0JBQ1hDLFNBQVMsRUFBQyxLQUFLO2dCQUNqQixDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUM7UUFDRCxDQUFDO1lBQ0NsQixJQUFJLEVBQUUsQ0FBTTtZQUNaSyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUNELENBQUM7WUFDQ0wsSUFBSSxFQUFFLENBQU87WUFDYkssTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNaLENBQUM7UUFDRCxDQUFDO1lBQ0NMLElBQUksRUFBRSxDQUFLO1lBQ1hLLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztJQUNDLE1BQU0sNkVBQ0h2QixnRUFBZTtRQUFDUSxTQUFTLEVBQUVBLFNBQVM7OEZBQ2xDNkIsQ0FBRztZQUNGQyxLQUFLLEVBQUUsQ0FBQztnQkFDTkMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZDLG1CQUFtQixFQUFFLENBQWE7Z0JBQ2xDQyxNQUFNLEVBQUUsQ0FBVztnQkFDbkJDLEtBQUssRUFBRSxDQUFLO2dCQUNaQyxHQUFHLEVBQUUsQ0FBSztZQUNaLENBQUM7c0JBRUF0QyxPQUFPLENBQUN1QyxHQUFHLENBQUMsUUFBUSxDQUFQNUIsTUFBTSxFQUFFSixLQUFLLEVBQUcsQ0FBQztnQkFDN0IsTUFBTSw2RUFDTHlCLENBQUc7MEdBQ0RsQyxxREFBWTt3QkFBQ2EsTUFBTSxFQUFJQSxNQUFNO3dCQUFFSixLQUFLLEVBQUlBLEtBQUs7Ozs7Ozs7Ozs7O1lBRS9DLENBQUM7Ozs7Ozs7Ozs7O0FBNkJaLENBQUM7R0FqSXVCUixNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DaG9yZXNMaXN0LmpzP2I2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmltcG9ydCBDaG9yZXNDb2x1bW4gZnJvbSAnLi9DaG9yZXNDb2x1bW4nXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob3JlcygpIHtcclxuY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDb2x1bW5zKGV4YW1wbGVDb2x1bW5zKVxyXG59LFtdKVxyXG5jb25zdCBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxyXG4gIC8vIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQgfHwgZGVzdGluYXRpb24gPT09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICBpZiAoXHJcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4ICYmXHJcbiAgICBzb3VyY2UuZHJvcHBhYmxlSWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXHJcbiAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICBcclxuICBjb25zdCBzdGFydCA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT4ge3JldHVybiBTdHJpbmcoc291cmNlLmRyb3BwYWJsZUlkKSA9PSBTdHJpbmcoY29sdW1uLm5hbWUpfSlcclxuICBjb25zdCBlbmQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKT0+e3JldHVybiBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG4gIGNvbnNvbGUubG9nKHN0YXJ0ID09IGVuZClcclxuICBpZiAoc3RhcnQgPT09IGVuZCl7XHJcbiAgICBjb25zdCBuZXdDaG9yZXMgPSBzdGFydC5jaG9yZXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7ICBcclxuICAgIG5ld0Nob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLHN0YXJ0LmNob3Jlc1tzb3VyY2UuaW5kZXhdKVxyXG4gICAgY29uc3QgbmV3Q29sPXtcclxuICAgICAgbmFtZTogc3RhcnQubmFtZSwgXHJcbiAgICAgIGNob3JlczogbmV3Q2hvcmVzLFxyXG4gICAgfVxyXG4gICAgLy8gTW92ZSB0aGUgaXRlbSB3aXRoaW4gdGhlIGxpc3RcclxuICAgIC8vIFN0YXJ0IGJ5IG1ha2luZyBhIG5ldyBsaXN0IHdpdGhvdXQgdGhlIGRyYWdnZWQgaXRlbVxyXG4gICAgY29uc29sZS5sb2coWy4uLmNvbHVtbnMsbmV3Q29sXSlcclxuICAgIHNldENvbHVtbnMoWy4uLmNvbHVtbnMsIG5ld0NvbF0pO1xyXG4gICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpPT57XHJcbiAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5zb3VyY2UsIHJlc3VsdC5kZXN0aW5hdGlvbilcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oY2hvcmVzKTtcclxuICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCAscmVvcmRlcmVkSXRlbSk7XHJcbiAgc2V0Q2hvcmVzKGl0ZW1zKTtcclxufVxyXG5cclxuY29uc3QgZXhhbXBsZUNvbHVtbnMgPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiSnVsaWVcIixcclxuICAgIGNob3JlczogW3tcclxuICAgICAgX2lkOiBcIjEyMzIxYXNkXCIsXHJcbiAgICAgIHVzZXJfaWQ6IFwiMjM0MjM1MWFkMTIzYXNkXCIsXHJcbiAgICAgIG5hbWU6IFwiQ2xlYW4gRGlzaGVzXCIsXHJcbiAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IFwiMTIzMTIzXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2QyYXNkMlwiLFxyXG4gICAgICAgIG5hbWU6IFwiVGFrZSBvdXQgdHJhc2hcIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDp0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOlwiMWFzZGYzYXNmXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2Q4YXNkODJcIixcclxuICAgICAgICBuYW1lOlwiQ2xlYW4gV2FzaHJvb21cIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDpmYWxzZSwgIFxyXG4gICAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOaWNrXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhcmFoXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJvblwiLFxyXG4gICAgY2hvcmVzOltdXHJcbiAgfVxyXG5dXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyIDFmcicsXHJcbiAgICAgICAgICBtYXJnaW46ICcyNHB4IGF1dG8nLFxyXG4gICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgZ2FwOiAnOHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hvcmVzQ29sdW1uIGNvbHVtbiA9IHtjb2x1bW59IGluZGV4ID0ge2luZGV4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgIC8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgIC8vICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImNob3Jlc1wiPlxyXG4gICAgLy8gICAgIHsocHJvdmlkZWQpPT5cclxuICAgIC8vICAgICAgICg8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSBjbGFzc05hbWUgPSBcImNob3JlcyBsaXN0LWdyb3VwXCIgcmVmID0ge3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB7Y2hvcmVzLm1hcCgoe19pZCwgdXNlcl9pZCwgbmFtZSwgZGV0YWlscyxjb21wbGV0ZWR9LCBpbmRleCk9PntcclxuICAgIC8vICAgICAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICAgIDxEcmFnZ2FibGUga2V5ID0ge19pZH0gZHJhZ2dhYmxlSWQ9e19pZH0gaW5kZXggPXtpbmRleH0+XHJcbiAgICAvLyAgICAgICAgICAgICB7KHByb3ZpZGVkKT0+KCAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgIC8vICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKX1cclxuICAgIC8vICAgPC9Ecm9wcGFibGU+XHJcbiAgICAvLyA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNDb2x1bW4iLCJDaG9yZXMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImV4YW1wbGVDb2x1bW5zIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJ1bmRlZmluZWQiLCJpbmRleCIsImRyb3BwYWJsZUlkIiwic3RhcnQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJTdHJpbmciLCJuYW1lIiwiZW5kIiwiY29uc29sZSIsImxvZyIsIm5ld0Nob3JlcyIsImNob3JlcyIsInNwbGljZSIsIm5ld0NvbCIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlb3JkZXJlZEl0ZW0iLCJzZXRDaG9yZXMiLCJfaWQiLCJ1c2VyX2lkIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});