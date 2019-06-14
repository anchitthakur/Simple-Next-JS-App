webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/Api.js":
/*!***************************!*\
  !*** ./components/Api.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_NewsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsItem */ "./components/NewsItem.js");
/* harmony import */ var _Fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fetcher */ "./components/Fetcher.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Api.js";




function Api(props) {
  console.log(props.search);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      arrv = _useState2[0],
      setArrv = _useState2[1];

  var arr = [];
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var data = Object(_Fetcher__WEBPACK_IMPORTED_MODULE_3__["default"])(props.page, props.search);
    data.then(function (a) {
      console.log(props.page);
      console.log(a);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(a.articles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          arr.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_NewsItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: i.url,
            props: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      setArrv(arr);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, arrv);
}

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ })

})
//# sourceMappingURL=ApiPages.js.82472132568ef1b51250.hot-update.js.map