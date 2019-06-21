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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NIQe");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
    prefetch: true,
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
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js




var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "My App"), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/darkly/bootstrap.css"
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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./components/NewsItem.js

var imgStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

var NewsItem_NewsItem = function NewsItem(_ref) {
  var article = _ref.article;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "card mb-3"
  }, external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("h5", {
    className: "card-title"
  }, article.title), external_react_default.a.createElement("h6", {
    className: "card-subtitle text-muted"
  }, article.publishedAt)), external_react_default.a.createElement("img", {
    style: imgStyle,
    src: article.urlToImage,
    alt: "Card image"
  }), external_react_default.a.createElement("div", {
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
// CONCATENATED MODULE: ./components/actions/types.js
var FETCH_POSTS = 'FETCH_POSTS';
var INCREASE_PAGES = 'INCREASE_PAGES';
var DECREASE_PAGES = 'DECREASE_PAGES';
var CHANGE_PAGE = 'CHANGE_PAGE';
var CHANGE_SEARCH = 'CHANGE_SEARCH';
// CONCATENATED MODULE: ./components/actions/postActions.js

var postActions_fetchPosts = function fetchPosts(props) {
  return function (dispatch) {
    var url = 'https://newsapi.org/v2/everything?' + 'q=' + props.search + '&' + 'sortBy=publishedAt&' + 'page=' + props.page + '&' + 'pageSize=5&language=en&' + 'apiKey=3b214239993247f18926b8fab6ee014f';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: FETCH_POSTS,
        payload: json
      });
    });
  };
};
// CONCATENATED MODULE: ./components/Api.js







function Api(props) {
  Object(external_react_["useEffect"])(function () {
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
      for (var _iterator = get_iterator_default()(props.posts.articles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  fetchPosts: external_prop_types_default.a.func.isRequired,
  posts: external_prop_types_default.a.object.isRequired,
  search: external_prop_types_default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    page: state.page.page,
    search: state.page.search
  };
};

/* harmony default export */ var components_Api = (Object(external_react_redux_["connect"])(mapStateToProps, {
  fetchPosts: postActions_fetchPosts
})(Api));
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// CONCATENATED MODULE: ./components/actions/pageAction.js

var pageAction_changePage = function changePage(p) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_PAGE,
      payload: p
    });
  };
};
var pageAction_changeSearch = function changeSearch(s) {
  return function (dispatch) {
    dispatch({
      type: CHANGE_SEARCH,
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

    console.log("pages: ");
    console.log(pages);
    dispatch({
      type: INCREASE_PAGES,
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
      type: DECREASE_PAGES,
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
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./components/reducers/postReducer.js


var initialState = {
  items: {}
};
/* harmony default export */ var postReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_POSTS:
      return _objectSpread({}, state, {
        items: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./components/reducers/pagesReducer.js


var pagesReducer_initialState = {
  pages: [1, 2, 3, 4, 5]
};
/* harmony default export */ var pagesReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pagesReducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case INCREASE_PAGES:
      return _objectSpread({}, state, {
        pages: action.payload
      });

    case DECREASE_PAGES:
      return _objectSpread({}, state, {
        pages: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./components/reducers/pageReducer.js


var pageReducer_initialState = {
  page: 1,
  search: 'tech'
};
/* harmony default export */ var pageReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pageReducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CHANGE_PAGE:
      return _objectSpread({}, state, {
        page: action.payload
      });

    case CHANGE_SEARCH:
      return _objectSpread({}, state, {
        search: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./components/reducers/index.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  posts: postReducer,
  pages: pagesReducer,
  page: pageReducer
}));
// EXTERNAL MODULE: external "global"
var external_global_ = __webpack_require__("pcb2");
var external_global_default = /*#__PURE__*/__webpack_require__.n(external_global_);

// CONCATENATED MODULE: ./components/store.js




var store_initialState = {};
var middleware = [external_redux_thunk_default.a];
var composeEnhancers = external_global_default.a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || external_redux_["compose"];
var store = Object(external_redux_["createStore"])(reducers, store_initialState, composeEnhancers(external_redux_["applyMiddleware"].apply(void 0, middleware)));
/* harmony default export */ var components_store = (store);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/ApiPages.js










var ApiPages_ApiPages = function ApiPages() {
  return external_react_default.a.createElement(external_react_redux_["Provider"], {
    store: components_store
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    keywords: "API"
  })), external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement("h2", null, "NEWS"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(components_Search, null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(components_Pagination, null), external_react_default.a.createElement(components_Api, null), external_react_default.a.createElement(components_Pagination, null)));
};

/* harmony default export */ var pages_ApiPages = __webpack_exports__["default"] = (ApiPages_ApiPages);

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pcb2":
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ })

/******/ });