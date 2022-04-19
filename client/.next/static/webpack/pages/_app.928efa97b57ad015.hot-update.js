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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), chores = ref1[0], setChores = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setChores(example);\n    }, []);\n    var onDragEnd = function(param) {\n        var source = param.source, destination = param.destination;\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index) return null;\n        // Move the item within the list\n        // Start by making a new list without the dragged item\n        var newChores = chores.filter(function() {\n            return _id !== source.index;\n        });\n        // Then insert the item at the right location\n        newChores.splice(destination.index, 0, list[source.index]);\n        // Update the list\n        setChores(newChores);\n    };\n    var handleDragEnd = function(result) {\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var example = [\n        {\n            _id: \"12321asd\",\n            user_id: \"2342351ad123asd\",\n            name: \"Clean Dishes\",\n            details: \"\",\n            completed: false\n        },\n        {\n            _id: \"123123\",\n            user_id: \"123asd2asd2\",\n            name: \"Take out trash\",\n            details: \"\",\n            completed: true\n        },\n        {\n            _id: \"1asdf3asf\",\n            user_id: \"123asd8asd82\",\n            name: \"Clean Washroom\",\n            details: \"\",\n            completed: false\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                chores: chores\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDbkJDLEtBQUssRUFBRSxDQUFLO2dCQUNaQyxHQUFHLEVBQUUsQ0FBSztZQUNaLENBQUM7a0dBRUEvQixxREFBVTtnQkFBQ0UsTUFBTSxFQUFJQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBMkJwQyxDQUFDO0dBMUZ1QkQsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvQ2hvcmVzTGlzdC5qcz9iNmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIlxyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tICcuL0Nob3Jlc0NvbHVtbidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvcmVzKCkge1xyXG5jb25zdCBbY2hvcmVzLCBzZXRDaG9yZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBzZXRDaG9yZXMoZXhhbXBsZSlcclxufSxbXSlcclxuY29uc3Qgb25EcmFnRW5kID0gKHsgc291cmNlLCBkZXN0aW5hdGlvbiB9KSA9PiB7XHJcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHZhbGlkIGRlc3RpbmF0aW9uXHJcbiAgICBpZiAoZGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCB8fCBkZXN0aW5hdGlvbiA9PT0gbnVsbCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgd2UncmUgYWN0dWFsbHkgbW92aW5nIHRoZSBpdGVtXHJcbiAgICBpZiAoZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAvLyBNb3ZlIHRoZSBpdGVtIHdpdGhpbiB0aGUgbGlzdFxyXG4gICAgLy8gU3RhcnQgYnkgbWFraW5nIGEgbmV3IGxpc3Qgd2l0aG91dCB0aGUgZHJhZ2dlZCBpdGVtXHJcbiAgICBjb25zdCBuZXdDaG9yZXMgPSBjaG9yZXMuZmlsdGVyKCgpID0+IF9pZCAhPT0gc291cmNlLmluZGV4KVxyXG5cclxuICAgIC8vIFRoZW4gaW5zZXJ0IHRoZSBpdGVtIGF0IHRoZSByaWdodCBsb2NhdGlvblxyXG4gICAgbmV3Q2hvcmVzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgbGlzdFtzb3VyY2UuaW5kZXhdKVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgbGlzdFxyXG4gICAgc2V0Q2hvcmVzKG5ld0Nob3JlcylcclxuICB9XHJcblxyXG5jb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCk9PntcclxuICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oY2hvcmVzKTtcclxuICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCAscmVvcmRlcmVkSXRlbSk7XHJcbiAgc2V0Q2hvcmVzKGl0ZW1zKTtcclxufVxyXG5cclxuY29uc3QgZXhhbXBsZSA9IFt7XHJcbiAgX2lkOiBcIjEyMzIxYXNkXCIsXHJcbiAgdXNlcl9pZDogXCIyMzQyMzUxYWQxMjNhc2RcIixcclxuICBuYW1lOiBcIkNsZWFuIERpc2hlc1wiLFxyXG4gIGRldGFpbHM6IFwiXCIsXHJcbiAgY29tcGxldGVkOiBmYWxzZSxcclxufSxcclxue1xyXG4gIF9pZDogXCIxMjMxMjNcIixcclxuICB1c2VyX2lkOiBcIjEyM2FzZDJhc2QyXCIsXHJcbiAgbmFtZTogXCJUYWtlIG91dCB0cmFzaFwiLFxyXG4gIGRldGFpbHM6IFwiXCIsXHJcbiAgY29tcGxldGVkOnRydWUsXHJcbn0sXHJcbntcclxuICBfaWQ6XCIxYXNkZjNhc2ZcIixcclxuICB1c2VyX2lkOiBcIjEyM2FzZDhhc2Q4MlwiLFxyXG4gIG5hbWU6XCJDbGVhbiBXYXNocm9vbVwiLFxyXG4gIGRldGFpbHM6IFwiXCIsXHJcbiAgY29tcGxldGVkOmZhbHNlLFxyXG59XVxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmciAxZnInLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMjRweCBhdXRvJyxcclxuICAgICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICAgIGdhcDogJzhweCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENob3Jlc0xpc3QgY2hvcmVzID0ge2Nob3Jlc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgLy8gPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgLy8gICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiY2hvcmVzXCI+XHJcbiAgICAvLyAgICAgeyhwcm92aWRlZCk9PlxyXG4gICAgLy8gICAgICAgKDx1bCB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IGNsYXNzTmFtZSA9IFwiY2hvcmVzIGxpc3QtZ3JvdXBcIiByZWYgPSB7cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgIHtjaG9yZXMubWFwKCh7X2lkLCB1c2VyX2lkLCBuYW1lLCBkZXRhaWxzLGNvbXBsZXRlZH0sIGluZGV4KT0+e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4oXHJcbiAgICAvLyAgICAgICAgICAgPERyYWdnYWJsZSBrZXkgPSB7X2lkfSBkcmFnZ2FibGVJZD17X2lkfSBpbmRleCA9e2luZGV4fT5cclxuICAgIC8vICAgICAgICAgICAgIHsocHJvdmlkZWQpPT4oICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwibGlzdC1ncm91cC1pdGVtXCIgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIDxoNT57bmFtZX08L2g1PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgPC9saT5cclxuICAgIC8vICAgICAgICAgICAgICAgKX1cclxuICAgIC8vICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gICAgICAgfSl9XHJcbiAgICAvLyAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAvLyAgICAgPC91bD5cclxuICAgIC8vICAgICApfVxyXG4gICAgLy8gICA8L0Ryb3BwYWJsZT5cclxuICAgIC8vIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZSIsIkNob3Jlc0xpc3QiLCJDaG9yZXMiLCJjaG9yZXMiLCJzZXRDaG9yZXMiLCJleGFtcGxlIiwib25EcmFnRW5kIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJ1bmRlZmluZWQiLCJpbmRleCIsIm5ld0Nob3JlcyIsImZpbHRlciIsIl9pZCIsInNwbGljZSIsImxpc3QiLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwidXNlcl9pZCIsIm5hbWUiLCJkZXRhaWxzIiwiY29tcGxldGVkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsIndpZHRoIiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});