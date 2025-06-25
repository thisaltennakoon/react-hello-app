var Qn = Object.defineProperty;
var Zn = (e, t, r) => t in e ? Qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ne = (e, t, r) => Zn(e, typeof t != "symbol" ? t + "" : t, r);
import * as $ from "react";
import Ae, { forwardRef as eo, useContext as to, isValidElement as at, cloneElement as st, Children as ro } from "react";
var _t = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function no() {
  if (vr) return Fe;
  vr = 1;
  var e = Ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var p, d = {}, g = null, v = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (p in l) n.call(l, p) && !i.hasOwnProperty(p) && (d[p] = l[p]);
    if (c && c.defaultProps) for (p in l = c.defaultProps, l) d[p] === void 0 && (d[p] = l[p]);
    return { $$typeof: t, type: c, key: g, ref: v, props: d, _owner: o.current };
  }
  return Fe.Fragment = r, Fe.jsx = s, Fe.jsxs = s, Fe;
}
var Sr;
function oo() {
  return Sr || (Sr = 1, _t.exports = no()), _t.exports;
}
var j = oo();
function Ce(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pt.apply(null, arguments);
}
function io(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ao(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var so = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ao(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = io(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), X = "-ms-", mt = "-moz-", O = "-webkit-", tn = "comm", er = "rule", tr = "decl", co = "@import", rn = "@keyframes", lo = "@layer", uo = Math.abs, yt = String.fromCharCode, fo = Object.assign;
function po(e, t) {
  return q(e, 0) ^ 45 ? (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3) : 0;
}
function nn(e) {
  return e.trim();
}
function mo(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, r) {
  return e.replace(t, r);
}
function Gt(e, t) {
  return e.indexOf(t);
}
function q(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ge(e, t, r) {
  return e.slice(t, r);
}
function ue(e) {
  return e.length;
}
function rr(e) {
  return e.length;
}
function nt(e, t) {
  return t.push(e), e;
}
function ho(e, t) {
  return e.map(t).join("");
}
var bt = 1, Be = 1, on = 0, ee = 0, H = 0, Me = "";
function vt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: bt, column: Be, length: s, return: "" };
}
function je(e, t) {
  return fo(vt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function go() {
  return H;
}
function yo() {
  return H = ee > 0 ? q(Me, --ee) : 0, Be--, H === 10 && (Be = 1, bt--), H;
}
function re() {
  return H = ee < on ? q(Me, ee++) : 0, Be++, H === 10 && (Be = 1, bt++), H;
}
function pe() {
  return q(Me, ee);
}
function ct() {
  return ee;
}
function qe(e, t) {
  return Ge(Me, e, t);
}
function He(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function an(e) {
  return bt = Be = 1, on = ue(Me = e), ee = 0, [];
}
function sn(e) {
  return Me = "", e;
}
function lt(e) {
  return nn(qe(ee - 1, Ht(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bo(e) {
  for (; (H = pe()) && H < 33; )
    re();
  return He(e) > 2 || He(H) > 3 ? "" : " ";
}
function vo(e, t) {
  for (; --t && re() && !(H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97); )
    ;
  return qe(e, ct() + (t < 6 && pe() == 32 && re() == 32));
}
function Ht(e) {
  for (; re(); )
    switch (H) {
      // ] ) " '
      case e:
        return ee;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ht(H);
        break;
      // (
      case 40:
        e === 41 && Ht(e);
        break;
      // \
      case 92:
        re();
        break;
    }
  return ee;
}
function So(e, t) {
  for (; re() && e + H !== 57; )
    if (e + H === 84 && pe() === 47)
      break;
  return "/*" + qe(t, ee - 1) + "*" + yt(e === 47 ? e : re());
}
function xo(e) {
  for (; !He(pe()); )
    re();
  return qe(e, ee);
}
function Co(e) {
  return sn(ut("", null, null, null, [""], e = an(e), 0, [0], e));
}
function ut(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, p = 0, d = s, g = 0, v = 0, y = 0, f = 1, S = 1, w = 1, P = 0, C = "", b = o, h = i, k = n, T = C; S; )
    switch (y = P, P = re()) {
      // (
      case 40:
        if (y != 108 && q(T, d - 1) == 58) {
          Gt(T += I(lt(P), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += lt(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += bo(y);
        break;
      // \
      case 92:
        T += vo(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            nt(wo(So(re(), ct()), t, r), l);
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = ue(T) * w;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + p:
            w == -1 && (T = I(T, /\f/g, "")), v > 0 && ue(T) - d && nt(v > 32 ? Cr(T + ";", n, r, d - 1) : Cr(I(T, " ", "") + ";", n, r, d - 2), l);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (nt(k = xr(T, t, r, u, p, o, c, C, b = [], h = [], d), i), P === 123)
              if (p === 0)
                ut(T, t, k, k, b, i, d, c, h);
              else
                switch (g === 99 && q(T, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, k, k, n && nt(xr(e, k, k, 0, 0, o, c, C, o, b = [], d), h), o, h, d, c, n ? b : h);
                    break;
                  default:
                    ut(T, k, k, k, [""], h, 0, c, h);
                }
        }
        u = p = v = 0, f = w = 1, C = T = "", d = s;
        break;
      // :
      case 58:
        d = 1 + ue(T), v = y;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && yo() == 125)
            continue;
        }
        switch (T += yt(P), P * f) {
          // &
          case 38:
            w = p > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (ue(T) - 1) * w, w = 1;
            break;
          // @
          case 64:
            pe() === 45 && (T += lt(re())), g = pe(), p = d = ue(C = T += xo(ct())), P++;
            break;
          // -
          case 45:
            y === 45 && ue(T) == 2 && (f = 0);
        }
    }
  return i;
}
function xr(e, t, r, n, o, i, s, c, l, u, p) {
  for (var d = o - 1, g = o === 0 ? i : [""], v = rr(g), y = 0, f = 0, S = 0; y < n; ++y)
    for (var w = 0, P = Ge(e, d + 1, d = uo(f = s[y])), C = e; w < v; ++w)
      (C = nn(f > 0 ? g[w] + " " + P : I(P, /&\f/g, g[w]))) && (l[S++] = C);
  return vt(e, t, r, o === 0 ? er : c, l, u, p);
}
function wo(e, t, r) {
  return vt(e, t, r, tn, yt(go()), Ge(e, 2, -2), 0);
}
function Cr(e, t, r, n) {
  return vt(e, t, r, tr, Ge(e, 0, n), Ge(e, n + 1, -1), n);
}
function Oe(e, t) {
  for (var r = "", n = rr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function $o(e, t, r, n) {
  switch (e.type) {
    case lo:
      if (e.children.length) break;
    case co:
    case tr:
      return e.return = e.return || e.value;
    case tn:
      return "";
    case rn:
      return e.return = e.value + "{" + Oe(e.children, n) + "}";
    case er:
      e.value = e.props.join(",");
  }
  return ue(r = Oe(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ko(e) {
  var t = rr(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Po(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function cn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var To = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = pe(), o === 38 && i === 12 && (r[n] = 1), !He(i); )
    re();
  return qe(t, ee);
}, Ro = function(t, r) {
  var n = -1, o = 44;
  do
    switch (He(o)) {
      case 0:
        o === 38 && pe() === 12 && (r[n] = 1), t[n] += To(ee - 1, r, n);
        break;
      case 2:
        t[n] += lt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = pe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += yt(o);
    }
  while (o = re());
  return t;
}, Eo = function(t, r) {
  return sn(Ro(an(t), r));
}, wr = /* @__PURE__ */ new WeakMap(), Ao = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !wr.get(n)) && !o) {
      wr.set(t, !0);
      for (var i = [], s = Eo(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var p = 0; p < c.length; p++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[p]) : c[p] + " " + s[l];
    }
  }
}, Oo = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ln(e, t) {
  switch (po(e, t)) {
    // color-adjust
    case 5103:
      return O + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return O + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + mt + e + X + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return O + e + X + e + e;
    // order
    case 6165:
      return O + e + X + "flex-" + e + e;
    // align-items
    case 5187:
      return O + e + I(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + X + "flex-$1$2") + e;
    // align-self
    case 5443:
      return O + e + X + "flex-item-" + I(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return O + e + X + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return O + e + X + I(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return O + e + X + I(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return O + "box-" + I(e, "-grow", "") + O + e + X + I(e, "grow", "positive") + e;
    // transition
    case 4554:
      return O + I(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    // cursor
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, O + "$1$`$1");
    // justify-content
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + X + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, O + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ue(e) - 1 - t > 6) switch (q(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (q(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return I(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + mt + (q(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Gt(e, "stretch") ? ln(I(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (q(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (q(e, ue(e) - 3 - (~Gt(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return I(e, ":", ":" + O) + e;
        // (inline-)?fl(e)x
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + O + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + X + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (q(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return O + e + X + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return O + e + X + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return O + e + X + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return O + e + X + e + e;
  }
  return e;
}
var Io = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case tr:
      t.return = ln(t.value, t.length);
      break;
    case rn:
      return Oe([je(t, {
        value: I(t.value, "@", "@" + O)
      })], o);
    case er:
      if (t.length) return ho(t.props, function(i) {
        switch (mo(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Oe([je(t, {
              props: [I(i, /:(read-\w+)/, ":" + mt + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Oe([je(t, {
              props: [I(i, /:(plac\w+)/, ":" + O + "input-$1")]
            }), je(t, {
              props: [I(i, /:(plac\w+)/, ":" + mt + "$1")]
            }), je(t, {
              props: [I(i, /:(plac\w+)/, X + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Bo = [Io], _o = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var S = f.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Bo, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var S = f.getAttribute("data-emotion").split(" "), w = 1; w < S.length; w++)
        i[S[w]] = !0;
      c.push(f);
    }
  );
  var l, u = [Ao, Oo];
  {
    var p, d = [$o, Po(function(f) {
      p.insert(f);
    })], g = ko(u.concat(o, d)), v = function(S) {
      return Oe(Co(S), g);
    };
    l = function(S, w, P, C) {
      p = P, v(S ? S + "{" + w.styles + "}" : w.styles), C && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new so({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(c), y;
}, Mt = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function Mo() {
  if ($r) return B;
  $r = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var k = h.$$typeof;
      switch (k) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case p:
                case y:
                case v:
                case s:
                  return h;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function b(h) {
    return C(h) === u;
  }
  return B.AsyncMode = l, B.ConcurrentMode = u, B.ContextConsumer = c, B.ContextProvider = s, B.Element = t, B.ForwardRef = p, B.Fragment = n, B.Lazy = y, B.Memo = v, B.Portal = r, B.Profiler = i, B.StrictMode = o, B.Suspense = d, B.isAsyncMode = function(h) {
    return b(h) || C(h) === l;
  }, B.isConcurrentMode = b, B.isContextConsumer = function(h) {
    return C(h) === c;
  }, B.isContextProvider = function(h) {
    return C(h) === s;
  }, B.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, B.isForwardRef = function(h) {
    return C(h) === p;
  }, B.isFragment = function(h) {
    return C(h) === n;
  }, B.isLazy = function(h) {
    return C(h) === y;
  }, B.isMemo = function(h) {
    return C(h) === v;
  }, B.isPortal = function(h) {
    return C(h) === r;
  }, B.isProfiler = function(h) {
    return C(h) === i;
  }, B.isStrictMode = function(h) {
    return C(h) === o;
  }, B.isSuspense = function(h) {
    return C(h) === d;
  }, B.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === d || h === g || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === v || h.$$typeof === s || h.$$typeof === c || h.$$typeof === p || h.$$typeof === S || h.$$typeof === w || h.$$typeof === P || h.$$typeof === f);
  }, B.typeOf = C, B;
}
var kr;
function zo() {
  return kr || (kr = 1, Mt.exports = Mo()), Mt.exports;
}
var zt, Pr;
function No() {
  if (Pr) return zt;
  Pr = 1;
  var e = zo(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function s(y) {
    return e.isMemo(y) ? o : i[y.$$typeof] || t;
  }
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, g = Object.prototype;
  function v(y, f, S) {
    if (typeof f != "string") {
      if (g) {
        var w = d(f);
        w && w !== g && v(y, w, S);
      }
      var P = l(f);
      u && (P = P.concat(u(f)));
      for (var C = s(y), b = s(f), h = 0; h < P.length; ++h) {
        var k = P[h];
        if (!r[k] && !(S && S[k]) && !(b && b[k]) && !(C && C[k])) {
          var T = p(f, k);
          try {
            c(y, k, T);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return zt = v, zt;
}
No();
var Fo = !0;
function un(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var nr = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Fo === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, fn = function(t, r, n) {
  nr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function jo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Lo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Do = /[A-Z]|^ms/g, Wo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, dn = function(t) {
  return t.charCodeAt(1) === 45;
}, Tr = function(t) {
  return t != null && typeof t != "boolean";
}, Nt = /* @__PURE__ */ cn(function(e) {
  return dn(e) ? e : e.replace(Do, "-$&").toLowerCase();
}), Rr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Wo, function(n, o, i) {
          return fe = {
            name: o,
            styles: i,
            next: fe
          }, o;
        });
  }
  return Lo[t] !== 1 && !dn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ke(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return fe = {
          name: o.name,
          styles: o.styles,
          next: fe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            fe = {
              name: s.name,
              styles: s.styles,
              next: fe
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Vo(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = fe, u = r(e);
        return fe = l, Ke(e, t, u);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var d = t[p];
  return d !== void 0 ? d : p;
}
function Vo(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ke(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Tr(c) && (n += Nt(i) + ":" + Rr(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          Tr(s[l]) && (n += Nt(i) + ":" + Rr(i, s[l]) + ";");
      else {
        var u = Ke(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Nt(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var Er = /label:\s*([^\s;{]+)\s*(;|$)/g, fe;
function St(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  fe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Ke(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Ke(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  Er.lastIndex = 0;
  for (var u = "", p; (p = Er.exec(o)) !== null; )
    u += "-" + p[1];
  var d = jo(o) + u;
  return {
    name: d,
    styles: o,
    next: fe
  };
}
var Go = function(t) {
  return t();
}, Ho = $.useInsertionEffect ? $.useInsertionEffect : !1, pn = Ho || Go, mn = /* @__PURE__ */ $.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ _o({
    key: "css"
  }) : null
);
mn.Provider;
var hn = function(t) {
  return /* @__PURE__ */ eo(function(r, n) {
    var o = to(mn);
    return t(r, o, n);
  });
}, or = /* @__PURE__ */ $.createContext({}), ir = {}.hasOwnProperty, Kt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ko = function(t, r) {
  var n = {};
  for (var o in r)
    ir.call(r, o) && (n[o] = r[o]);
  return n[Kt] = t, n;
}, Uo = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return nr(r, n, o), pn(function() {
    return fn(r, n, o);
  }), null;
}, Yo = /* @__PURE__ */ hn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Kt], i = [n], s = "";
  typeof e.className == "string" ? s = un(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = St(i, void 0, $.useContext(or));
  s += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    ir.call(e, u) && u !== "css" && u !== Kt && (l[u] = e[u]);
  return l.className = s, r && (l.ref = r), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(Uo, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ $.createElement(o, l));
}), qo = Yo, Ar = function(t, r) {
  var n = arguments;
  if (r == null || !ir.call(r, "css"))
    return $.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = qo, i[1] = Ko(t, r);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return $.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ar || (Ar = {}));
function ar() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return St(t);
}
function Xe() {
  var e = ar.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Xo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jo = /* @__PURE__ */ cn(
  function(e) {
    return Xo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qo = Jo, Zo = function(t) {
  return t !== "theme";
}, Or = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Qo : Zo;
}, Ir = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ei = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return nr(r, n, o), pn(function() {
    return fn(r, n, o);
  }), null;
}, ti = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = Ir(t, r, n), l = c || Or(o), u = !l("as");
  return function() {
    var p = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      d.push.apply(d, p);
    else {
      var g = p[0];
      d.push(g[0]);
      for (var v = p.length, y = 1; y < v; y++)
        d.push(p[y], g[y]);
    }
    var f = hn(function(S, w, P) {
      var C = u && S.as || o, b = "", h = [], k = S;
      if (S.theme == null) {
        k = {};
        for (var T in S)
          k[T] = S[T];
        k.theme = $.useContext(or);
      }
      typeof S.className == "string" ? b = un(w.registered, h, S.className) : S.className != null && (b = S.className + " ");
      var M = St(d.concat(h), w.registered, k);
      b += w.key + "-" + M.name, s !== void 0 && (b += " " + s);
      var D = u && c === void 0 ? Or(C) : l, a = {};
      for (var x in S)
        u && x === "as" || D(x) && (a[x] = S[x]);
      return a.className = b, P && (a.ref = P), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(ei, {
        cache: w,
        serialized: M,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ $.createElement(C, a));
    });
    return f.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = d, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + s;
      }
    }), f.withComponent = function(S, w) {
      var P = e(S, pt({}, r, w, {
        shouldForwardProp: Ir(f, w, !0)
      }));
      return P.apply(void 0, d);
    }, f;
  };
}, ri = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ut = ti.bind(null);
ri.forEach(function(e) {
  Ut[e] = Ut(e);
});
function ni(e, t) {
  return Ut(e, t);
}
function oi(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Br = [];
function _r(e) {
  return Br[0] = e, St(Br);
}
var Ft = { exports: {} }, _ = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function ii() {
  if (Mr) return _;
  Mr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case l:
            case u:
            case g:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case c:
                case d:
                case p:
                  return f;
                case i:
                  return f;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return _.ContextConsumer = i, _.ContextProvider = s, _.Element = e, _.ForwardRef = c, _.Fragment = r, _.Lazy = d, _.Memo = p, _.Portal = t, _.Profiler = o, _.StrictMode = n, _.Suspense = l, _.SuspenseList = u, _.isContextConsumer = function(f) {
    return y(f) === i;
  }, _.isContextProvider = function(f) {
    return y(f) === s;
  }, _.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, _.isForwardRef = function(f) {
    return y(f) === c;
  }, _.isFragment = function(f) {
    return y(f) === r;
  }, _.isLazy = function(f) {
    return y(f) === d;
  }, _.isMemo = function(f) {
    return y(f) === p;
  }, _.isPortal = function(f) {
    return y(f) === t;
  }, _.isProfiler = function(f) {
    return y(f) === o;
  }, _.isStrictMode = function(f) {
    return y(f) === n;
  }, _.isSuspense = function(f) {
    return y(f) === l;
  }, _.isSuspenseList = function(f) {
    return y(f) === u;
  }, _.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === p || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === v || f.getModuleId !== void 0);
  }, _.typeOf = y, _;
}
var zr;
function ai() {
  return zr || (zr = 1, Ft.exports = /* @__PURE__ */ ii()), Ft.exports;
}
var gn = /* @__PURE__ */ ai();
function de(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yn(e) {
  if (/* @__PURE__ */ $.isValidElement(e) || gn.isValidElementType(e) || !de(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = yn(e[r]);
  }), t;
}
function Q(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return de(e) && de(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ $.isValidElement(t[o]) || gn.isValidElementType(t[o]) ? n[o] = t[o] : de(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && de(e[o]) ? n[o] = Q(e[o], t[o], r) : r.clone ? n[o] = de(t[o]) ? yn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const si = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ci(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = si(t), s = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function u(g, v) {
    const y = s.indexOf(v);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : v) - n / 100}${r})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : c(g);
  }
  function d(g) {
    const v = s.indexOf(g);
    return v === 0 ? c(s[1]) : v === s.length - 1 ? l(s[v]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: p,
    not: d,
    unit: r,
    ...o
  };
}
function li(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function ui(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function fi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r)
    return null;
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function di(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const pi = {
  borderRadius: 4
};
function Ve(e, t) {
  return t ? Q(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const xt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Nr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${xt[e]}px)`
}, mi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : xt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function ce(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Nr;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Nr;
    return Object.keys(t).reduce((s, c) => {
      if (ui(i.keys, c)) {
        const l = fi(n.containerQueries ? n : mi, c);
        l && (s[l] = r(t[c], c));
      } else if (Object.keys(i.values || xt).includes(c)) {
        const l = i.up(c);
        s[l] = r(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function bn(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function vn(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function hi(e, ...t) {
  const r = bn(e), n = [r, ...t].reduce((o, i) => Q(o, i), {});
  return vn(Object.keys(r), n);
}
function gi(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function jt({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || gi(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, c, l) => (Array.isArray(e) ? (s[c] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (s[c] = e[c] != null ? e[c] : e[i], i = c) : s[c] = e, s), {});
}
function U(e) {
  if (typeof e != "string")
    throw new Error(Ce(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ct(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ht(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ct(e, r) || n, t && (o = t(o, n, e)), o;
}
function G(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = Ct(l, n) || {};
    return ce(s, c, (d) => {
      let g = ht(u, o, d);
      return d === g && typeof d == "string" && (g = ht(u, o, `${t}${d === "default" ? "" : U(d)}`, d)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function yi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const bi = {
  m: "margin",
  p: "padding"
}, vi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Si = yi((e) => {
  if (e.length > 2)
    if (Fr[e])
      e = Fr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = bi[t], o = vi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], cr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...sr, ...cr];
function Je(e, t, r, n) {
  const o = Ct(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : () => {
  };
}
function wt(e) {
  return Je(e, "spacing", 8);
}
function we(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = we(t, r), n), {});
}
function Ci(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Si(r), i = xi(o, n), s = e[r];
  return ce(e, s, i);
}
function Sn(e, t) {
  const r = wt(e.theme);
  return Object.keys(e).map((n) => Ci(e, t, n, r)).reduce(Ve, {});
}
function W(e) {
  return Sn(e, sr);
}
W.propTypes = {};
W.filterProps = sr;
function V(e) {
  return Sn(e, cr);
}
V.propTypes = {};
V.filterProps = cr;
function xn(e = 8, t = wt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return r.mui = !0, r;
}
function $t(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ve(o, t[i](n)) : o, {});
  return r.propTypes = {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ie(e, t) {
  return G({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const wi = ie("border", oe), $i = ie("borderTop", oe), ki = ie("borderRight", oe), Pi = ie("borderBottom", oe), Ti = ie("borderLeft", oe), Ri = ie("borderColor"), Ei = ie("borderTopColor"), Ai = ie("borderRightColor"), Oi = ie("borderBottomColor"), Ii = ie("borderLeftColor"), Bi = ie("outline", oe), _i = ie("outlineColor"), kt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Je(e.theme, "shape.borderRadius", 4), r = (n) => ({
      borderRadius: we(t, n)
    });
    return ce(e, e.borderRadius, r);
  }
  return null;
};
kt.propTypes = {};
kt.filterProps = ["borderRadius"];
$t(wi, $i, ki, Pi, Ti, Ri, Ei, Ai, Oi, Ii, kt, Bi, _i);
const Pt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Je(e.theme, "spacing", 8), r = (n) => ({
      gap: we(t, n)
    });
    return ce(e, e.gap, r);
  }
  return null;
};
Pt.propTypes = {};
Pt.filterProps = ["gap"];
const Tt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Je(e.theme, "spacing", 8), r = (n) => ({
      columnGap: we(t, n)
    });
    return ce(e, e.columnGap, r);
  }
  return null;
};
Tt.propTypes = {};
Tt.filterProps = ["columnGap"];
const Rt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Je(e.theme, "spacing", 8), r = (n) => ({
      rowGap: we(t, n)
    });
    return ce(e, e.rowGap, r);
  }
  return null;
};
Rt.propTypes = {};
Rt.filterProps = ["rowGap"];
const Mi = G({
  prop: "gridColumn"
}), zi = G({
  prop: "gridRow"
}), Ni = G({
  prop: "gridAutoFlow"
}), Fi = G({
  prop: "gridAutoColumns"
}), ji = G({
  prop: "gridAutoRows"
}), Li = G({
  prop: "gridTemplateColumns"
}), Di = G({
  prop: "gridTemplateRows"
}), Wi = G({
  prop: "gridTemplateAreas"
}), Vi = G({
  prop: "gridArea"
});
$t(Pt, Tt, Rt, Mi, zi, Ni, Fi, ji, Li, Di, Wi, Vi);
function Ie(e, t) {
  return t === "grey" ? t : e;
}
const Gi = G({
  prop: "color",
  themeKey: "palette",
  transform: Ie
}), Hi = G({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ie
}), Ki = G({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ie
});
$t(Gi, Hi, Ki);
function te(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ui = G({
  prop: "width",
  transform: te
}), lr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || xt[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: te(r)
      };
    };
    return ce(e, e.maxWidth, t);
  }
  return null;
};
lr.filterProps = ["maxWidth"];
const Yi = G({
  prop: "minWidth",
  transform: te
}), qi = G({
  prop: "height",
  transform: te
}), Xi = G({
  prop: "maxHeight",
  transform: te
}), Ji = G({
  prop: "minHeight",
  transform: te
});
G({
  prop: "size",
  cssProperty: "width",
  transform: te
});
G({
  prop: "size",
  cssProperty: "height",
  transform: te
});
const Qi = G({
  prop: "boxSizing"
});
$t(Ui, lr, Yi, qi, Xi, Ji, Qi);
const Qe = {
  // borders
  border: {
    themeKey: "borders",
    transform: oe
  },
  borderTop: {
    themeKey: "borders",
    transform: oe
  },
  borderRight: {
    themeKey: "borders",
    transform: oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: oe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: kt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ie
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ie
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ie
  },
  // spacing
  p: {
    style: V
  },
  pt: {
    style: V
  },
  pr: {
    style: V
  },
  pb: {
    style: V
  },
  pl: {
    style: V
  },
  px: {
    style: V
  },
  py: {
    style: V
  },
  padding: {
    style: V
  },
  paddingTop: {
    style: V
  },
  paddingRight: {
    style: V
  },
  paddingBottom: {
    style: V
  },
  paddingLeft: {
    style: V
  },
  paddingX: {
    style: V
  },
  paddingY: {
    style: V
  },
  paddingInline: {
    style: V
  },
  paddingInlineStart: {
    style: V
  },
  paddingInlineEnd: {
    style: V
  },
  paddingBlock: {
    style: V
  },
  paddingBlockStart: {
    style: V
  },
  paddingBlockEnd: {
    style: V
  },
  m: {
    style: W
  },
  mt: {
    style: W
  },
  mr: {
    style: W
  },
  mb: {
    style: W
  },
  ml: {
    style: W
  },
  mx: {
    style: W
  },
  my: {
    style: W
  },
  margin: {
    style: W
  },
  marginTop: {
    style: W
  },
  marginRight: {
    style: W
  },
  marginBottom: {
    style: W
  },
  marginLeft: {
    style: W
  },
  marginX: {
    style: W
  },
  marginY: {
    style: W
  },
  marginInline: {
    style: W
  },
  marginInlineStart: {
    style: W
  },
  marginInlineEnd: {
    style: W
  },
  marginBlock: {
    style: W
  },
  marginBlockStart: {
    style: W
  },
  marginBlockEnd: {
    style: W
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pt
  },
  rowGap: {
    style: Rt
  },
  columnGap: {
    style: Tt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: te
  },
  maxWidth: {
    style: lr
  },
  minWidth: {
    transform: te
  },
  height: {
    transform: te
  },
  maxHeight: {
    transform: te
  },
  minHeight: {
    transform: te
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Zi(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ea(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ta() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: p,
      style: d
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = Ct(o, u) || {};
    return d ? d(s) : ce(s, n, (y) => {
      let f = ht(g, p, y);
      return y === f && typeof y == "string" && (f = ht(g, p, `${r}${y === "default" ? "" : U(y)}`, y)), l === !1 ? f : {
        [l]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Qe;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = bn(o.breakpoints), p = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((g) => {
        const v = ea(l[g], o);
        if (v != null)
          if (typeof v == "object")
            if (i[g])
              d = Ve(d, e(g, v, o, i));
            else {
              const y = ce({
                theme: o
              }, v, (f) => ({
                [g]: f
              }));
              Zi(y, v) ? d[g] = t({
                sx: v,
                theme: o
              }) : d = Ve(d, y);
            }
          else
            d = Ve(d, e(g, v, o, i));
      }), li(o, vn(p, d));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const _e = ta();
_e.filterProps = ["sx"];
function ra(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Et(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = ci(r), l = xn(o);
  let u = Q({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...pi,
      ...i
    }
  }, s);
  return u = di(u), u.applyStyles = ra, u = t.reduce((p, d) => Q(p, d), u), u.unstable_sxConfig = {
    ...Qe,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return _e({
      sx: d,
      theme: this
    });
  }, u;
}
function na(e) {
  return Object.keys(e).length === 0;
}
function oa(e = null) {
  const t = $.useContext(or);
  return !t || na(t) ? e : t;
}
const ia = Et();
function aa(e = ia) {
  return oa(e);
}
const sa = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Qe;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function ca(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = sa(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return de(c) ? {
      ...n,
      ...c
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const jr = (e) => e, la = () => {
  let e = jr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = jr;
    }
  };
}, ua = la();
function Cn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Cn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Z() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Cn(e)) && (n && (n += " "), n += t);
  return n;
}
const fa = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ze(e, t, r = "Mui") {
  const n = fa[t];
  return n ? `${r}-${n}` : `${ua.generate(e)}-${t}`;
}
function At(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ze(e, o, r);
  }), n;
}
function wn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: _r(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = _r(o.style));
  }), n;
}
const da = Et();
function Lt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function pa(e) {
  return e ? (t, r) => r[e] : null;
}
function ma(e, t, r) {
  e.theme = ga(e.theme) ? r : e.theme[t] || e.theme;
}
function ft(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ft(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return $n(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function $n(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function kn(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = da,
    rootShouldForwardProp: n = Lt,
    slotShouldForwardProp: o = Lt
  } = e;
  function i(c) {
    ma(c, t, r);
  }
  return (c, l = {}) => {
    oi(c, (h) => h.filter((k) => k !== _e));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: d,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = pa(ba(p)),
      ...y
    } = l, f = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), S = g || !1;
    let w = Lt;
    p === "Root" || p === "root" ? w = n : p ? w = o : ya(c) && (w = void 0);
    const P = ni(c, {
      shouldForwardProp: w,
      label: ha(),
      ...y
    }), C = (h) => {
      if (h.__emotion_real === h)
        return h;
      if (typeof h == "function")
        return function(T) {
          return ft(T, h);
        };
      if (de(h)) {
        const k = wn(h);
        return k.variants ? function(M) {
          return ft(M, k);
        } : k.style;
      }
      return h;
    }, b = (...h) => {
      const k = [], T = h.map(C), M = [];
      if (k.push(i), u && v && M.push(function(R) {
        var J, se;
        const F = (se = (J = R.theme.components) == null ? void 0 : J[u]) == null ? void 0 : se.styleOverrides;
        if (!F)
          return null;
        const K = {};
        for (const ge in F)
          K[ge] = ft(R, F[ge]);
        return v(R, K);
      }), u && !f && M.push(function(R) {
        var K, J;
        const E = R.theme, F = (J = (K = E == null ? void 0 : E.components) == null ? void 0 : K[u]) == null ? void 0 : J.variants;
        return F ? $n(R, F) : null;
      }), S || M.push(_e), Array.isArray(T[0])) {
        const x = T.shift(), R = new Array(k.length).fill(""), E = new Array(M.length).fill("");
        let F;
        F = [...R, ...x, ...E], F.raw = [...R, ...x.raw, ...E], k.unshift(F);
      }
      const D = [...k, ...T, ...M], a = P(...D);
      return c.muiName && (a.muiName = c.muiName), a;
    };
    return P.withConfig && (b.withConfig = P.withConfig), b;
  };
}
function ha(e, t) {
  return void 0;
}
function ga(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ya(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ba(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const va = kn();
function Ue(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = Ue(i[l], s[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Sa(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Ue(t.components[r].defaultProps, n);
}
function xa({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = aa(r);
  return n && (o = o[n] || o), Sa({
    theme: o,
    name: t,
    props: e
  });
}
const Ca = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function wa(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function ur(e, t = 0, r = 1) {
  return wa(e, t, r);
}
function $a(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function be(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return be($a(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(Ce(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Ce(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ka = (e) => {
  const t = be(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, De = (e, t) => {
  try {
    return ka(e);
  } catch {
    return e;
  }
};
function Ot(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Pn(e) {
  e = be(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, p = (u + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Ot({
    type: c,
    values: l
  });
}
function Yt(e) {
  e = be(e);
  let t = e.type === "hsl" || e.type === "hsla" ? be(Pn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Pa(e, t) {
  const r = Yt(e), n = Yt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ee(e, t) {
  return e = be(e), t = ur(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ot(e);
}
function ot(e, t, r) {
  try {
    return Ee(e, t);
  } catch {
    return e;
  }
}
function fr(e, t) {
  if (e = be(e), t = ur(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ot(e);
}
function z(e, t, r) {
  try {
    return fr(e, t);
  } catch {
    return e;
  }
}
function dr(e, t) {
  if (e = be(e), t = ur(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ot(e);
}
function N(e, t, r) {
  try {
    return dr(e, t);
  } catch {
    return e;
  }
}
function Ta(e, t = 0.15) {
  return Yt(e) > 0.5 ? fr(e, t) : dr(e, t);
}
function it(e, t, r) {
  try {
    return Ta(e, t);
  } catch {
    return e;
  }
}
const Ra = /* @__PURE__ */ $.createContext(void 0);
function Ea(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ue(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ue(o, n) : n;
}
function Aa({
  props: e,
  name: t
}) {
  const r = $.useContext(Ra);
  return Ea({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Lr = {
  theme: void 0
};
function Oa(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Lr.theme = o.theme, i = wn(e(Lr)), t = i, r = o.theme), i;
  };
}
function Ia(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Dr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ba = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, _a = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Dt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return Ba(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, d = _a(c, l);
        Object.assign(o, {
          [p]: d
        }), Dr(i, c, `var(${p})`, u), Dr(s, c, `var(${p}, ${d})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Ma(e, t = {}) {
  const {
    getSelector: r = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: d
  } = Dt(l, t);
  let g = d;
  const v = {}, {
    [c]: y,
    ...f
  } = i;
  if (Object.entries(f || {}).forEach(([C, b]) => {
    const {
      vars: h,
      css: k,
      varsWithDefaults: T
    } = Dt(b, t);
    g = Q(g, T), v[C] = {
      css: k,
      vars: h
    };
  }), y) {
    const {
      css: C,
      vars: b,
      varsWithDefaults: h
    } = Dt(y, t);
    g = Q(g, h), v[c] = {
      css: C,
      vars: b
    };
  }
  function S(C, b) {
    var k, T;
    let h = o;
    if (o === "class" && (h = ".%s"), o === "data" && (h = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (h = `[${o}="%s"]`), C) {
      if (h === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((T = (k = i[C]) == null ? void 0 : k.palette) == null ? void 0 : T.mode) || C})`]: {
            ":root": b
          }
        };
      if (h)
        return e.defaultColorScheme === C ? `:root, ${h.replace("%s", String(C))}` : h.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let C = {
        ...u
      };
      return Object.entries(v).forEach(([, {
        vars: b
      }]) => {
        C = Q(C, b);
      }), C;
    },
    generateStyleSheets: () => {
      var M, D;
      const C = [], b = e.defaultColorScheme || "light";
      function h(a, x) {
        Object.keys(x).length && C.push(typeof a == "string" ? {
          [a]: {
            ...x
          }
        } : a);
      }
      h(r(void 0, {
        ...p
      }), p);
      const {
        [b]: k,
        ...T
      } = v;
      if (k) {
        const {
          css: a
        } = k, x = (D = (M = i[b]) == null ? void 0 : M.palette) == null ? void 0 : D.mode, R = !n && x ? {
          colorScheme: x,
          ...a
        } : {
          ...a
        };
        h(r(b, {
          ...R
        }), R);
      }
      return Object.entries(T).forEach(([a, {
        css: x
      }]) => {
        var F, K;
        const R = (K = (F = i[a]) == null ? void 0 : F.palette) == null ? void 0 : K.mode, E = !n && R ? {
          colorScheme: R,
          ...x
        } : {
          ...x
        };
        h(r(a, {
          ...E
        }), E);
      }), C;
    }
  };
}
function za(e) {
  return function(r) {
    return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function It(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (s += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (s += " " + r[u]));
    }
    n[o] = s;
  }
  return n;
}
const Na = Et(), Fa = va("div", {
  name: "MuiStack",
  slot: "Root"
});
function ja(e) {
  return xa({
    props: e,
    name: "MuiStack",
    defaultTheme: Na
  });
}
function La(e, t) {
  const r = $.Children.toArray(e).filter(Boolean);
  return r.reduce((n, o, i) => (n.push(o), i < r.length - 1 && n.push(/* @__PURE__ */ $.cloneElement(t, {
    key: `separator-${i}`
  })), n), []);
}
const Da = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Wa = ({
  ownerState: e,
  theme: t
}) => {
  let r = {
    display: "flex",
    flexDirection: "column",
    ...ce({
      theme: t
    }, jt({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (n) => ({
      flexDirection: n
    }))
  };
  if (e.spacing) {
    const n = wt(t), o = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), i = jt({
      values: e.direction,
      base: o
    }), s = jt({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, p) => {
      if (!i[l]) {
        const g = u > 0 ? i[p[u - 1]] : "column";
        i[l] = g;
      }
    }), r = Q(r, ce({
      theme: t
    }, s, (l, u) => e.useFlexGap ? {
      gap: we(n, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Da(u ? i[u] : e.direction)}`]: we(n, l)
      }
    }));
  }
  return r = hi(t.breakpoints, r), r;
};
function Va(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Fa,
    useThemeProps: r = ja,
    componentName: n = "MuiStack"
  } = e, o = () => It({
    root: ["root"]
  }, (l) => Ze(n, l), {}), i = t(Wa);
  return /* @__PURE__ */ $.forwardRef(function(l, u) {
    const p = r(l), d = ca(p), {
      component: g = "div",
      direction: v = "column",
      spacing: y = 0,
      divider: f,
      children: S,
      className: w,
      useFlexGap: P = !1,
      ...C
    } = d, b = {
      direction: v,
      spacing: y,
      useFlexGap: P
    }, h = o();
    return /* @__PURE__ */ j.jsx(i, {
      as: g,
      ownerState: b,
      ref: u,
      className: Z(h.root, w),
      ...C,
      children: f ? La(S, f) : S
    });
  });
}
const Ye = {
  black: "#000",
  white: "#fff"
}, Ga = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, $e = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ke = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Le = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Pe = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Te = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Re = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Tn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ye.white,
      default: Ye.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Ha = Tn();
function Rn() {
  return {
    text: {
      primary: Ye.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ye.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Wr = Rn();
function Vr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = dr(e.main, o) : t === "dark" && (e.dark = fr(e.main, i)));
}
function Ka(e = "light") {
  return e === "dark" ? {
    main: Pe[200],
    light: Pe[50],
    dark: Pe[400]
  } : {
    main: Pe[700],
    light: Pe[400],
    dark: Pe[800]
  };
}
function Ua(e = "light") {
  return e === "dark" ? {
    main: $e[200],
    light: $e[50],
    dark: $e[400]
  } : {
    main: $e[500],
    light: $e[300],
    dark: $e[700]
  };
}
function Ya(e = "light") {
  return e === "dark" ? {
    main: ke[500],
    light: ke[300],
    dark: ke[700]
  } : {
    main: ke[700],
    light: ke[400],
    dark: ke[800]
  };
}
function qa(e = "light") {
  return e === "dark" ? {
    main: Te[400],
    light: Te[300],
    dark: Te[700]
  } : {
    main: Te[700],
    light: Te[500],
    dark: Te[900]
  };
}
function Xa(e = "light") {
  return e === "dark" ? {
    main: Re[400],
    light: Re[300],
    dark: Re[700]
  } : {
    main: Re[800],
    light: Re[500],
    dark: Re[900]
  };
}
function Ja(e = "light") {
  return e === "dark" ? {
    main: Le[400],
    light: Le[300],
    dark: Le[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Le[500],
    dark: Le[900]
  };
}
function pr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Ka(t), s = e.secondary || Ua(t), c = e.error || Ya(t), l = e.info || qa(t), u = e.success || Xa(t), p = e.warning || Ja(t);
  function d(f) {
    return Pa(f, Wr.text.primary) >= r ? Wr.text.primary : Ha.text.primary;
  }
  const g = ({
    color: f,
    name: S,
    mainShade: w = 500,
    lightShade: P = 300,
    darkShade: C = 700
  }) => {
    if (f = {
      ...f
    }, !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(Ce(11, S ? ` (${S})` : "", w));
    if (typeof f.main != "string")
      throw new Error(Ce(12, S ? ` (${S})` : "", JSON.stringify(f.main)));
    return Vr(f, "light", P, n), Vr(f, "dark", C, n), f.contrastText || (f.contrastText = d(f.main)), f;
  };
  let v;
  return t === "light" ? v = Tn() : t === "dark" && (v = Rn()), Q({
    // A collection of common colors.
    common: {
      ...Ye
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Ga,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...v
  }, o);
}
function Qa(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Za(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function es(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gr = {
  textTransform: "uppercase"
}, Hr = '"Roboto", "Helvetica", "Arial", sans-serif';
function ts(e, t) {
  const {
    fontFamily: r = Hr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...d
  } = typeof t == "function" ? t(e) : t, g = n / 14, v = p || ((S) => `${S / l * g}rem`), y = (S, w, P, C, b) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: v(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Hr ? {
      letterSpacing: `${es(C / w)}em`
    } : {},
    ...b,
    ...u
  }), f = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, Gr),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Gr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Q({
    htmlFontSize: l,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...f
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const rs = 0.2, ns = 0.14, os = 0.12;
function L(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ns})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${os})`].join(",");
}
const is = ["none", L(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), L(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), L(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), L(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), L(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), L(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), L(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), L(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), L(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), L(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), L(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), L(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), L(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), L(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), L(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), L(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), L(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), L(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), L(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), L(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), L(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), L(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), L(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), L(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], as = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ss = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Kr(e) {
  return `${Math.round(e)}ms`;
}
function cs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ls(e) {
  const t = {
    ...as,
    ...e.easing
  }, r = {
    ...ss,
    ...e.duration
  };
  return {
    getAutoHeightDuration: cs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Kr(s)} ${c} ${typeof l == "string" ? l : Kr(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const us = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function fs(e) {
  return de(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function En(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !fs(c) || s.startsWith("unstable_") ? delete n[s] : de(c) && (n[s] = {
        ...c
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Ce(20));
  const p = pr(i), d = Et(e);
  let g = Q(d, {
    mixins: Za(d.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: is.slice(),
    typography: ts(p, c),
    transitions: ls(s),
    zIndex: {
      ...us
    }
  });
  return g = Q(g, u), g = t.reduce((v, y) => Q(v, y), g), g.unstable_sxConfig = {
    ...Qe,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(y) {
    return _e({
      sx: y,
      theme: this
    });
  }, g.toRuntimeSource = En, g;
}
function ds(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ps = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ds(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function An(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function On(e) {
  return e === "dark" ? ps : [];
}
function ms(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = pr(t);
  return {
    palette: i,
    opacity: {
      ...An(i.mode),
      ...r
    },
    overlays: n || On(i.mode),
    ...o
  };
}
function hs(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const gs = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ys = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return gs(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function bs(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function m(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function We(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Pn(e);
}
function me(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = De(We(e[t])));
}
function vs(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const le = (e) => {
  try {
    return e();
  } catch {
  }
}, Ss = (e = "mui") => Ia(e);
function Wt(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ms({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = qt({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...An(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || On(o)
  }, s;
}
function xs(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = hs,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, p = Object.keys(r)[0], d = n || (r.light && p !== "light" ? "light" : p), g = Ss(i), {
    [d]: v,
    light: y,
    dark: f,
    ...S
  } = r, w = {
    ...S
  };
  let P = v;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (P = !0), !P)
    throw new Error(Ce(21, d));
  const C = Wt(w, P, u, d);
  y && !w.light && Wt(w, y, void 0, "light"), f && !w.dark && Wt(w, f, void 0, "dark");
  let b = {
    defaultColorScheme: d,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: w,
    font: {
      ...Qa(C.typography),
      ...C.font
    },
    spacing: vs(u.spacing)
  };
  Object.keys(b.colorSchemes).forEach((D) => {
    const a = b.colorSchemes[D].palette, x = (R) => {
      const E = R.split("-"), F = E[1], K = E[2];
      return g(R, a[F][K]);
    };
    if (a.mode === "light" && (m(a.common, "background", "#fff"), m(a.common, "onBackground", "#000")), a.mode === "dark" && (m(a.common, "background", "#000"), m(a.common, "onBackground", "#fff")), bs(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      m(a.Alert, "errorColor", z(a.error.light, 0.6)), m(a.Alert, "infoColor", z(a.info.light, 0.6)), m(a.Alert, "successColor", z(a.success.light, 0.6)), m(a.Alert, "warningColor", z(a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", x("palette-error-main")), m(a.Alert, "infoFilledBg", x("palette-info-main")), m(a.Alert, "successFilledBg", x("palette-success-main")), m(a.Alert, "warningFilledBg", x("palette-warning-main")), m(a.Alert, "errorFilledColor", le(() => a.getContrastText(a.error.main))), m(a.Alert, "infoFilledColor", le(() => a.getContrastText(a.info.main))), m(a.Alert, "successFilledColor", le(() => a.getContrastText(a.success.main))), m(a.Alert, "warningFilledColor", le(() => a.getContrastText(a.warning.main))), m(a.Alert, "errorStandardBg", N(a.error.light, 0.9)), m(a.Alert, "infoStandardBg", N(a.info.light, 0.9)), m(a.Alert, "successStandardBg", N(a.success.light, 0.9)), m(a.Alert, "warningStandardBg", N(a.warning.light, 0.9)), m(a.Alert, "errorIconColor", x("palette-error-main")), m(a.Alert, "infoIconColor", x("palette-info-main")), m(a.Alert, "successIconColor", x("palette-success-main")), m(a.Alert, "warningIconColor", x("palette-warning-main")), m(a.AppBar, "defaultBg", x("palette-grey-100")), m(a.Avatar, "defaultBg", x("palette-grey-400")), m(a.Button, "inheritContainedBg", x("palette-grey-300")), m(a.Button, "inheritContainedHoverBg", x("palette-grey-A100")), m(a.Chip, "defaultBorder", x("palette-grey-400")), m(a.Chip, "defaultAvatarColor", x("palette-grey-700")), m(a.Chip, "defaultIconColor", x("palette-grey-700")), m(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), m(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), m(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), m(a.LinearProgress, "primaryBg", N(a.primary.main, 0.62)), m(a.LinearProgress, "secondaryBg", N(a.secondary.main, 0.62)), m(a.LinearProgress, "errorBg", N(a.error.main, 0.62)), m(a.LinearProgress, "infoBg", N(a.info.main, 0.62)), m(a.LinearProgress, "successBg", N(a.success.main, 0.62)), m(a.LinearProgress, "warningBg", N(a.warning.main, 0.62)), m(a.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.11)`), m(a.Slider, "primaryTrack", N(a.primary.main, 0.62)), m(a.Slider, "secondaryTrack", N(a.secondary.main, 0.62)), m(a.Slider, "errorTrack", N(a.error.main, 0.62)), m(a.Slider, "infoTrack", N(a.info.main, 0.62)), m(a.Slider, "successTrack", N(a.success.main, 0.62)), m(a.Slider, "warningTrack", N(a.warning.main, 0.62));
      const R = it(a.background.default, 0.8);
      m(a.SnackbarContent, "bg", R), m(a.SnackbarContent, "color", le(() => a.getContrastText(R))), m(a.SpeedDialAction, "fabHoverBg", it(a.background.paper, 0.15)), m(a.StepConnector, "border", x("palette-grey-400")), m(a.StepContent, "border", x("palette-grey-400")), m(a.Switch, "defaultColor", x("palette-common-white")), m(a.Switch, "defaultDisabledColor", x("palette-grey-100")), m(a.Switch, "primaryDisabledColor", N(a.primary.main, 0.62)), m(a.Switch, "secondaryDisabledColor", N(a.secondary.main, 0.62)), m(a.Switch, "errorDisabledColor", N(a.error.main, 0.62)), m(a.Switch, "infoDisabledColor", N(a.info.main, 0.62)), m(a.Switch, "successDisabledColor", N(a.success.main, 0.62)), m(a.Switch, "warningDisabledColor", N(a.warning.main, 0.62)), m(a.TableCell, "border", N(ot(a.divider, 1), 0.88)), m(a.Tooltip, "bg", ot(a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      m(a.Alert, "errorColor", N(a.error.light, 0.6)), m(a.Alert, "infoColor", N(a.info.light, 0.6)), m(a.Alert, "successColor", N(a.success.light, 0.6)), m(a.Alert, "warningColor", N(a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", x("palette-error-dark")), m(a.Alert, "infoFilledBg", x("palette-info-dark")), m(a.Alert, "successFilledBg", x("palette-success-dark")), m(a.Alert, "warningFilledBg", x("palette-warning-dark")), m(a.Alert, "errorFilledColor", le(() => a.getContrastText(a.error.dark))), m(a.Alert, "infoFilledColor", le(() => a.getContrastText(a.info.dark))), m(a.Alert, "successFilledColor", le(() => a.getContrastText(a.success.dark))), m(a.Alert, "warningFilledColor", le(() => a.getContrastText(a.warning.dark))), m(a.Alert, "errorStandardBg", z(a.error.light, 0.9)), m(a.Alert, "infoStandardBg", z(a.info.light, 0.9)), m(a.Alert, "successStandardBg", z(a.success.light, 0.9)), m(a.Alert, "warningStandardBg", z(a.warning.light, 0.9)), m(a.Alert, "errorIconColor", x("palette-error-main")), m(a.Alert, "infoIconColor", x("palette-info-main")), m(a.Alert, "successIconColor", x("palette-success-main")), m(a.Alert, "warningIconColor", x("palette-warning-main")), m(a.AppBar, "defaultBg", x("palette-grey-900")), m(a.AppBar, "darkBg", x("palette-background-paper")), m(a.AppBar, "darkColor", x("palette-text-primary")), m(a.Avatar, "defaultBg", x("palette-grey-600")), m(a.Button, "inheritContainedBg", x("palette-grey-800")), m(a.Button, "inheritContainedHoverBg", x("palette-grey-700")), m(a.Chip, "defaultBorder", x("palette-grey-700")), m(a.Chip, "defaultAvatarColor", x("palette-grey-300")), m(a.Chip, "defaultIconColor", x("palette-grey-300")), m(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), m(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), m(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), m(a.LinearProgress, "primaryBg", z(a.primary.main, 0.5)), m(a.LinearProgress, "secondaryBg", z(a.secondary.main, 0.5)), m(a.LinearProgress, "errorBg", z(a.error.main, 0.5)), m(a.LinearProgress, "infoBg", z(a.info.main, 0.5)), m(a.LinearProgress, "successBg", z(a.success.main, 0.5)), m(a.LinearProgress, "warningBg", z(a.warning.main, 0.5)), m(a.Skeleton, "bg", `rgba(${x("palette-text-primaryChannel")} / 0.13)`), m(a.Slider, "primaryTrack", z(a.primary.main, 0.5)), m(a.Slider, "secondaryTrack", z(a.secondary.main, 0.5)), m(a.Slider, "errorTrack", z(a.error.main, 0.5)), m(a.Slider, "infoTrack", z(a.info.main, 0.5)), m(a.Slider, "successTrack", z(a.success.main, 0.5)), m(a.Slider, "warningTrack", z(a.warning.main, 0.5));
      const R = it(a.background.default, 0.98);
      m(a.SnackbarContent, "bg", R), m(a.SnackbarContent, "color", le(() => a.getContrastText(R))), m(a.SpeedDialAction, "fabHoverBg", it(a.background.paper, 0.15)), m(a.StepConnector, "border", x("palette-grey-600")), m(a.StepContent, "border", x("palette-grey-600")), m(a.Switch, "defaultColor", x("palette-grey-300")), m(a.Switch, "defaultDisabledColor", x("palette-grey-600")), m(a.Switch, "primaryDisabledColor", z(a.primary.main, 0.55)), m(a.Switch, "secondaryDisabledColor", z(a.secondary.main, 0.55)), m(a.Switch, "errorDisabledColor", z(a.error.main, 0.55)), m(a.Switch, "infoDisabledColor", z(a.info.main, 0.55)), m(a.Switch, "successDisabledColor", z(a.success.main, 0.55)), m(a.Switch, "warningDisabledColor", z(a.warning.main, 0.55)), m(a.TableCell, "border", z(ot(a.divider, 1), 0.68)), m(a.Tooltip, "bg", ot(a.grey[700], 0.92));
    }
    me(a.background, "default"), me(a.background, "paper"), me(a.common, "background"), me(a.common, "onBackground"), me(a, "divider"), Object.keys(a).forEach((R) => {
      const E = a[R];
      R !== "tonalOffset" && E && typeof E == "object" && (E.main && m(a[R], "mainChannel", De(We(E.main))), E.light && m(a[R], "lightChannel", De(We(E.light))), E.dark && m(a[R], "darkChannel", De(We(E.dark))), E.contrastText && m(a[R], "contrastTextChannel", De(We(E.contrastText))), R === "text" && (me(a[R], "primary"), me(a[R], "secondary")), R === "action" && (E.active && me(a[R], "active"), E.selected && me(a[R], "selected")));
    });
  }), b = t.reduce((D, a) => Q(D, a), b);
  const h = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: ys(b)
  }, {
    vars: k,
    generateThemeVars: T,
    generateStyleSheets: M
  } = Ma(b, h);
  return b.vars = k, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([D, a]) => {
    b[D] = a;
  }), b.generateThemeVars = T, b.generateStyleSheets = M, b.generateSpacing = function() {
    return xn(u.spacing, wt(this));
  }, b.getColorSchemeSelector = za(c), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = s, b.unstable_sxConfig = {
    ...Qe,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(a) {
    return _e({
      sx: a,
      theme: this
    });
  }, b.toRuntimeSource = En, b;
}
function Ur(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: pr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Cs(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, c = i || "light", l = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return qt(e, ...t);
    let p = r;
    "palette" in e || u[c] && (u[c] !== !0 ? p = u[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const d = qt({
      ...e,
      palette: p
    }, ...t);
    return d.defaultColorScheme = c, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Ur(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Ur(d, "light", u.light)), d;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), xs({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ws = Cs(), $s = "$$material";
function ks(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const In = (e) => ks(e) && e !== "classes", ae = kn({
  themeId: $s,
  defaultTheme: ws,
  rootShouldForwardProp: In
});
function et(e) {
  return Aa(e);
}
const Ps = Va({
  createStyledComponent: ae("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => et({
    props: e,
    name: "MuiStack"
  })
}), mr = Oa;
let Yr = 0;
function Ts(e) {
  const [t, r] = $.useState(e), n = e || t;
  return $.useEffect(() => {
    t == null && (Yr += 1, r(`mui-${Yr}`));
  }, [t]), n;
}
const Rs = {
  ...$
}, qr = Rs.useId;
function Es(e) {
  if (qr !== void 0) {
    const t = qr();
    return e ?? t;
  }
  return Ts(e);
}
function dt(e) {
  const t = $.useRef(e);
  return Ca(() => {
    t.current = e;
  }), $.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Xr(...e) {
  const t = $.useRef(void 0), r = $.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, c = s(n);
        return typeof c == "function" ? c : () => {
          s(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return $.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
function Jr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
const Qr = {};
function Bn(e, t) {
  const r = $.useRef(Qr);
  return r.current === Qr && (r.current = e(t)), r;
}
class gt {
  constructor() {
    Ne(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new gt();
  }
  static use() {
    const t = Bn(gt.create).current, [r, n] = $.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, $.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Os(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function As() {
  return gt.use();
}
function Os() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Is(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Xt(e, t) {
  return Xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Xt(e, t);
}
function Bs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xt(e, t);
}
const Zr = Ae.createContext(null);
function _s(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hr(e, t) {
  var r = function(i) {
    return t && at(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ro.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Ms(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var u = n[l][s];
        c[n[l][s]] = r(u);
      }
    c[l] = r(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = r(o[s]);
  return c;
}
function xe(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function zs(e, t) {
  return hr(e.children, function(r) {
    return st(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: xe(r, "appear", e),
      enter: xe(r, "enter", e),
      exit: xe(r, "exit", e)
    });
  });
}
function Ns(e, t, r) {
  var n = hr(e.children), o = Ms(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (at(s)) {
      var c = i in t, l = i in n, u = t[i], p = at(u) && !u.props.in;
      l && (!c || p) ? o[i] = st(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: xe(s, "exit", e),
        enter: xe(s, "enter", e)
      }) : !l && c && !p ? o[i] = st(s, {
        in: !1
      }) : l && c && at(u) && (o[i] = st(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: xe(s, "exit", e),
        enter: xe(s, "enter", e)
      }));
    }
  }), o;
}
var Fs = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, js = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gr = /* @__PURE__ */ function(e) {
  Bs(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(_s(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? zs(o, c) : Ns(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = hr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = pt({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = Is(o, ["component", "childFactory"]), l = this.state.contextValue, u = Fs(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Ae.createElement(Zr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Ae.createElement(Zr.Provider, {
      value: l
    }, /* @__PURE__ */ Ae.createElement(i, c, u));
  }, t;
}(Ae.Component);
gr.propTypes = {};
gr.defaultProps = js;
const Ls = [];
function Ds(e) {
  $.useEffect(e, Ls);
}
class yr {
  constructor() {
    Ne(this, "currentId", null);
    Ne(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ne(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Ws() {
  const e = Bn(yr.create).current;
  return Ds(e.disposeEffect), e;
}
function Vs(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: u
  } = e, [p, d] = $.useState(!1), g = Z(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, y = Z(r.child, p && r.childLeaving, n && r.childPulsate);
  return !c && !p && d(!0), $.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ j.jsx("span", {
    className: g,
    style: v,
    children: /* @__PURE__ */ j.jsx("span", {
      className: y
    })
  });
}
const ne = At("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Jt = 550, Gs = 80, Hs = Xe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ks = Xe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Us = Xe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ys = ae("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), qs = ae(Vs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ne.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Hs};
    animation-duration: ${Jt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ne.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ne.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ne.childLeaving} {
    opacity: 0;
    animation-name: ${Ks};
    animation-duration: ${Jt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ne.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Us};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Xs = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = n, [l, u] = $.useState([]), p = $.useRef(0), d = $.useRef(null);
  $.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const g = $.useRef(!1), v = Ws(), y = $.useRef(null), f = $.useRef(null), S = $.useCallback((b) => {
    const {
      pulsate: h,
      rippleX: k,
      rippleY: T,
      rippleSize: M,
      cb: D
    } = b;
    u((a) => [...a, /* @__PURE__ */ j.jsx(qs, {
      classes: {
        ripple: Z(i.ripple, ne.ripple),
        rippleVisible: Z(i.rippleVisible, ne.rippleVisible),
        ripplePulsate: Z(i.ripplePulsate, ne.ripplePulsate),
        child: Z(i.child, ne.child),
        childLeaving: Z(i.childLeaving, ne.childLeaving),
        childPulsate: Z(i.childPulsate, ne.childPulsate)
      },
      timeout: Jt,
      pulsate: h,
      rippleX: k,
      rippleY: T,
      rippleSize: M
    }, p.current)]), p.current += 1, d.current = D;
  }, [i]), w = $.useCallback((b = {}, h = {}, k = () => {
  }) => {
    const {
      pulsate: T = !1,
      center: M = o || h.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = h;
    if ((b == null ? void 0 : b.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (g.current = !0);
    const a = D ? null : f.current, x = a ? a.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let R, E, F;
    if (M || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      R = Math.round(x.width / 2), E = Math.round(x.height / 2);
    else {
      const {
        clientX: K,
        clientY: J
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      R = Math.round(K - x.left), E = Math.round(J - x.top);
    }
    if (M)
      F = Math.sqrt((2 * x.width ** 2 + x.height ** 2) / 3), F % 2 === 0 && (F += 1);
    else {
      const K = Math.max(Math.abs((a ? a.clientWidth : 0) - R), R) * 2 + 2, J = Math.max(Math.abs((a ? a.clientHeight : 0) - E), E) * 2 + 2;
      F = Math.sqrt(K ** 2 + J ** 2);
    }
    b != null && b.touches ? y.current === null && (y.current = () => {
      S({
        pulsate: T,
        rippleX: R,
        rippleY: E,
        rippleSize: F,
        cb: k
      });
    }, v.start(Gs, () => {
      y.current && (y.current(), y.current = null);
    })) : S({
      pulsate: T,
      rippleX: R,
      rippleY: E,
      rippleSize: F,
      cb: k
    });
  }, [o, S, v]), P = $.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), C = $.useCallback((b, h) => {
    if (v.clear(), (b == null ? void 0 : b.type) === "touchend" && y.current) {
      y.current(), y.current = null, v.start(0, () => {
        C(b, h);
      });
      return;
    }
    y.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = h;
  }, [v]);
  return $.useImperativeHandle(r, () => ({
    pulsate: P,
    start: w,
    stop: C
  }), [P, w, C]), /* @__PURE__ */ j.jsx(Ys, {
    className: Z(ne.root, i.root, s),
    ref: f,
    ...c,
    children: /* @__PURE__ */ j.jsx(gr, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
function Js(e) {
  return Ze("MuiButtonBase", e);
}
const Qs = At("MuiButtonBase", ["root", "disabled", "focusVisible"]), Zs = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = It({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Js, o);
  return r && n && (s.root += ` ${n}`), s;
}, ec = ae("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Qs.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), tc = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: p = !1,
    disableTouchRipple: d = !1,
    focusRipple: g = !1,
    focusVisibleClassName: v,
    LinkComponent: y = "a",
    onBlur: f,
    onClick: S,
    onContextMenu: w,
    onDragLeave: P,
    onFocus: C,
    onFocusVisible: b,
    onKeyDown: h,
    onKeyUp: k,
    onMouseDown: T,
    onMouseLeave: M,
    onMouseUp: D,
    onTouchEnd: a,
    onTouchMove: x,
    onTouchStart: R,
    tabIndex: E = 0,
    TouchRippleProps: F,
    touchRippleRef: K,
    type: J,
    ...se
  } = n, ge = $.useRef(null), Y = As(), zn = Xr(Y.ref, K), [ve, tt] = $.useState(!1);
  u && ve && tt(!1), $.useImperativeHandle(o, () => ({
    focusVisible: () => {
      tt(!0), ge.current.focus();
    }
  }), []);
  const Nn = Y.shouldMount && !p && !u;
  $.useEffect(() => {
    ve && g && !p && Y.pulsate();
  }, [p, g, ve, Y]);
  const Fn = he(Y, "start", T, d), jn = he(Y, "stop", w, d), Ln = he(Y, "stop", P, d), Dn = he(Y, "stop", D, d), Wn = he(Y, "stop", (A) => {
    ve && A.preventDefault(), M && M(A);
  }, d), Vn = he(Y, "start", R, d), Gn = he(Y, "stop", a, d), Hn = he(Y, "stop", x, d), Kn = he(Y, "stop", (A) => {
    Jr(A.target) || tt(!1), f && f(A);
  }, !1), Un = dt((A) => {
    ge.current || (ge.current = A.currentTarget), Jr(A.target) && (tt(!0), b && b(A)), C && C(A);
  }), Bt = () => {
    const A = ge.current;
    return l && l !== "button" && !(A.tagName === "A" && A.href);
  }, Yn = dt((A) => {
    g && !A.repeat && ve && A.key === " " && Y.stop(A, () => {
      Y.start(A);
    }), A.target === A.currentTarget && Bt() && A.key === " " && A.preventDefault(), h && h(A), A.target === A.currentTarget && Bt() && A.key === "Enter" && !u && (A.preventDefault(), S && S(A));
  }), qn = dt((A) => {
    g && A.key === " " && ve && !A.defaultPrevented && Y.stop(A, () => {
      Y.pulsate(A);
    }), k && k(A), S && A.target === A.currentTarget && Bt() && A.key === " " && !A.defaultPrevented && S(A);
  });
  let rt = l;
  rt === "button" && (se.href || se.to) && (rt = y);
  const ze = {};
  rt === "button" ? (ze.type = J === void 0 ? "button" : J, ze.disabled = u) : (!se.href && !se.to && (ze.role = "button"), u && (ze["aria-disabled"] = u));
  const Xn = Xr(r, ge), br = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: d,
    focusRipple: g,
    tabIndex: E,
    focusVisible: ve
  }, Jn = Zs(br);
  return /* @__PURE__ */ j.jsxs(ec, {
    as: rt,
    className: Z(Jn.root, c),
    ownerState: br,
    onBlur: Kn,
    onClick: S,
    onContextMenu: jn,
    onFocus: Un,
    onKeyDown: Yn,
    onKeyUp: qn,
    onMouseDown: Fn,
    onMouseLeave: Wn,
    onMouseUp: Dn,
    onDragLeave: Ln,
    onTouchEnd: Gn,
    onTouchMove: Hn,
    onTouchStart: Vn,
    ref: Xn,
    tabIndex: u ? -1 : E,
    type: J,
    ...ze,
    ...se,
    children: [s, Nn ? /* @__PURE__ */ j.jsx(Xs, {
      ref: zn,
      center: i,
      ...F
    }) : null]
  });
});
function he(e, t, r, n = !1) {
  return dt((o) => (r && r(o), n || e[t](o), !0));
}
function rc(e) {
  return typeof e.main == "string";
}
function nc(e, t = []) {
  if (!rc(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function _n(e = []) {
  return ([, t]) => t && nc(t, e);
}
function oc(e) {
  return Ze("MuiCircularProgress", e);
}
At("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const ye = 44, Qt = Xe`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Zt = Xe`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, ic = typeof Qt != "string" ? ar`
        animation: ${Qt} 1.4s linear infinite;
      ` : null, ac = typeof Zt != "string" ? ar`
        animation: ${Zt} 1.4s ease-in-out infinite;
      ` : null, sc = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${U(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${U(r)}`, o && "circleDisableShrink"]
  };
  return It(i, oc, t);
}, cc = ae("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${U(r.color)}`]];
  }
})(mr(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: ic || {
      animation: `${Qt} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(_n()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), lc = ae("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), uc = ae("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${U(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(mr(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: ac || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Zt} 1.4s ease-in-out infinite`
    }
  }]
}))), fc = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const n = et({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: p = 0,
    variant: d = "indeterminate",
    ...g
  } = n, v = {
    ...n,
    color: i,
    disableShrink: s,
    size: c,
    thickness: u,
    value: p,
    variant: d
  }, y = sc(v), f = {}, S = {}, w = {};
  if (d === "determinate") {
    const P = 2 * Math.PI * ((ye - u) / 2);
    f.strokeDasharray = P.toFixed(3), w["aria-valuenow"] = Math.round(p), f.strokeDashoffset = `${((100 - p) / 100 * P).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ j.jsx(cc, {
    className: Z(y.root, o),
    style: {
      width: c,
      height: c,
      ...S,
      ...l
    },
    ownerState: v,
    ref: r,
    role: "progressbar",
    ...w,
    ...g,
    children: /* @__PURE__ */ j.jsx(lc, {
      className: y.svg,
      ownerState: v,
      viewBox: `${ye / 2} ${ye / 2} ${ye} ${ye}`,
      children: /* @__PURE__ */ j.jsx(uc, {
        className: y.circle,
        style: f,
        ownerState: v,
        cx: ye,
        cy: ye,
        r: (ye - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
function dc(e) {
  return Ze("MuiButton", e);
}
const Se = At("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), pc = /* @__PURE__ */ $.createContext({}), mc = /* @__PURE__ */ $.createContext(void 0), hc = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: c,
    classes: l
  } = e, u = {
    root: ["root", s && "loading", i, `${i}${U(t)}`, `size${U(o)}`, `${i}Size${U(o)}`, `color${U(t)}`, r && "disableElevation", n && "fullWidth", s && `loadingPosition${U(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${U(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${U(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = It(u, dc, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Mn = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], gc = ae(tc, {
  shouldForwardProp: (e) => In(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${U(r.color)}`], t[`size${U(r.size)}`], t[`${r.variant}Size${U(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(mr(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Se.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Se.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Se.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Se.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(_n()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Ee(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ee(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ee(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ee(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ee(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Se.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Se.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Se.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), yc = ae("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${U(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Mn]
})), bc = ae("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${U(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Mn]
})), vc = ae("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), en = ae("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Vt = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const n = $.useContext(pc), o = $.useContext(mc), i = Ue(n, t), s = et({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: p,
    disabled: d = !1,
    disableElevation: g = !1,
    disableFocusRipple: v = !1,
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: S = !1,
    id: w,
    loading: P = null,
    loadingIndicator: C,
    loadingPosition: b = "center",
    size: h = "medium",
    startIcon: k,
    type: T,
    variant: M = "text",
    ...D
  } = s, a = Es(w), x = C ?? /* @__PURE__ */ j.jsx(fc, {
    "aria-labelledby": a,
    color: "inherit",
    size: 16
  }), R = {
    ...s,
    color: l,
    component: u,
    disabled: d,
    disableElevation: g,
    disableFocusRipple: v,
    fullWidth: S,
    loading: P,
    loadingIndicator: x,
    loadingPosition: b,
    size: h,
    type: T,
    variant: M
  }, E = hc(R), F = (k || P && b === "start") && /* @__PURE__ */ j.jsx(yc, {
    className: E.startIcon,
    ownerState: R,
    children: k || /* @__PURE__ */ j.jsx(en, {
      className: E.loadingIconPlaceholder,
      ownerState: R
    })
  }), K = (y || P && b === "end") && /* @__PURE__ */ j.jsx(bc, {
    className: E.endIcon,
    ownerState: R,
    children: y || /* @__PURE__ */ j.jsx(en, {
      className: E.loadingIconPlaceholder,
      ownerState: R
    })
  }), J = o || "", se = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: E.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ j.jsx(vc, {
        className: E.loadingIndicator,
        ownerState: R,
        children: x
      })
    })
  ) : null;
  return /* @__PURE__ */ j.jsxs(gc, {
    ownerState: R,
    className: Z(n.className, E.root, p, J),
    component: u,
    disabled: d || P,
    focusRipple: !v,
    focusVisibleClassName: Z(E.focusVisible, f),
    ref: r,
    type: T,
    id: P ? a : w,
    ...D,
    classes: E,
    children: [F, b !== "end" && se, c, b === "end" && se, K]
  });
});
function Cc() {
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx("h1", { children: "Hello World from the Library thisal!" }),
    /* @__PURE__ */ j.jsxs(Ps, { spacing: 2, direction: "column", children: [
      /* @__PURE__ */ j.jsx(Vt, { variant: "text", children: "Text" }),
      /* @__PURE__ */ j.jsx(Vt, { variant: "contained", children: "Contained" }),
      /* @__PURE__ */ j.jsx(Vt, { variant: "outlined", children: "Outlined" })
    ] })
  ] });
}
export {
  Cc as HelloWorld,
  Cc as default
};
