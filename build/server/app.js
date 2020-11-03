module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_match_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/match-route */ "./src/utils/match-route.js");
/* harmony import */ var src_layout_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/layout/index */ "./src/layout/index.js");
/* harmony import */ var _utils_get_static_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get-static-routes */ "./src/utils/get-static-routes.js");
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/router */ "./src/router.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/locale/zh_CN */ "antd/lib/locale/zh_CN");
/* harmony import */ var antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment/locale/zh-cn */ "moment/locale/zh-cn");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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












moment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('zh-cn');

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var routeList, _matchRoute, targetRoute, initialData, context;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_get_static_routes__WEBPACK_IMPORTED_MODULE_5__["default"])(src_router__WEBPACK_IMPORTED_MODULE_6__["default"]);

          case 2:
            routeList = _context.sent;
            _matchRoute = Object(_utils_match_route__WEBPACK_IMPORTED_MODULE_3__["default"])(ctx.url, routeList), targetRoute = _matchRoute.targetRoute;

            if (!targetRoute.component.getInitialProps) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return targetRoute.component.getInitialProps(ctx);

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = {};

          case 11:
            initialData = _context.t0;
            context = {
              initialData: initialData
            };
            return _context.abrupt("return", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["ConfigProvider"], {
              locale: antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8___default.a
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
              location: ctx.url,
              context: context
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_layout_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
              initalData: initialData
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routeList.map(function (item, key) {
              return item.ssr ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
                key: key,
                path: item.path,
                render: function render(props) {
                  var Component = item.component;
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
                    routes: item.routes
                  }));
                }
              }) : undefined;
            }))))));

          case 14:
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
    var _matchRoute2, targetRoute, result, ssr;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _matchRoute2 = Object(_utils_match_route__WEBPACK_IMPORTED_MODULE_3__["default"])(document.location.pathname, src_router__WEBPACK_IMPORTED_MODULE_6__["default"]), targetRoute = _matchRoute2.targetRoute;

            if (!targetRoute) {
              _context2.next = 10;
              break;
            }

            _context2.next = 4;
            return targetRoute.component().props.load();

          case 4:
            result = _context2.sent;
            targetRoute.component = result ? result["default"] : null;
            ssr = targetRoute.ssr || false;
            render(src_router__WEBPACK_IMPORTED_MODULE_6__["default"], ssr);
            _context2.next = 11;
            break;

          case 10:
            render(src_router__WEBPACK_IMPORTED_MODULE_6__["default"]);

          case 11:
            if (false) {}

          case 12:
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
  var ssr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a[window.__USE_SERVER__ && ssr ? 'hydrate' : 'render']( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["ConfigProvider"], {
    locale: antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, routeList.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      key: key,
      path: item.path,
      render: function render(props) {
        var Component = item.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
          routes: item.routes
        }));
      }
    });
  })))), document.getElementById('app'));
};

/* harmony default export */ __webpack_exports__["default"] = ( true ? serverRender : undefined);

/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(props) {
  var initalData = props.initalData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "koa-react-ssr"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "\u670D\u52A1\u7AEF\u6E32\u67D3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "data:image/ico;base64,aWNv"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u84DD\u7F9A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/styles.css"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app"
  }, props.children ? props.children : ''), initalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__USE_SERVER__=true; window.__INITIAL_DATA__= ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_1___default()(initalData))
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/js/particles.min.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/dll/dll.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/js/libs.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/js/manifest.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/js/main.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "/static/js/styles.js"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages sync recursive ^\\.\\/.*\\.js$":
/*!*************************************!*\
  !*** ./src/pages sync ^\.\/.*\.js$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a.js": "./src/pages/a.js",
	"./b.js": "./src/pages/b.js",
	"./c.js": "./src/pages/c.js",
	"./index/index.js": "./src/pages/index/index.js",
	"./index/options.js": "./src/pages/index/options.js",
	"./login/index.js": "./src/pages/login/index.js",
	"./not-found/index.js": "./src/pages/not-found/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/pages sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/pages/a.js":
/*!************************!*\
  !*** ./src/pages/a.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _a_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./a.png */ "./src/pages/a.png");
/* harmony import */ var _login_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/images/logo.png */ "./src/pages/login/images/logo.png");
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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








var A = function A(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.initialData && props.initialData.data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: item.name,
      to: '/b'
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _a_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    style: {
      height: 100,
      width: 100
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _login_images_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    style: {
      height: 100,
      width: 100
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "1111"));
};

A.getInitialProps = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var res, _res;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (true) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/getList');

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 7:
            _context.next = 9;
            return ctx.controllers.test.index.list();

          case 9:
            _res = _context.sent;
            console.log(_res);
            return _context.abrupt("return", _res);

          case 12:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_5__["default"])(A));

/***/ }),

/***/ "./src/pages/a.png":
/*!*************************!*\
  !*** ./src/pages/a.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/images/a.3b5645f8d57f4ea5431c1d8524173e0f.png");

/***/ }),

/***/ "./src/pages/b.js":
/*!************************!*\
  !*** ./src/pages/b.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






var b = function b(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      list = _useState2$ === void 0 ? [] : _useState2$,
      setList = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test1",
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
  }, props.initialData && props.initialData.data.a), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, list.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: key
    }, item.name);
  })));
};

b.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
    var res, _res;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (true) {
              _context2.next = 7;
              break;
            }

            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()('/api/getDetails');

          case 3:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 7:
            _context2.next = 9;
            return ctx.controllers.test.index.details();

          case 9:
            _res = _context2.sent;
            return _context2.abrupt("return", _res);

          case 11:
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

/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_3__["default"])(b));

/***/ }),

/***/ "./src/pages/c.js":
/*!************************!*\
  !*** ./src/pages/c.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "test2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginLeft: 8
    }
  }, "Primary Button1"), "223");
}));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./src/pages/index/options.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}








/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_5__["default"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      typing = _useState2[0],
      setTyping = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // window.particlesJS('home-canvas', options);
    skills();
    return function () {
      clearTimeout(timer);
    };
  }, []);
  var addIndex = 0;
  var deleteIndex = -1;
  var arrayIndex = 0;
  var timer = null;

  var skills = function skills() {
    var skillsArray = ['html', 'js', 'css', 'react', 'vue', 'webpack', 'node', 'koa', 'ssr'];

    if (addIndex <= skillsArray[arrayIndex].length) {
      setTyping(skillsArray[arrayIndex].slice(0, addIndex++));

      if (addIndex > skillsArray[arrayIndex].length) {
        timer = setTimeout(skills, 1500);
      } else {
        timer = setTimeout(skills, 100);
      }
    } else {
      clearTimeout(timer);

      if (deleteIndex > -skillsArray[arrayIndex].length) {
        setTyping(skillsArray[arrayIndex].slice(0, deleteIndex--));
        timer = setTimeout(skills, 100);
      } else {
        clearTimeout(timer);
        setTyping('');
        addIndex = 0;

        if (arrayIndex < skillsArray.length - 1) {
          arrayIndex += 1;
          deleteIndex = -1;
          timer = setTimeout(skills, 100);
        } else {
          arrayIndex = 0;
          timer = setTimeout(skills, 100);
        }
      }
    }
  };

  var flag = props.location.pathname === '/home';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-typing-title"
  }, "\u4F1A\u7684\u6280\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-typing-content"
  }, typing), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-typing-input"
  }, "|"));
}));

/***/ }),

/***/ "./src/pages/index/options.js":
/*!************************************!*\
  !*** ./src/pages/index/options.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0']
    },
    shape: {
      type: ['circle'],
      stroke: {
        width: 0,
        color: '#fff'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#808080',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  }
});

/***/ }),

/***/ "./src/pages/login/images/logo.png":
/*!*****************************************!*\
  !*** ./src/pages/login/images/logo.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/logo.png */ "./src/pages/login/images/logo.png");
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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








var NormalLoginForm = function NormalLoginForm() {
  var onFinish = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', value);

            case 2:
              res = _context.sent.data;

              if (res.code === 200) {
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].success(res.message);
              } else {
                antd__WEBPACK_IMPORTED_MODULE_3__["message"].error(res.message);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "normal_login",
    className: "login-form",
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "username",
    rules: [{
      required: true,
      message: '请输入用户名!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    size: 'large',
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
      className: "site-form-item-icon"
    }),
    autoComplete: "off",
    placeholder: "\u7528\u6237\u540D"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: '请输入密码!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
    size: 'large',
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LockOutlined"], {
      className: "site-form-item-icon"
    }),
    autoComplete: "off",
    type: "password",
    placeholder: "\u5BC6\u7801"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: 'large',
    type: "primary",
    htmlType: "submit",
    className: "login-form-button"
  }, "\u767B\u5F55")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-form-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "login-form-register",
    href: ""
  }, "\u6CE8\u518C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "login-form-forgot",
    href: ""
  }, "\u5FD8\u8BB0\u5BC6\u7801?")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_2__["default"])(NormalLoginForm));

/***/ }),

/***/ "./src/pages/not-found/index.js":
/*!**************************************!*\
  !*** ./src/pages/not-found/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/get-initial-props */ "./src/utils/get-initial-props.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(src_utils_get_initial_props__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
  if (props.location.pathname === '/') {
    props.history.push('/home');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-content"
  }, "404!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4F60\u8981\u627E\u7684\u9875\u9762\u4E0D\u5B58\u5728"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "not-found-href",
    onClick: function onClick() {
      props.history.push('/home');
    }
  }, "\u8FD4\u56DE\u9996\u9875"))));
}));

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

var routes = [{
  path: '/home',
  exact: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/index */ "./src/pages/index/index.js"));
  }),
  routes: [{
    path: ['/home', '/home/a'],
    exact: true,
    component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/a */ "./src/pages/a.js"));
    })
  }, {
    path: '/home/login1',
    exact: true,
    component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/login */ "./src/pages/login/index.js"));
    })
  }]
}, {
  path: '/login',
  exact: true,
  ssr: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/login */ "./src/pages/login/index.js"));
  })
}, // {
//   path: '/a',
//   ssr: true,
//   component: loadble(() => import(/* webpackChunkName: 'a' */'./pages/a')),
// },
{
  path: '/b',
  ssr: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/b */ "./src/pages/b.js"));
  })
}, {
  path: '/c',
  ssr: true,
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/c */ "./src/pages/c.js"));
  })
}, {
  path: '*',
  component: Object(_utils_loadble__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/not-found */ "./src/pages/not-found/index.js"));
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/utils/get-initial-props.js":
/*!****************************************!*\
  !*** ./src/utils/get-initial-props.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
} // 高阶组件 用于提取重复逻辑



var _this = null;
var _isPop = false;
var _isMount = false;

var popStateCallback = function popStateCallback() {
  if (_this && _this.getInitialProps) {
    _isPop = true;

    if (_isMount) {
      _this.getInitialProps();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (SourceComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(HoComponent, _React$Component);

    var _super = _createSuper(HoComponent);

    function HoComponent(props) {
      var _this2;

      _classCallCheck(this, HoComponent);

      _this2 = _super.call(this, props);
      _this2.state = {
        initialData: {},
        canClientFetch: false
      };
      return _this2;
    } // 用于服务端调用


    _createClass(HoComponent, [{
      key: "getInitialProps",
      // 用于封装处理
      value: function () {
        var _getInitialProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this$props, match, location, res;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法
                  _this$props = this.props, match = _this$props.match, location = _this$props.location;

                  if (!SourceComponent.getInitialProps) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return SourceComponent.getInitialProps({
                    match: match,
                    location: location
                  });

                case 4:
                  _context.t0 = _context.sent;
                  _context.next = 8;
                  break;

                case 7:
                  _context.t0 = {};

                case 8:
                  res = _context.t0;
                  this.setState({
                    initialData: res,
                    canClientFetch: true
                  });
                // console.log('getInitialProps');
                // let { tdk } = res.page;
                // if (tdk) {
                //     document.title = tdk.title;
                // }

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps() {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }, {
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var canClientFetch;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // 注册事件，用于在页面回退和前进的时候触发
                  _isMount = true; // 组件挂载完成

                  if (window.__USE_SERVER__) {
                    _this = this; // 注册事件

                    window.addEventListener('popstate', popStateCallback);

                    if (_isPop) {
                      // 如果前进或者后退 则需要异步获取数据
                      this.getInitialProps();
                    }
                  }

                  canClientFetch = this.props.history && this.props.history.action === 'PUSH';

                  if (!(canClientFetch || !window.__USE_SERVER__)) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 6;
                  return this.getInitialProps();

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _isPop = false; // 重置为未触发

        _isMount = false; // 重置为未挂载
      }
    }, {
      key: "render",
      value: function render() {
        var props = _objectSpread({
          initialData: {}
        }, this.props);

        if (true) {
          // 服务端渲染
          if (this.props.staticContext) props.initialData = this.props.staticContext.initialData || {};
        } else { var _this$state, canClientFetch, initialData; }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
          var res;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!SourceComponent.getInitialProps) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 3;
                  return SourceComponent.getInitialProps(ctx);

                case 3:
                  _context3.t0 = _context3.sent;
                  _context3.next = 7;
                  break;

                case 6:
                  _context3.t0 = {};

                case 7:
                  res = _context3.t0;
                  return _context3.abrupt("return", res);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function getInitialProps(_x) {
          return _getInitialProps2.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return HoComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
});

/***/ }),

/***/ "./src/utils/get-static-routes.js":
/*!****************************************!*\
  !*** ./src/utils/get-static-routes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(routes) {
    var len, i, staticRoutes, item;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            len = routes.length;
            i = 0;
            staticRoutes = [];

          case 3:
            if (!(i < len)) {
              _context.next = 17;
              break;
            }

            item = routes[i];
            _context.t0 = staticRoutes;
            _context.t1 = _objectSpread;
            _context.t2 = _objectSpread({}, item);
            _context.next = 10;
            return item.component().props.load();

          case 10:
            _context.t3 = _context.sent["default"];
            _context.t4 = {
              component: _context.t3
            };
            _context.t5 = (0, _context.t1)(_context.t2, _context.t4);

            _context.t0.push.call(_context.t0, _context.t5);

          case 14:
            i++;
            _context.next = 3;
            break;

          case 17:
            return _context.abrupt("return", staticRoutes);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



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
                _context2.next = 2;
                return props.load();

              case 2:
                Module = _context2.sent;
                this.setState({
                  component: Module["default"] ? Module["default"] : Module
                });

              case 4:
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
      return this.state.component ? this.props.children(this.state.component) : null;
    }
  }]);

  return AsyncComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function loadble(loader) {
  // 服务端组件重新require引入，实现热更新。
  // eslint-disable-next-line no-undef
  if (true) {
    var loaderString = loader.toString();
    var prefix = loaderString.indexOf('src/pages/');
    var suffix = loaderString.indexOf('.js');
    var url = loaderString.substring(prefix + 10, suffix);

    __webpack_require__("./src/pages sync recursive ^\\.\\/.*\\.js$")("./".concat(url, ".js"));
  }

  var asyncFn = function asyncFn(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, {
      load: loader
    }, function (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
    });
  };

  return asyncFn;
}

/* harmony default export */ __webpack_exports__["default"] = (loadble);

/***/ }),

/***/ "./src/utils/match-route.js":
/*!**********************************!*\
  !*** ./src/utils/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


/* harmony default export */ __webpack_exports__["default"] = (function (path, routeList) {
  var targetRoute;
  var targetMatch;

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
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! /Users/haku/doc/webapp/lu-cli/src/index.js */"./src/index.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/locale/zh_CN":
/*!****************************************!*\
  !*** external "antd/lib/locale/zh_CN" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale/zh_CN");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment/locale/zh-cn":
/*!**************************************!*\
  !*** external "moment/locale/zh-cn" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map