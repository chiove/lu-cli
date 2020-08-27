exports.ids = ["a~b~c"];
exports.modules = {

/***/ "./src/utils/getInitialProps.js":
/*!**************************************!*\
  !*** ./src/utils/getInitialProps.js ***!
  \**************************************/
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
} //高阶组件 用于提取重复逻辑



var _this = null;
var _isPop = false; //是否触发过popState

var _isMount = false; //组件是否挂载完成

var popStateCallback = function popStateCallback() {
  // 使用 popStateCallback 保存函数防止 addEventListener 重复注册
  if (_this && _this.getInitialProps) {
    _isPop = true;

    if (_isMount) {
      //只有当前组件挂载后才能执行数据预取，否则会报错
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
        canClientFetch: false //浏览器端是否需要请求数据

      };
      return _this2;
    } //用于服务端调用


    _createClass(HoComponent, [{
      key: "getInitialProps",
      //用于封装处理
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
                  //注册事件，用于在页面回退和前进的时候触发
                  _isMount = true; //组件挂载完成

                  if (window.__USE_SERVER__) {
                    //只有当启用 ssr 时
                    _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件
                    //注册事件

                    window.addEventListener('popstate', popStateCallback);

                    if (_isPop) {
                      //如果前进或者后退 则需要异步获取数据
                      this.getInitialProps();
                    }
                  }

                  canClientFetch = this.props.history && this.props.history.action === 'PUSH'; //路由跳转的时候可以异步请求数据

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
        _isPop = false; //重置为未触发

        _isMount = false; //重置为未挂载
      }
    }, {
      key: "render",
      value: function render() {
        // 只有在首次进入页面需要将window.__INITIAL_DATA__作为props，路由切换时不需要
        var props = _objectSpread({}, this.props);

        if (true) {
          //服务端渲染
          props.initialData = this.props.staticContext.initialData || {};
          console.log(props, '555');
        } else {}

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SourceComponent, props);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
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
                  return _context3.abrupt("return", _context3.t0);

                case 8:
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

/***/ })

};;
//# sourceMappingURL=a~b~c.js.map