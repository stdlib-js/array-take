"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=i(function(x,n){
function c(){return{mode:"normalize"}}n.exports=c
});var l=i(function(C,m){
var p=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/ndarray-base-assert-is-index-mode/dist'),h=require('@stdlib/ndarray-index-modes/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r){return p(r)?b(r,"mode")&&(e.mode=r.mode,!w(e.mode))?new TypeError(s('1s14S',"mode",h().join('", "'),e.mode)):null:new TypeError(s('1s12V',r));}m.exports=y
});var q=i(function(F,g){
var v=require('@stdlib/assert-is-collection/dist'),d=require('@stdlib/array-base-take/dist'),j=require('@stdlib/array-zeros/dist'),E=require('@stdlib/array-dtype/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),O=o(),T=l();function k(e,r){var t,u,a;if(!v(e))throw new TypeError(f('1s12O',e));if(!v(r))throw new TypeError(f('1s12y',r));if(t=O(),arguments.length>2&&(u=T(t,arguments[2]),u))throw u;return a=E(e),a==="generic"||a===null?d(e,r,t.mode):d.assign(e,r,t.mode,j(r.length,a),1,0)}g.exports=k
});var V=q();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
