!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js"),require("@renoeno/design-assets-meiuca/dist/assets/icons/menu")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js","@renoeno/design-assets-meiuca/dist/assets/icons/menu"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js"),require("@renoeno/design-assets-meiuca/dist/assets/icons/menu")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"],e["@renoeno/design-assets-meiuca/dist/assets/icons/menu"])}(self,((e,t,n)=>(()=>{"use strict";var r={154:(e,t,n)=>{var r,i=n(870),o=n(536),a=n(848);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(y,e);var t,n,c,p,h,b=(p=y,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(p);if(h){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=b.call(this)).size="",e.icon="",e}return t=y,c=[{key:"styles",get:function(){return(0,i.unsafeCSS)(".icon{color:var(--neutral-elements-03)}.icon--sm{width:16px;height:16px}.icon--md{width:24px;height:24px}.icon--lg{width:32px;height:32px}.icon svg{width:inherit;height:inherit}.icon svg path{fill:currentColor}")}},{key:"properties",get:function(){return{size:{type:String},icon:{type:String}}}}],(n=[{key:"patternSize",get:function(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function(){var e,t,n;return(0,i.html)(r||(t=['\n      <div\n        part="icon"\n        class="','"\n      >\n        ',"\n      </div>\n    "],n||(n=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),(0,o.classMap)((s(e={},"icon",!0),s(e,"icon--".concat(this.patternSize),!0),e)),(0,a.u)(this.icon))}}])&&u(t.prototype,n),c&&u(t,c),Object.defineProperty(t,"prototype",{writable:!1}),y}(i.LitElement);customElements.get("dsc-icon")||customElements.define("dsc-icon",p)},848:(e,t,n)=>{function r(e){return document.createRange().createContextualFragment("".concat(e))}n.d(t,{u:()=>r})},176:e=>{e.exports=n},870:t=>{t.exports=e},536:e=>{e.exports=t}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{default:()=>b});var e=o(870),t=o(536),n=o(848);var r,i=o(176),c=o.n(i);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o(154);var b=function(i){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(v,i);var o,a,s,b,y,m=(b=v,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(b);if(y){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function v(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),h(d(e=m.call(this)),"_handleDispatchEvent",(function(){e.dispatchEvent(new CustomEvent("dscChange",{detail:{checked:e.checked},bubbles:!0,composed:!0}))})),e.opened=!1,e}return o=v,s=[{key:"styles",get:function(){return(0,e.unsafeCSS)(":host-context([mode=dark]){--fill-brand: white}:host-context([mode=light]){--fill-brand: black}:host([mode=dark]){--fill-brand: white}:host([mode=light]){--fill-brand: black}.header{display:flex;flex-wrap:wrap;align-items:center;position:relative;padding:0 var(--spacing-size-xxs);background:var(--neutral-surface-01);height:88px}@media screen and (min-width: 768px){.header{padding:0 var(--spacing-size-sm);flex-wrap:nowrap}}@media screen and (min-width: 768px){.header-brand{height:100%;justify-content:center;align-items:center;display:flex}}.header-brand svg path{fill:var(--fill-brand)}.header-button{cursor:pointer;margin-left:auto;padding:var(--spacing-inset-size-xs)}@media screen and (min-width: 768px){.header-button{display:none}}.header-nav{position:absolute;width:100%;top:88px;left:0;max-height:0;box-sizing:border-box;overflow:hidden;background:var(--neutral-surface-01)}@media screen and (min-width: 768px){.header-nav{padding:var(--spacing-inset-size-xs);width:fit-content;position:initial;height:100%;max-height:initial;width:100%;display:flex;align-items:center}}.header--opened .header-nav{max-height:100vh}")}},{key:"properties",get:function(){return{opened:{type:Boolean}}}}],(a=[{key:"updated",value:function(){!function(e){var t=function(){var e=navigator.userAgent;return e.match(/chrome|chromium|crios/i)?"chrome":e.match(/firefox|fxios/i)?"firefox":e.match(/safari/i)?"safari":e.match(/opr\//i)?"opera":e.match(/edg/i)?"edge":"No browser detection"}();if("firefox"===t||"safari"===t){var n=e.closest("[brand]"),r=e.closest("[brand]").getAttribute("brand"),i=e.closest("[theme]").getAttribute("theme"),o=e.closest("[mode]").getAttribute("mode");e.setAttribute("brand",r),e.setAttribute("theme",i),e.setAttribute("mode",o),new MutationObserver((function(t){t.forEach((function(t){if("attributes"===t.type){var r=n.getAttribute("brand"),i=n.getAttribute("theme"),o=n.getAttribute("mode");e.setAttribute("brand",r),e.setAttribute("theme",i),e.setAttribute("mode",o)}}))})).observe(n,{attributes:!0})}}(this)}},{key:"_handleChange",value:function(){this.opened=!this.opened,this._handleDispatchEvent()}},{key:"render",value:function(){var i,o,a;return(0,e.html)(r||(o=['\n      <div\n        class="','"\n      >\n        <div class="header-brand">','</div>\n        <div class="header-button">\n          <dsc-icon\n            .icon="','"\n            size="lg"\n            @click="','"\n          >\n          </dsc-icon>\n        </div>\n        <div class="header-nav">\n          <slot></slot>\n        </div>\n      </div>\n    '],a||(a=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),(0,t.classMap)((h(i={},"header",!0),h(i,"header--opened",this.opened),i)),(0,n.u)('<svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_236_2031)">\n<path d="M29.2427 26.7816V13.6185L26.1056 22.3032H24.1327L21.1572 13.8001V26.7816H17.5996V5.59961H20.8015L25.2647 16.7656L29.5985 5.59961H32.8974V26.7816H29.2427Z" fill="black"/>\n<path d="M35.9499 26.7816V5.59961H45.3938V8.62561H39.5075V14.6171H44.5852V17.6128H39.5075V23.7556H45.3938V26.7816H35.9499Z" fill="black"/>\n<path d="M48.1489 26.7816V5.59961H51.7066V26.7816H48.1489Z" fill="black"/>\n<path d="M66.3163 21.4861C66.3163 24.6332 64.02 26.9329 60.6241 26.9329C57.1635 26.9329 54.9319 24.6332 54.9319 21.4861V5.59961H58.4572V21.6677C58.4572 23.1504 59.3951 23.9372 60.6241 23.9372C61.7561 23.9372 62.791 23.1504 62.791 21.6677V5.59961H66.3163V21.4861Z" fill="black"/>\n<path d="M80.5961 21.0322C80.5961 24.149 79.0113 26.7816 74.9686 26.7816C69.6968 26.7816 69.05 23.3925 69.05 16.2209C69.05 8.98874 69.6968 5.59961 74.9686 5.59961C79.173 5.59961 80.5961 7.95989 80.5961 11.2885H77.1031C77.1031 9.59394 76.6503 8.50457 74.9686 8.50457C72.4135 8.50457 72.5429 11.7424 72.5429 16.1906C72.5429 20.4876 72.4135 23.8162 74.9686 23.8162C76.521 23.8162 77.1355 22.8478 77.1355 21.0322H80.5961Z" fill="black"/>\n<path d="M89.2084 5.59961C93.1541 5.59961 94.9329 7.77833 94.9329 10.9859V26.7816H91.4077V17.6734H87.0415V26.7816H83.4839V10.9859C83.4839 7.89937 85.3274 5.59961 89.2084 5.59961ZM87.1062 14.7987H91.4723V10.8649C91.4723 9.38211 90.4697 8.65587 89.2731 8.65587C88.1088 8.65587 87.1062 9.38211 87.1062 10.8649V14.7987Z" fill="black"/>\n</g>\n<defs>\n<clipPath id="clip0_236_2031">\n<rect width="112" height="32" fill="white"/>\n</clipPath>\n</defs>\n</svg>'),this.opened?'<svg viewBox="0 0 24 24" class="close" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path d="M5.41406 4.33594L4.33594 5.41406L10.9219 12L4.33594 18.5859L5.41406 19.6641L12 13.0781L18.5859 19.6641L19.6641 18.5859L13.0781 12L19.6641 5.41406L18.5859 4.33594L12 10.9219L5.41406 4.33594Z" fill="currentColor"/></svg>':c(),this._handleChange)}}])&&u(o.prototype,a),s&&u(o,s),Object.defineProperty(o,"prototype",{writable:!1}),v}(e.LitElement);customElements.get("dsc-header")||customElements.define("dsc-header",b)})(),a})()));