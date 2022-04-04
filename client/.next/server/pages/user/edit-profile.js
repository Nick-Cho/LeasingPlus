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
exports.id = "pages/user/edit-profile";
exports.ids = ["pages/user/edit-profile"];
exports.modules = {

/***/ "./pages/user/edit-profile.js":
/*!************************************!*\
  !*** ./pages/user/edit-profile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction EditProfile() {\n    const handleImage = async (e)=>{\n        const file = e.target.files[0];\n        let formData = new FormData();\n        formData.append(\"image\", file);\n        // console.log([...formData]);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/upload-image\", formData);\n            console.log(\"Return from upload image backend endpoint: \", response);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"test\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\edit-profile.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                style: {\n                    cursor: \"pointer\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CameraOutlined, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\edit-profile.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: handleImage,\n                        type: \"file\",\n                        accept: \"images/*\",\n                        hidden: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\edit-profile.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\edit-profile.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nick\\\\Desktop\\\\Coding\\\\LeasingPlus\\\\client\\\\pages\\\\user\\\\edit-profile.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2VkaXQtcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRTtBQUNxQjtBQUN2QjtTQUNoQkksV0FBVyxHQUFHLENBQUM7SUFDdEIsS0FBSyxDQUFDQyxXQUFXLFVBQVVDLENBQUMsR0FBSSxDQUFDO1FBQy9CLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDQyxRQUFRO1FBQzNCRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxDQUFPLFFBQUVMLElBQUk7UUFDN0IsRUFBOEI7UUFDOUIsR0FBRyxFQUFDO1lBQ0YsS0FBSyxDQUFDTSxRQUFRLEdBQUcsS0FBSyxDQUFDVixpREFBVSxDQUFDLENBQWUsZ0JBQUVPLFFBQVE7WUFDM0RLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZDLDhDQUFFSCxRQUFRO1FBQ3JFLENBQUMsQ0FBQyxLQUFLLEVBQUNJLEdBQUcsRUFBQyxDQUFDO1lBQ1hGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBSTs7Ozs7O3dGQUNQQyxDQUFLO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLE1BQU0sRUFBRSxDQUFTO2dCQUFBLENBQUM7O2dHQUM5QnBCLDZEQUFjOzs7OztnR0FDZHFCLENBQUs7d0JBQUNDLFFBQVEsRUFBRW5CLFdBQVc7d0JBQUVvQixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsTUFBTSxFQUFDLENBQVU7d0JBQUNDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRSxDQUFDO0FBRUQsaUVBQWV2QixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvdXNlci9lZGl0LXByb2ZpbGUuanM/NjBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QXZhdGFyfSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7Q2FtZXJhT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmZ1bmN0aW9uIEVkaXRQcm9maWxlKCkge1xyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gYXN5bmMgKGUpID0+e1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFsuLi5mb3JtRGF0YV0pO1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvdXBsb2FkLWltYWdlXCIsIGZvcm1EYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJldHVybiBmcm9tIHVwbG9hZCBpbWFnZSBiYWNrZW5kIGVuZHBvaW50OiBcIiwgcmVzcG9uc2UpXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT50ZXN0PC9oMT5cclxuICAgICAgPGxhYmVsIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxyXG4gICAgICAgIDxDYW1lcmFPdXRsaW5lZCAvPiBcclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUltYWdlfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlcy8qXCIgaGlkZGVuLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2ZpbGUiXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJDYW1lcmFPdXRsaW5lZCIsImF4aW9zIiwiRWRpdFByb2ZpbGUiLCJoYW5kbGVJbWFnZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImVyciIsImRpdiIsImgxIiwibGFiZWwiLCJzdHlsZSIsImN1cnNvciIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwiYWNjZXB0IiwiaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/edit-profile.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

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
var __webpack_exports__ = (__webpack_exec__("./pages/user/edit-profile.js"));
module.exports = __webpack_exports__;

})();