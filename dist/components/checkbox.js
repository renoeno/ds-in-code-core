!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js"),require("@renoeno/design-assets/dist/assets/icons/check.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js","@renoeno/design-assets/dist/assets/icons/check.js"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js"),require("@renoeno/design-assets/dist/assets/icons/check.js")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"],e["@renoeno/design-assets/dist/assets/icons/check.js"])}(self,((e,t,n)=>(()=>{"use strict";var r={154:(e,t,n)=>{var r,o=n(870),c=n(536),i=n(848);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(y,e);var t,n,s,h,p,b=(h=y,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(h);if(p){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=b.call(this)).size="",e.icon="",e}return t=y,s=[{key:"styles",get:function(){return(0,o.unsafeCSS)(".icon{color:var(--neutral-elements-03)}.icon--sm{width:16px;height:16px}.icon--md{width:24px;height:24px}.icon--lg{width:32px;height:32px}.icon svg{width:inherit;height:inherit}.icon svg path{fill:currentColor}")}},{key:"properties",get:function(){return{size:{type:String},icon:{type:String}}}}],(n=[{key:"patternSize",get:function(){return["sm","md","lg"].includes(this.size)?this.size:"md"}},{key:"render",value:function(){var e,t,n;return(0,o.html)(r||(t=['\n      <div\n        part="icon"\n        class="','"\n      >\n        ',"\n      </div>\n    "],n||(n=t.slice(0)),r=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),(0,c.classMap)((a(e={},"icon",!0),a(e,"icon--".concat(this.patternSize),!0),e)),(0,i.u)(this.icon))}}])&&u(t.prototype,n),s&&u(t,s),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.LitElement);customElements.get("dsc-icon")||customElements.define("dsc-icon",h)},848:(e,t,n)=>{function r(e){return document.createRange().createContextualFragment("".concat(e))}n.d(t,{u:()=>r})},920:e=>{e.exports=n},870:t=>{t.exports=e},536:e=>{e.exports=t}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{c.r(i),c.d(i,{default:()=>y});var e,t,n=c(870),r=c(536),o=c(920),s=c.n(o);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}c(154);var y=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(k,o);var c,i,a,y,m,v=(y=k,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(y);if(m){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function k(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),b(h(e=v.call(this)),"_handleDispatchEvent",(function(){e.dispatchEvent(new CustomEvent("dscChange",{detail:{checked:e.checked},bubbles:!0,composed:!0}))})),e.id="dsc-checkbox",e.name="dsc-checkbox",e.label="",e.checked=!1,e.required=!1,e.disabled=!1,e}return c=k,a=[{key:"styles",get:function(){return(0,n.unsafeCSS)(".checkbox{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-family-01);font-size:var(--font-size-xs);font-weight:var(--font-weight-regular);line-height:var(--line-height-default);color:var(--neutral-elements-03)}.checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox .checkbox-checkmark{width:16px;height:16px;border:var(--border-width-thin) solid var(--neutral-elements-03);border-radius:var(--border-radius-none);margin-right:var(--spacing-size-nano);transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.checkbox:hover:not(.checkbox--disabled):not(.checkbox--checked) .checkbox-checkmark{background-color:var(--neutral-surface-02)}.checkbox input:checked:not(:disabled)~.checkbox-checkmark{background-color:var(--brand-color-pure);border-color:var(--brand-color-pure)}.checkbox input:checked:not(:disabled)~.checkbox-checkmark dsc-icon::part(icon){color:var(--contrast-color-brand)}.checkbox input:focus-visible~.checkbox-checkmark{outline-color:var(--highlight-color-pure);outline-width:var(--border-width-thin);outline-style:solid}.checkbox input:disabled~.checkbox-checkmark{border-color:var(--neutral-elements-01);color:var(--neutral-elements-01)}.checkbox input:disabled~.checkbox-checkmark dsc-icon::part(icon){color:var(--neutral-elements-01)}.checkbox--disabled{color:var(--neutral-elements-01)}")}},{key:"properties",get:function(){return{id:{type:String},name:{type:String},label:{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean}}}}],(i=[{key:"hiddenInput",get:function(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"checked"===n&&void 0!==e&&(t.hiddenInput.checked=t.checked,t._handleDispatchEvent())}))}},{key:"_handleChange",value:function(){this.checked=!this.checked,this._handleDispatchEvent()}},{key:"render",value:function(){var o;return(0,n.html)(e||(e=u(['\n      <label\n        class="','"\n        for="','"\n      >\n        <input\n          type="checkbox"\n          .id="','"\n          .name="','"\n          ?disabled=',"\n          ?checked=","\n          ?required=","\n          aria-checked=",'\n          @change="','"\n        />\n        <span class="checkbox-checkmark">\n          ',"\n        </span>\n        ","\n      </label>\n    "])),(0,r.classMap)((b(o={},"checkbox",!0),b(o,"checkbox--checked",this.checked),b(o,"checkbox--disabled",this.disabled),o)),this.name,this.id,this.name,this.disabled,this.checked,this.required,this.checked,this._handleChange,this.checked?(0,n.html)(t||(t=u(['<dsc-icon .icon="','" size="sm"></dsc-icon>'])),s()):null,this.label)}}])&&l(c.prototype,i),a&&l(c,a),Object.defineProperty(c,"prototype",{writable:!1}),k}(n.LitElement);customElements.get("dsc-checkbox")||customElements.define("dsc-checkbox",y)})(),i})()));