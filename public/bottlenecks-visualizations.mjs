function We(A, e) {
  const t = /* @__PURE__ */ Object.create(null), n = A.split(",");
  for (let i = 0; i < n.length; i++)
    t[n[i]] = !0;
  return e ? (i) => !!t[i.toLowerCase()] : (i) => !!t[i];
}
const hA = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ot = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], NA = () => {
}, ec = () => !1, Pu = /^on[^a-z]/, On = (A) => Pu.test(A), yi = (A) => A.startsWith("onUpdate:"), vA = Object.assign, Pr = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, bu = Object.prototype.hasOwnProperty, oA = (A, e) => bu.call(A, e), j = Array.isArray, ct = (A) => Ri(A) === "[object Map]", tc = (A) => Ri(A) === "[object Set]", q = (A) => typeof A == "function", BA = (A) => typeof A == "string", br = (A) => typeof A == "symbol", lA = (A) => A !== null && typeof A == "object", Er = (A) => lA(A) && q(A.then) && q(A.catch), nc = Object.prototype.toString, Ri = (A) => nc.call(A), Dr = (A) => Ri(A).slice(8, -1), ic = (A) => Ri(A) === "[object Object]", Cr = (A) => BA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, oi = /* @__PURE__ */ We(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Eu = /* @__PURE__ */ We(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vi = (A) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = A(t));
}, Du = /-(\w)/g, GA = Vi((A) => A.replace(Du, (e, t) => t ? t.toUpperCase() : "")), Cu = /\B([A-Z])/g, RA = Vi(
  (A) => A.replace(Cu, "-$1").toLowerCase()
), ht = Vi(
  (A) => A.charAt(0).toUpperCase() + A.slice(1)
), Le = Vi(
  (A) => A ? `on${ht(A)}` : ""
), bn = (A, e) => !Object.is(A, e), _t = (A, e) => {
  for (let t = 0; t < A.length; t++)
    A[t](e);
}, Bi = (A, e, t) => {
  Object.defineProperty(A, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Mo = (A) => {
  const e = parseFloat(A);
  return isNaN(e) ? A : e;
}, No = (A) => {
  const e = BA(A) ? Number(A) : NaN;
  return isNaN(e) ? A : e;
};
let us;
const Pi = () => us || (us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ui(A) {
  if (j(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++) {
      const n = A[t], i = BA(n) ? Iu(n) : Ui(n);
      if (i)
        for (const o in i)
          e[o] = i[o];
    }
    return e;
  } else {
    if (BA(A))
      return A;
    if (lA(A))
      return A;
  }
}
const Qu = /;(?![^(]*\))/g, xu = /:([^]+)/, Su = /\/\*[^]*?\*\//g;
function Iu(A) {
  const e = {};
  return A.replace(Su, "").split(Qu).forEach((t) => {
    if (t) {
      const n = t.split(xu);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function ve(A) {
  let e = "";
  if (BA(A))
    e = A;
  else if (j(A))
    for (let t = 0; t < A.length; t++) {
      const n = ve(A[t]);
      n && (e += n + " ");
    }
  else if (lA(A))
    for (const t in A)
      A[t] && (e += t + " ");
  return e.trim();
}
function ne(A) {
  if (!A)
    return null;
  let { class: e, style: t } = A;
  return e && !BA(e) && (A.class = ve(e)), t && (A.style = Ui(t)), A;
}
const ku = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", _u = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Mu = /* @__PURE__ */ We(ku), Nu = /* @__PURE__ */ We(_u), Fu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tu = /* @__PURE__ */ We(Fu);
function oc(A) {
  return !!A || A === "";
}
const Xe = (A) => BA(A) ? A : A == null ? "" : j(A) || lA(A) && (A.toString === nc || !q(A.toString)) ? JSON.stringify(A, rc, 2) : String(A), rc = (A, e) => e && e.__v_isRef ? rc(A, e.value) : ct(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((t, [n, i]) => (t[`${n} =>`] = i, t), {})
} : tc(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : lA(e) && !j(e) && !ic(e) ? String(e) : e;
function bi(A, ...e) {
  console.warn(`[Vue warn] ${A}`, ...e);
}
let $A;
class sc {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $A, !e && $A && (this.index = ($A.scopes || ($A.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = $A;
      try {
        return $A = this, e();
      } finally {
        $A = t;
      }
    } else
      process.env.NODE_ENV !== "production" && bi("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $A = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $A = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ac(A) {
  return new sc(A);
}
function Hu(A, e = $A) {
  e && e.active && e.effects.push(A);
}
function Qr() {
  return $A;
}
function cc(A) {
  $A ? $A.cleanups.push(A) : process.env.NODE_ENV !== "production" && bi(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
const En = (A) => {
  const e = new Set(A);
  return e.w = 0, e.n = 0, e;
}, lc = (A) => (A.w & Ke) > 0, uc = (A) => (A.n & Ke) > 0, Ou = ({ deps: A }) => {
  if (A.length)
    for (let e = 0; e < A.length; e++)
      A[e].w |= Ke;
}, Lu = (A) => {
  const { deps: e } = A;
  if (e.length) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      lc(i) && !uc(i) ? i.delete(A) : e[t++] = i, i.w &= ~Ke, i.n &= ~Ke;
    }
    e.length = t;
  }
}, Ei = /* @__PURE__ */ new WeakMap();
let sn = 0, Ke = 1;
const Fo = 30;
let XA;
const lt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), To = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class xr {
  constructor(e, t = null, n) {
    this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, Hu(this, n);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = XA, t = $e;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = XA, XA = this, $e = !0, Ke = 1 << ++sn, sn <= Fo ? Ou(this) : ds(this), this.fn();
    } finally {
      sn <= Fo && Lu(this), Ke = 1 << --sn, XA = this.parent, $e = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    XA === this ? this.deferStop = !0 : this.active && (ds(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ds(A) {
  const { deps: e } = A;
  if (e.length) {
    for (let t = 0; t < e.length; t++)
      e[t].delete(A);
    e.length = 0;
  }
}
let $e = !0;
const dc = [];
function yt() {
  dc.push($e), $e = !1;
}
function Bt() {
  const A = dc.pop();
  $e = A === void 0 ? !0 : A;
}
function FA(A, e, t) {
  if ($e && XA) {
    let n = Ei.get(A);
    n || Ei.set(A, n = /* @__PURE__ */ new Map());
    let i = n.get(t);
    i || n.set(t, i = En());
    const o = process.env.NODE_ENV !== "production" ? { effect: XA, target: A, type: e, key: t } : void 0;
    Ho(i, o);
  }
}
function Ho(A, e) {
  let t = !1;
  sn <= Fo ? uc(A) || (A.n |= Ke, t = !lc(A)) : t = !A.has(XA), t && (A.add(XA), XA.deps.push(A), process.env.NODE_ENV !== "production" && XA.onTrack && XA.onTrack(
    vA(
      {
        effect: XA
      },
      e
    )
  ));
}
function be(A, e, t, n, i, o) {
  const r = Ei.get(A);
  if (!r)
    return;
  let s = [];
  if (e === "clear")
    s = [...r.values()];
  else if (t === "length" && j(A)) {
    const c = Number(n);
    r.forEach((l, u) => {
      (u === "length" || u >= c) && s.push(l);
    });
  } else
    switch (t !== void 0 && s.push(r.get(t)), e) {
      case "add":
        j(A) ? Cr(t) && s.push(r.get("length")) : (s.push(r.get(lt)), ct(A) && s.push(r.get(To)));
        break;
      case "delete":
        j(A) || (s.push(r.get(lt)), ct(A) && s.push(r.get(To)));
        break;
      case "set":
        ct(A) && s.push(r.get(lt));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: A, type: e, key: t, newValue: n, oldValue: i, oldTarget: o } : void 0;
  if (s.length === 1)
    s[0] && (process.env.NODE_ENV !== "production" ? Ft(s[0], a) : Ft(s[0]));
  else {
    const c = [];
    for (const l of s)
      l && c.push(...l);
    process.env.NODE_ENV !== "production" ? Ft(En(c), a) : Ft(En(c));
  }
}
function Ft(A, e) {
  const t = j(A) ? A : [...A];
  for (const n of t)
    n.computed && fs(n, e);
  for (const n of t)
    n.computed || fs(n, e);
}
function fs(A, e) {
  (A !== XA || A.allowRecurse) && (process.env.NODE_ENV !== "production" && A.onTrigger && A.onTrigger(vA({ effect: A }, e)), A.scheduler ? A.scheduler() : A.run());
}
function Xu(A, e) {
  var t;
  return (t = Ei.get(A)) == null ? void 0 : t.get(e);
}
const zu = /* @__PURE__ */ We("__proto__,__v_isRef,__isVue"), fc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(br)
), Ru = /* @__PURE__ */ ji(), Vu = /* @__PURE__ */ ji(!1, !0), Uu = /* @__PURE__ */ ji(!0), ju = /* @__PURE__ */ ji(!0, !0), ps = /* @__PURE__ */ $u();
function $u() {
  const A = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    A[e] = function(...t) {
      const n = W(this);
      for (let o = 0, r = this.length; o < r; o++)
        FA(n, "get", o + "");
      const i = n[e](...t);
      return i === -1 || i === !1 ? n[e](...t.map(W)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    A[e] = function(...t) {
      yt();
      const n = W(this)[e].apply(this, t);
      return Bt(), n;
    };
  }), A;
}
function Gu(A) {
  const e = W(this);
  return FA(e, "has", A), e.hasOwnProperty(A);
}
function ji(A = !1, e = !1) {
  return function(n, i, o) {
    if (i === "__v_isReactive")
      return !A;
    if (i === "__v_isReadonly")
      return A;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && o === (A ? e ? Bc : yc : e ? wc : vc).get(n))
      return n;
    const r = j(n);
    if (!A) {
      if (r && oA(ps, i))
        return Reflect.get(ps, i, o);
      if (i === "hasOwnProperty")
        return Gu;
    }
    const s = Reflect.get(n, i, o);
    return (br(i) ? fc.has(i) : zu(i)) || (A || FA(n, "get", i), e) ? s : yA(s) ? r && Cr(i) ? s : s.value : lA(s) ? A ? Ir(s) : qt(s) : s;
  };
}
const Yu = /* @__PURE__ */ pc(), Ku = /* @__PURE__ */ pc(!0);
function pc(A = !1) {
  return function(t, n, i, o) {
    let r = t[n];
    if (Je(r) && yA(r) && !yA(i))
      return !1;
    if (!A && (!Di(i) && !Je(i) && (r = W(r), i = W(i)), !j(t) && yA(r) && !yA(i)))
      return r.value = i, !0;
    const s = j(t) && Cr(n) ? Number(n) < t.length : oA(t, n), a = Reflect.set(t, n, i, o);
    return t === W(o) && (s ? bn(i, r) && be(t, "set", n, i, r) : be(t, "add", n, i)), a;
  };
}
function Ju(A, e) {
  const t = oA(A, e), n = A[e], i = Reflect.deleteProperty(A, e);
  return i && t && be(A, "delete", e, void 0, n), i;
}
function qu(A, e) {
  const t = Reflect.has(A, e);
  return (!br(e) || !fc.has(e)) && FA(A, "has", e), t;
}
function Wu(A) {
  return FA(A, "iterate", j(A) ? "length" : lt), Reflect.ownKeys(A);
}
const gc = {
  get: Ru,
  set: Yu,
  deleteProperty: Ju,
  has: qu,
  ownKeys: Wu
}, hc = {
  get: Uu,
  set(A, e) {
    return process.env.NODE_ENV !== "production" && bi(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      A
    ), !0;
  },
  deleteProperty(A, e) {
    return process.env.NODE_ENV !== "production" && bi(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      A
    ), !0;
  }
}, Zu = /* @__PURE__ */ vA(
  {},
  gc,
  {
    get: Vu,
    set: Ku
  }
), Ad = /* @__PURE__ */ vA(
  {},
  hc,
  {
    get: ju
  }
), Sr = (A) => A, $i = (A) => Reflect.getPrototypeOf(A);
function jn(A, e, t = !1, n = !1) {
  A = A.__v_raw;
  const i = W(A), o = W(e);
  t || (e !== o && FA(i, "get", e), FA(i, "get", o));
  const { has: r } = $i(i), s = n ? Sr : t ? kr : Dn;
  if (r.call(i, e))
    return s(A.get(e));
  if (r.call(i, o))
    return s(A.get(o));
  A !== i && A.get(e);
}
function $n(A, e = !1) {
  const t = this.__v_raw, n = W(t), i = W(A);
  return e || (A !== i && FA(n, "has", A), FA(n, "has", i)), A === i ? t.has(A) : t.has(A) || t.has(i);
}
function Gn(A, e = !1) {
  return A = A.__v_raw, !e && FA(W(A), "iterate", lt), Reflect.get(A, "size", A);
}
function gs(A) {
  A = W(A);
  const e = W(this);
  return $i(e).has.call(e, A) || (e.add(A), be(e, "add", A, A)), this;
}
function hs(A, e) {
  e = W(e);
  const t = W(this), { has: n, get: i } = $i(t);
  let o = n.call(t, A);
  o ? process.env.NODE_ENV !== "production" && mc(t, n, A) : (A = W(A), o = n.call(t, A));
  const r = i.call(t, A);
  return t.set(A, e), o ? bn(e, r) && be(t, "set", A, e, r) : be(t, "add", A, e), this;
}
function ms(A) {
  const e = W(this), { has: t, get: n } = $i(e);
  let i = t.call(e, A);
  i ? process.env.NODE_ENV !== "production" && mc(e, t, A) : (A = W(A), i = t.call(e, A));
  const o = n ? n.call(e, A) : void 0, r = e.delete(A);
  return i && be(e, "delete", A, void 0, o), r;
}
function vs() {
  const A = W(this), e = A.size !== 0, t = process.env.NODE_ENV !== "production" ? ct(A) ? new Map(A) : new Set(A) : void 0, n = A.clear();
  return e && be(A, "clear", void 0, void 0, t), n;
}
function Yn(A, e) {
  return function(n, i) {
    const o = this, r = o.__v_raw, s = W(r), a = e ? Sr : A ? kr : Dn;
    return !A && FA(s, "iterate", lt), r.forEach((c, l) => n.call(i, a(c), a(l), o));
  };
}
function Kn(A, e, t) {
  return function(...n) {
    const i = this.__v_raw, o = W(i), r = ct(o), s = A === "entries" || A === Symbol.iterator && r, a = A === "keys" && r, c = i[A](...n), l = t ? Sr : e ? kr : Dn;
    return !e && FA(
      o,
      "iterate",
      a ? To : lt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: d } = c.next();
        return d ? { value: u, done: d } : {
          value: s ? [l(u[0]), l(u[1])] : l(u),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fe(A) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${ht(A)} operation ${t}failed: target is readonly.`,
        W(this)
      );
    }
    return A === "delete" ? !1 : this;
  };
}
function ed() {
  const A = {
    get(o) {
      return jn(this, o);
    },
    get size() {
      return Gn(this);
    },
    has: $n,
    add: gs,
    set: hs,
    delete: ms,
    clear: vs,
    forEach: Yn(!1, !1)
  }, e = {
    get(o) {
      return jn(this, o, !1, !0);
    },
    get size() {
      return Gn(this);
    },
    has: $n,
    add: gs,
    set: hs,
    delete: ms,
    clear: vs,
    forEach: Yn(!1, !0)
  }, t = {
    get(o) {
      return jn(this, o, !0);
    },
    get size() {
      return Gn(this, !0);
    },
    has(o) {
      return $n.call(this, o, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: Yn(!0, !1)
  }, n = {
    get(o) {
      return jn(this, o, !0, !0);
    },
    get size() {
      return Gn(this, !0);
    },
    has(o) {
      return $n.call(this, o, !0);
    },
    add: Fe("add"),
    set: Fe("set"),
    delete: Fe("delete"),
    clear: Fe("clear"),
    forEach: Yn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    A[o] = Kn(
      o,
      !1,
      !1
    ), t[o] = Kn(
      o,
      !0,
      !1
    ), e[o] = Kn(
      o,
      !1,
      !0
    ), n[o] = Kn(
      o,
      !0,
      !0
    );
  }), [
    A,
    t,
    e,
    n
  ];
}
const [
  td,
  nd,
  id,
  od
] = /* @__PURE__ */ ed();
function Gi(A, e) {
  const t = e ? A ? od : id : A ? nd : td;
  return (n, i, o) => i === "__v_isReactive" ? !A : i === "__v_isReadonly" ? A : i === "__v_raw" ? n : Reflect.get(
    oA(t, i) && i in n ? t : n,
    i,
    o
  );
}
const rd = {
  get: /* @__PURE__ */ Gi(!1, !1)
}, sd = {
  get: /* @__PURE__ */ Gi(!1, !0)
}, ad = {
  get: /* @__PURE__ */ Gi(!0, !1)
}, cd = {
  get: /* @__PURE__ */ Gi(!0, !0)
};
function mc(A, e, t) {
  const n = W(t);
  if (n !== t && e.call(A, n)) {
    const i = Dr(A);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const vc = /* @__PURE__ */ new WeakMap(), wc = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), Bc = /* @__PURE__ */ new WeakMap();
function ld(A) {
  switch (A) {
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
function ud(A) {
  return A.__v_skip || !Object.isExtensible(A) ? 0 : ld(Dr(A));
}
function qt(A) {
  return Je(A) ? A : Yi(
    A,
    !1,
    gc,
    rd,
    vc
  );
}
function dd(A) {
  return Yi(
    A,
    !1,
    Zu,
    sd,
    wc
  );
}
function Ir(A) {
  return Yi(
    A,
    !0,
    hc,
    ad,
    yc
  );
}
function an(A) {
  return Yi(
    A,
    !0,
    Ad,
    cd,
    Bc
  );
}
function Yi(A, e, t, n, i) {
  if (!lA(A))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(A)}`), A;
  if (A.__v_raw && !(e && A.__v_isReactive))
    return A;
  const o = i.get(A);
  if (o)
    return o;
  const r = ud(A);
  if (r === 0)
    return A;
  const s = new Proxy(
    A,
    r === 2 ? n : t
  );
  return i.set(A, s), s;
}
function we(A) {
  return Je(A) ? we(A.__v_raw) : !!(A && A.__v_isReactive);
}
function Je(A) {
  return !!(A && A.__v_isReadonly);
}
function Di(A) {
  return !!(A && A.__v_isShallow);
}
function Ci(A) {
  return we(A) || Je(A);
}
function W(A) {
  const e = A && A.__v_raw;
  return e ? W(e) : A;
}
function re(A) {
  return Bi(A, "__v_skip", !0), A;
}
const Dn = (A) => lA(A) ? qt(A) : A, kr = (A) => lA(A) ? Ir(A) : A;
function _r(A) {
  $e && XA && (A = W(A), process.env.NODE_ENV !== "production" ? Ho(A.dep || (A.dep = En()), {
    target: A,
    type: "get",
    key: "value"
  }) : Ho(A.dep || (A.dep = En())));
}
function Mr(A, e) {
  A = W(A);
  const t = A.dep;
  t && (process.env.NODE_ENV !== "production" ? Ft(t, {
    target: A,
    type: "set",
    key: "value",
    newValue: e
  }) : Ft(t));
}
function yA(A) {
  return !!(A && A.__v_isRef === !0);
}
function DA(A) {
  return Pc(A, !1);
}
function fd(A) {
  return Pc(A, !0);
}
function Pc(A, e) {
  return yA(A) ? A : new pd(A, e);
}
class pd {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : W(e), this._value = t ? e : Dn(e);
  }
  get value() {
    return _r(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Di(e) || Je(e);
    e = t ? e : W(e), bn(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Dn(e), Mr(this, e));
  }
}
function le(A) {
  return yA(A) ? A.value : A;
}
const gd = {
  get: (A, e, t) => le(Reflect.get(A, e, t)),
  set: (A, e, t, n) => {
    const i = A[e];
    return yA(i) && !yA(t) ? (i.value = t, !0) : Reflect.set(A, e, t, n);
  }
};
function bc(A) {
  return we(A) ? A : new Proxy(A, gd);
}
class hd {
  constructor(e) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: t, set: n } = e(
      () => _r(this),
      () => Mr(this)
    );
    this._get = t, this._set = n;
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function md(A) {
  return new hd(A);
}
function Tt(A) {
  process.env.NODE_ENV !== "production" && !Ci(A) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const e = j(A) ? new Array(A.length) : {};
  for (const t in A)
    e[t] = Ec(A, t);
  return e;
}
class vd {
  constructor(e, t, n) {
    this._object = e, this._key = t, this._defaultValue = n, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Xu(W(this._object), this._key);
  }
}
class wd {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function ri(A, e, t) {
  return yA(A) ? A : q(A) ? new wd(A) : lA(A) && arguments.length > 1 ? Ec(A, e, t) : DA(A);
}
function Ec(A, e, t) {
  const n = A[e];
  return yA(n) ? n : new vd(
    A,
    e,
    t
  );
}
class yd {
  constructor(e, t, n, i) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new xr(e, () => {
      this._dirty || (this._dirty = !0, Mr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n;
  }
  get value() {
    const e = W(this);
    return _r(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Bd(A, e, t = !1) {
  let n, i;
  const o = q(A);
  o ? (n = A, i = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : NA) : (n = A.get, i = A.set);
  const r = new yd(n, i, o || !i, t);
  return process.env.NODE_ENV !== "production" && e && !t && (r.effect.onTrack = e.onTrack, r.effect.onTrigger = e.onTrigger), r;
}
const ut = [];
function si(A) {
  ut.push(A);
}
function ai() {
  ut.pop();
}
function S(A, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  yt();
  const t = ut.length ? ut[ut.length - 1].component : null, n = t && t.appContext.config.warnHandler, i = Pd();
  if (n)
    _e(
      n,
      t,
      11,
      [
        A + e.join(""),
        t && t.proxy,
        i.map(
          ({ vnode: o }) => `at <${io(t, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${A}`, ...e];
    i.length && o.push(`
`, ...bd(i)), console.warn(...o);
  }
  Bt();
}
function Pd() {
  let A = ut[ut.length - 1];
  if (!A)
    return [];
  const e = [];
  for (; A; ) {
    const t = e[0];
    t && t.vnode === A ? t.recurseCount++ : e.push({
      vnode: A,
      recurseCount: 0
    });
    const n = A.component && A.component.parent;
    A = n && n.vnode;
  }
  return e;
}
function bd(A) {
  const e = [];
  return A.forEach((t, n) => {
    e.push(...n === 0 ? [] : [`
`], ...Ed(t));
  }), e;
}
function Ed({ vnode: A, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", n = A.component ? A.component.parent == null : !1, i = ` at <${io(
    A.component,
    A.type,
    n
  )}`, o = ">" + t;
  return A.props ? [i, ...Dd(A.props), o] : [i + o];
}
function Dd(A) {
  const e = [], t = Object.keys(A);
  return t.slice(0, 3).forEach((n) => {
    e.push(...Dc(n, A[n]));
  }), t.length > 3 && e.push(" ..."), e;
}
function Dc(A, e, t) {
  return BA(e) ? (e = JSON.stringify(e), t ? e : [`${A}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${A}=${e}`] : yA(e) ? (e = Dc(A, W(e.value), !0), t ? e : [`${A}=Ref<`, e, ">"]) : q(e) ? [`${A}=fn${e.name ? `<${e.name}>` : ""}`] : (e = W(e), t ? e : [`${A}=`, e]);
}
function Cd(A, e) {
  process.env.NODE_ENV !== "production" && A !== void 0 && (typeof A != "number" ? S(`${e} is not a valid number - got ${JSON.stringify(A)}.`) : isNaN(A) && S(`${e} is NaN - the duration expression might be incorrect.`));
}
const Nr = {
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
function _e(A, e, t, n) {
  let i;
  try {
    i = n ? A(...n) : A();
  } catch (o) {
    Ki(o, e, t);
  }
  return i;
}
function ee(A, e, t, n) {
  if (q(A)) {
    const o = _e(A, e, t, n);
    return o && Er(o) && o.catch((r) => {
      Ki(r, e, t);
    }), o;
  }
  const i = [];
  for (let o = 0; o < A.length; o++)
    i.push(ee(A[o], e, t, n));
  return i;
}
function Ki(A, e, t, n = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const r = e.proxy, s = process.env.NODE_ENV !== "production" ? Nr[t] : t;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let l = 0; l < c.length; l++)
          if (c[l](A, r, s) === !1)
            return;
      }
      o = o.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      _e(
        a,
        null,
        10,
        [A, r, s]
      );
      return;
    }
  }
  Qd(A, t, i, n);
}
function Qd(A, e, t, n = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = Nr[e];
    if (t && si(t), S(`Unhandled error${i ? ` during execution of ${i}` : ""}`), t && ai(), n)
      throw A;
    console.error(A);
  } else
    console.error(A);
}
let Cn = !1, Oo = !1;
const HA = [];
let he = 0;
const Lt = [];
let ge = null, ze = 0;
const Cc = /* @__PURE__ */ Promise.resolve();
let Fr = null;
const xd = 100;
function Vt(A) {
  const e = Fr || Cc;
  return A ? e.then(this ? A.bind(this) : A) : e;
}
function Sd(A) {
  let e = he + 1, t = HA.length;
  for (; e < t; ) {
    const n = e + t >>> 1;
    Qn(HA[n]) < A ? e = n + 1 : t = n;
  }
  return e;
}
function Ji(A) {
  (!HA.length || !HA.includes(
    A,
    Cn && A.allowRecurse ? he + 1 : he
  )) && (A.id == null ? HA.push(A) : HA.splice(Sd(A.id), 0, A), Qc());
}
function Qc() {
  !Cn && !Oo && (Oo = !0, Fr = Cc.then(Ic));
}
function Id(A) {
  const e = HA.indexOf(A);
  e > he && HA.splice(e, 1);
}
function xc(A) {
  j(A) ? Lt.push(...A) : (!ge || !ge.includes(
    A,
    A.allowRecurse ? ze + 1 : ze
  )) && Lt.push(A), Qc();
}
function ws(A, e = Cn ? he + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()); e < HA.length; e++) {
    const t = HA[e];
    if (t && t.pre) {
      if (process.env.NODE_ENV !== "production" && Tr(A, t))
        continue;
      HA.splice(e, 1), e--, t();
    }
  }
}
function Sc(A) {
  if (Lt.length) {
    const e = [...new Set(Lt)];
    if (Lt.length = 0, ge) {
      ge.push(...e);
      return;
    }
    for (ge = e, process.env.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()), ge.sort((t, n) => Qn(t) - Qn(n)), ze = 0; ze < ge.length; ze++)
      process.env.NODE_ENV !== "production" && Tr(A, ge[ze]) || ge[ze]();
    ge = null, ze = 0;
  }
}
const Qn = (A) => A.id == null ? 1 / 0 : A.id, kd = (A, e) => {
  const t = Qn(A) - Qn(e);
  if (t === 0) {
    if (A.pre && !e.pre)
      return -1;
    if (e.pre && !A.pre)
      return 1;
  }
  return t;
};
function Ic(A) {
  Oo = !1, Cn = !0, process.env.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()), HA.sort(kd);
  const e = process.env.NODE_ENV !== "production" ? (t) => Tr(A, t) : NA;
  try {
    for (he = 0; he < HA.length; he++) {
      const t = HA[he];
      if (t && t.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(t))
          continue;
        _e(t, null, 14);
      }
    }
  } finally {
    he = 0, HA.length = 0, Sc(A), Cn = !1, Fr = null, (HA.length || Lt.length) && Ic(A);
  }
}
function Tr(A, e) {
  if (!A.has(e))
    A.set(e, 1);
  else {
    const t = A.get(e);
    if (t > xd) {
      const n = e.ownerInstance, i = n && Ur(n.type);
      return S(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      A.set(e, t + 1);
  }
}
let dt = !1;
const Mt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Pi().__VUE_HMR_RUNTIME__ = {
  createRecord: go(kc),
  rerender: go(Nd),
  reload: go(Fd)
});
const mt = /* @__PURE__ */ new Map();
function _d(A) {
  const e = A.type.__hmrId;
  let t = mt.get(e);
  t || (kc(e, A.type), t = mt.get(e)), t.instances.add(A);
}
function Md(A) {
  mt.get(A.type.__hmrId).instances.delete(A);
}
function kc(A, e) {
  return mt.has(A) ? !1 : (mt.set(A, {
    initialDef: mn(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function mn(A) {
  return ul(A) ? A.__vccOpts : A;
}
function Nd(A, e) {
  const t = mt.get(A);
  t && (t.initialDef.render = e, [...t.instances].forEach((n) => {
    e && (n.render = e, mn(n.type).render = e), n.renderCache = [], dt = !0, n.update(), dt = !1;
  }));
}
function Fd(A, e) {
  const t = mt.get(A);
  if (!t)
    return;
  e = mn(e), ys(t.initialDef, e);
  const n = [...t.instances];
  for (const i of n) {
    const o = mn(i.type);
    Mt.has(o) || (o !== t.initialDef && ys(o, e), Mt.add(o)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Mt.add(o), i.ceReload(e.styles), Mt.delete(o)) : i.parent ? Ji(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  xc(() => {
    for (const i of n)
      Mt.delete(
        mn(i.type)
      );
  });
}
function ys(A, e) {
  vA(A, e);
  for (const t in A)
    t !== "__file" && !(t in e) && delete A[t];
}
function go(A) {
  return (e, t) => {
    try {
      return A(e, t);
    } catch (n) {
      console.error(n), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let me, cn = [], Lo = !1;
function Ln(A, ...e) {
  me ? me.emit(A, ...e) : Lo || cn.push({ event: A, args: e });
}
function _c(A, e) {
  var t, n;
  me = A, me ? (me.enabled = !0, cn.forEach(({ event: i, args: o }) => me.emit(i, ...o)), cn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((n = (t = window.navigator) == null ? void 0 : t.userAgent) != null && n.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    _c(o, e);
  }), setTimeout(() => {
    me || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Lo = !0, cn = []);
  }, 3e3)) : (Lo = !0, cn = []);
}
function Td(A, e) {
  Ln("app:init", A, e, {
    Fragment: QA,
    Text: zn,
    Comment: kA,
    Static: ui
  });
}
function Hd(A) {
  Ln("app:unmount", A);
}
const Od = /* @__PURE__ */ Hr(
  "component:added"
  /* COMPONENT_ADDED */
), Mc = /* @__PURE__ */ Hr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ld = /* @__PURE__ */ Hr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Xd = (A) => {
  me && typeof me.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !me.cleanupBuffer(A) && Ld(A);
};
function Hr(A) {
  return (e) => {
    Ln(
      A,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const zd = /* @__PURE__ */ Nc(
  "perf:start"
  /* PERFORMANCE_START */
), Rd = /* @__PURE__ */ Nc(
  "perf:end"
  /* PERFORMANCE_END */
);
function Nc(A) {
  return (e, t, n) => {
    Ln(A, e.appContext.app, e.uid, e, t, n);
  };
}
function Vd(A, e, t) {
  Ln(
    "component:emit",
    A.appContext.app,
    A,
    e,
    t
  );
}
function Ud(A, e, ...t) {
  if (A.isUnmounted)
    return;
  const n = A.vnode.props || hA;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: l,
      propsOptions: [u]
    } = A;
    if (l)
      if (!(e in l))
        (!u || !(Le(e) in u)) && S(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Le(e)}" prop.`
        );
      else {
        const d = l[e];
        q(d) && (d(...t) || S(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = t;
  const o = e.startsWith("update:"), r = o && e.slice(7);
  if (r && r in n) {
    const l = `${r === "modelValue" ? "model" : r}Modifiers`, { number: u, trim: d } = n[l] || hA;
    d && (i = t.map((p) => BA(p) ? p.trim() : p)), u && (i = t.map(Mo));
  }
  if (process.env.NODE_ENV !== "production" && Vd(A, e, i), process.env.NODE_ENV !== "production") {
    const l = e.toLowerCase();
    l !== e && n[Le(l)] && S(
      `Event "${l}" is emitted in component ${io(
        A,
        A.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${RA(e)}" instead of "${e}".`
    );
  }
  let s, a = n[s = Le(e)] || // also try camelCase event handler (#2249)
  n[s = Le(GA(e))];
  !a && o && (a = n[s = Le(RA(e))]), a && ee(
    a,
    A,
    6,
    i
  );
  const c = n[s + "Once"];
  if (c) {
    if (!A.emitted)
      A.emitted = {};
    else if (A.emitted[s])
      return;
    A.emitted[s] = !0, ee(
      c,
      A,
      6,
      i
    );
  }
}
function Fc(A, e, t = !1) {
  const n = e.emitsCache, i = n.get(A);
  if (i !== void 0)
    return i;
  const o = A.emits;
  let r = {}, s = !1;
  if (!q(A)) {
    const a = (c) => {
      const l = Fc(c, e, !0);
      l && (s = !0, vA(r, l));
    };
    !t && e.mixins.length && e.mixins.forEach(a), A.extends && a(A.extends), A.mixins && A.mixins.forEach(a);
  }
  return !o && !s ? (lA(A) && n.set(A, null), null) : (j(o) ? o.forEach((a) => r[a] = null) : vA(r, o), lA(A) && n.set(A, r), r);
}
function qi(A, e) {
  return !A || !On(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), oA(A, e[0].toLowerCase() + e.slice(1)) || oA(A, RA(e)) || oA(A, e));
}
let SA = null, Wi = null;
function Qi(A) {
  const e = SA;
  return SA = A, Wi = A && A.type.__scopeId || null, e;
}
function Pt(A) {
  Wi = A;
}
function bt() {
  Wi = null;
}
function Zi(A, e = SA, t) {
  if (!e || A._n)
    return A;
  const n = (...i) => {
    n._d && Ns(-1);
    const o = Qi(e);
    let r;
    try {
      r = A(...i);
    } finally {
      Qi(o), n._d && Ns(1);
    }
    return process.env.NODE_ENV !== "production" && Mc(e), r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
let Xo = !1;
function xi() {
  Xo = !0;
}
function ho(A) {
  const {
    type: e,
    vnode: t,
    proxy: n,
    withProxy: i,
    props: o,
    propsOptions: [r],
    slots: s,
    attrs: a,
    emit: c,
    render: l,
    renderCache: u,
    data: d,
    setupState: p,
    ctx: h,
    inheritAttrs: y
  } = A;
  let _, M;
  const v = Qi(A);
  process.env.NODE_ENV !== "production" && (Xo = !1);
  try {
    if (t.shapeFlag & 4) {
      const T = i || n;
      _ = se(
        l.call(
          T,
          T,
          u,
          o,
          p,
          d,
          h
        )
      ), M = a;
    } else {
      const T = e;
      process.env.NODE_ENV !== "production" && a === o && xi(), _ = se(
        T.length > 1 ? T(
          o,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return xi(), a;
            },
            slots: s,
            emit: c
          } : { attrs: a, slots: s, emit: c }
        ) : T(
          o,
          null
          /* we know it doesn't need it */
        )
      ), M = e.props ? a : $d(a);
    }
  } catch (T) {
    wn.length = 0, Ki(T, A, 1), _ = EA(kA);
  }
  let P = _, $;
  if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && ([P, $] = jd(_)), M && y !== !1) {
    const T = Object.keys(M), { shapeFlag: rA } = P;
    if (T.length) {
      if (rA & 7)
        r && T.some(yi) && (M = Gd(
          M,
          r
        )), P = Ee(P, M);
      else if (process.env.NODE_ENV !== "production" && !Xo && P.type !== kA) {
        const L = Object.keys(a), z = [], x = [];
        for (let C = 0, G = L.length; C < G; C++) {
          const I = L[C];
          On(I) ? yi(I) || z.push(I[2].toLowerCase() + I.slice(3)) : x.push(I);
        }
        x.length && S(
          `Extraneous non-props attributes (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), z.length && S(
          `Extraneous non-emits event listeners (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (process.env.NODE_ENV !== "production" && !Bs(P) && S(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), P = Ee(P), P.dirs = P.dirs ? P.dirs.concat(t.dirs) : t.dirs), t.transition && (process.env.NODE_ENV !== "production" && !Bs(P) && S(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), P.transition = t.transition), process.env.NODE_ENV !== "production" && $ ? $(P) : _ = P, Qi(v), _;
}
const jd = (A) => {
  const e = A.children, t = A.dynamicChildren, n = Tc(e);
  if (!n)
    return [A, void 0];
  const i = e.indexOf(n), o = t ? t.indexOf(n) : -1, r = (s) => {
    e[i] = s, t && (o > -1 ? t[o] = s : s.patchFlag > 0 && (A.dynamicChildren = [...t, s]));
  };
  return [se(n), r];
};
function Tc(A) {
  let e;
  for (let t = 0; t < A.length; t++) {
    const n = A[t];
    if (jt(n)) {
      if (n.type !== kA || n.children === "v-if") {
        if (e)
          return;
        e = n;
      }
    } else
      return;
  }
  return e;
}
const $d = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || On(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, Gd = (A, e) => {
  const t = {};
  for (const n in A)
    (!yi(n) || !(n.slice(9) in e)) && (t[n] = A[n]);
  return t;
}, Bs = (A) => A.shapeFlag & 7 || A.type === kA;
function Yd(A, e, t) {
  const { props: n, children: i, component: o } = A, { props: r, children: s, patchFlag: a } = e, c = o.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || s) && dt || e.dirs || e.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? Ps(n, r, c) : !!r;
    if (a & 8) {
      const l = e.dynamicProps;
      for (let u = 0; u < l.length; u++) {
        const d = l[u];
        if (r[d] !== n[d] && !qi(c, d))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === r ? !1 : n ? r ? Ps(n, r, c) : !0 : !!r;
  return !1;
}
function Ps(A, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(A).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (e[o] !== A[o] && !qi(t, o))
      return !0;
  }
  return !1;
}
function Kd({ vnode: A, parent: e }, t) {
  for (; e && e.subTree === A; )
    (A = e.vnode).el = t, e = e.parent;
}
const Jd = (A) => A.__isSuspense;
function qd(A, e) {
  e && e.pendingBranch ? j(A) ? e.effects.push(...A) : e.effects.push(A) : xc(A);
}
function Hc(A, e) {
  return Or(A, null, e);
}
const Jn = {};
function UA(A, e, t) {
  return process.env.NODE_ENV !== "production" && !q(e) && S(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Or(A, e, t);
}
function Or(A, e, { immediate: t, deep: n, flush: i, onTrack: o, onTrigger: r } = hA) {
  var s;
  process.env.NODE_ENV !== "production" && !e && (t !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (T) => {
    S(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = Qr() === ((s = xA) == null ? void 0 : s.scope) ? xA : null;
  let l, u = !1, d = !1;
  if (yA(A) ? (l = () => A.value, u = Di(A)) : we(A) ? (l = () => A, n = !0) : j(A) ? (d = !0, u = A.some((T) => we(T) || Di(T)), l = () => A.map((T) => {
    if (yA(T))
      return T.value;
    if (we(T))
      return st(T);
    if (q(T))
      return _e(T, c, 2);
    process.env.NODE_ENV !== "production" && a(T);
  })) : q(A) ? e ? l = () => _e(A, c, 2) : l = () => {
    if (!(c && c.isUnmounted))
      return p && p(), ee(
        A,
        c,
        3,
        [h]
      );
  } : (l = NA, process.env.NODE_ENV !== "production" && a(A)), e && n) {
    const T = l;
    l = () => st(T());
  }
  let p, h = (T) => {
    p = P.onStop = () => {
      _e(T, c, 4);
    };
  }, y;
  if (Sn)
    if (h = NA, e ? t && ee(e, c, 3, [
      l(),
      d ? [] : void 0,
      h
    ]) : l(), i === "sync") {
      const T = tp();
      y = T.__watcherHandles || (T.__watcherHandles = []);
    } else
      return NA;
  let _ = d ? new Array(A.length).fill(Jn) : Jn;
  const M = () => {
    if (P.active)
      if (e) {
        const T = P.run();
        (n || u || (d ? T.some(
          (rA, L) => bn(rA, _[L])
        ) : bn(T, _))) && (p && p(), ee(e, c, 3, [
          T,
          // pass undefined as the old value when it's changed for the first time
          _ === Jn ? void 0 : d && _[0] === Jn ? [] : _,
          h
        ]), _ = T);
      } else
        P.run();
  };
  M.allowRecurse = !!e;
  let v;
  i === "sync" ? v = M : i === "post" ? v = () => zA(M, c && c.suspense) : (M.pre = !0, c && (M.id = c.uid), v = () => Ji(M));
  const P = new xr(l, v);
  process.env.NODE_ENV !== "production" && (P.onTrack = o, P.onTrigger = r), e ? t ? M() : _ = P.run() : i === "post" ? zA(
    P.run.bind(P),
    c && c.suspense
  ) : P.run();
  const $ = () => {
    P.stop(), c && c.scope && Pr(c.scope.effects, P);
  };
  return y && y.push($), $;
}
function Wd(A, e, t) {
  const n = this.proxy, i = BA(A) ? A.includes(".") ? Oc(n, A) : () => n[A] : A.bind(n, n);
  let o;
  q(e) ? o = e : (o = e.handler, t = e);
  const r = xA;
  Gt(this);
  const s = Or(i, o.bind(n), t);
  return r ? Gt(r) : pt(), s;
}
function Oc(A, e) {
  const t = e.split(".");
  return () => {
    let n = A;
    for (let i = 0; i < t.length && n; i++)
      n = n[t[i]];
    return n;
  };
}
function st(A, e) {
  if (!lA(A) || A.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(A)))
    return A;
  if (e.add(A), yA(A))
    st(A.value, e);
  else if (j(A))
    for (let t = 0; t < A.length; t++)
      st(A[t], e);
  else if (tc(A) || ct(A))
    A.forEach((t) => {
      st(t, e);
    });
  else if (ic(A))
    for (const t in A)
      st(A[t], e);
  return A;
}
function Lc(A) {
  Eu(A) && S("Do not use built-in directive ids as custom directive id: " + A);
}
function Xt(A, e) {
  const t = SA;
  if (t === null)
    return process.env.NODE_ENV !== "production" && S("withDirectives can only be used inside render functions."), A;
  const n = no(t) || t.proxy, i = A.dirs || (A.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [r, s, a, c = hA] = e[o];
    r && (q(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && st(s), i.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return A;
}
function Ze(A, e, t, n) {
  const i = A.dirs, o = e && e.dirs;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    o && (s.oldValue = o[r].value);
    let a = s.dir[n];
    a && (yt(), ee(a, t, 8, [
      A.el,
      s,
      A,
      e
    ]), Bt());
  }
}
function Zd() {
  const A = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Et(() => {
    A.isMounted = !0;
  }), Uc(() => {
    A.isUnmounting = !0;
  }), A;
}
const WA = [Function, Array], Xc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: WA,
  onEnter: WA,
  onAfterEnter: WA,
  onEnterCancelled: WA,
  // leave
  onBeforeLeave: WA,
  onLeave: WA,
  onAfterLeave: WA,
  onLeaveCancelled: WA,
  // appear
  onBeforeAppear: WA,
  onAppear: WA,
  onAfterAppear: WA,
  onAppearCancelled: WA
}, Af = {
  name: "BaseTransition",
  props: Xc,
  setup(A, { slots: e }) {
    const t = Wt(), n = Zd();
    let i;
    return () => {
      const o = e.default && Rc(e.default(), !0);
      if (!o || !o.length)
        return;
      let r = o[0];
      if (o.length > 1) {
        let y = !1;
        for (const _ of o)
          if (_.type !== kA) {
            if (process.env.NODE_ENV !== "production" && y) {
              S(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (r = _, y = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const s = W(A), { mode: a } = s;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && S(`invalid <transition> mode: ${a}`), n.isLeaving)
        return mo(r);
      const c = bs(r);
      if (!c)
        return mo(r);
      const l = zo(
        c,
        s,
        n,
        t
      );
      Ro(c, l);
      const u = t.subTree, d = u && bs(u);
      let p = !1;
      const { getTransitionKey: h } = c.type;
      if (h) {
        const y = h();
        i === void 0 ? i = y : y !== i && (i = y, p = !0);
      }
      if (d && d.type !== kA && (!it(c, d) || p)) {
        const y = zo(
          d,
          s,
          n,
          t
        );
        if (Ro(d, y), a === "out-in")
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, t.update.active !== !1 && t.update();
          }, mo(r);
        a === "in-out" && c.type !== kA && (y.delayLeave = (_, M, v) => {
          const P = zc(
            n,
            d
          );
          P[String(d.key)] = d, _._leaveCb = () => {
            M(), _._leaveCb = void 0, delete l.delayedLeave;
          }, l.delayedLeave = v;
        });
      }
      return r;
    };
  }
}, ef = Af;
function zc(A, e) {
  const { leavingVNodes: t } = A;
  let n = t.get(e.type);
  return n || (n = /* @__PURE__ */ Object.create(null), t.set(e.type, n)), n;
}
function zo(A, e, t, n) {
  const {
    appear: i,
    mode: o,
    persisted: r = !1,
    onBeforeEnter: s,
    onEnter: a,
    onAfterEnter: c,
    onEnterCancelled: l,
    onBeforeLeave: u,
    onLeave: d,
    onAfterLeave: p,
    onLeaveCancelled: h,
    onBeforeAppear: y,
    onAppear: _,
    onAfterAppear: M,
    onAppearCancelled: v
  } = e, P = String(A.key), $ = zc(t, A), T = (z, x) => {
    z && ee(
      z,
      n,
      9,
      x
    );
  }, rA = (z, x) => {
    const C = x[1];
    T(z, x), j(z) ? z.every((G) => G.length <= 1) && C() : z.length <= 1 && C();
  }, L = {
    mode: o,
    persisted: r,
    beforeEnter(z) {
      let x = s;
      if (!t.isMounted)
        if (i)
          x = y || s;
        else
          return;
      z._leaveCb && z._leaveCb(
        !0
        /* cancelled */
      );
      const C = $[P];
      C && it(A, C) && C.el._leaveCb && C.el._leaveCb(), T(x, [z]);
    },
    enter(z) {
      let x = a, C = c, G = l;
      if (!t.isMounted)
        if (i)
          x = _ || a, C = M || c, G = v || l;
        else
          return;
      let I = !1;
      const AA = z._enterCb = (pA) => {
        I || (I = !0, pA ? T(G, [z]) : T(C, [z]), L.delayedLeave && L.delayedLeave(), z._enterCb = void 0);
      };
      x ? rA(x, [z, AA]) : AA();
    },
    leave(z, x) {
      const C = String(A.key);
      if (z._enterCb && z._enterCb(
        !0
        /* cancelled */
      ), t.isUnmounting)
        return x();
      T(u, [z]);
      let G = !1;
      const I = z._leaveCb = (AA) => {
        G || (G = !0, x(), AA ? T(h, [z]) : T(p, [z]), z._leaveCb = void 0, $[C] === A && delete $[C]);
      };
      $[C] = A, d ? rA(d, [z, I]) : I();
    },
    clone(z) {
      return zo(z, e, t, n);
    }
  };
  return L;
}
function mo(A) {
  if (Xn(A))
    return A = Ee(A), A.children = null, A;
}
function bs(A) {
  return Xn(A) ? A.children ? A.children[0] : void 0 : A;
}
function Ro(A, e) {
  A.shapeFlag & 6 && A.component ? Ro(A.component.subTree, e) : A.shapeFlag & 128 ? (A.ssContent.transition = e.clone(A.ssContent), A.ssFallback.transition = e.clone(A.ssFallback)) : A.transition = e;
}
function Rc(A, e = !1, t) {
  let n = [], i = 0;
  for (let o = 0; o < A.length; o++) {
    let r = A[o];
    const s = t == null ? r.key : String(t) + String(r.key != null ? r.key : o);
    r.type === QA ? (r.patchFlag & 128 && i++, n = n.concat(
      Rc(r.children, e, s)
    )) : (e || r.type !== kA) && n.push(s != null ? Ee(r, { key: s }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
function Ao(A, e) {
  return q(A) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => vA({ name: A.name }, e, { setup: A }))()
  ) : A;
}
const vn = (A) => !!A.type.__asyncLoader, Xn = (A) => A.type.__isKeepAlive;
function tf(A, e) {
  Vc(A, "a", e);
}
function nf(A, e) {
  Vc(A, "da", e);
}
function Vc(A, e, t = xA) {
  const n = A.__wdc || (A.__wdc = () => {
    let i = t;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return A();
  });
  if (eo(e, n, t), t) {
    let i = t.parent;
    for (; i && i.parent; )
      Xn(i.parent.vnode) && of(n, e, t, i), i = i.parent;
  }
}
function of(A, e, t, n) {
  const i = eo(
    e,
    A,
    n,
    !0
    /* prepend */
  );
  jc(() => {
    Pr(n[e], i);
  }, t);
}
function eo(A, e, t = xA, n = !1) {
  if (t) {
    const i = t[A] || (t[A] = []), o = e.__weh || (e.__weh = (...r) => {
      if (t.isUnmounted)
        return;
      yt(), Gt(t);
      const s = ee(e, t, A, r);
      return pt(), Bt(), s;
    });
    return n ? i.unshift(o) : i.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Le(Nr[A].replace(/ hook$/, ""));
    S(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ne = (A) => (e, t = xA) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Sn || A === "sp") && eo(A, (...n) => e(...n), t)
), rf = Ne("bm"), Et = Ne("m"), sf = Ne("bu"), af = Ne("u"), Uc = Ne("bum"), jc = Ne("um"), cf = Ne("sp"), lf = Ne(
  "rtg"
), uf = Ne(
  "rtc"
);
function df(A, e = xA) {
  eo("ec", A, e);
}
const Vo = "components", ff = "directives", $c = Symbol.for("v-ndc");
function vo(A) {
  return BA(A) ? Gc(Vo, A, !1) || A : A || $c;
}
function pf(A) {
  return Gc(ff, A);
}
function Gc(A, e, t = !0, n = !1) {
  const i = SA || xA;
  if (i) {
    const o = i.type;
    if (A === Vo) {
      const s = Ur(
        o,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (s && (s === e || s === GA(e) || s === ht(GA(e))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Es(i[A] || o[A], e) || // global registration
      Es(i.appContext[A], e)
    );
    if (!r && n)
      return o;
    if (process.env.NODE_ENV !== "production" && t && !r) {
      const s = A === Vo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      S(`Failed to resolve ${A.slice(0, -1)}: ${e}${s}`);
    }
    return r;
  } else
    process.env.NODE_ENV !== "production" && S(
      `resolve${ht(A.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Es(A, e) {
  return A && (A[e] || A[GA(e)] || A[ht(GA(e))]);
}
function Ut(A, e, t, n) {
  let i;
  const o = t && t[n];
  if (j(A) || BA(A)) {
    i = new Array(A.length);
    for (let r = 0, s = A.length; r < s; r++)
      i[r] = e(A[r], r, void 0, o && o[r]);
  } else if (typeof A == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(A) && S(`The v-for range expect an integer value but got ${A}.`), i = new Array(A);
    for (let r = 0; r < A; r++)
      i[r] = e(r + 1, r, void 0, o && o[r]);
  } else if (lA(A))
    if (A[Symbol.iterator])
      i = Array.from(
        A,
        (r, s) => e(r, s, void 0, o && o[s])
      );
    else {
      const r = Object.keys(A);
      i = new Array(r.length);
      for (let s = 0, a = r.length; s < a; s++) {
        const c = r[s];
        i[s] = e(A[c], c, s, o && o[s]);
      }
    }
  else
    i = [];
  return t && (t[n] = i), i;
}
function jA(A, e, t = {}, n, i) {
  if (SA.isCE || SA.parent && vn(SA.parent) && SA.parent.isCE)
    return e !== "default" && (t.name = e), EA("slot", t, n && n());
  let o = A[e];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (S(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), tA();
  const r = o && Yc(o(t)), s = ye(
    QA,
    {
      key: t.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      r && r.key || `_${e}`
    },
    r || (n ? n() : []),
    r && A._ === 1 ? 64 : -2
  );
  return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), o && o._c && (o._d = !0), s;
}
function Yc(A) {
  return A.some((e) => jt(e) ? !(e.type === kA || e.type === QA && !Yc(e.children)) : !0) ? A : null;
}
function gf(A, e) {
  const t = {};
  if (process.env.NODE_ENV !== "production" && !lA(A))
    return S("v-on with no argument expects an object value."), t;
  for (const n in A)
    t[e && /[A-Z]/.test(n) ? `on:${n}` : Le(n)] = A[n];
  return t;
}
const Uo = (A) => A ? al(A) ? no(A) || A.proxy : Uo(A.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vA(/* @__PURE__ */ Object.create(null), {
    $: (A) => A,
    $el: (A) => A.vnode.el,
    $data: (A) => A.data,
    $props: (A) => process.env.NODE_ENV !== "production" ? an(A.props) : A.props,
    $attrs: (A) => process.env.NODE_ENV !== "production" ? an(A.attrs) : A.attrs,
    $slots: (A) => process.env.NODE_ENV !== "production" ? an(A.slots) : A.slots,
    $refs: (A) => process.env.NODE_ENV !== "production" ? an(A.refs) : A.refs,
    $parent: (A) => Uo(A.parent),
    $root: (A) => Uo(A.root),
    $emit: (A) => A.emit,
    $options: (A) => Xr(A),
    $forceUpdate: (A) => A.f || (A.f = () => Ji(A.update)),
    $nextTick: (A) => A.n || (A.n = Vt.bind(A.proxy)),
    $watch: (A) => Wd.bind(A)
  })
), Lr = (A) => A === "_" || A === "$", wo = (A, e) => A !== hA && !A.__isScriptSetup && oA(A, e), Kc = {
  get({ _: A }, e) {
    const { ctx: t, setupState: n, data: i, props: o, accessCache: r, type: s, appContext: a } = A;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let c;
    if (e[0] !== "$") {
      const p = r[e];
      if (p !== void 0)
        switch (p) {
          case 1:
            return n[e];
          case 2:
            return i[e];
          case 4:
            return t[e];
          case 3:
            return o[e];
        }
      else {
        if (wo(n, e))
          return r[e] = 1, n[e];
        if (i !== hA && oA(i, e))
          return r[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = A.propsOptions[0]) && oA(c, e)
        )
          return r[e] = 3, o[e];
        if (t !== hA && oA(t, e))
          return r[e] = 4, t[e];
        jo && (r[e] = 0);
      }
    }
    const l = ft[e];
    let u, d;
    if (l)
      return e === "$attrs" ? (FA(A, "get", e), process.env.NODE_ENV !== "production" && xi()) : process.env.NODE_ENV !== "production" && e === "$slots" && FA(A, "get", e), l(A);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[e])
    )
      return u;
    if (t !== hA && oA(t, e))
      return r[e] = 4, t[e];
    if (
      // global properties
      d = a.config.globalProperties, oA(d, e)
    )
      return d[e];
    process.env.NODE_ENV !== "production" && SA && (!BA(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== hA && Lr(e[0]) && oA(i, e) ? S(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : A === SA && S(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: A }, e, t) {
    const { data: n, setupState: i, ctx: o } = A;
    return wo(i, e) ? (i[e] = t, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && oA(i, e) ? (S(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : n !== hA && oA(n, e) ? (n[e] = t, !0) : oA(A.props, e) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in A ? (process.env.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in A.appContext.config.globalProperties ? Object.defineProperty(o, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : o[e] = t, !0);
  },
  has({
    _: { data: A, setupState: e, accessCache: t, ctx: n, appContext: i, propsOptions: o }
  }, r) {
    let s;
    return !!t[r] || A !== hA && oA(A, r) || wo(e, r) || (s = o[0]) && oA(s, r) || oA(n, r) || oA(ft, r) || oA(i.config.globalProperties, r);
  },
  defineProperty(A, e, t) {
    return t.get != null ? A._.accessCache[e] = 0 : oA(t, "value") && this.set(A, e, t.value, null), Reflect.defineProperty(A, e, t);
  }
};
process.env.NODE_ENV !== "production" && (Kc.ownKeys = (A) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(A)));
function hf(A) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => A
  }), Object.keys(ft).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => ft[t](A),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NA
    });
  }), e;
}
function mf(A) {
  const {
    ctx: e,
    propsOptions: [t]
  } = A;
  t && Object.keys(t).forEach((n) => {
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => A.props[n],
      set: NA
    });
  });
}
function vf(A) {
  const { ctx: e, setupState: t } = A;
  Object.keys(W(t)).forEach((n) => {
    if (!t.__isScriptSetup) {
      if (Lr(n[0])) {
        S(
          `setup() return property ${JSON.stringify(
            n
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !0,
        get: () => t[n],
        set: NA
      });
    }
  });
}
function Ds(A) {
  return j(A) ? A.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : A;
}
function wf() {
  const A = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    A[t] ? S(`${e} property "${t}" is already defined in ${A[t]}.`) : A[t] = e;
  };
}
let jo = !0;
function yf(A) {
  const e = Xr(A), t = A.proxy, n = A.ctx;
  jo = !1, e.beforeCreate && Cs(e.beforeCreate, A, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: s,
    provide: a,
    inject: c,
    // lifecycle
    created: l,
    beforeMount: u,
    mounted: d,
    beforeUpdate: p,
    updated: h,
    activated: y,
    deactivated: _,
    beforeDestroy: M,
    beforeUnmount: v,
    destroyed: P,
    unmounted: $,
    render: T,
    renderTracked: rA,
    renderTriggered: L,
    errorCaptured: z,
    serverPrefetch: x,
    // public API
    expose: C,
    inheritAttrs: G,
    // assets
    components: I,
    directives: AA,
    filters: pA
  } = e, PA = process.env.NODE_ENV !== "production" ? wf() : null;
  if (process.env.NODE_ENV !== "production") {
    const [D] = A.propsOptions;
    if (D)
      for (const J in D)
        PA("Props", J);
  }
  if (c && Bf(c, n, PA), r)
    for (const D in r) {
      const J = r[D];
      q(J) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(n, D, {
        value: J.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[D] = J.bind(t), process.env.NODE_ENV !== "production" && PA("Methods", D)) : process.env.NODE_ENV !== "production" && S(
        `Method "${D}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !q(i) && S(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const D = i.call(t, t);
    if (process.env.NODE_ENV !== "production" && Er(D) && S(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !lA(D))
      process.env.NODE_ENV !== "production" && S("data() should return an object.");
    else if (A.data = qt(D), process.env.NODE_ENV !== "production")
      for (const J in D)
        PA("Data", J), Lr(J[0]) || Object.defineProperty(n, J, {
          configurable: !0,
          enumerable: !0,
          get: () => D[J],
          set: NA
        });
  }
  if (jo = !0, o)
    for (const D in o) {
      const J = o[D], _A = q(J) ? J.bind(t, t) : q(J.get) ? J.get.bind(t, t) : NA;
      process.env.NODE_ENV !== "production" && _A === NA && S(`Computed property "${D}" has no getter.`);
      const JA = !q(J) && q(J.set) ? J.set.bind(t) : process.env.NODE_ENV !== "production" ? () => {
        S(
          `Write operation failed: computed property "${D}" is readonly.`
        );
      } : NA, MA = bA({
        get: _A,
        set: JA
      });
      Object.defineProperty(n, D, {
        enumerable: !0,
        configurable: !0,
        get: () => MA.value,
        set: (qA) => MA.value = qA
      }), process.env.NODE_ENV !== "production" && PA("Computed", D);
    }
  if (s)
    for (const D in s)
      Jc(s[D], n, t, D);
  if (a) {
    const D = q(a) ? a.call(t) : a;
    Reflect.ownKeys(D).forEach((J) => {
      ci(J, D[J]);
    });
  }
  l && Cs(l, A, "c");
  function iA(D, J) {
    j(J) ? J.forEach((_A) => D(_A.bind(t))) : J && D(J.bind(t));
  }
  if (iA(rf, u), iA(Et, d), iA(sf, p), iA(af, h), iA(tf, y), iA(nf, _), iA(df, z), iA(uf, rA), iA(lf, L), iA(Uc, v), iA(jc, $), iA(cf, x), j(C))
    if (C.length) {
      const D = A.exposed || (A.exposed = {});
      C.forEach((J) => {
        Object.defineProperty(D, J, {
          get: () => t[J],
          set: (_A) => t[J] = _A
        });
      });
    } else
      A.exposed || (A.exposed = {});
  T && A.render === NA && (A.render = T), G != null && (A.inheritAttrs = G), I && (A.components = I), AA && (A.directives = AA);
}
function Bf(A, e, t = NA) {
  j(A) && (A = $o(A));
  for (const n in A) {
    const i = A[n];
    let o;
    lA(i) ? "default" in i ? o = ue(
      i.from || n,
      i.default,
      !0
      /* treat default function as factory */
    ) : o = ue(i.from || n) : o = ue(i), yA(o) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : e[n] = o, process.env.NODE_ENV !== "production" && t("Inject", n);
  }
}
function Cs(A, e, t) {
  ee(
    j(A) ? A.map((n) => n.bind(e.proxy)) : A.bind(e.proxy),
    e,
    t
  );
}
function Jc(A, e, t, n) {
  const i = n.includes(".") ? Oc(t, n) : () => t[n];
  if (BA(A)) {
    const o = e[A];
    q(o) ? UA(i, o) : process.env.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${A}"`, o);
  } else if (q(A))
    UA(i, A.bind(t));
  else if (lA(A))
    if (j(A))
      A.forEach((o) => Jc(o, e, t, n));
    else {
      const o = q(A.handler) ? A.handler.bind(t) : e[A.handler];
      q(o) ? UA(i, o, A) : process.env.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${A.handler}"`, o);
    }
  else
    process.env.NODE_ENV !== "production" && S(`Invalid watch option: "${n}"`, A);
}
function Xr(A) {
  const e = A.type, { mixins: t, extends: n } = e, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = A.appContext, s = o.get(e);
  let a;
  return s ? a = s : !i.length && !t && !n ? a = e : (a = {}, i.length && i.forEach(
    (c) => Si(a, c, r, !0)
  ), Si(a, e, r)), lA(e) && o.set(e, a), a;
}
function Si(A, e, t, n = !1) {
  const { mixins: i, extends: o } = e;
  o && Si(A, o, t, !0), i && i.forEach(
    (r) => Si(A, r, t, !0)
  );
  for (const r in e)
    if (n && r === "expose")
      process.env.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const s = Pf[r] || t && t[r];
      A[r] = s ? s(A[r], e[r]) : e[r];
    }
  return A;
}
const Pf = {
  data: Qs,
  props: xs,
  emits: xs,
  // objects
  methods: ln,
  computed: ln,
  // lifecycle
  beforeCreate: LA,
  created: LA,
  beforeMount: LA,
  mounted: LA,
  beforeUpdate: LA,
  updated: LA,
  beforeDestroy: LA,
  beforeUnmount: LA,
  destroyed: LA,
  unmounted: LA,
  activated: LA,
  deactivated: LA,
  errorCaptured: LA,
  serverPrefetch: LA,
  // assets
  components: ln,
  directives: ln,
  // watch
  watch: Ef,
  // provide / inject
  provide: Qs,
  inject: bf
};
function Qs(A, e) {
  return e ? A ? function() {
    return vA(
      q(A) ? A.call(this, this) : A,
      q(e) ? e.call(this, this) : e
    );
  } : e : A;
}
function bf(A, e) {
  return ln($o(A), $o(e));
}
function $o(A) {
  if (j(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++)
      e[A[t]] = A[t];
    return e;
  }
  return A;
}
function LA(A, e) {
  return A ? [...new Set([].concat(A, e))] : e;
}
function ln(A, e) {
  return A ? vA(/* @__PURE__ */ Object.create(null), A, e) : e;
}
function xs(A, e) {
  return A ? j(A) && j(e) ? [.../* @__PURE__ */ new Set([...A, ...e])] : vA(
    /* @__PURE__ */ Object.create(null),
    Ds(A),
    Ds(e ?? {})
  ) : e;
}
function Ef(A, e) {
  if (!A)
    return e;
  if (!e)
    return A;
  const t = vA(/* @__PURE__ */ Object.create(null), A);
  for (const n in e)
    t[n] = LA(A[n], e[n]);
  return t;
}
function qc() {
  return {
    app: null,
    config: {
      isNativeTag: ec,
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
function Cf(A, e) {
  return function(n, i = null) {
    q(n) || (n = vA({}, n)), i != null && !lA(i) && (process.env.NODE_ENV !== "production" && S("root props passed to app.mount() must be an object."), i = null);
    const o = qc();
    process.env.NODE_ENV !== "production" && Object.defineProperty(o.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        S(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const r = /* @__PURE__ */ new Set();
    let s = !1;
    const a = o.app = {
      _uid: Df++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Os,
      get config() {
        return o.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && S(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...l) {
        return r.has(c) ? process.env.NODE_ENV !== "production" && S("Plugin has already been applied to target app.") : c && q(c.install) ? (r.add(c), c.install(a, ...l)) : q(c) ? (r.add(c), c(a, ...l)) : process.env.NODE_ENV !== "production" && S(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(c) {
        return o.mixins.includes(c) ? process.env.NODE_ENV !== "production" && S(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : o.mixins.push(c), a;
      },
      component(c, l) {
        return process.env.NODE_ENV !== "production" && Jo(c, o.config), l ? (process.env.NODE_ENV !== "production" && o.components[c] && S(`Component "${c}" has already been registered in target app.`), o.components[c] = l, a) : o.components[c];
      },
      directive(c, l) {
        return process.env.NODE_ENV !== "production" && Lc(c), l ? (process.env.NODE_ENV !== "production" && o.directives[c] && S(`Directive "${c}" has already been registered in target app.`), o.directives[c] = l, a) : o.directives[c];
      },
      mount(c, l, u) {
        if (s)
          process.env.NODE_ENV !== "production" && S(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && S(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const d = EA(
            n,
            i
          );
          return d.appContext = o, process.env.NODE_ENV !== "production" && (o.reload = () => {
            A(Ee(d), c, u);
          }), l && e ? e(d, c) : A(d, c, u), s = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = d.component, Td(a, Os)), no(d.component) || d.component.proxy;
        }
      },
      unmount() {
        s ? (A(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Hd(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && S("Cannot unmount an app that is not mounted.");
      },
      provide(c, l) {
        return process.env.NODE_ENV !== "production" && c in o.provides && S(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), o.provides[c] = l, a;
      },
      runWithContext(c) {
        Ii = a;
        try {
          return c();
        } finally {
          Ii = null;
        }
      }
    };
    return a;
  };
}
let Ii = null;
function ci(A, e) {
  if (!xA)
    process.env.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let t = xA.provides;
    const n = xA.parent && xA.parent.provides;
    n === t && (t = xA.provides = Object.create(n)), t[A] = e;
  }
}
function ue(A, e, t = !1) {
  const n = xA || SA;
  if (n || Ii) {
    const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Ii._context.provides;
    if (i && A in i)
      return i[A];
    if (arguments.length > 1)
      return t && q(e) ? e.call(n && n.proxy) : e;
    process.env.NODE_ENV !== "production" && S(`injection "${String(A)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
function Qf(A, e, t, n = !1) {
  const i = {}, o = {};
  Bi(o, to, 1), A.propsDefaults = /* @__PURE__ */ Object.create(null), Wc(A, e, i, o);
  for (const r in A.propsOptions[0])
    r in i || (i[r] = void 0);
  process.env.NODE_ENV !== "production" && Al(e || {}, i, A), t ? A.props = n ? i : dd(i) : A.type.props ? A.props = i : A.props = o, A.attrs = o;
}
function xf(A) {
  for (; A; ) {
    if (A.type.__hmrId)
      return !0;
    A = A.parent;
  }
}
function Sf(A, e, t, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = A, s = W(i), [a] = A.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && xf(A)) && (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const l = A.vnode.dynamicProps;
      for (let u = 0; u < l.length; u++) {
        let d = l[u];
        if (qi(A.emitsOptions, d))
          continue;
        const p = e[d];
        if (a)
          if (oA(o, d))
            p !== o[d] && (o[d] = p, c = !0);
          else {
            const h = GA(d);
            i[h] = Go(
              a,
              s,
              h,
              p,
              A,
              !1
              /* isAbsent */
            );
          }
        else
          p !== o[d] && (o[d] = p, c = !0);
      }
    }
  } else {
    Wc(A, e, i, o) && (c = !0);
    let l;
    for (const u in s)
      (!e || // for camelCase
      !oA(e, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = RA(u)) === u || !oA(e, l))) && (a ? t && // for camelCase
      (t[u] !== void 0 || // for kebab-case
      t[l] !== void 0) && (i[u] = Go(
        a,
        s,
        u,
        void 0,
        A,
        !0
        /* isAbsent */
      )) : delete i[u]);
    if (o !== s)
      for (const u in o)
        (!e || !oA(e, u)) && (delete o[u], c = !0);
  }
  c && be(A, "set", "$attrs"), process.env.NODE_ENV !== "production" && Al(e || {}, i, A);
}
function Wc(A, e, t, n) {
  const [i, o] = A.propsOptions;
  let r = !1, s;
  if (e)
    for (let a in e) {
      if (oi(a))
        continue;
      const c = e[a];
      let l;
      i && oA(i, l = GA(a)) ? !o || !o.includes(l) ? t[l] = c : (s || (s = {}))[l] = c : qi(A.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, r = !0);
    }
  if (o) {
    const a = W(t), c = s || hA;
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      t[u] = Go(
        i,
        a,
        u,
        c[u],
        A,
        !oA(c, u)
      );
    }
  }
  return r;
}
function Go(A, e, t, n, i, o) {
  const r = A[t];
  if (r != null) {
    const s = oA(r, "default");
    if (s && n === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && q(a)) {
        const { propsDefaults: c } = i;
        t in c ? n = c[t] : (Gt(i), n = c[t] = a.call(
          null,
          e
        ), pt());
      } else
        n = a;
    }
    r[
      0
      /* shouldCast */
    ] && (o && !s ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === RA(t)) && (n = !0));
  }
  return n;
}
function Zc(A, e, t = !1) {
  const n = e.propsCache, i = n.get(A);
  if (i)
    return i;
  const o = A.props, r = {}, s = [];
  let a = !1;
  if (!q(A)) {
    const l = (u) => {
      a = !0;
      const [d, p] = Zc(u, e, !0);
      vA(r, d), p && s.push(...p);
    };
    !t && e.mixins.length && e.mixins.forEach(l), A.extends && l(A.extends), A.mixins && A.mixins.forEach(l);
  }
  if (!o && !a)
    return lA(A) && n.set(A, Ot), Ot;
  if (j(o))
    for (let l = 0; l < o.length; l++) {
      process.env.NODE_ENV !== "production" && !BA(o[l]) && S("props must be strings when using array syntax.", o[l]);
      const u = GA(o[l]);
      Ss(u) && (r[u] = hA);
    }
  else if (o) {
    process.env.NODE_ENV !== "production" && !lA(o) && S("invalid props options", o);
    for (const l in o) {
      const u = GA(l);
      if (Ss(u)) {
        const d = o[l], p = r[u] = j(d) || q(d) ? { type: d } : vA({}, d);
        if (p) {
          const h = ks(Boolean, p.type), y = ks(String, p.type);
          p[
            0
            /* shouldCast */
          ] = h > -1, p[
            1
            /* shouldCastTrue */
          ] = y < 0 || h < y, (h > -1 || oA(p, "default")) && s.push(u);
        }
      }
    }
  }
  const c = [r, s];
  return lA(A) && n.set(A, c), c;
}
function Ss(A) {
  return A[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && S(`Invalid prop name: "${A}" is a reserved property.`), !1);
}
function Yo(A) {
  const e = A && A.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : A === null ? "null" : "";
}
function Is(A, e) {
  return Yo(A) === Yo(e);
}
function ks(A, e) {
  return j(e) ? e.findIndex((t) => Is(t, A)) : q(e) && Is(e, A) ? 0 : -1;
}
function Al(A, e, t) {
  const n = W(e), i = t.propsOptions[0];
  for (const o in i) {
    let r = i[o];
    r != null && If(
      o,
      n[o],
      r,
      !oA(A, o) && !oA(A, RA(o))
    );
  }
}
function If(A, e, t, n) {
  const { type: i, required: o, validator: r, skipCheck: s } = t;
  if (o && n) {
    S('Missing required prop: "' + A + '"');
    return;
  }
  if (!(e == null && !o)) {
    if (i != null && i !== !0 && !s) {
      let a = !1;
      const c = j(i) ? i : [i], l = [];
      for (let u = 0; u < c.length && !a; u++) {
        const { valid: d, expectedType: p } = _f(e, c[u]);
        l.push(p || ""), a = d;
      }
      if (!a) {
        S(Mf(A, e, l));
        return;
      }
    }
    r && !r(e) && S('Invalid prop: custom validator check failed for prop "' + A + '".');
  }
}
const kf = /* @__PURE__ */ We(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function _f(A, e) {
  let t;
  const n = Yo(e);
  if (kf(n)) {
    const i = typeof A;
    t = i === n.toLowerCase(), !t && i === "object" && (t = A instanceof e);
  } else
    n === "Object" ? t = lA(A) : n === "Array" ? t = j(A) : n === "null" ? t = A === null : t = A instanceof e;
  return {
    valid: t,
    expectedType: n
  };
}
function Mf(A, e, t) {
  let n = `Invalid prop: type check failed for prop "${A}". Expected ${t.map(ht).join(" | ")}`;
  const i = t[0], o = Dr(e), r = _s(e, i), s = _s(e, o);
  return t.length === 1 && Ms(i) && !Nf(i, o) && (n += ` with value ${r}`), n += `, got ${o} `, Ms(o) && (n += `with value ${s}.`), n;
}
function _s(A, e) {
  return e === "String" ? `"${A}"` : e === "Number" ? `${Number(A)}` : `${A}`;
}
function Ms(A) {
  return ["string", "number", "boolean"].some((t) => A.toLowerCase() === t);
}
function Nf(...A) {
  return A.some((e) => e.toLowerCase() === "boolean");
}
const el = (A) => A[0] === "_" || A === "$stable", zr = (A) => j(A) ? A.map(se) : [se(A)], Ff = (A, e, t) => {
  if (e._n)
    return e;
  const n = Zi((...i) => (process.env.NODE_ENV !== "production" && xA && S(
    `Slot "${A}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), zr(e(...i))), t);
  return n._c = !1, n;
}, tl = (A, e, t) => {
  const n = A._ctx;
  for (const i in A) {
    if (el(i))
      continue;
    const o = A[i];
    if (q(o))
      e[i] = Ff(i, o, n);
    else if (o != null) {
      process.env.NODE_ENV !== "production" && S(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = zr(o);
      e[i] = () => r;
    }
  }
}, nl = (A, e) => {
  process.env.NODE_ENV !== "production" && !Xn(A.vnode) && S(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = zr(e);
  A.slots.default = () => t;
}, Tf = (A, e) => {
  if (A.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (A.slots = W(e), Bi(e, "_", t)) : tl(
      e,
      A.slots = {}
    );
  } else
    A.slots = {}, e && nl(A, e);
  Bi(A.slots, to, 1);
}, Hf = (A, e, t) => {
  const { vnode: n, slots: i } = A;
  let o = !0, r = hA;
  if (n.shapeFlag & 32) {
    const s = e._;
    s ? process.env.NODE_ENV !== "production" && dt ? (vA(i, e), be(A, "set", "$slots")) : t && s === 1 ? o = !1 : (vA(i, e), !t && s === 1 && delete i._) : (o = !e.$stable, tl(e, i)), r = e;
  } else
    e && (nl(A, e), r = { default: 1 });
  if (o)
    for (const s in i)
      !el(s) && !(s in r) && delete i[s];
};
function Ko(A, e, t, n, i = !1) {
  if (j(A)) {
    A.forEach(
      (d, p) => Ko(
        d,
        e && (j(e) ? e[p] : e),
        t,
        n,
        i
      )
    );
    return;
  }
  if (vn(n) && !i)
    return;
  const o = n.shapeFlag & 4 ? no(n.component) || n.component.proxy : n.el, r = i ? null : o, { i: s, r: a } = A;
  if (process.env.NODE_ENV !== "production" && !s) {
    S(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = e && e.r, l = s.refs === hA ? s.refs = {} : s.refs, u = s.setupState;
  if (c != null && c !== a && (BA(c) ? (l[c] = null, oA(u, c) && (u[c] = null)) : yA(c) && (c.value = null)), q(a))
    _e(a, s, 12, [r, l]);
  else {
    const d = BA(a), p = yA(a);
    if (d || p) {
      const h = () => {
        if (A.f) {
          const y = d ? oA(u, a) ? u[a] : l[a] : a.value;
          i ? j(y) && Pr(y, o) : j(y) ? y.includes(o) || y.push(o) : d ? (l[a] = [o], oA(u, a) && (u[a] = l[a])) : (a.value = [o], A.k && (l[A.k] = a.value));
        } else
          d ? (l[a] = r, oA(u, a) && (u[a] = r)) : p ? (a.value = r, A.k && (l[A.k] = r)) : process.env.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (h.id = -1, zA(h, t)) : h();
    } else
      process.env.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let An, je;
function Se(A, e) {
  A.appContext.config.performance && ki() && je.mark(`vue-${e}-${A.uid}`), process.env.NODE_ENV !== "production" && zd(A, e, ki() ? je.now() : Date.now());
}
function Ie(A, e) {
  if (A.appContext.config.performance && ki()) {
    const t = `vue-${e}-${A.uid}`, n = t + ":end";
    je.mark(n), je.measure(
      `<${io(A, A.type)}> ${e}`,
      t,
      n
    ), je.clearMarks(t), je.clearMarks(n);
  }
  process.env.NODE_ENV !== "production" && Rd(A, e, ki() ? je.now() : Date.now());
}
function ki() {
  return An !== void 0 || (typeof window < "u" && window.performance ? (An = !0, je = window.performance) : An = !1), An;
}
function Of() {
  const A = [];
  if (process.env.NODE_ENV !== "production" && A.length) {
    const e = A.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${A.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const zA = qd;
function Lf(A) {
  return Xf(A);
}
function Xf(A, e) {
  Of();
  const t = Pi();
  t.__VUE__ = !0, process.env.NODE_ENV !== "production" && _c(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: s,
    createComment: a,
    setText: c,
    setElementText: l,
    parentNode: u,
    nextSibling: d,
    setScopeId: p = NA,
    insertStaticContent: h
  } = A, y = (f, g, m, E = null, b = null, N = null, O = !1, k = null, F = process.env.NODE_ENV !== "production" && dt ? !1 : !!g.dynamicChildren) => {
    if (f === g)
      return;
    f && !it(f, g) && (E = V(f), B(f, b, N, !0), f = null), g.patchFlag === -2 && (F = !1, g.dynamicChildren = null);
    const { type: Q, ref: U, shapeFlag: R } = g;
    switch (Q) {
      case zn:
        _(f, g, m, E);
        break;
      case kA:
        M(f, g, m, E);
        break;
      case ui:
        f == null ? v(g, m, E, O) : process.env.NODE_ENV !== "production" && P(f, g, m, O);
        break;
      case QA:
        AA(
          f,
          g,
          m,
          E,
          b,
          N,
          O,
          k,
          F
        );
        break;
      default:
        R & 1 ? rA(
          f,
          g,
          m,
          E,
          b,
          N,
          O,
          k,
          F
        ) : R & 6 ? pA(
          f,
          g,
          m,
          E,
          b,
          N,
          O,
          k,
          F
        ) : R & 64 || R & 128 ? Q.process(
          f,
          g,
          m,
          E,
          b,
          N,
          O,
          k,
          F,
          wA
        ) : process.env.NODE_ENV !== "production" && S("Invalid VNode type:", Q, `(${typeof Q})`);
    }
    U != null && b && Ko(U, f && f.ref, N, g || f, !g);
  }, _ = (f, g, m, E) => {
    if (f == null)
      n(
        g.el = s(g.children),
        m,
        E
      );
    else {
      const b = g.el = f.el;
      g.children !== f.children && c(b, g.children);
    }
  }, M = (f, g, m, E) => {
    f == null ? n(
      g.el = a(g.children || ""),
      m,
      E
    ) : g.el = f.el;
  }, v = (f, g, m, E) => {
    [f.el, f.anchor] = h(
      f.children,
      g,
      m,
      E,
      f.el,
      f.anchor
    );
  }, P = (f, g, m, E) => {
    if (g.children !== f.children) {
      const b = d(f.anchor);
      T(f), [g.el, g.anchor] = h(
        g.children,
        m,
        b,
        E
      );
    } else
      g.el = f.el, g.anchor = f.anchor;
  }, $ = ({ el: f, anchor: g }, m, E) => {
    let b;
    for (; f && f !== g; )
      b = d(f), n(f, m, E), f = b;
    n(g, m, E);
  }, T = ({ el: f, anchor: g }) => {
    let m;
    for (; f && f !== g; )
      m = d(f), i(f), f = m;
    i(g);
  }, rA = (f, g, m, E, b, N, O, k, F) => {
    O = O || g.type === "svg", f == null ? L(
      g,
      m,
      E,
      b,
      N,
      O,
      k,
      F
    ) : C(
      f,
      g,
      b,
      N,
      O,
      k,
      F
    );
  }, L = (f, g, m, E, b, N, O, k) => {
    let F, Q;
    const { type: U, props: R, shapeFlag: Y, transition: Z, dirs: sA } = f;
    if (F = f.el = r(
      f.type,
      N,
      R && R.is,
      R
    ), Y & 8 ? l(F, f.children) : Y & 16 && x(
      f.children,
      F,
      null,
      E,
      b,
      N && U !== "foreignObject",
      O,
      k
    ), sA && Ze(f, null, E, "created"), z(F, f, f.scopeId, O, E), R) {
      for (const gA in R)
        gA !== "value" && !oi(gA) && o(
          F,
          gA,
          null,
          R[gA],
          N,
          f.children,
          E,
          b,
          H
        );
      "value" in R && o(F, "value", null, R.value), (Q = R.onVnodeBeforeMount) && pe(Q, E, f);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(F, "__vnode", {
      value: f,
      enumerable: !1
    }), Object.defineProperty(F, "__vueParentComponent", {
      value: E,
      enumerable: !1
    })), sA && Ze(f, null, E, "beforeMount");
    const mA = (!b || b && !b.pendingBranch) && Z && !Z.persisted;
    mA && Z.beforeEnter(F), n(F, g, m), ((Q = R && R.onVnodeMounted) || mA || sA) && zA(() => {
      Q && pe(Q, E, f), mA && Z.enter(F), sA && Ze(f, null, E, "mounted");
    }, b);
  }, z = (f, g, m, E, b) => {
    if (m && p(f, m), E)
      for (let N = 0; N < E.length; N++)
        p(f, E[N]);
    if (b) {
      let N = b.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = Tc(N.children) || N), g === N) {
        const O = b.vnode;
        z(
          f,
          O,
          O.scopeId,
          O.slotScopeIds,
          b.parent
        );
      }
    }
  }, x = (f, g, m, E, b, N, O, k, F = 0) => {
    for (let Q = F; Q < f.length; Q++) {
      const U = f[Q] = k ? Re(f[Q]) : se(f[Q]);
      y(
        null,
        U,
        g,
        m,
        E,
        b,
        N,
        O,
        k
      );
    }
  }, C = (f, g, m, E, b, N, O) => {
    const k = g.el = f.el;
    let { patchFlag: F, dynamicChildren: Q, dirs: U } = g;
    F |= f.patchFlag & 16;
    const R = f.props || hA, Y = g.props || hA;
    let Z;
    m && At(m, !1), (Z = Y.onVnodeBeforeUpdate) && pe(Z, m, g, f), U && Ze(g, f, m, "beforeUpdate"), m && At(m, !0), process.env.NODE_ENV !== "production" && dt && (F = 0, O = !1, Q = null);
    const sA = b && g.type !== "foreignObject";
    if (Q ? (G(
      f.dynamicChildren,
      Q,
      k,
      m,
      E,
      sA,
      N
    ), process.env.NODE_ENV !== "production" && li(f, g)) : O || _A(
      f,
      g,
      k,
      null,
      m,
      E,
      sA,
      N,
      !1
    ), F > 0) {
      if (F & 16)
        I(
          k,
          g,
          R,
          Y,
          m,
          E,
          b
        );
      else if (F & 2 && R.class !== Y.class && o(k, "class", null, Y.class, b), F & 4 && o(k, "style", R.style, Y.style, b), F & 8) {
        const mA = g.dynamicProps;
        for (let gA = 0; gA < mA.length; gA++) {
          const CA = mA[gA], te = R[CA], Ct = Y[CA];
          (Ct !== te || CA === "value") && o(
            k,
            CA,
            te,
            Ct,
            b,
            f.children,
            m,
            E,
            H
          );
        }
      }
      F & 1 && f.children !== g.children && l(k, g.children);
    } else
      !O && Q == null && I(
        k,
        g,
        R,
        Y,
        m,
        E,
        b
      );
    ((Z = Y.onVnodeUpdated) || U) && zA(() => {
      Z && pe(Z, m, g, f), U && Ze(g, f, m, "updated");
    }, E);
  }, G = (f, g, m, E, b, N, O) => {
    for (let k = 0; k < g.length; k++) {
      const F = f[k], Q = g[k], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === QA || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !it(F, Q) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      y(
        F,
        Q,
        U,
        null,
        E,
        b,
        N,
        O,
        !0
      );
    }
  }, I = (f, g, m, E, b, N, O) => {
    if (m !== E) {
      if (m !== hA)
        for (const k in m)
          !oi(k) && !(k in E) && o(
            f,
            k,
            m[k],
            null,
            O,
            g.children,
            b,
            N,
            H
          );
      for (const k in E) {
        if (oi(k))
          continue;
        const F = E[k], Q = m[k];
        F !== Q && k !== "value" && o(
          f,
          k,
          Q,
          F,
          O,
          g.children,
          b,
          N,
          H
        );
      }
      "value" in E && o(f, "value", m.value, E.value);
    }
  }, AA = (f, g, m, E, b, N, O, k, F) => {
    const Q = g.el = f ? f.el : s(""), U = g.anchor = f ? f.anchor : s("");
    let { patchFlag: R, dynamicChildren: Y, slotScopeIds: Z } = g;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (dt || R & 2048) && (R = 0, F = !1, Y = null), Z && (k = k ? k.concat(Z) : Z), f == null ? (n(Q, m, E), n(U, m, E), x(
      g.children,
      m,
      U,
      b,
      N,
      O,
      k,
      F
    )) : R > 0 && R & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (G(
      f.dynamicChildren,
      Y,
      m,
      b,
      N,
      O,
      k
    ), process.env.NODE_ENV !== "production" ? li(f, g) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (g.key != null || b && g === b.subTree) && li(
        f,
        g,
        !0
        /* shallow */
      )
    )) : _A(
      f,
      g,
      m,
      U,
      b,
      N,
      O,
      k,
      F
    );
  }, pA = (f, g, m, E, b, N, O, k, F) => {
    g.slotScopeIds = k, f == null ? g.shapeFlag & 512 ? b.ctx.activate(
      g,
      m,
      E,
      O,
      F
    ) : PA(
      g,
      m,
      E,
      b,
      N,
      O,
      F
    ) : iA(f, g, F);
  }, PA = (f, g, m, E, b, N, O) => {
    const k = f.component = Gf(
      f,
      E,
      b
    );
    if (process.env.NODE_ENV !== "production" && k.type.__hmrId && _d(k), process.env.NODE_ENV !== "production" && (si(f), Se(k, "mount")), Xn(f) && (k.ctx.renderer = wA), process.env.NODE_ENV !== "production" && Se(k, "init"), Kf(k), process.env.NODE_ENV !== "production" && Ie(k, "init"), k.asyncDep) {
      if (b && b.registerDep(k, D), !f.el) {
        const F = k.subTree = EA(kA);
        M(null, F, g, m);
      }
      return;
    }
    D(
      k,
      f,
      g,
      m,
      b,
      N,
      O
    ), process.env.NODE_ENV !== "production" && (ai(), Ie(k, "mount"));
  }, iA = (f, g, m) => {
    const E = g.component = f.component;
    if (Yd(f, g, m))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && si(g), J(E, g, m), process.env.NODE_ENV !== "production" && ai();
        return;
      } else
        E.next = g, Id(E.update), E.update();
    else
      g.el = f.el, E.vnode = g;
  }, D = (f, g, m, E, b, N, O) => {
    const k = () => {
      if (f.isMounted) {
        let { next: U, bu: R, u: Y, parent: Z, vnode: sA } = f, mA = U, gA;
        process.env.NODE_ENV !== "production" && si(U || f.vnode), At(f, !1), U ? (U.el = sA.el, J(f, U, O)) : U = sA, R && _t(R), (gA = U.props && U.props.onVnodeBeforeUpdate) && pe(gA, Z, U, sA), At(f, !0), process.env.NODE_ENV !== "production" && Se(f, "render");
        const CA = ho(f);
        process.env.NODE_ENV !== "production" && Ie(f, "render");
        const te = f.subTree;
        f.subTree = CA, process.env.NODE_ENV !== "production" && Se(f, "patch"), y(
          te,
          CA,
          // parent may have changed if it's in a teleport
          u(te.el),
          // anchor may have changed if it's in a fragment
          V(te),
          f,
          b,
          N
        ), process.env.NODE_ENV !== "production" && Ie(f, "patch"), U.el = CA.el, mA === null && Kd(f, CA.el), Y && zA(Y, b), (gA = U.props && U.props.onVnodeUpdated) && zA(
          () => pe(gA, Z, U, sA),
          b
        ), process.env.NODE_ENV !== "production" && Mc(f), process.env.NODE_ENV !== "production" && ai();
      } else {
        let U;
        const { el: R, props: Y } = g, { bm: Z, m: sA, parent: mA } = f, gA = vn(g);
        if (At(f, !1), Z && _t(Z), !gA && (U = Y && Y.onVnodeBeforeMount) && pe(U, mA, g), At(f, !0), R && eA) {
          const CA = () => {
            process.env.NODE_ENV !== "production" && Se(f, "render"), f.subTree = ho(f), process.env.NODE_ENV !== "production" && Ie(f, "render"), process.env.NODE_ENV !== "production" && Se(f, "hydrate"), eA(
              R,
              f.subTree,
              f,
              b,
              null
            ), process.env.NODE_ENV !== "production" && Ie(f, "hydrate");
          };
          gA ? g.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !f.isUnmounted && CA()
          ) : CA();
        } else {
          process.env.NODE_ENV !== "production" && Se(f, "render");
          const CA = f.subTree = ho(f);
          process.env.NODE_ENV !== "production" && Ie(f, "render"), process.env.NODE_ENV !== "production" && Se(f, "patch"), y(
            null,
            CA,
            m,
            E,
            f,
            b,
            N
          ), process.env.NODE_ENV !== "production" && Ie(f, "patch"), g.el = CA.el;
        }
        if (sA && zA(sA, b), !gA && (U = Y && Y.onVnodeMounted)) {
          const CA = g;
          zA(
            () => pe(U, mA, CA),
            b
          );
        }
        (g.shapeFlag & 256 || mA && vn(mA.vnode) && mA.vnode.shapeFlag & 256) && f.a && zA(f.a, b), f.isMounted = !0, process.env.NODE_ENV !== "production" && Od(f), g = m = E = null;
      }
    }, F = f.effect = new xr(
      k,
      () => Ji(Q),
      f.scope
      // track it in component's effect scope
    ), Q = f.update = () => F.run();
    Q.id = f.uid, At(f, !0), process.env.NODE_ENV !== "production" && (F.onTrack = f.rtc ? (U) => _t(f.rtc, U) : void 0, F.onTrigger = f.rtg ? (U) => _t(f.rtg, U) : void 0, Q.ownerInstance = f), Q();
  }, J = (f, g, m) => {
    g.component = f;
    const E = f.vnode.props;
    f.vnode = g, f.next = null, Sf(f, g.props, E, m), Hf(f, g.children, m), yt(), ws(), Bt();
  }, _A = (f, g, m, E, b, N, O, k, F = !1) => {
    const Q = f && f.children, U = f ? f.shapeFlag : 0, R = g.children, { patchFlag: Y, shapeFlag: Z } = g;
    if (Y > 0) {
      if (Y & 128) {
        MA(
          Q,
          R,
          m,
          E,
          b,
          N,
          O,
          k,
          F
        );
        return;
      } else if (Y & 256) {
        JA(
          Q,
          R,
          m,
          E,
          b,
          N,
          O,
          k,
          F
        );
        return;
      }
    }
    Z & 8 ? (U & 16 && H(Q, b, N), R !== Q && l(m, R)) : U & 16 ? Z & 16 ? MA(
      Q,
      R,
      m,
      E,
      b,
      N,
      O,
      k,
      F
    ) : H(Q, b, N, !0) : (U & 8 && l(m, ""), Z & 16 && x(
      R,
      m,
      E,
      b,
      N,
      O,
      k,
      F
    ));
  }, JA = (f, g, m, E, b, N, O, k, F) => {
    f = f || Ot, g = g || Ot;
    const Q = f.length, U = g.length, R = Math.min(Q, U);
    let Y;
    for (Y = 0; Y < R; Y++) {
      const Z = g[Y] = F ? Re(g[Y]) : se(g[Y]);
      y(
        f[Y],
        Z,
        m,
        null,
        b,
        N,
        O,
        k,
        F
      );
    }
    Q > U ? H(
      f,
      b,
      N,
      !0,
      !1,
      R
    ) : x(
      g,
      m,
      E,
      b,
      N,
      O,
      k,
      F,
      R
    );
  }, MA = (f, g, m, E, b, N, O, k, F) => {
    let Q = 0;
    const U = g.length;
    let R = f.length - 1, Y = U - 1;
    for (; Q <= R && Q <= Y; ) {
      const Z = f[Q], sA = g[Q] = F ? Re(g[Q]) : se(g[Q]);
      if (it(Z, sA))
        y(
          Z,
          sA,
          m,
          null,
          b,
          N,
          O,
          k,
          F
        );
      else
        break;
      Q++;
    }
    for (; Q <= R && Q <= Y; ) {
      const Z = f[R], sA = g[Y] = F ? Re(g[Y]) : se(g[Y]);
      if (it(Z, sA))
        y(
          Z,
          sA,
          m,
          null,
          b,
          N,
          O,
          k,
          F
        );
      else
        break;
      R--, Y--;
    }
    if (Q > R) {
      if (Q <= Y) {
        const Z = Y + 1, sA = Z < U ? g[Z].el : E;
        for (; Q <= Y; )
          y(
            null,
            g[Q] = F ? Re(g[Q]) : se(g[Q]),
            m,
            sA,
            b,
            N,
            O,
            k,
            F
          ), Q++;
      }
    } else if (Q > Y)
      for (; Q <= R; )
        B(f[Q], b, N, !0), Q++;
    else {
      const Z = Q, sA = Q, mA = /* @__PURE__ */ new Map();
      for (Q = sA; Q <= Y; Q++) {
        const OA = g[Q] = F ? Re(g[Q]) : se(g[Q]);
        OA.key != null && (process.env.NODE_ENV !== "production" && mA.has(OA.key) && S(
          "Duplicate keys found during update:",
          JSON.stringify(OA.key),
          "Make sure keys are unique."
        ), mA.set(OA.key, Q));
      }
      let gA, CA = 0;
      const te = Y - sA + 1;
      let Ct = !1, as = 0;
      const Zt = new Array(te);
      for (Q = 0; Q < te; Q++)
        Zt[Q] = 0;
      for (Q = Z; Q <= R; Q++) {
        const OA = f[Q];
        if (CA >= te) {
          B(OA, b, N, !0);
          continue;
        }
        let fe;
        if (OA.key != null)
          fe = mA.get(OA.key);
        else
          for (gA = sA; gA <= Y; gA++)
            if (Zt[gA - sA] === 0 && it(OA, g[gA])) {
              fe = gA;
              break;
            }
        fe === void 0 ? B(OA, b, N, !0) : (Zt[fe - sA] = Q + 1, fe >= as ? as = fe : Ct = !0, y(
          OA,
          g[fe],
          m,
          null,
          b,
          N,
          O,
          k,
          F
        ), CA++);
      }
      const cs = Ct ? zf(Zt) : Ot;
      for (gA = cs.length - 1, Q = te - 1; Q >= 0; Q--) {
        const OA = sA + Q, fe = g[OA], ls = OA + 1 < U ? g[OA + 1].el : E;
        Zt[Q] === 0 ? y(
          null,
          fe,
          m,
          ls,
          b,
          N,
          O,
          k,
          F
        ) : Ct && (gA < 0 || Q !== cs[gA] ? qA(fe, m, ls, 2) : gA--);
      }
    }
  }, qA = (f, g, m, E, b = null) => {
    const { el: N, type: O, transition: k, children: F, shapeFlag: Q } = f;
    if (Q & 6) {
      qA(f.component.subTree, g, m, E);
      return;
    }
    if (Q & 128) {
      f.suspense.move(g, m, E);
      return;
    }
    if (Q & 64) {
      O.move(f, g, m, wA);
      return;
    }
    if (O === QA) {
      n(N, g, m);
      for (let R = 0; R < F.length; R++)
        qA(F[R], g, m, E);
      n(f.anchor, g, m);
      return;
    }
    if (O === ui) {
      $(f, g, m);
      return;
    }
    if (E !== 2 && Q & 1 && k)
      if (E === 0)
        k.beforeEnter(N), n(N, g, m), zA(() => k.enter(N), b);
      else {
        const { leave: R, delayLeave: Y, afterLeave: Z } = k, sA = () => n(N, g, m), mA = () => {
          R(N, () => {
            sA(), Z && Z();
          });
        };
        Y ? Y(N, sA, mA) : mA();
      }
    else
      n(N, g, m);
  }, B = (f, g, m, E = !1, b = !1) => {
    const {
      type: N,
      props: O,
      ref: k,
      children: F,
      dynamicChildren: Q,
      shapeFlag: U,
      patchFlag: R,
      dirs: Y
    } = f;
    if (k != null && Ko(k, null, m, f, !0), U & 256) {
      g.ctx.deactivate(f);
      return;
    }
    const Z = U & 1 && Y, sA = !vn(f);
    let mA;
    if (sA && (mA = O && O.onVnodeBeforeUnmount) && pe(mA, g, f), U & 6)
      X(f.component, m, E);
    else {
      if (U & 128) {
        f.suspense.unmount(m, E);
        return;
      }
      Z && Ze(f, null, g, "beforeUnmount"), U & 64 ? f.type.remove(
        f,
        g,
        m,
        b,
        wA,
        E
      ) : Q && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== QA || R > 0 && R & 64) ? H(
        Q,
        g,
        m,
        !1,
        !0
      ) : (N === QA && R & 384 || !b && U & 16) && H(F, g, m), E && fA(f);
    }
    (sA && (mA = O && O.onVnodeUnmounted) || Z) && zA(() => {
      mA && pe(mA, g, f), Z && Ze(f, null, g, "unmounted");
    }, m);
  }, fA = (f) => {
    const { type: g, el: m, anchor: E, transition: b } = f;
    if (g === QA) {
      process.env.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && b && !b.persisted ? f.children.forEach((O) => {
        O.type === kA ? i(O.el) : fA(O);
      }) : w(m, E);
      return;
    }
    if (g === ui) {
      T(f);
      return;
    }
    const N = () => {
      i(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (f.shapeFlag & 1 && b && !b.persisted) {
      const { leave: O, delayLeave: k } = b, F = () => O(m, N);
      k ? k(f.el, N, F) : F();
    } else
      N();
  }, w = (f, g) => {
    let m;
    for (; f !== g; )
      m = d(f), i(f), f = m;
    i(g);
  }, X = (f, g, m) => {
    process.env.NODE_ENV !== "production" && f.type.__hmrId && Md(f);
    const { bum: E, scope: b, update: N, subTree: O, um: k } = f;
    E && _t(E), b.stop(), N && (N.active = !1, B(O, f, g, m)), k && zA(k, g), zA(() => {
      f.isUnmounted = !0;
    }, g), g && g.pendingBranch && !g.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve()), process.env.NODE_ENV !== "production" && Xd(f);
  }, H = (f, g, m, E = !1, b = !1, N = 0) => {
    for (let O = N; O < f.length; O++)
      B(f[O], g, m, E, b);
  }, V = (f) => f.shapeFlag & 6 ? V(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : d(f.anchor || f.el), cA = (f, g, m) => {
    f == null ? g._vnode && B(g._vnode, null, null, !0) : y(g._vnode || null, f, g, null, null, null, m), ws(), Sc(), g._vnode = f;
  }, wA = {
    p: y,
    um: B,
    m: qA,
    r: fA,
    mt: PA,
    mc: x,
    pc: _A,
    pbc: G,
    n: V,
    o: A
  };
  let nA, eA;
  return e && ([nA, eA] = e(
    wA
  )), {
    render: cA,
    hydrate: nA,
    createApp: Cf(cA, nA)
  };
}
function At({ effect: A, update: e }, t) {
  A.allowRecurse = e.allowRecurse = t;
}
function li(A, e, t = !1) {
  const n = A.children, i = e.children;
  if (j(n) && j(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Re(i[o]), s.el = r.el), t || li(r, s)), s.type === zn && (s.el = r.el), process.env.NODE_ENV !== "production" && s.type === kA && !s.el && (s.el = r.el);
    }
}
function zf(A) {
  const e = A.slice(), t = [0];
  let n, i, o, r, s;
  const a = A.length;
  for (n = 0; n < a; n++) {
    const c = A[n];
    if (c !== 0) {
      if (i = t[t.length - 1], A[i] < c) {
        e[n] = i, t.push(n);
        continue;
      }
      for (o = 0, r = t.length - 1; o < r; )
        s = o + r >> 1, A[t[s]] < c ? o = s + 1 : r = s;
      c < A[t[o]] && (o > 0 && (e[n] = t[o - 1]), t[o] = n);
    }
  }
  for (o = t.length, r = t[o - 1]; o-- > 0; )
    t[o] = r, r = e[r];
  return t;
}
const Rf = (A) => A.__isTeleport, QA = Symbol.for("v-fgt"), zn = Symbol.for("v-txt"), kA = Symbol.for("v-cmt"), ui = Symbol.for("v-stc"), wn = [];
let ce = null;
function tA(A = !1) {
  wn.push(ce = A ? null : []);
}
function Vf() {
  wn.pop(), ce = wn[wn.length - 1] || null;
}
let xn = 1;
function Ns(A) {
  xn += A;
}
function il(A) {
  return A.dynamicChildren = xn > 0 ? ce || Ot : null, Vf(), xn > 0 && ce && ce.push(A), A;
}
function dA(A, e, t, n, i, o) {
  return il(
    K(
      A,
      e,
      t,
      n,
      i,
      o,
      !0
      /* isBlock */
    )
  );
}
function ye(A, e, t, n, i) {
  return il(
    EA(
      A,
      e,
      t,
      n,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function jt(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function it(A, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && Mt.has(e.type) ? (A.shapeFlag &= -257, e.shapeFlag &= -513, !1) : A.type === e.type && A.key === e.key;
}
const Uf = (...A) => rl(
  ...A
), to = "__vInternal", ol = ({ key: A }) => A ?? null, di = ({
  ref: A,
  ref_key: e,
  ref_for: t
}) => (typeof A == "number" && (A = "" + A), A != null ? BA(A) || yA(A) || q(A) ? { i: SA, r: A, k: e, f: !!t } : A : null);
function K(A, e = null, t = null, n = 0, i = null, o = A === QA ? 0 : 1, r = !1, s = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: e,
    key: e && ol(e),
    ref: e && di(e),
    scopeId: Wi,
    slotScopeIds: null,
    children: t,
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: SA
  };
  return s ? (Rr(a, t), o & 128 && A.normalize(a)) : t && (a.shapeFlag |= BA(t) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), xn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ce.push(a), a;
}
const EA = process.env.NODE_ENV !== "production" ? Uf : rl;
function rl(A, e = null, t = null, n = 0, i = null, o = !1) {
  if ((!A || A === $c) && (process.env.NODE_ENV !== "production" && !A && S(`Invalid vnode type when creating vnode: ${A}.`), A = kA), jt(A)) {
    const s = Ee(
      A,
      e,
      !0
      /* mergeRef: true */
    );
    return t && Rr(s, t), xn > 0 && !o && ce && (s.shapeFlag & 6 ? ce[ce.indexOf(A)] = s : ce.push(s)), s.patchFlag |= -2, s;
  }
  if (ul(A) && (A = A.__vccOpts), e) {
    e = ie(e);
    let { class: s, style: a } = e;
    s && !BA(s) && (e.class = ve(s)), lA(a) && (Ci(a) && !j(a) && (a = vA({}, a)), e.style = Ui(a));
  }
  const r = BA(A) ? 1 : Jd(A) ? 128 : Rf(A) ? 64 : lA(A) ? 4 : q(A) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && Ci(A) && (A = W(A), S(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    A
  )), K(
    A,
    e,
    t,
    n,
    i,
    r,
    o,
    !0
  );
}
function ie(A) {
  return A ? Ci(A) || to in A ? vA({}, A) : A : null;
}
function Ee(A, e, t = !1) {
  const { props: n, ref: i, patchFlag: o, children: r } = A, s = e ? _i(n || {}, e) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: s,
    key: s && ol(s),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && i ? j(i) ? i.concat(di(e)) : [i, di(e)] : di(e)
    ) : i,
    scopeId: A.scopeId,
    slotScopeIds: A.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && j(r) ? r.map(sl) : r,
    target: A.target,
    targetAnchor: A.targetAnchor,
    staticCount: A.staticCount,
    shapeFlag: A.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && A.type !== QA ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: A.dynamicProps,
    dynamicChildren: A.dynamicChildren,
    appContext: A.appContext,
    dirs: A.dirs,
    transition: A.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: A.component,
    suspense: A.suspense,
    ssContent: A.ssContent && Ee(A.ssContent),
    ssFallback: A.ssFallback && Ee(A.ssFallback),
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce
  };
}
function sl(A) {
  const e = Ee(A);
  return j(A.children) && (e.children = A.children.map(sl)), e;
}
function $t(A = " ", e = 0) {
  return EA(zn, null, A, e);
}
function Ge(A = "", e = !1) {
  return e ? (tA(), ye(kA, null, A)) : EA(kA, null, A);
}
function se(A) {
  return A == null || typeof A == "boolean" ? EA(kA) : j(A) ? EA(
    QA,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : typeof A == "object" ? Re(A) : EA(zn, null, String(A));
}
function Re(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : Ee(A);
}
function Rr(A, e) {
  let t = 0;
  const { shapeFlag: n } = A;
  if (e == null)
    e = null;
  else if (j(e))
    t = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Rr(A, i()), i._c && (i._d = !0));
      return;
    } else {
      t = 32;
      const i = e._;
      !i && !(to in e) ? e._ctx = SA : i === 3 && SA && (SA.slots._ === 1 ? e._ = 1 : (e._ = 2, A.patchFlag |= 1024));
    }
  else
    q(e) ? (e = { default: e, _ctx: SA }, t = 32) : (e = String(e), n & 64 ? (t = 16, e = [$t(e)]) : t = 8);
  A.children = e, A.shapeFlag |= t;
}
function _i(...A) {
  const e = {};
  for (let t = 0; t < A.length; t++) {
    const n = A[t];
    for (const i in n)
      if (i === "class")
        e.class !== n.class && (e.class = ve([e.class, n.class]));
      else if (i === "style")
        e.style = Ui([e.style, n.style]);
      else if (On(i)) {
        const o = e[i], r = n[i];
        r && o !== r && !(j(o) && o.includes(r)) && (e[i] = o ? [].concat(o, r) : r);
      } else
        i !== "" && (e[i] = n[i]);
  }
  return e;
}
function pe(A, e, t, n = null) {
  ee(A, e, 7, [
    t,
    n
  ]);
}
const jf = qc();
let $f = 0;
function Gf(A, e, t) {
  const n = A.type, i = (e ? e.appContext : A.appContext) || jf, o = {
    uid: $f++,
    vnode: A,
    type: n,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new sc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zc(n, i),
    emitsOptions: Fc(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: hA,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: hA,
    data: hA,
    props: hA,
    attrs: hA,
    slots: hA,
    refs: hA,
    setupState: hA,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
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
  return process.env.NODE_ENV !== "production" ? o.ctx = hf(o) : o.ctx = { _: o }, o.root = e ? e.root : o, o.emit = Ud.bind(null, o), A.ce && A.ce(o), o;
}
let xA = null;
const Wt = () => xA || SA;
let Vr, Qt, Fs = "__VUE_INSTANCE_SETTERS__";
(Qt = Pi()[Fs]) || (Qt = Pi()[Fs] = []), Qt.push((A) => xA = A), Vr = (A) => {
  Qt.length > 1 ? Qt.forEach((e) => e(A)) : Qt[0](A);
};
const Gt = (A) => {
  Vr(A), A.scope.on();
}, pt = () => {
  xA && xA.scope.off(), Vr(null);
}, Yf = /* @__PURE__ */ We("slot,component");
function Jo(A, e) {
  const t = e.isNativeTag || ec;
  (Yf(A) || t(A)) && S(
    "Do not use built-in or reserved HTML elements as component id: " + A
  );
}
function al(A) {
  return A.vnode.shapeFlag & 4;
}
let Sn = !1;
function Kf(A, e = !1) {
  Sn = e;
  const { props: t, children: n } = A.vnode, i = al(A);
  Qf(A, t, i, e), Tf(A, n);
  const o = i ? Jf(A, e) : void 0;
  return Sn = !1, o;
}
function Jf(A, e) {
  var t;
  const n = A.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Jo(n.name, A.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        Jo(o[r], A.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        Lc(o[r]);
    }
    n.compilerOptions && cl() && S(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = re(new Proxy(A.ctx, Kc)), process.env.NODE_ENV !== "production" && mf(A);
  const { setup: i } = n;
  if (i) {
    const o = A.setupContext = i.length > 1 ? Wf(A) : null;
    Gt(A), yt();
    const r = _e(
      i,
      A,
      0,
      [process.env.NODE_ENV !== "production" ? an(A.props) : A.props, o]
    );
    if (Bt(), pt(), Er(r)) {
      if (r.then(pt, pt), e)
        return r.then((s) => {
          Ts(A, s, e);
        }).catch((s) => {
          Ki(s, A, 0);
        });
      if (A.asyncDep = r, process.env.NODE_ENV !== "production" && !A.suspense) {
        const s = (t = n.name) != null ? t : "Anonymous";
        S(
          `Component <${s}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ts(A, r, e);
  } else
    ll(A, e);
}
function Ts(A, e, t) {
  q(e) ? A.type.__ssrInlineRender ? A.ssrRender = e : A.render = e : lA(e) ? (process.env.NODE_ENV !== "production" && jt(e) && S(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (A.devtoolsRawSetupState = e), A.setupState = bc(e), process.env.NODE_ENV !== "production" && vf(A)) : process.env.NODE_ENV !== "production" && e !== void 0 && S(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), ll(A, t);
}
let qo;
const cl = () => !qo;
function ll(A, e, t) {
  const n = A.type;
  if (!A.render) {
    if (!e && qo && !n.render) {
      const i = n.template || Xr(A).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Se(A, "compile");
        const { isCustomElement: o, compilerOptions: r } = A.appContext.config, { delimiters: s, compilerOptions: a } = n, c = vA(
          vA(
            {
              isCustomElement: o,
              delimiters: s
            },
            r
          ),
          a
        );
        n.render = qo(i, c), process.env.NODE_ENV !== "production" && Ie(A, "compile");
      }
    }
    A.render = n.render || NA;
  }
  Gt(A), yt(), yf(A), Bt(), pt(), process.env.NODE_ENV !== "production" && !n.render && A.render === NA && !e && (n.template ? S(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : S("Component is missing template or render function."));
}
function Hs(A) {
  return A.attrsProxy || (A.attrsProxy = new Proxy(
    A.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(e, t) {
        return xi(), FA(A, "get", "$attrs"), e[t];
      },
      set() {
        return S("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return S("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(e, t) {
        return FA(A, "get", "$attrs"), e[t];
      }
    }
  ));
}
function qf(A) {
  return A.slotsProxy || (A.slotsProxy = new Proxy(A.slots, {
    get(e, t) {
      return FA(A, "get", "$slots"), e[t];
    }
  }));
}
function Wf(A) {
  const e = (t) => {
    if (process.env.NODE_ENV !== "production" && (A.exposed && S("expose() should be called only once per setup()."), t != null)) {
      let n = typeof t;
      n === "object" && (j(t) ? n = "array" : yA(t) && (n = "ref")), n !== "object" && S(
        `expose() should be passed a plain object, received ${n}.`
      );
    }
    A.exposed = t || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Hs(A);
    },
    get slots() {
      return qf(A);
    },
    get emit() {
      return (t, ...n) => A.emit(t, ...n);
    },
    expose: e
  }) : {
    get attrs() {
      return Hs(A);
    },
    slots: A.slots,
    emit: A.emit,
    expose: e
  };
}
function no(A) {
  if (A.exposed)
    return A.exposeProxy || (A.exposeProxy = new Proxy(bc(re(A.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in ft)
          return ft[t](A);
      },
      has(e, t) {
        return t in e || t in ft;
      }
    }));
}
const Zf = /(?:^|[-_])(\w)/g, Ap = (A) => A.replace(Zf, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Ur(A, e = !0) {
  return q(A) ? A.displayName || A.name : A.name || e && A.__name;
}
function io(A, e, t = !1) {
  let n = Ur(e);
  if (!n && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (n = i[1]);
  }
  if (!n && A && A.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === e)
          return r;
    };
    n = i(
      A.components || A.parent.type.components
    ) || i(A.appContext.components);
  }
  return n ? Ap(n) : t ? "App" : "Anonymous";
}
function ul(A) {
  return q(A) && "__vccOpts" in A;
}
const bA = (A, e) => Bd(A, e, Sn);
function jr(A, e, t) {
  const n = arguments.length;
  return n === 2 ? lA(e) && !j(e) ? jt(e) ? EA(A, null, [e]) : EA(A, e) : EA(A, null, e) : (n > 3 ? t = Array.prototype.slice.call(arguments, 2) : n === 3 && jt(t) && (t = [t]), EA(A, e, t));
}
const ep = Symbol.for("v-scx"), tp = () => {
  {
    const A = ue(ep);
    return A || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), A;
  }
};
function yo(A) {
  return !!(A && A.__v_isShallow);
}
function np() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const A = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, n = { style: "color:#9d288c" }, i = {
    header(u) {
      return lA(u) ? u.__isVue ? ["div", A, "VueInstance"] : yA(u) ? [
        "div",
        {},
        ["span", A, l(u)],
        "<",
        s(u.value),
        ">"
      ] : we(u) ? [
        "div",
        {},
        ["span", A, yo(u) ? "ShallowReactive" : "Reactive"],
        "<",
        s(u),
        `>${Je(u) ? " (readonly)" : ""}`
      ] : Je(u) ? [
        "div",
        {},
        ["span", A, yo(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        s(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...o(u.$)
        ];
    }
  };
  function o(u) {
    const d = [];
    u.type.props && u.props && d.push(r("props", W(u.props))), u.setupState !== hA && d.push(r("setup", u.setupState)), u.data !== hA && d.push(r("data", W(u.data)));
    const p = a(u, "computed");
    p && d.push(r("computed", p));
    const h = a(u, "inject");
    return h && d.push(r("injected", h)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: n.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), d;
  }
  function r(u, d) {
    return d = vA({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((p) => [
          "div",
          {},
          ["span", n, p + ": "],
          s(d[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function s(u, d = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", t, JSON.stringify(u)] : typeof u == "boolean" ? ["span", n, u] : lA(u) ? ["object", { object: d ? W(u) : u }] : ["span", t, String(u)];
  }
  function a(u, d) {
    const p = u.type;
    if (q(p))
      return;
    const h = {};
    for (const y in u.ctx)
      c(p, y, d) && (h[y] = u.ctx[y]);
    return h;
  }
  function c(u, d, p) {
    const h = u[p];
    if (j(h) && h.includes(d) || lA(h) && d in h || u.extends && c(u.extends, d, p) || u.mixins && u.mixins.some((y) => c(y, d, p)))
      return !0;
  }
  function l(u) {
    return yo(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Os = "3.3.4", ip = "http://www.w3.org/2000/svg", ot = typeof document < "u" ? document : null, Ls = ot && /* @__PURE__ */ ot.createElement("template"), op = {
  insert: (A, e, t) => {
    e.insertBefore(A, t || null);
  },
  remove: (A) => {
    const e = A.parentNode;
    e && e.removeChild(A);
  },
  createElement: (A, e, t, n) => {
    const i = e ? ot.createElementNS(ip, A) : ot.createElement(A, t ? { is: t } : void 0);
    return A === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (A) => ot.createTextNode(A),
  createComment: (A) => ot.createComment(A),
  setText: (A, e) => {
    A.nodeValue = e;
  },
  setElementText: (A, e) => {
    A.textContent = e;
  },
  parentNode: (A) => A.parentNode,
  nextSibling: (A) => A.nextSibling,
  querySelector: (A) => ot.querySelector(A),
  setScopeId(A, e) {
    A.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(A, e, t, n, i, o) {
    const r = t ? t.previousSibling : e.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), t), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Ls.innerHTML = n ? `<svg>${A}</svg>` : A;
      const s = Ls.content;
      if (n) {
        const a = s.firstChild;
        for (; a.firstChild; )
          s.appendChild(a.firstChild);
        s.removeChild(a);
      }
      e.insertBefore(s, t);
    }
    return [
      // first
      r ? r.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
};
function rp(A, e, t) {
  const n = A._vtc;
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? A.removeAttribute("class") : t ? A.setAttribute("class", e) : A.className = e;
}
function sp(A, e, t) {
  const n = A.style, i = BA(t);
  if (t && !i) {
    if (e && !BA(e))
      for (const o in e)
        t[o] == null && Wo(n, o, "");
    for (const o in t)
      Wo(n, o, t[o]);
  } else {
    const o = n.display;
    i ? e !== t && (n.cssText = t) : e && A.removeAttribute("style"), "_vod" in A && (n.display = o);
  }
}
const ap = /[^\\];\s*$/, Xs = /\s*!important$/;
function Wo(A, e, t) {
  if (j(t))
    t.forEach((n) => Wo(A, e, n));
  else if (t == null && (t = ""), process.env.NODE_ENV !== "production" && ap.test(t) && S(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    A.setProperty(e, t);
  else {
    const n = cp(A, e);
    Xs.test(t) ? A.setProperty(
      RA(n),
      t.replace(Xs, ""),
      "important"
    ) : A[n] = t;
  }
}
const zs = ["Webkit", "Moz", "ms"], Bo = {};
function cp(A, e) {
  const t = Bo[e];
  if (t)
    return t;
  let n = GA(e);
  if (n !== "filter" && n in A)
    return Bo[e] = n;
  n = ht(n);
  for (let i = 0; i < zs.length; i++) {
    const o = zs[i] + n;
    if (o in A)
      return Bo[e] = o;
  }
  return e;
}
const Rs = "http://www.w3.org/1999/xlink";
function lp(A, e, t, n, i) {
  if (n && e.startsWith("xlink:"))
    t == null ? A.removeAttributeNS(Rs, e.slice(6, e.length)) : A.setAttributeNS(Rs, e, t);
  else {
    const o = Tu(e);
    t == null || o && !oc(t) ? A.removeAttribute(e) : A.setAttribute(e, o ? "" : t);
  }
}
function up(A, e, t, n, i, o, r) {
  if (e === "innerHTML" || e === "textContent") {
    n && r(n, i, o), A[e] = t ?? "";
    return;
  }
  const s = A.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    A._value = t;
    const c = s === "OPTION" ? A.getAttribute("value") : A.value, l = t ?? "";
    c !== l && (A.value = l), t == null && A.removeAttribute(e);
    return;
  }
  let a = !1;
  if (t === "" || t == null) {
    const c = typeof A[e];
    c === "boolean" ? t = oc(t) : t == null && c === "string" ? (t = "", a = !0) : c === "number" && (t = 0, a = !0);
  }
  try {
    A[e] = t;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !a && S(
      `Failed setting prop "${e}" on <${s.toLowerCase()}>: value ${t} is invalid.`,
      c
    );
  }
  a && A.removeAttribute(e);
}
function Nt(A, e, t, n) {
  A.addEventListener(e, t, n);
}
function dp(A, e, t, n) {
  A.removeEventListener(e, t, n);
}
function fp(A, e, t, n, i = null) {
  const o = A._vei || (A._vei = {}), r = o[e];
  if (n && r)
    r.value = n;
  else {
    const [s, a] = pp(e);
    if (n) {
      const c = o[e] = mp(n, i);
      Nt(A, s, c, a);
    } else
      r && (dp(A, s, r, a), o[e] = void 0);
  }
}
const Vs = /(?:Once|Passive|Capture)$/;
function pp(A) {
  let e;
  if (Vs.test(A)) {
    e = {};
    let n;
    for (; n = A.match(Vs); )
      A = A.slice(0, A.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [A[2] === ":" ? A.slice(3) : RA(A.slice(2)), e];
}
let Po = 0;
const gp = /* @__PURE__ */ Promise.resolve(), hp = () => Po || (gp.then(() => Po = 0), Po = Date.now());
function mp(A, e) {
  const t = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= t.attached)
      return;
    ee(
      vp(n, t.value),
      e,
      5,
      [n]
    );
  };
  return t.value = A, t.attached = hp(), t;
}
function vp(A, e) {
  if (j(e)) {
    const t = A.stopImmediatePropagation;
    return A.stopImmediatePropagation = () => {
      t.call(A), A._stopped = !0;
    }, e.map((n) => (i) => !i._stopped && n && n(i));
  } else
    return e;
}
const Us = /^on[a-z]/, wp = (A, e, t, n, i = !1, o, r, s, a) => {
  e === "class" ? rp(A, n, i) : e === "style" ? sp(A, t, n) : On(e) ? yi(e) || fp(A, e, t, n, r) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : yp(A, e, n, i)) ? up(
    A,
    e,
    n,
    o,
    r,
    s,
    a
  ) : (e === "true-value" ? A._trueValue = n : e === "false-value" && (A._falseValue = n), lp(A, e, n, i));
};
function yp(A, e, t, n) {
  return n ? !!(e === "innerHTML" || e === "textContent" || e in A && Us.test(e) && q(t)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && A.tagName === "INPUT" || e === "type" && A.tagName === "TEXTAREA" || Us.test(e) && BA(t) ? !1 : e in A;
}
function Bp(A, e) {
  const t = Ao(A);
  class n extends $r {
    constructor(o) {
      super(t, o, e);
    }
  }
  return n.def = t, n;
}
const Pp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class $r extends Pp {
  constructor(e, t = {}, n) {
    super(), this._def = e, this._props = t, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && S(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Vt(() => {
      this._connected || (Zs(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    new MutationObserver((n) => {
      for (const i of n)
        this._setAttr(i.attributeName);
    }).observe(this, { attributes: !0 });
    const e = (n, i = !1) => {
      const { props: o, styles: r } = n;
      let s;
      if (o && !j(o))
        for (const a in o) {
          const c = o[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = No(this._props[a])), (s || (s = /* @__PURE__ */ Object.create(null)))[GA(a)] = !0);
        }
      this._numberProps = s, i && this._resolveProps(n), this._applyStyles(r), this._update();
    }, t = this._def.__asyncLoader;
    t ? t().then((n) => e(n, !0)) : e(this._def);
  }
  _resolveProps(e) {
    const { props: t } = e, n = j(t) ? t : Object.keys(t || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of n.map(GA))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o);
        }
      });
  }
  _setAttr(e) {
    let t = this.getAttribute(e);
    const n = GA(e);
    this._numberProps && this._numberProps[n] && (t = No(t)), this._setProp(n, t, !1);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, t, n = !0, i = !0) {
    t !== this._props[e] && (this._props[e] = t, i && this._instance && this._update(), n && (t === !0 ? this.setAttribute(RA(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(RA(e), t + "") : t || this.removeAttribute(RA(e))));
  }
  _update() {
    Zs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = EA(this._def, vA({}, this._props));
    return this._instance || (e.ce = (t) => {
      this._instance = t, t.isCE = !0, process.env.NODE_ENV !== "production" && (t.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this.shadowRoot.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      });
      const n = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: r
          })
        );
      };
      t.emit = (o, ...r) => {
        n(o, r), RA(o) !== o && n(RA(o), r);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof $r) {
          t.parent = i._instance, t.provides = i._instance.provides;
          break;
        }
    }), e;
  }
  _applyStyles(e) {
    e && e.forEach((t) => {
      const n = document.createElement("style");
      n.textContent = t, this.shadowRoot.appendChild(n), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(n);
    });
  }
}
const Te = "transition", en = "animation", oo = (A, { slots: e }) => jr(ef, bp(A), e);
oo.displayName = "Transition";
const dl = {
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
oo.props = /* @__PURE__ */ vA(
  {},
  Xc,
  dl
);
const et = (A, e = []) => {
  j(A) ? A.forEach((t) => t(...e)) : A && A(...e);
}, js = (A) => A ? j(A) ? A.some((e) => e.length > 1) : A.length > 1 : !1;
function bp(A) {
  const e = {};
  for (const I in A)
    I in dl || (e[I] = A[I]);
  if (A.css === !1)
    return e;
  const {
    name: t = "v",
    type: n,
    duration: i,
    enterFromClass: o = `${t}-enter-from`,
    enterActiveClass: r = `${t}-enter-active`,
    enterToClass: s = `${t}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: c = r,
    appearToClass: l = s,
    leaveFromClass: u = `${t}-leave-from`,
    leaveActiveClass: d = `${t}-leave-active`,
    leaveToClass: p = `${t}-leave-to`
  } = A, h = Ep(i), y = h && h[0], _ = h && h[1], {
    onBeforeEnter: M,
    onEnter: v,
    onEnterCancelled: P,
    onLeave: $,
    onLeaveCancelled: T,
    onBeforeAppear: rA = M,
    onAppear: L = v,
    onAppearCancelled: z = P
  } = e, x = (I, AA, pA) => {
    tt(I, AA ? l : s), tt(I, AA ? c : r), pA && pA();
  }, C = (I, AA) => {
    I._isLeaving = !1, tt(I, u), tt(I, p), tt(I, d), AA && AA();
  }, G = (I) => (AA, pA) => {
    const PA = I ? L : v, iA = () => x(AA, I, pA);
    et(PA, [AA, iA]), $s(() => {
      tt(AA, I ? a : o), He(AA, I ? l : s), js(PA) || Gs(AA, n, y, iA);
    });
  };
  return vA(e, {
    onBeforeEnter(I) {
      et(M, [I]), He(I, o), He(I, r);
    },
    onBeforeAppear(I) {
      et(rA, [I]), He(I, a), He(I, c);
    },
    onEnter: G(!1),
    onAppear: G(!0),
    onLeave(I, AA) {
      I._isLeaving = !0;
      const pA = () => C(I, AA);
      He(I, u), Qp(), He(I, d), $s(() => {
        I._isLeaving && (tt(I, u), He(I, p), js($) || Gs(I, n, _, pA));
      }), et($, [I, pA]);
    },
    onEnterCancelled(I) {
      x(I, !1), et(P, [I]);
    },
    onAppearCancelled(I) {
      x(I, !0), et(z, [I]);
    },
    onLeaveCancelled(I) {
      C(I), et(T, [I]);
    }
  });
}
function Ep(A) {
  if (A == null)
    return null;
  if (lA(A))
    return [bo(A.enter), bo(A.leave)];
  {
    const e = bo(A);
    return [e, e];
  }
}
function bo(A) {
  const e = No(A);
  return process.env.NODE_ENV !== "production" && Cd(e, "<transition> explicit duration"), e;
}
function He(A, e) {
  e.split(/\s+/).forEach((t) => t && A.classList.add(t)), (A._vtc || (A._vtc = /* @__PURE__ */ new Set())).add(e);
}
function tt(A, e) {
  e.split(/\s+/).forEach((n) => n && A.classList.remove(n));
  const { _vtc: t } = A;
  t && (t.delete(e), t.size || (A._vtc = void 0));
}
function $s(A) {
  requestAnimationFrame(() => {
    requestAnimationFrame(A);
  });
}
let Dp = 0;
function Gs(A, e, t, n) {
  const i = A._endId = ++Dp, o = () => {
    i === A._endId && n();
  };
  if (t)
    return setTimeout(o, t);
  const { type: r, timeout: s, propCount: a } = Cp(A, e);
  if (!r)
    return n();
  const c = r + "end";
  let l = 0;
  const u = () => {
    A.removeEventListener(c, d), o();
  }, d = (p) => {
    p.target === A && ++l >= a && u();
  };
  setTimeout(() => {
    l < a && u();
  }, s + 1), A.addEventListener(c, d);
}
function Cp(A, e) {
  const t = window.getComputedStyle(A), n = (h) => (t[h] || "").split(", "), i = n(`${Te}Delay`), o = n(`${Te}Duration`), r = Ys(i, o), s = n(`${en}Delay`), a = n(`${en}Duration`), c = Ys(s, a);
  let l = null, u = 0, d = 0;
  e === Te ? r > 0 && (l = Te, u = r, d = o.length) : e === en ? c > 0 && (l = en, u = c, d = a.length) : (u = Math.max(r, c), l = u > 0 ? r > c ? Te : en : null, d = l ? l === Te ? o.length : a.length : 0);
  const p = l === Te && /\b(transform|all)(,|$)/.test(
    n(`${Te}Property`).toString()
  );
  return {
    type: l,
    timeout: u,
    propCount: d,
    hasTransform: p
  };
}
function Ys(A, e) {
  for (; A.length < e.length; )
    A = A.concat(A);
  return Math.max(...e.map((t, n) => Ks(t) + Ks(A[n])));
}
function Ks(A) {
  return Number(A.slice(0, -1).replace(",", ".")) * 1e3;
}
function Qp() {
  return document.body.offsetHeight;
}
const Js = (A) => {
  const e = A.props["onUpdate:modelValue"] || !1;
  return j(e) ? (t) => _t(e, t) : e;
};
function xp(A) {
  A.target.composing = !0;
}
function qs(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Sp = {
  created(A, { modifiers: { lazy: e, trim: t, number: n } }, i) {
    A._assign = Js(i);
    const o = n || i.props && i.props.type === "number";
    Nt(A, e ? "change" : "input", (r) => {
      if (r.target.composing)
        return;
      let s = A.value;
      t && (s = s.trim()), o && (s = Mo(s)), A._assign(s);
    }), t && Nt(A, "change", () => {
      A.value = A.value.trim();
    }), e || (Nt(A, "compositionstart", xp), Nt(A, "compositionend", qs), Nt(A, "change", qs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e }) {
    A.value = e ?? "";
  },
  beforeUpdate(A, { value: e, modifiers: { lazy: t, trim: n, number: i } }, o) {
    if (A._assign = Js(o), A.composing || document.activeElement === A && A.type !== "range" && (t || n && A.value.trim() === e || (i || A.type === "number") && Mo(A.value) === e))
      return;
    const r = e ?? "";
    A.value !== r && (A.value = r);
  }
}, Ip = ["ctrl", "shift", "alt", "meta"], kp = {
  stop: (A) => A.stopPropagation(),
  prevent: (A) => A.preventDefault(),
  self: (A) => A.target !== A.currentTarget,
  ctrl: (A) => !A.ctrlKey,
  shift: (A) => !A.shiftKey,
  alt: (A) => !A.altKey,
  meta: (A) => !A.metaKey,
  left: (A) => "button" in A && A.button !== 0,
  middle: (A) => "button" in A && A.button !== 1,
  right: (A) => "button" in A && A.button !== 2,
  exact: (A, e) => Ip.some((t) => A[`${t}Key`] && !e.includes(t))
}, Zo = (A, e) => (t, ...n) => {
  for (let i = 0; i < e.length; i++) {
    const o = kp[e[i]];
    if (o && o(t, e))
      return;
  }
  return A(t, ...n);
}, _p = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Mp = (A, e) => (t) => {
  if (!("key" in t))
    return;
  const n = RA(t.key);
  if (e.some((i) => i === n || _p[i] === n))
    return A(t);
}, Ar = {
  beforeMount(A, { value: e }, { transition: t }) {
    A._vod = A.style.display === "none" ? "" : A.style.display, t && e ? t.beforeEnter(A) : tn(A, e);
  },
  mounted(A, { value: e }, { transition: t }) {
    t && e && t.enter(A);
  },
  updated(A, { value: e, oldValue: t }, { transition: n }) {
    !e != !t && (n ? e ? (n.beforeEnter(A), tn(A, !0), n.enter(A)) : n.leave(A, () => {
      tn(A, !1);
    }) : tn(A, e));
  },
  beforeUnmount(A, { value: e }) {
    tn(A, e);
  }
};
function tn(A, e) {
  A.style.display = e ? A._vod : "none";
}
const Np = /* @__PURE__ */ vA({ patchProp: wp }, op);
let Ws;
function fl() {
  return Ws || (Ws = Lf(Np));
}
const Zs = (...A) => {
  fl().render(...A);
}, Fp = (...A) => {
  const e = fl().createApp(...A);
  process.env.NODE_ENV !== "production" && (Tp(e), Hp(e));
  const { mount: t } = e;
  return e.mount = (n) => {
    const i = Op(n);
    if (!i)
      return;
    const o = e._component;
    !q(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const r = t(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, e;
};
function Tp(A) {
  Object.defineProperty(A.config, "isNativeTag", {
    value: (e) => Mu(e) || Nu(e),
    writable: !1
  });
}
function Hp(A) {
  if (cl()) {
    const e = A.config.isCustomElement;
    Object.defineProperty(A.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        S(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = A.config.compilerOptions, n = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(A.config, "compilerOptions", {
      get() {
        return S(n), t;
      },
      set() {
        S(n);
      }
    });
  }
}
function Op(A) {
  if (BA(A)) {
    const e = document.querySelector(A);
    return process.env.NODE_ENV !== "production" && !e && S(
      `Failed to mount app: mount target selector "${A}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && A instanceof window.ShadowRoot && A.mode === "closed" && S(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), A;
}
function Lp() {
  np();
}
process.env.NODE_ENV !== "production" && Lp();
var pl = !1;
function qn(A, e, t) {
  return Array.isArray(A) ? (A.length = Math.max(A.length, e), A.splice(e, 1, t), t) : (A[e] = t, t);
}
function Eo(A, e) {
  if (Array.isArray(A)) {
    A.splice(e, 1);
    return;
  }
  delete A[e];
}
function Xp() {
  return gl().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gl() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const zp = typeof Proxy == "function", Rp = "devtools-plugin:setup", Vp = "plugin:settings:set";
let xt, er;
function Up() {
  var A;
  return xt !== void 0 || (typeof window < "u" && window.performance ? (xt = !0, er = window.performance) : typeof global < "u" && (!((A = global.perf_hooks) === null || A === void 0) && A.performance) ? (xt = !0, er = global.perf_hooks.performance) : xt = !1), xt;
}
function jp() {
  return Up() ? er.now() : Date.now();
}
class $p {
  constructor(e, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
    const n = {};
    if (e.settings)
      for (const r in e.settings) {
        const s = e.settings[r];
        n[r] = s.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${e.id}`;
    let o = Object.assign({}, n);
    try {
      const r = localStorage.getItem(i), s = JSON.parse(r);
      Object.assign(o, s);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(r) {
        try {
          localStorage.setItem(i, JSON.stringify(r));
        } catch {
        }
        o = r;
      },
      now() {
        return jp();
      }
    }, t && t.on(Vp, (r, s) => {
      r === this.plugin.id && this.fallbacks.setSettings(s);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, s) => this.target ? this.target.on[s] : (...a) => {
        this.onQueue.push({
          method: s,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, s) => this.target ? this.target[s] : s === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(s) ? (...a) => (this.targetQueue.push({
        method: s,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[s](...a)) : (...a) => new Promise((c) => {
        this.targetQueue.push({
          method: s,
          args: a,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const t of this.onQueue)
      this.target.on[t.method](...t.args);
    for (const t of this.targetQueue)
      t.resolve(await this.target[t.method](...t.args));
  }
}
function Gr(A, e) {
  const t = A, n = gl(), i = Xp(), o = zp && t.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(Rp, A, e);
  else {
    const r = o ? new $p(t, i) : null;
    (n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: e,
      proxy: r
    }), r && e(r.proxiedTarget);
  }
}
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let un;
const In = (A) => un = A, hl = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function vt(A) {
  return A && typeof A == "object" && Object.prototype.toString.call(A) === "[object Object]" && typeof A.toJSON != "function";
}
var Be;
(function(A) {
  A.direct = "direct", A.patchObject = "patch object", A.patchFunction = "patch function";
})(Be || (Be = {}));
const ro = typeof window < "u", yn = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && ro, Aa = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function Gp(A, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(A.type) ? new Blob([String.fromCharCode(65279), A], { type: A.type }) : A;
}
function Yr(A, e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", A), n.responseType = "blob", n.onload = function() {
    wl(n.response, e, t);
  }, n.onerror = function() {
    console.error("could not download file");
  }, n.send();
}
function ml(A) {
  const e = new XMLHttpRequest();
  e.open("HEAD", A, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function fi(A) {
  try {
    A.dispatchEvent(new MouseEvent("click"));
  } catch {
    const t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), A.dispatchEvent(t);
  }
}
const pi = typeof navigator == "object" ? navigator : { userAgent: "" }, vl = /* @__PURE__ */ (() => /Macintosh/.test(pi.userAgent) && /AppleWebKit/.test(pi.userAgent) && !/Safari/.test(pi.userAgent))(), wl = ro ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !vl ? Yp : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in pi ? Kp : (
      // Fallback to using FileReader and a popup
      Jp
    )
  )
) : () => {
};
function Yp(A, e = "download", t) {
  const n = document.createElement("a");
  n.download = e, n.rel = "noopener", typeof A == "string" ? (n.href = A, n.origin !== location.origin ? ml(n.href) ? Yr(A, e, t) : (n.target = "_blank", fi(n)) : fi(n)) : (n.href = URL.createObjectURL(A), setTimeout(function() {
    URL.revokeObjectURL(n.href);
  }, 4e4), setTimeout(function() {
    fi(n);
  }, 0));
}
function Kp(A, e = "download", t) {
  if (typeof A == "string")
    if (ml(A))
      Yr(A, e, t);
    else {
      const n = document.createElement("a");
      n.href = A, n.target = "_blank", setTimeout(function() {
        fi(n);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Gp(A, t), e);
}
function Jp(A, e, t, n) {
  if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof A == "string")
    return Yr(A, e, t);
  const i = A.type === "application/octet-stream", o = /constructor/i.test(String(Aa.HTMLElement)) || "safari" in Aa, r = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((r || i && o || vl) && typeof FileReader < "u") {
    const s = new FileReader();
    s.onloadend = function() {
      let a = s.result;
      if (typeof a != "string")
        throw n = null, new Error("Wrong reader.result type");
      a = r ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = a : location.assign(a), n = null;
    }, s.readAsDataURL(A);
  } else {
    const s = URL.createObjectURL(A);
    n ? n.location.assign(s) : location.href = s, n = null, setTimeout(function() {
      URL.revokeObjectURL(s);
    }, 4e4);
  }
}
function IA(A, e) {
  const t = "🍍 " + A;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(t, e) : e === "error" ? console.error(t) : e === "warn" ? console.warn(t) : console.log(t);
}
function Kr(A) {
  return "_a" in A && "install" in A;
}
function yl() {
  if (!("clipboard" in navigator))
    return IA("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Bl(A) {
  return A instanceof Error && A.message.toLowerCase().includes("document is not focused") ? (IA('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function qp(A) {
  if (!yl())
    try {
      await navigator.clipboard.writeText(JSON.stringify(A.state.value)), IA("Global state copied to clipboard.");
    } catch (e) {
      if (Bl(e))
        return;
      IA("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Wp(A) {
  if (!yl())
    try {
      A.state.value = JSON.parse(await navigator.clipboard.readText()), IA("Global state pasted from clipboard.");
    } catch (e) {
      if (Bl(e))
        return;
      IA("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function Zp(A) {
  try {
    wl(new Blob([JSON.stringify(A.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    IA("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Ce;
function Ag() {
  Ce || (Ce = document.createElement("input"), Ce.type = "file", Ce.accept = ".json");
  function A() {
    return new Promise((e, t) => {
      Ce.onchange = async () => {
        const n = Ce.files;
        if (!n)
          return e(null);
        const i = n.item(0);
        return e(i ? { text: await i.text(), file: i } : null);
      }, Ce.oncancel = () => e(null), Ce.onerror = t, Ce.click();
    });
  }
  return A;
}
async function eg(A) {
  try {
    const t = await (await Ag())();
    if (!t)
      return;
    const { text: n, file: i } = t;
    A.state.value = JSON.parse(n), IA(`Global state imported from "${i.name}".`);
  } catch (e) {
    IA("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function oe(A) {
  return {
    _custom: {
      display: A
    }
  };
}
const Pl = "🍍 Pinia (root)", tr = "_root";
function tg(A) {
  return Kr(A) ? {
    id: tr,
    label: Pl
  } : {
    id: A.$id,
    label: A.$id
  };
}
function ng(A) {
  if (Kr(A)) {
    const t = Array.from(A._s.keys()), n = A._s;
    return {
      state: t.map((o) => ({
        editable: !0,
        key: o,
        value: A.state.value[o]
      })),
      getters: t.filter((o) => n.get(o)._getters).map((o) => {
        const r = n.get(o);
        return {
          editable: !1,
          key: o,
          value: r._getters.reduce((s, a) => (s[a] = r[a], s), {})
        };
      })
    };
  }
  const e = {
    state: Object.keys(A.$state).map((t) => ({
      editable: !0,
      key: t,
      value: A.$state[t]
    }))
  };
  return A._getters && A._getters.length && (e.getters = A._getters.map((t) => ({
    editable: !1,
    key: t,
    value: A[t]
  }))), A._customProperties.size && (e.customProperties = Array.from(A._customProperties).map((t) => ({
    editable: !0,
    key: t,
    value: A[t]
  }))), e;
}
function ig(A) {
  return A ? Array.isArray(A) ? A.reduce((e, t) => (e.keys.push(t.key), e.operations.push(t.type), e.oldValue[t.key] = t.oldValue, e.newValue[t.key] = t.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: oe(A.type),
    key: oe(A.key),
    oldValue: A.oldValue,
    newValue: A.newValue
  } : {};
}
function og(A) {
  switch (A) {
    case Be.direct:
      return "mutation";
    case Be.patchFunction:
      return "$patch";
    case Be.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ht = !0;
const gi = [], nt = "pinia:mutations", TA = "pinia", { assign: rg } = Object, Mi = (A) => "🍍 " + A;
function sg(A, e) {
  Gr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: gi,
    app: A
  }, (t) => {
    typeof t.now != "function" && IA("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), t.addTimelineLayer({
      id: nt,
      label: "Pinia 🍍",
      color: 15064968
    }), t.addInspector({
      id: TA,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            qp(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Wp(e), t.sendInspectorTree(TA), t.sendInspectorState(TA);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Zp(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await eg(e), t.sendInspectorTree(TA), t.sendInspectorState(TA);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (n) => {
            const i = e._s.get(n);
            i ? i._isOptionsAPI ? (i.$reset(), IA(`Store "${n}" reset.`)) : IA(`Cannot reset "${n}" store because it's a setup store.`, "warn") : IA(`Cannot reset "${n}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), t.on.inspectComponent((n, i) => {
      const o = n.componentInstance && n.componentInstance.proxy;
      if (o && o._pStores) {
        const r = n.componentInstance.proxy._pStores;
        Object.values(r).forEach((s) => {
          n.instanceData.state.push({
            type: Mi(s.$id),
            key: "state",
            editable: !0,
            value: s._isOptionsAPI ? {
              _custom: {
                value: W(s.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => s.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(s.$state).reduce((a, c) => (a[c] = s.$state[c], a), {})
            )
          }), s._getters && s._getters.length && n.instanceData.state.push({
            type: Mi(s.$id),
            key: "getters",
            editable: !1,
            value: s._getters.reduce((a, c) => {
              try {
                a[c] = s[c];
              } catch (l) {
                a[c] = l;
              }
              return a;
            }, {})
          });
        });
      }
    }), t.on.getInspectorTree((n) => {
      if (n.app === A && n.inspectorId === TA) {
        let i = [e];
        i = i.concat(Array.from(e._s.values())), n.rootNodes = (n.filter ? i.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(n.filter.toLowerCase()) : Pl.toLowerCase().includes(n.filter.toLowerCase())) : i).map(tg);
      }
    }), t.on.getInspectorState((n) => {
      if (n.app === A && n.inspectorId === TA) {
        const i = n.nodeId === tr ? e : e._s.get(n.nodeId);
        if (!i)
          return;
        i && (n.state = ng(i));
      }
    }), t.on.editInspectorState((n, i) => {
      if (n.app === A && n.inspectorId === TA) {
        const o = n.nodeId === tr ? e : e._s.get(n.nodeId);
        if (!o)
          return IA(`store "${n.nodeId}" not found`, "error");
        const { path: r } = n;
        Kr(o) ? r.unshift("state") : (r.length !== 1 || !o._customProperties.has(r[0]) || r[0] in o.$state) && r.unshift("$state"), Ht = !1, n.set(o, r, n.state.value), Ht = !0;
      }
    }), t.on.editComponentState((n) => {
      if (n.type.startsWith("🍍")) {
        const i = n.type.replace(/^🍍\s*/, ""), o = e._s.get(i);
        if (!o)
          return IA(`store "${i}" not found`, "error");
        const { path: r } = n;
        if (r[0] !== "state")
          return IA(`Invalid path for store "${i}":
${r}
Only state can be modified.`);
        r[0] = "$state", Ht = !1, n.set(o, r, n.state.value), Ht = !0;
      }
    });
  });
}
function ag(A, e) {
  gi.includes(Mi(e.$id)) || gi.push(Mi(e.$id)), Gr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: gi,
    app: A,
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
  }, (t) => {
    const n = typeof t.now == "function" ? t.now.bind(t) : Date.now;
    e.$onAction(({ after: r, onError: s, name: a, args: c }) => {
      const l = bl++;
      t.addTimelineEvent({
        layerId: nt,
        event: {
          time: n(),
          title: "🛫 " + a,
          subtitle: "start",
          data: {
            store: oe(e.$id),
            action: oe(a),
            args: c
          },
          groupId: l
        }
      }), r((u) => {
        rt = void 0, t.addTimelineEvent({
          layerId: nt,
          event: {
            time: n(),
            title: "🛬 " + a,
            subtitle: "end",
            data: {
              store: oe(e.$id),
              action: oe(a),
              args: c,
              result: u
            },
            groupId: l
          }
        });
      }), s((u) => {
        rt = void 0, t.addTimelineEvent({
          layerId: nt,
          event: {
            time: n(),
            logType: "error",
            title: "💥 " + a,
            subtitle: "end",
            data: {
              store: oe(e.$id),
              action: oe(a),
              args: c,
              error: u
            },
            groupId: l
          }
        });
      });
    }, !0), e._customProperties.forEach((r) => {
      UA(() => le(e[r]), (s, a) => {
        t.notifyComponentUpdate(), t.sendInspectorState(TA), Ht && t.addTimelineEvent({
          layerId: nt,
          event: {
            time: n(),
            title: "Change",
            subtitle: r,
            data: {
              newValue: s,
              oldValue: a
            },
            groupId: rt
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: r, type: s }, a) => {
      if (t.notifyComponentUpdate(), t.sendInspectorState(TA), !Ht)
        return;
      const c = {
        time: n(),
        title: og(s),
        data: rg({ store: oe(e.$id) }, ig(r)),
        groupId: rt
      };
      rt = void 0, s === Be.patchFunction ? c.subtitle = "⤵️" : s === Be.patchObject ? c.subtitle = "🧩" : r && !Array.isArray(r) && (c.subtitle = r.type), r && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), t.addTimelineEvent({
        layerId: nt,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const i = e._hotUpdate;
    e._hotUpdate = re((r) => {
      i(r), t.addTimelineEvent({
        layerId: nt,
        event: {
          time: n(),
          title: "🔥 " + e.$id,
          subtitle: "HMR update",
          data: {
            store: oe(e.$id),
            info: oe("HMR update")
          }
        }
      }), t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA);
    });
    const { $dispose: o } = e;
    e.$dispose = () => {
      o(), t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA), t.getSettings().logStoreChanges && IA(`Disposed "${e.$id}" store 🗑`);
    }, t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA), t.getSettings().logStoreChanges && IA(`"${e.$id}" store installed 🆕`);
  });
}
let bl = 0, rt;
function ea(A, e) {
  const t = e.reduce((n, i) => (n[i] = W(A)[i], n), {});
  for (const n in t)
    A[n] = function() {
      const i = bl, o = new Proxy(A, {
        get(...r) {
          return rt = i, Reflect.get(...r);
        },
        set(...r) {
          return rt = i, Reflect.set(...r);
        }
      });
      return t[n].apply(o, arguments);
    };
}
function cg({ app: A, store: e, options: t }) {
  if (!e.$id.startsWith("__hot:")) {
    if (t.state && (e._isOptionsAPI = !0), typeof t.state == "function") {
      ea(
        // @ts-expect-error: can cast the store...
        e,
        Object.keys(t.actions)
      );
      const n = e._hotUpdate;
      W(e)._hotUpdate = function(i) {
        n.apply(this, arguments), ea(e, Object.keys(i._hmrPayload.actions));
      };
    }
    ag(
      A,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      e
    );
  }
}
function lg() {
  const A = ac(!0), e = A.run(() => DA({}));
  let t = [], n = [];
  const i = re({
    install(o) {
      In(i), i._a = o, o.provide(hl, i), o.config.globalProperties.$pinia = i, yn && sg(o, i), n.forEach((r) => t.push(r)), n = [];
    },
    use(o) {
      return !this._a && !pl ? n.push(o) : t.push(o), this;
    },
    _p: t,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: A,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return yn && typeof Proxy < "u" && i.use(cg), i;
}
function El(A, e) {
  for (const t in e) {
    const n = e[t];
    if (!(t in A))
      continue;
    const i = A[t];
    vt(i) && vt(n) && !yA(n) && !we(n) ? A[t] = El(i, n) : A[t] = n;
  }
  return A;
}
const Dl = () => {
};
function ta(A, e, t, n = Dl) {
  A.push(e);
  const i = () => {
    const o = A.indexOf(e);
    o > -1 && (A.splice(o, 1), n());
  };
  return !t && Qr() && cc(i), i;
}
function St(A, ...e) {
  A.slice().forEach((t) => {
    t(...e);
  });
}
function nr(A, e) {
  A instanceof Map && e instanceof Map && e.forEach((t, n) => A.set(n, t)), A instanceof Set && e instanceof Set && e.forEach(A.add, A);
  for (const t in e) {
    if (!e.hasOwnProperty(t))
      continue;
    const n = e[t], i = A[t];
    vt(i) && vt(n) && A.hasOwnProperty(t) && !yA(n) && !we(n) ? A[t] = nr(i, n) : A[t] = n;
  }
  return A;
}
const ug = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function dg(A) {
  return !vt(A) || !A.hasOwnProperty(ug);
}
const { assign: Ae } = Object;
function na(A) {
  return !!(yA(A) && A.effect);
}
function ia(A, e, t, n) {
  const { state: i, actions: o, getters: r } = e, s = t.state.value[A];
  let a;
  function c() {
    !s && (process.env.NODE_ENV === "production" || !n) && (t.state.value[A] = i ? i() : {});
    const l = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Tt(DA(i ? i() : {}).value)
    ) : Tt(t.state.value[A]);
    return Ae(l, o, Object.keys(r || {}).reduce((u, d) => (process.env.NODE_ENV !== "production" && d in l && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${A}".`), u[d] = re(bA(() => {
      In(t);
      const p = t._s.get(A);
      return r[d].call(p, p);
    })), u), {}));
  }
  return a = ir(A, c, e, t, n, !0), a;
}
function ir(A, e, t = {}, n, i, o) {
  let r;
  const s = Ae({ actions: {} }, t);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const a = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !pl && (a.onTrigger = (x) => {
    c ? p = x : c == !1 && !L._hotUpdating && (Array.isArray(p) ? p.push(x) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, l, u = re([]), d = re([]), p;
  const h = n.state.value[A];
  !o && !h && (process.env.NODE_ENV === "production" || !i) && (n.state.value[A] = {});
  const y = DA({});
  let _;
  function M(x) {
    let C;
    c = l = !1, process.env.NODE_ENV !== "production" && (p = []), typeof x == "function" ? (x(n.state.value[A]), C = {
      type: Be.patchFunction,
      storeId: A,
      events: p
    }) : (nr(n.state.value[A], x), C = {
      type: Be.patchObject,
      payload: x,
      storeId: A,
      events: p
    });
    const G = _ = Symbol();
    Vt().then(() => {
      _ === G && (c = !0);
    }), l = !0, St(u, C, n.state.value[A]);
  }
  const v = o ? function() {
    const { state: C } = t, G = C ? C() : {};
    this.$patch((I) => {
      Ae(I, G);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${A}" is built using the setup syntax and does not implement $reset().`);
    } : Dl
  );
  function P() {
    r.stop(), u = [], d = [], n._s.delete(A);
  }
  function $(x, C) {
    return function() {
      In(n);
      const G = Array.from(arguments), I = [], AA = [];
      function pA(D) {
        I.push(D);
      }
      function PA(D) {
        AA.push(D);
      }
      St(d, {
        args: G,
        name: x,
        store: L,
        after: pA,
        onError: PA
      });
      let iA;
      try {
        iA = C.apply(this && this.$id === A ? this : L, G);
      } catch (D) {
        throw St(AA, D), D;
      }
      return iA instanceof Promise ? iA.then((D) => (St(I, D), D)).catch((D) => (St(AA, D), Promise.reject(D))) : (St(I, iA), iA);
    };
  }
  const T = /* @__PURE__ */ re({
    actions: {},
    getters: {},
    state: [],
    hotState: y
  }), rA = {
    _p: n,
    // _s: scope,
    $id: A,
    $onAction: ta.bind(null, d),
    $patch: M,
    $reset: v,
    $subscribe(x, C = {}) {
      const G = ta(u, x, C.detached, () => I()), I = r.run(() => UA(() => n.state.value[A], (AA) => {
        (C.flush === "sync" ? l : c) && x({
          storeId: A,
          type: Be.direct,
          events: p
        }, AA);
      }, Ae({}, a, C)));
      return G;
    },
    $dispose: P
  }, L = qt(process.env.NODE_ENV !== "production" || yn ? Ae(
    {
      _hmrPayload: T,
      _customProperties: re(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    rA
    // must be added later
    // setupStore
  ) : rA);
  n._s.set(A, L);
  const z = n._e.run(() => (r = ac(), r.run(() => e())));
  for (const x in z) {
    const C = z[x];
    if (yA(C) && !na(C) || we(C))
      process.env.NODE_ENV !== "production" && i ? qn(y.value, x, ri(z, x)) : o || (h && dg(C) && (yA(C) ? C.value = h[x] : nr(C, h[x])), n.state.value[A][x] = C), process.env.NODE_ENV !== "production" && T.state.push(x);
    else if (typeof C == "function") {
      const G = process.env.NODE_ENV !== "production" && i ? C : $(x, C);
      z[x] = G, process.env.NODE_ENV !== "production" && (T.actions[x] = C), s.actions[x] = C;
    } else
      process.env.NODE_ENV !== "production" && na(C) && (T.getters[x] = o ? (
        // @ts-expect-error
        t.getters[x]
      ) : C, ro && (z._getters || // @ts-expect-error: same
      (z._getters = re([]))).push(x));
  }
  if (Ae(L, z), Ae(W(L), z), Object.defineProperty(L, "$state", {
    get: () => process.env.NODE_ENV !== "production" && i ? y.value : n.state.value[A],
    set: (x) => {
      if (process.env.NODE_ENV !== "production" && i)
        throw new Error("cannot set hotState");
      M((C) => {
        Ae(C, x);
      });
    }
  }), process.env.NODE_ENV !== "production" && (L._hotUpdate = re((x) => {
    L._hotUpdating = !0, x._hmrPayload.state.forEach((C) => {
      if (C in L.$state) {
        const G = x.$state[C], I = L.$state[C];
        typeof G == "object" && vt(G) && vt(I) ? El(G, I) : x.$state[C] = I;
      }
      qn(L, C, ri(x.$state, C));
    }), Object.keys(L.$state).forEach((C) => {
      C in x.$state || Eo(L, C);
    }), c = !1, l = !1, n.state.value[A] = ri(x._hmrPayload, "hotState"), l = !0, Vt().then(() => {
      c = !0;
    });
    for (const C in x._hmrPayload.actions) {
      const G = x[C];
      qn(L, C, $(C, G));
    }
    for (const C in x._hmrPayload.getters) {
      const G = x._hmrPayload.getters[C], I = o ? (
        // special handling of options api
        bA(() => (In(n), G.call(L, L)))
      ) : G;
      qn(L, C, I);
    }
    Object.keys(L._hmrPayload.getters).forEach((C) => {
      C in x._hmrPayload.getters || Eo(L, C);
    }), Object.keys(L._hmrPayload.actions).forEach((C) => {
      C in x._hmrPayload.actions || Eo(L, C);
    }), L._hmrPayload = x._hmrPayload, L._getters = x._getters, L._hotUpdating = !1;
  })), yn) {
    const x = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((C) => {
      Object.defineProperty(L, C, Ae({ value: L[C] }, x));
    });
  }
  return n._p.forEach((x) => {
    if (yn) {
      const C = r.run(() => x({
        store: L,
        app: n._a,
        pinia: n,
        options: s
      }));
      Object.keys(C || {}).forEach((G) => L._customProperties.add(G)), Ae(L, C);
    } else
      Ae(L, r.run(() => x({
        store: L,
        app: n._a,
        pinia: n,
        options: s
      })));
  }), process.env.NODE_ENV !== "production" && L.$state && typeof L.$state == "object" && typeof L.$state.constructor == "function" && !L.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${L.$id}".`), h && o && t.hydrate && t.hydrate(L.$state, h), c = !0, l = !0, L;
}
function fg(A, e, t) {
  let n, i;
  const o = typeof e == "function";
  typeof A == "string" ? (n = A, i = o ? t : e) : (i = A, n = A.id);
  function r(s, a) {
    const c = Wt();
    if (s = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && un && un._testing ? null : s) || c && ue(hl, null), s && In(s), process.env.NODE_ENV !== "production" && !un)
      throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    s = un, s._s.has(n) || (o ? ir(n, e, i, s) : ia(n, i, s), process.env.NODE_ENV !== "production" && (r._pinia = s));
    const l = s._s.get(n);
    if (process.env.NODE_ENV !== "production" && a) {
      const u = "__hot:" + n, d = o ? ir(u, e, i, s, !0) : ia(u, Ae({}, i), s, !0);
      a._hotUpdate(d), delete s.state.value[u], s._s.delete(u);
    }
    if (process.env.NODE_ENV !== "production" && ro && c && c.proxy && // avoid adding stores that are just built for hot module replacement
    !a) {
      const u = c.proxy, d = "_pStores" in u ? u._pStores : u._pStores = {};
      d[n] = l;
    }
    return l;
  }
  return r.$id = n, r;
}
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const ke = typeof window < "u";
function pg(A) {
  return A.__esModule || A[Symbol.toStringTag] === "Module";
}
const uA = Object.assign;
function Do(A, e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    t[n] = YA(i) ? i.map(A) : A(i);
  }
  return t;
}
const Bn = () => {
}, YA = Array.isArray;
function aA(A) {
  const e = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + A].concat(e));
}
const gg = /\/$/, hg = (A) => A.replace(gg, "");
function Co(A, e, t = "/") {
  let n, i = {}, o = "", r = "";
  const s = e.indexOf("#");
  let a = e.indexOf("?");
  return s < a && s >= 0 && (a = -1), a > -1 && (n = e.slice(0, a), o = e.slice(a + 1, s > -1 ? s : e.length), i = A(o)), s > -1 && (n = n || e.slice(0, s), r = e.slice(s, e.length)), n = wg(n ?? e, t), {
    fullPath: n + (o && "?") + o + r,
    path: n,
    query: i,
    hash: r
  };
}
function mg(A, e) {
  const t = e.query ? A(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "");
}
function oa(A, e) {
  return !e || !A.toLowerCase().startsWith(e.toLowerCase()) ? A : A.slice(e.length) || "/";
}
function ra(A, e, t) {
  const n = e.matched.length - 1, i = t.matched.length - 1;
  return n > -1 && n === i && qe(e.matched[n], t.matched[i]) && Cl(e.params, t.params) && A(e.query) === A(t.query) && e.hash === t.hash;
}
function qe(A, e) {
  return (A.aliasOf || A) === (e.aliasOf || e);
}
function Cl(A, e) {
  if (Object.keys(A).length !== Object.keys(e).length)
    return !1;
  for (const t in A)
    if (!vg(A[t], e[t]))
      return !1;
  return !0;
}
function vg(A, e) {
  return YA(A) ? sa(A, e) : YA(e) ? sa(e, A) : A === e;
}
function sa(A, e) {
  return YA(e) ? A.length === e.length && A.every((t, n) => t === e[n]) : A.length === 1 && A[0] === e;
}
function wg(A, e) {
  if (A.startsWith("/"))
    return A;
  if (process.env.NODE_ENV !== "production" && !e.startsWith("/"))
    return aA(`Cannot resolve a relative location without an absolute path. Trying to resolve "${A}" from "${e}". It should look like "/${e}".`), A;
  if (!A)
    return e;
  const t = e.split("/"), n = A.split("/");
  let i = t.length - 1, o, r;
  for (o = 0; o < n.length; o++)
    if (r = n[o], r !== ".")
      if (r === "..")
        i > 1 && i--;
      else
        break;
  return t.slice(0, i).join("/") + "/" + n.slice(o - (o === n.length ? 1 : 0)).join("/");
}
var kn;
(function(A) {
  A.pop = "pop", A.push = "push";
})(kn || (kn = {}));
var Pn;
(function(A) {
  A.back = "back", A.forward = "forward", A.unknown = "";
})(Pn || (Pn = {}));
function yg(A) {
  if (!A)
    if (ke) {
      const e = document.querySelector("base");
      A = e && e.getAttribute("href") || "/", A = A.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      A = "/";
  return A[0] !== "/" && A[0] !== "#" && (A = "/" + A), hg(A);
}
const Bg = /^[^#]+#/;
function Pg(A, e) {
  return A.replace(Bg, "#") + e;
}
function bg(A, e) {
  const t = document.documentElement.getBoundingClientRect(), n = A.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - t.left - (e.left || 0),
    top: n.top - t.top - (e.top || 0)
  };
}
const so = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Eg(A) {
  let e;
  if ("el" in A) {
    const t = A.el, n = typeof t == "string" && t.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof A.el == "string" && (!n || !document.getElementById(A.el.slice(1))))
      try {
        const o = document.querySelector(A.el);
        if (n && o) {
          aA(`The selector "${A.el}" should be passed as "el: document.querySelector('${A.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        aA(`The selector "${A.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof t == "string" ? n ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!i) {
      process.env.NODE_ENV !== "production" && aA(`Couldn't find element using selector "${A.el}" returned by scrollBehavior.`);
      return;
    }
    e = bg(i, A);
  } else
    e = A;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset);
}
function aa(A, e) {
  return (history.state ? history.state.position - e : -1) + A;
}
const or = /* @__PURE__ */ new Map();
function Dg(A, e) {
  or.set(A, e);
}
function Cg(A) {
  const e = or.get(A);
  return or.delete(A), e;
}
let Qg = () => location.protocol + "//" + location.host;
function Ql(A, e) {
  const { pathname: t, search: n, hash: i } = e, o = A.indexOf("#");
  if (o > -1) {
    let s = i.includes(A.slice(o)) ? A.slice(o).length : 1, a = i.slice(s);
    return a[0] !== "/" && (a = "/" + a), oa(a, "");
  }
  return oa(t, A) + n + i;
}
function xg(A, e, t, n) {
  let i = [], o = [], r = null;
  const s = ({ state: d }) => {
    const p = Ql(A, location), h = t.value, y = e.value;
    let _ = 0;
    if (d) {
      if (t.value = p, e.value = d, r && r === h) {
        r = null;
        return;
      }
      _ = y ? d.position - y.position : 0;
    } else
      n(p);
    i.forEach((M) => {
      M(t.value, h, {
        delta: _,
        type: kn.pop,
        direction: _ ? _ > 0 ? Pn.forward : Pn.back : Pn.unknown
      });
    });
  };
  function a() {
    r = t.value;
  }
  function c(d) {
    i.push(d);
    const p = () => {
      const h = i.indexOf(d);
      h > -1 && i.splice(h, 1);
    };
    return o.push(p), p;
  }
  function l() {
    const { history: d } = window;
    d.state && d.replaceState(uA({}, d.state, { scroll: so() }), "");
  }
  function u() {
    for (const d of o)
      d();
    o = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", l);
  }
  return window.addEventListener("popstate", s), window.addEventListener("beforeunload", l), {
    pauseListeners: a,
    listen: c,
    destroy: u
  };
}
function ca(A, e, t, n = !1, i = !1) {
  return {
    back: A,
    current: e,
    forward: t,
    replaced: n,
    position: window.history.length,
    scroll: i ? so() : null
  };
}
function Sg(A) {
  const { history: e, location: t } = window, n = {
    value: Ql(A, t)
  }, i = { value: e.state };
  i.value || o(n.value, {
    back: null,
    current: n.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: e.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function o(a, c, l) {
    const u = A.indexOf("#"), d = u > -1 ? (t.host && document.querySelector("base") ? A : A.slice(u)) + a : Qg() + A + a;
    try {
      e[l ? "replaceState" : "pushState"](c, "", d), i.value = c;
    } catch (p) {
      process.env.NODE_ENV !== "production" ? aA("Error with push/replace State", p) : console.error(p), t[l ? "replace" : "assign"](d);
    }
  }
  function r(a, c) {
    const l = uA({}, e.state, ca(
      i.value.back,
      // keep back and forward entries but override current position
      a,
      i.value.forward,
      !0
    ), c, { position: i.value.position });
    o(a, l, !0), n.value = a;
  }
  function s(a, c) {
    const l = uA(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      i.value,
      e.state,
      {
        forward: a,
        scroll: so()
      }
    );
    process.env.NODE_ENV !== "production" && !e.state && aA(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), o(l.current, l, !0);
    const u = uA({}, ca(n.value, a, null), { position: l.position + 1 }, c);
    o(a, u, !1), n.value = a;
  }
  return {
    location: n,
    state: i,
    push: s,
    replace: r
  };
}
function Ig(A) {
  A = yg(A);
  const e = Sg(A), t = xg(A, e.state, e.location, e.replace);
  function n(o, r = !0) {
    r || t.pauseListeners(), history.go(o);
  }
  const i = uA({
    // it's overridden right after
    location: "",
    base: A,
    go: n,
    createHref: Pg.bind(null, A)
  }, e, t);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i;
}
function kg(A) {
  return A = location.host ? A || location.pathname + location.search : "", A.includes("#") || (A += "#"), process.env.NODE_ENV !== "production" && !A.endsWith("#/") && !A.endsWith("#") && aA(`A hash base must end with a "#":
"${A}" should be "${A.replace(/#.*$/, "#")}".`), Ig(A);
}
function _g(A) {
  return typeof A == "string" || A && typeof A == "object";
}
function xl(A) {
  return typeof A == "string" || typeof A == "symbol";
}
const Oe = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, rr = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var la;
(function(A) {
  A[A.aborted = 4] = "aborted", A[A.cancelled = 8] = "cancelled", A[A.duplicated = 16] = "duplicated";
})(la || (la = {}));
const Mg = {
  [
    1
    /* ErrorTypes.MATCHER_NOT_FOUND */
  ]({ location: A, currentLocation: e }) {
    return `No match for
 ${JSON.stringify(A)}${e ? `
while being at
` + JSON.stringify(e) : ""}`;
  },
  [
    2
    /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
  ]({ from: A, to: e }) {
    return `Redirected from "${A.fullPath}" to "${Fg(e)}" via a navigation guard.`;
  },
  [
    4
    /* ErrorTypes.NAVIGATION_ABORTED */
  ]({ from: A, to: e }) {
    return `Navigation aborted from "${A.fullPath}" to "${e.fullPath}" via a navigation guard.`;
  },
  [
    8
    /* ErrorTypes.NAVIGATION_CANCELLED */
  ]({ from: A, to: e }) {
    return `Navigation cancelled from "${A.fullPath}" to "${e.fullPath}" with a new navigation.`;
  },
  [
    16
    /* ErrorTypes.NAVIGATION_DUPLICATED */
  ]({ from: A, to: e }) {
    return `Avoided redundant navigation to current location: "${A.fullPath}".`;
  }
};
function Yt(A, e) {
  return process.env.NODE_ENV !== "production" ? uA(new Error(Mg[A](e)), {
    type: A,
    [rr]: !0
  }, e) : uA(new Error(), {
    type: A,
    [rr]: !0
  }, e);
}
function Qe(A, e) {
  return A instanceof Error && rr in A && (e == null || !!(A.type & e));
}
const Ng = ["params", "query", "hash"];
function Fg(A) {
  if (typeof A == "string")
    return A;
  if ("path" in A)
    return A.path;
  const e = {};
  for (const t of Ng)
    t in A && (e[t] = A[t]);
  return JSON.stringify(e, null, 2);
}
const ua = "[^/]+?", Tg = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Hg = /[.+*?^${}()[\]/\\]/g;
function Og(A, e) {
  const t = uA({}, Tg, e), n = [];
  let i = t.start ? "^" : "";
  const o = [];
  for (const c of A) {
    const l = c.length ? [] : [
      90
      /* PathScore.Root */
    ];
    t.strict && !c.length && (i += "/");
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      let p = 40 + (t.sensitive ? 0.25 : 0);
      if (d.type === 0)
        u || (i += "/"), i += d.value.replace(Hg, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: h, repeatable: y, optional: _, regexp: M } = d;
        o.push({
          name: h,
          repeatable: y,
          optional: _
        });
        const v = M || ua;
        if (v !== ua) {
          p += 10;
          try {
            new RegExp(`(${v})`);
          } catch ($) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${v}): ` + $.message);
          }
        }
        let P = y ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (P = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        _ && c.length < 2 ? `(?:/${P})` : "/" + P), _ && (P += "?"), i += P, p += 20, _ && (p += -8), y && (p += -20), v === ".*" && (p += -50);
      }
      l.push(p);
    }
    n.push(l);
  }
  if (t.strict && t.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += 0.7000000000000001;
  }
  t.strict || (i += "/?"), t.end ? i += "$" : t.strict && (i += "(?:/|$)");
  const r = new RegExp(i, t.sensitive ? "" : "i");
  function s(c) {
    const l = c.match(r), u = {};
    if (!l)
      return null;
    for (let d = 1; d < l.length; d++) {
      const p = l[d] || "", h = o[d - 1];
      u[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return u;
  }
  function a(c) {
    let l = "", u = !1;
    for (const d of A) {
      (!u || !l.endsWith("/")) && (l += "/"), u = !1;
      for (const p of d)
        if (p.type === 0)
          l += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: y, optional: _ } = p, M = h in c ? c[h] : "";
          if (YA(M) && !y)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const v = YA(M) ? M.join("/") : M;
          if (!v)
            if (_)
              d.length < 2 && (l.endsWith("/") ? l = l.slice(0, -1) : u = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          l += v;
        }
    }
    return l || "/";
  }
  return {
    re: r,
    score: n,
    keys: o,
    parse: s,
    stringify: a
  };
}
function Lg(A, e) {
  let t = 0;
  for (; t < A.length && t < e.length; ) {
    const n = e[t] - A[t];
    if (n)
      return n;
    t++;
  }
  return A.length < e.length ? A.length === 1 && A[0] === 40 + 40 ? -1 : 1 : A.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0;
}
function Xg(A, e) {
  let t = 0;
  const n = A.score, i = e.score;
  for (; t < n.length && t < i.length; ) {
    const o = Lg(n[t], i[t]);
    if (o)
      return o;
    t++;
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (da(n))
      return 1;
    if (da(i))
      return -1;
  }
  return i.length - n.length;
}
function da(A) {
  const e = A[A.length - 1];
  return A.length > 0 && e[e.length - 1] < 0;
}
const zg = {
  type: 0,
  value: ""
}, Rg = /[a-zA-Z0-9_]/;
function Vg(A) {
  if (!A)
    return [[]];
  if (A === "/")
    return [[zg]];
  if (!A.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${A}" should be "/${A}".` : `Invalid path "${A}"`);
  function e(p) {
    throw new Error(`ERR (${t})/"${c}": ${p}`);
  }
  let t = 0, n = t;
  const i = [];
  let o;
  function r() {
    o && i.push(o), o = [];
  }
  let s = 0, a, c = "", l = "";
  function u() {
    c && (t === 0 ? o.push({
      type: 0,
      value: c
    }) : t === 1 || t === 2 || t === 3 ? (o.length > 1 && (a === "*" || a === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: c,
      regexp: l,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : e("Invalid state to consume buffer"), c = "");
  }
  function d() {
    c += a;
  }
  for (; s < A.length; ) {
    if (a = A[s++], a === "\\" && t !== 2) {
      n = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        a === "/" ? (c && u(), r()) : a === ":" ? (u(), t = 1) : d();
        break;
      case 4:
        d(), t = n;
        break;
      case 1:
        a === "(" ? t = 2 : Rg.test(a) ? d() : (u(), t = 0, a !== "*" && a !== "?" && a !== "+" && s--);
        break;
      case 2:
        a === ")" ? l[l.length - 1] == "\\" ? l = l.slice(0, -1) + a : t = 3 : l += a;
        break;
      case 3:
        u(), t = 0, a !== "*" && a !== "?" && a !== "+" && s--, l = "";
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${c}"`), u(), r(), i;
}
function Ug(A, e, t) {
  const n = Og(Vg(A.path), t);
  if (process.env.NODE_ENV !== "production") {
    const o = /* @__PURE__ */ new Set();
    for (const r of n.keys)
      o.has(r.name) && aA(`Found duplicated params with name "${r.name}" for path "${A.path}". Only the last one will be available on "$route.params".`), o.add(r.name);
  }
  const i = uA(n, {
    record: A,
    parent: e,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i;
}
function jg(A, e) {
  const t = [], n = /* @__PURE__ */ new Map();
  e = ga({ strict: !1, end: !0, sensitive: !1 }, e);
  function i(l) {
    return n.get(l);
  }
  function o(l, u, d) {
    const p = !d, h = $g(l);
    process.env.NODE_ENV !== "production" && Jg(h, u), h.aliasOf = d && d.record;
    const y = ga(e, l), _ = [
      h
    ];
    if ("alias" in l) {
      const P = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const $ of P)
        _.push(uA({}, h, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : h.components,
          path: $,
          // we might be the child of an alias
          aliasOf: d ? d.record : h
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let M, v;
    for (const P of _) {
      const { path: $ } = P;
      if (u && $[0] !== "/") {
        const T = u.record.path, rA = T[T.length - 1] === "/" ? "" : "/";
        P.path = u.record.path + ($ && rA + $);
      }
      if (process.env.NODE_ENV !== "production" && P.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (M = Ug(P, u, y), process.env.NODE_ENV !== "production" && u && $[0] === "/" && qg(M, u), d ? (d.alias.push(M), process.env.NODE_ENV !== "production" && Kg(d, M)) : (v = v || M, v !== M && v.alias.push(M), p && l.name && !pa(M) && r(l.name)), h.children) {
        const T = h.children;
        for (let rA = 0; rA < T.length; rA++)
          o(T[rA], M, d && d.children[rA]);
      }
      d = d || M, (M.record.components && Object.keys(M.record.components).length || M.record.name || M.record.redirect) && a(M);
    }
    return v ? () => {
      r(v);
    } : Bn;
  }
  function r(l) {
    if (xl(l)) {
      const u = n.get(l);
      u && (n.delete(l), t.splice(t.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r));
    } else {
      const u = t.indexOf(l);
      u > -1 && (t.splice(u, 1), l.record.name && n.delete(l.record.name), l.children.forEach(r), l.alias.forEach(r));
    }
  }
  function s() {
    return t;
  }
  function a(l) {
    let u = 0;
    for (; u < t.length && Xg(l, t[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (l.record.path !== t[u].record.path || !Sl(l, t[u])); )
      u++;
    t.splice(u, 0, l), l.record.name && !pa(l) && n.set(l.record.name, l);
  }
  function c(l, u) {
    let d, p = {}, h, y;
    if ("name" in l && l.name) {
      if (d = n.get(l.name), !d)
        throw Yt(1, {
          location: l
        });
      if (process.env.NODE_ENV !== "production") {
        const v = Object.keys(l.params || {}).filter((P) => !d.keys.find(($) => $.name === P));
        v.length && aA(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = d.record.name, p = uA(
        // paramsFromLocation is a new object
        fa(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        l.params && fa(l.params, d.keys.map((v) => v.name))
      ), h = d.stringify(p);
    } else if ("path" in l)
      h = l.path, process.env.NODE_ENV !== "production" && !h.startsWith("/") && aA(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), d = t.find((v) => v.re.test(h)), d && (p = d.parse(h), y = d.record.name);
    else {
      if (d = u.name ? n.get(u.name) : t.find((v) => v.re.test(u.path)), !d)
        throw Yt(1, {
          location: l,
          currentLocation: u
        });
      y = d.record.name, p = uA({}, u.params, l.params), h = d.stringify(p);
    }
    const _ = [];
    let M = d;
    for (; M; )
      _.unshift(M.record), M = M.parent;
    return {
      name: y,
      path: h,
      params: p,
      matched: _,
      meta: Yg(_)
    };
  }
  return A.forEach((l) => o(l)), { addRoute: o, resolve: c, removeRoute: r, getRoutes: s, getRecordMatcher: i };
}
function fa(A, e) {
  const t = {};
  for (const n of e)
    n in A && (t[n] = A[n]);
  return t;
}
function $g(A) {
  return {
    path: A.path,
    redirect: A.redirect,
    name: A.name,
    meta: A.meta || {},
    aliasOf: void 0,
    beforeEnter: A.beforeEnter,
    props: Gg(A),
    children: A.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in A ? A.components || null : A.component && { default: A.component }
  };
}
function Gg(A) {
  const e = {}, t = A.props || !1;
  if ("component" in A)
    e.default = t;
  else
    for (const n in A.components)
      e[n] = typeof t == "boolean" ? t : t[n];
  return e;
}
function pa(A) {
  for (; A; ) {
    if (A.record.aliasOf)
      return !0;
    A = A.parent;
  }
  return !1;
}
function Yg(A) {
  return A.reduce((e, t) => uA(e, t.meta), {});
}
function ga(A, e) {
  const t = {};
  for (const n in A)
    t[n] = n in e ? e[n] : A[n];
  return t;
}
function sr(A, e) {
  return A.name === e.name && A.optional === e.optional && A.repeatable === e.repeatable;
}
function Kg(A, e) {
  for (const t of A.keys)
    if (!t.optional && !e.keys.find(sr.bind(null, t)))
      return aA(`Alias "${e.record.path}" and the original record: "${A.record.path}" must have the exact same param named "${t.name}"`);
  for (const t of e.keys)
    if (!t.optional && !A.keys.find(sr.bind(null, t)))
      return aA(`Alias "${e.record.path}" and the original record: "${A.record.path}" must have the exact same param named "${t.name}"`);
}
function Jg(A, e) {
  e && e.record.name && !A.name && !A.path && aA(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function qg(A, e) {
  for (const t of e.keys)
    if (!A.keys.find(sr.bind(null, t)))
      return aA(`Absolute path "${A.record.path}" must have the exact same param named "${t.name}" as its parent "${e.record.path}".`);
}
function Sl(A, e) {
  return e.children.some((t) => t === A || Sl(A, t));
}
const Il = /#/g, Wg = /&/g, Zg = /\//g, Ah = /=/g, eh = /\?/g, kl = /\+/g, th = /%5B/g, nh = /%5D/g, _l = /%5E/g, ih = /%60/g, Ml = /%7B/g, oh = /%7C/g, Nl = /%7D/g, rh = /%20/g;
function Jr(A) {
  return encodeURI("" + A).replace(oh, "|").replace(th, "[").replace(nh, "]");
}
function sh(A) {
  return Jr(A).replace(Ml, "{").replace(Nl, "}").replace(_l, "^");
}
function ar(A) {
  return Jr(A).replace(kl, "%2B").replace(rh, "+").replace(Il, "%23").replace(Wg, "%26").replace(ih, "`").replace(Ml, "{").replace(Nl, "}").replace(_l, "^");
}
function ah(A) {
  return ar(A).replace(Ah, "%3D");
}
function ch(A) {
  return Jr(A).replace(Il, "%23").replace(eh, "%3F");
}
function lh(A) {
  return A == null ? "" : ch(A).replace(Zg, "%2F");
}
function _n(A) {
  try {
    return decodeURIComponent("" + A);
  } catch {
    process.env.NODE_ENV !== "production" && aA(`Error decoding "${A}". Using original value`);
  }
  return "" + A;
}
function uh(A) {
  const e = {};
  if (A === "" || A === "?")
    return e;
  const n = (A[0] === "?" ? A.slice(1) : A).split("&");
  for (let i = 0; i < n.length; ++i) {
    const o = n[i].replace(kl, " "), r = o.indexOf("="), s = _n(r < 0 ? o : o.slice(0, r)), a = r < 0 ? null : _n(o.slice(r + 1));
    if (s in e) {
      let c = e[s];
      YA(c) || (c = e[s] = [c]), c.push(a);
    } else
      e[s] = a;
  }
  return e;
}
function ha(A) {
  let e = "";
  for (let t in A) {
    const n = A[t];
    if (t = ah(t), n == null) {
      n !== void 0 && (e += (e.length ? "&" : "") + t);
      continue;
    }
    (YA(n) ? n.map((o) => o && ar(o)) : [n && ar(n)]).forEach((o) => {
      o !== void 0 && (e += (e.length ? "&" : "") + t, o != null && (e += "=" + o));
    });
  }
  return e;
}
function dh(A) {
  const e = {};
  for (const t in A) {
    const n = A[t];
    n !== void 0 && (e[t] = YA(n) ? n.map((i) => i == null ? null : "" + i) : n == null ? n : "" + n);
  }
  return e;
}
const fh = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), ma = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), ao = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Fl = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), cr = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function nn() {
  let A = [];
  function e(n) {
    return A.push(n), () => {
      const i = A.indexOf(n);
      i > -1 && A.splice(i, 1);
    };
  }
  function t() {
    A = [];
  }
  return {
    add: e,
    list: () => A,
    reset: t
  };
}
function Ve(A, e, t, n, i) {
  const o = n && // name is defined if record is because of the function overload
  (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
  return () => new Promise((r, s) => {
    const a = (u) => {
      u === !1 ? s(Yt(4, {
        from: t,
        to: e
      })) : u instanceof Error ? s(u) : _g(u) ? s(Yt(2, {
        from: e,
        to: u
      })) : (o && // since enterCallbackArray is truthy, both record and name also are
      n.enterCallbacks[i] === o && typeof u == "function" && o.push(u), r());
    }, c = A.call(n && n.instances[i], e, t, process.env.NODE_ENV !== "production" ? ph(a, e, t) : a);
    let l = Promise.resolve(c);
    if (A.length < 3 && (l = l.then(a)), process.env.NODE_ENV !== "production" && A.length > 2) {
      const u = `The "next" callback was never called inside of ${A.name ? '"' + A.name + '"' : ""}:
${A.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof c == "object" && "then" in c)
        l = l.then((d) => a._called ? d : (aA(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (c !== void 0 && !a._called) {
        aA(u), s(new Error("Invalid navigation guard"));
        return;
      }
    }
    l.catch((u) => s(u));
  });
}
function ph(A, e, t) {
  let n = 0;
  return function() {
    n++ === 1 && aA(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), A._called = !0, n === 1 && A.apply(null, arguments);
  };
}
function Qo(A, e, t, n) {
  const i = [];
  for (const o of A) {
    process.env.NODE_ENV !== "production" && !o.components && !o.children.length && aA(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in o.components) {
      let s = o.components[r];
      if (process.env.NODE_ENV !== "production") {
        if (!s || typeof s != "object" && typeof s != "function")
          throw aA(`Component "${r}" in record with path "${o.path}" is not a valid component. Received "${String(s)}".`), new Error("Invalid route component");
        if ("then" in s) {
          aA(`Component "${r}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const a = s;
          s = () => a;
        } else
          s.__asyncLoader && // warn only once per component
          !s.__warnedDefineAsync && (s.__warnedDefineAsync = !0, aA(`Component "${r}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(e !== "beforeRouteEnter" && !o.instances[r]))
        if (gh(s)) {
          const c = (s.__vccOpts || s)[e];
          c && i.push(Ve(c, t, n, o, r));
        } else {
          let a = s();
          process.env.NODE_ENV !== "production" && !("catch" in a) && (aA(`Component "${r}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), a = Promise.resolve(a)), i.push(() => a.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));
            const l = pg(c) ? c.default : c;
            o.components[r] = l;
            const d = (l.__vccOpts || l)[e];
            return d && Ve(d, t, n, o, r)();
          }));
        }
    }
  }
  return i;
}
function gh(A) {
  return typeof A == "object" || "displayName" in A || "props" in A || "__vccOpts" in A;
}
function va(A) {
  const e = ue(ao), t = ue(Fl), n = bA(() => e.resolve(le(A.to))), i = bA(() => {
    const { matched: a } = n.value, { length: c } = a, l = a[c - 1], u = t.matched;
    if (!l || !u.length)
      return -1;
    const d = u.findIndex(qe.bind(null, l));
    if (d > -1)
      return d;
    const p = wa(a[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      wa(l) === p && // avoid comparing the child with its parent
      u[u.length - 1].path !== p ? u.findIndex(qe.bind(null, a[c - 2])) : d
    );
  }), o = bA(() => i.value > -1 && wh(t.params, n.value.params)), r = bA(() => i.value > -1 && i.value === t.matched.length - 1 && Cl(t.params, n.value.params));
  function s(a = {}) {
    return vh(a) ? e[le(A.replace) ? "replace" : "push"](
      le(A.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Bn) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ke) {
    const a = Wt();
    if (a) {
      const c = {
        route: n.value,
        isActive: o.value,
        isExactActive: r.value
      };
      a.__vrl_devtools = a.__vrl_devtools || [], a.__vrl_devtools.push(c), Hc(() => {
        c.route = n.value, c.isActive = o.value, c.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: n,
    href: bA(() => n.value.href),
    isActive: o,
    isExactActive: r,
    navigate: s
  };
}
const hh = /* @__PURE__ */ Ao({
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
  useLink: va,
  setup(A, { slots: e }) {
    const t = qt(va(A)), { options: n } = ue(ao), i = bA(() => ({
      [ya(A.activeClass, n.linkActiveClass, "router-link-active")]: t.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ya(A.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
    }));
    return () => {
      const o = e.default && e.default(t);
      return A.custom ? o : jr("a", {
        "aria-current": t.isExactActive ? A.ariaCurrentValue : null,
        href: t.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: t.navigate,
        class: i.value
      }, o);
    };
  }
}), mh = hh;
function vh(A) {
  if (!(A.metaKey || A.altKey || A.ctrlKey || A.shiftKey) && !A.defaultPrevented && !(A.button !== void 0 && A.button !== 0)) {
    if (A.currentTarget && A.currentTarget.getAttribute) {
      const e = A.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e))
        return;
    }
    return A.preventDefault && A.preventDefault(), !0;
  }
}
function wh(A, e) {
  for (const t in e) {
    const n = e[t], i = A[t];
    if (typeof n == "string") {
      if (n !== i)
        return !1;
    } else if (!YA(i) || i.length !== n.length || n.some((o, r) => o !== i[r]))
      return !1;
  }
  return !0;
}
function wa(A) {
  return A ? A.aliasOf ? A.aliasOf.path : A.path : "";
}
const ya = (A, e, t) => A ?? e ?? t, yh = /* @__PURE__ */ Ao({
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
  setup(A, { attrs: e, slots: t }) {
    process.env.NODE_ENV !== "production" && Bh();
    const n = ue(cr), i = bA(() => A.route || n.value), o = ue(ma, 0), r = bA(() => {
      let c = le(o);
      const { matched: l } = i.value;
      let u;
      for (; (u = l[c]) && !u.components; )
        c++;
      return c;
    }), s = bA(() => i.value.matched[r.value]);
    ci(ma, bA(() => r.value + 1)), ci(fh, s), ci(cr, i);
    const a = DA();
    return UA(() => [a.value, s.value, A.name], ([c, l, u], [d, p, h]) => {
      l && (l.instances[u] = c, p && p !== l && c && c === d && (l.leaveGuards.size || (l.leaveGuards = p.leaveGuards), l.updateGuards.size || (l.updateGuards = p.updateGuards))), c && l && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !qe(l, p) || !d) && (l.enterCallbacks[u] || []).forEach((y) => y(c));
    }, { flush: "post" }), () => {
      const c = i.value, l = A.name, u = s.value, d = u && u.components[l];
      if (!d)
        return Ba(t.default, { Component: d, route: c });
      const p = u.props[l], h = p ? p === !0 ? c.params : typeof p == "function" ? p(c) : p : null, _ = jr(d, uA({}, h, e, {
        onVnodeUnmounted: (M) => {
          M.component.isUnmounted && (u.instances[l] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && ke && _.ref) {
        const M = {
          depth: r.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (YA(_.ref) ? _.ref.map((P) => P.i) : [_.ref.i]).forEach((P) => {
          P.__vrv_devtools = M;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ba(t.default, { Component: _, route: c }) || _
      );
    };
  }
});
function Ba(A, e) {
  if (!A)
    return null;
  const t = A(e);
  return t.length === 1 ? t[0] : t;
}
const Tl = yh;
function Bh() {
  const A = Wt(), e = A.parent && A.parent.type.name;
  if (e && (e === "KeepAlive" || e.includes("Transition"))) {
    const t = e === "KeepAlive" ? "keep-alive" : "transition";
    aA(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`);
  }
}
function on(A, e) {
  const t = uA({}, A, {
    // remove variables that can contain vue instances
    matched: A.matched.map((n) => Ih(n, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: A.fullPath,
      tooltip: e,
      value: t
    }
  };
}
function Wn(A) {
  return {
    _custom: {
      display: A
    }
  };
}
let Ph = 0;
function bh(A, e, t) {
  if (e.__hasDevtools)
    return;
  e.__hasDevtools = !0;
  const n = Ph++;
  Gr({
    id: "org.vuejs.router" + (n ? "." + n : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: A
  }, (i) => {
    typeof i.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((l, u) => {
      l.instanceData && l.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: on(e.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: l, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const d = u.__vrv_devtools;
        l.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Hl
        });
      }
      YA(u.__vrl_devtools) && (u.__devtoolsApi = i, u.__vrl_devtools.forEach((d) => {
        let p = Xl, h = "";
        d.isExactActive ? (p = Ll, h = "This is exactly active") : d.isActive && (p = Ol, h = "This link is active"), l.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: h,
          backgroundColor: p
        });
      }));
    }), UA(e.currentRoute, () => {
      a(), i.notifyComponentUpdate(), i.sendInspectorTree(s), i.sendInspectorState(s);
    });
    const o = "router:navigations:" + n;
    i.addTimelineLayer({
      id: o,
      label: `Router${n ? " " + n : ""} Navigations`,
      color: 4237508
    }), e.onError((l, u) => {
      i.addTimelineEvent({
        layerId: o,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: l },
          groupId: u.meta.__navigationId
        }
      });
    });
    let r = 0;
    e.beforeEach((l, u) => {
      const d = {
        guard: Wn("beforeEach"),
        from: on(u, "Current Location during this navigation"),
        to: on(l, "Target location")
      };
      Object.defineProperty(l.meta, "__navigationId", {
        value: r++
      }), i.addTimelineEvent({
        layerId: o,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: l.fullPath,
          data: d,
          groupId: l.meta.__navigationId
        }
      });
    }), e.afterEach((l, u, d) => {
      const p = {
        guard: Wn("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Wn("❌")) : p.status = Wn("✅"), p.from = on(u, "Current Location during this navigation"), p.to = on(l, "Target location"), i.addTimelineEvent({
        layerId: o,
        event: {
          title: "End of navigation",
          subtitle: l.fullPath,
          time: i.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: l.meta.__navigationId
        }
      });
    });
    const s = "router-inspector:" + n;
    i.addInspector({
      id: s,
      label: "Routes" + (n ? " " + n : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!c)
        return;
      const l = c;
      let u = t.getRoutes().filter((d) => !d.parent);
      u.forEach(Vl), l.filter && (u = u.filter((d) => (
        // save matches state based on the payload
        lr(d, l.filter.toLowerCase())
      ))), u.forEach((d) => Rl(d, e.currentRoute.value)), l.rootNodes = u.map(zl);
    }
    let c;
    i.on.getInspectorTree((l) => {
      c = l, l.app === A && l.inspectorId === s && a();
    }), i.on.getInspectorState((l) => {
      if (l.app === A && l.inspectorId === s) {
        const d = t.getRoutes().find((p) => p.record.__vd_id === l.nodeId);
        d && (l.state = {
          options: Dh(d)
        });
      }
    }), i.sendInspectorTree(s), i.sendInspectorState(s);
  });
}
function Eh(A) {
  return A.optional ? A.repeatable ? "*" : "?" : A.repeatable ? "+" : "";
}
function Dh(A) {
  const { record: e } = A, t = [
    { editable: !1, key: "path", value: e.path }
  ];
  return e.name != null && t.push({
    editable: !1,
    key: "name",
    value: e.name
  }), t.push({ editable: !1, key: "regexp", value: A.re }), A.keys.length && t.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: A.keys.map((n) => `${n.name}${Eh(n)}`).join(" "),
        tooltip: "Param keys",
        value: A.keys
      }
    }
  }), e.redirect != null && t.push({
    editable: !1,
    key: "redirect",
    value: e.redirect
  }), A.alias.length && t.push({
    editable: !1,
    key: "aliases",
    value: A.alias.map((n) => n.record.path)
  }), Object.keys(A.record.meta).length && t.push({
    editable: !1,
    key: "meta",
    value: A.record.meta
  }), t.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: A.score.map((n) => n.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: A.score
      }
    }
  }), t;
}
const Hl = 15485081, Ol = 2450411, Ll = 8702998, Ch = 2282478, Xl = 16486972, Qh = 6710886;
function zl(A) {
  const e = [], { record: t } = A;
  t.name != null && e.push({
    label: String(t.name),
    textColor: 0,
    backgroundColor: Ch
  }), t.aliasOf && e.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Xl
  }), A.__vd_match && e.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Hl
  }), A.__vd_exactActive && e.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ll
  }), A.__vd_active && e.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ol
  }), t.redirect && e.push({
    label: typeof t.redirect == "string" ? `redirect: ${t.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: Qh
  });
  let n = t.__vd_id;
  return n == null && (n = String(xh++), t.__vd_id = n), {
    id: n,
    label: t.path,
    tags: e,
    children: A.children.map(zl)
  };
}
let xh = 0;
const Sh = /^\/(.*)\/([a-z]*)$/;
function Rl(A, e) {
  const t = e.matched.length && qe(e.matched[e.matched.length - 1], A.record);
  A.__vd_exactActive = A.__vd_active = t, t || (A.__vd_active = e.matched.some((n) => qe(n, A.record))), A.children.forEach((n) => Rl(n, e));
}
function Vl(A) {
  A.__vd_match = !1, A.children.forEach(Vl);
}
function lr(A, e) {
  const t = String(A.re).match(Sh);
  if (A.__vd_match = !1, !t || t.length < 3)
    return !1;
  if (new RegExp(t[1].replace(/\$$/, ""), t[2]).test(e))
    return A.children.forEach((r) => lr(r, e)), A.record.path !== "/" || e === "/" ? (A.__vd_match = A.re.test(e), !0) : !1;
  const i = A.record.path.toLowerCase(), o = _n(i);
  return !e.startsWith("/") && (o.includes(e) || i.includes(e)) || o.startsWith(e) || i.startsWith(e) || A.record.name && String(A.record.name).includes(e) ? !0 : A.children.some((r) => lr(r, e));
}
function Ih(A, e) {
  const t = {};
  for (const n in A)
    e.includes(n) || (t[n] = A[n]);
  return t;
}
function kh(A) {
  const e = jg(A.routes, A), t = A.parseQuery || uh, n = A.stringifyQuery || ha, i = A.history;
  if (process.env.NODE_ENV !== "production" && !i)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const o = nn(), r = nn(), s = nn(), a = fd(Oe);
  let c = Oe;
  ke && A.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const l = Do.bind(null, (w) => "" + w), u = Do.bind(null, lh), d = (
    // @ts-expect-error: intentionally avoid the type check
    Do.bind(null, _n)
  );
  function p(w, X) {
    let H, V;
    return xl(w) ? (H = e.getRecordMatcher(w), V = X) : V = w, e.addRoute(V, H);
  }
  function h(w) {
    const X = e.getRecordMatcher(w);
    X ? e.removeRoute(X) : process.env.NODE_ENV !== "production" && aA(`Cannot remove non-existent route "${String(w)}"`);
  }
  function y() {
    return e.getRoutes().map((w) => w.record);
  }
  function _(w) {
    return !!e.getRecordMatcher(w);
  }
  function M(w, X) {
    if (X = uA({}, X || a.value), typeof w == "string") {
      const eA = Co(t, w, X.path), f = e.resolve({ path: eA.path }, X), g = i.createHref(eA.fullPath);
      return process.env.NODE_ENV !== "production" && (g.startsWith("//") ? aA(`Location "${w}" resolved to "${g}". A resolved location cannot start with multiple slashes.`) : f.matched.length || aA(`No match found for location with path "${w}"`)), uA(eA, f, {
        params: d(f.params),
        hash: _n(eA.hash),
        redirectedFrom: void 0,
        href: g
      });
    }
    let H;
    if ("path" in w)
      process.env.NODE_ENV !== "production" && "params" in w && !("name" in w) && // @ts-expect-error: the type is never
      Object.keys(w.params).length && aA(`Path "${// @ts-expect-error: the type is never
      w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), H = uA({}, w, {
        path: Co(t, w.path, X.path).path
      });
    else {
      const eA = uA({}, w.params);
      for (const f in eA)
        eA[f] == null && delete eA[f];
      H = uA({}, w, {
        params: u(w.params)
      }), X.params = u(X.params);
    }
    const V = e.resolve(H, X), cA = w.hash || "";
    process.env.NODE_ENV !== "production" && cA && !cA.startsWith("#") && aA(`A \`hash\` should always start with the character "#". Replace "${cA}" with "#${cA}".`), V.params = l(d(V.params));
    const wA = mg(n, uA({}, w, {
      hash: sh(cA),
      path: V.path
    })), nA = i.createHref(wA);
    return process.env.NODE_ENV !== "production" && (nA.startsWith("//") ? aA(`Location "${w}" resolved to "${nA}". A resolved location cannot start with multiple slashes.`) : V.matched.length || aA(`No match found for location with path "${"path" in w ? w.path : w}"`)), uA({
      fullPath: wA,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: cA,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        n === ha ? dh(w.query) : w.query || {}
      )
    }, V, {
      redirectedFrom: void 0,
      href: nA
    });
  }
  function v(w) {
    return typeof w == "string" ? Co(t, w, a.value.path) : uA({}, w);
  }
  function P(w, X) {
    if (c !== w)
      return Yt(8, {
        from: X,
        to: w
      });
  }
  function $(w) {
    return L(w);
  }
  function T(w) {
    return $(uA(v(w), { replace: !0 }));
  }
  function rA(w) {
    const X = w.matched[w.matched.length - 1];
    if (X && X.redirect) {
      const { redirect: H } = X;
      let V = typeof H == "function" ? H(w) : H;
      if (typeof V == "string" && (V = V.includes("?") || V.includes("#") ? V = v(V) : (
        // force empty params
        { path: V }
      ), V.params = {}), process.env.NODE_ENV !== "production" && !("path" in V) && !("name" in V))
        throw aA(`Invalid redirect found:
${JSON.stringify(V, null, 2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return uA({
        query: w.query,
        hash: w.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in V ? {} : w.params
      }, V);
    }
  }
  function L(w, X) {
    const H = c = M(w), V = a.value, cA = w.state, wA = w.force, nA = w.replace === !0, eA = rA(H);
    if (eA)
      return L(
        uA(v(eA), {
          state: typeof eA == "object" ? uA({}, cA, eA.state) : cA,
          force: wA,
          replace: nA
        }),
        // keep original redirectedFrom if it exists
        X || H
      );
    const f = H;
    f.redirectedFrom = X;
    let g;
    return !wA && ra(n, V, H) && (g = Yt(16, { to: f, from: V }), JA(
      V,
      V,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (g ? Promise.resolve(g) : x(f, V)).catch((m) => Qe(m) ? (
      // navigation redirects still mark the router as ready
      Qe(
        m,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? m : _A(m)
    ) : (
      // reject any unknown error
      D(m, f, V)
    )).then((m) => {
      if (m) {
        if (Qe(
          m,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          ra(n, M(m.to), f) && // and we have done it a couple of times
          X && // @ts-expect-error: added only in dev
          (X._count = X._count ? (
            // @ts-expect-error
            X._count + 1
          ) : 1) > 10 ? (aA(`Detected an infinite redirection in a navigation guard when going from "${V.fullPath}" to "${f.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            uA({
              // preserve an existing replacement but allow the redirect to override it
              replace: nA
            }, v(m.to), {
              state: typeof m.to == "object" ? uA({}, cA, m.to.state) : cA,
              force: wA
            }),
            // preserve the original redirectedFrom if any
            X || f
          );
      } else
        m = G(f, V, !0, nA, cA);
      return C(f, V, m), m;
    });
  }
  function z(w, X) {
    const H = P(w, X);
    return H ? Promise.reject(H) : Promise.resolve();
  }
  function x(w, X) {
    let H;
    const [V, cA, wA] = _h(w, X);
    H = Qo(V.reverse(), "beforeRouteLeave", w, X);
    for (const eA of V)
      eA.leaveGuards.forEach((f) => {
        H.push(Ve(f, w, X));
      });
    const nA = z.bind(null, w, X);
    return H.push(nA), It(H).then(() => {
      H = [];
      for (const eA of o.list())
        H.push(Ve(eA, w, X));
      return H.push(nA), It(H);
    }).then(() => {
      H = Qo(cA, "beforeRouteUpdate", w, X);
      for (const eA of cA)
        eA.updateGuards.forEach((f) => {
          H.push(Ve(f, w, X));
        });
      return H.push(nA), It(H);
    }).then(() => {
      H = [];
      for (const eA of w.matched)
        if (eA.beforeEnter && !X.matched.includes(eA))
          if (YA(eA.beforeEnter))
            for (const f of eA.beforeEnter)
              H.push(Ve(f, w, X));
          else
            H.push(Ve(eA.beforeEnter, w, X));
      return H.push(nA), It(H);
    }).then(() => (w.matched.forEach((eA) => eA.enterCallbacks = {}), H = Qo(wA, "beforeRouteEnter", w, X), H.push(nA), It(H))).then(() => {
      H = [];
      for (const eA of r.list())
        H.push(Ve(eA, w, X));
      return H.push(nA), It(H);
    }).catch((eA) => Qe(
      eA,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? eA : Promise.reject(eA));
  }
  function C(w, X, H) {
    for (const V of s.list())
      V(w, X, H);
  }
  function G(w, X, H, V, cA) {
    const wA = P(w, X);
    if (wA)
      return wA;
    const nA = X === Oe, eA = ke ? history.state : {};
    H && (V || nA ? i.replace(w.fullPath, uA({
      scroll: nA && eA && eA.scroll
    }, cA)) : i.push(w.fullPath, cA)), a.value = w, JA(w, X, H, nA), _A();
  }
  let I;
  function AA() {
    I || (I = i.listen((w, X, H) => {
      if (!fA.listening)
        return;
      const V = M(w), cA = rA(V);
      if (cA) {
        L(uA(cA, { replace: !0 }), V).catch(Bn);
        return;
      }
      c = V;
      const wA = a.value;
      ke && Dg(aa(wA.fullPath, H.delta), so()), x(V, wA).catch((nA) => Qe(
        nA,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? nA : Qe(
        nA,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        nA.to,
        V
        // avoid an uncaught rejection, let push call triggerError
      ).then((eA) => {
        Qe(
          eA,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !H.delta && H.type === kn.pop && i.go(-1, !1);
      }).catch(Bn), Promise.reject()) : (H.delta && i.go(-H.delta, !1), D(nA, V, wA))).then((nA) => {
        nA = nA || G(
          // after navigation, all matched components are resolved
          V,
          wA,
          !1
        ), nA && (H.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Qe(
          nA,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? i.go(-H.delta, !1) : H.type === kn.pop && Qe(
          nA,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && i.go(-1, !1)), C(V, wA, nA);
      }).catch(Bn);
    }));
  }
  let pA = nn(), PA = nn(), iA;
  function D(w, X, H) {
    _A(w);
    const V = PA.list();
    return V.length ? V.forEach((cA) => cA(w, X, H)) : (process.env.NODE_ENV !== "production" && aA("uncaught error during route navigation:"), console.error(w)), Promise.reject(w);
  }
  function J() {
    return iA && a.value !== Oe ? Promise.resolve() : new Promise((w, X) => {
      pA.add([w, X]);
    });
  }
  function _A(w) {
    return iA || (iA = !w, AA(), pA.list().forEach(([X, H]) => w ? H(w) : X()), pA.reset()), w;
  }
  function JA(w, X, H, V) {
    const { scrollBehavior: cA } = A;
    if (!ke || !cA)
      return Promise.resolve();
    const wA = !H && Cg(aa(w.fullPath, 0)) || (V || !H) && history.state && history.state.scroll || null;
    return Vt().then(() => cA(w, X, wA)).then((nA) => nA && Eg(nA)).catch((nA) => D(nA, w, X));
  }
  const MA = (w) => i.go(w);
  let qA;
  const B = /* @__PURE__ */ new Set(), fA = {
    currentRoute: a,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    hasRoute: _,
    getRoutes: y,
    resolve: M,
    options: A,
    push: $,
    replace: T,
    go: MA,
    back: () => MA(-1),
    forward: () => MA(1),
    beforeEach: o.add,
    beforeResolve: r.add,
    afterEach: s.add,
    onError: PA.add,
    isReady: J,
    install(w) {
      const X = this;
      w.component("RouterLink", mh), w.component("RouterView", Tl), w.config.globalProperties.$router = X, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => le(a)
      }), ke && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !qA && a.value === Oe && (qA = !0, $(i.location).catch((cA) => {
        process.env.NODE_ENV !== "production" && aA("Unexpected error when starting the router:", cA);
      }));
      const H = {};
      for (const cA in Oe)
        H[cA] = bA(() => a.value[cA]);
      w.provide(ao, X), w.provide(Fl, qt(H)), w.provide(cr, a);
      const V = w.unmount;
      B.add(w), w.unmount = function() {
        B.delete(w), B.size < 1 && (c = Oe, I && I(), I = null, a.value = Oe, qA = !1, iA = !1), V();
      }, process.env.NODE_ENV !== "production" && ke && bh(w, X, e);
    }
  };
  return fA;
}
function It(A) {
  return A.reduce((e, t) => e.then(() => t()), Promise.resolve());
}
function _h(A, e) {
  const t = [], n = [], i = [], o = Math.max(e.matched.length, A.matched.length);
  for (let r = 0; r < o; r++) {
    const s = e.matched[r];
    s && (A.matched.find((c) => qe(c, s)) ? n.push(s) : t.push(s));
    const a = A.matched[r];
    a && (e.matched.find((c) => qe(c, a)) || i.push(a));
  }
  return [t, n, i];
}
function Mh() {
  return ue(ao);
}
const Nh = {
  __name: "App",
  setup(A) {
    return (e, t) => (tA(), ye(le(Tl)));
  }
}, Fh = [
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
], Th = [
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
], ur = {
  bottlenecks: Fh,
  solutions: Th
}, Hh = [
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
], Oh = [
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
], dr = {
  bottlenecks: Hh,
  solutions: Oh
}, Lh = fg("bottleneck", () => (Mh(), {
  analysis: ur,
  tags: dr
}));
var Xh = Object.defineProperty, zh = Object.defineProperties, Rh = Object.getOwnPropertyDescriptors, Pa = Object.getOwnPropertySymbols, Vh = Object.prototype.hasOwnProperty, Uh = Object.prototype.propertyIsEnumerable, ba = (A, e, t) => e in A ? Xh(A, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : A[e] = t, kt = (A, e) => {
  for (var t in e || (e = {}))
    Vh.call(e, t) && ba(A, t, e[t]);
  if (Pa)
    for (var t of Pa(e))
      Uh.call(e, t) && ba(A, t, e[t]);
  return A;
}, Ea = (A, e) => zh(A, Rh(e));
const jh = {
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
    open(A) {
      this.autoscroll && A && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var A;
      const e = ((A = this.$refs.dropdownMenu) == null ? void 0 : A.children[this.typeAheadPointer]) || !1;
      if (e) {
        const t = this.getDropdownViewport(), { top: n, bottom: i, height: o } = e.getBoundingClientRect();
        if (n < t.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (i > t.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (t.height - o);
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
}, $h = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let A = 0; A < this.filteredOptions.length; A++)
        if (this.selectable(this.filteredOptions[A])) {
          this.typeAheadPointer = A;
          break;
        }
    },
    open(A) {
      A && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let A = this.typeAheadPointer - 1; A >= 0; A--)
        if (this.selectable(this.filteredOptions[A])) {
          this.typeAheadPointer = A;
          break;
        }
    },
    typeAheadDown() {
      for (let A = this.typeAheadPointer + 1; A < this.filteredOptions.length; A++)
        if (this.selectable(this.filteredOptions[A])) {
          this.typeAheadPointer = A;
          break;
        }
    },
    typeAheadSelect() {
      const A = this.filteredOptions[this.typeAheadPointer];
      A && this.selectable(A) && this.select(A);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Gh = {
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
    loading(A) {
      this.mutableLoading = A;
    }
  },
  methods: {
    toggleLoading(A = null) {
      return A == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = A;
    }
  }
}, qr = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, Yh = {}, Kh = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Jh = /* @__PURE__ */ K("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), qh = [
  Jh
];
function Wh(A, e) {
  return tA(), dA("svg", Kh, qh);
}
const Zh = /* @__PURE__ */ qr(Yh, [["render", Wh]]), Am = {}, em = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, tm = /* @__PURE__ */ K("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), nm = [
  tm
];
function im(A, e) {
  return tA(), dA("svg", em, nm);
}
const om = /* @__PURE__ */ qr(Am, [["render", im]]), Da = {
  Deselect: Zh,
  OpenIndicator: om
}, rm = {
  mounted(A, { instance: e }) {
    if (e.appendToBody) {
      const {
        height: t,
        top: n,
        left: i,
        width: o
      } = e.$refs.toggle.getBoundingClientRect();
      let r = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
      A.unbindPosition = e.calculatePosition(A, e, {
        width: o + "px",
        left: r + i + "px",
        top: s + n + t + "px"
      }), document.body.appendChild(A);
    }
  },
  unmounted(A, { instance: e }) {
    e.appendToBody && (A.unbindPosition && typeof A.unbindPosition == "function" && A.unbindPosition(), A.parentNode && A.parentNode.removeChild(A));
  }
};
function sm(A) {
  const e = {};
  return Object.keys(A).sort().forEach((t) => {
    e[t] = A[t];
  }), JSON.stringify(e);
}
let am = 0;
function cm() {
  return ++am;
}
const lm = {
  components: kt({}, Da),
  directives: { appendToBody: rm },
  mixins: [jh, $h, Gh],
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
      default: (A) => A
    },
    selectable: {
      type: Function,
      default: (A) => !0
    },
    getOptionLabel: {
      type: Function,
      default(A) {
        return typeof A == "object" ? A.hasOwnProperty(this.label) ? A[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(A)}.
https://vue-select.org/api/props.html#getoptionlabel`) : A;
      }
    },
    getOptionKey: {
      type: Function,
      default(A) {
        if (typeof A != "object")
          return A;
        try {
          return A.hasOwnProperty("id") ? A.id : sm(A);
        } catch (e) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, A, e);
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
      default(A, e, t) {
        return (e || "").toLocaleLowerCase().indexOf(t.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(A, e) {
        return A.filter((t) => {
          let n = this.getOptionLabel(t);
          return typeof n == "number" && (n = n.toString()), this.filterBy(t, n, e);
        });
      }
    },
    createOption: {
      type: Function,
      default(A) {
        return typeof this.optionList[0] == "object" ? { [this.label]: A } : A;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (A) => ["function", "boolean"].includes(typeof A)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: A, multiple: e }) {
        return A && !e;
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
      default: (A, e) => A
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(A, e, { width: t, top: n, left: i }) {
        A.style.top = n, A.style.left = i, A.style.width = t;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: A, open: e, mutableLoading: t }) {
        return A ? !1 : e && !t;
      }
    },
    uid: {
      type: [String, Number],
      default: () => cm()
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
      let A = this.modelValue;
      return this.isTrackingValues && (A = this.$data._value), A != null && A !== "" ? [].concat(A) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const A = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: kt({
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
            input: (e) => this.search = e.target.value
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
        listHeader: A,
        listFooter: A,
        header: Ea(kt({}, A), { deselect: this.deselect }),
        footer: Ea(kt({}, A), { deselect: this.deselect })
      };
    },
    childComponents() {
      return kt(kt({}, Da), this.components);
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
      const A = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return A;
      const e = this.search.length ? this.filter(A, this.search, this) : A;
      if (this.taggable && this.search.length) {
        const t = this.createOption(this.search);
        this.optionExists(t) || e.unshift(t);
      }
      return e;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(A, e) {
      const t = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(A, e, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && t() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(A) {
        this.isTrackingValues && this.setInternalValueFromOptions(A);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(A) {
      this.$emit(A ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(A) {
      Array.isArray(A) ? this.$data._value = A.map((e) => this.findOptionFromReducedValue(e)) : this.$data._value = this.findOptionFromReducedValue(A);
    },
    select(A) {
      this.$emit("option:selecting", A), this.isOptionSelected(A) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(A) : (this.taggable && !this.optionExists(A) && (this.$emit("option:created", A), this.pushTag(A)), this.multiple && (A = this.selectedValue.concat(A)), this.updateValue(A), this.$emit("option:selected", A)), this.onAfterSelect(A);
    },
    deselect(A) {
      this.$emit("option:deselecting", A), this.updateValue(this.selectedValue.filter((e) => !this.optionComparator(e, A))), this.$emit("option:deselected", A);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(A) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(A) {
      typeof this.modelValue > "u" && (this.$data._value = A), A !== null && (Array.isArray(A) ? A = A.map((e) => this.reduce(e)) : A = this.reduce(A)), this.$emit("update:modelValue", A);
    },
    toggleDropdown(A) {
      const e = A.target !== this.searchEl;
      e && A.preventDefault();
      const t = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || t.filter(Boolean).some((n) => n.contains(A.target) || n === A.target)) {
        A.preventDefault();
        return;
      }
      this.open && e ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(A) {
      return this.selectedValue.some((e) => this.optionComparator(e, A));
    },
    isOptionDeselectable(A) {
      return this.isOptionSelected(A) && this.deselectFromDropdown;
    },
    optionComparator(A, e) {
      return this.getOptionKey(A) === this.getOptionKey(e);
    },
    findOptionFromReducedValue(A) {
      const e = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(A), t = [...this.options, ...this.pushedTags].filter(e);
      return t.length === 1 ? t[0] : t.find((n) => this.optionComparator(n, this.$data._value)) || A;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let A = null;
        this.multiple && (A = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(A);
      }
    },
    optionExists(A) {
      return this.optionList.some((e) => this.optionComparator(e, A));
    },
    normalizeOptionForSlot(A) {
      return typeof A == "object" ? A : { [this.label]: A };
    },
    pushTag(A) {
      this.pushedTags.push(A);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: A, multiple: e } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: A, multiple: e }) && (this.search = ""), this.closeSearchOptions();
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
    onSearchKeyDown(A) {
      const e = (i) => (i.preventDefault(), !this.isComposing && this.typeAheadSelect()), t = {
        8: (i) => this.maybeDeleteValue(),
        9: (i) => this.onTab(),
        27: (i) => this.onEscape(),
        38: (i) => (i.preventDefault(), this.typeAheadUp()),
        40: (i) => (i.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((i) => t[i] = e);
      const n = this.mapKeydown(t, this);
      if (typeof n[A.keyCode] == "function")
        return n[A.keyCode](A);
    }
  }
}, um = ["dir"], dm = ["id", "aria-expanded", "aria-owns"], fm = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pm = ["disabled", "title", "aria-label", "onClick"], gm = {
  ref: "actions",
  class: "vs__actions"
}, hm = ["disabled"], mm = { class: "vs__spinner" }, vm = ["id"], wm = ["id", "aria-selected", "onMouseover", "onClick"], ym = {
  key: 0,
  class: "vs__no-options"
}, Bm = /* @__PURE__ */ $t(" Sorry, no matching options. "), Pm = ["id"];
function bm(A, e, t, n, i, o) {
  const r = pf("append-to-body");
  return tA(), dA("div", {
    dir: t.dir,
    class: ve(["v-select", o.stateClasses])
  }, [
    jA(A.$slots, "header", ne(ie(o.scope.header))),
    K("div", {
      id: `vs${t.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${t.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => o.toggleDropdown(s))
    }, [
      K("div", fm, [
        (tA(!0), dA(QA, null, Ut(o.selectedValue, (s, a) => jA(A.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(s),
          deselect: o.deselect,
          multiple: t.multiple,
          disabled: t.disabled
        }, () => [
          (tA(), dA("span", {
            key: t.getOptionKey(s),
            class: "vs__selected"
          }, [
            jA(A.$slots, "selected-option", ne(ie(o.normalizeOptionForSlot(s))), () => [
              $t(Xe(t.getOptionLabel(s)), 1)
            ]),
            t.multiple ? (tA(), dA("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => i.deselectButtons[a] = c,
              disabled: t.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${t.getOptionLabel(s)}`,
              "aria-label": `Deselect ${t.getOptionLabel(s)}`,
              onClick: (c) => o.deselect(s)
            }, [
              (tA(), ye(vo(o.childComponents.Deselect)))
            ], 8, pm)) : Ge("", !0)
          ]))
        ])), 256)),
        jA(A.$slots, "search", ne(ie(o.scope.search)), () => [
          K("input", _i({ class: "vs__search" }, o.scope.search.attributes, gf(o.scope.search.events)), null, 16)
        ])
      ], 512),
      K("div", gm, [
        Xt(K("button", {
          ref: "clearButton",
          disabled: t.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => o.clearSelection && o.clearSelection(...s))
        }, [
          (tA(), ye(vo(o.childComponents.Deselect)))
        ], 8, hm), [
          [Ar, o.showClearButton]
        ]),
        jA(A.$slots, "open-indicator", ne(ie(o.scope.openIndicator)), () => [
          t.noDrop ? Ge("", !0) : (tA(), ye(vo(o.childComponents.OpenIndicator), ne(_i({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        jA(A.$slots, "spinner", ne(ie(o.scope.spinner)), () => [
          Xt(K("div", mm, "Loading...", 512), [
            [Ar, A.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, dm),
    EA(oo, { name: t.transition }, {
      default: Zi(() => [
        o.dropdownOpen ? Xt((tA(), dA("ul", {
          id: `vs${t.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${t.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = Zo((...s) => o.onMousedown && o.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => o.onMouseUp && o.onMouseUp(...s))
        }, [
          jA(A.$slots, "list-header", ne(ie(o.scope.listHeader))),
          (tA(!0), dA(QA, null, Ut(o.filteredOptions, (s, a) => (tA(), dA("li", {
            id: `vs${t.uid}__option-${a}`,
            key: t.getOptionKey(s),
            role: "option",
            class: ve(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(s) && a === A.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(s),
              "vs__dropdown-option--highlight": a === A.typeAheadPointer,
              "vs__dropdown-option--disabled": !t.selectable(s)
            }]),
            "aria-selected": a === A.typeAheadPointer ? !0 : null,
            onMouseover: (c) => t.selectable(s) ? A.typeAheadPointer = a : null,
            onClick: Zo((c) => t.selectable(s) ? o.select(s) : null, ["prevent", "stop"])
          }, [
            jA(A.$slots, "option", ne(ie(o.normalizeOptionForSlot(s))), () => [
              $t(Xe(t.getOptionLabel(s)), 1)
            ])
          ], 42, wm))), 128)),
          o.filteredOptions.length === 0 ? (tA(), dA("li", ym, [
            jA(A.$slots, "no-options", ne(ie(o.scope.noOptions)), () => [
              Bm
            ])
          ])) : Ge("", !0),
          jA(A.$slots, "list-footer", ne(ie(o.scope.listFooter)))
        ], 40, vm)), [
          [r]
        ]) : (tA(), dA("ul", {
          key: 1,
          id: `vs${t.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Pm))
      ]),
      _: 3
    }, 8, ["name"]),
    jA(A.$slots, "footer", ne(ie(o.scope.footer)))
  ], 10, um);
}
const Em = /* @__PURE__ */ qr(lm, [["render", bm]]);
const zt = {
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
function Ca(A, e) {
  return A == null || e == null ? NaN : e < A ? -1 : e > A ? 1 : e >= A ? 0 : NaN;
}
var Dm = { value: () => {
} };
function Ul() {
  for (var A = 0, e = arguments.length, t = {}, n; A < e; ++A) {
    if (!(n = arguments[A] + "") || n in t || /[\s.]/.test(n))
      throw new Error("illegal type: " + n);
    t[n] = [];
  }
  return new hi(t);
}
function hi(A) {
  this._ = A;
}
function Cm(A, e) {
  return A.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    if (i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name: n };
  });
}
hi.prototype = Ul.prototype = {
  constructor: hi,
  on: function(A, e) {
    var t = this._, n = Cm(A + "", t), i, o = -1, r = n.length;
    if (arguments.length < 2) {
      for (; ++o < r; )
        if ((i = (A = n[o]).type) && (i = Qm(t[i], A.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < r; )
      if (i = (A = n[o]).type)
        t[i] = Qa(t[i], A.name, e);
      else if (e == null)
        for (i in t)
          t[i] = Qa(t[i], A.name, null);
    return this;
  },
  copy: function() {
    var A = {}, e = this._;
    for (var t in e)
      A[t] = e[t].slice();
    return new hi(A);
  },
  call: function(A, e) {
    if ((i = arguments.length - 2) > 0)
      for (var t = new Array(i), n = 0, i, o; n < i; ++n)
        t[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(A))
      throw new Error("unknown type: " + A);
    for (o = this._[A], n = 0, i = o.length; n < i; ++n)
      o[n].value.apply(e, t);
  },
  apply: function(A, e, t) {
    if (!this._.hasOwnProperty(A))
      throw new Error("unknown type: " + A);
    for (var n = this._[A], i = 0, o = n.length; i < o; ++i)
      n[i].value.apply(e, t);
  }
};
function Qm(A, e) {
  for (var t = 0, n = A.length, i; t < n; ++t)
    if ((i = A[t]).name === e)
      return i.value;
}
function Qa(A, e, t) {
  for (var n = 0, i = A.length; n < i; ++n)
    if (A[n].name === e) {
      A[n] = Dm, A = A.slice(0, n).concat(A.slice(n + 1));
      break;
    }
  return t != null && A.push({ name: e, value: t }), A;
}
var fr = "http://www.w3.org/1999/xhtml";
const xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: fr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function co(A) {
  var e = A += "", t = e.indexOf(":");
  return t >= 0 && (e = A.slice(0, t)) !== "xmlns" && (A = A.slice(t + 1)), xa.hasOwnProperty(e) ? { space: xa[e], local: A } : A;
}
function xm(A) {
  return function() {
    var e = this.ownerDocument, t = this.namespaceURI;
    return t === fr && e.documentElement.namespaceURI === fr ? e.createElement(A) : e.createElementNS(t, A);
  };
}
function Sm(A) {
  return function() {
    return this.ownerDocument.createElementNS(A.space, A.local);
  };
}
function Wr(A) {
  var e = co(A);
  return (e.local ? Sm : xm)(e);
}
function Im() {
}
function Zr(A) {
  return A == null ? Im : function() {
    return this.querySelector(A);
  };
}
function km(A) {
  typeof A != "function" && (A = Zr(A));
  for (var e = this._groups, t = e.length, n = new Array(t), i = 0; i < t; ++i)
    for (var o = e[i], r = o.length, s = n[i] = new Array(r), a, c, l = 0; l < r; ++l)
      (a = o[l]) && (c = A.call(a, a.__data__, l, o)) && ("__data__" in a && (c.__data__ = a.__data__), s[l] = c);
  return new KA(n, this._parents);
}
function _m(A) {
  return A == null ? [] : Array.isArray(A) ? A : Array.from(A);
}
function Mm() {
  return [];
}
function jl(A) {
  return A == null ? Mm : function() {
    return this.querySelectorAll(A);
  };
}
function Nm(A) {
  return function() {
    return _m(A.apply(this, arguments));
  };
}
function Fm(A) {
  typeof A == "function" ? A = Nm(A) : A = jl(A);
  for (var e = this._groups, t = e.length, n = [], i = [], o = 0; o < t; ++o)
    for (var r = e[o], s = r.length, a, c = 0; c < s; ++c)
      (a = r[c]) && (n.push(A.call(a, a.__data__, c, r)), i.push(a));
  return new KA(n, i);
}
function $l(A) {
  return function() {
    return this.matches(A);
  };
}
function Gl(A) {
  return function(e) {
    return e.matches(A);
  };
}
var Tm = Array.prototype.find;
function Hm(A) {
  return function() {
    return Tm.call(this.children, A);
  };
}
function Om() {
  return this.firstElementChild;
}
function Lm(A) {
  return this.select(A == null ? Om : Hm(typeof A == "function" ? A : Gl(A)));
}
var Xm = Array.prototype.filter;
function zm() {
  return Array.from(this.children);
}
function Rm(A) {
  return function() {
    return Xm.call(this.children, A);
  };
}
function Vm(A) {
  return this.selectAll(A == null ? zm : Rm(typeof A == "function" ? A : Gl(A)));
}
function Um(A) {
  typeof A != "function" && (A = $l(A));
  for (var e = this._groups, t = e.length, n = new Array(t), i = 0; i < t; ++i)
    for (var o = e[i], r = o.length, s = n[i] = [], a, c = 0; c < r; ++c)
      (a = o[c]) && A.call(a, a.__data__, c, o) && s.push(a);
  return new KA(n, this._parents);
}
function Yl(A) {
  return new Array(A.length);
}
function jm() {
  return new KA(this._enter || this._groups.map(Yl), this._parents);
}
function Ni(A, e) {
  this.ownerDocument = A.ownerDocument, this.namespaceURI = A.namespaceURI, this._next = null, this._parent = A, this.__data__ = e;
}
Ni.prototype = {
  constructor: Ni,
  appendChild: function(A) {
    return this._parent.insertBefore(A, this._next);
  },
  insertBefore: function(A, e) {
    return this._parent.insertBefore(A, e);
  },
  querySelector: function(A) {
    return this._parent.querySelector(A);
  },
  querySelectorAll: function(A) {
    return this._parent.querySelectorAll(A);
  }
};
function $m(A) {
  return function() {
    return A;
  };
}
function Gm(A, e, t, n, i, o) {
  for (var r = 0, s, a = e.length, c = o.length; r < c; ++r)
    (s = e[r]) ? (s.__data__ = o[r], n[r] = s) : t[r] = new Ni(A, o[r]);
  for (; r < a; ++r)
    (s = e[r]) && (i[r] = s);
}
function Ym(A, e, t, n, i, o, r) {
  var s, a, c = /* @__PURE__ */ new Map(), l = e.length, u = o.length, d = new Array(l), p;
  for (s = 0; s < l; ++s)
    (a = e[s]) && (d[s] = p = r.call(a, a.__data__, s, e) + "", c.has(p) ? i[s] = a : c.set(p, a));
  for (s = 0; s < u; ++s)
    p = r.call(A, o[s], s, o) + "", (a = c.get(p)) ? (n[s] = a, a.__data__ = o[s], c.delete(p)) : t[s] = new Ni(A, o[s]);
  for (s = 0; s < l; ++s)
    (a = e[s]) && c.get(d[s]) === a && (i[s] = a);
}
function Km(A) {
  return A.__data__;
}
function Jm(A, e) {
  if (!arguments.length)
    return Array.from(this, Km);
  var t = e ? Ym : Gm, n = this._parents, i = this._groups;
  typeof A != "function" && (A = $m(A));
  for (var o = i.length, r = new Array(o), s = new Array(o), a = new Array(o), c = 0; c < o; ++c) {
    var l = n[c], u = i[c], d = u.length, p = qm(A.call(l, l && l.__data__, c, n)), h = p.length, y = s[c] = new Array(h), _ = r[c] = new Array(h), M = a[c] = new Array(d);
    t(l, u, y, _, M, p, e);
    for (var v = 0, P = 0, $, T; v < h; ++v)
      if ($ = y[v]) {
        for (v >= P && (P = v + 1); !(T = _[P]) && ++P < h; )
          ;
        $._next = T || null;
      }
  }
  return r = new KA(r, n), r._enter = s, r._exit = a, r;
}
function qm(A) {
  return typeof A == "object" && "length" in A ? A : Array.from(A);
}
function Wm() {
  return new KA(this._exit || this._groups.map(Yl), this._parents);
}
function Zm(A, e, t) {
  var n = this.enter(), i = this, o = this.exit();
  return typeof A == "function" ? (n = A(n), n && (n = n.selection())) : n = n.append(A + ""), e != null && (i = e(i), i && (i = i.selection())), t == null ? o.remove() : t(o), n && i ? n.merge(i).order() : i;
}
function Av(A) {
  for (var e = A.selection ? A.selection() : A, t = this._groups, n = e._groups, i = t.length, o = n.length, r = Math.min(i, o), s = new Array(i), a = 0; a < r; ++a)
    for (var c = t[a], l = n[a], u = c.length, d = s[a] = new Array(u), p, h = 0; h < u; ++h)
      (p = c[h] || l[h]) && (d[h] = p);
  for (; a < i; ++a)
    s[a] = t[a];
  return new KA(s, this._parents);
}
function ev() {
  for (var A = this._groups, e = -1, t = A.length; ++e < t; )
    for (var n = A[e], i = n.length - 1, o = n[i], r; --i >= 0; )
      (r = n[i]) && (o && r.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(r, o), o = r);
  return this;
}
function tv(A) {
  A || (A = nv);
  function e(u, d) {
    return u && d ? A(u.__data__, d.__data__) : !u - !d;
  }
  for (var t = this._groups, n = t.length, i = new Array(n), o = 0; o < n; ++o) {
    for (var r = t[o], s = r.length, a = i[o] = new Array(s), c, l = 0; l < s; ++l)
      (c = r[l]) && (a[l] = c);
    a.sort(e);
  }
  return new KA(i, this._parents).order();
}
function nv(A, e) {
  return A < e ? -1 : A > e ? 1 : A >= e ? 0 : NaN;
}
function iv() {
  var A = arguments[0];
  return arguments[0] = this, A.apply(null, arguments), this;
}
function ov() {
  return Array.from(this);
}
function rv() {
  for (var A = this._groups, e = 0, t = A.length; e < t; ++e)
    for (var n = A[e], i = 0, o = n.length; i < o; ++i) {
      var r = n[i];
      if (r)
        return r;
    }
  return null;
}
function sv() {
  let A = 0;
  for (const e of this)
    ++A;
  return A;
}
function av() {
  return !this.node();
}
function cv(A) {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], o = 0, r = i.length, s; o < r; ++o)
      (s = i[o]) && A.call(s, s.__data__, o, i);
  return this;
}
function lv(A) {
  return function() {
    this.removeAttribute(A);
  };
}
function uv(A) {
  return function() {
    this.removeAttributeNS(A.space, A.local);
  };
}
function dv(A, e) {
  return function() {
    this.setAttribute(A, e);
  };
}
function fv(A, e) {
  return function() {
    this.setAttributeNS(A.space, A.local, e);
  };
}
function pv(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? this.removeAttribute(A) : this.setAttribute(A, t);
  };
}
function gv(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? this.removeAttributeNS(A.space, A.local) : this.setAttributeNS(A.space, A.local, t);
  };
}
function hv(A, e) {
  var t = co(A);
  if (arguments.length < 2) {
    var n = this.node();
    return t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t);
  }
  return this.each((e == null ? t.local ? uv : lv : typeof e == "function" ? t.local ? gv : pv : t.local ? fv : dv)(t, e));
}
function Kl(A) {
  return A.ownerDocument && A.ownerDocument.defaultView || A.document && A || A.defaultView;
}
function mv(A) {
  return function() {
    this.style.removeProperty(A);
  };
}
function vv(A, e, t) {
  return function() {
    this.style.setProperty(A, e, t);
  };
}
function wv(A, e, t) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.style.removeProperty(A) : this.style.setProperty(A, n, t);
  };
}
function yv(A, e, t) {
  return arguments.length > 1 ? this.each((e == null ? mv : typeof e == "function" ? wv : vv)(A, e, t ?? "")) : Kt(this.node(), A);
}
function Kt(A, e) {
  return A.style.getPropertyValue(e) || Kl(A).getComputedStyle(A, null).getPropertyValue(e);
}
function Bv(A) {
  return function() {
    delete this[A];
  };
}
function Pv(A, e) {
  return function() {
    this[A] = e;
  };
}
function bv(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    t == null ? delete this[A] : this[A] = t;
  };
}
function Ev(A, e) {
  return arguments.length > 1 ? this.each((e == null ? Bv : typeof e == "function" ? bv : Pv)(A, e)) : this.node()[A];
}
function Jl(A) {
  return A.trim().split(/^|\s+/);
}
function As(A) {
  return A.classList || new ql(A);
}
function ql(A) {
  this._node = A, this._names = Jl(A.getAttribute("class") || "");
}
ql.prototype = {
  add: function(A) {
    var e = this._names.indexOf(A);
    e < 0 && (this._names.push(A), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(A) {
    var e = this._names.indexOf(A);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(A) {
    return this._names.indexOf(A) >= 0;
  }
};
function Wl(A, e) {
  for (var t = As(A), n = -1, i = e.length; ++n < i; )
    t.add(e[n]);
}
function Zl(A, e) {
  for (var t = As(A), n = -1, i = e.length; ++n < i; )
    t.remove(e[n]);
}
function Dv(A) {
  return function() {
    Wl(this, A);
  };
}
function Cv(A) {
  return function() {
    Zl(this, A);
  };
}
function Qv(A, e) {
  return function() {
    (e.apply(this, arguments) ? Wl : Zl)(this, A);
  };
}
function xv(A, e) {
  var t = Jl(A + "");
  if (arguments.length < 2) {
    for (var n = As(this.node()), i = -1, o = t.length; ++i < o; )
      if (!n.contains(t[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Qv : e ? Dv : Cv)(t, e));
}
function Sv() {
  this.textContent = "";
}
function Iv(A) {
  return function() {
    this.textContent = A;
  };
}
function kv(A) {
  return function() {
    var e = A.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function _v(A) {
  return arguments.length ? this.each(A == null ? Sv : (typeof A == "function" ? kv : Iv)(A)) : this.node().textContent;
}
function Mv() {
  this.innerHTML = "";
}
function Nv(A) {
  return function() {
    this.innerHTML = A;
  };
}
function Fv(A) {
  return function() {
    var e = A.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Tv(A) {
  return arguments.length ? this.each(A == null ? Mv : (typeof A == "function" ? Fv : Nv)(A)) : this.node().innerHTML;
}
function Hv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ov() {
  return this.each(Hv);
}
function Lv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xv() {
  return this.each(Lv);
}
function zv(A) {
  var e = typeof A == "function" ? A : Wr(A);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Rv() {
  return null;
}
function Vv(A, e) {
  var t = typeof A == "function" ? A : Wr(A), n = e == null ? Rv : typeof e == "function" ? e : Zr(e);
  return this.select(function() {
    return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function Uv() {
  var A = this.parentNode;
  A && A.removeChild(this);
}
function jv() {
  return this.each(Uv);
}
function $v() {
  var A = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(A, this.nextSibling) : A;
}
function Gv() {
  var A = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(A, this.nextSibling) : A;
}
function Yv(A) {
  return this.select(A ? Gv : $v);
}
function Kv(A) {
  return arguments.length ? this.property("__data__", A) : this.node().__data__;
}
function Jv(A) {
  return function(e) {
    A.call(this, e, this.__data__);
  };
}
function qv(A) {
  return A.trim().split(/^|\s+/).map(function(e) {
    var t = "", n = e.indexOf(".");
    return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), { type: e, name: t };
  });
}
function Wv(A) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var t = 0, n = -1, i = e.length, o; t < i; ++t)
        o = e[t], (!A.type || o.type === A.type) && o.name === A.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++n] = o;
      ++n ? e.length = n : delete this.__on;
    }
  };
}
function Zv(A, e, t) {
  return function() {
    var n = this.__on, i, o = Jv(e);
    if (n) {
      for (var r = 0, s = n.length; r < s; ++r)
        if ((i = n[r]).type === A.type && i.name === A.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = t), i.value = e;
          return;
        }
    }
    this.addEventListener(A.type, o, t), i = { type: A.type, name: A.name, value: e, listener: o, options: t }, n ? n.push(i) : this.__on = [i];
  };
}
function Aw(A, e, t) {
  var n = qv(A + ""), i, o = n.length, r;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var a = 0, c = s.length, l; a < c; ++a)
        for (i = 0, l = s[a]; i < o; ++i)
          if ((r = n[i]).type === l.type && r.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? Zv : Wv, i = 0; i < o; ++i)
    this.each(s(n[i], e, t));
  return this;
}
function Au(A, e, t) {
  var n = Kl(A), i = n.CustomEvent;
  typeof i == "function" ? i = new i(e, t) : (i = n.document.createEvent("Event"), t ? (i.initEvent(e, t.bubbles, t.cancelable), i.detail = t.detail) : i.initEvent(e, !1, !1)), A.dispatchEvent(i);
}
function ew(A, e) {
  return function() {
    return Au(this, A, e);
  };
}
function tw(A, e) {
  return function() {
    return Au(this, A, e.apply(this, arguments));
  };
}
function nw(A, e) {
  return this.each((typeof e == "function" ? tw : ew)(A, e));
}
function* iw() {
  for (var A = this._groups, e = 0, t = A.length; e < t; ++e)
    for (var n = A[e], i = 0, o = n.length, r; i < o; ++i)
      (r = n[i]) && (yield r);
}
var eu = [null];
function KA(A, e) {
  this._groups = A, this._parents = e;
}
function Rn() {
  return new KA([[document.documentElement]], eu);
}
function ow() {
  return this;
}
KA.prototype = Rn.prototype = {
  constructor: KA,
  select: km,
  selectAll: Fm,
  selectChild: Lm,
  selectChildren: Vm,
  filter: Um,
  data: Jm,
  enter: jm,
  exit: Wm,
  join: Zm,
  merge: Av,
  selection: ow,
  order: ev,
  sort: tv,
  call: iv,
  nodes: ov,
  node: rv,
  size: sv,
  empty: av,
  each: cv,
  attr: hv,
  style: yv,
  property: Ev,
  classed: xv,
  text: _v,
  html: Tv,
  raise: Ov,
  lower: Xv,
  append: zv,
  insert: Vv,
  remove: jv,
  clone: Yv,
  datum: Kv,
  on: Aw,
  dispatch: nw,
  [Symbol.iterator]: iw
};
function ZA(A) {
  return typeof A == "string" ? new KA([[document.querySelector(A)]], [document.documentElement]) : new KA([[A]], eu);
}
function rw(A) {
  return ZA(Wr(A).call(document.documentElement));
}
function es(A, e, t) {
  A.prototype = e.prototype = t, t.constructor = A;
}
function tu(A, e) {
  var t = Object.create(A.prototype);
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Vn() {
}
var Mn = 0.7, Fi = 1 / Mn, Rt = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sw = /^#([0-9a-f]{3,8})$/, aw = new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`), cw = new RegExp(`^rgb\\(${Pe},${Pe},${Pe}\\)$`), lw = new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${Nn}\\)$`), uw = new RegExp(`^rgba\\(${Pe},${Pe},${Pe},${Nn}\\)$`), dw = new RegExp(`^hsl\\(${Nn},${Pe},${Pe}\\)$`), fw = new RegExp(`^hsla\\(${Nn},${Pe},${Pe},${Nn}\\)$`), Sa = {
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
es(Vn, Fn, {
  copy(A) {
    return Object.assign(new this.constructor(), this, A);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ia,
  // Deprecated! Use color.formatHex.
  formatHex: Ia,
  formatHex8: pw,
  formatHsl: gw,
  formatRgb: ka,
  toString: ka
});
function Ia() {
  return this.rgb().formatHex();
}
function pw() {
  return this.rgb().formatHex8();
}
function gw() {
  return nu(this).formatHsl();
}
function ka() {
  return this.rgb().formatRgb();
}
function Fn(A) {
  var e, t;
  return A = (A + "").trim().toLowerCase(), (e = sw.exec(A)) ? (t = e[1].length, e = parseInt(e[1], 16), t === 6 ? _a(e) : t === 3 ? new VA(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : t === 8 ? Zn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : t === 4 ? Zn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = aw.exec(A)) ? new VA(e[1], e[2], e[3], 1) : (e = cw.exec(A)) ? new VA(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = lw.exec(A)) ? Zn(e[1], e[2], e[3], e[4]) : (e = uw.exec(A)) ? Zn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = dw.exec(A)) ? Fa(e[1], e[2] / 100, e[3] / 100, 1) : (e = fw.exec(A)) ? Fa(e[1], e[2] / 100, e[3] / 100, e[4]) : Sa.hasOwnProperty(A) ? _a(Sa[A]) : A === "transparent" ? new VA(NaN, NaN, NaN, 0) : null;
}
function _a(A) {
  return new VA(A >> 16 & 255, A >> 8 & 255, A & 255, 1);
}
function Zn(A, e, t, n) {
  return n <= 0 && (A = e = t = NaN), new VA(A, e, t, n);
}
function hw(A) {
  return A instanceof Vn || (A = Fn(A)), A ? (A = A.rgb(), new VA(A.r, A.g, A.b, A.opacity)) : new VA();
}
function pr(A, e, t, n) {
  return arguments.length === 1 ? hw(A) : new VA(A, e, t, n ?? 1);
}
function VA(A, e, t, n) {
  this.r = +A, this.g = +e, this.b = +t, this.opacity = +n;
}
es(VA, pr, tu(Vn, {
  brighter(A) {
    return A = A == null ? Fi : Math.pow(Fi, A), new VA(this.r * A, this.g * A, this.b * A, this.opacity);
  },
  darker(A) {
    return A = A == null ? Mn : Math.pow(Mn, A), new VA(this.r * A, this.g * A, this.b * A, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new VA(gt(this.r), gt(this.g), gt(this.b), Ti(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ma,
  // Deprecated! Use color.formatHex.
  formatHex: Ma,
  formatHex8: mw,
  formatRgb: Na,
  toString: Na
}));
function Ma() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}`;
}
function mw() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}${at((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Na() {
  const A = Ti(this.opacity);
  return `${A === 1 ? "rgb(" : "rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${A === 1 ? ")" : `, ${A})`}`;
}
function Ti(A) {
  return isNaN(A) ? 1 : Math.max(0, Math.min(1, A));
}
function gt(A) {
  return Math.max(0, Math.min(255, Math.round(A) || 0));
}
function at(A) {
  return A = gt(A), (A < 16 ? "0" : "") + A.toString(16);
}
function Fa(A, e, t, n) {
  return n <= 0 ? A = e = t = NaN : t <= 0 || t >= 1 ? A = e = NaN : e <= 0 && (A = NaN), new ae(A, e, t, n);
}
function nu(A) {
  if (A instanceof ae)
    return new ae(A.h, A.s, A.l, A.opacity);
  if (A instanceof Vn || (A = Fn(A)), !A)
    return new ae();
  if (A instanceof ae)
    return A;
  A = A.rgb();
  var e = A.r / 255, t = A.g / 255, n = A.b / 255, i = Math.min(e, t, n), o = Math.max(e, t, n), r = NaN, s = o - i, a = (o + i) / 2;
  return s ? (e === o ? r = (t - n) / s + (t < n) * 6 : t === o ? r = (n - e) / s + 2 : r = (e - t) / s + 4, s /= a < 0.5 ? o + i : 2 - o - i, r *= 60) : s = a > 0 && a < 1 ? 0 : r, new ae(r, s, a, A.opacity);
}
function vw(A, e, t, n) {
  return arguments.length === 1 ? nu(A) : new ae(A, e, t, n ?? 1);
}
function ae(A, e, t, n) {
  this.h = +A, this.s = +e, this.l = +t, this.opacity = +n;
}
es(ae, vw, tu(Vn, {
  brighter(A) {
    return A = A == null ? Fi : Math.pow(Fi, A), new ae(this.h, this.s, this.l * A, this.opacity);
  },
  darker(A) {
    return A = A == null ? Mn : Math.pow(Mn, A), new ae(this.h, this.s, this.l * A, this.opacity);
  },
  rgb() {
    var A = this.h % 360 + (this.h < 0) * 360, e = isNaN(A) || isNaN(this.s) ? 0 : this.s, t = this.l, n = t + (t < 0.5 ? t : 1 - t) * e, i = 2 * t - n;
    return new VA(
      xo(A >= 240 ? A - 240 : A + 120, i, n),
      xo(A, i, n),
      xo(A < 120 ? A + 240 : A - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new ae(Ta(this.h), Ai(this.s), Ai(this.l), Ti(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const A = Ti(this.opacity);
    return `${A === 1 ? "hsl(" : "hsla("}${Ta(this.h)}, ${Ai(this.s) * 100}%, ${Ai(this.l) * 100}%${A === 1 ? ")" : `, ${A})`}`;
  }
}));
function Ta(A) {
  return A = (A || 0) % 360, A < 0 ? A + 360 : A;
}
function Ai(A) {
  return Math.max(0, Math.min(1, A || 0));
}
function xo(A, e, t) {
  return (A < 60 ? e + (t - e) * A / 60 : A < 180 ? t : A < 240 ? e + (t - e) * (240 - A) / 60 : e) * 255;
}
const iu = (A) => () => A;
function ww(A, e) {
  return function(t) {
    return A + t * e;
  };
}
function yw(A, e, t) {
  return A = Math.pow(A, t), e = Math.pow(e, t) - A, t = 1 / t, function(n) {
    return Math.pow(A + n * e, t);
  };
}
function Bw(A) {
  return (A = +A) == 1 ? ou : function(e, t) {
    return t - e ? yw(e, t, A) : iu(isNaN(e) ? t : e);
  };
}
function ou(A, e) {
  var t = e - A;
  return t ? ww(A, t) : iu(isNaN(A) ? e : A);
}
const Ha = function A(e) {
  var t = Bw(e);
  function n(i, o) {
    var r = t((i = pr(i)).r, (o = pr(o)).r), s = t(i.g, o.g), a = t(i.b, o.b), c = ou(i.opacity, o.opacity);
    return function(l) {
      return i.r = r(l), i.g = s(l), i.b = a(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = A, n;
}(1);
function Ue(A, e) {
  return A = +A, e = +e, function(t) {
    return A * (1 - t) + e * t;
  };
}
var gr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, So = new RegExp(gr.source, "g");
function Pw(A) {
  return function() {
    return A;
  };
}
function bw(A) {
  return function(e) {
    return A(e) + "";
  };
}
function Ew(A, e) {
  var t = gr.lastIndex = So.lastIndex = 0, n, i, o, r = -1, s = [], a = [];
  for (A = A + "", e = e + ""; (n = gr.exec(A)) && (i = So.exec(e)); )
    (o = i.index) > t && (o = e.slice(t, o), s[r] ? s[r] += o : s[++r] = o), (n = n[0]) === (i = i[0]) ? s[r] ? s[r] += i : s[++r] = i : (s[++r] = null, a.push({ i: r, x: Ue(n, i) })), t = So.lastIndex;
  return t < e.length && (o = e.slice(t), s[r] ? s[r] += o : s[++r] = o), s.length < 2 ? a[0] ? bw(a[0].x) : Pw(e) : (e = a.length, function(c) {
    for (var l = 0, u; l < e; ++l)
      s[(u = a[l]).i] = u.x(c);
    return s.join("");
  });
}
var Oa = 180 / Math.PI, hr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ru(A, e, t, n, i, o) {
  var r, s, a;
  return (r = Math.sqrt(A * A + e * e)) && (A /= r, e /= r), (a = A * t + e * n) && (t -= A * a, n -= e * a), (s = Math.sqrt(t * t + n * n)) && (t /= s, n /= s, a /= s), A * n < e * t && (A = -A, e = -e, a = -a, r = -r), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, A) * Oa,
    skewX: Math.atan(a) * Oa,
    scaleX: r,
    scaleY: s
  };
}
var ei;
function Dw(A) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(A + "");
  return e.isIdentity ? hr : ru(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Cw(A) {
  return A == null || (ei || (ei = document.createElementNS("http://www.w3.org/2000/svg", "g")), ei.setAttribute("transform", A), !(A = ei.transform.baseVal.consolidate())) ? hr : (A = A.matrix, ru(A.a, A.b, A.c, A.d, A.e, A.f));
}
function su(A, e, t, n) {
  function i(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, l, u, d, p, h) {
    if (c !== u || l !== d) {
      var y = p.push("translate(", null, e, null, t);
      h.push({ i: y - 4, x: Ue(c, u) }, { i: y - 2, x: Ue(l, d) });
    } else
      (u || d) && p.push("translate(" + u + e + d + t);
  }
  function r(c, l, u, d) {
    c !== l ? (c - l > 180 ? l += 360 : l - c > 180 && (c += 360), d.push({ i: u.push(i(u) + "rotate(", null, n) - 2, x: Ue(c, l) })) : l && u.push(i(u) + "rotate(" + l + n);
  }
  function s(c, l, u, d) {
    c !== l ? d.push({ i: u.push(i(u) + "skewX(", null, n) - 2, x: Ue(c, l) }) : l && u.push(i(u) + "skewX(" + l + n);
  }
  function a(c, l, u, d, p, h) {
    if (c !== u || l !== d) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: Ue(c, u) }, { i: y - 2, x: Ue(l, d) });
    } else
      (u !== 1 || d !== 1) && p.push(i(p) + "scale(" + u + "," + d + ")");
  }
  return function(c, l) {
    var u = [], d = [];
    return c = A(c), l = A(l), o(c.translateX, c.translateY, l.translateX, l.translateY, u, d), r(c.rotate, l.rotate, u, d), s(c.skewX, l.skewX, u, d), a(c.scaleX, c.scaleY, l.scaleX, l.scaleY, u, d), c = l = null, function(p) {
      for (var h = -1, y = d.length, _; ++h < y; )
        u[(_ = d[h]).i] = _.x(p);
      return u.join("");
    };
  };
}
var Qw = su(Dw, "px, ", "px)", "deg)"), xw = su(Cw, ", ", ")", ")"), Jt = 0, dn = 0, rn = 0, au = 1e3, Hi, fn, Oi = 0, wt = 0, lo = 0, Tn = typeof performance == "object" && performance.now ? performance : Date, cu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(A) {
  setTimeout(A, 17);
};
function ts() {
  return wt || (cu(Sw), wt = Tn.now() + lo);
}
function Sw() {
  wt = 0;
}
function Li() {
  this._call = this._time = this._next = null;
}
Li.prototype = lu.prototype = {
  constructor: Li,
  restart: function(A, e, t) {
    if (typeof A != "function")
      throw new TypeError("callback is not a function");
    t = (t == null ? ts() : +t) + (e == null ? 0 : +e), !this._next && fn !== this && (fn ? fn._next = this : Hi = this, fn = this), this._call = A, this._time = t, mr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, mr());
  }
};
function lu(A, e, t) {
  var n = new Li();
  return n.restart(A, e, t), n;
}
function Iw() {
  ts(), ++Jt;
  for (var A = Hi, e; A; )
    (e = wt - A._time) >= 0 && A._call.call(void 0, e), A = A._next;
  --Jt;
}
function La() {
  wt = (Oi = Tn.now()) + lo, Jt = dn = 0;
  try {
    Iw();
  } finally {
    Jt = 0, _w(), wt = 0;
  }
}
function kw() {
  var A = Tn.now(), e = A - Oi;
  e > au && (lo -= e, Oi = A);
}
function _w() {
  for (var A, e = Hi, t, n = 1 / 0; e; )
    e._call ? (n > e._time && (n = e._time), A = e, e = e._next) : (t = e._next, e._next = null, e = A ? A._next = t : Hi = t);
  fn = A, mr(n);
}
function mr(A) {
  if (!Jt) {
    dn && (dn = clearTimeout(dn));
    var e = A - wt;
    e > 24 ? (A < 1 / 0 && (dn = setTimeout(La, A - Tn.now() - lo)), rn && (rn = clearInterval(rn))) : (rn || (Oi = Tn.now(), rn = setInterval(kw, au)), Jt = 1, cu(La));
  }
}
function Xa(A, e, t) {
  var n = new Li();
  return e = e == null ? 0 : +e, n.restart((i) => {
    n.stop(), A(i + e);
  }, e, t), n;
}
var Mw = Ul("start", "end", "cancel", "interrupt"), Nw = [], uu = 0, za = 1, vr = 2, mi = 3, Ra = 4, wr = 5, vi = 6;
function uo(A, e, t, n, i, o) {
  var r = A.__transition;
  if (!r)
    A.__transition = {};
  else if (t in r)
    return;
  Fw(A, t, {
    name: e,
    index: n,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Mw,
    tween: Nw,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: uu
  });
}
function ns(A, e) {
  var t = de(A, e);
  if (t.state > uu)
    throw new Error("too late; already scheduled");
  return t;
}
function De(A, e) {
  var t = de(A, e);
  if (t.state > mi)
    throw new Error("too late; already running");
  return t;
}
function de(A, e) {
  var t = A.__transition;
  if (!t || !(t = t[e]))
    throw new Error("transition not found");
  return t;
}
function Fw(A, e, t) {
  var n = A.__transition, i;
  n[e] = t, t.timer = lu(o, 0, t.time);
  function o(c) {
    t.state = za, t.timer.restart(r, t.delay, t.time), t.delay <= c && r(c - t.delay);
  }
  function r(c) {
    var l, u, d, p;
    if (t.state !== za)
      return a();
    for (l in n)
      if (p = n[l], p.name === t.name) {
        if (p.state === mi)
          return Xa(r);
        p.state === Ra ? (p.state = vi, p.timer.stop(), p.on.call("interrupt", A, A.__data__, p.index, p.group), delete n[l]) : +l < e && (p.state = vi, p.timer.stop(), p.on.call("cancel", A, A.__data__, p.index, p.group), delete n[l]);
      }
    if (Xa(function() {
      t.state === mi && (t.state = Ra, t.timer.restart(s, t.delay, t.time), s(c));
    }), t.state = vr, t.on.call("start", A, A.__data__, t.index, t.group), t.state === vr) {
      for (t.state = mi, i = new Array(d = t.tween.length), l = 0, u = -1; l < d; ++l)
        (p = t.tween[l].value.call(A, A.__data__, t.index, t.group)) && (i[++u] = p);
      i.length = u + 1;
    }
  }
  function s(c) {
    for (var l = c < t.duration ? t.ease.call(null, c / t.duration) : (t.timer.restart(a), t.state = wr, 1), u = -1, d = i.length; ++u < d; )
      i[u].call(A, l);
    t.state === wr && (t.on.call("end", A, A.__data__, t.index, t.group), a());
  }
  function a() {
    t.state = vi, t.timer.stop(), delete n[e];
    for (var c in n)
      return;
    delete A.__transition;
  }
}
function Tw(A, e) {
  var t = A.__transition, n, i, o = !0, r;
  if (t) {
    e = e == null ? null : e + "";
    for (r in t) {
      if ((n = t[r]).name !== e) {
        o = !1;
        continue;
      }
      i = n.state > vr && n.state < wr, n.state = vi, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", A, A.__data__, n.index, n.group), delete t[r];
    }
    o && delete A.__transition;
  }
}
function Hw(A) {
  return this.each(function() {
    Tw(this, A);
  });
}
function Ow(A, e) {
  var t, n;
  return function() {
    var i = De(this, A), o = i.tween;
    if (o !== t) {
      n = t = o;
      for (var r = 0, s = n.length; r < s; ++r)
        if (n[r].name === e) {
          n = n.slice(), n.splice(r, 1);
          break;
        }
    }
    i.tween = n;
  };
}
function Lw(A, e, t) {
  var n, i;
  if (typeof t != "function")
    throw new Error();
  return function() {
    var o = De(this, A), r = o.tween;
    if (r !== n) {
      i = (n = r).slice();
      for (var s = { name: e, value: t }, a = 0, c = i.length; a < c; ++a)
        if (i[a].name === e) {
          i[a] = s;
          break;
        }
      a === c && i.push(s);
    }
    o.tween = i;
  };
}
function Xw(A, e) {
  var t = this._id;
  if (A += "", arguments.length < 2) {
    for (var n = de(this.node(), t).tween, i = 0, o = n.length, r; i < o; ++i)
      if ((r = n[i]).name === A)
        return r.value;
    return null;
  }
  return this.each((e == null ? Ow : Lw)(t, A, e));
}
function is(A, e, t) {
  var n = A._id;
  return A.each(function() {
    var i = De(this, n);
    (i.value || (i.value = {}))[e] = t.apply(this, arguments);
  }), function(i) {
    return de(i, n).value[e];
  };
}
function du(A, e) {
  var t;
  return (typeof e == "number" ? Ue : e instanceof Fn ? Ha : (t = Fn(e)) ? (e = t, Ha) : Ew)(A, e);
}
function zw(A) {
  return function() {
    this.removeAttribute(A);
  };
}
function Rw(A) {
  return function() {
    this.removeAttributeNS(A.space, A.local);
  };
}
function Vw(A, e, t) {
  var n, i = t + "", o;
  return function() {
    var r = this.getAttribute(A);
    return r === i ? null : r === n ? o : o = e(n = r, t);
  };
}
function Uw(A, e, t) {
  var n, i = t + "", o;
  return function() {
    var r = this.getAttributeNS(A.space, A.local);
    return r === i ? null : r === n ? o : o = e(n = r, t);
  };
}
function jw(A, e, t) {
  var n, i, o;
  return function() {
    var r, s = t(this), a;
    return s == null ? void this.removeAttribute(A) : (r = this.getAttribute(A), a = s + "", r === a ? null : r === n && a === i ? o : (i = a, o = e(n = r, s)));
  };
}
function $w(A, e, t) {
  var n, i, o;
  return function() {
    var r, s = t(this), a;
    return s == null ? void this.removeAttributeNS(A.space, A.local) : (r = this.getAttributeNS(A.space, A.local), a = s + "", r === a ? null : r === n && a === i ? o : (i = a, o = e(n = r, s)));
  };
}
function Gw(A, e) {
  var t = co(A), n = t === "transform" ? xw : du;
  return this.attrTween(A, typeof e == "function" ? (t.local ? $w : jw)(t, n, is(this, "attr." + A, e)) : e == null ? (t.local ? Rw : zw)(t) : (t.local ? Uw : Vw)(t, n, e));
}
function Yw(A, e) {
  return function(t) {
    this.setAttribute(A, e.call(this, t));
  };
}
function Kw(A, e) {
  return function(t) {
    this.setAttributeNS(A.space, A.local, e.call(this, t));
  };
}
function Jw(A, e) {
  var t, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Kw(A, o)), t;
  }
  return i._value = e, i;
}
function qw(A, e) {
  var t, n;
  function i() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Yw(A, o)), t;
  }
  return i._value = e, i;
}
function Ww(A, e) {
  var t = "attr." + A;
  if (arguments.length < 2)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  var n = co(A);
  return this.tween(t, (n.local ? Jw : qw)(n, e));
}
function Zw(A, e) {
  return function() {
    ns(this, A).delay = +e.apply(this, arguments);
  };
}
function Ay(A, e) {
  return e = +e, function() {
    ns(this, A).delay = e;
  };
}
function ey(A) {
  var e = this._id;
  return arguments.length ? this.each((typeof A == "function" ? Zw : Ay)(e, A)) : de(this.node(), e).delay;
}
function ty(A, e) {
  return function() {
    De(this, A).duration = +e.apply(this, arguments);
  };
}
function ny(A, e) {
  return e = +e, function() {
    De(this, A).duration = e;
  };
}
function iy(A) {
  var e = this._id;
  return arguments.length ? this.each((typeof A == "function" ? ty : ny)(e, A)) : de(this.node(), e).duration;
}
function oy(A, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    De(this, A).ease = e;
  };
}
function ry(A) {
  var e = this._id;
  return arguments.length ? this.each(oy(e, A)) : de(this.node(), e).ease;
}
function sy(A, e) {
  return function() {
    var t = e.apply(this, arguments);
    if (typeof t != "function")
      throw new Error();
    De(this, A).ease = t;
  };
}
function ay(A) {
  if (typeof A != "function")
    throw new Error();
  return this.each(sy(this._id, A));
}
function cy(A) {
  typeof A != "function" && (A = $l(A));
  for (var e = this._groups, t = e.length, n = new Array(t), i = 0; i < t; ++i)
    for (var o = e[i], r = o.length, s = n[i] = [], a, c = 0; c < r; ++c)
      (a = o[c]) && A.call(a, a.__data__, c, o) && s.push(a);
  return new Me(n, this._parents, this._name, this._id);
}
function ly(A) {
  if (A._id !== this._id)
    throw new Error();
  for (var e = this._groups, t = A._groups, n = e.length, i = t.length, o = Math.min(n, i), r = new Array(n), s = 0; s < o; ++s)
    for (var a = e[s], c = t[s], l = a.length, u = r[s] = new Array(l), d, p = 0; p < l; ++p)
      (d = a[p] || c[p]) && (u[p] = d);
  for (; s < n; ++s)
    r[s] = e[s];
  return new Me(r, this._parents, this._name, this._id);
}
function uy(A) {
  return (A + "").trim().split(/^|\s+/).every(function(e) {
    var t = e.indexOf(".");
    return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
  });
}
function dy(A, e, t) {
  var n, i, o = uy(e) ? ns : De;
  return function() {
    var r = o(this, A), s = r.on;
    s !== n && (i = (n = s).copy()).on(e, t), r.on = i;
  };
}
function fy(A, e) {
  var t = this._id;
  return arguments.length < 2 ? de(this.node(), t).on.on(A) : this.each(dy(t, A, e));
}
function py(A) {
  return function() {
    var e = this.parentNode;
    for (var t in this.__transition)
      if (+t !== A)
        return;
    e && e.removeChild(this);
  };
}
function gy() {
  return this.on("end.remove", py(this._id));
}
function hy(A) {
  var e = this._name, t = this._id;
  typeof A != "function" && (A = Zr(A));
  for (var n = this._groups, i = n.length, o = new Array(i), r = 0; r < i; ++r)
    for (var s = n[r], a = s.length, c = o[r] = new Array(a), l, u, d = 0; d < a; ++d)
      (l = s[d]) && (u = A.call(l, l.__data__, d, s)) && ("__data__" in l && (u.__data__ = l.__data__), c[d] = u, uo(c[d], e, t, d, c, de(l, t)));
  return new Me(o, this._parents, e, t);
}
function my(A) {
  var e = this._name, t = this._id;
  typeof A != "function" && (A = jl(A));
  for (var n = this._groups, i = n.length, o = [], r = [], s = 0; s < i; ++s)
    for (var a = n[s], c = a.length, l, u = 0; u < c; ++u)
      if (l = a[u]) {
        for (var d = A.call(l, l.__data__, u, a), p, h = de(l, t), y = 0, _ = d.length; y < _; ++y)
          (p = d[y]) && uo(p, e, t, y, d, h);
        o.push(d), r.push(l);
      }
  return new Me(o, r, e, t);
}
var vy = Rn.prototype.constructor;
function wy() {
  return new vy(this._groups, this._parents);
}
function yy(A, e) {
  var t, n, i;
  return function() {
    var o = Kt(this, A), r = (this.style.removeProperty(A), Kt(this, A));
    return o === r ? null : o === t && r === n ? i : i = e(t = o, n = r);
  };
}
function fu(A) {
  return function() {
    this.style.removeProperty(A);
  };
}
function By(A, e, t) {
  var n, i = t + "", o;
  return function() {
    var r = Kt(this, A);
    return r === i ? null : r === n ? o : o = e(n = r, t);
  };
}
function Py(A, e, t) {
  var n, i, o;
  return function() {
    var r = Kt(this, A), s = t(this), a = s + "";
    return s == null && (a = s = (this.style.removeProperty(A), Kt(this, A))), r === a ? null : r === n && a === i ? o : (i = a, o = e(n = r, s));
  };
}
function by(A, e) {
  var t, n, i, o = "style." + e, r = "end." + o, s;
  return function() {
    var a = De(this, A), c = a.on, l = a.value[o] == null ? s || (s = fu(e)) : void 0;
    (c !== t || i !== l) && (n = (t = c).copy()).on(r, i = l), a.on = n;
  };
}
function Ey(A, e, t) {
  var n = (A += "") == "transform" ? Qw : du;
  return e == null ? this.styleTween(A, yy(A, n)).on("end.style." + A, fu(A)) : typeof e == "function" ? this.styleTween(A, Py(A, n, is(this, "style." + A, e))).each(by(this._id, A)) : this.styleTween(A, By(A, n, e), t).on("end.style." + A, null);
}
function Dy(A, e, t) {
  return function(n) {
    this.style.setProperty(A, e.call(this, n), t);
  };
}
function Cy(A, e, t) {
  var n, i;
  function o() {
    var r = e.apply(this, arguments);
    return r !== i && (n = (i = r) && Dy(A, r, t)), n;
  }
  return o._value = e, o;
}
function Qy(A, e, t) {
  var n = "style." + (A += "");
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(n, Cy(A, e, t ?? ""));
}
function xy(A) {
  return function() {
    this.textContent = A;
  };
}
function Sy(A) {
  return function() {
    var e = A(this);
    this.textContent = e ?? "";
  };
}
function Iy(A) {
  return this.tween("text", typeof A == "function" ? Sy(is(this, "text", A)) : xy(A == null ? "" : A + ""));
}
function ky(A) {
  return function(e) {
    this.textContent = A.call(this, e);
  };
}
function _y(A) {
  var e, t;
  function n() {
    var i = A.apply(this, arguments);
    return i !== t && (e = (t = i) && ky(i)), e;
  }
  return n._value = A, n;
}
function My(A) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (A == null)
    return this.tween(e, null);
  if (typeof A != "function")
    throw new Error();
  return this.tween(e, _y(A));
}
function Ny() {
  for (var A = this._name, e = this._id, t = pu(), n = this._groups, i = n.length, o = 0; o < i; ++o)
    for (var r = n[o], s = r.length, a, c = 0; c < s; ++c)
      if (a = r[c]) {
        var l = de(a, e);
        uo(a, A, t, c, r, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new Me(n, this._parents, A, t);
}
function Fy() {
  var A, e, t = this, n = t._id, i = t.size();
  return new Promise(function(o, r) {
    var s = { value: r }, a = { value: function() {
      --i === 0 && o();
    } };
    t.each(function() {
      var c = De(this, n), l = c.on;
      l !== A && (e = (A = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(a)), c.on = e;
    }), i === 0 && o();
  });
}
var Ty = 0;
function Me(A, e, t, n) {
  this._groups = A, this._parents = e, this._name = t, this._id = n;
}
function pu() {
  return ++Ty;
}
var xe = Rn.prototype;
Me.prototype = {
  constructor: Me,
  select: hy,
  selectAll: my,
  selectChild: xe.selectChild,
  selectChildren: xe.selectChildren,
  filter: cy,
  merge: ly,
  selection: wy,
  transition: Ny,
  call: xe.call,
  nodes: xe.nodes,
  node: xe.node,
  size: xe.size,
  empty: xe.empty,
  each: xe.each,
  on: fy,
  attr: Gw,
  attrTween: Ww,
  style: Ey,
  styleTween: Qy,
  text: Iy,
  textTween: My,
  remove: gy,
  tween: Xw,
  delay: ey,
  duration: iy,
  ease: ry,
  easeVarying: ay,
  end: Fy,
  [Symbol.iterator]: xe[Symbol.iterator]
};
function Hy(A) {
  return ((A *= 2) <= 1 ? A * A * A : (A -= 2) * A * A + 2) / 2;
}
var Oy = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hy
};
function Ly(A, e) {
  for (var t; !(t = A.__transition) || !(t = t[e]); )
    if (!(A = A.parentNode))
      throw new Error(`transition ${e} not found`);
  return t;
}
function Xy(A) {
  var e, t;
  A instanceof Me ? (e = A._id, A = A._name) : (e = pu(), (t = Oy).time = ts(), A = A == null ? null : A + "");
  for (var n = this._groups, i = n.length, o = 0; o < i; ++o)
    for (var r = n[o], s = r.length, a, c = 0; c < s; ++c)
      (a = r[c]) && uo(a, A, e, c, r, t || Ly(a, e));
  return new Me(n, this._parents, A, e);
}
Rn.prototype.interrupt = Hw;
Rn.prototype.transition = Xy;
function zy(A) {
  var e = 0, t = A.children, n = t && t.length;
  if (!n)
    e = 1;
  else
    for (; --n >= 0; )
      e += t[n].value;
  A.value = e;
}
function Ry() {
  return this.eachAfter(zy);
}
function Vy(A, e) {
  let t = -1;
  for (const n of this)
    A.call(e, n, ++t, this);
  return this;
}
function Uy(A, e) {
  for (var t = this, n = [t], i, o, r = -1; t = n.pop(); )
    if (A.call(e, t, ++r, this), i = t.children)
      for (o = i.length - 1; o >= 0; --o)
        n.push(i[o]);
  return this;
}
function jy(A, e) {
  for (var t = this, n = [t], i = [], o, r, s, a = -1; t = n.pop(); )
    if (i.push(t), o = t.children)
      for (r = 0, s = o.length; r < s; ++r)
        n.push(o[r]);
  for (; t = i.pop(); )
    A.call(e, t, ++a, this);
  return this;
}
function $y(A, e) {
  let t = -1;
  for (const n of this)
    if (A.call(e, n, ++t, this))
      return n;
}
function Gy(A) {
  return this.eachAfter(function(e) {
    for (var t = +A(e.data) || 0, n = e.children, i = n && n.length; --i >= 0; )
      t += n[i].value;
    e.value = t;
  });
}
function Yy(A) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(A);
  });
}
function Ky(A) {
  for (var e = this, t = Jy(e, A), n = [e]; e !== t; )
    e = e.parent, n.push(e);
  for (var i = n.length; A !== t; )
    n.splice(i, 0, A), A = A.parent;
  return n;
}
function Jy(A, e) {
  if (A === e)
    return A;
  var t = A.ancestors(), n = e.ancestors(), i = null;
  for (A = t.pop(), e = n.pop(); A === e; )
    i = A, A = t.pop(), e = n.pop();
  return i;
}
function qy() {
  for (var A = this, e = [A]; A = A.parent; )
    e.push(A);
  return e;
}
function Wy() {
  return Array.from(this);
}
function Zy() {
  var A = [];
  return this.eachBefore(function(e) {
    e.children || A.push(e);
  }), A;
}
function AB() {
  var A = this, e = [];
  return A.each(function(t) {
    t !== A && e.push({ source: t.parent, target: t });
  }), e;
}
function* eB() {
  var A = this, e, t = [A], n, i, o;
  do
    for (e = t.reverse(), t = []; A = e.pop(); )
      if (yield A, n = A.children)
        for (i = 0, o = n.length; i < o; ++i)
          t.push(n[i]);
  while (t.length);
}
function Xi(A, e) {
  A instanceof Map ? (A = [void 0, A], e === void 0 && (e = iB)) : e === void 0 && (e = nB);
  for (var t = new zi(A), n, i = [t], o, r, s, a; n = i.pop(); )
    if ((r = e(n.data)) && (a = (r = Array.from(r)).length))
      for (n.children = r, s = a - 1; s >= 0; --s)
        i.push(o = r[s] = new zi(r[s])), o.parent = n, o.depth = n.depth + 1;
  return t.eachBefore(rB);
}
function tB() {
  return Xi(this).eachBefore(oB);
}
function nB(A) {
  return A.children;
}
function iB(A) {
  return Array.isArray(A) ? A[1] : null;
}
function oB(A) {
  A.data.value !== void 0 && (A.value = A.data.value), A.data = A.data.data;
}
function rB(A) {
  var e = 0;
  do
    A.height = e;
  while ((A = A.parent) && A.height < ++e);
}
function zi(A) {
  this.data = A, this.depth = this.height = 0, this.parent = null;
}
zi.prototype = Xi.prototype = {
  constructor: zi,
  count: Ry,
  each: Vy,
  eachAfter: jy,
  eachBefore: Uy,
  find: $y,
  sum: Gy,
  sort: Yy,
  path: Ky,
  ancestors: qy,
  descendants: Wy,
  leaves: Zy,
  links: AB,
  copy: tB,
  [Symbol.iterator]: eB
};
function sB(A) {
  return A == null ? null : aB(A);
}
function aB(A) {
  if (typeof A != "function")
    throw new Error();
  return A;
}
function Va() {
  return 0;
}
function cB(A) {
  return function() {
    return A;
  };
}
const lB = 1664525, uB = 1013904223, Ua = 4294967296;
function dB() {
  let A = 1;
  return () => (A = (lB * A + uB) % Ua) / Ua;
}
function fB(A) {
  return typeof A == "object" && "length" in A ? A : Array.from(A);
}
function pB(A, e) {
  let t = A.length, n, i;
  for (; t; )
    i = e() * t-- | 0, n = A[t], A[t] = A[i], A[i] = n;
  return A;
}
function gB(A, e) {
  for (var t = 0, n = (A = pB(Array.from(A), e)).length, i = [], o, r; t < n; )
    o = A[t], r && gu(r, o) ? ++t : (r = mB(i = hB(i, o)), t = 0);
  return r;
}
function hB(A, e) {
  var t, n;
  if (Io(e, A))
    return [e];
  for (t = 0; t < A.length; ++t)
    if (ti(e, A[t]) && Io(pn(A[t], e), A))
      return [A[t], e];
  for (t = 0; t < A.length - 1; ++t)
    for (n = t + 1; n < A.length; ++n)
      if (ti(pn(A[t], A[n]), e) && ti(pn(A[t], e), A[n]) && ti(pn(A[n], e), A[t]) && Io(hu(A[t], A[n], e), A))
        return [A[t], A[n], e];
  throw new Error();
}
function ti(A, e) {
  var t = A.r - e.r, n = e.x - A.x, i = e.y - A.y;
  return t < 0 || t * t < n * n + i * i;
}
function gu(A, e) {
  var t = A.r - e.r + Math.max(A.r, e.r, 1) * 1e-9, n = e.x - A.x, i = e.y - A.y;
  return t > 0 && t * t > n * n + i * i;
}
function Io(A, e) {
  for (var t = 0; t < e.length; ++t)
    if (!gu(A, e[t]))
      return !1;
  return !0;
}
function mB(A) {
  switch (A.length) {
    case 1:
      return vB(A[0]);
    case 2:
      return pn(A[0], A[1]);
    case 3:
      return hu(A[0], A[1], A[2]);
  }
}
function vB(A) {
  return {
    x: A.x,
    y: A.y,
    r: A.r
  };
}
function pn(A, e) {
  var t = A.x, n = A.y, i = A.r, o = e.x, r = e.y, s = e.r, a = o - t, c = r - n, l = s - i, u = Math.sqrt(a * a + c * c);
  return {
    x: (t + o + a / u * l) / 2,
    y: (n + r + c / u * l) / 2,
    r: (u + i + s) / 2
  };
}
function hu(A, e, t) {
  var n = A.x, i = A.y, o = A.r, r = e.x, s = e.y, a = e.r, c = t.x, l = t.y, u = t.r, d = n - r, p = n - c, h = i - s, y = i - l, _ = a - o, M = u - o, v = n * n + i * i - o * o, P = v - r * r - s * s + a * a, $ = v - c * c - l * l + u * u, T = p * h - d * y, rA = (h * $ - y * P) / (T * 2) - n, L = (y * _ - h * M) / T, z = (p * P - d * $) / (T * 2) - i, x = (d * M - p * _) / T, C = L * L + x * x - 1, G = 2 * (o + rA * L + z * x), I = rA * rA + z * z - o * o, AA = -(Math.abs(C) > 1e-6 ? (G + Math.sqrt(G * G - 4 * C * I)) / (2 * C) : I / G);
  return {
    x: n + rA + L * AA,
    y: i + z + x * AA,
    r: AA
  };
}
function ja(A, e, t) {
  var n = A.x - e.x, i, o, r = A.y - e.y, s, a, c = n * n + r * r;
  c ? (o = e.r + t.r, o *= o, a = A.r + t.r, a *= a, o > a ? (i = (c + a - o) / (2 * c), s = Math.sqrt(Math.max(0, a / c - i * i)), t.x = A.x - i * n - s * r, t.y = A.y - i * r + s * n) : (i = (c + o - a) / (2 * c), s = Math.sqrt(Math.max(0, o / c - i * i)), t.x = e.x + i * n - s * r, t.y = e.y + i * r + s * n)) : (t.x = e.x + t.r, t.y = e.y);
}
function $a(A, e) {
  var t = A.r + e.r - 1e-6, n = e.x - A.x, i = e.y - A.y;
  return t > 0 && t * t > n * n + i * i;
}
function Ga(A) {
  var e = A._, t = A.next._, n = e.r + t.r, i = (e.x * t.r + t.x * e.r) / n, o = (e.y * t.r + t.y * e.r) / n;
  return i * i + o * o;
}
function ni(A) {
  this._ = A, this.next = null, this.previous = null;
}
function wB(A, e) {
  if (!(o = (A = fB(A)).length))
    return 0;
  var t, n, i, o, r, s, a, c, l, u, d;
  if (t = A[0], t.x = 0, t.y = 0, !(o > 1))
    return t.r;
  if (n = A[1], t.x = -n.r, n.x = t.r, n.y = 0, !(o > 2))
    return t.r + n.r;
  ja(n, t, i = A[2]), t = new ni(t), n = new ni(n), i = new ni(i), t.next = i.previous = n, n.next = t.previous = i, i.next = n.previous = t;
  A:
    for (a = 3; a < o; ++a) {
      ja(t._, n._, i = A[a]), i = new ni(i), c = n.next, l = t.previous, u = n._.r, d = t._.r;
      do
        if (u <= d) {
          if ($a(c._, i._)) {
            n = c, t.next = n, n.previous = t, --a;
            continue A;
          }
          u += c._.r, c = c.next;
        } else {
          if ($a(l._, i._)) {
            t = l, t.next = n, n.previous = t, --a;
            continue A;
          }
          d += l._.r, l = l.previous;
        }
      while (c !== l.next);
      for (i.previous = t, i.next = n, t.next = n.previous = n = i, r = Ga(t); (i = i.next) !== n; )
        (s = Ga(i)) < r && (t = i, r = s);
      n = t.next;
    }
  for (t = [n._], i = n; (i = i.next) !== n; )
    t.push(i._);
  for (i = gB(t, e), a = 0; a < o; ++a)
    t = A[a], t.x -= i.x, t.y -= i.y;
  return i.r;
}
function yB(A) {
  return Math.sqrt(A.value);
}
function Ya() {
  var A = null, e = 1, t = 1, n = Va;
  function i(o) {
    const r = dB();
    return o.x = e / 2, o.y = t / 2, A ? o.eachBefore(Ka(A)).eachAfter(ko(n, 0.5, r)).eachBefore(Ja(1)) : o.eachBefore(Ka(yB)).eachAfter(ko(Va, 1, r)).eachAfter(ko(n, o.r / Math.min(e, t), r)).eachBefore(Ja(Math.min(e, t) / (2 * o.r))), o;
  }
  return i.radius = function(o) {
    return arguments.length ? (A = sB(o), i) : A;
  }, i.size = function(o) {
    return arguments.length ? (e = +o[0], t = +o[1], i) : [e, t];
  }, i.padding = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : cB(+o), i) : n;
  }, i;
}
function Ka(A) {
  return function(e) {
    e.children || (e.r = Math.max(0, +A(e) || 0));
  };
}
function ko(A, e, t) {
  return function(n) {
    if (i = n.children) {
      var i, o, r = i.length, s = A(n) * e || 0, a;
      if (s)
        for (o = 0; o < r; ++o)
          i[o].r += s;
      if (a = wB(i, t), s)
        for (o = 0; o < r; ++o)
          i[o].r -= s;
      n.r = a + s;
    }
  };
}
function Ja(A) {
  return function(e) {
    var t = e.parent;
    e.r *= A, t && (e.x = t.x + A * e.x, e.y = t.y + A * e.y);
  };
}
function gn(A, e, t) {
  this.k = A, this.x = e, this.y = t;
}
gn.prototype = {
  constructor: gn,
  scale: function(A) {
    return A === 1 ? this : new gn(this.k * A, this.x, this.y);
  },
  translate: function(A, e) {
    return A === 0 & e === 0 ? this : new gn(this.k, this.x + this.k * A, this.y + this.k * e);
  },
  apply: function(A) {
    return [A[0] * this.k + this.x, A[1] * this.k + this.y];
  },
  applyX: function(A) {
    return A * this.k + this.x;
  },
  applyY: function(A) {
    return A * this.k + this.y;
  },
  invert: function(A) {
    return [(A[0] - this.x) / this.k, (A[1] - this.y) / this.k];
  },
  invertX: function(A) {
    return (A - this.x) / this.k;
  },
  invertY: function(A) {
    return (A - this.y) / this.k;
  },
  rescaleX: function(A) {
    return A.copy().domain(A.range().map(this.invertX, this).map(A.invert, A));
  },
  rescaleY: function(A) {
    return A.copy().domain(A.range().map(this.invertY, this).map(A.invert, A));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
gn.prototype;
const Dt = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [n, i] of e)
    t[n] = i;
  return t;
}, BB = {
  name: "Guide"
}, fo = (A) => (Pt("data-v-93094cc2"), A = A(), bt(), A), PB = { class: "guide-container" }, bB = /* @__PURE__ */ fo(() => /* @__PURE__ */ K("p", { class: "help" }, "Guide:", -1)), EB = /* @__PURE__ */ fo(() => /* @__PURE__ */ K("p", { class: "help" }, " 1) Choose Bottlenecks or Solutions graph using the dropdown ", -1)), DB = /* @__PURE__ */ fo(() => /* @__PURE__ */ K("p", { class: "help" }, "2) Filter based on profession/experience", -1)), CB = /* @__PURE__ */ fo(() => /* @__PURE__ */ K("p", { class: "help" }, "3) Click on a bubble to see individual answers", -1)), QB = [
  bB,
  EB,
  DB,
  CB
];
function xB(A, e, t, n, i, o) {
  return tA(), dA("div", PB, QB);
}
const mu = /* @__PURE__ */ Dt(BB, [["render", xB], ["__scopeId", "data-v-93094cc2"]]);
const SB = (A) => (Pt("data-v-26ebf869"), A = A(), bt(), A), IB = { class: "bottleneck-details" }, kB = {
  key: 0,
  class: "answers-container"
}, _B = { class: "tag-title" }, MB = { class: "description" }, NB = { class: "count" }, FB = /* @__PURE__ */ SB(() => /* @__PURE__ */ K("h4", { class: "answers" }, "Answers:", -1)), TB = { class: "answers-list" }, HB = { key: 0 }, OB = ["innerHTML"], LB = { key: 1 }, XB = {
  __name: "BottleneckDetails",
  props: {
    data: {
      title: String,
      description: String,
      items: Array,
      isBottleneck: Boolean
    }
  },
  setup(A) {
    return (e, t) => {
      var n, i;
      return tA(), dA("div", IB, [
        (i = (n = A.data) == null ? void 0 : n.items) != null && i.length ? (tA(), dA("div", kB, [
          K("h3", _B, Xe(A.data.title.split("]")[1]), 1),
          K("h4", MB, Xe(A.data.description), 1),
          K("div", NB, "Count: " + Xe(A.data.items.length), 1),
          FB,
          K("ol", TB, [
            (tA(!0), dA(QA, null, Ut(A.data.items, (o, r) => (tA(), dA("li", {
              key: r,
              class: "answer"
            }, [
              A.data.isBottleneck ? (tA(), dA("div", HB, [
                K("div", null, Xe("Bottleneck: " + o.title), 1),
                K("div", {
                  innerHTML: "Why: " + o.description
                }, null, 8, OB)
              ])) : (tA(), dA("div", LB, [
                K("div", null, Xe(o.title), 1)
              ])),
              (tA(!0), dA(QA, null, Ut(o.tags, (s, a) => (tA(), dA("ul", {
                class: "tags-list",
                key: a
              }, [
                K("li", null, Xe(s + " " + le(zt)[s].label), 1)
              ]))), 128))
            ]))), 128))
          ])
        ])) : (tA(), ye(mu, {
          key: 1,
          class: "guide"
        }))
      ]);
    };
  }
}, zB = /* @__PURE__ */ Dt(XB, [["__scopeId", "data-v-26ebf869"]]);
const RB = (A) => (Pt("data-v-ac6f2e81"), A = A(), bt(), A), VB = { class: "chart-row" }, UB = /* @__PURE__ */ RB(() => /* @__PURE__ */ K("div", { class: "chart" }, null, -1)), jB = {
  __name: "BubbleChart",
  props: {
    chartData: {
      data: Object,
      props: Object
    }
  },
  setup(A) {
    const e = A;
    Lh().analysis;
    const n = DA({}), i = DA({
      title: "",
      description: "",
      items: [],
      isBottleneck: !1
    });
    UA(
      () => e.chartData,
      function() {
        n.value.update(e.chartData.data);
      }
    ), Et(function() {
      n.value = o(e.chartData.data, e.chartData.props), document.getElementsByClassName("chart")[0].append(n.value.node());
    });
    function o(s, {
      children: a,
      // if hierarchical data, given a d in data, returns its children
      value: c,
      // given a node d, returns a quantitative value (for area encoding; null for count)
      clickData: l,
      // given a node d, returns the data that should be shown when that node is clicked on
      sort: u = (pA, PA) => Ca(pA.value, PA.value),
      // how to sort nodes prior to layout
      label: d,
      // given a leaf node d, returns the display name
      title: p,
      // given a node d, returns its hover text
      link: h,
      // given a node d, its link (if any)
      linkTarget: y = "_blank",
      // the target attribute for links, if any
      chartTitle: _,
      // the title of the chart
      width: M = 1e3,
      // outer width, in pixels
      height: v = 1e3,
      // outer height, in pixels
      margin: P = 0,
      // shorthand for margins
      marginTop: $ = P,
      // top margin, in pixels
      marginRight: T = P,
      // right margin, in pixels
      marginBottom: rA = P,
      // bottom margin, in pixels
      marginLeft: L = P,
      // left margin, in pixels
      padding: z = 0,
      // separation between circles
      fill: x,
      // fill for leaf circles
      fillOpacity: C,
      // fill opacity for leaf circles
      stroke: G = "#bbb",
      // stroke for internal circles
      strokeWidth: I,
      // stroke width for internal circles
      strokeOpacity: AA
      // stroke opacity for internal circles
    } = {}) {
      const pA = Xi(s, a);
      c == null ? pA.count() : pA.sum((B) => Math.max(0, c(B)));
      const PA = pA.descendants(), iA = PA.filter((B) => !B.children);
      PA.filter((B) => B.children && B.data.tag).forEach((B, fA) => B.index = fA), iA.forEach((B, fA) => B.index = fA);
      const J = d == null ? null : iA.map((B) => d(B.data, B)), _A = p == null ? null : PA.map((B) => p(B.data, B));
      u != null && pA.sort(u), Ya().size([M - L - T, v - $ - rA]).padding(z)(pA);
      const JA = rw("svg").attr("viewBox", [-L, -$, M, v]).attr("width", M).attr("height", v).attr("style", "max-width: 100%; height: auto; height: intrinsic;").attr("font-family", "sans-serif").attr("font-size", "1em").attr("text-anchor", "middle"), MA = JA.selectAll("a").data(
        PA.filter((B) => B.children),
        (B) => B.data.name
      ).join("a").attr("xlink:href", h == null ? null : (B, fA) => h(B.data, B)).attr("target", h == null ? null : y);
      console.log(MA), MA.append("circle").attr("fill", (B) => x(B.data) || "#eee").attr("fill-opacity", (B) => B.children ? null : C).attr("stroke", (B) => B.children ? G : null).attr("stroke-width", (B) => B.children ? I : null).attr("stroke-opacity", (B) => B.children ? AA : null).attr("r", (B) => B.r).attr("cx", (B) => B.x).attr("cy", (B) => B.y).on("mouseover", function(B, fA) {
        fA.children || (ZA(this).attr("stroke", "#000"), ZA(this).style("cursor", "pointer"));
      }).on("mouseout", function() {
        ZA(this).attr("stroke", null);
      }).on("click", (B, fA) => {
        fA.children || (i.value = l(fA.data));
      }), MA.filter((B) => B.children && B.data.tag).selectAll("a").append("a").data(
        (B) => B.children,
        (B) => B.data.name
      ).join("a").attr("xlink:href", h == null ? null : (B, fA) => h(B.data, B)).attr("target", h == null ? null : y), MA.selectAll("a").append("circle").attr("fill", (B) => x(B.data) || "#eee").attr("fill-opacity", (B) => B.children ? null : C).attr("stroke", (B) => B.children ? G : null).attr("stroke-width", (B) => B.children ? I : null).attr("stroke-opacity", (B) => B.children ? AA : null).attr("r", (B) => B.r).attr("cx", (B) => B.x).attr("cy", (B) => B.y).on("mouseover", function(B, fA) {
        fA.children || (ZA(this).attr("stroke", "#000"), ZA(this).style("cursor", "pointer"));
      }).on("mouseout", function() {
        ZA(this).attr("stroke", null);
      }).on("click", (B, fA) => {
        fA.children || (i.value = l(fA.data));
      });
      const qA = `O-${Math.random().toString(16).slice(2)}`;
      return MA.selectAll("a").filter((B) => !B.children && B.r > 10 && J[B.index] != null).append("text").attr(
        "clip-path",
        (B) => `url(${new URL(`#${qA}-clip-${B.index}`, location)})`
      ).attr("class", "childLabel").attr("transform", (B) => `translate(${B.x},${B.y})`).selectAll("tspan").data((B) => `${J[B.index]}`.split(/\n/g)).join("tspan").attr("x", (B, fA, w) => {
        const X = ZA(w[0].parentNode).data()[0].data.tag;
        return zt[X].x;
      }).attr("y", (B, fA, w) => `${fA - w.length / 2 + 0.85}em`).style("font-size", (B, fA, w) => {
        const X = ZA(w[0].parentNode).data()[0];
        return `${Math.min(Math.max(Math.log10(X.r) - 0.75, 0.55), 1)}em`;
      }).style("cursor", "pointer").on("mouseover", function() {
        ZA(this.parentNode.parentNode).selectAll("circle").attr("stroke", "#000");
      }).on("mouseout", function() {
        ZA(this.parentNode.parentNode).selectAll("circle").attr("stroke", null);
      }).on("click", function(B, fA) {
        fA.children || (i.value = l(
          ZA(this.parentNode.parentNode).data()[0].data
        ));
      }).text((B) => B), _A && MA.append("title").text((B, fA) => _A[fA]), MA.filter((B) => B.parent === pA && B.r).append("text").style("font-size", "2em").attr("class", "parentLabel").attr("pointer-events", "none").text((B) => zt[B.data.tag].label).attr("transform", (B) => `translate(${B.x},${B.y - 20})`), JA.append("text").attr("pointer-events", "none").attr("x", M / 2).attr("y", v / 12).attr("text-anchor", "middle").style("font-size", "3em").text(_), JA.update = (B) => r(JA, B, {
        sort: u,
        label: d,
        clickData: l,
        width: M,
        value: c,
        // given a node d, returns a quantitative value (for area encoding; null for count)
        fill: x,
        fillOpacity: C,
        // fill opacity for leaf circles
        stroke: G,
        // stroke for internal circles
        strokeWidth: I,
        // stroke width for internal circles
        strokeOpacity: AA,
        // stroke opacity for internal circles
        chartTitle: _
      }), JA;
    }
    function r(s, a, {
      sort: c,
      label: l,
      value: u,
      // given a node d, returns a quantitative value (for area encoding; null for count)
      clickData: d,
      // given a node d, returns the data that should be shown when that node is clicked on
      title: p,
      // given a node d, returns its hover text
      width: h = 1e3,
      // outer width, in pixels
      height: y = 1e3,
      // outer height, in pixels
      margin: _ = 0,
      // shorthand for margins
      marginTop: M = _,
      // top margin, in pixels
      marginRight: v = _,
      // right margin, in pixels
      marginBottom: P = _,
      // bottom margin, in pixels
      marginLeft: $ = _,
      // left margin, in pixels
      padding: T = 0,
      // separation between circles
      fill: rA,
      // fill for leaf circles
      fillOpacity: L,
      // fill opacity for leaf circles
      stroke: z = "#bbb",
      // stroke for internal circles
      strokeWidth: x,
      // stroke width for internal circles
      strokeOpacity: C,
      // stroke opacity for internal circles
      chartTitle: G
    }) {
      const I = Xi(a);
      I.sum((D) => Math.max(0, u(D))), I.sort((D, J) => Ca(D.value, J.value));
      const AA = I.descendants(), pA = AA.filter((D) => !D.children);
      AA.filter((D) => D.children && D.data.tag).forEach((D, J) => D.index = J), pA.forEach((D, J) => D.index = J), c != null && I.sort(c), Ya().size([h - $ - v, y - M - P]).padding(T)(I);
      const iA = s.selectAll("a").data(AA, (D) => D.data.name);
      iA.attr("xlink:href", (D) => D.data.link ? D.data.link : null).attr("target", (D) => D.data.link ? "_blank" : null).select("circle").attr("fill", (D) => rA(D.data) || "#eee").attr("fill-opacity", (D) => D.children ? null : L).attr("stroke", (D) => D.children ? z : null).attr("stroke-width", (D) => D.children ? x : null).attr("stroke-opacity", (D) => D.children ? C : null), iA.select("circle").transition().duration(750).attr("r", (D) => D.r).attr("cx", (D) => D.x).attr("cy", (D) => D.y), iA.select(".parentLabel").transition().duration(750).attr("transform", (D) => `translate(${D.x},${D.y - 20})`).style("opacity", (D) => D.r ? 100 : 0), iA.select(".childLabel").transition().duration(750).attr("transform", (D) => `translate(${D.x},${D.y})`).style("opacity", (D) => D.r ? 100 : 0), iA.select("tspan").transition().duration(750).attr("x", (D) => {
        const J = D.data.tag;
        return zt[J].x;
      }).style(
        "font-size",
        (D) => `${Math.min(Math.max(Math.log10(D.r) - 0.75, 0.55), 1)}em`
      );
    }
    return (s, a) => (tA(), dA("div", VB, [
      EA(zB, {
        data: i.value,
        class: "details"
      }, null, 8, ["data"]),
      UB
    ]));
  }
}, qa = /* @__PURE__ */ Dt(jB, [["__scopeId", "data-v-ac6f2e81"]]);
function po(A) {
  return Qr() ? (cc(A), !0) : !1;
}
function Ye(A) {
  return typeof A == "function" ? A() : le(A);
}
const os = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const $B = Object.prototype.toString, vu = (A) => $B.call(A) === "[object Object]", Hn = () => {
}, yr = /* @__PURE__ */ GB();
function GB() {
  var A;
  return os && ((A = window == null ? void 0 : window.navigator) == null ? void 0 : A.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const Wa = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function YB(...A) {
  if (A.length !== 1)
    return ri(...A);
  const e = A[0];
  return typeof e == "function" ? Ir(md(() => ({ get: e, set: Hn }))) : DA(e);
}
function KB(A, e = !0) {
  Wt() ? Et(A) : e ? A() : Vt(A);
}
function JB(A) {
  var e;
  const t = Ye(A);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const rs = os ? window : void 0;
function qB(...A) {
  let e, t, n, i;
  if (typeof A[0] == "string" || Array.isArray(A[0]) ? ([t, n, i] = A, e = rs) : [e, t, n, i] = A, !e)
    return Hn;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const o = [], r = () => {
    o.forEach((l) => l()), o.length = 0;
  }, s = (l, u, d, p) => (l.addEventListener(u, d, p), () => l.removeEventListener(u, d, p)), a = UA(
    () => [JB(e), Ye(i)],
    ([l, u]) => {
      if (r(), !l)
        return;
      const d = vu(u) ? { ...u } : u;
      o.push(
        ...t.flatMap((p) => n.map((h) => s(l, p, h, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), r();
  };
  return po(c), c;
}
function WB() {
  const A = DA(!1);
  return Wt() && Et(() => {
    A.value = !0;
  }), A;
}
function ZB(A) {
  const e = WB();
  return bA(() => (e.value, !!A()));
}
function AP(A, e = {}) {
  const { window: t = rs } = e, n = ZB(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let i;
  const o = DA(!1), r = (c) => {
    o.value = c.matches;
  }, s = () => {
    i && ("removeEventListener" in i ? i.removeEventListener("change", r) : i.removeListener(r));
  }, a = Hc(() => {
    n.value && (s(), i = t.matchMedia(Ye(A)), "addEventListener" in i ? i.addEventListener("change", r) : i.addListener(r), o.value = i.matches);
  });
  return po(() => {
    a(), s(), i = void 0;
  }), o;
}
function eP(A = {}) {
  const {
    window: e = rs,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: n = Number.POSITIVE_INFINITY,
    listenOrientation: i = !0,
    includeScrollbar: o = !0
  } = A, r = DA(t), s = DA(n), a = () => {
    e && (o ? (r.value = e.innerWidth, s.value = e.innerHeight) : (r.value = e.document.documentElement.clientWidth, s.value = e.document.documentElement.clientHeight));
  };
  if (a(), KB(a), qB("resize", a, { passive: !0 }), i) {
    const c = AP("(orientation: portrait)");
    UA(c, () => a());
  }
  return { width: r, height: s };
}
function hn(A) {
  var e;
  const t = Ye(A);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const wu = os ? window : void 0;
function wi(...A) {
  let e, t, n, i;
  if (typeof A[0] == "string" || Array.isArray(A[0]) ? ([t, n, i] = A, e = wu) : [e, t, n, i] = A, !e)
    return Hn;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const o = [], r = () => {
    o.forEach((l) => l()), o.length = 0;
  }, s = (l, u, d, p) => (l.addEventListener(u, d, p), () => l.removeEventListener(u, d, p)), a = UA(
    () => [hn(e), Ye(i)],
    ([l, u]) => {
      if (r(), !l)
        return;
      const d = vu(u) ? { ...u } : u;
      o.push(
        ...t.flatMap((p) => n.map((h) => s(l, p, h, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), r();
  };
  return po(c), c;
}
let Za = !1;
function Ac(A, e, t = {}) {
  const { window: n = wu, ignore: i = [], capture: o = !0, detectIframe: r = !1 } = t;
  if (!n)
    return;
  yr && !Za && (Za = !0, Array.from(n.document.body.children).forEach((d) => d.addEventListener("click", Hn)), n.document.documentElement.addEventListener("click", Hn));
  let s = !0;
  const a = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(n.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = hn(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), l = [
    wi(n, "click", (d) => {
      const p = hn(A);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (s = !a(d)), !s) {
          s = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: o }),
    wi(n, "pointerdown", (d) => {
      const p = hn(A);
      s = !a(d) && !!(p && !d.composedPath().includes(p));
    }, { passive: !0 }),
    r && wi(n, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = hn(A);
        ((p = n.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(n.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => l.forEach((d) => d());
}
const tP = {
  [Wa.mounted](A, e) {
    const t = !e.modifiers.bubble;
    if (typeof e.value == "function")
      A.__onClickOutside_stop = Ac(A, e.value, { capture: t });
    else {
      const [n, i] = e.value;
      A.__onClickOutside_stop = Ac(A, n, Object.assign({ capture: t }, i));
    }
  },
  [Wa.unmounted](A) {
    A.__onClickOutside_stop();
  }
};
function _o(A) {
  return typeof Window < "u" && A instanceof Window ? A.document.documentElement : typeof Document < "u" && A instanceof Document ? A.documentElement : A;
}
function yu(A) {
  const e = window.getComputedStyle(A);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && A.clientWidth < A.scrollWidth || e.overflowY === "auto" && A.clientHeight < A.scrollHeight)
    return !0;
  {
    const t = A.parentNode;
    return !t || t.tagName === "BODY" ? !1 : yu(t);
  }
}
function nP(A) {
  const e = A || window.event, t = e.target;
  return yu(t) ? !1 : e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}
const ii = /* @__PURE__ */ new WeakMap();
function iP(A, e = !1) {
  const t = DA(e);
  let n = null, i;
  UA(YB(A), (s) => {
    const a = _o(Ye(s));
    if (a) {
      const c = a;
      ii.get(c) || ii.set(c, i), t.value && (c.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const o = () => {
    const s = _o(Ye(A));
    !s || t.value || (yr && (n = wi(
      s,
      "touchmove",
      (a) => {
        nP(a);
      },
      { passive: !1 }
    )), s.style.overflow = "hidden", t.value = !0);
  }, r = () => {
    var s;
    const a = _o(Ye(A));
    !a || !t.value || (yr && (n == null || n()), a.style.overflow = (s = ii.get(a)) != null ? s : "", ii.delete(a), t.value = !1);
  };
  return po(r), bA({
    get() {
      return t.value;
    },
    set(s) {
      s ? o() : r();
    }
  });
}
function oP() {
  let A = !1;
  const e = DA(!1);
  return (t, n) => {
    if (e.value = n.value, A)
      return;
    A = !0;
    const i = iP(t, n.value);
    UA(e, (o) => i.value = o);
  };
}
oP();
const rP = {
  name: "DataUrl"
}, sP = (A) => (Pt("data-v-be80c09a"), A = A(), bt(), A), aP = { class: "url-container" }, cP = /* @__PURE__ */ sP(() => /* @__PURE__ */ K("strong", null, [
  /* @__PURE__ */ K("a", {
    href: "https://docs.google.com/spreadsheets/d/1aomCkAlaHNbNBEPjLeDbwLr3TazAxhU4f9idJQvbL2s/edit?usp=sharing",
    target: "_blank"
  }, "here")
], -1));
function lP(A, e, t, n, i, o) {
  return tA(), dA("div", aP, [
    $t(" Full data "),
    cP
  ]);
}
const uP = /* @__PURE__ */ Dt(rP, [["render", lP], ["__scopeId", "data-v-be80c09a"]]), ss = (A) => (Pt("data-v-cf0c1652"), A = A(), bt(), A), dP = /* @__PURE__ */ ss(() => /* @__PURE__ */ K("h3", { class: "title" }, "Filters", -1)), fP = { class: "profession-container" }, pP = { class: "button-container" }, gP = /* @__PURE__ */ ss(() => /* @__PURE__ */ K("span", null, "Profession", -1)), hP = ["value", "onChange", "name", "title", "on-label", "off-label"], mP = { class: "button-container" }, vP = /* @__PURE__ */ ss(() => /* @__PURE__ */ K("span", null, "Years in Industry", -1)), wP = ["value", "onChange", "name", "title", "on-label", "off-label"], yP = /* @__PURE__ */ Ao({
  __name: "Filters",
  props: {
    profession: {},
    experience: {}
  },
  emits: ["profession", "experience"],
  setup(A, { emit: e }) {
    const t = A, { width: n } = eP(), i = DA(n.value >= 768), o = [
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
    ], r = ["<1", "1-3", "3-5", "5-10", "10-20", ">20"], s = bA(() => o.reduce(
      (d, p) => ({
        ...d,
        [p]: t.profession.includes(p)
      }),
      {}
    )), a = bA(() => r.reduce(
      (d, p) => ({
        ...d,
        [p]: t.experience.includes(p)
      }),
      {}
    )), c = function(d, p) {
      const h = { ...s.value, [d]: p };
      e(
        "profession",
        o.filter((y) => h[y])
      );
    }, l = function(d, p) {
      const h = { ...a.value, [d]: p };
      e(
        "experience",
        r.filter((y) => h[y])
      );
    }, u = function() {
      console.log(n.value), n.value < 768 && (i.value = !1);
    };
    return UA(n, (d, p) => {
      p >= 768 && d < 768 ? i.value = !1 : p < 768 && d >= 768 && (i.value = !0);
    }), (d, p) => (tA(), ye(oo, null, {
      default: Zi(() => [
        Xt((tA(), dA("div", {
          class: ve(["filters-container", { open: i.value, closed: !i.value }]),
          onClick: p[4] || (p[4] = (h) => i.value = !0)
        }, [
          EA(mu, { class: "guide" }),
          jA(d.$slots, "select", {}, void 0, !0),
          dP,
          K("div", fP, [
            K("div", pP, [
              gP,
              K("span", null, [
                K("button", {
                  class: "btn",
                  onClick: p[0] || (p[0] = (h) => d.$emit("profession", []))
                }, "X"),
                K("button", {
                  class: "btn",
                  onClick: p[1] || (p[1] = (h) => d.$emit("profession", o))
                }, " All ")
              ])
            ]),
            (tA(), dA(QA, null, Ut(o, (h) => K("div", null, [
              K("Toggle", {
                value: s.value[h],
                onChange: (y) => c(h, y),
                name: h,
                title: h,
                "on-label": h,
                "off-label": h,
                class: "switch"
              }, null, 40, hP)
            ])), 64))
          ]),
          K("div", null, [
            K("div", mP, [
              vP,
              K("span", null, [
                K("button", {
                  class: "btn",
                  onClick: p[2] || (p[2] = (h) => d.$emit("experience", []))
                }, "X"),
                K("button", {
                  class: "btn",
                  onClick: p[3] || (p[3] = (h) => d.$emit("experience", r))
                }, " All ")
              ])
            ]),
            (tA(), dA(QA, null, Ut(r, (h) => K("div", null, [
              K("Toggle", {
                value: a.value[h],
                onChange: (y) => l(h, y),
                name: h,
                title: h,
                "on-label": h,
                "off-label": h,
                class: "switch"
              }, null, 40, wP)
            ])), 64))
          ]),
          EA(uP, { class: "data-url" })
        ], 2)), [
          [le(tP), u]
        ])
      ]),
      _: 3
    }));
  }
});
const BP = /* @__PURE__ */ Dt(yP, [["__scopeId", "data-v-cf0c1652"]]), PP = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAgL//gEA/f0AAwAAAf0AAfgA//8A/Q8DBQX9+vgAAQEAAf4A/f8GBAf9/f3/Af4AAAD+AQAAAAAAAAIA/wMAAAAAAAACAP8AAPwAAfsAAAD+AQEAAAQA/wUAAAAG/f8AAPz6B/kAAAAA/wMA/wQA/gUAAAAAAv0AAfwA/v0D/wAB/gUA/wT8BAMAAAAAAAAA/gAAAvUC/wAB/wAAAAD/AQIA/wT+AgIAAAAAAfwAAAAAAP4A/gAD/wAAAAD/AQAA/wT+AQMAAAAAAvkAAAAD/QAAAAD/AQD+AQAAAA4AAAAAAfgAAPwD/vcAAAD/AQAA/wQAAAMAAAAAAP0AAAAA/wcAAAAAAAAAAAAAAfkAAAAAAAMAAAAAAfsAAAAA/gsAAAD+Af4AAAAA/wIAAAMAAAAAAAAAAvcAAAAAAAIA/wQA/wEAAAACAP8AAPz+APcDBQX+9gYFBQX6/fIDCAb9/QEAAgIABPcA+/0C+BsD/wABBe0BAQH5Af4BAwP//QAA/wQAAAAAAAAAAQAAAAAAAvcAAAAA/wEA/wgA/wcAAAAAAfUD//wAAf8AAAD/AAAAAAP+/wcAAAAAAf0AAAAAAAAAAAACAfcAAAAA/gkAAAD+AvwAAAAAAgAAAAAA/QIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//z8AP39AgUFAAAAAP7+AP7+AAICAAEB/ff3AAEBBAYGAP//BQUF+/v7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQE/fv7BAQE/f39BQUF/f39AAEBAAMDAP7+AAAAAwMDBQUF////AAAAAAIC//39AAAAAP//AP//AAAAAAEBAAEBAAAAAP7+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEB/AEEAQD8BAL9BP/7AgQEC/8A9gD8AP//AgEFCP0C9f7+/AAB+/v/+wAEAv8DAwD++QAAAAD/CQD/BAABAQABAAAA+wAAAAAA/gAAAAH+BwAAAAIBAAAAAP4C9wAAAP4ACAAABAD+/gAAAAD//gL//AD/BAD/A/7/BgAAAAAA+gD//QAA/AAB+gAABAAAAAAB9wADAAD/Av4AAwIABgAAAAAA+AAB+gD/BgAAAAAA/gAAAAD/BAAAAP8B/AAAAAD/AgAA/gAB/gAAAAD//gAAAAAB/wAAAAAAAAL/AP4B9gAAAAAA/gAAAAH+CQAAAP0ACwAAAAAC9wAAAAAABgAAAAAC/AAAAAAAAAAAAAD/CQAAAAAA/gAAAAD+DQAAAAIA+QAA/AAB+QAAAAABAgAAAAAA/gAAAAD/BwAAAAL/AAAA/P4BAgAAAP4B+QAAAAABAQACBf0AAAD//wD8/QYC/v0A+v/8/wABAwAAAQAF5/b5+QMGCPsA/wD9AwADBQEA+AAC/AD/B////gD+/QAAAAABBQEBAf8B9AAB+QL+BwD/BAAA/v8ABgD+BwAAAAEB9QAAAAIA/QAAAP4A/gAAAAAAAgAAAAD+CQAAAAD/AwAAAAD/AAAAAAD+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/PwB/wb+//4AAAD+/v4AAv/9/f0BAQMBAQH/Af//+/sDBwX9/PwAAQH+/f0CAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+/sABAcA/gAFBQX++/gBAQEPDg8JCQn7/P7u7u7+/v4EBgb/AAAA//8ABgYA/Pz/AP8BAQH///8A//8AAQEAAAAAAAAA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AAEEAP4AAAABAAIG+P0AAAMIAAAAAAIH/AAAAAAAAAEA/f8AAAQA+v/4AAIA/v0DAAADAAD+AAAA+AMMAAAAAAAAAAIAAAAAAAAAAAD/AAD/AAAB//3+AAAJ//kA+wgD+wAAAAAJAAAAAAD/AAD/APwLAAAA+QIAAAIAAP8AAAIA/v/8AwENAPwCAgP9AP0AAAIDAP79AgEE/foAAAEB/QD/+wQB/v4D+AEA/gMGAQIC////AAD9AAP9AAAAAP0LAAAAAAL6/AAAAAAEAAAAAAH7AAAAAAACAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDA/r6+gABAf///wADAAABAAECAgAAAAgIAAAAAAICAvz8/AMGBv77+wAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/P7/AQsAAw7y+A75/AD3+QABAQQICADt9AAABAL7//r/APz+/wUBBQn//QYA//8AAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////8vLyBgoKrq6u1tAAAAL5///7BAQE7PAVCg0N+Pj4AQIC////APz8AQMJ//7+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAbhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABgP/AAMBAvnx8wD57AAAAQD+/gACAgAADQkTFvv/AP4BAP4D+gD+/gACBQD//wAB+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//PwAAwT7+/sLDg4RDxD++vsCAgICAgL5+wju8vUCBQb9/v0A//8EBwf8+fwAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQf9+/n2BgkK9frz9e8CBAQE/v/6/v39AAD9AgYCAgQBAP39AgQD/Pr1AAIAAAIGAP4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP39/QIEBP39/QICAgMDA/39/QEBAQQFBQYGBgAAAPz8/AICAv79/QACAgACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wYAAAD9AAAAAAAAAAMAAgD9AP8A/wAA//gCAQQCAAT//gAC/wQAAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAAAAAAAAAAAB/gD/BAD/AQAAAAAACP4AAAAA/gAAAAIA/gAAAAAB/gAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAGAAAAAP8AAAAAAv/8AAH4AAH9AAAA/gAAAAADAAAAAAAE/gAAAP8EAv4DAAAAAAL5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/UAAAAA/QkD/gABAAIA/wb/Af4AAAAAAQQAAAAAAvoAAP4AAf4AAPz+/gYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9BwAAAAAA/v0CAAAAAAAAAAAAAAAAAAAA/AAAAAD+AgAAAAAAAgAAAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD//2YDyYT40MtmAAAAAElFTkSuQmCC";
const bP = {
  name: "LogoHeader"
}, EP = (A) => (Pt("data-v-2581b603"), A = A(), bt(), A), DP = { class: "title-container" }, CP = /* @__PURE__ */ EP(() => /* @__PURE__ */ K("h1", { class: "title" }, [
  /* @__PURE__ */ K("img", {
    src: PP,
    alt: "LBF Logo",
    class: "lbf-logo"
  }),
  /* @__PURE__ */ $t("Longevity Bottlenecks ")
], -1)), QP = [
  CP
];
function xP(A, e, t, n, i, o) {
  return tA(), dA("div", DP, QP);
}
const SP = /* @__PURE__ */ Dt(bP, [["render", xP], ["__scopeId", "data-v-2581b603"]]);
const IP = (A) => (Pt("data-v-1b2e91e0"), A = A(), bt(), A), kP = {
  key: 0,
  class: "chart-container"
}, _P = { class: "chartSelect-container" }, MP = /* @__PURE__ */ IP(() => /* @__PURE__ */ K("h3", { class: "title" }, "Chart Type", -1)), NP = {
  __name: "CirclePacking",
  setup(A) {
    const e = ["Bottlenecks", "Solutions"], t = DA("Bottlenecks"), n = DA([
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
    ]), i = DA(["<1", "1-3", "3-5", "5-10", "10-20", ">20"]), o = DA(null), r = DA(null), s = function(d) {
      n.value = d, u();
    }, a = function(d) {
      i.value = d, u();
    }, c = bA(() => ur.bottlenecks.filter((p) => (!i.value.length || i.value.includes(p.experience)) && (!n.value.length || p.occupations.some((h) => n.value.includes(h))))), l = bA(() => ur.solutions.filter((p) => (!i.value.length || i.value.includes(p.experience)) && (!n.value.length || p.occupations.some((h) => n.value.includes(h))))), u = function() {
      const d = c.value, p = dr.bottlenecks, h = p.filter((v) => v.tag.match(/\[[A-Z]]/)).map((v) => ({
        ...v,
        name: v.tag,
        children: p.filter(
          (P) => P.tag.match(/\[[A-Z][0-9].*]/) && P.tag.substring(0, 2) === v.tag.substring(0, 2)
        ).map((P) => ({
          ...P,
          name: P.tag,
          size: 0,
          bottlenecks: []
        }))
      }));
      d.forEach((v) => {
        const P = v.tags.filter(($) => $.match(/\[[A-Z]/));
        P.length && P.forEach(($) => {
          const T = $.match(/\[[A-Z]/) + "]";
          h.find((z) => z.tag === T).children.find((z) => z.tag === $).bottlenecks.push(v);
        });
      }), o.value = {
        data: { name: "bottlenecks", children: h },
        props: {
          name: (v) => v.bottleneck,
          value: (v) => {
            var P;
            return v.children ? v["Number of responses"] : (P = v.bottlenecks) == null ? void 0 : P.length;
          },
          label: (v) => zt[v.tag].label,
          title: (v) => v["Q2 Bottleneck"] + `:
` + v["Bottleneck Description"],
          fill: (v) => v.color,
          clickData: (v) => ({
            title: v["Q2 Bottleneck"],
            description: v["Bottleneck Description"],
            items: v.bottlenecks,
            isBottleneck: !0
          }),
          width: 1152,
          chartTitle: "Bottlenecks"
        }
      };
      const y = l.value, _ = dr.solutions, M = _.filter((v) => v.tag.match(/\[\+[A-Z]]/)).map((v) => ({
        ...v,
        children: _.filter(
          (P) => P.tag.match(/\[\+[A-Z][0-9].*]/) && P.tag.substring(0, 3) === v.tag.substring(0, 3)
        ).map((P) => ({ ...P, solutions: [] }))
      }));
      y.forEach((v) => {
        const P = v.tags.filter(($) => $.match(/\[\+[A-Z]/));
        P.length && P.forEach(($) => {
          const T = $.match(/\[\+[A-Z]/) + "]";
          M.find((z) => z.tag === T).children.find((z) => z.tag === $).solutions.push(v);
        });
      }), r.value = {
        data: { name: "solutions", children: M },
        props: {
          name: (v) => v.investment,
          value: (v) => {
            var P;
            return v.children ? v["Number of responses"] : (P = v.solutions) == null ? void 0 : P.length;
          },
          label: (v) => zt[v.tag].label,
          title: (v) => v["Q3 Solution"] + `:
` + v["Solution Description"],
          fill: (v) => v.color,
          clickData: (v) => ({
            title: v["Q3 Solution"],
            description: v["Solution Description"],
            items: v.solutions,
            isBottleneck: !1
          }),
          width: 1152,
          chartTitle: "Solutions"
        }
      };
    };
    return Et(() => {
      u();
    }), (d, p) => (tA(), dA(QA, null, [
      EA(SP, { class: "logo-header" }),
      o.value && r.value ? (tA(), dA("div", kP, [
        t.value === "Bottlenecks" && o.value ? (tA(), ye(qa, {
          key: 0,
          class: "bubble-chart",
          "chart-data": o.value
        }, null, 8, ["chart-data"])) : Ge("", !0),
        t.value === "Solutions" && r.value ? (tA(), ye(qa, {
          key: 1,
          class: "bubble-chart",
          "chart-data": r.value
        }, null, 8, ["chart-data"])) : Ge("", !0),
        EA(BP, {
          profession: n.value,
          experience: i.value,
          onProfession: p[1] || (p[1] = (h) => s(h)),
          onExperience: p[2] || (p[2] = (h) => a(h))
        }, {
          select: Zi(() => [
            K("div", _P, [
              MP,
              Xt(K("v-select", {
                "onUpdate:modelValue": p[0] || (p[0] = (h) => t.value = h),
                options: e,
                clearable: !1,
                class: "chartSelect"
              }, null, 512), [
                [Sp, t.value]
              ])
            ])
          ]),
          _: 1
        }, 8, ["profession", "experience"])
      ])) : Ge("", !0)
    ], 64));
  }
}, Bu = /* @__PURE__ */ Dt(NP, [["__scopeId", "data-v-1b2e91e0"]]), FP = { key: 0 }, TP = {
  __name: "HomeView",
  setup(A) {
    const e = DA(!1);
    return Et(async () => {
      e.value = !0;
    }), (t, n) => e.value ? (tA(), dA("main", FP, [
      EA(Bu)
    ])) : Ge("", !0);
  }
}, HP = kh({
  history: kg("/bottlenecks/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: TP
    }
  ]
});
var Br = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { value: { validator: function(A) {
  return (e) => ["number", "string", "boolean"].indexOf(typeof e) !== -1 || e == null;
}, required: !1 }, modelValue: { validator: function(A) {
  return (e) => ["number", "string", "boolean"].indexOf(typeof e) !== -1 || e == null;
}, required: !1 }, id: { type: [String, Number], required: !1, default: "toggle" }, name: { type: [String, Number], required: !1, default: "toggle" }, disabled: { type: Boolean, required: !1, default: !1 }, required: { type: Boolean, required: !1, default: !1 }, falseValue: { type: [String, Number, Boolean], required: !1, default: !1 }, trueValue: { type: [String, Number, Boolean], required: !1, default: !0 }, onLabel: { type: [String, Object], required: !1, default: "" }, offLabel: { type: [String, Object], required: !1, default: "" }, classes: { type: Object, required: !1, default: () => ({}) }, labelledby: { type: String, required: !1 }, describedby: { type: String, required: !1 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(A, e) {
  const t = function(r, s, a) {
    const { value: c, modelValue: l, falseValue: u, trueValue: d, disabled: p } = Tt(r), h = l && l.value !== void 0 ? l : c, y = bA(() => h.value === d.value), _ = (P) => {
      s.emit("input", P), s.emit("update:modelValue", P), s.emit("change", P);
    }, M = () => {
      _(d.value);
    }, v = () => {
      _(u.value);
    };
    return [null, void 0, !1, 0, "0", "off"].indexOf(h.value) !== -1 && [u.value, d.value].indexOf(h.value) === -1 && v(), [!0, 1, "1", "on"].indexOf(h.value) !== -1 && [u.value, d.value].indexOf(h.value) === -1 && M(), { externalValue: h, checked: y, update: _, check: M, uncheck: v, handleInput: (P) => {
      _(P.target.checked ? d.value : u.value);
    }, handleClick: () => {
      p.value || (y.value ? v() : M());
    } };
  }(A, e), n = function(r, s, a) {
    const { trueValue: c, falseValue: l, onLabel: u, offLabel: d } = Tt(r), p = a.checked, h = a.update;
    return { label: bA(() => {
      let y = p.value ? u.value : d.value;
      return y || (y = "&nbsp;"), y;
    }), toggle: () => {
      h(p.value ? l.value : c.value);
    }, on: () => {
      h(c.value);
    }, off: () => {
      h(l.value);
    } };
  }(A, 0, { checked: t.checked, update: t.update }), i = function(r, s, a) {
    const c = Tt(r), l = c.disabled, u = a.checked, d = bA(() => ({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label", ...c.classes.value }));
    return { classList: bA(() => ({ container: d.value.container, toggle: [d.value.toggle, l.value ? u.value ? d.value.toggleOnDisabled : d.value.toggleOffDisabled : u.value ? d.value.toggleOn : d.value.toggleOff], handle: [d.value.handle, l.value ? u.value ? d.value.handleOnDisabled : d.value.handleOffDisabled : u.value ? d.value.handleOn : d.value.handleOff], label: d.value.label })) };
  }(A, 0, { checked: t.checked }), o = function(r, s, a) {
    const { disabled: c } = Tt(r), l = a.check, u = a.uncheck, d = a.checked;
    return { handleSpace: () => {
      c.value || (d.value ? u() : l());
    } };
  }(A, 0, { check: t.check, uncheck: t.uncheck, checked: t.checked });
  return { ...t, ...i, ...n, ...o };
} };
const OP = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"], LP = ["id", "name", "value", "checked", "disabled"], XP = ["innerHTML"], zP = ["checked"];
Br.render = function(A, e, t, n, i, o) {
  return tA(), dA("div", _i({ class: A.classList.container, tabindex: t.disabled ? void 0 : 0, "aria-checked": A.checked, "aria-describedby": t.describedby, "aria-labelledby": t.labelledby, role: "switch" }, t.aria, { onKeypress: e[1] || (e[1] = Mp(Zo((...r) => A.handleSpace && A.handleSpace(...r), ["prevent"]), ["space"])) }), [Xt(K("input", { type: "checkbox", id: t.id, name: t.name, value: t.trueValue, checked: A.checked, disabled: t.disabled }, null, 8, LP), [[Ar, !1]]), K("div", { class: ve(A.classList.toggle), onClick: e[0] || (e[0] = (...r) => A.handleClick && A.handleClick(...r)) }, [K("span", { class: ve(A.classList.handle) }, null, 2), jA(A.$slots, "label", { checked: A.checked, classList: A.classList }, () => [K("span", { class: ve(A.classList.label), innerHTML: A.label }, null, 10, XP)]), t.required ? (tA(), dA("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: A.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, zP)) : Ge("v-if", !0)], 2)], 16, OP);
}, Br.__file = "src/Toggle.vue";
const RP = Bp(Bu);
customElements.define("bottlenecks-visualizations", RP);
const Un = Fp(Nh);
Un.use(lg());
Un.use(HP);
Un.component("v-select", Em);
Un.component("v-toggle", Br);
Un.mount("#app");
