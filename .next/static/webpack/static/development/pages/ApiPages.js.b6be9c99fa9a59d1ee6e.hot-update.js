webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/actions/pagesActions.js":
/*!********************************************!*\
  !*** ./components/actions/pagesActions.js ***!
  \********************************************/
/*! exports provided: increasePages, decreasePages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increasePages", function() { return increasePages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreasePages", function() { return decreasePages; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./components/actions/types.js");


var increasePages = function increasePages(pages) {
  return function (dispatch) {
    var arr = [];

    for (var i in pages) {
      arr.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(pages[i]) + 1);
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["INCREASE_PAGES"],
      payload: arr
    });
  };
};
var decreasePages = function decreasePages(pages) {
  return function (dispatch) {
    var arr = [];

    for (var i in pages) {
      arr.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(pages[i]) - 1);
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["DECREASE_PAGES"],
      payload: arr
    });
  };
};

/***/ })

})
//# sourceMappingURL=ApiPages.js.b6be9c99fa9a59d1ee6e.hot-update.js.map