(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.ReactHelloLib={},t.React))})(this,function(t,n){"use strict";var f={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function m(){if(l)return o;l=1;var y=n,v=Symbol.for("react.element"),h=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,b=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function _(i,e,c){var r,u={},s=null,a=null;c!==void 0&&(s=""+c),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)O.call(e,r)&&!j.hasOwnProperty(r)&&(u[r]=e[r]);if(i&&i.defaultProps)for(r in e=i.defaultProps,e)u[r]===void 0&&(u[r]=e[r]);return{$$typeof:v,type:i,key:s,ref:a,props:u,_owner:b.current}}return o.Fragment=h,o.jsx=_,o.jsxs=_,o}var d;function R(){return d||(d=1,f.exports=m()),f.exports}var x=R();function p(){return x.jsx("h1",{children:"Hello World from the Library thisal!"})}t.HelloWorld=p,t.default=p,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
