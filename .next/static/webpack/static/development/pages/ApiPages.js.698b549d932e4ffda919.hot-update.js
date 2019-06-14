webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Search.js";



var Search = function Search(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('tech'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var inputChange = function inputChange(e) {
    setSearch(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    onSubmit: function onSubmit() {
      return props.submitInput(search);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: search,
    onChange: inputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    onClick: function onClick() {
      return props.submitInput(search);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Search"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=ApiPages.js.698b549d932e4ffda919.hot-update.js.map