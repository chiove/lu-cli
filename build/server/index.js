exports.ids=[4],exports.modules={15:function(t,e,n){"use strict";var r=n(0),o=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){u(i,r,o,c,a,"next",t)}function a(t){u(i,r,o,c,a,"throw",t)}c(void 0)}))}}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=null,v=!1,m=!1,g=function(){h&&h.getInitialProps&&(v=!0,m&&h.getInitialProps())};e.a=function(t){return function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(w,e);var n,r,i,u,y,b,O=l(w);function w(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,w),(e=O.call(this,t)).state={initialData:{},canClientFetch:!1},e}return n=w,r=[{key:"getInitialProps",value:(b=s(regeneratorRuntime.mark((function e(){var n,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.match,o=n.location,!t.getInitialProps){e.next=7;break}return e.next=4,t.getInitialProps({match:r,location:o});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:i=e.t0,this.setState({initialData:i,canClientFetch:!0});case 10:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"componentDidMount",value:(y=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m=!0,window.__USE_SERVER__&&(h=this,window.addEventListener("popstate",g),v&&this.getInitialProps()),(!this.props.history||"PUSH"!==this.props.history.action)&&window.__USE_SERVER__){t.next=6;break}return t.next=6,this.getInitialProps();case 6:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){v=!1,m=!1}},{key:"render",value:function(){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({initialData:{}},this.props);return this.props.staticContext&&(e.initialData=this.props.staticContext.initialData||{}),o.a.createElement(t,e)}}],i=[{key:"getInitialProps",value:(u=s(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.getInitialProps){e.next=6;break}return e.next=3,t.getInitialProps(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={};case 7:return r=e.t0,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),function(t){return u.apply(this,arguments)})}],r&&f(n.prototype,r),i&&f(n,i),w}(o.a.Component)}},17:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=(n(13),n(4),n(15));e.default=Object(i.a)((function(){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){console.log(t)}),[t]),o.a.createElement("div",null,o.a.createElement("div",{ref:t}))}))}};
//# sourceMappingURL=index.js.map