(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{372:function(t,e,n){"use strict";var r=n(1),i=n.n(r);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){u(o,r,i,a,c,"next",t)}function c(t){u(o,r,i,a,c,"throw",t)}a(void 0)}))}}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=null,v=!1,m=!1,w=function(){b&&b.getInitialProps&&(v=!0,m&&b.getInitialProps())};e.a=function(t){return function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(g,e);var n,r,o,u,y,h,d=p(g);function g(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g),(e=d.call(this,t)).state={initialData:{},canClientFetch:!1},e}return n=g,r=[{key:"getInitialProps",value:(h=s(regeneratorRuntime.mark((function e(){var n,r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.match,i=n.location,!t.getInitialProps){e.next=7;break}return e.next=4,t.getInitialProps({match:r,location:i});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:o=e.t0,this.setState({initialData:o,canClientFetch:!0});case 10:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"componentDidMount",value:(y=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m=!0,window.__USE_SERVER__&&(b=this,window.addEventListener("popstate",w),v&&this.getInitialProps()),(!this.props.history||"PUSH"!==this.props.history.action)&&window.__USE_SERVER__){t.next=6;break}return t.next=6,this.getInitialProps();case 6:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){v=!1,m=!1}},{key:"render",value:function(){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({initialData:{}},this.props),n=this.state,r=n.canClientFetch,o=n.initialData;return r?e.initialData=o||{}:(e.initialData=window.__INITIAL_DATA__,window.__INITIAL_DATA__=null),i.a.createElement(t,e)}}],o=[{key:"getInitialProps",value:(u=s(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.getInitialProps){e.next=6;break}return e.next=3,t.getInitialProps(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={};case 7:return r=e.t0,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),function(t){return u.apply(this,arguments)})}],r&&f(n.prototype,r),o&&f(n,o),g}(i.a.Component)}},373:function(t,e,n){t.exports=n(12)(30)},388:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(373),a=n.n(o),c=n(73),u=n.p+"static/images/a.3b5645f8d57f4ea5431c1d8524173e0f.png",s=n(372);n(368);function f(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}var l=function(t){return i.a.createElement("div",{className:"test"},i.a.createElement("div",null,t.initialData&&t.initialData.data.map((function(t){return i.a.createElement(c.b,{key:t.name,to:"/b"},t.name)}))),i.a.createElement("img",{src:u,alt:"",style:{height:100,width:100}}),i.a.createElement("div",null,"111333"))};l.getInitialProps=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,a()("/api/getList");case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.next=9,e.controllers.test.index.list();case 9:return r=t.sent,t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){f(o,r,i,a,c,"next",t)}function c(t){f(o,r,i,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();e.default=Object(s.a)(l)}}]);
//# sourceMappingURL=a.js.map