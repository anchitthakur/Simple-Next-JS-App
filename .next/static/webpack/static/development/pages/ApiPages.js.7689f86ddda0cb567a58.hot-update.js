webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/NewsItem.js":
/*!********************************!*\
  !*** ./components/NewsItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load */ "./node_modules/react-lazy-load/lib/LazyLoad.js");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\im\\Desktop\\main\\components\\NewsItem.js";

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
  "width": '90%'
};

var NewsItem = function NewsItem(_ref) {
  var article = _ref.article;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, article.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, article.publishedAt)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_1___default.a, {
    debounce: true,
    offsetVertical: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: imgStyle,
    src: article.urlToImage,
    onError: function onError(e) {
      e.target.onerror = null;
      e.target.src = "/static/img.png";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, article.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list-group-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Source : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, article.source.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: article.url,
    className: "card-link",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Full Article..")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-footer text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsItem);

/***/ })

})
//# sourceMappingURL=ApiPages.js.7689f86ddda0cb567a58.hot-update.js.map