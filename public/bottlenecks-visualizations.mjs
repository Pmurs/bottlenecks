function Jt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), i = e.split(",");
  for (let o = 0; o < i.length; o++)
    n[i[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const he = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Fn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Be = () => {
}, ol = () => !1, Ed = /^on[^a-z]/, Ii = (e) => Ed.test(e), wo = (e) => e.startsWith("onUpdate:"), me = Object.assign, Ss = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kd = Object.prototype.hasOwnProperty, ie = (e, t) => kd.call(e, t), Q = Array.isArray, un = (e) => Ho(e) === "[object Map]", rl = (e) => Ho(e) === "[object Set]", K = (e) => typeof e == "function", we = (e) => typeof e == "string", _s = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", Ps = (e) => ue(e) && K(e.then) && K(e.catch), sl = Object.prototype.toString, Ho = (e) => sl.call(e), Es = (e) => Ho(e).slice(8, -1), al = (e) => Ho(e) === "[object Object]", ks = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, io = /* @__PURE__ */ Jt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nd = /* @__PURE__ */ Jt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Lo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Dd = /-(\w)/g, Ue = Lo((e) => e.replace(Dd, (t, n) => n ? n.toUpperCase() : "")), Cd = /\B([A-Z])/g, je = Lo(
  (e) => e.replace(Cd, "-$1").toLowerCase()
), vn = Lo(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Rt = Lo(
  (e) => e ? `on${vn(e)}` : ""
), vi = (e, t) => !Object.is(e, t), An = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, xo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Tr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Br = (e) => {
  const t = we(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fa;
const So = () => fa || (fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jo(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], o = we(i) ? Bd(i) : jo(i);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else {
    if (we(e))
      return e;
    if (ue(e))
      return e;
  }
}
const Ad = /;(?![^(]*\))/g, Od = /:([^]+)/, Td = /\/\*[^]*?\*\//g;
function Bd(e) {
  const t = {};
  return e.replace(Td, "").split(Ad).forEach((n) => {
    if (n) {
      const i = n.split(Od);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const i = mt(e[n]);
      i && (t += i + " ");
    }
  else if (ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function tt(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !we(t) && (e.class = mt(t)), n && (e.style = jo(n)), e;
}
const Md = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Id = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Fd = /* @__PURE__ */ Jt(Md), $d = /* @__PURE__ */ Jt(Id), Xd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vd = /* @__PURE__ */ Jt(Xd);
function cl(e) {
  return !!e || e === "";
}
const Ht = (e) => we(e) ? e : e == null ? "" : Q(e) || ue(e) && (e.toString === sl || !K(e.toString)) ? JSON.stringify(e, ll, 2) : String(e), ll = (e, t) => t && t.__v_isRef ? ll(e, t.value) : un(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [i, o]) => (n[`${i} =>`] = o, n), {})
} : rl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ue(t) && !Q(t) && !al(t) ? String(t) : t;
function _o(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let qe;
class ul {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = qe, !t && qe && (this.index = (qe.scopes || (qe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = qe;
      try {
        return qe = this, t();
      } finally {
        qe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && _o("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    qe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    qe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function dl(e) {
  return new ul(e);
}
function Rd(e, t = qe) {
  t && t.active && t.effects.push(e);
}
function Ns() {
  return qe;
}
function pl(e) {
  qe ? qe.cleanups.push(e) : process.env.NODE_ENV !== "production" && _o(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
const yi = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, fl = (e) => (e.w & Kt) > 0, hl = (e) => (e.n & Kt) > 0, Hd = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Kt;
}, Ld = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      fl(o) && !hl(o) ? o.delete(e) : t[n++] = o, o.w &= ~Kt, o.n &= ~Kt;
    }
    t.length = n;
  }
}, Po = /* @__PURE__ */ new WeakMap();
let ti = 0, Kt = 1;
const Mr = 30;
let Ve;
const dn = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ir = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ds {
  constructor(t, n = null, i) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Rd(this, i);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ve, n = Ut;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ve, Ve = this, Ut = !0, Kt = 1 << ++ti, ti <= Mr ? Hd(this) : ha(this), this.fn();
    } finally {
      ti <= Mr && Ld(this), Kt = 1 << --ti, Ve = this.parent, Ut = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ve === this ? this.deferStop = !0 : this.active && (ha(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ha(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ut = !0;
const gl = [];
function xn() {
  gl.push(Ut), Ut = !1;
}
function Sn() {
  const e = gl.pop();
  Ut = e === void 0 ? !0 : e;
}
function Me(e, t, n) {
  if (Ut && Ve) {
    let i = Po.get(e);
    i || Po.set(e, i = /* @__PURE__ */ new Map());
    let o = i.get(n);
    o || i.set(n, o = yi());
    const r = process.env.NODE_ENV !== "production" ? { effect: Ve, target: e, type: t, key: n } : void 0;
    Fr(o, r);
  }
}
function Fr(e, t) {
  let n = !1;
  ti <= Mr ? hl(e) || (e.n |= Kt, n = !fl(e)) : n = !e.has(Ve), n && (e.add(Ve), Ve.deps.push(e), process.env.NODE_ENV !== "production" && Ve.onTrack && Ve.onTrack(
    me(
      {
        effect: Ve
      },
      t
    )
  ));
}
function xt(e, t, n, i, o, r) {
  const s = Po.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (n === "length" && Q(e)) {
    const l = Number(i);
    s.forEach((u, d) => {
      (d === "length" || d >= l) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(s.get(n)), t) {
      case "add":
        Q(e) ? ks(n) && a.push(s.get("length")) : (a.push(s.get(dn)), un(e) && a.push(s.get(Ir)));
        break;
      case "delete":
        Q(e) || (a.push(s.get(dn)), un(e) && a.push(s.get(Ir)));
        break;
      case "set":
        un(e) && a.push(s.get(dn));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: i, oldValue: o, oldTarget: r } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? Bn(a[0], c) : Bn(a[0]));
  else {
    const l = [];
    for (const u of a)
      u && l.push(...u);
    process.env.NODE_ENV !== "production" ? Bn(yi(l), c) : Bn(yi(l));
  }
}
function Bn(e, t) {
  const n = Q(e) ? e : [...e];
  for (const i of n)
    i.computed && ga(i, t);
  for (const i of n)
    i.computed || ga(i, t);
}
function ga(e, t) {
  (e !== Ve || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(me({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function jd(e, t) {
  var n;
  return (n = Po.get(e)) == null ? void 0 : n.get(t);
}
const zd = /* @__PURE__ */ Jt("__proto__,__v_isRef,__isVue"), ml = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_s)
), Qd = /* @__PURE__ */ zo(), qd = /* @__PURE__ */ zo(!1, !0), Ud = /* @__PURE__ */ zo(!0), Wd = /* @__PURE__ */ zo(!0, !0), ma = /* @__PURE__ */ Kd();
function Kd() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = G(this);
      for (let r = 0, s = this.length; r < s; r++)
        Me(i, "get", r + "");
      const o = i[t](...n);
      return o === -1 || o === !1 ? i[t](...n.map(G)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      xn();
      const i = G(this)[t].apply(this, n);
      return Sn(), i;
    };
  }), e;
}
function Gd(e) {
  const t = G(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
function zo(e = !1, t = !1) {
  return function(i, o, r) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && r === (e ? t ? Pl : _l : t ? Sl : xl).get(i))
      return i;
    const s = Q(i);
    if (!e) {
      if (s && ie(ma, o))
        return Reflect.get(ma, o, r);
      if (o === "hasOwnProperty")
        return Gd;
    }
    const a = Reflect.get(i, o, r);
    return (_s(o) ? ml.has(o) : zd(o)) || (e || Me(i, "get", o), t) ? a : ye(a) ? s && ks(o) ? a : a.value : ue(a) ? e ? As(a) : qn(a) : a;
  };
}
const Yd = /* @__PURE__ */ vl(), Jd = /* @__PURE__ */ vl(!0);
function vl(e = !1) {
  return function(n, i, o, r) {
    let s = n[i];
    if (Gt(s) && ye(s) && !ye(o))
      return !1;
    if (!e && (!Eo(o) && !Gt(o) && (s = G(s), o = G(o)), !Q(n) && ye(s) && !ye(o)))
      return s.value = o, !0;
    const a = Q(n) && ks(i) ? Number(i) < n.length : ie(n, i), c = Reflect.set(n, i, o, r);
    return n === G(r) && (a ? vi(o, s) && xt(n, "set", i, o, s) : xt(n, "add", i, o)), c;
  };
}
function Zd(e, t) {
  const n = ie(e, t), i = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && xt(e, "delete", t, void 0, i), o;
}
function ep(e, t) {
  const n = Reflect.has(e, t);
  return (!_s(t) || !ml.has(t)) && Me(e, "has", t), n;
}
function tp(e) {
  return Me(e, "iterate", Q(e) ? "length" : dn), Reflect.ownKeys(e);
}
const yl = {
  get: Qd,
  set: Yd,
  deleteProperty: Zd,
  has: ep,
  ownKeys: tp
}, bl = {
  get: Ud,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && _o(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && _o(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, np = /* @__PURE__ */ me(
  {},
  yl,
  {
    get: qd,
    set: Jd
  }
), ip = /* @__PURE__ */ me(
  {},
  bl,
  {
    get: Wd
  }
), Cs = (e) => e, Qo = (e) => Reflect.getPrototypeOf(e);
function ji(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const o = G(e), r = G(t);
  n || (t !== r && Me(o, "get", t), Me(o, "get", r));
  const { has: s } = Qo(o), a = i ? Cs : n ? Os : bi;
  if (s.call(o, t))
    return a(e.get(t));
  if (s.call(o, r))
    return a(e.get(r));
  e !== o && e.get(t);
}
function zi(e, t = !1) {
  const n = this.__v_raw, i = G(n), o = G(e);
  return t || (e !== o && Me(i, "has", e), Me(i, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Qi(e, t = !1) {
  return e = e.__v_raw, !t && Me(G(e), "iterate", dn), Reflect.get(e, "size", e);
}
function va(e) {
  e = G(e);
  const t = G(this);
  return Qo(t).has.call(t, e) || (t.add(e), xt(t, "add", e, e)), this;
}
function ya(e, t) {
  t = G(t);
  const n = G(this), { has: i, get: o } = Qo(n);
  let r = i.call(n, e);
  r ? process.env.NODE_ENV !== "production" && wl(n, i, e) : (e = G(e), r = i.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), r ? vi(t, s) && xt(n, "set", e, t, s) : xt(n, "add", e, t), this;
}
function ba(e) {
  const t = G(this), { has: n, get: i } = Qo(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && wl(t, n, e) : (e = G(e), o = n.call(t, e));
  const r = i ? i.call(t, e) : void 0, s = t.delete(e);
  return o && xt(t, "delete", e, void 0, r), s;
}
function wa() {
  const e = G(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? un(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && xt(e, "clear", void 0, void 0, n), i;
}
function qi(e, t) {
  return function(i, o) {
    const r = this, s = r.__v_raw, a = G(s), c = t ? Cs : e ? Os : bi;
    return !e && Me(a, "iterate", dn), s.forEach((l, u) => i.call(o, c(l), c(u), r));
  };
}
function Ui(e, t, n) {
  return function(...i) {
    const o = this.__v_raw, r = G(o), s = un(r), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, l = o[e](...i), u = n ? Cs : t ? Os : bi;
    return !t && Me(
      r,
      "iterate",
      c ? Ir : dn
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = l.next();
        return p ? { value: d, done: p } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ft(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${vn(e)} operation ${n}failed: target is readonly.`,
        G(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function op() {
  const e = {
    get(r) {
      return ji(this, r);
    },
    get size() {
      return Qi(this);
    },
    has: zi,
    add: va,
    set: ya,
    delete: ba,
    clear: wa,
    forEach: qi(!1, !1)
  }, t = {
    get(r) {
      return ji(this, r, !1, !0);
    },
    get size() {
      return Qi(this);
    },
    has: zi,
    add: va,
    set: ya,
    delete: ba,
    clear: wa,
    forEach: qi(!1, !0)
  }, n = {
    get(r) {
      return ji(this, r, !0);
    },
    get size() {
      return Qi(this, !0);
    },
    has(r) {
      return zi.call(this, r, !0);
    },
    add: Ft("add"),
    set: Ft("set"),
    delete: Ft("delete"),
    clear: Ft("clear"),
    forEach: qi(!0, !1)
  }, i = {
    get(r) {
      return ji(this, r, !0, !0);
    },
    get size() {
      return Qi(this, !0);
    },
    has(r) {
      return zi.call(this, r, !0);
    },
    add: Ft("add"),
    set: Ft("set"),
    delete: Ft("delete"),
    clear: Ft("clear"),
    forEach: qi(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ui(
      r,
      !1,
      !1
    ), n[r] = Ui(
      r,
      !0,
      !1
    ), t[r] = Ui(
      r,
      !1,
      !0
    ), i[r] = Ui(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  rp,
  sp,
  ap,
  cp
] = /* @__PURE__ */ op();
function qo(e, t) {
  const n = t ? e ? cp : ap : e ? sp : rp;
  return (i, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? i : Reflect.get(
    ie(n, o) && o in i ? n : i,
    o,
    r
  );
}
const lp = {
  get: /* @__PURE__ */ qo(!1, !1)
}, up = {
  get: /* @__PURE__ */ qo(!1, !0)
}, dp = {
  get: /* @__PURE__ */ qo(!0, !1)
}, pp = {
  get: /* @__PURE__ */ qo(!0, !0)
};
function wl(e, t, n) {
  const i = G(n);
  if (i !== n && t.call(e, i)) {
    const o = Es(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const xl = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap();
function fp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fp(Es(e));
}
function qn(e) {
  return Gt(e) ? e : Uo(
    e,
    !1,
    yl,
    lp,
    xl
  );
}
function gp(e) {
  return Uo(
    e,
    !1,
    np,
    up,
    Sl
  );
}
function As(e) {
  return Uo(
    e,
    !0,
    bl,
    dp,
    _l
  );
}
function ni(e) {
  return Uo(
    e,
    !0,
    ip,
    pp,
    Pl
  );
}
function Uo(e, t, n, i, o) {
  if (!ue(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const s = hp(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? i : n
  );
  return o.set(e, a), a;
}
function vt(e) {
  return Gt(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Eo(e) {
  return !!(e && e.__v_isShallow);
}
function ko(e) {
  return vt(e) || Gt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function ot(e) {
  return xo(e, "__v_skip", !0), e;
}
const bi = (e) => ue(e) ? qn(e) : e, Os = (e) => ue(e) ? As(e) : e;
function Ts(e) {
  Ut && Ve && (e = G(e), process.env.NODE_ENV !== "production" ? Fr(e.dep || (e.dep = yi()), {
    target: e,
    type: "get",
    key: "value"
  }) : Fr(e.dep || (e.dep = yi())));
}
function Bs(e, t) {
  e = G(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? Bn(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Bn(n));
}
function ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pe(e) {
  return El(e, !1);
}
function mp(e) {
  return El(e, !0);
}
function El(e, t) {
  return ye(e) ? e : new vp(e, t);
}
class vp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : bi(t);
  }
  get value() {
    return Ts(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Eo(t) || Gt(t);
    t = n ? t : G(t), vi(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : bi(t), Bs(this, t));
  }
}
function yt(e) {
  return ye(e) ? e.value : e;
}
const yp = {
  get: (e, t, n) => yt(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const o = e[t];
    return ye(o) && !ye(n) ? (o.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function kl(e) {
  return vt(e) ? e : new Proxy(e, yp);
}
class bp {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = t(
      () => Ts(this),
      () => Bs(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function wp(e) {
  return new bp(e);
}
function Mn(e) {
  process.env.NODE_ENV !== "production" && !ko(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Nl(e, n);
  return t;
}
class xp {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return jd(G(this._object), this._key);
  }
}
class Sp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function oo(e, t, n) {
  return ye(e) ? e : K(e) ? new Sp(e) : ue(e) && arguments.length > 1 ? Nl(e, t, n) : Pe(e);
}
function Nl(e, t, n) {
  const i = e[t];
  return ye(i) ? i : new xp(
    e,
    t,
    n
  );
}
class _p {
  constructor(t, n, i, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Ds(t, () => {
      this._dirty || (this._dirty = !0, Bs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = i;
  }
  get value() {
    const t = G(this);
    return Ts(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Pp(e, t, n = !1) {
  let i, o;
  const r = K(e);
  r ? (i = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Be) : (i = e.get, o = e.set);
  const s = new _p(i, o, r || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const pn = [];
function ro(e) {
  pn.push(e);
}
function so() {
  pn.pop();
}
function N(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  xn();
  const n = pn.length ? pn[pn.length - 1].component : null, i = n && n.appContext.config.warnHandler, o = Ep();
  if (i)
    Ot(
      i,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${ir(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...kp(o)), console.warn(...r);
  }
  Sn();
}
function Ep() {
  let e = pn[pn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function kp(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Np(n));
  }), t;
}
function Np({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, o = ` at <${ir(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [o, ...Dp(e.props), r] : [o + r];
}
function Dp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...Dl(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Dl(e, t, n) {
  return we(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ye(t) ? (t = Dl(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : K(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
function Cp(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? N(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && N(`${t} is NaN - the duration expression might be incorrect.`));
}
const Ms = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ot(e, t, n, i) {
  let o;
  try {
    o = i ? e(...i) : e();
  } catch (r) {
    Wo(r, t, n);
  }
  return o;
}
function Ze(e, t, n, i) {
  if (K(e)) {
    const r = Ot(e, t, n, i);
    return r && Ps(r) && r.catch((s) => {
      Wo(s, t, n);
    }), r;
  }
  const o = [];
  for (let r = 0; r < e.length; r++)
    o.push(Ze(e[r], t, n, i));
  return o;
}
function Wo(e, t, n, i = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? Ms[n] : n;
    for (; r; ) {
      const l = r.ec;
      if (l) {
        for (let u = 0; u < l.length; u++)
          if (l[u](e, s, a) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ot(
        c,
        null,
        10,
        [e, s, a]
      );
      return;
    }
  }
  Ap(e, n, o, i);
}
function Ap(e, t, n, i = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = Ms[t];
    if (n && ro(n), N(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && so(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let wi = !1, $r = !1;
const Fe = [];
let ht = 0;
const $n = [];
let ft = null, Lt = 0;
const Cl = /* @__PURE__ */ Promise.resolve();
let Is = null;
const Op = 100;
function Rn(e) {
  const t = Is || Cl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tp(e) {
  let t = ht + 1, n = Fe.length;
  for (; t < n; ) {
    const i = t + n >>> 1;
    xi(Fe[i]) < e ? t = i + 1 : n = i;
  }
  return t;
}
function Ko(e) {
  (!Fe.length || !Fe.includes(
    e,
    wi && e.allowRecurse ? ht + 1 : ht
  )) && (e.id == null ? Fe.push(e) : Fe.splice(Tp(e.id), 0, e), Al());
}
function Al() {
  !wi && !$r && ($r = !0, Is = Cl.then(Bl));
}
function Bp(e) {
  const t = Fe.indexOf(e);
  t > ht && Fe.splice(t, 1);
}
function Ol(e) {
  Q(e) ? $n.push(...e) : (!ft || !ft.includes(
    e,
    e.allowRecurse ? Lt + 1 : Lt
  )) && $n.push(e), Al();
}
function xa(e, t = wi ? ht + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Fe.length; t++) {
    const n = Fe[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Fs(e, n))
        continue;
      Fe.splice(t, 1), t--, n();
    }
  }
}
function Tl(e) {
  if ($n.length) {
    const t = [...new Set($n)];
    if ($n.length = 0, ft) {
      ft.push(...t);
      return;
    }
    for (ft = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ft.sort((n, i) => xi(n) - xi(i)), Lt = 0; Lt < ft.length; Lt++)
      process.env.NODE_ENV !== "production" && Fs(e, ft[Lt]) || ft[Lt]();
    ft = null, Lt = 0;
  }
}
const xi = (e) => e.id == null ? 1 / 0 : e.id, Mp = (e, t) => {
  const n = xi(e) - xi(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Bl(e) {
  $r = !1, wi = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Fe.sort(Mp);
  const t = process.env.NODE_ENV !== "production" ? (n) => Fs(e, n) : Be;
  try {
    for (ht = 0; ht < Fe.length; ht++) {
      const n = Fe[ht];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Ot(n, null, 14);
      }
    }
  } finally {
    ht = 0, Fe.length = 0, Tl(e), wi = !1, Is = null, (Fe.length || $n.length) && Bl(e);
  }
}
function Fs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Op) {
      const i = t.ownerInstance, o = i && Qs(i.type);
      return N(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let fn = !1;
const On = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (So().__VUE_HMR_RUNTIME__ = {
  createRecord: fr(Ml),
  rerender: fr($p),
  reload: fr(Xp)
});
const yn = /* @__PURE__ */ new Map();
function Ip(e) {
  const t = e.type.__hmrId;
  let n = yn.get(t);
  n || (Ml(t, e.type), n = yn.get(t)), n.instances.add(e);
}
function Fp(e) {
  yn.get(e.type.__hmrId).instances.delete(e);
}
function Ml(e, t) {
  return yn.has(e) ? !1 : (yn.set(e, {
    initialDef: di(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function di(e) {
  return hu(e) ? e.__vccOpts : e;
}
function $p(e, t) {
  const n = yn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, di(i.type).render = t), i.renderCache = [], fn = !0, i.update(), fn = !1;
  }));
}
function Xp(e, t) {
  const n = yn.get(e);
  if (!n)
    return;
  t = di(t), Sa(n.initialDef, t);
  const i = [...n.instances];
  for (const o of i) {
    const r = di(o.type);
    On.has(r) || (r !== n.initialDef && Sa(r, t), On.add(r)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (On.add(r), o.ceReload(t.styles), On.delete(r)) : o.parent ? Ko(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ol(() => {
    for (const o of i)
      On.delete(
        di(o.type)
      );
  });
}
function Sa(e, t) {
  me(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function fr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let gt, ii = [], Xr = !1;
function Fi(e, ...t) {
  gt ? gt.emit(e, ...t) : Xr || ii.push({ event: e, args: t });
}
function Il(e, t) {
  var n, i;
  gt = e, gt ? (gt.enabled = !0, ii.forEach(({ event: o, args: r }) => gt.emit(o, ...r)), ii = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Il(r, t);
  }), setTimeout(() => {
    gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xr = !0, ii = []);
  }, 3e3)) : (Xr = !0, ii = []);
}
function Vp(e, t) {
  Fi("app:init", e, t, {
    Fragment: ke,
    Text: Vi,
    Comment: Te,
    Static: lo
  });
}
function Rp(e) {
  Fi("app:unmount", e);
}
const Hp = /* @__PURE__ */ $s(
  "component:added"
  /* COMPONENT_ADDED */
), Fl = /* @__PURE__ */ $s(
  "component:updated"
  /* COMPONENT_UPDATED */
), Lp = /* @__PURE__ */ $s(
  "component:removed"
  /* COMPONENT_REMOVED */
), jp = (e) => {
  gt && typeof gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !gt.cleanupBuffer(e) && Lp(e);
};
function $s(e) {
  return (t) => {
    Fi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const zp = /* @__PURE__ */ $l(
  "perf:start"
  /* PERFORMANCE_START */
), Qp = /* @__PURE__ */ $l(
  "perf:end"
  /* PERFORMANCE_END */
);
function $l(e) {
  return (t, n, i) => {
    Fi(e, t.appContext.app, t.uid, t, n, i);
  };
}
function qp(e, t, n) {
  Fi(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Up(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || he;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Rt(t) in d)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Rt(t)}" prop.`
        );
      else {
        const p = u[t];
        K(p) && (p(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), s = r && t.slice(7);
  if (s && s in i) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: p } = i[u] || he;
    p && (o = n.map((f) => we(f) ? f.trim() : f)), d && (o = n.map(Tr));
  }
  if (process.env.NODE_ENV !== "production" && qp(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && i[Rt(u)] && N(
      `Event "${u}" is emitted in component ${ir(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${je(t)}" instead of "${t}".`
    );
  }
  let a, c = i[a = Rt(t)] || // also try camelCase event handler (#2249)
  i[a = Rt(Ue(t))];
  !c && r && (c = i[a = Rt(je(t))]), c && Ze(
    c,
    e,
    6,
    o
  );
  const l = i[a + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ze(
      l,
      e,
      6,
      o
    );
  }
}
function Xl(e, t, n = !1) {
  const i = t.emitsCache, o = i.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let s = {}, a = !1;
  if (!K(e)) {
    const c = (l) => {
      const u = Xl(l, t, !0);
      u && (a = !0, me(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !a ? (ue(e) && i.set(e, null), null) : (Q(r) ? r.forEach((c) => s[c] = null) : me(s, r), ue(e) && i.set(e, s), s);
}
function Go(e, t) {
  return !e || !Ii(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, je(t)) || ie(e, t));
}
let De = null, Yo = null;
function No(e) {
  const t = De;
  return De = e, Yo = e && e.type.__scopeId || null, t;
}
function Jo(e) {
  Yo = e;
}
function Zo() {
  Yo = null;
}
function Xs(e, t = De, n) {
  if (!t || e._n)
    return e;
  const i = (...o) => {
    i._d && Fa(-1);
    const r = No(t);
    let s;
    try {
      s = e(...o);
    } finally {
      No(r), i._d && Fa(1);
    }
    return process.env.NODE_ENV !== "production" && Fl(t), s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
let Vr = !1;
function Do() {
  Vr = !0;
}
function hr(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: o,
    props: r,
    propsOptions: [s],
    slots: a,
    attrs: c,
    emit: l,
    render: u,
    renderCache: d,
    data: p,
    setupState: f,
    ctx: m,
    inheritAttrs: w
  } = e;
  let A, k;
  const b = No(e);
  process.env.NODE_ENV !== "production" && (Vr = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = o || i;
      A = rt(
        u.call(
          T,
          T,
          d,
          r,
          f,
          p,
          m
        )
      ), k = c;
    } else {
      const T = t;
      process.env.NODE_ENV !== "production" && c === r && Do(), A = rt(
        T.length > 1 ? T(
          r,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Do(), c;
            },
            slots: a,
            emit: l
          } : { attrs: c, slots: a, emit: l }
        ) : T(
          r,
          null
          /* we know it doesn't need it */
        )
      ), k = t.props ? c : Kp(c);
    }
  } catch (T) {
    fi.length = 0, Wo(T, e, 1), A = Ce(Te);
  }
  let x = A, V;
  if (process.env.NODE_ENV !== "production" && A.patchFlag > 0 && A.patchFlag & 2048 && ([x, V] = Wp(A)), k && w !== !1) {
    const T = Object.keys(k), { shapeFlag: ae } = x;
    if (T.length) {
      if (ae & 7)
        s && T.some(wo) && (k = Gp(
          k,
          s
        )), x = St(x, k);
      else if (process.env.NODE_ENV !== "production" && !Vr && x.type !== Te) {
        const X = Object.keys(c), R = [], D = [];
        for (let E = 0, W = X.length; E < W; E++) {
          const B = X[E];
          Ii(B) ? wo(B) || R.push(B[2].toLowerCase() + B.slice(3)) : D.push(B);
        }
        D.length && N(
          `Extraneous non-props attributes (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), R.length && N(
          `Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !_a(x) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), x = St(x), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !_a(x) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), x.transition = n.transition), process.env.NODE_ENV !== "production" && V ? V(x) : A = x, No(b), A;
}
const Wp = (e) => {
  const t = e.children, n = e.dynamicChildren, i = Vl(t);
  if (!i)
    return [e, void 0];
  const o = t.indexOf(i), r = n ? n.indexOf(i) : -1, s = (a) => {
    t[o] = a, n && (r > -1 ? n[r] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [rt(i), s];
};
function Vl(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (Hn(i)) {
      if (i.type !== Te || i.children === "v-if") {
        if (t)
          return;
        t = i;
      }
    } else
      return;
  }
  return t;
}
const Kp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ii(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Gp = (e, t) => {
  const n = {};
  for (const i in e)
    (!wo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, _a = (e) => e.shapeFlag & 7 || e.type === Te;
function Yp(e, t, n) {
  const { props: i, children: o, component: r } = e, { props: s, children: a, patchFlag: c } = t, l = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || a) && fn || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return i ? Pa(i, s, l) : !!s;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (s[p] !== i[p] && !Go(l, p))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : i === s ? !1 : i ? s ? Pa(i, s, l) : !0 : !!s;
  return !1;
}
function Pa(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    if (t[r] !== e[r] && !Go(n, r))
      return !0;
  }
  return !1;
}
function Jp({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Zp = (e) => e.__isSuspense;
function ef(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Ol(e);
}
function Rl(e, t) {
  return Vs(e, null, t);
}
const Wi = {};
function Qe(e, t, n) {
  return process.env.NODE_ENV !== "production" && !K(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vs(e, t, n);
}
function Vs(e, t, { immediate: n, deep: i, flush: o, onTrack: r, onTrigger: s } = he) {
  var a;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (T) => {
    N(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, l = Ns() === ((a = Ne) == null ? void 0 : a.scope) ? Ne : null;
  let u, d = !1, p = !1;
  if (ye(e) ? (u = () => e.value, d = Eo(e)) : vt(e) ? (u = () => e, i = !0) : Q(e) ? (p = !0, d = e.some((T) => vt(T) || Eo(T)), u = () => e.map((T) => {
    if (ye(T))
      return T.value;
    if (vt(T))
      return cn(T);
    if (K(T))
      return Ot(T, l, 2);
    process.env.NODE_ENV !== "production" && c(T);
  })) : K(e) ? t ? u = () => Ot(e, l, 2) : u = () => {
    if (!(l && l.isUnmounted))
      return f && f(), Ze(
        e,
        l,
        3,
        [m]
      );
  } : (u = Be, process.env.NODE_ENV !== "production" && c(e)), t && i) {
    const T = u;
    u = () => cn(T());
  }
  let f, m = (T) => {
    f = x.onStop = () => {
      Ot(T, l, 4);
    };
  }, w;
  if (Ei)
    if (m = Be, t ? n && Ze(t, l, 3, [
      u(),
      p ? [] : void 0,
      m
    ]) : u(), o === "sync") {
      const T = rh();
      w = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return Be;
  let A = p ? new Array(e.length).fill(Wi) : Wi;
  const k = () => {
    if (x.active)
      if (t) {
        const T = x.run();
        (i || d || (p ? T.some(
          (ae, X) => vi(ae, A[X])
        ) : vi(T, A))) && (f && f(), Ze(t, l, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          A === Wi ? void 0 : p && A[0] === Wi ? [] : A,
          m
        ]), A = T);
      } else
        x.run();
  };
  k.allowRecurse = !!t;
  let b;
  o === "sync" ? b = k : o === "post" ? b = () => Le(k, l && l.suspense) : (k.pre = !0, l && (k.id = l.uid), b = () => Ko(k));
  const x = new Ds(u, b);
  process.env.NODE_ENV !== "production" && (x.onTrack = r, x.onTrigger = s), t ? n ? k() : A = x.run() : o === "post" ? Le(
    x.run.bind(x),
    l && l.suspense
  ) : x.run();
  const V = () => {
    x.stop(), l && l.scope && Ss(l.scope.effects, x);
  };
  return w && w.push(V), V;
}
function tf(e, t, n) {
  const i = this.proxy, o = we(e) ? e.includes(".") ? Hl(i, e) : () => i[e] : e.bind(i, i);
  let r;
  K(t) ? r = t : (r = t.handler, n = t);
  const s = Ne;
  Ln(this);
  const a = Vs(o, r.bind(i), n);
  return s ? Ln(s) : gn(), a;
}
function Hl(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let o = 0; o < n.length && i; o++)
      i = i[n[o]];
    return i;
  };
}
function cn(e, t) {
  if (!ue(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ye(e))
    cn(e.value, t);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      cn(e[n], t);
  else if (rl(e) || un(e))
    e.forEach((n) => {
      cn(n, t);
    });
  else if (al(e))
    for (const n in e)
      cn(e[n], t);
  return e;
}
function Ll(e) {
  Nd(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function Xn(e, t) {
  const n = De;
  if (n === null)
    return process.env.NODE_ENV !== "production" && N("withDirectives can only be used inside render functions."), e;
  const i = nr(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, a, c, l = he] = t[r];
    s && (K(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && cn(a), o.push({
      dir: s,
      instance: i,
      value: a,
      oldValue: void 0,
      arg: c,
      modifiers: l
    }));
  }
  return e;
}
function Zt(e, t, n, i) {
  const o = e.dirs, r = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    r && (a.oldValue = r[s].value);
    let c = a.dir[i];
    c && (xn(), Ze(c, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Sn());
  }
}
function nf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _n(() => {
    e.isMounted = !0;
  }), Ul(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ge = [Function, Array], jl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ge,
  onEnter: Ge,
  onAfterEnter: Ge,
  onEnterCancelled: Ge,
  // leave
  onBeforeLeave: Ge,
  onLeave: Ge,
  onAfterLeave: Ge,
  onLeaveCancelled: Ge,
  // appear
  onBeforeAppear: Ge,
  onAppear: Ge,
  onAfterAppear: Ge,
  onAppearCancelled: Ge
}, of = {
  name: "BaseTransition",
  props: jl,
  setup(e, { slots: t }) {
    const n = Un(), i = nf();
    let o;
    return () => {
      const r = t.default && Ql(t.default(), !0);
      if (!r || !r.length)
        return;
      let s = r[0];
      if (r.length > 1) {
        let w = !1;
        for (const A of r)
          if (A.type !== Te) {
            if (process.env.NODE_ENV !== "production" && w) {
              N(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = A, w = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const a = G(e), { mode: c } = a;
      if (process.env.NODE_ENV !== "production" && c && c !== "in-out" && c !== "out-in" && c !== "default" && N(`invalid <transition> mode: ${c}`), i.isLeaving)
        return gr(s);
      const l = Ea(s);
      if (!l)
        return gr(s);
      const u = Rr(
        l,
        a,
        i,
        n
      );
      Hr(l, u);
      const d = n.subTree, p = d && Ea(d);
      let f = !1;
      const { getTransitionKey: m } = l.type;
      if (m) {
        const w = m();
        o === void 0 ? o = w : w !== o && (o = w, f = !0);
      }
      if (p && p.type !== Te && (!rn(l, p) || f)) {
        const w = Rr(
          p,
          a,
          i,
          n
        );
        if (Hr(p, w), c === "out-in")
          return i.isLeaving = !0, w.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && n.update();
          }, gr(s);
        c === "in-out" && l.type !== Te && (w.delayLeave = (A, k, b) => {
          const x = zl(
            i,
            p
          );
          x[String(p.key)] = p, A._leaveCb = () => {
            k(), A._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = b;
        });
      }
      return s;
    };
  }
}, rf = of;
function zl(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Rr(e, t, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: s = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: l,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: f,
    onLeaveCancelled: m,
    onBeforeAppear: w,
    onAppear: A,
    onAfterAppear: k,
    onAppearCancelled: b
  } = t, x = String(e.key), V = zl(n, e), T = (R, D) => {
    R && Ze(
      R,
      i,
      9,
      D
    );
  }, ae = (R, D) => {
    const E = D[1];
    T(R, D), Q(R) ? R.every((W) => W.length <= 1) && E() : R.length <= 1 && E();
  }, X = {
    mode: r,
    persisted: s,
    beforeEnter(R) {
      let D = a;
      if (!n.isMounted)
        if (o)
          D = w || a;
        else
          return;
      R._leaveCb && R._leaveCb(
        !0
        /* cancelled */
      );
      const E = V[x];
      E && rn(e, E) && E.el._leaveCb && E.el._leaveCb(), T(D, [R]);
    },
    enter(R) {
      let D = c, E = l, W = u;
      if (!n.isMounted)
        if (o)
          D = A || c, E = k || l, W = b || u;
        else
          return;
      let B = !1;
      const te = R._enterCb = (Se) => {
        B || (B = !0, Se ? T(W, [R]) : T(E, [R]), X.delayedLeave && X.delayedLeave(), R._enterCb = void 0);
      };
      D ? ae(D, [R, te]) : te();
    },
    leave(R, D) {
      const E = String(e.key);
      if (R._enterCb && R._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      T(d, [R]);
      let W = !1;
      const B = R._leaveCb = (te) => {
        W || (W = !0, D(), te ? T(m, [R]) : T(f, [R]), R._leaveCb = void 0, V[E] === e && delete V[E]);
      };
      V[E] = e, p ? ae(p, [R, B]) : B();
    },
    clone(R) {
      return Rr(R, t, n, i);
    }
  };
  return X;
}
function gr(e) {
  if (Xi(e))
    return e = St(e), e.children = null, e;
}
function Ea(e) {
  return Xi(e) ? e.children ? e.children[0] : void 0 : e;
}
function Hr(e, t) {
  e.shapeFlag & 6 && e.component ? Hr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ql(e, t = !1, n) {
  let i = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ke ? (s.patchFlag & 128 && o++, i = i.concat(
      Ql(s.children, t, a)
    )) : (t || s.type !== Te) && i.push(a != null ? St(s, { key: a }) : s);
  }
  if (o > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
function $i(e, t) {
  return K(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => me({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const pi = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function sf(e, t) {
  ql(e, "a", t);
}
function af(e, t) {
  ql(e, "da", t);
}
function ql(e, t, n = Ne) {
  const i = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (er(t, i, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xi(o.parent.vnode) && cf(i, t, n, o), o = o.parent;
  }
}
function cf(e, t, n, i) {
  const o = er(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Wl(() => {
    Ss(i[t], o);
  }, n);
}
function er(e, t, n = Ne, i = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      xn(), Ln(n);
      const a = Ze(t, n, e, s);
      return gn(), Sn(), a;
    });
    return i ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Rt(Ms[e].replace(/ hook$/, ""));
    N(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const It = (e) => (t, n = Ne) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ei || e === "sp") && er(e, (...i) => t(...i), n)
), lf = It("bm"), _n = It("m"), uf = It("bu"), df = It("u"), Ul = It("bum"), Wl = It("um"), pf = It("sp"), ff = It(
  "rtg"
), hf = It(
  "rtc"
);
function gf(e, t = Ne) {
  er("ec", e, t);
}
const Lr = "components", mf = "directives", Kl = Symbol.for("v-ndc");
function mr(e) {
  return we(e) ? Gl(Lr, e, !1) || e : e || Kl;
}
function vf(e) {
  return Gl(mf, e);
}
function Gl(e, t, n = !0, i = !1) {
  const o = De || Ne;
  if (o) {
    const r = o.type;
    if (e === Lr) {
      const a = Qs(
        r,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (a && (a === t || a === Ue(t) || a === vn(Ue(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ka(o[e] || r[e], t) || // global registration
      ka(o.appContext[e], t)
    );
    if (!s && i)
      return r;
    if (process.env.NODE_ENV !== "production" && n && !s) {
      const a = e === Lr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      N(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return s;
  } else
    process.env.NODE_ENV !== "production" && N(
      `resolve${vn(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function ka(e, t) {
  return e && (e[t] || e[Ue(t)] || e[vn(Ue(t))]);
}
function Si(e, t, n, i) {
  let o;
  const r = n && n[i];
  if (Q(e) || we(e)) {
    o = new Array(e.length);
    for (let s = 0, a = e.length; s < a; s++)
      o[s] = t(e[s], s, void 0, r && r[s]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let s = 0; s < e; s++)
      o[s] = t(s + 1, s, void 0, r && r[s]);
  } else if (ue(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (s, a) => t(s, a, void 0, r && r[a])
      );
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let a = 0, c = s.length; a < c; a++) {
        const l = s[a];
        o[a] = t(e[l], l, a, r && r[a]);
      }
    }
  else
    o = [];
  return n && (n[i] = o), o;
}
function Ye(e, t, n = {}, i, o) {
  if (De.isCE || De.parent && pi(De.parent) && De.parent.isCE)
    return t !== "default" && (n.name = t), Ce("slot", n, i && i());
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (N(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), le();
  const s = r && Yl(r(n)), a = Tt(
    ke,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || (i ? i() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function Yl(e) {
  return e.some((t) => Hn(t) ? !(t.type === Te || t.type === ke && !Yl(t.children)) : !0) ? e : null;
}
function yf(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !ue(e))
    return N("v-on with no argument expects an object value."), n;
  for (const i in e)
    n[t && /[A-Z]/.test(i) ? `on:${i}` : Rt(i)] = e[i];
  return n;
}
const jr = (e) => e ? du(e) ? nr(e) || e.proxy : jr(e.parent) : null, hn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ni(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ni(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ni(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ni(e.refs) : e.refs,
    $parent: (e) => jr(e.parent),
    $root: (e) => jr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Hs(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ko(e.update)),
    $nextTick: (e) => e.n || (e.n = Rn.bind(e.proxy)),
    $watch: (e) => tf.bind(e)
  })
), Rs = (e) => e === "_" || e === "$", vr = (e, t) => e !== he && !e.__isScriptSetup && ie(e, t), Jl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: i, data: o, props: r, accessCache: s, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let l;
    if (t[0] !== "$") {
      const f = s[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return i[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (vr(i, t))
          return s[t] = 1, i[t];
        if (o !== he && ie(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && ie(l, t)
        )
          return s[t] = 3, r[t];
        if (n !== he && ie(n, t))
          return s[t] = 4, n[t];
        zr && (s[t] = 0);
      }
    }
    const u = hn[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (Me(e, "get", t), process.env.NODE_ENV !== "production" && Do()) : process.env.NODE_ENV !== "production" && t === "$slots" && Me(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== he && ie(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, ie(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && De && (!we(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== he && Rs(t[0]) && ie(o, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === De && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: o, ctx: r } = e;
    return vr(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && ie(o, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== he && ie(i, t) ? (i[t] = n, !0) : ie(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: o, propsOptions: r }
  }, s) {
    let a;
    return !!n[s] || e !== he && ie(e, s) || vr(t, s) || (a = r[0]) && ie(a, s) || ie(i, s) || ie(hn, s) || ie(o.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Jl.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function bf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(hn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => hn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Be
    });
  }), t;
}
function wf(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: Be
    });
  });
}
function xf(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Rs(i[0])) {
        N(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: Be
      });
    }
  });
}
function Na(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Sf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let zr = !0;
function _f(e) {
  const t = Hs(e), n = e.proxy, i = e.ctx;
  zr = !1, t.beforeCreate && Da(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: s,
    watch: a,
    provide: c,
    inject: l,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: f,
    updated: m,
    activated: w,
    deactivated: A,
    beforeDestroy: k,
    beforeUnmount: b,
    destroyed: x,
    unmounted: V,
    render: T,
    renderTracked: ae,
    renderTriggered: X,
    errorCaptured: R,
    serverPrefetch: D,
    // public API
    expose: E,
    inheritAttrs: W,
    // assets
    components: B,
    directives: te,
    filters: Se
  } = t, pe = process.env.NODE_ENV !== "production" ? Sf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [q] = e.propsOptions;
    if (q)
      for (const ne in q)
        pe("Props", ne);
  }
  if (l && Pf(l, i, pe), s)
    for (const q in s) {
      const ne = s[q];
      K(ne) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(i, q, {
        value: ne.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[q] = ne.bind(n), process.env.NODE_ENV !== "production" && pe("Methods", q)) : process.env.NODE_ENV !== "production" && N(
        `Method "${q}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !K(o) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const q = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Ps(q) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ue(q))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = qn(q), process.env.NODE_ENV !== "production")
      for (const ne in q)
        pe("Data", ne), Rs(ne[0]) || Object.defineProperty(i, ne, {
          configurable: !0,
          enumerable: !0,
          get: () => q[ne],
          set: Be
        });
  }
  if (zr = !0, r)
    for (const q in r) {
      const ne = r[q], Ae = K(ne) ? ne.bind(n, n) : K(ne.get) ? ne.get.bind(n, n) : Be;
      process.env.NODE_ENV !== "production" && Ae === Be && N(`Computed property "${q}" has no getter.`);
      const Pt = !K(ne) && K(ne.set) ? ne.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${q}" is readonly.`
        );
      } : Be, Re = xe({
        get: Ae,
        set: Pt
      });
      Object.defineProperty(i, q, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (He) => Re.value = He
      }), process.env.NODE_ENV !== "production" && pe("Computed", q);
    }
  if (a)
    for (const q in a)
      Zl(a[q], i, n, q);
  if (c) {
    const q = K(c) ? c.call(n) : c;
    Reflect.ownKeys(q).forEach((ne) => {
      ao(ne, q[ne]);
    });
  }
  u && Da(u, e, "c");
  function re(q, ne) {
    Q(ne) ? ne.forEach((Ae) => q(Ae.bind(n))) : ne && q(ne.bind(n));
  }
  if (re(lf, d), re(_n, p), re(uf, f), re(df, m), re(sf, w), re(af, A), re(gf, R), re(hf, ae), re(ff, X), re(Ul, b), re(Wl, V), re(pf, D), Q(E))
    if (E.length) {
      const q = e.exposed || (e.exposed = {});
      E.forEach((ne) => {
        Object.defineProperty(q, ne, {
          get: () => n[ne],
          set: (Ae) => n[ne] = Ae
        });
      });
    } else
      e.exposed || (e.exposed = {});
  T && e.render === Be && (e.render = T), W != null && (e.inheritAttrs = W), B && (e.components = B), te && (e.directives = te);
}
function Pf(e, t, n = Be) {
  Q(e) && (e = Qr(e));
  for (const i in e) {
    const o = e[i];
    let r;
    ue(o) ? "default" in o ? r = ct(
      o.from || i,
      o.default,
      !0
      /* treat default function as factory */
    ) : r = ct(o.from || i) : r = ct(o), ye(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r, process.env.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Da(e, t, n) {
  Ze(
    Q(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zl(e, t, n, i) {
  const o = i.includes(".") ? Hl(n, i) : () => n[i];
  if (we(e)) {
    const r = t[e];
    K(r) ? Qe(o, r) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, r);
  } else if (K(e))
    Qe(o, e.bind(n));
  else if (ue(e))
    if (Q(e))
      e.forEach((r) => Zl(r, t, n, i));
    else {
      const r = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(r) ? Qe(o, r, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${i}"`, e);
}
function Hs(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !o.length && !n && !i ? c = t : (c = {}, o.length && o.forEach(
    (l) => Co(c, l, s, !0)
  ), Co(c, t, s)), ue(t) && r.set(t, c), c;
}
function Co(e, t, n, i = !1) {
  const { mixins: o, extends: r } = t;
  r && Co(e, r, n, !0), o && o.forEach(
    (s) => Co(e, s, n, !0)
  );
  for (const s in t)
    if (i && s === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ef[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ef = {
  data: Ca,
  props: Aa,
  emits: Aa,
  // objects
  methods: oi,
  computed: oi,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: oi,
  directives: oi,
  // watch
  watch: Nf,
  // provide / inject
  provide: Ca,
  inject: kf
};
function Ca(e, t) {
  return t ? e ? function() {
    return me(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function kf(e, t) {
  return oi(Qr(e), Qr(t));
}
function Qr(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function oi(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Aa(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    Na(e),
    Na(t ?? {})
  ) : t;
}
function Nf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Xe(e[i], t[i]);
  return n;
}
function eu() {
  return {
    app: null,
    config: {
      isNativeTag: ol,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Df = 0;
function Cf(e, t) {
  return function(i, o = null) {
    K(i) || (i = me({}, i)), o != null && !ue(o) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), o = null);
    const r = eu();
    process.env.NODE_ENV !== "production" && Object.defineProperty(r.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        N(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const s = /* @__PURE__ */ new Set();
    let a = !1;
    const c = r.app = {
      _uid: Df++,
      _component: i,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Ra,
      get config() {
        return r.config;
      },
      set config(l) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(l, ...u) {
        return s.has(l) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : l && K(l.install) ? (s.add(l), l.install(c, ...u)) : K(l) ? (s.add(l), l(c, ...u)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(l) {
        return r.mixins.includes(l) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (l.name ? `: ${l.name}` : "")
        ) : r.mixins.push(l), c;
      },
      component(l, u) {
        return process.env.NODE_ENV !== "production" && Kr(l, r.config), u ? (process.env.NODE_ENV !== "production" && r.components[l] && N(`Component "${l}" has already been registered in target app.`), r.components[l] = u, c) : r.components[l];
      },
      directive(l, u) {
        return process.env.NODE_ENV !== "production" && Ll(l), u ? (process.env.NODE_ENV !== "production" && r.directives[l] && N(`Directive "${l}" has already been registered in target app.`), r.directives[l] = u, c) : r.directives[l];
      },
      mount(l, u, d) {
        if (a)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && l.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = Ce(
            i,
            o
          );
          return p.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(St(p), l, d);
          }), u && t ? t(p, l) : e(p, l, d), a = !0, c._container = l, l.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = p.component, Vp(c, Ra)), nr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        a ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Rp(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(l, u) {
        return process.env.NODE_ENV !== "production" && l in r.provides && N(
          `App already provides property with key "${String(l)}". It will be overwritten with the new value.`
        ), r.provides[l] = u, c;
      },
      runWithContext(l) {
        Ao = c;
        try {
          return l();
        } finally {
          Ao = null;
        }
      }
    };
    return c;
  };
}
let Ao = null;
function ao(e, t) {
  if (!Ne)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = Ne.provides;
    const i = Ne.parent && Ne.parent.provides;
    i === n && (n = Ne.provides = Object.create(i)), n[e] = t;
  }
}
function ct(e, t, n = !1) {
  const i = Ne || De;
  if (i || Ao) {
    const o = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Ao._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(i && i.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
function Af(e, t, n, i = !1) {
  const o = {}, r = {};
  xo(r, tr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), tu(e, t, o, r);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  process.env.NODE_ENV !== "production" && iu(t || {}, o, e), n ? e.props = i ? o : gp(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Of(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Tf(e, t, n, i) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, a = G(o), [c] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Of(e)) && (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (Go(e.emitsOptions, p))
          continue;
        const f = t[p];
        if (c)
          if (ie(r, p))
            f !== r[p] && (r[p] = f, l = !0);
          else {
            const m = Ue(p);
            o[m] = qr(
              c,
              a,
              m,
              f,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          f !== r[p] && (r[p] = f, l = !0);
      }
    }
  } else {
    tu(e, t, o, r) && (l = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !ie(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = je(d)) === d || !ie(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = qr(
        c,
        a,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[d]);
    if (r !== a)
      for (const d in r)
        (!t || !ie(t, d)) && (delete r[d], l = !0);
  }
  l && xt(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && iu(t || {}, o, e);
}
function tu(e, t, n, i) {
  const [o, r] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let c in t) {
      if (io(c))
        continue;
      const l = t[c];
      let u;
      o && ie(o, u = Ue(c)) ? !r || !r.includes(u) ? n[u] = l : (a || (a = {}))[u] = l : Go(e.emitsOptions, c) || (!(c in i) || l !== i[c]) && (i[c] = l, s = !0);
    }
  if (r) {
    const c = G(n), l = a || he;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = qr(
        o,
        c,
        d,
        l[d],
        e,
        !ie(l, d)
      );
    }
  }
  return s;
}
function qr(e, t, n, i, o, r) {
  const s = e[n];
  if (s != null) {
    const a = ie(s, "default");
    if (a && i === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && K(c)) {
        const { propsDefaults: l } = o;
        n in l ? i = l[n] : (Ln(o), i = l[n] = c.call(
          null,
          t
        ), gn());
      } else
        i = c;
    }
    s[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : s[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === je(n)) && (i = !0));
  }
  return i;
}
function nu(e, t, n = !1) {
  const i = t.propsCache, o = i.get(e);
  if (o)
    return o;
  const r = e.props, s = {}, a = [];
  let c = !1;
  if (!K(e)) {
    const u = (d) => {
      c = !0;
      const [p, f] = nu(d, t, !0);
      me(s, p), f && a.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return ue(e) && i.set(e, Fn), Fn;
  if (Q(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !we(r[u]) && N("props must be strings when using array syntax.", r[u]);
      const d = Ue(r[u]);
      Oa(d) && (s[d] = he);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !ue(r) && N("invalid props options", r);
    for (const u in r) {
      const d = Ue(u);
      if (Oa(d)) {
        const p = r[u], f = s[d] = Q(p) || K(p) ? { type: p } : me({}, p);
        if (f) {
          const m = Ba(Boolean, f.type), w = Ba(String, f.type);
          f[
            0
            /* shouldCast */
          ] = m > -1, f[
            1
            /* shouldCastTrue */
          ] = w < 0 || m < w, (m > -1 || ie(f, "default")) && a.push(d);
        }
      }
    }
  }
  const l = [s, a];
  return ue(e) && i.set(e, l), l;
}
function Oa(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ur(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ta(e, t) {
  return Ur(e) === Ur(t);
}
function Ba(e, t) {
  return Q(t) ? t.findIndex((n) => Ta(n, e)) : K(t) && Ta(t, e) ? 0 : -1;
}
function iu(e, t, n) {
  const i = G(t), o = n.propsOptions[0];
  for (const r in o) {
    let s = o[r];
    s != null && Bf(
      r,
      i[r],
      s,
      !ie(e, r) && !ie(e, je(r))
    );
  }
}
function Bf(e, t, n, i) {
  const { type: o, required: r, validator: s, skipCheck: a } = n;
  if (r && i) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !a) {
      let c = !1;
      const l = Q(o) ? o : [o], u = [];
      for (let d = 0; d < l.length && !c; d++) {
        const { valid: p, expectedType: f } = If(t, l[d]);
        u.push(f || ""), c = p;
      }
      if (!c) {
        N(Ff(e, t, u));
        return;
      }
    }
    s && !s(t) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Mf = /* @__PURE__ */ Jt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function If(e, t) {
  let n;
  const i = Ur(t);
  if (Mf(i)) {
    const o = typeof e;
    n = o === i.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    i === "Object" ? n = ue(e) : i === "Array" ? n = Q(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function Ff(e, t, n) {
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(vn).join(" | ")}`;
  const o = n[0], r = Es(t), s = Ma(t, o), a = Ma(t, r);
  return n.length === 1 && Ia(o) && !$f(o, r) && (i += ` with value ${s}`), i += `, got ${r} `, Ia(r) && (i += `with value ${a}.`), i;
}
function Ma(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ia(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function $f(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ou = (e) => e[0] === "_" || e === "$stable", Ls = (e) => Q(e) ? e.map(rt) : [rt(e)], Xf = (e, t, n) => {
  if (t._n)
    return t;
  const i = Xs((...o) => (process.env.NODE_ENV !== "production" && Ne && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ls(t(...o))), n);
  return i._c = !1, i;
}, ru = (e, t, n) => {
  const i = e._ctx;
  for (const o in e) {
    if (ou(o))
      continue;
    const r = e[o];
    if (K(r))
      t[o] = Xf(o, r, i);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const s = Ls(r);
      t[o] = () => s;
    }
  }
}, su = (e, t) => {
  process.env.NODE_ENV !== "production" && !Xi(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ls(t);
  e.slots.default = () => n;
}, Vf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), xo(t, "_", n)) : ru(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && su(e, t);
  xo(e.slots, tr, 1);
}, Rf = (e, t, n) => {
  const { vnode: i, slots: o } = e;
  let r = !0, s = he;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? process.env.NODE_ENV !== "production" && fn ? (me(o, t), xt(e, "set", "$slots")) : n && a === 1 ? r = !1 : (me(o, t), !n && a === 1 && delete o._) : (r = !t.$stable, ru(t, o)), s = t;
  } else
    t && (su(e, t), s = { default: 1 });
  if (r)
    for (const a in o)
      !ou(a) && !(a in s) && delete o[a];
};
function Wr(e, t, n, i, o = !1) {
  if (Q(e)) {
    e.forEach(
      (p, f) => Wr(
        p,
        t && (Q(t) ? t[f] : t),
        n,
        i,
        o
      )
    );
    return;
  }
  if (pi(i) && !o)
    return;
  const r = i.shapeFlag & 4 ? nr(i.component) || i.component.proxy : i.el, s = o ? null : r, { i: a, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const l = t && t.r, u = a.refs === he ? a.refs = {} : a.refs, d = a.setupState;
  if (l != null && l !== c && (we(l) ? (u[l] = null, ie(d, l) && (d[l] = null)) : ye(l) && (l.value = null)), K(c))
    Ot(c, a, 12, [s, u]);
  else {
    const p = we(c), f = ye(c);
    if (p || f) {
      const m = () => {
        if (e.f) {
          const w = p ? ie(d, c) ? d[c] : u[c] : c.value;
          o ? Q(w) && Ss(w, r) : Q(w) ? w.includes(r) || w.push(r) : p ? (u[c] = [r], ie(d, c) && (d[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else
          p ? (u[c] = s, ie(d, c) && (d[c] = s)) : f ? (c.value = s, e.k && (u[e.k] = s)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
      };
      s ? (m.id = -1, Le(m, n)) : m();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Kn, qt;
function Dt(e, t) {
  e.appContext.config.performance && Oo() && qt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && zp(e, t, Oo() ? qt.now() : Date.now());
}
function Ct(e, t) {
  if (e.appContext.config.performance && Oo()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    qt.mark(i), qt.measure(
      `<${ir(e, e.type)}> ${t}`,
      n,
      i
    ), qt.clearMarks(n), qt.clearMarks(i);
  }
  process.env.NODE_ENV !== "production" && Qp(e, t, Oo() ? qt.now() : Date.now());
}
function Oo() {
  return Kn !== void 0 || (typeof window < "u" && window.performance ? (Kn = !0, qt = window.performance) : Kn = !1), Kn;
}
function Hf() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Le = ef;
function Lf(e) {
  return jf(e);
}
function jf(e, t) {
  Hf();
  const n = So();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Il(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: o,
    patchProp: r,
    createElement: s,
    createText: a,
    createComment: c,
    setText: l,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: f = Be,
    insertStaticContent: m
  } = e, w = (h, g, v, _ = null, S = null, O = null, F = !1, C = null, I = process.env.NODE_ENV !== "production" && fn ? !1 : !!g.dynamicChildren) => {
    if (h === g)
      return;
    h && !rn(h, g) && (_ = H(h), j(h, S, O, !0), h = null), g.patchFlag === -2 && (I = !1, g.dynamicChildren = null);
    const { type: P, ref: z, shapeFlag: L } = g;
    switch (P) {
      case Vi:
        A(h, g, v, _);
        break;
      case Te:
        k(h, g, v, _);
        break;
      case lo:
        h == null ? b(g, v, _, F) : process.env.NODE_ENV !== "production" && x(h, g, v, F);
        break;
      case ke:
        te(
          h,
          g,
          v,
          _,
          S,
          O,
          F,
          C,
          I
        );
        break;
      default:
        L & 1 ? ae(
          h,
          g,
          v,
          _,
          S,
          O,
          F,
          C,
          I
        ) : L & 6 ? Se(
          h,
          g,
          v,
          _,
          S,
          O,
          F,
          C,
          I
        ) : L & 64 || L & 128 ? P.process(
          h,
          g,
          v,
          _,
          S,
          O,
          F,
          C,
          I,
          ve
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", P, `(${typeof P})`);
    }
    z != null && S && Wr(z, h && h.ref, O, g || h, !g);
  }, A = (h, g, v, _) => {
    if (h == null)
      i(
        g.el = a(g.children),
        v,
        _
      );
    else {
      const S = g.el = h.el;
      g.children !== h.children && l(S, g.children);
    }
  }, k = (h, g, v, _) => {
    h == null ? i(
      g.el = c(g.children || ""),
      v,
      _
    ) : g.el = h.el;
  }, b = (h, g, v, _) => {
    [h.el, h.anchor] = m(
      h.children,
      g,
      v,
      _,
      h.el,
      h.anchor
    );
  }, x = (h, g, v, _) => {
    if (g.children !== h.children) {
      const S = p(h.anchor);
      T(h), [g.el, g.anchor] = m(
        g.children,
        v,
        S,
        _
      );
    } else
      g.el = h.el, g.anchor = h.anchor;
  }, V = ({ el: h, anchor: g }, v, _) => {
    let S;
    for (; h && h !== g; )
      S = p(h), i(h, v, _), h = S;
    i(g, v, _);
  }, T = ({ el: h, anchor: g }) => {
    let v;
    for (; h && h !== g; )
      v = p(h), o(h), h = v;
    o(g);
  }, ae = (h, g, v, _, S, O, F, C, I) => {
    F = F || g.type === "svg", h == null ? X(
      g,
      v,
      _,
      S,
      O,
      F,
      C,
      I
    ) : E(
      h,
      g,
      S,
      O,
      F,
      C,
      I
    );
  }, X = (h, g, v, _, S, O, F, C) => {
    let I, P;
    const { type: z, props: L, shapeFlag: U, transition: J, dirs: oe } = h;
    if (I = h.el = s(
      h.type,
      O,
      L && L.is,
      L
    ), U & 8 ? u(I, h.children) : U & 16 && D(
      h.children,
      I,
      null,
      _,
      S,
      O && z !== "foreignObject",
      F,
      C
    ), oe && Zt(h, null, _, "created"), R(I, h, h.scopeId, F, _), L) {
      for (const fe in L)
        fe !== "value" && !io(fe) && r(
          I,
          fe,
          null,
          L[fe],
          O,
          h.children,
          _,
          S,
          M
        );
      "value" in L && r(I, "value", null, L.value), (P = L.onVnodeBeforeMount) && dt(P, _, h);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(I, "__vnode", {
      value: h,
      enumerable: !1
    }), Object.defineProperty(I, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), oe && Zt(h, null, _, "beforeMount");
    const ge = (!S || S && !S.pendingBranch) && J && !J.persisted;
    ge && J.beforeEnter(I), i(I, g, v), ((P = L && L.onVnodeMounted) || ge || oe) && Le(() => {
      P && dt(P, _, h), ge && J.enter(I), oe && Zt(h, null, _, "mounted");
    }, S);
  }, R = (h, g, v, _, S) => {
    if (v && f(h, v), _)
      for (let O = 0; O < _.length; O++)
        f(h, _[O]);
    if (S) {
      let O = S.subTree;
      if (process.env.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = Vl(O.children) || O), g === O) {
        const F = S.vnode;
        R(
          h,
          F,
          F.scopeId,
          F.slotScopeIds,
          S.parent
        );
      }
    }
  }, D = (h, g, v, _, S, O, F, C, I = 0) => {
    for (let P = I; P < h.length; P++) {
      const z = h[P] = C ? jt(h[P]) : rt(h[P]);
      w(
        null,
        z,
        g,
        v,
        _,
        S,
        O,
        F,
        C
      );
    }
  }, E = (h, g, v, _, S, O, F) => {
    const C = g.el = h.el;
    let { patchFlag: I, dynamicChildren: P, dirs: z } = g;
    I |= h.patchFlag & 16;
    const L = h.props || he, U = g.props || he;
    let J;
    v && en(v, !1), (J = U.onVnodeBeforeUpdate) && dt(J, v, g, h), z && Zt(g, h, v, "beforeUpdate"), v && en(v, !0), process.env.NODE_ENV !== "production" && fn && (I = 0, F = !1, P = null);
    const oe = S && g.type !== "foreignObject";
    if (P ? (W(
      h.dynamicChildren,
      P,
      C,
      v,
      _,
      oe,
      O
    ), process.env.NODE_ENV !== "production" && co(h, g)) : F || Ae(
      h,
      g,
      C,
      null,
      v,
      _,
      oe,
      O,
      !1
    ), I > 0) {
      if (I & 16)
        B(
          C,
          g,
          L,
          U,
          v,
          _,
          S
        );
      else if (I & 2 && L.class !== U.class && r(C, "class", null, U.class, S), I & 4 && r(C, "style", L.style, U.style, S), I & 8) {
        const ge = g.dynamicProps;
        for (let fe = 0; fe < ge.length; fe++) {
          const _e = ge[fe], et = L[_e], Pn = U[_e];
          (Pn !== et || _e === "value") && r(
            C,
            _e,
            et,
            Pn,
            S,
            h.children,
            v,
            _,
            M
          );
        }
      }
      I & 1 && h.children !== g.children && u(C, g.children);
    } else
      !F && P == null && B(
        C,
        g,
        L,
        U,
        v,
        _,
        S
      );
    ((J = U.onVnodeUpdated) || z) && Le(() => {
      J && dt(J, v, g, h), z && Zt(g, h, v, "updated");
    }, _);
  }, W = (h, g, v, _, S, O, F) => {
    for (let C = 0; C < g.length; C++) {
      const I = h[C], P = g[C], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rn(I, P) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 70) ? d(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      w(
        I,
        P,
        z,
        null,
        _,
        S,
        O,
        F,
        !0
      );
    }
  }, B = (h, g, v, _, S, O, F) => {
    if (v !== _) {
      if (v !== he)
        for (const C in v)
          !io(C) && !(C in _) && r(
            h,
            C,
            v[C],
            null,
            F,
            g.children,
            S,
            O,
            M
          );
      for (const C in _) {
        if (io(C))
          continue;
        const I = _[C], P = v[C];
        I !== P && C !== "value" && r(
          h,
          C,
          P,
          I,
          F,
          g.children,
          S,
          O,
          M
        );
      }
      "value" in _ && r(h, "value", v.value, _.value);
    }
  }, te = (h, g, v, _, S, O, F, C, I) => {
    const P = g.el = h ? h.el : a(""), z = g.anchor = h ? h.anchor : a("");
    let { patchFlag: L, dynamicChildren: U, slotScopeIds: J } = g;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (fn || L & 2048) && (L = 0, I = !1, U = null), J && (C = C ? C.concat(J) : J), h == null ? (i(P, v, _), i(z, v, _), D(
      g.children,
      v,
      z,
      S,
      O,
      F,
      C,
      I
    )) : L > 0 && L & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (W(
      h.dynamicChildren,
      U,
      v,
      S,
      O,
      F,
      C
    ), process.env.NODE_ENV !== "production" ? co(h, g) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (g.key != null || S && g === S.subTree) && co(
        h,
        g,
        !0
        /* shallow */
      )
    )) : Ae(
      h,
      g,
      v,
      z,
      S,
      O,
      F,
      C,
      I
    );
  }, Se = (h, g, v, _, S, O, F, C, I) => {
    g.slotScopeIds = C, h == null ? g.shapeFlag & 512 ? S.ctx.activate(
      g,
      v,
      _,
      F,
      I
    ) : pe(
      g,
      v,
      _,
      S,
      O,
      F,
      I
    ) : re(h, g, I);
  }, pe = (h, g, v, _, S, O, F) => {
    const C = h.component = Gf(
      h,
      _,
      S
    );
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && Ip(C), process.env.NODE_ENV !== "production" && (ro(h), Dt(C, "mount")), Xi(h) && (C.ctx.renderer = ve), process.env.NODE_ENV !== "production" && Dt(C, "init"), Jf(C), process.env.NODE_ENV !== "production" && Ct(C, "init"), C.asyncDep) {
      if (S && S.registerDep(C, q), !h.el) {
        const I = C.subTree = Ce(Te);
        k(null, I, g, v);
      }
      return;
    }
    q(
      C,
      h,
      g,
      v,
      S,
      O,
      F
    ), process.env.NODE_ENV !== "production" && (so(), Ct(C, "mount"));
  }, re = (h, g, v) => {
    const _ = g.component = h.component;
    if (Yp(h, g, v))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && ro(g), ne(_, g, v), process.env.NODE_ENV !== "production" && so();
        return;
      } else
        _.next = g, Bp(_.update), _.update();
    else
      g.el = h.el, _.vnode = g;
  }, q = (h, g, v, _, S, O, F) => {
    const C = () => {
      if (h.isMounted) {
        let { next: z, bu: L, u: U, parent: J, vnode: oe } = h, ge = z, fe;
        process.env.NODE_ENV !== "production" && ro(z || h.vnode), en(h, !1), z ? (z.el = oe.el, ne(h, z, F)) : z = oe, L && An(L), (fe = z.props && z.props.onVnodeBeforeUpdate) && dt(fe, J, z, oe), en(h, !0), process.env.NODE_ENV !== "production" && Dt(h, "render");
        const _e = hr(h);
        process.env.NODE_ENV !== "production" && Ct(h, "render");
        const et = h.subTree;
        h.subTree = _e, process.env.NODE_ENV !== "production" && Dt(h, "patch"), w(
          et,
          _e,
          // parent may have changed if it's in a teleport
          d(et.el),
          // anchor may have changed if it's in a fragment
          H(et),
          h,
          S,
          O
        ), process.env.NODE_ENV !== "production" && Ct(h, "patch"), z.el = _e.el, ge === null && Jp(h, _e.el), U && Le(U, S), (fe = z.props && z.props.onVnodeUpdated) && Le(
          () => dt(fe, J, z, oe),
          S
        ), process.env.NODE_ENV !== "production" && Fl(h), process.env.NODE_ENV !== "production" && so();
      } else {
        let z;
        const { el: L, props: U } = g, { bm: J, m: oe, parent: ge } = h, fe = pi(g);
        if (en(h, !1), J && An(J), !fe && (z = U && U.onVnodeBeforeMount) && dt(z, ge, g), en(h, !0), L && Z) {
          const _e = () => {
            process.env.NODE_ENV !== "production" && Dt(h, "render"), h.subTree = hr(h), process.env.NODE_ENV !== "production" && Ct(h, "render"), process.env.NODE_ENV !== "production" && Dt(h, "hydrate"), Z(
              L,
              h.subTree,
              h,
              S,
              null
            ), process.env.NODE_ENV !== "production" && Ct(h, "hydrate");
          };
          fe ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && _e()
          ) : _e();
        } else {
          process.env.NODE_ENV !== "production" && Dt(h, "render");
          const _e = h.subTree = hr(h);
          process.env.NODE_ENV !== "production" && Ct(h, "render"), process.env.NODE_ENV !== "production" && Dt(h, "patch"), w(
            null,
            _e,
            v,
            _,
            h,
            S,
            O
          ), process.env.NODE_ENV !== "production" && Ct(h, "patch"), g.el = _e.el;
        }
        if (oe && Le(oe, S), !fe && (z = U && U.onVnodeMounted)) {
          const _e = g;
          Le(
            () => dt(z, ge, _e),
            S
          );
        }
        (g.shapeFlag & 256 || ge && pi(ge.vnode) && ge.vnode.shapeFlag & 256) && h.a && Le(h.a, S), h.isMounted = !0, process.env.NODE_ENV !== "production" && Hp(h), g = v = _ = null;
      }
    }, I = h.effect = new Ds(
      C,
      () => Ko(P),
      h.scope
      // track it in component's effect scope
    ), P = h.update = () => I.run();
    P.id = h.uid, en(h, !0), process.env.NODE_ENV !== "production" && (I.onTrack = h.rtc ? (z) => An(h.rtc, z) : void 0, I.onTrigger = h.rtg ? (z) => An(h.rtg, z) : void 0, P.ownerInstance = h), P();
  }, ne = (h, g, v) => {
    g.component = h;
    const _ = h.vnode.props;
    h.vnode = g, h.next = null, Tf(h, g.props, _, v), Rf(h, g.children, v), xn(), xa(), Sn();
  }, Ae = (h, g, v, _, S, O, F, C, I = !1) => {
    const P = h && h.children, z = h ? h.shapeFlag : 0, L = g.children, { patchFlag: U, shapeFlag: J } = g;
    if (U > 0) {
      if (U & 128) {
        Re(
          P,
          L,
          v,
          _,
          S,
          O,
          F,
          C,
          I
        );
        return;
      } else if (U & 256) {
        Pt(
          P,
          L,
          v,
          _,
          S,
          O,
          F,
          C,
          I
        );
        return;
      }
    }
    J & 8 ? (z & 16 && M(P, S, O), L !== P && u(v, L)) : z & 16 ? J & 16 ? Re(
      P,
      L,
      v,
      _,
      S,
      O,
      F,
      C,
      I
    ) : M(P, S, O, !0) : (z & 8 && u(v, ""), J & 16 && D(
      L,
      v,
      _,
      S,
      O,
      F,
      C,
      I
    ));
  }, Pt = (h, g, v, _, S, O, F, C, I) => {
    h = h || Fn, g = g || Fn;
    const P = h.length, z = g.length, L = Math.min(P, z);
    let U;
    for (U = 0; U < L; U++) {
      const J = g[U] = I ? jt(g[U]) : rt(g[U]);
      w(
        h[U],
        J,
        v,
        null,
        S,
        O,
        F,
        C,
        I
      );
    }
    P > z ? M(
      h,
      S,
      O,
      !0,
      !1,
      L
    ) : D(
      g,
      v,
      _,
      S,
      O,
      F,
      C,
      I,
      L
    );
  }, Re = (h, g, v, _, S, O, F, C, I) => {
    let P = 0;
    const z = g.length;
    let L = h.length - 1, U = z - 1;
    for (; P <= L && P <= U; ) {
      const J = h[P], oe = g[P] = I ? jt(g[P]) : rt(g[P]);
      if (rn(J, oe))
        w(
          J,
          oe,
          v,
          null,
          S,
          O,
          F,
          C,
          I
        );
      else
        break;
      P++;
    }
    for (; P <= L && P <= U; ) {
      const J = h[L], oe = g[U] = I ? jt(g[U]) : rt(g[U]);
      if (rn(J, oe))
        w(
          J,
          oe,
          v,
          null,
          S,
          O,
          F,
          C,
          I
        );
      else
        break;
      L--, U--;
    }
    if (P > L) {
      if (P <= U) {
        const J = U + 1, oe = J < z ? g[J].el : _;
        for (; P <= U; )
          w(
            null,
            g[P] = I ? jt(g[P]) : rt(g[P]),
            v,
            oe,
            S,
            O,
            F,
            C,
            I
          ), P++;
      }
    } else if (P > U)
      for (; P <= L; )
        j(h[P], S, O, !0), P++;
    else {
      const J = P, oe = P, ge = /* @__PURE__ */ new Map();
      for (P = oe; P <= U; P++) {
        const $e = g[P] = I ? jt(g[P]) : rt(g[P]);
        $e.key != null && (process.env.NODE_ENV !== "production" && ge.has($e.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify($e.key),
          "Make sure keys are unique."
        ), ge.set($e.key, P));
      }
      let fe, _e = 0;
      const et = U - oe + 1;
      let Pn = !1, ua = 0;
      const Wn = new Array(et);
      for (P = 0; P < et; P++)
        Wn[P] = 0;
      for (P = J; P <= L; P++) {
        const $e = h[P];
        if (_e >= et) {
          j($e, S, O, !0);
          continue;
        }
        let ut;
        if ($e.key != null)
          ut = ge.get($e.key);
        else
          for (fe = oe; fe <= U; fe++)
            if (Wn[fe - oe] === 0 && rn($e, g[fe])) {
              ut = fe;
              break;
            }
        ut === void 0 ? j($e, S, O, !0) : (Wn[ut - oe] = P + 1, ut >= ua ? ua = ut : Pn = !0, w(
          $e,
          g[ut],
          v,
          null,
          S,
          O,
          F,
          C,
          I
        ), _e++);
      }
      const da = Pn ? zf(Wn) : Fn;
      for (fe = da.length - 1, P = et - 1; P >= 0; P--) {
        const $e = oe + P, ut = g[$e], pa = $e + 1 < z ? g[$e + 1].el : _;
        Wn[P] === 0 ? w(
          null,
          ut,
          v,
          pa,
          S,
          O,
          F,
          C,
          I
        ) : Pn && (fe < 0 || P !== da[fe] ? He(ut, v, pa, 2) : fe--);
      }
    }
  }, He = (h, g, v, _, S = null) => {
    const { el: O, type: F, transition: C, children: I, shapeFlag: P } = h;
    if (P & 6) {
      He(h.component.subTree, g, v, _);
      return;
    }
    if (P & 128) {
      h.suspense.move(g, v, _);
      return;
    }
    if (P & 64) {
      F.move(h, g, v, ve);
      return;
    }
    if (F === ke) {
      i(O, g, v);
      for (let L = 0; L < I.length; L++)
        He(I[L], g, v, _);
      i(h.anchor, g, v);
      return;
    }
    if (F === lo) {
      V(h, g, v);
      return;
    }
    if (_ !== 2 && P & 1 && C)
      if (_ === 0)
        C.beforeEnter(O), i(O, g, v), Le(() => C.enter(O), S);
      else {
        const { leave: L, delayLeave: U, afterLeave: J } = C, oe = () => i(O, g, v), ge = () => {
          L(O, () => {
            oe(), J && J();
          });
        };
        U ? U(O, oe, ge) : ge();
      }
    else
      i(O, g, v);
  }, j = (h, g, v, _ = !1, S = !1) => {
    const {
      type: O,
      props: F,
      ref: C,
      children: I,
      dynamicChildren: P,
      shapeFlag: z,
      patchFlag: L,
      dirs: U
    } = h;
    if (C != null && Wr(C, null, v, h, !0), z & 256) {
      g.ctx.deactivate(h);
      return;
    }
    const J = z & 1 && U, oe = !pi(h);
    let ge;
    if (oe && (ge = F && F.onVnodeBeforeUnmount) && dt(ge, g, h), z & 6)
      $(h.component, v, _);
    else {
      if (z & 128) {
        h.suspense.unmount(v, _);
        return;
      }
      J && Zt(h, null, g, "beforeUnmount"), z & 64 ? h.type.remove(
        h,
        g,
        v,
        S,
        ve,
        _
      ) : P && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== ke || L > 0 && L & 64) ? M(
        P,
        g,
        v,
        !1,
        !0
      ) : (O === ke && L & 384 || !S && z & 16) && M(I, g, v), _ && Ee(h);
    }
    (oe && (ge = F && F.onVnodeUnmounted) || J) && Le(() => {
      ge && dt(ge, g, h), J && Zt(h, null, g, "unmounted");
    }, v);
  }, Ee = (h) => {
    const { type: g, el: v, anchor: _, transition: S } = h;
    if (g === ke) {
      process.env.NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && S && !S.persisted ? h.children.forEach((F) => {
        F.type === Te ? o(F.el) : Ee(F);
      }) : y(v, _);
      return;
    }
    if (g === lo) {
      T(h);
      return;
    }
    const O = () => {
      o(v), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (h.shapeFlag & 1 && S && !S.persisted) {
      const { leave: F, delayLeave: C } = S, I = () => F(v, O);
      C ? C(h.el, O, I) : I();
    } else
      O();
  }, y = (h, g) => {
    let v;
    for (; h !== g; )
      v = p(h), o(h), h = v;
    o(g);
  }, $ = (h, g, v) => {
    process.env.NODE_ENV !== "production" && h.type.__hmrId && Fp(h);
    const { bum: _, scope: S, update: O, subTree: F, um: C } = h;
    _ && An(_), S.stop(), O && (O.active = !1, j(F, h, g, v)), C && Le(C, g), Le(() => {
      h.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve()), process.env.NODE_ENV !== "production" && jp(h);
  }, M = (h, g, v, _ = !1, S = !1, O = 0) => {
    for (let F = O; F < h.length; F++)
      j(h[F], g, v, _, S);
  }, H = (h) => h.shapeFlag & 6 ? H(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : p(h.anchor || h.el), ce = (h, g, v) => {
    h == null ? g._vnode && j(g._vnode, null, null, !0) : w(g._vnode || null, h, g, null, null, null, v), xa(), Tl(), g._vnode = h;
  }, ve = {
    p: w,
    um: j,
    m: He,
    r: Ee,
    mt: pe,
    mc: D,
    pc: Ae,
    pbc: W,
    n: H,
    o: e
  };
  let ee, Z;
  return t && ([ee, Z] = t(
    ve
  )), {
    render: ce,
    hydrate: ee,
    createApp: Cf(ce, ee)
  };
}
function en({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function co(e, t, n = !1) {
  const i = e.children, o = t.children;
  if (Q(i) && Q(o))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let a = o[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = jt(o[r]), a.el = s.el), n || co(s, a)), a.type === Vi && (a.el = s.el), process.env.NODE_ENV !== "production" && a.type === Te && !a.el && (a.el = s.el);
    }
}
function zf(e) {
  const t = e.slice(), n = [0];
  let i, o, r, s, a;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const l = e[i];
    if (l !== 0) {
      if (o = n[n.length - 1], e[o] < l) {
        t[i] = o, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        a = r + s >> 1, e[n[a]] < l ? r = a + 1 : s = a;
      l < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
const Qf = (e) => e.__isTeleport, ke = Symbol.for("v-fgt"), Vi = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), lo = Symbol.for("v-stc"), fi = [];
let at = null;
function le(e = !1) {
  fi.push(at = e ? null : []);
}
function qf() {
  fi.pop(), at = fi[fi.length - 1] || null;
}
let _i = 1;
function Fa(e) {
  _i += e;
}
function au(e) {
  return e.dynamicChildren = _i > 0 ? at || Fn : null, qf(), _i > 0 && at && at.push(e), e;
}
function be(e, t, n, i, o, r) {
  return au(
    Y(
      e,
      t,
      n,
      i,
      o,
      r,
      !0
      /* isBlock */
    )
  );
}
function Tt(e, t, n, i, o) {
  return au(
    Ce(
      e,
      t,
      n,
      i,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rn(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && On.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Uf = (...e) => lu(
  ...e
), tr = "__vInternal", cu = ({ key: e }) => e ?? null, uo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || ye(e) || K(e) ? { i: De, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, i = 0, o = null, r = e === ke ? 0 : 1, s = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cu(t),
    ref: t && uo(t),
    scopeId: Yo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: De
  };
  return a ? (js(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= we(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && N("VNode created with invalid key (NaN). VNode type:", c.type), _i > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  at && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && at.push(c), c;
}
const Ce = process.env.NODE_ENV !== "production" ? Uf : lu;
function lu(e, t = null, n = null, i = 0, o = null, r = !1) {
  if ((!e || e === Kl) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Te), Hn(e)) {
    const a = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(a, n), _i > 0 && !r && at && (a.shapeFlag & 6 ? at[at.indexOf(e)] = a : at.push(a)), a.patchFlag |= -2, a;
  }
  if (hu(e) && (e = e.__vccOpts), t) {
    t = nt(t);
    let { class: a, style: c } = t;
    a && !we(a) && (t.class = mt(a)), ue(c) && (ko(c) && !Q(c) && (c = me({}, c)), t.style = jo(c));
  }
  const s = we(e) ? 1 : Zp(e) ? 128 : Qf(e) ? 64 : ue(e) ? 4 : K(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && ko(e) && (e = G(e), N(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Y(
    e,
    t,
    n,
    i,
    o,
    s,
    r,
    !0
  );
}
function nt(e) {
  return e ? ko(e) || tr in e ? me({}, e) : e : null;
}
function St(e, t, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: s } = e, a = t ? To(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && cu(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Q(o) ? o.concat(uo(t)) : [o, uo(t)] : uo(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && Q(s) ? s.map(uu) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function uu(e) {
  const t = St(e);
  return Q(e.children) && (t.children = e.children.map(uu)), t;
}
function Pi(e = " ", t = 0) {
  return Ce(Vi, null, e, t);
}
function Bt(e = "", t = !1) {
  return t ? (le(), Tt(Te, null, e)) : Ce(Te, null, e);
}
function rt(e) {
  return e == null || typeof e == "boolean" ? Ce(Te) : Q(e) ? Ce(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? jt(e) : Ce(Vi, null, String(e));
}
function jt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), js(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(tr in t) ? t._ctx = De : o === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    K(t) ? (t = { default: t, _ctx: De }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Pi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function To(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const o in i)
      if (o === "class")
        t.class !== i.class && (t.class = mt([t.class, i.class]));
      else if (o === "style")
        t.style = jo([t.style, i.style]);
      else if (Ii(o)) {
        const r = t[o], s = i[o];
        s && r !== s && !(Q(r) && r.includes(s)) && (t[o] = r ? [].concat(r, s) : s);
      } else
        o !== "" && (t[o] = i[o]);
  }
  return t;
}
function dt(e, t, n, i = null) {
  Ze(e, t, 7, [
    n,
    i
  ]);
}
const Wf = eu();
let Kf = 0;
function Gf(e, t, n) {
  const i = e.type, o = (t ? t.appContext : e.appContext) || Wf, r = {
    uid: Kf++,
    vnode: e,
    type: i,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new ul(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: nu(i, o),
    emitsOptions: Xl(i, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = bf(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Up.bind(null, r), e.ce && e.ce(r), r;
}
let Ne = null;
const Un = () => Ne || De;
let zs, En, $a = "__VUE_INSTANCE_SETTERS__";
(En = So()[$a]) || (En = So()[$a] = []), En.push((e) => Ne = e), zs = (e) => {
  En.length > 1 ? En.forEach((t) => t(e)) : En[0](e);
};
const Ln = (e) => {
  zs(e), e.scope.on();
}, gn = () => {
  Ne && Ne.scope.off(), zs(null);
}, Yf = /* @__PURE__ */ Jt("slot,component");
function Kr(e, t) {
  const n = t.isNativeTag || ol;
  (Yf(e) || n(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function du(e) {
  return e.vnode.shapeFlag & 4;
}
let Ei = !1;
function Jf(e, t = !1) {
  Ei = t;
  const { props: n, children: i } = e.vnode, o = du(e);
  Af(e, n, o, t), Vf(e, i);
  const r = o ? Zf(e, t) : void 0;
  return Ei = !1, r;
}
function Zf(e, t) {
  var n;
  const i = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (i.name && Kr(i.name, e.appContext.config), i.components) {
      const r = Object.keys(i.components);
      for (let s = 0; s < r.length; s++)
        Kr(r[s], e.appContext.config);
    }
    if (i.directives) {
      const r = Object.keys(i.directives);
      for (let s = 0; s < r.length; s++)
        Ll(r[s]);
    }
    i.compilerOptions && pu() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ot(new Proxy(e.ctx, Jl)), process.env.NODE_ENV !== "production" && wf(e);
  const { setup: o } = i;
  if (o) {
    const r = e.setupContext = o.length > 1 ? th(e) : null;
    Ln(e), xn();
    const s = Ot(
      o,
      e,
      0,
      [process.env.NODE_ENV !== "production" ? ni(e.props) : e.props, r]
    );
    if (Sn(), gn(), Ps(s)) {
      if (s.then(gn, gn), t)
        return s.then((a) => {
          Xa(e, a, t);
        }).catch((a) => {
          Wo(a, e, 0);
        });
      if (e.asyncDep = s, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = i.name) != null ? n : "Anonymous";
        N(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xa(e, s, t);
  } else
    fu(e, t);
}
function Xa(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) ? (process.env.NODE_ENV !== "production" && Hn(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = kl(t), process.env.NODE_ENV !== "production" && xf(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), fu(e, n);
}
let Gr;
const pu = () => !Gr;
function fu(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Gr && !i.render) {
      const o = i.template || Hs(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && Dt(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: c } = i, l = me(
          me(
            {
              isCustomElement: r,
              delimiters: a
            },
            s
          ),
          c
        );
        i.render = Gr(o, l), process.env.NODE_ENV !== "production" && Ct(e, "compile");
      }
    }
    e.render = i.render || Be;
  }
  Ln(e), xn(), _f(e), Sn(), gn(), process.env.NODE_ENV !== "production" && !i.render && e.render === Be && !t && (i.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : N("Component is missing template or render function."));
}
function Va(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return Do(), Me(e, "get", "$attrs"), t[n];
      },
      set() {
        return N("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return N("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Me(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function eh(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Me(e, "get", "$slots"), t[n];
    }
  }));
}
function th(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (Q(n) ? i = "array" : ye(n) && (i = "ref")), i !== "object" && N(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Va(e);
    },
    get slots() {
      return eh(e);
    },
    get emit() {
      return (n, ...i) => e.emit(n, ...i);
    },
    expose: t
  }) : {
    get attrs() {
      return Va(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function nr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(kl(ot(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in hn)
          return hn[n](e);
      },
      has(t, n) {
        return n in t || n in hn;
      }
    }));
}
const nh = /(?:^|[-_])(\w)/g, ih = (e) => e.replace(nh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qs(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ir(e, t, n = !1) {
  let i = Qs(t);
  if (!i && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (i = o[1]);
  }
  if (!i && e && e.parent) {
    const o = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    i = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return i ? ih(i) : n ? "App" : "Anonymous";
}
function hu(e) {
  return K(e) && "__vccOpts" in e;
}
const xe = (e, t) => Pp(e, t, Ei);
function qs(e, t, n) {
  const i = arguments.length;
  return i === 2 ? ue(t) && !Q(t) ? Hn(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Hn(n) && (n = [n]), Ce(e, t, n));
}
const oh = Symbol.for("v-scx"), rh = () => {
  {
    const e = ct(oh);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function yr(e) {
  return !!(e && e.__v_isShallow);
}
function sh() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, i = { style: "color:#9d288c" }, o = {
    header(d) {
      return ue(d) ? d.__isVue ? ["div", e, "VueInstance"] : ye(d) ? [
        "div",
        {},
        ["span", e, u(d)],
        "<",
        a(d.value),
        ">"
      ] : vt(d) ? [
        "div",
        {},
        ["span", e, yr(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${Gt(d) ? " (readonly)" : ""}`
      ] : Gt(d) ? [
        "div",
        {},
        ["span", e, yr(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const p = [];
    d.type.props && d.props && p.push(s("props", G(d.props))), d.setupState !== he && p.push(s("setup", d.setupState)), d.data !== he && p.push(s("data", G(d.data)));
    const f = c(d, "computed");
    f && p.push(s("computed", f));
    const m = c(d, "inject");
    return m && p.push(s("injected", m)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), p;
  }
  function s(d, p) {
    return p = me({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((f) => [
          "div",
          {},
          ["span", i, f + ": "],
          a(p[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, p = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", i, d] : ue(d) ? ["object", { object: p ? G(d) : d }] : ["span", n, String(d)];
  }
  function c(d, p) {
    const f = d.type;
    if (K(f))
      return;
    const m = {};
    for (const w in d.ctx)
      l(f, w, p) && (m[w] = d.ctx[w]);
    return m;
  }
  function l(d, p, f) {
    const m = d[f];
    if (Q(m) && m.includes(p) || ue(m) && p in m || d.extends && l(d.extends, p, f) || d.mixins && d.mixins.some((w) => l(w, p, f)))
      return !0;
  }
  function u(d) {
    return yr(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ra = "3.3.4", ah = "http://www.w3.org/2000/svg", sn = typeof document < "u" ? document : null, Ha = sn && /* @__PURE__ */ sn.createElement("template"), ch = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const o = t ? sn.createElementNS(ah, e) : sn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && i && i.multiple != null && o.setAttribute("multiple", i.multiple), o;
  },
  createText: (e) => sn.createTextNode(e),
  createComment: (e) => sn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => sn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, o, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Ha.innerHTML = i ? `<svg>${e}</svg>` : e;
      const a = Ha.content;
      if (i) {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function lh(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function uh(e, t, n) {
  const i = e.style, o = we(n);
  if (n && !o) {
    if (t && !we(t))
      for (const r in t)
        n[r] == null && Yr(i, r, "");
    for (const r in n)
      Yr(i, r, n[r]);
  } else {
    const r = i.display;
    o ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (i.display = r);
  }
}
const dh = /[^\\];\s*$/, La = /\s*!important$/;
function Yr(e, t, n) {
  if (Q(n))
    n.forEach((i) => Yr(e, t, i));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && dh.test(n) && N(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ph(e, t);
    La.test(n) ? e.setProperty(
      je(i),
      n.replace(La, ""),
      "important"
    ) : e[i] = n;
  }
}
const ja = ["Webkit", "Moz", "ms"], br = {};
function ph(e, t) {
  const n = br[t];
  if (n)
    return n;
  let i = Ue(t);
  if (i !== "filter" && i in e)
    return br[t] = i;
  i = vn(i);
  for (let o = 0; o < ja.length; o++) {
    const r = ja[o] + i;
    if (r in e)
      return br[t] = r;
  }
  return t;
}
const za = "http://www.w3.org/1999/xlink";
function fh(e, t, n, i, o) {
  if (i && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(za, t.slice(6, t.length)) : e.setAttributeNS(za, t, n);
  else {
    const r = Vd(t);
    n == null || r && !cl(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function hh(e, t, n, i, o, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    i && s(i, o, r), e[t] = n ?? "";
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    e._value = n;
    const l = a === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    l !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = cl(n) : n == null && l === "string" ? (n = "", c = !0) : l === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !c && N(
      `Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  c && e.removeAttribute(t);
}
function Tn(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function gh(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
function mh(e, t, n, i, o = null) {
  const r = e._vei || (e._vei = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [a, c] = vh(t);
    if (i) {
      const l = r[t] = wh(i, o);
      Tn(e, a, l, c);
    } else
      s && (gh(e, a, s, c), r[t] = void 0);
  }
}
const Qa = /(?:Once|Passive|Capture)$/;
function vh(e) {
  let t;
  if (Qa.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Qa); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : je(e.slice(2)), t];
}
let wr = 0;
const yh = /* @__PURE__ */ Promise.resolve(), bh = () => wr || (yh.then(() => wr = 0), wr = Date.now());
function wh(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Ze(
      xh(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = bh(), n;
}
function xh(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((i) => (o) => !o._stopped && i && i(o));
  } else
    return t;
}
const qa = /^on[a-z]/, Sh = (e, t, n, i, o = !1, r, s, a, c) => {
  t === "class" ? lh(e, i, o) : t === "style" ? uh(e, n, i) : Ii(t) ? wo(t) || mh(e, t, n, i, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _h(e, t, i, o)) ? hh(
    e,
    t,
    i,
    r,
    s,
    a,
    c
  ) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), fh(e, t, i, o));
};
function _h(e, t, n, i) {
  return i ? !!(t === "innerHTML" || t === "textContent" || t in e && qa.test(t) && K(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || qa.test(t) && we(n) ? !1 : t in e;
}
function Ph(e, t) {
  const n = $i(e);
  class i extends Us {
    constructor(r) {
      super(n, r, t);
    }
  }
  return i.def = n, i;
}
const Eh = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Us extends Eh {
  constructor(t, n = {}, i) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && N(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Rn(() => {
      this._connected || (tc(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const o of i)
        this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (i, o = !1) => {
      const { props: r, styles: s } = i;
      let a;
      if (r && !Q(r))
        for (const c in r) {
          const l = r[c];
          (l === Number || l && l.type === Number) && (c in this._props && (this._props[c] = Br(this._props[c])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ue(c)] = !0);
        }
      this._numberProps = a, o && this._resolveProps(i), this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, i = Q(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && i.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of i.map(Ue))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const i = Ue(t);
    this._numberProps && this._numberProps[i] && (n = Br(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, o = !0) {
    n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), i && (n === !0 ? this.setAttribute(je(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(je(t), n + "") : n || this.removeAttribute(je(t))));
  }
  _update() {
    tc(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ce(this._def, me({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, s) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: s
          })
        );
      };
      n.emit = (r, ...s) => {
        i(r, s), je(r) !== r && i(je(r), s);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Us) {
          n.parent = o._instance, n.provides = o._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(i);
    });
  }
}
const $t = "transition", Gn = "animation", or = (e, { slots: t }) => qs(rf, kh(e), t);
or.displayName = "Transition";
const gu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
or.props = /* @__PURE__ */ me(
  {},
  jl,
  gu
);
const tn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ua = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kh(e) {
  const t = {};
  for (const B in e)
    B in gu || (t[B] = e[B]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: l = s,
    appearToClass: u = a,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: f = `${n}-leave-to`
  } = e, m = Nh(o), w = m && m[0], A = m && m[1], {
    onBeforeEnter: k,
    onEnter: b,
    onEnterCancelled: x,
    onLeave: V,
    onLeaveCancelled: T,
    onBeforeAppear: ae = k,
    onAppear: X = b,
    onAppearCancelled: R = x
  } = t, D = (B, te, Se) => {
    nn(B, te ? u : a), nn(B, te ? l : s), Se && Se();
  }, E = (B, te) => {
    B._isLeaving = !1, nn(B, d), nn(B, f), nn(B, p), te && te();
  }, W = (B) => (te, Se) => {
    const pe = B ? X : b, re = () => D(te, B, Se);
    tn(pe, [te, re]), Wa(() => {
      nn(te, B ? c : r), Xt(te, B ? u : a), Ua(pe) || Ka(te, i, w, re);
    });
  };
  return me(t, {
    onBeforeEnter(B) {
      tn(k, [B]), Xt(B, r), Xt(B, s);
    },
    onBeforeAppear(B) {
      tn(ae, [B]), Xt(B, c), Xt(B, l);
    },
    onEnter: W(!1),
    onAppear: W(!0),
    onLeave(B, te) {
      B._isLeaving = !0;
      const Se = () => E(B, te);
      Xt(B, d), Ah(), Xt(B, p), Wa(() => {
        B._isLeaving && (nn(B, d), Xt(B, f), Ua(V) || Ka(B, i, A, Se));
      }), tn(V, [B, Se]);
    },
    onEnterCancelled(B) {
      D(B, !1), tn(x, [B]);
    },
    onAppearCancelled(B) {
      D(B, !0), tn(R, [B]);
    },
    onLeaveCancelled(B) {
      E(B), tn(T, [B]);
    }
  });
}
function Nh(e) {
  if (e == null)
    return null;
  if (ue(e))
    return [xr(e.enter), xr(e.leave)];
  {
    const t = xr(e);
    return [t, t];
  }
}
function xr(e) {
  const t = Br(e);
  return process.env.NODE_ENV !== "production" && Cp(t, "<transition> explicit duration"), t;
}
function Xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function nn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Wa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Dh = 0;
function Ka(e, t, n, i) {
  const o = e._endId = ++Dh, r = () => {
    o === e._endId && i();
  };
  if (n)
    return setTimeout(r, n);
  const { type: s, timeout: a, propCount: c } = Ch(e, t);
  if (!s)
    return i();
  const l = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(l, p), r();
  }, p = (f) => {
    f.target === e && ++u >= c && d();
  };
  setTimeout(() => {
    u < c && d();
  }, a + 1), e.addEventListener(l, p);
}
function Ch(e, t) {
  const n = window.getComputedStyle(e), i = (m) => (n[m] || "").split(", "), o = i(`${$t}Delay`), r = i(`${$t}Duration`), s = Ga(o, r), a = i(`${Gn}Delay`), c = i(`${Gn}Duration`), l = Ga(a, c);
  let u = null, d = 0, p = 0;
  t === $t ? s > 0 && (u = $t, d = s, p = r.length) : t === Gn ? l > 0 && (u = Gn, d = l, p = c.length) : (d = Math.max(s, l), u = d > 0 ? s > l ? $t : Gn : null, p = u ? u === $t ? r.length : c.length : 0);
  const f = u === $t && /\b(transform|all)(,|$)/.test(
    i(`${$t}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: f
  };
}
function Ga(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Ya(n) + Ya(e[i])));
}
function Ya(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ah() {
  return document.body.offsetHeight;
}
const Ja = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => An(t, n) : t;
};
function Oh(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Th = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, o) {
    e._assign = Ja(o);
    const r = i || o.props && o.props.type === "number";
    Tn(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let a = e.value;
      n && (a = a.trim()), r && (a = Tr(a)), e._assign(a);
    }), n && Tn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Tn(e, "compositionstart", Oh), Tn(e, "compositionend", Za), Tn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e._assign = Ja(r), e.composing || document.activeElement === e && e.type !== "range" && (n || i && e.value.trim() === t || (o || e.type === "number") && Tr(e.value) === t))
      return;
    const s = t ?? "";
    e.value !== s && (e.value = s);
  }
}, Bh = ["ctrl", "shift", "alt", "meta"], Mh = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Bh.some((n) => e[`${n}Key`] && !t.includes(n))
}, Jr = (e, t) => (n, ...i) => {
  for (let o = 0; o < t.length; o++) {
    const r = Mh[t[o]];
    if (r && r(n, t))
      return;
  }
  return e(n, ...i);
}, Ih = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Fh = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const i = je(n.key);
  if (t.some((o) => o === i || Ih[o] === i))
    return e(n);
}, Zr = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Yn(e, !0), i.enter(e)) : i.leave(e, () => {
      Yn(e, !1);
    }) : Yn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Yn(e, t);
  }
};
function Yn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const $h = /* @__PURE__ */ me({ patchProp: Sh }, ch);
let ec;
function mu() {
  return ec || (ec = Lf($h));
}
const tc = (...e) => {
  mu().render(...e);
}, Xh = (...e) => {
  const t = mu().createApp(...e);
  process.env.NODE_ENV !== "production" && (Vh(t), Rh(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const o = Hh(i);
    if (!o)
      return;
    const r = t._component;
    !K(r) && !r.render && !r.template && (r.template = o.innerHTML), o.innerHTML = "";
    const s = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function Vh(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Fd(t) || $d(t),
    writable: !1
  });
}
function Rh(e) {
  if (pu()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        N(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return N(i), n;
      },
      set() {
        N(i);
      }
    });
  }
}
function Hh(e) {
  if (we(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && N(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && N(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Lh() {
  sh();
}
process.env.NODE_ENV !== "production" && Lh();
var vu = !1;
function Ki(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Sr(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function jh() {
  return yu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function yu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const zh = typeof Proxy == "function", Qh = "devtools-plugin:setup", qh = "plugin:settings:set";
let kn, es;
function Uh() {
  var e;
  return kn !== void 0 || (typeof window < "u" && window.performance ? (kn = !0, es = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (kn = !0, es = global.perf_hooks.performance) : kn = !1), kn;
}
function Wh() {
  return Uh() ? es.now() : Date.now();
}
class Kh {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const i = {};
    if (t.settings)
      for (const s in t.settings) {
        const a = t.settings[s];
        i[s] = a.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, i);
    try {
      const s = localStorage.getItem(o), a = JSON.parse(s);
      Object.assign(r, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(s) {
        try {
          localStorage.setItem(o, JSON.stringify(s));
        } catch {
        }
        r = s;
      },
      now() {
        return Wh();
      }
    }, n && n.on(qh, (s, a) => {
      s === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, a) => this.target ? this.target.on[a] : (...c) => {
        this.onQueue.push({
          method: a,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...c) => (this.targetQueue.push({
        method: a,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[a](...c)) : (...c) => new Promise((l) => {
        this.targetQueue.push({
          method: a,
          args: c,
          resolve: l
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ws(e, t) {
  const n = e, i = yu(), o = jh(), r = zh && n.enableEarlyProxy;
  if (o && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    o.emit(Qh, e, t);
  else {
    const s = r ? new Kh(n, o) : null;
    (i.__VUE_DEVTOOLS_PLUGINS__ = i.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let ri;
const ki = (e) => ri = e, bu = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function bn(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var bt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(bt || (bt = {}));
const rr = typeof window < "u", hi = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && rr, nc = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Gh(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function Ks(e, t, n) {
  const i = new XMLHttpRequest();
  i.open("GET", e), i.responseType = "blob", i.onload = function() {
    Su(i.response, t, n);
  }, i.onerror = function() {
    console.error("could not download file");
  }, i.send();
}
function wu(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function po(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const fo = typeof navigator == "object" ? navigator : { userAgent: "" }, xu = /* @__PURE__ */ (() => /Macintosh/.test(fo.userAgent) && /AppleWebKit/.test(fo.userAgent) && !/Safari/.test(fo.userAgent))(), Su = rr ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !xu ? Yh : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in fo ? Jh : (
      // Fallback to using FileReader and a popup
      Zh
    )
  )
) : () => {
};
function Yh(e, t = "download", n) {
  const i = document.createElement("a");
  i.download = t, i.rel = "noopener", typeof e == "string" ? (i.href = e, i.origin !== location.origin ? wu(i.href) ? Ks(e, t, n) : (i.target = "_blank", po(i)) : po(i)) : (i.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(i.href);
  }, 4e4), setTimeout(function() {
    po(i);
  }, 0));
}
function Jh(e, t = "download", n) {
  if (typeof e == "string")
    if (wu(e))
      Ks(e, t, n);
    else {
      const i = document.createElement("a");
      i.href = e, i.target = "_blank", setTimeout(function() {
        po(i);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Gh(e, n), t);
}
function Zh(e, t, n, i) {
  if (i = i || open("", "_blank"), i && (i.document.title = i.document.body.innerText = "downloading..."), typeof e == "string")
    return Ks(e, t, n);
  const o = e.type === "application/octet-stream", r = /constructor/i.test(String(nc.HTMLElement)) || "safari" in nc, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || o && r || xu) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let c = a.result;
      if (typeof c != "string")
        throw i = null, new Error("Wrong reader.result type");
      c = s ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = c : location.assign(c), i = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    i ? i.location.assign(a) : location.href = a, i = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function Oe(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Gs(e) {
  return "_a" in e && "install" in e;
}
function _u() {
  if (!("clipboard" in navigator))
    return Oe("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Pu(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Oe('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function eg(e) {
  if (!_u())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Oe("Global state copied to clipboard.");
    } catch (t) {
      if (Pu(t))
        return;
      Oe("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function tg(e) {
  if (!_u())
    try {
      e.state.value = JSON.parse(await navigator.clipboard.readText()), Oe("Global state pasted from clipboard.");
    } catch (t) {
      if (Pu(t))
        return;
      Oe("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function ng(e) {
  try {
    Su(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Oe("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Et;
function ig() {
  Et || (Et = document.createElement("input"), Et.type = "file", Et.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Et.onchange = async () => {
        const i = Et.files;
        if (!i)
          return t(null);
        const o = i.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Et.oncancel = () => t(null), Et.onerror = n, Et.click();
    });
  }
  return e;
}
async function og(e) {
  try {
    const n = await (await ig())();
    if (!n)
      return;
    const { text: i, file: o } = n;
    e.state.value = JSON.parse(i), Oe(`Global state imported from "${o.name}".`);
  } catch (t) {
    Oe("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function it(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Eu = "🍍 Pinia (root)", ts = "_root";
function rg(e) {
  return Gs(e) ? {
    id: ts,
    label: Eu
  } : {
    id: e.$id,
    label: e.$id
  };
}
function sg(e) {
  if (Gs(e)) {
    const n = Array.from(e._s.keys()), i = e._s;
    return {
      state: n.map((r) => ({
        editable: !0,
        key: r,
        value: e.state.value[r]
      })),
      getters: n.filter((r) => i.get(r)._getters).map((r) => {
        const s = i.get(r);
        return {
          editable: !1,
          key: r,
          value: s._getters.reduce((a, c) => (a[c] = s[c], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function ag(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: it(e.type),
    key: it(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function cg(e) {
  switch (e) {
    case bt.direct:
      return "mutation";
    case bt.patchFunction:
      return "$patch";
    case bt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let In = !0;
const ho = [], on = "pinia:mutations", Ie = "pinia", { assign: lg } = Object, Bo = (e) => "🍍 " + e;
function ug(e, t) {
  Ws({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ho,
    app: e
  }, (n) => {
    typeof n.now != "function" && Oe("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: on,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Ie,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            eg(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await tg(t), n.sendInspectorTree(Ie), n.sendInspectorState(Ie);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            ng(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await og(t), n.sendInspectorTree(Ie), n.sendInspectorState(Ie);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (i) => {
            const o = t._s.get(i);
            o ? o._isOptionsAPI ? (o.$reset(), Oe(`Store "${i}" reset.`)) : Oe(`Cannot reset "${i}" store because it's a setup store.`, "warn") : Oe(`Cannot reset "${i}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((i, o) => {
      const r = i.componentInstance && i.componentInstance.proxy;
      if (r && r._pStores) {
        const s = i.componentInstance.proxy._pStores;
        Object.values(s).forEach((a) => {
          i.instanceData.state.push({
            type: Bo(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: G(a.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => a.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(a.$state).reduce((c, l) => (c[l] = a.$state[l], c), {})
            )
          }), a._getters && a._getters.length && i.instanceData.state.push({
            type: Bo(a.$id),
            key: "getters",
            editable: !1,
            value: a._getters.reduce((c, l) => {
              try {
                c[l] = a[l];
              } catch (u) {
                c[l] = u;
              }
              return c;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((i) => {
      if (i.app === e && i.inspectorId === Ie) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), i.rootNodes = (i.filter ? o.filter((r) => "$id" in r ? r.$id.toLowerCase().includes(i.filter.toLowerCase()) : Eu.toLowerCase().includes(i.filter.toLowerCase())) : o).map(rg);
      }
    }), n.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === Ie) {
        const o = i.nodeId === ts ? t : t._s.get(i.nodeId);
        if (!o)
          return;
        o && (i.state = sg(o));
      }
    }), n.on.editInspectorState((i, o) => {
      if (i.app === e && i.inspectorId === Ie) {
        const r = i.nodeId === ts ? t : t._s.get(i.nodeId);
        if (!r)
          return Oe(`store "${i.nodeId}" not found`, "error");
        const { path: s } = i;
        Gs(r) ? s.unshift("state") : (s.length !== 1 || !r._customProperties.has(s[0]) || s[0] in r.$state) && s.unshift("$state"), In = !1, i.set(r, s, i.state.value), In = !0;
      }
    }), n.on.editComponentState((i) => {
      if (i.type.startsWith("🍍")) {
        const o = i.type.replace(/^🍍\s*/, ""), r = t._s.get(o);
        if (!r)
          return Oe(`store "${o}" not found`, "error");
        const { path: s } = i;
        if (s[0] !== "state")
          return Oe(`Invalid path for store "${o}":
${s}
Only state can be modified.`);
        s[0] = "$state", In = !1, i.set(r, s, i.state.value), In = !0;
      }
    });
  });
}
function dg(e, t) {
  ho.includes(Bo(t.$id)) || ho.push(Bo(t.$id)), Ws({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ho,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const i = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: a, name: c, args: l }) => {
      const u = ku++;
      n.addTimelineEvent({
        layerId: on,
        event: {
          time: i(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: it(t.$id),
            action: it(c),
            args: l
          },
          groupId: u
        }
      }), s((d) => {
        an = void 0, n.addTimelineEvent({
          layerId: on,
          event: {
            time: i(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: it(t.$id),
              action: it(c),
              args: l,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        an = void 0, n.addTimelineEvent({
          layerId: on,
          event: {
            time: i(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: it(t.$id),
              action: it(c),
              args: l,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      Qe(() => yt(t[s]), (a, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Ie), In && n.addTimelineEvent({
          layerId: on,
          event: {
            time: i(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: an
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: a }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Ie), !In)
        return;
      const l = {
        time: i(),
        title: cg(a),
        data: lg({ store: it(t.$id) }, ag(s)),
        groupId: an
      };
      an = void 0, a === bt.patchFunction ? l.subtitle = "⤵️" : a === bt.patchObject ? l.subtitle = "🧩" : s && !Array.isArray(s) && (l.subtitle = s.type), s && (l.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: on,
        event: l
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ot((s) => {
      o(s), n.addTimelineEvent({
        layerId: on,
        event: {
          time: i(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: it(t.$id),
            info: it("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Ie), n.sendInspectorState(Ie);
    });
    const { $dispose: r } = t;
    t.$dispose = () => {
      r(), n.notifyComponentUpdate(), n.sendInspectorTree(Ie), n.sendInspectorState(Ie), n.getSettings().logStoreChanges && Oe(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Ie), n.sendInspectorState(Ie), n.getSettings().logStoreChanges && Oe(`"${t.$id}" store installed 🆕`);
  });
}
let ku = 0, an;
function ic(e, t) {
  const n = t.reduce((i, o) => (i[o] = G(e)[o], i), {});
  for (const i in n)
    e[i] = function() {
      const o = ku, r = new Proxy(e, {
        get(...s) {
          return an = o, Reflect.get(...s);
        },
        set(...s) {
          return an = o, Reflect.set(...s);
        }
      });
      return n[i].apply(r, arguments);
    };
}
function pg({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (n.state && (t._isOptionsAPI = !0), typeof n.state == "function") {
      ic(
        // @ts-expect-error: can cast the store...
        t,
        Object.keys(n.actions)
      );
      const i = t._hotUpdate;
      G(t)._hotUpdate = function(o) {
        i.apply(this, arguments), ic(t, Object.keys(o._hmrPayload.actions));
      };
    }
    dg(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function fg() {
  const e = dl(!0), t = e.run(() => Pe({}));
  let n = [], i = [];
  const o = ot({
    install(r) {
      ki(o), o._a = r, r.provide(bu, o), r.config.globalProperties.$pinia = o, hi && ug(r, o), i.forEach((s) => n.push(s)), i = [];
    },
    use(r) {
      return !this._a && !vu ? i.push(r) : n.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return hi && typeof Proxy < "u" && o.use(pg), o;
}
function Nu(e, t) {
  for (const n in t) {
    const i = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    bn(o) && bn(i) && !ye(i) && !vt(i) ? e[n] = Nu(o, i) : e[n] = i;
  }
  return e;
}
const Du = () => {
};
function oc(e, t, n, i = Du) {
  e.push(t);
  const o = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), i());
  };
  return !n && Ns() && pl(o), o;
}
function Nn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function ns(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, i) => e.set(i, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const i = t[n], o = e[n];
    bn(o) && bn(i) && e.hasOwnProperty(n) && !ye(i) && !vt(i) ? e[n] = ns(o, i) : e[n] = i;
  }
  return e;
}
const hg = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function gg(e) {
  return !bn(e) || !e.hasOwnProperty(hg);
}
const { assign: Je } = Object;
function rc(e) {
  return !!(ye(e) && e.effect);
}
function sc(e, t, n, i) {
  const { state: o, actions: r, getters: s } = t, a = n.state.value[e];
  let c;
  function l() {
    !a && (process.env.NODE_ENV === "production" || !i) && (n.state.value[e] = o ? o() : {});
    const u = process.env.NODE_ENV !== "production" && i ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Mn(Pe(o ? o() : {}).value)
    ) : Mn(n.state.value[e]);
    return Je(u, r, Object.keys(s || {}).reduce((d, p) => (process.env.NODE_ENV !== "production" && p in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${e}".`), d[p] = ot(xe(() => {
      ki(n);
      const f = n._s.get(e);
      return s[p].call(f, f);
    })), d), {}));
  }
  return c = is(e, l, t, n, i, !0), c;
}
function is(e, t, n = {}, i, o, r) {
  let s;
  const a = Je({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !i._e.active)
    throw new Error("Pinia destroyed");
  const c = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !vu && (c.onTrigger = (D) => {
    l ? f = D : l == !1 && !X._hotUpdating && (Array.isArray(f) ? f.push(D) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let l, u, d = ot([]), p = ot([]), f;
  const m = i.state.value[e];
  !r && !m && (process.env.NODE_ENV === "production" || !o) && (i.state.value[e] = {});
  const w = Pe({});
  let A;
  function k(D) {
    let E;
    l = u = !1, process.env.NODE_ENV !== "production" && (f = []), typeof D == "function" ? (D(i.state.value[e]), E = {
      type: bt.patchFunction,
      storeId: e,
      events: f
    }) : (ns(i.state.value[e], D), E = {
      type: bt.patchObject,
      payload: D,
      storeId: e,
      events: f
    });
    const W = A = Symbol();
    Rn().then(() => {
      A === W && (l = !0);
    }), u = !0, Nn(d, E, i.state.value[e]);
  }
  const b = r ? function() {
    const { state: E } = n, W = E ? E() : {};
    this.$patch((B) => {
      Je(B, W);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Du
  );
  function x() {
    s.stop(), d = [], p = [], i._s.delete(e);
  }
  function V(D, E) {
    return function() {
      ki(i);
      const W = Array.from(arguments), B = [], te = [];
      function Se(q) {
        B.push(q);
      }
      function pe(q) {
        te.push(q);
      }
      Nn(p, {
        args: W,
        name: D,
        store: X,
        after: Se,
        onError: pe
      });
      let re;
      try {
        re = E.apply(this && this.$id === e ? this : X, W);
      } catch (q) {
        throw Nn(te, q), q;
      }
      return re instanceof Promise ? re.then((q) => (Nn(B, q), q)).catch((q) => (Nn(te, q), Promise.reject(q))) : (Nn(B, re), re);
    };
  }
  const T = /* @__PURE__ */ ot({
    actions: {},
    getters: {},
    state: [],
    hotState: w
  }), ae = {
    _p: i,
    // _s: scope,
    $id: e,
    $onAction: oc.bind(null, p),
    $patch: k,
    $reset: b,
    $subscribe(D, E = {}) {
      const W = oc(d, D, E.detached, () => B()), B = s.run(() => Qe(() => i.state.value[e], (te) => {
        (E.flush === "sync" ? u : l) && D({
          storeId: e,
          type: bt.direct,
          events: f
        }, te);
      }, Je({}, c, E)));
      return W;
    },
    $dispose: x
  }, X = qn(process.env.NODE_ENV !== "production" || hi ? Je(
    {
      _hmrPayload: T,
      _customProperties: ot(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    ae
    // must be added later
    // setupStore
  ) : ae);
  i._s.set(e, X);
  const R = i._e.run(() => (s = dl(), s.run(() => t())));
  for (const D in R) {
    const E = R[D];
    if (ye(E) && !rc(E) || vt(E))
      process.env.NODE_ENV !== "production" && o ? Ki(w.value, D, oo(R, D)) : r || (m && gg(E) && (ye(E) ? E.value = m[D] : ns(E, m[D])), i.state.value[e][D] = E), process.env.NODE_ENV !== "production" && T.state.push(D);
    else if (typeof E == "function") {
      const W = process.env.NODE_ENV !== "production" && o ? E : V(D, E);
      R[D] = W, process.env.NODE_ENV !== "production" && (T.actions[D] = E), a.actions[D] = E;
    } else
      process.env.NODE_ENV !== "production" && rc(E) && (T.getters[D] = r ? (
        // @ts-expect-error
        n.getters[D]
      ) : E, rr && (R._getters || // @ts-expect-error: same
      (R._getters = ot([]))).push(D));
  }
  if (Je(X, R), Je(G(X), R), Object.defineProperty(X, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? w.value : i.state.value[e],
    set: (D) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      k((E) => {
        Je(E, D);
      });
    }
  }), process.env.NODE_ENV !== "production" && (X._hotUpdate = ot((D) => {
    X._hotUpdating = !0, D._hmrPayload.state.forEach((E) => {
      if (E in X.$state) {
        const W = D.$state[E], B = X.$state[E];
        typeof W == "object" && bn(W) && bn(B) ? Nu(W, B) : D.$state[E] = B;
      }
      Ki(X, E, oo(D.$state, E));
    }), Object.keys(X.$state).forEach((E) => {
      E in D.$state || Sr(X, E);
    }), l = !1, u = !1, i.state.value[e] = oo(D._hmrPayload, "hotState"), u = !0, Rn().then(() => {
      l = !0;
    });
    for (const E in D._hmrPayload.actions) {
      const W = D[E];
      Ki(X, E, V(E, W));
    }
    for (const E in D._hmrPayload.getters) {
      const W = D._hmrPayload.getters[E], B = r ? (
        // special handling of options api
        xe(() => (ki(i), W.call(X, X)))
      ) : W;
      Ki(X, E, B);
    }
    Object.keys(X._hmrPayload.getters).forEach((E) => {
      E in D._hmrPayload.getters || Sr(X, E);
    }), Object.keys(X._hmrPayload.actions).forEach((E) => {
      E in D._hmrPayload.actions || Sr(X, E);
    }), X._hmrPayload = D._hmrPayload, X._getters = D._getters, X._hotUpdating = !1;
  })), hi) {
    const D = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((E) => {
      Object.defineProperty(X, E, Je({ value: X[E] }, D));
    });
  }
  return i._p.forEach((D) => {
    if (hi) {
      const E = s.run(() => D({
        store: X,
        app: i._a,
        pinia: i,
        options: a
      }));
      Object.keys(E || {}).forEach((W) => X._customProperties.add(W)), Je(X, E);
    } else
      Je(X, s.run(() => D({
        store: X,
        app: i._a,
        pinia: i,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && X.$state && typeof X.$state == "object" && typeof X.$state.constructor == "function" && !X.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${X.$id}".`), m && r && n.hydrate && n.hydrate(X.$state, m), l = !0, u = !0, X;
}
function mg(e, t, n) {
  let i, o;
  const r = typeof t == "function";
  typeof e == "string" ? (i = e, o = r ? n : t) : (o = e, i = e.id);
  function s(a, c) {
    const l = Un();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ri && ri._testing ? null : a) || l && ct(bu, null), a && ki(a), process.env.NODE_ENV !== "production" && !ri)
      throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    a = ri, a._s.has(i) || (r ? is(i, t, o, a) : sc(i, o, a), process.env.NODE_ENV !== "production" && (s._pinia = a));
    const u = a._s.get(i);
    if (process.env.NODE_ENV !== "production" && c) {
      const d = "__hot:" + i, p = r ? is(d, t, o, a, !0) : sc(d, Je({}, o), a, !0);
      c._hotUpdate(p), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && rr && l && l.proxy && // avoid adding stores that are just built for hot module replacement
    !c) {
      const d = l.proxy, p = "_pStores" in d ? d._pStores : d._pStores = {};
      p[i] = u;
    }
    return u;
  }
  return s.$id = i, s;
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const At = typeof window < "u";
function vg(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function _r(e, t) {
  const n = {};
  for (const i in t) {
    const o = t[i];
    n[i] = We(o) ? o.map(e) : e(o);
  }
  return n;
}
const gi = () => {
}, We = Array.isArray;
function se(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const yg = /\/$/, bg = (e) => e.replace(yg, "");
function Pr(e, t, n = "/") {
  let i, o = {}, r = "", s = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (i = t.slice(0, c), r = t.slice(c + 1, a > -1 ? a : t.length), o = e(r)), a > -1 && (i = i || t.slice(0, a), s = t.slice(a, t.length)), i = Sg(i ?? t, n), {
    fullPath: i + (r && "?") + r + s,
    path: i,
    query: o,
    hash: s
  };
}
function wg(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ac(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function cc(e, t, n) {
  const i = t.matched.length - 1, o = n.matched.length - 1;
  return i > -1 && i === o && Yt(t.matched[i], n.matched[o]) && Cu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Yt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!xg(e[n], t[n]))
      return !1;
  return !0;
}
function xg(e, t) {
  return We(e) ? lc(e, t) : We(t) ? lc(t, e) : e === t;
}
function lc(e, t) {
  return We(t) ? e.length === t.length && e.every((n, i) => n === t[i]) : e.length === 1 && e[0] === t;
}
function Sg(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), i = e.split("/");
  let o = n.length - 1, r, s;
  for (r = 0; r < i.length; r++)
    if (s = i[r], s !== ".")
      if (s === "..")
        o > 1 && o--;
      else
        break;
  return n.slice(0, o).join("/") + "/" + i.slice(r - (r === i.length ? 1 : 0)).join("/");
}
var Ni;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ni || (Ni = {}));
var mi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(mi || (mi = {}));
function _g(e) {
  if (!e)
    if (At) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), bg(e);
}
const Pg = /^[^#]+#/;
function Eg(e, t) {
  return e.replace(Pg, "#") + t;
}
function kg(e, t) {
  const n = document.documentElement.getBoundingClientRect(), i = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: i.left - n.left - (t.left || 0),
    top: i.top - n.top - (t.top || 0)
  };
}
const sr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ng(e) {
  let t;
  if ("el" in e) {
    const n = e.el, i = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!i || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (i && r) {
          se(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        se(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? i ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      process.env.NODE_ENV !== "production" && se(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = kg(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function uc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const os = /* @__PURE__ */ new Map();
function Dg(e, t) {
  os.set(e, t);
}
function Cg(e) {
  const t = os.get(e);
  return os.delete(e), t;
}
let Ag = () => location.protocol + "//" + location.host;
function Au(e, t) {
  const { pathname: n, search: i, hash: o } = t, r = e.indexOf("#");
  if (r > -1) {
    let a = o.includes(e.slice(r)) ? e.slice(r).length : 1, c = o.slice(a);
    return c[0] !== "/" && (c = "/" + c), ac(c, "");
  }
  return ac(n, e) + i + o;
}
function Og(e, t, n, i) {
  let o = [], r = [], s = null;
  const a = ({ state: p }) => {
    const f = Au(e, location), m = n.value, w = t.value;
    let A = 0;
    if (p) {
      if (n.value = f, t.value = p, s && s === m) {
        s = null;
        return;
      }
      A = w ? p.position - w.position : 0;
    } else
      i(f);
    o.forEach((k) => {
      k(n.value, m, {
        delta: A,
        type: Ni.pop,
        direction: A ? A > 0 ? mi.forward : mi.back : mi.unknown
      });
    });
  };
  function c() {
    s = n.value;
  }
  function l(p) {
    o.push(p);
    const f = () => {
      const m = o.indexOf(p);
      m > -1 && o.splice(m, 1);
    };
    return r.push(f), f;
  }
  function u() {
    const { history: p } = window;
    p.state && p.replaceState(de({}, p.state, { scroll: sr() }), "");
  }
  function d() {
    for (const p of r)
      p();
    r = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u), {
    pauseListeners: c,
    listen: l,
    destroy: d
  };
}
function dc(e, t, n, i = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: o ? sr() : null
  };
}
function Tg(e) {
  const { history: t, location: n } = window, i = {
    value: Au(e, n)
  }, o = { value: t.state };
  o.value || r(i.value, {
    back: null,
    current: i.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function r(c, l, u) {
    const d = e.indexOf("#"), p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Ag() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](l, "", p), o.value = l;
    } catch (f) {
      process.env.NODE_ENV !== "production" ? se("Error with push/replace State", f) : console.error(f), n[u ? "replace" : "assign"](p);
    }
  }
  function s(c, l) {
    const u = de({}, t.state, dc(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), l, { position: o.value.position });
    r(c, u, !0), i.value = c;
  }
  function a(c, l) {
    const u = de(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: c,
        scroll: sr()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), r(u.current, u, !0);
    const d = de({}, dc(i.value, c, null), { position: u.position + 1 }, l);
    r(c, d, !1), i.value = c;
  }
  return {
    location: i,
    state: o,
    push: a,
    replace: s
  };
}
function Bg(e) {
  e = _g(e);
  const t = Tg(e), n = Og(e, t.state, t.location, t.replace);
  function i(r, s = !0) {
    s || n.pauseListeners(), history.go(r);
  }
  const o = de({
    // it's overridden right after
    location: "",
    base: e,
    go: i,
    createHref: Eg.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Mg(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && se(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Bg(e);
}
function Ig(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ou(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Vt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, rs = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var pc;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(pc || (pc = {}));
const Fg = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Xg(t)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function jn(e, t) {
  return process.env.NODE_ENV !== "production" ? de(new Error(Fg[e](t)), {
    type: e,
    [rs]: !0
  }, t) : de(new Error(), {
    type: e,
    [rs]: !0
  }, t);
}
function kt(e, t) {
  return e instanceof Error && rs in e && (t == null || !!(e.type & t));
}
const $g = ["params", "query", "hash"];
function Xg(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of $g)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const fc = "[^/]+?", Vg = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Rg = /[.+*?^${}()[\]/\\]/g;
function Hg(e, t) {
  const n = de({}, Vg, t), i = [];
  let o = n.start ? "^" : "";
  const r = [];
  for (const l of e) {
    const u = l.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !l.length && (o += "/");
    for (let d = 0; d < l.length; d++) {
      const p = l[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        d || (o += "/"), o += p.value.replace(Rg, "\\$&"), f += 40;
      else if (p.type === 1) {
        const { value: m, repeatable: w, optional: A, regexp: k } = p;
        r.push({
          name: m,
          repeatable: w,
          optional: A
        });
        const b = k || fc;
        if (b !== fc) {
          f += 10;
          try {
            new RegExp(`(${b})`);
          } catch (V) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${b}): ` + V.message);
          }
        }
        let x = w ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        d || (x = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        A && l.length < 2 ? `(?:/${x})` : "/" + x), A && (x += "?"), o += x, f += 20, A && (f += -8), w && (f += -20), b === ".*" && (f += -50);
      }
      u.push(f);
    }
    i.push(u);
  }
  if (n.strict && n.end) {
    const l = i.length - 1;
    i[l][i[l].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const s = new RegExp(o, n.sensitive ? "" : "i");
  function a(l) {
    const u = l.match(s), d = {};
    if (!u)
      return null;
    for (let p = 1; p < u.length; p++) {
      const f = u[p] || "", m = r[p - 1];
      d[m.name] = f && m.repeatable ? f.split("/") : f;
    }
    return d;
  }
  function c(l) {
    let u = "", d = !1;
    for (const p of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const f of p)
        if (f.type === 0)
          u += f.value;
        else if (f.type === 1) {
          const { value: m, repeatable: w, optional: A } = f, k = m in l ? l[m] : "";
          if (We(k) && !w)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const b = We(k) ? k.join("/") : k;
          if (!b)
            if (A)
              p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          u += b;
        }
    }
    return u || "/";
  }
  return {
    re: s,
    score: i,
    keys: r,
    parse: a,
    stringify: c
  };
}
function Lg(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const i = t[n] - e[n];
    if (i)
      return i;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function jg(e, t) {
  let n = 0;
  const i = e.score, o = t.score;
  for (; n < i.length && n < o.length; ) {
    const r = Lg(i[n], o[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(o.length - i.length) === 1) {
    if (hc(i))
      return 1;
    if (hc(o))
      return -1;
  }
  return o.length - i.length;
}
function hc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zg = {
  type: 0,
  value: ""
}, Qg = /[a-zA-Z0-9_]/;
function qg(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[zg]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(f) {
    throw new Error(`ERR (${n})/"${l}": ${f}`);
  }
  let n = 0, i = n;
  const o = [];
  let r;
  function s() {
    r && o.push(r), r = [];
  }
  let a = 0, c, l = "", u = "";
  function d() {
    l && (n === 0 ? r.push({
      type: 0,
      value: l
    }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: l,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), l = "");
  }
  function p() {
    l += c;
  }
  for (; a < e.length; ) {
    if (c = e[a++], c === "\\" && n !== 2) {
      i = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (l && d(), s()) : c === ":" ? (d(), n = 1) : p();
        break;
      case 4:
        p(), n = i;
        break;
      case 1:
        c === "(" ? n = 2 : Qg.test(c) ? p() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
        break;
      case 3:
        d(), n = 0, c !== "*" && c !== "?" && c !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), s(), o;
}
function Ug(e, t, n) {
  const i = Hg(qg(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const s of i.keys)
      r.has(s.name) && se(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(s.name);
  }
  const o = de(i, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Wg(e, t) {
  const n = [], i = /* @__PURE__ */ new Map();
  t = vc({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return i.get(u);
  }
  function r(u, d, p) {
    const f = !p, m = Kg(u);
    process.env.NODE_ENV !== "production" && Zg(m, d), m.aliasOf = p && p.record;
    const w = vc(t, u), A = [
      m
    ];
    if ("alias" in u) {
      const x = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const V of x)
        A.push(de({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: p ? p.record.components : m.components,
          path: V,
          // we might be the child of an alias
          aliasOf: p ? p.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let k, b;
    for (const x of A) {
      const { path: V } = x;
      if (d && V[0] !== "/") {
        const T = d.record.path, ae = T[T.length - 1] === "/" ? "" : "/";
        x.path = d.record.path + (V && ae + V);
      }
      if (process.env.NODE_ENV !== "production" && x.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (k = Ug(x, d, w), process.env.NODE_ENV !== "production" && d && V[0] === "/" && em(k, d), p ? (p.alias.push(k), process.env.NODE_ENV !== "production" && Jg(p, k)) : (b = b || k, b !== k && b.alias.push(k), f && u.name && !mc(k) && s(u.name)), m.children) {
        const T = m.children;
        for (let ae = 0; ae < T.length; ae++)
          r(T[ae], k, p && p.children[ae]);
      }
      p = p || k, (k.record.components && Object.keys(k.record.components).length || k.record.name || k.record.redirect) && c(k);
    }
    return b ? () => {
      s(b);
    } : gi;
  }
  function s(u) {
    if (Ou(u)) {
      const d = i.get(u);
      d && (i.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s));
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && i.delete(u.record.name), u.children.forEach(s), u.alias.forEach(s));
    }
  }
  function a() {
    return n;
  }
  function c(u) {
    let d = 0;
    for (; d < n.length && jg(u, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (u.record.path !== n[d].record.path || !Tu(u, n[d])); )
      d++;
    n.splice(d, 0, u), u.record.name && !mc(u) && i.set(u.record.name, u);
  }
  function l(u, d) {
    let p, f = {}, m, w;
    if ("name" in u && u.name) {
      if (p = i.get(u.name), !p)
        throw jn(1, {
          location: u
        });
      if (process.env.NODE_ENV !== "production") {
        const b = Object.keys(u.params || {}).filter((x) => !p.keys.find((V) => V.name === x));
        b.length && se(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      w = p.record.name, f = de(
        // paramsFromLocation is a new object
        gc(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          p.keys.filter((b) => !b.optional).map((b) => b.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && gc(u.params, p.keys.map((b) => b.name))
      ), m = p.stringify(f);
    } else if ("path" in u)
      m = u.path, process.env.NODE_ENV !== "production" && !m.startsWith("/") && se(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), p = n.find((b) => b.re.test(m)), p && (f = p.parse(m), w = p.record.name);
    else {
      if (p = d.name ? i.get(d.name) : n.find((b) => b.re.test(d.path)), !p)
        throw jn(1, {
          location: u,
          currentLocation: d
        });
      w = p.record.name, f = de({}, d.params, u.params), m = p.stringify(f);
    }
    const A = [];
    let k = p;
    for (; k; )
      A.unshift(k.record), k = k.parent;
    return {
      name: w,
      path: m,
      params: f,
      matched: A,
      meta: Yg(A)
    };
  }
  return e.forEach((u) => r(u)), { addRoute: r, resolve: l, removeRoute: s, getRoutes: a, getRecordMatcher: o };
}
function gc(e, t) {
  const n = {};
  for (const i of t)
    i in e && (n[i] = e[i]);
  return n;
}
function Kg(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Gg(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Gg(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const i in e.components)
      t[i] = typeof n == "boolean" ? n : n[i];
  return t;
}
function mc(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Yg(e) {
  return e.reduce((t, n) => de(t, n.meta), {});
}
function vc(e, t) {
  const n = {};
  for (const i in e)
    n[i] = i in t ? t[i] : e[i];
  return n;
}
function ss(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Jg(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ss.bind(null, n)))
      return se(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ss.bind(null, n)))
      return se(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Zg(e, t) {
  t && t.record.name && !e.name && !e.path && se(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function em(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ss.bind(null, n)))
      return se(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Tu(e, t) {
  return t.children.some((n) => n === e || Tu(e, n));
}
const Bu = /#/g, tm = /&/g, nm = /\//g, im = /=/g, om = /\?/g, Mu = /\+/g, rm = /%5B/g, sm = /%5D/g, Iu = /%5E/g, am = /%60/g, Fu = /%7B/g, cm = /%7C/g, $u = /%7D/g, lm = /%20/g;
function Ys(e) {
  return encodeURI("" + e).replace(cm, "|").replace(rm, "[").replace(sm, "]");
}
function um(e) {
  return Ys(e).replace(Fu, "{").replace($u, "}").replace(Iu, "^");
}
function as(e) {
  return Ys(e).replace(Mu, "%2B").replace(lm, "+").replace(Bu, "%23").replace(tm, "%26").replace(am, "`").replace(Fu, "{").replace($u, "}").replace(Iu, "^");
}
function dm(e) {
  return as(e).replace(im, "%3D");
}
function pm(e) {
  return Ys(e).replace(Bu, "%23").replace(om, "%3F");
}
function fm(e) {
  return e == null ? "" : pm(e).replace(nm, "%2F");
}
function Di(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && se(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function hm(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const i = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < i.length; ++o) {
    const r = i[o].replace(Mu, " "), s = r.indexOf("="), a = Di(s < 0 ? r : r.slice(0, s)), c = s < 0 ? null : Di(r.slice(s + 1));
    if (a in t) {
      let l = t[a];
      We(l) || (l = t[a] = [l]), l.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function yc(e) {
  let t = "";
  for (let n in e) {
    const i = e[n];
    if (n = dm(n), i == null) {
      i !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (We(i) ? i.map((r) => r && as(r)) : [i && as(i)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function gm(e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    i !== void 0 && (t[n] = We(i) ? i.map((o) => o == null ? null : "" + o) : i == null ? i : "" + i);
  }
  return t;
}
const mm = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), bc = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), ar = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Xu = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), cs = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Jn() {
  let e = [];
  function t(i) {
    return e.push(i), () => {
      const o = e.indexOf(i);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e,
    reset: n
  };
}
function zt(e, t, n, i, o) {
  const r = i && // name is defined if record is because of the function overload
  (i.enterCallbacks[o] = i.enterCallbacks[o] || []);
  return () => new Promise((s, a) => {
    const c = (d) => {
      d === !1 ? a(jn(4, {
        from: n,
        to: t
      })) : d instanceof Error ? a(d) : Ig(d) ? a(jn(2, {
        from: t,
        to: d
      })) : (r && // since enterCallbackArray is truthy, both record and name also are
      i.enterCallbacks[o] === r && typeof d == "function" && r.push(d), s());
    }, l = e.call(i && i.instances[o], t, n, process.env.NODE_ENV !== "production" ? vm(c, t, n) : c);
    let u = Promise.resolve(l);
    if (e.length < 3 && (u = u.then(c)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof l == "object" && "then" in l)
        u = u.then((p) => c._called ? p : (se(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (l !== void 0 && !c._called) {
        se(d), a(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((d) => a(d));
  });
}
function vm(e, t, n) {
  let i = 0;
  return function() {
    i++ === 1 && se(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, i === 1 && e.apply(null, arguments);
  };
}
function Er(e, t, n, i) {
  const o = [];
  for (const r of e) {
    process.env.NODE_ENV !== "production" && !r.components && !r.children.length && se(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);
    for (const s in r.components) {
      let a = r.components[s];
      if (process.env.NODE_ENV !== "production") {
        if (!a || typeof a != "object" && typeof a != "function")
          throw se(`Component "${s}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`), new Error("Invalid route component");
        if ("then" in a) {
          se(`Component "${s}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = a;
          a = () => c;
        } else
          a.__asyncLoader && // warn only once per component
          !a.__warnedDefineAsync && (a.__warnedDefineAsync = !0, se(`Component "${s}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !r.instances[s]))
        if (ym(a)) {
          const l = (a.__vccOpts || a)[t];
          l && o.push(zt(l, n, i, r, s));
        } else {
          let c = a();
          process.env.NODE_ENV !== "production" && !("catch" in c) && (se(`Component "${s}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), o.push(() => c.then((l) => {
            if (!l)
              return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));
            const u = vg(l) ? l.default : l;
            r.components[s] = u;
            const p = (u.__vccOpts || u)[t];
            return p && zt(p, n, i, r, s)();
          }));
        }
    }
  }
  return o;
}
function ym(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function wc(e) {
  const t = ct(ar), n = ct(Xu), i = xe(() => t.resolve(yt(e.to))), o = xe(() => {
    const { matched: c } = i.value, { length: l } = c, u = c[l - 1], d = n.matched;
    if (!u || !d.length)
      return -1;
    const p = d.findIndex(Yt.bind(null, u));
    if (p > -1)
      return p;
    const f = xc(c[l - 2]);
    return (
      // we are dealing with nested routes
      l > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      xc(u) === f && // avoid comparing the child with its parent
      d[d.length - 1].path !== f ? d.findIndex(Yt.bind(null, c[l - 2])) : p
    );
  }), r = xe(() => o.value > -1 && Sm(n.params, i.value.params)), s = xe(() => o.value > -1 && o.value === n.matched.length - 1 && Cu(n.params, i.value.params));
  function a(c = {}) {
    return xm(c) ? t[yt(e.replace) ? "replace" : "push"](
      yt(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(gi) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && At) {
    const c = Un();
    if (c) {
      const l = {
        route: i.value,
        isActive: r.value,
        isExactActive: s.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(l), Rl(() => {
        l.route = i.value, l.isActive = r.value, l.isExactActive = s.value;
      }, { flush: "post" });
    }
  }
  return {
    route: i,
    href: xe(() => i.value.href),
    isActive: r,
    isExactActive: s,
    navigate: a
  };
}
const bm = /* @__PURE__ */ $i({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: wc,
  setup(e, { slots: t }) {
    const n = qn(wc(e)), { options: i } = ct(ar), o = xe(() => ({
      [Sc(e.activeClass, i.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Sc(e.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && t.default(n);
      return e.custom ? r : qs("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, r);
    };
  }
}), wm = bm;
function xm(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Sm(e, t) {
  for (const n in t) {
    const i = t[n], o = e[n];
    if (typeof i == "string") {
      if (i !== o)
        return !1;
    } else if (!We(o) || o.length !== i.length || i.some((r, s) => r !== o[s]))
      return !1;
  }
  return !0;
}
function xc(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Sc = (e, t, n) => e ?? t ?? n, _m = /* @__PURE__ */ $i({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && Pm();
    const i = ct(cs), o = xe(() => e.route || i.value), r = ct(bc, 0), s = xe(() => {
      let l = yt(r);
      const { matched: u } = o.value;
      let d;
      for (; (d = u[l]) && !d.components; )
        l++;
      return l;
    }), a = xe(() => o.value.matched[s.value]);
    ao(bc, xe(() => s.value + 1)), ao(mm, a), ao(cs, o);
    const c = Pe();
    return Qe(() => [c.value, a.value, e.name], ([l, u, d], [p, f, m]) => {
      u && (u.instances[d] = l, f && f !== u && l && l === p && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), l && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!f || !Yt(u, f) || !p) && (u.enterCallbacks[d] || []).forEach((w) => w(l));
    }, { flush: "post" }), () => {
      const l = o.value, u = e.name, d = a.value, p = d && d.components[u];
      if (!p)
        return _c(n.default, { Component: p, route: l });
      const f = d.props[u], m = f ? f === !0 ? l.params : typeof f == "function" ? f(l) : f : null, A = qs(p, de({}, m, t, {
        onVnodeUnmounted: (k) => {
          k.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && At && A.ref) {
        const k = {
          depth: s.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (We(A.ref) ? A.ref.map((x) => x.i) : [A.ref.i]).forEach((x) => {
          x.__vrv_devtools = k;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        _c(n.default, { Component: A, route: l }) || A
      );
    };
  }
});
function _c(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Vu = _m;
function Pm() {
  const e = Un(), t = e.parent && e.parent.type.name;
  if (t && (t === "KeepAlive" || t.includes("Transition"))) {
    const n = t === "KeepAlive" ? "keep-alive" : "transition";
    se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`);
  }
}
function Zn(e, t) {
  const n = de({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((i) => Bm(i, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Gi(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Em = 0;
function km(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const i = Em++;
  Ws({
    id: "org.vuejs.router" + (i ? "." + i : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((u, d) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Zn(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const p = d.__vrv_devtools;
        u.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Ru
        });
      }
      We(d.__vrl_devtools) && (d.__devtoolsApi = o, d.__vrl_devtools.forEach((p) => {
        let f = ju, m = "";
        p.isExactActive ? (f = Lu, m = "This is exactly active") : p.isActive && (f = Hu, m = "This link is active"), u.tags.push({
          label: p.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: f
        });
      }));
    }), Qe(t.currentRoute, () => {
      c(), o.notifyComponentUpdate(), o.sendInspectorTree(a), o.sendInspectorState(a);
    });
    const r = "router:navigations:" + i;
    o.addTimelineLayer({
      id: r,
      label: `Router${i ? " " + i : ""} Navigations`,
      color: 4237508
    }), t.onError((u, d) => {
      o.addTimelineEvent({
        layerId: r,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: u },
          groupId: d.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((u, d) => {
      const p = {
        guard: Gi("beforeEach"),
        from: Zn(d, "Current Location during this navigation"),
        to: Zn(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: s++
      }), o.addTimelineEvent({
        layerId: r,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: p,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, p) => {
      const f = {
        guard: Gi("afterEach")
      };
      p ? (f.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: p ? p.message : "",
          tooltip: "Navigation Failure",
          value: p
        }
      }, f.status = Gi("❌")) : f.status = Gi("✅"), f.from = Zn(d, "Current Location during this navigation"), f.to = Zn(u, "Target location"), o.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: o.now(),
          data: f,
          logType: p ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + i;
    o.addInspector({
      id: a,
      label: "Routes" + (i ? " " + i : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!l)
        return;
      const u = l;
      let d = n.getRoutes().filter((p) => !p.parent);
      d.forEach(qu), u.filter && (d = d.filter((p) => (
        // save matches state based on the payload
        ls(p, u.filter.toLowerCase())
      ))), d.forEach((p) => Qu(p, t.currentRoute.value)), u.rootNodes = d.map(zu);
    }
    let l;
    o.on.getInspectorTree((u) => {
      l = u, u.app === e && u.inspectorId === a && c();
    }), o.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const p = n.getRoutes().find((f) => f.record.__vd_id === u.nodeId);
        p && (u.state = {
          options: Dm(p)
        });
      }
    }), o.sendInspectorTree(a), o.sendInspectorState(a);
  });
}
function Nm(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Dm(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((i) => `${i.name}${Nm(i)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((i) => i.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((i) => i.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Ru = 15485081, Hu = 2450411, Lu = 8702998, Cm = 2282478, ju = 16486972, Am = 6710886;
function zu(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Cm
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ju
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Ru
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Lu
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Hu
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Am
  });
  let i = n.__vd_id;
  return i == null && (i = String(Om++), n.__vd_id = i), {
    id: i,
    label: n.path,
    tags: t,
    children: e.children.map(zu)
  };
}
let Om = 0;
const Tm = /^\/(.*)\/([a-z]*)$/;
function Qu(e, t) {
  const n = t.matched.length && Yt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((i) => Yt(i, e.record))), e.children.forEach((i) => Qu(i, t));
}
function qu(e) {
  e.__vd_match = !1, e.children.forEach(qu);
}
function ls(e, t) {
  const n = String(e.re).match(Tm);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => ls(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = Di(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => ls(s, t));
}
function Bm(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) || (n[i] = e[i]);
  return n;
}
function Mm(e) {
  const t = Wg(e.routes, e), n = e.parseQuery || hm, i = e.stringifyQuery || yc, o = e.history;
  if (process.env.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const r = Jn(), s = Jn(), a = Jn(), c = mp(Vt);
  let l = Vt;
  At && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = _r.bind(null, (y) => "" + y), d = _r.bind(null, fm), p = (
    // @ts-expect-error: intentionally avoid the type check
    _r.bind(null, Di)
  );
  function f(y, $) {
    let M, H;
    return Ou(y) ? (M = t.getRecordMatcher(y), H = $) : H = y, t.addRoute(H, M);
  }
  function m(y) {
    const $ = t.getRecordMatcher(y);
    $ ? t.removeRoute($) : process.env.NODE_ENV !== "production" && se(`Cannot remove non-existent route "${String(y)}"`);
  }
  function w() {
    return t.getRoutes().map((y) => y.record);
  }
  function A(y) {
    return !!t.getRecordMatcher(y);
  }
  function k(y, $) {
    if ($ = de({}, $ || c.value), typeof y == "string") {
      const Z = Pr(n, y, $.path), h = t.resolve({ path: Z.path }, $), g = o.createHref(Z.fullPath);
      return process.env.NODE_ENV !== "production" && (g.startsWith("//") ? se(`Location "${y}" resolved to "${g}". A resolved location cannot start with multiple slashes.`) : h.matched.length || se(`No match found for location with path "${y}"`)), de(Z, h, {
        params: p(h.params),
        hash: Di(Z.hash),
        redirectedFrom: void 0,
        href: g
      });
    }
    let M;
    if ("path" in y)
      process.env.NODE_ENV !== "production" && "params" in y && !("name" in y) && // @ts-expect-error: the type is never
      Object.keys(y.params).length && se(`Path "${// @ts-expect-error: the type is never
      y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), M = de({}, y, {
        path: Pr(n, y.path, $.path).path
      });
    else {
      const Z = de({}, y.params);
      for (const h in Z)
        Z[h] == null && delete Z[h];
      M = de({}, y, {
        params: d(y.params)
      }), $.params = d($.params);
    }
    const H = t.resolve(M, $), ce = y.hash || "";
    process.env.NODE_ENV !== "production" && ce && !ce.startsWith("#") && se(`A \`hash\` should always start with the character "#". Replace "${ce}" with "#${ce}".`), H.params = u(p(H.params));
    const ve = wg(i, de({}, y, {
      hash: um(ce),
      path: H.path
    })), ee = o.createHref(ve);
    return process.env.NODE_ENV !== "production" && (ee.startsWith("//") ? se(`Location "${y}" resolved to "${ee}". A resolved location cannot start with multiple slashes.`) : H.matched.length || se(`No match found for location with path "${"path" in y ? y.path : y}"`)), de({
      fullPath: ve,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ce,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        i === yc ? gm(y.query) : y.query || {}
      )
    }, H, {
      redirectedFrom: void 0,
      href: ee
    });
  }
  function b(y) {
    return typeof y == "string" ? Pr(n, y, c.value.path) : de({}, y);
  }
  function x(y, $) {
    if (l !== y)
      return jn(8, {
        from: $,
        to: y
      });
  }
  function V(y) {
    return X(y);
  }
  function T(y) {
    return V(de(b(y), { replace: !0 }));
  }
  function ae(y) {
    const $ = y.matched[y.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: M } = $;
      let H = typeof M == "function" ? M(y) : M;
      if (typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = b(H) : (
        // force empty params
        { path: H }
      ), H.params = {}), process.env.NODE_ENV !== "production" && !("path" in H) && !("name" in H))
        throw se(`Invalid redirect found:
${JSON.stringify(H, null, 2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return de({
        query: y.query,
        hash: y.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in H ? {} : y.params
      }, H);
    }
  }
  function X(y, $) {
    const M = l = k(y), H = c.value, ce = y.state, ve = y.force, ee = y.replace === !0, Z = ae(M);
    if (Z)
      return X(
        de(b(Z), {
          state: typeof Z == "object" ? de({}, ce, Z.state) : ce,
          force: ve,
          replace: ee
        }),
        // keep original redirectedFrom if it exists
        $ || M
      );
    const h = M;
    h.redirectedFrom = $;
    let g;
    return !ve && cc(i, H, M) && (g = jn(16, { to: h, from: H }), Pt(
      H,
      H,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (g ? Promise.resolve(g) : D(h, H)).catch((v) => kt(v) ? (
      // navigation redirects still mark the router as ready
      kt(
        v,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? v : Ae(v)
    ) : (
      // reject any unknown error
      q(v, h, H)
    )).then((v) => {
      if (v) {
        if (kt(
          v,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          cc(i, k(v.to), h) && // and we have done it a couple of times
          $ && // @ts-expect-error: added only in dev
          ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 10 ? (se(`Detected an infinite redirection in a navigation guard when going from "${H.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : X(
            // keep options
            de({
              // preserve an existing replacement but allow the redirect to override it
              replace: ee
            }, b(v.to), {
              state: typeof v.to == "object" ? de({}, ce, v.to.state) : ce,
              force: ve
            }),
            // preserve the original redirectedFrom if any
            $ || h
          );
      } else
        v = W(h, H, !0, ee, ce);
      return E(h, H, v), v;
    });
  }
  function R(y, $) {
    const M = x(y, $);
    return M ? Promise.reject(M) : Promise.resolve();
  }
  function D(y, $) {
    let M;
    const [H, ce, ve] = Im(y, $);
    M = Er(H.reverse(), "beforeRouteLeave", y, $);
    for (const Z of H)
      Z.leaveGuards.forEach((h) => {
        M.push(zt(h, y, $));
      });
    const ee = R.bind(null, y, $);
    return M.push(ee), Dn(M).then(() => {
      M = [];
      for (const Z of r.list())
        M.push(zt(Z, y, $));
      return M.push(ee), Dn(M);
    }).then(() => {
      M = Er(ce, "beforeRouteUpdate", y, $);
      for (const Z of ce)
        Z.updateGuards.forEach((h) => {
          M.push(zt(h, y, $));
        });
      return M.push(ee), Dn(M);
    }).then(() => {
      M = [];
      for (const Z of y.matched)
        if (Z.beforeEnter && !$.matched.includes(Z))
          if (We(Z.beforeEnter))
            for (const h of Z.beforeEnter)
              M.push(zt(h, y, $));
          else
            M.push(zt(Z.beforeEnter, y, $));
      return M.push(ee), Dn(M);
    }).then(() => (y.matched.forEach((Z) => Z.enterCallbacks = {}), M = Er(ve, "beforeRouteEnter", y, $), M.push(ee), Dn(M))).then(() => {
      M = [];
      for (const Z of s.list())
        M.push(zt(Z, y, $));
      return M.push(ee), Dn(M);
    }).catch((Z) => kt(
      Z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? Z : Promise.reject(Z));
  }
  function E(y, $, M) {
    for (const H of a.list())
      H(y, $, M);
  }
  function W(y, $, M, H, ce) {
    const ve = x(y, $);
    if (ve)
      return ve;
    const ee = $ === Vt, Z = At ? history.state : {};
    M && (H || ee ? o.replace(y.fullPath, de({
      scroll: ee && Z && Z.scroll
    }, ce)) : o.push(y.fullPath, ce)), c.value = y, Pt(y, $, M, ee), Ae();
  }
  let B;
  function te() {
    B || (B = o.listen((y, $, M) => {
      if (!Ee.listening)
        return;
      const H = k(y), ce = ae(H);
      if (ce) {
        X(de(ce, { replace: !0 }), H).catch(gi);
        return;
      }
      l = H;
      const ve = c.value;
      At && Dg(uc(ve.fullPath, M.delta), sr()), D(H, ve).catch((ee) => kt(
        ee,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? ee : kt(
        ee,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (X(
        ee.to,
        H
        // avoid an uncaught rejection, let push call triggerError
      ).then((Z) => {
        kt(
          Z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !M.delta && M.type === Ni.pop && o.go(-1, !1);
      }).catch(gi), Promise.reject()) : (M.delta && o.go(-M.delta, !1), q(ee, H, ve))).then((ee) => {
        ee = ee || W(
          // after navigation, all matched components are resolved
          H,
          ve,
          !1
        ), ee && (M.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !kt(
          ee,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-M.delta, !1) : M.type === Ni.pop && kt(
          ee,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), E(H, ve, ee);
      }).catch(gi);
    }));
  }
  let Se = Jn(), pe = Jn(), re;
  function q(y, $, M) {
    Ae(y);
    const H = pe.list();
    return H.length ? H.forEach((ce) => ce(y, $, M)) : (process.env.NODE_ENV !== "production" && se("uncaught error during route navigation:"), console.error(y)), Promise.reject(y);
  }
  function ne() {
    return re && c.value !== Vt ? Promise.resolve() : new Promise((y, $) => {
      Se.add([y, $]);
    });
  }
  function Ae(y) {
    return re || (re = !y, te(), Se.list().forEach(([$, M]) => y ? M(y) : $()), Se.reset()), y;
  }
  function Pt(y, $, M, H) {
    const { scrollBehavior: ce } = e;
    if (!At || !ce)
      return Promise.resolve();
    const ve = !M && Cg(uc(y.fullPath, 0)) || (H || !M) && history.state && history.state.scroll || null;
    return Rn().then(() => ce(y, $, ve)).then((ee) => ee && Ng(ee)).catch((ee) => q(ee, y, $));
  }
  const Re = (y) => o.go(y);
  let He;
  const j = /* @__PURE__ */ new Set(), Ee = {
    currentRoute: c,
    listening: !0,
    addRoute: f,
    removeRoute: m,
    hasRoute: A,
    getRoutes: w,
    resolve: k,
    options: e,
    push: V,
    replace: T,
    go: Re,
    back: () => Re(-1),
    forward: () => Re(1),
    beforeEach: r.add,
    beforeResolve: s.add,
    afterEach: a.add,
    onError: pe.add,
    isReady: ne,
    install(y) {
      const $ = this;
      y.component("RouterLink", wm), y.component("RouterView", Vu), y.config.globalProperties.$router = $, Object.defineProperty(y.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => yt(c)
      }), At && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !He && c.value === Vt && (He = !0, V(o.location).catch((ce) => {
        process.env.NODE_ENV !== "production" && se("Unexpected error when starting the router:", ce);
      }));
      const M = {};
      for (const ce in Vt)
        M[ce] = xe(() => c.value[ce]);
      y.provide(ar, $), y.provide(Xu, qn(M)), y.provide(cs, c);
      const H = y.unmount;
      j.add(y), y.unmount = function() {
        j.delete(y), j.size < 1 && (l = Vt, B && B(), B = null, c.value = Vt, He = !1, re = !1), H();
      }, process.env.NODE_ENV !== "production" && At && km(y, $, t);
    }
  };
  return Ee;
}
function Dn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Im(e, t) {
  const n = [], i = [], o = [], r = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < r; s++) {
    const a = t.matched[s];
    a && (e.matched.find((l) => Yt(l, a)) ? i.push(a) : n.push(a));
    const c = e.matched[s];
    c && (t.matched.find((l) => Yt(l, c)) || o.push(c));
  }
  return [n, i, o];
}
function Fm() {
  return ct(ar);
}
const $m = {
  __name: "App",
  setup(e) {
    return (t, n) => (le(), Tt(yt(Vu)));
  }
}, Xm = [
  {
    title: "Cultural Aversion",
    description: "",
    tags: [
      "[P5]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Cultural sentiment",
    description: "Longevity research is a niche where people feel like they can't say what their actual goals are. Causes people to work on the wrong things / inefficient paths.",
    tags: [
      "[P5]",
      "[P2]",
      "[P4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Outdated Healthcare System",
    description: "We have a healthcare system designed in the 1800s that is reactionary to acute disease and the incentives are to maximize cost not health. We need an incentive structure that optimizes for health and lifespan via prevention of aging not treating the symptoms.",
    tags: [
      "[T5]",
      "[+P3]",
      "[P2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Near-termism",
    description: `The majority of "longevity" work is attempts to find low hanging fruit that doesn't exist - current therapeutic stategies will mostly fail or have very little impact. A long-term mindset would but much more resources on technology development and more detailed characterization and modeling of aging.`,
    tags: [
      "[C17]",
      "[+X0]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Nation state levels of funding (100's of billions)",
    description: "Apollo program was 250B + 400,000 people. Aging will likely take more resources",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor",
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Talent, and talent pipeline",
    description: "Very few people know that you can work on aging. Biology of aging isn't included in standard curriculum in high school / college. ",
    tags: [
      "[H0]",
      "[+H0]",
      "[H1]",
      "[+H3]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor",
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Perception",
    description: "The fact that the most funded seed startup in all of history could not reveal their financial backers suggests we need to do more to make funding longevity not just socially acceptable, but a moral imperative!",
    tags: [
      "[P5]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor",
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of inexpensive aged mice",
    description: "",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of gene delivery tools to do whole-body genetic engineering",
    description: "",
    tags: [
      "[X8]",
      "[+X7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Labor required to perform physiological mouse assays",
    description: "",
    tags: [
      "[X6]",
      "[+X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Capital",
    description: "very hard to do science without funding",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "HR",
    description: "very hard to do science without scientists",
    tags: [
      "[H0]",
      "[+H0]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Regulation",
    description: "very hard to do science when many experiments are not allowed",
    tags: [
      "[T4]",
      "[+T3]",
      "[+T1]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: " Translational Research",
    description: "we are good at publish papers",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "<1"
  },
  {
    title: "gain of function experiments ",
    description: "not enough data on extended lifespan and correlated side effects (eg caloric restriction works in worms but they are less mobile and lethargic, prob immune compromised)",
    tags: [
      "[S6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "step wise organ wise extension of lifespan/functional span",
    description: "express telomerade eg in one tissue that is age limiting, then another, then another and show additive effect",
    tags: [
      "[T2]",
      "[+T4]",
      "[C14]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "current theories are nonsense except for antagonistic pleiotropy ",
    description: "we need equations or formulaic approaches. from protein damage, to dna damage, to ros to.wathever single.aspect we focus on, we lose 2 things: 1) the perspecti e thst aging integrated and 2) the side effects of tweaking single parameters. also i doubt an engineered organism that libes longer will have a chance to compete with wildtype in the wild. Its Evolution and natural selection baby.",
    tags: [
      "[+X1.1]",
      "[S7]",
      "[X1.3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "Cheap and fast invivo testing",
    description: "Not democratised access to both academics and commerical entities",
    tags: [
      "[X1.2]",
      "[+X1.2]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Extensive computational approach ",
    description: "You need to derive insights test hypothesise in the dry lab long before the wet one",
    tags: [
      "[+X1.1]",
      "[X12]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "FDA approved clinical proxies",
    description: "We need concrete aging clinical trials, right now its bypassed with other indications",
    tags: [
      "[S1]",
      "[+S1]",
      "[T1]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Human Validation",
    description: "",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Limited government funding",
    description: "",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Awareness on the part of clinicians, regulators and general public",
    description: "",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Clinical trials approval",
    description: "",
    tags: [
      "[T1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "Path to market given today's regulatory environment",
    description: "",
    tags: [
      "[T5]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "Trained hands to work on projects",
    description: "Limited funding, federal and state pay caps for postdocs and graduate students, limited supply of interested students",
    tags: [
      "[H1]",
      "[H2]",
      "[H4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Close-minded funding and reviewers limiting avenues of research",
    description: "The vast majority of aging research are variations on the same 3-4 topics in the same 3-5 systems; while the most radical breakthroughs are most likely to come from alternative, unexplored sources (non-model organisms, other white elephants), both public and private funders are reluctant to fund these lines of research.",
    tags: [
      "[F1]",
      "[C11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "A bottleneck as fundamental to science as aging is to biology. This is both for basic science funding as well as translational funding.",
    tags: [
      "[F2]",
      "[+F2]",
      "[F6]",
      "[+F6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "No NIH institute or program is focusing on aging itself",
    tags: [
      "[P4]",
      "[+C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Luck of funding to produce preliminary data",
    description: "Longevity experiments are very long and expensive, thus it is impossible to run them to produce preliminary data without substantial funding. You cannot obtain substantial funding without preliminary data. This vicious cycle is specifically hard to overcome in aging research due to the very high cost of longevity studies.",
    tags: [
      "[F2]",
      "[+F2]",
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Aging is not considered a disease ",
    description: "One big obstacle in the development of anti-aging therapy is the fact that aging is not considered a disease by FDA and anti-aging drugs can be marketed only against aging-associated conditions, rather than aging itself. It is often the case that anti-aging therapy is not competitive as compared with other drugs targeting specific age-associated conditions even if it is highly efficient in slowing down aging itself. ",
    tags: [
      "[P2]",
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "No funding is available. ",
    description: "NIA's funding rate is too low. ",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "No clear goal of the government funding agency in advancing aging research.",
    description: "",
    tags: [
      "[P4]",
      "[+C7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "There's not sufficient support from the society to aging research.",
    description: "",
    tags: [
      "[P6]",
      "[+P1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Shortage of creative and rigorous talent working on aging",
    description: "Throughout all of the moonshot aging projects I have encountered, they have shared the same glaring problem that serves as the biggest impediment to success: lack of top 1% talent (in terms of creativity, rigor, and skill) to pull off said moonshot project. Need talent in all positions accelerating the space (biologists, engineers, operators, computer scientists, lobbyists, investors, family offices, etc",
    tags: [
      "[H4]",
      "[+H1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "The math problem - not enough resources to solve aging",
    description: "https://www.linkedin.com/pulse/math-problem-sid-efromovich-1e/",
    tags: [
      "[P6]",
      "[P4]",
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Methods to rejuvenate the aging brain (such as controlled tissue turnover)",
    description: "The brain is the most important organ for aging/continuity of self. Everything else could be replaced like parts.",
    tags: [
      "[S8]",
      "[+S10]",
      "[S10]",
      "[+S11]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Data Availability and Sharing",
    description: "We are creating biomarkers of longevity and in order to make these better we need more data available.  Some algorithms like GrimAge still have not be released publicly. ",
    tags: [
      "[X2]",
      "[C10]",
      "[+X2]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Disagreement in basic definitions of aging ",
    description: "When people mention terms like aging, biological age or rejuvenation, they typically talk about different things. This difference in interpretation causes disagreement that confuses researchers and makes them easier to disagree on detailed topics of different interventions. ",
    tags: [
      "[C5]",
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Restrictions on medication development to target aging ",
    description: "The question whether Aging itself is a disease is controversial. This affects the policy and many medications designed to target aging has to be focused on specific age-related diseases rather than targeting the functional decline related to the age ",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Over advertising of potential interventions and Lack of commonly agreed key assessment standards ",
    description: "People  don't have a common way to assess age-related functional decline. They use their own readouts in their own research and claim that something works. No commonly agreed standard in the field is reached ",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of funding",
    description: "Hard to compete for $ against majority of fraudulent claims and bad science, judged by VC types ignorant about basic biology and medicine",
    tags: [
      "[F0]",
      "[+F0]",
      "[C6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of data ",
    description: "No data format or quality standards in the field ",
    tags: [
      "[C2]",
      "[+C2]",
      "[+X2]",
      "[X2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Knowledge dissemination",
    description: "Conferences and journals are flooded by same players pushing commerce oriented stories of packaging bad science as products",
    tags: [
      "[P1]",
      "[P3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "To get funding from NIH we need to first demonstrate that a natural model for longevity (e.g. bats) models human aging. Do this requires funding, but is too high risk for NIH",
    tags: [
      "[F1]",
      "[+F1]",
      "[+X1.5]",
      "[X1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Samples",
    description: "The most interesting natural models for aging are species that are long-lived and don't tolerate captivity. Collecting high quality samples is challenging and requires collaboration. ",
    tags: [
      "[+C4]",
      "[S5]",
      "[X3]",
      "[X4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Compute",
    description: "Comparative genomics is very promising path forward for aging research, but is computationally extremely demanding. We need access to data, expertise and funding to building the resources for the community to utilize evolution as a tool for investigating aging. ",
    tags: [
      "[X13]",
      "[+X11]",
      "[X2]",
      "[+X2]",
      "[H3]",
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Too much focus on the same genes/pathways",
    description: "While these pathways are important, they fail in populations because we don't understand supporting mechanisms ",
    tags: [
      "[C11]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Lots of opinion leaders with biased views of biology of aging",
    description: "Very little true scrutiny of various hypotheses.",
    tags: [
      "[C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Hard to do studies in mammals due to length of study and high cost",
    description: "Obvious",
    tags: [
      "[X1.2]",
      "[+X5]",
      "[+C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "No true surrogate markers for biological age.",
    description: "Existing biomarkers are flawed. ",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Data portability",
    description: "The labs generating the research are usually not very data savy and they are asked to create files that are machine readable. We end up with unfortunate structures that make it impossible to collate data without lengthy manual curation.",
    tags: [
      "[C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Data availability",
    description: "There are large numbers of repositories and it is surprising there is no database where someone can type queries and receive as an output all the data sources containing this type of data.",
    tags: [
      "[C10]",
      "[X2]",
      "[+X2]",
      "[C1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Data quality",
    description: "There are published datasets of low quality. This forces one to only believe datasets from known labs.",
    tags: [
      "[C8]",
      "[+C8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of understanding of the mechanistic causes of aging",
    description: "Few studies have been conducted that identify causative factors in aging. Many merely identify factors that are associated with aging. ",
    tags: [
      "[S9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of consensus on foundational issues in aging research. There is broad disagreement on what is aging, what is rejuvenation, what is development, when aging begins, etc",
    description: "To work collaboratively and move the field forward, we need some level of agreement and common ground",
    tags: [
      "[C5]",
      "[C4]",
      "[+C6]",
      "[+C5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Negative results are rarely published",
    description: "It is not attractive to journals to publish negative results. Furthermore, negative results can negatively impact biotech companies. To efficiently design therapies that target aging and work in vivo, we need to know which therapies fail and why. We also need to know the limitations of therapies that work in some regards but not in others",
    tags: [
      "[C12]",
      "[+C11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Funding",
    description: "In our case it's more difficult as we do not have co-founders members who are from an Ivy League University.",
    tags: [
      "[F5]",
      "[+F5]",
      "[C7]",
      "[F4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Costs",
    description: "The costs to accomplish non human primate and clinical trials are so high that one is forced to raise a large series A in which many founders dilute down considerably in their  equity holding.",
    tags: [
      "[T3]",
      "[+T8]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Abuse by Predecessors ",
    description: "I have yet to meet investors who actually understand fully biology of aging so their decision to invest are based on the comfort of stellar academic background of founders. This has allowed some start ups to raise very large amounts and then created mediocre results to create a bad reputation for longevity start ups. One company raised $400 million went IPO on Nasdaq another raised $600+ million last at $12 billion valuation followed by lackluster Phase I results. Except for Alkahest and BioAge who have shown some Phase I/II success no one else is showing any such promise. Even after a decade not a single longevity drug has achieved regulatory approval and is being prescribed. ",
    tags: [
      "[C6]",
      "[P3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Wholebody tissue-specific gene therapy delivery",
    description: "",
    tags: [
      "[X8]",
      "[+X7]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of principled way to choose the next intervention to try",
    description: "E.g. having computational models similar to PerturbNet or scFormer that given a desired cell state (young) predict what to do to the cell. This requires a lot of data collection",
    tags: [
      "[X1.1]",
      "[+X1.1]",
      "[S2]",
      "[X1.3]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Not enough Human Biology",
    description: "Too much emphasis on non-human models that don't translate",
    tags: [
      "[X1.1]",
      "[+X1.6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Inappropriate clinical trials",
    description: "Need more sophisticated clinical studies",
    tags: [
      "[T2]",
      "[+T8]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lack of Insight into intervention mechanisms",
    description: "Too little insight into how interventions may benefit humans",
    tags: [
      "[T2]",
      "[+T4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "geroscience clinical trials for off patent drugs",
    description: "most of the best candidates for translation to humans now are off-patent, but there is limited appetite for funding necessary clinical trials",
    tags: [
      "[T5]",
      "[+T7]",
      "[F6]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "stagnation of geroscience interventions",
    description: "the most effective geroscience intervention is still caloric restriction - nearly 100 years later; nobody in the field is doing unbiased larges-scale screening for new interventions/combinationsn with greater effect sizes and a disproportionate amount of funding is being put toward studying interventions with tiny effect sizes (e.g. isocaloric intermittent fasting, time restricted feeding, NAD precursors, etc.) ",
    tags: [
      "[C16]",
      "[C1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "poor/fraudulent communication to the general public",
    description: "many of the most popular personalities (e.g. David Sinclair, Aubrey deGrey) with the widest audiences portray the field in a way that causes many people, particularly those in high level academic and government positions, to view the field as full of snake oil and fraud",
    tags: [
      "[P1]",
      "[P3]",
      "[+P4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "time to age organism",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "funding ",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "unifying molecular mechanisms of aging",
    description: "The field is scattered with a million ways to impact age progression.  ",
    tags: [
      "[S7]",
      "[C14]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "clinical trials",
    description: "cost, time (safety, efficacy)",
    tags: [
      "[T3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "pre-clinical trials",
    description: "cost",
    tags: [
      "[T2]",
      "[+T8]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "impact of each epigenetic factor",
    description: "understanding",
    tags: [
      "[S2]",
      "[+S2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "limited funding for basic research",
    description: "",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "difficulty to apply results from non-human studies ",
    description: "",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "focus on drug development for anti-aging",
    description: "",
    tags: [
      "[C12]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "FDA pathway",
    description: "Reliable way to secure roadmap for clinical funding",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "Early stage investment ",
    description: "Getting a preclinical package together",
    tags: [
      "[F4]",
      "[+F4]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "Speculative grants for non-University research",
    description: "To explore ideas in-silico and identify targets",
    tags: [
      "[F5]",
      "[+F5]",
      "[+X1.1]",
      "[F1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "lack of clear definition",
    description: "",
    tags: [
      "[C5]",
      "[+C6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "<1"
  },
  {
    title: "irreproducible data and results",
    description: "",
    tags: [
      "[C8]",
      "[+C8]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "<1"
  },
  {
    title: "lack of funding focus",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "<1"
  },
  {
    title: "insufficient metrics",
    description: "no way to tell how effective a particular treatment is ",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "most functional medicine physicians are prey to herd mentality",
    description: "can't trust doctors, then how to achieve longevity escape velocity?",
    tags: [
      "[P1]",
      "[C6]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "FDA",
    description: "slowing down time to market and escalating the cost of drug development",
    tags: [
      "[T3]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "biochemical approaches in C.elegans",
    description: "",
    tags: [
      "[S6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "FDA",
    description: "Aging not regarded a a disease",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "funding",
    description: "obvious",
    tags: [
      "[+F0]",
      "[F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "people with fresh insights",
    description: "huge effort on AI/data crunching will yield diminishing returns",
    tags: [
      "[+P1.2]",
      "[H4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "need clearer phenotypes of ageing",
    description: "aged humans regarded as a homogeneous population. Definition of sub-categories may lead to clearer questions/answers<br> ",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "small amount of published results on my research topic",
    description: "not enough people executing experiments in the field",
    tags: [
      "[H0]",
      "[+H0]",
      "[S2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "small number of clinical trials targeting aging rather than diseases",
    description: "aging is not classified as a disease, also limited number of aging biomarkers ",
    tags: [
      "[P2]",
      "[S1]",
      "[+S1]",
      "[T1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "lack of giant ageing omics databases for human data",
    description: "human data is often protected, donor age is not always available in public databases",
    tags: [
      "[X2]",
      "[+X2]",
      "[C10]",
      "[S2]",
      "[S3]",
      "[+S3]",
      "[T4]",
      "[+S2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Difficult to tell what treatments will work in humans",
    description: "",
    tags: [
      "[X1.1]",
      "[S7]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "Lack of good human models of aging ",
    description: "",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "Publicly available datasets are rare and small",
    description: "",
    tags: [
      "[X2]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "getting people outside the aging field to take the field seriously",
    description: "",
    tags: [
      "[P3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "getting people inside the aging field to consider alternatives to the aging as an accumulation of damage theory ",
    description: "",
    tags: [
      "[C11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "Funding is constrained and tends to be going to quite conservative projects.",
    tags: [
      "[F0]",
      "[+F0]",
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Skilled labor",
    description: "The field needs more people with proper Geroscience training in it. The current interest in the space should yield dividends but it will take 5-8 years for the talent pool to deepen.",
    tags: [
      "[H1]",
      "[H4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Tools and integration",
    description: "The field of aging is limited by the quality of its resources and reagents. Higher quality reagents are desperately needed. Furthermore, more integration is needed for the analysis of big data in aging to parse out the wheat from the chaff.",
    tags: [
      "[X0]",
      "[+X0]",
      "[C1]",
      "[X7]",
      "[C2]",
      "[+C4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "the fragmentation/lack of interconnection in the aging field",
    description: "since the aging field is new, there's not much interconnection, and so there are lots of small pockets of people who are weakly--if at all--connected with other groups of people in the field. this makes it hard for us to find them, for them to find us, and for information and opportunities to circulate more generally. it also, i suspect, decreases retention for the field, as the level of difficulty in finding community and building peer relationships is too high for many who end up being dispirited and leave",
    tags: [
      "[C3]",
      "[C11]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "my network",
    description: "i moved into the aging field with literally 0 aging people (that I know of) in my network. i've had to build a network from scratch, and it's going well, but it's taken longer than i expected--partially due to the first bottleneck",
    tags: [
      "[H9]",
      "[+C3]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "resources (especially time)",
    description: "i meet a lot of people that i can help--even with my network being in a pretty nascent state. but i often don't have the resources (especially time & energy) to help. and helping them would go a long way in building a relationship and building trust with them so they can help us<br><br>one interesting example of this: groups researching biology of aging around the world who are extremely loosely--if at all--connected to the field that's coalescing now. there are probably 7-10 different groups at the University of Sao Paulo studying biology of aging, and I'm connected with the right people there. <br><br>my pretty nonscientific hypothesis is that if i were able to integrate them into the field by making introductions to peers, mentors, and funders AND could give them even a pretty small amount of $, there could be significant downstream positive effects.<br><br>to illustrate a piece of that... one of my candidates for Talent Bridge is about to finish her PhD at perhaps the most prestigious research institute in Brazil. she has won 5 scholarships and awards. has clear star potential to everyone who knows her. but she has ZERO first author publications due to lack of resources.<br><br>not only does this mean we do not benefit from what could be good research, but it also means she doesn't build experience and credibility and won't be able to move forward in her career. it makes it harder for us to help her relocate to the US. and odds are, she won't contribute much to the world nearly as much as she is capable of.",
    tags: [
      "[F0]",
      "[C7]",
      "[H1]",
      "[H6]",
      "[+C3]",
      "[F5]",
      "[+F5]",
      "[H9]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Time",
    description: "mouse lifespan experiments take ~30 month",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "long term stability",
    description: "",
    tags: [
      "[F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Funding",
    description: "No specialised funding for ageing in the UK - no NIA equivalent ",
    tags: [
      "[P4]",
      "[C7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Resources for collaboration ",
    description: "No easy way to get joint funding ",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Translation",
    description: "Fundamental disconnect for most academics between bench and clinic",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Drug development expertise",
    description: "Academic labs studying aging do not know how to develop drugs.",
    tags: [
      "[H1]",
      "[H4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Target validation",
    description: "Relatively few validated aging targets.",
    tags: [
      "[S2]",
      "[C8]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Reproducibility",
    description: "Many papers in the space are not reproducible.",
    tags: [
      "[C8]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of effective user interfaces/packaging for ML/Data Science Software",
    description: "Experts in our field with the most experience are generally from older generations, and cannot set up environments/utilize CLI software out of the box. This leads to a severe underutilization of the most effective tools that are out there, so that 1. data analysis is never done effectively, 2. experiments are not designed with a data-first mindset initially (as the endpoint remains qualitative). Furthermore, even with CLI-competent users, sometimes, setting up the environment is impossible and therefore the tool is never used. ",
    tags: [
      "[X7]",
      "[C2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Insufficient data analysis leading to erroneous spend",
    description: "Modern data analysis techniques can elicit if targets either slow aging, or reduce all-cause mortality at all ages but do not slow the rate, i.e. : https://www.nature.com/articles/s41467-022-34515-y<br><br>Many therapeutics are mislabeled as anti-aging, with a ton of $$ spend dedicated to these dead-ends. Better data analysis, data-first thinking, and talk between data scientists and biologists could ameliorate this problem.",
    tags: [
      "[S6]",
      "[H8]",
      "[H3]",
      "[+H1]",
      "[C1]",
      "[+C1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Irreproducibility ",
    description: "Mostly in senescence work, a majority of the body of literature is not reproducible",
    tags: [
      "[C8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Length of experimental observation required to determine effect of a treatment.",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Difficulty and cost of clinical development of anti-ageing treatments.",
    description: "",
    tags: [
      "[T3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of agreed criteria for, and difficulty of objectively determiing healthpsan.",
    description: "",
    tags: [
      "[S1]",
      "[C5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "I lack credibility",
    description: "I dropped out of school to start a software business that I have since sold. For this reason, I do not lack finances or freedom, but have trouble getting my ideas out through standard academic mediums.  ",
    tags: [
      "[H1]",
      "[H9]",
      "[C9]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "I need collaborators",
    description: "I am in the midwest. I suspect this would be less of an issue if I moved to one of the coasts.",
    tags: [
      "[C7]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Stigma",
    description: "I'm working in Alzheimer's and Dementia and there is still a lot of stigma associated with the disease which results in lack of diagnoses and limited possibility for interventions, participation in trials, etc",
    tags: [
      "[P5]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Drug discovery",
    description: "Misalignment between academic grant funding and publication pressure with discovery science.",
    tags: [
      "[P4]",
      "[T2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Mammalian validation",
    description: "Mouse studies are costly and slow. Lack of translational model systems to validate interventions in mammalian systems.",
    tags: [
      "[X1.1]",
      "[X1.2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Investor financing",
    description: "A large inflow of resources spread across multiple approaches is necessary to meaningfully accelerate longevity biotechnology.",
    tags: [
      "[F4]",
      "[+F4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Obtaining NIH grants",
    description: "combination of beauracratic system that is gamed, implicit/explicit bias and anti-basic research bias",
    tags: [
      "[F1]",
      "[F2]",
      "[+F2]",
      "[F9]",
      "[+F10]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Nepotism ",
    description: "this may not be specific to science",
    tags: [
      "[C18]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "poor compensation",
    description: "",
    tags: [
      "[H2]",
      "[+H2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Leaving my current non aging related career",
    description: "Lack of time to plan career move, salary paycut, relocation to the bay area",
    tags: [
      "[H2]",
      "[+H2]",
      "[H9]",
      "[C13]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "pharma partnership",
    description: "they want more data, we need a partner to generate more data, feedback loop",
    tags: [
      "[+P1.3]",
      "[T2]"
    ],
    occupations: [
      "Science communicator"
    ],
    experience: "<1"
  },
  {
    title: "pitching a non-product",
    description: "we're a discovery platform, it's hard to pitch to investors when you don't have a consumer-ready product yet; it's hard to explain to researchers that we are vertically integrated (from lab to analysis)",
    tags: [
      "[P1]",
      "[T5]"
    ],
    occupations: [
      "Science communicator"
    ],
    experience: "<1"
  },
  {
    title: "treatment naive patients",
    description: "we have organic growth, but people drop into the healthcare system once issues arise, so it's hard to grow our following with early-diagnosed autoimmune patients",
    tags: [
      "[T6]",
      "[T5]"
    ],
    occupations: [
      "Science communicator"
    ],
    experience: "<1"
  },
  {
    title: "Systems Bio modeling",
    description: "The field seems to be relatively ignored, imo.  Aging is very much a system-wide process, while most approaches seem to be piecemeal - and many promising new drugs fail, because they didn't adequately take system-wide interactions into account",
    tags: [
      "[C14]",
      "[S7]",
      "[X1.3]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Science communicator"
    ],
    experience: "5-10"
  },
  {
    title: "Public understanding",
    description: "The public at large is still painfully unaware of recent advances in Longevity Science - in 2020, even my coworkers at a large pharma were incredibly ignorant!  (at least until their CSO resigned, and became CEO of Altos Labs!!)",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Science communicator"
    ],
    experience: "5-10"
  },
  {
    title: "Big Pharma and small companies working together",
    description: "I like to make the analogy of NASA + SpaceX",
    tags: [
      "[+P1.3]",
      "[T2]",
      "[C4]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Science communicator"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "Aging is very underfunded and we are in a recession so VC is particularly hard to raise right now. Also the process of raising capital is super time consuming and inefficient. ",
    tags: [
      "[F0]",
      "[+F0]",
      "[F4]",
      "[F10]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Science communicator"
    ],
    experience: "10-20"
  },
  {
    title: "Cheaper and more clinical trials",
    description: "Clinical trials cost $2B. That means we can't run many of them. We need safe and thorough ways to run cheaper trials.",
    tags: [
      "[T3]",
      "[+T8]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Science communicator"
    ],
    experience: "10-20"
  },
  {
    title: "Time",
    description: "I need a clone of myself",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Science communicator"
    ],
    experience: "10-20"
  },
  {
    title: "Challenges in technology development",
    description: "Our goal is to develop new technologies. There are lots of challenges to overcome.",
    tags: [
      "[X0]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Finding applications for technology that hasn't been developed yet",
    description: "We think our technology can help understand aging, but it will need to be proven.",
    tags: [
      "[S6]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Talent",
    description: "Finding the right people with both technical skills and culture fit.",
    tags: [
      "[H7]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Animal study cost",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Limited funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of clarity on FDA regulatory process for aging drugs",
    description: "",
    tags: [
      "[T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Customer engagement ",
    description: "Anti aging perceived as a wish not based in reality ",
    tags: [
      "[P1]",
      "[P3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Regulation ",
    description: "Health claims for experimental technologies prohibited ",
    tags: [
      "[T2]",
      "[T4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "commercialization",
    description: "Requires critical mass of adoption to amortize COGS ",
    tags: [
      "[T5]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "I believe there is a lack of funding in areas of science that are not 'hot-topics.' While I'm not working directly in academia or industry, I've noticed that funding continues to be an issue.",
    description: "I believe it's because under-focused topics seem more risky as investments. ",
    tags: [
      "[F0]",
      "[F1]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Too few people care about aging",
    description: "Even though we as an industry are doing a better job than we used to, the scale is not there",
    tags: [
      "[P6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Not enough money",
    description: "Again it is way better than it is used to be, but we would need way more to do meaningful progress and test a variety of approaches",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Aging clocks are too noisy",
    description: "It is not a problem per se, but now the DNAm and other clocks are being positioned as a tool for personal use, which they are clearly not (because of high noise). This can be a detriment to the industry",
    tags: [
      "[S1]",
      "[T7]",
      "[P3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Difficulties in getting funding for whole animal physiology research",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Limited number of potential collaborators at my institution",
    description: "",
    tags: [
      "[C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: 'Age-related decline in ability and willingness to "push"',
    description: "",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Models that can capture human aging",
    description: "Mouse, worms or fly models are not ideal",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Limitation of using multiple inputs at the same time in existing models",
    description: "Human aging is a complex process that is affected by many environmental and internal conditions",
    tags: [
      "[X12]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "We need to look at the 99% of the genome that doesn't code for protein",
    description: "We haven't gotten anywhere just looking at the protein-coding genes. ",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of consensus on fundamentals of aging",
    description: "We do not understand what aging *is*, biologically. I think this is the single greatest bottleneck in the aging research community. Different people have differing conceptions of what aging is, and so many potentially fruitful discussions among researchers are stifled because of the lack of agreement on what aging is and isn't.",
    tags: [
      "[S9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of quality datasets, specifically large-scale, longitudinal human aging datasets.",
    description: "We need quality datasets to understand what is actually going on during the aging process. I think the focus for both animal and human researchers needs to turn to generation of high-quality, highly resolved, longitudinal datasets of individuals followed over the whole life course. The Dunedin study is a very good model for what we need more of.",
    tags: [
      "[C1]",
      "[+C1]",
      "[X2]",
      "[+X2]",
      "[S2]",
      "[+S2]",
      "[S3]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: 'We need to better connect the computational aging biologists to the "wet lab" aging biologists. These communities have diverse skill sets that could be better combined to achieve more synergy in aging research.',
    description: "This is partially related to my 2nd bottleneck: computational people need better data to be generated by experimental people, experimental people need to better design their studies to be more useful to computational people.",
    tags: [
      "[C4]",
      "[H3]",
      "[C2]",
      "[+C2]",
      "[+X1.1]",
      "[C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Public awareness of potential",
    description: "Lack of credible source intro plus Fear of getting hope up",
    tags: [
      "[P1]",
      "[P3]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Finance directed at aging diseases oblivious to underlying common biology of aging",
    description: "Continuing as was ",
    tags: [
      "[P2]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Money",
    description: "Effort",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Automation of previously done methods.",
    description: "So many things in the cell culture lab, mouse lab, and computational modeling are done before and repetitive and should be automated by robotics or AI, or other solutions.",
    tags: [
      "[X6]",
      "[+X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Validated therapies ",
    description: "",
    tags: [
      "[C8]",
      "[T2]"
    ],
    occupations: [
      "Investor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Limited public embrace",
    description: "",
    tags: [
      "[P6]",
      "[P1]"
    ],
    occupations: [
      "Investor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Sustainable funding for research",
    description: "Tiny/short foundation/philanthropic organization grants and larger NIH grants miss the mark. If you want to make a real impact, find a way to generate SUSTAINABLE funding for research. Huge time and effort wasted on applying for patchwork funding. Happy to elaborate this is a big focus of my own philanthropic work.",
    tags: [
      "[F3]",
      "[F9]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Identify a reliable Biomarker ",
    description: "The agin process is very noisy so biomarkers are most of the times not robust enough ",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Estimate the efficacy and the safety of treatments ",
    description: "The phenotype are often confounding ",
    tags: [
      "[S4]",
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "measuring lifespan",
    description: "hard to take care of animals for a long time",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "finding an intervention for longevity",
    description: "we still don't know what we should target",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Lack of understanding of the space by politicians and influencers",
    description: "",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Entrepreneur",
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "No financial incentives to develop longevity medicines for companies",
    description: "",
    tags: [
      "[T5]"
    ],
    occupations: [
      "Entrepreneur",
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of funding for basic research",
    description: "",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Entrepreneur",
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of 'moonshot' projects",
    description: "Academia is not incentivising such high-risk / high reward research",
    tags: [
      "[F1]",
      "[+F1]",
      "[P4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Public awareness",
    description: "Aging not considered a disease or problem",
    tags: [
      "[P1]",
      "[P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "lack of long-term datasets",
    description: "we often have scarce data points from untraceable sources",
    tags: [
      "[X2]",
      "[C1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "standardized methodologies to study aging across the tree of life",
    description: "comparing results if often challenging during to the different methodologies used to study aging in different taxa",
    tags: [
      "[C2]",
      "[S5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Time it takes to age samples",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Structures of academic science making it difficult to pursue the coolest ideas",
    description: "",
    tags: [
      "[F1]",
      "[P4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "easy access to clinical samples",
    description: "academic labs have lots of great ideas that could be quickly tested if getting clinical samples weren't so difficult",
    tags: [
      "[X3]",
      "[+X4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: " increasing expectations that academic labs will carry out safety and efficacy clinical trials ",
    description: "industry increasingly only wants ideas that are not risky - leaves academics to carry all risks, even if there are no scientific questions left (e.g., just safety and clinical trials)",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "IN general, the gulf between academic labs and industry",
    description: "most findings from academic labs will not result in forward progress - which is why we're stuck re-treading metformin, rapamycin, etc instead of finding new longevity drugs",
    tags: [
      "[T2]",
      "[C16]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Computing power",
    description: "",
    tags: [
      "[X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Difficulty of implementing complicated protocols",
    description: "Cost, poorly written protocols, lack of instrumentation, difficulty of solo learning techniques",
    tags: [
      "[C2]",
      "[+C2]",
      "[H1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Measuring aging",
    description: "",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "endpoints",
    description: "time (hard to measure successful longevity interventions)",
    tags: [
      "[S1]",
      "[+S1]",
      "[T3]",
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Investor",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "tools",
    description: "delivery (potency, toxicity, specificity), precise editing",
    tags: [
      "[X8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Investor",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "FDA recognition",
    description: "need to consider aging as something worth / possible to treat",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Investor",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "We need to the effect of natural genetic variation on response to putative interventions. ",
    description: "This is a major bottleneck, as there is less work on this problem, and so far has been little interest by NIH in funding this problem (though they are trying to ameliorate this problem). This is critically important--the few studies out there on genetic variation and interventions show that for *any* intervention known to increase lifespan, there are genotypes that either don't respond or response *negatively*. ",
    tags: [
      "[S5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Epidemiologists have identified environmental factors that can alter human lifespan by many years. The biology-focused geroscience community pays little attention to this. Biologists and epidemiologists/environmental risk experts need to work more closely together.",
    description: "Little support for cross-disciplinary work in this area, and historical lack of contact between molecular biologists and epidemiologists.",
    tags: [
      "[C4]",
      "[C9]",
      "[H8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "personnel with dual expertise (or interest in developing such) in computational biology and epidemiology",
    description: "not sure. could be that biotech is sucking up all the postdocs. could be that there is just not enough comp bio expertise in api-oriented PhDs ",
    tags: [
      "[H3]",
      "[+H1]",
      "[H8]",
      "[+H5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "longitudinal biological data on large samples of humans",
    description: "there are too few public-domain datasets that observe the natural course of human aging in large numbers of individuals. there are a number of datasets that could help us make rapid progress. but they are closely held and accessing them is intensely bureaucratic and time consuming. ",
    tags: [
      "[X2]",
      "[S3]",
      "[S2]",
      "[C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "mindset",
    description: "My position in the field is quite unique as I propose a model that contradicts the mainstream ideas that most people believe. I think our arguments are the strongest but somehow people think that finding the exact nature of aging is less important than doing blind drug screens and omics. <br><br>I am not sure my case is representative. ",
    tags: [
      "[C5]",
      "[S9]",
      "[C11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Participant recruitment",
    description: "",
    tags: [
      "[T6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "attaining funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "lack of sufficient money for research",
    description: "",
    tags: [
      "[F2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "proper animal model",
    description: "",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "lab communication around the world",
    description: "",
    tags: [
      "[C3]",
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Time in cell culture",
    description: "Limiting factor for testing a large number of experimental conditions",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Limited foundational knowledge, especially in a structured and centralized format",
    description: "",
    tags: [
      "[X2]",
      "[C2]",
      "[S9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Cheap access to aged animals",
    description: "",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Research in Aging is siloed. ",
    description: "Funding is in deep novel science",
    tags: [
      "[C10]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Return On Investment analysis are few is any",
    description: "Real world data takes time. Suggest simulating results and forecast ? ",
    tags: [
      "[C13]",
      "[X0]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Catching Public Imagination. ",
    description: "Requires lay person terms to educate and create concerted and coordinated media, policy and gov outreach",
    tags: [
      "[P6]",
      "[+P1.1]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Ability to digest and understand the science",
    description: "Don't come from a science background, big learning curve",
    tags: [
      "[H1]",
      "[C13]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: "As an investor, the lack of an aging indication for FDA approval limits the scale/speed of development",
    description: "",
    tags: [
      "[T1]",
      "[P2]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: 'Precise definition of (biological) aging -- or lack of a "gold standard"',
    description: "It defines the overarching goal, the target of interventions, and how we measure progress. ",
    tags: [
      "[C5]"
    ],
    occupations: [
      "Biotech researcher",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "(Stemming from a lack of a clear definition...) Tools to measures changes in aging",
    description: "Epigenetic clocks are a start, but they are far from perfect. For example, how quickly can biological aging be slowed, halted, or reversed? Our biomarkers should reflect that time-scale. Another example, does aging happen at an organism-level or tissue-level or cell-level (e.g., Can someone's brain be aging faster than their liver?)",
    tags: [
      "[S1]",
      "[X5]",
      "[+X3]",
      "[S2]"
    ],
    occupations: [
      "Biotech researcher",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Greater translational work (e.g., studying senescence in human tissue) and more validation and benchmarking studies",
    description: "There is a lot of hype in the field right now. Independent validation of findings across species and populations would help distinguish the reproducible findings.",
    tags: [
      "[T2]",
      "[C6]",
      "[C8]",
      "[+C8]",
      "[+X1.2]",
      "[+X1.3]"
    ],
    occupations: [
      "Biotech researcher",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Donations",
    description: "My organization, Lifespan.io, is doing a lot of important work in the media and advocacy field, but like many NGOs, we're underfunded. More donations would allow us to extend our presence and reach.",
    tags: [
      "[F8]",
      "[+F8]"
    ],
    occupations: [
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Conference passes",
    description: "Some conferences are reluctant to provide media passes, not to mention covering expenses, which hampers our ability to provide coverage and amplification.",
    tags: [
      "[C9]"
    ],
    occupations: [
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Paper access",
    description: "Journals have convoluted ways of providing free access to the media or none at all.",
    tags: [
      "[C16]"
    ],
    occupations: [
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "Access to NHP and human brains",
    description: "I'm primarily interested in brain rejuvenation. The testing platforms for brain interventions still feel very nascent.",
    tags: [
      "[S8]",
      "[X4]",
      "[+X5]",
      "[+S10]",
      "[X3]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Robust biomarkers for different organs",
    description: "I assume that this will come from improving proteomics.",
    tags: [
      "[S1]",
      "[+S1]",
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Access to consistent fetal brain tissue",
    description: "A cell therapy that's particularly exciting needs access to genetically identical fetal brain tissue samples on a scheduled basis.",
    tags: [
      "[X3]",
      "[+X4]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Getting FDA to classify aging as a diesease",
    description: "",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Building biomarkers that can act as endpoints in diseases",
    description: "",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of aging biomarker beyond methylation clock",
    description: "",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Limited supply of computational investigators/trainees",
    description: "",
    tags: [
      "[H3]",
      "[+H1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "insufficient funding for research, especially long-term animal and human studies",
    description: "overall, society has invested to little into the scientific community, especially for aging research. NIA was one of the latest established and least funded (outside of Alheimer's specific funds) of the NIH institutes.",
    tags: [
      "[F2]",
      "[F3]",
      "[F9]",
      "[+F9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "misconceptions about the purpose of aging research",
    description: "pop culture focus on billionaires living forever, as opposed to what will be the real impact of understanding aging - everyone living more healthy lives and reducing the overall burden of chronic disease on human society",
    tags: [
      "[P1]",
      "[P3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "regulatory processes that do not recognize and do not provide adequate trial opportunities for aging-related interventions, many of which will need to be preventative, and many of which will not be focused on a single (classically defined) disease/indication",
    description: "regulatory bodies and processes were established before real recognition of the importance of aging to overall human and societal health - we lack metrics, biomarkers and even definitions that would be useful for assessing antigeronic interventions.",
    tags: [
      "[T1]",
      "[+T1]",
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of understanding the importance of mitochondrial genetics.",
    description: "Dominance of the Mendelian paradigm in hypotheses and experimental design. ",
    tags: [
      "[S6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Beta amyloid theory of age related disease.",
    description: "Lack of support for alternative hypotheses.",
    tags: [
      "[S6]",
      "[C11]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Human Donor Cell Access",
    description: "Human Bone Marrow from healthy young and aged Donors is not easy to obtain for biotec and research ",
    tags: [
      "[X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Targeting the ECM",
    description: "Extracellular Matrix Aging is challenging to address given current non-invasive drug delivery vehicles or surgery, implants, infusions, none offering effective treatment options yet",
    tags: [
      "[S6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "We need more Scientific Operators in longgevity biotec, and their salaries are too low compared to administrative and executive levels",
    description: "Performing the research remains to imperative to achieve breakthroughs ",
    tags: [
      "[H4]",
      "[H2]",
      "[+H2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Definition of aging ",
    description: "To design the experiment, it is important to set the definition or criteria. But currently, it is difficult to decide what I should look at to evaluate aging.",
    tags: [
      "[C5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Aging model?",
    description: "Some stresses are known to accelerate aging, but not sure if  they really reflect aging. And as same as described above.",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Contract",
    description: "I understand that it's depend on country or institute, but it is hard for 3-year-contract pod docs to work on 3-year-lifespan animal models.",
    tags: [
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Access to talented motivated scientists",
    description: "",
    tags: [
      "[H4]",
      "[H7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Connections to biotech interested in age-associated diseases",
    description: "",
    tags: [
      "[C9]",
      "[C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of funding",
    description: "Research is expensive",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "biomarkers",
    description: "need to quantify aging and rejuvenation",
    tags: [
      "[S1]",
      "[+S1]",
      "[S2]",
      "[+T4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: " We need AI-driven solutions to understand and deconvolute the complexity of the aging process.",
    description: "",
    tags: [
      "[S4]",
      "[X1.3]",
      "[+X1.1]",
      "[X10]",
      "[+X8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of network dedicated to solving challenges in field of aging",
    description: "",
    tags: [
      "[C4]",
      "[C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of human samples for specific age related diseases. ",
    description: "Difficult to find sources. Often samples not completely labeled, or no chart information.",
    tags: [
      "[X3]",
      "[+X4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of model systems that fully recapitulate human disease. ",
    description: "Species differences in aging process, or genetics not similar enough. ",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of longitudinal studies for disease. ",
    description: "May studies are comprehensive for human disease, but lack age specific time points. ",
    tags: [
      "[S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Obtaining aged samples",
    description: "methods require significant study material, obtain very little per mouse",
    tags: [
      "[X4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "long times required for aging studies",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Time to age transgenic mice",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Independence",
    description: "",
    tags: [
      "[H1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer"
    ],
    experience: "3-5"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer"
    ],
    experience: "3-5"
  },
  {
    title: "Flexibility",
    description: "",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer"
    ],
    experience: "3-5"
  },
  {
    title: "The research directions most likely to result in very rapid or very dramatic advances are at best orthogonal to the most fundable (or even at all fundable) ones within academia, and many of the most promising will still be too early / basic for a company or short-term return driven funding model. Attempts to provide alternative academic funding that are not on par with the size of the NIH R01 grants (~375K/y for 5 years)  that are the benchmark for career survival in academia are excellent catalysts with great potential use cases but cannot incentivize academics away from more NIH-fundable research in the long term. This is not a matter of their personal choice but their of continued employment within this system as it exists currently.",
    description: "",
    tags: [
      "[F1]",
      "[F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "The overlap between (A) reviewers who are able to think outside of the box and are not incentivized strongly away from simply thinking broadly about how to move this field forward in the best / fastest way, and those reviewers (B) who know the technical aspects deeply (things that have been tried and failed, including e.g. things that have never been retracted but have been extremely hard to reproduce, things that are considered settled but are perhaps still not well understood, etc.) is quite limited. There is a lot of potential talent and resources becoming more and more interested in this question but they are sometimes tenuously connected to the best, most unbiased repositories of existing hard-won lessons. Further complicationg this, for any non-tenured academic or other precarious researcher, when useful information might be poorly received by a more senior colleague (e.g. the information conflicts with a finding of theirs, etc.) this communication to outsiders might sometimes be muted, at best.",
    description: "",
    tags: [
      "[H4]",
      "[C11]",
      "[C4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Clear definition of aging",
    description: "",
    tags: [
      "[C5]",
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Aging biomarkers",
    description: "",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Academic bureaucracy",
    description: "",
    tags: [
      "[C15]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Talent and interest",
    description: "There's lots of amazing people working on cutting-edge things in other fields (artificial intelligence, for example) that could contribute greatly to longevity if they became interested in it and if the right incentives were put in place. Despite the fact that these people may be highly technically skilled, there is also a barrier to entry (knowledge of biology, lower compensation, harder/more long-term problems, etc...)",
    tags: [
      "[H4]",
      "[H1]",
      "[C13]",
      "[H2]",
      "[+H2]",
      "[S4]",
      "[+P3]",
      "[+P2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Experimental speed and throughput",
    description: "Sam Rodriques recently wrote a really cool article that discusses this topic a bit (https://www.sam-rodriques.com/post/why-is-progress-in-biology-so-slow). Longevity experiments naturally take time (especially if lifespan needs to be observed). Progress is limited by the number of well-designed experiments that can be run. For example, if running a reprogramming experiment takes you 20 days and your lab is only equipped to run one of these experiments at a time, then you are majorly limited by your iteration speed. I think the key here is automation, but this is very difficult to properly establish end-to-end.",
    tags: [
      "[X1.2]",
      "[X6]",
      "[+X13]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Knowledge gates",
    description: "This one is more philosophical, but I believe there is so much knowledge that different entities hold that could dramatically speed up global research efforts if that knowledge was shared. While academia is a culture of sharing (through the paper system), it's historically been uncommon for biotechs to share their progress / hurdles. While this would require a significant shift in perception, I believe this would be ultimately net good for the world. The same can be said for negative results in academia: if more of these were shared and exposed, I reckon a lot of time would be saved in the future.",
    tags: [
      "[C10]",
      "[C12]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Resolving temporal dynamics (i.e. finding first actors and other causal players)",
    description: "Very few, large, high-quality, high-resolution longitudinal human data sets are available that span a biologically relevant periods of time (i.e. encapsulating prodromal and disease free states, or young individuals).<br>In tissue culture, experiments are not routinely done to even attempt to mimic low-grade, chronic stressors and measure outputs longitudinally",
    tags: [
      "[X1.3]",
      "[+X1.1]",
      "[S3]",
      "[+S3]",
      "[X2]",
      "[S7]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: 'Limited existing statistics and mathematical tools to evaluate complex state changes in various "omics" data',
    description: "We are still limited, as wet lab scientists, to using models that primarily are limited to bidirectional data and pairwise comparisons ( (i.e too much focus on what individual gene goes up and down, instead of which homeostatic feedback loops are perturbed)",
    tags: [
      "[S4]",
      "[+H1]",
      "[X7]",
      "[+X6]",
      "[X1.3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Advanced cell culture models and interventions that recapitulate aging in relevant ways",
    description: "Related to my first point, but reiterating because this is just a lack of effort.",
    tags: [
      "[X1.1]",
      "[+X1.2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of centralized&compelete database for aging-related omic data",
    description: "",
    tags: [
      "[X2]",
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Hard and slow to apply established human data (e.g., FHS)",
    description: "",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of longitudinal data.",
    description: "",
    tags: [
      "[S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Most of the employment and collaboration opportunities are concentrated in the US",
    description: "Harder to transition to the field without relocating to US",
    tags: [
      "[C7]",
      "[H6]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "There is a lack of basic science research in aging biology.",
    description: "Not enough researchers/labs working in the field of aging biology. Those that work is centered in a few nations, despite the global nature of the aging problem. Lack of funds- aging research is time consuming and expensive.  ",
    tags: [
      "[F2]",
      "[+F2]",
      "[X1.2]",
      "[C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Common public misconceptions: e.g., Aging is unavoidable and there is nothing that can be done about it; aging research focuses on finding ways to look younger.",
    description: "Inadequate communication and public outreach to educate people about aging research and why it is important to study it.",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of regulatory framework and template studies targeting aging in humans",
    description: "Time and cost involved is huge. Not enough candidates which fall in safe-accessible category. ",
    tags: [
      "[T1]",
      "[+T1]",
      "[T3]",
      "[T6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Data accessibility",
    description: "Unpublished raw data or difficulty with different formats",
    tags: [
      "[C2]",
      "[X2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Sample sourcing",
    description: "Relatively limited availability of healthy aged donors, as well as lack of human embryonic data",
    tags: [
      "[X3]",
      "[+X4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Limited reach via publications",
    description: "Most high impact journals don't quite understand the field and therefore don't publish quality manuscripts in this area. ",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Limited supply of geriatric mice",
    description: "Aged mice from JAX are expensive, while those from NIA rodent colony has a limit on the number and very old mice are few.",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Lifespan studies are long and expensive",
    description: "Often these studies cannot be done by a junior investigator with limited resources.",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Time",
    description: "Aging research in naturally aged mammals takes a long time to see the results. ",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Risk",
    description: "Aging interventions are too risky. Funding programs prefer to support other kinds of research. ",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "heterogeneity",
    description: "People age and have dementia at different rates and respond differently to interventions",
    tags: [
      "[S5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "unclear cause",
    description: "the real or combined cause of aging and dementia remain unclear which hinders the finding of a target medication",
    tags: [
      "[S9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "data",
    description: "The dataset is not big enough or clean enough for data-driven research",
    tags: [
      "[X2]",
      "[C2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Collaboration with clinicians.",
    description: "Hard to establish and maintain.",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Reproducibility of data/results in the field",
    description: "",
    tags: [
      "[C8]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "human gene set and environment control lifespan and healthspan ",
    description: "Facts",
    tags: [
      "[S5]",
      "[S6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Misinformation",
    description: "Incentives are aligned for hype and personal gain",
    tags: [
      "[C6]",
      "[P1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Model organisms are too short-lived.",
    description: `We typically use short-lived model organisms to study aging, but there's a big problem - most models are short-lived pest specifies and if you don't want to spend the rest of your life on a single study, you kind of have to use them.  So we can extend lifespan several fold in yeast and invertebrates, but even doubling mouse lifespan becomes elusive.  We are therefore put into a position of either using short-lived species, or "breaking" homeostasis in long-lived species, which ultimately will only discover treatments idiosyncratic to the method of the break.`,
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Competitive nature of my field limits collaboration.",
    description: 'Lots of duplication of effort and racing to be the "first".  Lifespan extension interventions can end up in Nature, failure to reproduce in more controlled studies end up buried in lower impact journals. (Not unique to aging - it just takes longer for us and wastes more time and effort).',
    tags: [
      "[C4]",
      "[C12]",
      "[C10]",
      "[C7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Aging is not really targeted in the clinic, rather, age-associated diseases are.",
    description: "This is pretty well-known.",
    tags: [
      "[P2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Ambiguous definition of cellular aging and cellular health.",
    description: "While organismal aging can be measured, cellular aging is not so well defined. ",
    tags: [
      "[C5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Inaccurate published papers.",
    description: "Waste time; give people incorrect impressions.",
    tags: [
      "[C12]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Over-hyping/over-promising",
    description: "Cause policymakers to invest in extremely high-risk/over-hyped research, rather than things more likely to succeed.  ",
    tags: [
      "[C6]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of regulatory path for medicines in this area",
    description: "Can't do lifespan studies in humans; need to translate medicines that block aging mechanisms to particular age-related disorders, which may be a challenge.  Regulatory agencies aren't used to preventative measures; hard to study.",
    tags: [
      "[T1]",
      "[T3]",
      "[+T3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Talent",
    description: "We need many more talented people as the problem (aging) is very difficult to solve",
    tags: [
      "[H4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Funds",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Quantitative biomarkers",
    description: "",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "heterogeneous disease states ",
    description: "potential masking of omics/biomarker signals if we consider all-cause/broad category disease states eg dementia, CVD, diabetes. However, precise definitions reduces power and can also be difficult to carry out, especially with neuro-related traits",
    tags: [
      "[S4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "multimorbidity",
    description: "looking at age-related disease outcomes in isolation (what is typically done in research) is somewhat naive but the temporal nature of disease progression complicates statistical modelling ",
    tags: [
      "[C14]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Confusion around the definition of aging",
    description: "People disagree, mean different things when talking about it to each other, focus on different sub aspects",
    tags: [
      "[C5]",
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Poor biomarkers that reflect core causes of aging, difficult to use, expensive",
    description: "Demonstrating a biomarker truly relates to aging depends on the definition of aging, which is a problem. Epigenetic clocks are the closest thing we have, they are still controversial.",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Length of time for lifespan studies in mammals",
    description: "Mammals live a long time",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Animal models",
    description: "The problem is to have more then just aged mice to work with. We need more then just aged black 6 mice that are commercially available, also rats, and new unknown aging models that have not been used. ",
    tags: [
      "[X1.1]",
      "[+X1.3]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Aged human tissue, cells, organs",
    description: "We all know that animal models are not great, so working with human tissues would be great but getting is expensive, difficult, time consuming. Brain banks for the study of Alzheimer therapies (or other brain diseases) can show us the way. They are a dedicated resource that is cheap and easy to use. No specific additional ethical approval is necessary, no time-consuming collection is necessary and sharing is great. ",
    tags: [
      "[X3]",
      "[+X4]",
      "[T4]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Aging-specific data collection",
    description: "One place that is open source and free where you can share aging relevant data sets.",
    tags: [
      "[X2]",
      "[+X2]",
      "[C1]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Aging biomarkers",
    description: "Hard to discover anti-aging interventions without accurate, high throughput, and biologically relevant biomarkers.",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "In vivo assays",
    description: "Besides lifespan, which takes too long, there are few established assays researchers can use to test their candidate rejuvenating interventions.",
    tags: [
      "[X5]",
      "[+X3]",
      "[S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "People",
    description: "More people should work on this",
    tags: [
      "[H0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "easy access to aged models in the genetically heterogeneous background",
    description: "Aging animals in the lab is expensive and time-consuming, and represents the main limiting factor",
    tags: [
      "[X4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Most of the current knowledge is restricted to males, sex-pooled or sex-unlabeled data",
    description: "AGing differs strongly as a function of sex, and it's unclear what portion of currently accepted hallamarks/processe are conserved across sexes due to the bias in data generation",
    tags: [
      "[S5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "An fast and generally acceptable readout of aging",
    description: "there are many hallmarks of aging, and it's hard to claim a pro-aging or rejuvenation without showing changes in multiple hallmarks.",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Accessible Time Course Data Sets",
    description: "",
    tags: [
      "[S3]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Relevant Model Systems",
    description: "",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "FDA cooperation on General Indications",
    description: "",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Investigating aging as a whole and not single symptoms",
    description: "I would love to know if there is a cellular seed of aging, but it is hard to investigate as molecular biologist as so many pathways are involved and all are interconnected. Hen and egg problem.",
    tags: [
      "[X1.3]",
      "[S4]",
      "[S7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "I'm in academic research, so of course one of the biggest bottlenecks is funding. ",
    description: "The best studies whose data can be mined for a long time require a lot of samples/subjects over time and cross-sectionally. The preparation and maintenance of a useable database for this information also requires skilled and long-term commitment.",
    tags: [
      "[F2]",
      "[+F2]",
      "[F3]",
      "[+F3]",
      "[X2]",
      "[+X2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "In academic research, another issue is that our reward system for labor (publication, funding, status improvement) usually requires staying on the same project for an extended period of time, with luck and skilled researchers on your side. If something fails, or it becomes evident that it will not succeed quickly, there remains a lot of systemic motivation to stick with the project, since precious funds and time have gone into starting it. However, this limits researchers' ability to jump to a project that may be more fruitful, and traps them in a slog that is financially costly. For young/female/POC researchers especially, losing time means losing a lot of career advancement opportunities.",
    description: "",
    tags: [
      "[C12]",
      "[F7]",
      "[+F7]",
      "[F10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Automation and AI :",
    description: "to faster the pace of innovation and reduce the cost to enter the field we need first more automation; It will reduce human labor (time/cost) towards experimentations, thus producing less biased data and results. combined with AI we get predictive models and limit the amount of  trials for instance; ",
    tags: [
      "[X6]",
      "[X10]",
      "[+X1.1]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Legislation and Funding :",
    description: "ethics and rules are against aging companies for now; VCs and funds are still skeptical on investing in risky and long terms start up projects",
    tags: [
      "[T4]",
      "[F1]",
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Education and Bridge Organizations :",
    description: "We need more advocates towards longevity and more people from different backgrounds to come up with new ideas for the field. <br>",
    tags: [
      "[H1]",
      "[+P1.1]",
      "[+P1.2]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "High-risk funding is short/insufficient to cover dedicated personnel and aging projects are long.",
    tags: [
      "[F1]",
      "[+F1]",
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Accepted surrogate outcomes",
    description: "There are no standard measures that are accepted as reflective of aging, other than mortality (rodents or humans)",
    tags: [
      "[S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Data",
    description: "Many people try their own longevity interventions, but no data are collected",
    tags: [
      "[X12]",
      "[X2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "market failure- interventions that are promising in the lab cant be translated to humans ",
    description: "despite increase in knowledge the incidence of obesity is going up- we are up against corporations that do not optimize for human health. There are no incentives to improve human health- but there are to make them sick and treat them. A number of promising treatments that would be safe fall under supplements - only NIH supports that research but not pharma as there is no money to make<br>",
    tags: [
      "[T5]",
      "[+T7]",
      "[T2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Technical",
    description: "",
    tags: [
      "[S4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Getting quantitative (mathematics/physics/complex systems) people thinking about longevity",
    description: "Gerontology has primarily been dominated by biological and hence been mostly driven by reductionist thinking. We need to be accepting of different perspectives and open to new hypotheses.",
    tags: [
      "[H3]",
      "[+H1]",
      "[C9]",
      "[+P1.2]",
      "[S7]",
      "[X1.3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Fellowship and funding awareness for young students and researchers",
    description: "Conferences and meetings need to provide opportunities for young talent to resonate with the mission. This will help people think about longevity as a tractable problem to work on.",
    tags: [
      "[H1]",
      "[+P1.4]",
      "[+H3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Ethical and regulatory concerns around longevity specific drugs and therapies need to become accessible",
    description: "",
    tags: [
      "[T4]",
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Inaccurate understanding of why we age",
    description: "",
    tags: [
      "[S9]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Failure to recognize that aging is programmed",
    description: "",
    tags: [
      "[C5]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Translating lab discoveries into therapies",
    description: "Lack of understanding of how to commercialize lab discoveries ",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Reproducibility across labs and model organisms ",
    description: "Idiosyncratic variations between different research groups and model organisms",
    tags: [
      "[C8]",
      "[C2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Collaborations between industry, academia, and VC",
    description: "",
    tags: [
      "[+C5]",
      "[+C4]",
      "[H8]",
      "[C9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "heterogeneity of how aging is manifested in each individual in a population",
    description: "",
    tags: [
      "[S5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "the length of time required for the research",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "aging encompasses many physiological changes, some in opposing manners in different cells / tissues",
    description: "",
    tags: [
      "[S4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Aged mice avaialbility",
    description: "",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Aging is not an FDA approval indication",
    description: "",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Funding",
    description: "Have transitioned from cancer to aging. Don't have a lot of preliminary data. NIH funding is difficult to obtain.",
    tags: [
      "[F7]",
      "[+F7]",
      "[F2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Number and range of genotypes and species of mammals available for testing interventions",
    description: "Many promising leads take years to follow-up, and replicate.  One genotype of mouse (the usual) is not sufficient to make reasonable predictions about safety or efficacy in humans.",
    tags: [
      "[X1.1]",
      "[X1.2]",
      "[S5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Find the ideal cohort",
    description: "It's difficult to find an ideal cohort that include all the variables of interest, including the omics data, phenotypes data, function data, exposures data (ex: family history, education history, neighborhood, environment, life styles),  being followed up longitudinally. It would be the best to have such a cohort, although it's unlikely to get one. ",
    tags: [
      "[T6]",
      "[+T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Translate from research to the real-world",
    description: "There are many wonderful researchers, but only few of them are able to change the real world based on their findings.",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Freedom of switching topics",
    description: "Current system encourage people to focus on one single topic, and rooms of switching topics may help people to expand the collaboration across different perspectives",
    tags: [
      "[H8]",
      "[H9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Research confined to a few discrete approaches in the NIA. ",
    description: "Traditional focus of NIH institutions",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Insufficient time to conduct my primary research studies ",
    description: "Massive administrative duties and burdens",
    tags: [
      "[C15]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: ">20"
  },
  {
    title: "Bureaucratic regulations and restrictions specific to NIH IRP investigators",
    description: "",
    tags: [
      "[T4]",
      "[C15]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: ">20"
  },
  {
    title: "Funding is not sufficient",
    description: "obvious",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Insufficient emphasis on biology of aging as opposed to engineering, trials",
    description: "Aging biology is insufficiently understood.",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lack of diverse mammalian/human in-vitro/ex-vivo systems that replicate/retain relevant aspects of aging",
    description: "We have no scalable platform to screen against aging/rejuvenation",
    tags: [
      "[X1.1]",
      "[X1.2]",
      "[+X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Cognitive health",
    description: "There exists few diagnostic and remedies for cognitive decline",
    tags: [
      "[S8]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "A continuous blood pressure monitor",
    description: "",
    tags: [
      "[X11]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "More accurate CGM's",
    description: "",
    tags: [
      "[X11]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "Data in human",
    description: "Its hard to have long human longitudinal studies and data from other model organisms are not applicable. ",
    tags: [
      "[X1.1]",
      "[X1.2]",
      "[S3]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Unnecessary arguments",
    description: "The field is stuck with if aging is a disease or not, instead of spending time on the real biology and computational aspects of it.",
    tags: [
      "[+X1.1]",
      "[+S2]",
      "[C18]",
      "[C16]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Individual island",
    description: "Sometimes i feel like we are not using the experiences od other fields such as single cell community or developmental biology",
    tags: [
      "[C9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Viable regulatory path for aging medicines",
    description: "Would increase funding in the space",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Good models for age related indications",
    description: "to improve the likelyhood that animal models will translate to humans",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Sufficient funding for age related research",
    description: "To lower the barrier to entry for 1) non-experts, or 2) experts that have a concept",
    tags: [
      "[C13]",
      "[F0]",
      "[F5]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "No good definition of how to assess aging at a cellular level for high throughput in vitro work",
    description: "I think -omics based cellular/molecular biomarkers like epigenetic and transcriptomic analyses are great, but it would be fantastic if there were also high throughput techniques to study aging as a function of holistic cellular health and function. ",
    tags: [
      "[S1]",
      "[+S1]",
      "[X1.1]",
      "[+X1.2]",
      "[X6]",
      "[+X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Current approaches for methylation clock analysis are expensive with slow turnaround, although hopefully wider-scale adoption of TIME-seq and similar methods will help",
    description: "",
    tags: [
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Not enough time",
    description: "I have a lot of research idea that I could do it, but I have not enough time to complete them, only a few ones. ",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Not enough staff",
    description: "I need much more expert data scientists who would work on my projects",
    tags: [
      "[H0]",
      "[+H0]",
      "[H3]",
      "[+H1]",
      "[H4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "from findings toward clinical applications",
    description: "",
    tags: [
      "[T2]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Tools",
    description: "",
    tags: [
      "[X0]",
      "[+X0]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "Biomarkers",
    description: "",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "Delivery",
    description: "",
    tags: [
      "[X8]",
      "[+X7]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "Funding",
    description: "More funding is needed especially for high-risk projects",
    tags: [
      "[F0]",
      "[+F0]",
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Few consortia devoted to aging research",
    description: "There are few large consortia that are devoted to aging research particularly from a molecular biomarker perspective",
    tags: [
      "[S1]",
      "[+S1]",
      "[+C5]",
      "[C9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Need to train more interdisciplinary scientists",
    description: "Aging and the solutions for it are complex and intertwine many fields. Few places offer the needed interdisciplinary training",
    tags: [
      "[H1]",
      "[H8]",
      "[+H5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Too much noise in the field / unreliable information.",
    description: "",
    tags: [
      "[C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "I have the amount I'd expect for the stage that I'm at and it's nothing systemic, funding is just almost always a bottleneck",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "Recognition",
    description: "Also a general bottleneck for early-stage startups so not unique. Helped immensely by my connection to Ichor",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "Contracted study timing",
    description: "Another general and inevitable bottleneck, but it quite literally is the bottleneck to accelerating my progress at this moment",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "Obtain high quality data",
    description: "",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Understand batch effects between different studies",
    description: "",
    tags: [
      "[S4]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "poor infrastructure for research",
    description: "",
    tags: [
      "[X9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "limited time",
    description: "",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "other competing responsibilities",
    description: "",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Publishing ",
    description: "too much appeal to authority logical fallacy - rich get richer",
    tags: [
      "[C18]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Funding ",
    description: "too much appeal to authority logical fallacy - rich get richer ",
    tags: [
      "[F1]",
      "[F5]",
      "[+F5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lack of consistent training",
    description: "",
    tags: [
      "[H1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of diversity",
    description: "",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Time per iteration/experiment",
    description: "Aging mice or even primary human cells takes time, reducing the experiments I can perform in a given time period",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Not enough researchers --> lower experimental output and/or quality of experiments performed (due to overextension or burnout)",
    description: "each researcher is our lab end up having a growing pile of projects as there's not enough people to carry them out. More researchers in aging would mean more experiments/projects pursued and better data quality",
    tags: [
      "[H0]",
      "[+H0]",
      "[H4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Translational therapeutics and epidemiological studies",
    description: "Need more research done on how we can actually turn the discoveries we have into potential treatments that could be used in humans. Drug discovery, diet manipulations, etc., so that we can begin studying those effects. Also, there are many changes we can make in society that would drastically increase lifespan and we need to be studying those from a sociological/epidemiological POV, might make more impact than basic research in the near future",
    tags: [
      "[T2]",
      "[S3]",
      "[+P3]",
      "[C9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "More collaboration to work with multiple model organisms",
    description: "Pro-longevity findings hold more promise if they can be repeated in multiple animals. If a paper is published in C. elegans, there should be more avenues for that work to be picked up in flies/mice to see if similar mechanisms hold, and this work should be done as a collaboration between groups",
    tags: [
      "[+X1.3]",
      "[C9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Hallmarks/biomarkers of aging",
    description: "We have to have ways to measure of anti-aging therapies work in higher organisms that doesn't rely on lifespan alone, or else we will never be able to do human trials without taking 50 years!",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "A reliable and cost-effective biomarker of aging in different tissues.",
    description: "Current methods to gauge aging are either hard to reproduce or very expensive.",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Hard to get access to mammalian models that are closer to humans.",
    description: "",
    tags: [
      "[X1.2]",
      "[X1.1]",
      "[+X1.5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "There is no map between model organism and humans, so most studies don't apply to us.",
    description: "Most research are not repeatable, and don't translate into therapeutics because we're fundamentally different.",
    tags: [
      "[X1.1]",
      "[C8]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "While it is well documented that lifestyle data matters, most research efforts are focused on looking for therapeutic pathways.",
    description: "People want to know what to do today, without giving value to key biometric data, people are left pray to the supplement industry, buying all kinds of supplements for longevity, most of these supplements haven't been proven for humans yet.",
    tags: [
      "[X11]",
      "[T5]",
      "[T7]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "We're entering the longevity hype cycle, where many people are assuming that we're a few years away from a great breakthrough.",
    description: "Just like AI, just like the internet, just like crypto, after the hype comes the winter; if we're not careful, we might lose the momentum due to people not managing their expectation properly.",
    tags: [
      "[C6]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "Valley of death in startups is tough to overcome, especially for scientists and entrepreneurs in aging who are at a younger stage compared to others in biotech",
    tags: [
      "[F4]",
      "[+F4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Team Building",
    description: "Somewhat due to funding, but tough to bring traditional pharma executives into early startups.",
    tags: [
      "[H7]",
      "[H4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of scientific debate and discourse.",
    description: "Because it leads to unrealistic expectations and efforts that will not slow or reverse aging.",
    tags: [
      "[C4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "low throughput of intervention testing",
    description: "I am a proponent of functionally-relevant readouts when evaluating putative aging interventions. In other words, I want to see obvious health improvements; molecular and cellular data (including clocks) are less convincing. Unfortunately, this requires in vivo testing, which is low throughput, particularly if phenotypes take months/years to manifest. This limits the number of interventions that can be tested.",
    tags: [
      "[X1.2]",
      "[X5]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "translational relevance of preclinical models",
    description: "This is by no means limited to aging research, but is sometimes ignored in aging research more than in other fields. Yeast, worms, flies, and mice are not humans, and there is no guarantee that the mechanisms that extend healthspan/lifespan in those species will have a meaningful effect in humans. This is particularly problematic for mice, because longevity results in mice often garner the most excitement, but mouse aging profiles and causes of death are very different from humans, making me highly skeptical of the translational relevance of the results.",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "lack of gold standard readouts",
    description: `Virtually any aspect of biology can be connected to aging, so the field lacks cohesion. If you go to an aging conference you'll hear 30 interesting talks, but they will be unrelated to each other, using different models, different interventions, and different readouts. For each species, there should be an agreed-upon set of criteria for determining if an intervention has modified aging, similar to how teratoma formation is the gold standard for determining pluripotency. Without such standards, researchers can cherry pick the assays that "work" and ignore the rest, leading to 1) spurious results, and 2) the lack of common language, hindering progress.`,
    tags: [
      "[S1]",
      "[+S1]",
      "[C2]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Obtaining aged human and animal samples. For ex aged mice on Jax are several hundred dollars each",
    description: "",
    tags: [
      "[X3]",
      "[+X4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Accurate a complete biomarker data sets like the proprietary one that BioAge has",
    description: "",
    tags: [
      "[X2]",
      "[+X2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: "Companies",
    description: "There aren't enough companies worldwide",
    tags: [
      "[F4]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: "Media<br>",
    description: "Media coverage is always toward immortality and stuff",
    tags: [
      "[P7]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: "Translation of basic research",
    description: "Not enough funding",
    tags: [
      "[F6]",
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Lack of novel mechanisms to prevent aging",
    description: "",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Lack of funding",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "studies take too long",
    description: "measuring lifespan takes too long; it's hard to measure aging rates instead of lifespan itself",
    tags: [
      "[X1.2]",
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "studies are low throughput and consequently underpowered",
    description: "wet-lab biology is phenomenally slow without automation; mice are expensive",
    tags: [
      "[X6]",
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "mice has low translational validity",
    description: "mice aren't humans; alternatives (i.e., human organoids) are expensive and complex",
    tags: [
      "[X1.1]",
      "[+X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "The studies by definition are very long-term",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Longitudinal studies would be very helpful bu hard to get funded",
    description: "",
    tags: [
      "[S3]",
      "[+S3]",
      "[F9]",
      "[+F9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lab space",
    description: "Acute shortage of lab space in the UK as supply catches up with demand (e.g. due to 2021 biotech boom)",
    tags: [
      "[X9]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "10X Genomics consumables",
    description: "A powerful new technology but with a powerful new price tag. Our largest single cost item.",
    tags: [
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Cell lines of different ages",
    description: "We rely on procuring panels of cell lines to help create the tools that guide our search for rejuvenation biology. It can take months to collect comprehensive panels, time that could be better spend making scientific progress. ",
    tags: [
      "[X3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "access to reasonable aging cohorts ",
    description: "Takes too long to get an aged cohort from the start. You get the funding for projects and try to cobble together some sort of decentralized experiment where mice, dogs etc are included in trials across a highly heterogeneous set of backgrounds (different labs, people pets), which makes it already difficult aging-specific signatures even more difficult to detect reliably",
    tags: [
      "[T6]",
      "[+T2]",
      "[X1.2]",
      "[X4]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "lack of understanding of novelty in the investment community",
    description: "There seems to be an understanding that 5 pathways are sufficient in our understanding of aging and how to tackle it. Epigenetics information loss, Nutrient signaling (MTOR, Sit) Inflammation, protein homeostasis, and people feel as though these lanes are full and there is not many new radically novel findings outside of the big players. You already have billions Altos, Calico being poured into very strong teams working on the problems so it's hard as a young upstart to be taken with credibility.  ",
    tags: [
      "[C11]",
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Understanding the underline biology of aging and identifying drug-able targets ",
    description: "I believe beyond liftstyle intervention we will eventually need therapeutics to meaningfully extend health span. ",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Better quality data on the personalized aging drivers",
    description: "Everyone age differently. Identifying individual's risk factors would support precision medicine.",
    tags: [
      "[S5]",
      "[+S4]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Evidence based clinical research and regulatory pathway",
    description: "We need carefully and cleverly designed clinical trial to provide evidence of risk/benefit of potential therapeutics",
    tags: [
      "[T1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Regulatory cost",
    description: "Previously, we were unable to raise sufficient funds to test a medical device due to the excessive cost in testing relative to the size of the immediate addressable market. We were told it would take up to $25 million to bring the device to market.",
    tags: [
      "[T3]",
      "[F6]",
      "[F4]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "Funding in the longevity space from both VCs and government grants is much more limited than other funding areas (e.g. cancer)",
    tags: [
      "[F2]",
      "[+F2]",
      "[F4]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Small talent pool",
    description: "Hard to find longevity-specific talent",
    tags: [
      "[H0]",
      "[+H0]",
      "[H1]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Insufficient understanding of the underlying mechanisms",
    description: "Aging is multi-multi-mlulti factorial and a super complex process",
    tags: [
      "[S9]",
      "[S4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Aging is a long process and that makes clinical studies difficult, and animal studies of a low translational value. ",
    description: "",
    tags: [
      "[X1.1]",
      "[X1.2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "seed funding",
    description: "",
    tags: [
      "[F4]",
      "[+F4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "large and clean datasets across all omics of diverse cohorts",
    description: "",
    tags: [
      "[X2]",
      "[S3]",
      "[S5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Science communicator"
    ],
    experience: "3-5"
  },
  {
    title: "Fundamental",
    description: "Aging is inevitable. There's a direct correlation between improving quality of life and increasing lifespan. The interplay between these two is not defined well enough. This goes deeper into the question of immortality and what we, as researchers, want to achieve in the end. ",
    tags: [
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Good models for aging",
    description: "Aging hallmarks might be defined, but a good model that recapitulates all of these hallmarks is either missing or not consistent. In addition, many of these hallmarks are shared with other diseases. In the end, aging can be defined as the accumulation and predisposition of different diseases. ",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Simpler and cheaper methods",
    description: "In order for us to fully characterise aging, we need to both show biological and chronological phenotypes in our models. Currently most methods for chronological phenotypes, such as DNA methylation and epigenetic clocks, are expensive and not that straightforward. ",
    tags: [
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "human-centric models of aging",
    description: "animal models are useful but ultimately have different mechanisms and we are missing a lot as a field relying solely on those",
    tags: [
      "[X1.1]",
      "[+X1.6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "convincing theory of aging",
    description: "all current theories are speculative and do not provide a reliable roadmap to create impactful research programmes",
    tags: [
      "[S9]",
      "[+C6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "biomarkers of aging",
    description: "again, there is no clarity how to monitor aging trajectories in humans, especially for short term interventions",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Reliable translatable model systems",
    description: "The field lack reliable in vivo mammalian models to assay life span in a timely manner",
    tags: [
      "[X1.1]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Often scientists focus on one hallmark of aging even though multiple hallmarks needed to be targeted",
    description: "Focusing on one hallmark may not be sufficient to achieve whole-animal longevity ",
    tags: [
      "[C14]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Talent",
    description: "",
    tags: [
      "[H0]",
      "[+H0]",
      "[H4]"
    ],
    occupations: [
      "Biotech researcher",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "Money",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Biotech researcher",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "Bureaucracy",
    description: "Immigration bureaucracy",
    tags: [
      "[H6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Short term funding",
    description: "Time spent applying for funding",
    tags: [
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Insufficient funding ",
    description: "Researcher salaries in academia insufficient to make a living in high cost cities",
    tags: [
      "[F0]",
      "[+F0]",
      "[H2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of researchers talking to the public",
    description: "The longevity community is very inward facing. Count up the number of appearances of most longevity researchers, and you'll see they are at longevity conferences, on longevity podcasts, on longevity youtube channels, etc. Sinclair and ADG are rare exceptions. Aside from that you have some science communicators trying to move the needle (e.g. Andrew Steele, Sheekey, Brad Stanfield).  ",
    tags: [
      "[C9]"
    ],
    occupations: [
      "Media",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "Bystander effect among longevity community + lack of organization",
    description: "Those not working for or a part of a longevity organization (profit, non-profit, or research), are passive consumers of information with little sense of responsibility. Small groups that are highly motivated and well organized can have outsized effects. This is a problem that has to be solved from both sides or it fails to produce any momentum. An organized effort with a lack of activation of individuals is inert, and an activated community with no direction flounders.",
    tags: [
      "[C4]",
      "[P6]"
    ],
    occupations: [
      "Media",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "Distilled messages",
    description: "Well organized movements have powerful and pithy messages- single line arguments that are easy to understand, are compelling, and which are supported with a myriad of stories and examples. I think the longevity movement is largely missing this. Some individuals who regularly give presentations have some messages mastered, but the broader community is unable to articulate the why, let alone the how, which means they will be ineffective as outward facing ambassadors of this space and which will lead them to simply communicating with those who already believe.",
    tags: [
      "[+P4]",
      "[C18]"
    ],
    occupations: [
      "Media",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "Models of aging (cells/animals)",
    description: "Studies take a long time (ie 3 years for mice)",
    tags: [
      "[X1.2]",
      "[+X1.3]",
      "[+X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Funding",
    description: "Success rates for grants are around 5-10% in Australia ",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Aging biomarkers",
    description: "Do current biomarkers accurately represent aging (eg epigenetic clocks)",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Biomarkers",
    description: "Because we need earlier signals that interventions work and don't have time or money to wait for patients to die when measuring lifespan changes.",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Damage cleanup",
    description: "We already know families of molecules that cause problems (arterial plaques, brain plaques, lipofuscin, etc), where are the gene therapies to make enzymes that clean this stuff up?",
    tags: [
      "[X8]",
      "[+X7]",
      "[T2]",
      "[+T4]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "model systems w high clinical validity",
    description: "screens for SASP & life extension in model organisms don't get us at the mechanisms of aging",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "lack of detailed multi-omic longitudinal studies",
    description: "post-diagnosis studies do not reveal multi-causal initiators of aging-related diseases",
    tags: [
      "[S3]",
      "[+S3]",
      "[S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "clinical endpoints",
    description: "need surrogate endpoints beyond time to mortality to speed up intervention OODA loop",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "funding",
    description: "i can only afford to have 5 projects going in parallel, whereas there are at least a dozen that i'd like to pursue",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Mechanical/physical/electrical engineer"
    ],
    experience: "10-20"
  },
  {
    title: "too few exceptional scientists passionate about aging biology research",
    description: "possibly a marketing thing",
    tags: [
      "[H4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Mechanical/physical/electrical engineer"
    ],
    experience: "10-20"
  },
  {
    title: "Extreme lack of automation of basic lab work.",
    description: "People don't scale; machines do.",
    tags: [
      "[X6]",
      "[+X13]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Lack of quick, accurate, low-cost models for testing of interventions.",
    description: "Large bureaucratic overhead burden on simple animal studies significantly slows R&D progress.",
    tags: [
      "[X1.1]",
      "[X1.2]",
      "[C15]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Limited public and private capital for unconventional therapies.",
    description: "",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Understanding the essence of aging.<br>Why it exists at the first place? ",
    description: "Does nature invented such biological principles to prevent non functioning of a biological system after a certain threshold to maintain birth death homeostasis?",
    tags: [
      "[S9]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Interconnection among hallmarks of aging.<br>What is the relationship?",
    description: "Longevity industry to exist must identify these relationships to go from natural evolution to intelligent design principles to go beyond natural biology into engineered biology to enhance healthspan.",
    tags: [
      "[S7]",
      "[+C4]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Tackling the root causes of aging to achieving Longevity.<br>How can it be done?",
    description: "Biology has become information. Computation and mathematics is applicable. So data will enable accelerating simulations of experimental clinical trails. Understanding from human model organisms at the core is key for Longevity industry. Just like a mobile phone, a digital extension of information, we might have a wearable mobile organ a biological extension of health instead of taking drugs, it will self generate biological therapeutics to enhance humans.",
    tags: [
      "[+X1.6]",
      "[+X1.1]",
      "[+X10]",
      "[X1.3]",
      "[S7]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Bad Reputation",
    description: "People associate longevity with charlatanism or transhumanism which brings fear. ",
    tags: [
      "[P3]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Low awareness ",
    description: "The Public don't know what longevity research is, it's hard to grasp.",
    tags: [
      "[P1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Enormous Data",
    description: "Hard to have a strategic overview of the field and use the evergrowing available data. ",
    tags: [
      "[X14]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Scientists turning into Entrepreneurs",
    description: "",
    tags: [
      "[H4]",
      "[H1]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Data (over-) regulation",
    description: "",
    tags: [
      "[T4]",
      "[C10]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Funding ",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Talent ",
    description: "",
    tags: [
      "[H0]",
      "[+H0]",
      "[H4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Expertise ",
    description: "",
    tags: [
      "[H4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of reliable models",
    description: "",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Length of the study",
    description: "",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Clinical trials for anti aging drugs",
    description: "",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Too few explorational grant opportunities",
    description: "Misalignment of incentives (+ see below)",
    tags: [
      "[F1]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Too few grants outside of NIH/NCI for non-traditional PIs. Leads to steep competition (I.e. Impetus virtually impossible to get)",
    description: "Space/vertical is small",
    tags: [
      "[F5]",
      "[+F5]",
      "[F0]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "More radical and risky ideas (rejuvenation/reprogramming) are difficult to get funding for",
    description: "Public/financier perception, bias towards traditional biotech - even for longevity focused VCs",
    tags: [
      "[P2]",
      "[F1]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Not enough like-minded, capable and financially secured people in the industry (to work together)",
    description: "It's always such a blast to meet such a person! All the work starts to move forward exponentially. We come across these people too seldom (but to be fair it's getting better every year). ",
    tags: [
      "[H0]",
      "[+H0]"
    ],
    occupations: [
      "Executive",
      "Science communicator",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "The best life science now (not longevity in particular but biology/medicine/chemistryâ€¦ in general) is being done within unsuited (for life extension ideas) economical structures. Even if we stay within free market what would be the derivatives (financial instruments) in favor of life extension? What are the agents acting accordingly? As a result there is a scarcity of resources for our cause, people are fighting rather than collaborating. We only see human nature at its worse now.",
    description: "I'm not sure I can fit it in one paragraph, it's a topic for the whole book.",
    tags: [
      "[T5]"
    ],
    occupations: [
      "Executive",
      "Science communicator",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Personal medical data access is over-protected and overall there's too much fuss and hysteria around it. People are only talking about its protection but not the harm that the lack of its disclosure is causing. ",
    description: "So many great projects in organized biohacking, self-organized clinical trials, data storage and share, human biomarkers research has stagnated. We could have had much needed open anonymized big clinical data already! As community-builders we too could have been using these platforms, they being great welcoming tool for the new people in the field.",
    tags: [
      "[T4]",
      "[X12]",
      "[X2]",
      "[C10]",
      "[C1]"
    ],
    occupations: [
      "Executive",
      "Science communicator",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "money",
    description: "not enough money from NIA and it's hard to recruit/train/retain people (and do research)",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "time",
    description: "not enough time for research",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "people",
    description: "harder to recruit/retain people",
    tags: [
      "[H0]",
      "[+H0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Team",
    description: "",
    tags: [
      "[H7]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Studies completed",
    description: "A lot of studies depend on time. For now, we have a limited number of studies, and it takes time to have more.",
    tags: [
      "[X1.2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Access to aged mice resources",
    description: "In the US, NIA colonies have limiited availability (usually prioritized for NIA-funded grantees).",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Somewhat of a stigmatism against focusing exclusively on extending maximum longevity in humans - with the more palatable 'healthspan' being offered as somewhat of a (in my opinion) compromise or buffer.",
    description: "Not sure why exactly extending lifespan is seen as not a worthy goal of pursuit.",
    tags: [
      "[P5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of clinical trials with aging as a target outcome.",
    description: "Probably a lack of good biomarkers to measure aging phenotypes, possibly the fact that aging itself may not be strictly classified as a 'disease' to be treated.",
    tags: [
      "[S1]",
      "[+S1]",
      "[T1]",
      "[P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "biomarker for aging in mice",
    description: "somewhere to send off tissue/blood to test if an intervention is working",
    tags: [
      "[S1]",
      "[+S1]",
      "[+C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "access to human tissue",
    description: "expensive, time-consuming, limited tissue types, limited health data",
    tags: [
      "[X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Highly innovative, risky, or exploratory research. Research that could fail, but that is worth the risk in order to discover breakthroughs",
    description: "Conservative funding agencies",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Open research: sharing data, samples, and results freely with the community",
    description: "Academic incentives to publish, private incentives to profit",
    tags: [
      "[C10]",
      "[X2]",
      "[+X2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Novel aging interventions, combinations of interventions",
    description: "More groups starting to try combos, finally, but there hasn't been anyone or any agency willing to fund such a study in the traditional settings. Funding and structures lacking for basic exploratory research and efforts to glean insights from other areas of science or engineering and apply those to aging. Not enough reward for looking outside the lamppost; non-traditional ideas.",
    tags: [
      "[C9]",
      "[+P1.2]",
      "[F6]",
      "[+F6]",
      "[T2]",
      "[+T4]",
      "[F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "open access datasets available for profit / industry use",
    description: "many datasets forbid use in commercial applications",
    tags: [
      "[X2]",
      "[C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "data that measure aging across all platforms (DNAm, plasma proteins, physiology, phenotypes, etc) in every single subject",
    description: "it's expensive",
    tags: [
      "[S2]",
      "[+S2]",
      "[X5]",
      "[+X3]",
      "[X2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "There are not enough systemic approaches being followed",
    description: "Most companies follow the standard biotech/pharma model of developing a single molecule",
    tags: [
      "[C14]"
    ],
    occupations: [
      "Investor"
    ],
    experience: ">20"
  },
  {
    title: "I feel there is not enough focus on the brain.",
    description: "Being physically (cranium) and molecularly (BBB) shielded makes developing treatments for the CNS much harder",
    tags: [
      "[S8]",
      "[+S10]"
    ],
    occupations: [
      "Investor"
    ],
    experience: ">20"
  },
  {
    title: "Regulatory agencies do not consider ageing as an indication to develop drugs against",
    description: "",
    tags: [
      "[T1]",
      "[P2]"
    ],
    occupations: [
      "Investor"
    ],
    experience: ">20"
  },
  {
    title: "Public knowledge of longevity",
    description: "Longevity biotech field is extremely confusing and unapproachable for the average person. ",
    tags: [
      "[P1]",
      "[C13]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor",
      "Media"
    ],
    experience: "3-5"
  },
  {
    title: "heterogeneity of age related disease outcome and difficulty to find animal models ",
    description: "",
    tags: [
      "[S5]",
      "[X1.1]",
      "[X4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Deathist culture",
    description: "Aging is not considered a priority (barely even on the list) for our civilization. Resources and manpower are correspondingly scarce. Healthcare regulations and markets do not facilitate longevity oriented products/services.",
    tags: [
      "[P6]",
      "[T5]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Short-termist thinking",
    description: `Even within the longevity community, most people are looking for "long hanging fruit" that doesn't exist - rather than doing the necessary difficult research and technology development`,
    tags: [
      "[C17]",
      "[+C13]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Artisanal science institutions",
    description: "R&D is mostly still done following century old methods of manual labor and hypothesis and publications ridden with narrative fallacy. Our institutions and funding are setup to maintain it this way. We need to switch to automation, massive empirical data collection, and computational modeling.",
    tags: [
      "[C14]",
      "[P4]",
      "[X6]",
      "[+X13]",
      "[+C4]",
      "[X1.3]",
      "[+X1.1]",
      "[C1]",
      "[+C1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "A lack of good tools for measuring aging and the impact of any interventions.",
    description: "Since interventional lifespan studies in humans are largely impractical the field needs to show that interventions have positive benefit. Currently we are forced to target diseases the FDA recognizes. This is ok initially but will prevent us for actually tackling aging head on.",
    tags: [
      "[S1]",
      "[X5]",
      "[P2]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "No clear understanding of what really drives aging. The field really only understands bits and pieces.",
    description: "Without truly understanding these processes, the field largely stumbles around in the dark.",
    tags: [
      "[S2]",
      "[S9]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "Due largely to the bottlenecks above, there is no clear regulatory path for a true aging therapeutic. Even as we ameliorate those, a concerted lobbying effort will likely be required to sway the regulators.",
    description: "This will be required to make aging/longevity therapeutics reimbursable and available broadly.",
    tags: [
      "[T1]",
      "[+T1]",
      "[P1]",
      "[+P1.5]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "Public dataset accessibility for research",
    description: "",
    tags: [
      "[X2]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Clinical trial endpoints",
    description: "",
    tags: [
      "[S1]",
      "[+S1]",
      "[T1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "# of people working in longevity",
    description: "",
    tags: [
      "[H0]",
      "[+H0]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Not enough aging data",
    description: "Most experiments are done for two conditions, and typically they do not track age",
    tags: [
      "[X2]",
      "[S3]",
      "[C1]",
      "[S7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Not enough longitudinal aging data for healthy human patients",
    description: "Typically, we have data for critically ill patients or cadavers. Whereas, for aging research, we need more longitudinal data for health patients who seldom regularly visit a doctor",
    tags: [
      "[S3]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Overhyped claims, irreproducibility of major results in the field",
    description: "Typically, the results for anti-aging effects are irreproducible, or show minor effects. The quality standards are low. Most of the available results are typically trash. Negative results are not being published at all.",
    tags: [
      "[C6]",
      "[C8]",
      "[C12]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Funding",
    description: "more research",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lab space",
    description: "more research",
    tags: [
      "[X9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "good students/postdocs",
    description: "more research",
    tags: [
      "[H4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Hype",
    description: "Longevity is the hype now, and many longbio startups don't amount to anything, beyond catchy buzzwords (akin to the ICO era of crypto)",
    tags: [
      "[C6]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Regulatory non-recognition of aging ",
    description: "While there is some movement in this front, overall, having to rely on age-associated orphan diseases is a major hurdle",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of representation in media",
    description: "There are many great media communicators in the space, but it's not enough - longevity biotech needs a widespread ideology change. Meanwhile, most popular media (shows, movies, games) that feature long life and/or immortality do so in a negative context (ultra-rich being immortal, overpopulation, crazy egotistical characters, etc). Consequently, most people (incl. high profile like Elon Musk in a recent tweet) have an unfavorable view of the field",
    tags: [
      "[P7]",
      "[P1]",
      "[P5]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Funding",
    description: "",
    tags: [
      "[F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "High-caliber entrepreneurs with sufficient technical knowledge of drug discovery best practices",
    description: "There is no shortage of aging research that can be translated to a business and R&D plan today. Barring the recent exceptional downturn in biopharma markets, there is no shortage of interested investors. But these two resources are abundant because not enough individuals are positioned to translate that promising science to business, meaning the source of NewCos has not been fully mined and there are relatively few investment options in the space still",
    tags: [
      "[H4]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: 'Discussing/marketing "longevity" is challenging',
    description: 'The definition of "longevity" in the minds of those working in longevity medicine/science compared to the definition in the mind of the public is totally different.',
    tags: [
      "[P1]"
    ],
    occupations: [
      "Entrepreneur",
      "Media"
    ],
    experience: "<1"
  },
  {
    title: "Lack of centralized information repositories",
    description: "",
    tags: [
      "[X2]",
      "[+X2]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Lack of clinical trials",
    description: "No defined endpoints/lack of funding",
    tags: [
      "[S1]",
      "[+S1]",
      "[T1]",
      "[+T1]",
      "[F6]",
      "[+F6]",
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of reproducibility",
    description: "Most of experiments are done by one group and it is too expensive/lack of novelty to repeat.",
    tags: [
      "[C8]",
      "[X1.2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Lack of standards in the field",
    description: "Most of the groups choose their own markers of healthspan, they are different between different model organisms, etc.",
    tags: [
      "[C2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "US trade war with China",
    description: "Inhibits the ability to conduct research at scale",
    tags: [
      "[H6]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: ">20"
  },
  {
    title: "Lack of translational models",
    description: "Worms and flies do not age the same ways humans do",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: ">20"
  },
  {
    title: "Funding dedicated specifically to aging",
    description: "It is easier to allocate funding to disease-related projects",
    tags: [
      "[P2]",
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: ">20"
  },
  {
    title: "Funding",
    description: "Work and live in Ireland, funding is difficult for basic science",
    tags: [
      "[C7]",
      "[F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Skepticism",
    description: "Work on bats, difficult as they are non-model organisms",
    tags: [
      "[C11]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of technical resources",
    description: "Work on bats, there is a lack of resources  as they are non-model organisms",
    tags: [
      "[H9]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "No ideal models",
    description: "",
    tags: [
      "[X1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Too many confounding factors for aging",
    description: "",
    tags: [
      "[S4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Not being known or recognized by those who could benefit from my skills and knowledge",
    description: "All the work I have been doing for clients for long is confidential and as such not publicly available. Therefore I have no visible credentials other than occasional discussions on various longevity groups throughout the years. As a result many people that could benefit from my skills are unaware of my skills and expertise if they even know that I exist. The people that are aware of my skills are mainly people that hang around on various longevity groups and have read some of my writings there throughout the years. These people are not the high level people in the industry that have money and power.",
    tags: [
      "[C10]",
      "[H9]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "Capital",
    description: "So I can dedicate more time to creating content that is out in the open and beneficial for the public as well as those in the industry",
    tags: [
      "[F8]",
      "[+F8]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "Financial independence",
    description: "Financial independence is of course just a longer term dream but if I were financially independent I would mostly refuse to do any work that only benefits a select few that pay me instead of being publicicly available for all to benefit.",
    tags: [
      "[H9]",
      "[F0]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "no existing network with other scientists working in aging research",
    description: "",
    tags: [
      "[C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "to finance my aging research I have to support other research for which I get easily funding",
    tags: [
      "[F2]",
      "[+F2]",
      "[F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Finding candidates that combine the scientific expertise and business acumen",
    description: "little talent on the market, no central talent pool",
    tags: [
      "[H4]",
      "[H0]",
      "[C3]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Having proper scientific evidence (e.g. for offered supplements, medication, etc.)",
    description: "difficult tondo a randomized trial on longevity, science overall still very young field, aging is not considered a disease",
    tags: [
      "[T7]",
      "[+T6]",
      "[T1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Overcoming hurdle of customer conviction",
    description: "Aging is not considered a disease, science is young, longevity community is a bubble which leads to overestimating awareness outside of bubble",
    tags: [
      "[P1]",
      "[C6]",
      "[C9]",
      "[T1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Financing",
    description: "never enough money!",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Regulatory",
    description: "Requirements for functional outcomes (as opposed to surrogates) before approval is limiting ",
    tags: [
      "[S1]",
      "[T1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "4 year NIH grant cycles",
    description: "Mouse aging studies can take 5 to 7 years",
    tags: [
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "cost and access to mass-spec proteomics",
    description: "",
    tags: [
      "[X5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "People",
    description: "There is a serious lack of qualified people working on the right problems.  Most people in the field work on the wrong problems, but there is comparatively not even very many working on those vs other fields. Aging interventional research is just starting to claw its way out of being a backwater",
    tags: [
      "[H0]",
      "[H4]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Lack of understanding of the fundamental processes that drive aging",
    description: "Aging is extremely complex.  It's very nature is the chaotic introduction of increasing disorder into a biological system with time.  Even if we did somehow understand the myriad components it would remain an exceptionally hard problem to solve, but we don't.  Best near term bet is to take from nature existing solutions that already exist and replace as much old diseased tissue as possible.  ",
    tags: [
      "[S9]",
      "[S4]",
      "[S5]",
      "[S10]",
      "[+S11]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Cost disease",
    description: "Human clinical research and to a lesser but still large extent, non human preclinical research has some of the most extreme forms of cost disease present in our civilization.  Clinical trials cost between 10-100x what human research studies could cost. Progress is thus 1/10th-1/100th what it could be.",
    tags: [
      "[T3]",
      "[+T8]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Fundings for fundamental research",
    description: "Less and less fundings are allocated to research in fundamental model systems, which precludes the emergence of new groups and projects, and eventually slows down the whole field.",
    tags: [
      "[F2]",
      "[+F2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Dedicated equipment and resources",
    description: "Related to the above point, lack of fundings limits available dedicated equipment, but also the amount of (human) resources to interact with and build-up larger projects.",
    tags: [
      "[X9]",
      "[H0]",
      "[+H0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "lack of standards for biomedical data measurement, storage and sharing",
    description: "required for communication and analysis",
    tags: [
      "[C2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "paywalls for access to scientific journals/papers",
    description: "research funded by public tax dollars should be open and available to the public. ",
    tags: [
      "[C16]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Lack of standard widely available analytical tools for discovery and in-silico hypothesis testing",
    description: "to more easily query data resources with statistical tools to search for insights",
    tags: [
      "[X7]",
      "[+X6]",
      "[C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Access to datasets",
    description: "I have significant academic biological / informatics background, but many of the most useful/comprehensive datasets are not easily publicly available or lack full annotation. ",
    tags: [
      "[X2]",
      "[C10]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Funding",
    description: "I'm an independent researcher currently working part time at a nonprofit, so I don't have funding dedicated to supporting working on primary aging research full time.",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Open science / collaborators",
    description: "See answer to next question below (forum)",
    tags: [
      "[+C12]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "PI's don't really care about bringing in aging drugs",
    description: "artifact of academia. focused on publications. tenure track faculty have been programmed to repeat similar things.",
    tags: [
      "[P4]",
      "[T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Not having access to everyone else's information/input flows/cognitive strengths and weaknesses. Ideally we WOULD have perfect information of EVERYONE'S INPUT FLOWS and get privacy-preserving AI to compare difs between people's infoflows to maximize speed",
    description: "so I best know what to optimally allocate my attention/strategy AND know what to do that's unique, what I'm best at, *and* where I can most easily recruit talent (from within my social group or from the rest of the world)",
    tags: [
      "[X12]",
      "[C3]",
      "[X10]",
      "[H9]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Opportunities to pitch for investments",
    description: "I am looking for investors to support commercialisation of a technology.",
    tags: [
      "[C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Networking",
    description: "It is difficult to get to know relevant players in my geographic location (London).",
    tags: [
      "[C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Mentoring",
    description: "It would be great to know people with whom I can regularly discuss and learn from.",
    tags: [
      "[H1]",
      "[C3]",
      "[+H3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  }
], Vm = [
  {
    title: "A culture of long-termism and optimism about maximizing human health and lifespan.",
    tags: [
      "[+C13]",
      "[+P2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Wide scale perception change --> that obviating aging is a moral imperative.",
    tags: [
      "[+P2]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor",
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "The ability to inexpensively outsource longevity studies to CROs.",
    tags: [
      "[+C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "real metric to evaluate the biological age",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "<1"
  },
  {
    title: "Delt4 ",
    tags: [
      "[+X8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "Aging classified as a disease by FDA",
    tags: [
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Increased regulatory paths to getting longevity medicine to the market.",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Either a special economic zone or a significant change in FDA policy allowing fundamental research in aging interventions to be clinically investigated",
    tags: [
      "[+T1]",
      "[+T3]",
      "[T1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "More organizations like Impetus that fund moonshot proposal ideas at all budgets, ideally with facility support included (like an incubator).",
    tags: [
      "[F1]",
      "[+F1]",
      "[+C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Resource that will help matching anti-aging startups with investors",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "Enhanced funding in aging research ",
    tags: [
      "[+F2]",
      "[F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "High-throughput, cheap, and accurate methods of reading out biological age of cells/tissues/organisms in a way that responds to interventions",
    tags: [
      "[X5]",
      "[+X3]",
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Government guidance on aging as a disease ",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "A hub that allows people from the field to communicate, share expertise and explore potential research directions ",
    tags: [
      "[+C5]",
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "A match making portal to connect volunteers to philantropists to scientists ",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Genome sequences and genome alignment for all mammals, paired with information on longevity for each species. ",
    tags: [
      "[+S4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "Ability to work on (fund funding for) pathways outside the mainstream",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Central facility for getting access to tissues of aged mammals from mice to humans., but needs to be easy.",
    tags: [
      "[X3]",
      "[+X4]",
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "Establishing a data standardization office, with impact on establishing collection and record protocols that generate good data",
    tags: [
      "[+C2]",
      "[+C5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "That negative results in the aging field are published and equally represented in comparison to positive results",
    tags: [
      "[+C11]",
      "[C12]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "We need more advanced technology for functional in vivo characterization of molecules",
    tags: [
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "Said model described earlier",
    tags: [
      "[+X1.1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Funding for human biology",
    tags: [
      "[+X1.6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "a massive, professional PR campaign based on scientific rigor to influence the policy makers and funders primarily, but also the general public",
    tags: [
      "[+P1.1]",
      "[+P1.5]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "funding",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "impact of each epigenetic factor on development and aging",
    tags: [
      "[+S2]",
      "[S2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "increase funding for basic research",
    tags: [
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "FDA indication of Aging as disease",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "choose a good leader and organize the community effectively",
    tags: [
      "[+C15]",
      "[+C5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "<1"
  },
  {
    title: "effective in-home diagnostics or in-body sensors as reliable indicators of biological state of a human",
    tags: [
      "[+X9]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Grant funding",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "tablet to prevent sarcopenia",
    tags: [
      "[+X0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "classifying aging and tissue-specific aging conditions as diseases ",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Large scale, publicly available datasets for ML (e.g. millions of images of unaged vs aged human cells)",
    tags: [
      "[+X2]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "established researchers to publically say aging can be cured in our lifetimes and that finding a cure should be a soceital priority ",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "A deeper talent pool with broad exposure and training in Geroscience would be of immense benefit to myself and others.",
    tags: [
      "[+H0]",
      "[+H3]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Principal investigator/Professor",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Larger budget or more time",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "longer term grants that would give me time",
    tags: [
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Funding.",
    tags: [
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Quality assurance in academic centers.",
    tags: [
      "[+C7]",
      "[+C8]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "More frontend work to enable use of software by more biologists",
    tags: [
      "[X7]",
      "[+X6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Accurate, easy and inexpensive cross-species biomarker for biological age.",
    tags: [
      "[+S1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "More pipelines for independent research to impact the space. I think there are alot of people like me from non-academic backgrounds that are doing this type of work in silos and the field would benefit from there being mediums through which to present the ways that people outside of academia and even industry biotech are thinking about aging.. ",
    tags: [
      "[C9]",
      "[+P1.2]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "obtaining sustained funding ",
    tags: [
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Aging job board",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "would be great if one site like AcademicLabs could show you all biopharma by their preclinical pipelines, specifically the indications and targets/pathways of interest, to help us tailor our pitches",
    tags: [
      "[C13]",
      "[+C9]"
    ],
    occupations: [
      "Science communicator"
    ],
    experience: "<1"
  },
  {
    title: "My work is in Systems Bio modeling, and I turned it into an open-source project, Life123.science  .  Funding and more collaborators would make a difference",
    tags: [
      "[+C4]",
      "[+X1.1]",
      "[F0]",
      "[+F0]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Science communicator"
    ],
    experience: "5-10"
  },
  {
    title: "100X the VC funding to longevity startups and make it much easier to get warm intros to well matched VCs.",
    tags: [
      "[+C3]",
      "[+F4]"
    ],
    occupations: [
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Science communicator"
    ],
    experience: "10-20"
  },
  {
    title: "I think there can be an improvement around social perception of aging and futuristic technologies. Some topics are still thought of as taboo and makes it difficult to attract people and funding in the space.",
    tags: [
      "[P5]",
      "[+P2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Special FDA Regulatory group for aging focussed clinical trial ",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Deregulation of experimental technologies via the equivalent of the accredited investor option for early adopters who accept extreme high risk of experimental technologies. ",
    tags: [
      "[+T3]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "Most of biotech still features PhDs and older-executives at the helm, and while I believe more experience is certainly important for a complex field such as biology, I wonder if there are other ways of showing 'scientific-capability' without having to do a PhD or MD. ",
    tags: [
      "[+H4]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "I think more people caring about aging will drive more of everything else",
    tags: [
      "[+P2]",
      "[+P1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Close collaboration with labs/individuals using modern cutting edge molecular, genetic and statistical approaches",
    tags: [
      "[+C4]",
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: 'At this point, we need to start studying various organism with different lifespan and see why certain organism live longer and what maybe causing it. We need to integrate all kind of "omics" study and beyond. ',
    tags: [
      "[S5]",
      "[+S4]",
      "[+C1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "A consensus on the biological nature of aging",
    tags: [
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Mass media driven public awareness",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "Intelligent robotics to automate things.",
    tags: [
      "[+X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "Universal and reliable biomarker ",
    tags: [
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "lifespan measuring institute/company that uses a uniformed method",
    tags: [
      "[+C10]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "A massive piece of legislation that emphasizes increasing life expectancy in the US by investing heavily in aging biotech.",
    tags: [
      "[+P1.5]"
    ],
    occupations: [
      "Entrepreneur",
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "widespread acknowledgement of aging as a disease.",
    tags: [
      "[+P2]",
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Standardized, long-term, and curated dataset of births, deaths and reproductive events",
    tags: [
      "[+X2]",
      "[+C2]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "More funding for wilder ideas",
    tags: [
      "[+F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "intermediary that does clinical trials of some sort for promising work from academia",
    tags: [
      "[+T5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Widely available cloud compute",
    tags: [
      "[+X6]",
      "[+X11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "delivery tools ",
    tags: [
      "[+X7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Investor",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "More funding.",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "streamlining access to the series large scale publicly funded longitudinal studies initiated by NHLBI and currently supported primarily by NIA (ARIC, CARDIA, MESA, CHS, Jackson Heart Study, Strong Heart Study, Bogalusa Heart Study)",
    tags: [
      "[+X2]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Broader research participant databases -- I work in human neuroimaging. It takes a lot of time and work to find eligible participants. We are building our own database locally, but it has been hugely challenging.",
    tags: [
      "[+T2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "resource ",
    tags: [
      "[+F2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "searchable and structured knowledge base for raw literature data",
    tags: [
      "[+X2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Acceptance of aging as an indication for FDA clinical trials",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: 'A consensus paper -- similar to the Hallmarks -- that describes a "gold standard" measure of aging (and provides evidence) OR a statement that we should all be highly specific and precise in our published definitions of aging (e.g., What time scale? What biological scale [cell vs organism]?) .',
    tags: [
      "[+S1]",
      "[+C6]"
    ],
    occupations: [
      "Biotech researcher",
      "Executive",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "More awareness for the importance of the work we're doing.",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Media"
    ],
    experience: "1-3"
  },
  {
    title: "A multi-billion dollar federal initiative dedicated to brain rejuvenation research",
    tags: [
      "[+S10]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Having access to multiple large longitudinal studies with ease",
    tags: [
      "[X2]",
      "[+X2]",
      "[S3]",
      "[+S3]",
      "[C10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "NIA aged rodent colony",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "increased funding for fundamental research, especially long term funding (the typical 2-5 year funding cycle of NIH is insufficient to support aging studies, which by definition must extend over much longer time periods).",
    tags: [
      "[+F2]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Capacity of study sections and NIH to fund research other than the prevailing paradigm.",
    tags: [
      "[F1]",
      "[+F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Human Bone Marrow samples from yound and aged donors, healthy or with known condition ",
    tags: [
      "[+X4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: "Definition of aging ",
    tags: [
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Connections to biotech interested in age-associated diseases",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "More funding opportunities",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "a consortium for making consensus ",
    tags: [
      "[+C5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "innovation hub centred around bridging the gap between research and biotech (in the field of aging and longevity)",
    tags: [
      "[+T5]",
      "[+C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "It would be a combination of the first and third, human age related samples with longitudinal data. ",
    tags: [
      "[+S3]",
      "[+X4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "greater access to aged samples",
    tags: [
      "[+X5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "Private (non-academia) support that is more geared toward exploration than profit.",
    tags: [
      "[F5]",
      "[+F5]",
      "[+F1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer"
    ],
    experience: "3-5"
  },
  {
    title: 'For some of the structural obstacles I cannot propose a great solution unfortunately. For one of them I might suggest that there is a missed opportunity in having "outside the box" "not NiH-fundable" non-NIH funding mechanisms that are similar in size to the R01 mechanism, and that although the cost is non-trivial, if slight consideration is given to not only funding the researchers for the same projects that could/would have been funded by other mechanisms,  the impact from somethign like this could potentially be very very large.',
    tags: [
      "[+F1]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "One thing that would be really cool is some sort of centralized repository of aging research information. Everyone can contribute their knowledge (maybe through an incentive system to motivate people). As long as it is catalogued very well, I think something like this would be hugely beneficial (at least until the rise of artificial general intelligence).",
    tags: [
      "[X2]",
      "[+X2]",
      "[+C9]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "Tool: A set of validated treatments that show, in cell or animal models, recapitulation of 80% or more of the epigenetic, transcriptomic and metabolomic changes with age.  Resource: A high resolution, single cell atlas of human aging across multiple tissues (starting from adolescence, and with high density in the 40s to 60s). Regulatory change: Right to prescribe and run trials on safe compounds for anti-aging interventions.",
    tags: [
      "[X2]",
      "[+X2]",
      "[+S2]",
      "[T1]",
      "[+T1]",
      "[X0]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Multi-omic data of a longitudinal human cohort, with multiple time point",
    tags: [
      "[+X2]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "1. Flexibility of US Visa. H1-B and O-1 Visa are currently tied to an employer. 2. Financial freedom: Being able to work on different areas of longevity without being constrained by having to sustain living costs",
    tags: [
      "[H6]",
      "[+H6]",
      "[H2]",
      "[+H2]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "More public and private funding in Europe",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "public outreach ",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Very streamlined/unified formatting and toolsets for aging sequencing data (Illumina chips are close, but probes are limited in their own way).",
    tags: [
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "My lab would tremendously benefit from companies/cores offering lifespan, healthspan services. ",
    tags: [
      "[+C10]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "The most significant positive impact on my work would be for aging to be seen socially as a disease. If so, research would advance globally as in many other fields, such as cancer research.",
    tags: [
      "[+P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "UK Biobank and clinical studies",
    tags: [
      "[+X2]",
      "[+S3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "don't know how to counteract misinformation",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "A long-lived animal where you could flip a switch and get an aged animal that perfectly recapitulates chronological aging phenotypes.",
    tags: [
      "[+X1.5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "A precise understanding and measurement of cellular aging",
    tags: [
      "[+S2]",
      "[+S1]",
      "[+C6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Clear path to regulatory approval for medicines that target aging mechanisms.",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Easy access to cheap aging biomarkers for all model organisms",
    tags: [
      "[+S1]",
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Money",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "More people",
    tags: [
      "[+H0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "easy access to aged models in the genetically heterogeneous background",
    tags: [
      "[+X5]",
      "[+X1.3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "an assay to profile RNA and DNAm clock in a cheap and fast way.",
    tags: [
      "[X5]",
      "[+X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Standardized Database of Results and Biomarkers",
    tags: [
      "[X2]",
      "[+X2]",
      "[C2]",
      "[+C2]",
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "More funding for long term projects; more interconnected work to tackle big problems together instead of fear to be scooped (huge aging web-hub to interactively see and discuss work of others?), also show more negative data so we know what has been done already",
    tags: [
      "[+C4]",
      "[+F3]",
      "[+C11]",
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "A social norm in aging research that researchers work together as a team, and publish as a team, rather than individual stars working in close-ish proximity but trying not to step on each other's toes and debating who gets to be first author.",
    tags: [
      "[C4]",
      "[+C4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "As a Biotech Engineer I look for better AI models and Automatization tools, ",
    tags: [
      "[+X13]",
      "[+X8]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Collection of health data and permission to contact for supplement users",
    tags: [
      "[+X12]",
      "[+T2]",
      "[+X2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "regulatory- create incentives for people to get healthy ",
    tags: [
      "[+P3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Technician ",
    tags: [
      "[+H9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Provision for internships/exchange research programs will increase the diversity of hypotheses pursued.",
    tags: [
      "[+P1.2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "3-5"
  },
  {
    title: "A social media platform that connects academics, industry, VC, and startups to solve common longevity problems ",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "single cell / single tissue / single individual measurement through aging timecourse, then computational tools to analyze all the data and provide outputs that can be interpretable by a researcher!",
    tags: [
      "[+S2]",
      "[X7]",
      "[+X6]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "An NIH program for researchers transitioning from other fields into aging.",
    tags: [
      "[+H3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "1-3"
  },
  {
    title: "More genetically diverse mice and at least one other species of a range of ages that would be available for testing promising new interventionsl",
    tags: [
      "[+X1.3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Probably more time to talk with mentor regarding to the future of aging research",
    tags: [
      "[+H10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "Give more prominence to Aging in other Institutes",
    tags: [
      "[+P1.5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "Protected time",
    tags: [
      "[+C14]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: ">20"
  },
  {
    title: "Increased funding availability for investigation work.",
    tags: [
      "[+F2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: " Mammalian/human in-vitro/ex-vivo systems that replicate/retain relevant aspects of aging",
    tags: [
      "[+X1.3]",
      "[+X1.2]",
      "[+X1.6]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "More continuous health monitoring machines",
    tags: [
      "[+X3]",
      "[+X9]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "<1"
  },
  {
    title: "Rapid access to funding for 'ideas'",
    tags: [
      "[+F10]",
      "[+F1]"
    ],
    occupations: [
      "Entrepreneur",
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "An AI-based automated data scientist or funding for hiring many data scientists/bioinformaticians to my own research group.",
    tags: [
      "[X10]",
      "[+X8]",
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "publicly available summary data and tutorial for new bioinformatic analysis",
    tags: [
      "[X2]",
      "[+X2]",
      "[+H1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "Money",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "Large database of individuals with many aging biomarkers assessed and detailed demographic and geographic information",
    tags: [
      "[X2]",
      "[+X2]",
      "[S2]",
      "[+S2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "3-5"
  },
  {
    title: "'True' peer reviews, more objectivity, less 'hype'.",
    tags: [
      "[+C8]",
      "[+C5]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "A comprehensive database of molecular crosslinks including causative diseases (i.e. diabetes for AGEs, CKD for carbamylation, etc), resulting complications, strategies to inhibit/break if available, companies and labs targeting and literature, etc.",
    tags: [
      "[X2]",
      "[+X2]",
      "[+S2]",
      "[+C9]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "3-5"
  },
  {
    title: "better infrastructure and more research sponsored time",
    tags: [
      "[+C7]",
      "[+F7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Tax",
    tags: [
      "[+H10]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "<1"
  },
  {
    title: "FDA enabling more right to try medicines.",
    tags: [
      "[+T3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Making reserach on aging more appealing (with better incentives such as better salaries, easier/prioritized research founding) so more people can work on aging",
    tags: [
      "[+H2]",
      "[+F0]",
      "[+P2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "1-3"
  },
  {
    title: "A framework of collaborators working on different organisms that are willing to try to repeat findings in different models to test which might be feasible to apply to humans. This INCLUDES Human data sets to dig through - information about behavior, genetics, diet, and lifespan to comb through",
    tags: [
      "[+C5]",
      "[+C4]",
      "[+C8]",
      "[+S3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "A platform that update the current progress/publications on the relevant topics of aging research.",
    tags: [
      "[+C9]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "I'd regulate the supplement industry, not to turn it into the FDA, but to get manufacturer to back their claims with studies and stop the fake marketing. I'd start a mapping initiatives to map rodents organisms with the human organism to help improve scientific research.",
    tags: [
      "[+T6]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "Lab space with other aging researchers",
    tags: [
      "[+C7]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "Grouping scientists who are greatest proponents with those who are harshest critiques of popular longevity approaches to have a constructive scientific debate.",
    tags: [
      "[+C5]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: `Agreed-upon gold standard longevity readouts for each model organism (worms, flies, mice, rats) that make it easier to compare apples-to-apples for longevity studies. Something akin to "if you don't use this assay in your paper, you can't call it a longevity paper". And the readout shouldn't be lifespan, because 1) it's a crappy surrogate for health, 2) it is less likely to be translationally relevant than physiological readouts, 3) it takes forever.`,
    tags: [
      "[C2]",
      "[+C2]",
      "[+S1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Aged mice for testing biomarkers and potential clinical therapeutics",
    tags: [
      "[X4]",
      "[+X5]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "I am opening a funding platform for longevity companies",
    tags: [
      "[+F4]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "<1"
  },
  {
    title: "More money and interest in scientifically sound, translational research or companies",
    tags: [
      "[+F6]",
      "[+F4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: ">20"
  },
  {
    title: "automated cell culture",
    tags: [
      "[+X13]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "a 10 year funding mechanism from NIH or industry",
    tags: [
      "[F3]",
      "[+F3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Rapid and quality supply of different cell types of different ages",
    tags: [
      "[+X4]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "10-20"
  },
  {
    title: "A way to increase visibility of IP being generated, but not yet published at leading schools like harvard, starford. Like if you can talk to a bunch of grad students who have potentially awesome idea but don't quite know how to put a pitch deck, run the numbers and build out the operations and logistics arms of a company to make it actually commercially viable. ",
    tags: [
      "[+C9]",
      "[+C3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "more clinical research and paving the way to regulatory clarity. ",
    tags: [
      "[S3]",
      "[+S3]",
      "[+T1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "More longevity funding",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Data scientist/Software engineer"
    ],
    experience: "1-3"
  },
  {
    title: "Better tools and faster processes to recuruit volunteers for clinical studies.",
    tags: [
      "[+T2]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "1-3"
  },
  {
    title: "funding for pilot projects",
    tags: [
      "[+F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "global database of >1M people with all possible measuremnts",
    tags: [
      "[+C1]",
      "[+X2]",
      "[+S2]",
      "[+S4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Science communicator"
    ],
    experience: "3-5"
  },
  {
    title: 'A good and reliable model for aging would have allowed us to improve our work. As the question of "What is aging" is not yet clearly defined, this makes it harder. ',
    tags: [
      "[C5]",
      "[X1.1]",
      "[+C6]",
      "[+X1.4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur"
    ],
    experience: "3-5"
  },
  {
    title: "recognition of aging as a disease by FDA and other regulators",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "developing multiple biosensor that targets multiple hallmarks to study aging in vivo",
    tags: [
      "[+S1]",
      "[+X3]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Oprah",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Biotech researcher",
      "Principal investigator/Professor",
      "Science communicator"
    ],
    experience: ">20"
  },
  {
    title: "Society could make it even less of its business what I personally choose to work on (as long as I don't present a clear and present danger to another person)",
    tags: [
      "[P5]",
      "[+P2]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Ideally, I would love to work in a research institute with sufficient resources to enable full focus on advancing research. It should optimally be located in multiple jurisdictions to avoid the need to immigrate, which wastes peoples time and money on ineffecient bureaucracy. Absolutely not to be located in a high-cost, high-inflation prone metropolitan area where increasingly only careers in commercial product development make any sense.",
    tags: [
      "[C7]",
      "[+C7]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "A thorough outward facing study on messaging to the public. Which terms quickly and effectively communicate info regarding this field? Which inspire credibility vs skepticism? Excitement vs caution/fear? Motivation vs apathy? What evidence quickly and easily supports our positions?",
    tags: [
      "[+P1.1]"
    ],
    occupations: [
      "Media",
      "Science communicator"
    ],
    experience: "1-3"
  },
  {
    title: "Unlimited money",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "More funding in the field, to drive up salaries would help me quit software engineering and move into bio tech.",
    tags: [
      "[F0]",
      "[H2]",
      "[+H2]"
    ],
    occupations: [
      "Data scientist/Software engineer",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "stopping publishing 95% of papers and using machine-readable data formats instead; it's 2023 and it's ridiculous that I have to read 20+ papers to figure out what has and has not been replicated",
    tags: [
      "[X2]",
      "[+X2]",
      "[C2]",
      "[X14]",
      "[+C2]",
      "[C1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "a super-consent method of doing dangerous clinical trials: people could prove through, say, a monitored, detailed test, that they understand the risks and value proposition of the proposed clinical trial. this could allow risky, preventative-medicine trials without having to go into overseas jurisdictions, where there is worse infrastructure for patient monitoring.",
    tags: [
      "[T4]",
      "[+T3]",
      "[+T8]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Mechanical/physical/electrical engineer"
    ],
    experience: "10-20"
  },
  {
    title: "The availability of GUI-driven, automated, basic lab tools and ethically cloned organs and tissues for studies.",
    tags: [
      "[X3]",
      "[+X4]",
      "[+X1.2]",
      "[+X13]",
      "[+X6]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "3-5"
  },
  {
    title: "Core foundation team of nin conventional executioner, researchers, engineers something like youngmind similar to deepmind.",
    tags: [
      "[+H10]",
      "[+C4]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "1-3"
  },
  {
    title: "A way to automatically synthetize the research and have a visualisation of it.  ",
    tags: [
      "[+C9]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Funding ",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Better model",
    tags: [
      "[+X1.4]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Small 20-75K exploratory grants for risky PoC work with favorable IP terms for builders.",
    tags: [
      "[+F1]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Some policy to disclose medical data (maybe oblige MDs to give the data to the patient in the end of each appointment would be sufficient, the patients could do the rest themselves). ",
    tags: [
      "[+P3]",
      "[+T10]",
      "[+X12]"
    ],
    occupations: [
      "Executive",
      "Science communicator",
      "Other (specify)"
    ],
    experience: "5-10"
  },
  {
    title: "funding agency",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "Beta testers of our technology",
    tags: [
      "[+T2]",
      "[+X12]"
    ],
    occupations: [
      "Entrepreneur"
    ],
    experience: "5-10"
  },
  {
    title: "regulatory policy change recognizing aging is a disease",
    tags: [
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "1-3"
  },
  {
    title: "Aging being classified as a disease by the FDA and related bodies, to accelerate trials and encourage increased funding in the field of geroscience.",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "an easy-access human tissue biobank with health and multiomics data",
    tags: [
      "[+X4]",
      "[+X2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "Free researchers from ulterior motives to encourage open research and collaboration. Requires fundamental structural changes to how science is conducted.",
    tags: [
      "[+C12]",
      "[+C4]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "a large, open source dataset with thousands of clinical variables available for company use",
    tags: [
      "[+X2]",
      "[S3]",
      "[+S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "The acceptance of ageing as a indication to develop drugs against",
    tags: [
      "[+T1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: ">20"
  },
  {
    title: "Scientists/researchers communicating their work in clear/plain English. ",
    tags: [
      "[+P1.1]",
      "[+P4]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive",
      "Investor",
      "Media"
    ],
    experience: "3-5"
  },
  {
    title: "mammalian models that age more rapidly",
    tags: [
      "[+X1.7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "A global culture with a war-time mentality towards fixing aging ASAP",
    tags: [
      "[+P2]"
    ],
    occupations: [
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Standardized tools to measure aging that faithfully represent the human aging process, so we could compare various interventions in a meaningful way.",
    tags: [
      "[+X3]",
      "[+S1]",
      "[+C2]"
    ],
    occupations: [
      "Executive"
    ],
    experience: "5-10"
  },
  {
    title: "Public database centralization, parallel processing, and accessibility",
    tags: [
      "[+X2]",
      "[X7]",
      "[+X6]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "1-3"
  },
  {
    title: "Access to a structured aging data, collected under controlled conditions.",
    tags: [
      "[+X2]",
      "[C2]",
      "[+C2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher"
    ],
    experience: "10-20"
  },
  {
    title: "Making aging a treatable condition  ",
    tags: [
      "[T1]",
      "[+T1]",
      "[P2]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "Highly objective and validated multi-tissue biomarker of aging ",
    tags: [
      "[S1]",
      "[+S1]"
    ],
    occupations: [
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "More unbiased funding programs ",
    tags: [
      "[+F0]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "10-20"
  },
  {
    title: "Drawing more capable individuals experienced in pharmaceutical R&D into the healthspan therapeutics field",
    tags: [
      "[+P1.3]",
      "[+H5]",
      "[+H9]"
    ],
    occupations: [
      "Executive",
      "Investor"
    ],
    experience: "10-20"
  },
  {
    title: "A celebrity/champion for longevity who is not an egomaniacal white male billionaire.",
    tags: [
      "[P3]",
      "[+P1.1]"
    ],
    occupations: [
      "Entrepreneur",
      "Media"
    ],
    experience: "<1"
  },
  {
    title: "A comprehensive mapping of all genes, nucleic acids, proteins, metabolites, etc. that are associated with aging and how they interact with each other",
    tags: [
      "[+S2]",
      "[+X1.1]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "1-3"
  },
  {
    title: "Guiding me through the process of starting my own clinical trial",
    tags: [
      "[+H10]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "The Aging Research and Drug Discovery conference - AgingPharma.org",
    tags: [
      "[+C5]",
      "[+C3]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: ">20"
  },
  {
    title: "Funding to develop bats as new model study systems, including funding for field work.",
    tags: [
      "[+X1.5]",
      "[+F1]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "A comprehensive genomic, proteomic, and metabolic dataset of aging comparing with young",
    tags: [
      "[+X2]",
      "[+S2]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "<1"
  },
  {
    title: "If there were better measures in place to recognize talent from self education",
    tags: [
      "[+H4]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "10-20"
  },
  {
    title: "better networking in the field of aging research and more easily funding in this field",
    tags: [
      "[+C3]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  },
  {
    title: "Considering aging a disease ",
    tags: [
      "[+P2]",
      "[T1]",
      "[+T1]"
    ],
    occupations: [
      "Other (specify)"
    ],
    experience: "<1"
  },
  {
    title: "Conditional approval of (aging) drugs on the basis of surrogates (eg an aging clock) would be a big improvement!",
    tags: [
      "[+S1]",
      "[+T1]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "high quality low-cost proteomics service",
    tags: [
      "[+X3]",
      "[+C10]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "10-20"
  },
  {
    title: "FDA delenda est",
    tags: [
      "[+T3]"
    ],
    occupations: [
      "Biotech researcher",
      "Entrepreneur",
      "Executive"
    ],
    experience: "10-20"
  },
  {
    title: "Winning the lottery ! And maybe more hype from the community to try to understand aging at the very fundamental level. Which eventually will help to develop quicker and better translational approaches.",
    tags: [
      "[+F0]",
      "[+C6]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "5-10"
  },
  {
    title: "an in-silico model of human health that could be used to replace humans in early phase clinical trials",
    tags: [
      "[+X1.1]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Investor",
      "Principal investigator/Professor"
    ],
    experience: ">20"
  },
  {
    title: "A forum for sharing reproducible analyses of existing data beyond ad-hoc fashion (ex: highly trafficked and converging on shared work rather than low traffic), making data available, and discussing the conclusions rigorously (similar to highly used code on GitHub). (This would be helpful for all of science, not just aging! It likely needs critical mass of high quality work and probably moderation to do well.)",
    tags: [
      "[C2]",
      "[+C2]",
      "[+X2]",
      "[+C4]"
    ],
    occupations: [
      "Biotech researcher"
    ],
    experience: "5-10"
  },
  {
    title: 'Working on outside the box research and importantly acceptance of "negative" results. Most scientific attempts fail and most results will be negative/no differences being found.',
    tags: [
      "[F1]",
      "[+F1]",
      "[+C11]"
    ],
    occupations: [
      "Academic researcher (postdoc/PhD/MSc/BSc student)"
    ],
    experience: "3-5"
  },
  {
    title: "OBS Studio of everyone's workflows and then AI (esp gpt-index) to autocategorize/autosort it all",
    tags: [
      "[+C9]",
      "[+X8]"
    ],
    occupations: [
      "Entrepreneur",
      "Investor"
    ],
    experience: "5-10"
  },
  {
    title: "A platform where innovators can pitch their ideas and connect with investors would be great. In London this is more difficult than in the SF Bay Area.",
    tags: [
      "[+C3]",
      "[C7]"
    ],
    occupations: [
      "Principal investigator/Professor"
    ],
    experience: "5-10"
  }
], us = {
  bottlenecks: Xm,
  solutions: Vm
}, Rm = [
  {
    tag: "[P]",
    color: "#a4c2f4",
    "Q2 Bottleneck": "[P] Public",
    "Number of responses": "72",
    "Bottleneck Description": "Social bottlenecks from outside the longevity community"
  },
  {
    tag: "[P1]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P1] Poorly Informed",
    "Number of responses": "21",
    "Bottleneck Description": "General public is generally unaware of or misonfirmed about the science, tech and future possibilities."
  },
  {
    tag: "[P2]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P2] Individual Disease Focus",
    "Number of responses": "17",
    "Bottleneck Description": "Focus on age-related diseases rather than their root cause (aging)."
  },
  {
    tag: "[P3]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P3] Lack of Credibility",
    "Number of responses": "9",
    "Bottleneck Description": 'Public skepticism with good cause, history of charlatanism, snake oil, ineffective "anti-aging" treatments.'
  },
  {
    tag: "[P4]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P4] Unaligned Institutions",
    "Number of responses": "10",
    "Bottleneck Description": "Lack of mandate, interest and even obstruction by gov agencies, academia, media, healthcare orgs, etc."
  },
  {
    tag: "[P5]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P5] Geroscience Aversion",
    "Number of responses": "6",
    "Bottleneck Description": 'Stigma, "pro-aging trance", naturalistic fallacy, culture of dystopianism / tech skepticism.'
  },
  {
    tag: "[P6]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P6] Indifference",
    "Number of responses": "7",
    "Bottleneck Description": "Apathy, laziness, or bystander effect (failure to take responsibility / thinking someone else will solve it)."
  },
  {
    tag: "[P7]",
    color: "#c9daf8",
    "Q2 Bottleneck": "[P7] Media Negativity",
    "Number of responses": "2",
    "Bottleneck Description": "Preferencial amplification of negative sentiments, which become the default public opinion by osmosis."
  },
  {
    tag: "[C]",
    color: "#b6d7a8",
    "Q2 Bottleneck": "[C] Community",
    "Number of responses": "151",
    "Bottleneck Description": "How we dysfunction as a community"
  },
  {
    tag: "[C1]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C1] Lack of Big Data Mindset",
    "Number of responses": "10",
    "Bottleneck Description": "More focus on empirical data collection: Multio-omics, images, phenotypes, medical, longititual, clinical, etc."
  },
  {
    tag: "[C2]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C2] Ad-hoc Data / Protocols",
    "Number of responses": "15",
    "Bottleneck Description": "Ad-hoc data/protocols (not reproducible or comparable) prevents integration and building on prior results."
  },
  {
    tag: "[C3]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C3] Networking",
    "Number of responses": "11",
    "Bottleneck Description": " Isolated people/projects/subdisciplines, need for more networking and connection."
  },
  {
    tag: "[C4]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C4] Lack of Collective Action",
    "Number of responses": "9",
    "Bottleneck Description": "Lack of collective actions such as consensus building, validation, data sharing, standards, roadmapping, etc."
  },
  {
    tag: "[C5]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C5] Consensus Aging Definitions",
    "Number of responses": "11",
    "Bottleneck Description": "Lack of a consensus definition of aging."
  },
  {
    tag: "[C6]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C6] Hype Cycles",
    "Number of responses": "11",
    "Bottleneck Description": "Hype cycles + herd mentality = inefficient distro of resources, short term booms and busts of interest/funding."
  },
  {
    tag: "[C7]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C7] Regional Concentration",
    "Number of responses": "8",
    "Bottleneck Description": "Activity is heavily concentrated in a small number of extremely expensive places."
  },
  {
    tag: "[C8]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C8] Reproducibility Crisis",
    "Number of responses": "12",
    "Bottleneck Description": "System incentivizes sloppy research and doesn't penalize poor quality."
  },
  {
    tag: "[C9]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C9] Insularity",
    "Number of responses": "13",
    "Bottleneck Description": "Aging/longevity has been an insulated backwater - need to emerge, mature and engage with other fields."
  },
  {
    tag: "[C10]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C10] Siloing / Secrecy",
    "Number of responses": "13",
    "Bottleneck Description": "Academic grant, IP, and publication systems can over-incentivize competition/secrecy over collaboration."
  },
  {
    tag: "[C11]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C11] Conservatism",
    "Number of responses": "8",
    "Bottleneck Description": "Sticking to worn out hypotheses / following authority after they are past their prime (ex. beta amyloid)"
  },
  {
    tag: "[C12]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C12] Lack of Negative Results",
    "Number of responses": "6",
    "Bottleneck Description": "System dis-incentivize negative result reporting. Results in duplicated efforts, and rewards hype."
  },
  {
    tag: "[C13]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C13] Entry Barriers/Orientation",
    "Number of responses": "6",
    "Bottleneck Description": "Hard learn / track of all the activity, regulations, systems at R&D, translation, clinical and healthcare levels."
  },
  {
    tag: "[C14]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C14] Piecemeal Studies",
    "Number of responses": "7",
    "Bottleneck Description": 'Narrow/reductionist "piecemeal" studies fail to address the complexity of aging.'
  },
  {
    tag: "[C15]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C15] Admin Overhead",
    "Number of responses": "4",
    "Bottleneck Description": "Bright scienetific minds are frequently being wasted on administrative burdens instead of doing science."
  },
  {
    tag: "[C16]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C16] Journal Paywalls",
    "Number of responses": "2",
    "Bottleneck Description": "Obvious and unnecessary barrier to the spread of scientific information."
  },
  {
    tag: "[C17]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C17] Short-termism",
    "Number of responses": "2",
    "Bottleneck Description": 'Over-focus on "low hanging fruit" that is also low-impact. Starves high impact projects of resources.'
  },
  {
    tag: "[C18]",
    color: "#d9ead3",
    "Q2 Bottleneck": "[C18] Misc Community Issues",
    "Number of responses": "3",
    "Bottleneck Description": ""
  },
  {
    tag: "[S]",
    color: "#ffe599",
    "Q2 Bottleneck": "[S] Science",
    "Number of responses": "130",
    "Bottleneck Description": "Areas that need more basic scientific research."
  },
  {
    tag: "[S1]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S1] Validated Biomarkers",
    "Number of responses": "40",
    "Bottleneck Description": "Lack of a validated way to measure biological age independent of chronological age / lifespan."
  },
  {
    tag: "[S2]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S2] Aging Characterization",
    "Number of responses": "20",
    "Bottleneck Description": "Characterization of what changes with age at the molecular/cellular/tissue/physiology levels."
  },
  {
    tag: "[S3]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S3] Longitudinal Data/Samples",
    "Number of responses": "14",
    "Bottleneck Description": "Lack of longitudinal data and samples (clinical records, biomarkers, multi-omics, biobanks)."
  },
  {
    tag: "[S4]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S4] Aging Complexity",
    "Number of responses": "12",
    "Bottleneck Description": "Complexity of aging is too much for traditional tools and institutional structures to grapple with effectively."
  },
  {
    tag: "[S5]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S5] Variation Mapping",
    "Number of responses": "12",
    "Bottleneck Description": "Need for more studies on intra & inter-species longevity variability and intervention responses."
  },
  {
    tag: "[S6]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S6] Misc",
    "Number of responses": "8",
    "Bottleneck Description": "Assorted other science bottlenecks / under-appreciated areas"
  },
  {
    tag: "[S7]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S7] Systems Bio of Aging",
    "Number of responses": "9",
    "Bottleneck Description": "Need for more systems/network approach studyies of aging."
  },
  {
    tag: "[S8]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S8] Brain Aging",
    "Number of responses": "4",
    "Bottleneck Description": "Every other part could potentially be replaced, therefore brain aging is critical to understand."
  },
  {
    tag: "[S9]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S9] Aging Mechanisms",
    "Number of responses": "11",
    "Bottleneck Description": "Belief that we don't yet understand what aging is, need to determine the fundamental mechanisms."
  },
  {
    tag: "[S10]",
    color: "#fff2cc",
    "Q2 Bottleneck": "[S10] Replacement",
    "Number of responses": "2",
    "Bottleneck Description": "Learn how to grow and replace any/all biological parts"
  },
  {
    tag: "[F]",
    color: "#d5a6bd",
    "Q2 Bottleneck": "[F] Funding",
    "Number of responses": "119",
    "Bottleneck Description": "How funding is insufficient"
  },
  {
    tag: "[F0]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F0] Overall Lack of Funding",
    "Number of responses": "40",
    "Bottleneck Description": "We need Apollo program levels of funding - measured in % of GDP not in $Bs"
  },
  {
    tag: "[F1]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F1] Too Conservative",
    "Number of responses": "22",
    "Bottleneck Description": "Difficult to get new/ambitious ideas funded, institutional culture of risk-aversion and incrementalism."
  },
  {
    tag: "[F2]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F2] for Basic Research",
    "Number of responses": "18",
    "Bottleneck Description": "Longevity/aging is only 0.5% of NIH budget, even smaller elsewhere."
  },
  {
    tag: "[F3]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F3] Too Short-term",
    "Number of responses": "10",
    "Bottleneck Description": "Lifespan studies in the most relevant models take longer than standard grant cycles."
  },
  {
    tag: "[F4]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F4] for Startups",
    "Number of responses": "9",
    "Bottleneck Description": "Longevity Biotech is only 1% of total Biotech Market Cap, huge room for growth."
  },
  {
    tag: "[F5]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F5] Gated",
    "Number of responses": "6",
    "Bottleneck Description": "Hard to get funds if you're not from a top institution / company"
  },
  {
    tag: "[F6]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F6] for Translation",
    "Number of responses": "6",
    "Bottleneck Description": "Not enough funding for translating basic research results to real world applications."
  },
  {
    tag: "[F7]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F7] Inflexible",
    "Number of responses": "2",
    "Bottleneck Description": "Easier to get grants for continued work vs new directions. Incentives to stay the course even if not promising."
  },
  {
    tag: "[F8]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F8] for Outreach",
    "Number of responses": "2",
    "Bottleneck Description": "Funding for media and outreach to engage, educate, and attract the public and other communities."
  },
  {
    tag: "[F9]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F9] for Clinical/Longitudinal",
    "Number of responses": "2",
    "Bottleneck Description": "Clinical and longitudinal studies are bureaucratically difficult, expensive, and hard to get funded."
  },
  {
    tag: "[F10]",
    color: "#ead1dc",
    "Q2 Bottleneck": "[F10] Bureaucratic/Slow",
    "Number of responses": "2",
    "Bottleneck Description": "High bureaucracy doesn’t improve decision making, it just wastes people’s time."
  },
  {
    tag: "[H]",
    color: "#f9cb9c",
    "Q2 Bottleneck": "[H] People",
    "Number of responses": "99",
    "Bottleneck Description": "Where we lack human resources"
  },
  {
    tag: "[H0]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H0] Lack of People",
    "Number of responses": "15",
    "Bottleneck Description": "Not enough people working in or entering the field."
  },
  {
    tag: "[H1]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H1] Career & Edu Paths",
    "Number of responses": "17",
    "Bottleneck Description": "Lack of education and career paths by existing institutions."
  },
  {
    tag: "[H2]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H2] Low Pay",
    "Number of responses": "6",
    "Bottleneck Description": "Need to pay people more to make careers in our field sustainable, and to compete for top talent."
  },
  {
    tag: "[H3]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H3] Quantitative",
    "Number of responses": "7",
    "Bottleneck Description": 'Biology has been a "soft/artisinal" science - need to grow up, accelerate the shift to quantitative approaches.'
  },
  {
    tag: "[H4]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H4] Top/Skilled Talent",
    "Number of responses": "22",
    "Bottleneck Description": "Top talent can have outsized effects, and is currently not focused on longevity."
  },
  {
    tag: "[H6]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H6] Immigration/Borders",
    "Number of responses": "4",
    "Bottleneck Description": "Immigration/border restrictions are hampering efficient allocaiton of human resources."
  },
  {
    tag: "[H7]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H7] Hiring",
    "Number of responses": "4",
    "Bottleneck Description": "Hiring people is time consuming and error-prone."
  },
  {
    tag: "[H8]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H8] Interdisciplinary",
    "Number of responses": "6",
    "Bottleneck Description": "Need more interdisciplinary overlaps for fresh perspective."
  },
  {
    tag: "[H9]",
    color: "#fce5cd",
    "Q2 Bottleneck": "[H9] Personal/Misc",
    "Number of responses": "18",
    "Bottleneck Description": "Various personal and miscellaneous issues, e.g. lack of time, family issues, etc."
  },
  {
    tag: "[X]",
    color: "#a2c4c9",
    "Q2 Bottleneck": "[X] Tools",
    "Number of responses": "174",
    "Bottleneck Description": "Tools, technologies and resources currently lacking"
  },
  {
    tag: "[X0]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X0] Lack of Misc Tools/Tech",
    "Number of responses": "4",
    "Bottleneck Description": "Not enough Tools and Technology development in general."
  },
  {
    tag: "[X1.1]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X1.1] Lack of Predictive Models",
    "Number of responses": "33",
    "Bottleneck Description": "Current molel organisms are poorly predictive of results in humans."
  },
  {
    tag: "[X1.2]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X1.2] Slow & Expensive Models",
    "Number of responses": "36",
    "Bottleneck Description": "Animal model studies are slow and expensive."
  },
  {
    tag: "[X1.3]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X1.3] Lack of In Silico/Systems Aging Models",
    "Number of responses": "10",
    "Bottleneck Description": "More complex/comprehensive computer models describing or predicting the processes of aging."
  },
  {
    tag: "[X2]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X2] Public Datasets",
    "Number of responses": "27",
    "Bottleneck Description": "Lack of accessible and comprehensive data sets."
  },
  {
    tag: "[X3]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X3] Human Samples",
    "Number of responses": "11",
    "Bottleneck Description": "Access to human samples (healthy, aged, diseased, with good sample info) is difficult, slow and expensive."
  },
  {
    tag: "[X4]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X4] Aged Animals/Tissues",
    "Number of responses": "11",
    "Bottleneck Description": "Access aged animals and their tissues/cells is difficult, slow and expensive."
  },
  {
    tag: "[X5]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X5] Instrumentation/Lab Tech",
    "Number of responses": "10",
    "Bottleneck Description": "Lab tech is expensive, difficult to use, often unreliable. Better/cheaper/new HW enables progress."
  },
  {
    tag: "[X6]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X6] Lab Automation",
    "Number of responses": "8",
    "Bottleneck Description": "Lab automation is expensive and not user friendly - better tech would improve research throughput & quality"
  },
  {
    tag: "[X7]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X7] CS / Software",
    "Number of responses": "4",
    "Bottleneck Description": "Research software is expensive, proprietary, buggy and not user friendly."
  },
  {
    tag: "[X8]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X8] Gene Delivery",
    "Number of responses": "5",
    "Bottleneck Description": "Need improvements in toxicity, biodistribution, payload size, immunogenicity, transfection efficiency & more."
  },
  {
    tag: "[X9]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X9] Research Infrastructure",
    "Number of responses": "4",
    "Bottleneck Description": "Lab space is expensive, scarce, difficult to access."
  },
  {
    tag: "[X10]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X10] AI Tools",
    "Number of responses": "3",
    "Bottleneck Description": "Maybe humans can't parse bio, need AI to accelerate progress"
  },
  {
    tag: "[X11]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X11] Personal Health Sensors",
    "Number of responses": "3",
    "Bottleneck Description": "Cars have hundreds of sensors. Most people have none. They need to be cheaper, non-invasive, easier to use."
  },
  {
    tag: "[X12]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X12] Personal Health Data Sharing",
    "Number of responses": "3",
    "Bottleneck Description": "Current options are expensive, siloed, difficult to use, disconnected from research."
  },
  {
    tag: "[X13]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X13] Computing Power",
    "Number of responses": "2",
    "Bottleneck Description": "More compute power unlocks new research capabilities. Also needs to be accessible."
  },
  {
    tag: "[X14]",
    color: "#d0e0e3",
    "Q2 Bottleneck": "[X14] Information Overload",
    "Number of responses": "1",
    "Bottleneck Description": "Too many papers for a human to read/parse even if you spend all day every day."
  },
  {
    tag: "[T]",
    color: "#b4a7d6",
    "Q2 Bottleneck": "[T] Translation",
    "Number of responses": "95",
    "Bottleneck Description": "Regulatory and translational challenges"
  },
  {
    tag: "[T1]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T1] Lack of Regulatory Path",
    "Number of responses": "30",
    "Bottleneck Description": "No current regulatory path for aging interventions / longevity medicine."
  },
  {
    tag: "[T2]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T2] Translation Gap",
    "Number of responses": "27",
    "Bottleneck Description": "Lack of translation of basic research results into actual therapies."
  },
  {
    tag: "[T3]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T3] Slow/Expensive Trials",
    "Number of responses": "10",
    "Bottleneck Description": "Clinical trials (as currently practiced) are slow and expensive."
  },
  {
    tag: "[T4]",
    color: "#d9d2e9",
    "Q2 Bottleneck": '[T4] Misguided "Bioethics"',
    "Number of responses": "9",
    "Bottleneck Description": "Risk aversion / harmful action reduction mindset ignores the harm of inaction / slowed progress."
  },
  {
    tag: "[T5]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T5] Market Failure",
    "Number of responses": "11",
    "Bottleneck Description": '"Sick-care" system maximizes money spent not health/lifespan outcomes, needs structural redesign.'
  },
  {
    tag: "[T6]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T6] Participant Recruitment",
    "Number of responses": "5",
    "Bottleneck Description": "Recruit participants to trials and clinical studies is slow, expensive, bureaocratic."
  },
  {
    tag: "[T7]",
    color: "#d9d2e9",
    "Q2 Bottleneck": "[T7] Unregulated Claims",
    "Number of responses": "3",
    "Bottleneck Description": "Pervasive hyped therapies with little to no evidence (NAD, MSCs, diets, hot/cold therapy, light therapy, etc.)"
  }
], Hm = [
  {
    tag: "[+P]",
    color: "#a4c2f4",
    "Q3 Solution": "[+P] Public",
    "Number of responses": "30",
    "Solution Description": "Social projects aimed outside of the longevity community"
  },
  {
    tag: "[+P1.1]",
    color: "#c9daf8",
    "Q3 Solution": "[+P1.1] Outreach to Public",
    "Number of responses": "11",
    "Solution Description": "Shift public sentiment towards pro-longevity. Cascading benefits (policy, funding, market, career choice...)"
  },
  {
    tag: "[+P1.2]",
    color: "#c9daf8",
    "Q3 Solution": "[+P1.2] Outreach to Other Fields",
    "Number of responses": "2",
    "Solution Description": "Bring fresh persepctives and skillsets into the longevity movement."
  },
  {
    tag: "[+P1.3]",
    color: "#c9daf8",
    "Q3 Solution": "[+P1.3] Outreach to Biotech/Pharma",
    "Number of responses": "1",
    "Solution Description": "Only 1% of Biotech/Pharma is longevity/aging oriented, lots of room for growth."
  },
  {
    tag: "[+P1.4]",
    color: "#c9daf8",
    "Q3 Solution": "[+P1.4] Outreach to Students",
    "Number of responses": "0",
    "Solution Description": "Deflect career paths at the highest leverage point."
  },
  {
    tag: "[+P1.5]",
    color: "#c9daf8",
    "Q3 Solution": "[+P1.5] Outreach to Gov/Institutions",
    "Number of responses": "3",
    "Solution Description": "Engage/infiltrate to improve alignment. They have the power to break many bottlenecks if aligned."
  },
  {
    tag: "[+P2]",
    color: "#c9daf8",
    "Q3 Solution": "[+P2] Culture",
    "Number of responses": "10",
    "Solution Description": "A widespread pro-longevity cultural movement."
  },
  {
    tag: "[+P3]",
    color: "#c9daf8",
    "Q3 Solution": "[+P3] Incentives",
    "Number of responses": "2",
    "Solution Description": "Regulations/policies to incentivize longevity practices/industry growth - works for climate why not longevity?"
  },
  {
    tag: "[+P4]",
    color: "#c9daf8",
    "Q3 Solution": "[+P4] Comms Training",
    "Number of responses": "1",
    "Solution Description": "For scientists, engineers, operators in longevity - training to communicate clearly and effectively to the public."
  },
  {
    tag: "[+C]",
    color: "#b6d7a8",
    "Q3 Solution": "[+C] Community",
    "Number of responses": "73",
    "Solution Description": "How we could improve functioning of the community"
  },
  {
    tag: "[+C1]",
    color: "#d9ead3",
    "Q3 Solution": "[+C1] Big Data Mindset",
    "Number of responses": "2",
    "Solution Description": "More focus on empirical data collection: Multio-omics, images, phenotypes, medical, longititual, clinical, etc."
  },
  {
    tag: "[+C2]",
    color: "#d9ead3",
    "Q3 Solution": "[+C2] Data/Protocol Standards",
    "Number of responses": "11",
    "Solution Description": "Set and update standards for data and protocols, incentivize their use."
  },
  {
    tag: "[+C3]",
    color: "#d9ead3",
    "Q3 Solution": "[+C3] Networking",
    "Number of responses": "13",
    "Solution Description": "Mechanism to connect employers, entrepreneurs, investors, volunteers, etc."
  },
  {
    tag: "[+C4]",
    color: "#d9ead3",
    "Q3 Solution": "[+C4] Large Collaborative Projects",
    "Number of responses": "8",
    "Solution Description": "Large collaborative projects and rather than ego/grant/publication driven competition."
  },
  {
    tag: "[+C5]",
    color: "#d9ead3",
    "Q3 Solution": "[+C5] Collective Action",
    "Number of responses": "8",
    "Solution Description": "Organize to facilitate consensus building, validation, data sharing, standards, roadmapping, etc."
  },
  {
    tag: "[+C6]",
    color: "#d9ead3",
    "Q3 Solution": "[+C6] Consensus Aging Definition",
    "Number of responses": "6",
    "Solution Description": "Reach a consensus theory/definition of aging"
  },
  {
    tag: "[+C7]",
    color: "#d9ead3",
    "Q3 Solution": "[+C7] New Research Centers",
    "Number of responses": "6",
    "Solution Description": "More dedicated aging/longevity research centers. Diverse locations. Varied specialties. Facilitate large projects."
  },
  {
    tag: "[+C8]",
    color: "#d9ead3",
    "Q3 Solution": "[+C8] Reproduce Key Results",
    "Number of responses": "3",
    "Solution Description": "Funded centers dedicated to reproducing / testing the robustness of key results."
  },
  {
    tag: "[+C9]",
    color: "#d9ead3",
    "Q3 Solution": "[+C9] Field-Wide Status Dashboard",
    "Number of responses": "7",
    "Solution Description": "Overview of all proposals, projects, pathways, targets, pre and in-clinic pipelines. Linked to data."
  },
  {
    tag: "[+C10]",
    color: "#d9ead3",
    "Q3 Solution": "[+C10] Outsourcing Services",
    "Number of responses": "4",
    "Solution Description": "Longevity CROs/Cores - make outsourcing research easier such as lifespan studies, multi-omic analysis."
  },
  {
    tag: "[+C11]",
    color: "#d9ead3",
    "Q3 Solution": "[+C11] Neg Results Incentives",
    "Number of responses": "3",
    "Solution Description": "Mechanism to incentivize/enable reporting negative results. Pre-results publication approvals for example."
  },
  {
    tag: "[+C12]",
    color: "#d9ead3",
    "Q3 Solution": "[+C12] Open Science",
    "Number of responses": "1",
    "Solution Description": "Make data, samples, results open and available by default."
  },
  {
    tag: "[+C13]",
    color: "#d9ead3",
    "Q3 Solution": "[+C13] Long-termism",
    "Number of responses": "1",
    "Solution Description": 'More focus on long term research and technology paths with higher-impact potential (vs "low hanging fruit")'
  },
  {
    tag: "[+C14]",
    color: "#d9ead3",
    "Q3 Solution": "[+C14] Protected Time",
    "Number of responses": "1",
    "Solution Description": "Reduce/limit the amount of time spent on non-research activities (admin, grants, etc.)"
  },
  {
    tag: "[+C15]",
    color: "#d9ead3",
    "Q3 Solution": "[+C15] Leadership",
    "Number of responses": "1",
    "Solution Description": "Bold and ambitious, yet free of ego/hype and relatable. Leadership is lacking but necessary to build a movement."
  },
  {
    tag: "[+S]",
    color: "#ffe599",
    "Q3 Solution": "[+S] Science",
    "Number of responses": "35",
    "Solution Description": "Research goals, that if achieved would unlock progress."
  },
  {
    tag: "[+S1]",
    color: "#fff2cc",
    "Q3 Solution": "[+S1] Validated Biomarkers",
    "Number of responses": "13",
    "Solution Description": "Validated way to measure biological age independent of chronological age / lifespan."
  },
  {
    tag: "[+S2]",
    color: "#fff2cc",
    "Q3 Solution": "[+S2] Aging Fully Characterized",
    "Number of responses": "10",
    "Solution Description": "Comprehensive characterization of aging at the molecular/cellular/tissue/physiology levels."
  },
  {
    tag: "[+S3]",
    color: "#fff2cc",
    "Q3 Solution": "[+S3] Longitudinal Data/Samples",
    "Number of responses": "8",
    "Solution Description": "Unlock or generate more longitudinal data and samples (clinical records, biomarkers, multi-omics, biobanks)"
  },
  {
    tag: "[+S4]",
    color: "#fff2cc",
    "Q3 Solution": "[+S4] Aging Variation Mapped",
    "Number of responses": "3",
    "Solution Description": "Comprehensive map of Intra and inter species aging variation (omics, physiology, phenotype, etc.)"
  },
  {
    tag: "[+S10]",
    color: "#fff2cc",
    "Q3 Solution": "[+S10] Brain Rejuvenation/Replacement",
    "Number of responses": "1",
    "Solution Description": "Ambitious and broad range of R&D on brain rejuvenation/replacement."
  },
  {
    tag: "[+S11]",
    color: "#fff2cc",
    "Q3 Solution": "[+S11] Comprehensive Replacement",
    "Number of responses": "0",
    "Solution Description": "Methods to grow and replace any/all biological parts"
  },
  {
    tag: "[+F]",
    color: "#d5a6bd",
    "Q3 Solution": "[+F] Funding",
    "Number of responses": "47",
    "Solution Description": "How to improve funding"
  },
  {
    tag: "[+F0]",
    color: "#ead1dc",
    "Q3 Solution": "[+F0] Overall More Funding",
    "Number of responses": "18",
    "Solution Description": "We need Apollo program levels of funding - measured in % of GDP not in $Bs"
  },
  {
    tag: "[+F1]",
    color: "#ead1dc",
    "Q3 Solution": "[+F1] Ambitious/Exploratory",
    "Number of responses": "11",
    "Solution Description": "More ambitious/exploratory projects are needed to accelerate progress."
  },
  {
    tag: "[+F2]",
    color: "#ead1dc",
    "Q3 Solution": "[+F2] for Basic Research",
    "Number of responses": "5",
    "Solution Description": "Longevity/aging is only 0.5% of NIH budget, even smaller elsewhere."
  },
  {
    tag: "[+F3]",
    color: "#ead1dc",
    "Q3 Solution": "[+F3] Longer-term",
    "Number of responses": "6",
    "Solution Description": "Longer bets on people and projects are necessary for many aging research directions."
  },
  {
    tag: "[+F4]",
    color: "#ead1dc",
    "Q3 Solution": "[+F4] for Startups",
    "Number of responses": "3",
    "Solution Description": "Longevity Biotech is only 1% of total Biotech Market Cap, huge room for growth."
  },
  {
    tag: "[+F5]",
    color: "#ead1dc",
    "Q3 Solution": "[+F5] for Outsiders",
    "Number of responses": "1",
    "Solution Description": "Take more bets on system outsiders (non-academic / non-ivy league)."
  },
  {
    tag: "[+F6]",
    color: "#ead1dc",
    "Q3 Solution": "[+F6] for Translation",
    "Number of responses": "1",
    "Solution Description": "Not enough funding for translating basic research results to real world applications."
  },
  {
    tag: "[+F7]",
    color: "#ead1dc",
    "Q3 Solution": "[+F7] Flexible",
    "Number of responses": "1",
    "Solution Description": "Grants for promising people to transition from other fields/areas."
  },
  {
    tag: "[+F8]",
    color: "#ead1dc",
    "Q3 Solution": "[+F8] for Outreach",
    "Number of responses": "0",
    "Solution Description": "Funding for media and outreach to engage, educate, and attract the public and other communities."
  },
  {
    tag: "[+F9]",
    color: "#ead1dc",
    "Q3 Solution": "[+F9] for Clinical/Longitudinal",
    "Number of responses": "0",
    "Solution Description": "Clinical and longitudinal studies are bureaucratically difficult, expensive, and hard to get funded."
  },
  {
    tag: "[+F10]",
    color: "#ead1dc",
    "Q3 Solution": "[+F10] Faster Grants",
    "Number of responses": "1",
    "Solution Description": "High bureaucracy doesn’t improve decision making, it just wastes people’s time."
  },
  {
    tag: "[+H]",
    color: "#f9cb9c",
    "Q3 Solution": "[+H] People",
    "Number of responses": "18",
    "Solution Description": "Solutions for human resources"
  },
  {
    tag: "[+H0]",
    color: "#fce5cd",
    "Q3 Solution": "[+H0] More People",
    "Number of responses": "2",
    "Solution Description": "Not enough people working in or entering the field."
  },
  {
    tag: "[+H1]",
    color: "#fce5cd",
    "Q3 Solution": "[+H1] Quantitative",
    "Number of responses": "1",
    "Solution Description": "Need to recruit or train more people in quantitative skills (math, physics, statistics, ml, comp/systems bio)"
  },
  {
    tag: "[+H2]",
    color: "#fce5cd",
    "Q3 Solution": "[+H2] Higher Pay",
    "Number of responses": "3",
    "Solution Description": "Need to pay people more to make careers in our field sustainable, and to compete for top talent."
  },
  {
    tag: "[+H3]",
    color: "#fce5cd",
    "Q3 Solution": "[+H3] Longevity Training",
    "Number of responses": "2",
    "Solution Description": "We need edu/career paths for people to start or shift careers in longevity biotech."
  },
  {
    tag: "[+H4]",
    color: "#fce5cd",
    "Q3 Solution": "[+H4] Skills Assessment",
    "Number of responses": "2",
    "Solution Description": "Better alternatives to degrees/resumes/interviews? Get people to work faster and more efficiently."
  },
  {
    tag: "[+H5]",
    color: "#fce5cd",
    "Q3 Solution": "[+H5] Interdisciplinary",
    "Number of responses": "1",
    "Solution Description": "Need more interdisciplinary overlaps for fresh perspective."
  },
  {
    tag: "[+H6]",
    color: "#fce5cd",
    "Q3 Solution": "[+H6] More/Flexible Visas",
    "Number of responses": "1",
    "Solution Description": "Immigration/border restrictions are hampering efficient allocaiton of human resources."
  },
  {
    tag: "[+H10]",
    color: "#fce5cd",
    "Q3 Solution": "[+H10] Personal/Misc",
    "Number of responses": "4",
    "Solution Description": "Misc personal solutions"
  },
  {
    tag: "[+H9]",
    color: "#fce5cd",
    "Q3 Solution": "[+H9] Top/Skilled Talent",
    "Number of responses": "2",
    "Solution Description": "Top talent can have outsized effects, and is currently not focused on longevity."
  },
  {
    tag: "[+X]",
    color: "#a2c4c9",
    "Q3 Solution": "[+X] Tools",
    "Number of responses": "79",
    "Solution Description": "Needed tools, technologies and resources"
  },
  {
    tag: "[+X0]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X0] Unspecified Tools/Tech",
    "Number of responses": "1",
    "Solution Description": "More Tools and Technology development in general."
  },
  {
    tag: "[+X1.1]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.1] In Silico/Systems Aging Models",
    "Number of responses": "4",
    "Solution Description": "Computational/Systems Bio Modeling. Make predictions in silico to save time and cost in meatspace."
  },
  {
    tag: "[+X1.2]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.2] Ex vivo Models",
    "Number of responses": "2",
    "Solution Description": "Cell/tissue/organ based aging models that are predicitive, affordable and accessible."
  },
  {
    tag: "[+X1.3]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.3] Multiple/Diverse Models",
    "Number of responses": "3",
    "Solution Description": "Improve robustnest of results by using multiple models."
  },
  {
    tag: "[+X1.4]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.4] Unspecified/Misc Models",
    "Number of responses": "3",
    "Solution Description": "Better model systems for aging (unspecified how)"
  },
  {
    tag: "[+X1.5]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.5] Longer Lived Models",
    "Number of responses": "2",
    "Solution Description": "Develop longer lived animal models - more likely to be more translatable to human biology."
  },
  {
    tag: "[+X1.6]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.6] Human Models",
    "Number of responses": "2",
    "Solution Description": "Skip animals and their problems - develop human model systems (cell, tissue, organ, body, in vivo)"
  },
  {
    tag: "[+X1.7]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X1.7] Accelerated Aging Models",
    "Number of responses": "1",
    "Solution Description": "Accelerated aging models could speed progress... if they are representative of normal aging."
  },
  {
    tag: "[+X2]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X2] Public Datasets",
    "Number of responses": "22",
    "Solution Description": "Accessible and comprehensive data sets can lift all boats, accelerate progress."
  },
  {
    tag: "[+X3]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X3] Instrumentation/Lab Tech",
    "Number of responses": "8",
    "Solution Description": "Cheaper/better/new tools to measure biology/health/age would enable more and new studies."
  },
  {
    tag: "[+X4]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X4] Human Cell/Tissue Bank",
    "Number of responses": "6",
    "Solution Description": "Easy, inexpensive, and well documented samples."
  },
  {
    tag: "[+X5]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X5] Aged Animals/Tissue Bank",
    "Number of responses": "5",
    "Solution Description": "Easy, inexpensive, and well documented aged animals and samples. "
  },
  {
    tag: "[+X13]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X13] Lab Automation",
    "Number of responses": "4",
    "Solution Description": "Better/easier lab automation would enable increased throughput, higher quality, standards, collaboration."
  },
  {
    tag: "[+X6]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X6] CS / Software",
    "Number of responses": "5",
    "Solution Description": "Better/easier research software would enable increased throughput, higher quality, standards, collaborations."
  },
  {
    tag: "[+X7]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X7] Gene Delivery",
    "Number of responses": "1",
    "Solution Description": "Better delivery and gene editing tools"
  },
  {
    tag: "[+X8]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X8] AI Tools",
    "Number of responses": "4",
    "Solution Description": "Overcome the limits of human intelligence by building better/specialized AI systems."
  },
  {
    tag: "[+X9]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X9] Personal Health Sensors",
    "Number of responses": "2",
    "Solution Description": "Cars have hundreds of sensors. Most people have none. They need to be cheaper, non-invasive, easier to use."
  },
  {
    tag: "[+X10]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X10] Syn Bio",
    "Number of responses": "0",
    "Solution Description": "Tools to engineer cells, tissues, organs to meet our specifications."
  },
  {
    tag: "[+X11]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X11] Computing Power",
    "Number of responses": "1",
    "Solution Description": "More compute power unlocks new research capabilities. Also needs to be accessible."
  },
  {
    tag: "[+X12]",
    color: "#d0e0e3",
    "Q3 Solution": "[+X12] Health Data Platform",
    "Number of responses": "3",
    "Solution Description": "Platform for individuals to easily analyze and share health and medical data for advancing research."
  },
  {
    tag: "[+T]",
    color: "#b4a7d6",
    "Q3 Solution": "[+T] Translation",
    "Number of responses": "33",
    "Solution Description": "How to improve translational challenges"
  },
  {
    tag: "[+T1]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T1] Regulatory Path",
    "Number of responses": "19",
    "Solution Description": "A regulatory path for aging interventions / longevity medicine."
  },
  {
    tag: "[+T2]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T2] Participant Database",
    "Number of responses": "4",
    "Solution Description": "Database/marketplace to streamline sourcing clinical research participants."
  },
  {
    tag: "[+T3]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T3] Regulatory Opt-Out",
    "Number of responses": "5",
    "Solution Description": "Allow people to opt-out of medical regulations. A healthcare socioeconomic free zone."
  },
  {
    tag: "[+T4]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T4] Intervention Testing",
    "Number of responses": "0",
    "Solution Description": "More intervention testing, including combination therapies."
  },
  {
    tag: "[+T5]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T5] Translation Bridges",
    "Number of responses": "2",
    "Solution Description": "Innovation centers and funding to close the translation gap."
  },
  {
    tag: "[+T6]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T6] Regulate Claims",
    "Number of responses": "1",
    "Solution Description": "Require trials to make health claims in supplements, lifestyle, etc. Opportunity to design/test lower cost trials?"
  },
  {
    tag: "[+T7]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T7] Public Trials",
    "Number of responses": "0",
    "Solution Description": "No current mechanism to test interventions when a therapy isn't IP protectable / highly profitable"
  },
  {
    tag: "[+T8]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T8] Rethink Trials",
    "Number of responses": "1",
    "Solution Description": "How can we make them bigger/better/cheaper and longevity oriented."
  },
  {
    tag: "[+T10]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T10] Data Unlocking",
    "Number of responses": "1",
    "Solution Description": "Change policies to unlock siloed health/medical data. Require accessibility, standards and interoperability."
  },
  {
    tag: "[+T9]",
    color: "#d9d2e9",
    "Q3 Solution": "[+T9] Longevity Standard of Care",
    "Number of responses": "0",
    "Solution Description": 'Alternative to "sick-care" standards, to help create a market for longevity medicine.'
  }
], ds = {
  bottlenecks: Rm,
  solutions: Hm
}, Lm = mg("bottleneck", () => (Fm(), {
  analysis: us,
  tags: ds
}));
var jm = Object.defineProperty, zm = Object.defineProperties, Qm = Object.getOwnPropertyDescriptors, Pc = Object.getOwnPropertySymbols, qm = Object.prototype.hasOwnProperty, Um = Object.prototype.propertyIsEnumerable, Ec = (e, t, n) => t in e ? jm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cn = (e, t) => {
  for (var n in t || (t = {}))
    qm.call(t, n) && Ec(e, n, t[n]);
  if (Pc)
    for (var n of Pc(t))
      Um.call(t, n) && Ec(e, n, t[n]);
  return e;
}, kc = (e, t) => zm(e, Qm(t));
const Wm = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const t = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (t) {
        const n = this.getDropdownViewport(), { top: i, bottom: o, height: r } = t.getBoundingClientRect();
        if (i < n.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (o > n.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (n.height - r);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, Km = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Gm = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, Js = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, Ym = {}, Jm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Zm = /* @__PURE__ */ Y("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), ev = [
  Zm
];
function tv(e, t) {
  return le(), be("svg", Jm, ev);
}
const nv = /* @__PURE__ */ Js(Ym, [["render", tv]]), iv = {}, ov = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, rv = /* @__PURE__ */ Y("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), sv = [
  rv
];
function av(e, t) {
  return le(), be("svg", ov, sv);
}
const cv = /* @__PURE__ */ Js(iv, [["render", av]]), Nc = {
  Deselect: nv,
  OpenIndicator: cv
}, lv = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: n,
        top: i,
        left: o,
        width: r
      } = t.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, a = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: r + "px",
        left: s + o + "px",
        top: a + i + n + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function uv(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let dv = 0;
function pv() {
  return ++dv;
}
const fv = {
  components: Cn({}, Nc),
  directives: { appendToBody: lv },
  mixins: [Wm, Km, Gm],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : uv(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, n) {
        return (t || "").toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((n) => {
          let i = this.getOptionLabel(n);
          return typeof i == "number" && (i = i.toString()), this.filterBy(n, i, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: n, top: i, left: o }) {
        e.style.top = i, e.style.left = o, e.style.width = n;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: n }) {
        return e ? !1 : t && !n;
      }
    },
    uid: {
      type: [String, Number],
      default: () => pv()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: Cn({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: kc(Cn({}, e), { deselect: this.deselect }),
        footer: kc(Cn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Cn(Cn({}, Nc), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const n = this.createOption(this.search);
        this.optionExists(n) || t.unshift(n);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const n = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && n() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const n = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || n.filter(Boolean).some((i) => i.contains(e.target) || i === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (i) => JSON.stringify(this.reduce(i)) === JSON.stringify(e), n = [...this.options, ...this.pushedTags].filter(t);
      return n.length === 1 ? n[0] : n.find((i) => this.optionComparator(i, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (o) => (o.preventDefault(), !this.isComposing && this.typeAheadSelect()), n = {
        8: (o) => this.maybeDeleteValue(),
        9: (o) => this.onTab(),
        27: (o) => this.onEscape(),
        38: (o) => (o.preventDefault(), this.typeAheadUp()),
        40: (o) => (o.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((o) => n[o] = t);
      const i = this.mapKeydown(n, this);
      if (typeof i[e.keyCode] == "function")
        return i[e.keyCode](e);
    }
  }
}, hv = ["dir"], gv = ["id", "aria-expanded", "aria-owns"], mv = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, vv = ["disabled", "title", "aria-label", "onClick"], yv = {
  ref: "actions",
  class: "vs__actions"
}, bv = ["disabled"], wv = { class: "vs__spinner" }, xv = ["id"], Sv = ["id", "aria-selected", "onMouseover", "onClick"], _v = {
  key: 0,
  class: "vs__no-options"
}, Pv = /* @__PURE__ */ Pi(" Sorry, no matching options. "), Ev = ["id"];
function kv(e, t, n, i, o, r) {
  const s = vf("append-to-body");
  return le(), be("div", {
    dir: n.dir,
    class: mt(["v-select", r.stateClasses])
  }, [
    Ye(e.$slots, "header", tt(nt(r.scope.header))),
    Y("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": r.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (a) => r.toggleDropdown(a))
    }, [
      Y("div", mv, [
        (le(!0), be(ke, null, Si(r.selectedValue, (a, c) => Ye(e.$slots, "selected-option-container", {
          option: r.normalizeOptionForSlot(a),
          deselect: r.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (le(), be("span", {
            key: n.getOptionKey(a),
            class: "vs__selected"
          }, [
            Ye(e.$slots, "selected-option", tt(nt(r.normalizeOptionForSlot(a))), () => [
              Pi(Ht(n.getOptionLabel(a)), 1)
            ]),
            n.multiple ? (le(), be("button", {
              key: 0,
              ref_for: !0,
              ref: (l) => o.deselectButtons[c] = l,
              disabled: n.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${n.getOptionLabel(a)}`,
              "aria-label": `Deselect ${n.getOptionLabel(a)}`,
              onClick: (l) => r.deselect(a)
            }, [
              (le(), Tt(mr(r.childComponents.Deselect)))
            ], 8, vv)) : Bt("", !0)
          ]))
        ])), 256)),
        Ye(e.$slots, "search", tt(nt(r.scope.search)), () => [
          Y("input", To({ class: "vs__search" }, r.scope.search.attributes, yf(r.scope.search.events)), null, 16)
        ])
      ], 512),
      Y("div", yv, [
        Xn(Y("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...a) => r.clearSelection && r.clearSelection(...a))
        }, [
          (le(), Tt(mr(r.childComponents.Deselect)))
        ], 8, bv), [
          [Zr, r.showClearButton]
        ]),
        Ye(e.$slots, "open-indicator", tt(nt(r.scope.openIndicator)), () => [
          n.noDrop ? Bt("", !0) : (le(), Tt(mr(r.childComponents.OpenIndicator), tt(To({ key: 0 }, r.scope.openIndicator.attributes)), null, 16))
        ]),
        Ye(e.$slots, "spinner", tt(nt(r.scope.spinner)), () => [
          Xn(Y("div", wv, "Loading...", 512), [
            [Zr, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, gv),
    Ce(or, { name: n.transition }, {
      default: Xs(() => [
        r.dropdownOpen ? Xn((le(), be("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = Jr((...a) => r.onMousedown && r.onMousedown(...a), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...a) => r.onMouseUp && r.onMouseUp(...a))
        }, [
          Ye(e.$slots, "list-header", tt(nt(r.scope.listHeader))),
          (le(!0), be(ke, null, Si(r.filteredOptions, (a, c) => (le(), be("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(a),
            role: "option",
            class: mt(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": r.isOptionDeselectable(a) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": r.isOptionSelected(a),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(a)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(a) ? e.typeAheadPointer = c : null,
            onClick: Jr((l) => n.selectable(a) ? r.select(a) : null, ["prevent", "stop"])
          }, [
            Ye(e.$slots, "option", tt(nt(r.normalizeOptionForSlot(a))), () => [
              Pi(Ht(n.getOptionLabel(a)), 1)
            ])
          ], 42, Sv))), 128)),
          r.filteredOptions.length === 0 ? (le(), be("li", _v, [
            Ye(e.$slots, "no-options", tt(nt(r.scope.noOptions)), () => [
              Pv
            ])
          ])) : Bt("", !0),
          Ye(e.$slots, "list-footer", tt(nt(r.scope.listFooter)))
        ], 40, xv)), [
          [s]
        ]) : (le(), be("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Ev))
      ]),
      _: 3
    }, 8, ["name"]),
    Ye(e.$slots, "footer", tt(nt(r.scope.footer)))
  ], 10, hv);
}
const Nv = /* @__PURE__ */ Js(fv, [["render", kv]]);
const Mo = {
  "[P]": {
    label: "Public",
    x: 150,
    y: -3.5
  },
  "[P1]": {
    label: `Poorly 
Informed`,
    x: 0,
    y: 0
  },
  "[P2]": {
    label: `Individual 
Disease Focus`,
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[P3]": {
    label: `Lack of 
Credibility`,
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[P4]": {
    label: `Unaligned 
Institutions`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[P5]": {
    label: `Geroscience 
Aversion`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[P6]": {
    label: "Indifference",
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[P7]": {
    label: `Media
Negativity`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  },
  "[C]": {
    label: "Community",
    x: 250,
    y: 0
  },
  "[C1]": {
    label: `Lack of
Big Data
Mindset`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C2]": {
    label: `Ad-hoc Data
/ Protocols`,
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[C3]": {
    label: "Networking",
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[C4]": {
    label: `Lack of 
Collective 
Action`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C5]": {
    label: `Consensus 
Aging 
Definitions`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C6]": {
    label: `Hype 
Cycles`,
    x: 0,
    y: 0
  },
  "[C7]": {
    label: `Regional 
Concentration`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C8]": {
    label: `Reproducibility 
Crisis`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C9]": {
    label: "Insularity",
    x: 0,
    y: 0
  },
  "[C10]": {
    label: `Siloing 
/ Secrecy`,
    x: 0,
    y: 0
  },
  "[C11]": {
    label: "Conservatism",
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[C12]": {
    label: `Lack of 
Negative 
Results`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C13]": {
    label: `Entry
 Barriers`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C14]": {
    label: `Piecemeal 
Studies`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[C15]": {
    label: `Admin 
Overhead`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[C16]": {
    label: `Journal 
Paywalls`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[C17]": {
    label: `Short-
termism`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[C18]": {
    label: `Misc 
Community 
Issues`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[S]": {
    label: "Science",
    x: -250,
    y: 0
  },
  "[S1]": {
    label: `Validated 
Biomarkers`,
    x: 0,
    y: 0
  },
  "[S2]": {
    label: `Aging 
Character
-ization`,
    x: 0,
    y: 0
  },
  "[S3]": {
    label: `Longitudinal 
Data/Samples`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[S4]": {
    label: `Aging 
Complexity`,
    x: 0,
    y: 0
  },
  "[S5]": {
    label: `Variation 
Mapping`,
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[S6]": {
    label: "Misc",
    x: 0,
    y: 0
  },
  "[S7]": {
    label: `Systems Bio
 of Aging`,
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[S8]": {
    label: "Brain Aging",
    x: 0,
    y: 0
  },
  "[S9]": {
    label: `Aging
Mechanisms`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[S10]": {
    label: "Replacement",
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[F]": {
    label: "Funding",
    x: 0,
    y: -5.2
  },
  "[F0]": {
    label: `Overall Lack
 of Funding`,
    x: 0,
    y: 0
  },
  "[F1]": {
    label: `Too 
Conservative`,
    x: 0,
    y: 0
  },
  "[F2]": {
    label: `Funding for
Basic
Research`,
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[F3]": {
    label: `Too 
Short-term`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[F4]": {
    label: `Funding for
Startups`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[F5]": {
    label: "Gated",
    x: 0,
    y: 0
  },
  "[F6]": {
    label: `Funding for
Translation`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[F7]": {
    label: "Inflexible",
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[F8]": {
    label: `Funding for
Outreach`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[F9]": {
    label: `Funding for
Clinical/
Longitudinal`,
    x: 0,
    y: 0,
    fontSize: "0.55em"
  },
  "[F10]": {
    label: `Bureaucratic
/Slow`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[H]": {
    label: "People",
    x: -150,
    y: 3
  },
  "[H0]": {
    label: `Lack of
 People`,
    x: 0,
    y: 0
  },
  "[H1]": {
    label: `Career &
 Edu Paths`,
    x: 0,
    y: 0
  },
  "[H2]": {
    label: "Low Pay",
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[H3]": {
    label: "Quantitative",
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[H4]": {
    label: `Top/Skilled 
Talent`,
    x: 0,
    y: 0
  },
  "[H6]": {
    label: `Immigration
/Borders`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[H7]": {
    label: "Hiring",
    x: 0,
    y: 0
  },
  "[H8]": {
    label: `Inter-
disciplinary`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[H9]": {
    label: `Personal
/Misc`,
    x: 0,
    y: 0
  },
  "[X]": {
    label: "Tools",
    x: -250,
    y: 0
  },
  "[X0]": {
    label: `Lack
 of Misc
 Tools/Tech`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[X1.1]": {
    label: `Lack of 
Predictive Models`,
    x: 0,
    y: 0
  },
  "[X1.2]": {
    label: `Slow & 
Expensive Models`,
    x: 0,
    y: 0
  },
  "[X1.3]": {
    label: `Lack of 
In Silico/
Systems Aging 
Models`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[X2]": {
    label: `Public
 Datasets`,
    x: 0,
    y: 0
  },
  "[X3]": {
    label: `Human
 Samples`,
    x: 0,
    y: 0
  },
  "[X4]": {
    label: `Aged Animals
/Tissues`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[X5]": {
    label: `Instrumentation
/Lab Tech`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[X6]": {
    label: `Lab 
Automation`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[X7]": {
    label: `CS 
/Software`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  },
  "[X8]": {
    label: `Gene 
Delivery`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[X9]": {
    label: `Research 
Infrastructure`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  },
  "[X10]": {
    label: "AI Tools",
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[X11]": {
    label: `Personal 
Health Sensors`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[X12]": {
    label: `Personal Health
 Data Sharing`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[X13]": {
    label: `Computing 
Power`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[X14]": {
    label: `Information
 Overload`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[T]": {
    label: "Translation",
    x: 140,
    y: 4.5
  },
  "[T1]": {
    label: `Lack of 
Regulatory Path`,
    x: 0,
    y: 0
  },
  "[T2]": {
    label: `Translation 
Gap`,
    x: 0,
    y: 0
  },
  "[T3]": {
    label: `Slow
/Expensive
 Trials`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[T4]": {
    label: `Misguided 
"Bioethics"`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[T5]": {
    label: `Market 
Failure`,
    x: 0,
    y: 0
  },
  "[T6]": {
    label: `Participant 
Recruitment`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[T7]": {
    label: `Unregulated
 Claims`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+P]": {
    label: "Public",
    x: 140,
    y: 3
  },
  "[+P1.1]": {
    label: `Outreach to
Public`,
    x: 0,
    y: 0
  },
  "[+P1.2]": {
    label: `Outreach to
Other Fields`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+P1.3]": {
    label: `Outreach to
Biotech/
Pharma`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+P1.4]": {
    label: `Outreach to
Students`,
    x: 0,
    y: 0
  },
  "[+P1.5]": {
    label: `Outreach
to Gov/
Institutions`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+P2]": {
    label: "Culture",
    x: 0,
    y: 0
  },
  "[+P3]": {
    label: "Incentives",
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[+P4]": {
    label: `Comms
Training`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+C]": {
    label: "Community",
    x: 275,
    y: 0
  },
  "[+C1]": {
    label: `Big
Data
Mindset`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+C2]": {
    label: `Data/Protocol
Standards`,
    x: 0,
    y: 0
  },
  "[+C3]": {
    label: "Networking",
    x: 0,
    y: 0
  },
  "[+C4]": {
    label: `Large
Collaborative
Projects`,
    x: 0,
    y: 0
  },
  "[+C5]": {
    label: `Collective
Action`,
    x: 0,
    y: 0
  },
  "[+C6]": {
    label: `Consensus
Aging
Definition`,
    x: 0,
    y: 0
  },
  "[+C7]": {
    label: `New
Research
Centers`,
    x: 0,
    y: 0
  },
  "[+C8]": {
    label: `Reproduce
Key
Results`,
    x: 0,
    y: 0,
    fontSize: "0.8em"
  },
  "[+C9]": {
    label: `Field-Wide
Status
Dashboard`,
    x: 0,
    y: 0
  },
  "[+C10]": {
    label: `Outsourcing
Services`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[+C11]": {
    label: `Neg
Results
Incentives`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+C12]": {
    label: `Open
Science`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+C13]": {
    label: `Long-
termism`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+C14]": {
    label: `Protected
Time`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+C15]": {
    label: "Leadership",
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+S]": {
    label: "Science",
    x: 0,
    y: -5
  },
  "[+S1]": {
    label: `Validated 
Biomarkers`,
    x: 0,
    y: 0
  },
  "[+S2]": {
    label: `Aging Fully 
Characterized`,
    x: 0,
    y: 0
  },
  "[+S3]": {
    label: `Longitudinal 
Data/Samples`,
    x: 0,
    y: 0
  },
  "[+S4]": {
    label: `Aging
Variation
Mapped`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+S10]": {
    label: `Brain
Rejuvenation
/Replacement`,
    x: 0,
    y: 0,
    fontSize: "0.55em"
  },
  "[+S11]": {
    label: "Comprehensive Replacement",
    x: 0,
    y: 0
  },
  "[+F]": {
    label: "Funding",
    x: 230,
    y: 0
  },
  "[+F0]": {
    label: `Overall More
Funding`,
    x: 0,
    y: 0
  },
  "[+F1]": {
    label: `Ambitious/
Exploratory`,
    x: 0,
    y: 0
  },
  "[+F2]": {
    label: `Funding for
Basic
Research`,
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[+F3]": {
    label: "Longer-term",
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[+F4]": {
    label: `Funding for
Startups`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+F5]": {
    label: `Funding for
Outsiders`,
    x: 0,
    y: 0,
    fontSize: "0.50em"
  },
  "[+F6]": {
    label: `Funding
for
Trans-
lation`,
    x: 0,
    y: 0,
    fontSize: "0.55em"
  },
  "[+F7]": {
    label: "Flexible",
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+F8]": {
    label: "for Outreach",
    x: 0,
    y: 0
  },
  "[+F9]": {
    label: "for Clinical/Longitudinal",
    x: 0,
    y: 0
  },
  "[+F10]": {
    label: `Faster
Grants`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+H]": {
    label: "People",
    x: -120,
    y: -3
  },
  "[+H0]": {
    label: `More
People`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[+H1]": {
    label: `Quanti-
tative`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+H2]": {
    label: `Higher
Pay`,
    x: 0,
    y: 0
  },
  "[+H3]": {
    label: `Longevity
Training`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+H4]": {
    label: `Skills
Assessment`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+H5]": {
    label: `Inter-
disciplinary`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+H6]": {
    label: `More/
Flexible
Visas`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+H10]": {
    label: `Personal
/Misc`,
    x: 0,
    y: 0
  },
  "[+H9]": {
    label: `Top/Skilled 
Talent`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X]": {
    label: "Tools",
    x: -250,
    y: 0
  },
  "[+X0]": {
    label: `Unspecified
Tools/Tech`,
    x: 0,
    y: 0,
    fontSize: "0.55em"
  },
  "[+X1.1]": {
    label: `In Silico
/Systems Aging
Models`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X1.2]": {
    label: `Ex vivo
Models`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[+X1.3]": {
    label: `Multiple
/Diverse
Models`,
    x: 0,
    y: 0,
    fontSize: "0.85em"
  },
  "[+X1.4]": {
    label: `Unspecified
/Misc
Models`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X1.5]": {
    label: `Longer
Lived
Models`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X1.6]": {
    label: `Human
Models`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X1.7]": {
    label: `Accelerated
Aging
Models`,
    x: 0,
    y: 0,
    fontSize: "0.55em"
  },
  "[+X2]": {
    label: "Public Datasets",
    x: 0,
    y: 0
  },
  "[+X3]": {
    label: `Instrumentation
/Lab Tech`,
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[+X4]": {
    label: `Human
Cell/Tissue
Bank`,
    x: 0,
    y: 0
  },
  "[+X5]": {
    label: `Aged
Animals
/Tissue
Bank`,
    x: 0,
    y: 0
  },
  "[+X6]": {
    label: `CS /
Software`,
    x: 0,
    y: 0
  },
  "[+X7]": {
    label: `Gene
Delivery`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+X8]": {
    label: "AI Tools",
    x: 0,
    y: 0
  },
  "[+X9]": {
    label: `Personal
Health
Sensors`,
    x: 0,
    y: 0,
    fontSize: "0.65em"
  },
  "[+X10]": {
    label: "Syn Bio",
    x: 0,
    y: 0
  },
  "[+X11]": {
    label: `Computing
Power`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X12]": {
    label: `Health
Data
Platform`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+X13]": {
    label: `Lab
Automation`,
    x: 0,
    y: 0,
    fontSize: "0.95em"
  },
  "[+T]": {
    label: "Translation",
    x: 0,
    y: -1
  },
  "[+T1]": {
    label: "Regulatory Path",
    x: 0,
    y: 0
  },
  "[+T2]": {
    label: `Participant
Database`,
    x: 0,
    y: 0,
    fontSize: "0.9em"
  },
  "[+T3]": {
    label: `Regulatory
Opt-Out`,
    x: 0,
    y: 0
  },
  "[+T4]": {
    label: `Intervention
Testing`,
    x: 0,
    y: 0
  },
  "[+T5]": {
    label: `Translation
Bridges`,
    x: 0,
    y: 0,
    fontSize: "0.7em"
  },
  "[+T6]": {
    label: `Regulate
Claims`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  },
  "[+T7]": {
    label: `Public
Trials`,
    x: 0,
    y: 0,
    fontSize: "0.75em"
  },
  "[+T8]": {
    label: `Rethink
Trials`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  },
  "[+T9]": {
    label: "Longevity Standard of Care",
    x: 0,
    y: 0
  },
  "[+T10]": {
    label: `Data
Unlocking`,
    x: 0,
    y: 0,
    fontSize: "0.6em"
  }
};
function Dv(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
var Cv = { value: () => {
} };
function Uu() {
  for (var e = 0, t = arguments.length, n = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new go(n);
}
function go(e) {
  this._ = e;
}
function Av(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", o = n.indexOf(".");
    if (o >= 0 && (i = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
go.prototype = Uu.prototype = {
  constructor: go,
  on: function(e, t) {
    var n = this._, i = Av(e + "", n), o, r = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++r < s; )
        if ((o = (e = i[r]).type) && (o = Ov(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (o = (e = i[r]).type)
        n[o] = Dc(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = Dc(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new go(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), i = 0, o, r; i < o; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (r = this._[e], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], o = 0, r = i.length; o < r; ++o)
      i[o].value.apply(t, n);
  }
};
function Ov(e, t) {
  for (var n = 0, i = e.length, o; n < i; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Dc(e, t, n) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === t) {
      e[i] = Cv, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ps = "http://www.w3.org/1999/xhtml";
const Cc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ps,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function cr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Cc.hasOwnProperty(t) ? { space: Cc[t], local: e } : e;
}
function Tv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ps && t.documentElement.namespaceURI === ps ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Bv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Zs(e) {
  var t = cr(e);
  return (t.local ? Bv : Tv)(t);
}
function Mv() {
}
function ea(e) {
  return e == null ? Mv : function() {
    return this.querySelector(e);
  };
}
function Iv(e) {
  typeof e != "function" && (e = ea(e));
  for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, a = i[o] = new Array(s), c, l, u = 0; u < s; ++u)
      (c = r[u]) && (l = e.call(c, c.__data__, u, r)) && ("__data__" in c && (l.__data__ = c.__data__), a[u] = l);
  return new Ke(i, this._parents);
}
function Fv(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function $v() {
  return [];
}
function Wu(e) {
  return e == null ? $v : function() {
    return this.querySelectorAll(e);
  };
}
function Xv(e) {
  return function() {
    return Fv(e.apply(this, arguments));
  };
}
function Vv(e) {
  typeof e == "function" ? e = Xv(e) : e = Wu(e);
  for (var t = this._groups, n = t.length, i = [], o = [], r = 0; r < n; ++r)
    for (var s = t[r], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (i.push(e.call(c, c.__data__, l, s)), o.push(c));
  return new Ke(i, o);
}
function Ku(e) {
  return function() {
    return this.matches(e);
  };
}
function Gu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Rv = Array.prototype.find;
function Hv(e) {
  return function() {
    return Rv.call(this.children, e);
  };
}
function Lv() {
  return this.firstElementChild;
}
function jv(e) {
  return this.select(e == null ? Lv : Hv(typeof e == "function" ? e : Gu(e)));
}
var zv = Array.prototype.filter;
function Qv() {
  return Array.from(this.children);
}
function qv(e) {
  return function() {
    return zv.call(this.children, e);
  };
}
function Uv(e) {
  return this.selectAll(e == null ? Qv : qv(typeof e == "function" ? e : Gu(e)));
}
function Wv(e) {
  typeof e != "function" && (e = Ku(e));
  for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, a = i[o] = [], c, l = 0; l < s; ++l)
      (c = r[l]) && e.call(c, c.__data__, l, r) && a.push(c);
  return new Ke(i, this._parents);
}
function Yu(e) {
  return new Array(e.length);
}
function Kv() {
  return new Ke(this._enter || this._groups.map(Yu), this._parents);
}
function Io(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Io.prototype = {
  constructor: Io,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Gv(e) {
  return function() {
    return e;
  };
}
function Yv(e, t, n, i, o, r) {
  for (var s = 0, a, c = t.length, l = r.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = r[s], i[s] = a) : n[s] = new Io(e, r[s]);
  for (; s < c; ++s)
    (a = t[s]) && (o[s] = a);
}
function Jv(e, t, n, i, o, r, s) {
  var a, c, l = /* @__PURE__ */ new Map(), u = t.length, d = r.length, p = new Array(u), f;
  for (a = 0; a < u; ++a)
    (c = t[a]) && (p[a] = f = s.call(c, c.__data__, a, t) + "", l.has(f) ? o[a] = c : l.set(f, c));
  for (a = 0; a < d; ++a)
    f = s.call(e, r[a], a, r) + "", (c = l.get(f)) ? (i[a] = c, c.__data__ = r[a], l.delete(f)) : n[a] = new Io(e, r[a]);
  for (a = 0; a < u; ++a)
    (c = t[a]) && l.get(p[a]) === c && (o[a] = c);
}
function Zv(e) {
  return e.__data__;
}
function ey(e, t) {
  if (!arguments.length)
    return Array.from(this, Zv);
  var n = t ? Jv : Yv, i = this._parents, o = this._groups;
  typeof e != "function" && (e = Gv(e));
  for (var r = o.length, s = new Array(r), a = new Array(r), c = new Array(r), l = 0; l < r; ++l) {
    var u = i[l], d = o[l], p = d.length, f = ty(e.call(u, u && u.__data__, l, i)), m = f.length, w = a[l] = new Array(m), A = s[l] = new Array(m), k = c[l] = new Array(p);
    n(u, d, w, A, k, f, t);
    for (var b = 0, x = 0, V, T; b < m; ++b)
      if (V = w[b]) {
        for (b >= x && (x = b + 1); !(T = A[x]) && ++x < m; )
          ;
        V._next = T || null;
      }
  }
  return s = new Ke(s, i), s._enter = a, s._exit = c, s;
}
function ty(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ny() {
  return new Ke(this._exit || this._groups.map(Yu), this._parents);
}
function iy(e, t, n) {
  var i = this.enter(), o = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? r.remove() : n(r), i && o ? i.merge(o).order() : o;
}
function oy(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, o = n.length, r = i.length, s = Math.min(o, r), a = new Array(o), c = 0; c < s; ++c)
    for (var l = n[c], u = i[c], d = l.length, p = a[c] = new Array(d), f, m = 0; m < d; ++m)
      (f = l[m] || u[m]) && (p[m] = f);
  for (; c < o; ++c)
    a[c] = n[c];
  return new Ke(a, this._parents);
}
function ry() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], o = i.length - 1, r = i[o], s; --o >= 0; )
      (s = i[o]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function sy(e) {
  e || (e = ay);
  function t(d, p) {
    return d && p ? e(d.__data__, p.__data__) : !d - !p;
  }
  for (var n = this._groups, i = n.length, o = new Array(i), r = 0; r < i; ++r) {
    for (var s = n[r], a = s.length, c = o[r] = new Array(a), l, u = 0; u < a; ++u)
      (l = s[u]) && (c[u] = l);
    c.sort(t);
  }
  return new Ke(o, this._parents).order();
}
function ay(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function cy() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ly() {
  return Array.from(this);
}
function uy() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], o = 0, r = i.length; o < r; ++o) {
      var s = i[o];
      if (s)
        return s;
    }
  return null;
}
function dy() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function py() {
  return !this.node();
}
function fy(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var o = t[n], r = 0, s = o.length, a; r < s; ++r)
      (a = o[r]) && e.call(a, a.__data__, r, o);
  return this;
}
function hy(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function gy(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function my(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function vy(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function yy(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function by(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function wy(e, t) {
  var n = cr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? gy : hy : typeof t == "function" ? n.local ? by : yy : n.local ? vy : my)(n, t));
}
function Ju(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function xy(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Sy(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function _y(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Py(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? xy : typeof t == "function" ? _y : Sy)(e, t, n ?? "")) : zn(this.node(), e);
}
function zn(e, t) {
  return e.style.getPropertyValue(t) || Ju(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ey(e) {
  return function() {
    delete this[e];
  };
}
function ky(e, t) {
  return function() {
    this[e] = t;
  };
}
function Ny(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Dy(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ey : typeof t == "function" ? Ny : ky)(e, t)) : this.node()[e];
}
function Zu(e) {
  return e.trim().split(/^|\s+/);
}
function ta(e) {
  return e.classList || new ed(e);
}
function ed(e) {
  this._node = e, this._names = Zu(e.getAttribute("class") || "");
}
ed.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function td(e, t) {
  for (var n = ta(e), i = -1, o = t.length; ++i < o; )
    n.add(t[i]);
}
function nd(e, t) {
  for (var n = ta(e), i = -1, o = t.length; ++i < o; )
    n.remove(t[i]);
}
function Cy(e) {
  return function() {
    td(this, e);
  };
}
function Ay(e) {
  return function() {
    nd(this, e);
  };
}
function Oy(e, t) {
  return function() {
    (t.apply(this, arguments) ? td : nd)(this, e);
  };
}
function Ty(e, t) {
  var n = Zu(e + "");
  if (arguments.length < 2) {
    for (var i = ta(this.node()), o = -1, r = n.length; ++o < r; )
      if (!i.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Oy : t ? Cy : Ay)(n, t));
}
function By() {
  this.textContent = "";
}
function My(e) {
  return function() {
    this.textContent = e;
  };
}
function Iy(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Fy(e) {
  return arguments.length ? this.each(e == null ? By : (typeof e == "function" ? Iy : My)(e)) : this.node().textContent;
}
function $y() {
  this.innerHTML = "";
}
function Xy(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Vy(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ry(e) {
  return arguments.length ? this.each(e == null ? $y : (typeof e == "function" ? Vy : Xy)(e)) : this.node().innerHTML;
}
function Hy() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ly() {
  return this.each(Hy);
}
function jy() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zy() {
  return this.each(jy);
}
function Qy(e) {
  var t = typeof e == "function" ? e : Zs(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qy() {
  return null;
}
function Uy(e, t) {
  var n = typeof e == "function" ? e : Zs(e), i = t == null ? qy : typeof t == "function" ? t : ea(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Wy() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ky() {
  return this.each(Wy);
}
function Gy() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yy() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Jy(e) {
  return this.select(e ? Yy : Gy);
}
function Zy(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function eb(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function tb(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function nb(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, o = t.length, r; n < o; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function ib(e, t, n) {
  return function() {
    var i = this.__on, o, r = eb(t);
    if (i) {
      for (var s = 0, a = i.length; s < a; ++s)
        if ((o = i[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = r, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), o = { type: e.type, name: e.name, value: t, listener: r, options: n }, i ? i.push(o) : this.__on = [o];
  };
}
function ob(e, t, n) {
  var i = tb(e + ""), o, r = i.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, u; c < l; ++c)
        for (o = 0, u = a[c]; o < r; ++o)
          if ((s = i[o]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = t ? ib : nb, o = 0; o < r; ++o)
    this.each(a(i[o], t, n));
  return this;
}
function id(e, t, n) {
  var i = Ju(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = i.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function rb(e, t) {
  return function() {
    return id(this, e, t);
  };
}
function sb(e, t) {
  return function() {
    return id(this, e, t.apply(this, arguments));
  };
}
function ab(e, t) {
  return this.each((typeof t == "function" ? sb : rb)(e, t));
}
function* cb() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], o = 0, r = i.length, s; o < r; ++o)
      (s = i[o]) && (yield s);
}
var od = [null];
function Ke(e, t) {
  this._groups = e, this._parents = t;
}
function Ri() {
  return new Ke([[document.documentElement]], od);
}
function lb() {
  return this;
}
Ke.prototype = Ri.prototype = {
  constructor: Ke,
  select: Iv,
  selectAll: Vv,
  selectChild: jv,
  selectChildren: Uv,
  filter: Wv,
  data: ey,
  enter: Kv,
  exit: ny,
  join: iy,
  merge: oy,
  selection: lb,
  order: ry,
  sort: sy,
  call: cy,
  nodes: ly,
  node: uy,
  size: dy,
  empty: py,
  each: fy,
  attr: wy,
  style: Py,
  property: Dy,
  classed: Ty,
  text: Fy,
  html: Ry,
  raise: Ly,
  lower: zy,
  append: Qy,
  insert: Uy,
  remove: Ky,
  clone: Jy,
  datum: Zy,
  on: ob,
  dispatch: ab,
  [Symbol.iterator]: cb
};
function pt(e) {
  return typeof e == "string" ? new Ke([[document.querySelector(e)]], [document.documentElement]) : new Ke([[e]], od);
}
function ub(e) {
  return pt(Zs(e).call(document.documentElement));
}
function na(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function rd(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function Hi() {
}
var Ci = 0.7, Fo = 1 / Ci, Vn = "\\s*([+-]?\\d+)\\s*", Ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", db = /^#([0-9a-f]{3,8})$/, pb = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), fb = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), hb = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Ai}\\)$`), gb = new RegExp(`^rgba\\(${wt},${wt},${wt},${Ai}\\)$`), mb = new RegExp(`^hsl\\(${Ai},${wt},${wt}\\)$`), vb = new RegExp(`^hsla\\(${Ai},${wt},${wt},${Ai}\\)$`), Ac = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
na(Hi, Oi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Oc,
  // Deprecated! Use color.formatHex.
  formatHex: Oc,
  formatHex8: yb,
  formatHsl: bb,
  formatRgb: Tc,
  toString: Tc
});
function Oc() {
  return this.rgb().formatHex();
}
function yb() {
  return this.rgb().formatHex8();
}
function bb() {
  return sd(this).formatHsl();
}
function Tc() {
  return this.rgb().formatRgb();
}
function Oi(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = db.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Bc(t) : n === 3 ? new ze(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Yi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Yi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pb.exec(e)) ? new ze(t[1], t[2], t[3], 1) : (t = fb.exec(e)) ? new ze(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = hb.exec(e)) ? Yi(t[1], t[2], t[3], t[4]) : (t = gb.exec(e)) ? Yi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = mb.exec(e)) ? Fc(t[1], t[2] / 100, t[3] / 100, 1) : (t = vb.exec(e)) ? Fc(t[1], t[2] / 100, t[3] / 100, t[4]) : Ac.hasOwnProperty(e) ? Bc(Ac[e]) : e === "transparent" ? new ze(NaN, NaN, NaN, 0) : null;
}
function Bc(e) {
  return new ze(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Yi(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new ze(e, t, n, i);
}
function wb(e) {
  return e instanceof Hi || (e = Oi(e)), e ? (e = e.rgb(), new ze(e.r, e.g, e.b, e.opacity)) : new ze();
}
function fs(e, t, n, i) {
  return arguments.length === 1 ? wb(e) : new ze(e, t, n, i ?? 1);
}
function ze(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
na(ze, fs, rd(Hi, {
  brighter(e) {
    return e = e == null ? Fo : Math.pow(Fo, e), new ze(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ci : Math.pow(Ci, e), new ze(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ze(mn(this.r), mn(this.g), mn(this.b), $o(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mc,
  // Deprecated! Use color.formatHex.
  formatHex: Mc,
  formatHex8: xb,
  formatRgb: Ic,
  toString: Ic
}));
function Mc() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}`;
}
function xb() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}${ln((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ic() {
  const e = $o(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mn(this.r)}, ${mn(this.g)}, ${mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $o(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ln(e) {
  return e = mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fc(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new st(e, t, n, i);
}
function sd(e) {
  if (e instanceof st)
    return new st(e.h, e.s, e.l, e.opacity);
  if (e instanceof Hi || (e = Oi(e)), !e)
    return new st();
  if (e instanceof st)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, o = Math.min(t, n, i), r = Math.max(t, n, i), s = NaN, a = r - o, c = (r + o) / 2;
  return a ? (t === r ? s = (n - i) / a + (n < i) * 6 : n === r ? s = (i - t) / a + 2 : s = (t - n) / a + 4, a /= c < 0.5 ? r + o : 2 - r - o, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new st(s, a, c, e.opacity);
}
function Sb(e, t, n, i) {
  return arguments.length === 1 ? sd(e) : new st(e, t, n, i ?? 1);
}
function st(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
na(st, Sb, rd(Hi, {
  brighter(e) {
    return e = e == null ? Fo : Math.pow(Fo, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ci : Math.pow(Ci, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - i;
    return new ze(
      kr(e >= 240 ? e - 240 : e + 120, o, i),
      kr(e, o, i),
      kr(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new st($c(this.h), Ji(this.s), Ji(this.l), $o(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $o(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$c(this.h)}, ${Ji(this.s) * 100}%, ${Ji(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $c(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ji(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function kr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ad = (e) => () => e;
function _b(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Pb(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function Eb(e) {
  return (e = +e) == 1 ? cd : function(t, n) {
    return n - t ? Pb(t, n, e) : ad(isNaN(t) ? n : t);
  };
}
function cd(e, t) {
  var n = t - e;
  return n ? _b(e, n) : ad(isNaN(e) ? t : e);
}
const Xc = function e(t) {
  var n = Eb(t);
  function i(o, r) {
    var s = n((o = fs(o)).r, (r = fs(r)).r), a = n(o.g, r.g), c = n(o.b, r.b), l = cd(o.opacity, r.opacity);
    return function(u) {
      return o.r = s(u), o.g = a(u), o.b = c(u), o.opacity = l(u), o + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Qt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nr = new RegExp(hs.source, "g");
function kb(e) {
  return function() {
    return e;
  };
}
function Nb(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Db(e, t) {
  var n = hs.lastIndex = Nr.lastIndex = 0, i, o, r, s = -1, a = [], c = [];
  for (e = e + "", t = t + ""; (i = hs.exec(e)) && (o = Nr.exec(t)); )
    (r = o.index) > n && (r = t.slice(n, r), a[s] ? a[s] += r : a[++s] = r), (i = i[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, c.push({ i: s, x: Qt(i, o) })), n = Nr.lastIndex;
  return n < t.length && (r = t.slice(n), a[s] ? a[s] += r : a[++s] = r), a.length < 2 ? c[0] ? Nb(c[0].x) : kb(t) : (t = c.length, function(l) {
    for (var u = 0, d; u < t; ++u)
      a[(d = c[u]).i] = d.x(l);
    return a.join("");
  });
}
var Vc = 180 / Math.PI, gs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ld(e, t, n, i, o, r) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * i) && (n -= e * c, i -= t * c), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, c /= a), e * i < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: r,
    rotate: Math.atan2(t, e) * Vc,
    skewX: Math.atan(c) * Vc,
    scaleX: s,
    scaleY: a
  };
}
var Zi;
function Cb(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? gs : ld(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ab(e) {
  return e == null || (Zi || (Zi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zi.setAttribute("transform", e), !(e = Zi.transform.baseVal.consolidate())) ? gs : (e = e.matrix, ld(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ud(e, t, n, i) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function r(l, u, d, p, f, m) {
    if (l !== d || u !== p) {
      var w = f.push("translate(", null, t, null, n);
      m.push({ i: w - 4, x: Qt(l, d) }, { i: w - 2, x: Qt(u, p) });
    } else
      (d || p) && f.push("translate(" + d + t + p + n);
  }
  function s(l, u, d, p) {
    l !== u ? (l - u > 180 ? u += 360 : u - l > 180 && (l += 360), p.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: Qt(l, u) })) : u && d.push(o(d) + "rotate(" + u + i);
  }
  function a(l, u, d, p) {
    l !== u ? p.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: Qt(l, u) }) : u && d.push(o(d) + "skewX(" + u + i);
  }
  function c(l, u, d, p, f, m) {
    if (l !== d || u !== p) {
      var w = f.push(o(f) + "scale(", null, ",", null, ")");
      m.push({ i: w - 4, x: Qt(l, d) }, { i: w - 2, x: Qt(u, p) });
    } else
      (d !== 1 || p !== 1) && f.push(o(f) + "scale(" + d + "," + p + ")");
  }
  return function(l, u) {
    var d = [], p = [];
    return l = e(l), u = e(u), r(l.translateX, l.translateY, u.translateX, u.translateY, d, p), s(l.rotate, u.rotate, d, p), a(l.skewX, u.skewX, d, p), c(l.scaleX, l.scaleY, u.scaleX, u.scaleY, d, p), l = u = null, function(f) {
      for (var m = -1, w = p.length, A; ++m < w; )
        d[(A = p[m]).i] = A.x(f);
      return d.join("");
    };
  };
}
var Ob = ud(Cb, "px, ", "px)", "deg)"), Tb = ud(Ab, ", ", ")", ")"), Qn = 0, si = 0, ei = 0, dd = 1e3, Xo, ai, Vo = 0, wn = 0, lr = 0, Ti = typeof performance == "object" && performance.now ? performance : Date, pd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ia() {
  return wn || (pd(Bb), wn = Ti.now() + lr);
}
function Bb() {
  wn = 0;
}
function Ro() {
  this._call = this._time = this._next = null;
}
Ro.prototype = fd.prototype = {
  constructor: Ro,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ia() : +n) + (t == null ? 0 : +t), !this._next && ai !== this && (ai ? ai._next = this : Xo = this, ai = this), this._call = e, this._time = n, ms();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ms());
  }
};
function fd(e, t, n) {
  var i = new Ro();
  return i.restart(e, t, n), i;
}
function Mb() {
  ia(), ++Qn;
  for (var e = Xo, t; e; )
    (t = wn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qn;
}
function Rc() {
  wn = (Vo = Ti.now()) + lr, Qn = si = 0;
  try {
    Mb();
  } finally {
    Qn = 0, Fb(), wn = 0;
  }
}
function Ib() {
  var e = Ti.now(), t = e - Vo;
  t > dd && (lr -= t, Vo = e);
}
function Fb() {
  for (var e, t = Xo, n, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Xo = n);
  ai = e, ms(i);
}
function ms(e) {
  if (!Qn) {
    si && (si = clearTimeout(si));
    var t = e - wn;
    t > 24 ? (e < 1 / 0 && (si = setTimeout(Rc, e - Ti.now() - lr)), ei && (ei = clearInterval(ei))) : (ei || (Vo = Ti.now(), ei = setInterval(Ib, dd)), Qn = 1, pd(Rc));
  }
}
function Hc(e, t, n) {
  var i = new Ro();
  return t = t == null ? 0 : +t, i.restart((o) => {
    i.stop(), e(o + t);
  }, t, n), i;
}
var $b = Uu("start", "end", "cancel", "interrupt"), Xb = [], hd = 0, Lc = 1, vs = 2, mo = 3, jc = 4, ys = 5, vo = 6;
function ur(e, t, n, i, o, r) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Vb(e, n, {
    name: t,
    index: i,
    // For context during callback.
    group: o,
    // For context during callback.
    on: $b,
    tween: Xb,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: hd
  });
}
function oa(e, t) {
  var n = lt(e, t);
  if (n.state > hd)
    throw new Error("too late; already scheduled");
  return n;
}
function _t(e, t) {
  var n = lt(e, t);
  if (n.state > mo)
    throw new Error("too late; already running");
  return n;
}
function lt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Vb(e, t, n) {
  var i = e.__transition, o;
  i[t] = n, n.timer = fd(r, 0, n.time);
  function r(l) {
    n.state = Lc, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var u, d, p, f;
    if (n.state !== Lc)
      return c();
    for (u in i)
      if (f = i[u], f.name === n.name) {
        if (f.state === mo)
          return Hc(s);
        f.state === jc ? (f.state = vo, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete i[u]) : +u < t && (f.state = vo, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete i[u]);
      }
    if (Hc(function() {
      n.state === mo && (n.state = jc, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = vs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === vs) {
      for (n.state = mo, o = new Array(p = n.tween.length), u = 0, d = -1; u < p; ++u)
        (f = n.tween[u].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = f);
      o.length = d + 1;
    }
  }
  function a(l) {
    for (var u = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(c), n.state = ys, 1), d = -1, p = o.length; ++d < p; )
      o[d].call(e, u);
    n.state === ys && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = vo, n.timer.stop(), delete i[t];
    for (var l in i)
      return;
    delete e.__transition;
  }
}
function Rb(e, t) {
  var n = e.__transition, i, o, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((i = n[s]).name !== t) {
        r = !1;
        continue;
      }
      o = i.state > vs && i.state < ys, i.state = vo, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function Hb(e) {
  return this.each(function() {
    Rb(this, e);
  });
}
function Lb(e, t) {
  var n, i;
  return function() {
    var o = _t(this, e), r = o.tween;
    if (r !== n) {
      i = n = r;
      for (var s = 0, a = i.length; s < a; ++s)
        if (i[s].name === t) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function jb(e, t, n) {
  var i, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var r = _t(this, e), s = r.tween;
    if (s !== i) {
      o = (i = s).slice();
      for (var a = { name: t, value: n }, c = 0, l = o.length; c < l; ++c)
        if (o[c].name === t) {
          o[c] = a;
          break;
        }
      c === l && o.push(a);
    }
    r.tween = o;
  };
}
function zb(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = lt(this.node(), n).tween, o = 0, r = i.length, s; o < r; ++o)
      if ((s = i[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Lb : jb)(n, e, t));
}
function ra(e, t, n) {
  var i = e._id;
  return e.each(function() {
    var o = _t(this, i);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return lt(o, i).value[t];
  };
}
function gd(e, t) {
  var n;
  return (typeof t == "number" ? Qt : t instanceof Oi ? Xc : (n = Oi(t)) ? (t = n, Xc) : Db)(e, t);
}
function Qb(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qb(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ub(e, t, n) {
  var i, o = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === i ? r : r = t(i = s, n);
  };
}
function Wb(e, t, n) {
  var i, o = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === i ? r : r = t(i = s, n);
  };
}
function Kb(e, t, n) {
  var i, o, r;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === i && c === o ? r : (o = c, r = t(i = s, a)));
  };
}
function Gb(e, t, n) {
  var i, o, r;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === i && c === o ? r : (o = c, r = t(i = s, a)));
  };
}
function Yb(e, t) {
  var n = cr(e), i = n === "transform" ? Tb : gd;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Gb : Kb)(n, i, ra(this, "attr." + e, t)) : t == null ? (n.local ? qb : Qb)(n) : (n.local ? Wb : Ub)(n, i, t));
}
function Jb(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Zb(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function e0(e, t) {
  var n, i;
  function o() {
    var r = t.apply(this, arguments);
    return r !== i && (n = (i = r) && Zb(e, r)), n;
  }
  return o._value = t, o;
}
function t0(e, t) {
  var n, i;
  function o() {
    var r = t.apply(this, arguments);
    return r !== i && (n = (i = r) && Jb(e, r)), n;
  }
  return o._value = t, o;
}
function n0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var i = cr(e);
  return this.tween(n, (i.local ? e0 : t0)(i, t));
}
function i0(e, t) {
  return function() {
    oa(this, e).delay = +t.apply(this, arguments);
  };
}
function o0(e, t) {
  return t = +t, function() {
    oa(this, e).delay = t;
  };
}
function r0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? i0 : o0)(t, e)) : lt(this.node(), t).delay;
}
function s0(e, t) {
  return function() {
    _t(this, e).duration = +t.apply(this, arguments);
  };
}
function a0(e, t) {
  return t = +t, function() {
    _t(this, e).duration = t;
  };
}
function c0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? s0 : a0)(t, e)) : lt(this.node(), t).duration;
}
function l0(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    _t(this, e).ease = t;
  };
}
function u0(e) {
  var t = this._id;
  return arguments.length ? this.each(l0(t, e)) : lt(this.node(), t).ease;
}
function d0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    _t(this, e).ease = n;
  };
}
function p0(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(d0(this._id, e));
}
function f0(e) {
  typeof e != "function" && (e = Ku(e));
  for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o)
    for (var r = t[o], s = r.length, a = i[o] = [], c, l = 0; l < s; ++l)
      (c = r[l]) && e.call(c, c.__data__, l, r) && a.push(c);
  return new Mt(i, this._parents, this._name, this._id);
}
function h0(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, i = t.length, o = n.length, r = Math.min(i, o), s = new Array(i), a = 0; a < r; ++a)
    for (var c = t[a], l = n[a], u = c.length, d = s[a] = new Array(u), p, f = 0; f < u; ++f)
      (p = c[f] || l[f]) && (d[f] = p);
  for (; a < i; ++a)
    s[a] = t[a];
  return new Mt(s, this._parents, this._name, this._id);
}
function g0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function m0(e, t, n) {
  var i, o, r = g0(t) ? oa : _t;
  return function() {
    var s = r(this, e), a = s.on;
    a !== i && (o = (i = a).copy()).on(t, n), s.on = o;
  };
}
function v0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? lt(this.node(), n).on.on(e) : this.each(m0(n, e, t));
}
function y0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function b0() {
  return this.on("end.remove", y0(this._id));
}
function w0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ea(e));
  for (var i = this._groups, o = i.length, r = new Array(o), s = 0; s < o; ++s)
    for (var a = i[s], c = a.length, l = r[s] = new Array(c), u, d, p = 0; p < c; ++p)
      (u = a[p]) && (d = e.call(u, u.__data__, p, a)) && ("__data__" in u && (d.__data__ = u.__data__), l[p] = d, ur(l[p], t, n, p, l, lt(u, n)));
  return new Mt(r, this._parents, t, n);
}
function x0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Wu(e));
  for (var i = this._groups, o = i.length, r = [], s = [], a = 0; a < o; ++a)
    for (var c = i[a], l = c.length, u, d = 0; d < l; ++d)
      if (u = c[d]) {
        for (var p = e.call(u, u.__data__, d, c), f, m = lt(u, n), w = 0, A = p.length; w < A; ++w)
          (f = p[w]) && ur(f, t, n, w, p, m);
        r.push(p), s.push(u);
      }
  return new Mt(r, s, t, n);
}
var S0 = Ri.prototype.constructor;
function _0() {
  return new S0(this._groups, this._parents);
}
function P0(e, t) {
  var n, i, o;
  return function() {
    var r = zn(this, e), s = (this.style.removeProperty(e), zn(this, e));
    return r === s ? null : r === n && s === i ? o : o = t(n = r, i = s);
  };
}
function md(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function E0(e, t, n) {
  var i, o = n + "", r;
  return function() {
    var s = zn(this, e);
    return s === o ? null : s === i ? r : r = t(i = s, n);
  };
}
function k0(e, t, n) {
  var i, o, r;
  return function() {
    var s = zn(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), zn(this, e))), s === c ? null : s === i && c === o ? r : (o = c, r = t(i = s, a));
  };
}
function N0(e, t) {
  var n, i, o, r = "style." + t, s = "end." + r, a;
  return function() {
    var c = _t(this, e), l = c.on, u = c.value[r] == null ? a || (a = md(t)) : void 0;
    (l !== n || o !== u) && (i = (n = l).copy()).on(s, o = u), c.on = i;
  };
}
function D0(e, t, n) {
  var i = (e += "") == "transform" ? Ob : gd;
  return t == null ? this.styleTween(e, P0(e, i)).on("end.style." + e, md(e)) : typeof t == "function" ? this.styleTween(e, k0(e, i, ra(this, "style." + e, t))).each(N0(this._id, e)) : this.styleTween(e, E0(e, i, t), n).on("end.style." + e, null);
}
function C0(e, t, n) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), n);
  };
}
function A0(e, t, n) {
  var i, o;
  function r() {
    var s = t.apply(this, arguments);
    return s !== o && (i = (o = s) && C0(e, s, n)), i;
  }
  return r._value = t, r;
}
function O0(e, t, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (t == null)
    return this.tween(i, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(i, A0(e, t, n ?? ""));
}
function T0(e) {
  return function() {
    this.textContent = e;
  };
}
function B0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function M0(e) {
  return this.tween("text", typeof e == "function" ? B0(ra(this, "text", e)) : T0(e == null ? "" : e + ""));
}
function I0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function F0(e) {
  var t, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && I0(o)), t;
  }
  return i._value = e, i;
}
function $0(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, F0(e));
}
function X0() {
  for (var e = this._name, t = this._id, n = vd(), i = this._groups, o = i.length, r = 0; r < o; ++r)
    for (var s = i[r], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var u = lt(c, t);
        ur(c, e, n, l, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Mt(i, this._parents, e, n);
}
function V0() {
  var e, t, n = this, i = n._id, o = n.size();
  return new Promise(function(r, s) {
    var a = { value: s }, c = { value: function() {
      --o === 0 && r();
    } };
    n.each(function() {
      var l = _t(this, i), u = l.on;
      u !== e && (t = (e = u).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), o === 0 && r();
  });
}
var R0 = 0;
function Mt(e, t, n, i) {
  this._groups = e, this._parents = t, this._name = n, this._id = i;
}
function vd() {
  return ++R0;
}
var Nt = Ri.prototype;
Mt.prototype = {
  constructor: Mt,
  select: w0,
  selectAll: x0,
  selectChild: Nt.selectChild,
  selectChildren: Nt.selectChildren,
  filter: f0,
  merge: h0,
  selection: _0,
  transition: X0,
  call: Nt.call,
  nodes: Nt.nodes,
  node: Nt.node,
  size: Nt.size,
  empty: Nt.empty,
  each: Nt.each,
  on: v0,
  attr: Yb,
  attrTween: n0,
  style: D0,
  styleTween: O0,
  text: M0,
  textTween: $0,
  remove: b0,
  tween: zb,
  delay: r0,
  duration: c0,
  ease: u0,
  easeVarying: p0,
  end: V0,
  [Symbol.iterator]: Nt[Symbol.iterator]
};
function H0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var L0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: H0
};
function j0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function z0(e) {
  var t, n;
  e instanceof Mt ? (t = e._id, e = e._name) : (t = vd(), (n = L0).time = ia(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, r = 0; r < o; ++r)
    for (var s = i[r], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && ur(c, e, t, l, s, n || j0(c, t));
  return new Mt(i, this._parents, e, t);
}
Ri.prototype.interrupt = Hb;
Ri.prototype.transition = z0;
function Q0(e) {
  var t = 0, n = e.children, i = n && n.length;
  if (!i)
    t = 1;
  else
    for (; --i >= 0; )
      t += n[i].value;
  e.value = t;
}
function q0() {
  return this.eachAfter(Q0);
}
function U0(e, t) {
  let n = -1;
  for (const i of this)
    e.call(t, i, ++n, this);
  return this;
}
function W0(e, t) {
  for (var n = this, i = [n], o, r, s = -1; n = i.pop(); )
    if (e.call(t, n, ++s, this), o = n.children)
      for (r = o.length - 1; r >= 0; --r)
        i.push(o[r]);
  return this;
}
function K0(e, t) {
  for (var n = this, i = [n], o = [], r, s, a, c = -1; n = i.pop(); )
    if (o.push(n), r = n.children)
      for (s = 0, a = r.length; s < a; ++s)
        i.push(r[s]);
  for (; n = o.pop(); )
    e.call(t, n, ++c, this);
  return this;
}
function G0(e, t) {
  let n = -1;
  for (const i of this)
    if (e.call(t, i, ++n, this))
      return i;
}
function Y0(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, i = t.children, o = i && i.length; --o >= 0; )
      n += i[o].value;
    t.value = n;
  });
}
function J0(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function Z0(e) {
  for (var t = this, n = e1(t, e), i = [t]; t !== n; )
    t = t.parent, i.push(t);
  for (var o = i.length; e !== n; )
    i.splice(o, 0, e), e = e.parent;
  return i;
}
function e1(e, t) {
  if (e === t)
    return e;
  var n = e.ancestors(), i = t.ancestors(), o = null;
  for (e = n.pop(), t = i.pop(); e === t; )
    o = e, e = n.pop(), t = i.pop();
  return o;
}
function t1() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function n1() {
  return Array.from(this);
}
function i1() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function o1() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function* r1() {
  var e = this, t, n = [e], i, o, r;
  do
    for (t = n.reverse(), n = []; e = t.pop(); )
      if (yield e, i = e.children)
        for (o = 0, r = i.length; o < r; ++o)
          n.push(i[o]);
  while (n.length);
}
function sa(e, t) {
  e instanceof Map ? (e = [void 0, e], t === void 0 && (t = c1)) : t === void 0 && (t = a1);
  for (var n = new Bi(e), i, o = [n], r, s, a, c; i = o.pop(); )
    if ((s = t(i.data)) && (c = (s = Array.from(s)).length))
      for (i.children = s, a = c - 1; a >= 0; --a)
        o.push(r = s[a] = new Bi(s[a])), r.parent = i, r.depth = i.depth + 1;
  return n.eachBefore(yd);
}
function s1() {
  return sa(this).eachBefore(l1);
}
function a1(e) {
  return e.children;
}
function c1(e) {
  return Array.isArray(e) ? e[1] : null;
}
function l1(e) {
  e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function yd(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function Bi(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
Bi.prototype = sa.prototype = {
  constructor: Bi,
  count: q0,
  each: U0,
  eachAfter: K0,
  eachBefore: W0,
  find: G0,
  sum: Y0,
  sort: J0,
  path: Z0,
  ancestors: t1,
  descendants: n1,
  leaves: i1,
  links: o1,
  copy: s1,
  [Symbol.iterator]: r1
};
function yo(e) {
  return e == null ? null : u1(e);
}
function u1(e) {
  if (typeof e != "function")
    throw new Error();
  return e;
}
function zc() {
  return 0;
}
function d1(e) {
  return function() {
    return e;
  };
}
const p1 = 1664525, f1 = 1013904223, Qc = 4294967296;
function h1() {
  let e = 1;
  return () => (e = (p1 * e + f1) % Qc) / Qc;
}
function g1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function m1(e, t) {
  let n = e.length, i, o;
  for (; n; )
    o = t() * n-- | 0, i = e[n], e[n] = e[o], e[o] = i;
  return e;
}
function v1(e, t) {
  for (var n = 0, i = (e = m1(Array.from(e), t)).length, o = [], r, s; n < i; )
    r = e[n], s && bd(s, r) ? ++n : (s = b1(o = y1(o, r)), n = 0);
  return s;
}
function y1(e, t) {
  var n, i;
  if (Dr(t, e))
    return [t];
  for (n = 0; n < e.length; ++n)
    if (eo(t, e[n]) && Dr(ci(e[n], t), e))
      return [e[n], t];
  for (n = 0; n < e.length - 1; ++n)
    for (i = n + 1; i < e.length; ++i)
      if (eo(ci(e[n], e[i]), t) && eo(ci(e[n], t), e[i]) && eo(ci(e[i], t), e[n]) && Dr(wd(e[n], e[i], t), e))
        return [e[n], e[i], t];
  throw new Error();
}
function eo(e, t) {
  var n = e.r - t.r, i = t.x - e.x, o = t.y - e.y;
  return n < 0 || n * n < i * i + o * o;
}
function bd(e, t) {
  var n = e.r - t.r + Math.max(e.r, t.r, 1) * 1e-9, i = t.x - e.x, o = t.y - e.y;
  return n > 0 && n * n > i * i + o * o;
}
function Dr(e, t) {
  for (var n = 0; n < t.length; ++n)
    if (!bd(e, t[n]))
      return !1;
  return !0;
}
function b1(e) {
  switch (e.length) {
    case 1:
      return w1(e[0]);
    case 2:
      return ci(e[0], e[1]);
    case 3:
      return wd(e[0], e[1], e[2]);
  }
}
function w1(e) {
  return {
    x: e.x,
    y: e.y,
    r: e.r
  };
}
function ci(e, t) {
  var n = e.x, i = e.y, o = e.r, r = t.x, s = t.y, a = t.r, c = r - n, l = s - i, u = a - o, d = Math.sqrt(c * c + l * l);
  return {
    x: (n + r + c / d * u) / 2,
    y: (i + s + l / d * u) / 2,
    r: (d + o + a) / 2
  };
}
function wd(e, t, n) {
  var i = e.x, o = e.y, r = e.r, s = t.x, a = t.y, c = t.r, l = n.x, u = n.y, d = n.r, p = i - s, f = i - l, m = o - a, w = o - u, A = c - r, k = d - r, b = i * i + o * o - r * r, x = b - s * s - a * a + c * c, V = b - l * l - u * u + d * d, T = f * m - p * w, ae = (m * V - w * x) / (T * 2) - i, X = (w * A - m * k) / T, R = (f * x - p * V) / (T * 2) - o, D = (p * k - f * A) / T, E = X * X + D * D - 1, W = 2 * (r + ae * X + R * D), B = ae * ae + R * R - r * r, te = -(Math.abs(E) > 1e-6 ? (W + Math.sqrt(W * W - 4 * E * B)) / (2 * E) : B / W);
  return {
    x: i + ae + X * te,
    y: o + R + D * te,
    r: te
  };
}
function qc(e, t, n) {
  var i = e.x - t.x, o, r, s = e.y - t.y, a, c, l = i * i + s * s;
  l ? (r = t.r + n.r, r *= r, c = e.r + n.r, c *= c, r > c ? (o = (l + c - r) / (2 * l), a = Math.sqrt(Math.max(0, c / l - o * o)), n.x = e.x - o * i - a * s, n.y = e.y - o * s + a * i) : (o = (l + r - c) / (2 * l), a = Math.sqrt(Math.max(0, r / l - o * o)), n.x = t.x + o * i - a * s, n.y = t.y + o * s + a * i)) : (n.x = t.x + n.r, n.y = t.y);
}
function Uc(e, t) {
  var n = e.r + t.r - 1e-6, i = t.x - e.x, o = t.y - e.y;
  return n > 0 && n * n > i * i + o * o;
}
function Wc(e) {
  var t = e._, n = e.next._, i = t.r + n.r, o = (t.x * n.r + n.x * t.r) / i, r = (t.y * n.r + n.y * t.r) / i;
  return o * o + r * r;
}
function to(e) {
  this._ = e, this.next = null, this.previous = null;
}
function x1(e, t) {
  if (!(r = (e = g1(e)).length))
    return 0;
  var n, i, o, r, s, a, c, l, u, d, p;
  if (n = e[0], n.x = 0, n.y = 0, !(r > 1))
    return n.r;
  if (i = e[1], n.x = -i.r, i.x = n.r, i.y = 0, !(r > 2))
    return n.r + i.r;
  qc(i, n, o = e[2]), n = new to(n), i = new to(i), o = new to(o), n.next = o.previous = i, i.next = n.previous = o, o.next = i.previous = n;
  e:
    for (c = 3; c < r; ++c) {
      qc(n._, i._, o = e[c]), o = new to(o), l = i.next, u = n.previous, d = i._.r, p = n._.r;
      do
        if (d <= p) {
          if (Uc(l._, o._)) {
            i = l, n.next = i, i.previous = n, --c;
            continue e;
          }
          d += l._.r, l = l.next;
        } else {
          if (Uc(u._, o._)) {
            n = u, n.next = i, i.previous = n, --c;
            continue e;
          }
          p += u._.r, u = u.previous;
        }
      while (l !== u.next);
      for (o.previous = n, o.next = i, n.next = i.previous = i = o, s = Wc(n); (o = o.next) !== i; )
        (a = Wc(o)) < s && (n = o, s = a);
      i = n.next;
    }
  for (n = [i._], o = i; (o = o.next) !== i; )
    n.push(o._);
  for (o = v1(n, t), c = 0; c < r; ++c)
    n = e[c], n.x -= o.x, n.y -= o.y;
  return o.r;
}
function S1(e) {
  return Math.sqrt(e.value);
}
function _1() {
  var e = null, t = 1, n = 1, i = zc;
  function o(r) {
    const s = h1();
    return r.x = t / 2, r.y = n / 2, e ? r.eachBefore(Kc(e)).eachAfter(Cr(i, 0.5, s)).eachBefore(Gc(1)) : r.eachBefore(Kc(S1)).eachAfter(Cr(zc, 1, s)).eachAfter(Cr(i, r.r / Math.min(t, n), s)).eachBefore(Gc(Math.min(t, n) / (2 * r.r))), r;
  }
  return o.radius = function(r) {
    return arguments.length ? (e = yo(r), o) : e;
  }, o.size = function(r) {
    return arguments.length ? (t = +r[0], n = +r[1], o) : [t, n];
  }, o.padding = function(r) {
    return arguments.length ? (i = typeof r == "function" ? r : d1(+r), o) : i;
  }, o;
}
function Kc(e) {
  return function(t) {
    t.children || (t.r = Math.max(0, +e(t) || 0));
  };
}
function Cr(e, t, n) {
  return function(i) {
    if (o = i.children) {
      var o, r, s = o.length, a = e(i) * t || 0, c;
      if (a)
        for (r = 0; r < s; ++r)
          o[r].r += a;
      if (c = x1(o, n), a)
        for (r = 0; r < s; ++r)
          o[r].r -= a;
      i.r = c + a;
    }
  };
}
function Gc(e) {
  return function(t) {
    var n = t.parent;
    t.r *= e, n && (t.x = n.x + e * t.x, t.y = n.y + e * t.y);
  };
}
var P1 = { depth: -1 }, Yc = {}, Ar = {};
function E1(e) {
  return e.id;
}
function k1(e) {
  return e.parentId;
}
function Jc() {
  var e = E1, t = k1, n;
  function i(o) {
    var r = Array.from(o), s = e, a = t, c, l, u, d, p, f, m, w, A = /* @__PURE__ */ new Map();
    if (n != null) {
      const k = r.map((V, T) => N1(n(V, T, o))), b = k.map(Zc), x = new Set(k).add("");
      for (const V of b)
        x.has(V) || (x.add(V), k.push(V), b.push(Zc(V)), r.push(Ar));
      s = (V, T) => k[T], a = (V, T) => b[T];
    }
    for (u = 0, c = r.length; u < c; ++u)
      l = r[u], f = r[u] = new Bi(l), (m = s(l, u, o)) != null && (m += "") && (w = f.id = m, A.set(w, A.has(w) ? Yc : f)), (m = a(l, u, o)) != null && (m += "") && (f.parent = m);
    for (u = 0; u < c; ++u)
      if (f = r[u], m = f.parent) {
        if (p = A.get(m), !p)
          throw new Error("missing: " + m);
        if (p === Yc)
          throw new Error("ambiguous: " + m);
        p.children ? p.children.push(f) : p.children = [f], f.parent = p;
      } else {
        if (d)
          throw new Error("multiple roots");
        d = f;
      }
    if (!d)
      throw new Error("no root");
    if (n != null) {
      for (; d.data === Ar && d.children.length === 1; )
        d = d.children[0], --c;
      for (let k = r.length - 1; k >= 0 && (f = r[k], f.data === Ar); --k)
        f.data = null;
    }
    if (d.parent = P1, d.eachBefore(function(k) {
      k.depth = k.parent.depth + 1, --c;
    }).eachBefore(yd), d.parent = null, c > 0)
      throw new Error("cycle");
    return d;
  }
  return i.id = function(o) {
    return arguments.length ? (e = yo(o), i) : e;
  }, i.parentId = function(o) {
    return arguments.length ? (t = yo(o), i) : t;
  }, i.path = function(o) {
    return arguments.length ? (n = yo(o), i) : n;
  }, i;
}
function N1(e) {
  e = `${e}`;
  let t = e.length;
  return bs(e, t - 1) && !bs(e, t - 2) && (e = e.slice(0, -1)), e[0] === "/" ? e : `/${e}`;
}
function Zc(e) {
  let t = e.length;
  if (t < 2)
    return "";
  for (; --t > 1 && !bs(e, t); )
    ;
  return e.slice(0, t);
}
function bs(e, t) {
  if (e[t] === "/") {
    let n = 0;
    for (; t > 0 && e[--t] === "\\"; )
      ++n;
    if (!(n & 1))
      return !0;
  }
  return !1;
}
function li(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
li.prototype = {
  constructor: li,
  scale: function(e) {
    return e === 1 ? this : new li(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new li(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
li.prototype;
const D1 = (e) => (Jo("data-v-87f44d78"), e = e(), Zo(), e), C1 = { key: 0 }, A1 = /* @__PURE__ */ D1(() => /* @__PURE__ */ Y("div", { class: "answers" }, "Answers:", -1)), O1 = { key: 0 }, T1 = ["innerHTML"], B1 = { key: 1 }, M1 = /* @__PURE__ */ $i({
  __name: "BottleneckDetails",
  props: {
    data: {
      title: String,
      description: String,
      items: Array,
      isBottleneck: Boolean
    }
  },
  setup(e) {
    return (t, n) => {
      var i, o;
      return (o = (i = e.data) == null ? void 0 : i.items) != null && o.length ? (le(), be("div", C1, [
        Y("h1", null, Ht(e.data.title.split("]")[1]), 1),
        Y("h2", null, Ht(e.data.description), 1),
        Y("div", null, "Count: " + Ht(e.data.items.length), 1),
        A1,
        (le(!0), be(ke, null, Si(e.data.items, (r, s) => (le(), be("div", {
          key: s,
          class: "answer"
        }, [
          e.data.isBottleneck ? (le(), be("div", O1, [
            Y("h3", null, Ht(s + 1) + ".", 1),
            Y("div", null, Ht("Bottleneck: " + r.title), 1),
            Y("div", {
              innerHTML: "Why: " + r.description
            }, null, 8, T1)
          ])) : (le(), be("div", B1, [
            Y("div", null, Ht(s + 1 + ". " + r.title), 1)
          ]))
        ]))), 128))
      ])) : Bt("", !0);
    };
  }
});
const dr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, I1 = /* @__PURE__ */ dr(M1, [["__scopeId", "data-v-87f44d78"]]);
const F1 = (e) => (Jo("data-v-5deebb24"), e = e(), Zo(), e), $1 = { class: "chart-row" }, X1 = /* @__PURE__ */ F1(() => /* @__PURE__ */ Y("div", { class: "chart" }, null, -1)), V1 = {
  __name: "BubbleChart",
  props: {
    chartData: {
      data: Object,
      props: Object
    }
  },
  setup(e) {
    const t = e;
    Lm().analysis;
    const i = Pe({
      title: "",
      description: "",
      items: [],
      isBottleneck: !1
    });
    Qe(
      () => t.chartData,
      function() {
        const r = o(t.chartData.data, t.chartData.props);
        pt(".chart").selectAll("svg").remove(), document.getElementsByClassName("chart")[0].append(r);
      }
    ), _n(function() {
      const r = o(t.chartData.data, t.chartData.props);
      document.getElementsByClassName("chart")[0].append(r);
    });
    function o(r, {
      // data is either tabular (array of objects) or hierarchy (nested objects)
      path: s,
      // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
      id: a = Array.isArray(r) ? (pe) => pe.id : null,
      // if tabular data, given a d in data, returns a unique identifier (string)
      parentId: c = Array.isArray(r) ? (pe) => pe.parentId : null,
      // if tabular data, given a node d, returns its parent’s identifier
      children: l,
      // if hierarchical data, given a d in data, returns its children
      value: u,
      // given a node d, returns a quantitative value (for area encoding; null for count)
      clickData: d,
      // given a node d, returns the data that should be shown when that node is clicked on
      sort: p = (pe, re) => Dv(pe.value, re.value),
      // how to sort nodes prior to layout
      label: f,
      // given a leaf node d, returns the display name
      title: m,
      // given a node d, returns its hover text
      link: w,
      // given a node d, its link (if any)
      linkTarget: A = "_blank",
      // the target attribute for links, if any
      chartTitle: k,
      // the title of the chart
      width: b = 1e3,
      // outer width, in pixels
      height: x = 1e3,
      // outer height, in pixels
      margin: V = 0,
      // shorthand for margins
      marginTop: T = V,
      // top margin, in pixels
      marginRight: ae = V,
      // right margin, in pixels
      marginBottom: X = V,
      // bottom margin, in pixels
      marginLeft: R = V,
      // left margin, in pixels
      padding: D = 0,
      // separation between circles
      fill: E,
      // fill for leaf circles
      fillOpacity: W,
      // fill opacity for leaf circles
      stroke: B = "#bbb",
      // stroke for internal circles
      strokeWidth: te,
      // stroke width for internal circles
      strokeOpacity: Se
      // stroke opacity for internal circles
    } = {}) {
      const pe = s != null ? Jc().path(s)(r) : a != null || c != null ? Jc().id(a).parentId(c)(r) : sa(r, l);
      u == null ? pe.count() : pe.sum((j) => Math.max(0, u(j)));
      const re = pe.descendants(), q = re.filter((j) => !j.children);
      re.filter((j) => j.children && j.data.tag).forEach((j, Ee) => j.index = Ee), q.forEach((j, Ee) => j.index = Ee);
      const Ae = f == null ? null : q.map((j) => f(j.data, j)), Pt = m == null ? null : re.map((j) => m(j.data, j));
      p != null && pe.sort(p), _1().size([b - R - ae, x - T - X]).padding(D)(pe);
      const Re = ub("svg").attr("viewBox", [-R, -T, b, x]).attr("width", b).attr("height", x).attr("style", "max-width: 100%; height: auto; height: intrinsic;").attr("font-family", "sans-serif").attr("font-size", "1em").attr("text-anchor", "middle"), He = Re.selectAll("a").data(re).join("a").attr("xlink:href", w == null ? null : (j, Ee) => w(j.data, j)).attr("target", w == null ? null : A).attr("transform", (j) => `translate(${j.x},${j.y})`);
      if (He.append("circle").attr("fill", (j) => E(j.data) || "#eee").attr("fill-opacity", (j) => j.children ? null : W).attr("stroke", (j) => j.children ? B : null).attr("stroke-width", (j) => j.children ? te : null).attr("stroke-opacity", (j) => j.children ? Se : null).attr("r", (j) => j.r).on("mouseover", function(j, Ee) {
        Ee.children || (pt(this).attr("stroke", "#000"), pt(this).style("cursor", "pointer"));
      }).on("mouseout", function() {
        pt(this).attr("stroke", null);
      }).on("click", (j, Ee) => {
        Ee.children || (i.value = d(Ee.data));
      }), Pt && He.append("title").text((j, Ee) => Pt[Ee]), Ae) {
        const j = `O-${Math.random().toString(16).slice(2)}`;
        He.filter(
          (y) => !y.children && y.r > 10 && Ae[y.index] != null
        ).append("text").attr(
          "clip-path",
          (y) => `url(${new URL(`#${j}-clip-${y.index}`, location)})`
        ).selectAll("tspan").data((y) => `${Ae[y.index]}`.split(/\n/g)).join("tspan").attr("x", (y, $, M) => {
          const H = pt(M[0].parentNode).data()[0].data.tag;
          return Mo[H].x;
        }).attr("y", (y, $, M) => `${$ - M.length / 2 + 0.85}em`).style("font-size", (y, $, M) => {
          const H = pt(M[0].parentNode).data()[0];
          return `${Math.min(Math.max(Math.log10(H.r) - 0.75, 0.55), 1)}em`;
        }).style("cursor", "pointer").on("mouseover", function() {
          pt(this.parentNode.parentNode).selectAll("circle").attr("stroke", "#000");
        }).on("mouseout", function() {
          pt(this.parentNode.parentNode).selectAll("circle").attr("stroke", null);
        }).on("click", function(y, $) {
          $.children || (i.value = d(
            pt(this.parentNode.parentNode).data()[0].data
          ));
        }).text((y) => y);
      }
      return Re.append("g").style("font-size", "2em").attr("pointer-events", "none").selectAll("text").data(pe.descendants().filter((j) => j.parent === pe && j.r)).join("text").text((j) => Mo[j.data.tag].label).attr("x", (j) => j.x).attr("y", (j) => j.y - 20), Re.append("text").attr("pointer-events", "none").attr("x", b / 2).attr("y", x / 12).attr("text-anchor", "middle").style("font-size", "3em").text(k), Re.node();
    }
    return (r, s) => (le(), be("div", $1, [
      Ce(I1, {
        data: i.value,
        class: "details"
      }, null, 8, ["data"]),
      X1
    ]));
  }
}, el = /* @__PURE__ */ dr(V1, [["__scopeId", "data-v-5deebb24"]]);
function pr(e) {
  return Ns() ? (pl(e), !0) : !1;
}
function Wt(e) {
  return typeof e == "function" ? e() : yt(e);
}
const aa = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const R1 = Object.prototype.toString, xd = (e) => R1.call(e) === "[object Object]", Mi = () => {
}, ws = /* @__PURE__ */ H1();
function H1() {
  var e;
  return aa && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const tl = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function L1(...e) {
  if (e.length !== 1)
    return oo(...e);
  const t = e[0];
  return typeof t == "function" ? As(wp(() => ({ get: t, set: Mi }))) : Pe(t);
}
function j1(e, t = !0) {
  Un() ? _n(e) : t ? e() : Rn(e);
}
function z1(e) {
  var t;
  const n = Wt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ca = aa ? window : void 0;
function Q1(...e) {
  let t, n, i, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, o] = e, t = ca) : [t, n, i, o] = e, !t)
    return Mi;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const r = [], s = () => {
    r.forEach((u) => u()), r.length = 0;
  }, a = (u, d, p, f) => (u.addEventListener(d, p, f), () => u.removeEventListener(d, p, f)), c = Qe(
    () => [z1(t), Wt(o)],
    ([u, d]) => {
      if (s(), !u)
        return;
      const p = xd(d) ? { ...d } : d;
      r.push(
        ...n.flatMap((f) => i.map((m) => a(u, f, m, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), s();
  };
  return pr(l), l;
}
function q1() {
  const e = Pe(!1);
  return Un() && _n(() => {
    e.value = !0;
  }), e;
}
function U1(e) {
  const t = q1();
  return xe(() => (t.value, !!e()));
}
function W1(e, t = {}) {
  const { window: n = ca } = t, i = U1(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const r = Pe(!1), s = (l) => {
    r.value = l.matches;
  }, a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, c = Rl(() => {
    i.value && (a(), o = n.matchMedia(Wt(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), r.value = o.matches);
  });
  return pr(() => {
    c(), a(), o = void 0;
  }), r;
}
function K1(e = {}) {
  const {
    window: t = ca,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: i = Number.POSITIVE_INFINITY,
    listenOrientation: o = !0,
    includeScrollbar: r = !0
  } = e, s = Pe(n), a = Pe(i), c = () => {
    t && (r ? (s.value = t.innerWidth, a.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight));
  };
  if (c(), j1(c), Q1("resize", c, { passive: !0 }), o) {
    const l = W1("(orientation: portrait)");
    Qe(l, () => c());
  }
  return { width: s, height: a };
}
function ui(e) {
  var t;
  const n = Wt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Sd = aa ? window : void 0;
function bo(...e) {
  let t, n, i, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, i, o] = e, t = Sd) : [t, n, i, o] = e, !t)
    return Mi;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const r = [], s = () => {
    r.forEach((u) => u()), r.length = 0;
  }, a = (u, d, p, f) => (u.addEventListener(d, p, f), () => u.removeEventListener(d, p, f)), c = Qe(
    () => [ui(t), Wt(o)],
    ([u, d]) => {
      if (s(), !u)
        return;
      const p = xd(d) ? { ...d } : d;
      r.push(
        ...n.flatMap((f) => i.map((m) => a(u, f, m, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    c(), s();
  };
  return pr(l), l;
}
let nl = !1;
function il(e, t, n = {}) {
  const { window: i = Sd, ignore: o = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!i)
    return;
  ws && !nl && (nl = !0, Array.from(i.document.body.children).forEach((p) => p.addEventListener("click", Mi)), i.document.documentElement.addEventListener("click", Mi));
  let a = !0;
  const c = (p) => o.some((f) => {
    if (typeof f == "string")
      return Array.from(i.document.querySelectorAll(f)).some((m) => m === p.target || p.composedPath().includes(m));
    {
      const m = ui(f);
      return m && (p.target === m || p.composedPath().includes(m));
    }
  }), u = [
    bo(i, "click", (p) => {
      const f = ui(e);
      if (!(!f || f === p.target || p.composedPath().includes(f))) {
        if (p.detail === 0 && (a = !c(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: r }),
    bo(i, "pointerdown", (p) => {
      const f = ui(e);
      a = !c(p) && !!(f && !p.composedPath().includes(f));
    }, { passive: !0 }),
    s && bo(i, "blur", (p) => {
      setTimeout(() => {
        var f;
        const m = ui(e);
        ((f = i.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(m != null && m.contains(i.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
const G1 = {
  [tl.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = il(e, t.value, { capture: n });
    else {
      const [i, o] = t.value;
      e.__onClickOutside_stop = il(e, i, Object.assign({ capture: n }, o));
    }
  },
  [tl.unmounted](e) {
    e.__onClickOutside_stop();
  }
};
function Or(e) {
  return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
function _d(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : _d(n);
  }
}
function Y1(e) {
  const t = e || window.event, n = t.target;
  return _d(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const no = /* @__PURE__ */ new WeakMap();
function J1(e, t = !1) {
  const n = Pe(t);
  let i = null, o;
  Qe(L1(e), (a) => {
    const c = Or(Wt(a));
    if (c) {
      const l = c;
      no.get(l) || no.set(l, o), n.value && (l.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const r = () => {
    const a = Or(Wt(e));
    !a || n.value || (ws && (i = bo(
      a,
      "touchmove",
      (c) => {
        Y1(c);
      },
      { passive: !1 }
    )), a.style.overflow = "hidden", n.value = !0);
  }, s = () => {
    var a;
    const c = Or(Wt(e));
    !c || !n.value || (ws && (i == null || i()), c.style.overflow = (a = no.get(c)) != null ? a : "", no.delete(c), n.value = !1);
  };
  return pr(s), xe({
    get() {
      return n.value;
    },
    set(a) {
      a ? r() : s();
    }
  });
}
function Z1() {
  let e = !1;
  const t = Pe(!1);
  return (n, i) => {
    if (t.value = i.value, e)
      return;
    e = !0;
    const o = J1(n, i.value);
    Qe(t, (r) => o.value = r);
  };
}
Z1();
const la = (e) => (Jo("data-v-1c453f28"), e = e(), Zo(), e), ew = /* @__PURE__ */ la(() => /* @__PURE__ */ Y("h3", { class: "title" }, "Filters", -1)), tw = { class: "profession-container" }, nw = { class: "button-container" }, iw = /* @__PURE__ */ la(() => /* @__PURE__ */ Y("span", null, "Profession", -1)), ow = ["value", "onChange", "name", "title", "on-label", "off-label"], rw = { class: "button-container" }, sw = /* @__PURE__ */ la(() => /* @__PURE__ */ Y("span", null, "Years in Industry", -1)), aw = ["value", "onChange", "name", "title", "on-label", "off-label"], cw = /* @__PURE__ */ $i({
  __name: "Filters",
  props: {
    profession: {},
    experience: {}
  },
  emits: ["profession", "experience"],
  setup(e, { emit: t }) {
    const n = e, { width: i } = K1(), o = Pe(i.value >= 768), r = [
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Data scientist/Software engineer",
      "Entrepreneur",
      "Executive",
      "Investor",
      "Mechanical/physical/electrical engineer",
      "Media",
      "Principal investigator/Professor",
      "Science communicator",
      "Other (specify)"
    ], s = ["<1", "1-3", "3-5", "5-10", "10-20", ">20"], a = xe(() => r.reduce(
      (p, f) => ({
        ...p,
        [f]: n.profession.includes(f)
      }),
      {}
    )), c = xe(() => s.reduce(
      (p, f) => ({
        ...p,
        [f]: n.experience.includes(f)
      }),
      {}
    )), l = function(p, f) {
      const m = { ...a.value, [p]: f };
      t(
        "profession",
        r.filter((w) => m[w])
      );
    }, u = function(p, f) {
      const m = { ...c.value, [p]: f };
      t(
        "experience",
        s.filter((w) => m[w])
      );
    }, d = function() {
      console.log(i.value), i.value < 768 && (o.value = !1);
    };
    return Qe(i, (p, f) => {
      f >= 768 && p < 768 ? o.value = !1 : f < 768 && p >= 768 && (o.value = !0);
    }), (p, f) => (le(), Tt(or, null, {
      default: Xs(() => [
        Xn((le(), be("div", {
          class: mt(["filters-container", { open: o.value, closed: !o.value }]),
          onClick: f[4] || (f[4] = (m) => o.value = !0)
        }, [
          ew,
          Y("div", tw, [
            Y("div", nw, [
              iw,
              Y("span", null, [
                Y("button", {
                  class: "btn",
                  onClick: f[0] || (f[0] = (m) => p.$emit("profession", []))
                }, "X"),
                Y("button", {
                  class: "btn",
                  onClick: f[1] || (f[1] = (m) => p.$emit("profession", r))
                }, " All ")
              ])
            ]),
            (le(), be(ke, null, Si(r, (m) => Y("div", null, [
              Y("Toggle", {
                value: a.value[m],
                onChange: (w) => l(m, w),
                name: m,
                title: m,
                "on-label": m,
                "off-label": m,
                class: "switch"
              }, null, 40, ow)
            ])), 64))
          ]),
          Y("div", null, [
            Y("div", rw, [
              sw,
              Y("span", null, [
                Y("button", {
                  class: "btn",
                  onClick: f[2] || (f[2] = (m) => p.$emit("experience", []))
                }, "X"),
                Y("button", {
                  class: "btn",
                  onClick: f[3] || (f[3] = (m) => p.$emit("experience", s))
                }, " All ")
              ])
            ]),
            (le(), be(ke, null, Si(s, (m) => Y("div", null, [
              Y("Toggle", {
                value: c.value[m],
                onChange: (w) => u(m, w),
                name: m,
                title: m,
                "on-label": m,
                "off-label": m,
                class: "switch"
              }, null, 40, aw)
            ])), 64))
          ])
        ], 2)), [
          [yt(G1), d]
        ])
      ]),
      _: 1
    }));
  }
});
const lw = /* @__PURE__ */ dr(cw, [["__scopeId", "data-v-1c453f28"]]);
const uw = (e) => (Jo("data-v-e0174cba"), e = e(), Zo(), e), dw = { class: "chartSelect-container" }, pw = {
  key: 0,
  class: "chart-container"
}, fw = /* @__PURE__ */ uw(() => /* @__PURE__ */ Y("div", { class: "url-container" }, [
  /* @__PURE__ */ Pi(" Full data "),
  /* @__PURE__ */ Y("strong", null, [
    /* @__PURE__ */ Y("a", {
      href: "https://docs.google.com/spreadsheets/d/1aomCkAlaHNbNBEPjLeDbwLr3TazAxhU4f9idJQvbL2s/edit?usp=sharing",
      target: "_blank"
    }, "here")
  ])
], -1)), hw = {
  __name: "CirclePacking",
  setup(e) {
    const t = ["Bottlenecks", "Solutions"], n = Pe("Bottlenecks"), i = Pe([
      "Entrepreneur",
      "Investor",
      "Media",
      "Academic researcher (postdoc/PhD/MSc/BSc student)",
      "Biotech researcher",
      "Other (specify)",
      "Data scientist/Software engineer",
      "Principal investigator/Professor",
      "Executive",
      "Science communicator",
      "Mechanical/physical/electrical engineer"
    ]), o = Pe(["<1", "1-3", "3-5", "5-10", "10-20", ">20"]), r = Pe(null), s = Pe(null), a = function(p) {
      i.value = p, d();
    }, c = function(p) {
      o.value = p, d();
    }, l = xe(() => us.bottlenecks.filter((f) => (!o.value.length || o.value.includes(f.experience)) && (!i.value.length || f.occupations.some((m) => i.value.includes(m))))), u = xe(() => us.solutions.filter((f) => (!o.value.length || o.value.includes(f.experience)) && (!i.value.length || f.occupations.some((m) => i.value.includes(m))))), d = function() {
      const p = l.value, f = ds.bottlenecks, m = f.filter((b) => b.tag.match(/\[[A-Z]]/)).map((b) => ({
        ...b,
        children: f.filter(
          (x) => x.tag.match(/\[[A-Z][0-9].*]/) && x.tag.substring(0, 2) === b.tag.substring(0, 2)
        ).map((x) => ({ ...x, size: 0, bottlenecks: [] }))
      }));
      p.forEach((b) => {
        const x = b.tags.filter((V) => V.match(/\[[A-Z]/));
        x.length && x.forEach((V) => {
          const T = V.match(/\[[A-Z]/) + "]";
          m.find((R) => R.tag === T).children.find((R) => R.tag === V).bottlenecks.push(b);
        });
      }), r.value = {
        data: { name: "bottlenecks", children: m },
        props: {
          name: (b) => b.bottleneck,
          value: (b) => {
            var x;
            return b.children ? b["Number of responses"] : (x = b.bottlenecks) == null ? void 0 : x.length;
          },
          label: (b) => Mo[b.tag].label,
          title: (b) => b["Q2 Bottleneck"] + `:
` + b["Bottleneck Description"],
          fill: (b) => b.color,
          clickData: (b) => ({
            title: b["Q2 Bottleneck"],
            description: b["Bottleneck Description"],
            items: b.bottlenecks,
            isBottleneck: !0
          }),
          width: 1152,
          chartTitle: "Bottlenecks"
        }
      };
      const w = u.value, A = ds.solutions, k = A.filter((b) => b.tag.match(/\[\+[A-Z]]/)).map((b) => ({
        ...b,
        children: A.filter(
          (x) => x.tag.match(/\[\+[A-Z][0-9].*]/) && x.tag.substring(0, 3) === b.tag.substring(0, 3)
        ).map((x) => ({ ...x, solutions: [] }))
      }));
      w.forEach((b) => {
        const x = b.tags.filter((V) => V.match(/\[\+[A-Z]/));
        x.length && x.forEach((V) => {
          const T = V.match(/\[\+[A-Z]/) + "]";
          k.find((R) => R.tag === T).children.find((R) => R.tag === V).solutions.push(b);
        });
      }), s.value = {
        data: { name: "solutions", children: k },
        props: {
          name: (b) => b.investment,
          value: (b) => {
            var x;
            return b.children ? b["Number of responses"] : (x = b.solutions) == null ? void 0 : x.length;
          },
          label: (b) => Mo[b.tag].label,
          title: (b) => b["Q3 Solution"] + `:
` + b["Solution Description"],
          fill: (b) => b.color,
          clickData: (b) => ({
            title: b["Q3 Solution"],
            description: b["Solution Description"],
            items: b.solutions,
            isBottleneck: !1
          }),
          width: 1152,
          chartTitle: "Solutions"
        }
      };
    };
    return _n(() => {
      d();
    }), (p, f) => (le(), be(ke, null, [
      Y("div", dw, [
        Xn(Y("v-select", {
          "onUpdate:modelValue": f[0] || (f[0] = (m) => n.value = m),
          options: t,
          clearable: !1,
          class: "chartSelect"
        }, null, 512), [
          [Th, n.value]
        ])
      ]),
      r.value && s.value ? (le(), be("div", pw, [
        n.value === "Bottlenecks" && r.value ? (le(), Tt(el, {
          key: 0,
          "chart-data": r.value
        }, null, 8, ["chart-data"])) : Bt("", !0),
        n.value === "Solutions" && s.value ? (le(), Tt(el, {
          key: 1,
          "chart-data": s.value
        }, null, 8, ["chart-data"])) : Bt("", !0),
        Ce(lw, {
          class: "filters",
          profession: i.value,
          experience: o.value,
          onProfession: f[1] || (f[1] = (m) => a(m)),
          onExperience: f[2] || (f[2] = (m) => c(m))
        }, null, 8, ["profession", "experience"])
      ])) : Bt("", !0),
      fw
    ], 64));
  }
}, Pd = /* @__PURE__ */ dr(hw, [["__scopeId", "data-v-e0174cba"]]), gw = { key: 0 }, mw = {
  __name: "HomeView",
  setup(e) {
    const t = Pe(!1);
    return _n(async () => {
      t.value = !0;
    }), (n, i) => t.value ? (le(), be("main", gw, [
      Ce(Pd)
    ])) : Bt("", !0);
  }
}, vw = Mm({
  history: Mg("/bottlenecks/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: mw
    }
  ]
});
var xs = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { value: { validator: function(e) {
  return (t) => ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
}, required: !1 }, modelValue: { validator: function(e) {
  return (t) => ["number", "string", "boolean"].indexOf(typeof t) !== -1 || t == null;
}, required: !1 }, id: { type: [String, Number], required: !1, default: "toggle" }, name: { type: [String, Number], required: !1, default: "toggle" }, disabled: { type: Boolean, required: !1, default: !1 }, required: { type: Boolean, required: !1, default: !1 }, falseValue: { type: [String, Number, Boolean], required: !1, default: !1 }, trueValue: { type: [String, Number, Boolean], required: !1, default: !0 }, onLabel: { type: [String, Object], required: !1, default: "" }, offLabel: { type: [String, Object], required: !1, default: "" }, classes: { type: Object, required: !1, default: () => ({}) }, labelledby: { type: String, required: !1 }, describedby: { type: String, required: !1 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(e, t) {
  const n = function(s, a, c) {
    const { value: l, modelValue: u, falseValue: d, trueValue: p, disabled: f } = Mn(s), m = u && u.value !== void 0 ? u : l, w = xe(() => m.value === p.value), A = (x) => {
      a.emit("input", x), a.emit("update:modelValue", x), a.emit("change", x);
    }, k = () => {
      A(p.value);
    }, b = () => {
      A(d.value);
    };
    return [null, void 0, !1, 0, "0", "off"].indexOf(m.value) !== -1 && [d.value, p.value].indexOf(m.value) === -1 && b(), [!0, 1, "1", "on"].indexOf(m.value) !== -1 && [d.value, p.value].indexOf(m.value) === -1 && k(), { externalValue: m, checked: w, update: A, check: k, uncheck: b, handleInput: (x) => {
      A(x.target.checked ? p.value : d.value);
    }, handleClick: () => {
      f.value || (w.value ? b() : k());
    } };
  }(e, t), i = function(s, a, c) {
    const { trueValue: l, falseValue: u, onLabel: d, offLabel: p } = Mn(s), f = c.checked, m = c.update;
    return { label: xe(() => {
      let w = f.value ? d.value : p.value;
      return w || (w = "&nbsp;"), w;
    }), toggle: () => {
      m(f.value ? u.value : l.value);
    }, on: () => {
      m(l.value);
    }, off: () => {
      m(u.value);
    } };
  }(e, 0, { checked: n.checked, update: n.update }), o = function(s, a, c) {
    const l = Mn(s), u = l.disabled, d = c.checked, p = xe(() => ({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label", ...l.classes.value }));
    return { classList: xe(() => ({ container: p.value.container, toggle: [p.value.toggle, u.value ? d.value ? p.value.toggleOnDisabled : p.value.toggleOffDisabled : d.value ? p.value.toggleOn : p.value.toggleOff], handle: [p.value.handle, u.value ? d.value ? p.value.handleOnDisabled : p.value.handleOffDisabled : d.value ? p.value.handleOn : p.value.handleOff], label: p.value.label })) };
  }(e, 0, { checked: n.checked }), r = function(s, a, c) {
    const { disabled: l } = Mn(s), u = c.check, d = c.uncheck, p = c.checked;
    return { handleSpace: () => {
      l.value || (p.value ? d() : u());
    } };
  }(e, 0, { check: n.check, uncheck: n.uncheck, checked: n.checked });
  return { ...n, ...o, ...i, ...r };
} };
const yw = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"], bw = ["id", "name", "value", "checked", "disabled"], ww = ["innerHTML"], xw = ["checked"];
xs.render = function(e, t, n, i, o, r) {
  return le(), be("div", To({ class: e.classList.container, tabindex: n.disabled ? void 0 : 0, "aria-checked": e.checked, "aria-describedby": n.describedby, "aria-labelledby": n.labelledby, role: "switch" }, n.aria, { onKeypress: t[1] || (t[1] = Fh(Jr((...s) => e.handleSpace && e.handleSpace(...s), ["prevent"]), ["space"])) }), [Xn(Y("input", { type: "checkbox", id: n.id, name: n.name, value: n.trueValue, checked: e.checked, disabled: n.disabled }, null, 8, bw), [[Zr, !1]]), Y("div", { class: mt(e.classList.toggle), onClick: t[0] || (t[0] = (...s) => e.handleClick && e.handleClick(...s)) }, [Y("span", { class: mt(e.classList.handle) }, null, 2), Ye(e.$slots, "label", { checked: e.checked, classList: e.classList }, () => [Y("span", { class: mt(e.classList.label), innerHTML: e.label }, null, 10, ww)]), n.required ? (le(), be("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: e.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, xw)) : Bt("v-if", !0)], 2)], 16, yw);
}, xs.__file = "src/Toggle.vue";
const Sw = Ph(Pd);
customElements.define("bottlenecks-visualizations", Sw);
const Li = Xh($m);
Li.use(fg());
Li.use(vw);
Li.component("v-select", Nv);
Li.component("v-toggle", xs);
Li.mount("#app");
