!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1);var i=n(7);Element.prototype.replaceWith=function(t){this.parentNode&&this.parentNode.replaceChild(t,this)},Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n});var r=new(function(){function t(t){this.APPEND_TAG_EVENT="append-tag",this.tagContainer=null,this.inputField=null,this.tagContainer=document.createElement("div"),this.tagContainer.className="email-input",this.initInputElement(),t.replaceWith(this.tagContainer)}return t.prototype.initInputElement=function(){var t=this;this.inputField=document.createElement("input"),this.inputField.type="text",this.inputField.className="email-input__input",this.inputField.placeholder="add more people...",this.inputField.addEventListener("keyup",this.inputEnterListener.bind(this)),this.inputField.addEventListener("blur",this.inputBlurListener.bind(this)),this.inputField.addEventListener("paste",this.inputPasteListener.bind(this)),this.tagContainer.appendChild(this.inputField),this.tagContainer.addEventListener("click",(function(){return t.inputField.focus()}))},t.prototype.inputEnterListener=function(t){var e=t.target;"Enter"===t.code&&e.value.trim()&&this.addEmail(e.value.trim())},t.prototype.inputBlurListener=function(t){var e=t.target;e.value.trim()&&this.addEmail(e.value.trim())},t.prototype.inputPasteListener=function(t){var e=t.clipboardData.getData("text");this.addEmail(e.trim()),t.preventDefault()},t.prototype.getTags=function(){var t=[];return this.tagContainer.querySelectorAll(".email-input__tag").forEach((function(e){return t.push(new i.Tag(e.textContent))})),t},t.prototype.addEmail=function(t){var e=this,n=t.split(",");n.forEach((function(t){var n=new i.Tag(t);n.validate(),e.tagContainer.insertBefore(n.domElement,e.inputField)})),this.tagContainer.dispatchEvent(new CustomEvent(this.APPEND_TAG_EVENT,{detail:n})),this.inputField.value=null},t.prototype.count=function(){return this.getTags().filter((function(t){return t.isValid})).length},t.prototype.getEmails=function(){return this.getTags().map((function(t){return t.text}))},t}())(document.querySelector("#emails-input"));document.querySelector(".count-email").addEventListener("click",(function(){return alert(r.count())})),document.querySelector(".add-email").addEventListener("click",(function(){r.addEmail(["aleksandr","vladimir","gnu","unix","lol","flex","bite","zoomer"][Math.floor(Math.random()*Math.floor(8))]+"@"+["google.com","yandex.ru","yahoo.com","msdn.net","protonmail.com"][Math.floor(Math.random()*Math.floor(5))])}))},function(t,e,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(r,o),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],r=0;r<t.length;r++){var o=t[r],l=e.base?o[0]+e.base:o[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var d=s(c),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:g(p,e),references:1}),i.push(c)}return i}function u(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function p(t,e,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,h=0;function g(t,e){var n,i,r;if(e.singleton){var o=h++;n=m||(m=u(e)),i=p.bind(null,n,o,!1),r=p.bind(null,n,o,!0)}else n=u(e),i=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var r=s(n[i]);a[r].references--}for(var o=l(t,e),u=0;u<n.length;u++){var c=s(n[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(t,e,n){var i=n(4),r=n(5),o=n(6);(e=i(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);var a=r(o);e.push([t.i,".email-input {\n  height: 100%;\n  border: 1px solid #c3c2cf;\n  background: #fff;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n  padding: 8px 7px;\n  overflow: auto;\n}\n.email-input__tag {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n.email-input__input {\n  font-size: 14px;\n  border: none;\n  line-height: 24px;\n  padding: 0 10px;\n}\n.tag {\n  font-size: 14px;\n  line-height: 24px;\n  background: rgba(102,153,255,0.2);\n  border-radius: 100px;\n  padding: 0 10px;\n}\n.tag_invalid {\n  background: transparent;\n  border-bottom: 1px dashed #f00;\n  border-radius: 0;\n  padding: 0;\n}\n.tag__close {\n  margin-left: 8px;\n  font-size: 10px;\n  cursor: pointer;\n  background: url("+a+');\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n}\nbody {\n  font-family: "Open Sans", serif;\n  font-style: normal;\n  font-weight: normal;\n}\n.popup {\n  width: 500px;\n  height: 300px;\n  border-radius: 8px;\n  box-shadow: 0 8px 20px rgba(0,0,0,0.2);\n}\n.popup__body {\n  height: 70%;\n  padding: 32px 50px;\n  background: #f8f8f7;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: stretch;\n  border-radius: 8px 8px 0 0;\n}\n.popup__footer {\n  height: 30%;\n  border-radius: 0 0 8px 8px;\n  padding: 32px 50px;\n}\n.title {\n  font-size: 20px;\n  margin-bottom: 24px;\n}\n.title_bold {\n  font-weight: bold;\n}\n.button {\n  border: none;\n  background: #4262ff;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 14px;\n  padding: 8px 16px;\n}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";n.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMC44TDcuMiAwTDQgMy4yTDAuOCAwTDAgMC44TDMuMiA0TDAgNy4yTDAuOCA4TDQgNC44TDcuMiA4TDggNy4yTDQuOCA0TDggMC44WiIgZmlsbD0iIzA1MDAzOCIvPgo8L3N2Zz4K"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){void 0===e&&(e={}),this.validateRegexp=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,e.element?this.element=document.createElement(e.element):this.element=document.createElement("span"),this.element.className="tag email-input__tag",this.element.textContent=t.trim();var n=document.createElement("i");n.className="tag__close",n.addEventListener("click",this.remove.bind(this)),this.element.appendChild(n),e.validateRegexp&&(this.validateRegexp=e.validateRegexp)}return Object.defineProperty(t.prototype,"text",{get:function(){return this.element.textContent},set:function(t){this.element.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isValid",{get:function(){return this.validateRegexp.test(this.element.textContent)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"domElement",{get:function(){return this.element},enumerable:!0,configurable:!0}),t.prototype.remove=function(){this.element.remove()},t.prototype.setInvalid=function(){this.element.classList.contains("tag_invalid")||this.element.classList.add("tag_invalid")},t.prototype.setValid=function(){this.element.classList.contains("tag_invalid")&&this.element.classList.remove("tag_invalid")},t.prototype.validate=function(){this.isValid?this.setValid():this.setInvalid()},t}();e.Tag=i}]);