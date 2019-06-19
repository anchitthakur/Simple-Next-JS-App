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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/actions/pageAction */ "./components/actions/pageAction.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Search.js";






var Search = function Search(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('tech'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var inputChange = function inputChange(e) {
    setSearch(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.changeSearch(search);
    setSearch('');
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: props.search,
    onChange: inputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Search"));
};

Search.Proptypes = {
  changeSearch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.page.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  changeSearch: _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_3__["changeSearch"]
})(Search));

/***/ })

})
//# sourceMappingURL=ApiPages.js.3f551f1cbf4399e72828.hot-update.js.map