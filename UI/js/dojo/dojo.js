//>>built
(function(g, m) {
  var e, n = function() {
  }, l = function(a) {
    for(var b in a) {
      return 0
    }
    return 1
  }, p = {}.toString, k = function(a) {
    return"[object Function]" == p.call(a)
  }, h = function(a) {
    return"[object String]" == p.call(a)
  }, d = function(a) {
    return"[object Array]" == p.call(a)
  }, a = function(a, b) {
    if(a) {
      for(var c = 0;c < a.length;) {
        b(a[c++])
      }
    }
  }, c = function(a, b) {
    for(var c in b) {
      a[c] = b[c]
    }
    return a
  }, f = function(a, b) {
    return c(Error(a), {src:"dojoLoader", info:b})
  }, b = 1, q = function() {
    return"_" + b++
  }, s = function(a, b, c) {
    return wa(a, b, c, 0, s)
  }, r = this, w = r.document, y = w && w.createElement("DiV"), u = s.has = function(a) {
    return k(t[a]) ? t[a] = t[a](r, w, y) : t[a]
  }, t = u.cache = m.hasCache;
  u.add = function(a, b, c, f) {
    (void 0 === t[a] || f) && (t[a] = b);
    return c && u(a)
  };
  u.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
  u("host-webworker") && (c(m.hasCache, {"host-browser":0, dom:0, "dojo-dom-ready-api":0, "dojo-sniff":0, "dojo-inject-api":1, "host-webworker":1, "dojo-guarantee-console":0}), m.loaderPatch = {injectUrl:function(a, b) {
    try {
      importScripts(a), b()
    }catch(c) {
      console.error(c)
    }
  }});
  for(var x in g.has) {
    u.add(x, g.has[x], 0, 1)
  }
  s.async = 1;
  var z = new Function("return eval(arguments[0]);");
  s.eval = function(a, b) {
    return z(a + "\r\n//# sourceURL\x3d" + b)
  };
  var v = {}, D = s.signal = function(b, c) {
    var f = v[b];
    a(f && f.slice(0), function(a) {
      a.apply(null, d(c) ? c : [c])
    })
  }, H = s.on = function(a, b) {
    var c = v[a] || (v[a] = []);
    c.push(b);
    return{remove:function() {
      for(var a = 0;a < c.length;a++) {
        if(c[a] === b) {
          c.splice(a, 1);
          break
        }
      }
    }}
  }, J = [], M = {}, K = [], P = {}, U = s.map = {}, A = [], B = {}, F = "", C = {}, G = {};
  x = {};
  var N = 0, Z = function(a) {
    var b, c, f, q;
    for(b in G) {
      c = G[b], (f = b.match(/^url\:(.+)/)) ? C["url:" + xa(f[1], a)] = c : "*now" == b ? q = c : "*noref" != b && (f = ba(b, a, !0), C[f.mid] = C["url:" + f.url] = c)
    }
    q && q(ka(a));
    G = {}
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
  }, Q = function(b, c) {
    a(b, function(a) {
      c.push([h(a[0]) ? RegExp("^" + V(a[0]) + "$") : a[0], a[1]])
    })
  }, I = function(a) {
    var b = a.name;
    b || (b = a, a = {name:b});
    a = c({main:"main"}, a);
    a.location = a.location ? a.location : b;
    a.packageMap && (U[b] = a.packageMap);
    a.main.indexOf("./") || (a.main = a.main.substring(2));
    P[b] = a
  }, X = [], E = function(b, f, q) {
    for(var d in b) {
      "waitSeconds" == d && (s.waitms = 1E3 * (b[d] || 0));
      "cacheBust" == d && (F = b[d] ? h(b[d]) ? b[d] : (new Date).getTime() + "" : "");
      if("baseUrl" == d || "combo" == d) {
        s[d] = b[d]
      }
      b[d] !== t && (s.rawConfig[d] = b[d], "has" != d && u.add("config-" + d, b[d], 0, f))
    }
    s.baseUrl || (s.baseUrl = "./");
    /\/$/.test(s.baseUrl) || (s.baseUrl += "/");
    for(d in b.has) {
      u.add(d, b.has[d], 0, f)
    }
    a(b.packages, I);
    for(var k in b.packagePaths) {
      a(b.packagePaths[k], function(a) {
        var b = k + "/" + a;
        h(a) && (a = {name:a});
        a.location = b;
        I(a)
      })
    }
    W(c(U, b.map), A);
    a(A, function(a) {
      a[1] = W(a[1], []);
      "*" == a[0] && (A.star = a)
    });
    W(c(M, b.paths), K);
    Q(b.aliases, J);
    if(f) {
      X.push({config:b.config})
    }else {
      for(d in b.config) {
        f = Y(d, q), f.config = c(f.config || {}, b.config[d])
      }
    }
    b.cache && (Z(), G = b.cache, b.cache["*noref"] && Z());
    D("config", [b, s.rawConfig])
  };
  u("dojo-cdn");
  var L = w.getElementsByTagName("script");
  e = 0;
  for(var O, R, ca, $;e < L.length;) {
    O = L[e++];
    if((ca = O.getAttribute("src")) && ($ = ca.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
      R = $[3] || "", m.baseUrl = m.baseUrl || R, N = O
    }
    if(ca = O.getAttribute("data-dojo-config") || O.getAttribute("djConfig")) {
      x = s.eval("({ " + ca + " })", "data-dojo-config"), N = O
    }
  }
  s.rawConfig = {};
  E(m, 1);
  u("dojo-cdn") && ((P.dojo.location = R) && (R += "/"), P.dijit.location = R + "../dijit/", P.dojox.location = R + "../dojox/");
  E(g, 1);
  E(x, 1);
  var da = function(b) {
    la(function() {
      a(b.deps, ya)
    })
  }, wa = function(a, b, k, u, r) {
    var e;
    if(h(a)) {
      if((e = Y(a, u, !0)) && e.executed) {
        return e.result
      }
      throw f("undefinedModule", a);
    }
    d(a) || (E(a, 0, u), a = b, b = k);
    if(d(a)) {
      if(a.length) {
        k = "require*" + q();
        for(var p, g = [], l = 0;l < a.length;) {
          p = a[l++], g.push(Y(p, u))
        }
        e = c(ea("", k, 0, ""), {injected:2, deps:g, def:b || n, require:u ? u.require : s, gc:1});
        B[e.mid] = e;
        da(e);
        var t = aa && 0 != "sync";
        la(function() {
          ma(e, t)
        });
        e.executed || T.push(e);
        fa()
      }else {
        b && b()
      }
    }
    return r
  }, ka = function(a) {
    if(!a) {
      return s
    }
    var b = a.require;
    b || (b = function(c, f, d) {
      return wa(c, f, d, a, b)
    }, a.require = c(b, s), b.module = a, b.toUrl = function(b) {
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
    l(S) && Ia()
  }, Ja = s.idle = function() {
    return!ga.length && l(S) && !T.length && !aa
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
  }, Aa = function(b, c, d, q, h, s, u, r, e) {
    var p, g, l, t;
    t = /^\./.test(b);
    if(/(^\/)|(\:)|(\.js$)/.test(b) || t && !c) {
      return ea(0, b, 0, b)
    }
    b = za(t ? c.mid + "/../" + b : b);
    if(/^\./.test(b)) {
      throw f("irrationalPath", b);
    }
    c && (l = oa(c.mid, s));
    (l = (l = l || s.star) && oa(b, l[1])) && (b = l[1] + b.substring(l[3]));
    c = ($ = b.match(/^([^\/]+)(\/(.+))?$/)) ? $[1] : "";
    (p = d[c]) ? b = c + "/" + (g = $[3] || p.main) : c = "";
    var J = 0;
    a(r, function(a) {
      var c = b.match(a[0]);
      c && 0 < c.length && (J = k(a[1]) ? b.replace(a[0], a[1]) : a[1])
    });
    if(J) {
      return Aa(J, 0, d, q, h, s, u, r, e)
    }
    if(d = q[b]) {
      return e ? ea(d.pid, d.mid, d.pack, d.url) : q[b]
    }
    q = (l = oa(b, u)) ? l[1] + b.substring(l[3]) : c ? p.location + "/" + g : b;
    /(^\/)|(\:)/.test(q) || (q = h + q);
    return ea(c, b, p, za(q + ".js"))
  }, ba = function(a, b, c) {
    return Aa(a, b, P, B, s.baseUrl, c ? [] : A, c ? [] : K, c ? [] : J)
  }, Ba = function(a, b, c) {
    return a.normalize ? a.normalize(b, function(a) {
      return na(a, c)
    }) : na(b, c)
  }, Ca = 0, Y = function(a, b, c) {
    var f, d;
    (f = a.match(/^(.+?)\!(.*)$/)) ? (d = Y(f[1], b, c), 5 === d.executed && !d.load && pa(d), d.load ? (f = Ba(d, f[2], b), a = d.mid + "!" + (d.dynamic ? ++Ca + "!" : "") + f) : (f = f[2], a = d.mid + "!" + ++Ca + "!waitingForPlugin"), a = {plugin:d, mid:a, req:ka(b), prid:f}) : a = ba(a, b);
    return B[a.mid] || !c && (B[a.mid] = a)
  }, na = s.toAbsMid = function(a, b) {
    return ba(a, b).mid
  }, xa = s.toUrl = function(a, b) {
    var c = ba(a + "/x", b), f = c.url;
    return Da(0 === c.pid ? a : f.substring(0, f.length - 5))
  }, Ea = {injected:2, executed:5, def:3, result:3};
  R = function(a) {
    return B[a] = c({mid:a}, Ea)
  };
  var Ka = R("require"), La = R("exports"), Ma = R("module"), ia = {}, qa = 0, pa = function(a) {
    var b = a.result;
    a.dynamic = b.dynamic;
    a.normalize = b.normalize;
    a.load = b.load;
    return a
  }, Na = function(b) {
    var f = {};
    a(b.loadQ, function(a) {
      var d = Ba(b, a.prid, a.req.module), q = b.dynamic ? a.mid.replace(/waitingForPlugin$/, d) : b.mid + "!" + d, d = c(c({}, a), {mid:q, prid:d, injected:0});
      B[q] || Fa(B[q] = d);
      f[a.mid] = B[q];
      ha(a);
      delete B[a.mid]
    });
    b.loadQ = 0;
    var d = function(a) {
      for(var b = a.deps || [], c = 0;c < b.length;c++) {
        (a = f[b[c].mid]) && (b[c] = a)
      }
    }, q;
    for(q in B) {
      d(B[q])
    }
    a(T, d)
  }, ra = function(a) {
    s.trace("loader-finish-exec", [a.mid]);
    a.executed = 5;
    a.defOrder = qa++;
    a.loadQ && (pa(a), Na(a));
    for(e = 0;e < T.length;) {
      T[e] === a ? T.splice(e, 1) : e++
    }
    /^require\*/.test(a.mid) && delete B[a.mid]
  }, Oa = [], ma = function(a, b) {
    if(4 === a.executed) {
      return s.trace("loader-circular-dependency", [Oa.concat(a.mid).join("-\x3e")]), !a.def || b ? ia : a.cjs && a.cjs.exports
    }
    if(!a.executed) {
      if(!a.def) {
        return ia
      }
      var c = a.mid, f = a.deps || [], d, q = [], h = 0;
      for(a.executed = 4;d = f[h++];) {
        d = d === Ka ? ka(a) : d === La ? a.cjs.exports : d === Ma ? a.cjs : ma(d, b);
        if(d === ia) {
          return a.executed = 0, s.trace("loader-exec-module", ["abort", c]), ia
        }
        q.push(d)
      }
      s.trace("loader-run-factory", [a.mid]);
      c = a.def;
      q = k(c) ? c.apply(null, q) : c;
      a.result = void 0 === q && a.cjs ? a.cjs.exports : q;
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
    Ja() && D("idle", [])
  }, fa = function() {
    aa || la(function() {
      for(var a, b, c = 0;c < T.length;) {
        a = qa, b = T[c], ma(b), a != qa ? c = 0 : c++
      }
    })
  };
  void 0 === u("dojo-loader-eval-hint-url") && u.add("dojo-loader-eval-hint-url", 1);
  var Da = "function" == typeof g.fixupUrl ? g.fixupUrl : function(a) {
    a += "";
    return a + (F ? (/\?/.test(a) ? "\x26" : "?") + F : "")
  }, Fa = function(a) {
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
    u("config-stripStrict") && (a = a.replace(/(["'])use strict\1/g, ""));
    ta = 1;
    a === ja ? ja.call(null) : s.eval(a, u("dojo-loader-eval-hint-url") ? b.url : b.mid);
    ta = 0
  }, ya = function(a) {
    var b = a.mid, d = a.url;
    if(!a.executed && !a.injected && !(S[b] || a.url && (a.pack && S[a.url] === a.pack || 1 == S[a.url]))) {
      if(Ha(a), a.plugin) {
        Fa(a)
      }else {
        var q = function() {
          Qa(a);
          if(2 !== a.injected) {
            if(u("dojo-enforceDefine")) {
              D("error", f("noDefine", a));
              return
            }
            ha(a);
            c(a, Ea);
            s.trace("loader-define-nonmodule", [a.url])
          }
          fa()
        };
        (ja = C[b] || C["url:" + a.url]) ? (s.trace("loader-inject", ["cache", a.mid, d]), Pa(ja, a), q()) : (s.trace("loader-inject", ["script", a.mid, d]), sa = a, s.injectUrl(Da(d), q, a), sa = 0)
      }
    }
  }, ua = function(a, b, d) {
    s.trace("loader-define-module", [a.mid, b]);
    if(2 === a.injected) {
      return D("error", f("multipleDefine", a)), a
    }
    c(a, {deps:b, def:d, cjs:{id:a.mid, uri:a.url, exports:a.result = {}, setExports:function(b) {
      a.cjs.exports = b
    }, config:function() {
      return a.config
    }}});
    for(var q = 0;b[q];q++) {
      b[q] = Y(b[q], a)
    }
    ha(a);
    !k(d) && !b.length && (a.result = d, ra(a));
    return a
  }, Qa = function(b, c) {
    for(var f = [], d, q;ga.length;) {
      q = ga.shift(), c && (q[0] = c.shift()), d = q[0] && Y(q[0]) || b, f.push([d, q[1], q[2]])
    }
    Z(b);
    a(f, function(a) {
      da(ua.apply(null, a))
    })
  }, Ia = n, Ga = n;
  u.add("ie-event-behavior", w.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
  var va = function(a, b, c, f) {
    if(u("ie-event-behavior")) {
      return a.attachEvent(c, f), function() {
        a.detachEvent(c, f)
      }
    }
    a.addEventListener(b, f, !1);
    return function() {
      a.removeEventListener(b, f, !1)
    }
  }, Ra = va(window, "load", "onload", function() {
    s.pageLoaded = 1;
    try {
      "complete" != w.readyState && (w.readyState = "complete")
    }catch(a) {
    }
    Ra()
  }), L = w.getElementsByTagName("script");
  for(e = 0;!N;) {
    if(!/^dojo/.test((O = L[e++]) && O.type)) {
      N = O
    }
  }
  s.injectUrl = function(a, b, c) {
    c = c.node = w.createElement("script");
    var d = va(c, "load", "onreadystatechange", function(a) {
      a = a || window.event;
      var c = a.target || a.srcElement;
      if("load" === a.type || /complete|loaded/.test(c.readyState)) {
        d(), q(), b && b()
      }
    }), q = va(c, "error", "onerror", function(b) {
      d();
      q();
      D("error", f("scriptError", [a, b]))
    });
    c.type = "text/javascript";
    c.charset = "utf-8";
    c.src = a;
    N.parentNode.insertBefore(c, N);
    return c
  };
  s.log = n;
  s.trace = n;
  O = function(a, b, c) {
    var d = arguments.length, q = ["require", "exports", "module"], r = [0, a, b];
    1 == d ? r = [0, k(a) ? q : [], a] : 2 == d && h(a) ? r = [a, k(b) ? q : [], b] : 3 == d && (r = [a, b, c]);
    s.trace("loader-define", r.slice(0, 2));
    if((d = r[0] && Y(r[0])) && !S[d.mid]) {
      da(ua(d, r[1], r[2]))
    }else {
      if(!u("ie-event-behavior") || ta) {
        ga.push(r)
      }else {
        d = d || sa;
        if(!d) {
          for(a in S) {
            if((q = B[a]) && q.node && "interactive" === q.node.readyState) {
              d = q;
              break
            }
          }
        }
        d ? (Z(d), da(ua(d, r[1], r[2]))) : D("error", f("ieDefineFailed", r[0]));
        fa()
      }
    }
  };
  O.amd = {vendor:"dojotoolkit.org"};
  c(c(s, m.loaderPatch), g.loaderPatch);
  H("error", function(a) {
    try {
      if(console.error(a), a instanceof Error) {
        for(var b in a) {
        }
      }
    }catch(c) {
    }
  });
  c(s, {uid:q, cache:C, packs:P});
  r.define || (r.define = O, r.require = s, a(X, function(a) {
    E(a)
  }), H = x.deps || g.deps || m.deps, x = x.callback || g.callback || m.callback, s.boot = H || x ? [H || [], x] : 0)
})(this.dojoConfig || this.djConfig || this.require || {}, {async:1, hasCache:{"config-selectorEngine":"lite", "config-tlmSiblingOfDojo":1, "dojo-built":1, "dojo-loader":1, dom:1, "host-browser":1}, packages:[{location:"../lsmb", main:"src", name:"lsmb"}, {location:"../dijit", name:"dijit"}, {location:".", name:"dojo"}]});
require({cache:{"dojo/request/default":function() {
  define(["exports", "require", "../has"], function(g, m, e) {
    var n = e("config-requestProvider");
    n || (n = "./xhr");
    g.getPlatformDefaultId = function() {
      return"./xhr"
    };
    g.load = function(e, p, k, h) {
      m(["platform" == e ? "./xhr" : n], function(d) {
        k(d)
      })
    }
  })
}, "dojo/_base/fx":function() {
  define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function(g, m, e, n, l, p, k, h, d) {
    var a = e.mixin, c = {}, f = c._Line = function(a, b) {
      this.start = a;
      this.end = b
    };
    f.prototype.getValue = function(a) {
      return(this.end - this.start) * a + this.start
    };
    var b = c.Animation = function(b) {
      a(this, b);
      e.isArray(this.curve) && (this.curve = new f(this.curve[0], this.curve[1]))
    };
    b.prototype = new n;
    e.extend(b, {duration:350, repeat:0, rate:20, _percent:0, _startRepeatCount:0, _getStep:function() {
      var a = this._percent, b = this.easing;
      return b ? b(a) : a
    }, _fire:function(a, b) {
      var c = b || [];
      if(this[a]) {
        if(m.debugAtAllCosts) {
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
      var c = a || this.delay, f = e.hitch(this, "_play", b);
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
    var q = 0, s = null, r = {run:function() {
    }};
    e.extend(b, {_startTimer:function() {
      this._timer || (this._timer = p.after(r, "run", e.hitch(this, "_cycle"), !0), q++);
      s || (s = setInterval(e.hitch(r, "run"), this.rate))
    }, _stopTimer:function() {
      this._timer && (this._timer.remove(), this._timer = null, q--);
      0 >= q && (clearInterval(s), s = null, q = 0)
    }});
    var w = k("ie") ? function(a) {
      var b = a.style;
      !b.width.length && "auto" == d.get(a, "width") && (b.width = "auto")
    } : function() {
    };
    c._fade = function(b) {
      b.node = h.byId(b.node);
      var f = a({properties:{}}, b);
      b = f.properties.opacity = {};
      b.start = !("start" in f) ? function() {
        return+d.get(f.node, "opacity") || 0
      } : f.start;
      b.end = f.end;
      b = c.animateProperty(f);
      p.after(b, "beforeBegin", e.partial(w, f.node), !0);
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
    var y = function(a) {
      this._properties = a;
      for(var b in a) {
        var c = a[b];
        c.start instanceof l && (c.tempColor = new l)
      }
    };
    y.prototype.getValue = function(a) {
      var b = {}, c;
      for(c in this._properties) {
        var f = this._properties[c], d = f.start;
        d instanceof l ? b[c] = l.blendColors(d, f.end, a, f.tempColor).toCss() : e.isArray(d) || (b[c] = (f.end - d) * a + d + ("opacity" != c ? f.units || "px" : 0))
      }
      return b
    };
    c.animateProperty = function(c) {
      var f = c.node = h.byId(c.node);
      c.easing || (c.easing = g._defaultEasing);
      c = new b(c);
      p.after(c, "beforeBegin", e.hitch(c, function() {
        var b = {}, c;
        for(c in this.properties) {
          if("width" == c || "height" == c) {
            this.node.display = "block"
          }
          var q = this.properties[c];
          e.isFunction(q) && (q = q(f));
          q = b[c] = a({}, e.isObject(q) ? q : {end:q});
          e.isFunction(q.start) && (q.start = q.start(f));
          e.isFunction(q.end) && (q.end = q.end(f));
          var h = 0 <= c.toLowerCase().indexOf("color"), s = function(a, b) {
            var c = {height:a.offsetHeight, width:a.offsetWidth}[b];
            if(void 0 !== c) {
              return c
            }
            c = d.get(a, b);
            return"opacity" == b ? +c : h ? c : parseFloat(c)
          };
          "end" in q ? "start" in q || (q.start = s(f, c)) : q.end = s(f, c);
          h ? (q.start = new l(q.start), q.end = new l(q.end)) : q.start = "opacity" == c ? +q.start : parseFloat(q.start)
        }
        this.curve = new y(b)
      }), !0);
      p.after(c, "onAnimate", e.hitch(d, "set", c.node), !0);
      return c
    };
    c.anim = function(a, f, d, q, h, s) {
      return c.animateProperty({node:a, duration:d || b.prototype.duration, properties:f, easing:q, onEnd:h}).play(s || 0)
    };
    a(g, c);
    g._Animation = b;
    return c
  })
}, "dojo/string":function() {
  define(["./_base/kernel", "./_base/lang"], function(g, m) {
    var e = /[&<>'"\/]/g, n = {"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;", "/":"\x26#x2F;"}, l = {};
    m.setObject("dojo.string", l);
    l.escape = function(p) {
      return!p ? "" : p.replace(e, function(k) {
        return n[k]
      })
    };
    l.rep = function(e, k) {
      if(0 >= k || !e) {
        return""
      }
      for(var h = [];;) {
        k & 1 && h.push(e);
        if(!(k >>= 1)) {
          break
        }
        e += e
      }
      return h.join("")
    };
    l.pad = function(e, k, h, d) {
      h || (h = "0");
      e = String(e);
      k = l.rep(h, Math.ceil((k - e.length) / h.length));
      return d ? e + k : k + e
    };
    l.substitute = function(e, k, h, d) {
      d = d || g.global;
      h = h ? m.hitch(d, h) : function(a) {
        return a
      };
      return e.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(a, c, f) {
        a = m.getObject(c, !1, k);
        f && (a = m.getObject(f, !1, d).call(d, a, c));
        return h(a, c).toString()
      })
    };
    l.trim = String.prototype.trim ? m.trim : function(e) {
      e = e.replace(/^\s+/, "");
      for(var k = e.length - 1;0 <= k;k--) {
        if(/\S/.test(e.charAt(k))) {
          e = e.substring(0, k + 1);
          break
        }
      }
      return e
    };
    return l
  })
}, "dijit/a11y":function() {
  define("dojo/_base/array dojo/dom dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/sniff ./main".split(" "), function(g, m, e, n, l, p, k) {
    var h = {_isElementShown:function(d) {
      var a = n.get(d);
      return"hidden" != a.visibility && "collapsed" != a.visibility && "none" != a.display && "hidden" != e.get(d, "type")
    }, hasDefaultTabStop:function(d) {
      switch(d.nodeName.toLowerCase()) {
        case "a":
          return e.has(d, "href");
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
            var c = d.contentDocument;
            if("designMode" in c && "on" == c.designMode) {
              return!0
            }
            a = c.body
          }catch(f) {
            try {
              a = d.contentWindow.document.body
            }catch(b) {
              return!1
            }
          }
          return a && ("true" == a.contentEditable || a.firstChild && "true" == a.firstChild.contentEditable);
        default:
          return"true" == d.contentEditable
      }
    }, effectiveTabIndex:function(d) {
      return e.get(d, "disabled") ? void 0 : e.has(d, "tabIndex") ? +e.get(d, "tabIndex") : h.hasDefaultTabStop(d) ? 0 : void 0
    }, isTabNavigable:function(d) {
      return 0 <= h.effectiveTabIndex(d)
    }, isFocusable:function(d) {
      return-1 <= h.effectiveTabIndex(d)
    }, _getTabNavigable:function(d) {
      function a(a) {
        return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
      }
      var c, f, b, q, s, k, l = {}, g = h._isElementShown, u = h.effectiveTabIndex, t = function(d) {
        for(d = d.firstChild;d;d = d.nextSibling) {
          if(!(1 != d.nodeType || 9 >= p("ie") && "HTML" !== d.scopeName || !g(d))) {
            var h = u(d);
            if(0 <= h) {
              if(0 == h) {
                c || (c = d), f = d
              }else {
                if(0 < h) {
                  if(!b || h < q) {
                    q = h, b = d
                  }
                  if(!s || h >= k) {
                    k = h, s = d
                  }
                }
              }
              h = a(d);
              e.get(d, "checked") && h && (l[h] = d)
            }
            "SELECT" != d.nodeName.toUpperCase() && t(d)
          }
        }
      };
      g(d) && t(d);
      return{first:l[a(c)] || c, last:l[a(f)] || f, lowest:l[a(b)] || b, highest:l[a(s)] || s}
    }, getFirstInTabbingOrder:function(d, a) {
      var c = h._getTabNavigable(m.byId(d, a));
      return c.lowest ? c.lowest : c.first
    }, getLastInTabbingOrder:function(d, a) {
      var c = h._getTabNavigable(m.byId(d, a));
      return c.last ? c.last : c.highest
    }};
    l.mixin(k, h);
    return h
  })
}, "dojo/_base/kernel":function() {
  define(["../has", "./config", "require", "module"], function(g, m, e, n) {
    var l, p = function() {
      return this
    }(), k = {}, h = {}, d = {config:m, global:p, dijit:k, dojox:h}, k = {dojo:["dojo", d], dijit:["dijit", k], dojox:["dojox", h]};
    n = e.map && e.map[n.id.match(/[^\/]+/)[0]];
    for(l in n) {
      k[l] ? k[l][0] = n[l] : k[l] = [n[l], {}]
    }
    for(l in k) {
      n = k[l], n[1]._scopeName = n[0], m.noGlobals || (p[n[0]] = n[1])
    }
    d.scopeMap = k;
    d.baseUrl = d.config.baseUrl = e.baseUrl;
    d.isAsync = e.async;
    d.locale = m.locale;
    m = "$Rev: f8ee3a9 $".match(/[0-9a-f]{7,}/);
    d.version = {major:1, minor:10, patch:8, flag:"", revision:m ? m[0] : NaN, toString:function() {
      var a = d.version;
      return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
    }};
    Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(d);
    d.exit = function() {
    };
    g("host-webworker");
    g.add("console-as-object", function() {
      return Function.prototype.bind && console && "object" === typeof console.log
    });
    "undefined" != typeof console || (console = {});
    e = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
    var a;
    for(m = 0;a = e[m++];) {
      console[a] ? g("console-as-object") && (console[a] = Function.prototype.bind.call(console[a], console)) : function() {
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
    d.deprecated = d.experimental = function() {
    };
    d._hasResource = {};
    return d
  })
}, "dijit/Viewport":function() {
  define(["dojo/Evented", "dojo/on", "dojo/domReady", "dojo/sniff", "dojo/window"], function(g, m, e, n, l) {
    var p = new g, k;
    e(function() {
      var h = l.getBox();
      p._rlh = m(window, "resize", function() {
        var a = l.getBox();
        h.h == a.h && h.w == a.w || (h = a, p.emit("resize"))
      });
      if(8 == n("ie")) {
        var d = screen.deviceXDPI;
        setInterval(function() {
          screen.deviceXDPI != d && (d = screen.deviceXDPI, p.emit("resize"))
        }, 500)
      }
      n("ios") && (m(document, "focusin", function(a) {
        k = a.target
      }), m(document, "focusout", function(a) {
        k = null
      }))
    });
    p.getEffectiveBox = function(h) {
      h = l.getBox(h);
      var d = k && k.tagName && k.tagName.toLowerCase();
      if(n("ios") && k && !k.readOnly && ("textarea" == d || "input" == d && /^(color|email|number|password|search|tel|text|url)$/.test(k.type))) {
        h.h *= 0 == orientation || 180 == orientation ? 0.66 : 0.4, d = k.getBoundingClientRect(), h.h = Math.max(h.h, d.top + d.height)
      }
      return h
    };
    return p
  })
}, "dojo/hccss":function() {
  define("require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "), function(g, m, e, n, l, p, k) {
    l.add("highcontrast", function() {
      var h = k.doc.createElement("div");
      h.style.cssText = 'border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("' + (m.blankGif || g.toUrl("./resources/blank.gif")) + '");';
      k.body().appendChild(h);
      var d = n.getComputedStyle(h), a = d.backgroundImage, d = d.borderTopColor == d.borderRightColor || a && ("none" == a || "url(invalid-url:)" == a);
      8 >= l("ie") ? h.outerHTML = "" : k.body().removeChild(h);
      return d
    });
    p(function() {
      l("highcontrast") && e.add(k.body(), "dj_a11y")
    });
    return l
  })
}, "dojo/query":function() {
  define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function(g, m, e, n, l, p, k, h) {
    function d(a, b) {
      var c = function(c, f) {
        if("string" == typeof f && (f = e.byId(f), !f)) {
          return new b([])
        }
        var d = "string" == typeof c ? a(c, f) : c ? c.end && c.on ? c : [c] : [];
        return d.end && d.on ? d : new b(d)
      };
      c.matches = a.match || function(a, b, f) {
        return 0 < c.filter([a], b, f).length
      };
      c.filter = a.filter || function(a, b, f) {
        return c(b, f).filter(function(b) {
          return-1 < l.indexOf(a, b)
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
    m.add("array-extensible", function() {
      return 1 == p.delegate([], {length:1}).length && !m("bug-for-in-skips-shadowed")
    });
    var a = Array.prototype, c = a.slice, f = a.concat, b = l.forEach, q = function(a, b, f) {
      b = [0].concat(c.call(b, 0));
      f = f || g.global;
      return function(c) {
        b[0] = c;
        return a.apply(f, b)
      }
    }, s = function(a) {
      var b = this instanceof r && m("array-extensible");
      "number" == typeof a && (a = Array(a));
      var c = a && "length" in a ? a : arguments;
      if(b || !c.sort) {
        for(var f = b ? this : [], d = f.length = c.length, q = 0;q < d;q++) {
          f[q] = c[q]
        }
        if(b) {
          return f
        }
        c = f
      }
      p._mixin(c, w);
      c._NodeListCtor = function(a) {
        return r(a)
      };
      return c
    }, r = s, w = r.prototype = m("array-extensible") ? [] : {};
    r._wrap = w._wrap = function(a, b, c) {
      a = new (c || this._NodeListCtor || r)(a);
      return b ? a._stash(b) : a
    };
    r._adaptAsMap = function(a, b) {
      return function() {
        return this.map(q(a, arguments, b))
      }
    };
    r._adaptAsForEach = function(a, b) {
      return function() {
        this.forEach(q(a, arguments, b));
        return this
      }
    };
    r._adaptAsFilter = function(a, b) {
      return function() {
        return this.filter(q(a, arguments, b))
      }
    };
    r._adaptWithCondition = function(a, b, c) {
      return function() {
        var f = arguments, d = q(a, f, c);
        if(b.call(c || g.global, f)) {
          return this.map(d)
        }
        this.forEach(d);
        return this
      }
    };
    b(["slice", "splice"], function(b) {
      var c = a[b];
      w[b] = function() {
        return this._wrap(c.apply(this, arguments), "slice" == b ? this : null)
      }
    });
    b(["indexOf", "lastIndexOf", "every", "some"], function(a) {
      var b = l[a];
      w[a] = function() {
        return b.apply(g, [this].concat(c.call(arguments, 0)))
      }
    });
    p.extend(s, {constructor:r, _NodeListCtor:r, toString:function() {
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
      var b = c.call(this, 0), d = l.map(arguments, function(a) {
        return c.call(a, 0)
      });
      return this._wrap(f.apply(b, d), this)
    }, map:function(a, b) {
      return this._wrap(l.map(this, a, b), this)
    }, forEach:function(a, c) {
      b(this, a, c);
      return this
    }, filter:function(a) {
      var b = arguments, c = this, f = 0;
      if("string" == typeof a) {
        c = y._filterResult(this, b[0]);
        if(1 == b.length) {
          return c._stash(this)
        }
        f = 1
      }
      return this._wrap(l.filter(c, b[f], b[f + 1]), this)
    }, instantiate:function(a, b) {
      var c = p.isFunction(a) ? a : p.getObject(a);
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
    var y = d(h, s);
    g.query = d(h, function(a) {
      return s(a)
    });
    y.load = function(a, b, c) {
      k.load(a, b, function(a) {
        c(d(a, s))
      })
    };
    g._filterQueryResult = y._filterResult = function(a, b, c) {
      return new s(y.filter(a, b, c))
    };
    g.NodeList = y.NodeList = s;
    return y
  })
}, "dijit/_WidgetBase":function() {
  define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "), function(g, m, e, n, l, p, k, h, d, a, c, f, b, q, s, r, w, y, u, t, x, z, v) {
    function D(a) {
      return function(b) {
        h[b ? "set" : "remove"](this.domNode, a, b);
        this._set(a, b)
      }
    }
    b.add("dijit-legacy-requires", !q.isAsync);
    b.add("dojo-bidi", !1);
    b("dijit-legacy-requires") && w(0, function() {
      g(["dijit/_base/manager"])
    });
    var H = {};
    n = p("dijit._WidgetBase", [y, x], {id:"", _setIdAttr:"domNode", lang:"", _setLangAttr:D("lang"), dir:"", _setDirAttr:D("dir"), "class":"", _setClassAttr:{node:"domNode", type:"class"}, _setTypeAttr:null, style:"", title:"", tooltip:"", baseClass:"", srcNodeRef:null, domNode:null, containerNode:null, ownerDocument:null, _setOwnerDocumentAttr:function(a) {
      this._set("ownerDocument", a)
    }, attributeMap:{}, _blankGif:n.blankGif || g.toUrl("dojo/resources/blank.gif"), _introspect:function() {
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
      this.srcNodeRef = k.byId(b);
      this._connects = [];
      this._supportingWidgets = [];
      this.srcNodeRef && "string" == typeof this.srcNodeRef.id && (this.id = this.srcNodeRef.id);
      a && (this.params = a, s.mixin(this, a));
      this.postMixInProperties();
      this.id || (this.id = v.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id);
      this.ownerDocument = this.ownerDocument || (this.srcNodeRef ? this.srcNodeRef.ownerDocument : document);
      this.ownerDocumentBody = t.body(this.ownerDocument);
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
      m.forEach(this.constructor._setterAttrs, function(b) {
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
        this.isLeftToRight() || (a = a.concat(m.map(a, function(a) {
          return a + "Rtl"
        })));
        d.add(this.domNode, a)
      }
    }, postCreate:function() {
    }, startup:function() {
      this._started || (this._started = !0, m.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && s.isFunction(a.startup)) && (a.startup(), a._started = !0)
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
      m.forEach(this._connects, s.hitch(this, "disconnect"));
      m.forEach(this._supportingWidgets, b);
      this.domNode && m.forEach(v.findWidgets(this.domNode, this.containerNode), b);
      this.destroyRendering(a);
      v.remove(this.id);
      this._destroyed = !0
    }, destroyRendering:function(b) {
      this.bgIframe && (this.bgIframe.destroy(b), delete this.bgIframe);
      this.domNode && (b ? h.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
      this.srcNodeRef && (b || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
    }, destroyDescendants:function(a) {
      m.forEach(this.getChildren(), function(b) {
        b.destroyRecursive && b.destroyRecursive(a)
      })
    }, uninitialize:function() {
      return!1
    }, _setStyleAttr:function(a) {
      var b = this.domNode;
      s.isObject(a) ? f.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
      this._set("style", a)
    }, _attrToDom:function(a, b, c) {
      c = 3 <= arguments.length ? c : this.attributeMap[a];
      m.forEach(s.isArray(c) ? c : [c], function(c) {
        var f = this[c.node || c || "domNode"];
        switch(c.type || "attribute") {
          case "attribute":
            s.isFunction(b) && (b = s.hitch(this, b));
            c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
            f.tagName ? h.set(f, c, b) : f.set(c, b);
            break;
          case "innerText":
            f.innerHTML = "";
            f.appendChild(this.ownerDocument.createTextNode(b));
            break;
          case "innerHTML":
            f.innerHTML = b;
            break;
          case "class":
            d.replace(f, b, this[a])
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
      if(s.isFunction(f)) {
        var d = f.apply(this, Array.prototype.slice.call(arguments, 1))
      }else {
        var f = this.focusNode && !s.isFunction(this.focusNode) ? "focusNode" : "domNode", q = this[f] && this[f].tagName, h;
        if(h = q) {
          if(!(h = H[q])) {
            h = this[f];
            var e = {}, k;
            for(k in h) {
              e[k.toLowerCase()] = !0
            }
            h = H[q] = e
          }
        }
        k = h;
        c = a in this.attributeMap ? this.attributeMap[a] : c.s in this ? this[c.s] : k && c.l in k && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? f : null;
        null != c && this._attrToDom(a, b, c);
        this._set(a, b)
      }
      return d || this
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
      var f, d = this["on" + a];
      d && (f = d.apply(this, c ? c : [b]));
      this._started && !this._beingDestroyed && r.emit(this.domNode, a.toLowerCase(), b);
      return f
    }, on:function(a, b) {
      var c = this._onMap(a);
      return c ? e.after(this, c, b, !0) : this.own(r(this.domNode, a, b))[0]
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
      return this.own(l.connect(a, b, this, c))[0]
    }, disconnect:function(a) {
      a.remove()
    }, subscribe:function(a, b) {
      return this.own(u.subscribe(a, s.hitch(this, b)))[0]
    }, unsubscribe:function(a) {
      a.remove()
    }, isLeftToRight:function() {
      return this.dir ? "ltr" == this.dir.toLowerCase() : c.isBodyLtr(this.ownerDocument)
    }, isFocusable:function() {
      return this.focus && "none" != f.get(this.domNode, "display")
    }, placeAt:function(b, c) {
      var f = !b.tagName && v.byId(b);
      f && f.addChild && (!c || "number" === typeof c) ? f.addChild(this, c) : (f = f && "domNode" in f ? f.containerNode && !/after|before|replace/.test(c || "") ? f.containerNode : f.domNode : k.byId(b, this.ownerDocument), a.place(this.domNode, f, c), !this._started && (this.getParent() || {})._started && this.startup());
      return this
    }, defer:function(a, b) {
      var c = setTimeout(s.hitch(this, function() {
        c && (c = null, this._destroyed || s.hitch(this, a)())
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
  define(["require", "module"], function(g, m) {
    var e = g.has || function() {
    };
    e.add("dom-addeventlistener", !!document.addEventListener);
    e.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints);
    e.add("touch-events", "ontouchstart" in document);
    e.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window);
    e.add("MSPointer", window.navigator.msPointerEnabled);
    e.add("touch-action", e("touch") && e("pointer-events"));
    e.add("device-width", screen.availWidth || innerWidth);
    var n = document.createElement("form");
    e.add("dom-attributes-explicit", 0 == n.attributes.length);
    e.add("dom-attributes-specified-flag", 0 < n.attributes.length && 40 > n.attributes.length);
    e.clearElement = function(e) {
      e.innerHTML = "";
      return e
    };
    e.normalize = function(l, g) {
      var k = l.match(/[\?:]|[^:\?]*/g), h = 0, d = function(a) {
        var c = k[h++];
        if(":" == c) {
          return 0
        }
        if("?" == k[h++]) {
          if(!a && e(c)) {
            return d()
          }
          d(!0);
          return d(a)
        }
        return c || 0
      };
      return(l = d()) && g(l)
    };
    e.load = function(e, g, k) {
      e ? g([e], k) : k()
    };
    return e
  })
}, "dojo/_base/declare":function() {
  define(["./kernel", "../has", "./lang"], function(g, m, e) {
    function n(a, b) {
      throw Error("declare" + (b ? " " + b : "") + ": " + a);
    }
    function l(a, b, c) {
      var f, d, q, h, e, k, s, r = this._inherited = this._inherited || {};
      "string" == typeof a && (f = a, a = b, b = c);
      c = 0;
      h = a.callee;
      (f = f || h.nom) || n("can't deduce a name to call inherited()", this.declaredClass);
      e = this.constructor._meta;
      q = e.bases;
      s = r.p;
      if(f != D) {
        if(r.c !== h && (s = 0, k = q[0], e = k._meta, e.hidden[f] !== h)) {
          (d = e.chains) && "string" == typeof d[f] && n("calling chained method with inherited: " + f, this.declaredClass);
          do {
            if(e = k._meta, d = k.prototype, e && (d[f] === h && d.hasOwnProperty(f) || e.hidden[f] === h)) {
              break
            }
          }while(k = q[++s]);
          s = k ? s : -1
        }
        if(k = q[++s]) {
          if(d = k.prototype, k._meta && d.hasOwnProperty(f)) {
            c = d[f]
          }else {
            h = t[f];
            do {
              if(d = k.prototype, (c = d[f]) && (k._meta ? d.hasOwnProperty(f) : c !== h)) {
                break
              }
            }while(k = q[++s])
          }
        }
        c = k && c || t[f]
      }else {
        if(r.c !== h && (s = 0, (e = q[0]._meta) && e.ctor !== h)) {
          d = e.chains;
          for((!d || "manual" !== d.constructor) && n("calling chained constructor with inherited", this.declaredClass);(k = q[++s]) && !((e = k._meta) && e.ctor === h);) {
          }
          s = k ? s : -1
        }
        for(;(k = q[++s]) && !(c = (e = k._meta) ? e.ctor : k);) {
        }
        c = k && c
      }
      r.c = c;
      r.p = s;
      if(c) {
        return!0 === b ? c : c.apply(this, b || a)
      }
    }
    function p(a, b) {
      return"string" == typeof a ? this.__inherited(a, b, !0) : this.__inherited(a, !0)
    }
    function k(a, b, c) {
      var f = this.getInherited(a, b);
      if(f) {
        return f.apply(this, c || b || a)
      }
    }
    function h(a) {
      for(var b = this.constructor._meta.bases, c = 0, f = b.length;c < f;++c) {
        if(b[c] === a) {
          return!0
        }
      }
      return this instanceof a
    }
    function d(a, b) {
      for(var c in b) {
        c != D && b.hasOwnProperty(c) && (a[c] = b[c])
      }
      if(m("bug-for-in-skips-shadowed")) {
        for(var f = e._extraNames, d = f.length;d;) {
          c = f[--d], c != D && b.hasOwnProperty(c) && (a[c] = b[c])
        }
      }
    }
    function a(a) {
      y.safeMixin(this.prototype, a);
      return this
    }
    function c(a, b) {
      a instanceof Array || "function" == typeof a || (b = a, a = void 0);
      b = b || {};
      a = a || [];
      return y([this].concat(a), b)
    }
    function f(a, b) {
      return function() {
        var c = arguments, f = c, d = c[0], q, h;
        h = a.length;
        var k;
        if(!(this instanceof c.callee)) {
          return w(c)
        }
        if(b && (d && d.preamble || this.preamble)) {
          k = Array(a.length);
          k[0] = c;
          for(q = 0;;) {
            if(d = c[0]) {
              (d = d.preamble) && (c = d.apply(this, c) || c)
            }
            d = a[q].prototype;
            (d = d.hasOwnProperty("preamble") && d.preamble) && (c = d.apply(this, c) || c);
            if(++q == h) {
              break
            }
            k[q] = c
          }
        }
        for(q = h - 1;0 <= q;--q) {
          d = a[q], (d = (h = d._meta) ? h.ctor : d) && d.apply(this, k ? k[q] : c)
        }
        (d = this.postscript) && d.apply(this, f)
      }
    }
    function b(a, b) {
      return function() {
        var c = arguments, f = c, d = c[0];
        if(!(this instanceof c.callee)) {
          return w(c)
        }
        b && (d && (d = d.preamble) && (f = d.apply(this, f) || f), (d = this.preamble) && d.apply(this, f));
        a && a.apply(this, c);
        (d = this.postscript) && d.apply(this, c)
      }
    }
    function q(a) {
      return function() {
        var b = arguments, c = 0, f, d;
        if(!(this instanceof b.callee)) {
          return w(b)
        }
        for(;f = a[c];++c) {
          if(f = (d = f._meta) ? d.ctor : f) {
            f.apply(this, b);
            break
          }
        }
        (f = this.postscript) && f.apply(this, b)
      }
    }
    function s(a, b, c) {
      return function() {
        var f, d, q = 0, h = 1;
        c && (q = b.length - 1, h = -1);
        for(;f = b[q];q += h) {
          d = f._meta, (f = (d ? d.hidden : f.prototype)[a]) && f.apply(this, arguments)
        }
      }
    }
    function r(a) {
      z.prototype = a.prototype;
      a = new z;
      z.prototype = null;
      return a
    }
    function w(a) {
      var b = a.callee, c = r(b);
      b.apply(c, a);
      return c
    }
    function y(k, g, m) {
      "string" != typeof k && (m = g, g = k, k = "");
      m = m || {};
      var w, z, A, B, F, C, G, N = 1, Z = g;
      if("[object Array]" == x.call(g)) {
        N = k;
        A = [];
        B = [{cls:0, refs:[]}];
        C = {};
        for(var V = 1, W = g.length, Q = 0, I, X, E, L;Q < W;++Q) {
          (I = g[Q]) ? "[object Function]" != x.call(I) && n("mixin #" + Q + " is not a callable constructor.", N) : n("mixin #" + Q + " is unknown. Did you use dojo.require to pull it in?", N);
          X = I._meta ? I._meta.bases : [I];
          E = 0;
          for(I = X.length - 1;0 <= I;--I) {
            L = X[I].prototype, L.hasOwnProperty("declaredClass") || (L.declaredClass = "uniqName_" + v++), L = L.declaredClass, C.hasOwnProperty(L) || (C[L] = {count:0, refs:[], cls:X[I]}, ++V), L = C[L], E && E !== L && (L.refs.push(E), ++E.count), E = L
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
        I = g[0];
        A[0] = I ? I._meta && I === A[A.length - I._meta.bases.length] ? I._meta.bases.length : 1 : 0;
        C = A;
        A = C[0];
        N = C.length - A;
        g = C[N]
      }else {
        C = [0], g ? "[object Function]" == x.call(g) ? (A = g._meta, C = C.concat(A ? A.bases : g)) : n("base class is not a callable constructor.", k) : null !== g && n("unknown base class. Did you use dojo.require to pull it in?", k)
      }
      if(g) {
        for(z = N - 1;;--z) {
          w = r(g);
          if(!z) {
            break
          }
          A = C[z];
          (A._meta ? d : u)(w, A.prototype);
          B = new Function;
          B.superclass = g;
          B.prototype = w;
          g = w.constructor = B
        }
      }else {
        w = {}
      }
      y.safeMixin(w, m);
      A = m.constructor;
      A !== t.constructor && (A.nom = D, w.constructor = A);
      for(z = N - 1;z;--z) {
        (A = C[z]._meta) && A.chains && (G = u(G || {}, A.chains))
      }
      w["-chains-"] && (G = u(G || {}, w["-chains-"]));
      g && (g.prototype && g.prototype["-chains-"]) && (G = u(G || {}, g.prototype["-chains-"]));
      A = !G || !G.hasOwnProperty(D);
      C[0] = B = G && "manual" === G.constructor ? q(C) : 1 == C.length ? b(m.constructor, A) : f(C, A);
      B._meta = {bases:C, hidden:m, chains:G, parents:Z, ctor:m.constructor};
      B.superclass = g && g.prototype;
      B.extend = a;
      B.createSubclass = c;
      B.prototype = w;
      w.constructor = B;
      w.getInherited = p;
      w.isInstanceOf = h;
      w.inherited = H;
      w.__inherited = l;
      k && (w.declaredClass = k, e.setObject(k, B));
      if(G) {
        for(F in G) {
          w[F] && ("string" == typeof G[F] && F != D) && (A = w[F] = s(F, C, "after" === G[F]), A.nom = F)
        }
      }
      return B
    }
    var u = e.mixin, t = Object.prototype, x = t.toString, z = new Function, v = 0, D = "constructor", H = g.config.isDebug ? k : l;
    g.safeMixin = y.safeMixin = function(a, b) {
      var c, f;
      for(c in b) {
        if(f = b[c], (f !== t[c] || !(c in t)) && c != D) {
          "[object Function]" == x.call(f) && (f.nom = c), a[c] = f
        }
      }
      if(m("bug-for-in-skips-shadowed")) {
        for(var d = e._extraNames, q = d.length;q;) {
          if(c = d[--q], f = b[c], (f !== t[c] || !(c in t)) && c != D) {
            "[object Function]" == x.call(f) && (f.nom = c), a[c] = f
          }
        }
      }
      return a
    };
    return g.declare = y
  })
}, "dojo/dom":function() {
  define(["./sniff", "./_base/window"], function(g, m) {
    if(7 >= g("ie")) {
      try {
        document.execCommand("BackgroundImageCache", !1, !0)
      }catch(e) {
      }
    }
    var n = {};
    g("ie") ? n.byId = function(e, k) {
      if("string" != typeof e) {
        return e
      }
      var h = k || m.doc, d = e && h.getElementById(e);
      if(d && (d.attributes.id.value == e || d.id == e)) {
        return d
      }
      h = h.all[e];
      if(!h || h.nodeName) {
        h = [h]
      }
      for(var a = 0;d = h[a++];) {
        if(d.attributes && d.attributes.id && d.attributes.id.value == e || d.id == e) {
          return d
        }
      }
    } : n.byId = function(e, k) {
      return("string" == typeof e ? (k || m.doc).getElementById(e) : e) || null
    };
    n.isDescendant = function(e, k) {
      try {
        e = n.byId(e);
        for(k = n.byId(k);e;) {
          if(e == k) {
            return!0
          }
          e = e.parentNode
        }
      }catch(h) {
      }
      return!1
    };
    g.add("css-user-select", function(e, k, h) {
      if(!h) {
        return!1
      }
      e = h.style;
      k = ["Khtml", "O", "Moz", "Webkit"];
      h = k.length;
      var d = "userSelect";
      do {
        if("undefined" !== typeof e[d]) {
          return d
        }
      }while(h-- && (d = k[h] + "UserSelect"));
      return!1
    });
    var l = g("css-user-select");
    n.setSelectable = l ? function(e, k) {
      n.byId(e).style[l] = k ? "" : "none"
    } : function(e, k) {
      e = n.byId(e);
      var h = e.getElementsByTagName("*"), d = h.length;
      if(k) {
        for(e.removeAttribute("unselectable");d--;) {
          h[d].removeAttribute("unselectable")
        }
      }else {
        for(e.setAttribute("unselectable", "on");d--;) {
          h[d].setAttribute("unselectable", "on")
        }
      }
    };
    return n
  })
}, "dojo/touch":function() {
  define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(g, m, e, n, l, p, k, h, d, a) {
    function c(a, b, c) {
      return s && c ? function(a, b) {
        return p(a, c, b)
      } : w ? function(c, f) {
        var d = p(c, b, function(a) {
          f.call(this, a);
          M = (new Date).getTime()
        }), q = p(c, a, function(a) {
          (!M || (new Date).getTime() > M + 1E3) && f.call(this, a)
        });
        return{remove:function() {
          d.remove();
          q.remove()
        }}
      } : function(b, c) {
        return p(b, a, c)
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
      if(!h.isRight(b)) {
        var q = f(b.target);
        if(u = !b.target.disabled && q && q.dojoClick) {
          if(x = (t = "useTarget" == u) ? q : b.target, t && b.preventDefault(), z = b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, v = b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY, D = ("object" == typeof u ? u.x : "number" == typeof u ? u : 0) || 4, H = ("object" == typeof u ? u.y : "number" == typeof u ? u : 0) || 4, !y) {
            y = !0;
            var k = function(b) {
              u = t ? e.isDescendant(a.doc.elementFromPoint(b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY), x) : u && (b.changedTouches ? b.changedTouches[0].target : b.target) == x && Math.abs((b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX) - z) <= D && Math.abs((b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY) - v) <= 
              H
            };
            a.doc.addEventListener(c, function(a) {
              h.isRight(a) || (k(a), t && a.preventDefault())
            }, !0);
            a.doc.addEventListener(d, function(a) {
              if(!h.isRight(a) && (k(a), u)) {
                J = (new Date).getTime();
                var b = t ? x : a.target;
                "LABEL" === b.tagName && (b = e.byId(b.getAttribute("for")) || b);
                var c = a.changedTouches ? a.changedTouches[0] : a, f = function(b) {
                  var f = document.createEvent("MouseEvents");
                  f._dojo_click = !0;
                  f.initMouseEvent(b, !0, !0, a.view, a.detail, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                  return f
                }, d = f("mousedown"), q = f("mouseup"), s = f("click");
                setTimeout(function() {
                  p.emit(b, "mousedown", d);
                  p.emit(b, "mouseup", q);
                  p.emit(b, "click", s);
                  J = (new Date).getTime()
                }, 0)
              }
            }, !0);
            b = function(b) {
              a.doc.addEventListener(b, function(a) {
                u && (!a._dojo_click && (new Date).getTime() <= J + 1E3 && !("INPUT" == a.target.tagName && n.contains(a.target, "dijitOffScreen"))) && (a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation(), "click" == b && (("INPUT" != a.target.tagName || "radio" == a.target.type || "checkbox" == a.target.type) && "TEXTAREA" != a.target.tagName && "AUDIO" != a.target.tagName && "VIDEO" != a.target.tagName) && a.preventDefault())
              }, !0)
            };
            b("click");
            b("mousedown");
            b("mouseup")
          }
        }
      }
    }
    var q = 5 > k("ios"), s = k("pointer-events") || k("MSPointer"), r = function() {
      var a = {}, b;
      for(b in{down:1, move:1, up:1, cancel:1, over:1, out:1}) {
        a[b] = k("MSPointer") ? "MSPointer" + b.charAt(0).toUpperCase() + b.slice(1) : "pointer" + b
      }
      return a
    }(), w = k("touch-events"), y, u, t = !1, x, z, v, D, H, J, M, K;
    k("touch") && (s ? d(function() {
      a.doc.addEventListener(r.down, function(a) {
        b(a, r.move, r.up)
      }, !0)
    }) : d(function() {
      function c(a) {
        var b = l.delegate(a, {bubbles:!0});
        6 <= k("ios") && (b.touches = a.touches, b.altKey = a.altKey, b.changedTouches = a.changedTouches, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.targetTouches = a.targetTouches);
        return b
      }
      K = a.body();
      a.doc.addEventListener("touchstart", function(a) {
        M = (new Date).getTime();
        var c = K;
        K = a.target;
        p.emit(c, "dojotouchout", {relatedTarget:K, bubbles:!0});
        p.emit(K, "dojotouchover", {relatedTarget:c, bubbles:!0});
        b(a, "touchmove", "touchend")
      }, !0);
      p(a.doc, "touchmove", function(b) {
        M = (new Date).getTime();
        var f = a.doc.elementFromPoint(b.pageX - (q ? 0 : a.global.pageXOffset), b.pageY - (q ? 0 : a.global.pageYOffset));
        f && (K !== f && (p.emit(K, "dojotouchout", {relatedTarget:f, bubbles:!0}), p.emit(f, "dojotouchover", {relatedTarget:K, bubbles:!0}), K = f), p.emit(f, "dojotouchmove", c(b)) || b.preventDefault())
      });
      p(a.doc, "touchend", function(b) {
        M = (new Date).getTime();
        var f = a.doc.elementFromPoint(b.pageX - (q ? 0 : a.global.pageXOffset), b.pageY - (q ? 0 : a.global.pageYOffset)) || a.body();
        p.emit(f, "dojotouchend", c(b))
      })
    }));
    m = {press:c("mousedown", "touchstart", r.down), move:c("mousemove", "dojotouchmove", r.move), release:c("mouseup", "dojotouchend", r.up), cancel:c(h.leave, "touchcancel", s ? r.cancel : null), over:c("mouseover", "dojotouchover", r.over), out:c("mouseout", "dojotouchout", r.out), enter:h._eventHandler(c("mouseover", "dojotouchover", r.over)), leave:h._eventHandler(c("mouseout", "dojotouchout", r.out))};
    return g.touch = m
  })
}, "dojo/dom-style":function() {
  define(["./sniff", "./dom"], function(g, m) {
    function e(b, f, d) {
      f = f.toLowerCase();
      if("auto" == d) {
        if("height" == f) {
          return b.offsetHeight
        }
        if("width" == f) {
          return b.offsetWidth
        }
      }
      if("fontweight" == f) {
        switch(d) {
          case 700:
            return"bold";
          default:
            return"normal"
        }
      }
      f in a || (a[f] = c.test(f));
      return a[f] ? p(b, d) : d
    }
    var n, l = {};
    n = g("webkit") ? function(a) {
      var c;
      if(1 == a.nodeType) {
        var f = a.ownerDocument.defaultView;
        c = f.getComputedStyle(a, null);
        !c && a.style && (a.style.display = "", c = f.getComputedStyle(a, null))
      }
      return c || {}
    } : g("ie") && (9 > g("ie") || g("quirks")) ? function(a) {
      return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
    } : function(a) {
      return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
    };
    l.getComputedStyle = n;
    var p;
    p = g("ie") ? function(a, c) {
      if(!c) {
        return 0
      }
      if("medium" == c) {
        return 4
      }
      if(c.slice && "px" == c.slice(-2)) {
        return parseFloat(c)
      }
      var f = a.style, d = a.runtimeStyle, e = f.left, h = d.left;
      d.left = a.currentStyle.left;
      try {
        f.left = c, c = f.pixelLeft
      }catch(k) {
        c = 0
      }
      f.left = e;
      d.left = h;
      return c
    } : function(a, c) {
      return parseFloat(c) || 0
    };
    l.toPixelValue = p;
    var k = function(a, c) {
      try {
        return a.filters.item("DXImageTransform.Microsoft.Alpha")
      }catch(f) {
        return c ? {} : null
      }
    }, h = 9 > g("ie") || 10 > g("ie") && g("quirks") ? function(a) {
      try {
        return k(a).Opacity / 100
      }catch(c) {
        return 1
      }
    } : function(a) {
      return n(a).opacity
    }, d = 9 > g("ie") || 10 > g("ie") && g("quirks") ? function(a, c) {
      "" === c && (c = 1);
      var f = 100 * c;
      1 === c ? (a.style.zoom = "", k(a) && (a.style.filter = a.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (a.style.zoom = 1, k(a) ? k(a, 1).Opacity = f : a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + f + ")", k(a, 1).Enabled = !0);
      if("tr" == a.tagName.toLowerCase()) {
        for(f = a.firstChild;f;f = f.nextSibling) {
          "td" == f.tagName.toLowerCase() && d(f, c)
        }
      }
      return c
    } : function(a, c) {
      return a.style.opacity = c
    }, a = {left:!0, top:!0}, c = /margin|padding|width|height|max|min|offset/, f = {cssFloat:1, styleFloat:1, "float":1};
    l.get = function(a, c) {
      var d = m.byId(a), k = arguments.length;
      if(2 == k && "opacity" == c) {
        return h(d)
      }
      c = f[c] ? "cssFloat" in d.style ? "cssFloat" : "styleFloat" : c;
      var g = l.getComputedStyle(d);
      return 1 == k ? g : e(d, c, g[c] || d.style[c])
    };
    l.set = function(a, c, e) {
      var h = m.byId(a), k = arguments.length, g = "opacity" == c;
      c = f[c] ? "cssFloat" in h.style ? "cssFloat" : "styleFloat" : c;
      if(3 == k) {
        return g ? d(h, e) : h.style[c] = e
      }
      for(var p in c) {
        l.set(a, p, c[p])
      }
      return l.getComputedStyle(h)
    };
    return l
  })
}, "dojo/dom-geometry":function() {
  define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(g, m, e, n) {
    function l(a, c, f, b, d, e) {
      e = e || "px";
      a = a.style;
      isNaN(c) || (a.left = c + e);
      isNaN(f) || (a.top = f + e);
      0 <= b && (a.width = b + e);
      0 <= d && (a.height = d + e)
    }
    function p(a) {
      return"button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
    }
    function k(a) {
      return"border-box" == h.boxModel || "table" == a.tagName.toLowerCase() || p(a)
    }
    var h = {boxModel:"content-box"};
    g("ie") && (h.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
    h.getPadExtents = function(a, c) {
      a = e.byId(a);
      var f = c || n.getComputedStyle(a), b = n.toPixelValue, d = b(a, f.paddingLeft), h = b(a, f.paddingTop), k = b(a, f.paddingRight), f = b(a, f.paddingBottom);
      return{l:d, t:h, r:k, b:f, w:d + k, h:h + f}
    };
    h.getBorderExtents = function(a, c) {
      a = e.byId(a);
      var f = n.toPixelValue, b = c || n.getComputedStyle(a), d = "none" != b.borderLeftStyle ? f(a, b.borderLeftWidth) : 0, h = "none" != b.borderTopStyle ? f(a, b.borderTopWidth) : 0, k = "none" != b.borderRightStyle ? f(a, b.borderRightWidth) : 0, f = "none" != b.borderBottomStyle ? f(a, b.borderBottomWidth) : 0;
      return{l:d, t:h, r:k, b:f, w:d + k, h:h + f}
    };
    h.getPadBorderExtents = function(a, c) {
      a = e.byId(a);
      var f = c || n.getComputedStyle(a), b = h.getPadExtents(a, f), f = h.getBorderExtents(a, f);
      return{l:b.l + f.l, t:b.t + f.t, r:b.r + f.r, b:b.b + f.b, w:b.w + f.w, h:b.h + f.h}
    };
    h.getMarginExtents = function(a, c) {
      a = e.byId(a);
      var f = c || n.getComputedStyle(a), b = n.toPixelValue, d = b(a, f.marginLeft), h = b(a, f.marginTop), k = b(a, f.marginRight), f = b(a, f.marginBottom);
      return{l:d, t:h, r:k, b:f, w:d + k, h:h + f}
    };
    h.getMarginBox = function(a, c) {
      a = e.byId(a);
      var f = c || n.getComputedStyle(a), b = h.getMarginExtents(a, f), d = a.offsetLeft - b.l, k = a.offsetTop - b.t, r = a.parentNode, l = n.toPixelValue;
      if(g("mozilla")) {
        var p = parseFloat(f.left), f = parseFloat(f.top);
        !isNaN(p) && !isNaN(f) ? (d = p, k = f) : r && r.style && (r = n.getComputedStyle(r), "visible" != r.overflow && (d += "none" != r.borderLeftStyle ? l(a, r.borderLeftWidth) : 0, k += "none" != r.borderTopStyle ? l(a, r.borderTopWidth) : 0))
      }else {
        if((g("opera") || 8 == g("ie") && !g("quirks")) && r) {
          r = n.getComputedStyle(r), d -= "none" != r.borderLeftStyle ? l(a, r.borderLeftWidth) : 0, k -= "none" != r.borderTopStyle ? l(a, r.borderTopWidth) : 0
        }
      }
      return{l:d, t:k, w:a.offsetWidth + b.w, h:a.offsetHeight + b.h}
    };
    h.getContentBox = function(a, c) {
      a = e.byId(a);
      var f = c || n.getComputedStyle(a), b = a.clientWidth, d = h.getPadExtents(a, f), k = h.getBorderExtents(a, f);
      b ? (f = a.clientHeight, k.w = k.h = 0) : (b = a.offsetWidth, f = a.offsetHeight);
      g("opera") && (d.l += k.l, d.t += k.t);
      return{l:d.l, t:d.t, w:b - d.w - k.w, h:f - d.h - k.h}
    };
    h.setContentSize = function(a, c, f) {
      a = e.byId(a);
      var b = c.w;
      c = c.h;
      k(a) && (f = h.getPadBorderExtents(a, f), 0 <= b && (b += f.w), 0 <= c && (c += f.h));
      l(a, NaN, NaN, b, c)
    };
    var d = {l:0, t:0, w:0, h:0};
    h.setMarginBox = function(a, c, f) {
      a = e.byId(a);
      var b = f || n.getComputedStyle(a);
      f = c.w;
      var q = c.h, s = k(a) ? d : h.getPadBorderExtents(a, b), b = h.getMarginExtents(a, b);
      if(g("webkit") && p(a)) {
        var r = a.style;
        0 <= f && !r.width && (r.width = "4px");
        0 <= q && !r.height && (r.height = "4px")
      }
      0 <= f && (f = Math.max(f - s.w - b.w, 0));
      0 <= q && (q = Math.max(q - s.h - b.h, 0));
      l(a, c.l, c.t, f, q)
    };
    h.isBodyLtr = function(a) {
      a = a || m.doc;
      return"ltr" == (m.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
    };
    h.docScroll = function(a) {
      a = a || m.doc;
      var c = m.doc.parentWindow || m.doc.defaultView;
      return"pageXOffset" in c ? {x:c.pageXOffset, y:c.pageYOffset} : (c = g("quirks") ? m.body(a) : a.documentElement) && {x:h.fixIeBiDiScrollLeft(c.scrollLeft || 0, a), y:c.scrollTop || 0}
    };
    h.getIeDocumentElementOffset = function(a) {
      a = a || m.doc;
      a = a.documentElement;
      if(8 > g("ie")) {
        var c = a.getBoundingClientRect(), f = c.left, c = c.top;
        7 > g("ie") && (f += a.clientLeft, c += a.clientTop);
        return{x:0 > f ? 0 : f, y:0 > c ? 0 : c}
      }
      return{x:0, y:0}
    };
    h.fixIeBiDiScrollLeft = function(a, c) {
      c = c || m.doc;
      var f = g("ie");
      if(f && !h.isBodyLtr(c)) {
        var b = g("quirks"), d = b ? m.body(c) : c.documentElement, k = m.global;
        6 == f && (!b && k.frameElement && d.scrollHeight > d.clientHeight) && (a += d.clientLeft);
        return 8 > f || b ? a + d.clientWidth - d.scrollWidth : -a
      }
      return a
    };
    h.position = function(a, c) {
      a = e.byId(a);
      var f = m.body(a.ownerDocument), b = a.getBoundingClientRect(), b = {x:b.left, y:b.top, w:b.right - b.left, h:b.bottom - b.top};
      if(9 > g("ie")) {
        var d = h.getIeDocumentElementOffset(a.ownerDocument);
        b.x -= d.x + (g("quirks") ? f.clientLeft + f.offsetLeft : 0);
        b.y -= d.y + (g("quirks") ? f.clientTop + f.offsetTop : 0)
      }
      c && (f = h.docScroll(a.ownerDocument), b.x += f.x, b.y += f.y);
      return b
    };
    h.getMarginSize = function(a, c) {
      a = e.byId(a);
      var f = h.getMarginExtents(a, c || n.getComputedStyle(a)), b = a.getBoundingClientRect();
      return{w:b.right - b.left + f.w, h:b.bottom - b.top + f.h}
    };
    h.normalizeEvent = function(a) {
      "layerX" in a || (a.layerX = a.offsetX, a.layerY = a.offsetY);
      if(!g("dom-addeventlistener")) {
        var c = a.target, c = c && c.ownerDocument || document, f = g("quirks") ? c.body : c.documentElement, b = h.getIeDocumentElementOffset(c);
        a.pageX = a.clientX + h.fixIeBiDiScrollLeft(f.scrollLeft || 0, c) - b.x;
        a.pageY = a.clientY + (f.scrollTop || 0) - b.y
      }
    };
    return h
  })
}, "dojo/Stateful":function() {
  define(["./_base/declare", "./_base/lang", "./_base/array", "./when"], function(g, m, e, n) {
    return g("dojo.Stateful", null, {_attrPairNames:{}, _getAttrNames:function(e) {
      var g = this._attrPairNames;
      return g[e] ? g[e] : g[e] = {s:"_" + e + "Setter", g:"_" + e + "Getter"}
    }, postscript:function(e) {
      e && this.set(e)
    }, _get:function(e, g) {
      return"function" === typeof this[g.g] ? this[g.g]() : this[e]
    }, get:function(e) {
      return this._get(e, this._getAttrNames(e))
    }, set:function(e, g) {
      if("object" === typeof e) {
        for(var k in e) {
          e.hasOwnProperty(k) && "_watchCallbacks" != k && this.set(k, e[k])
        }
        return this
      }
      k = this._getAttrNames(e);
      var h = this._get(e, k);
      k = this[k.s];
      var d;
      "function" === typeof k ? d = k.apply(this, Array.prototype.slice.call(arguments, 1)) : this[e] = g;
      if(this._watchCallbacks) {
        var a = this;
        n(d, function() {
          a._watchCallbacks(e, h, g)
        })
      }
      return this
    }, _changeAttrValue:function(e, g) {
      var k = this.get(e);
      this[e] = g;
      this._watchCallbacks && this._watchCallbacks(e, k, g);
      return this
    }, watch:function(g, p) {
      var k = this._watchCallbacks;
      if(!k) {
        var h = this, k = this._watchCallbacks = function(a, f, b, d) {
          var e = function(d) {
            if(d) {
              d = d.slice();
              for(var e = 0, k = d.length;e < k;e++) {
                d[e].call(h, a, f, b)
              }
            }
          };
          e(k["_" + a]);
          d || e(k["*"])
        }
      }
      !p && "function" === typeof g ? (p = g, g = "*") : g = "_" + g;
      var d = k[g];
      "object" !== typeof d && (d = k[g] = []);
      d.push(p);
      var a = {};
      a.unwatch = a.remove = function() {
        var a = e.indexOf(d, p);
        -1 < a && d.splice(a, 1)
      };
      return a
    }})
  })
}, "dojo/dom-prop":function() {
  define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function(g, m, e, n, l, p, k, h) {
    function d(a) {
      var c = "";
      a = a.childNodes;
      for(var f = 0, e;e = a[f];f++) {
        8 != e.nodeType && (c = 1 == e.nodeType ? c + d(e) : c + e.nodeValue)
      }
      return c
    }
    var a = {}, c = 0, f = m._scopeName + "attrid";
    e.add("dom-textContent", function(a, c, f) {
      return"textContent" in f
    });
    g.names = {"class":"className", "for":"htmlFor", tabindex:"tabIndex", readonly:"readOnly", colspan:"colSpan", frameborder:"frameBorder", rowspan:"rowSpan", textcontent:"textContent", valuetype:"valueType"};
    g.get = function(a, c) {
      a = l.byId(a);
      var f = c.toLowerCase(), f = g.names[f] || c;
      return"textContent" == f && !e("dom-textContent") ? d(a) : a[f]
    };
    g.set = function(b, d, s) {
      b = l.byId(b);
      if(2 == arguments.length && "string" != typeof d) {
        for(var r in d) {
          g.set(b, r, d[r])
        }
        return b
      }
      r = d.toLowerCase();
      r = g.names[r] || d;
      if("style" == r && "string" != typeof s) {
        return p.set(b, s), b
      }
      if("innerHTML" == r) {
        return e("ie") && b.tagName.toLowerCase() in {col:1, colgroup:1, table:1, tbody:1, tfoot:1, thead:1, tr:1, title:1} ? (k.empty(b), b.appendChild(k.toDom(s, b.ownerDocument))) : b[r] = s, b
      }
      if("textContent" == r && !e("dom-textContent")) {
        return k.empty(b), b.appendChild(b.ownerDocument.createTextNode(s)), b
      }
      if(n.isFunction(s)) {
        var m = b[f];
        m || (m = c++, b[f] = m);
        a[m] || (a[m] = {});
        var y = a[m][r];
        if(y) {
          h.disconnect(y)
        }else {
          try {
            delete b[r]
          }catch(u) {
          }
        }
        s ? a[m][r] = h.connect(b, r, s) : b[r] = null;
        return b
      }
      b[r] = s;
      return b
    }
  })
}, "dojo/when":function() {
  define(["./Deferred", "./promise/Promise"], function(g, m) {
    return function(e, n, l, p) {
      var k = e && "function" === typeof e.then, h = k && e instanceof m;
      if(k) {
        h || (k = new g(e.cancel), e.then(k.resolve, k.reject, k.progress), e = k.promise)
      }else {
        return 1 < arguments.length ? n ? n(e) : e : (new g).resolve(e)
      }
      return n || l || p ? e.then(n, l, p) : e
    }
  })
}, "dijit/_base/manager":function() {
  define(["dojo/_base/array", "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function(g, m, e, n, l) {
    var p = {};
    g.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "), function(e) {
      p[e] = n[e]
    });
    e.mixin(p, {defaultDuration:m.defaultDuration || 200});
    e.mixin(l, p);
    return l
  })
}, "dojo/dom-attr":function() {
  define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "), function(g, m, e, n, l, p) {
    function k(a, c) {
      var f = a.getAttributeNode && a.getAttributeNode(c);
      return!!f && f.specified
    }
    var h = {innerHTML:1, textContent:1, className:1, htmlFor:m("ie"), value:1}, d = {classname:"class", htmlfor:"for", tabindex:"tabIndex", readonly:"readOnly"};
    g.has = function(a, c) {
      var f = c.toLowerCase();
      return h[p.names[f] || c] || k(n.byId(a), d[f] || c)
    };
    g.get = function(a, c) {
      a = n.byId(a);
      var f = c.toLowerCase(), b = p.names[f] || c, q = a[b];
      if(h[b] && "undefined" != typeof q) {
        return q
      }
      if("textContent" == b) {
        return p.get(a, b)
      }
      if("href" != b && ("boolean" == typeof q || e.isFunction(q))) {
        return q
      }
      f = d[f] || c;
      return k(a, f) ? a.getAttribute(f) : null
    };
    g.set = function(a, c, f) {
      a = n.byId(a);
      if(2 == arguments.length) {
        for(var b in c) {
          g.set(a, b, c[b])
        }
        return a
      }
      b = c.toLowerCase();
      var k = p.names[b] || c, s = h[k];
      if("style" == k && "string" != typeof f) {
        return l.set(a, f), a
      }
      if(s || "boolean" == typeof f || e.isFunction(f)) {
        return p.set(a, c, f)
      }
      a.setAttribute(d[b] || c, f);
      return a
    };
    g.remove = function(a, c) {
      n.byId(a).removeAttribute(d[c.toLowerCase()] || c)
    };
    g.getNodeProp = function(a, c) {
      a = n.byId(a);
      var f = c.toLowerCase(), b = p.names[f] || c;
      if(b in a && "href" != b) {
        return a[b]
      }
      f = d[f] || c;
      return k(a, f) ? a.getAttribute(f) : null
    }
  })
}, "dojo/dom-construct":function() {
  define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function(g, m, e, n, l, p) {
    function k(a, b) {
      var c = b.parentNode;
      c && c.insertBefore(a, b)
    }
    function h(a) {
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
    var d = {option:["select"], tbody:["table"], thead:["table"], tfoot:["table"], tr:["table", "tbody"], td:["table", "tbody", "tr"], th:["table", "thead", "tr"], legend:["fieldset"], caption:["table"], colgroup:["table"], col:["table", "colgroup"], li:["ul"]}, a = /<\s*([\w\:]+)/, c = {}, f = 0, b = "__" + m._scopeName + "ToDomId", q;
    for(q in d) {
      d.hasOwnProperty(q) && (m = d[q], m.pre = "option" == q ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + m.join("\x3e\x3c") + "\x3e", m.post = "\x3c/" + m.reverse().join("\x3e\x3c/") + "\x3e")
    }
    var s;
    8 >= e("ie") && (s = function(a) {
      a.__dojo_html5_tested = "yes";
      var b = r("div", {innerHTML:"\x3cnav\x3ea\x3c/nav\x3e", style:{visibility:"hidden"}}, a.body);
      1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g, function(b) {
        a.createElement(b)
      });
      w(b)
    });
    g.toDom = function(k, h) {
      h = h || n.doc;
      var q = h[b];
      q || (h[b] = q = ++f + "", c[q] = h.createElement("div"));
      8 >= e("ie") && !h.__dojo_html5_tested && h.body && s(h);
      k += "";
      var g = k.match(a), r = g ? g[1].toLowerCase() : "", q = c[q];
      if(g && d[r]) {
        g = d[r];
        q.innerHTML = g.pre + k + g.post;
        for(g = g.length;g;--g) {
          q = q.firstChild
        }
      }else {
        q.innerHTML = k
      }
      if(1 == q.childNodes.length) {
        return q.removeChild(q.firstChild)
      }
      for(r = h.createDocumentFragment();g = q.firstChild;) {
        r.appendChild(g)
      }
      return r
    };
    g.place = function(a, b, c) {
      b = l.byId(b);
      "string" == typeof a && (a = /^\s*</.test(a) ? g.toDom(a, b.ownerDocument) : l.byId(a));
      if("number" == typeof c) {
        var f = b.childNodes;
        !f.length || f.length <= c ? b.appendChild(a) : k(a, f[0 > c ? 0 : c])
      }else {
        switch(c) {
          case "before":
            k(a, b);
            break;
          case "after":
            c = a;
            (f = b.parentNode) && (f.lastChild == b ? f.appendChild(c) : f.insertBefore(c, b.nextSibling));
            break;
          case "replace":
            b.parentNode.replaceChild(a, b);
            break;
          case "only":
            g.empty(b);
            b.appendChild(a);
            break;
          case "first":
            if(b.firstChild) {
              k(a, b.firstChild);
              break
            }
          ;
          default:
            b.appendChild(a)
        }
      }
      return a
    };
    var r = g.create = function(a, b, c, f) {
      var d = n.doc;
      c && (c = l.byId(c), d = c.ownerDocument);
      "string" == typeof a && (a = d.createElement(a));
      b && p.set(a, b);
      c && g.place(a, c, f);
      return a
    };
    g.empty = function(a) {
      h(l.byId(a))
    };
    var w = g.destroy = function(a) {
      if(a = l.byId(a)) {
        var b = a;
        a = a.parentNode;
        b.firstChild && h(b);
        a && (e("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b))
      }
    }
  })
}, "dijit/BackgroundIframe":function() {
  define("require ./main dojo/_base/config dojo/dom-construct dojo/dom-style dojo/_base/lang dojo/on dojo/sniff".split(" "), function(g, m, e, n, l, p, k, h) {
    h.add("config-bgIframe", (h("ie") || h("trident")) && !/IEMobile\/10\.0/.test(navigator.userAgent));
    var d = new function() {
      var a = [];
      this.pop = function() {
        var c;
        a.length ? (c = a.pop(), c.style.display = "") : (9 > h("ie") ? (c = "\x3ciframe src\x3d'" + (e.dojoBlankHtmlUrl || g.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role\x3d'presentation' style\x3d'position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity\x3d\"0\");'\x3e", c = document.createElement(c)) : (c = n.create("iframe"), c.src = 'javascript:""', c.className = "dijitBackgroundIframe", c.setAttribute("role", "presentation"), l.set(c, "opacity", 0.1)), c.tabIndex = 
        -1);
        return c
      };
      this.push = function(c) {
        c.style.display = "none";
        a.push(c)
      }
    };
    m.BackgroundIframe = function(a) {
      if(!a.id) {
        throw Error("no id");
      }
      if(h("config-bgIframe")) {
        var c = this.iframe = d.pop();
        a.appendChild(c);
        7 > h("ie") || h("quirks") ? (this.resize(a), this._conn = k(a, "resize", p.hitch(this, "resize", a))) : l.set(c, {width:"100%", height:"100%"})
      }
    };
    p.extend(m.BackgroundIframe, {resize:function(a) {
      this.iframe && l.set(this.iframe, {width:a.offsetWidth + "px", height:a.offsetHeight + "px"})
    }, destroy:function() {
      this._conn && (this._conn.remove(), this._conn = null);
      this.iframe && (this.iframe.parentNode.removeChild(this.iframe), d.push(this.iframe), delete this.iframe)
    }});
    return m.BackgroundIframe
  })
}, "dojo/text":function() {
  define(["./_base/kernel", "require", "./has", "./request"], function(g, m, e, n) {
    var l;
    l = function(a, c, f) {
      n(a, {sync:!!c, headers:{"X-Requested-With":null}}).then(f)
    };
    var p = {}, k = function(a) {
      if(a) {
        a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
        var c = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        c && (a = c[1])
      }else {
        a = ""
      }
      return a
    }, h = {}, d = {};
    g.cache = function(a, c, f) {
      var b;
      "string" == typeof a ? /\//.test(a) ? (b = a, f = c) : b = m.toUrl(a.replace(/\./g, "/") + (c ? "/" + c : "")) : (b = a + "", f = c);
      a = void 0 != f && "string" != typeof f ? f.value : f;
      f = f && f.sanitize;
      if("string" == typeof a) {
        return p[b] = a, f ? k(a) : a
      }
      if(null === a) {
        return delete p[b], null
      }
      b in p || l(b, !0, function(a) {
        p[b] = a
      });
      return f ? k(p[b]) : p[b]
    };
    return{dynamic:!0, normalize:function(a, c) {
      var f = a.split("!"), b = f[0];
      return(/^\./.test(b) ? c(b) : b) + (f[1] ? "!" + f[1] : "")
    }, load:function(a, c, f) {
      a = a.split("!");
      var b = 1 < a.length, e = a[0], g = c.toUrl(a[0]);
      a = "url:" + g;
      var r = h, m = function(a) {
        f(b ? k(a) : a)
      };
      e in p ? r = p[e] : c.cache && a in c.cache ? r = c.cache[a] : g in p && (r = p[g]);
      if(r === h) {
        if(d[g]) {
          d[g].push(m)
        }else {
          var n = d[g] = [m];
          l(g, !c.async, function(a) {
            p[e] = p[g] = a;
            for(var b = 0;b < n.length;) {
              n[b++](a)
            }
            delete d[g]
          })
        }
      }else {
        m(r)
      }
    }}
  })
}, "dojo/keys":function() {
  define(["./_base/kernel", "./sniff"], function(g, m) {
    return g.keys = {BACKSPACE:8, TAB:9, CLEAR:12, ENTER:13, SHIFT:16, CTRL:17, ALT:18, META:m("webkit") ? 91 : 224, PAUSE:19, CAPS_LOCK:20, ESCAPE:27, SPACE:32, PAGE_UP:33, PAGE_DOWN:34, END:35, HOME:36, LEFT_ARROW:37, UP_ARROW:38, RIGHT_ARROW:39, DOWN_ARROW:40, INSERT:45, DELETE:46, HELP:47, LEFT_WINDOW:91, RIGHT_WINDOW:92, SELECT:93, NUMPAD_0:96, NUMPAD_1:97, NUMPAD_2:98, NUMPAD_3:99, NUMPAD_4:100, NUMPAD_5:101, NUMPAD_6:102, NUMPAD_7:103, NUMPAD_8:104, NUMPAD_9:105, NUMPAD_MULTIPLY:106, NUMPAD_PLUS:107, 
    NUMPAD_ENTER:108, NUMPAD_MINUS:109, NUMPAD_PERIOD:110, NUMPAD_DIVIDE:111, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, F13:124, F14:125, F15:126, NUM_LOCK:144, SCROLL_LOCK:145, UP_DPAD:175, DOWN_DPAD:176, LEFT_DPAD:177, RIGHT_DPAD:178, copyKey:m("mac") && !m("air") ? m("safari") ? 91 : 224 : 17}
  })
}, "dijit/registry":function() {
  define(["dojo/_base/array", "dojo/_base/window", "./main"], function(g, m, e) {
    var n = {}, l = {}, p = {length:0, add:function(e) {
      if(l[e.id]) {
        throw Error("Tried to register widget with id\x3d\x3d" + e.id + " but that id is already registered");
      }
      l[e.id] = e;
      this.length++
    }, remove:function(e) {
      l[e] && (delete l[e], this.length--)
    }, byId:function(e) {
      return"string" == typeof e ? l[e] : e
    }, byNode:function(e) {
      return l[e.getAttribute("widgetId")]
    }, toArray:function() {
      var e = [], h;
      for(h in l) {
        e.push(l[h])
      }
      return e
    }, getUniqueId:function(k) {
      var h;
      do {
        h = k + "_" + (k in n ? ++n[k] : n[k] = 0)
      }while(l[h]);
      return"dijit" == e._scopeName ? h : e._scopeName + "_" + h
    }, findWidgets:function(e, h) {
      function d(c) {
        for(c = c.firstChild;c;c = c.nextSibling) {
          if(1 == c.nodeType) {
            var f = c.getAttribute("widgetId");
            f ? (f = l[f]) && a.push(f) : c !== h && d(c)
          }
        }
      }
      var a = [];
      d(e);
      return a
    }, _destroyAll:function() {
      e._curFocus = null;
      e._prevFocus = null;
      e._activeStack = [];
      g.forEach(p.findWidgets(m.body()), function(e) {
        e._destroyed || (e.destroyRecursive ? e.destroyRecursive() : e.destroy && e.destroy())
      })
    }, getEnclosingWidget:function(e) {
      for(;e;) {
        var h = 1 == e.nodeType && e.getAttribute("widgetId");
        if(h) {
          return l[h]
        }
        e = e.parentNode
      }
      return null
    }, _hash:l};
    return e.registry = p
  })
}, "dojo/domReady":function() {
  define(["./has"], function(g) {
    function m(a) {
      d.push(a);
      h && e()
    }
    function e() {
      if(!a) {
        for(a = !0;d.length;) {
          try {
            d.shift()(l)
          }catch(b) {
            console.error(b, "in domReady callback", b.stack)
          }
        }
        a = !1;
        m._onQEmpty()
      }
    }
    var n = function() {
      return this
    }(), l = document, p = {loaded:1, complete:1}, k = "string" != typeof l.readyState, h = !!p[l.readyState], d = [], a;
    m.load = function(a, b, c) {
      m(c)
    };
    m._Q = d;
    m._onQEmpty = function() {
    };
    k && (l.readyState = "loading");
    if(!h) {
      var c = [], f = function(a) {
        a = a || n.event;
        h || "readystatechange" == a.type && !p[l.readyState] || (k && (l.readyState = "complete"), h = 1, e())
      }, b = function(a, b) {
        a.addEventListener(b, f, !1);
        d.push(function() {
          a.removeEventListener(b, f, !1)
        })
      };
      if(!g("dom-addeventlistener")) {
        var b = function(a, b) {
          b = "on" + b;
          a.attachEvent(b, f);
          d.push(function() {
            a.detachEvent(b, f)
          })
        }, q = l.createElement("div");
        try {
          q.doScroll && null === n.frameElement && c.push(function() {
            try {
              return q.doScroll("left"), 1
            }catch(a) {
            }
          })
        }catch(s) {
        }
      }
      b(l, "DOMContentLoaded");
      b(n, "load");
      "onreadystatechange" in l ? b(l, "readystatechange") : k || c.push(function() {
        return p[l.readyState]
      });
      if(c.length) {
        var r = function() {
          if(!h) {
            for(var a = c.length;a--;) {
              if(c[a]()) {
                f("poller");
                return
              }
            }
            setTimeout(r, 30)
          }
        };
        r()
      }
    }
    return m
  })
}, "dijit/_AttachMixin":function() {
  define("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "), function(g, m, e, n, l, p, k, h, d) {
    var a = l.delegate(h, {mouseenter:p.enter, mouseleave:p.leave, keypress:e._keypress}), c;
    e = n("dijit._AttachMixin", null, {constructor:function() {
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
      var d = !0, e = this.attachScope || this, h = b(a, "dojoAttachPoint") || b(a, "data-dojo-attach-point");
      if(h) {
        for(var k = h.split(/\s*,\s*/);h = k.shift();) {
          l.isArray(e[h]) ? e[h].push(a) : e[h] = a, d = "containerNode" != h, this._attachPoints.push(h)
        }
      }
      if(b = b(a, "dojoAttachEvent") || b(a, "data-dojo-attach-event")) {
        h = b.split(/\s*,\s*/);
        for(k = l.trim;b = h.shift();) {
          if(b) {
            var g = null;
            -1 != b.indexOf(":") ? (g = b.split(":"), b = k(g[0]), g = k(g[1])) : b = k(b);
            g || (g = b);
            this._attachEvents.push(c(a, b, l.hitch(e, g)))
          }
        }
      }
      return d
    }, _attach:function(f, b, d) {
      b = b.replace(/^on/, "").toLowerCase();
      b = "dijitclick" == b ? c || (c = g("./a11yclick")) : a[b] || b;
      return k(f, b, d)
    }, _detachTemplateNodes:function() {
      var a = this.attachScope || this;
      m.forEach(this._attachPoints, function(b) {
        delete a[b]
      });
      this._attachPoints = [];
      m.forEach(this._attachEvents, function(a) {
        a.remove()
      });
      this._attachEvents = []
    }, destroyRendering:function() {
      this._detachTemplateNodes();
      this.inherited(arguments)
    }});
    l.extend(d, {dojoAttachEvent:"", dojoAttachPoint:""});
    return e
  })
}, "dojo/_base/lang":function() {
  define(["./kernel", "../has", "../sniff"], function(g, m) {
    m.add("bug-for-in-skips-shadowed", function() {
      for(var a in{toString:1}) {
        return 0
      }
      return 1
    });
    var e = m("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], n = e.length, l = function(a, c, f) {
      f || (f = a[0] && g.scopeMap[a[0]] ? g.scopeMap[a.shift()][1] : g.global);
      try {
        for(var b = 0;b < a.length;b++) {
          var d = a[b];
          if(!(d in f)) {
            if(c) {
              f[d] = {}
            }else {
              return
            }
          }
          f = f[d]
        }
        return f
      }catch(e) {
      }
    }, p = Object.prototype.toString, k = function(a, c, f) {
      return(f || []).concat(Array.prototype.slice.call(a, c || 0))
    }, h = /\{([^\}]+)\}/g, d = {_extraNames:e, _mixin:function(a, c, f) {
      var b, d, h, k = {};
      for(b in c) {
        if(d = c[b], !(b in a) || a[b] !== d && (!(b in k) || k[b] !== d)) {
          a[b] = f ? f(d) : d
        }
      }
      if(m("bug-for-in-skips-shadowed") && c) {
        for(h = 0;h < n;++h) {
          if(b = e[h], d = c[b], !(b in a) || a[b] !== d && (!(b in k) || k[b] !== d)) {
            a[b] = f ? f(d) : d
          }
        }
      }
      return a
    }, mixin:function(a, c) {
      a || (a = {});
      for(var f = 1, b = arguments.length;f < b;f++) {
        d._mixin(a, arguments[f])
      }
      return a
    }, setObject:function(a, c, f) {
      var b = a.split(".");
      a = b.pop();
      return(f = l(b, !0, f)) && a ? f[a] = c : void 0
    }, getObject:function(a, c, f) {
      return!a ? f : l(a.split("."), c, f)
    }, exists:function(a, c) {
      return void 0 !== d.getObject(a, !1, c)
    }, isString:function(a) {
      return"string" == typeof a || a instanceof String
    }, isArray:function(a) {
      return a && (a instanceof Array || "array" == typeof a)
    }, isFunction:function(a) {
      return"[object Function]" === p.call(a)
    }, isObject:function(a) {
      return void 0 !== a && (null === a || "object" == typeof a || d.isArray(a) || d.isFunction(a))
    }, isArrayLike:function(a) {
      return a && void 0 !== a && !d.isString(a) && !d.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) && (d.isArray(a) || isFinite(a.length))
    }, isAlien:function(a) {
      return a && !d.isFunction(a) && /\{\s*\[native code\]\s*\}/.test(String(a))
    }, extend:function(a, c) {
      for(var f = 1, b = arguments.length;f < b;f++) {
        d._mixin(a.prototype, arguments[f])
      }
      return a
    }, _hitchArgs:function(a, c) {
      var f = d._toArray(arguments, 2), b = d.isString(c);
      return function() {
        var e = d._toArray(arguments), h = b ? (a || g.global)[c] : c;
        return h && h.apply(a || this, f.concat(e))
      }
    }, hitch:function(a, c) {
      if(2 < arguments.length) {
        return d._hitchArgs.apply(g, arguments)
      }
      c || (c = a, a = null);
      if(d.isString(c)) {
        a = a || g.global;
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
        f && d._mixin(b, f);
        return b
      }
    }(), _toArray:m("ie") ? function() {
      function a(a, f, b) {
        b = b || [];
        for(f = f || 0;f < a.length;f++) {
          b.push(a[f])
        }
        return b
      }
      return function(c) {
        return(c.item ? a : k).apply(this, arguments)
      }
    }() : k, partial:function(a) {
      return d.hitch.apply(g, [null].concat(d._toArray(arguments)))
    }, clone:function(a) {
      if(!a || "object" != typeof a || d.isFunction(a)) {
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
      if(d.isArray(a)) {
        c = [];
        f = 0;
        for(b = a.length;f < b;++f) {
          f in a && c.push(d.clone(a[f]))
        }
      }else {
        c = a.constructor ? new a.constructor : {}
      }
      return d._mixin(c, a, d.clone)
    }, trim:String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }, replace:function(a, c, f) {
      return a.replace(f || h, d.isFunction(c) ? c : function(a, f) {
        return d.getObject(f, !1, c)
      })
    }};
    d.mixin(g, d);
    return d
  })
}, "dojo/uacss":function() {
  define(["./dom-geometry", "./_base/lang", "./domReady", "./sniff", "./_base/window"], function(g, m, e, n, l) {
    var p = l.doc.documentElement;
    l = n("ie");
    var k = n("trident"), h = n("opera"), d = Math.floor, a = n("ff"), c = g.boxModel.replace(/-/, ""), h = {dj_quirks:n("quirks"), dj_opera:h, dj_khtml:n("khtml"), dj_webkit:n("webkit"), dj_safari:n("safari"), dj_chrome:n("chrome"), dj_edge:n("edge"), dj_gecko:n("mozilla"), dj_ios:n("ios"), dj_android:n("android")};
    l && (h.dj_ie = !0, h["dj_ie" + d(l)] = !0, h.dj_iequirks = n("quirks"));
    k && (h.dj_trident = !0, h["dj_trident" + d(k)] = !0);
    a && (h["dj_ff" + d(a)] = !0);
    h["dj_" + c] = !0;
    var f = "", b;
    for(b in h) {
      h[b] && (f += b + " ")
    }
    p.className = m.trim(p.className + " " + f);
    e(function() {
      if(!g.isBodyLtr()) {
        var a = "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl ");
        p.className = m.trim(p.className + " " + a + "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl "))
      }
    });
    return n
  })
}, "dojo/Evented":function() {
  define(["./aspect", "./on"], function(g, m) {
    function e() {
    }
    var n = g.after;
    e.prototype = {on:function(e, g) {
      return m.parse(this, e, g, function(e, h) {
        return n(e, "on" + h, g, !0)
      })
    }, emit:function(e, g) {
      var k = [this];
      k.push.apply(k, arguments);
      return m.emit.apply(m, k)
    }};
    return e
  })
}, "dojo/window":function() {
  define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(g, m, e, n, l, p, k) {
    m.add("rtl-adjust-position-for-verticalScrollBar", function(d, a) {
      var c = e.body(a), f = k.create("div", {style:{overflow:"scroll", overflowX:"visible", direction:"rtl", visibility:"hidden", position:"absolute", left:"0", top:"0", width:"64px", height:"64px"}}, c, "last"), b = k.create("div", {style:{overflow:"hidden", direction:"ltr"}}, f, "last"), h = 0 != l.position(b).x;
      f.removeChild(b);
      c.removeChild(f);
      return h
    });
    m.add("position-fixed-support", function(d, a) {
      var c = e.body(a), f = k.create("span", {style:{visibility:"hidden", position:"fixed", left:"1px", top:"1px"}}, c, "last"), b = k.create("span", {style:{position:"fixed", left:"0", top:"0"}}, f, "last"), h = l.position(b).x != l.position(f).x;
      f.removeChild(b);
      c.removeChild(f);
      return h
    });
    var h = {getBox:function(d) {
      d = d || e.doc;
      var a = "BackCompat" == d.compatMode ? e.body(d) : d.documentElement, c = l.docScroll(d);
      if(m("touch")) {
        var f = h.get(d);
        d = f.innerWidth || a.clientWidth;
        a = f.innerHeight || a.clientHeight
      }else {
        d = a.clientWidth, a = a.clientHeight
      }
      return{l:c.x, t:c.y, w:d, h:a}
    }, get:function(d) {
      if(m("ie") && h !== document.parentWindow) {
        d.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
        var a = d._parentWindow;
        d._parentWindow = null;
        return a
      }
      return d.parentWindow || d.defaultView
    }, scrollIntoView:function(d, a) {
      try {
        d = n.byId(d);
        var c = d.ownerDocument || e.doc, f = e.body(c), b = c.documentElement || f.parentNode, h = m("ie") || m("trident"), k = m("webkit");
        if(!(d == f || d == b)) {
          if(!m("mozilla") && (!h && !k && !m("opera") && !m("trident") && !m("edge")) && "scrollIntoView" in d) {
            d.scrollIntoView(!1)
          }else {
            var g = "BackCompat" == c.compatMode, w = Math.min(f.clientWidth || b.clientWidth, b.clientWidth || f.clientWidth), y = Math.min(f.clientHeight || b.clientHeight, b.clientHeight || f.clientHeight), c = k || g ? f : b, u = a || l.position(d), t = d.parentNode, k = function(a) {
              return 6 >= h || 7 == h && g ? !1 : m("position-fixed-support") && "fixed" == p.get(a, "position").toLowerCase()
            }, x = this, z = function(a, b, c) {
              "BODY" == a.tagName || "HTML" == a.tagName ? x.get(a.ownerDocument).scrollBy(b, c) : (b && (a.scrollLeft += b), c && (a.scrollTop += c))
            };
            if(!k(d)) {
              for(;t;) {
                t == f && (t = c);
                var v = l.position(t), D = k(t), H = "rtl" == p.getComputedStyle(t).direction.toLowerCase();
                if(t == c) {
                  v.w = w;
                  v.h = y;
                  if(c == b && (h || m("trident")) && H) {
                    v.x += c.offsetWidth - v.w
                  }
                  v.x = 0;
                  v.y = 0
                }else {
                  var J = l.getPadBorderExtents(t);
                  v.w -= J.w;
                  v.h -= J.h;
                  v.x += J.l;
                  v.y += J.t;
                  var M = t.clientWidth, K = v.w - M;
                  0 < M && 0 < K && (H && m("rtl-adjust-position-for-verticalScrollBar") && (v.x += K), v.w = M);
                  M = t.clientHeight;
                  K = v.h - M;
                  0 < M && 0 < K && (v.h = M)
                }
                D && (0 > v.y && (v.h += v.y, v.y = 0), 0 > v.x && (v.w += v.x, v.x = 0), v.y + v.h > y && (v.h = y - v.y), v.x + v.w > w && (v.w = w - v.x));
                var P = u.x - v.x, U = u.y - v.y, A = P + u.w - v.w, B = U + u.h - v.h, F, C;
                if(0 < A * P && (t.scrollLeft || t == c || t.scrollWidth > t.offsetHeight)) {
                  F = Math[0 > P ? "max" : "min"](P, A);
                  if(H && (8 == h && !g || 5 <= m("trident"))) {
                    F = -F
                  }
                  C = t.scrollLeft;
                  z(t, F, 0);
                  F = t.scrollLeft - C;
                  u.x -= F
                }
                if(0 < B * U && (t.scrollTop || t == c || t.scrollHeight > t.offsetHeight)) {
                  F = Math.ceil(Math[0 > U ? "max" : "min"](U, B)), C = t.scrollTop, z(t, 0, F), F = t.scrollTop - C, u.y -= F
                }
                t = t != c && !D && t.parentNode
              }
            }
          }
        }
      }catch(G) {
        console.error("scrollIntoView: " + G), d.scrollIntoView(!1)
      }
    }};
    g.setObject("dojo.window", h);
    return h
  })
}, "dijit/place":function() {
  define("dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "), function(g, m, e, n, l, p, k) {
    function h(a, c, f, b) {
      var d = p.getEffectiveBox(a.ownerDocument);
      (!a.parentNode || "body" != String(a.parentNode.tagName).toLowerCase()) && l.body(a.ownerDocument).appendChild(a);
      var h = null;
      g.some(c, function(c) {
        var e = c.corner, k = c.pos, g = 0, r = {w:{L:d.l + d.w - k.x, R:k.x - d.l, M:d.w}[e.charAt(1)], h:{T:d.t + d.h - k.y, B:k.y - d.t, M:d.h}[e.charAt(0)]}, l = a.style;
        l.left = l.right = "auto";
        f && (g = f(a, c.aroundCorner, e, r, b), g = "undefined" == typeof g ? 0 : g);
        var p = a.style, n = p.display, w = p.visibility;
        "none" == p.display && (p.visibility = "hidden", p.display = "");
        l = m.position(a);
        p.display = n;
        p.visibility = w;
        n = {L:k.x, R:k.x - l.w, M:Math.max(d.l, Math.min(d.l + d.w, k.x + (l.w >> 1)) - l.w)}[e.charAt(1)];
        w = {T:k.y, B:k.y - l.h, M:Math.max(d.t, Math.min(d.t + d.h, k.y + (l.h >> 1)) - l.h)}[e.charAt(0)];
        k = Math.max(d.l, n);
        p = Math.max(d.t, w);
        n = Math.min(d.l + d.w, n + l.w);
        w = Math.min(d.t + d.h, w + l.h);
        n -= k;
        w -= p;
        g += l.w - n + (l.h - w);
        if(null == h || g < h.overflow) {
          h = {corner:e, aroundCorner:c.aroundCorner, x:k, y:p, w:n, h:w, overflow:g, spaceAvailable:r}
        }
        return!g
      });
      h.overflow && f && f(a, h.aroundCorner, h.corner, h.spaceAvailable, b);
      c = h.y;
      var k = h.x, n = l.body(a.ownerDocument);
      /relative|absolute/.test(e.get(n, "position")) && (c -= e.get(n, "marginTop"), k -= e.get(n, "marginLeft"));
      n = a.style;
      n.top = c + "px";
      n.left = k + "px";
      n.right = "auto";
      return h
    }
    var d = {TL:"BR", TR:"BL", BL:"TR", BR:"TL"};
    return k.place = {at:function(a, c, f, b, e) {
      f = g.map(f, function(a) {
        var f = {corner:a, aroundCorner:d[a], pos:{x:c.x, y:c.y}};
        b && (f.pos.x += "L" == a.charAt(1) ? b.x : -b.x, f.pos.y += "T" == a.charAt(0) ? b.y : -b.y);
        return f
      });
      return h(a, f, e)
    }, around:function(a, c, f, b, d) {
      function k(a, b) {
        J.push({aroundCorner:a, corner:b, pos:{x:{L:z, R:z + D, M:z + (D >> 1)}[a.charAt(1)], y:{T:v, B:v + H, M:v + (H >> 1)}[a.charAt(0)]}})
      }
      var r;
      if("string" == typeof c || "offsetWidth" in c || "ownerSVGElement" in c) {
        if(r = m.position(c, !0), /^(above|below)/.test(f[0])) {
          var l = m.getBorderExtents(c), p = c.firstChild ? m.getBorderExtents(c.firstChild) : {t:0, l:0, b:0, r:0}, u = m.getBorderExtents(a), t = a.firstChild ? m.getBorderExtents(a.firstChild) : {t:0, l:0, b:0, r:0};
          r.y += Math.min(l.t + p.t, u.t + t.t);
          r.h -= Math.min(l.t + p.t, u.t + t.t) + Math.min(l.b + p.b, u.b + t.b)
        }
      }else {
        r = c
      }
      if(c.parentNode) {
        l = "absolute" == e.getComputedStyle(c).position;
        for(c = c.parentNode;c && 1 == c.nodeType && "BODY" != c.nodeName;) {
          p = m.position(c, !0);
          u = e.getComputedStyle(c);
          /relative|absolute/.test(u.position) && (l = !1);
          if(!l && /hidden|auto|scroll/.test(u.overflow)) {
            var t = Math.min(r.y + r.h, p.y + p.h), x = Math.min(r.x + r.w, p.x + p.w);
            r.x = Math.max(r.x, p.x);
            r.y = Math.max(r.y, p.y);
            r.h = t - r.y;
            r.w = x - r.x
          }
          "absolute" == u.position && (l = !0);
          c = c.parentNode
        }
      }
      var z = r.x, v = r.y, D = "w" in r ? r.w : r.w = r.width, H = "h" in r ? r.h : (n.deprecated("place.around: dijit/place.__Rectangle: { x:" + z + ", y:" + v + ", height:" + r.height + ", width:" + D + " } has been deprecated.  Please use { x:" + z + ", y:" + v + ", h:" + r.height + ", w:" + D + " }", "", "2.0"), r.h = r.height), J = [];
      g.forEach(f, function(a) {
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
      a = h(a, J, d, {w:D, h:H});
      a.aroundNodePos = r;
      return a
    }}
  })
}, "dojo/mouse":function() {
  define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(g, m, e, n, l) {
    function p(e, h) {
      var d = function(a, c) {
        return m(a, e, function(f) {
          if(h) {
            return h(f, c)
          }
          if(!n.isDescendant(f.relatedTarget, a)) {
            return c.call(this, f)
          }
        })
      };
      d.bubble = function(a) {
        return p(e, function(c, f) {
          var b = a(c.target), d = c.relatedTarget;
          if(b && b != (d && 1 == d.nodeType && a(d))) {
            return f.call(b, c)
          }
        })
      };
      return d
    }
    e.add("dom-quirks", l.doc && "BackCompat" == l.doc.compatMode);
    e.add("events-mouseenter", l.doc && "onmouseenter" in l.doc.createElement("div"));
    e.add("events-mousewheel", l.doc && "onmousewheel" in l.doc);
    l = e("dom-quirks") && e("ie") || !e("dom-addeventlistener") ? {LEFT:1, MIDDLE:4, RIGHT:2, isButton:function(e, h) {
      return e.button & h
    }, isLeft:function(e) {
      return e.button & 1
    }, isMiddle:function(e) {
      return e.button & 4
    }, isRight:function(e) {
      return e.button & 2
    }} : {LEFT:0, MIDDLE:1, RIGHT:2, isButton:function(e, h) {
      return e.button == h
    }, isLeft:function(e) {
      return 0 == e.button
    }, isMiddle:function(e) {
      return 1 == e.button
    }, isRight:function(e) {
      return 2 == e.button
    }};
    g.mouseButtons = l;
    g = e("events-mousewheel") ? "mousewheel" : function(e, h) {
      return m(e, "DOMMouseScroll", function(d) {
        d.wheelDelta = -d.detail;
        h.call(this, d)
      })
    };
    return{_eventHandler:p, enter:p("mouseover"), leave:p("mouseout"), wheel:g, isLeft:l.isLeft, isMiddle:l.isMiddle, isRight:l.isRight}
  })
}, "dijit/Tooltip":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff ./_base/manager ./place ./_Widget ./_TemplatedMixin ./BackgroundIframe dojo/text!./templates/Tooltip.html ./main".split(" "), function(g, m, e, n, l, p, k, h, d, a, c, f, b, q, s, r, w, y) {
    function u() {
    }
    var t = m("dijit._MasterTooltip", [q, s], {duration:f.defaultDuration, templateString:w, postCreate:function() {
      this.ownerDocumentBody.appendChild(this.domNode);
      this.bgIframe = new r(this.domNode);
      this.fadeIn = e.fadeIn({node:this.domNode, duration:this.duration, onEnd:h.hitch(this, "_onShow")});
      this.fadeOut = e.fadeOut({node:this.domNode, duration:this.duration, onEnd:h.hitch(this, "_onHide")})
    }, show:function(a, c, f, d, e, g, q) {
      if(!this.aroundNode || !(this.aroundNode === c && this.containerNode.innerHTML == a)) {
        if("playing" == this.fadeOut.status()) {
          this._onDeck = arguments
        }else {
          this.containerNode.innerHTML = a;
          e && this.set("textDir", e);
          this.containerNode.align = d ? "right" : "left";
          var l = b.around(this.domNode, c, f && f.length ? f : x.defaultPosition, !d, h.hitch(this, "orient")), r = l.aroundNodePos;
          "M" == l.corner.charAt(0) && "M" == l.aroundCorner.charAt(0) ? (this.connectorNode.style.top = r.y + (r.h - this.connectorNode.offsetHeight >> 1) - l.y + "px", this.connectorNode.style.left = "") : "M" == l.corner.charAt(1) && "M" == l.aroundCorner.charAt(1) ? this.connectorNode.style.left = r.x + (r.w - this.connectorNode.offsetWidth >> 1) - l.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
          k.set(this.domNode, "opacity", 0);
          this.fadeIn.play();
          this.isShowingNow = !0;
          this.aroundNode = c;
          this.onMouseEnter = g || u;
          this.onMouseLeave = q || u
        }
      }
    }, orient:function(a, b, f, d, e) {
      this.connectorNode.style.top = "";
      var h = d.h;
      d = d.w;
      a.className = "dijitTooltip " + {"MR-ML":"dijitTooltipRight", "ML-MR":"dijitTooltipLeft", "TM-BM":"dijitTooltipAbove", "BM-TM":"dijitTooltipBelow", "BL-TL":"dijitTooltipBelow dijitTooltipABLeft", "TL-BL":"dijitTooltipAbove dijitTooltipABLeft", "BR-TR":"dijitTooltipBelow dijitTooltipABRight", "TR-BR":"dijitTooltipAbove dijitTooltipABRight", "BR-BL":"dijitTooltipRight", "BL-BR":"dijitTooltipLeft"}[b + "-" + f];
      this.domNode.style.width = "auto";
      var k = p.position(this.domNode);
      if(c("ie") || c("trident")) {
        k.w += 2
      }
      var g = Math.min(Math.max(d, 1), k.w);
      p.setMarginBox(this.domNode, {w:g});
      "B" == f.charAt(0) && "B" == b.charAt(0) ? (a = p.position(a), b = this.connectorNode.offsetHeight, a.h > h ? (this.connectorNode.style.top = h - (e.h + b >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(e.h / 2 - b / 2, 0), a.h - b) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom = "");
      return Math.max(0, k.w - d)
    }, _onShow:function() {
      c("ie") && (this.domNode.style.filter = "")
    }, hide:function(a) {
      this._onDeck && this._onDeck[1] == a ? this._onDeck = null : this.aroundNode === a && (this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play());
      this.onMouseEnter = this.onMouseLeave = u
    }, _onHide:function() {
      this.domNode.style.cssText = "";
      this.containerNode.innerHTML = "";
      this._onDeck && (this.show.apply(this, this._onDeck), this._onDeck = null)
    }});
    c("dojo-bidi") && t.extend({_setAutoTextDir:function(a) {
      this.applyTextDir(a);
      g.forEach(a.children, function(a) {
        this._setAutoTextDir(a)
      }, this)
    }, _setTextDirAttr:function(a) {
      this._set("textDir", a);
      "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
    }});
    y.showTooltip = function(a, b, c, f, d, e, h) {
      c && (c = g.map(c, function(a) {
        return{after:"after-centered", before:"before-centered"}[a] || a
      }));
      x._masterTT || (y._masterTT = x._masterTT = new t);
      return x._masterTT.show(a, b, c, f, d, e, h)
    };
    y.hideTooltip = function(a) {
      return x._masterTT && x._masterTT.hide(a)
    };
    var x = m("dijit.Tooltip", q, {label:"", showDelay:400, hideDelay:400, connectId:[], position:[], selector:"", _setConnectIdAttr:function(b) {
      g.forEach(this._connections || [], function(a) {
        g.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this._connectIds = g.filter(h.isArrayLike(b) ? b : b ? [b] : [], function(a) {
        return n.byId(a, this.ownerDocument)
      }, this);
      this._connections = g.map(this._connectIds, function(b) {
        b = n.byId(b, this.ownerDocument);
        var c = this.selector, f = c ? function(b) {
          return a.selector(c, b)
        } : function(a) {
          return a
        }, e = this;
        return[a(b, f(d.enter), function() {
          e._onHover(this)
        }), a(b, f("focusin"), function() {
          e._onHover(this)
        }), a(b, f(d.leave), h.hitch(e, "_onUnHover")), a(b, f("focusout"), h.hitch(e, "set", "state", "DORMANT"))]
      }, this);
      this._set("connectId", b)
    }, addTarget:function(a) {
      a = a.id || a;
      -1 == g.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
    }, removeTarget:function(a) {
      a = g.indexOf(this._connectIds, a.id || a);
      0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
    }, buildRendering:function() {
      this.inherited(arguments);
      l.add(this.domNode, "dijitTooltipData")
    }, startup:function() {
      this.inherited(arguments);
      var a = this.connectId;
      g.forEach(h.isArrayLike(a) ? a : [a], this.addTarget, this)
    }, getContent:function(a) {
      return this.label || this.domNode.innerHTML
    }, state:"DORMANT", _setStateAttr:function(a) {
      if(!(this.state == a || "SHOW TIMER" == a && "SHOWING" == this.state || "HIDE TIMER" == a && "DORMANT" == this.state)) {
        this._hideTimer && (this._hideTimer.remove(), delete this._hideTimer);
        this._showTimer && (this._showTimer.remove(), delete this._showTimer);
        switch(a) {
          case "DORMANT":
            this._connectNode && (x.hide(this._connectNode), delete this._connectNode, this.onHide());
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
            x.show(b, this._connectNode, this.position, !this.isLeftToRight(), this.textDir, h.hitch(this, "set", "state", "SHOWING"), h.hitch(this, "set", "state", "HIDE TIMER"));
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
      g.forEach(this._connections || [], function(a) {
        g.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this.inherited(arguments)
    }});
    x._MasterTooltip = t;
    x.show = y.showTooltip;
    x.hide = y.hideTooltip;
    x.defaultPosition = ["after-centered", "before-centered"];
    return x
  })
}, "dojo/topic":function() {
  define(["./Evented"], function(g) {
    var m = new g;
    return{publish:function(e, g) {
      return m.emit.apply(m, arguments)
    }, subscribe:function(e, g) {
      return m.on.apply(m, arguments)
    }}
  })
}, "dijit/_OnDijitClickMixin":function() {
  define("dojo/on dojo/_base/array dojo/keys dojo/_base/declare dojo/has ./a11yclick".split(" "), function(g, m, e, n, l, p) {
    g = n("dijit._OnDijitClickMixin", null, {connect:function(e, h, d) {
      return this.inherited(arguments, [e, "ondijitclick" == h ? p : h, d])
    }});
    g.a11yclick = p;
    return g
  })
}, "dojo/Deferred":function() {
  define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "require"], function(g, m, e, n, l) {
    var p = Object.freeze || function() {
    }, k = function(a, b, c, d, e) {
      for(e = 0;e < a.length;e++) {
        h(a[e], b, c, d)
      }
    }, h = function(c, b, e, h) {
      h = c[b];
      var k = c.deferred;
      if(h) {
        try {
          var g = h(e);
          0 === b ? "undefined" !== typeof g && a(k, b, g) : g && "function" === typeof g.then ? (c.cancel = g.cancel, g.then(d(k, 1), d(k, 2), d(k, 0))) : a(k, 1, g)
        }catch(l) {
          a(k, 2, l)
        }
      }else {
        a(k, b, e)
      }
    }, d = function(c, b) {
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
      var b = this.promise = new n, d = this, g, l, m = !1, y = [];
      this.isResolved = b.isResolved = function() {
        return 1 === g
      };
      this.isRejected = b.isRejected = function() {
        return 2 === g
      };
      this.isFulfilled = b.isFulfilled = function() {
        return!!g
      };
      this.isCanceled = b.isCanceled = function() {
        return m
      };
      this.progress = function(a, c) {
        if(g) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        k(y, 0, a, null, d);
        return b
      };
      this.resolve = function(a, c) {
        if(g) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        k(y, g = 1, l = a, null, d);
        y = null;
        return b
      };
      var u = this.reject = function(a, c) {
        if(g) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
          return b
        }
        k(y, g = 2, l = a, void 0, d);
        y = null;
        return b
      };
      this.then = b.then = function(a, f, d) {
        var e = [d, a, f];
        e.cancel = b.cancel;
        e.deferred = new c(function(a) {
          return e.cancel && e.cancel(a)
        });
        g && !y ? h(e, g, l, void 0) : y.push(e);
        return e.deferred.promise
      };
      this.cancel = b.cancel = function(b, c) {
        if(g) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
        }else {
          if(a) {
            var d = a(b);
            b = "undefined" === typeof d ? b : d
          }
          m = !0;
          if(g) {
            if(2 === g && l === b) {
              return b
            }
          }else {
            return"undefined" === typeof b && (b = new e), u(b), b
          }
        }
      };
      p(b)
    };
    c.prototype.toString = function() {
      return"[object Deferred]"
    };
    l && l(c);
    return c
  })
}, "dijit/a11yclick":function() {
  define(["dojo/keys", "dojo/mouse", "dojo/on", "dojo/touch"], function(g, m, e, n) {
    function l(e) {
      if((e.keyCode === g.ENTER || e.keyCode === g.SPACE) && !/input|button|textarea/i.test(e.target.nodeName)) {
        for(e = e.target;e;e = e.parentNode) {
          if(e.dojoClick) {
            return!0
          }
        }
      }
    }
    var p;
    e(document, "keydown", function(e) {
      l(e) ? (p = e.target, e.preventDefault()) : p = null
    });
    e(document, "keyup", function(h) {
      l(h) && h.target == p && (p = null, e.emit(h.target, "click", {cancelable:!0, bubbles:!0, ctrlKey:h.ctrlKey, shiftKey:h.shiftKey, metaKey:h.metaKey, altKey:h.altKey, _origType:h.type}))
    });
    var k = function(h, d) {
      h.dojoClick = !0;
      return e(h, "click", d)
    };
    k.click = k;
    k.press = function(h, d) {
      var a = e(h, n.press, function(a) {
        ("mousedown" != a.type || m.isLeft(a)) && d(a)
      }), c = e(h, "keydown", function(a) {
        (a.keyCode === g.ENTER || a.keyCode === g.SPACE) && d(a)
      });
      return{remove:function() {
        a.remove();
        c.remove()
      }}
    };
    k.release = function(h, d) {
      var a = e(h, n.release, function(a) {
        ("mouseup" != a.type || m.isLeft(a)) && d(a)
      }), c = e(h, "keyup", function(a) {
        (a.keyCode === g.ENTER || a.keyCode === g.SPACE) && d(a)
      });
      return{remove:function() {
        a.remove();
        c.remove()
      }}
    };
    k.move = n.move;
    return k
  })
}, "dojo/_base/Color":function() {
  define(["./kernel", "./lang", "./array", "./config"], function(g, m, e, n) {
    var l = g.Color = function(e) {
      e && this.setColor(e)
    };
    l.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:n.transparentColor || [0, 0, 0, 0]};
    m.extend(l, {r:255, g:255, b:255, a:1, _set:function(e, g, h, d) {
      this.r = e;
      this.g = g;
      this.b = h;
      this.a = d
    }, setColor:function(e) {
      m.isString(e) ? l.fromString(e, this) : m.isArray(e) ? l.fromArray(e, this) : (this._set(e.r, e.g, e.b, e.a), e instanceof l || this.sanitize());
      return this
    }, sanitize:function() {
      return this
    }, toRgb:function() {
      return[this.r, this.g, this.b]
    }, toRgba:function() {
      return[this.r, this.g, this.b, this.a]
    }, toHex:function() {
      return"#" + e.map(["r", "g", "b"], function(e) {
        e = this[e].toString(16);
        return 2 > e.length ? "0" + e : e
      }, this).join("")
    }, toCss:function(e) {
      var g = this.r + ", " + this.g + ", " + this.b;
      return(e ? "rgba(" + g + ", " + this.a : "rgb(" + g) + ")"
    }, toString:function() {
      return this.toCss(!0)
    }});
    l.blendColors = g.blendColors = function(g, k, h, d) {
      var a = d || new l;
      e.forEach(["r", "g", "b", "a"], function(c) {
        a[c] = g[c] + (k[c] - g[c]) * h;
        "a" != c && (a[c] = Math.round(a[c]))
      });
      return a.sanitize()
    };
    l.fromRgb = g.colorFromRgb = function(e, g) {
      var h = e.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
      return h && l.fromArray(h[1].split(/\s*,\s*/), g)
    };
    l.fromHex = g.colorFromHex = function(g, k) {
      var h = k || new l, d = 4 == g.length ? 4 : 8, a = (1 << d) - 1;
      g = Number("0x" + g.substr(1));
      if(isNaN(g)) {
        return null
      }
      e.forEach(["b", "g", "r"], function(c) {
        var f = g & a;
        g >>= d;
        h[c] = 4 == d ? 17 * f : f
      });
      h.a = 1;
      return h
    };
    l.fromArray = g.colorFromArray = function(e, g) {
      var h = g || new l;
      h._set(Number(e[0]), Number(e[1]), Number(e[2]), Number(e[3]));
      isNaN(h.a) && (h.a = 1);
      return h.sanitize()
    };
    l.fromString = g.colorFromString = function(e, g) {
      var h = l.named[e];
      return h && l.fromArray(h, g) || l.fromRgb(e, g) || l.fromHex(e, g)
    };
    return l
  })
}, "dojo/request":function() {
  define(["./request/default!"], function(g) {
    return g
  })
}, "dijit/hccss":function() {
  define(["dojo/dom-class", "dojo/hccss", "dojo/domReady", "dojo/_base/window"], function(g, m, e, n) {
    e(function() {
      m("highcontrast") && g.add(n.body(), "dijit_a11y")
    });
    return m
  })
}, "dojo/selector/_loader":function() {
  define(["../has", "require"], function(g, m) {
    if("undefined" !== typeof document) {
      var e = document.createElement("div");
      g.add("dom-qsa2.1", !!e.querySelectorAll);
      g.add("dom-qsa3", function() {
        try {
          return e.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == e.querySelectorAll(".TEST:empty").length
        }catch(g) {
        }
      })
    }
    var n;
    return{load:function(e, p, k, h) {
      if(h && h.isBuild) {
        k()
      }else {
        h = m;
        e = "default" == e ? g("config-selectorEngine") || "css3" : e;
        e = "css2" == e || "lite" == e ? "./lite" : "css2.1" == e ? g("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == e ? g("dom-qsa3") ? "./lite" : "./acme" : "acme" == e ? "./acme" : (h = p) && e;
        if("?" == e.charAt(e.length - 1)) {
          e = e.substring(0, e.length - 1);
          var d = !0
        }
        if(d && (g("dom-compliant-qsa") || n)) {
          return k(n)
        }
        h([e], function(a) {
          "./lite" != e && (n = a);
          k(a)
        })
      }
    }}
  })
}, "dijit/_TemplatedMixin":function() {
  define("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(g, m, e, n, l, p, k, h) {
    var d = m("dijit._TemplatedMixin", h, {templateString:null, templatePath:null, _skipNodeCache:!1, searchContainerNode:!0, _stringRepl:function(a) {
      var c = this.declaredClass, f = this;
      return k.substitute(a, this, function(a, d) {
        "!" == d.charAt(0) && (a = n.getObject(d.substr(1), !1, f));
        if("undefined" == typeof a) {
          throw Error(c + " template:" + d);
        }
        return null == a ? "" : "!" == d.charAt(0) ? a : this._escapeValue("" + a)
      }, this)
    }, _escapeValue:function(a) {
      return a.replace(/["'<>&]/g, function(a) {
        return{"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;"}[a]
      })
    }, buildRendering:function() {
      if(!this._rendered) {
        this.templateString || (this.templateString = g(this.templatePath, {sanitize:!0}));
        var a = d.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), c;
        if(n.isString(a)) {
          if(c = e.toDom(this._stringRepl(a), this.ownerDocument), 1 != c.nodeType) {
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
    d._templateCache = {};
    d.getCachedTemplate = function(a, c, f) {
      var b = d._templateCache, g = a, h = b[g];
      if(h) {
        try {
          if(!h.ownerDocument || h.ownerDocument == (f || document)) {
            return h
          }
        }catch(l) {
        }
        e.destroy(h)
      }
      a = k.trim(a);
      if(c || a.match(/\$\{([^\}]+)\}/g)) {
        return b[g] = a
      }
      c = e.toDom(a, f);
      if(1 != c.nodeType) {
        throw Error("Invalid template: " + a);
      }
      return b[g] = c
    };
    p("ie") && l(window, "unload", function() {
      var a = d._templateCache, c;
      for(c in a) {
        var f = a[c];
        "object" == typeof f && e.destroy(f);
        delete a[c]
      }
    });
    return d
  })
}, "dojo/promise/Promise":function() {
  define(["../_base/lang"], function(g) {
    function m() {
      throw new TypeError("abstract");
    }
    return g.extend(function() {
    }, {then:function(e, g, l) {
      m()
    }, cancel:function(e, g) {
      m()
    }, isResolved:function() {
      m()
    }, isRejected:function() {
      m()
    }, isFulfilled:function() {
      m()
    }, isCanceled:function() {
      m()
    }, always:function(e) {
      return this.then(e, e)
    }, otherwise:function(e) {
      return this.then(null, e)
    }, trace:function() {
      return this
    }, traceRejected:function() {
      return this
    }, toString:function() {
      return"[object Promise]"
    }})
  })
}, "dojo/selector/lite":function() {
  define(["../has", "../_base/kernel"], function(g, m) {
    var e = document.createElement("div"), n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector, l = e.querySelectorAll, p = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    g.add("dom-matches-selector", !!n);
    g.add("dom-qsa", !!l);
    var k = function(c, f) {
      if(a && -1 < c.indexOf(",")) {
        return a(c, f)
      }
      var b = f ? f.ownerDocument || f : m.doc || document, e = (l ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(c);
      f = f || b;
      if(e) {
        if(e[2]) {
          var g = m.byId ? m.byId(e[2], b) : b.getElementById(e[2]);
          if(!g || e[1] && e[1] != g.tagName.toLowerCase()) {
            return[]
          }
          if(f != b) {
            for(b = g;b != f;) {
              if(b = b.parentNode, !b) {
                return[]
              }
            }
          }
          return e[3] ? k(e[3], g) : [g]
        }
        if(e[3] && f.getElementsByClassName) {
          return f.getElementsByClassName(e[4])
        }
        if(e[5]) {
          if(g = f.getElementsByTagName(e[5]), e[4] || e[6]) {
            c = (e[4] || "") + e[6]
          }else {
            return g
          }
        }
      }
      if(l) {
        return 1 === f.nodeType && "object" !== f.nodeName.toLowerCase() ? h(f, c, f.querySelectorAll) : f.querySelectorAll(c)
      }
      g || (g = f.getElementsByTagName("*"));
      for(var e = [], b = 0, r = g.length;b < r;b++) {
        var n = g[b];
        1 == n.nodeType && d(n, c, f) && e.push(n)
      }
      return e
    }, h = function(a, f, b) {
      var d = a, e = a.getAttribute("id"), g = e || "__dojo__", h = a.parentNode, k = /^\s*[+~]/.test(f);
      if(k && !h) {
        return[]
      }
      e ? g = g.replace(/'/g, "\\$\x26") : a.setAttribute("id", g);
      k && h && (a = a.parentNode);
      f = f.match(p);
      for(h = 0;h < f.length;h++) {
        f[h] = "[id\x3d'" + g + "'] " + f[h]
      }
      f = f.join(",");
      try {
        return b.call(a, f)
      }finally {
        e || d.removeAttribute("id")
      }
    };
    if(!g("dom-matches-selector")) {
      var d = function() {
        function a(b, c, f) {
          var d = c.charAt(0);
          if('"' == d || "'" == d) {
            c = c.slice(1, -1)
          }
          c = c.replace(/\\/g, "");
          var e = k[f || ""];
          return function(a) {
            return(a = a.getAttribute(b)) && e(a, c)
          }
        }
        function f(a) {
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
        function d(a, b) {
          return a ? function(c, f) {
            return b(c) && a(c, f)
          } : b
        }
        var g = "div" == e.tagName ? "toLowerCase" : "toUpperCase", h = {"":function(a) {
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
        }}, l = {};
        return function(e, g, k) {
          var m = l[g];
          if(!m) {
            if(g.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, function(e, g, k, l, n, p, s) {
              l ? m = d(m, h[k || ""](l.replace(/\\/g, ""))) : g ? m = (" " == g ? f : b)(m) : n && (m = d(m, a(n, s, p)));
              return""
            })) {
              throw Error("Syntax error in query");
            }
            if(!m) {
              return!0
            }
            l[g] = m
          }
          return m(e, k)
        }
      }()
    }
    if(!g("dom-qsa")) {
      var a = function(a, f) {
        for(var b = a.match(p), d = [], e = 0;e < b.length;e++) {
          a = new String(b[e].replace(/\s*$/, ""));
          a.indexOf = escape;
          for(var g = k(a, f), h = 0, l = g.length;h < l;h++) {
            var m = g[h];
            d[m.sourceIndex] = m
          }
        }
        b = [];
        for(e in d) {
          b.push(d[e])
        }
        return b
      }
    }
    k.match = n ? function(a, d, b) {
      return b && 9 != b.nodeType ? h(b, d, function(b) {
        return n.call(a, b)
      }) : n.call(a, d)
    } : d;
    return k
  })
}, "dojo/on":function() {
  define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(g, m, e) {
    function n(a, b, c, g, k) {
      if(g = b.match(/(.*):(.*)/)) {
        return b = g[2], g = g[1], h.selector(g, b).call(k, a, c)
      }
      e("touch") && (d.test(b) && (c = v(c)), !e("event-orientationchange") && "orientationchange" == b && (b = "resize", a = window, c = v(c)));
      q && (c = q(c));
      if(a.addEventListener) {
        var l = b in f, r = l ? f[b] : b;
        a.addEventListener(r, c, l);
        return{remove:function() {
          a.removeEventListener(r, c, l)
        }}
      }
      if(y && a.attachEvent) {
        return y(a, "on" + b, c)
      }
      throw Error("Target must be an event emitter");
    }
    function l() {
      this.cancelable = !1;
      this.defaultPrevented = !0
    }
    function p() {
      this.bubbles = !1
    }
    var k = window.ScriptEngineMajorVersion;
    e.add("jscript", k && k() + ScriptEngineMinorVersion() / 10);
    e.add("event-orientationchange", e("touch") && !e("android"));
    e.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
    e.add("event-focusin", function(a, b, c) {
      return"onfocusin" in c
    });
    e("touch") && e.add("touch-can-modify-event-delegate", function() {
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
    var h = function(a, b, c, d) {
      return"function" == typeof a.on && "function" != typeof b && !a.nodeType ? a.on(b, c) : h.parse(a, b, c, n, d, this)
    };
    h.pausable = function(a, b, c, d) {
      var f;
      a = h(a, b, function() {
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
    h.once = function(a, b, c, d) {
      var f = h(a, b, function() {
        f.remove();
        return c.apply(this, arguments)
      });
      return f
    };
    h.parse = function(a, b, c, d, f, e) {
      var g;
      if(b.call) {
        return b.call(e, a, c)
      }
      b instanceof Array ? g = b : -1 < b.indexOf(",") && (g = b.split(/\s*,\s*/));
      if(g) {
        var k = [];
        b = 0;
        for(var l;l = g[b++];) {
          k.push(h.parse(a, l, c, d, f, e))
        }
        k.remove = function() {
          for(var a = 0;a < k.length;a++) {
            k[a].remove()
          }
        };
        return k
      }
      return d(a, b, c, f, e)
    };
    var d = /^touch/;
    h.matches = function(a, b, c, d, f) {
      f = f && "function" == typeof f.matches ? f : m.query;
      d = !1 !== d;
      1 != a.nodeType && (a = a.parentNode);
      for(;!f.matches(a, b, c);) {
        if(a == c || !1 === d || !(a = a.parentNode) || 1 != a.nodeType) {
          return!1
        }
      }
      return a
    };
    h.selector = function(a, b, c) {
      return function(d, f) {
        function e(b) {
          return h.matches(b, a, d, c, g)
        }
        var g = "function" == typeof a ? {matches:a} : this, k = b.bubble;
        return k ? h(d, k(e), f) : h(d, b, function(a) {
          var b = e(a.target);
          if(b) {
            return f.call(b, a)
          }
        })
      }
    };
    var a = [].slice, c = h.emit = function(b, c, d) {
      var f = a.call(arguments, 2), e = "on" + c;
      if("parentNode" in b) {
        var g = f[0] = {}, h;
        for(h in d) {
          g[h] = d[h]
        }
        g.preventDefault = l;
        g.stopPropagation = p;
        g.target = b;
        g.type = c;
        d = g
      }
      do {
        b[e] && b[e].apply(b, f)
      }while(d && d.bubbles && (b = b.parentNode));
      return d && d.cancelable && d
    }, f = e("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
    if(!e("event-stopimmediatepropagation")) {
      var b = function() {
        this.modified = this.immediatelyStopped = !0
      }, q = function(a) {
        return function(c) {
          if(!c.immediatelyStopped) {
            return c.stopImmediatePropagation = b, a.apply(this, arguments)
          }
        }
      }
    }
    if(e("dom-addeventlistener")) {
      h.emit = function(a, b, d) {
        if(a.dispatchEvent && document.createEvent) {
          var f = (a.ownerDocument || document).createEvent("HTMLEvents");
          f.initEvent(b, !!d.bubbles, !!d.cancelable);
          for(var e in d) {
            e in f || (f[e] = d[e])
          }
          return a.dispatchEvent(f) && f
        }
        return c.apply(h, arguments)
      }
    }else {
      h._fixEvent = function(a, b) {
        a || (a = (b && (b.ownerDocument || b.document || b).parentWindow || window).event);
        if(!a) {
          return a
        }
        try {
          s && (a.type == s.type && a.srcElement == s.target) && (a = s)
        }catch(c) {
        }
        if(!a.target) {
          switch(a.target = a.srcElement, a.currentTarget = b || a.srcElement, "mouseover" == a.type && (a.relatedTarget = a.fromElement), "mouseout" == a.type && (a.relatedTarget = a.toElement), a.stopPropagation || (a.stopPropagation = u, a.preventDefault = t), a.type) {
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
      var s, r = function(a) {
        this.handle = a
      };
      r.prototype.remove = function() {
        delete _dojoIEListeners_[this.handle]
      };
      var w = function(a) {
        return function(b) {
          b = h._fixEvent(b, this);
          var c = a.call(this, b);
          b.modified && (s || setTimeout(function() {
            s = null
          }), s = b);
          return c
        }
      }, y = function(a, b, c) {
        c = w(c);
        if(((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > e("jscript")) && !e("config-_allow_leaks")) {
          "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
          var d = a[b];
          if(!d || !d.listeners) {
            var f = d, d = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
            d.listeners = [];
            a[b] = d;
            d.global = this;
            f && d.listeners.push(_dojoIEListeners_.push(f) - 1)
          }
          d.listeners.push(a = d.global._dojoIEListeners_.push(c) - 1);
          return new r(a)
        }
        return g.after(a, b, c, !0)
      }, u = function() {
        this.cancelBubble = !0
      }, t = h._preventDefault = function() {
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
    if(e("touch")) {
      var x = function() {
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
              if(e("touch-can-modify-event-delegate")) {
                x.prototype = b, c = new x
              }else {
                var c = {}, g;
                for(g in b) {
                  c[g] = b[g]
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
              var d = c.changedTouches[0], h;
              for(h in d) {
                delete c[h], c[h] = d[h]
              }
            }
          }
          return a.call(this, c)
        }
      }
    }
    return h
  })
}, "dojo/_base/sniff":function() {
  define(["./kernel", "./lang", "../sniff"], function(g, m, e) {
    g._name = "browser";
    m.mixin(g, {isBrowser:!0, isFF:e("ff"), isIE:e("ie"), isKhtml:e("khtml"), isWebKit:e("webkit"), isMozilla:e("mozilla"), isMoz:e("mozilla"), isOpera:e("opera"), isSafari:e("safari"), isChrome:e("chrome"), isMac:e("mac"), isIos:e("ios"), isAndroid:e("android"), isWii:e("wii"), isQuirks:e("quirks"), isAir:e("air")});
    return e
  })
}, "dojo/errors/create":function() {
  define(["../_base/lang"], function(g) {
    return function(m, e, n, l) {
      n = n || Error;
      var p = function(g) {
        if(n === Error) {
          Error.captureStackTrace && Error.captureStackTrace(this, p);
          var h = Error.call(this, g), d;
          for(d in h) {
            h.hasOwnProperty(d) && (this[d] = h[d])
          }
          this.message = g;
          this.stack = h.stack
        }else {
          n.apply(this, arguments)
        }
        e && e.apply(this, arguments)
      };
      p.prototype = g.delegate(n.prototype, l);
      p.prototype.name = m;
      return p.prototype.constructor = p
    }
  })
}, "dojo/_base/array":function() {
  define(["./kernel", "../has", "./lang"], function(g, m, e) {
    function n(a) {
      return k[a] = new Function("item", "index", "array", a)
    }
    function l(a) {
      var c = !a;
      return function(d, b, e) {
        var g = 0, h = d && d.length || 0, l;
        h && "string" == typeof d && (d = d.split(""));
        "string" == typeof b && (b = k[b] || n(b));
        if(e) {
          for(;g < h;++g) {
            if(l = !b.call(e, d[g], g, d), a ^ l) {
              return!l
            }
          }
        }else {
          for(;g < h;++g) {
            if(l = !b(d[g], g, d), a ^ l) {
              return!l
            }
          }
        }
        return c
      }
    }
    function p(a) {
      var c = 1, f = 0, b = 0;
      a || (c = f = b = -1);
      return function(e, g, k, l) {
        if(l && 0 < c) {
          return d.lastIndexOf(e, g, k)
        }
        l = e && e.length || 0;
        var m = a ? l + b : f;
        k === h ? k = a ? f : l + b : 0 > k ? (k = l + k, 0 > k && (k = f)) : k = k >= l ? l + b : k;
        for(l && "string" == typeof e && (e = e.split(""));k != m;k += c) {
          if(e[k] == g) {
            return k
          }
        }
        return-1
      }
    }
    var k = {}, h, d = {every:l(!1), some:l(!0), indexOf:p(!0), lastIndexOf:p(!1), forEach:function(a, c, d) {
      var b = 0, e = a && a.length || 0;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = k[c] || n(c));
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
      var e = 0, g = a && a.length || 0;
      b = new (b || Array)(g);
      g && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = k[c] || n(c));
      if(d) {
        for(;e < g;++e) {
          b[e] = c.call(d, a[e], e, a)
        }
      }else {
        for(;e < g;++e) {
          b[e] = c(a[e], e, a)
        }
      }
      return b
    }, filter:function(a, c, d) {
      var b = 0, e = a && a.length || 0, g = [], h;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof c && (c = k[c] || n(c));
      if(d) {
        for(;b < e;++b) {
          h = a[b], c.call(d, h, b, a) && g.push(h)
        }
      }else {
        for(;b < e;++b) {
          h = a[b], c(h, b, a) && g.push(h)
        }
      }
      return g
    }, clearCache:function() {
      k = {}
    }};
    e.mixin(g, d);
    return d
  })
}, "dijit/_Widget":function() {
  define("dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/has dojo/_base/kernel dojo/_base/lang dojo/query dojo/ready ./registry ./_WidgetBase ./_OnDijitClickMixin ./_FocusMixin dojo/uacss ./hccss".split(" "), function(g, m, e, n, l, p, k, h, d, a, c, f, b) {
    function q() {
    }
    function s(a) {
      return function(b, c, d, f) {
        return b && "string" == typeof c && b[c] == q ? b.on(c.substring(2).toLowerCase(), k.hitch(d, f)) : a.apply(e, arguments)
      }
    }
    g.around(e, "connect", s);
    p.connect && g.around(p, "connect", s);
    g = n("dijit._Widget", [c, f, b], {onClick:q, onDblClick:q, onKeyDown:q, onKeyPress:q, onKeyUp:q, onMouseDown:q, onMouseMove:q, onMouseOut:q, onMouseOver:q, onMouseLeave:q, onMouseEnter:q, onMouseUp:q, constructor:function(a) {
      this._toConnect = {};
      for(var b in a) {
        this[b] === q && (this._toConnect[b.replace(/^on/, "").toLowerCase()] = a[b], delete a[b])
      }
    }, postCreate:function() {
      this.inherited(arguments);
      for(var a in this._toConnect) {
        this.on(a, this._toConnect[a])
      }
      delete this._toConnect
    }, on:function(a, b) {
      return this[this._onMap(a)] === q ? e.connect(this.domNode, a.toLowerCase(), this, b) : this.inherited(arguments)
    }, _setFocusedAttr:function(a) {
      this._focused = a;
      this._set("focused", a)
    }, setAttribute:function(a, b) {
      p.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
      this.set(a, b)
    }, attr:function(a, b) {
      return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
    }, getDescendants:function() {
      p.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
      return this.containerNode ? h("[widgetId]", this.containerNode).map(a.byNode) : []
    }, _onShow:function() {
      this.onShow()
    }, onShow:function() {
    }, onHide:function() {
    }, onClose:function() {
      return!0
    }});
    l("dijit-legacy-requires") && d(0, function() {
      require(["dijit/_base"])
    });
    return g
  })
}, "dijit/_FocusMixin":function() {
  define(["./focus", "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function(g, m, e, n) {
    n.extend(m, {focused:!1, onFocus:function() {
    }, onBlur:function() {
    }, _onFocus:function() {
      this.onFocus()
    }, _onBlur:function() {
      this.onBlur()
    }});
    return e("dijit._FocusMixin", null, {_focusManager:g})
  })
}, "dijit/focus":function() {
  define("dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "), function(g, m, e, n, l, p, k, h, d, a, c, f, b, q, s, r, w) {
    var y, u, t = new (m([f, k], {curNode:null, activeStack:[], constructor:function() {
      var a = h.hitch(this, function(a) {
        e.isDescendant(this.curNode, a) && this.set("curNode", null);
        e.isDescendant(this.prevNode, a) && this.set("prevNode", null)
      });
      g.before(p, "empty", a);
      g.before(p, "destroy", a)
    }, registerIframe:function(a) {
      return this.registerWin(a.contentWindow, a)
    }, registerWin:function(a, b) {
      var e = this, f = a.document && a.document.body;
      if(f) {
        var g = c("pointer-events") ? "pointerdown" : c("MSPointer") ? "MSPointerDown" : c("touch-events") ? "mousedown, touchstart" : "mousedown", h = d(a.document, g, function(a) {
          if(!a || !(a.target && null == a.target.parentNode)) {
            e._onTouchNode(b || a.target, "mouse")
          }
        }), k = d(f, "focusin", function(a) {
          if(a.target.tagName) {
            var c = a.target.tagName.toLowerCase();
            "#document" == c || "body" == c || (s.isFocusable(a.target) ? e._onFocusNode(b || a.target) : e._onTouchNode(b || a.target))
          }
        }), l = d(f, "focusout", function(a) {
          e._onBlurNode(b || a.target)
        });
        return{remove:function() {
          h.remove();
          k.remove();
          l.remove();
          f = h = k = l = null
        }}
      }
    }, _onBlurNode:function(a) {
      a = (new Date).getTime();
      a < y + 100 || (this._clearFocusTimer && clearTimeout(this._clearFocusTimer), this._clearFocusTimer = setTimeout(h.hitch(this, function() {
        this.set("prevNode", this.curNode);
        this.set("curNode", null)
      }), 0), this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), a < u + 100 || (this._clearActiveWidgetsTimer = setTimeout(h.hitch(this, function() {
        delete this._clearActiveWidgetsTimer;
        this._setStack([])
      }), 0)))
    }, _onTouchNode:function(a, c) {
      u = (new Date).getTime();
      this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
      l.contains(a, "dijitPopup") && (a = a.firstChild);
      var d = [];
      try {
        for(;a;) {
          var e = n.get(a, "dijitPopupParent");
          if(e) {
            a = r.byId(e).domNode
          }else {
            if(a.tagName && "body" == a.tagName.toLowerCase()) {
              if(a === b.body()) {
                break
              }
              a = q.get(a.ownerDocument).frameElement
            }else {
              var f = a.getAttribute && a.getAttribute("widgetId"), g = f && r.byId(f);
              g && !("mouse" == c && g.get("disabled")) && d.unshift(f);
              a = a.parentNode
            }
          }
        }
      }catch(h) {
      }
      this._setStack(d, c)
    }, _onFocusNode:function(a) {
      a && 9 != a.nodeType && (y = (new Date).getTime(), this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
    }, _setStack:function(a, b) {
      var c = this.activeStack, d = c.length - 1, e = a.length - 1;
      if(a[e] != c[d]) {
        this.set("activeStack", a);
        var f;
        for(f = d;0 <= f && c[f] != a[f];f--) {
          if(d = r.byId(c[f])) {
            d._hasBeenBlurred = !0, d.set("focused", !1), d._focusManager == this && d._onBlur(b), this.emit("widget-blur", d, b)
          }
        }
        for(f++;f <= e;f++) {
          if(d = r.byId(a[f])) {
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
      var a = t.registerWin(q.get(document));
      c("ie") && d(window, "unload", function() {
        a && (a.remove(), a = null)
      })
    });
    w.focus = function(a) {
      t.focus(a)
    };
    for(var x in t) {
      /^_/.test(x) || (w.focus[x] = "function" == typeof t[x] ? h.hitch(t, x) : t[x])
    }
    t.watch(function(a, b, c) {
      w.focus[a] = c
    });
    return t
  })
}, "dijit/main":function() {
  define(["dojo/_base/kernel"], function(g) {
    return g.dijit
  })
}, "dojo/dom-class":function() {
  define(["./_base/lang", "./_base/array", "./dom"], function(g, m, e) {
    function n(d) {
      if("string" == typeof d || d instanceof String) {
        if(d && !p.test(d)) {
          return k[0] = d, k
        }
        d = d.split(p);
        d.length && !d[0] && d.shift();
        d.length && !d[d.length - 1] && d.pop();
        return d
      }
      return!d ? [] : m.filter(d, function(a) {
        return a
      })
    }
    var l, p = /\s+/, k = [""], h = {};
    return l = {contains:function(d, a) {
      return 0 <= (" " + e.byId(d).className + " ").indexOf(" " + a + " ")
    }, add:function(d, a) {
      d = e.byId(d);
      a = n(a);
      var c = d.className, f, c = c ? " " + c + " " : " ";
      f = c.length;
      for(var b = 0, g = a.length, h;b < g;++b) {
        (h = a[b]) && 0 > c.indexOf(" " + h + " ") && (c += h + " ")
      }
      f < c.length && (d.className = c.substr(1, c.length - 2))
    }, remove:function(d, a) {
      d = e.byId(d);
      var c;
      if(void 0 !== a) {
        a = n(a);
        c = " " + d.className + " ";
        for(var f = 0, b = a.length;f < b;++f) {
          c = c.replace(" " + a[f] + " ", " ")
        }
        c = g.trim(c)
      }else {
        c = ""
      }
      d.className != c && (d.className = c)
    }, replace:function(d, a, c) {
      d = e.byId(d);
      h.className = d.className;
      l.remove(h, c);
      l.add(h, a);
      d.className !== h.className && (d.className = h.className)
    }, toggle:function(d, a, c) {
      d = e.byId(d);
      if(void 0 === c) {
        a = n(a);
        for(var f = 0, b = a.length, g;f < b;++f) {
          g = a[f], l[l.contains(d, g) ? "remove" : "add"](d, g)
        }
      }else {
        l[c ? "add" : "remove"](d, a)
      }
      return c
    }}
  })
}, "dojo/_base/window":function() {
  define(["./kernel", "./lang", "../sniff"], function(g, m, e) {
    var n = {global:g.global, doc:g.global.document || null, body:function(e) {
      e = e || g.doc;
      return e.body || e.getElementsByTagName("body")[0]
    }, setContext:function(e, m) {
      g.global = n.global = e;
      g.doc = n.doc = m
    }, withGlobal:function(e, m, k, h) {
      var d = g.global;
      try {
        return g.global = n.global = e, n.withDoc.call(null, e.document, m, k, h)
      }finally {
        g.global = n.global = d
      }
    }, withDoc:function(l, m, k, h) {
      var d = n.doc, a = e("quirks"), c = e("ie"), f, b, q;
      try {
        g.doc = n.doc = l;
        g.isQuirks = e.add("quirks", "BackCompat" == g.doc.compatMode, !0, !0);
        if(e("ie") && (q = l.parentWindow) && q.navigator) {
          f = parseFloat(q.navigator.appVersion.split("MSIE ")[1]) || void 0, (b = l.documentMode) && (5 != b && Math.floor(f) != b) && (f = b), g.isIE = e.add("ie", f, !0, !0)
        }
        k && "string" == typeof m && (m = k[m]);
        return m.apply(k, h || [])
      }finally {
        g.doc = n.doc = d, g.isQuirks = e.add("quirks", a, !0, !0), g.isIE = e.add("ie", c, !0, !0)
      }
    }};
    m.mixin(g, n);
    return n
  })
}, "dijit/Destroyable":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare"], function(g, m, e) {
    return e("dijit.Destroyable", null, {destroy:function(e) {
      this._destroyed = !0
    }, own:function() {
      var e = ["destroyRecursive", "destroy", "remove"];
      g.forEach(arguments, function(l) {
        function p() {
          h.remove();
          g.forEach(d, function(a) {
            a.remove()
          })
        }
        var k, h = m.before(this, "destroy", function(a) {
          l[k](a)
        }), d = [];
        l.then ? (k = "cancel", l.then(p, p)) : g.forEach(e, function(a) {
          "function" === typeof l[a] && (k || (k = a), d.push(m.after(l, a, p, !0)))
        })
      }, this);
      return arguments
    }})
  })
}, "dojo/cache":function() {
  define(["./_base/kernel", "./text"], function(g) {
    return g.cache
  })
}, "dojo/_base/config":function() {
  define(["../has", "require"], function(g, m) {
    var e = {}, n = m.rawConfig, l;
    for(l in n) {
      e[l] = n[l]
    }
    if(!e.locale && "undefined" != typeof navigator && (n = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage)) {
      e.locale = n.toLowerCase()
    }
    return e
  })
}, "dojo/_base/event":function() {
  define(["./kernel", "../on", "../has", "../dom-geometry"], function(g, m, e, n) {
    if(m._fixEvent) {
      var l = m._fixEvent;
      m._fixEvent = function(e, g) {
        (e = l(e, g)) && n.normalizeEvent(e);
        return e
      }
    }
    var p = {fix:function(e, g) {
      return m._fixEvent ? m._fixEvent(e, g) : e
    }, stop:function(g) {
      e("dom-addeventlistener") || g && g.preventDefault ? (g.preventDefault(), g.stopPropagation()) : (g = g || window.event, g.cancelBubble = !0, m._preventDefault.call(g))
    }};
    g.fixEvent = p.fix;
    g.stopEvent = p.stop;
    return p
  })
}, "dojo/sniff":function() {
  define(["./has"], function(g) {
    var m = navigator, e = m.userAgent, m = m.appVersion, n = parseFloat(m);
    g.add("air", 0 <= e.indexOf("AdobeAIR"));
    g.add("wp", parseFloat(e.split("Windows Phone")[1]) || void 0);
    g.add("msapp", parseFloat(e.split("MSAppHost/")[1]) || void 0);
    g.add("khtml", 0 <= m.indexOf("Konqueror") ? n : void 0);
    g.add("edge", parseFloat(e.split("Edge/")[1]) || void 0);
    g.add("opr", parseFloat(e.split("OPR/")[1]) || void 0);
    g.add("webkit", !g("wp") && !g("edge") && parseFloat(e.split("WebKit/")[1]) || void 0);
    g.add("chrome", !g("edge") && !g("opr") && parseFloat(e.split("Chrome/")[1]) || void 0);
    g.add("android", !g("wp") && parseFloat(e.split("Android ")[1]) || void 0);
    g.add("safari", 0 <= m.indexOf("Safari") && !g("wp") && !g("chrome") && !g("android") && !g("edge") && !g("opr") ? parseFloat(m.split("Version/")[1]) : void 0);
    g.add("mac", 0 <= m.indexOf("Macintosh"));
    g.add("quirks", "BackCompat" == document.compatMode);
    if(!g("wp") && e.match(/(iPhone|iPod|iPad)/)) {
      var l = RegExp.$1.replace(/P/, "p"), p = e.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", p = parseFloat(p.replace(/_/, ".").replace(/_/g, ""));
      g.add(l, p);
      g.add("ios", p)
    }
    g.add("bb", (0 <= e.indexOf("BlackBerry") || 0 <= e.indexOf("BB10")) && parseFloat(e.split("Version/")[1]) || void 0);
    g.add("trident", parseFloat(m.split("Trident/")[1]) || void 0);
    g.add("svg", "undefined" !== typeof SVGAngle);
    g("webkit") || (0 <= e.indexOf("Opera") && g.add("opera", 9.8 <= n ? parseFloat(e.split("Version/")[1]) || n : n), 0 <= e.indexOf("Gecko") && (!g("wp") && !g("khtml") && !g("trident") && !g("edge")) && g.add("mozilla", n), g("mozilla") && g.add("ff", parseFloat(e.split("Firefox/")[1] || e.split("Minefield/")[1]) || void 0), document.all && !g("opera") && (e = parseFloat(m.split("MSIE ")[1]) || void 0, (m = document.documentMode) && (5 != m && Math.floor(e) != m) && (e = m), g.add("ie", e)), g.add("wii", 
    "undefined" != typeof opera && opera.wiiremote));
    return g
  })
}, "dojo/aspect":function() {
  define([], function() {
    function g(e, g, d, a) {
      var c = e[g], f = "around" == g, b;
      if(f) {
        var l = d(function() {
          return c.advice(this, arguments)
        });
        b = {remove:function() {
          l && (l = e = d = null)
        }, advice:function(a, b) {
          return l ? l.apply(a, b) : c.advice(a, b)
        }}
      }else {
        b = {remove:function() {
          if(b.advice) {
            var a = b.previous, c = b.next;
            !c && !a ? delete e[g] : (a ? a.next = c : e[g] = c, c && (c.previous = a));
            e = d = b.advice = null
          }
        }, id:e.nextId++, advice:d, receiveArguments:a}
      }
      if(c && !f) {
        if("after" == g) {
          for(;c.next && (c = c.next);) {
          }
          c.next = b;
          b.previous = c
        }else {
          "before" == g && (e[g] = b, b.next = c, c.previous = b)
        }
      }else {
        e[g] = b
      }
      return b
    }
    function m(k) {
      return function(h, d, a, c) {
        var f = h[d], b;
        if(!f || f.target != h) {
          h[d] = b = function() {
            for(var a = b.nextId, c = arguments, d = b.before;d;) {
              d.advice && (c = d.advice.apply(this, c) || c), d = d.next
            }
            if(b.around) {
              var f = b.around.advice(this, c)
            }
            for(d = b.after;d && d.id < a;) {
              if(d.advice) {
                if(d.receiveArguments) {
                  var g = d.advice.apply(this, c), f = g === e ? f : g
                }else {
                  f = d.advice.call(this, f, c)
                }
              }
              d = d.next
            }
            return f
          }, f && (b.around = {advice:function(a, b) {
            return f.apply(a, b)
          }}), b.target = h, b.nextId = b.nextId || 0
        }
        h = g(b || f, k, a, c);
        a = null;
        return h
      }
    }
    var e, n = m("after"), l = m("before"), p = m("around");
    return{before:l, around:p, after:n}
  })
}, "dojo/_base/connect":function() {
  define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function(g, m, e, n, l, p, k, h) {
    function d(a, b, c, d, e) {
      d = h.hitch(c, d);
      if(!a || !a.addEventListener && !a.attachEvent) {
        return n.after(a || g.global, b, d, !0)
      }
      "string" == typeof b && "on" == b.substring(0, 2) && (b = b.substring(2));
      a || (a = g.global);
      if(!e) {
        switch(b) {
          case "keypress":
            b = q;
            break;
          case "mouseenter":
            b = p.enter;
            break;
          case "mouseleave":
            b = p.leave
        }
      }
      return m(a, b, d, e)
    }
    function a(a) {
      a.keyChar = a.charCode ? String.fromCharCode(a.charCode) : "";
      a.charOrCode = a.keyChar || a.keyCode
    }
    k.add("events-keypress-typed", function() {
      var a = {charCode:0};
      try {
        a = document.createEvent("KeyboardEvent"), (a.initKeyboardEvent || a.initKeyEvent).call(a, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3)
      }catch(b) {
      }
      return 0 == a.charCode && !k("opera")
    });
    var c = {106:42, 111:47, 186:59, 187:43, 188:44, 189:45, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 229:113}, f = k("mac") ? "metaKey" : "ctrlKey", b = function(b, c) {
      var d = h.mixin({}, b, c);
      a(d);
      d.preventDefault = function() {
        b.preventDefault()
      };
      d.stopPropagation = function() {
        b.stopPropagation()
      };
      return d
    }, q;
    q = k("events-keypress-typed") ? function(a, d) {
      var e = m(a, "keydown", function(a) {
        var e = a.keyCode, f = 13 != e && 32 != e && (27 != e || !k("ie")) && (48 > e || 90 < e) && (96 > e || 111 < e) && (186 > e || 192 < e) && (219 > e || 222 < e) && 229 != e;
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
          if(k("ie")) {
            try {
              a.keyCode = e.keyCode
            }catch(g) {
            }
          }
        }
      }), f = m(a, "keypress", function(a) {
        var c = a.charCode;
        a = b(a, {charCode:32 <= c ? c : 0, faux:!0});
        return d.call(this, a)
      });
      return{remove:function() {
        e.remove();
        f.remove()
      }}
    } : k("opera") ? function(a, c) {
      return m(a, "keypress", function(a) {
        var d = a.which;
        3 == d && (d = 99);
        d = 32 > d && !a.shiftKey ? 0 : d;
        a.ctrlKey && (!a.shiftKey && 65 <= d && 90 >= d) && (d += 32);
        return c.call(this, b(a, {charCode:d}))
      })
    } : function(b, c) {
      return m(b, "keypress", function(b) {
        a(b);
        return c.call(this, b)
      })
    };
    var s = {_keypress:q, connect:function(a, b, c, e, f) {
      var g = arguments, h = [], k = 0;
      h.push("string" == typeof g[0] ? null : g[k++], g[k++]);
      var l = g[k + 1];
      h.push("string" == typeof l || "function" == typeof l ? g[k++] : null, g[k++]);
      for(l = g.length;k < l;k++) {
        h.push(g[k])
      }
      return d.apply(this, h)
    }, disconnect:function(a) {
      a && a.remove()
    }, subscribe:function(a, b, c) {
      return e.subscribe(a, h.hitch(b, c))
    }, publish:function(a, b) {
      return e.publish.apply(e, [a].concat(b))
    }, connectPublisher:function(a, b, c) {
      var d = function() {
        s.publish(a, arguments)
      };
      return c ? s.connect(b, c, d) : s.connect(b, d)
    }, isCopyKey:function(a) {
      return a[f]
    }};
    s.unsubscribe = s.disconnect;
    h.mixin(g, s);
    return s
  })
}, "dojo/ready":function() {
  define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(g, m, e, n, l) {
    var p = 0, k = [], h = 0;
    m = function() {
      p = 1;
      g._postLoad = g.config.afterOnLoad = !0;
      d()
    };
    var d = function() {
      if(!h) {
        for(h = 1;p && (!n || 0 == n._Q.length) && (e.idle ? e.idle() : 1) && k.length;) {
          var a = k.shift();
          try {
            a()
          }catch(b) {
            if(b.info = b.message, e.signal) {
              e.signal("error", b)
            }else {
              throw b;
            }
          }
        }
        h = 0
      }
    };
    e.on && e.on("idle", d);
    n && (n._onQEmpty = d);
    var a = g.ready = g.addOnLoad = function(a, b, c) {
      var e = l._toArray(arguments);
      "number" != typeof a ? (c = b, b = a, a = 1E3) : e.shift();
      c = c ? l.hitch.apply(g, e) : function() {
        b()
      };
      c.priority = a;
      for(e = 0;e < k.length && a >= k[e].priority;e++) {
      }
      k.splice(e, 0, c);
      d()
    }, c = g.config.addOnLoad;
    if(c) {
      a[l.isArray(c) ? "apply" : "call"](g, c)
    }
    n ? n(m) : m();
    return a
  })
}, "dojo/errors/CancelError":function() {
  define(["./create"], function(g) {
    return g("CancelError", null, null, {dojoType:"cancel"})
  })
}, "url:dijit/templates/Tooltip.html":'\x3cdiv class\x3d"dijitTooltip dijitTooltipLeft" id\x3d"dojoTooltip" data-dojo-attach-event\x3d"mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t\x3e\x3cdiv class\x3d"dijitTooltipConnector" data-dojo-attach-point\x3d"connectorNode"\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point\x3d"containerNode" role\x3d\'alert\'\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
(function() {
  var g = this.require;
  g({cache:{}});
  !g.async && g(["dojo"]);
  g.boot && g.apply(null, g.boot)
})();

//# sourceMappingURL=dojo.js.map