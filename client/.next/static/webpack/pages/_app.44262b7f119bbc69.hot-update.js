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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColumns(exampleColumns);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // console.log(source, destination)\n        // const items = Array.from(columns);\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index && source.droppableId === destination.droppableId) return null;\n        var start = columns.filter(function(column) {\n            return String(source.droppableId) == String(column.name);\n        });\n        var end = columns.filter(function(column) {\n            return String(destination.droppableId) == String(column.name);\n        });\n        if (JSON.stringify(start) === JSON.stringify(end)) {\n            var chores = Array.from(start[0].chores);\n            var ref = _slicedToArray(chores.splice(source.index, 1), 1), newChore = ref[0];\n            chores.splice(destination.index, 0, newChore);\n            var newCol = {\n                name: start[0].name,\n                chores: chores\n            };\n            // console.log(newCol)\n            var newColumns = Array.from(columns);\n            // newColumns[newColumns.findIndex((element)=>{element.name == newCol.name})] = newCol;\n            console.log(newColumns.findIndex(function(element) {\n                String(newCol.name);\n            }));\n            // Move the item within the list\n            // Start by making a new list without the dragged item\n            setColumns(newColumns);\n            return null;\n        }\n        return null;\n    };\n    var exampleColumns = [\n        {\n            name: \"Julie\",\n            chores: [\n                {\n                    _id: \"12321asd\",\n                    user_id: \"2342351ad123asd\",\n                    name: \"Clean Dishes\",\n                    details: \"\",\n                    completed: false\n                },\n                {\n                    _id: \"123123\",\n                    user_id: \"123asd2asd2\",\n                    name: \"Take out trash\",\n                    details: \"\",\n                    completed: true\n                },\n                {\n                    _id: \"1asdf3asf\",\n                    user_id: \"123asd8asd82\",\n                    name: \"Clean Washroom\",\n                    details: \"\",\n                    completed: false\n                }\n            ]\n        },\n        {\n            name: \"Nick\",\n            chores: []\n        },\n        {\n            name: \"Sarah\",\n            chores: []\n        },\n        {\n            name: \"Ron\",\n            chores: []\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOzs7SUFDbEMsR0FBSyxDQUF5QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ00sT0FBTyxHQUFnQk4sSUFBWSxLQUExQk8sVUFBVSxHQUFJUCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JRLFVBQVUsQ0FBQ0MsY0FBYztJQUMzQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFBUSxRQUFxQixDQUFDO1lBQTNCQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsV0FBVyxTQUFYQSxXQUFXO1FBQ3RDLEVBQW1DO1FBQ25DLEVBQXFDO1FBQ3JDLEVBQXdDO1FBQ3hDLEVBQUUsRUFBRUEsV0FBVyxLQUFLQyxTQUFTLElBQUlELFdBQVcsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFFbEUsRUFBMkM7UUFDM0MsRUFBRSxFQUNBQSxXQUFXLENBQUNFLEtBQUssS0FBS0gsTUFBTSxDQUFDRyxLQUFLLElBQ2xDSCxNQUFNLENBQUNJLFdBQVcsS0FBS0gsV0FBVyxDQUFDRyxXQUFXLEVBRTlDLE1BQU0sQ0FBQyxJQUFJO1FBRWIsR0FBSyxDQUFDQyxLQUFLLEdBQUlULE9BQU8sQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFJLENBQUM7WUFBQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsTUFBTSxDQUFDSSxXQUFXLEtBQUtJLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJO1FBQUMsQ0FBQztRQUNuRyxHQUFLLENBQUNDLEdBQUcsR0FBR2QsT0FBTyxDQUFDVSxNQUFNLENBQUMsUUFB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QkFFQXRDLE9BQU8sQ0FBQ3VDLEdBQUcsQ0FBQyxRQUFRLENBQVA1QixNQUFNLEVBQUVKLEtBQUssRUFBRyxDQUFDO2dCQUM3QixNQUFNLDZFQUNMeUIsQ0FBRzswR0FDRGxDLHFEQUFZO3dCQUFDYSxNQUFNLEVBQUlBLE1BQU07d0JBQUVKLEtBQUssRUFBSUEsS0FBSzs7Ozs7Ozs7Ozs7WUFFL0MsQ0FBQzs7Ozs7Ozs7Ozs7QUE2QlosQ0FBQztHQWpJdUJSLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanM/YjZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0RyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGV9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCJcclxuaW1wb3J0IENob3Jlc0NvbHVtbiBmcm9tICcuL0Nob3Jlc0NvbHVtbidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvcmVzKCkge1xyXG5jb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDb2x1bW5zKGV4YW1wbGVDb2x1bW5zKVxyXG59LFtdKVxyXG5jb25zdCBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxyXG4gIC8vIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcclxuICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgaWYgKGRlc3RpbmF0aW9uID09PSB1bmRlZmluZWQgfHwgZGVzdGluYXRpb24gPT09IG51bGwpIHJldHVybiBudWxsXHJcblxyXG4gIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICBpZiAoXHJcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4ICYmXHJcbiAgICBzb3VyY2UuZHJvcHBhYmxlSWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXHJcbiAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICBcclxuICBjb25zdCBzdGFydCA9ICBjb2x1bW5zLmZpbHRlcigoY29sdW1uKT0+IHtyZXR1cm4gU3RyaW5nKHNvdXJjZS5kcm9wcGFibGVJZCkgPT0gU3RyaW5nKGNvbHVtbi5uYW1lKX0pXHJcbiAgY29uc3QgZW5kID0gY29sdW1ucy5maWx0ZXIoKGNvbHVtbik9PntyZXR1cm4gU3RyaW5nKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkKSA9PSBTdHJpbmcoY29sdW1uLm5hbWUpfSlcclxuXHJcbiAgaWYgKEpTT04uc3RyaW5naWZ5KHN0YXJ0KSA9PT0gSlNPTi5zdHJpbmdpZnkoZW5kKSl7XHJcbiAgICBcclxuICAgIGNvbnN0IGNob3JlcyA9IEFycmF5LmZyb20oc3RhcnRbMF0uY2hvcmVzKVxyXG4gICAgY29uc3QgW25ld0Nob3JlXSA9IGNob3Jlcy5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTsgIFxyXG4gICAgXHJcbiAgICBjaG9yZXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwICwgbmV3Q2hvcmUpO1xyXG4gICAgY29uc3QgbmV3Q29sPXtcclxuICAgICAgbmFtZTogc3RhcnRbMF0ubmFtZSwgXHJcbiAgICAgIGNob3JlczogY2hvcmVzLFxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cobmV3Q29sKVxyXG4gICAgY29uc3QgbmV3Q29sdW1ucyA9IEFycmF5LmZyb20oY29sdW1ucyk7XHJcbiAgICAvLyBuZXdDb2x1bW5zW25ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e2VsZW1lbnQubmFtZSA9PSBuZXdDb2wubmFtZX0pXSA9IG5ld0NvbDtcclxuICAgIGNvbnNvbGUubG9nKG5ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e1N0cmluZyhuZXdDb2wubmFtZSl9KSlcclxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gd2l0aGluIHRoZSBsaXN0XHJcbiAgICAvLyBTdGFydCBieSBtYWtpbmcgYSBuZXcgbGlzdCB3aXRob3V0IHRoZSBkcmFnZ2VkIGl0ZW1cclxuICAgIHNldENvbHVtbnMobmV3Q29sdW1ucyk7XHJcbiAgICBcclxuICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5jb25zdCBleGFtcGxlQ29sdW1ucyA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJKdWxpZVwiLFxyXG4gICAgY2hvcmVzOiBbe1xyXG4gICAgICBfaWQ6IFwiMTIzMjFhc2RcIixcclxuICAgICAgdXNlcl9pZDogXCIyMzQyMzUxYWQxMjNhc2RcIixcclxuICAgICAgbmFtZTogXCJDbGVhbiBEaXNoZXNcIixcclxuICAgICAgZGV0YWlsczogXCJcIixcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogXCIxMjMxMjNcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDJhc2QyXCIsXHJcbiAgICAgICAgbmFtZTogXCJUYWtlIG91dCB0cmFzaFwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOnRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6XCIxYXNkZjNhc2ZcIixcclxuICAgICAgICB1c2VyX2lkOiBcIjEyM2FzZDhhc2Q4MlwiLFxyXG4gICAgICAgIG5hbWU6XCJDbGVhbiBXYXNocm9vbVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgY29tcGxldGVkOmZhbHNlLCAgXHJcbiAgICAgIH1dXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5pY2tcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2FyYWhcIixcclxuICAgIGNob3JlczogW11cclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUm9uXCIsXHJcbiAgICBjaG9yZXM6W11cclxuICB9XHJcbl1cclxuICByZXR1cm4gKFxyXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcclxuICAgICAgICAgIG1hcmdpbjogJzI0cHggYXV0bycsXHJcbiAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCk9PntcclxuICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaG9yZXNDb2x1bW4gY29sdW1uID0ge2NvbHVtbn0gaW5kZXggPSB7aW5kZXh9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgLy8gPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgLy8gICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiY2hvcmVzXCI+XHJcbiAgICAvLyAgICAgeyhwcm92aWRlZCk9PlxyXG4gICAgLy8gICAgICAgKDx1bCB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IGNsYXNzTmFtZSA9IFwiY2hvcmVzIGxpc3QtZ3JvdXBcIiByZWYgPSB7cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgIHtjaG9yZXMubWFwKCh7X2lkLCB1c2VyX2lkLCBuYW1lLCBkZXRhaWxzLGNvbXBsZXRlZH0sIGluZGV4KT0+e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4oXHJcbiAgICAvLyAgICAgICAgICAgPERyYWdnYWJsZSBrZXkgPSB7X2lkfSBkcmFnZ2FibGVJZD17X2lkfSBpbmRleCA9e2luZGV4fT5cclxuICAgIC8vICAgICAgICAgICAgIHsocHJvdmlkZWQpPT4oICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtXCIgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIDxoNT57bmFtZX08L2g1PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgPC9saT5cclxuICAgIC8vICAgICAgICAgICAgICAgKX1cclxuICAgIC8vICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgfSl9XHJcbiAgICAvLyAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAvLyAgICAgPC91bD5cclxuICAgIC8vICAgICApfVxyXG4gICAgLy8gICA8L0Ryb3BwYWJsZT5cclxuICAgIC8vIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZSIsIkNob3Jlc0NvbHVtbiIsIkNob3JlcyIsImNvbHVtbnMiLCJzZXRDb2x1bW5zIiwiZXhhbXBsZUNvbHVtbnMiLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInVuZGVmaW5lZCIsImluZGV4IiwiZHJvcHBhYmxlSWQiLCJzdGFydCIsImZpbHRlciIsImNvbHVtbiIsIlN0cmluZyIsIm5hbWUiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hvcmVzIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwibmV3Q2hvcmUiLCJuZXdDb2wiLCJuZXdDb2x1bW5zIiwiY29uc29sZSIsImxvZyIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJfaWQiLCJ1c2VyX2lkIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});