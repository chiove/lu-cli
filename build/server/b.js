exports.ids=[2],exports.modules={11:function(t,r,e){"use strict";e.r(r);var n=e(0),a=e.n(n),o=e(10),u=e.n(o),i=(e(1),e(6));function c(t,r,e,n,a,o,u){try{var i=t[o](u),c=i.value}catch(t){return void e(t)}i.done?r(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var o=t.apply(r,e);function u(t){c(o,n,a,u,i,"next",t)}function i(t){c(o,n,a,u,i,"throw",t)}u(void 0)}))}}function l(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return e}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return f(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var p=function(t){var r=l(Object(n.useState)([]),2),e=r[0],o=void 0===e?[]:e,i=r[1];return a.a.createElement("div",null,a.a.createElement("div",{className:"test1",onClick:s(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()("/api/getList");case 2:r=t.sent,i(o.concat(r.data.data));case 4:case"end":return t.stop()}}),t)})))},"1"),a.a.createElement("div",null,o.map((function(t,r){return a.a.createElement("span",{key:r},t.name)}))))};p.getInitialProps=function(){var t=s(regeneratorRuntime.mark((function t(r){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=7;break;case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.next=9,r.api.list.details(r);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),r.default=Object(i.a)(p)}};
//# sourceMappingURL=b.js.map