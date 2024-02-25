// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-index-modes@v0.2.1-esm/index.mjs";function l(l,j){var p,a,h;if(!e(l))throw new TypeError(n("null2O",l));if(!e(j))throw new TypeError(n("null2y",j));if(p={mode:"normalize"},arguments.length>2&&(a=function(e,s){return d(s)?i(s,"mode")&&(e.mode=s.mode,!o(e.mode))?new TypeError(n("null4S","mode",m().join('", "'),e.mode)):null:new TypeError(n("null2V",s))}(p,arguments[2]),a))throw a;return"generic"===(h=t(l))||null===h?s(l,j,p.mode):s.assign(l,j,p.mode,r(j.length,h),1,0)}export{l as default};
//# sourceMappingURL=index.mjs.map
