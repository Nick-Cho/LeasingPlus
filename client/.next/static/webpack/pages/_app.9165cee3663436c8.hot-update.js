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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // console.log(source, destination)\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        console.log(start, start.name);\n    // if (JSON.stringify(start) === JSON.stringify(end)){\n    //   const chores = Array.from(start.chores)\n    //   const newChores = chores.splice(source.index, 1);  \n    //   newChores.splice(destination.index, 0 ,start.chores[source.index])\n    //   const newCol={\n    //     name: start.name, \n    //     chores: newChores,\n    //   }\n    //   // Move the item within the list\n    //   // Start by making a new list without the dragged item\n    //   console.log([...columns,newCol])\n    //   setColumns([...columns, newCol]);\n    //   return null\n    //   }\n    // return null;\n    };\n    var handleDragEnd = function(result) {\n        //  console.log(result.source, result.destination)\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDbEMsR0FBSyxDQUF5QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JRLFVBQVUsQ0FBQ0MsY0FBYztJQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxRQUFxQixDQUFDO1lBQTNCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsV0FBVyxTQUFYQSxXQUFXO1FBQ3RDLEVBQW1DO1FBQ25DLEVBQXFDO1FBQ3JDLEVBQXdDO1FBQ3hDLEVBQUUsRUFBRUEsV0FBVyxLQUFLQyxTQUFTLElBQUlELFdBQVcsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFbEUsRUFBMkM7UUFDM0MsRUFBRSxFQUNBQSxXQUFXLENBQUNFLEtBQUssS0FBS0gsTUFBTSxDQUFDRyxLQUFLLElBQ2xDSCxNQUFNLENBQUNJLFdBQVcsS0FBS0gsV0FBVyxDQUFDRyxXQUFXLEVBRTlDLE1BQU0sQ0FBQyxJQUFJO1FBRWIsR0FBSyxDQUFDQyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFJLENBQUM7WUFBQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDSSxXQUFXLEtBQUtJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJO1FBQUMsQ0FBQztRQUNsRyxHQUFLLENBQUNDLEdBQUcsR0FBR2QsT0FBTyxDQUFDVSxNQUFNLENBQUMsUUFB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Qzs7Ozs7Ozs7Ozs7QUE2QlosQ0FBQztHQW5JdUJSLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanM/YjZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0RyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGV9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCJcclxuaW1wb3J0IENob3Jlc0NvbHVtbiBmcm9tICcuL0Nob3Jlc0NvbHVtbidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvcmVzKCkge1xyXG5jb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldENvbHVtbnMoZXhhbXBsZUNvbHVtbnMpXHJcbn0sW10pXHJcbmNvbnN0IG9uRHJhZ0VuZCA9ICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKHNvdXJjZSwgZGVzdGluYXRpb24pXHJcbiAgLy8gY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvbHVtbnMpO1xyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cclxuICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHdlJ3JlIGFjdHVhbGx5IG1vdmluZyB0aGUgaXRlbVxyXG4gIGlmIChcclxuICAgIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXggJiZcclxuICAgIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWRcclxuICApXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIFxyXG4gIGNvbnN0IHN0YXJ0ID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbik9PiB7cmV0dXJuIFN0cmluZyhzb3VyY2UuZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG4gIGNvbnN0IGVuZCA9IGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT57cmV0dXJuIFN0cmluZyhkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCkgPT0gU3RyaW5nKGNvbHVtbi5uYW1lKX0pXHJcbiAgY29uc29sZS5sb2coc3RhcnQsc3RhcnQubmFtZSlcclxuICAvLyBpZiAoSlNPTi5zdHJpbmdpZnkoc3RhcnQpID09PSBKU09OLnN0cmluZ2lmeShlbmQpKXtcclxuICAgIFxyXG4gIC8vICAgY29uc3QgY2hvcmVzID0gQXJyYXkuZnJvbShzdGFydC5jaG9yZXMpXHJcbiAgLy8gICBjb25zdCBuZXdDaG9yZXMgPSBjaG9yZXMuc3BsaWNlKHNvdXJjZS5pbmRleCwgMSk7ICBcclxuICAvLyAgIG5ld0Nob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAgLHN0YXJ0LmNob3Jlc1tzb3VyY2UuaW5kZXhdKVxyXG4gIC8vICAgY29uc3QgbmV3Q29sPXtcclxuICAvLyAgICAgbmFtZTogc3RhcnQubmFtZSwgXHJcbiAgLy8gICAgIGNob3JlczogbmV3Q2hvcmVzLFxyXG4gIC8vICAgfVxyXG4gIC8vICAgLy8gTW92ZSB0aGUgaXRlbSB3aXRoaW4gdGhlIGxpc3RcclxuICAvLyAgIC8vIFN0YXJ0IGJ5IG1ha2luZyBhIG5ldyBsaXN0IHdpdGhvdXQgdGhlIGRyYWdnZWQgaXRlbVxyXG4gIC8vICAgY29uc29sZS5sb2coWy4uLmNvbHVtbnMsbmV3Q29sXSlcclxuICAvLyAgIHNldENvbHVtbnMoWy4uLmNvbHVtbnMsIG5ld0NvbF0pO1xyXG4gIC8vICAgcmV0dXJuIG51bGxcclxuICAvLyAgIH1cclxuICAvLyByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpPT57XHJcbiAgLy8gIGNvbnNvbGUubG9nKHJlc3VsdC5zb3VyY2UsIHJlc3VsdC5kZXN0aW5hdGlvbilcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oY2hvcmVzKTtcclxuICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCAscmVvcmRlcmVkSXRlbSk7XHJcbiAgc2V0Q2hvcmVzKGl0ZW1zKTtcclxufVxyXG5cclxuY29uc3QgZXhhbXBsZUNvbHVtbnMgPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiSnVsaWVcIixcclxuICAgIGNob3JlczogW3tcclxuICAgICAgX2lkOiBcIjEyMzIxYXNkXCIsXHJcbiAgICAgIHVzZXJfaWQ6IFwiMjM0MjM1MWFkMTIzYXNkXCIsXHJcbiAgICAgIG5hbWU6IFwiQ2xlYW4gRGlzaGVzXCIsXHJcbiAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IFwiMTIzMTIzXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2QyYXNkMlwiLFxyXG4gICAgICAgIG5hbWU6IFwiVGFrZSBvdXQgdHJhc2hcIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDp0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOlwiMWFzZGYzYXNmXCIsXHJcbiAgICAgICAgdXNlcl9pZDogXCIxMjNhc2Q4YXNkODJcIixcclxuICAgICAgICBuYW1lOlwiQ2xlYW4gV2FzaHJvb21cIixcclxuICAgICAgICBkZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgIGNvbXBsZXRlZDpmYWxzZSwgIFxyXG4gICAgICB9XVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJOaWNrXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNhcmFoXCIsXHJcbiAgICBjaG9yZXM6IFtdXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJvblwiLFxyXG4gICAgY2hvcmVzOltdXHJcbiAgfVxyXG5dXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtvbkRyYWdFbmR9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyIDFmcicsXHJcbiAgICAgICAgICBtYXJnaW46ICcyNHB4IGF1dG8nLFxyXG4gICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgZ2FwOiAnOHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hvcmVzQ29sdW1uIGNvbHVtbiA9IHtjb2x1bW59IGluZGV4ID0ge2luZGV4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgIC8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgIC8vICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImNob3Jlc1wiPlxyXG4gICAgLy8gICAgIHsocHJvdmlkZWQpPT5cclxuICAgIC8vICAgICAgICg8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSBjbGFzc05hbWUgPSBcImNob3JlcyBsaXN0LWdyb3VwXCIgcmVmID0ge3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB7Y2hvcmVzLm1hcCgoe19pZCwgdXNlcl9pZCwgbmFtZSwgZGV0YWlscyxjb21wbGV0ZWR9LCBpbmRleCk9PntcclxuICAgIC8vICAgICAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICAgIDxEcmFnZ2FibGUga2V5ID0ge19pZH0gZHJhZ2dhYmxlSWQ9e19pZH0gaW5kZXggPXtpbmRleH0+XHJcbiAgICAvLyAgICAgICAgICAgICB7KHByb3ZpZGVkKT0+KCAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgIC8vICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKX1cclxuICAgIC8vICAgPC9Ecm9wcGFibGU+XHJcbiAgICAvLyA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNDb2x1bW4iLCJDaG9yZXMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImV4YW1wbGVDb2x1bW5zIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJ1bmRlZmluZWQiLCJpbmRleCIsImRyb3BwYWJsZUlkIiwic3RhcnQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJTdHJpbmciLCJuYW1lIiwiZW5kIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsImNob3JlcyIsInNwbGljZSIsInJlb3JkZXJlZEl0ZW0iLCJzZXRDaG9yZXMiLCJfaWQiLCJ1c2VyX2lkIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});