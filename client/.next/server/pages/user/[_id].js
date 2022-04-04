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
exports.id = "pages/user/[_id]";
exports.ids = ["pages/user/[_id]"];
exports.modules = {

/***/ "./components/forms/InviteForm.js":
/*!****************************************!*\
  !*** ./components/forms/InviteForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction InviteForm() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"InviteForm\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\components\\\\forms\\\\InviteForm.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InviteForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL0ludml0ZUZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO1NBRWhCQyxVQUFVLEdBQUcsQ0FBQztJQUNyQixNQUFNLDZFQUNIQyxDQUFHO2tCQUFDLENBQVU7Ozs7OztBQUVuQixDQUFDO0FBRUQsaUVBQWVELFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2Zvcm1zL0ludml0ZUZvcm0uanM/ODMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBJbnZpdGVGb3JtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2Pkludml0ZUZvcm08L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludml0ZUZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnZpdGVGb3JtIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/forms/InviteForm.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    //attempting to get authentication key from local storage on startup\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem('auth')));\n    }, []);\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n            value: [\n                state,\n                setState\n            ],\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\context\\\\index.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQy9CO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBQztRQUNsQ1UsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFFRCxFQUFvRTtJQUNwRVQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZPLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTTtJQUN4RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxiLCtEQUFzQixHQUFHZ0IsMkJBQTJCO0lBR3BELE1BQU0sNkVBQUM7OEZBRUZkLFdBQVcsQ0FBQ2lCLFFBQVE7WUFBQ0MsS0FBSyxFQUFJLENBQUNmO2dCQUFBQSxLQUFLO2dCQUFFQyxRQUFRO1lBQUEsQ0FBQztzQkFDN0NGLFFBQVE7Ozs7Ozs7QUFJakIsQ0FBQztBQUVnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyOiB7fSxcclxuICAgIHRva2VuOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICAvL2F0dGVtcHRpbmcgdG8gZ2V0IGF1dGhlbnRpY2F0aW9uIGtleSBmcm9tIGxvY2FsIHN0b3JhZ2Ugb24gc3RhcnR1cFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+ICAgIFxyXG4gICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/user/[_id].js":
/*!*****************************!*\
  !*** ./pages/user/[_id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/index */ \"./context/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forms_InviteForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forms/InviteForm */ \"./components/forms/InviteForm.js\");\n\n\n\n\n\n\n\nfunction Invite() {\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_index__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchUser = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/user/${router.query._id}`);\n            setUser(response.data.user);\n        // console.log(\"Response from fetch user:\", user);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchUser();\n    }, [\n        router.query._id\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        style: {\n            backgroundColor: \"black\",\n            minHeight: \"100vh\",\n            paddingTop: \"4rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col text-center \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"display-3 text-light\",\n                        children: `Invite ${user.name} to your Lease?`\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"display-6 text-light\",\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font text-light\",\n                        children: user.email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_InviteForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nicho\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\[_id].js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invite);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tfaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1k7QUFDZTtBQUNMO0FBQ3BCO0FBQytCO1NBRWpEUSxNQUFNLEdBQUcsQ0FBQztJQUNqQixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJUixpREFBVSxDQUFDRyx1REFBVztJQUNoRCxLQUFLLE1BQUVNLElBQUksTUFBRUMsT0FBTyxNQUFJVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxLQUFLLENBQUNVLE1BQU0sR0FBR1osc0RBQVM7SUFDeEIsS0FBSyxDQUFDYSxTQUFTLGFBQWEsQ0FBQztRQUMzQixHQUFHLEVBQUM7WUFDRixLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNmLGdEQUFTLEVBQUUsTUFBTSxFQUFFYSxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsR0FBRztZQUMxRE4sT0FBTyxDQUFDRyxRQUFRLENBQUNJLElBQUksQ0FBQ1IsSUFBSTtRQUMxQixFQUFrRDtRQUNwRCxDQUFDLENBQUMsS0FBSyxFQUFDUyxHQUFHLEVBQUMsQ0FBQztZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUNEaEIsZ0RBQVMsS0FBSyxDQUFDO1FBQ2JVLFNBQVM7SUFDWCxDQUFDLEVBQUMsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDSSxLQUFLLENBQUNDLEdBQUc7SUFBQSxDQUFDO0lBRXBCLE1BQU0sNkVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFHLENBQWlCO1FBQUNDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxlQUFlLEVBQUUsQ0FBTztZQUFFQyxTQUFTLEVBQUUsQ0FBTztZQUFFQyxVQUFVLEVBQUMsQ0FBTTtRQUFBLENBQUM7OEZBQ3hHTCxDQUFHO1lBQUNDLFNBQVMsRUFBRyxDQUFLO2tHQUNuQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQWtCOztnR0FDaENLLENBQUU7d0JBQUNMLFNBQVMsRUFBRSxDQUFzQjttQ0FBRyxPQUFPLEVBQUViLElBQUksQ0FBQ21CLElBQUksQ0FBQyxlQUFlOzs7Ozs7Z0dBQ3pFQyxDQUFFO3dCQUFDUCxTQUFTLEVBQUcsQ0FBc0I7a0NBQUViLElBQUksQ0FBQ21CLElBQUk7Ozs7OztnR0FDaERFLENBQUU7d0JBQUNSLFNBQVMsRUFBRyxDQUFpQjtrQ0FBRWIsSUFBSSxDQUFDc0IsS0FBSzs7Ozs7O2dHQUU1QzFCLG9FQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckIsQ0FBQztBQUVELGlFQUFlQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdXNlci9bX2lkXS5qcz85NDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VDb250ZXh0LHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tIFwiLi4vLi4vY29udGV4dC9pbmRleFwiXHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW52aXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0ludml0ZUZvcm0nXHJcblxyXG5mdW5jdGlvbiBJbnZpdGUoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMoKT0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYC91c2VyLyR7cm91dGVyLnF1ZXJ5Ll9pZH1gKVxyXG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEudXNlcilcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJSZXNwb25zZSBmcm9tIGZldGNoIHVzZXI6XCIsIHVzZXIpO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSxbcm91dGVyLnF1ZXJ5Ll9pZF0pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiwgcGFkZGluZ1RvcDpcIjRyZW1cIn19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbCB0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWUgPVwiZGlzcGxheS0zIHRleHQtbGlnaHRcIj57YEludml0ZSAke3VzZXIubmFtZX0gdG8geW91ciBMZWFzZT9gfTwvaDE+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lID0gXCJkaXNwbGF5LTYgdGV4dC1saWdodFwiPnt1c2VyLm5hbWV9PC9oND5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWUgPSBcImZvbnQgdGV4dC1saWdodFwiPnt1c2VyLmVtYWlsfTwvaDM+XHJcblxyXG4gICAgICAgICAgPEludml0ZUZvcm0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52aXRlIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJBdmF0YXIiLCJJbnZpdGVGb3JtIiwiSW52aXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwiZmV0Y2hVc2VyIiwicmVzcG9uc2UiLCJnZXQiLCJxdWVyeSIsIl9pZCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJwYWRkaW5nVG9wIiwiaDEiLCJuYW1lIiwiaDQiLCJoMyIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[_id].js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

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
var __webpack_exports__ = (__webpack_exec__("./pages/user/[_id].js"));
module.exports = __webpack_exports__;

})();