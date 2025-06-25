import y from "react";
var i = { exports: {} }, t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _;
function v() {
  if (_) return t;
  _ = 1;
  var m = y, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, R = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, r, f) {
    var e, n = {}, u = null, l = null;
    f !== void 0 && (u = "" + f), r.key !== void 0 && (u = "" + r.key), r.ref !== void 0 && (l = r.ref);
    for (e in r) x.call(r, e) && !c.hasOwnProperty(e) && (n[e] = r[e]);
    if (o && o.defaultProps) for (e in r = o.defaultProps, r) n[e] === void 0 && (n[e] = r[e]);
    return { $$typeof: a, type: o, key: u, ref: l, props: n, _owner: R.current };
  }
  return t.Fragment = d, t.jsx = s, t.jsxs = s, t;
}
var p;
function h() {
  return p || (p = 1, i.exports = v()), i.exports;
}
var O = h();
function j() {
  return /* @__PURE__ */ O.jsx("h1", { children: "Hello World from the Library thisal!" });
}
export {
  j as HelloWorld,
  j as default
};
