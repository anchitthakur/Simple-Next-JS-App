module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NIQe");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Navbar.js





function Navbar() {
  var _useState = Object(external_react_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      curr = _useState2[0],
      setCurr = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    setCurr(location.pathname);
  }, []);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "navbar-brand"
  }, "My App")), external_react_default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarColor01",
    "aria-controls": "navbarColor01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, external_react_default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), external_react_default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarColor01"
  }, external_react_default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, external_react_default.a.createElement("li", {
    className: curr === '/' ? "nav-item active" : "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "Home ", external_react_default.a.createElement("span", {
    className: "sr-only"
  }, "(current)")))), external_react_default.a.createElement("li", {
    className: curr === '/About' ? "nav-item active" : "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/About"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "About"))), external_react_default.a.createElement("li", {
    className: curr === '/ApiPages' ? "nav-item active" : "nav-item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/ApiPages"
  }, external_react_default.a.createElement("a", {
    className: "nav-link"
  }, "API")))))));
}

/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./components/Layout.js




var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "My App"), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cosmo/bootstrap.min.css"
  })), external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(components_Navbar, null)), external_react_default.a.createElement("div", {
    className: "container"
  }, props.children));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "NIQe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// CONCATENATED MODULE: ./components/NewsItem.js

// import LazyLoad from 'react-lazy-load';
// const imgStyle = {
//     // height: '200px',
//     // width: '100px',
// };
// const NewsItem = ({ article }) => {
//     return (
//         <>
//             <div className="card mb-3">
//                 <div className="card-body">
//                     <h5 className="card-title"><b><u>{article.title}</u></b></h5>
//                     <h6 className="card-subtitle text-muted">{article.publishedAt}</h6>
//                 </div>
//                 <LazyLoad debounce={false}offsetVertical={500}>
//                     <img style={imgStyle} src={article.urlToImage} alt="Card image" />
//                 </LazyLoad>
//                 <div className="card-body">
//                     <b><p className="card-text">{article.description}</p></b>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item"><strong>Source : </strong><u>{article.source.name}</u></li>
//                 </ul>
//                 <div className="card-body">
//                     <a href={article.url} className="card-link" target="_blank" rel="noopener" >Full Article..</a>
//                 </div>
//                 <div className="card-footer text-muted">
//                 </div>
//             </div>
//         </>
//     );
// }
// export default NewsItem;

var imgStyle = {
  "width": '100%'
};

var NewsItem_NewsItem = function NewsItem(_ref) {
  var article = _ref.article;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "card mb-3"
  }, external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("h5", {
    className: "card-title"
  }, external_react_default.a.createElement("b", null, external_react_default.a.createElement("u", null, article.title))), external_react_default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, article.publishedAt)), external_react_default.a.createElement(external_react_lazy_load_default.a, {
    debounce: true,
    offsetVertical: 600
  }, external_react_default.a.createElement("img", {
    style: imgStyle,
    src: article.urlToImage,
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = "/static/img.png";
    }
  })), external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("b", null, external_react_default.a.createElement("p", {
    className: "card-text"
  }, article.description))), external_react_default.a.createElement("ul", {
    className: "list-group list-group-flush"
  }, external_react_default.a.createElement("li", {
    className: "list-group-item"
  }, external_react_default.a.createElement("strong", null, "Source : "), external_react_default.a.createElement("u", null, article.source.name))), external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("a", {
    href: article.url,
    className: "card-link",
    target: "_blank"
  }, "Full Article..")), external_react_default.a.createElement("div", {
    className: "card-footer text-muted"
  })));
};

/* harmony default export */ var components_NewsItem = (NewsItem_NewsItem);
// CONCATENATED MODULE: ./components/Api.js






function Api(props) {
  var arr = [];

  if (props.data.status === 'ok') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = get_iterator_default()(props.data.articles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
        arr.push(external_react_default.a.createElement(components_NewsItem, {
          key: i.url,
          article: i
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

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, arr);
}

Api.Proptypes = {
  posts: external_prop_types_default.a.object.isRequired,
  search: external_prop_types_default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page.page,
    search: state.page.search
  };
};

/* harmony default export */ var components_Api = (Object(external_react_redux_["connect"])(mapStateToProps, null)(Api));
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./components/actions/types.js
var types = __webpack_require__("xsir");

// CONCATENATED MODULE: ./components/actions/pageAction.js

var pageAction_changePage = function changePage(p) {
  return function (dispatch) {
    dispatch({
      type: types["a" /* CHANGE_PAGE */],
      payload: p
    });
  };
};
var pageAction_changeSearch = function changeSearch(s) {
  return function (dispatch) {
    dispatch({
      type: types["b" /* CHANGE_SEARCH */],
      payload: s
    });
  };
};
// CONCATENATED MODULE: ./components/Search.js







var Search_Search = function Search(props) {
  var _useState = Object(external_react_["useState"])('tech'),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var inputChange = function inputChange(e) {
    setSearch(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.changeSearch(search);
  };

  return external_react_default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    onSubmit: handleSubmit
  }, external_react_default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: props.search,
    onChange: inputChange
  }), external_react_default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit"
  }, "Search"));
};

Search_Search.Proptypes = {
  changeSearch: external_prop_types_default.a.func.isRequired,
  search: external_prop_types_default.a.string.isRequired
};

var Search_mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.page.search
  };
};

/* harmony default export */ var components_Search = (Object(external_react_redux_["connect"])(Search_mapStateToProps, {
  changeSearch: pageAction_changeSearch
})(Search_Search));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./components/actions/pagesActions.js


var pagesActions_increasePages = function increasePages(pages) {
  return function (dispatch) {
    var arr = [];

    for (var i in pages) {
      arr.push(parse_int_default()(pages[i]) + 1);
    }

    dispatch({
      type: types["d" /* INCREASE_PAGES */],
      payload: arr
    });
  };
};
var pagesActions_decreasePages = function decreasePages(pages) {
  return function (dispatch) {
    var arr = [];

    for (var i in pages) {
      arr.push(parse_int_default()(pages[i]) - 1);
    }

    dispatch({
      type: types["c" /* DECREASE_PAGES */],
      payload: arr
    });
  };
};
// CONCATENATED MODULE: ./components/Pagination.js





var Pagination_Pagination = function Pagination(props) {
  var pages = props.pages;
  return external_react_default.a.createElement("ul", {
    className: "pagination"
  }, external_react_default.a.createElement("li", {
    className: pages[0] === 1 ? "page-item disabled" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.decreasePages(pages);
    }
  }, "-")), external_react_default.a.createElement("li", {
    className: pages[0] === props.page ? "page-item active" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[0]);
    }
  }, pages[0])), external_react_default.a.createElement("li", {
    className: pages[1] === props.page ? "page-item active" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[1]);
    }
  }, pages[1])), external_react_default.a.createElement("li", {
    className: pages[2] === props.page ? "page-item active" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[2]);
    }
  }, pages[2])), external_react_default.a.createElement("li", {
    className: pages[3] === props.page ? "page-item active" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[3]);
    }
  }, pages[3])), external_react_default.a.createElement("li", {
    className: pages[4] === props.page ? "page-item active" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      return props.changePage(pages[4]);
    }
  }, pages[4])), external_react_default.a.createElement("li", {
    className: pages[4] === 20 ? "page-item disabled" : "page-item"
  }, external_react_default.a.createElement("a", {
    className: "page-link",
    enabled: "true",
    onClick: function onClick() {
      return props.increasePages(pages);
    }
  }, "+")));
};

var Pagination_mapStateToProps = function mapStateToProps(state) {
  return {
    pages: state.pages.pages,
    page: state.page.page
  };
};

/* harmony default export */ var components_Pagination = (Object(external_react_redux_["connect"])(Pagination_mapStateToProps, {
  decreasePages: pagesActions_decreasePages,
  increasePages: pagesActions_increasePages,
  changePage: pageAction_changePage
})(Pagination_Pagination));
// CONCATENATED MODULE: ./pages/ApiPages.js













var ApiPages_ApiPages = function ApiPages(props) {
  var _useState = Object(external_react_["useState"])(props.data),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var mounted = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(function () {
    if (!props.isFetched || mounted.current) ApiPages.getInitialProps({
      page: props.page,
      search: props.search,
      flag: 1
    }).then(function (json) {
      return setData(json.data);
    });else mounted.current = true;
  }, [props.page, props.search]);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    keywords: "API"
  })), external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement("h2", null, "NEWS"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(components_Search, null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(components_Pagination, null), external_react_default.a.createElement(components_Api, {
    data: data
  }), external_react_default.a.createElement(components_Pagination, null)));
};

ApiPages_ApiPages.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref) {
    var _ref$search, search, _ref$page, page, _ref$flag, flag, url, res, json;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$search = _ref.search, search = _ref$search === void 0 ? 'tech' : _ref$search, _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$flag = _ref.flag, flag = _ref$flag === void 0 ? 0 : _ref$flag;

            if (!(flag == 0 && !(typeof window === 'undefined'))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              data: {},
              isFetched: false
            });

          case 3:
            url = 'https://newsapi.org/v2/everything?' + 'q=' + search + '&' + 'sortBy=publishedAt&' + 'page=' + page + '&' + 'pageSize=10&language=en&' + 'apiKey=3b214239993247f18926b8fab6ee014f';
            _context.next = 6;
            return external_isomorphic_unfetch_default()(url);

          case 6:
            res = _context.sent;
            _context.next = 9;
            return res.json();

          case 9:
            json = _context.sent;
            return _context.abrupt("return", {
              data: json,
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

var ApiPages_mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page.page,
    search: state.page.search
  };
};

/* harmony default export */ var pages_ApiPages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(ApiPages_mapStateToProps, null)(ApiPages_ApiPages));

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xsir":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INCREASE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DECREASE_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_SEARCH; });
var INCREASE_PAGES = 'INCREASE_PAGES';
var DECREASE_PAGES = 'DECREASE_PAGES';
var CHANGE_PAGE = 'CHANGE_PAGE';
var CHANGE_SEARCH = 'CHANGE_SEARCH';

/***/ }),

/***/ "zKpT":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load");

/***/ })

/******/ });