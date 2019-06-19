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

Api.Proptypes = {
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

/***/ })

})
//# sourceMappingURL=ApiPages.js.e082adaafdb6ef53468a.hot-update.js.map