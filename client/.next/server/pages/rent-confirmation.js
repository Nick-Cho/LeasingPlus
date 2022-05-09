"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/rent-confirmation";
exports.ids = ["pages/rent-confirmation"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    const token = state && state.token ? state.token : \" \";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n            value: [\n                state,\n                setState\n            ],\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\context\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRCxFQUFvRTtJQUNwRVQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZPLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDTCxLQUFLLEdBQUdILEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSyxHQUFHLENBQUc7SUFFdERSLG9GQUE2QyxJQUFNLE9BQU8sRUFBRVEsS0FBSztJQUNqRVIsK0RBQXNCLEdBQUdrQiwyQkFBMkI7SUFHcEQsTUFBTSw2RUFBQzs4RkFFRmhCLFdBQVcsQ0FBQ21CLFFBQVE7WUFBQ0MsS0FBSyxFQUFJLENBQUNqQjtnQkFBQUEsS0FBSztnQkFBRUMsUUFBUTtZQUFBLENBQUM7c0JBQzdDRixRQUFROzs7Ozs7O0FBSWpCLENBQUM7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy9hdHRlbXB0aW5nIHRvIGdldCBhdXRoZW50aWNhdGlvbiBrZXkgZnJvbSBsb2NhbCBzdG9yYWdlIG9uIHN0YXJ0dXBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA/IHN0YXRlLnRva2VuIDogXCIgXCI7XHJcblxyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9ICBgQmVhcmVyICR7dG9rZW59YDtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+ICAgIFxyXG4gICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/rent-confirmation.js":
/*!************************************!*\
  !*** ./pages/rent-confirmation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction RentConfirmation() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_js__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('/stripe-account-onboard');\n        // console.log(response);\n        setState({\n            user: state.user,\n            token: state.token,\n            stripe_id: response.data.stripe_id\n        });\n    // console.log(state);\n    // router.push(response.data.redirect)\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        className: \"container-fluid\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"offset-md-2 col-md-8 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"pt-5 text-light font display-4\",\n                            children: \"Do you want to pay rent now?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-light font display-6\",\n                            children: [\n                                \"Rent Due: $\",\n                                state.user.room.rent\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-light font display-6\",\n                            children: [\n                                \"Address: \",\n                                state.user.room.address\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-success\",\n                            children: \"Proceed to Payment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\rent-confirmation.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RentConfirmation);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZW50LWNvbmZpcm1hdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNTO0FBQ3RCO0FBQ1k7U0FDNUJLLGdCQUFnQixHQUFHLENBQUM7SUFDM0IsS0FBSyxNQUFFQyxLQUFLLE1BQUNDLFFBQVEsTUFBSU4saURBQVUsQ0FBQ0MsMERBQVc7SUFDL0MsS0FBSyxDQUFDTSxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQ0ssWUFBWSxVQUFTQyxDQUFDLEdBQUksQ0FBQztRQUMvQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1QsaURBQVUsQ0FBQyxDQUF5QjtRQUMzRCxFQUF5QjtRQUN6QkksUUFBUSxDQUFDLENBQUNPO1lBQUFBLElBQUksRUFBRVIsS0FBSyxDQUFDUSxJQUFJO1lBQUVDLEtBQUssRUFBRVQsS0FBSyxDQUFDUyxLQUFLO1lBQUVDLFNBQVMsRUFBRUosUUFBUSxDQUFDSyxJQUFJLENBQUNELFNBQVM7UUFBQSxDQUFDO0lBQ25GLEVBQXNCO0lBQ3RCLEVBQXNDO0lBQ3hDLENBQUM7SUFDRCxNQUFNLDZFQUNIRSxDQUFHO1FBQUNDLEtBQUssRUFBSSxDQUFDQztZQUFBQSxlQUFlLEVBQUUsQ0FBTztZQUFFQyxTQUFTLEVBQUUsQ0FBTztZQUFFQyxVQUFVLEVBQUUsQ0FBTTtRQUFBLENBQUM7UUFBRUMsU0FBUyxFQUFHLENBQWlCOzhGQUM1R0wsQ0FBRztZQUFDSyxTQUFTLEVBQUcsQ0FBSztrR0FDbkJMLENBQUc7Z0JBQUNLLFNBQVMsRUFBRSxDQUFrQztzR0FDL0NDLENBQUk7b0JBQUNDLFFBQVEsRUFBRWhCLFlBQVk7O29HQUN6QmlCLENBQUU7NEJBQUNILFNBQVMsRUFBRyxDQUFnQztzQ0FBQyxDQUE0Qjs7Ozs7O29HQUM1RUksQ0FBRTs0QkFBQ0osU0FBUyxFQUFHLENBQTJCOztnQ0FBQyxDQUFXO2dDQUFDakIsS0FBSyxDQUFDUSxJQUFJLENBQUNjLElBQUksQ0FBQ0MsSUFBSTs7Ozs7OztvR0FDM0VGLENBQUU7NEJBQUNKLFNBQVMsRUFBRyxDQUEyQjs7Z0NBQUUsQ0FBUztnQ0FBQ2pCLEtBQUssQ0FBQ1EsSUFBSSxDQUFDYyxJQUFJLENBQUNFLE9BQU87Ozs7Ozs7b0dBQzdFQyxDQUFNOzRCQUFDQyxJQUFJLEVBQUcsQ0FBUTs0QkFBQ1QsU0FBUyxFQUFHLENBQWlCO3NDQUFDLENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEYsQ0FBQztBQUVELGlFQUFlbEIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvcmVudC1jb25maXJtYXRpb24uanM/ODBmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L2luZGV4LmpzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuZnVuY3Rpb24gUmVudENvbmZpcm1hdGlvbigpIHtcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMoZSk9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9zdHJpcGUtYWNjb3VudC1vbmJvYXJkJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBzZXRTdGF0ZSh7dXNlcjogc3RhdGUudXNlciwgdG9rZW46IHN0YXRlLnRva2VuLCBzdHJpcGVfaWQ6IHJlc3BvbnNlLmRhdGEuc3RyaXBlX2lkfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAvLyByb3V0ZXIucHVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIG1pbkhlaWdodDogXCIxMDB2aFwiLCBwYWRkaW5nVG9wOiBcIjRyZW1cIn19IGNsYXNzTmFtZSA9IFwiY29udGFpbmVyLWZsdWlkXCI+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwib2Zmc2V0LW1kLTIgY29sLW1kLTggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9ICA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSBcInB0LTUgdGV4dC1saWdodCBmb250IGRpc3BsYXktNFwiPkRvIHlvdSB3YW50IHRvIHBheSByZW50IG5vdz88L2gyPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0gXCJ0ZXh0LWxpZ2h0IGZvbnQgZGlzcGxheS02XCI+UmVudCBEdWU6ICR7c3RhdGUudXNlci5yb29tLnJlbnR9PC9oND5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IFwidGV4dC1saWdodCBmb250IGRpc3BsYXktNlwiID5BZGRyZXNzOiB7c3RhdGUudXNlci5yb29tLmFkZHJlc3N9PC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIiBjbGFzc05hbWUgPSBcImJ0biBidG4tc3VjY2Vzc1wiPlByb2NlZWQgdG8gUGF5bWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW50Q29uZmlybWF0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZW50Q29uZmlybWF0aW9uIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsInVzZXIiLCJ0b2tlbiIsInN0cmlwZV9pZCIsImRhdGEiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsInBhZGRpbmdUb3AiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMiIsImg0Iiwicm9vbSIsInJlbnQiLCJhZGRyZXNzIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/rent-confirmation.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/rent-confirmation.js"));
module.exports = __webpack_exports__;

})();