webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/Fetcher.js":
/*!*******************************!*\
  !*** ./components/Fetcher.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);



var Fetcher = function Fetcher(page) {
  var data = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    console.log("starting");
    var url = 'https://newsapi.org/v2/everything?' + 'q=&' + 'sortBy=popularity&' + 'page=' + page + '&' + 'pageSize=5&' + 'apiKey=3b214239993247f18926b8fab6ee014f';
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      //console.log(json)
      resolve(json);
    });
  });
  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (Fetcher);

/***/ })

})
//# sourceMappingURL=ApiPages.js.14438eb4eebf1b2cc0b0.hot-update.js.map