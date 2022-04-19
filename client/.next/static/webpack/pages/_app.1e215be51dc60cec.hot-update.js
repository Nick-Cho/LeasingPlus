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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chores; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _ChoresColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChoresColumn */ \"./components/cards/ChoresColumn.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Chores() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), chores = ref1[0], setChores = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setChores(example);\n    }, []);\n    var onDragEnd = function(param1) {\n        var source = param1.source, destination = param1.destination;\n        // Make sure we have a valid destination\n        if (destination === undefined || destination === null) return null;\n        // Make sure we're actually moving the item\n        if (destination.index === source.index) return null;\n        // Move the item within the list\n        // Start by making a new list without the dragged item\n        var newChores = chores.filter(function(param) {\n            var _id = param._id;\n            return _id !== source.index;\n        });\n        // Then insert the item at the right location\n        newChores.splice(destination.index, 0, list[source.index]);\n        // Update the list\n        setChores(newChores);\n    };\n    var handleDragEnd = function(result) {\n        var items = Array.from(chores);\n        var ref = _slicedToArray(items.splice(result.source.index, 1), 1), reorderedItem = ref[0];\n        items.splice(result.destination.index, 0, reorderedItem);\n        setChores(items);\n    };\n    var example = [\n        {\n            _id: \"12321asd\",\n            user_id: \"2342351ad123asd\",\n            name: \"Clean Dishes\",\n            details: \"\",\n            completed: false\n        },\n        {\n            _id: \"123123\",\n            user_id: \"123asd2asd2\",\n            name: \"Take out trash\",\n            details: \"\",\n            completed: true\n        },\n        {\n            _id: \"1asdf3asf\",\n            user_id: \"123asd8asd82\",\n            name: \"Clean Washroom\",\n            details: \"\",\n            completed: false\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.DragDropContext, {\n        onDragEnd: onDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'grid',\n                gridTemplateColumns: '1fr 1fr 1fr',\n                margin: '24px auto',\n                width: '80%',\n                gap: '8px'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChoresColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                chores: chores\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\cards\\\\ChoresList.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this));\n};\n_s(Chores, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Chores;\nvar _c;\n$RefreshReg$(_c, \"Chores\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL0Nob3Jlc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDMEI7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN4QixRQUFRLENBQUNPLE1BQU0sR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQXVCTCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQWhDTSxNQUFNLEdBQWVOLElBQVksS0FBekJPLFNBQVMsR0FBSVAsSUFBWTtJQUV4Q0QsZ0RBQVMsQ0FBQyxRQUNULEdBRGEsQ0FBQztRQUNiUSxTQUFTLENBQUNDLE9BQU87SUFDbkIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNKLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsU0FBcUIsQ0FBQztZQUEzQkMsTUFBTSxVQUFOQSxNQUFNLEVBQUVDLFdBQVcsVUFBWEEsV0FBVztRQUNwQyxFQUF3QztRQUN4QyxFQUFFLEVBQUVBLFdBQVcsS0FBS0MsU0FBUyxJQUFJRCxXQUFXLEtBQUssSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBRWxFLEVBQTJDO1FBQzNDLEVBQUUsRUFBRUEsV0FBVyxDQUFDRSxLQUFLLEtBQUtILE1BQU0sQ0FBQ0csS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBRW5ELEVBQWdDO1FBQ2hDLEVBQXNEO1FBQ3RELEdBQUssQ0FBQ0MsU0FBUyxHQUFHUixNQUFNLENBQUNTLE1BQU0sQ0FBQyxRQUFRO2dCQUFOQyxHQUFHLFNBQUhBLEdBQUc7WUFBTUEsTUFBTSxDQUFOQSxHQUFHLEtBQUtOLE1BQU0sQ0FBQ0csS0FBSzs7UUFFL0QsRUFBNkM7UUFDN0NDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDTixXQUFXLENBQUNFLEtBQUssRUFBRSxDQUFDLEVBQUVLLElBQUksQ0FBQ1IsTUFBTSxDQUFDRyxLQUFLO1FBRXhELEVBQWtCO1FBQ2xCTixTQUFTLENBQUNPLFNBQVM7SUFDckIsQ0FBQztJQUVILEdBQUssQ0FBQ0ssYUFBYSxHQUFHLFFBQVEsQ0FBUEMsTUFBTSxFQUFHLENBQUM7UUFDL0IsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDakIsTUFBTTtRQUMvQixHQUFLLENBQW1CZSxHQUFvQyxrQkFBcENBLEtBQUssQ0FBQ0osTUFBTSxDQUFDRyxNQUFNLENBQUNWLE1BQU0sQ0FBQ0csS0FBSyxFQUFFLENBQUMsT0FBcERXLGFBQWEsR0FBSUgsR0FBb0M7UUFDNURBLEtBQUssQ0FBQ0osTUFBTSxDQUFDRyxNQUFNLENBQUNULFdBQVcsQ0FBQ0UsS0FBSyxFQUFFLENBQUMsRUFBRVcsYUFBYTtRQUN2RGpCLFNBQVMsQ0FBQ2MsS0FBSztJQUNqQixDQUFDO0lBRUQsR0FBSyxDQUFDYixPQUFPLEdBQUcsQ0FBQztRQUFBLENBQUM7WUFDaEJRLEdBQUcsRUFBRSxDQUFVO1lBQ2ZTLE9BQU8sRUFBRSxDQUFpQjtZQUMxQkMsSUFBSSxFQUFFLENBQWM7WUFDcEJDLE9BQU8sRUFBRSxDQUFFO1lBQ1hDLFNBQVMsRUFBRSxLQUFLO1FBQ2xCLENBQUM7UUFDRCxDQUFDO1lBQ0NaLEdBQUcsRUFBRSxDQUFRO1lBQ2JTLE9BQU8sRUFBRSxDQUFhO1lBQ3RCQyxJQUFJLEVBQUUsQ0FBZ0I7WUFDdEJDLE9BQU8sRUFBRSxDQUFFO1lBQ1hDLFNBQVMsRUFBQyxJQUFJO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NaLEdBQUcsRUFBQyxDQUFXO1lBQ2ZTLE9BQU8sRUFBRSxDQUFjO1lBQ3ZCQyxJQUFJLEVBQUMsQ0FBZ0I7WUFDckJDLE9BQU8sRUFBRSxDQUFFO1lBQ1hDLFNBQVMsRUFBQyxLQUFLO1FBQ2pCLENBQUM7SUFBQSxDQUFDO0lBQ0EsTUFBTSw2RUFDSDNCLGdFQUFlO1FBQUNRLFNBQVMsRUFBRUEsU0FBUzs4RkFDbENvQixDQUFHO1lBQ0ZDLEtBQUssRUFBRSxDQUFDO2dCQUNOQyxPQUFPLEVBQUUsQ0FBTTtnQkFDZkMsbUJBQW1CLEVBQUUsQ0FBYTtnQkFDbENDLE1BQU0sRUFBRSxDQUFXO2dCQUNuQkMsS0FBSyxFQUFFLENBQUs7Z0JBQ1pDLEdBQUcsRUFBRSxDQUFLO1lBQ1osQ0FBQztrR0FFQS9CLHFEQUFVO2dCQUFDRSxNQUFNLEVBQUlBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQnBDLENBQUM7R0ExRnVCRCxNQUFNO0tBQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkcy9DaG9yZXNMaXN0LmpzP2I2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiXHJcbmltcG9ydCBDaG9yZXNMaXN0IGZyb20gJy4vQ2hvcmVzQ29sdW1uJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9yZXMoKSB7XHJcbmNvbnN0IFtjaG9yZXMsIHNldENob3Jlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gIHNldENob3JlcyhleGFtcGxlKVxyXG59LFtdKVxyXG5jb25zdCBvbkRyYWdFbmQgPSAoeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0pID0+IHtcclxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmFsaWQgZGVzdGluYXRpb25cclxuICAgIGlmIChkZXN0aW5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGRlc3RpbmF0aW9uID09PSBudWxsKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBhY3R1YWxseSBtb3ZpbmcgdGhlIGl0ZW1cclxuICAgIGlmIChkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4KSByZXR1cm4gbnVsbFxyXG5cclxuICAgIC8vIE1vdmUgdGhlIGl0ZW0gd2l0aGluIHRoZSBsaXN0XHJcbiAgICAvLyBTdGFydCBieSBtYWtpbmcgYSBuZXcgbGlzdCB3aXRob3V0IHRoZSBkcmFnZ2VkIGl0ZW1cclxuICAgIGNvbnN0IG5ld0Nob3JlcyA9IGNob3Jlcy5maWx0ZXIoKHtfaWR9KSA9PiBfaWQgIT09IHNvdXJjZS5pbmRleClcclxuXHJcbiAgICAvLyBUaGVuIGluc2VydCB0aGUgaXRlbSBhdCB0aGUgcmlnaHQgbG9jYXRpb25cclxuICAgIG5ld0Nob3Jlcy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGxpc3Rbc291cmNlLmluZGV4XSlcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGxpc3RcclxuICAgIHNldENob3JlcyhuZXdDaG9yZXMpXHJcbiAgfVxyXG5cclxuY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpPT57XHJcbiAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNob3Jlcyk7XHJcbiAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAgLHJlb3JkZXJlZEl0ZW0pO1xyXG4gIHNldENob3JlcyhpdGVtcyk7XHJcbn1cclxuXHJcbmNvbnN0IGV4YW1wbGUgPSBbe1xyXG4gIF9pZDogXCIxMjMyMWFzZFwiLFxyXG4gIHVzZXJfaWQ6IFwiMjM0MjM1MWFkMTIzYXNkXCIsXHJcbiAgbmFtZTogXCJDbGVhbiBEaXNoZXNcIixcclxuICBkZXRhaWxzOiBcIlwiLFxyXG4gIGNvbXBsZXRlZDogZmFsc2UsXHJcbn0sXHJcbntcclxuICBfaWQ6IFwiMTIzMTIzXCIsXHJcbiAgdXNlcl9pZDogXCIxMjNhc2QyYXNkMlwiLFxyXG4gIG5hbWU6IFwiVGFrZSBvdXQgdHJhc2hcIixcclxuICBkZXRhaWxzOiBcIlwiLFxyXG4gIGNvbXBsZXRlZDp0cnVlLFxyXG59LFxyXG57XHJcbiAgX2lkOlwiMWFzZGYzYXNmXCIsXHJcbiAgdXNlcl9pZDogXCIxMjNhc2Q4YXNkODJcIixcclxuICBuYW1lOlwiQ2xlYW4gV2FzaHJvb21cIixcclxuICBkZXRhaWxzOiBcIlwiLFxyXG4gIGNvbXBsZXRlZDpmYWxzZSxcclxufV1cclxuICByZXR1cm4gKFxyXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnIgMWZyJyxcclxuICAgICAgICAgIG1hcmdpbjogJzI0cHggYXV0bycsXHJcbiAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICBnYXA6ICc4cHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDaG9yZXNMaXN0IGNob3JlcyA9IHtjaG9yZXN9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgIC8vIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgIC8vICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImNob3Jlc1wiPlxyXG4gICAgLy8gICAgIHsocHJvdmlkZWQpPT5cclxuICAgIC8vICAgICAgICg8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSBjbGFzc05hbWUgPSBcImNob3JlcyBsaXN0LWdyb3VwXCIgcmVmID0ge3Byb3ZpZGVkLmlubmVyUmVmfT5cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICB7Y2hvcmVzLm1hcCgoe19pZCwgdXNlcl9pZCwgbmFtZSwgZGV0YWlscyxjb21wbGV0ZWR9LCBpbmRleCk9PntcclxuICAgIC8vICAgICAgICAgcmV0dXJuKFxyXG4gICAgLy8gICAgICAgICAgIDxEcmFnZ2FibGUga2V5ID0ge19pZH0gZHJhZ2dhYmxlSWQ9e19pZH0gaW5kZXggPXtpbmRleH0+XHJcbiAgICAvLyAgICAgICAgICAgICB7KHByb3ZpZGVkKT0+KCAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgIC8vICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAvLyAgICAgICAgIClcclxuICAgIC8vICAgICAgIH0pfVxyXG4gICAgLy8gICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgLy8gICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKX1cclxuICAgIC8vICAgPC9Ecm9wcGFibGU+XHJcbiAgICAvLyA8L0RyYWdEcm9wQ29udGV4dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJDaG9yZXNMaXN0IiwiQ2hvcmVzIiwiY2hvcmVzIiwic2V0Q2hvcmVzIiwiZXhhbXBsZSIsIm9uRHJhZ0VuZCIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJuZXdDaG9yZXMiLCJmaWx0ZXIiLCJfaWQiLCJzcGxpY2UiLCJsaXN0IiwiaGFuZGxlRHJhZ0VuZCIsInJlc3VsdCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicmVvcmRlcmVkSXRlbSIsInVzZXJfaWQiLCJuYW1lIiwiZGV0YWlscyIsImNvbXBsZXRlZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJ3aWR0aCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/ChoresList.js\n");

/***/ })

});