(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{387:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),i=r(374),o=r.n(i),u=r(373);r(370);function c(t,e,r,n,a,i,o){try{var u=t[i](o),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){c(i,n,a,o,u,"next",t)}function u(t){c(i,n,a,o,u,"throw",t)}o(void 0)}))}}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=function(t){var e=l(Object(n.useState)([]),2),r=e[0],i=void 0===r?[]:r,u=e[1];return a.a.createElement("div",null,a.a.createElement("div",{className:"test1",onClick:s(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o()("/api/getList");case 2:e=t.sent,u(i.concat(e.data.data));case 4:case"end":return t.stop()}}),t)})))},t.initialData&&t.initialData.data.a),a.a.createElement("div",null,i.map((function(t,e){return a.a.createElement("span",{key:e},t.name)}))))};p.getInitialProps=function(){var t=s(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,o()("/api/getDetails");case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.next=9,e.controllers.test.index.details();case 9:return n=t.sent,t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=Object(u.a)(p)}}]);
//# sourceMappingURL=b.js.map