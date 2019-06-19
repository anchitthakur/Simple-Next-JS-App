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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NewsItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NewsItem */ "./components/NewsItem.js");
/* harmony import */ var _components_actions_postActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/actions/postActions */ "./components/actions/postActions.js");

var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Api.js";






function Api(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //if (Object.keys(props.posts).length == 0)
    props.fetchPosts({
      page: props.page,
      search: props.search
    });
  }, [props.page, props.search]);
  var arr = [];

  if (props.posts.status === 'ok') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(props.posts.articles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        arr.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_NewsItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i.url,
          props: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
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
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, arr);
}

Api.propTypes = {
  fetchPosts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  search: propTypes.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    page: state.page.page,
    search: state.page.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  fetchPosts: _components_actions_postActions__WEBPACK_IMPORTED_MODULE_5__["fetchPosts"]
})(Api));

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Search.js";



var Search = function Search(props) {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.changePage(search);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: search,
    onChange: inputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Search"));
};

Search.propTypes = {
  changePage: propTypes.func.isRequired,
  search: propTypes.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.page.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mapStateToProps, {
  changePage: changePage
})(Search));

/***/ }),

/***/ "./components/actions/pageAction.js":
/*!******************************************!*\
  !*** ./components/actions/pageAction.js ***!
  \******************************************/
/*! exports provided: changePage, changeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePage", function() { return changePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeSearch", function() { return changeSearch; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./components/actions/types.js");

var changePage = function changePage(p) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PAGE"],
      payload: p
    });
  };
};
var changeSearch = function changeSearch(s) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_SEARCH"],
      payload: s
    });
  };
};

/***/ }),

/***/ "./components/actions/types.js":
/*!*************************************!*\
  !*** ./components/actions/types.js ***!
  \*************************************/
/*! exports provided: FETCH_POSTS, INCREASE_PAGES, DECREASE_PAGES, CHANGE_PAGE, CHANGE_SEARCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS", function() { return FETCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREASE_PAGES", function() { return INCREASE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREASE_PAGES", function() { return DECREASE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PAGE", function() { return CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SEARCH", function() { return CHANGE_SEARCH; });
var FETCH_POSTS = 'FETCH_POSTS';
var INCREASE_PAGES = 'INCREASE_PAGES';
var DECREASE_PAGES = 'DECREASE_PAGES';
var CHANGE_PAGE = 'CHANGE_PAGE';
var CHANGE_SEARCH = 'CHANGE_SEARCH';

/***/ }),

/***/ "./components/reducers/pageReducer.js":
/*!********************************************!*\
  !*** ./components/reducers/pageReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./components/actions/types.js");


var initialState = {
  page: 1,
  search: 'tech'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PAGE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        page: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CHANGE_SEARCH"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        search: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./pages/ApiPages.js":
/*!***************************!*\
  !*** ./pages/ApiPages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Api */ "./components/Api.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/store */ "./components/store.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\pages\\ApiPages.js";










var ApiPages = function ApiPages() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _components_store__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    keywords: "API",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "NEWS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Api__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ApiPages);

/***/ })

})
//# sourceMappingURL=ApiPages.js.2bb2db2001da44a2f111.hot-update.js.map