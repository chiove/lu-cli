(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_matchRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/matchRoute */ "./src/utils/matchRoute.js");
/* harmony import */ var src_layout_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layout/index */ "./src/layout/index.js");
/* harmony import */ var _utils_getComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/getComponent */ "./src/utils/getComponent.js");
/* harmony import */ var _utils_getStaticRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getStaticRoutes */ "./src/utils/getStaticRoutes.js");
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/router */ "./src/router.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // import { matchRoutes} from 'react-router-config';







var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var routeList, _matchRoute, targetRoute, targetMatch;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_getStaticRoutes__WEBPACK_IMPORTED_MODULE_6__["default"])(src_router__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 2:
            routeList = _context.sent;
            _matchRoute = Object(_utils_matchRoute__WEBPACK_IMPORTED_MODULE_3__["default"])(ctx.url, routeList), targetRoute = _matchRoute.targetRoute, targetMatch = _matchRoute.targetMatch; // const currentRoute = list.find(route => matchPath(ctx.url, route)) || {};
            // const isServer = currentRoute.ssr || false;
            // const Component = currentRoute.component();
            // const initalData = Component.getinitalData instanceof Function ? await Component.getinitalData(ctx) : null;

            return _context.abrupt("return", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
              location: ctx.url
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_layout_index__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routeList.map(function (item, key) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({
                key: key
              }, item));
            })))));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x) {
    return _ref.apply(this, arguments);
  };
}();

var clientRender = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _matchRoute2, targetRoute, result;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _matchRoute2 = Object(_utils_matchRoute__WEBPACK_IMPORTED_MODULE_3__["default"])(document.location.pathname, src_router__WEBPACK_IMPORTED_MODULE_7__["default"]), targetRoute = _matchRoute2.targetRoute;

            if (!targetRoute) {
              _context2.next = 9;
              break;
            }

            _context2.next = 4;
            return targetRoute.component().props.load();

          case 4:
            result = _context2.sent;
            targetRoute.component = result ? result["default"] : null;
            render(src_router__WEBPACK_IMPORTED_MODULE_7__["default"]);
            _context2.next = 10;
            break;

          case 9:
            render(src_router__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 10:
            if (true) {
              module.hot.accept();
            }

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function clientRender() {
    return _ref2.apply(this, arguments);
  };
}();

var render = function render(routeList) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a[window.__USE_SERVER__ ? 'hydrate' : 'render']( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routeList.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({
      key: key
    }, item));
  }))), document.getElementById('app'));
};

/* harmony default export */ __webpack_exports__["default"] = ( false ? undefined : clientRender());

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-javascript */ "./node_modules/serialize-javascript/index.js");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(props) {
  var initalData = props.initalData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "data:image/ico;base64,aWNv"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/app.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "React App")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app"
  }, props.children ? props.children : ''), initalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__USE_SERVER__=true; window.__INITIAL_DATA__= ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(initalData))
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/manifest.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/chunk.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "/static/js/main.js"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/a.js":
/*!************************!*\
  !*** ./src/pages/a.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ "./src/pages/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var A = function A(props) {
  console.log(props, '我是a');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'test'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/b'
  }, '22')));
};

A.getinitalData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/getList');

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 7:
            _context.next = 9;
            return ctx.api.list.index(ctx);

          case 9:
            return _context.abrupt("return", _context.sent);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (A);

/***/ }),

/***/ "./src/pages/b.js":
/*!************************!*\
  !*** ./src/pages/b.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var b = function b(props) {
  console.log('bbb');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      list = _useState2$ === void 0 ? [] : _useState2$,
      setList = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/getList');

            case 2:
              res = _context.sent;
              setList(list.concat(res.data.data));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))
  }, // props.initalData.data.a
  '222'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, list.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item.name);
  })));
};

b.getinitalData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (false) {}

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/getDetails');

          case 3:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 7:
            _context2.next = 9;
            return ctx.api.list.details(ctx);

          case 9:
            return _context2.abrupt("return", _context2.sent);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (b);

/***/ }),

/***/ "./src/pages/c.js":
/*!************************!*\
  !*** ./src/pages/c.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      console.log('我是C页面');
    }
  }, "\u6211\u662FC\u9875\u9762"));
});

/***/ }),

/***/ "./src/pages/style.less":
/*!******************************!*\
  !*** ./src/pages/style.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1598343577126
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  
    if(true) {
      // 1598343577127
      var cssReload = __webpack_require__(/*! ../../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_loadble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/loadble */ "./src/utils/loadble.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }


var routes = [{
  path: '/a',
  exact: true,
  ssr: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./pages/a */ "./src/pages/a.js"));
    });
  })
}, {
  path: '/b',
  ssr: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./pages/b */ "./src/pages/b.js"));
    });
  })
}, {
  path: '/c',
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./pages/c */ "./src/pages/c.js"));
    });
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/utils/getComponent.js":
/*!***********************************!*\
  !*** ./src/utils/getComponent.js ***!
  \***********************************/
/*! exports provided: getComponent, getWrapComponent, getC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWrapComponent", function() { return getWrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getC", function() { return getC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/router */ "./src/router.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var src_layout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/layout/index */ "./src/layout/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var getComponent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Promise.all(src_router__WEBPACK_IMPORTED_MODULE_1__["default"].map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2, key) {
                var path, exact, component, ssr, Component, initalData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        path = _ref2.path, exact = _ref2.exact, component = _ref2.component, ssr = _ref2.ssr;

                        if (!(ssr && ctx.url === path)) {
                          _context.next = 12;
                          break;
                        }

                        Component = component();

                        if (!(Component.getinitalData instanceof Function)) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 6;
                        return Component.getinitalData(ctx);

                      case 6:
                        _context.t0 = _context.sent;
                        _context.next = 10;
                        break;

                      case 9:
                        _context.t0 = null;

                      case 10:
                        initalData = _context.t0;
                        return _context.abrupt("return", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
                          initalData: initalData,
                          path: path,
                          key: key
                        }));

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref3.apply(this, arguments);
              };
            }())));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getComponent(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getWrapComponent = function getWrapComponent() {
  return Promise.all(src_router__WEBPACK_IMPORTED_MODULE_1__["default"].map( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4, key) {
      var path, exact, component, Module, Component, initalData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              path = _ref4.path, exact = _ref4.exact, component = _ref4.component;
              _context3.next = 3;
              return component();

            case 3:
              Module = _context3.sent;
              Component = Module["default"];

              if (!(Component.getinitalData instanceof Function)) {
                _context3.next = 11;
                break;
              }

              _context3.next = 8;
              return Component.getinitalData();

            case 8:
              _context3.t0 = _context3.sent;
              _context3.next = 12;
              break;

            case 11:
              _context3.t0 = null;

            case 12:
              initalData = _context3.t0;
              return _context3.abrupt("return", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
                initalData: initalData,
                path: path
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }()));
};

var getC = function getC(component) {
  var initalData;

  var Index = /*#__PURE__*/function (_React$Component) {
    _inherits(Index, _React$Component);

    var _super = _createSuper(Index);

    function Index(props) {
      var _this;

      _classCallCheck(this, Index);

      _this = _super.call(this, props);
      _this.state = {
        C: undefined,
        initalData: undefined
      };
      return _this;
    }

    _createClass(Index, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var Module, C, initalData;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return component();

                case 2:
                  Module = _context4.sent;
                  C = Module["default"];

                  if (!(C.getinitalData instanceof Function)) {
                    _context4.next = 10;
                    break;
                  }

                  _context4.next = 7;
                  return C.getinitalData();

                case 7:
                  _context4.t0 = _context4.sent;
                  _context4.next = 11;
                  break;

                case 10:
                  _context4.t0 = null;

                case 11:
                  initalData = _context4.t0;
                  this.setState({
                    C: C,
                    initalData: initalData
                  });

                case 13:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            C = _this$state.C,
            initalData = _this$state.initalData;
        return C ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, {
          initalData: initalData
        }) : '';
      }
    }]);

    return Index;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  return Index;
};



/***/ }),

/***/ "./src/utils/getStaticRoutes.js":
/*!**************************************!*\
  !*** ./src/utils/getStaticRoutes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(routes) {
    var staticRoutes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            staticRoutes = [];
            routes.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = staticRoutes;
                        _context.t1 = _objectSpread;
                        _context.t2 = _objectSpread({}, item);
                        _context.next = 5;
                        return item.component().props.load();

                      case 5:
                        _context.t3 = _context.sent["default"];
                        _context.t4 = {
                          component: _context.t3
                        };
                        _context.t5 = (0, _context.t1)(_context.t2, _context.t4);

                        _context.t0.push.call(_context.t0, _context.t5);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", staticRoutes);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/utils/loadble.js":
/*!******************************!*\
  !*** ./src/utils/loadble.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var AsyncComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(AsyncComponent, _React$Component);

  var _super = _createSuper(AsyncComponent);

  function AsyncComponent(props) {
    var _this;

    _classCallCheck(this, AsyncComponent);

    _this = _super.call(this, props);
    _this.state = {
      component: null
    };
    return _this;
  }

  _createClass(AsyncComponent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.component) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.load(this.props);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(props) {
        var Module;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  Module: null
                });
                _context2.next = 3;
                return props.load();

              case 3:
                Module = _context2.sent;
                this.setState({
                  component: Module["default"] ? Module["default"] : Module
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "render",
    value: function render() {
      return this.state.component ? this.props.children(this.state.component) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading");
    }
  }]);

  return AsyncComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function loadble(loader) {
  function asyncFn(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, {
      load: loader
    }, function (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    });
  }

  return asyncFn;
}

/* harmony default export */ __webpack_exports__["default"] = (loadble);

/***/ }),

/***/ "./src/utils/matchRoute.js":
/*!*********************************!*\
  !*** ./src/utils/matchRoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["default"] = (function (path, routeList) {
  var targetRoute, targetMatch;

  var _iterator = _createForOfIteratorHelper(routeList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      targetMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(path, item);

      if (targetMatch) {
        targetRoute = item;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    targetRoute: targetRoute,
    targetMatch: targetMatch
  };
});

/***/ }),

/***/ 0:
/*!****************************************************************************************************!*\
  !*** multi babel-polyfill webpack-hot-middleware/client.js?reload=true&noInfo=true ./src/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
__webpack_require__(/*! webpack-hot-middleware/client.js?reload=true&noInfo=true */"./node_modules/webpack-hot-middleware/client.js?reload=true&noInfo=true");
module.exports = __webpack_require__(/*! /Users/haku/doc/webapp/lu-cli/src/index.js */"./src/index.js");


/***/ })

},[[0,"manifest","chunk"]]]);
//# sourceMappingURL=main.js.map