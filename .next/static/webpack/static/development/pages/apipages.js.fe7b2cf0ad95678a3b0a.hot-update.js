webpackHotUpdate("static\\development\\pages\\apipages.js",{

/***/ "./components/actions/postActions.js":
/*!*******************************************!*\
  !*** ./components/actions/postActions.js ***!
  \*******************************************/
/*! exports provided: fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./components/actions/types.js");

var fetchPosts = function fetchPosts(props) {
  return function (dispatch) {
    var url = 'https://newsapi.org/v2/everything?' + 'q=' + props.search + '&' + 'sortBy=publishedAt&' + 'page=' + props.page + '&' + 'pageSize=5&language=en&' + 'apiKey=3b214239993247f18926b8fab6ee014f';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_POSTS"],
        payload: json
      });
    });
  };
};

/***/ })

})
//# sourceMappingURL=apipages.js.fe7b2cf0ad95678a3b0a.hot-update.js.map