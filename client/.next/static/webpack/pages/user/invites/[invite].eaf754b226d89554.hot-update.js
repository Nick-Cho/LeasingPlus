"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/invites/[invite]",{

/***/ "./pages/user/invites/[invite].js":
/*!****************************************!*\
  !*** ./pages/user/invites/[invite].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/index */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction ViewInvite() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), invite = ref[0], setInvite = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), landlord = ref2[0], setLandlord = ref2[1];\n    var getInvite = function() {\n        var _ref = _asyncToGenerator(C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return C_Users_Nick_Desktop_Coding_LeasingPlus_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"get-invite/\".concat(router.query.invite, \"/\").concat(state.user._id));\n                    case 2:\n                        response = _ctx.sent;\n                        setInvite(response.data.invite);\n                        setLandlord(response.data.user.name);\n                        console.log(response);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getInvite(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getInvite();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            paddingTop: \"4rem\",\n            minHeight: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"offset-md-3 col-md-6 mt-4\",\n            style: {\n                backgroundColor: \"rgb(30,30,30)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"text-light text-center display-3\",\n                    children: \"Invite Details\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"text-light text-center display-6\",\n                    children: [\n                        \"Landlord: \",\n                        landlord\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\invites\\\\[invite].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n_s(ViewInvite, \"t8aeehK3Lkkj0bM8q1wvMHvDJms=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ViewInvite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewInvite);\nvar _c;\n$RefreshReg$(_c, \"ViewInvite\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ludml0ZXMvW2ludml0ZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDSDtBQUN6QjtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQzVCTSxVQUFVLEdBQUcsQ0FBQzs7SUFDckIsR0FBSyxDQUFzQk4sR0FBVSxHQUFWQSwrQ0FBUSxJQUE1Qk8sTUFBTSxHQUFjUCxHQUFVLEtBQXRCUSxTQUFTLEdBQUdSLEdBQVU7SUFDckMsR0FBSyxDQUFDUyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEdBQUssQ0FBb0JKLElBQXVCLEdBQXZCQSxpREFBVSxDQUFDRSx1REFBVyxHQUF4Q08sS0FBSyxHQUFhVCxJQUF1QixLQUFuQ1UsUUFBUSxHQUFJVixJQUF1QjtJQUNoRCxHQUFLLENBQTJCRCxJQUFVLEdBQVZBLCtDQUFRLElBQWpDWSxRQUFRLEdBQWlCWixJQUFVLEtBQXpCYSxXQUFXLEdBQUliLElBQVU7SUFDMUMsR0FBSyxDQUFDYyxTQUFTOytMQUFHLFFBQVEsU0FBREMsQ0FBQyxFQUFLLENBQUM7Z0JBRXhCQyxRQUFROzs7OzsrQkFBU1osZ0RBQVMsQ0FBRSxDQUFXLGFBQXlCTSxNQUFjLENBQXJDRCxNQUFNLENBQUNTLEtBQUssQ0FBQ1gsTUFBTSxFQUFDLENBQUMsSUFBaUIsT0FBZkcsS0FBSyxDQUFDUyxJQUFJLENBQUNDLEdBQUc7O3dCQUE5RUosUUFBUTt3QkFDZFIsU0FBUyxDQUFDUSxRQUFRLENBQUNLLElBQUksQ0FBQ2QsTUFBTTt3QkFDOUJNLFdBQVcsQ0FBQ0csUUFBUSxDQUFDSyxJQUFJLENBQUNGLElBQUksQ0FBQ0csSUFBSTt3QkFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixRQUFROzs7Ozs7UUFDdEIsQ0FBQzt3QkFOS0YsU0FBUyxDQUFVQyxDQUFDOzs7O0lBUTFCYixnREFBUyxDQUFDLFFBQ1gsR0FEZSxDQUFDO1FBQ2JZLFNBQVM7SUFDWCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSw2RUFDSFcsQ0FBRztRQUFDQyxLQUFLLEVBQUksQ0FBQ0M7WUFBQUEsZUFBZSxFQUFFLENBQU87WUFBRUMsVUFBVSxFQUFDLENBQU07WUFBRUMsU0FBUyxFQUFFLENBQU87UUFBQSxDQUFDOzhGQUM1RUosQ0FBRztZQUFDSyxTQUFTLEVBQUUsQ0FBMkI7WUFBQ0osS0FBSyxFQUFJLENBQUNDO2dCQUFBQSxlQUFlLEVBQUUsQ0FBZTtZQUFBLENBQUM7OzRGQUNwRkksQ0FBRTtvQkFBQ0QsU0FBUyxFQUFHLENBQWtDOzhCQUFDLENBQWM7Ozs7Ozs0RkFDaEVDLENBQUU7b0JBQUNELFNBQVMsRUFBRyxDQUFrQzs7d0JBQUMsQ0FBVTt3QkFBQ2xCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5RSxDQUFDO0dBN0JRTixVQUFVOztRQUVGRCxrREFBUzs7O0tBRmpCQyxVQUFVO0FBK0JuQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2ludml0ZXMvW2ludml0ZV0uanM/OWQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L2luZGV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFZpZXdJbnZpdGUoKSB7XHJcbiAgY29uc3QgW2ludml0ZSwgc2V0SW52aXRlXT0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2xhbmRsb3JkLCBzZXRMYW5kbG9yZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGdldEludml0ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgZ2V0LWludml0ZS8ke3JvdXRlci5xdWVyeS5pbnZpdGV9LyR7c3RhdGUudXNlci5faWR9YCk7XHJcbiAgICBzZXRJbnZpdGUocmVzcG9uc2UuZGF0YS5pbnZpdGUpO1xyXG4gICAgc2V0TGFuZGxvcmQocmVzcG9uc2UuZGF0YS51c2VyLm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGdldEludml0ZSgpXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBwYWRkaW5nVG9wOlwiNHJlbVwiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIn19PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9IFwib2Zmc2V0LW1kLTMgY29sLW1kLTYgbXQtNFwiIHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMwLDMwLDMwKVwifX0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwidGV4dC1saWdodCB0ZXh0LWNlbnRlciBkaXNwbGF5LTNcIj5JbnZpdGUgRGV0YWlsczwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZSA9IFwidGV4dC1saWdodCB0ZXh0LWNlbnRlciBkaXNwbGF5LTZcIj5MYW5kbG9yZDoge2xhbmRsb3JkfTwvaDE+XHJcbiAgICAgICAgey8qIDxoMSBjbGFzc05hbWUgPSBcInRleHQtbGlnaHQgdGV4dC1jZW50ZXIgZGlzcGxheS02XCI+QWRkcmVzczoge2ludml0ZS5hZGRyZXNzfTwvaDE+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld0ludml0ZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsImF4aW9zIiwidXNlUm91dGVyIiwiVmlld0ludml0ZSIsImludml0ZSIsInNldEludml0ZSIsInJvdXRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJsYW5kbG9yZCIsInNldExhbmRsb3JkIiwiZ2V0SW52aXRlIiwiZSIsInJlc3BvbnNlIiwiZ2V0IiwicXVlcnkiLCJ1c2VyIiwiX2lkIiwiZGF0YSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwibWluSGVpZ2h0IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/invites/[invite].js\n");

/***/ })

});