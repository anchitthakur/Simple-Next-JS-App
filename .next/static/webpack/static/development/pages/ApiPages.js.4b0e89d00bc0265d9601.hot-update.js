webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Pagination.js";


var Pagination = function Pagination(_ref) {
  var increaseHandler = _ref.increaseHandler,
      decreaseHandler = _ref.decreaseHandler,
      clickHandler = _ref.clickHandler,
      pages = _ref.pages,
      page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: decreaseHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[0] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[0]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, pages[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[1] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[1]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, pages[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[2] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[2]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, pages[2])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[3] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[3]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, pages[3])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[4] === page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return clickHandler(pages[4]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, pages[4])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[4] === 20 ? "page-item disabled" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    enabled: "true",
    onClick: increaseHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "+")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=ApiPages.js.4b0e89d00bc0265d9601.hot-update.js.map