exports.ids=[0],exports.modules={13:function(t,e,n){"use strict";var r=n(0),i=n.n(r);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,r,i,c,o){try{var a=t[c](o),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var c=t.apply(e,n);function o(t){u(c,r,i,o,a,"next",t)}function a(t){u(c,r,i,o,a,"throw",t)}o(void 0)}))}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var i=C(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=null,m=!1,g=!1,E=function(){h&&h.getInitialProps&&(m=!0,g&&h.getInitialProps())};e.a=function(t){return function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(I,e);var n,r,c,u,f,C,B=A(I);function I(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,I),(e=B.call(this,t)).state={initialData:{},canClientFetch:!1},e}return n=I,r=[{key:"getInitialProps",value:(C=s(regeneratorRuntime.mark((function e(){var n,r,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.match,i=n.location,!t.getInitialProps){e.next=7;break}return e.next=4,t.getInitialProps({match:r,location:i});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={};case 8:c=e.t0,this.setState({initialData:c,canClientFetch:!0});case 10:case"end":return e.stop()}}),e,this)}))),function(){return C.apply(this,arguments)})},{key:"componentDidMount",value:(f=s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g=!0,window.__USE_SERVER__&&(h=this,window.addEventListener("popstate",E),m&&this.getInitialProps()),(!this.props.history||"PUSH"!==this.props.history.action)&&window.__USE_SERVER__){t.next=6;break}return t.next=6,this.getInitialProps();case 6:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){m=!1,g=!1}},{key:"render",value:function(){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({initialData:{}},this.props);return this.props.staticContext&&(e.initialData=this.props.staticContext.initialData||{}),i.a.createElement(t,e)}}],c=[{key:"getInitialProps",value:(u=s(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.getInitialProps){e.next=6;break}return e.next=3,t.getInitialProps(n);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={};case 7:return r=e.t0,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)}))),function(t){return u.apply(this,arguments)})}],r&&l(n.prototype,r),c&&l(n,c),I}(i.a.Component)}},16:function(t,e,n){"use strict";e.a="data:image/png;base64,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"},4:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),c=n(5),o=n.n(c);e.default=function(t){var e=t.initalData;return i.a.createElement("html",{lang:"en"},i.a.createElement("head",null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),i.a.createElement("meta",{name:"theme-color",content:"#000000"}),i.a.createElement("meta",{name:"keywords",content:"koa-react-ssr"}),i.a.createElement("meta",{name:"description",content:"服务端渲染"}),i.a.createElement("link",{rel:"icon",href:"data:image/ico;base64,aWNv"}),i.a.createElement("title",null,"蓝羚"),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/styles.css"})),i.a.createElement("body",null,i.a.createElement("div",{id:"app"},t.children?t.children:""),e&&i.a.createElement("script",{dangerouslySetInnerHTML:{__html:"window.__USE_SERVER__=true; window.__INITIAL_DATA__= ".concat(o()(e))}}),i.a.createElement("script",{type:"text/javascript",src:"/dll/dll.js"}),i.a.createElement("script",{type:"text/javascript",src:"/static/js/libs.js"}),i.a.createElement("script",{type:"text/javascript",src:"/static/js/manifest.js"}),i.a.createElement("script",{type:"text/javascript",src:"/static/js/main.js"}),i.a.createElement("script",{type:"text/javascript",src:"/static/js/styles.js"})))}}};
//# sourceMappingURL=chunk.js.map