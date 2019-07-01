webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./pages/ApiPages.js":
/*!***************************!*\
  !*** ./pages/ApiPages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/lib/index.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api */ "./components/Api.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/actions/pageAction */ "./components/actions/pageAction.js");




var _jsxFileName = "C:\\Users\\im\\Desktop\\main\\pages\\ApiPages.js";











var ApiPages = function ApiPages(props) {
  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.data),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var test = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    test.current = 1;
  }, [props.search]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!props.isFetched || mounted.current == 1) {
      ApiPages.getInitialProps({
        page: test.current ? 1 : props.page,
        search: props.search,
        isUser: 1
      }).then(function (json) {
        console.log(test.current);

        if (test.current == 0) {
          var temp = jsonConcat(data, json.data);
          setData(temp);
        } else {
          //changePage(1)
          setData(json.data);
          test.current = 0;
        }
      });
    } else mounted.current = 1;
  }, [props.page, props.search]);

  var fetchMoreData = function fetchMoreData() {
    console.log("called");
    props.changePage(props.page + 1);
  };

  function jsonConcat(o1, o2) {
    var t = [];

    for (var key in o1) {
      t[_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(key)] = o1[key];
    }

    for (var key in o2) {
      t[_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(key) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(data.length)] = o2[key];
    }

    return t;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
    keywords: "API",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "NEWS"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
    dataLength: data.length,
    next: fetchMoreData,
    hasMore: data.length === 100 ? false : true,
    loader: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Loading..."),
    endMessage: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Yay! You have seen it all")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Api__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))));
};

ApiPages.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var _ref$search, search, _ref$page, page, _ref$isUser, isUser, url, res, json;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$search = _ref.search, search = _ref$search === void 0 ? "tech" : _ref$search, _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$isUser = _ref.isUser, isUser = _ref$isUser === void 0 ? 0 : _ref$isUser;

            if (!(isUser == 0 && !(typeof window === "undefined"))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              data: [],
              isFetched: false
            });

          case 3:
            url = "https://newsapi.org/v2/everything?" + "q=" + search + "&" + "sortBy=publishedAt&" + "page=" + page + "&" + "pageSize=10&language=en&" + "apiKey=3b214239993247f18926b8fab6ee014f";
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(url);

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            json = _context.sent;
            return _context.abrupt("return", {
              data: json.articles,
              isFetched: true
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page.page,
    search: state.page.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  changePage: _components_actions_pageAction__WEBPACK_IMPORTED_MODULE_12__["changePage"]
})(ApiPages));

/***/ })

})
//# sourceMappingURL=ApiPages.js.9113c3f5875891f0e744.hot-update.js.map