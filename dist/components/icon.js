!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"])}(self,((e,t)=>(()=>{"use strict";var r={848:(e,t,r)=>{function n(e){return document.createRange().createContextualFragment("".concat(e))}r.d(t,{u:()=>n})},870:t=>{t.exports=e},536:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>p});var e,t=o(870),r=o(536),n=o(848);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function l(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var p=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(m,o);var i,c,p,y,d,b=(y=m,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(y);if(d){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=b.call(this)).size="",e.icon="",e}return i=m,p=[{key:"styles",get:function(){return(0,t.unsafeCSS)(".icon{color:var(--neutral-elements-03)}.icon--sm{width:16px;height:16px}.icon--md{width:24px;height:24px}.icon--lg{width:32px;height:32px}.icon svg{width:inherit;height:inherit}.icon svg path{fill:currentColor}")}},{key:"properties",get:function(){return{size:{type:String},icon:{type:String}}}}],(c=[{key:"patternSize",get:function(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function(){var o,i,c;return(0,t.html)(e||(i=['\n      <div\n        part="icon"\n        class="','"\n      >\n        ',"\n      </div>\n    "],c||(c=i.slice(0)),e=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(c)}}))),(0,r.classMap)((u(o={},"icon",!0),u(o,"icon--".concat(this.patternSize),!0),o)),(0,n.u)(this.icon))}}])&&s(i.prototype,c),p&&s(i,p),Object.defineProperty(i,"prototype",{writable:!1}),m}(t.LitElement);customElements.get("dsc-icon")||customElements.define("dsc-icon",p)})(),i})()));