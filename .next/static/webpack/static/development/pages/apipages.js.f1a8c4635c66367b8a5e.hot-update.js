webpackHotUpdate("static\\development\\pages\\apipages.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_actions_pagesActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/actions/pagesActions */ "./components/actions/pagesActions.js");
/* harmony import */ var _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/actions/pageAction */ "./components/actions/pageAction.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Pagination.js";






var Pagination = function Pagination(props) {
  var pages = props.pages;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[0] === 1 ? "page-item disabled" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.decreasePages(pages);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "-")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[0] === props.page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[0]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, pages[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[1] === props.page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[1]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, pages[1])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[2] === props.page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[2]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, pages[2])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[3] === props.page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[3]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, pages[3])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[4] === props.page ? "page-item active" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[4]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, pages[4])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: pages[4] === 20 ? "page-item disabled" : "page-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-link",
    enabled: "true",
    onClick: function onClick() {
      return props.increasePages(pages);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "+")));
};

Pagination.propTypes = {
  increasePages: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  decreasePages: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  pages: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    pages: state.pages.pages,
    page: state.page.page
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  decreasePages: _components_actions_pagesActions__WEBPACK_IMPORTED_MODULE_2__["decreasePages"],
  increasePages: _components_actions_pagesActions__WEBPACK_IMPORTED_MODULE_2__["increasePages"],
  changePage: _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_3__["changePage"]
})(Pagination));

/***/ })

})
//# sourceMappingURL=apipages.js.f1a8c4635c66367b8a5e.hot-update.js.map