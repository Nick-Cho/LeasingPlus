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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores(param1) {\n    var chores1 = param1.chores;\n    var _this = this;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), columns = ref1[0], setColumns = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setColumns(chores1);\n        console.log(columns);\n    }, []);\n    //function to update the chores array when moved in the drag and drop\n    var onDragEnd = function() {\n        var _ref = _asyncToGenerator(C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var source, destination, start, end, chores, ref, newChore, newCol, newColumns, newStartChores, newStartCol, newEndChores, newEndCol, newColumns1;\n            return C_Users_nicho_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        source = param.source, destination = param.destination;\n                        if (!(destination === undefined || destination === null)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", null);\n                    case 3:\n                        if (!(destination.index === source.index && source.droppableId === destination.droppableId)) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", null);\n                    case 5:\n                        start = columns.filter(function(column) {\n                            return String(source.droppableId) == String(column.name);\n                        });\n                        end = columns.filter(function(column) {\n                            return String(destination.droppableId) == String(column.name);\n                        });\n                        if (JSON.stringify(start) === JSON.stringify(end)) {\n                            chores = Array.from(start[0].chores);\n                            ref = _slicedToArray(chores.splice(source.index, 1), 1), newChore = ref[0];\n                            chores.splice(destination.index, 0, newChore);\n                            newCol = {\n                                name: start[0].name,\n                                chores: chores\n                            };\n                            newColumns = Array.from(columns);\n                            newColumns[newColumns.findIndex(function(element) {\n                                return String(element.name) == String(newCol.name);\n                            })] = newCol;\n                            setColumns(newColumns);\n                        } else {\n                            newStartChores = start[0].chores.filter(function(chore) {\n                                return String(chore.name) !== String(start[0].chores[source.index].name);\n                            });\n                            newStartCol = {\n                                name: start[0].name,\n                                chores: newStartChores\n                            };\n                            newEndChores = end[0].chores;\n                            newEndChores.splice(destination.index, 0, start[0].chores[source.index]);\n                            newEndCol = {\n                                name: end[0].name,\n                                chores: newEndChores\n                            };\n                            newColumns1 = Array.from(columns);\n                            newColumns1[newColumns1.findIndex(function(element) {\n                                return String(element.name) == String(newStartCol.name);\n                            })] = newStartCol;\n                            newColumns1[newColumns1.findIndex(function(element) {\n                                return String(element.name) == String(newEndCol.name);\n                            })] = newEndCol;\n                            setColumns(newColumns1);\n                        }\n                        console.log(end[0]);\n                        return _ctx.abrupt(\"return\", null);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDragEnd(_) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '2fr 2fr 2fr',\n                margin: '24px auto',\n                width: '90%',\n                gap: '8px'\n            },\n            children: columns && columns.map(function(column, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        column: column,\n                        index: index\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUMwQjtBQUNoQztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDVixRQUFRLENBQUNRLE1BQU0sQ0FBQyxNQUFRLEVBQUUsQ0FBQztRQUFWQyxPQUFNLEdBQVAsTUFBUSxDQUFQQSxNQUFNOzs7SUFDdEMsR0FBSyxDQUF5QlAsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFsQ1EsT0FBTyxHQUFnQlIsSUFBWSxLQUExQlMsVUFBVSxHQUFJVCxJQUFZO0lBRTFDRCxnREFBUyxDQUFDLFFBQ1QsR0FEYSxDQUFDO1FBQ2JVLFVBQVUsQ0FBQ0YsT0FBTTtRQUNqQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU87SUFDckIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLEVBQXFFO0lBQ3JFLEdBQUssQ0FBQ0ksU0FBUztnTUFBRyxRQUFRLGdCQUEyQixDQUFDO2dCQUEzQkMsTUFBTSxFQUFFQyxXQUFXLEVBV3RDQyxLQUFLLEVBQ0xDLEdBQUcsRUFJRFQsTUFBTSxFQUNPQSxHQUE4QixFQUExQ1UsUUFBUSxFQUVUQyxNQUFNLEVBSU5DLFVBQVUsRUFLVkMsY0FBYyxFQUNkQyxXQUFXLEVBSVhDLFlBQVksRUFFWkMsU0FBUyxFQUlUSixXQUFVOzs7O3dCQXZDT04sTUFBTSxTQUFOQSxNQUFNLEVBQUVDLFdBQVcsU0FBWEEsV0FBVzs4QkFFeENBLFdBQVcsS0FBS1UsU0FBUyxJQUFJVixXQUFXLEtBQUssSUFBSTs7OztxREFBUyxJQUFJOzs4QkFJaEVBLFdBQVcsQ0FBQ1csS0FBSyxLQUFLWixNQUFNLENBQUNZLEtBQUssSUFDbENaLE1BQU0sQ0FBQ2EsV0FBVyxLQUFLWixXQUFXLENBQUNZLFdBQVc7Ozs7cURBRXZDLElB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ckhGLFdBQVUsQ0FBQ0EsV0FBVSxDQUFDaUIsU0FBUyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFHLENBQUM7Z0NBQUEsTUFBTSxDQUFDUixNQUFNLENBQUNRLE9BQU8sQ0FBQ1AsSUFBSSxLQUFLRCxNQUFNLENBQUNOLFNBQVMsQ0FBQ08sSUFBSTs0QkFBRSxDQUFDLEtBQUtQLFNBQVM7NEJBQ2pIZCxVQUFVLENBQUNVLFdBQVU7d0JBQ3ZCLENBQUM7d0JBQ0RULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHLENBQUMsQ0FBQztxREFJVixJQUFJOzs7Ozs7UUFDYixDQUFDO3dCQWpES0osU0FBUzs7OztJQW1EYixNQUFNLDZFQUNIWCxnRUFBZTtRQUFDVyxTQUFTLEVBQUVBLFNBQVM7OEZBQ2xDMkIsQ0FBRztZQUNGQyxLQUFLLEVBQUUsQ0FBQztnQkFDTkMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZDLG1CQUFtQixFQUFFLENBQWE7Z0JBQ2xDQyxNQUFNLEVBQUUsQ0FBVztnQkFDbkJDLEtBQUssRUFBRSxDQUFLO2dCQUNaQyxHQUFHLEVBQUUsQ0FBSztZQUNaLENBQUM7c0JBRUFyQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxRQUFRLENBQVBsQixNQUFNLEVBQUVILEtBQUssRUFBRyxDQUFDO2dCQUN4QyxNQUFNLDZFQUNMYyxDQUFHOzBHQUNEbkMscURBQVk7d0JBQUN3QixNQUFNLEVBQUlBLE1BQU07d0JBQUVILEtBQUssRUFBSUEsS0FBSzs7Ozs7Ozs7Ozs7WUFFL0MsQ0FBQzs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBbEZ1Qm5CLE1BQU07S0FBTkEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanM/YjZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0RyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGV9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCJcclxuaW1wb3J0IENob3Jlc0NvbHVtbiBmcm9tICcuL0Nob3Jlc0NvbHVtbidcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob3Jlcyh7Y2hvcmVzfSkge1xyXG5jb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDb2x1bW5zKGNob3JlcylcclxuICBjb25zb2xlLmxvZyhjb2x1bW5zKVxyXG59LFtdKVxyXG5cclxuLy9mdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNob3JlcyBhcnJheSB3aGVuIG1vdmVkIGluIHRoZSBkcmFnIGFuZCBkcm9wXHJcbmNvbnN0IG9uRHJhZ0VuZCA9IGFzeW5jICh7IHNvdXJjZSwgZGVzdGluYXRpb24gfSkgPT4ge1xyXG4gIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cclxuICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgLy8gTWFrZSBzdXJlIHdlJ3JlIGFjdHVhbGx5IG1vdmluZyB0aGUgaXRlbVxyXG4gIGlmIChcclxuICAgIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXggJiZcclxuICAgIHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWRcclxuICApXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIFxyXG4gIGNvbnN0IHN0YXJ0ID0gIGNvbHVtbnMuZmlsdGVyKChjb2x1bW4pPT4ge3JldHVybiBTdHJpbmcoc291cmNlLmRyb3BwYWJsZUlkKSA9PSBTdHJpbmcoY29sdW1uLm5hbWUpfSlcclxuICBjb25zdCBlbmQgPSBjb2x1bW5zLmZpbHRlcigoY29sdW1uKT0+e3JldHVybiBTdHJpbmcoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpID09IFN0cmluZyhjb2x1bW4ubmFtZSl9KVxyXG5cclxuICBpZiAoSlNPTi5zdHJpbmdpZnkoc3RhcnQpID09PSBKU09OLnN0cmluZ2lmeShlbmQpKXtcclxuICAgIFxyXG4gICAgY29uc3QgY2hvcmVzID0gQXJyYXkuZnJvbShzdGFydFswXS5jaG9yZXMpXHJcbiAgICBjb25zdCBbbmV3Q2hvcmVdID0gY2hvcmVzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpOyAgXHJcbiAgICBjaG9yZXMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwICwgbmV3Q2hvcmUpO1xyXG4gICAgY29uc3QgbmV3Q29sPXtcclxuICAgICAgbmFtZTogc3RhcnRbMF0ubmFtZSwgXHJcbiAgICAgIGNob3JlczogY2hvcmVzLFxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3Q29sdW1ucyA9IEFycmF5LmZyb20oY29sdW1ucyk7XHJcbiAgICBuZXdDb2x1bW5zW25ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e3JldHVybihTdHJpbmcoZWxlbWVudC5uYW1lKSA9PSBTdHJpbmcobmV3Q29sLm5hbWUpKX0pXSA9IG5ld0NvbDtcclxuICAgIHNldENvbHVtbnMobmV3Q29sdW1ucyk7XHJcbiAgfSBcclxuICBlbHNle1xyXG4gICAgY29uc3QgbmV3U3RhcnRDaG9yZXMgPSBzdGFydFswXS5jaG9yZXMuZmlsdGVyKChjaG9yZSk9PntyZXR1cm4gU3RyaW5nKGNob3JlLm5hbWUpICE9PSBTdHJpbmcoc3RhcnRbMF0uY2hvcmVzW3NvdXJjZS5pbmRleF0ubmFtZSl9KTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0Q29sID0ge1xyXG4gICAgICBuYW1lOiBzdGFydFswXS5uYW1lLFxyXG4gICAgICBjaG9yZXM6IG5ld1N0YXJ0Q2hvcmVzXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdFbmRDaG9yZXMgPSBlbmRbMF0uY2hvcmVzO1xyXG4gICAgbmV3RW5kQ2hvcmVzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCAsc3RhcnRbMF0uY2hvcmVzW3NvdXJjZS5pbmRleF0pXHJcbiAgICBjb25zdCBuZXdFbmRDb2w9IHtcclxuICAgICAgbmFtZTogZW5kWzBdLm5hbWUsXHJcbiAgICAgIGNob3JlczogbmV3RW5kQ2hvcmVzLFxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3Q29sdW1ucyA9IEFycmF5LmZyb20oY29sdW1ucyk7XHJcbiAgICBuZXdDb2x1bW5zW25ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e3JldHVybihTdHJpbmcoZWxlbWVudC5uYW1lKSA9PSBTdHJpbmcobmV3U3RhcnRDb2wubmFtZSkpfSldID0gbmV3U3RhcnRDb2w7XHJcbiAgICBuZXdDb2x1bW5zW25ld0NvbHVtbnMuZmluZEluZGV4KChlbGVtZW50KT0+e3JldHVybihTdHJpbmcoZWxlbWVudC5uYW1lKSA9PSBTdHJpbmcobmV3RW5kQ29sLm5hbWUpKX0pXSA9IG5ld0VuZENvbDtcclxuICAgIHNldENvbHVtbnMobmV3Q29sdW1ucyk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGVuZFswXSk7XHJcbiAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYC91cGRhdGUtY2hvcmVzYCx7XHJcbiAgLy8gICBjaG9yZV9pZDogZW5kWzBdLl9pZCxcclxuICAvLyB9KVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMmZyIDJmciAyZnInLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMjRweCBhdXRvJyxcclxuICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgIGdhcDogJzhweCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbHVtbnMgJiYgY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hvcmVzQ29sdW1uIGNvbHVtbiA9IHtjb2x1bW59IGluZGV4ID0ge2luZGV4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuXHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlIiwiQ2hvcmVzQ29sdW1uIiwiYXhpb3MiLCJDaG9yZXMiLCJjaG9yZXMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImNvbnNvbGUiLCJsb2ciLCJvbkRyYWdFbmQiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInN0YXJ0IiwiZW5kIiwibmV3Q2hvcmUiLCJuZXdDb2wiLCJuZXdDb2x1bW5zIiwibmV3U3RhcnRDaG9yZXMiLCJuZXdTdGFydENvbCIsIm5ld0VuZENob3JlcyIsIm5ld0VuZENvbCIsInVuZGVmaW5lZCIsImluZGV4IiwiZHJvcHBhYmxlSWQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJTdHJpbmciLCJuYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsInNwbGljZSIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJjaG9yZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});