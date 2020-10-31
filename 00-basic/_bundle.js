/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./mentor.js":
/*!*******************!*\
  !*** ./mentor.js ***!
  \*******************/
/*! default exports */
/*! export notify [provided] [no usage info] [missing usage info prevents renaming] */
/*! export timeslots [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\nfunction notify() {\n  console.log('Mentor notified')\n}\n\nfunction timeslots() {\n  return ['9PM Today', '3PM Tomorrow']\n}\n\nmodule.exports.timeslots = timeslots;\nmodule.exports.notify = notify;\n\n\n//# sourceURL=webpack://00-basic/./mentor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*******************!*\
  !*** ./mentee.js ***!
  \*******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const mentor = __webpack_require__(/*! ./mentor */ \"./mentor.js\")\n\nfunction notify() {\n  console.log('Mentee notified')\n}\n\nfunction mentorTimeslots() {\n  return mentor.timeslots();\n}\n\n// Mock UI code\n\n(function() {\n  const root = document.querySelector('#root');\n  root.innerHTML = `<h1>Scaler Dashboard</h1>`;\n\n  root.innerHTML += `<p>Mentor Session Timeslots</p>`;\n\n  mentorTimeslots().forEach((t) => root.innerHTML += `${t} <br>`);\n})();\n\n\n//# sourceURL=webpack://00-basic/./mentee.js?");
})();

/******/ })()
;