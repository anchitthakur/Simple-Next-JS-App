webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./pages/ApiPages.js":
/*!***************************!*\
  !*** ./pages/ApiPages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Api */ "./components/Api.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\pages\\ApiPages.js";





var ApiPages = function ApiPages() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([1, 2, 3, 4, 5]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var clickHandler = function clickHandler(p) {
    window.scrollTo(0, 0);
    setPage(p);
  };

  var increaseHandler = function increaseHandler() {
    var arr = [];

    for (var i in pages) {
      console.log(arr);
      arr.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(pages[i]) + 1);
    }

    console.log(arr);
    setPages(arr);
  };

  var decreaseHandler = function decreaseHandler() {
    var arr = [];

    for (var i in pages) {
      console.log(arr);
      arr.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(pages[i]) - 1);
    }

    console.log(arr);
    setPages(arr);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Search")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Api__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[0] > 1 ? "page-item " : "page-item disabled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: decreaseHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "-")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[0] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[0]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, pages[0])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[1] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[1]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, pages[1])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[2] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[2]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, pages[2])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[3] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[3]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, pages[3])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[4] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[4]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, pages[4])), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: pages[4] === 20 ? "page-item disabled" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "page-link",
    enabled: "true",
    onClick: increaseHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "+"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ApiPages);

/***/ })

})
//# sourceMappingURL=ApiPages.js.3e60cc0cbfb1b73f47b5.hot-update.js.map