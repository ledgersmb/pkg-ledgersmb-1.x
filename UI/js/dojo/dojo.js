//>>built
(function(d, p) {
  var h, n = function() {
    return"undefined" !== typeof t && "function" !== typeof t ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  }(), m = function() {
  }, q = function(a) {
    for(var b in a) {
      return 0
    }
    return 1
  }, g = {}.toString, e = function(a) {
    return"[object Function]" == g.call(a)
  }, k = function(a) {
    return"[object String]" == g.call(a)
  }, a = function(a) {
    return"[object Array]" == g.call(a)
  }, c = function(a, b) {
    if(a) {
      for(var c = 0;c < a.length;) {
        b(a[c++])
      }
    }
  }, f = function(a, b) {
    for(var c in b) {
      a[c] = b[c]
    }
    return a
  }, b = function(a, b) {
    return f(Error(a), {src:"dojoLoader", info:b})
  }, r = 1, u = function() {
    return"_" + r++
  }, l = function(a, b, c) {
    return wa(a, b, c, 0, l)
  }, t = n, x = t.document, w = x && x.createElement("DiV"), s = l.has = function(a) {
    return e(y[a]) ? y[a] = y[a](t, x, w) : y[a]
  }, y = s.cache = p.hasCache;
  e(d) && (d = d(n));
  s.add = function(a, b, c, f) {
    (void 0 === y[a] || f) && (y[a] = b);
    return c && s(a)
  };
  s.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
  s("host-webworker") && (f(p.hasCache, {"host-browser":0, dom:0, "dojo-dom-ready-api":0, "dojo-sniff":0, "dojo-inject-api":1, "host-webworker":1, "dojo-guarantee-console":0}), p.loaderPatch = {injectUrl:function(a, b) {
    try {
      importScripts(a), b()
    }catch(c) {
      console.error(c)
    }
  }});
  for(var z in d.has) {
    s.add(z, d.has[z], 0, 1)
  }
  l.async = 1;
  var v = new Function("return eval(arguments[0]);");
  l.eval = function(a, b) {
    return v(a + "\r\n//# sourceURL\x3d" + b)
  };
  var D = {}, G = l.signal = function(b, f) {
    var l = D[b];
    c(l && l.slice(0), function(b) {
      b.apply(null, a(f) ? f : [f])
    })
  };
  z = l.on = function(a, b) {
    var c = D[a] || (D[a] = []);
    c.push(b);
    return{remove:function() {
      for(var a = 0;a < c.length;a++) {
        if(c[a] === b) {
          c.splice(a, 1);
          break
        }
      }
    }}
  };
  var I = [], M = {}, K = [], P = {}, U = l.map = {}, A = [], B = {}, F = "", C = {}, H = {}, n = {}, N = 0, Z = function(a) {
    var b, c, f, l;
    for(b in H) {
      c = H[b], (f = b.match(/^url\:(.+)/)) ? C["url:" + xa(f[1], a)] = c : "*now" == b ? l = c : "*noref" != b && (f = ba(b, a, !0), C[f.mid] = C["url:" + f.url] = c)
    }
    l && l(ka(a));
    H = {}
  }, V = function(a) {
    return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(a) {
      return"\\" + a
    })
  }, W = function(a, b) {
    b.splice(0, b.length);
    for(var c in a) {
      b.push([c, a[c], RegExp("^" + V(c) + "(/|$)"), c.length])
    }
    b.sort(function(a, b) {
      return b[3] - a[3]
    });
    return b
  }, Q = function(a, b) {
    c(a, function(a) {
      b.push([k(a[0]) ? RegExp("^" + V(a[0]) + "$") : a[0], a[1]])
    })
  }, J = function(a) {
    var b = a.name;
    b || (b = a, a = {name:b});
    a = f({main:"main"}, a);
    a.location = a.location ? a.location : b;
    a.packageMap && (U[b] = a.packageMap);
    a.main.indexOf("./") || (a.main = a.main.substring(2));
    P[b] = a
  }, X = [], E = function(a, b, r) {
    for(var e in a) {
      "waitSeconds" == e && (l.waitms = 1E3 * (a[e] || 0));
      "cacheBust" == e && (F = a[e] ? k(a[e]) ? a[e] : (new Date).getTime() + "" : "");
      if("baseUrl" == e || "combo" == e) {
        l[e] = a[e]
      }
      a[e] !== y && (l.rawConfig[e] = a[e], "has" != e && s.add("config-" + e, a[e], 0, b))
    }
    l.baseUrl || (l.baseUrl = "./");
    /\/$/.test(l.baseUrl) || (l.baseUrl += "/");
    for(e in a.has) {
      s.add(e, a.has[e], 0, b)
    }
    c(a.packages, J);
    for(var g in a.packagePaths) {
      c(a.packagePaths[g], function(a) {
        var b = g + "/" + a;
        k(a) && (a = {name:a});
        a.location = b;
        J(a)
      })
    }
    W(f(U, a.map), A);
    c(A, function(a) {
      a[1] = W(a[1], []);
      "*" == a[0] && (A.star = a)
    });
    W(f(M, a.paths), K);
    Q(a.aliases, I);
    if(b) {
      X.push({config:a.config})
    }else {
      for(e in a.config) {
        b = Y(e, r), b.config = f(b.config || {}, a.config[e])
      }
    }
    a.cache && (Z(), H = a.cache, a.cache["*noref"] && Z());
    G("config", [a, l.rawConfig])
  };
  s("dojo-cdn");
  var L = x.getElementsByTagName("script");
  h = 0;
  for(var O, R, ca, $;h < L.length;) {
    O = L[h++];
    if((ca = O.getAttribute("src")) && ($ = ca.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
      R = $[3] || "", p.baseUrl = p.baseUrl || R, N = O
    }
    if(ca = O.getAttribute("data-dojo-config") || O.getAttribute("djConfig")) {
      n = l.eval("({ " + ca + " })", "data-dojo-config"), N = O
    }
  }
  l.rawConfig = {};
  E(p, 1);
  s("dojo-cdn") && ((P.dojo.location = R) && (R += "/"), P.dijit.location = R + "../dijit/", P.dojox.location = R + "../dojox/");
  E(d, 1);
  E(n, 1);
  var da = function(a) {
    la(function() {
      c(a.deps, ya)
    })
  }, wa = function(c, e, r, g, d) {
    var q;
    if(k(c)) {
      if((q = Y(c, g, !0)) && q.executed) {
        return q.result
      }
      throw b("undefinedModule", c);
    }
    a(c) || (E(c, 0, g), c = e, e = r);
    if(a(c)) {
      if(c.length) {
        r = "require*" + u();
        for(var w, s = [], h = 0;h < c.length;) {
          w = c[h++], s.push(Y(w, g))
        }
        q = f(ea("", r, 0, ""), {injected:2, deps:s, def:e || m, require:g ? g.require : l, gc:1});
        B[q.mid] = q;
        da(q);
        var I = aa && 0 != "sync";
        la(function() {
          ma(q, I)
        });
        q.executed || T.push(q);
        fa()
      }else {
        e && e()
      }
    }
    return d
  }, ka = function(a) {
    if(!a) {
      return l
    }
    var b = a.require;
    b || (b = function(c, f, e) {
      return wa(c, f, e, a, b)
    }, a.require = f(b, l), b.module = a, b.toUrl = function(b) {
      return xa(b, a)
    }, b.toAbsMid = function(b) {
      return na(b, a)
    });
    return b
  }, T = [], ga = [], S = {}, Ha = function(a) {
    a.injected = 1;
    S[a.mid] = 1;
    a.url && (S[a.url] = a.pack || 1);
    Ga()
  }, ha = function(a) {
    a.injected = 2;
    delete S[a.mid];
    a.url && delete S[a.url];
    q(S) && Ia()
  }, Ja = l.idle = function() {
    return!ga.length && q(S) && !T.length && !aa
  }, oa = function(a, b) {
    if(b) {
      for(var c = 0;c < b.length;c++) {
        if(b[c][2].test(a)) {
          return b[c]
        }
      }
    }
    return 0
  }, za = function(a) {
    var b = [], c, f;
    for(a = a.replace(/\\/g, "/").split("/");a.length;) {
      c = a.shift(), ".." == c && b.length && ".." != f ? (b.pop(), f = b[b.length - 1]) : "." != c && b.push(f = c)
    }
    return b.join("/")
  }, ea = function(a, b, c, f) {
    return{pid:a, mid:b, pack:c, url:f, executed:0, def:0}
  }, Aa = function(a, f, l, r, g, k, d, q, w) {
    var s, u, m, h;
    h = /^\./.test(a);
    if(/(^\/)|(\:)|(\.js$)/.test(a) || h && !f) {
      return ea(0, a, 0, a)
    }
    a = za(h ? f.mid + "/../" + a : a);
    if(/^\./.test(a)) {
      throw b("irrationalPath", a);
    }
    f && (m = oa(f.mid, k));
    (m = (m = m || k.star) && oa(a, m[1])) && (a = m[1] + a.substring(m[3]));
    f = ($ = a.match(/^([^\/]+)(\/(.+))?$/)) ? $[1] : "";
    (s = l[f]) ? a = f + "/" + (u = $[3] || s.main) : f = "";
    var I = 0;
    c(q, function(b) {
      var c = a.match(b[0]);
      c && 0 < c.length && (I = e(b[1]) ? a.replace(b[0], b[1]) : b[1])
    });
    if(I) {
      return Aa(I, 0, l, r, g, k, d, q, w)
    }
    if(l = r[a]) {
      return w ? ea(l.pid, l.mid, l.pack, l.url) : r[a]
    }
    r = (m = oa(a, d)) ? m[1] + a.substring(m[3]) : f ? s.location + "/" + u : a;
    /(^\/)|(\:)/.test(r) || (r = g + r);
    return ea(f, a, s, za(r + ".js"))
  }, ba = function(a, b, c) {
    return Aa(a, b, P, B, l.baseUrl, c ? [] : A, c ? [] : K, c ? [] : I)
  }, Ba = function(a, b, c) {
    return a.normalize ? a.normalize(b, function(a) {
      return na(a, c)
    }) : na(b, c)
  }, Ca = 0, Y = function(a, b, c) {
    var f, e;
    (f = a.match(/^(.+?)\!(.*)$/)) ? (e = Y(f[1], b, c), 5 === e.executed && !e.load && pa(e), e.load ? (f = Ba(e, f[2], b), a = e.mid + "!" + (e.dynamic ? ++Ca + "!" : "") + f) : (f = f[2], a = e.mid + "!" + ++Ca + "!waitingForPlugin"), a = {plugin:e, mid:a, req:ka(b), prid:f}) : a = ba(a, b);
    return B[a.mid] || !c && (B[a.mid] = a)
  }, na = l.toAbsMid = function(a, b) {
    return ba(a, b).mid
  }, xa = l.toUrl = function(a, b) {
    var c = ba(a + "/x", b), f = c.url;
    return Da(0 === c.pid ? a : f.substring(0, f.length - 5))
  }, Ea = {injected:2, executed:5, def:3, result:3};
  R = function(a) {
    return B[a] = f({mid:a}, Ea)
  };
  var Ka = R("require"), La = R("exports"), Ma = R("module"), ia = {}, qa = 0, pa = function(a) {
    var b = a.result;
    a.dynamic = b.dynamic;
    a.normalize = b.normalize;
    a.load = b.load;
    return a
  }, Na = function(a) {
    var b = {};
    c(a.loadQ, function(c) {
      var e = Ba(a, c.prid, c.req.module), l = a.dynamic ? c.mid.replace(/waitingForPlugin$/, e) : a.mid + "!" + e, e = f(f({}, c), {mid:l, prid:e, injected:0});
      B[l] || Fa(B[l] = e);
      b[c.mid] = B[l];
      ha(c);
      delete B[c.mid]
    });
    a.loadQ = 0;
    var e = function(a) {
      for(var c = a.deps || [], f = 0;f < c.length;f++) {
        (a = b[c[f].mid]) && (c[f] = a)
      }
    }, l;
    for(l in B) {
      e(B[l])
    }
    c(T, e)
  }, ra = function(a) {
    l.trace("loader-finish-exec", [a.mid]);
    a.executed = 5;
    a.defOrder = qa++;
    a.loadQ && (pa(a), Na(a));
    for(h = 0;h < T.length;) {
      T[h] === a ? T.splice(h, 1) : h++
    }
    /^require\*/.test(a.mid) && delete B[a.mid]
  }, Oa = [], ma = function(a, b) {
    if(4 === a.executed) {
      return l.trace("loader-circular-dependency", [Oa.concat(a.mid).join("-\x3e")]), !a.def || b ? ia : a.cjs && a.cjs.exports
    }
    if(!a.executed) {
      if(!a.def) {
        return ia
      }
      var c = a.mid, f = a.deps || [], r, g = [], k = 0;
      for(a.executed = 4;r = f[k++];) {
        r = r === Ka ? ka(a) : r === La ? a.cjs.exports : r === Ma ? a.cjs : ma(r, b);
        if(r === ia) {
          return a.executed = 0, l.trace("loader-exec-module", ["abort", c]), ia
        }
        g.push(r)
      }
      l.trace("loader-run-factory", [a.mid]);
      c = a.def;
      g = e(c) ? c.apply(null, g) : c;
      a.result = void 0 === g && a.cjs ? a.cjs.exports : g;
      ra(a)
    }
    return a.result
  }, aa = 0, la = function(a) {
    try {
      aa++, a()
    }catch(b) {
      throw b;
    }finally {
      aa--
    }
    Ja() && G("idle", [])
  }, fa = function() {
    aa || la(function() {
      for(var a, b, c = 0;c < T.length;) {
        a = qa, b = T[c], ma(b), a != qa ? c = 0 : c++
      }
    })
  }, Da = "function" == typeof d.fixupUrl ? d.fixupUrl : function(a) {
    a += "";
    return a + (F ? (/\?/.test(a) ? "\x26" : "?") + F : "")
  };
  void 0 === s("dojo-loader-eval-hint-url") && s.add("dojo-loader-eval-hint-url", 1);
  var Fa = function(a) {
    var b = a.plugin;
    5 === b.executed && !b.load && pa(b);
    var c = function(b) {
      a.result = b;
      ha(a);
      ra(a);
      fa()
    };
    b.load ? b.load(a.prid, a.req, c) : b.loadQ ? b.loadQ.push(a) : (b.loadQ = [a], T.unshift(b), ya(b))
  }, ja = 0, sa = 0, ta = 0, Pa = function(a, b) {
    s("config-stripStrict") && (a = a.replace(/(["'])use strict\1/g, ""));
    ta = 1;
    a === ja ? ja.call(null) : l.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid);
    ta = 0
  }, ya = function(a) {
    var c = a.mid, e = a.url;
    if(!a.executed && !a.injected && !(S[c] || a.url && (a.pack && S[a.url] === a.pack || 1 == S[a.url]))) {
      if(Ha(a), a.plugin) {
        Fa(a)
      }else {
        var r = function() {
          Qa(a);
          if(2 !== a.injected) {
            if(s("dojo-enforceDefine")) {
              G("error", b("noDefine", a));
              return
            }
            ha(a);
            f(a, Ea);
            l.trace("loader-define-nonmodule", [a.url])
          }
          fa()
        };
        (ja = C[c] || C["url:" + a.url]) ? (l.trace("loader-inject", ["cache", a.mid, e]), Pa(ja, a), r()) : (l.trace("loader-inject", ["script", a.mid, e]), sa = a, l.injectUrl(Da(e), r, a), sa = 0)
      }
    }
  }, ua = function(a, c, r) {
    l.trace("loader-define-module", [a.mid, c]);
    if(2 === a.injected) {
      return G("error", b("multipleDefine", a)), a
    }
    f(a, {deps:c, def:r, cjs:{id:a.mid, uri:a.url, exports:a.result = {}, setExports:function(b) {
      a.cjs.exports = b
    }, config:function() {
      return a.config
    }}});
    for(var g = 0;c[g];g++) {
      c[g] = Y(c[g], a)
    }
    ha(a);
    !e(r) && !c.length && (a.result = r, ra(a));
    return a
  }, Qa = function(a, b) {
    for(var f = [], e, l;ga.length;) {
      l = ga.shift(), b && (l[0] = b.shift()), e = l[0] && Y(l[0]) || a, f.push([e, l[1], l[2]])
    }
    Z(a);
    c(f, function(a) {
      da(ua.apply(null, a))
    })
  }, Ia = m, Ga = m;
  s.add("ie-event-behavior", x.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
  var va = function(a, b, c, f) {
    if(s("ie-event-behavior")) {
      return a.attachEvent(c, f), function() {
        a.detachEvent(c, f)
      }
    }
    a.addEventListener(b, f, !1);
    return function() {
      a.removeEventListener(b, f, !1)
    }
  }, Ra = va(window, "load", "onload", function() {
    l.pageLoaded = 1;
    try {
      "complete" != x.readyState && (x.readyState = "complete")
    }catch(a) {
    }
    Ra()
  }), L = x.getElementsByTagName("script");
  for(h = 0;!N;) {
    if(!/^dojo/.test((O = L[h++]) && O.type)) {
      N = O
    }
  }
  l.injectUrl = function(a, c, f) {
    f = f.node = x.createElement("script");
    var e = va(f, "load", "onreadystatechange", function(a) {
      a = a || window.event;
      var b = a.target || a.srcElement;
      if("load" === a.type || /complete|loaded/.test(b.readyState)) {
        e(), l(), c && c()
      }
    }), l = va(f, "error", "onerror", function(c) {
      e();
      l();
      G("error", b("scriptError", [a, c]))
    });
    f.type = "text/javascript";
    f.charset = "utf-8";
    f.src = a;
    N.parentNode.insertBefore(f, N);
    return f
  };
  l.log = m;
  l.trace = m;
  O = function(a, c, f) {
    var r = arguments.length, g = ["require", "exports", "module"], d = [0, a, c];
    1 == r ? d = [0, e(a) ? g : [], a] : 2 == r && k(a) ? d = [a, e(c) ? g : [], c] : 3 == r && (d = [a, c, f]);
    l.trace("loader-define", d.slice(0, 2));
    if((r = d[0] && Y(d[0])) && !S[r.mid]) {
      da(ua(r, d[1], d[2]))
    }else {
      if(!s("ie-event-behavior") || ta) {
        ga.push(d)
      }else {
        r = r || sa;
        if(!r) {
          for(a in S) {
            if((g = B[a]) && g.node && "interactive" === g.node.readyState) {
              r = g;
              break
            }
          }
        }
        r ? (Z(r), da(ua(r, d[1], d[2]))) : G("error", b("ieDefineFailed", d[0]));
        fa()
      }
    }
  };
  O.amd = {vendor:"dojotoolkit.org"};
  f(f(l, p.loaderPatch), d.loaderPatch);
  z("error", function(a) {
    try {
      if(console.error(a), a instanceof Error) {
        for(var b in a) {
        }
      }
    }catch(c) {
    }
  });
  f(l, {uid:u, cache:C, packs:P});
  t.define || (t.define = O, t.require = l, c(X, function(a) {
    E(a)
  }), O = n.deps || d.deps || p.deps, n = n.callback || d.callback || p.callback, l.boot = O || n ? [O || [], n] : 0)
})(function(d) {
  return d.dojoConfig || d.djConfig || d.require || {}
}, {async:1, hasCache:{"config-selectorEngine":"lite", "config-tlmSiblingOfDojo":1, "dojo-built":1, "dojo-loader":1, dom:1, "host-browser":1}, packages:[{location:"../lsmb", main:"src", name:"lsmb"}, {location:"../dijit", name:"dijit"}, {location:".", name:"dojo"}]});
require({cache:{"dojo/request/default":function() {
  define(["exports", "require", "../has"], function(d, p, h) {
    var n = h("config-requestProvider");
    n || (n = "./xhr");
    d.getPlatformDefaultId = function() {
      return"./xhr"
    };
    d.load = function(d, q, g, e) {
      p(["platform" == d ? "./xhr" : n], function(e) {
        g(e)
      })
    }
  })
}, "dojo/_base/fx":function() {
  define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function(d, p, h, n, m, q, g, e, k) {
    var a = h.mixin, c = {}, f = c._Line = function(a, b) {
      this.start = a;
      this.end = b
    };
    f.prototype.getValue = function(a) {
      return(this.end - this.start) * a + this.start
    };
    var b = c.Animation = function(b) {
      a(this, b);
      h.isArray(this.curve) && (this.curve = new f(this.curve[0], this.curve[1]))
    };
    b.prototype = new n;
    h.extend(b, {duration:350, repeat:0, rate:20, _percent:0, _startRepeatCount:0, _getStep:function() {
      var a = this._percent, b = this.easing;
      return b ? b(a) : a
    }, _fire:function(a, b) {
      var c = b || [];
      if(this[a]) {
        if(p.debugAtAllCosts) {
          this[a].apply(this, c)
        }else {
          try {
            this[a].apply(this, c)
          }catch(f) {
            console.error("exception in animation handler for:", a), console.error(f)
          }
        }
      }
      return this
    }, play:function(a, b) {
      this._delayTimer && this._clearTimer();
      if(b) {
        this._stopTimer(), this._active = this._paused = !1, this._percent = 0
      }else {
        if(this._active && !this._paused) {
          return this
        }
      }
      this._fire("beforeBegin", [this.node]);
      var c = a || this.delay, f = h.hitch(this, "_play", b);
      if(0 < c) {
        return this._delayTimer = setTimeout(f, c), this
      }
      f();
      return this
    }, _play:function(a) {
      this._delayTimer && this._clearTimer();
      this._startTime = (new Date).valueOf();
      this._paused && (this._startTime -= this.duration * this._percent);
      this._active = !0;
      this._paused = !1;
      a = this.curve.getValue(this._getStep());
      this._percent || (this._startRepeatCount || (this._startRepeatCount = this.repeat), this._fire("onBegin", [a]));
      this._fire("onPlay", [a]);
      this._cycle();
      return this
    }, pause:function() {
      this._delayTimer && this._clearTimer();
      this._stopTimer();
      if(!this._active) {
        return this
      }
      this._paused = !0;
      this._fire("onPause", [this.curve.getValue(this._getStep())]);
      return this
    }, gotoPercent:function(a, b) {
      this._stopTimer();
      this._active = this._paused = !0;
      this._percent = a;
      b && this.play();
      return this
    }, stop:function(a) {
      this._delayTimer && this._clearTimer();
      if(!this._timer) {
        return this
      }
      this._stopTimer();
      a && (this._percent = 1);
      this._fire("onStop", [this.curve.getValue(this._getStep())]);
      this._active = this._paused = !1;
      return this
    }, destroy:function() {
      this.stop()
    }, status:function() {
      return this._active ? this._paused ? "paused" : "playing" : "stopped"
    }, _cycle:function() {
      if(this._active) {
        var a = (new Date).valueOf(), a = 0 === this.duration ? 1 : (a - this._startTime) / this.duration;
        1 <= a && (a = 1);
        this._percent = a;
        this.easing && (a = this.easing(a));
        this._fire("onAnimate", [this.curve.getValue(a)]);
        1 > this._percent ? this._startTimer() : (this._active = !1, 0 < this.repeat ? (this.repeat--, this.play(null, !0)) : -1 == this.repeat ? this.play(null, !0) : this._startRepeatCount && (this.repeat = this._startRepeatCount, this._startRepeatCount = 0), this._percent = 0, this._fire("onEnd", [this.node]), !this.repeat && this._stopTimer())
      }
      return this
    }, _clearTimer:function() {
      clearTimeout(this._delayTimer);
      delete this._delayTimer
    }});
    var r = 0, u = null, l = {run:function() {
    }};
    h.extend(b, {_startTimer:function() {
      this._timer || (this._timer = q.after(l, "run", h.hitch(this, "_cycle"), !0), r++);
      u || (u = setInterval(h.hitch(l, "run"), this.rate))
    }, _stopTimer:function() {
      this._timer && (this._timer.remove(), this._timer = null, r--);
      0 >= r && (clearInterval(u), u = null, r = 0)
    }});
    var t = g("ie") ? function(a) {
      var b = a.style;
      !b.width.length && "auto" == k.get(a, "width") && (b.width = "auto")
    } : function() {
    };
    c._fade = function(b) {
      b.node = e.byId(b.node);
      var f = a({properties:{}}, b);
      b = f.properties.opacity = {};
      b.start = !("start" in f) ? function() {
        return+k.get(f.node, "opacity") || 0
      } : f.start;
      b.end = f.end;
      b = c.animateProperty(f);
      q.after(b, "beforeBegin", h.partial(t, f.node), !0);
      return b
    };
    c.fadeIn = function(b) {
      return c._fade(a({end:1}, b))
    };
    c.fadeOut = function(b) {
      return c._fade(a({end:0}, b))
    };
    c._defaultEasing = function(a) {
      return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2
    };
    var x = function(a) {
      this._properties = a;
      for(var b in a) {
        var c = a[b];
        c.start instanceof m && (c.tempColor = new m)
      }
    };
    x.prototype.getValue = function(a) {
      var b = {}, c;
      for(c in this._properties) {
        var f = this._properties[c], e = f.start;
        e instanceof m ? b[c] = m.blendColors(e, f.end, a, f.tempColor).toCss() : h.isArray(e) || (b[c] = (f.end - e) * a + e + ("opacity" != c ? f.units || "px" : 0))
      }
      return b
    };
    c.animateProperty = function(c) {
      var f = c.node = e.byId(c.node);
      c.easing || (c.easing = d._defaultEasing);
      c = new b(c);
      q.after(c, "beforeBegin", h.hitch(c, function() {
        var b = {}, c;
        for(c in this.properties) {
          if("width" == c || "height" == c) {
            this.node.display = "block"
          }
          var e = this.properties[c];
          h.isFunction(e) && (e = e(f));
          e = b[c] = a({}, h.isObject(e) ? e : {end:e});
          h.isFunction(e.start) && (e.start = e.start(f));
          h.isFunction(e.end) && (e.end = e.end(f));
          var r = 0 <= c.toLowerCase().indexOf("color"), l = function(a, b) {
            var c = {height:a.offsetHeight, width:a.offsetWidth}[b];
            if(void 0 !== c) {
              return c
            }
            c = k.get(a, b);
            return"opacity" == b ? +c : r ? c : parseFloat(c)
          };
          "end" in e ? "start" in e || (e.start = l(f, c)) : e.end = l(f, c);
          r ? (e.start = new m(e.start), e.end = new m(e.end)) : e.start = "opacity" == c ? +e.start : parseFloat(e.start)
        }
        this.curve = new x(b)
      }), !0);
      q.after(c, "onAnimate", h.hitch(k, "set", c.node), !0);
      return c
    };
    c.anim = function(a, f, e, r, l, g) {
      return c.animateProperty({node:a, duration:e || b.prototype.duration, properties:f, easing:r, onEnd:l}).play(g || 0)
    };
    a(d, c);
    d._Animation = b;
    return c
  })
}, "dojo/string":function() {
  define(["./_base/kernel", "./_base/lang"], function(d, p) {
    var h = /[&<>'"\/]/g, n = {"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;", "/":"\x26#x2F;"}, m = {};
    p.setObject("dojo.string", m);
    m.escape = function(d) {
      return!d ? "" : d.replace(h, function(g) {
        return n[g]
      })
    };
    m.rep = function(d, g) {
      if(0 >= g || !d) {
        return""
      }
      for(var e = [];;) {
        g & 1 && e.push(d);
        if(!(g >>= 1)) {
          break
        }
        d += d
      }
      return e.join("")
    };
    m.pad = function(d, g, e, k) {
      e || (e = "0");
      d = String(d);
      g = m.rep(e, Math.ceil((g - d.length) / e.length));
      return k ? d + g : g + d
    };
    m.substitute = function(m, g, e, k) {
      k = k || d.global;
      e = e ? p.hitch(k, e) : function(a) {
        return a
      };
      return m.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(a, c, f) {
        a = p.getObject(c, !1, g);
        f && (a = p.getObject(f, !1, k).call(k, a, c));
        return e(a, c).toString()
      })
    };
    m.trim = String.prototype.trim ? p.trim : function(d) {
      d = d.replace(/^\s+/, "");
      for(var g = d.length - 1;0 <= g;g--) {
        if(/\S/.test(d.charAt(g))) {
          d = d.substring(0, g + 1);
          break
        }
      }
      return d
    };
    return m
  })
}, "dijit/a11y":function() {
  define("dojo/_base/array dojo/dom dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/sniff ./main".split(" "), function(d, p, h, n, m, q, g) {
    var e = {_isElementShown:function(e) {
      var a = n.get(e);
      return"hidden" != a.visibility && "collapsed" != a.visibility && "none" != a.display && "hidden" != h.get(e, "type")
    }, hasDefaultTabStop:function(e) {
      switch(e.nodeName.toLowerCase()) {
        case "a":
          return h.has(e, "href");
        case "area":
        ;
        case "button":
        ;
        case "input":
        ;
        case "object":
        ;
        case "select":
        ;
        case "textarea":
          return!0;
        case "iframe":
          var a;
          try {
            var c = e.contentDocument;
            if("designMode" in c && "on" == c.designMode) {
              return!0
            }
            a = c.body
          }catch(f) {
            try {
              a = e.contentWindow.document.body
            }catch(b) {
              return!1
            }
          }
          return a && ("true" == a.contentEditable || a.firstChild && "true" == a.firstChild.contentEditable);
        default:
          return"true" == e.contentEditable
      }
    }, effectiveTabIndex:function(g) {
      return h.get(g, "disabled") ? void 0 : h.has(g, "tabIndex") ? +h.get(g, "tabIndex") : e.hasDefaultTabStop(g) ? 0 : void 0
    }, isTabNavigable:function(g) {
      return 0 <= e.effectiveTabIndex(g)
    }, isFocusable:function(g) {
      return-1 <= e.effectiveTabIndex(g)
    }, _getTabNavigable:function(g) {
      function a(a) {
        return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
      }
      var c, f, b, r, d, l, m = {}, n = e._isElementShown, w = e.effectiveTabIndex, s = function(e) {
        for(e = e.firstChild;e;e = e.nextSibling) {
          if(!(1 != e.nodeType || 9 >= q("ie") && "HTML" !== e.scopeName || !n(e))) {
            var g = w(e);
            if(0 <= g) {
              if(0 == g) {
                c || (c = e), f = e
              }else {
                if(0 < g) {
                  if(!b || g < r) {
                    r = g, b = e
                  }
                  if(!d || g >= l) {
                    l = g, d = e
                  }
                }
              }
              g = a(e);
              h.get(e, "checked") && g && (m[g] = e)
            }
            "SELECT" != e.nodeName.toUpperCase() && s(e)
          }
        }
      };
      n(g) && s(g);
      return{first:m[a(c)] || c, last:m[a(f)] || f, lowest:m[a(b)] || b, highest:m[a(d)] || d}
    }, getFirstInTabbingOrder:function(g, a) {
      var c = e._getTabNavigable(p.byId(g, a));
      return c.lowest ? c.lowest : c.first
    }, getLastInTabbingOrder:function(g, a) {
      var c = e._getTabNavigable(p.byId(g, a));
      return c.last ? c.last : c.highest
    }};
    m.mixin(g, e);
    return e
  })
}, "dojo/_base/kernel":function() {
  define(["../global", "../has", "./config", "require", "module"], function(d, p, h, n, m) {
    var q, g = {}, e = {}, k = {config:h, global:d, dijit:g, dojox:e}, g = {dojo:["dojo", k], dijit:["dijit", g], dojox:["dojox", e]};
    m = n.map && n.map[m.id.match(/[^\/]+/)[0]];
    for(q in m) {
      g[q] ? g[q][0] = m[q] : g[q] = [m[q], {}]
    }
    for(q in g) {
      m = g[q], m[1]._scopeName = m[0], h.noGlobals || (d[m[0]] = m[1])
    }
    k.scopeMap = g;
    k.baseUrl = k.config.baseUrl = n.baseUrl;
    k.isAsync = n.async;
    k.locale = h.locale;
    d = "$Rev: bce476b $".match(/[0-9a-f]{7,}/);
    k.version = {major:1, minor:10, patch:9, flag:"", revision:d ? d[0] : NaN, toString:function() {
      var a = k.version;
      return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
    }};
    Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(k);
    k.exit = function() {
    };
    p("host-webworker");
    p.add("console-as-object", function() {
      return Function.prototype.bind && console && "object" === typeof console.log
    });
    "undefined" != typeof console || (console = {});
    h = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
    var a;
    for(d = 0;a = h[d++];) {
      console[a] ? p("console-as-object") && (console[a] = Function.prototype.bind.call(console[a], console)) : function() {
        var c = a + "";
        console[c] = "log" in console ? function() {
          var a = Array.prototype.slice.call(arguments);
          a.unshift(c + ":");
          console.log(a.join(" "))
        } : function() {
        };
        console[c]._fake = !0
      }()
    }
    k.deprecated = k.experimental = function() {
    };
    k._hasResource = {};
    return k
  })
}, "dijit/Viewport":function() {
  define(["dojo/Evented", "dojo/on", "dojo/domReady", "dojo/sniff", "dojo/window"], function(d, p, h, n, m) {
    var q = new d, g;
    h(function() {
      var e = m.getBox();
      q._rlh = p(window, "resize", function() {
        var a = m.getBox();
        e.h == a.h && e.w == a.w || (e = a, q.emit("resize"))
      });
      if(8 == n("ie")) {
        var d = screen.deviceXDPI;
        setInterval(function() {
          screen.deviceXDPI != d && (d = screen.deviceXDPI, q.emit("resize"))
        }, 500)
      }
      n("ios") && (p(document, "focusin", function(a) {
        g = a.target
      }), p(document, "focusout", function(a) {
        g = null
      }))
    });
    q.getEffectiveBox = function(e) {
      e = m.getBox(e);
      var d = g && g.tagName && g.tagName.toLowerCase();
      if(n("ios") && g && !g.readOnly && ("textarea" == d || "input" == d && /^(color|email|number|password|search|tel|text|url)$/.test(g.type))) {
        e.h *= 0 == orientation || 180 == orientation ? 0.66 : 0.4, d = g.getBoundingClientRect(), e.h = Math.max(e.h, d.top + d.height)
      }
      return e
    };
    return q
  })
}, "dojo/hccss":function() {
  define("require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "), function(d, p, h, n, m, q, g) {
    m.add("highcontrast", function() {
      var e = g.doc.createElement("div");
      e.style.cssText = 'border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("' + (p.blankGif || d.toUrl("./resources/blank.gif")) + '");';
      g.body().appendChild(e);
      var k = n.getComputedStyle(e), a = k.backgroundImage, k = k.borderTopColor == k.borderRightColor || a && ("none" == a || "url(invalid-url:)" == a);
      8 >= m("ie") ? e.outerHTML = "" : g.body().removeChild(e);
      return k
    });
    q(function() {
      m("highcontrast") && h.add(g.body(), "dj_a11y")
    });
    return m
  })
}, "dojo/query":function() {
  define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function(d, p, h, n, m, q, g, e) {
    function k(a, b) {
      var c = function(c, f) {
        if("string" == typeof f && (f = h.byId(f), !f)) {
          return new b([])
        }
        var e = "string" == typeof c ? a(c, f) : c ? c.end && c.on ? c : [c] : [];
        return e.end && e.on ? e : new b(e)
      };
      c.matches = a.match || function(a, b, f) {
        return 0 < c.filter([a], b, f).length
      };
      c.filter = a.filter || function(a, b, f) {
        return c(b, f).filter(function(b) {
          return-1 < m.indexOf(a, b)
        })
      };
      if("function" != typeof a) {
        var f = a.search;
        a = function(a, b) {
          return f(b || document, a)
        }
      }
      return c
    }
    p.add("array-extensible", function() {
      return 1 == q.delegate([], {length:1}).length && !p("bug-for-in-skips-shadowed")
    });
    var a = Array.prototype, c = a.slice, f = a.concat, b = m.forEach, r = function(a, b, f) {
      b = [0].concat(c.call(b, 0));
      f = f || d.global;
      return function(c) {
        b[0] = c;
        return a.apply(f, b)
      }
    }, u = function(a) {
      var b = this instanceof l && p("array-extensible");
      "number" == typeof a && (a = Array(a));
      var c = a && "length" in a ? a : arguments;
      if(b || !c.sort) {
        for(var f = b ? this : [], e = f.length = c.length, r = 0;r < e;r++) {
          f[r] = c[r]
        }
        if(b) {
          return f
        }
        c = f
      }
      q._mixin(c, t);
      c._NodeListCtor = function(a) {
        return l(a)
      };
      return c
    }, l = u, t = l.prototype = p("array-extensible") ? [] : {};
    l._wrap = t._wrap = function(a, b, c) {
      a = new (c || this._NodeListCtor || l)(a);
      return b ? a._stash(b) : a
    };
    l._adaptAsMap = function(a, b) {
      return function() {
        return this.map(r(a, arguments, b))
      }
    };
    l._adaptAsForEach = function(a, b) {
      return function() {
        this.forEach(r(a, arguments, b));
        return this
      }
    };
    l._adaptAsFilter = function(a, b) {
      return function() {
        return this.filter(r(a, arguments, b))
      }
    };
    l._adaptWithCondition = function(a, b, c) {
      return function() {
        var f = arguments, e = r(a, f, c);
        if(b.call(c || d.global, f)) {
          return this.map(e)
        }
        this.forEach(e);
        return this
      }
    };
    b(["slice", "splice"], function(b) {
      var c = a[b];
      t[b] = function() {
        return this._wrap(c.apply(this, arguments), "slice" == b ? this : null)
      }
    });
    b(["indexOf", "lastIndexOf", "every", "some"], function(a) {
      var b = m[a];
      t[a] = function() {
        return b.apply(d, [this].concat(c.call(arguments, 0)))
      }
    });
    q.extend(u, {constructor:l, _NodeListCtor:l, toString:function() {
      return this.join(",")
    }, _stash:function(a) {
      this._parent = a;
      return this
    }, on:function(a, b) {
      var c = this.map(function(c) {
        return n(c, a, b)
      });
      c.remove = function() {
        for(var a = 0;a < c.length;a++) {
          c[a].remove()
        }
      };
      return c
    }, end:function() {
      return this._parent ? this._parent : new this._NodeListCtor(0)
    }, concat:function(a) {
      var b = c.call(this, 0), e = m.map(arguments, function(a) {
        return c.call(a, 0)
      });
      return this._wrap(f.apply(b, e), this)
    }, map:function(a, b) {
      return this._wrap(m.map(this, a, b), this)
    }, forEach:function(a, c) {
      b(this, a, c);
      return this
    }, filter:function(a) {
      var b = arguments, c = this, f = 0;
      if("string" == typeof a) {
        c = x._filterResult(this, b[0]);
        if(1 == b.length) {
          return c._stash(this)
        }
        f = 1
      }
      return this._wrap(m.filter(c, b[f], b[f + 1]), this)
    }, instantiate:function(a, b) {
      var c = q.isFunction(a) ? a : q.getObject(a);
      b = b || {};
      return this.forEach(function(a) {
        new c(b, a)
      })
    }, at:function() {
      var a = new this._NodeListCtor(0);
      b(arguments, function(b) {
        0 > b && (b = this.length + b);
        this[b] && a.push(this[b])
      }, this);
      return a._stash(this)
    }});
    var x = k(e, u);
    d.query = k(e, function(a) {
      return u(a)
    });
    x.load = function(a, b, c) {
      g.load(a, b, function(a) {
        c(k(a, u))
      })
    };
    d._filterQueryResult = x._filterResult = function(a, b, c) {
      return new u(x.filter(a, b, c))
    };
    d.NodeList = x.NodeList = u;
    return x
  })
}, "dijit/_WidgetBase":function() {
  define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "), function(d, p, h, n, m, q, g, e, k, a, c, f, b, r, u, l, t, x, w, s, y, z, v) {
    function D(a) {
      return function(b) {
        e[b ? "set" : "remove"](this.domNode, a, b);
        this._set(a, b)
      }
    }
    b.add("dijit-legacy-requires", !r.isAsync);
    b.add("dojo-bidi", !1);
    b("dijit-legacy-requires") && t(0, function() {
      d(["dijit/_base/manager"])
    });
    var G = {};
    n = q("dijit._WidgetBase", [x, y], {id:"", _setIdAttr:"domNode", lang:"", _setLangAttr:D("lang"), dir:"", _setDirAttr:D("dir"), "class":"", _setClassAttr:{node:"domNode", type:"class"}, _setTypeAttr:null, style:"", title:"", tooltip:"", baseClass:"", srcNodeRef:null, domNode:null, containerNode:null, ownerDocument:null, _setOwnerDocumentAttr:function(a) {
      this._set("ownerDocument", a)
    }, attributeMap:{}, _blankGif:n.blankGif || d.toUrl("dojo/resources/blank.gif"), _introspect:function() {
      var a = this.constructor;
      if(!a._setterAttrs) {
        var b = a.prototype, c = a._setterAttrs = [], a = a._onMap = {}, f;
        for(f in b.attributeMap) {
          c.push(f)
        }
        for(f in b) {
          /^on/.test(f) && (a[f.substring(2).toLowerCase()] = f), /^_set[A-Z](.*)Attr$/.test(f) && (f = f.charAt(4).toLowerCase() + f.substr(5, f.length - 9), (!b.attributeMap || !(f in b.attributeMap)) && c.push(f))
        }
      }
    }, postscript:function(a, b) {
      this.create(a, b)
    }, create:function(a, b) {
      this._introspect();
      this.srcNodeRef = g.byId(b);
      this._connects = [];
      this._supportingWidgets = [];
      this.srcNodeRef && "string" == typeof this.srcNodeRef.id && (this.id = this.srcNodeRef.id);
      a && (this.params = a, u.mixin(this, a));
      this.postMixInProperties();
      this.id || (this.id = v.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id);
      this.ownerDocument = this.ownerDocument || (this.srcNodeRef ? this.srcNodeRef.ownerDocument : document);
      this.ownerDocumentBody = s.body(this.ownerDocument);
      v.add(this);
      this.buildRendering();
      var c;
      if(this.domNode) {
        this._applyAttributes();
        var f = this.srcNodeRef;
        f && (f.parentNode && this.domNode !== f) && (f.parentNode.replaceChild(this.domNode, f), c = !0);
        this.domNode.setAttribute("widgetId", this.id)
      }
      this.postCreate();
      c && delete this.srcNodeRef;
      this._created = !0
    }, _applyAttributes:function() {
      var a = {}, b;
      for(b in this.params || {}) {
        a[b] = this._get(b)
      }
      p.forEach(this.constructor._setterAttrs, function(b) {
        if(!(b in a)) {
          var c = this._get(b);
          c && this.set(b, c)
        }
      }, this);
      for(b in a) {
        this.set(b, a[b])
      }
    }, postMixInProperties:function() {
    }, buildRendering:function() {
      this.domNode || (this.domNode = this.srcNodeRef || this.ownerDocument.createElement("div"));
      if(this.baseClass) {
        var a = this.baseClass.split(" ");
        this.isLeftToRight() || (a = a.concat(p.map(a, function(a) {
          return a + "Rtl"
        })));
        k.add(this.domNode, a)
      }
    }, postCreate:function() {
    }, startup:function() {
      this._started || (this._started = !0, p.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && u.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }))
    }, destroyRecursive:function(a) {
      this._beingDestroyed = !0;
      this.destroyDescendants(a);
      this.destroy(a)
    }, destroy:function(a) {
      function b(c) {
        c.destroyRecursive ? c.destroyRecursive(a) : c.destroy && c.destroy(a)
      }
      this._beingDestroyed = !0;
      this.uninitialize();
      p.forEach(this._connects, u.hitch(this, "disconnect"));
      p.forEach(this._supportingWidgets, b);
      this.domNode && p.forEach(v.findWidgets(this.domNode, this.containerNode), b);
      this.destroyRendering(a);
      v.remove(this.id);
      this._destroyed = !0
    }, destroyRendering:function(b) {
      this.bgIframe && (this.bgIframe.destroy(b), delete this.bgIframe);
      this.domNode && (b ? e.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
      this.srcNodeRef && (b || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
    }, destroyDescendants:function(a) {
      p.forEach(this.getChildren(), function(b) {
        b.destroyRecursive && b.destroyRecursive(a)
      })
    }, uninitialize:function() {
      return!1
    }, _setStyleAttr:function(a) {
      var b = this.domNode;
      u.isObject(a) ? f.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
      this._set("style", a)
    }, _attrToDom:function(a, b, c) {
      c = 3 <= arguments.length ? c : this.attributeMap[a];
      p.forEach(u.isArray(c) ? c : [c], function(c) {
        var f = this[c.node || c || "domNode"];
        switch(c.type || "attribute") {
          case "attribute":
            u.isFunction(b) && (b = u.hitch(this, b));
            c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
            f.tagName ? e.set(f, c, b) : f.set(c, b);
            break;
          case "innerText":
            f.innerHTML = "";
            f.appendChild(this.ownerDocument.createTextNode(b));
            break;
          case "innerHTML":
            f.innerHTML = b;
            break;
          case "class":
            k.replace(f, b, this[a])
        }
      }, this)
    }, get:function(a) {
      var b = this._getAttrNames(a);
      return this[b.g] ? this[b.g]() : this._get(a)
    }, set:function(a, b) {
      if("object" === typeof a) {
        for(var c in a) {
          this.set(c, a[c])
        }
        return this
      }
      c = this._getAttrNames(a);
      var f = this[c.s];
      if(u.isFunction(f)) {
        var e = f.apply(this, Array.prototype.slice.call(arguments, 1))
      }else {
        var f = this.focusNode && !u.isFunction(this.focusNode) ? "focusNode" : "domNode", r = this[f] && this[f].tagName, l;
        if(l = r) {
          if(!(l = G[r])) {
            l = this[f];
            var g = {}, d;
            for(d in l) {
              g[d.toLowerCase()] = !0
            }
            l = G[r] = g
          }
        }
        d = l;
        c = a in this.attributeMap ? this.attributeMap[a] : c.s in this ? this[c.s] : d && c.l in d && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? f : null;
        null != c && this._attrToDom(a, b, c);
        this._set(a, b)
      }
      return e || this
    }, _attrPairNames:{}, _getAttrNames:function(a) {
      var b = this._attrPairNames;
      if(b[a]) {
        return b[a]
      }
      var c = a.replace(/^[a-z]|-[a-zA-Z]/g, function(a) {
        return a.charAt(a.length - 1).toUpperCase()
      });
      return b[a] = {n:a + "Node", s:"_set" + c + "Attr", g:"_get" + c + "Attr", l:c.toLowerCase()}
    }, _set:function(a, b) {
      var c = this[a];
      this[a] = b;
      if(this._created && !(c === b || c !== c && b !== b)) {
        this._watchCallbacks && this._watchCallbacks(a, c, b), this.emit("attrmodified-" + a, {detail:{prevValue:c, newValue:b}})
      }
    }, _get:function(a) {
      return this[a]
    }, emit:function(a, b, c) {
      b = b || {};
      void 0 === b.bubbles && (b.bubbles = !0);
      void 0 === b.cancelable && (b.cancelable = !0);
      b.detail || (b.detail = {});
      b.detail.widget = this;
      var f, e = this["on" + a];
      e && (f = e.apply(this, c ? c : [b]));
      this._started && !this._beingDestroyed && l.emit(this.domNode, a.toLowerCase(), b);
      return f
    }, on:function(a, b) {
      var c = this._onMap(a);
      return c ? h.after(this, c, b, !0) : this.own(l(this.domNode, a, b))[0]
    }, _onMap:function(a) {
      var b = this.constructor, c = b._onMap;
      if(!c) {
        var c = b._onMap = {}, f;
        for(f in b.prototype) {
          /^on/.test(f) && (c[f.replace(/^on/, "").toLowerCase()] = f)
        }
      }
      return c["string" == typeof a && a.toLowerCase()]
    }, toString:function() {
      return"[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]"
    }, getChildren:function() {
      return this.containerNode ? v.findWidgets(this.containerNode) : []
    }, getParent:function() {
      return v.getEnclosingWidget(this.domNode.parentNode)
    }, connect:function(a, b, c) {
      return this.own(m.connect(a, b, this, c))[0]
    }, disconnect:function(a) {
      a.remove()
    }, subscribe:function(a, b) {
      return this.own(w.subscribe(a, u.hitch(this, b)))[0]
    }, unsubscribe:function(a) {
      a.remove()
    }, isLeftToRight:function() {
      return this.dir ? "ltr" == this.dir.toLowerCase() : c.isBodyLtr(this.ownerDocument)
    }, isFocusable:function() {
      return this.focus && "none" != f.get(this.domNode, "display")
    }, placeAt:function(b, c) {
      var f = !b.tagName && v.byId(b);
      f && f.addChild && (!c || "number" === typeof c) ? f.addChild(this, c) : (f = f && "domNode" in f ? f.containerNode && !/after|before|replace/.test(c || "") ? f.containerNode : f.domNode : g.byId(b, this.ownerDocument), a.place(this.domNode, f, c), !this._started && (this.getParent() || {})._started && this.startup());
      return this
    }, defer:function(a, b) {
      var c = setTimeout(u.hitch(this, function() {
        c && (c = null, this._destroyed || u.hitch(this, a)())
      }), b || 0);
      return{remove:function() {
        c && (clearTimeout(c), c = null);
        return null
      }}
    }});
    b("dojo-bidi") && n.extend(z);
    return n
  })
}, "dojo/has":function() {
  define(["./global", "require", "module"], function(d, p, h) {
    var n = p.has || function() {
    };
    n.add("dom-addeventlistener", !!document.addEventListener);
    n.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints);
    n.add("touch-events", "ontouchstart" in document);
    n.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window);
    n.add("MSPointer", window.navigator.msPointerEnabled);
    n.add("touch-action", n("touch") && n("pointer-events"));
    n.add("device-width", screen.availWidth || innerWidth);
    d = document.createElement("form");
    n.add("dom-attributes-explicit", 0 == d.attributes.length);
    n.add("dom-attributes-specified-flag", 0 < d.attributes.length && 40 > d.attributes.length);
    n.clearElement = function(d) {
      d.innerHTML = "";
      return d
    };
    n.normalize = function(d, h) {
      var g = d.match(/[\?:]|[^:\?]*/g), e = 0, k = function(a) {
        var c = g[e++];
        if(":" == c) {
          return 0
        }
        if("?" == g[e++]) {
          if(!a && n(c)) {
            return k()
          }
          k(!0);
          return k(a)
        }
        return c || 0
      };
      return(d = k()) && h(d)
    };
    n.load = function(d, h, g) {
      d ? h([d], g) : g()
    };
    return n
  })
}, "dojo/_base/declare":function() {
  define(["./kernel", "../has", "./lang"], function(d, p, h) {
    function n(a, b) {
      throw Error("declare" + (b ? " " + b : "") + ": " + a);
    }
    function m(a, b, c) {
      var f, e, r, l, g, d, k, h = this._inherited = this._inherited || {};
      "string" == typeof a && (f = a, a = b, b = c);
      c = 0;
      l = a.callee;
      (f = f || l.nom) || n("can't deduce a name to call inherited()", this.declaredClass);
      g = this.constructor._meta;
      r = g.bases;
      k = h.p;
      if(f != D) {
        if(h.c !== l && (k = 0, d = r[0], g = d._meta, g.hidden[f] !== l)) {
          (e = g.chains) && "string" == typeof e[f] && n("calling chained method with inherited: " + f, this.declaredClass);
          do {
            if(g = d._meta, e = d.prototype, g && (e[f] === l && e.hasOwnProperty(f) || g.hidden[f] === l)) {
              break
            }
          }while(d = r[++k]);
          k = d ? k : -1
        }
        if(d = r[++k]) {
          if(e = d.prototype, d._meta && e.hasOwnProperty(f)) {
            c = e[f]
          }else {
            l = s[f];
            do {
              if(e = d.prototype, (c = e[f]) && (d._meta ? e.hasOwnProperty(f) : c !== l)) {
                break
              }
            }while(d = r[++k])
          }
        }
        c = d && c || s[f]
      }else {
        if(h.c !== l && (k = 0, (g = r[0]._meta) && g.ctor !== l)) {
          e = g.chains;
          for((!e || "manual" !== e.constructor) && n("calling chained constructor with inherited", this.declaredClass);(d = r[++k]) && !((g = d._meta) && g.ctor === l);) {
          }
          k = d ? k : -1
        }
        for(;(d = r[++k]) && !(c = (g = d._meta) ? g.ctor : d);) {
        }
        c = d && c
      }
      h.c = c;
      h.p = k;
      if(c) {
        return!0 === b ? c : c.apply(this, b || a)
      }
    }
    function q(a, b) {
      return"string" == typeof a ? this.__inherited(a, b, !0) : this.__inherited(a, !0)
    }
    function g(a, b, c) {
      var f = this.getInherited(a, b);
      if(f) {
        return f.apply(this, c || b || a)
      }
    }
    function e(a) {
      for(var b = this.constructor._meta.bases, c = 0, f = b.length;c < f;++c) {
        if(b[c] === a) {
          return!0
        }
      }
      return this instanceof a
    }
    function k(a, b) {
      for(var c in b) {
        c != D && b.hasOwnProperty(c) && (a[c] = b[c])
      }
      if(p("bug-for-in-skips-shadowed")) {
        for(var f = h._extraNames, e = f.length;e;) {
          c = f[--e], c != D && b.hasOwnProperty(c) && (a[c] = b[c])
        }
      }
    }
    function a(a) {
      x.safeMixin(this.prototype, a);
      return this
    }
    function c(a, b) {
      a instanceof Array || "function" == typeof a || (b = a, a = void 0);
      b = b || {};
      a = a || [];
      return x([this].concat(a), b)
    }
    function f(a, b) {
      return function() {
        var c = arguments, f = c, e = c[0], r, l;
        l = a.length;
        var d;
        if(!(this instanceof c.callee)) {
          return t(c)
        }
        if(b && (e && e.preamble || this.preamble)) {
          d = Array(a.length);
          d[0] = c;
          for(r = 0;;) {
            if(e = c[0]) {
              (e = e.preamble) && (c = e.apply(this, c) || c)
            }
            e = a[r].prototype;
            (e = e.hasOwnProperty("preamble") && e.preamble) && (c = e.apply(this, c) || c);
            if(++r == l) {
              break
            }
            d[r] = c
          }
        }
        for(r = l - 1;0 <= r;--r) {
          e = a[r], (e = (l = e._meta) ? l.ctor : e) && e.apply(this, d ? d[r] : c)
        }
        (e = this.postscript) && e.apply(this, f)
      }
    }
    function b(a, b) {
      return function() {
        var c = arguments, f = c, e = c[0];
        if(!(this instanceof c.callee)) {
          return t(c)
        }
        b && (e && (e = e.preamble) && (f = e.apply(this, f) || f), (e = this.preamble) && e.apply(this, f));
        a && a.apply(this, c);
        (e = this.postscript) && e.apply(this, c)
      }
    }
    function r(a) {
      return function() {
        var b = arguments, c = 0, f, e;
        if(!(this instanceof b.callee)) {
          return t(b)
        }
        for(;f = a[c];++c) {
          if(f = (e = f._meta) ? e.ctor : f) {
            f.apply(this, b);
            break
          }
        }
        (f = this.postscript) && f.apply(this, b)
      }
    }
    function u(a, b, c) {
      return function() {
        var f, e, r = 0, l = 1;
        c && (r = b.length - 1, l = -1);
        for(;f = b[r];r += l) {
          e = f._meta, (f = (e ? e.hidden : f.prototype)[a]) && f.apply(this, arguments)
        }
      }
    }
    function l(a) {
      z.prototype = a.prototype;
      a = new z;
      z.prototype = null;
      return a
    }
    function t(a) {
      var b = a.callee, c = l(b);
      b.apply(c, a);
      return c
    }
    function x(d, g, p) {
      "string" != typeof d && (p = g, g = d, d = "");
      p = p || {};
      var t, z, A, B, F, C, H, N = 1, Z = g;
      if("[object Array]" == y.call(g)) {
        N = d;
        A = [];
        B = [{cls:0, refs:[]}];
        C = {};
        for(var V = 1, W = g.length, Q = 0, J, X, E, L;Q < W;++Q) {
          (J = g[Q]) ? "[object Function]" != y.call(J) && n("mixin #" + Q + " is not a callable constructor.", N) : n("mixin #" + Q + " is unknown. Did you use dojo.require to pull it in?", N);
          X = J._meta ? J._meta.bases : [J];
          E = 0;
          for(J = X.length - 1;0 <= J;--J) {
            L = X[J].prototype, L.hasOwnProperty("declaredClass") || (L.declaredClass = "uniqName_" + v++), L = L.declaredClass, C.hasOwnProperty(L) || (C[L] = {count:0, refs:[], cls:X[J]}, ++V), L = C[L], E && E !== L && (L.refs.push(E), ++E.count), E = L
          }
          ++E.count;
          B[0].refs.push(E)
        }
        for(;B.length;) {
          E = B.pop();
          A.push(E.cls);
          for(--V;z = E.refs, 1 == z.length;) {
            E = z[0];
            if(!E || --E.count) {
              E = 0;
              break
            }
            A.push(E.cls);
            --V
          }
          if(E) {
            Q = 0;
            for(W = z.length;Q < W;++Q) {
              E = z[Q], --E.count || B.push(E)
            }
          }
        }
        V && n("can't build consistent linearization", N);
        J = g[0];
        A[0] = J ? J._meta && J === A[A.length - J._meta.bases.length] ? J._meta.bases.length : 1 : 0;
        C = A;
        A = C[0];
        N = C.length - A;
        g = C[N]
      }else {
        C = [0], g ? "[object Function]" == y.call(g) ? (A = g._meta, C = C.concat(A ? A.bases : g)) : n("base class is not a callable constructor.", d) : null !== g && n("unknown base class. Did you use dojo.require to pull it in?", d)
      }
      if(g) {
        for(z = N - 1;;--z) {
          t = l(g);
          if(!z) {
            break
          }
          A = C[z];
          (A._meta ? k : w)(t, A.prototype);
          B = new Function;
          B.superclass = g;
          B.prototype = t;
          g = t.constructor = B
        }
      }else {
        t = {}
      }
      x.safeMixin(t, p);
      A = p.constructor;
      A !== s.constructor && (A.nom = D, t.constructor = A);
      for(z = N - 1;z;--z) {
        (A = C[z]._meta) && A.chains && (H = w(H || {}, A.chains))
      }
      t["-chains-"] && (H = w(H || {}, t["-chains-"]));
      g && (g.prototype && g.prototype["-chains-"]) && (H = w(H || {}, g.prototype["-chains-"]));
      A = !H || !H.hasOwnProperty(D);
      C[0] = B = H && "manual" === H.constructor ? r(C) : 1 == C.length ? b(p.constructor, A) : f(C, A);
      B._meta = {bases:C, hidden:p, chains:H, parents:Z, ctor:p.constructor};
      B.superclass = g && g.prototype;
      B.extend = a;
      B.createSubclass = c;
      B.prototype = t;
      t.constructor = B;
      t.getInherited = q;
      t.isInstanceOf = e;
      t.inherited = G;
      t.__inherited = m;
      d && (t.declaredClass = d, h.setObject(d, B));
      if(H) {
        for(F in H) {
          t[F] && ("string" == typeof H[F] && F != D) && (A = t[F] = u(F, C, "after" === H[F]), A.nom = F)
        }
      }
      return B
    }
    var w = h.mixin, s = Object.prototype, y = s.toString, z = new Function, v = 0, D = "constructor", G = d.config.isDebug ? g : m;
    d.safeMixin = x.safeMixin = function(a, b) {
      var c, f;
      for(c in b) {
        if(f = b[c], (f !== s[c] || !(c in s)) && c != D) {
          "[object Function]" == y.call(f) && (f.nom = c), a[c] = f
        }
      }
      if(p("bug-for-in-skips-shadowed")) {
        for(var e = h._extraNames, g = e.length;g;) {
          if(c = e[--g], f = b[c], (f !== s[c] || !(c in s)) && c != D) {
            "[object Function]" == y.call(f) && (f.nom = c), a[c] = f
          }
        }
      }
      return a
    };
    return d.declare = x
  })
}, "dojo/dom":function() {
  define(["./sniff", "./_base/window"], function(d, p) {
    if(7 >= d("ie")) {
      try {
        document.execCommand("BackgroundImageCache", !1, !0)
      }catch(h) {
      }
    }
    var n = {};
    d("ie") ? n.byId = function(d, g) {
      if("string" != typeof d) {
        return d
      }
      var e = g || p.doc, k = d && e.getElementById(d);
      if(k && (k.attributes.id.value == d || k.id == d)) {
        return k
      }
      e = e.all[d];
      if(!e || e.nodeName) {
        e = [e]
      }
      for(var a = 0;k = e[a++];) {
        if(k.attributes && k.attributes.id && k.attributes.id.value == d || k.id == d) {
          return k
        }
      }
    } : n.byId = function(d, g) {
      return("string" == typeof d ? (g || p.doc).getElementById(d) : d) || null
    };
    n.isDescendant = function(d, g) {
      try {
        d = n.byId(d);
        for(g = n.byId(g);d;) {
          if(d == g) {
            return!0
          }
          d = d.parentNode
        }
      }catch(e) {
      }
      return!1
    };
    d.add("css-user-select", function(d, g, e) {
      if(!e) {
        return!1
      }
      d = e.style;
      g = ["Khtml", "O", "Moz", "Webkit"];
      e = g.length;
      var k = "userSelect";
      do {
        if("undefined" !== typeof d[k]) {
          return k
        }
      }while(e-- && (k = g[e] + "UserSelect"));
      return!1
    });
    var m = d("css-user-select");
    n.setSelectable = m ? function(d, g) {
      n.byId(d).style[m] = g ? "" : "none"
    } : function(d, g) {
      d = n.byId(d);
      var e = d.getElementsByTagName("*"), k = e.length;
      if(g) {
        for(d.removeAttribute("unselectable");k--;) {
          e[k].removeAttribute("unselectable")
        }
      }else {
        for(d.setAttribute("unselectable", "on");k--;) {
          e[k].setAttribute("unselectable", "on")
        }
      }
    };
    return n
  })
}, "dojo/touch":function() {
  define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(d, p, h, n, m, q, g, e, k, a) {
    function c(a, b, c) {
      return u && c ? function(a, b) {
        return q(a, c, b)
      } : t ? function(c, f) {
        var e = q(c, b, function(a) {
          f.call(this, a);
          M = (new Date).getTime()
        }), d = q(c, a, function(a) {
          (!M || (new Date).getTime() > M + 1E3) && f.call(this, a)
        });
        return{remove:function() {
          e.remove();
          d.remove()
        }}
      } : function(b, c) {
        return q(b, a, c)
      }
    }
    function f(a) {
      do {
        if(void 0 !== a.dojoClick) {
          return a
        }
      }while(a = a.parentNode)
    }
    function b(b, c, d) {
      if(!e.isRight(b)) {
        var g = f(b.target);
        if(w = !b.target.disabled && g && g.dojoClick) {
          if(y = (s = "useTarget" == w) ? g : b.target, s && b.preventDefault(), z = b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, v = b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY, D = ("object" == typeof w ? w.x : "number" == typeof w ? w : 0) || 4, G = ("object" == typeof w ? w.y : "number" == typeof w ? w : 0) || 4, !x) {
            x = !0;
            var r = function(b) {
              w = s ? h.isDescendant(a.doc.elementFromPoint(b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY), y) : w && (b.changedTouches ? b.changedTouches[0].target : b.target) == y && Math.abs((b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX) - z) <= D && Math.abs((b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY) - v) <= 
              G
            };
            a.doc.addEventListener(c, function(a) {
              e.isRight(a) || (r(a), s && a.preventDefault())
            }, !0);
            a.doc.addEventListener(d, function(a) {
              if(!e.isRight(a) && (r(a), w)) {
                I = (new Date).getTime();
                var b = s ? y : a.target;
                "LABEL" === b.tagName && (b = h.byId(b.getAttribute("for")) || b);
                var c = a.changedTouches ? a.changedTouches[0] : a, f = function(b) {
                  var f = document.createEvent("MouseEvents");
                  f._dojo_click = !0;
                  f.initMouseEvent(b, !0, !0, a.view, a.detail, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                  return f
                }, d = f("mousedown"), g = f("mouseup"), l = f("click");
                setTimeout(function() {
                  q.emit(b, "mousedown", d);
                  q.emit(b, "mouseup", g);
                  q.emit(b, "click", l);
                  I = (new Date).getTime()
                }, 0)
              }
            }, !0);
            b = function(b) {
              a.doc.addEventListener(b, function(a) {
                w && (!a._dojo_click && (new Date).getTime() <= I + 1E3 && !("INPUT" == a.target.tagName && n.contains(a.target, "dijitOffScreen"))) && (a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation(), "click" == b && (("INPUT" != a.target.tagName || "radio" == a.target.type || "checkbox" == a.target.type) && "TEXTAREA" != a.target.tagName && "AUDIO" != a.target.tagName && "VIDEO" != a.target.tagName) && a.preventDefault())
              }, !0)
            };
            b("click");
            b("mousedown");
            b("mouseup")
          }
        }
      }
    }
    var r = 5 > g("ios"), u = g("pointer-events") || g("MSPointer"), l = function() {
      var a = {}, b;
      for(b in{down:1, move:1, up:1, cancel:1, over:1, out:1}) {
        a[b] = g("MSPointer") ? "MSPointer" + b.charAt(0).toUpperCase() + b.slice(1) : "pointer" + b
      }
      return a
    }(), t = g("touch-events"), x, w, s = !1, y, z, v, D, G, I, M, K;
    g("touch") && (u ? k(function() {
      a.doc.addEventListener(l.down, function(a) {
        b(a, l.move, l.up)
      }, !0)
    }) : k(function() {
      function c(a) {
        var b = m.delegate(a, {bubbles:!0});
        6 <= g("ios") && (b.touches = a.touches, b.altKey = a.altKey, b.changedTouches = a.changedTouches, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.targetTouches = a.targetTouches);
        return b
      }
      K = a.body();
      a.doc.addEventListener("touchstart", function(a) {
        M = (new Date).getTime();
        var c = K;
        K = a.target;
        q.emit(c, "dojotouchout", {relatedTarget:K, bubbles:!0});
        q.emit(K, "dojotouchover", {relatedTarget:c, bubbles:!0});
        b(a, "touchmove", "touchend")
      }, !0);
      q(a.doc, "touchmove", function(b) {
        M = (new Date).getTime();
        var f = a.doc.elementFromPoint(b.pageX - (r ? 0 : a.global.pageXOffset), b.pageY - (r ? 0 : a.global.pageYOffset));
        f && (K !== f && (q.emit(K, "dojotouchout", {relatedTarget:f, bubbles:!0}), q.emit(f, "dojotouchover", {relatedTarget:K, bubbles:!0}), K = f), q.emit(f, "dojotouchmove", c(b)) || b.preventDefault())
      });
      q(a.doc, "touchend", function(b) {
        M = (new Date).getTime();
        var f = a.doc.elementFromPoint(b.pageX - (r ? 0 : a.global.pageXOffset), b.pageY - (r ? 0 : a.global.pageYOffset)) || a.body();
        q.emit(f, "dojotouchend", c(b))
      })
    }));
    p = {press:c("mousedown", "touchstart", l.down), move:c("mousemove", "dojotouchmove", l.move), release:c("mouseup", "dojotouchend", l.up), cancel:c(e.leave, "touchcancel", u ? l.cancel : null), over:c("mouseover", "dojotouchover", l.over), out:c("mouseout", "dojotouchout", l.out), enter:e._eventHandler(c("mouseover", "dojotouchover", l.over)), leave:e._eventHandler(c("mouseout", "dojotouchout", l.out))};
    return d.touch = p
  })
}, "dojo/dom-style":function() {
  define(["./sniff", "./dom"], function(d, p) {
    function h(b, f, e) {
      f = f.toLowerCase();
      if("auto" == e) {
        if("height" == f) {
          return b.offsetHeight
        }
        if("width" == f) {
          return b.offsetWidth
        }
      }
      if("fontweight" == f) {
        switch(e) {
          case 700:
            return"bold";
          default:
            return"normal"
        }
      }
      f in a || (a[f] = c.test(f));
      return a[f] ? q(b, e) : e
    }
    var n, m = {};
    n = d("webkit") ? function(a) {
      var c;
      if(1 == a.nodeType) {
        var f = a.ownerDocument.defaultView;
        c = f.getComputedStyle(a, null);
        !c && a.style && (a.style.display = "", c = f.getComputedStyle(a, null))
      }
      return c || {}
    } : d("ie") && (9 > d("ie") || d("quirks")) ? function(a) {
      return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
    } : function(a) {
      return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
    };
    m.getComputedStyle = n;
    var q;
    q = d("ie") ? function(a, c) {
      if(!c) {
        return 0
      }
      if("medium" == c) {
        return 4
      }
      if(c.slice && "px" == c.slice(-2)) {
        return parseFloat(c)
      }
      var f = a.style, e = a.runtimeStyle, d = f.left, g = e.left;
      e.left = a.currentStyle.left;
      try {
        f.left = c, c = f.pixelLeft
      }catch(k) {
        c = 0
      }
      f.left = d;
      e.left = g;
      return c
    } : function(a, c) {
      return parseFloat(c) || 0
    };
    m.toPixelValue = q;
    var g = function(a, c) {
      try {
        return a.filters.item("DXImageTransform.Microsoft.Alpha")
      }catch(f) {
        return c ? {} : null
      }
    }, e = 9 > d("ie") || 10 > d("ie") && d("quirks") ? function(a) {
      try {
        return g(a).Opacity / 100
      }catch(c) {
        return 1
      }
    } : function(a) {
      return n(a).opacity
    }, k = 9 > d("ie") || 10 > d("ie") && d("quirks") ? function(a, c) {
      "" === c && (c = 1);
      var f = 100 * c;
      1 === c ? (a.style.zoom = "", g(a) && (a.style.filter = a.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (a.style.zoom = 1, g(a) ? g(a, 1).Opacity = f : a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + f + ")", g(a, 1).Enabled = !0);
      if("tr" == a.tagName.toLowerCase()) {
        for(f = a.firstChild;f;f = f.nextSibling) {
          "td" == f.tagName.toLowerCase() && k(f, c)
        }
      }
      return c
    } : function(a, c) {
      return a.style.opacity = c
    }, a = {left:!0, top:!0}, c = /margin|padding|width|height|max|min|offset/, f = {cssFloat:1, styleFloat:1, "float":1};
    m.get = function(a, c) {
      var d = p.byId(a), g = arguments.length;
      if(2 == g && "opacity" == c) {
        return e(d)
      }
      c = f[c] ? "cssFloat" in d.style ? "cssFloat" : "styleFloat" : c;
      var k = m.getComputedStyle(d);
      return 1 == g ? k : h(d, c, k[c] || d.style[c])
    };
    m.set = function(a, c, e) {
      var d = p.byId(a), g = arguments.length, h = "opacity" == c;
      c = f[c] ? "cssFloat" in d.style ? "cssFloat" : "styleFloat" : c;
      if(3 == g) {
        return h ? k(d, e) : d.style[c] = e
      }
      for(var q in c) {
        m.set(a, q, c[q])
      }
      return m.getComputedStyle(d)
    };
    return m
  })
}, "dojo/dom-geometry":function() {
  define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(d, p, h, n) {
    function m(a, c, f, b, e, d) {
      d = d || "px";
      a = a.style;
      isNaN(c) || (a.left = c + d);
      isNaN(f) || (a.top = f + d);
      0 <= b && (a.width = b + d);
      0 <= e && (a.height = e + d)
    }
    function q(a) {
      return"button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
    }
    function g(a) {
      return"border-box" == e.boxModel || "table" == a.tagName.toLowerCase() || q(a)
    }
    var e = {boxModel:"content-box"};
    d("ie") && (e.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
    e.getPadExtents = function(a, c) {
      a = h.byId(a);
      var f = c || n.getComputedStyle(a), b = n.toPixelValue, e = b(a, f.paddingLeft), d = b(a, f.paddingTop), g = b(a, f.paddingRight), f = b(a, f.paddingBottom);
      return{l:e, t:d, r:g, b:f, w:e + g, h:d + f}
    };
    e.getBorderExtents = function(a, c) {
      a = h.byId(a);
      var f = n.toPixelValue, b = c || n.getComputedStyle(a), e = "none" != b.borderLeftStyle ? f(a, b.borderLeftWidth) : 0, d = "none" != b.borderTopStyle ? f(a, b.borderTopWidth) : 0, g = "none" != b.borderRightStyle ? f(a, b.borderRightWidth) : 0, f = "none" != b.borderBottomStyle ? f(a, b.borderBottomWidth) : 0;
      return{l:e, t:d, r:g, b:f, w:e + g, h:d + f}
    };
    e.getPadBorderExtents = function(a, c) {
      a = h.byId(a);
      var f = c || n.getComputedStyle(a), b = e.getPadExtents(a, f), f = e.getBorderExtents(a, f);
      return{l:b.l + f.l, t:b.t + f.t, r:b.r + f.r, b:b.b + f.b, w:b.w + f.w, h:b.h + f.h}
    };
    e.getMarginExtents = function(a, c) {
      a = h.byId(a);
      var f = c || n.getComputedStyle(a), b = n.toPixelValue, e = b(a, f.marginLeft), d = b(a, f.marginTop), g = b(a, f.marginRight), f = b(a, f.marginBottom);
      return{l:e, t:d, r:g, b:f, w:e + g, h:d + f}
    };
    e.getMarginBox = function(a, c) {
      a = h.byId(a);
      var f = c || n.getComputedStyle(a), b = e.getMarginExtents(a, f), g = a.offsetLeft - b.l, k = a.offsetTop - b.t, l = a.parentNode, m = n.toPixelValue;
      if(d("mozilla")) {
        var q = parseFloat(f.left), f = parseFloat(f.top);
        !isNaN(q) && !isNaN(f) ? (g = q, k = f) : l && l.style && (l = n.getComputedStyle(l), "visible" != l.overflow && (g += "none" != l.borderLeftStyle ? m(a, l.borderLeftWidth) : 0, k += "none" != l.borderTopStyle ? m(a, l.borderTopWidth) : 0))
      }else {
        if((d("opera") || 8 == d("ie") && !d("quirks")) && l) {
          l = n.getComputedStyle(l), g -= "none" != l.borderLeftStyle ? m(a, l.borderLeftWidth) : 0, k -= "none" != l.borderTopStyle ? m(a, l.borderTopWidth) : 0
        }
      }
      return{l:g, t:k, w:a.offsetWidth + b.w, h:a.offsetHeight + b.h}
    };
    e.getContentBox = function(a, c) {
      a = h.byId(a);
      var f = c || n.getComputedStyle(a), b = a.clientWidth, g = e.getPadExtents(a, f), k = e.getBorderExtents(a, f);
      b ? (f = a.clientHeight, k.w = k.h = 0) : (b = a.offsetWidth, f = a.offsetHeight);
      d("opera") && (g.l += k.l, g.t += k.t);
      return{l:g.l, t:g.t, w:b - g.w - k.w, h:f - g.h - k.h}
    };
    e.setContentSize = function(a, c, f) {
      a = h.byId(a);
      var b = c.w;
      c = c.h;
      g(a) && (f = e.getPadBorderExtents(a, f), 0 <= b && (b += f.w), 0 <= c && (c += f.h));
      m(a, NaN, NaN, b, c)
    };
    var k = {l:0, t:0, w:0, h:0};
    e.setMarginBox = function(a, c, f) {
      a = h.byId(a);
      var b = f || n.getComputedStyle(a);
      f = c.w;
      var r = c.h, u = g(a) ? k : e.getPadBorderExtents(a, b), b = e.getMarginExtents(a, b);
      if(d("webkit") && q(a)) {
        var l = a.style;
        0 <= f && !l.width && (l.width = "4px");
        0 <= r && !l.height && (l.height = "4px")
      }
      0 <= f && (f = Math.max(f - u.w - b.w, 0));
      0 <= r && (r = Math.max(r - u.h - b.h, 0));
      m(a, c.l, c.t, f, r)
    };
    e.isBodyLtr = function(a) {
      a = a || p.doc;
      return"ltr" == (p.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
    };
    e.docScroll = function(a) {
      a = a || p.doc;
      var c = p.doc.parentWindow || p.doc.defaultView;
      return"pageXOffset" in c ? {x:c.pageXOffset, y:c.pageYOffset} : (c = d("quirks") ? p.body(a) : a.documentElement) && {x:e.fixIeBiDiScrollLeft(c.scrollLeft || 0, a), y:c.scrollTop || 0}
    };
    e.getIeDocumentElementOffset = function(a) {
      a = a || p.doc;
      a = a.documentElement;
      if(8 > d("ie")) {
        var c = a.getBoundingClientRect(), f = c.left, c = c.top;
        7 > d("ie") && (f += a.clientLeft, c += a.clientTop);
        return{x:0 > f ? 0 : f, y:0 > c ? 0 : c}
      }
      return{x:0, y:0}
    };
    e.fixIeBiDiScrollLeft = function(a, c) {
      c = c || p.doc;
      var f = d("ie");
      if(f && !e.isBodyLtr(c)) {
        var b = d("quirks"), g = b ? p.body(c) : c.documentElement, k = p.global;
        6 == f && (!b && k.frameElement && g.scrollHeight > g.clientHeight) && (a += g.clientLeft);
        return 8 > f || b ? a + g.clientWidth - g.scrollWidth : -a
      }
      return a
    };
    e.position = function(a, c) {
      a = h.byId(a);
      var f = p.body(a.ownerDocument), b = a.getBoundingClientRect(), b = {x:b.left, y:b.top, w:b.right - b.left, h:b.bottom - b.top};
      if(9 > d("ie")) {
        var g = e.getIeDocumentElementOffset(a.ownerDocument);
        b.x -= g.x + (d("quirks") ? f.clientLeft + f.offsetLeft : 0);
        b.y -= g.y + (d("quirks") ? f.clientTop + f.offsetTop : 0)
      }
      c && (f = e.docScroll(a.ownerDocument), b.x += f.x, b.y += f.y);
      return b
    };
    e.getMarginSize = function(a, c) {
      a = h.byId(a);
      var f = e.getMarginExtents(a, c || n.getComputedStyle(a)), b = a.getBoundingClientRect();
      return{w:b.right - b.left + f.w, h:b.bottom - b.top + f.h}
    };
    e.normalizeEvent = function(a) {
      "layerX" in a || (a.layerX = a.offsetX, a.layerY = a.offsetY);
      if(!d("dom-addeventlistener")) {
        var c = a.target, c = c && c.ownerDocument || document, f = d("quirks") ? c.body : c.documentElement, b = e.getIeDocumentElementOffset(c);
        a.pageX = a.clientX + e.fixIeBiDiScrollLeft(f.scrollLeft || 0, c) - b.x;
        a.pageY = a.clientY + (f.scrollTop || 0) - b.y
      }
    };
    return e
  })
}, "dojo/Stateful":function() {
  define(["./_base/declare", "./_base/lang", "./_base/array", "./when"], function(d, p, h, n) {
    return d("dojo.Stateful", null, {_attrPairNames:{}, _getAttrNames:function(d) {
      var h = this._attrPairNames;
      return h[d] ? h[d] : h[d] = {s:"_" + d + "Setter", g:"_" + d + "Getter"}
    }, postscript:function(d) {
      d && this.set(d)
    }, _get:function(d, h) {
      return"function" === typeof this[h.g] ? this[h.g]() : this[d]
    }, get:function(d) {
      return this._get(d, this._getAttrNames(d))
    }, set:function(d, h) {
      if("object" === typeof d) {
        for(var g in d) {
          d.hasOwnProperty(g) && "_watchCallbacks" != g && this.set(g, d[g])
        }
        return this
      }
      g = this._getAttrNames(d);
      var e = this._get(d, g);
      g = this[g.s];
      var k;
      "function" === typeof g ? k = g.apply(this, Array.prototype.slice.call(arguments, 1)) : this[d] = h;
      if(this._watchCallbacks) {
        var a = this;
        n(k, function() {
          a._watchCallbacks(d, e, h)
        })
      }
      return this
    }, _changeAttrValue:function(d, h) {
      var g = this.get(d);
      this[d] = h;
      this._watchCallbacks && this._watchCallbacks(d, g, h);
      return this
    }, watch:function(d, q) {
      var g = this._watchCallbacks;
      if(!g) {
        var e = this, g = this._watchCallbacks = function(a, f, b, d) {
          var k = function(d) {
            if(d) {
              d = d.slice();
              for(var g = 0, k = d.length;g < k;g++) {
                d[g].call(e, a, f, b)
              }
            }
          };
          k(g["_" + a]);
          d || k(g["*"])
        }
      }
      !q && "function" === typeof d ? (q = d, d = "*") : d = "_" + d;
      var k = g[d];
      "object" !== typeof k && (k = g[d] = []);
      k.push(q);
      var a = {};
      a.unwatch = a.remove = function() {
        var a = h.indexOf(k, q);
        -1 < a && k.splice(a, 1)
      };
      return a
    }})
  })
}, "dojo/global":function() {
  define(function() {
    return"undefined" !== typeof global && "function" !== typeof global ? global : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  })
}, "dojo/dom-prop":function() {
  define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function(d, p, h, n, m, q, g, e) {
    function k(a) {
      var c = "";
      a = a.childNodes;
      for(var f = 0, e;e = a[f];f++) {
        8 != e.nodeType && (c = 1 == e.nodeType ? c + k(e) : c + e.nodeValue)
      }
      return c
    }
    var a = {}, c = 0, f = p._scopeName + "attrid";
    h.add("dom-textContent", function(a, c, f) {
      return"textContent" in f
    });
    d.names = {"class":"className", "for":"htmlFor", tabindex:"tabIndex", readonly:"readOnly", colspan:"colSpan", frameborder:"frameBorder", rowspan:"rowSpan", textcontent:"textContent", valuetype:"valueType"};
    d.get = function(a, c) {
      a = m.byId(a);
      var f = c.toLowerCase(), f = d.names[f] || c;
      return"textContent" == f && !h("dom-textContent") ? k(a) : a[f]
    };
    d.set = function(b, k, p) {
      b = m.byId(b);
      if(2 == arguments.length && "string" != typeof k) {
        for(var l in k) {
          d.set(b, l, k[l])
        }
        return b
      }
      l = k.toLowerCase();
      l = d.names[l] || k;
      if("style" == l && "string" != typeof p) {
        return q.set(b, p), b
      }
      if("innerHTML" == l) {
        return h("ie") && b.tagName.toLowerCase() in {col:1, colgroup:1, table:1, tbody:1, tfoot:1, thead:1, tr:1, title:1} ? (g.empty(b), b.appendChild(g.toDom(p, b.ownerDocument))) : b[l] = p, b
      }
      if("textContent" == l && !h("dom-textContent")) {
        return g.empty(b), b.appendChild(b.ownerDocument.createTextNode(p)), b
      }
      if(n.isFunction(p)) {
        var t = b[f];
        t || (t = c++, b[f] = t);
        a[t] || (a[t] = {});
        var x = a[t][l];
        if(x) {
          e.disconnect(x)
        }else {
          try {
            delete b[l]
          }catch(w) {
          }
        }
        p ? a[t][l] = e.connect(b, l, p) : b[l] = null;
        return b
      }
      b[l] = p;
      return b
    }
  })
}, "dojo/when":function() {
  define(["./Deferred", "./promise/Promise"], function(d, p) {
    return function(h, n, m, q) {
      var g = h && "function" === typeof h.then, e = g && h instanceof p;
      if(g) {
        e || (g = new d(h.cancel), h.then(g.resolve, g.reject, g.progress), h = g.promise)
      }else {
        return 1 < arguments.length ? n ? n(h) : h : (new d).resolve(h)
      }
      return n || m || q ? h.then(n, m, q) : h
    }
  })
}, "dijit/_base/manager":function() {
  define(["dojo/_base/array", "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function(d, p, h, n, m) {
    var q = {};
    d.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "), function(d) {
      q[d] = n[d]
    });
    h.mixin(q, {defaultDuration:p.defaultDuration || 200});
    h.mixin(m, q);
    return m
  })
}, "dojo/dom-attr":function() {
  define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "), function(d, p, h, n, m, q) {
    function g(a, c) {
      var f = a.getAttributeNode && a.getAttributeNode(c);
      return!!f && f.specified
    }
    var e = {innerHTML:1, textContent:1, className:1, htmlFor:p("ie"), value:1}, k = {classname:"class", htmlfor:"for", tabindex:"tabIndex", readonly:"readOnly"};
    d.has = function(a, c) {
      var f = c.toLowerCase();
      return e[q.names[f] || c] || g(n.byId(a), k[f] || c)
    };
    d.get = function(a, c) {
      a = n.byId(a);
      var f = c.toLowerCase(), b = q.names[f] || c, d = a[b];
      if(e[b] && "undefined" != typeof d) {
        return d
      }
      if("textContent" == b) {
        return q.get(a, b)
      }
      if("href" != b && ("boolean" == typeof d || h.isFunction(d))) {
        return d
      }
      f = k[f] || c;
      return g(a, f) ? a.getAttribute(f) : null
    };
    d.set = function(a, c, f) {
      a = n.byId(a);
      if(2 == arguments.length) {
        for(var b in c) {
          d.set(a, b, c[b])
        }
        return a
      }
      b = c.toLowerCase();
      var g = q.names[b] || c, p = e[g];
      if("style" == g && "string" != typeof f) {
        return m.set(a, f), a
      }
      if(p || "boolean" == typeof f || h.isFunction(f)) {
        return q.set(a, c, f)
      }
      a.setAttribute(k[b] || c, f);
      return a
    };
    d.remove = function(a, c) {
      n.byId(a).removeAttribute(k[c.toLowerCase()] || c)
    };
    d.getNodeProp = function(a, c) {
      a = n.byId(a);
      var f = c.toLowerCase(), b = q.names[f] || c;
      if(b in a && "href" != b) {
        return a[b]
      }
      f = k[f] || c;
      return g(a, f) ? a.getAttribute(f) : null
    }
  })
}, "dojo/dom-construct":function() {
  define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function(d, p, h, n, m, q) {
    function g(a, b) {
      var c = b.parentNode;
      c && c.insertBefore(a, b)
    }
    function e(a) {
      if("innerHTML" in a) {
        try {
          a.innerHTML = "";
          return
        }catch(b) {
        }
      }
      for(var c;c = a.lastChild;) {
        a.removeChild(c)
      }
    }
    var k = {option:["select"], tbody:["table"], thead:["table"], tfoot:["table"], tr:["table", "tbody"], td:["table", "tbody", "tr"], th:["table", "thead", "tr"], legend:["fieldset"], caption:["table"], colgroup:["table"], col:["table", "colgroup"], li:["ul"]}, a = /<\s*([\w\:]+)/, c = {}, f = 0, b = "__" + p._scopeName + "ToDomId", r;
    for(r in k) {
      k.hasOwnProperty(r) && (p = k[r], p.pre = "option" == r ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + p.join("\x3e\x3c") + "\x3e", p.post = "\x3c/" + p.reverse().join("\x3e\x3c/") + "\x3e")
    }
    var u;
    8 >= h("ie") && (u = function(a) {
      a.__dojo_html5_tested = "yes";
      var b = l("div", {innerHTML:"\x3cnav\x3ea\x3c/nav\x3e", style:{visibility:"hidden"}}, a.body);
      1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g, function(b) {
        a.createElement(b)
      });
      t(b)
    });
    d.toDom = function(e, d) {
      d = d || n.doc;
      var g = d[b];
      g || (d[b] = g = ++f + "", c[g] = d.createElement("div"));
      8 >= h("ie") && !d.__dojo_html5_tested && d.body && u(d);
      e += "";
      var l = e.match(a), r = l ? l[1].toLowerCase() : "", g = c[g];
      if(l && k[r]) {
        l = k[r];
        g.innerHTML = l.pre + e + l.post;
        for(l = l.length;l;--l) {
          g = g.firstChild
        }
      }else {
        g.innerHTML = e
      }
      if(1 == g.childNodes.length) {
        return g.removeChild(g.firstChild)
      }
      for(r = d.createDocumentFragment();l = g.firstChild;) {
        r.appendChild(l)
      }
      return r
    };
    d.place = function(a, b, c) {
      b = m.byId(b);
      "string" == typeof a && (a = /^\s*</.test(a) ? d.toDom(a, b.ownerDocument) : m.byId(a));
      if("number" == typeof c) {
        var f = b.childNodes;
        !f.length || f.length <= c ? b.appendChild(a) : g(a, f[0 > c ? 0 : c])
      }else {
        switch(c) {
          case "before":
            g(a, b);
            break;
          case "after":
            c = a;
            (f = b.parentNode) && (f.lastChild == b ? f.appendChild(c) : f.insertBefore(c, b.nextSibling));
            break;
          case "replace":
            b.parentNode.replaceChild(a, b);
            break;
          case "only":
            d.empty(b);
            b.appendChild(a);
            break;
          case "first":
            if(b.firstChild) {
              g(a, b.firstChild);
              break
            }
          ;
          default:
            b.appendChild(a)
        }
      }
      return a
    };
    var l = d.create = function(a, b, c, f) {
      var e = n.doc;
      c && (c = m.byId(c), e = c.ownerDocument);
      "string" == typeof a && (a = e.createElement(a));
      b && q.set(a, b);
      c && d.place(a, c, f);
      return a
    };
    d.empty = function(a) {
      e(m.byId(a))
    };
    var t = d.destroy = function(a) {
      if(a = m.byId(a)) {
        var b = a;
        a = a.parentNode;
        b.firstChild && e(b);
        a && (h("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b))
      }
    }
  })
}, "dijit/BackgroundIframe":function() {
  define("require ./main dojo/_base/config dojo/dom-construct dojo/dom-style dojo/_base/lang dojo/on dojo/sniff".split(" "), function(d, p, h, n, m, q, g, e) {
    e.add("config-bgIframe", (e("ie") || e("trident")) && !/IEMobile\/10\.0/.test(navigator.userAgent));
    var k = new function() {
      var a = [];
      this.pop = function() {
        var c;
        a.length ? (c = a.pop(), c.style.display = "") : (9 > e("ie") ? (c = "\x3ciframe src\x3d'" + (h.dojoBlankHtmlUrl || d.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role\x3d'presentation' style\x3d'position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity\x3d\"0\");'\x3e", c = document.createElement(c)) : (c = n.create("iframe"), c.src = 'javascript:""', c.className = "dijitBackgroundIframe", c.setAttribute("role", "presentation"), m.set(c, "opacity", 0.1)), c.tabIndex = 
        -1);
        return c
      };
      this.push = function(c) {
        c.style.display = "none";
        a.push(c)
      }
    };
    p.BackgroundIframe = function(a) {
      if(!a.id) {
        throw Error("no id");
      }
      if(e("config-bgIframe")) {
        var c = this.iframe = k.pop();
        a.appendChild(c);
        7 > e("ie") || e("quirks") ? (this.resize(a), this._conn = g(a, "resize", q.hitch(this, "resize", a))) : m.set(c, {width:"100%", height:"100%"})
      }
    };
    q.extend(p.BackgroundIframe, {resize:function(a) {
      this.iframe && m.set(this.iframe, {width:a.offsetWidth + "px", height:a.offsetHeight + "px"})
    }, destroy:function() {
      this._conn && (this._conn.remove(), this._conn = null);
      this.iframe && (this.iframe.parentNode.removeChild(this.iframe), k.push(this.iframe), delete this.iframe)
    }});
    return p.BackgroundIframe
  })
}, "dojo/text":function() {
  define(["./_base/kernel", "require", "./has", "./request"], function(d, p, h, n) {
    var m;
    m = function(a, c, f) {
      n(a, {sync:!!c, headers:{"X-Requested-With":null}}).then(f)
    };
    var q = {}, g = function(a) {
      if(a) {
        a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
        var c = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        c && (a = c[1])
      }else {
        a = ""
      }
      return a
    }, e = {}, k = {};
    d.cache = function(a, c, f) {
      var b;
      "string" == typeof a ? /\//.test(a) ? (b = a, f = c) : b = p.toUrl(a.replace(/\./g, "/") + (c ? "/" + c : "")) : (b = a + "", f = c);
      a = void 0 != f && "string" != typeof f ? f.value : f;
      f = f && f.sanitize;
      if("string" == typeof a) {
        return q[b] = a, f ? g(a) : a
      }
      if(null === a) {
        return delete q[b], null
      }
      b in q || m(b, !0, function(a) {
        q[b] = a
      });
      return f ? g(q[b]) : q[b]
    };
    return{dynamic:!0, normalize:function(a, c) {
      var f = a.split("!"), b = f[0];
      return(/^\./.test(b) ? c(b) : b) + (f[1] ? "!" + f[1] : "")
    }, load:function(a, c, f) {
      a = a.split("!");
      var b = 1 < a.length, d = a[0], h = c.toUrl(a[0]);
      a = "url:" + h;
      var l = e, p = function(a) {
        f(b ? g(a) : a)
      };
      d in q ? l = q[d] : c.cache && a in c.cache ? l = c.cache[a] : h in q && (l = q[h]);
      if(l === e) {
        if(k[h]) {
          k[h].push(p)
        }else {
          var n = k[h] = [p];
          m(h, !c.async, function(a) {
            q[d] = q[h] = a;
            for(var b = 0;b < n.length;) {
              n[b++](a)
            }
            delete k[h]
          })
        }
      }else {
        p(l)
      }
    }}
  })
}, "dojo/keys":function() {
  define(["./_base/kernel", "./sniff"], function(d, p) {
    return d.keys = {BACKSPACE:8, TAB:9, CLEAR:12, ENTER:13, SHIFT:16, CTRL:17, ALT:18, META:p("webkit") ? 91 : 224, PAUSE:19, CAPS_LOCK:20, ESCAPE:27, SPACE:32, PAGE_UP:33, PAGE_DOWN:34, END:35, HOME:36, LEFT_ARROW:37, UP_ARROW:38, RIGHT_ARROW:39, DOWN_ARROW:40, INSERT:45, DELETE:46, HELP:47, LEFT_WINDOW:91, RIGHT_WINDOW:92, SELECT:93, NUMPAD_0:96, NUMPAD_1:97, NUMPAD_2:98, NUMPAD_3:99, NUMPAD_4:100, NUMPAD_5:101, NUMPAD_6:102, NUMPAD_7:103, NUMPAD_8:104, NUMPAD_9:105, NUMPAD_MULTIPLY:106, NUMPAD_PLUS:107, 
    NUMPAD_ENTER:108, NUMPAD_MINUS:109, NUMPAD_PERIOD:110, NUMPAD_DIVIDE:111, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, F13:124, F14:125, F15:126, NUM_LOCK:144, SCROLL_LOCK:145, UP_DPAD:175, DOWN_DPAD:176, LEFT_DPAD:177, RIGHT_DPAD:178, copyKey:p("mac") && !p("air") ? p("safari") ? 91 : 224 : 17}
  })
}, "dijit/registry":function() {
  define(["dojo/_base/array", "dojo/_base/window", "./main"], function(d, p, h) {
    var n = {}, m = {}, q = {length:0, add:function(d) {
      if(m[d.id]) {
        throw Error("Tried to register widget with id\x3d\x3d" + d.id + " but that id is already registered");
      }
      m[d.id] = d;
      this.length++
    }, remove:function(d) {
      m[d] && (delete m[d], this.length--)
    }, byId:function(d) {
      return"string" == typeof d ? m[d] : d
    }, byNode:function(d) {
      return m[d.getAttribute("widgetId")]
    }, toArray:function() {
      var d = [], e;
      for(e in m) {
        d.push(m[e])
      }
      return d
    }, getUniqueId:function(d) {
      var e;
      do {
        e = d + "_" + (d in n ? ++n[d] : n[d] = 0)
      }while(m[e]);
      return"dijit" == h._scopeName ? e : h._scopeName + "_" + e
    }, findWidgets:function(d, e) {
      function k(c) {
        for(c = c.firstChild;c;c = c.nextSibling) {
          if(1 == c.nodeType) {
            var f = c.getAttribute("widgetId");
            f ? (f = m[f]) && a.push(f) : c !== e && k(c)
          }
        }
      }
      var a = [];
      k(d);
      return a
    }, _destroyAll:function() {
      h._curFocus = null;
      h._prevFocus = null;
      h._activeStack = [];
      d.forEach(q.findWidgets(p.body()), function(d) {
        d._destroyed || (d.destroyRecursive ? d.destroyRecursive() : d.destroy && d.destroy())
      })
    }, getEnclosingWidget:function(d) {
      for(;d;) {
        var e = 1 == d.nodeType && d.getAttribute("widgetId");
        if(e) {
          return m[e]
        }
        d = d.parentNode
      }
      return null
    }, _hash:m};
    return h.registry = q
  })
}, "dojo/domReady":function() {
  define(["./global", "./has"], function(d, p) {
    function h(a) {
      k.push(a);
      e && n()
    }
    function n() {
      if(!a) {
        for(a = !0;k.length;) {
          try {
            k.shift()(m)
          }catch(b) {
            console.error(b, "in domReady callback", b.stack)
          }
        }
        a = !1;
        h._onQEmpty()
      }
    }
    var m = document, q = {loaded:1, complete:1}, g = "string" != typeof m.readyState, e = !!q[m.readyState], k = [], a;
    h.load = function(a, b, c) {
      h(c)
    };
    h._Q = k;
    h._onQEmpty = function() {
    };
    g && (m.readyState = "loading");
    if(!e) {
      var c = [], f = function(a) {
        a = a || d.event;
        e || "readystatechange" == a.type && !q[m.readyState] || (g && (m.readyState = "complete"), e = 1, n())
      }, b = function(a, b) {
        a.addEventListener(b, f, !1);
        k.push(function() {
          a.removeEventListener(b, f, !1)
        })
      };
      if(!p("dom-addeventlistener")) {
        var b = function(a, b) {
          b = "on" + b;
          a.attachEvent(b, f);
          k.push(function() {
            a.detachEvent(b, f)
          })
        }, r = m.createElement("div");
        try {
          r.doScroll && null === d.frameElement && c.push(function() {
            try {
              return r.doScroll("left"), 1
            }catch(a) {
            }
          })
        }catch(u) {
        }
      }
      b(m, "DOMContentLoaded");
      b(d, "load");
      "onreadystatechange" in m ? b(m, "readystatechange") : g || c.push(function() {
        return q[m.readyState]
      });
      if(c.length) {
        var l = function() {
          if(!e) {
            for(var a = c.length;a--;) {
              if(c[a]()) {
                f("poller");
                return
              }
            }
            setTimeout(l, 30)
          }
        };
        l()
      }
    }
    return h
  })
}, "dijit/_AttachMixin":function() {
  define("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "), function(d, p, h, n, m, q, g, e, k) {
    var a = m.delegate(e, {mouseenter:q.enter, mouseleave:q.leave, keypress:h._keypress}), c;
    h = n("dijit._AttachMixin", null, {constructor:function() {
      this._attachPoints = [];
      this._attachEvents = []
    }, buildRendering:function() {
      this.inherited(arguments);
      this._attachTemplateNodes(this.domNode);
      this._beforeFillContent()
    }, _beforeFillContent:function() {
    }, _attachTemplateNodes:function(a) {
      for(var b = a;;) {
        if(1 == b.nodeType && (this._processTemplateNode(b, function(a, b) {
          return a.getAttribute(b)
        }, this._attach) || this.searchContainerNode) && b.firstChild) {
          b = b.firstChild
        }else {
          if(b == a) {
            break
          }
          for(;!b.nextSibling;) {
            if(b = b.parentNode, b == a) {
              return
            }
          }
          b = b.nextSibling
        }
      }
    }, _processTemplateNode:function(a, b, c) {
      var d = !0, e = this.attachScope || this, g = b(a, "dojoAttachPoint") || b(a, "data-dojo-attach-point");
      if(g) {
        for(var k = g.split(/\s*,\s*/);g = k.shift();) {
          m.isArray(e[g]) ? e[g].push(a) : e[g] = a, d = "containerNode" != g, this._attachPoints.push(g)
        }
      }
      if(b = b(a, "dojoAttachEvent") || b(a, "data-dojo-attach-event")) {
        g = b.split(/\s*,\s*/);
        for(k = m.trim;b = g.shift();) {
          if(b) {
            var h = null;
            -1 != b.indexOf(":") ? (h = b.split(":"), b = k(h[0]), h = k(h[1])) : b = k(b);
            h || (h = b);
            this._attachEvents.push(c(a, b, m.hitch(e, h)))
          }
        }
      }
      return d
    }, _attach:function(f, b, e) {
      b = b.replace(/^on/, "").toLowerCase();
      b = "dijitclick" == b ? c || (c = d("./a11yclick")) : a[b] || b;
      return g(f, b, e)
    }, _detachTemplateNodes:function() {
      var a = this.attachScope || this;
      p.forEach(this._attachPoints, function(b) {
        delete a[b]
      });
      this._attachPoints = [];
      p.forEach(this._attachEvents, function(a) {
        a.remove()
      });
      this._attachEvents = []
    }, destroyRendering:function() {
      this._detachTemplateNodes();
      this.inherited(arguments)
    }});
    m.extend(k, {dojoAttachEvent:"", dojoAttachPoint:""});
    return h
  })
}, "dojo/_base/lang":function() {
  define(["./kernel", "../has", "../sniff"], function(d, p) {
    p.add("bug-for-in-skips-shadowed", function() {
      for(var a in{toString:1}) {
        return 0
      }
      return 1
    });
    var h = p("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], n = h.length, m = function(a, c, f) {
      f || (f = a[0] && d.scopeMap[a[0]] ? d.scopeMap[a.shift()][1] : d.global);
      try {
        for(var b = 0;b < a.length;b++) {
          var e = a[b];
          if(!(e in f)) {
            if(c) {
              f[e] = {}
            }else {
              return
            }
          }
          f = f[e]
        }
        return f
      }catch(g) {
      }
    }, q = Object.prototype.toString, g = function(a, c, f) {
      return(f || []).concat(Array.prototype.slice.call(a, c || 0))
    }, e = /\{([^\}]+)\}/g, k = {_extraNames:h, _mixin:function(a, c, f) {
      var b, d, e, g = {};
      for(b in c) {
        if(d = c[b], !(b in a) || a[b] !== d && (!(b in g) || g[b] !== d)) {
          a[b] = f ? f(d) : d
        }
      }
      if(p("bug-for-in-skips-shadowed") && c) {
        for(e = 0;e < n;++e) {
          if(b = h[e], d = c[b], !(b in a) || a[b] !== d && (!(b in g) || g[b] !== d)) {
            a[b] = f ? f(d) : d
          }
        }
      }
      return a
    }, mixin:function(a, c) {
      a || (a = {});
      for(var f = 1, b = arguments.length;f < b;f++) {
        k._mixin(a, arguments[f])
      }
      return a
    }, setObject:function(a, c, f) {
      var b = a.split(".");
      a = b.pop();
      return(f = m(b, !0, f)) && a ? f[a] = c : void 0
    }, getObject:function(a, c, f) {
      return!a ? f : m(a.split("."), c, f)
    }, exists:function(a, c) {
      return void 0 !== k.getObject(a, !1, c)
    }, isString:function(a) {
      return"string" == typeof a || a instanceof String
    }, isArray:function(a) {
      return a && (a instanceof Array || "array" == typeof a)
    }, isFunction:function(a) {
      return"[object Function]" === q.call(a)
    }, isObject:function(a) {
      return void 0 !== a && (null === a || "object" == typeof a || k.isArray(a) || k.isFunction(a))
    }, isArrayLike:function(a) {
      return a && void 0 !== a && !k.isString(a) && !k.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) && (k.isArray(a) || isFinite(a.length))
    }, isAlien:function(a) {
      return a && !k.isFunction(a) && /\{\s*\[native code\]\s*\}/.test(String(a))
    }, extend:function(a, c) {
      for(var f = 1, b = arguments.length;f < b;f++) {
        k._mixin(a.prototype, arguments[f])
      }
      return a
    }, _hitchArgs:function(a, c) {
      var f = k._toArray(arguments, 2), b = k.isString(c);
      return function() {
        var e = k._toArray(arguments), g = b ? (a || d.global)[c] : c;
        return g && g.apply(a || this, f.concat(e))
      }
    }, hitch:function(a, c) {
      if(2 < arguments.length) {
        return k._hitchArgs.apply(d, arguments)
      }
      c || (c = a, a = null);
      if(k.isString(c)) {
        a = a || d.global;
        if(!a[c]) {
          throw['lang.hitch: scope["', c, '"] is null (scope\x3d"', a, '")'].join("");
        }
        return function() {
          return a[c].apply(a, arguments || [])
        }
      }
      return!a ? c : function() {
        return c.apply(a, arguments || [])
      }
    }, delegate:function() {
      function a() {
      }
      return function(c, f) {
        a.prototype = c;
        var b = new a;
        a.prototype = null;
        f && k._mixin(b, f);
        return b
      }
    }(), _toArray:p("ie") ? function() {
      function a(a, f, b) {
        b = b || [];
        for(f = f || 0;f < a.length;f++) {
          b.push(a[f])
        }
        return b
      }
      return function(c) {
        return(c.item ? a : g).apply(this, arguments)
      }
    }() : g, partial:function(a) {
      return k.hitch.apply(d, [null].concat(k._toArray(arguments)))
    }, clone:function(a) {
      if(!a || "object" != typeof a || k.isFunction(a)) {
        return a
      }
      if(a.nodeType && "cloneNode" in a) {
        return a.cloneNode(!0)
      }
      if(a instanceof Date) {
        return new Date(a.getTime())
      }
      if(a instanceof RegExp) {
        return RegExp(a)
      }
      var c, f, b;
      if(k.isArray(a)) {
        c = [];
        f = 0;
        for(b = a.length;f < b;++f) {
          f in a && c.push(k.clone(a[f]))
        }
      }else {
        c = a.constructor ? new a.constructor : {}
      }
      return k._mixin(c, a, k.clone)
    }, trim:String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }, replace:function(a, c, f) {
      return a.replace(f || e, k.isFunction(c) ? c : function(a, f) {
        return k.getObject(f, !1, c)
      })
    }};
    k.mixin(d, k);
    return k
  })
}, "dojo/uacss":function() {
  define(["./dom-geometry", "./_base/lang", "./domReady", "./sniff", "./_base/window"], function(d, p, h, n, m) {
    var q = m.doc.documentElement;
    m = n("ie");
    var g = n("trident"), e = n("opera"), k = Math.floor, a = n("ff"), c = d.boxModel.replace(/-/, ""), e = {dj_quirks:n("quirks"), dj_opera:e, dj_khtml:n("khtml"), dj_webkit:n("webkit"), dj_safari:n("safari"), dj_chrome:n("chrome"), dj_edge:n("edge"), dj_gecko:n("mozilla"), dj_ios:n("ios"), dj_android:n("android")};
    m && (e.dj_ie = !0, e["dj_ie" + k(m)] = !0, e.dj_iequirks = n("quirks"));
    g && (e.dj_trident = !0, e["dj_trident" + k(g)] = !0);
    a && (e["dj_ff" + k(a)] = !0);
    e["dj_" + c] = !0;
    var f = "", b;
    for(b in e) {
      e[b] && (f += b + " ")
    }
    q.className = p.trim(q.className + " " + f);
    h(function() {
      if(!d.isBodyLtr()) {
        var a = "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl ");
        q.className = p.trim(q.className + " " + a + "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl "))
      }
    });
    return n
  })
}, "dojo/Evented":function() {
  define(["./aspect", "./on"], function(d, p) {
    function h() {
    }
    var n = d.after;
    h.prototype = {on:function(d, h) {
      return p.parse(this, d, h, function(d, e) {
        return n(d, "on" + e, h, !0)
      })
    }, emit:function(d, h) {
      var g = [this];
      g.push.apply(g, arguments);
      return p.emit.apply(p, g)
    }};
    return h
  })
}, "dojo/window":function() {
  define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(d, p, h, n, m, q, g) {
    p.add("rtl-adjust-position-for-verticalScrollBar", function(d, a) {
      var c = h.body(a), f = g.create("div", {style:{overflow:"scroll", overflowX:"visible", direction:"rtl", visibility:"hidden", position:"absolute", left:"0", top:"0", width:"64px", height:"64px"}}, c, "last"), b = g.create("div", {style:{overflow:"hidden", direction:"ltr"}}, f, "last"), e = 0 != m.position(b).x;
      f.removeChild(b);
      c.removeChild(f);
      return e
    });
    p.add("position-fixed-support", function(d, a) {
      var c = h.body(a), f = g.create("span", {style:{visibility:"hidden", position:"fixed", left:"1px", top:"1px"}}, c, "last"), b = g.create("span", {style:{position:"fixed", left:"0", top:"0"}}, f, "last"), e = m.position(b).x != m.position(f).x;
      f.removeChild(b);
      c.removeChild(f);
      return e
    });
    var e = {getBox:function(d) {
      d = d || h.doc;
      var a = "BackCompat" == d.compatMode ? h.body(d) : d.documentElement, c = m.docScroll(d);
      if(p("touch")) {
        var f = e.get(d);
        d = f.innerWidth || a.clientWidth;
        a = f.innerHeight || a.clientHeight
      }else {
        d = a.clientWidth, a = a.clientHeight
      }
      return{l:c.x, t:c.y, w:d, h:a}
    }, get:function(d) {
      if(p("ie") && e !== document.parentWindow) {
        d.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
        var a = d._parentWindow;
        d._parentWindow = null;
        return a
      }
      return d.parentWindow || d.defaultView
    }, scrollIntoView:function(d, a) {
      try {
        d = n.byId(d);
        var c = d.ownerDocument || h.doc, f = h.body(c), b = c.documentElement || f.parentNode, e = p("ie") || p("trident"), g = p("webkit");
        if(!(d == f || d == b)) {
          if(!p("mozilla") && (!e && !g && !p("opera") && !p("trident") && !p("edge")) && "scrollIntoView" in d) {
            d.scrollIntoView(!1)
          }else {
            var l = "BackCompat" == c.compatMode, t = Math.min(f.clientWidth || b.clientWidth, b.clientWidth || f.clientWidth), x = Math.min(f.clientHeight || b.clientHeight, b.clientHeight || f.clientHeight), c = g || l ? f : b, w = a || m.position(d), s = d.parentNode, g = function(a) {
              return 6 >= e || 7 == e && l ? !1 : p("position-fixed-support") && "fixed" == q.get(a, "position").toLowerCase()
            }, y = this, z = function(a, b, c) {
              "BODY" == a.tagName || "HTML" == a.tagName ? y.get(a.ownerDocument).scrollBy(b, c) : (b && (a.scrollLeft += b), c && (a.scrollTop += c))
            };
            if(!g(d)) {
              for(;s;) {
                s == f && (s = c);
                var v = m.position(s), D = g(s), G = "rtl" == q.getComputedStyle(s).direction.toLowerCase();
                if(s == c) {
                  v.w = t;
                  v.h = x;
                  if(c == b && (e || p("trident")) && G) {
                    v.x += c.offsetWidth - v.w
                  }
                  v.x = 0;
                  v.y = 0
                }else {
                  var I = m.getPadBorderExtents(s);
                  v.w -= I.w;
                  v.h -= I.h;
                  v.x += I.l;
                  v.y += I.t;
                  var M = s.clientWidth, K = v.w - M;
                  0 < M && 0 < K && (G && p("rtl-adjust-position-for-verticalScrollBar") && (v.x += K), v.w = M);
                  M = s.clientHeight;
                  K = v.h - M;
                  0 < M && 0 < K && (v.h = M)
                }
                D && (0 > v.y && (v.h += v.y, v.y = 0), 0 > v.x && (v.w += v.x, v.x = 0), v.y + v.h > x && (v.h = x - v.y), v.x + v.w > t && (v.w = t - v.x));
                var P = w.x - v.x, U = w.y - v.y, A = P + w.w - v.w, B = U + w.h - v.h, F, C;
                if(0 < A * P && (s.scrollLeft || s == c || s.scrollWidth > s.offsetHeight)) {
                  F = Math[0 > P ? "max" : "min"](P, A);
                  if(G && (8 == e && !l || 5 <= p("trident"))) {
                    F = -F
                  }
                  C = s.scrollLeft;
                  z(s, F, 0);
                  F = s.scrollLeft - C;
                  w.x -= F
                }
                if(0 < B * U && (s.scrollTop || s == c || s.scrollHeight > s.offsetHeight)) {
                  F = Math.ceil(Math[0 > U ? "max" : "min"](U, B)), C = s.scrollTop, z(s, 0, F), F = s.scrollTop - C, w.y -= F
                }
                s = s != c && !D && s.parentNode
              }
            }
          }
        }
      }catch(H) {
        console.error("scrollIntoView: " + H), d.scrollIntoView(!1)
      }
    }};
    d.setObject("dojo.window", e);
    return e
  })
}, "dijit/place":function() {
  define("dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "), function(d, p, h, n, m, q, g) {
    function e(a, c, f, b) {
      var e = q.getEffectiveBox(a.ownerDocument);
      (!a.parentNode || "body" != String(a.parentNode.tagName).toLowerCase()) && m.body(a.ownerDocument).appendChild(a);
      var g = null;
      d.some(c, function(c) {
        var d = c.corner, l = c.pos, h = 0, k = {w:{L:e.l + e.w - l.x, R:l.x - e.l, M:e.w}[d.charAt(1)], h:{T:e.t + e.h - l.y, B:l.y - e.t, M:e.h}[d.charAt(0)]}, m = a.style;
        m.left = m.right = "auto";
        f && (h = f(a, c.aroundCorner, d, k, b), h = "undefined" == typeof h ? 0 : h);
        var q = a.style, n = q.display, t = q.visibility;
        "none" == q.display && (q.visibility = "hidden", q.display = "");
        m = p.position(a);
        q.display = n;
        q.visibility = t;
        n = {L:l.x, R:l.x - m.w, M:Math.max(e.l, Math.min(e.l + e.w, l.x + (m.w >> 1)) - m.w)}[d.charAt(1)];
        t = {T:l.y, B:l.y - m.h, M:Math.max(e.t, Math.min(e.t + e.h, l.y + (m.h >> 1)) - m.h)}[d.charAt(0)];
        l = Math.max(e.l, n);
        q = Math.max(e.t, t);
        n = Math.min(e.l + e.w, n + m.w);
        t = Math.min(e.t + e.h, t + m.h);
        n -= l;
        t -= q;
        h += m.w - n + (m.h - t);
        if(null == g || h < g.overflow) {
          g = {corner:d, aroundCorner:c.aroundCorner, x:l, y:q, w:n, h:t, overflow:h, spaceAvailable:k}
        }
        return!h
      });
      g.overflow && f && f(a, g.aroundCorner, g.corner, g.spaceAvailable, b);
      c = g.y;
      var l = g.x, k = m.body(a.ownerDocument);
      /relative|absolute/.test(h.get(k, "position")) && (c -= h.get(k, "marginTop"), l -= h.get(k, "marginLeft"));
      k = a.style;
      k.top = c + "px";
      k.left = l + "px";
      k.right = "auto";
      return g
    }
    var k = {TL:"BR", TR:"BL", BL:"TR", BR:"TL"};
    return g.place = {at:function(a, c, f, b, g) {
      f = d.map(f, function(a) {
        var f = {corner:a, aroundCorner:k[a], pos:{x:c.x, y:c.y}};
        b && (f.pos.x += "L" == a.charAt(1) ? b.x : -b.x, f.pos.y += "T" == a.charAt(0) ? b.y : -b.y);
        return f
      });
      return e(a, f, g)
    }, around:function(a, c, f, b, g) {
      function k(a, b) {
        I.push({aroundCorner:a, corner:b, pos:{x:{L:z, R:z + D, M:z + (D >> 1)}[a.charAt(1)], y:{T:v, B:v + G, M:v + (G >> 1)}[a.charAt(0)]}})
      }
      var l;
      if("string" == typeof c || "offsetWidth" in c || "ownerSVGElement" in c) {
        if(l = p.position(c, !0), /^(above|below)/.test(f[0])) {
          var m = p.getBorderExtents(c), q = c.firstChild ? p.getBorderExtents(c.firstChild) : {t:0, l:0, b:0, r:0}, w = p.getBorderExtents(a), s = a.firstChild ? p.getBorderExtents(a.firstChild) : {t:0, l:0, b:0, r:0};
          l.y += Math.min(m.t + q.t, w.t + s.t);
          l.h -= Math.min(m.t + q.t, w.t + s.t) + Math.min(m.b + q.b, w.b + s.b)
        }
      }else {
        l = c
      }
      if(c.parentNode) {
        m = "absolute" == h.getComputedStyle(c).position;
        for(c = c.parentNode;c && 1 == c.nodeType && "BODY" != c.nodeName;) {
          q = p.position(c, !0);
          w = h.getComputedStyle(c);
          /relative|absolute/.test(w.position) && (m = !1);
          if(!m && /hidden|auto|scroll/.test(w.overflow)) {
            var s = Math.min(l.y + l.h, q.y + q.h), y = Math.min(l.x + l.w, q.x + q.w);
            l.x = Math.max(l.x, q.x);
            l.y = Math.max(l.y, q.y);
            l.h = s - l.y;
            l.w = y - l.x
          }
          "absolute" == w.position && (m = !0);
          c = c.parentNode
        }
      }
      var z = l.x, v = l.y, D = "w" in l ? l.w : l.w = l.width, G = "h" in l ? l.h : (n.deprecated("place.around: dijit/place.__Rectangle: { x:" + z + ", y:" + v + ", height:" + l.height + ", width:" + D + " } has been deprecated.  Please use { x:" + z + ", y:" + v + ", h:" + l.height + ", w:" + D + " }", "", "2.0"), l.h = l.height), I = [];
      d.forEach(f, function(a) {
        var c = b;
        switch(a) {
          case "above-centered":
            k("TM", "BM");
            break;
          case "below-centered":
            k("BM", "TM");
            break;
          case "after-centered":
            c = !c;
          case "before-centered":
            k(c ? "ML" : "MR", c ? "MR" : "ML");
            break;
          case "after":
            c = !c;
          case "before":
            k(c ? "TL" : "TR", c ? "TR" : "TL");
            k(c ? "BL" : "BR", c ? "BR" : "BL");
            break;
          case "below-alt":
            c = !c;
          case "below":
            k(c ? "BL" : "BR", c ? "TL" : "TR");
            k(c ? "BR" : "BL", c ? "TR" : "TL");
            break;
          case "above-alt":
            c = !c;
          case "above":
            k(c ? "TL" : "TR", c ? "BL" : "BR");
            k(c ? "TR" : "TL", c ? "BR" : "BL");
            break;
          default:
            k(a.aroundCorner, a.corner)
        }
      });
      a = e(a, I, g, {w:D, h:G});
      a.aroundNodePos = l;
      return a
    }}
  })
}, "dojo/mouse":function() {
  define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(d, p, h, n, m) {
    function q(d, e) {
      var h = function(a, c) {
        return p(a, d, function(f) {
          if(e) {
            return e(f, c)
          }
          if(!n.isDescendant(f.relatedTarget, a)) {
            return c.call(this, f)
          }
        })
      };
      h.bubble = function(a) {
        return q(d, function(c, f) {
          var b = a(c.target), d = c.relatedTarget;
          if(b && b != (d && 1 == d.nodeType && a(d))) {
            return f.call(b, c)
          }
        })
      };
      return h
    }
    h.add("dom-quirks", m.doc && "BackCompat" == m.doc.compatMode);
    h.add("events-mouseenter", m.doc && "onmouseenter" in m.doc.createElement("div"));
    h.add("events-mousewheel", m.doc && "onmousewheel" in m.doc);
    m = h("dom-quirks") && h("ie") || !h("dom-addeventlistener") ? {LEFT:1, MIDDLE:4, RIGHT:2, isButton:function(d, e) {
      return d.button & e
    }, isLeft:function(d) {
      return d.button & 1
    }, isMiddle:function(d) {
      return d.button & 4
    }, isRight:function(d) {
      return d.button & 2
    }} : {LEFT:0, MIDDLE:1, RIGHT:2, isButton:function(d, e) {
      return d.button == e
    }, isLeft:function(d) {
      return 0 == d.button
    }, isMiddle:function(d) {
      return 1 == d.button
    }, isRight:function(d) {
      return 2 == d.button
    }};
    d.mouseButtons = m;
    d = h("events-mousewheel") ? "mousewheel" : function(d, e) {
      return p(d, "DOMMouseScroll", function(d) {
        d.wheelDelta = -d.detail;
        e.call(this, d)
      })
    };
    return{_eventHandler:q, enter:q("mouseover"), leave:q("mouseout"), wheel:d, isLeft:m.isLeft, isMiddle:m.isMiddle, isRight:m.isRight}
  })
}, "dijit/Tooltip":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff ./_base/manager ./place ./_Widget ./_TemplatedMixin ./BackgroundIframe dojo/text!./templates/Tooltip.html ./main".split(" "), function(d, p, h, n, m, q, g, e, k, a, c, f, b, r, u, l, t, x) {
    function w() {
    }
    var s = p("dijit._MasterTooltip", [r, u], {duration:f.defaultDuration, templateString:t, postCreate:function() {
      this.ownerDocumentBody.appendChild(this.domNode);
      this.bgIframe = new l(this.domNode);
      this.fadeIn = h.fadeIn({node:this.domNode, duration:this.duration, onEnd:e.hitch(this, "_onShow")});
      this.fadeOut = h.fadeOut({node:this.domNode, duration:this.duration, onEnd:e.hitch(this, "_onHide")})
    }, show:function(a, c, f, d, l, h, k) {
      if(!this.aroundNode || !(this.aroundNode === c && this.containerNode.innerHTML == a)) {
        if("playing" == this.fadeOut.status()) {
          this._onDeck = arguments
        }else {
          this.containerNode.innerHTML = a;
          l && this.set("textDir", l);
          this.containerNode.align = d ? "right" : "left";
          var m = b.around(this.domNode, c, f && f.length ? f : y.defaultPosition, !d, e.hitch(this, "orient")), q = m.aroundNodePos;
          "M" == m.corner.charAt(0) && "M" == m.aroundCorner.charAt(0) ? (this.connectorNode.style.top = q.y + (q.h - this.connectorNode.offsetHeight >> 1) - m.y + "px", this.connectorNode.style.left = "") : "M" == m.corner.charAt(1) && "M" == m.aroundCorner.charAt(1) ? this.connectorNode.style.left = q.x + (q.w - this.connectorNode.offsetWidth >> 1) - m.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
          g.set(this.domNode, "opacity", 0);
          this.fadeIn.play();
          this.isShowingNow = !0;
          this.aroundNode = c;
          this.onMouseEnter = h || w;
          this.onMouseLeave = k || w
        }
      }
    }, orient:function(a, b, f, d, e) {
      this.connectorNode.style.top = "";
      var g = d.h;
      d = d.w;
      a.className = "dijitTooltip " + {"MR-ML":"dijitTooltipRight", "ML-MR":"dijitTooltipLeft", "TM-BM":"dijitTooltipAbove", "BM-TM":"dijitTooltipBelow", "BL-TL":"dijitTooltipBelow dijitTooltipABLeft", "TL-BL":"dijitTooltipAbove dijitTooltipABLeft", "BR-TR":"dijitTooltipBelow dijitTooltipABRight", "TR-BR":"dijitTooltipAbove dijitTooltipABRight", "BR-BL":"dijitTooltipRight", "BL-BR":"dijitTooltipLeft"}[b + "-" + f];
      this.domNode.style.width = "auto";
      var l = q.position(this.domNode);
      if(c("ie") || c("trident")) {
        l.w += 2
      }
      var h = Math.min(Math.max(d, 1), l.w);
      q.setMarginBox(this.domNode, {w:h});
      "B" == f.charAt(0) && "B" == b.charAt(0) ? (a = q.position(a), b = this.connectorNode.offsetHeight, a.h > g ? (this.connectorNode.style.top = g - (e.h + b >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(e.h / 2 - b / 2, 0), a.h - b) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom = "");
      return Math.max(0, l.w - d)
    }, _onShow:function() {
      c("ie") && (this.domNode.style.filter = "")
    }, hide:function(a) {
      this._onDeck && this._onDeck[1] == a ? this._onDeck = null : this.aroundNode === a && (this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play());
      this.onMouseEnter = this.onMouseLeave = w
    }, _onHide:function() {
      this.domNode.style.cssText = "";
      this.containerNode.innerHTML = "";
      this._onDeck && (this.show.apply(this, this._onDeck), this._onDeck = null)
    }});
    c("dojo-bidi") && s.extend({_setAutoTextDir:function(a) {
      this.applyTextDir(a);
      d.forEach(a.children, function(a) {
        this._setAutoTextDir(a)
      }, this)
    }, _setTextDirAttr:function(a) {
      this._set("textDir", a);
      "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
    }});
    x.showTooltip = function(a, b, c, f, e, g, l) {
      c && (c = d.map(c, function(a) {
        return{after:"after-centered", before:"before-centered"}[a] || a
      }));
      y._masterTT || (x._masterTT = y._masterTT = new s);
      return y._masterTT.show(a, b, c, f, e, g, l)
    };
    x.hideTooltip = function(a) {
      return y._masterTT && y._masterTT.hide(a)
    };
    var y = p("dijit.Tooltip", r, {label:"", showDelay:400, hideDelay:400, connectId:[], position:[], selector:"", _setConnectIdAttr:function(b) {
      d.forEach(this._connections || [], function(a) {
        d.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this._connectIds = d.filter(e.isArrayLike(b) ? b : b ? [b] : [], function(a) {
        return n.byId(a, this.ownerDocument)
      }, this);
      this._connections = d.map(this._connectIds, function(b) {
        b = n.byId(b, this.ownerDocument);
        var c = this.selector, f = c ? function(b) {
          return a.selector(c, b)
        } : function(a) {
          return a
        }, d = this;
        return[a(b, f(k.enter), function() {
          d._onHover(this)
        }), a(b, f("focusin"), function() {
          d._onHover(this)
        }), a(b, f(k.leave), e.hitch(d, "_onUnHover")), a(b, f("focusout"), e.hitch(d, "set", "state", "DORMANT"))]
      }, this);
      this._set("connectId", b)
    }, addTarget:function(a) {
      a = a.id || a;
      -1 == d.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
    }, removeTarget:function(a) {
      a = d.indexOf(this._connectIds, a.id || a);
      0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
    }, buildRendering:function() {
      this.inherited(arguments);
      m.add(this.domNode, "dijitTooltipData")
    }, startup:function() {
      this.inherited(arguments);
      var a = this.connectId;
      d.forEach(e.isArrayLike(a) ? a : [a], this.addTarget, this)
    }, getContent:function(a) {
      return this.label || this.domNode.innerHTML
    }, state:"DORMANT", _setStateAttr:function(a) {
      if(!(this.state == a || "SHOW TIMER" == a && "SHOWING" == this.state || "HIDE TIMER" == a && "DORMANT" == this.state)) {
        this._hideTimer && (this._hideTimer.remove(), delete this._hideTimer);
        this._showTimer && (this._showTimer.remove(), delete this._showTimer);
        switch(a) {
          case "DORMANT":
            this._connectNode && (y.hide(this._connectNode), delete this._connectNode, this.onHide());
            break;
          case "SHOW TIMER":
            "SHOWING" != this.state && (this._showTimer = this.defer(function() {
              this.set("state", "SHOWING")
            }, this.showDelay));
            break;
          case "SHOWING":
            var b = this.getContent(this._connectNode);
            if(!b) {
              this.set("state", "DORMANT");
              return
            }
            y.show(b, this._connectNode, this.position, !this.isLeftToRight(), this.textDir, e.hitch(this, "set", "state", "SHOWING"), e.hitch(this, "set", "state", "HIDE TIMER"));
            this.onShow(this._connectNode, this.position);
            break;
          case "HIDE TIMER":
            this._hideTimer = this.defer(function() {
              this.set("state", "DORMANT")
            }, this.hideDelay)
        }
        this._set("state", a)
      }
    }, _onHover:function(a) {
      this._connectNode && a != this._connectNode && this.set("state", "DORMANT");
      this._connectNode = a;
      this.set("state", "SHOW TIMER")
    }, _onUnHover:function(a) {
      this.set("state", "HIDE TIMER")
    }, open:function(a) {
      this.set("state", "DORMANT");
      this._connectNode = a;
      this.set("state", "SHOWING")
    }, close:function() {
      this.set("state", "DORMANT")
    }, onShow:function() {
    }, onHide:function() {
    }, destroy:function() {
      this.set("state", "DORMANT");
      d.forEach(this._connections || [], function(a) {
        d.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this.inherited(arguments)
    }});
    y._MasterTooltip = s;
    y.show = x.showTooltip;
    y.hide = x.hideTooltip;
    y.defaultPosition = ["after-centered", "before-centered"];
    return y
  })
}, "dojo/topic":function() {
  define(["./Evented"], function(d) {
    var p = new d;
    return{publish:function(d, n) {
      return p.emit.apply(p, arguments)
    }, subscribe:function(d, n) {
      return p.on.apply(p, arguments)
    }}
  })
}, "dijit/_OnDijitClickMixin":function() {
  define("dojo/on dojo/_base/array dojo/keys dojo/_base/declare dojo/has ./a11yclick".split(" "), function(d, p, h, n, m, q) {
    d = n("dijit._OnDijitClickMixin", null, {connect:function(d, e, h) {
      return this.inherited(arguments, [d, "ondijitclick" == e ? q : e, h])
    }});
    d.a11yclick = q;
    return d
  })
}, "dojo/Deferred":function() {
  define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "require"], function(d, p, h, n, m) {
    var q = Object.freeze || function() {
    }, g = function(a, b, c, d, g) {
      for(g = 0;g < a.length;g++) {
        e(a[g], b, c, d)
      }
    }, e = function(c, b, d, e) {
      e = c[b];
      var g = c.deferred;
      if(e) {
        try {
          var h = e(d);
          0 === b ? "undefined" !== typeof h && a(g, b, h) : h && "function" === typeof h.then ? (c.cancel = h.cancel, h.then(k(g, 1), k(g, 2), k(g, 0))) : a(g, 1, h)
        }catch(m) {
          a(g, 2, m)
        }
      }else {
        a(g, b, d)
      }
    }, k = function(c, b) {
      return function(d) {
        a(c, b, d)
      }
    }, a = function(a, b, c) {
      if(!a.isCanceled()) {
        switch(b) {
          case 0:
            a.progress(c);
            break;
          case 1:
            a.resolve(c);
            break;
          case 2:
            a.reject(c)
        }
      }
    }, c = function(a) {
      var b = this.promise = new n, d = this, k, l, m = !1, p = [];
      this.isResolved = b.isResolved = function() {
        return 1 === k
      };
      this.isRejected = b.isRejected = function() {
        return 2 === k
      };
      this.isFulfilled = b.isFulfilled = function() {
        return!!k
      };
      this.isCanceled = b.isCanceled = function() {
        return m
      };
      this.progress = function(a, c) {
        if(k) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        g(p, 0, a, null, d);
        return b
      };
      this.resolve = function(a, c) {
        if(k) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        g(p, k = 1, l = a, null, d);
        p = null;
        return b
      };
      var w = this.reject = function(a, c) {
        if(k) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        g(p, k = 2, l = a, void 0, d);
        p = null;
        return b
      };
      this.then = b.then = function(a, f, d) {
        var g = [d, a, f];
        g.cancel = b.cancel;
        g.deferred = new c(function(a) {
          return g.cancel && g.cancel(a)
        });
        k && !p ? e(g, k, l, void 0) : p.push(g);
        return g.deferred.promise
      };
      this.cancel = b.cancel = function(b, c) {
        if(k) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
        }else {
          if(a) {
            var d = a(b);
            b = "undefined" === typeof d ? b : d
          }
          m = !0;
          if(k) {
            if(2 === k && l === b) {
              return b
            }
          }else {
            return"undefined" === typeof b && (b = new h), w(b), b
          }
        }
      };
      q(b)
    };
    c.prototype.toString = function() {
      return"[object Deferred]"
    };
    m && m(c);
    return c
  })
}, "dijit/a11yclick":function() {
  define(["dojo/keys", "dojo/mouse", "dojo/on", "dojo/touch"], function(d, p, h, n) {
    function m(e) {
      if((e.keyCode === d.ENTER || e.keyCode === d.SPACE) && !/input|button|textarea/i.test(e.target.nodeName)) {
        for(e = e.target;e;e = e.parentNode) {
          if(e.dojoClick) {
            return!0
          }
        }
      }
    }
    var q;
    h(document, "keydown", function(d) {
      m(d) ? (q = d.target, d.preventDefault()) : q = null
    });
    h(document, "keyup", function(d) {
      m(d) && d.target == q && (q = null, h.emit(d.target, "click", {cancelable:!0, bubbles:!0, ctrlKey:d.ctrlKey, shiftKey:d.shiftKey, metaKey:d.metaKey, altKey:d.altKey, _origType:d.type}))
    });
    var g = function(d, g) {
      d.dojoClick = !0;
      return h(d, "click", g)
    };
    g.click = g;
    g.press = function(e, g) {
      var a = h(e, n.press, function(a) {
        ("mousedown" != a.type || p.isLeft(a)) && g(a)
      }), c = h(e, "keydown", function(a) {
        (a.keyCode === d.ENTER || a.keyCode === d.SPACE) && g(a)
      });
      return{remove:function() {
        a.remove();
        c.remove()
      }}
    };
    g.release = function(e, g) {
      var a = h(e, n.release, function(a) {
        ("mouseup" != a.type || p.isLeft(a)) && g(a)
      }), c = h(e, "keyup", function(a) {
        (a.keyCode === d.ENTER || a.keyCode === d.SPACE) && g(a)
      });
      return{remove:function() {
        a.remove();
        c.remove()
      }}
    };
    g.move = n.move;
    return g
  })
}, "dojo/_base/Color":function() {
  define(["./kernel", "./lang", "./array", "./config"], function(d, p, h, n) {
    var m = d.Color = function(d) {
      d && this.setColor(d)
    };
    m.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:n.transparentColor || [0, 0, 0, 0]};
    p.extend(m, {r:255, g:255, b:255, a:1, _set:function(d, g, e, h) {
      this.r = d;
      this.g = g;
      this.b = e;
      this.a = h
    }, setColor:function(d) {
      p.isString(d) ? m.fromString(d, this) : p.isArray(d) ? m.fromArray(d, this) : (this._set(d.r, d.g, d.b, d.a), d instanceof m || this.sanitize());
      return this
    }, sanitize:function() {
      return this
    }, toRgb:function() {
      return[this.r, this.g, this.b]
    }, toRgba:function() {
      return[this.r, this.g, this.b, this.a]
    }, toHex:function() {
      return"#" + h.map(["r", "g", "b"], function(d) {
        d = this[d].toString(16);
        return 2 > d.length ? "0" + d : d
      }, this).join("")
    }, toCss:function(d) {
      var g = this.r + ", " + this.g + ", " + this.b;
      return(d ? "rgba(" + g + ", " + this.a : "rgb(" + g) + ")"
    }, toString:function() {
      return this.toCss(!0)
    }});
    m.blendColors = d.blendColors = function(d, g, e, k) {
      var a = k || new m;
      h.forEach(["r", "g", "b", "a"], function(c) {
        a[c] = d[c] + (g[c] - d[c]) * e;
        "a" != c && (a[c] = Math.round(a[c]))
      });
      return a.sanitize()
    };
    m.fromRgb = d.colorFromRgb = function(d, g) {
      var e = d.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
      return e && m.fromArray(e[1].split(/\s*,\s*/), g)
    };
    m.fromHex = d.colorFromHex = function(d, g) {
      var e = g || new m, k = 4 == d.length ? 4 : 8, a = (1 << k) - 1;
      d = Number("0x" + d.substr(1));
      if(isNaN(d)) {
        return null
      }
      h.forEach(["b", "g", "r"], function(c) {
        var f = d & a;
        d >>= k;
        e[c] = 4 == k ? 17 * f : f
      });
      e.a = 1;
      return e
    };
    m.fromArray = d.colorFromArray = function(d, g) {
      var e = g || new m;
      e._set(Number(d[0]), Number(d[1]), Number(d[2]), Number(d[3]));
      isNaN(e.a) && (e.a = 1);
      return e.sanitize()
    };
    m.fromString = d.colorFromString = function(d, g) {
      var e = m.named[d];
      return e && m.fromArray(e, g) || m.fromRgb(d, g) || m.fromHex(d, g)
    };
    return m
  })
}, "dojo/request":function() {
  define(["./request/default!"], function(d) {
    return d
  })
}, "dijit/hccss":function() {
  define(["dojo/dom-class", "dojo/hccss", "dojo/domReady", "dojo/_base/window"], function(d, p, h, n) {
    h(function() {
      p("highcontrast") && d.add(n.body(), "dijit_a11y")
    });
    return p
  })
}, "dojo/selector/_loader":function() {
  define(["../has", "require"], function(d, p) {
    if("undefined" !== typeof document) {
      var h = document.createElement("div");
      d.add("dom-qsa2.1", !!h.querySelectorAll);
      d.add("dom-qsa3", function() {
        try {
          return h.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == h.querySelectorAll(".TEST:empty").length
        }catch(d) {
        }
      })
    }
    var n;
    return{load:function(h, q, g, e) {
      if(e && e.isBuild) {
        g()
      }else {
        e = p;
        h = "default" == h ? d("config-selectorEngine") || "css3" : h;
        h = "css2" == h || "lite" == h ? "./lite" : "css2.1" == h ? d("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == h ? d("dom-qsa3") ? "./lite" : "./acme" : "acme" == h ? "./acme" : (e = q) && h;
        if("?" == h.charAt(h.length - 1)) {
          h = h.substring(0, h.length - 1);
          var k = !0
        }
        if(k && (d("dom-compliant-qsa") || n)) {
          return g(n)
        }
        e([h], function(a) {
          "./lite" != h && (n = a);
          g(a)
        })
      }
    }}
  })
}, "dijit/_TemplatedMixin":function() {
  define("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(d, p, h, n, m, q, g, e) {
    var k = p("dijit._TemplatedMixin", e, {templateString:null, templatePath:null, _skipNodeCache:!1, searchContainerNode:!0, _stringRepl:function(a) {
      var c = this.declaredClass, d = this;
      return g.substitute(a, this, function(a, e) {
        "!" == e.charAt(0) && (a = n.getObject(e.substr(1), !1, d));
        if("undefined" == typeof a) {
          throw Error(c + " template:" + e);
        }
        return null == a ? "" : "!" == e.charAt(0) ? a : this._escapeValue("" + a)
      }, this)
    }, _escapeValue:function(a) {
      return a.replace(/["'<>&]/g, function(a) {
        return{"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;"}[a]
      })
    }, buildRendering:function() {
      if(!this._rendered) {
        this.templateString || (this.templateString = d(this.templatePath, {sanitize:!0}));
        var a = k.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), c;
        if(n.isString(a)) {
          if(c = h.toDom(this._stringRepl(a), this.ownerDocument), 1 != c.nodeType) {
            throw Error("Invalid template: " + a);
          }
        }else {
          c = a.cloneNode(!0)
        }
        this.domNode = c
      }
      this.inherited(arguments);
      this._rendered || this._fillContent(this.srcNodeRef);
      this._rendered = !0
    }, _fillContent:function(a) {
      var c = this.containerNode;
      if(a && c) {
        for(;a.hasChildNodes();) {
          c.appendChild(a.firstChild)
        }
      }
    }});
    k._templateCache = {};
    k.getCachedTemplate = function(a, c, d) {
      var b = k._templateCache, e = a, m = b[e];
      if(m) {
        try {
          if(!m.ownerDocument || m.ownerDocument == (d || document)) {
            return m
          }
        }catch(l) {
        }
        h.destroy(m)
      }
      a = g.trim(a);
      if(c || a.match(/\$\{([^\}]+)\}/g)) {
        return b[e] = a
      }
      c = h.toDom(a, d);
      if(1 != c.nodeType) {
        throw Error("Invalid template: " + a);
      }
      return b[e] = c
    };
    q("ie") && m(window, "unload", function() {
      var a = k._templateCache, c;
      for(c in a) {
        var d = a[c];
        "object" == typeof d && h.destroy(d);
        delete a[c]
      }
    });
    return k
  })
}, "dojo/promise/Promise":function() {
  define(["../_base/lang"], function(d) {
    function p() {
      throw new TypeError("abstract");
    }
    return d.extend(function() {
    }, {then:function(d, n, m) {
      p()
    }, cancel:function(d, n) {
      p()
    }, isResolved:function() {
      p()
    }, isRejected:function() {
      p()
    }, isFulfilled:function() {
      p()
    }, isCanceled:function() {
      p()
    }, always:function(d) {
      return this.then(d, d)
    }, otherwise:function(d) {
      return this.then(null, d)
    }, trace:function() {
      return this
    }, traceRejected:function() {
      return this
    }, toString:function() {
      return"[object Promise]"
    }})
  })
}, "dojo/selector/lite":function() {
  define(["../has", "../_base/kernel"], function(d, p) {
    var h = document.createElement("div"), n = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.msMatchesSelector || h.oMatchesSelector, m = h.querySelectorAll, q = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    d.add("dom-matches-selector", !!n);
    d.add("dom-qsa", !!m);
    var g = function(c, d) {
      if(a && -1 < c.indexOf(",")) {
        return a(c, d)
      }
      var b = d ? d.ownerDocument || d : p.doc || document, h = (m ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(c);
      d = d || b;
      if(h) {
        if(h[2]) {
          var n = p.byId ? p.byId(h[2], b) : b.getElementById(h[2]);
          if(!n || h[1] && h[1] != n.tagName.toLowerCase()) {
            return[]
          }
          if(d != b) {
            for(b = n;b != d;) {
              if(b = b.parentNode, !b) {
                return[]
              }
            }
          }
          return h[3] ? g(h[3], n) : [n]
        }
        if(h[3] && d.getElementsByClassName) {
          return d.getElementsByClassName(h[4])
        }
        if(h[5]) {
          if(n = d.getElementsByTagName(h[5]), h[4] || h[6]) {
            c = (h[4] || "") + h[6]
          }else {
            return n
          }
        }
      }
      if(m) {
        return 1 === d.nodeType && "object" !== d.nodeName.toLowerCase() ? e(d, c, d.querySelectorAll) : d.querySelectorAll(c)
      }
      n || (n = d.getElementsByTagName("*"));
      for(var h = [], b = 0, l = n.length;b < l;b++) {
        var q = n[b];
        1 == q.nodeType && k(q, c, d) && h.push(q)
      }
      return h
    }, e = function(a, d, b) {
      var e = a, g = a.getAttribute("id"), h = g || "__dojo__", k = a.parentNode, m = /^\s*[+~]/.test(d);
      if(m && !k) {
        return[]
      }
      g ? h = h.replace(/'/g, "\\$\x26") : a.setAttribute("id", h);
      m && k && (a = a.parentNode);
      d = d.match(q);
      for(k = 0;k < d.length;k++) {
        d[k] = "[id\x3d'" + h + "'] " + d[k]
      }
      d = d.join(",");
      try {
        return b.call(a, d)
      }finally {
        g || e.removeAttribute("id")
      }
    };
    if(!d("dom-matches-selector")) {
      var k = function() {
        function a(b, c, d) {
          var f = c.charAt(0);
          if('"' == f || "'" == f) {
            c = c.slice(1, -1)
          }
          c = c.replace(/\\/g, "");
          var e = k[d || ""];
          return function(a) {
            return(a = a.getAttribute(b)) && e(a, c)
          }
        }
        function d(a) {
          return function(b, c) {
            for(;(b = b.parentNode) != c;) {
              if(a(b, c)) {
                return!0
              }
            }
          }
        }
        function b(a) {
          return function(b, c) {
            b = b.parentNode;
            return a ? b != c && a(b, c) : b == c
          }
        }
        function e(a, b) {
          return a ? function(c, d) {
            return b(c) && a(c, d)
          } : b
        }
        var g = "div" == h.tagName ? "toLowerCase" : "toUpperCase", l = {"":function(a) {
          a = a[g]();
          return function(b) {
            return b.tagName == a
          }
        }, ".":function(a) {
          var b = " " + a + " ";
          return function(c) {
            return-1 < c.className.indexOf(a) && -1 < (" " + c.className + " ").indexOf(b)
          }
        }, "#":function(a) {
          return function(b) {
            return b.id == a
          }
        }}, k = {"^\x3d":function(a, b) {
          return 0 == a.indexOf(b)
        }, "*\x3d":function(a, b) {
          return-1 < a.indexOf(b)
        }, "$\x3d":function(a, b) {
          return a.substring(a.length - b.length, a.length) == b
        }, "~\x3d":function(a, b) {
          return-1 < (" " + a + " ").indexOf(" " + b + " ")
        }, "|\x3d":function(a, b) {
          return 0 == (a + "-").indexOf(b + "-")
        }, "\x3d":function(a, b) {
          return a == b
        }, "":function(a, b) {
          return!0
        }}, m = {};
        return function(g, h, k) {
          var n = m[h];
          if(!n) {
            if(h.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, function(g, h, k, m, p, q, t) {
              m ? n = e(n, l[k || ""](m.replace(/\\/g, ""))) : h ? n = (" " == h ? d : b)(n) : p && (n = e(n, a(p, t, q)));
              return""
            })) {
              throw Error("Syntax error in query");
            }
            if(!n) {
              return!0
            }
            m[h] = n
          }
          return n(g, k)
        }
      }()
    }
    if(!d("dom-qsa")) {
      var a = function(a, d) {
        for(var b = a.match(q), e = [], h = 0;h < b.length;h++) {
          a = new String(b[h].replace(/\s*$/, ""));
          a.indexOf = escape;
          for(var l = g(a, d), k = 0, m = l.length;k < m;k++) {
            var n = l[k];
            e[n.sourceIndex] = n
          }
        }
        b = [];
        for(h in e) {
          b.push(e[h])
        }
        return b
      }
    }
    g.match = n ? function(a, d, b) {
      return b && 9 != b.nodeType ? e(b, d, function(b) {
        return n.call(a, b)
      }) : n.call(a, d)
    } : k;
    return g
  })
}, "dojo/on":function() {
  define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(d, p, h) {
    function n(a, b, c, d, g) {
      if(d = b.match(/(.*):(.*)/)) {
        return b = d[2], d = d[1], e.selector(d, b).call(g, a, c)
      }
      h("touch") && (k.test(b) && (c = v(c)), !h("event-orientationchange") && "orientationchange" == b && (b = "resize", a = window, c = v(c)));
      r && (c = r(c));
      if(a.addEventListener) {
        var l = b in f, m = l ? f[b] : b;
        a.addEventListener(m, c, l);
        return{remove:function() {
          a.removeEventListener(m, c, l)
        }}
      }
      if(x && a.attachEvent) {
        return x(a, "on" + b, c)
      }
      throw Error("Target must be an event emitter");
    }
    function m() {
      this.cancelable = !1;
      this.defaultPrevented = !0
    }
    function q() {
      this.bubbles = !1
    }
    var g = window.ScriptEngineMajorVersion;
    h.add("jscript", g && g() + ScriptEngineMinorVersion() / 10);
    h.add("event-orientationchange", h("touch") && !h("android"));
    h.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
    h.add("event-focusin", function(a, b, c) {
      return"onfocusin" in c
    });
    h("touch") && h.add("touch-can-modify-event-delegate", function() {
      var a = function() {
      };
      a.prototype = document.createEvent("MouseEvents");
      try {
        var b = new a;
        b.target = null;
        return null === b.target
      }catch(c) {
        return!1
      }
    });
    var e = function(a, b, c, d) {
      return"function" == typeof a.on && "function" != typeof b && !a.nodeType ? a.on(b, c) : e.parse(a, b, c, n, d, this)
    };
    e.pausable = function(a, b, c, d) {
      var f;
      a = e(a, b, function() {
        if(!f) {
          return c.apply(this, arguments)
        }
      }, d);
      a.pause = function() {
        f = !0
      };
      a.resume = function() {
        f = !1
      };
      return a
    };
    e.once = function(a, b, c, d) {
      var f = e(a, b, function() {
        f.remove();
        return c.apply(this, arguments)
      });
      return f
    };
    e.parse = function(a, b, c, d, f, g) {
      var h;
      if(b.call) {
        return b.call(g, a, c)
      }
      b instanceof Array ? h = b : -1 < b.indexOf(",") && (h = b.split(/\s*,\s*/));
      if(h) {
        var l = [];
        b = 0;
        for(var k;k = h[b++];) {
          l.push(e.parse(a, k, c, d, f, g))
        }
        l.remove = function() {
          for(var a = 0;a < l.length;a++) {
            l[a].remove()
          }
        };
        return l
      }
      return d(a, b, c, f, g)
    };
    var k = /^touch/;
    e.matches = function(a, b, c, d, f) {
      f = f && "function" == typeof f.matches ? f : p.query;
      d = !1 !== d;
      1 != a.nodeType && (a = a.parentNode);
      for(;!f.matches(a, b, c);) {
        if(a == c || !1 === d || !(a = a.parentNode) || 1 != a.nodeType) {
          return!1
        }
      }
      return a
    };
    e.selector = function(a, b, c) {
      return function(d, f) {
        function g(b) {
          return e.matches(b, a, d, c, h)
        }
        var h = "function" == typeof a ? {matches:a} : this, l = b.bubble;
        return l ? e(d, l(g), f) : e(d, b, function(a) {
          var b = g(a.target);
          if(b) {
            return f.call(b, a)
          }
        })
      }
    };
    var a = [].slice, c = e.emit = function(b, c, d) {
      var f = a.call(arguments, 2), e = "on" + c;
      if("parentNode" in b) {
        var g = f[0] = {}, h;
        for(h in d) {
          g[h] = d[h]
        }
        g.preventDefault = m;
        g.stopPropagation = q;
        g.target = b;
        g.type = c;
        d = g
      }
      do {
        b[e] && b[e].apply(b, f)
      }while(d && d.bubbles && (b = b.parentNode));
      return d && d.cancelable && d
    }, f = h("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
    if(!h("event-stopimmediatepropagation")) {
      var b = function() {
        this.modified = this.immediatelyStopped = !0
      }, r = function(a) {
        return function(c) {
          if(!c.immediatelyStopped) {
            return c.stopImmediatePropagation = b, a.apply(this, arguments)
          }
        }
      }
    }
    if(h("dom-addeventlistener")) {
      e.emit = function(a, b, d) {
        if(a.dispatchEvent && document.createEvent) {
          var f = (a.ownerDocument || document).createEvent("HTMLEvents");
          f.initEvent(b, !!d.bubbles, !!d.cancelable);
          for(var g in d) {
            g in f || (f[g] = d[g])
          }
          return a.dispatchEvent(f) && f
        }
        return c.apply(e, arguments)
      }
    }else {
      e._fixEvent = function(a, b) {
        a || (a = (b && (b.ownerDocument || b.document || b).parentWindow || window).event);
        if(!a) {
          return a
        }
        try {
          u && (a.type == u.type && a.srcElement == u.target) && (a = u)
        }catch(c) {
        }
        if(!a.target) {
          switch(a.target = a.srcElement, a.currentTarget = b || a.srcElement, "mouseover" == a.type && (a.relatedTarget = a.fromElement), "mouseout" == a.type && (a.relatedTarget = a.toElement), a.stopPropagation || (a.stopPropagation = w, a.preventDefault = s), a.type) {
            case "keypress":
              var d = "charCode" in a ? a.charCode : a.keyCode;
              10 == d ? (d = 0, a.keyCode = 13) : 13 == d || 27 == d ? d = 0 : 3 == d && (d = 99);
              a.charCode = d;
              d = a;
              d.keyChar = d.charCode ? String.fromCharCode(d.charCode) : "";
              d.charOrCode = d.keyChar || d.keyCode
          }
        }
        return a
      };
      var u, l = function(a) {
        this.handle = a
      };
      l.prototype.remove = function() {
        delete _dojoIEListeners_[this.handle]
      };
      var t = function(a) {
        return function(b) {
          b = e._fixEvent(b, this);
          var c = a.call(this, b);
          b.modified && (u || setTimeout(function() {
            u = null
          }), u = b);
          return c
        }
      }, x = function(a, b, c) {
        c = t(c);
        if(((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > h("jscript")) && !h("config-_allow_leaks")) {
          "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
          var f = a[b];
          if(!f || !f.listeners) {
            var e = f, f = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
            f.listeners = [];
            a[b] = f;
            f.global = this;
            e && f.listeners.push(_dojoIEListeners_.push(e) - 1)
          }
          f.listeners.push(a = f.global._dojoIEListeners_.push(c) - 1);
          return new l(a)
        }
        return d.after(a, b, c, !0)
      }, w = function() {
        this.cancelBubble = !0
      }, s = e._preventDefault = function() {
        this.bubbledKeyCode = this.keyCode;
        if(this.ctrlKey) {
          try {
            this.keyCode = 0
          }catch(a) {
          }
        }
        this.defaultPrevented = !0;
        this.returnValue = !1;
        this.modified = !0
      }
    }
    if(h("touch")) {
      var y = function() {
      }, z = window.orientation, v = function(a) {
        return function(b) {
          var c = b.corrected;
          if(!c) {
            var d = b.type;
            try {
              delete b.type
            }catch(f) {
            }
            if(b.type) {
              if(h("touch-can-modify-event-delegate")) {
                y.prototype = b, c = new y
              }else {
                var c = {}, e;
                for(e in b) {
                  c[e] = b[e]
                }
              }
              c.preventDefault = function() {
                b.preventDefault()
              };
              c.stopPropagation = function() {
                b.stopPropagation()
              }
            }else {
              c = b, c.type = d
            }
            b.corrected = c;
            if("resize" == d) {
              if(z == window.orientation) {
                return null
              }
              z = window.orientation;
              c.type = "orientationchange";
              return a.call(this, c)
            }
            "rotation" in c || (c.rotation = 0, c.scale = 1);
            if(window.TouchEvent && b instanceof TouchEvent) {
              var d = c.changedTouches[0], g;
              for(g in d) {
                delete c[g], c[g] = d[g]
              }
            }
          }
          return a.call(this, c)
        }
      }
    }
    return e
  })
}, "dojo/_base/sniff":function() {
  define(["./kernel", "./lang", "../sniff"], function(d, p, h) {
    d._name = "browser";
    p.mixin(d, {isBrowser:!0, isFF:h("ff"), isIE:h("ie"), isKhtml:h("khtml"), isWebKit:h("webkit"), isMozilla:h("mozilla"), isMoz:h("mozilla"), isOpera:h("opera"), isSafari:h("safari"), isChrome:h("chrome"), isMac:h("mac"), isIos:h("ios"), isAndroid:h("android"), isWii:h("wii"), isQuirks:h("quirks"), isAir:h("air")});
    return h
  })
}, "dojo/errors/create":function() {
  define(["../_base/lang"], function(d) {
    return function(p, h, n, m) {
      n = n || Error;
      var q = function(d) {
        if(n === Error) {
          Error.captureStackTrace && Error.captureStackTrace(this, q);
          var e = Error.call(this, d), k;
          for(k in e) {
            e.hasOwnProperty(k) && (this[k] = e[k])
          }
          this.message = d;
          this.stack = e.stack
        }else {
          n.apply(this, arguments)
        }
        h && h.apply(this, arguments)
      };
      q.prototype = d.delegate(n.prototype, m);
      q.prototype.name = p;
      return q.prototype.constructor = q
    }
  })
}, "dojo/_base/array":function() {
  define(["./kernel", "../has", "./lang"], function(d, p, h) {
    function n(a) {
      return g[a] = new Function("item", "index", "array", a)
    }
    function m(a) {
      var c = !a;
      return function(d, b, e) {
        var h = 0, l = d && d.length || 0, k;
        l && "string" == typeof d && (d = d.split(""));
        "string" == typeof b && (b = g[b] || n(b));
        if(e) {
          for(;h < l;++h) {
            if(k = !b.call(e, d[h], h, d), a ^ k) {
              return!k
            }
          }
        }else {
          for(;h < l;++h) {
            if(k = !b(d[h], h, d), a ^ k) {
              return!k
            }
          }
        }
        return c
      }
    }
    function q(a) {
      var c = 1, d = 0, b = 0;
      a || (c = d = b = -1);
      return function(g, h, l, m) {
        if(m && 0 < c) {
          return k.lastIndexOf(g, h, l)
        }
        m = g && g.length || 0;
        var n = a ? m + b : d;
        l === e ? l = a ? d : m + b : 0 > l ? (l = m + l, 0 > l && (l = d)) : l = l >= m ? m + b : l;
        for(m && "string" == typeof g && (g = g.split(""));l != n;l += c) {
          if(g[l] == h) {
            return l
          }
        }
        return-1
      }
    }
    var g = {}, e, k = {every:m(!1), some:m(!0), indexOf:q(!0), lastIndexOf:q(!1), forEach:function(a, c, d) {
      var b = 0, e = a && a.length || 0;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = g[c] || n(c));
      if(d) {
        for(;b < e;++b) {
          c.call(d, a[b], b, a)
        }
      }else {
        for(;b < e;++b) {
          c(a[b], b, a)
        }
      }
    }, map:function(a, c, d, b) {
      var e = 0, h = a && a.length || 0;
      b = new (b || Array)(h);
      h && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = g[c] || n(c));
      if(d) {
        for(;e < h;++e) {
          b[e] = c.call(d, a[e], e, a)
        }
      }else {
        for(;e < h;++e) {
          b[e] = c(a[e], e, a)
        }
      }
      return b
    }, filter:function(a, c, d) {
      var b = 0, e = a && a.length || 0, h = [], l;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = g[c] || n(c));
      if(d) {
        for(;b < e;++b) {
          l = a[b], c.call(d, l, b, a) && h.push(l)
        }
      }else {
        for(;b < e;++b) {
          l = a[b], c(l, b, a) && h.push(l)
        }
      }
      return h
    }, clearCache:function() {
      g = {}
    }};
    h.mixin(d, k);
    return k
  })
}, "dijit/_Widget":function() {
  define("dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/has dojo/_base/kernel dojo/_base/lang dojo/query dojo/ready ./registry ./_WidgetBase ./_OnDijitClickMixin ./_FocusMixin dojo/uacss ./hccss".split(" "), function(d, p, h, n, m, q, g, e, k, a, c, f, b) {
    function r() {
    }
    function u(a) {
      return function(b, c, d, f) {
        return b && "string" == typeof c && b[c] == r ? b.on(c.substring(2).toLowerCase(), g.hitch(d, f)) : a.apply(h, arguments)
      }
    }
    d.around(h, "connect", u);
    q.connect && d.around(q, "connect", u);
    d = n("dijit._Widget", [c, f, b], {onClick:r, onDblClick:r, onKeyDown:r, onKeyPress:r, onKeyUp:r, onMouseDown:r, onMouseMove:r, onMouseOut:r, onMouseOver:r, onMouseLeave:r, onMouseEnter:r, onMouseUp:r, constructor:function(a) {
      this._toConnect = {};
      for(var b in a) {
        this[b] === r && (this._toConnect[b.replace(/^on/, "").toLowerCase()] = a[b], delete a[b])
      }
    }, postCreate:function() {
      this.inherited(arguments);
      for(var a in this._toConnect) {
        this.on(a, this._toConnect[a])
      }
      delete this._toConnect
    }, on:function(a, b) {
      return this[this._onMap(a)] === r ? h.connect(this.domNode, a.toLowerCase(), this, b) : this.inherited(arguments)
    }, _setFocusedAttr:function(a) {
      this._focused = a;
      this._set("focused", a)
    }, setAttribute:function(a, b) {
      q.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
      this.set(a, b)
    }, attr:function(a, b) {
      return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
    }, getDescendants:function() {
      q.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
      return this.containerNode ? e("[widgetId]", this.containerNode).map(a.byNode) : []
    }, _onShow:function() {
      this.onShow()
    }, onShow:function() {
    }, onHide:function() {
    }, onClose:function() {
      return!0
    }});
    m("dijit-legacy-requires") && k(0, function() {
      require(["dijit/_base"])
    });
    return d
  })
}, "dijit/_FocusMixin":function() {
  define(["./focus", "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function(d, p, h, n) {
    n.extend(p, {focused:!1, onFocus:function() {
    }, onBlur:function() {
    }, _onFocus:function() {
      this.onFocus()
    }, _onBlur:function() {
      this.onBlur()
    }});
    return h("dijit._FocusMixin", null, {_focusManager:d})
  })
}, "dijit/focus":function() {
  define("dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "), function(d, p, h, n, m, q, g, e, k, a, c, f, b, r, u, l, t) {
    var x, w, s = new (p([f, g], {curNode:null, activeStack:[], constructor:function() {
      var a = e.hitch(this, function(a) {
        h.isDescendant(this.curNode, a) && this.set("curNode", null);
        h.isDescendant(this.prevNode, a) && this.set("prevNode", null)
      });
      d.before(q, "empty", a);
      d.before(q, "destroy", a)
    }, registerIframe:function(a) {
      return this.registerWin(a.contentWindow, a)
    }, registerWin:function(a, b) {
      var d = this, f = a.document && a.document.body;
      if(f) {
        var e = c("pointer-events") ? "pointerdown" : c("MSPointer") ? "MSPointerDown" : c("touch-events") ? "mousedown, touchstart" : "mousedown", g = k(a.document, e, function(a) {
          if(!a || !(a.target && null == a.target.parentNode)) {
            d._onTouchNode(b || a.target, "mouse")
          }
        }), h = k(f, "focusin", function(a) {
          if(a.target.tagName) {
            var c = a.target.tagName.toLowerCase();
            "#document" == c || "body" == c || (u.isFocusable(a.target) ? d._onFocusNode(b || a.target) : d._onTouchNode(b || a.target))
          }
        }), l = k(f, "focusout", function(a) {
          d._onBlurNode(b || a.target)
        });
        return{remove:function() {
          g.remove();
          h.remove();
          l.remove();
          f = g = h = l = null
        }}
      }
    }, _onBlurNode:function(a) {
      a = (new Date).getTime();
      a < x + 100 || (this._clearFocusTimer && clearTimeout(this._clearFocusTimer), this._clearFocusTimer = setTimeout(e.hitch(this, function() {
        this.set("prevNode", this.curNode);
        this.set("curNode", null)
      }), 0), this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), a < w + 100 || (this._clearActiveWidgetsTimer = setTimeout(e.hitch(this, function() {
        delete this._clearActiveWidgetsTimer;
        this._setStack([])
      }), 0)))
    }, _onTouchNode:function(a, c) {
      w = (new Date).getTime();
      this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
      m.contains(a, "dijitPopup") && (a = a.firstChild);
      var d = [];
      try {
        for(;a;) {
          var f = n.get(a, "dijitPopupParent");
          if(f) {
            a = l.byId(f).domNode
          }else {
            if(a.tagName && "body" == a.tagName.toLowerCase()) {
              if(a === b.body()) {
                break
              }
              a = r.get(a.ownerDocument).frameElement
            }else {
              var e = a.getAttribute && a.getAttribute("widgetId"), g = e && l.byId(e);
              g && !("mouse" == c && g.get("disabled")) && d.unshift(e);
              a = a.parentNode
            }
          }
        }
      }catch(h) {
      }
      this._setStack(d, c)
    }, _onFocusNode:function(a) {
      a && 9 != a.nodeType && (x = (new Date).getTime(), this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
    }, _setStack:function(a, b) {
      var c = this.activeStack, d = c.length - 1, f = a.length - 1;
      if(a[f] != c[d]) {
        this.set("activeStack", a);
        var e;
        for(e = d;0 <= e && c[e] != a[e];e--) {
          if(d = l.byId(c[e])) {
            d._hasBeenBlurred = !0, d.set("focused", !1), d._focusManager == this && d._onBlur(b), this.emit("widget-blur", d, b)
          }
        }
        for(e++;e <= f;e++) {
          if(d = l.byId(a[e])) {
            d.set("focused", !0), d._focusManager == this && d._onFocus(b), this.emit("widget-focus", d, b)
          }
        }
      }
    }, focus:function(a) {
      if(a) {
        try {
          a.focus()
        }catch(b) {
        }
      }
    }}));
    a(function() {
      var a = s.registerWin(r.get(document));
      c("ie") && k(window, "unload", function() {
        a && (a.remove(), a = null)
      })
    });
    t.focus = function(a) {
      s.focus(a)
    };
    for(var y in s) {
      /^_/.test(y) || (t.focus[y] = "function" == typeof s[y] ? e.hitch(s, y) : s[y])
    }
    s.watch(function(a, b, c) {
      t.focus[a] = c
    });
    return s
  })
}, "dijit/main":function() {
  define(["dojo/_base/kernel"], function(d) {
    return d.dijit
  })
}, "dojo/dom-class":function() {
  define(["./_base/lang", "./_base/array", "./dom"], function(d, p, h) {
    function n(d) {
      if("string" == typeof d || d instanceof String) {
        if(d && !q.test(d)) {
          return g[0] = d, g
        }
        d = d.split(q);
        d.length && !d[0] && d.shift();
        d.length && !d[d.length - 1] && d.pop();
        return d
      }
      return!d ? [] : p.filter(d, function(a) {
        return a
      })
    }
    var m, q = /\s+/, g = [""], e = {};
    return m = {contains:function(d, a) {
      return 0 <= (" " + h.byId(d).className + " ").indexOf(" " + a + " ")
    }, add:function(d, a) {
      d = h.byId(d);
      a = n(a);
      var c = d.className, f, c = c ? " " + c + " " : " ";
      f = c.length;
      for(var b = 0, e = a.length, g;b < e;++b) {
        (g = a[b]) && 0 > c.indexOf(" " + g + " ") && (c += g + " ")
      }
      f < c.length && (d.className = c.substr(1, c.length - 2))
    }, remove:function(e, a) {
      e = h.byId(e);
      var c;
      if(void 0 !== a) {
        a = n(a);
        c = " " + e.className + " ";
        for(var f = 0, b = a.length;f < b;++f) {
          c = c.replace(" " + a[f] + " ", " ")
        }
        c = d.trim(c)
      }else {
        c = ""
      }
      e.className != c && (e.className = c)
    }, replace:function(d, a, c) {
      d = h.byId(d);
      e.className = d.className;
      m.remove(e, c);
      m.add(e, a);
      d.className !== e.className && (d.className = e.className)
    }, toggle:function(d, a, c) {
      d = h.byId(d);
      if(void 0 === c) {
        a = n(a);
        for(var e = 0, b = a.length, g;e < b;++e) {
          g = a[e], m[m.contains(d, g) ? "remove" : "add"](d, g)
        }
      }else {
        m[c ? "add" : "remove"](d, a)
      }
      return c
    }}
  })
}, "dojo/_base/window":function() {
  define(["./kernel", "./lang", "../sniff"], function(d, p, h) {
    var n = {global:d.global, doc:d.global.document || null, body:function(h) {
      h = h || d.doc;
      return h.body || h.getElementsByTagName("body")[0]
    }, setContext:function(h, p) {
      d.global = n.global = h;
      d.doc = n.doc = p
    }, withGlobal:function(h, p, g, e) {
      var k = d.global;
      try {
        return d.global = n.global = h, n.withDoc.call(null, h.document, p, g, e)
      }finally {
        d.global = n.global = k
      }
    }, withDoc:function(m, p, g, e) {
      var k = n.doc, a = h("quirks"), c = h("ie"), f, b, r;
      try {
        d.doc = n.doc = m;
        d.isQuirks = h.add("quirks", "BackCompat" == d.doc.compatMode, !0, !0);
        if(h("ie") && (r = m.parentWindow) && r.navigator) {
          f = parseFloat(r.navigator.appVersion.split("MSIE ")[1]) || void 0, (b = m.documentMode) && (5 != b && Math.floor(f) != b) && (f = b), d.isIE = h.add("ie", f, !0, !0)
        }
        g && "string" == typeof p && (p = g[p]);
        return p.apply(g, e || [])
      }finally {
        d.doc = n.doc = k, d.isQuirks = h.add("quirks", a, !0, !0), d.isIE = h.add("ie", c, !0, !0)
      }
    }};
    p.mixin(d, n);
    return n
  })
}, "dijit/Destroyable":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare"], function(d, p, h) {
    return h("dijit.Destroyable", null, {destroy:function(d) {
      this._destroyed = !0
    }, own:function() {
      var h = ["destroyRecursive", "destroy", "remove"];
      d.forEach(arguments, function(m) {
        function q() {
          e.remove();
          d.forEach(k, function(a) {
            a.remove()
          })
        }
        var g, e = p.before(this, "destroy", function(a) {
          m[g](a)
        }), k = [];
        m.then ? (g = "cancel", m.then(q, q)) : d.forEach(h, function(a) {
          "function" === typeof m[a] && (g || (g = a), k.push(p.after(m, a, q, !0)))
        })
      }, this);
      return arguments
    }})
  })
}, "dojo/cache":function() {
  define(["./_base/kernel", "./text"], function(d) {
    return d.cache
  })
}, "dojo/_base/config":function() {
  define(["../global", "../has", "require"], function(d, p, h) {
    d = {};
    h = h.rawConfig;
    for(var n in h) {
      d[n] = h[n]
    }
    if(!d.locale && "undefined" != typeof navigator && (n = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage)) {
      d.locale = n.toLowerCase()
    }
    return d
  })
}, "dojo/_base/event":function() {
  define(["./kernel", "../on", "../has", "../dom-geometry"], function(d, p, h, n) {
    if(p._fixEvent) {
      var m = p._fixEvent;
      p._fixEvent = function(d, e) {
        (d = m(d, e)) && n.normalizeEvent(d);
        return d
      }
    }
    var q = {fix:function(d, e) {
      return p._fixEvent ? p._fixEvent(d, e) : d
    }, stop:function(d) {
      h("dom-addeventlistener") || d && d.preventDefault ? (d.preventDefault(), d.stopPropagation()) : (d = d || window.event, d.cancelBubble = !0, p._preventDefault.call(d))
    }};
    d.fixEvent = q.fix;
    d.stopEvent = q.stop;
    return q
  })
}, "dojo/sniff":function() {
  define(["./has"], function(d) {
    var p = navigator, h = p.userAgent, p = p.appVersion, n = parseFloat(p);
    d.add("air", 0 <= h.indexOf("AdobeAIR"));
    d.add("wp", parseFloat(h.split("Windows Phone")[1]) || void 0);
    d.add("msapp", parseFloat(h.split("MSAppHost/")[1]) || void 0);
    d.add("khtml", 0 <= p.indexOf("Konqueror") ? n : void 0);
    d.add("edge", parseFloat(h.split("Edge/")[1]) || void 0);
    d.add("opr", parseFloat(h.split("OPR/")[1]) || void 0);
    d.add("webkit", !d("wp") && !d("edge") && parseFloat(h.split("WebKit/")[1]) || void 0);
    d.add("chrome", !d("edge") && !d("opr") && parseFloat(h.split("Chrome/")[1]) || void 0);
    d.add("android", !d("wp") && parseFloat(h.split("Android ")[1]) || void 0);
    d.add("safari", 0 <= p.indexOf("Safari") && !d("wp") && !d("chrome") && !d("android") && !d("edge") && !d("opr") ? parseFloat(p.split("Version/")[1]) : void 0);
    d.add("mac", 0 <= p.indexOf("Macintosh"));
    d.add("quirks", "BackCompat" == document.compatMode);
    if(!d("wp") && h.match(/(iPhone|iPod|iPad)/)) {
      var m = RegExp.$1.replace(/P/, "p"), q = h.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", q = parseFloat(q.replace(/_/, ".").replace(/_/g, ""));
      d.add(m, q);
      d.add("ios", q)
    }
    d.add("bb", (0 <= h.indexOf("BlackBerry") || 0 <= h.indexOf("BB10")) && parseFloat(h.split("Version/")[1]) || void 0);
    d.add("trident", parseFloat(p.split("Trident/")[1]) || void 0);
    d.add("svg", "undefined" !== typeof SVGAngle);
    d("webkit") || (0 <= h.indexOf("Opera") && d.add("opera", 9.8 <= n ? parseFloat(h.split("Version/")[1]) || n : n), 0 <= h.indexOf("Gecko") && (!d("wp") && !d("khtml") && !d("trident") && !d("edge")) && d.add("mozilla", n), d("mozilla") && d.add("ff", parseFloat(h.split("Firefox/")[1] || h.split("Minefield/")[1]) || void 0), document.all && !d("opera") && (h = parseFloat(p.split("MSIE ")[1]) || void 0, (p = document.documentMode) && (5 != p && Math.floor(h) != p) && (h = p), d.add("ie", h)), d.add("wii", 
    "undefined" != typeof opera && opera.wiiremote));
    return d
  })
}, "dojo/aspect":function() {
  define([], function() {
    function d(d, e, h, a) {
      var c = d[e], f = "around" == e, b;
      if(f) {
        var m = h(function() {
          return c.advice(this, arguments)
        });
        b = {remove:function() {
          m && (m = d = h = null)
        }, advice:function(a, b) {
          return m ? m.apply(a, b) : c.advice(a, b)
        }}
      }else {
        b = {remove:function() {
          if(b.advice) {
            var a = b.previous, c = b.next;
            !c && !a ? delete d[e] : (a ? a.next = c : d[e] = c, c && (c.previous = a));
            d = h = b.advice = null
          }
        }, id:d.nextId++, advice:h, receiveArguments:a}
      }
      if(c && !f) {
        if("after" == e) {
          for(;c.next && (c = c.next);) {
          }
          c.next = b;
          b.previous = c
        }else {
          "before" == e && (d[e] = b, b.next = c, c.previous = b)
        }
      }else {
        d[e] = b
      }
      return b
    }
    function p(g) {
      return function(e, k, a, c) {
        var f = e[k], b;
        if(!f || f.target != e) {
          e[k] = b = function() {
            for(var a = b.nextId, c = arguments, d = b.before;d;) {
              d.advice && (c = d.advice.apply(this, c) || c), d = d.next
            }
            if(b.around) {
              var e = b.around.advice(this, c)
            }
            for(d = b.after;d && d.id < a;) {
              if(d.advice) {
                if(d.receiveArguments) {
                  var f = d.advice.apply(this, c), e = f === h ? e : f
                }else {
                  e = d.advice.call(this, e, c)
                }
              }
              d = d.next
            }
            return e
          }, f && (b.around = {advice:function(a, b) {
            return f.apply(a, b)
          }}), b.target = e, b.nextId = b.nextId || 0
        }
        e = d(b || f, g, a, c);
        a = null;
        return e
      }
    }
    var h, n = p("after"), m = p("before"), q = p("around");
    return{before:m, around:q, after:n}
  })
}, "dojo/_base/connect":function() {
  define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function(d, p, h, n, m, q, g, e) {
    function k(a, b, c, f, g) {
      f = e.hitch(c, f);
      if(!a || !a.addEventListener && !a.attachEvent) {
        return n.after(a || d.global, b, f, !0)
      }
      "string" == typeof b && "on" == b.substring(0, 2) && (b = b.substring(2));
      a || (a = d.global);
      if(!g) {
        switch(b) {
          case "keypress":
            b = r;
            break;
          case "mouseenter":
            b = q.enter;
            break;
          case "mouseleave":
            b = q.leave
        }
      }
      return p(a, b, f, g)
    }
    function a(a) {
      a.keyChar = a.charCode ? String.fromCharCode(a.charCode) : "";
      a.charOrCode = a.keyChar || a.keyCode
    }
    g.add("events-keypress-typed", function() {
      var a = {charCode:0};
      try {
        a = document.createEvent("KeyboardEvent"), (a.initKeyboardEvent || a.initKeyEvent).call(a, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3)
      }catch(b) {
      }
      return 0 == a.charCode && !g("opera")
    });
    var c = {106:42, 111:47, 186:59, 187:43, 188:44, 189:45, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 229:113}, f = g("mac") ? "metaKey" : "ctrlKey", b = function(b, c) {
      var d = e.mixin({}, b, c);
      a(d);
      d.preventDefault = function() {
        b.preventDefault()
      };
      d.stopPropagation = function() {
        b.stopPropagation()
      };
      return d
    }, r;
    r = g("events-keypress-typed") ? function(a, d) {
      var e = p(a, "keydown", function(a) {
        var e = a.keyCode, f = 13 != e && 32 != e && (27 != e || !g("ie")) && (48 > e || 90 < e) && (96 > e || 111 < e) && (186 > e || 192 < e) && (219 > e || 222 < e) && 229 != e;
        if(f || a.ctrlKey) {
          f = f ? 0 : e;
          if(a.ctrlKey) {
            if(3 == e || 13 == e) {
              return d.call(a.currentTarget, a)
            }
            f = 95 < f && 106 > f ? f - 48 : !a.shiftKey && 65 <= f && 90 >= f ? f + 32 : c[f] || f
          }
          e = b(a, {type:"keypress", faux:!0, charCode:f});
          d.call(a.currentTarget, e);
          if(g("ie")) {
            try {
              a.keyCode = e.keyCode
            }catch(h) {
            }
          }
        }
      }), f = p(a, "keypress", function(a) {
        var c = a.charCode;
        a = b(a, {charCode:32 <= c ? c : 0, faux:!0});
        return d.call(this, a)
      });
      return{remove:function() {
        e.remove();
        f.remove()
      }}
    } : g("opera") ? function(a, c) {
      return p(a, "keypress", function(a) {
        var d = a.which;
        3 == d && (d = 99);
        d = 32 > d && !a.shiftKey ? 0 : d;
        a.ctrlKey && (!a.shiftKey && 65 <= d && 90 >= d) && (d += 32);
        return c.call(this, b(a, {charCode:d}))
      })
    } : function(b, c) {
      return p(b, "keypress", function(b) {
        a(b);
        return c.call(this, b)
      })
    };
    var u = {_keypress:r, connect:function(a, b, c, d, e) {
      var f = arguments, g = [], h = 0;
      g.push("string" == typeof f[0] ? null : f[h++], f[h++]);
      var m = f[h + 1];
      g.push("string" == typeof m || "function" == typeof m ? f[h++] : null, f[h++]);
      for(m = f.length;h < m;h++) {
        g.push(f[h])
      }
      return k.apply(this, g)
    }, disconnect:function(a) {
      a && a.remove()
    }, subscribe:function(a, b, c) {
      return h.subscribe(a, e.hitch(b, c))
    }, publish:function(a, b) {
      return h.publish.apply(h, [a].concat(b))
    }, connectPublisher:function(a, b, c) {
      var d = function() {
        u.publish(a, arguments)
      };
      return c ? u.connect(b, c, d) : u.connect(b, d)
    }, isCopyKey:function(a) {
      return a[f]
    }};
    u.unsubscribe = u.disconnect;
    e.mixin(d, u);
    return u
  })
}, "dojo/ready":function() {
  define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(d, p, h, n, m) {
    var q = 0, g = [], e = 0;
    p = function() {
      q = 1;
      d._postLoad = d.config.afterOnLoad = !0;
      k()
    };
    var k = function() {
      if(!e) {
        for(e = 1;q && (!n || 0 == n._Q.length) && (h.idle ? h.idle() : 1) && g.length;) {
          var a = g.shift();
          try {
            a()
          }catch(b) {
            if(b.info = b.message, h.signal) {
              h.signal("error", b)
            }else {
              throw b;
            }
          }
        }
        e = 0
      }
    };
    h.on && h.on("idle", k);
    n && (n._onQEmpty = k);
    var a = d.ready = d.addOnLoad = function(a, b, c) {
      var e = m._toArray(arguments);
      "number" != typeof a ? (c = b, b = a, a = 1E3) : e.shift();
      c = c ? m.hitch.apply(d, e) : function() {
        b()
      };
      c.priority = a;
      for(e = 0;e < g.length && a >= g[e].priority;e++) {
      }
      g.splice(e, 0, c);
      k()
    }, c = d.config.addOnLoad;
    if(c) {
      a[m.isArray(c) ? "apply" : "call"](d, c)
    }
    n ? n(p) : p();
    return a
  })
}, "dojo/errors/CancelError":function() {
  define(["./create"], function(d) {
    return d("CancelError", null, null, {dojoType:"cancel"})
  })
}, "url:dijit/templates/Tooltip.html":'\x3cdiv class\x3d"dijitTooltip dijitTooltipLeft" id\x3d"dojoTooltip" data-dojo-attach-event\x3d"mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t\x3e\x3cdiv class\x3d"dijitTooltipConnector" data-dojo-attach-point\x3d"connectorNode"\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point\x3d"containerNode" role\x3d\'alert\'\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
(function() {
  var d = this.require;
  d({cache:{}});
  !d.async && d(["dojo"]);
  d.boot && d.apply(null, d.boot)
})();

//# sourceMappingURL=dojo.js.map