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
exports.id = "pages/user/[username]";
exports.ids = ["pages/user/[username]"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n            value: [\n                state,\n                setState\n            ],\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\context\\\\index.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRCxFQUFvRTtJQUNwRVQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZPLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxiLCtEQUFzQixHQUFHZ0IsMkJBQTJCO0lBR3BELE1BQU0sNkVBQUM7OEZBRUZkLFdBQVcsQ0FBQ2lCLFFBQVE7WUFBQ0MsS0FBSyxFQUFJLENBQUNmO2dCQUFBQSxLQUFLO2dCQUFFQyxRQUFRO1lBQUEsQ0FBQztzQkFDN0NGLFFBQVE7Ozs7Ozs7QUFJakIsQ0FBQztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICAvL2F0dGVtcHRpbmcgdG8gZ2V0IGF1dGhlbnRpY2F0aW9uIGtleSBmcm9tIGxvY2FsIHN0b3JhZ2Ugb24gc3RhcnR1cFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+ICAgIFxyXG4gICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/user/[username].js":
/*!**********************************!*\
  !*** ./pages/user/[username].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n\n\n\n\n\nfunction Invite() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchUser = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/user/${router.query._id}`);\n            console.log(response);\n        // setUser(response);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchUser();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Invite Page\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[username].js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[username].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invite);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1t1c2VybmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNlO0FBQ0w7U0FDdENNLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlOLGlEQUFVLENBQUNHLHVEQUFXO0lBQ2hELEtBQUssTUFBRUksSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLEtBQUssQ0FBQ1EsTUFBTSxHQUFHVixzREFBUztJQUN4QixLQUFLLENBQUNXLFNBQVMsYUFBYSxDQUFDO1FBQzNCLEdBQUcsRUFBQztZQUNGLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ2IsZ0RBQVMsRUFBRSxNQUFNLEVBQUVXLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxHQUFHO1lBQzFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUNwQixFQUFxQjtRQUN2QixDQUFDLENBQUMsS0FBSyxFQUFDTSxHQUFHLEVBQUMsQ0FBQztZQUNYRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNEZixnREFBUyxLQUFLLENBQUM7UUFDYlEsU0FBUztJQUNYLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNIUSxDQUFHO1FBQUNDLFNBQVMsRUFBRyxDQUFNOzhGQUNwQkMsQ0FBRTtzQkFBQyxDQUFXOzs7Ozs7Ozs7OztBQUlyQixDQUFDO0FBRUQsaUVBQWVoQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdXNlci9bdXNlcm5hbWVdLmpzPzQ1OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZUNvbnRleHQsdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi8uLi9jb250ZXh0L2luZGV4XCJcclxuZnVuY3Rpb24gSW52aXRlKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jKCk9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvdXNlci8ke3JvdXRlci5xdWVyeS5faWR9YClcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAvLyBzZXRVc2VyKHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sW10pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJwdC01XCI+XHJcbiAgICAgIDxoMT5JbnZpdGUgUGFnZTwvaDE+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnZpdGUiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIkludml0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImZldGNoVXNlciIsInJlc3BvbnNlIiwiZ2V0IiwicXVlcnkiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[username].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/[username].js"));
module.exports = __webpack_exports__;

})();