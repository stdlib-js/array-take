// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}function t(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=9007199254740991}function n(e,r){var t,n;for(t=[],n=0;n<r.length;n++)t.push(e[r[n]]);return t}var i="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function a(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+u(i):u(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var p=Math.abs,h=String.prototype.toLowerCase,g=String.prototype.toUpperCase,m=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,E=/\.0$/,A=/\.0*e/,T=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,T,"$1e"),t=m.call(t,A,"e"),t=m.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,w,"e+0$1"),t=m.call(t,b,"e-0$1"),e.alternate&&(t=m.call(t,d,"$1."),t=m.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):h.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var V=String.fromCharCode,k=isNaN,S=Array.isArray;function L(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function R(e){var r,t,n,i,o,a,u,l,c;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,l=0;l<e.length;l++)if(y(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=B.exec(e);n;)(r=e.slice(i,B.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=B.lastIndex,n=B.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function C(e){var r,t,n;if(!F(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return R.apply(null,t)}var M,U=Object.prototype,P=U.toString,N=U.__defineGetter__,Y=U.__defineSetter__,W=U.__lookupGetter__,$=U.__lookupSetter__;M=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=U,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&Y&&Y.call(e,r,t.set),e};var G=M;function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",ee=J()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[Q],r=H(e,Q);try{e[Q]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return q.call(e)},re=Number,te=re.prototype.toString,ne=J();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ee(e)))}function oe(e){return z(e)||ie(e)}Z(oe,"isPrimitive",z),Z(oe,"isObject",ie);var ae=Number.POSITIVE_INFINITY,ue=re.NEGATIVE_INFINITY;function fe(e){return e<ae&&e>ue&&r(e)}function le(e){return z(e)&&fe(e)}function ce(e){return ie(e)&&fe(e.valueOf())}function se(e){return le(e)||ce(e)}function ye(e){return le(e)&&e>=0}function pe(e){return ce(e)&&e.valueOf()>=0}function he(e){return ye(e)||pe(e)}Z(se,"isPrimitive",le),Z(se,"isObject",ce),Z(he,"isPrimitive",ye),Z(he,"isObject",pe);var ge="function"==typeof Float64Array,me="function"==typeof Float64Array?Float64Array:null,we="function"==typeof Float64Array?Float64Array:void 0,be=function(){var e,r,t;if("function"!=typeof me)return!1;try{r=new me([1,3.14,-3.14,NaN]),t=r,e=(ge&&t instanceof Float64Array||"[object Float64Array]"===ee(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?we:function(){throw new Error("not implemented")},de="function"==typeof Float32Array,ve="function"==typeof Float32Array?Float32Array:null,Ee="function"==typeof Float32Array?Float32Array:void 0,Ae=function(){var e,r,t;if("function"!=typeof ve)return!1;try{r=new ve([1,3.14,-3.14,5e40]),t=r,e=(de&&t instanceof Float32Array||"[object Float32Array]"===ee(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ae}catch(r){e=!1}return e}()?Ee:function(){throw new Error("not implemented")},Te="function"==typeof Int16Array,_e="function"==typeof Int16Array?Int16Array:null,xe="function"==typeof Int16Array?Int16Array:void 0,je=function(){var e,r,t;if("function"!=typeof _e)return!1;try{r=new _e([1,3.14,-3.14,32768]),t=r,e=(Te&&t instanceof Int16Array||"[object Int16Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?xe:function(){throw new Error("not implemented")},Ve="function"==typeof Int32Array,ke="function"==typeof Int32Array?Int32Array:null,Se="function"==typeof Int32Array?Int32Array:void 0,Le=function(){var e,r,t;if("function"!=typeof ke)return!1;try{r=new ke([1,3.14,-3.14,2147483648]),t=r,e=(Ve&&t instanceof Int32Array||"[object Int32Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Re="function"==typeof Int8Array,Be="function"==typeof Int8Array?Int8Array:null,Oe="function"==typeof Int8Array?Int8Array:void 0,Ie=function(){var e,r,t;if("function"!=typeof Be)return!1;try{r=new Be([1,3.14,-3.14,128]),t=r,e=(Re&&t instanceof Int8Array||"[object Int8Array]"===ee(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Oe:function(){throw new Error("not implemented")},Fe="function"==typeof Uint16Array,Ce="function"==typeof Uint16Array?Uint16Array:null,Me="function"==typeof Uint16Array?Uint16Array:void 0,Ue=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Fe&&t instanceof Uint16Array||"[object Uint16Array]"===ee(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Me:function(){throw new Error("not implemented")},Pe="function"==typeof Uint32Array,Ne="function"==typeof Uint32Array?Uint32Array:null,Ye="function"==typeof Uint32Array?Uint32Array:void 0,We=function(){var e,r,t;if("function"!=typeof Ne)return!1;try{r=new Ne(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Pe&&t instanceof Uint32Array||"[object Uint32Array]"===ee(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ye:function(){throw new Error("not implemented")},$e="function"==typeof Uint8Array,Ge="function"==typeof Uint8Array?Uint8Array:null,Ze="function"==typeof Uint8Array?Uint8Array:void 0,ze=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge(r=[1,3.14,-3.14,256,257]),t=r,e=($e&&t instanceof Uint8Array||"[object Uint8Array]"===ee(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ze:function(){throw new Error("not implemented")},Xe="function"==typeof Uint8ClampedArray,Je="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,qe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,De=function(){var e,r,t;if("function"!=typeof Je)return!1;try{r=new Je([-1,0,1,3.14,4.99,255,256]),t=r,e=(Xe&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ee(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?qe:function(){throw new Error("not implemented")};function He(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=4294967295}var Ke="function"==typeof ArrayBuffer;function Qe(e){return Ke&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ee(e)}var er=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};function rr(e){return"object"==typeof e&&null!==e&&!er(e)}var tr=/./;function nr(e){return"boolean"==typeof e}var ir=Boolean,or=Boolean.prototype.toString,ar=J();function ur(e){return"object"==typeof e&&(e instanceof ir||(ar?function(e){try{return or.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function fr(e){return nr(e)||ur(e)}function lr(){return new Function("return this;")()}Z(fr,"isPrimitive",nr),Z(fr,"isObject",ur);var cr="object"==typeof self?self:null,sr="object"==typeof window?window:null,yr="object"==typeof globalThis?globalThis:null,pr=function(e){if(arguments.length){if(!nr(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return lr()}if(yr)return yr;if(cr)return cr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=pr.document&&pr.document.childNodes,gr=Int8Array;function mr(){return/^\s*function\s*([^(]*)/i}var wr=/^\s*function\s*([^(]*)/i;function br(e){return null!==e&&"object"==typeof e}Z(mr,"REGEXP",wr);var dr=function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!er(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(br);function vr(e){return br(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Er(e){var r,t,n;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=wr.exec(n.toString()))return r[1]}return vr(e)?"Buffer":t}Z(br,"isObjectLikeArray",dr);var Ar="function"==typeof tr||"object"==typeof gr||"function"==typeof hr?function(e){return Er(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Er(e).toLowerCase():r};function Tr(e){return"function"===Ar(e)}function _r(e,r){if(!(this instanceof _r))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!z(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!z(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Z(_r,"BYTES_PER_ELEMENT",8),Z(_r.prototype,"BYTES_PER_ELEMENT",8),Z(_r.prototype,"byteLength",16),Z(_r.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Z(_r.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var xr="function"==typeof Math.fround?Math.fround:null,jr=new Ae(1),Vr="function"==typeof xr?xr:function(e){return jr[0]=e,jr[0]};function kr(e,r){if(!(this instanceof kr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!z(e))throw new TypeError(C("invalid argument. Real component must be a number. Value: `%s`.",e));if(!z(r))throw new TypeError(C("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Vr(e)}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Vr(r)}),this}function Sr(e){return e instanceof _r||e instanceof kr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Lr(e){return r(e/2)}function Rr(){return"function"==typeof K&&"symbol"==typeof K("foo")&&H(K,"iterator")&&"symbol"==typeof K.iterator}Z(kr,"BYTES_PER_ELEMENT",4),Z(kr.prototype,"BYTES_PER_ELEMENT",4),Z(kr.prototype,"byteLength",8),Z(kr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Z(kr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Br=Rr()?Symbol.iterator:null;function Or(e,r,t){G(e,r,{configurable:!1,enumerable:!1,get:t})}function Ir(e){return e.re}function Fr(e){return e.im}function Cr(e,r){return new Ae(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Mr(e,r){return new be(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Ur={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Pr(e){var r=Ur[e];return"function"==typeof r?r:Ur.default}var Nr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Yr(e){var r=Nr[e];return"function"==typeof r?r:Nr.default}function Wr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(He(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Sr(n))return new TypeError(C("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ir(n),Fr(n))}return r}function $r(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,He(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Sr(o))return new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ir(o),Fr(o))}return n}function Gr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Sr(n=r[i]))return null;e[o]=Ir(n),e[o+1]=Fr(n),o+=2}return e}var Zr=2*Ae.BYTES_PER_ELEMENT,zr=Rr();function Xr(e){return e instanceof Hr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Jr(e){return e===Hr||"Complex128Array"===e.name}function qr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Zr}function Dr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Zr}function Hr(){var e,n,i,o;if(n=arguments.length,!(this instanceof Hr))return 0===n?new Hr:1===n?new Hr(arguments[0]):2===n?new Hr(arguments[0],arguments[1]):new Hr(arguments[0],arguments[1],arguments[2]);if(0===n)i=new Ae(0);else if(1===n)if(ye(arguments[0]))i=new Ae(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&er(i)&&Sr(i[0])){if(null===(i=Gr(new Ae(2*o),i))){if(!Lr(o))throw new RangeError(C("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new Ae(arguments[0])}}else{if(qr(i))i=Cr(i,0);else if(Dr(i))i=Mr(i,0);else if(!Lr(o))throw new RangeError(C("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new Ae(i)}else if(Qe(arguments[0])){if(!r((i=arguments[0]).byteLength/Zr))throw new RangeError(C("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Zr,i.byteLength));i=new Ae(i)}else{if(!rr(arguments[0]))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===zr)throw new TypeError(C("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Tr(i[Br]))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!Tr((i=i[Br]()).next))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=Wr(i))instanceof Error)throw i;i=new Ae(i)}else{if(!Qe(i=arguments[0]))throw new TypeError(C("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!ye(e=arguments[1]))throw new TypeError(C("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!r(e/Zr))throw new RangeError(C("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Zr,e));if(2===n){if(!r((o=i.byteLength-e)/Zr))throw new RangeError(C("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Zr,o));i=new Ae(i,e)}else{if(!ye(o=arguments[2]))throw new TypeError(C("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*Zr>i.byteLength-e)throw new RangeError(C("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*Zr));i=new Ae(i,e,2*o)}}return Z(this,"_buffer",i),Z(this,"_length",i.length/2),this}function Kr(e){return e.re}function Qr(e){return e.im}Z(Hr,"BYTES_PER_ELEMENT",Zr),Z(Hr,"name","Complex64Array"),Z(Hr,"from",(function(e){var r,n,i,o,a,u,f,l,c,s,y,p;if(!Tr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Tr(i=arguments[1]))throw new TypeError(C("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(r=arguments[2])}if(Xr(e)){if(l=e.length,i){for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Sr(s=i.call(r,e.get(y),y)))a[p]=Ir(s),a[p+1]=Fr(s);else{if(!(He(s)&&s.length>=2))throw new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(e)}if(t(e)){if(i){for(l=e.length,f=e.get&&e.set?Yr("default"):Pr("default"),y=0;y<l;y++)if(!Sr(f(e,y))){c=!0;break}if(c){if(!Lr(l))throw new RangeError(C("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,l));for(a=(o=new this(l/2))._buffer,y=0;y<l;y++)a[y]=i.call(r,f(e,y),y);return o}for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Sr(s=i.call(r,f(e,y),y)))a[p]=Ir(s),a[p+1]=Fr(s);else{if(!(He(s)&&s.length>=2))throw new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(e)}if(rr(e)&&zr&&Tr(e[Br])){if(!Tr((a=e[Br]()).next))throw new TypeError(C("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((u=i?$r(a,i,r):Wr(a))instanceof Error)throw u;for(a=(o=new this(l=u.length/2))._buffer,y=0;y<l;y++)a[y]=u[y];return o}throw new TypeError(C("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Z(Hr,"of",(function(){var e,r;if(!Tr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Or(Hr.prototype,"buffer",(function(){return this._buffer.buffer})),Or(Hr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Or(Hr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Z(Hr.prototype,"BYTES_PER_ELEMENT",Hr.BYTES_PER_ELEMENT),Z(Hr.prototype,"copyWithin",(function(e,r){if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Z(Hr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Z(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new kr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Z(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Br&&Z(t,Br,(function(){return r.entries()})),t})),Z(Hr.prototype,"get",(function(e){var r;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(e))throw new TypeError(C("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new kr((r=this._buffer)[e*=2],r[e+1])})),Or(Hr.prototype,"length",(function(){return this._length})),Z(Hr.prototype,"set",(function(e){var r,n,i,o,a,u,f,l,c;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!ye(n=arguments[1]))throw new TypeError(C("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Sr(e)){if(n>=this._length)throw new RangeError(C("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Ir(e),void(i[n+1]=Fr(e))}if(Xr(e)){if(n+(u=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,c=i.byteOffset+n*Zr,r.buffer===i.buffer&&r.byteOffset<c&&r.byteOffset+r.byteLength>c){for(o=new Ae(r.length),l=0;l<r.length;l++)o[l]=r[l];r=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=r[c],i[n+1]=r[c+1],n+=2,c+=2}else{if(!t(e))throw new TypeError(C("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(u=e.length,l=0;l<u;l++)if(!Sr(e[l])){a=!0;break}if(a){if(!Lr(u))throw new RangeError(C("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,c=i.byteOffset+n*Zr,r.buffer===i.buffer&&r.byteOffset<c&&r.byteOffset+r.byteLength>c){for(o=new Ae(u),l=0;l<u;l++)o[l]=r[l];r=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=r[c],i[n+1]=r[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=e[l],i[n]=Ir(f),i[n+1]=Fr(f),n+=2}}));var et={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function rt(e){var r=et[e];return"function"==typeof r?r:et.default}var tt={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function nt(e){var r=tt[e];return"function"==typeof r?r:tt.default}function it(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(He(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Sr(n))return new TypeError(C("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Kr(n),Qr(n))}return r}function ot(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,He(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Sr(o))return new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Kr(o),Qr(o))}return n}function at(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Sr(n=r[i]))return null;e[o]=Kr(n),e[o+1]=Qr(n),o+=2}return e}var ut=2*be.BYTES_PER_ELEMENT,ft=Rr();function lt(e){return e instanceof pt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ct(e){return e===pt||"Complex64Array"===e.name}function st(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ut/2}function yt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ut}function pt(){var e,n,i,o;if(n=arguments.length,!(this instanceof pt))return 0===n?new pt:1===n?new pt(arguments[0]):2===n?new pt(arguments[0],arguments[1]):new pt(arguments[0],arguments[1],arguments[2]);if(0===n)i=new be(0);else if(1===n)if(ye(arguments[0]))i=new be(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&er(i)&&Sr(i[0])){if(null===(i=at(new be(2*o),i))){if(!Lr(o))throw new RangeError(C("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new be(arguments[0])}}else{if(st(i))i=Cr(i,0);else if(yt(i))i=Mr(i,0);else if(!Lr(o))throw new RangeError(C("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new be(i)}else if(Qe(arguments[0])){if(!r((i=arguments[0]).byteLength/ut))throw new RangeError(C("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ut,i.byteLength));i=new be(i)}else{if(!rr(arguments[0]))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===ft)throw new TypeError(C("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!Tr(i[Br]))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!Tr((i=i[Br]()).next))throw new TypeError(C("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=it(i))instanceof Error)throw i;i=new be(i)}else{if(!Qe(i=arguments[0]))throw new TypeError(C("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!ye(e=arguments[1]))throw new TypeError(C("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!r(e/ut))throw new RangeError(C("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ut,e));if(2===n){if(!r((o=i.byteLength-e)/ut))throw new RangeError(C("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ut,o));i=new be(i,e)}else{if(!ye(o=arguments[2]))throw new TypeError(C("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*ut>i.byteLength-e)throw new RangeError(C("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*ut));i=new be(i,e,2*o)}}return Z(this,"_buffer",i),Z(this,"_length",i.length/2),this}Z(pt,"BYTES_PER_ELEMENT",ut),Z(pt,"name","Complex128Array"),Z(pt,"from",(function(e){var r,n,i,o,a,u,f,l,c,s,y,p;if(!Tr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Tr(i=arguments[1]))throw new TypeError(C("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(r=arguments[2])}if(lt(e)){if(l=e.length,i){for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Sr(s=i.call(r,e.get(y),y)))a[p]=Kr(s),a[p+1]=Qr(s);else{if(!(He(s)&&s.length>=2))throw new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(e)}if(t(e)){if(i){for(l=e.length,f=e.get&&e.set?nt("default"):rt("default"),y=0;y<l;y++)if(!Sr(f(e,y))){c=!0;break}if(c){if(!Lr(l))throw new RangeError(C("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",l));for(a=(o=new this(l/2))._buffer,y=0;y<l;y++)a[y]=i.call(r,f(e,y),y);return o}for(a=(o=new this(l))._buffer,p=0,y=0;y<l;y++){if(Sr(s=i.call(r,f(e,y),y)))a[p]=Kr(s),a[p+1]=Qr(s);else{if(!(He(s)&&s.length>=2))throw new TypeError(C("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));a[p]=s[0],a[p+1]=s[1]}p+=2}return o}return new this(e)}if(rr(e)&&ft&&Tr(e[Br])){if(!Tr((a=e[Br]()).next))throw new TypeError(C("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((u=i?ot(a,i,r):it(a))instanceof Error)throw u;for(a=(o=new this(l=u.length/2))._buffer,y=0;y<l;y++)a[y]=u[y];return o}throw new TypeError(C("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Z(pt,"of",(function(){var e,r;if(!Tr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Or(pt.prototype,"buffer",(function(){return this._buffer.buffer})),Or(pt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Or(pt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Z(pt.prototype,"BYTES_PER_ELEMENT",pt.BYTES_PER_ELEMENT),Z(pt.prototype,"copyWithin",(function(e,r){if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Z(pt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Z(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new _r(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Z(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Br&&Z(t,Br,(function(){return r.entries()})),t})),Z(pt.prototype,"get",(function(e){var r;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(e))throw new TypeError(C("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new _r((r=this._buffer)[e*=2],r[e+1])})),Or(pt.prototype,"length",(function(){return this._length})),Z(pt.prototype,"set",(function(e){var r,n,i,o,a,u,f,l,c;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!ye(n=arguments[1]))throw new TypeError(C("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Sr(e)){if(n>=this._length)throw new RangeError(C("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Kr(e),void(i[n+1]=Qr(e))}if(lt(e)){if(n+(u=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,c=i.byteOffset+n*ut,r.buffer===i.buffer&&r.byteOffset<c&&r.byteOffset+r.byteLength>c){for(o=new be(r.length),l=0;l<r.length;l++)o[l]=r[l];r=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=r[c],i[n+1]=r[c+1],n+=2,c+=2}else{if(!t(e))throw new TypeError(C("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(u=e.length,l=0;l<u;l++)if(!Sr(e[l])){a=!0;break}if(a){if(!Lr(u))throw new RangeError(C("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,c=i.byteOffset+n*ut,r.buffer===i.buffer&&r.byteOffset<c&&r.byteOffset+r.byteLength>c){for(o=new be(u),l=0;l<u;l++)o[l]=r[l];r=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=r[c],i[n+1]=r[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=e[l],i[n]=Kr(f),i[n+1]=Qr(f),n+=2}}));var ht={float64:be,float32:Ae,generic:Array,int16:je,int32:Le,int8:Ie,uint16:Ue,uint32:We,uint8:ze,uint8c:De,complex64:Hr,complex128:pt};function gt(e){return ht[e]||null}function mt(e){return function(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}(0,e)}function wt(e){var r,t;if(!ye(e))throw new TypeError(C("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if("generic"===(r=arguments.length>1?arguments[1]:"float64"))return mt(e);if(null===(t=gt(r)))throw new TypeError(C("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return new t(e)}var bt={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},dt=[be,Ae,Le,We,je,Ue,Ie,ze,De,Hr,pt],vt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Et=vt.length;function At(e){var r;if(er(e))return"generic";if(vr(e))return null;for(r=0;r<Et;r++)if(e instanceof dt[r])return vt[r];return bt[Er(e)]||null}var Tt,_t=Object,xt=Object.getPrototypeOf;Tt=Tr(Object.getPrototypeOf)?xt:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===ee(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var jt=Tt,Vt=Object.prototype;function kt(e){var r;return!!rr(e)&&(r=function(e){return null==e?null:(e=_t(e),jt(e))}(e),!r||!H(e,"constructor")&&H(r,"constructor")&&Tr(r.constructor)&&"[object Function]"===ee(r.constructor)&&H(r,"isPrototypeOf")&&Tr(r.isPrototypeOf)&&(r===Vt||function(e){var r;for(r in e)if(!H(e,r))return!1;return!0}(e)))}var St=["throw","clamp","wrap"];function Lt(){return St.slice()}Z(Lt,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Rt=Lt(),Bt=Rt.length;function Ot(e,r){return kt(r)?H(r,"mode")&&(e.mode=r.mode,!function(e){var r;for(r=0;r<Bt;r++)if(e===Rt[r])return!0;return!1}(e.mode))?new TypeError(C('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"mode",Lt().join('", "'),e.mode)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",r))}return function(e,r){var i,o,a;if(!t(e))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(!t(r))throw new TypeError(C("invalid argument. Second argument must be an array-like object. Value: `%s`.",r));if(i={mode:"normalize"},arguments.length>2&&(o=Ot(i,arguments[2])))throw o;return"generic"===(a=At(e))||null===a?n(e,r,i.mode):n.assign(e,r,i.mode,wt(r.length,a),1,0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).take=r();
//# sourceMappingURL=browser.js.map
