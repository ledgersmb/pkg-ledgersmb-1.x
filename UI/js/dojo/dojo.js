//>>built
(function(c, n) {
  var h, q = function() {
    return"undefined" !== typeof t && "function" !== typeof t ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  }(), m = function() {
  }, p = function(a) {
    for(var d in a) {
      return 0
    }
    return 1
  }, g = {}.toString, e = function(a) {
    return"[object Function]" == g.call(a)
  }, l = function(a) {
    return"[object String]" == g.call(a)
  }, a = function(a) {
    return"[object Array]" == g.call(a)
  }, b = function(a, d) {
    if(a) {
      for(var b = 0;b < a.length;) {
        d(a[b++])
      }
    }
  }, f = function(a, d) {
    for(var b in d) {
      a[b] = d[b]
    }
    return a
  }, d = function(a, d) {
    return f(Error(a), {src:"dojoLoader", info:d})
  }, r = 1, u = function() {
    return"_" + r++
  }, k = function(a, d, b) {
    return wa(a, d, b, 0, k)
  }, t = q, x = t.document, w = x && x.createElement("DiV"), s = k.has = function(a) {
    return e(y[a]) ? y[a] = y[a](t, x, w) : y[a]
  }, y = s.cache = n.hasCache;
  e(c) && (c = c(q));
  s.add = function(a, d, b, f) {
    (void 0 === y[a] || f) && (y[a] = d);
    return b && s(a)
  };
  s.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
  s("host-webworker") && (f(n.hasCache, {"host-browser":0, dom:0, "dojo-dom-ready-api":0, "dojo-sniff":0, "dojo-inject-api":1, "host-webworker":1, "dojo-guarantee-console":0}), n.loaderPatch = {injectUrl:function(a, d) {
    try {
      importScripts(a), d()
    }catch(b) {
      console.error(b)
    }
  }});
  for(var z in c.has) {
    s.add(z, c.has[z], 0, 1)
  }
  k.async = 1;
  var v = new Function("return eval(arguments[0]);");
  k.eval = function(a, d) {
    return v(a + "\r\n//# sourceURL\x3d" + d)
  };
  var D = {}, G = k.signal = function(d, f) {
    var k = D[d];
    b(k && k.slice(0), function(d) {
      d.apply(null, a(f) ? f : [f])
    })
  };
  z = k.on = function(a, d) {
    var b = D[a] || (D[a] = []);
    b.push(d);
    return{remove:function() {
      for(var a = 0;a < b.length;a++) {
        if(b[a] === d) {
          b.splice(a, 1);
          break
        }
      }
    }}
  };
  var I = [], M = {}, K = [], P = {}, U = k.map = {}, A = [], B = {}, F = "", C = {}, H = {}, q = {}, N = 0, Z = function(a) {
    var d, b, f, k;
    for(d in H) {
      b = H[d], (f = d.match(/^url\:(.+)/)) ? C["url:" + xa(f[1], a)] = b : "*now" == d ? k = b : "*noref" != d && (f = ba(d, a, !0), C[f.mid] = C["url:" + f.url] = b)
    }
    k && k(ka(a));
    H = {}
  }, V = function(a) {
    return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(a) {
      return"\\" + a
    })
  }, W = function(a, d) {
    d.splice(0, d.length);
    for(var b in a) {
      d.push([b, a[b], RegExp("^" + V(b) + "(/|$)"), b.length])
    }
    d.sort(function(a, d) {
      return d[3] - a[3]
    });
    return d
  }, Q = function(a, d) {
    b(a, function(a) {
      d.push([l(a[0]) ? RegExp("^" + V(a[0]) + "$") : a[0], a[1]])
    })
  }, J = function(a) {
    var d = a.name;
    d || (d = a, a = {name:d});
    a = f({main:"main"}, a);
    a.location = a.location ? a.location : d;
    a.packageMap && (U[d] = a.packageMap);
    a.main.indexOf("./") || (a.main = a.main.substring(2));
    P[d] = a
  }, X = [], E = function(a, d, r) {
    for(var e in a) {
      "waitSeconds" == e && (k.waitms = 1E3 * (a[e] || 0));
      "cacheBust" == e && (F = a[e] ? l(a[e]) ? a[e] : (new Date).getTime() + "" : "");
      if("baseUrl" == e || "combo" == e) {
        k[e] = a[e]
      }
      a[e] !== y && (k.rawConfig[e] = a[e], "has" != e && s.add("config-" + e, a[e], 0, d))
    }
    k.baseUrl || (k.baseUrl = "./");
    /\/$/.test(k.baseUrl) || (k.baseUrl += "/");
    for(e in a.has) {
      s.add(e, a.has[e], 0, d)
    }
    b(a.packages, J);
    for(var g in a.packagePaths) {
      b(a.packagePaths[g], function(a) {
        var d = g + "/" + a;
        l(a) && (a = {name:a});
        a.location = d;
        J(a)
      })
    }
    W(f(U, a.map), A);
    b(A, function(a) {
      a[1] = W(a[1], []);
      "*" == a[0] && (A.star = a)
    });
    W(f(M, a.paths), K);
    Q(a.aliases, I);
    if(d) {
      X.push({config:a.config})
    }else {
      for(e in a.config) {
        d = Y(e, r), d.config = f(d.config || {}, a.config[e])
      }
    }
    a.cache && (Z(), H = a.cache, a.cache["*noref"] && Z());
    G("config", [a, k.rawConfig])
  };
  s("dojo-cdn");
  var L = x.getElementsByTagName("script");
  h = 0;
  for(var O, R, ca, $;h < L.length;) {
    O = L[h++];
    if((ca = O.getAttribute("src")) && ($ = ca.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
      R = $[3] || "", n.baseUrl = n.baseUrl || R, N = O
    }
    if(ca = O.getAttribute("data-dojo-config") || O.getAttribute("djConfig")) {
      q = k.eval("({ " + ca + " })", "data-dojo-config"), N = O
    }
  }
  k.rawConfig = {};
  E(n, 1);
  s("dojo-cdn") && ((P.dojo.location = R) && (R += "/"), P.dijit.location = R + "../dijit/", P.dojox.location = R + "../dojox/");
  E(c, 1);
  E(q, 1);
  var da = function(a) {
    la(function() {
      b(a.deps, ya)
    })
  }, wa = function(b, e, r, g, c) {
    var p;
    if(l(b)) {
      if((p = Y(b, g, !0)) && p.executed) {
        return p.result
      }
      throw d("undefinedModule", b);
    }
    a(b) || (E(b, 0, g), b = e, e = r);
    if(a(b)) {
      if(b.length) {
        r = "require*" + u();
        for(var w, s = [], h = 0;h < b.length;) {
          w = b[h++], s.push(Y(w, g))
        }
        p = f(ea("", r, 0, ""), {injected:2, deps:s, def:e || m, require:g ? g.require : k, gc:1});
        B[p.mid] = p;
        da(p);
        var I = aa && 0 != "sync";
        la(function() {
          ma(p, I)
        });
        p.executed || T.push(p);
        fa()
      }else {
        e && e()
      }
    }
    return c
  }, ka = function(a) {
    if(!a) {
      return k
    }
    var d = a.require;
    d || (d = function(b, f, e) {
      return wa(b, f, e, a, d)
    }, a.require = f(d, k), d.module = a, d.toUrl = function(d) {
      return xa(d, a)
    }, d.toAbsMid = function(d) {
      return na(d, a)
    });
    return d
  }, T = [], ga = [], S = {}, Ha = function(a) {
    a.injected = 1;
    S[a.mid] = 1;
    a.url && (S[a.url] = a.pack || 1);
    Ga()
  }, ha = function(a) {
    a.injected = 2;
    delete S[a.mid];
    a.url && delete S[a.url];
    p(S) && Ia()
  }, Ja = k.idle = function() {
    return!ga.length && p(S) && !T.length && !aa
  }, oa = function(a, d) {
    if(d) {
      for(var b = 0;b < d.length;b++) {
        if(d[b][2].test(a)) {
          return d[b]
        }
      }
    }
    return 0
  }, za = function(a) {
    var d = [], b, f;
    for(a = a.replace(/\\/g, "/").split("/");a.length;) {
      b = a.shift(), ".." == b && d.length && ".." != f ? (d.pop(), f = d[d.length - 1]) : "." != b && d.push(f = b)
    }
    return d.join("/")
  }, ea = function(a, d, b, f) {
    return{pid:a, mid:d, pack:b, url:f, executed:0, def:0}
  }, Aa = function(a, f, k, r, g, l, c, p, w) {
    var s, u, m, h;
    h = /^\./.test(a);
    if(/(^\/)|(\:)|(\.js$)/.test(a) || h && !f) {
      return ea(0, a, 0, a)
    }
    a = za(h ? f.mid + "/../" + a : a);
    if(/^\./.test(a)) {
      throw d("irrationalPath", a);
    }
    f && (m = oa(f.mid, l));
    (m = (m = m || l.star) && oa(a, m[1])) && (a = m[1] + a.substring(m[3]));
    f = ($ = a.match(/^([^\/]+)(\/(.+))?$/)) ? $[1] : "";
    (s = k[f]) ? a = f + "/" + (u = $[3] || s.main) : f = "";
    var I = 0;
    b(p, function(d) {
      var b = a.match(d[0]);
      b && 0 < b.length && (I = e(d[1]) ? a.replace(d[0], d[1]) : d[1])
    });
    if(I) {
      return Aa(I, 0, k, r, g, l, c, p, w)
    }
    if(k = r[a]) {
      return w ? ea(k.pid, k.mid, k.pack, k.url) : r[a]
    }
    r = (m = oa(a, c)) ? m[1] + a.substring(m[3]) : f ? s.location + "/" + u : a;
    /(^\/)|(\:)/.test(r) || (r = g + r);
    return ea(f, a, s, za(r + ".js"))
  }, ba = function(a, d, b) {
    return Aa(a, d, P, B, k.baseUrl, b ? [] : A, b ? [] : K, b ? [] : I)
  }, Ba = function(a, d, b) {
    return a.normalize ? a.normalize(d, function(a) {
      return na(a, b)
    }) : na(d, b)
  }, Ca = 0, Y = function(a, d, b) {
    var f, e;
    (f = a.match(/^(.+?)\!(.*)$/)) ? (e = Y(f[1], d, b), 5 === e.executed && !e.load && pa(e), e.load ? (f = Ba(e, f[2], d), a = e.mid + "!" + (e.dynamic ? ++Ca + "!" : "") + f) : (f = f[2], a = e.mid + "!" + ++Ca + "!waitingForPlugin"), a = {plugin:e, mid:a, req:ka(d), prid:f}) : a = ba(a, d);
    return B[a.mid] || !b && (B[a.mid] = a)
  }, na = k.toAbsMid = function(a, d) {
    return ba(a, d).mid
  }, xa = k.toUrl = function(a, d) {
    var b = ba(a + "/x", d), f = b.url;
    return Da(0 === b.pid ? a : f.substring(0, f.length - 5))
  }, Ea = {injected:2, executed:5, def:3, result:3};
  R = function(a) {
    return B[a] = f({mid:a}, Ea)
  };
  var Ka = R("require"), La = R("exports"), Ma = R("module"), ia = {}, qa = 0, pa = function(a) {
    var d = a.result;
    a.dynamic = d.dynamic;
    a.normalize = d.normalize;
    a.load = d.load;
    return a
  }, Na = function(a) {
    var d = {};
    b(a.loadQ, function(b) {
      var e = Ba(a, b.prid, b.req.module), k = a.dynamic ? b.mid.replace(/waitingForPlugin$/, e) : a.mid + "!" + e, e = f(f({}, b), {mid:k, prid:e, injected:0});
      B[k] || Fa(B[k] = e);
      d[b.mid] = B[k];
      ha(b);
      delete B[b.mid]
    });
    a.loadQ = 0;
    var e = function(a) {
      for(var b = a.deps || [], f = 0;f < b.length;f++) {
        (a = d[b[f].mid]) && (b[f] = a)
      }
    }, k;
    for(k in B) {
      e(B[k])
    }
    b(T, e)
  }, ra = function(a) {
    k.trace("loader-finish-exec", [a.mid]);
    a.executed = 5;
    a.defOrder = qa++;
    a.loadQ && (pa(a), Na(a));
    for(h = 0;h < T.length;) {
      T[h] === a ? T.splice(h, 1) : h++
    }
    /^require\*/.test(a.mid) && delete B[a.mid]
  }, Oa = [], ma = function(a, d) {
    if(4 === a.executed) {
      return k.trace("loader-circular-dependency", [Oa.concat(a.mid).join("-\x3e")]), !a.def || d ? ia : a.cjs && a.cjs.exports
    }
    if(!a.executed) {
      if(!a.def) {
        return ia
      }
      var b = a.mid, f = a.deps || [], r, g = [], l = 0;
      for(a.executed = 4;r = f[l++];) {
        r = r === Ka ? ka(a) : r === La ? a.cjs.exports : r === Ma ? a.cjs : ma(r, d);
        if(r === ia) {
          return a.executed = 0, k.trace("loader-exec-module", ["abort", b]), ia
        }
        g.push(r)
      }
      k.trace("loader-run-factory", [a.mid]);
      b = a.def;
      g = e(b) ? b.apply(null, g) : b;
      a.result = void 0 === g && a.cjs ? a.cjs.exports : g;
      ra(a)
    }
    return a.result
  }, aa = 0, la = function(a) {
    try {
      aa++, a()
    }catch(d) {
      throw d;
    }finally {
      aa--
    }
    Ja() && G("idle", [])
  }, fa = function() {
    aa || la(function() {
      for(var a, d, b = 0;b < T.length;) {
        a = qa, d = T[b], ma(d), a != qa ? b = 0 : b++
      }
    })
  }, Da = "function" == typeof c.fixupUrl ? c.fixupUrl : function(a) {
    a += "";
    return a + (F ? (/\?/.test(a) ? "\x26" : "?") + F : "")
  };
  void 0 === s("dojo-loader-eval-hint-url") && s.add("dojo-loader-eval-hint-url", 1);
  var Fa = function(a) {
    var d = a.plugin;
    5 === d.executed && !d.load && pa(d);
    var b = function(d) {
      a.result = d;
      ha(a);
      ra(a);
      fa()
    };
    d.load ? d.load(a.prid, a.req, b) : d.loadQ ? d.loadQ.push(a) : (d.loadQ = [a], T.unshift(d), ya(d))
  }, ja = 0, sa = 0, ta = 0, Pa = function(a, d) {
    s("config-stripStrict") && (a = a.replace(/(["'])use strict\1/g, ""));
    ta = 1;
    a === ja ? ja.call(null) : k.eval(a, s("dojo-loader-eval-hint-url") ? d.url : d.mid);
    ta = 0
  }, ya = function(a) {
    var b = a.mid, e = a.url;
    if(!a.executed && !a.injected && !(S[b] || a.url && (a.pack && S[a.url] === a.pack || 1 == S[a.url]))) {
      if(Ha(a), a.plugin) {
        Fa(a)
      }else {
        var r = function() {
          Qa(a);
          if(2 !== a.injected) {
            if(s("dojo-enforceDefine")) {
              G("error", d("noDefine", a));
              return
            }
            ha(a);
            f(a, Ea);
            k.trace("loader-define-nonmodule", [a.url])
          }
          fa()
        };
        (ja = C[b] || C["url:" + a.url]) ? (k.trace("loader-inject", ["cache", a.mid, e]), Pa(ja, a), r()) : (k.trace("loader-inject", ["script", a.mid, e]), sa = a, k.injectUrl(Da(e), r, a), sa = 0)
      }
    }
  }, ua = function(a, b, r) {
    k.trace("loader-define-module", [a.mid, b]);
    if(2 === a.injected) {
      return G("error", d("multipleDefine", a)), a
    }
    f(a, {deps:b, def:r, cjs:{id:a.mid, uri:a.url, exports:a.result = {}, setExports:function(d) {
      a.cjs.exports = d
    }, config:function() {
      return a.config
    }}});
    for(var g = 0;b[g];g++) {
      b[g] = Y(b[g], a)
    }
    ha(a);
    !e(r) && !b.length && (a.result = r, ra(a));
    return a
  }, Qa = function(a, d) {
    for(var f = [], e, k;ga.length;) {
      k = ga.shift(), d && (k[0] = d.shift()), e = k[0] && Y(k[0]) || a, f.push([e, k[1], k[2]])
    }
    Z(a);
    b(f, function(a) {
      da(ua.apply(null, a))
    })
  }, Ia = m, Ga = m;
  s.add("ie-event-behavior", x.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
  var va = function(a, d, b, f) {
    if(s("ie-event-behavior")) {
      return a.attachEvent(b, f), function() {
        a.detachEvent(b, f)
      }
    }
    a.addEventListener(d, f, !1);
    return function() {
      a.removeEventListener(d, f, !1)
    }
  }, Ra = va(window, "load", "onload", function() {
    k.pageLoaded = 1;
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
  k.injectUrl = function(a, b, f) {
    f = f.node = x.createElement("script");
    var e = va(f, "load", "onreadystatechange", function(a) {
      a = a || window.event;
      var d = a.target || a.srcElement;
      if("load" === a.type || /complete|loaded/.test(d.readyState)) {
        e(), k(), b && b()
      }
    }), k = va(f, "error", "onerror", function(b) {
      e();
      k();
      G("error", d("scriptError", [a, b]))
    });
    f.type = "text/javascript";
    f.charset = "utf-8";
    f.src = a;
    N.parentNode.insertBefore(f, N);
    return f
  };
  k.log = m;
  k.trace = m;
  O = function(a, b, f) {
    var r = arguments.length, g = ["require", "exports", "module"], c = [0, a, b];
    1 == r ? c = [0, e(a) ? g : [], a] : 2 == r && l(a) ? c = [a, e(b) ? g : [], b] : 3 == r && (c = [a, b, f]);
    k.trace("loader-define", c.slice(0, 2));
    if((r = c[0] && Y(c[0])) && !S[r.mid]) {
      da(ua(r, c[1], c[2]))
    }else {
      if(!s("ie-event-behavior") || ta) {
        ga.push(c)
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
        r ? (Z(r), da(ua(r, c[1], c[2]))) : G("error", d("ieDefineFailed", c[0]));
        fa()
      }
    }
  };
  O.amd = {vendor:"dojotoolkit.org"};
  f(f(k, n.loaderPatch), c.loaderPatch);
  z("error", function(a) {
    try {
      if(console.error(a), a instanceof Error) {
        for(var d in a) {
        }
      }
    }catch(b) {
    }
  });
  f(k, {uid:u, cache:C, packs:P});
  t.define || (t.define = O, t.require = k, b(X, function(a) {
    E(a)
  }), O = q.deps || c.deps || n.deps, q = q.callback || c.callback || n.callback, k.boot = O || q ? [O || [], q] : 0)
})(function(c) {
  return c.dojoConfig || c.djConfig || c.require || {}
}, {async:1, hasCache:{"config-selectorEngine":"lite", "config-tlmSiblingOfDojo":1, "dojo-built":1, "dojo-loader":1, dom:1, "host-browser":1}, packages:[{location:".", name:"dojo"}, {location:"../dijit", name:"dijit"}, {location:"../lsmb", main:"src", name:"lsmb"}]});
require({cache:{"dojo/query":function() {
  define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function(c, n, h, q, m, p, g, e) {
    function l(a, d) {
      var b = function(b, f) {
        if("string" == typeof f && (f = h.byId(f), !f)) {
          return new d([])
        }
        var e = "string" == typeof b ? a(b, f) : b ? b.end && b.on ? b : [b] : [];
        return e.end && e.on ? e : new d(e)
      };
      b.matches = a.match || function(a, d, f) {
        return 0 < b.filter([a], d, f).length
      };
      b.filter = a.filter || function(a, d, f) {
        return b(d, f).filter(function(d) {
          return-1 < m.indexOf(a, d)
        })
      };
      if("function" != typeof a) {
        var f = a.search;
        a = function(a, d) {
          return f(d || document, a)
        }
      }
      return b
    }
    n.add("array-extensible", function() {
      return 1 == p.delegate([], {length:1}).length && !n("bug-for-in-skips-shadowed")
    });
    var a = Array.prototype, b = a.slice, f = a.concat, d = m.forEach, r = function(a, d, f) {
      d = [0].concat(b.call(d, 0));
      f = f || c.global;
      return function(b) {
        d[0] = b;
        return a.apply(f, d)
      }
    }, u = function(a) {
      var d = this instanceof k && n("array-extensible");
      "number" == typeof a && (a = Array(a));
      var b = a && "length" in a ? a : arguments;
      if(d || !b.sort) {
        for(var f = d ? this : [], e = f.length = b.length, r = 0;r < e;r++) {
          f[r] = b[r]
        }
        if(d) {
          return f
        }
        b = f
      }
      p._mixin(b, t);
      b._NodeListCtor = function(a) {
        return k(a)
      };
      return b
    }, k = u, t = k.prototype = n("array-extensible") ? [] : {};
    k._wrap = t._wrap = function(a, d, b) {
      a = new (b || this._NodeListCtor || k)(a);
      return d ? a._stash(d) : a
    };
    k._adaptAsMap = function(a, d) {
      return function() {
        return this.map(r(a, arguments, d))
      }
    };
    k._adaptAsForEach = function(a, d) {
      return function() {
        this.forEach(r(a, arguments, d));
        return this
      }
    };
    k._adaptAsFilter = function(a, d) {
      return function() {
        return this.filter(r(a, arguments, d))
      }
    };
    k._adaptWithCondition = function(a, d, b) {
      return function() {
        var f = arguments, e = r(a, f, b);
        if(d.call(b || c.global, f)) {
          return this.map(e)
        }
        this.forEach(e);
        return this
      }
    };
    d(["slice", "splice"], function(d) {
      var b = a[d];
      t[d] = function() {
        return this._wrap(b.apply(this, arguments), "slice" == d ? this : null)
      }
    });
    d(["indexOf", "lastIndexOf", "every", "some"], function(a) {
      var d = m[a];
      t[a] = function() {
        return d.apply(c, [this].concat(b.call(arguments, 0)))
      }
    });
    p.extend(u, {constructor:k, _NodeListCtor:k, toString:function() {
      return this.join(",")
    }, _stash:function(a) {
      this._parent = a;
      return this
    }, on:function(a, d) {
      var b = this.map(function(b) {
        return q(b, a, d)
      });
      b.remove = function() {
        for(var a = 0;a < b.length;a++) {
          b[a].remove()
        }
      };
      return b
    }, end:function() {
      return this._parent ? this._parent : new this._NodeListCtor(0)
    }, concat:function(a) {
      var d = b.call(this, 0), e = m.map(arguments, function(a) {
        return b.call(a, 0)
      });
      return this._wrap(f.apply(d, e), this)
    }, map:function(a, d) {
      return this._wrap(m.map(this, a, d), this)
    }, forEach:function(a, b) {
      d(this, a, b);
      return this
    }, filter:function(a) {
      var d = arguments, b = this, f = 0;
      if("string" == typeof a) {
        b = x._filterResult(this, d[0]);
        if(1 == d.length) {
          return b._stash(this)
        }
        f = 1
      }
      return this._wrap(m.filter(b, d[f], d[f + 1]), this)
    }, instantiate:function(a, d) {
      var b = p.isFunction(a) ? a : p.getObject(a);
      d = d || {};
      return this.forEach(function(a) {
        new b(d, a)
      })
    }, at:function() {
      var a = new this._NodeListCtor(0);
      d(arguments, function(d) {
        0 > d && (d = this.length + d);
        this[d] && a.push(this[d])
      }, this);
      return a._stash(this)
    }});
    var x = l(e, u);
    c.query = l(e, function(a) {
      return u(a)
    });
    x.load = function(a, d, b) {
      g.load(a, d, function(a) {
        b(l(a, u))
      })
    };
    c._filterQueryResult = x._filterResult = function(a, d, b) {
      return new u(x.filter(a, d, b))
    };
    c.NodeList = x.NodeList = u;
    return x
  })
}, "dojo/_base/kernel":function() {
  define(["../global", "../has", "./config", "require", "module"], function(c, n, h, q, m) {
    var p, g = {}, e = {}, l = {config:h, global:c, dijit:g, dojox:e}, g = {dojo:["dojo", l], dijit:["dijit", g], dojox:["dojox", e]};
    m = q.map && q.map[m.id.match(/[^\/]+/)[0]];
    for(p in m) {
      g[p] ? g[p][0] = m[p] : g[p] = [m[p], {}]
    }
    for(p in g) {
      m = g[p], m[1]._scopeName = m[0], h.noGlobals || (c[m[0]] = m[1])
    }
    l.scopeMap = g;
    l.baseUrl = l.config.baseUrl = q.baseUrl;
    l.isAsync = q.async;
    l.locale = h.locale;
    c = "$Rev: bce476b $".match(/[0-9a-f]{7,}/);
    l.version = {major:1, minor:10, patch:9, flag:"", revision:c ? c[0] : NaN, toString:function() {
      var a = l.version;
      return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
    }};
    Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(l);
    l.exit = function() {
    };
    n("host-webworker");
    n.add("console-as-object", function() {
      return Function.prototype.bind && console && "object" === typeof console.log
    });
    "undefined" != typeof console || (console = {});
    h = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
    var a;
    for(c = 0;a = h[c++];) {
      console[a] ? n("console-as-object") && (console[a] = Function.prototype.bind.call(console[a], console)) : function() {
        var b = a + "";
        console[b] = "log" in console ? function() {
          var a = Array.prototype.slice.call(arguments);
          a.unshift(b + ":");
          console.log(a.join(" "))
        } : function() {
        };
        console[b]._fake = !0
      }()
    }
    l.deprecated = l.experimental = function() {
    };
    l._hasResource = {};
    return l
  })
}, "dojo/global":function() {
  define(function() {
    return"undefined" !== typeof global && "function" !== typeof global ? global : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  })
}, "dojo/has":function() {
  define(["./global", "require", "module"], function(c, n, h) {
    var q = n.has || function() {
    };
    q.add("dom-addeventlistener", !!document.addEventListener);
    q.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints);
    q.add("touch-events", "ontouchstart" in document);
    q.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window);
    q.add("MSPointer", window.navigator.msPointerEnabled);
    q.add("touch-action", q("touch") && q("pointer-events"));
    q.add("device-width", screen.availWidth || innerWidth);
    c = document.createElement("form");
    q.add("dom-attributes-explicit", 0 == c.attributes.length);
    q.add("dom-attributes-specified-flag", 0 < c.attributes.length && 40 > c.attributes.length);
    q.clearElement = function(c) {
      c.innerHTML = "";
      return c
    };
    q.normalize = function(c, p) {
      var g = c.match(/[\?:]|[^:\?]*/g), e = 0, l = function(a) {
        var b = g[e++];
        if(":" == b) {
          return 0
        }
        if("?" == g[e++]) {
          if(!a && q(b)) {
            return l()
          }
          l(!0);
          return l(a)
        }
        return b || 0
      };
      return(c = l()) && p(c)
    };
    q.load = function(c, p, g) {
      c ? p([c], g) : g()
    };
    return q
  })
}, "dojo/_base/config":function() {
  define(["../global", "../has", "require"], function(c, n, h) {
    c = {};
    h = h.rawConfig;
    for(var q in h) {
      c[q] = h[q]
    }
    if(!c.locale && "undefined" != typeof navigator && (q = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage)) {
      c.locale = q.toLowerCase()
    }
    return c
  })
}, "dojo/dom":function() {
  define(["./sniff", "./_base/window"], function(c, n) {
    if(7 >= c("ie")) {
      try {
        document.execCommand("BackgroundImageCache", !1, !0)
      }catch(h) {
      }
    }
    var q = {};
    c("ie") ? q.byId = function(c, g) {
      if("string" != typeof c) {
        return c
      }
      var e = g || n.doc, l = c && e.getElementById(c);
      if(l && (l.attributes.id.value == c || l.id == c)) {
        return l
      }
      e = e.all[c];
      if(!e || e.nodeName) {
        e = [e]
      }
      for(var a = 0;l = e[a++];) {
        if(l.attributes && l.attributes.id && l.attributes.id.value == c || l.id == c) {
          return l
        }
      }
    } : q.byId = function(c, g) {
      return("string" == typeof c ? (g || n.doc).getElementById(c) : c) || null
    };
    q.isDescendant = function(c, g) {
      try {
        c = q.byId(c);
        for(g = q.byId(g);c;) {
          if(c == g) {
            return!0
          }
          c = c.parentNode
        }
      }catch(e) {
      }
      return!1
    };
    c.add("css-user-select", function(c, g, e) {
      if(!e) {
        return!1
      }
      c = e.style;
      g = ["Khtml", "O", "Moz", "Webkit"];
      e = g.length;
      var l = "userSelect";
      do {
        if("undefined" !== typeof c[l]) {
          return l
        }
      }while(e-- && (l = g[e] + "UserSelect"));
      return!1
    });
    var m = c("css-user-select");
    q.setSelectable = m ? function(c, g) {
      q.byId(c).style[m] = g ? "" : "none"
    } : function(c, g) {
      c = q.byId(c);
      var e = c.getElementsByTagName("*"), l = e.length;
      if(g) {
        for(c.removeAttribute("unselectable");l--;) {
          e[l].removeAttribute("unselectable")
        }
      }else {
        for(c.setAttribute("unselectable", "on");l--;) {
          e[l].setAttribute("unselectable", "on")
        }
      }
    };
    return q
  })
}, "dojo/sniff":function() {
  define(["./has"], function(c) {
    var n = navigator, h = n.userAgent, n = n.appVersion, q = parseFloat(n);
    c.add("air", 0 <= h.indexOf("AdobeAIR"));
    c.add("wp", parseFloat(h.split("Windows Phone")[1]) || void 0);
    c.add("msapp", parseFloat(h.split("MSAppHost/")[1]) || void 0);
    c.add("khtml", 0 <= n.indexOf("Konqueror") ? q : void 0);
    c.add("edge", parseFloat(h.split("Edge/")[1]) || void 0);
    c.add("opr", parseFloat(h.split("OPR/")[1]) || void 0);
    c.add("webkit", !c("wp") && !c("edge") && parseFloat(h.split("WebKit/")[1]) || void 0);
    c.add("chrome", !c("edge") && !c("opr") && parseFloat(h.split("Chrome/")[1]) || void 0);
    c.add("android", !c("wp") && parseFloat(h.split("Android ")[1]) || void 0);
    c.add("safari", 0 <= n.indexOf("Safari") && !c("wp") && !c("chrome") && !c("android") && !c("edge") && !c("opr") ? parseFloat(n.split("Version/")[1]) : void 0);
    c.add("mac", 0 <= n.indexOf("Macintosh"));
    c.add("quirks", "BackCompat" == document.compatMode);
    if(!c("wp") && h.match(/(iPhone|iPod|iPad)/)) {
      var m = RegExp.$1.replace(/P/, "p"), p = h.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", p = parseFloat(p.replace(/_/, ".").replace(/_/g, ""));
      c.add(m, p);
      c.add("ios", p)
    }
    c.add("bb", (0 <= h.indexOf("BlackBerry") || 0 <= h.indexOf("BB10")) && parseFloat(h.split("Version/")[1]) || void 0);
    c.add("trident", parseFloat(n.split("Trident/")[1]) || void 0);
    c.add("svg", "undefined" !== typeof SVGAngle);
    c("webkit") || (0 <= h.indexOf("Opera") && c.add("opera", 9.8 <= q ? parseFloat(h.split("Version/")[1]) || q : q), 0 <= h.indexOf("Gecko") && (!c("wp") && !c("khtml") && !c("trident") && !c("edge")) && c.add("mozilla", q), c("mozilla") && c.add("ff", parseFloat(h.split("Firefox/")[1] || h.split("Minefield/")[1]) || void 0), document.all && !c("opera") && (h = parseFloat(n.split("MSIE ")[1]) || void 0, (n = document.documentMode) && (5 != n && Math.floor(h) != n) && (h = n), c.add("ie", h)), c.add("wii", 
    "undefined" != typeof opera && opera.wiiremote));
    return c
  })
}, "dojo/_base/window":function() {
  define(["./kernel", "./lang", "../sniff"], function(c, n, h) {
    var q = {global:c.global, doc:c.global.document || null, body:function(h) {
      h = h || c.doc;
      return h.body || h.getElementsByTagName("body")[0]
    }, setContext:function(h, p) {
      c.global = q.global = h;
      c.doc = q.doc = p
    }, withGlobal:function(h, p, g, e) {
      var l = c.global;
      try {
        return c.global = q.global = h, q.withDoc.call(null, h.document, p, g, e)
      }finally {
        c.global = q.global = l
      }
    }, withDoc:function(m, p, g, e) {
      var l = q.doc, a = h("quirks"), b = h("ie"), f, d, r;
      try {
        c.doc = q.doc = m;
        c.isQuirks = h.add("quirks", "BackCompat" == c.doc.compatMode, !0, !0);
        if(h("ie") && (r = m.parentWindow) && r.navigator) {
          f = parseFloat(r.navigator.appVersion.split("MSIE ")[1]) || void 0, (d = m.documentMode) && (5 != d && Math.floor(f) != d) && (f = d), c.isIE = h.add("ie", f, !0, !0)
        }
        g && "string" == typeof p && (p = g[p]);
        return p.apply(g, e || [])
      }finally {
        c.doc = q.doc = l, c.isQuirks = h.add("quirks", a, !0, !0), c.isIE = h.add("ie", b, !0, !0)
      }
    }};
    n.mixin(c, q);
    return q
  })
}, "dojo/_base/lang":function() {
  define(["./kernel", "../has", "../sniff"], function(c, n) {
    n.add("bug-for-in-skips-shadowed", function() {
      for(var a in{toString:1}) {
        return 0
      }
      return 1
    });
    var h = n("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], q = h.length, m = function(a, b, f) {
      f || (f = a[0] && c.scopeMap[a[0]] ? c.scopeMap[a.shift()][1] : c.global);
      try {
        for(var d = 0;d < a.length;d++) {
          var e = a[d];
          if(!(e in f)) {
            if(b) {
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
    }, p = Object.prototype.toString, g = function(a, b, f) {
      return(f || []).concat(Array.prototype.slice.call(a, b || 0))
    }, e = /\{([^\}]+)\}/g, l = {_extraNames:h, _mixin:function(a, b, f) {
      var d, e, c, k = {};
      for(d in b) {
        if(e = b[d], !(d in a) || a[d] !== e && (!(d in k) || k[d] !== e)) {
          a[d] = f ? f(e) : e
        }
      }
      if(n("bug-for-in-skips-shadowed") && b) {
        for(c = 0;c < q;++c) {
          if(d = h[c], e = b[d], !(d in a) || a[d] !== e && (!(d in k) || k[d] !== e)) {
            a[d] = f ? f(e) : e
          }
        }
      }
      return a
    }, mixin:function(a, b) {
      a || (a = {});
      for(var f = 1, d = arguments.length;f < d;f++) {
        l._mixin(a, arguments[f])
      }
      return a
    }, setObject:function(a, b, f) {
      var d = a.split(".");
      a = d.pop();
      return(f = m(d, !0, f)) && a ? f[a] = b : void 0
    }, getObject:function(a, b, f) {
      return!a ? f : m(a.split("."), b, f)
    }, exists:function(a, b) {
      return void 0 !== l.getObject(a, !1, b)
    }, isString:function(a) {
      return"string" == typeof a || a instanceof String
    }, isArray:function(a) {
      return a && (a instanceof Array || "array" == typeof a)
    }, isFunction:function(a) {
      return"[object Function]" === p.call(a)
    }, isObject:function(a) {
      return void 0 !== a && (null === a || "object" == typeof a || l.isArray(a) || l.isFunction(a))
    }, isArrayLike:function(a) {
      return a && void 0 !== a && !l.isString(a) && !l.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) && (l.isArray(a) || isFinite(a.length))
    }, isAlien:function(a) {
      return a && !l.isFunction(a) && /\{\s*\[native code\]\s*\}/.test(String(a))
    }, extend:function(a, b) {
      for(var f = 1, d = arguments.length;f < d;f++) {
        l._mixin(a.prototype, arguments[f])
      }
      return a
    }, _hitchArgs:function(a, b) {
      var f = l._toArray(arguments, 2), d = l.isString(b);
      return function() {
        var e = l._toArray(arguments), g = d ? (a || c.global)[b] : b;
        return g && g.apply(a || this, f.concat(e))
      }
    }, hitch:function(a, b) {
      if(2 < arguments.length) {
        return l._hitchArgs.apply(c, arguments)
      }
      b || (b = a, a = null);
      if(l.isString(b)) {
        a = a || c.global;
        if(!a[b]) {
          throw['lang.hitch: scope["', b, '"] is null (scope\x3d"', a, '")'].join("");
        }
        return function() {
          return a[b].apply(a, arguments || [])
        }
      }
      return!a ? b : function() {
        return b.apply(a, arguments || [])
      }
    }, delegate:function() {
      function a() {
      }
      return function(b, f) {
        a.prototype = b;
        var d = new a;
        a.prototype = null;
        f && l._mixin(d, f);
        return d
      }
    }(), _toArray:n("ie") ? function() {
      function a(a, f, d) {
        d = d || [];
        for(f = f || 0;f < a.length;f++) {
          d.push(a[f])
        }
        return d
      }
      return function(b) {
        return(b.item ? a : g).apply(this, arguments)
      }
    }() : g, partial:function(a) {
      return l.hitch.apply(c, [null].concat(l._toArray(arguments)))
    }, clone:function(a) {
      if(!a || "object" != typeof a || l.isFunction(a)) {
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
      var b, f, d;
      if(l.isArray(a)) {
        b = [];
        f = 0;
        for(d = a.length;f < d;++f) {
          f in a && b.push(l.clone(a[f]))
        }
      }else {
        b = a.constructor ? new a.constructor : {}
      }
      return l._mixin(b, a, l.clone)
    }, trim:String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }, replace:function(a, b, f) {
      return a.replace(f || e, l.isFunction(b) ? b : function(a, f) {
        return l.getObject(f, !1, b)
      })
    }};
    l.mixin(c, l);
    return l
  })
}, "dojo/on":function() {
  define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(c, n, h) {
    function q(a, d, b, k, c) {
      if(k = d.match(/(.*):(.*)/)) {
        return d = k[2], k = k[1], e.selector(k, d).call(c, a, b)
      }
      h("touch") && (l.test(d) && (b = v(b)), !h("event-orientationchange") && "orientationchange" == d && (d = "resize", a = window, b = v(b)));
      r && (b = r(b));
      if(a.addEventListener) {
        var g = d in f, u = g ? f[d] : d;
        a.addEventListener(u, b, g);
        return{remove:function() {
          a.removeEventListener(u, b, g)
        }}
      }
      if(x && a.attachEvent) {
        return x(a, "on" + d, b)
      }
      throw Error("Target must be an event emitter");
    }
    function m() {
      this.cancelable = !1;
      this.defaultPrevented = !0
    }
    function p() {
      this.bubbles = !1
    }
    var g = window.ScriptEngineMajorVersion;
    h.add("jscript", g && g() + ScriptEngineMinorVersion() / 10);
    h.add("event-orientationchange", h("touch") && !h("android"));
    h.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
    h.add("event-focusin", function(a, d, b) {
      return"onfocusin" in b
    });
    h("touch") && h.add("touch-can-modify-event-delegate", function() {
      var a = function() {
      };
      a.prototype = document.createEvent("MouseEvents");
      try {
        var d = new a;
        d.target = null;
        return null === d.target
      }catch(b) {
        return!1
      }
    });
    var e = function(a, d, b, f) {
      return"function" == typeof a.on && "function" != typeof d && !a.nodeType ? a.on(d, b) : e.parse(a, d, b, q, f, this)
    };
    e.pausable = function(a, d, b, f) {
      var k;
      a = e(a, d, function() {
        if(!k) {
          return b.apply(this, arguments)
        }
      }, f);
      a.pause = function() {
        k = !0
      };
      a.resume = function() {
        k = !1
      };
      return a
    };
    e.once = function(a, d, b, f) {
      var k = e(a, d, function() {
        k.remove();
        return b.apply(this, arguments)
      });
      return k
    };
    e.parse = function(a, d, b, f, k, c) {
      var r;
      if(d.call) {
        return d.call(c, a, b)
      }
      d instanceof Array ? r = d : -1 < d.indexOf(",") && (r = d.split(/\s*,\s*/));
      if(r) {
        var g = [];
        d = 0;
        for(var l;l = r[d++];) {
          g.push(e.parse(a, l, b, f, k, c))
        }
        g.remove = function() {
          for(var a = 0;a < g.length;a++) {
            g[a].remove()
          }
        };
        return g
      }
      return f(a, d, b, k, c)
    };
    var l = /^touch/;
    e.matches = function(a, d, b, f, e) {
      e = e && "function" == typeof e.matches ? e : n.query;
      f = !1 !== f;
      1 != a.nodeType && (a = a.parentNode);
      for(;!e.matches(a, d, b);) {
        if(a == b || !1 === f || !(a = a.parentNode) || 1 != a.nodeType) {
          return!1
        }
      }
      return a
    };
    e.selector = function(a, d, b) {
      return function(f, k) {
        function c(d) {
          return e.matches(d, a, f, b, r)
        }
        var r = "function" == typeof a ? {matches:a} : this, g = d.bubble;
        return g ? e(f, g(c), k) : e(f, d, function(a) {
          var d = c(a.target);
          if(d) {
            return k.call(d, a)
          }
        })
      }
    };
    var a = [].slice, b = e.emit = function(d, b, f) {
      var e = a.call(arguments, 2), k = "on" + b;
      if("parentNode" in d) {
        var c = e[0] = {}, r;
        for(r in f) {
          c[r] = f[r]
        }
        c.preventDefault = m;
        c.stopPropagation = p;
        c.target = d;
        c.type = b;
        f = c
      }
      do {
        d[k] && d[k].apply(d, e)
      }while(f && f.bubbles && (d = d.parentNode));
      return f && f.cancelable && f
    }, f = h("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
    if(!h("event-stopimmediatepropagation")) {
      var d = function() {
        this.modified = this.immediatelyStopped = !0
      }, r = function(a) {
        return function(b) {
          if(!b.immediatelyStopped) {
            return b.stopImmediatePropagation = d, a.apply(this, arguments)
          }
        }
      }
    }
    if(h("dom-addeventlistener")) {
      e.emit = function(a, d, f) {
        if(a.dispatchEvent && document.createEvent) {
          var k = (a.ownerDocument || document).createEvent("HTMLEvents");
          k.initEvent(d, !!f.bubbles, !!f.cancelable);
          for(var c in f) {
            c in k || (k[c] = f[c])
          }
          return a.dispatchEvent(k) && k
        }
        return b.apply(e, arguments)
      }
    }else {
      e._fixEvent = function(a, d) {
        a || (a = (d && (d.ownerDocument || d.document || d).parentWindow || window).event);
        if(!a) {
          return a
        }
        try {
          u && (a.type == u.type && a.srcElement == u.target) && (a = u)
        }catch(b) {
        }
        if(!a.target) {
          switch(a.target = a.srcElement, a.currentTarget = d || a.srcElement, "mouseover" == a.type && (a.relatedTarget = a.fromElement), "mouseout" == a.type && (a.relatedTarget = a.toElement), a.stopPropagation || (a.stopPropagation = w, a.preventDefault = s), a.type) {
            case "keypress":
              var f = "charCode" in a ? a.charCode : a.keyCode;
              10 == f ? (f = 0, a.keyCode = 13) : 13 == f || 27 == f ? f = 0 : 3 == f && (f = 99);
              a.charCode = f;
              f = a;
              f.keyChar = f.charCode ? String.fromCharCode(f.charCode) : "";
              f.charOrCode = f.keyChar || f.keyCode
          }
        }
        return a
      };
      var u, k = function(a) {
        this.handle = a
      };
      k.prototype.remove = function() {
        delete _dojoIEListeners_[this.handle]
      };
      var t = function(a) {
        return function(d) {
          d = e._fixEvent(d, this);
          var b = a.call(this, d);
          d.modified && (u || setTimeout(function() {
            u = null
          }), u = d);
          return b
        }
      }, x = function(a, d, b) {
        b = t(b);
        if(((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > h("jscript")) && !h("config-_allow_leaks")) {
          "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
          var f = a[d];
          if(!f || !f.listeners) {
            var e = f, f = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
            f.listeners = [];
            a[d] = f;
            f.global = this;
            e && f.listeners.push(_dojoIEListeners_.push(e) - 1)
          }
          f.listeners.push(a = f.global._dojoIEListeners_.push(b) - 1);
          return new k(a)
        }
        return c.after(a, d, b, !0)
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
        return function(d) {
          var b = d.corrected;
          if(!b) {
            var f = d.type;
            try {
              delete d.type
            }catch(e) {
            }
            if(d.type) {
              if(h("touch-can-modify-event-delegate")) {
                y.prototype = d, b = new y
              }else {
                var b = {}, k;
                for(k in d) {
                  b[k] = d[k]
                }
              }
              b.preventDefault = function() {
                d.preventDefault()
              };
              b.stopPropagation = function() {
                d.stopPropagation()
              }
            }else {
              b = d, b.type = f
            }
            d.corrected = b;
            if("resize" == f) {
              if(z == window.orientation) {
                return null
              }
              z = window.orientation;
              b.type = "orientationchange";
              return a.call(this, b)
            }
            "rotation" in b || (b.rotation = 0, b.scale = 1);
            if(window.TouchEvent && d instanceof TouchEvent) {
              var f = b.changedTouches[0], c;
              for(c in f) {
                delete b[c], b[c] = f[c]
              }
            }
          }
          return a.call(this, b)
        }
      }
    }
    return e
  })
}, "dojo/_base/array":function() {
  define(["./kernel", "../has", "./lang"], function(c, n, h) {
    function q(a) {
      return g[a] = new Function("item", "index", "array", a)
    }
    function m(a) {
      var b = !a;
      return function(f, d, e) {
        var c = 0, k = f && f.length || 0, l;
        k && "string" == typeof f && (f = f.split(""));
        "string" == typeof d && (d = g[d] || q(d));
        if(e) {
          for(;c < k;++c) {
            if(l = !d.call(e, f[c], c, f), a ^ l) {
              return!l
            }
          }
        }else {
          for(;c < k;++c) {
            if(l = !d(f[c], c, f), a ^ l) {
              return!l
            }
          }
        }
        return b
      }
    }
    function p(a) {
      var b = 1, f = 0, d = 0;
      a || (b = f = d = -1);
      return function(c, g, k, h) {
        if(h && 0 < b) {
          return l.lastIndexOf(c, g, k)
        }
        h = c && c.length || 0;
        var m = a ? h + d : f;
        k === e ? k = a ? f : h + d : 0 > k ? (k = h + k, 0 > k && (k = f)) : k = k >= h ? h + d : k;
        for(h && "string" == typeof c && (c = c.split(""));k != m;k += b) {
          if(c[k] == g) {
            return k
          }
        }
        return-1
      }
    }
    var g = {}, e, l = {every:m(!1), some:m(!0), indexOf:p(!0), lastIndexOf:p(!1), forEach:function(a, b, f) {
      var d = 0, e = a && a.length || 0;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = g[b] || q(b));
      if(f) {
        for(;d < e;++d) {
          b.call(f, a[d], d, a)
        }
      }else {
        for(;d < e;++d) {
          b(a[d], d, a)
        }
      }
    }, map:function(a, b, f, d) {
      var e = 0, c = a && a.length || 0;
      d = new (d || Array)(c);
      c && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = g[b] || q(b));
      if(f) {
        for(;e < c;++e) {
          d[e] = b.call(f, a[e], e, a)
        }
      }else {
        for(;e < c;++e) {
          d[e] = b(a[e], e, a)
        }
      }
      return d
    }, filter:function(a, b, f) {
      var d = 0, e = a && a.length || 0, c = [], k;
      e && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = g[b] || q(b));
      if(f) {
        for(;d < e;++d) {
          k = a[d], b.call(f, k, d, a) && c.push(k)
        }
      }else {
        for(;d < e;++d) {
          k = a[d], b(k, d, a) && c.push(k)
        }
      }
      return c
    }, clearCache:function() {
      g = {}
    }};
    h.mixin(c, l);
    return l
  })
}, "dojo/selector/_loader":function() {
  define(["../has", "require"], function(c, n) {
    if("undefined" !== typeof document) {
      var h = document.createElement("div");
      c.add("dom-qsa2.1", !!h.querySelectorAll);
      c.add("dom-qsa3", function() {
        try {
          return h.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == h.querySelectorAll(".TEST:empty").length
        }catch(c) {
        }
      })
    }
    var q;
    return{load:function(h, p, g, e) {
      if(e && e.isBuild) {
        g()
      }else {
        e = n;
        h = "default" == h ? c("config-selectorEngine") || "css3" : h;
        h = "css2" == h || "lite" == h ? "./lite" : "css2.1" == h ? c("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == h ? c("dom-qsa3") ? "./lite" : "./acme" : "acme" == h ? "./acme" : (e = p) && h;
        if("?" == h.charAt(h.length - 1)) {
          h = h.substring(0, h.length - 1);
          var l = !0
        }
        if(l && (c("dom-compliant-qsa") || q)) {
          return g(q)
        }
        e([h], function(a) {
          "./lite" != h && (q = a);
          g(a)
        })
      }
    }}
  })
}, "dojo/selector/lite":function() {
  define(["../has", "../_base/kernel"], function(c, n) {
    var h = document.createElement("div"), q = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.msMatchesSelector || h.oMatchesSelector, m = h.querySelectorAll, p = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    c.add("dom-matches-selector", !!q);
    c.add("dom-qsa", !!m);
    var g = function(b, f) {
      if(a && -1 < b.indexOf(",")) {
        return a(b, f)
      }
      var d = f ? f.ownerDocument || f : n.doc || document, c = (m ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(b);
      f = f || d;
      if(c) {
        if(c[2]) {
          var h = n.byId ? n.byId(c[2], d) : d.getElementById(c[2]);
          if(!h || c[1] && c[1] != h.tagName.toLowerCase()) {
            return[]
          }
          if(f != d) {
            for(d = h;d != f;) {
              if(d = d.parentNode, !d) {
                return[]
              }
            }
          }
          return c[3] ? g(c[3], h) : [h]
        }
        if(c[3] && f.getElementsByClassName) {
          return f.getElementsByClassName(c[4])
        }
        if(c[5]) {
          if(h = f.getElementsByTagName(c[5]), c[4] || c[6]) {
            b = (c[4] || "") + c[6]
          }else {
            return h
          }
        }
      }
      if(m) {
        return 1 === f.nodeType && "object" !== f.nodeName.toLowerCase() ? e(f, b, f.querySelectorAll) : f.querySelectorAll(b)
      }
      h || (h = f.getElementsByTagName("*"));
      for(var c = [], d = 0, k = h.length;d < k;d++) {
        var p = h[d];
        1 == p.nodeType && l(p, b, f) && c.push(p)
      }
      return c
    }, e = function(a, f, d) {
      var e = a, c = a.getAttribute("id"), k = c || "__dojo__", g = a.parentNode, l = /^\s*[+~]/.test(f);
      if(l && !g) {
        return[]
      }
      c ? k = k.replace(/'/g, "\\$\x26") : a.setAttribute("id", k);
      l && g && (a = a.parentNode);
      f = f.match(p);
      for(g = 0;g < f.length;g++) {
        f[g] = "[id\x3d'" + k + "'] " + f[g]
      }
      f = f.join(",");
      try {
        return d.call(a, f)
      }finally {
        c || e.removeAttribute("id")
      }
    };
    if(!c("dom-matches-selector")) {
      var l = function() {
        function a(d, b, f) {
          var e = b.charAt(0);
          if('"' == e || "'" == e) {
            b = b.slice(1, -1)
          }
          b = b.replace(/\\/g, "");
          var c = g[f || ""];
          return function(a) {
            return(a = a.getAttribute(d)) && c(a, b)
          }
        }
        function f(a) {
          return function(d, b) {
            for(;(d = d.parentNode) != b;) {
              if(a(d, b)) {
                return!0
              }
            }
          }
        }
        function d(a) {
          return function(d, b) {
            d = d.parentNode;
            return a ? d != b && a(d, b) : d == b
          }
        }
        function e(a, d) {
          return a ? function(b, f) {
            return d(b) && a(b, f)
          } : d
        }
        var c = "div" == h.tagName ? "toLowerCase" : "toUpperCase", k = {"":function(a) {
          a = a[c]();
          return function(d) {
            return d.tagName == a
          }
        }, ".":function(a) {
          var d = " " + a + " ";
          return function(b) {
            return-1 < b.className.indexOf(a) && -1 < (" " + b.className + " ").indexOf(d)
          }
        }, "#":function(a) {
          return function(d) {
            return d.id == a
          }
        }}, g = {"^\x3d":function(a, d) {
          return 0 == a.indexOf(d)
        }, "*\x3d":function(a, d) {
          return-1 < a.indexOf(d)
        }, "$\x3d":function(a, d) {
          return a.substring(a.length - d.length, a.length) == d
        }, "~\x3d":function(a, d) {
          return-1 < (" " + a + " ").indexOf(" " + d + " ")
        }, "|\x3d":function(a, d) {
          return 0 == (a + "-").indexOf(d + "-")
        }, "\x3d":function(a, d) {
          return a == d
        }, "":function(a, d) {
          return!0
        }}, l = {};
        return function(c, g, h) {
          var p = l[g];
          if(!p) {
            if(g.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, function(c, g, l, h, m, u, q) {
              h ? p = e(p, k[l || ""](h.replace(/\\/g, ""))) : g ? p = (" " == g ? f : d)(p) : m && (p = e(p, a(m, q, u)));
              return""
            })) {
              throw Error("Syntax error in query");
            }
            if(!p) {
              return!0
            }
            l[g] = p
          }
          return p(c, h)
        }
      }()
    }
    if(!c("dom-qsa")) {
      var a = function(a, f) {
        for(var d = a.match(p), e = [], c = 0;c < d.length;c++) {
          a = new String(d[c].replace(/\s*$/, ""));
          a.indexOf = escape;
          for(var k = g(a, f), l = 0, h = k.length;l < h;l++) {
            var m = k[l];
            e[m.sourceIndex] = m
          }
        }
        d = [];
        for(c in e) {
          d.push(e[c])
        }
        return d
      }
    }
    g.match = q ? function(a, f, d) {
      return d && 9 != d.nodeType ? e(d, f, function(d) {
        return q.call(a, d)
      }) : q.call(a, f)
    } : l;
    return g
  })
}, "dojo/domReady":function() {
  define(["./global", "./has"], function(c, n) {
    function h(a) {
      l.push(a);
      e && q()
    }
    function q() {
      if(!a) {
        for(a = !0;l.length;) {
          try {
            l.shift()(m)
          }catch(d) {
            console.error(d, "in domReady callback", d.stack)
          }
        }
        a = !1;
        h._onQEmpty()
      }
    }
    var m = document, p = {loaded:1, complete:1}, g = "string" != typeof m.readyState, e = !!p[m.readyState], l = [], a;
    h.load = function(a, d, b) {
      h(b)
    };
    h._Q = l;
    h._onQEmpty = function() {
    };
    g && (m.readyState = "loading");
    if(!e) {
      var b = [], f = function(a) {
        a = a || c.event;
        e || "readystatechange" == a.type && !p[m.readyState] || (g && (m.readyState = "complete"), e = 1, q())
      }, d = function(a, d) {
        a.addEventListener(d, f, !1);
        l.push(function() {
          a.removeEventListener(d, f, !1)
        })
      };
      if(!n("dom-addeventlistener")) {
        var d = function(a, d) {
          d = "on" + d;
          a.attachEvent(d, f);
          l.push(function() {
            a.detachEvent(d, f)
          })
        }, r = m.createElement("div");
        try {
          r.doScroll && null === c.frameElement && b.push(function() {
            try {
              return r.doScroll("left"), 1
            }catch(a) {
            }
          })
        }catch(u) {
        }
      }
      d(m, "DOMContentLoaded");
      d(c, "load");
      "onreadystatechange" in m ? d(m, "readystatechange") : g || b.push(function() {
        return p[m.readyState]
      });
      if(b.length) {
        var k = function() {
          if(!e) {
            for(var a = b.length;a--;) {
              if(b[a]()) {
                f("poller");
                return
              }
            }
            setTimeout(k, 30)
          }
        };
        k()
      }
    }
    return h
  })
}, "dijit/Tooltip":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff ./_base/manager ./place ./_Widget ./_TemplatedMixin ./BackgroundIframe dojo/text!./templates/Tooltip.html ./main".split(" "), function(c, n, h, q, m, p, g, e, l, a, b, f, d, r, u, k, t, x) {
    function w() {
    }
    var s = n("dijit._MasterTooltip", [r, u], {duration:f.defaultDuration, templateString:t, postCreate:function() {
      this.ownerDocumentBody.appendChild(this.domNode);
      this.bgIframe = new k(this.domNode);
      this.fadeIn = h.fadeIn({node:this.domNode, duration:this.duration, onEnd:e.hitch(this, "_onShow")});
      this.fadeOut = h.fadeOut({node:this.domNode, duration:this.duration, onEnd:e.hitch(this, "_onHide")})
    }, show:function(a, b, f, c, k, l, h) {
      if(!this.aroundNode || !(this.aroundNode === b && this.containerNode.innerHTML == a)) {
        if("playing" == this.fadeOut.status()) {
          this._onDeck = arguments
        }else {
          this.containerNode.innerHTML = a;
          k && this.set("textDir", k);
          this.containerNode.align = c ? "right" : "left";
          var r = d.around(this.domNode, b, f && f.length ? f : y.defaultPosition, !c, e.hitch(this, "orient")), p = r.aroundNodePos;
          "M" == r.corner.charAt(0) && "M" == r.aroundCorner.charAt(0) ? (this.connectorNode.style.top = p.y + (p.h - this.connectorNode.offsetHeight >> 1) - r.y + "px", this.connectorNode.style.left = "") : "M" == r.corner.charAt(1) && "M" == r.aroundCorner.charAt(1) ? this.connectorNode.style.left = p.x + (p.w - this.connectorNode.offsetWidth >> 1) - r.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
          g.set(this.domNode, "opacity", 0);
          this.fadeIn.play();
          this.isShowingNow = !0;
          this.aroundNode = b;
          this.onMouseEnter = l || w;
          this.onMouseLeave = h || w
        }
      }
    }, orient:function(a, d, f, e, c) {
      this.connectorNode.style.top = "";
      var k = e.h;
      e = e.w;
      a.className = "dijitTooltip " + {"MR-ML":"dijitTooltipRight", "ML-MR":"dijitTooltipLeft", "TM-BM":"dijitTooltipAbove", "BM-TM":"dijitTooltipBelow", "BL-TL":"dijitTooltipBelow dijitTooltipABLeft", "TL-BL":"dijitTooltipAbove dijitTooltipABLeft", "BR-TR":"dijitTooltipBelow dijitTooltipABRight", "TR-BR":"dijitTooltipAbove dijitTooltipABRight", "BR-BL":"dijitTooltipRight", "BL-BR":"dijitTooltipLeft"}[d + "-" + f];
      this.domNode.style.width = "auto";
      var g = p.position(this.domNode);
      if(b("ie") || b("trident")) {
        g.w += 2
      }
      var l = Math.min(Math.max(e, 1), g.w);
      p.setMarginBox(this.domNode, {w:l});
      "B" == f.charAt(0) && "B" == d.charAt(0) ? (a = p.position(a), d = this.connectorNode.offsetHeight, a.h > k ? (this.connectorNode.style.top = k - (c.h + d >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(c.h / 2 - d / 2, 0), a.h - d) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom = "");
      return Math.max(0, g.w - e)
    }, _onShow:function() {
      b("ie") && (this.domNode.style.filter = "")
    }, hide:function(a) {
      this._onDeck && this._onDeck[1] == a ? this._onDeck = null : this.aroundNode === a && (this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play());
      this.onMouseEnter = this.onMouseLeave = w
    }, _onHide:function() {
      this.domNode.style.cssText = "";
      this.containerNode.innerHTML = "";
      this._onDeck && (this.show.apply(this, this._onDeck), this._onDeck = null)
    }});
    b("dojo-bidi") && s.extend({_setAutoTextDir:function(a) {
      this.applyTextDir(a);
      c.forEach(a.children, function(a) {
        this._setAutoTextDir(a)
      }, this)
    }, _setTextDirAttr:function(a) {
      this._set("textDir", a);
      "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
    }});
    x.showTooltip = function(a, d, b, f, e, k, g) {
      b && (b = c.map(b, function(a) {
        return{after:"after-centered", before:"before-centered"}[a] || a
      }));
      y._masterTT || (x._masterTT = y._masterTT = new s);
      return y._masterTT.show(a, d, b, f, e, k, g)
    };
    x.hideTooltip = function(a) {
      return y._masterTT && y._masterTT.hide(a)
    };
    var y = n("dijit.Tooltip", r, {label:"", showDelay:400, hideDelay:400, connectId:[], position:[], selector:"", _setConnectIdAttr:function(d) {
      c.forEach(this._connections || [], function(a) {
        c.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this._connectIds = c.filter(e.isArrayLike(d) ? d : d ? [d] : [], function(a) {
        return q.byId(a, this.ownerDocument)
      }, this);
      this._connections = c.map(this._connectIds, function(d) {
        d = q.byId(d, this.ownerDocument);
        var b = this.selector, f = b ? function(d) {
          return a.selector(b, d)
        } : function(a) {
          return a
        }, c = this;
        return[a(d, f(l.enter), function() {
          c._onHover(this)
        }), a(d, f("focusin"), function() {
          c._onHover(this)
        }), a(d, f(l.leave), e.hitch(c, "_onUnHover")), a(d, f("focusout"), e.hitch(c, "set", "state", "DORMANT"))]
      }, this);
      this._set("connectId", d)
    }, addTarget:function(a) {
      a = a.id || a;
      -1 == c.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
    }, removeTarget:function(a) {
      a = c.indexOf(this._connectIds, a.id || a);
      0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
    }, buildRendering:function() {
      this.inherited(arguments);
      m.add(this.domNode, "dijitTooltipData")
    }, startup:function() {
      this.inherited(arguments);
      var a = this.connectId;
      c.forEach(e.isArrayLike(a) ? a : [a], this.addTarget, this)
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
            var d = this.getContent(this._connectNode);
            if(!d) {
              this.set("state", "DORMANT");
              return
            }
            y.show(d, this._connectNode, this.position, !this.isLeftToRight(), this.textDir, e.hitch(this, "set", "state", "SHOWING"), e.hitch(this, "set", "state", "HIDE TIMER"));
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
      c.forEach(this._connections || [], function(a) {
        c.forEach(a, function(a) {
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
}, "dojo/_base/declare":function() {
  define(["./kernel", "../has", "./lang"], function(c, n, h) {
    function q(a, d) {
      throw Error("declare" + (d ? " " + d : "") + ": " + a);
    }
    function m(a, d, b) {
      var f, e, c, k, g, l, h, r = this._inherited = this._inherited || {};
      "string" == typeof a && (f = a, a = d, d = b);
      b = 0;
      k = a.callee;
      (f = f || k.nom) || q("can't deduce a name to call inherited()", this.declaredClass);
      g = this.constructor._meta;
      c = g.bases;
      h = r.p;
      if(f != D) {
        if(r.c !== k && (h = 0, l = c[0], g = l._meta, g.hidden[f] !== k)) {
          (e = g.chains) && "string" == typeof e[f] && q("calling chained method with inherited: " + f, this.declaredClass);
          do {
            if(g = l._meta, e = l.prototype, g && (e[f] === k && e.hasOwnProperty(f) || g.hidden[f] === k)) {
              break
            }
          }while(l = c[++h]);
          h = l ? h : -1
        }
        if(l = c[++h]) {
          if(e = l.prototype, l._meta && e.hasOwnProperty(f)) {
            b = e[f]
          }else {
            k = s[f];
            do {
              if(e = l.prototype, (b = e[f]) && (l._meta ? e.hasOwnProperty(f) : b !== k)) {
                break
              }
            }while(l = c[++h])
          }
        }
        b = l && b || s[f]
      }else {
        if(r.c !== k && (h = 0, (g = c[0]._meta) && g.ctor !== k)) {
          e = g.chains;
          for((!e || "manual" !== e.constructor) && q("calling chained constructor with inherited", this.declaredClass);(l = c[++h]) && !((g = l._meta) && g.ctor === k);) {
          }
          h = l ? h : -1
        }
        for(;(l = c[++h]) && !(b = (g = l._meta) ? g.ctor : l);) {
        }
        b = l && b
      }
      r.c = b;
      r.p = h;
      if(b) {
        return!0 === d ? b : b.apply(this, d || a)
      }
    }
    function p(a, d) {
      return"string" == typeof a ? this.__inherited(a, d, !0) : this.__inherited(a, !0)
    }
    function g(a, d, b) {
      var f = this.getInherited(a, d);
      if(f) {
        return f.apply(this, b || d || a)
      }
    }
    function e(a) {
      for(var d = this.constructor._meta.bases, b = 0, f = d.length;b < f;++b) {
        if(d[b] === a) {
          return!0
        }
      }
      return this instanceof a
    }
    function l(a, d) {
      for(var b in d) {
        b != D && d.hasOwnProperty(b) && (a[b] = d[b])
      }
      if(n("bug-for-in-skips-shadowed")) {
        for(var f = h._extraNames, e = f.length;e;) {
          b = f[--e], b != D && d.hasOwnProperty(b) && (a[b] = d[b])
        }
      }
    }
    function a(a) {
      x.safeMixin(this.prototype, a);
      return this
    }
    function b(a, d) {
      a instanceof Array || "function" == typeof a || (d = a, a = void 0);
      d = d || {};
      a = a || [];
      return x([this].concat(a), d)
    }
    function f(a, d) {
      return function() {
        var b = arguments, f = b, e = b[0], c, k;
        k = a.length;
        var g;
        if(!(this instanceof b.callee)) {
          return t(b)
        }
        if(d && (e && e.preamble || this.preamble)) {
          g = Array(a.length);
          g[0] = b;
          for(c = 0;;) {
            if(e = b[0]) {
              (e = e.preamble) && (b = e.apply(this, b) || b)
            }
            e = a[c].prototype;
            (e = e.hasOwnProperty("preamble") && e.preamble) && (b = e.apply(this, b) || b);
            if(++c == k) {
              break
            }
            g[c] = b
          }
        }
        for(c = k - 1;0 <= c;--c) {
          e = a[c], (e = (k = e._meta) ? k.ctor : e) && e.apply(this, g ? g[c] : b)
        }
        (e = this.postscript) && e.apply(this, f)
      }
    }
    function d(a, d) {
      return function() {
        var b = arguments, f = b, e = b[0];
        if(!(this instanceof b.callee)) {
          return t(b)
        }
        d && (e && (e = e.preamble) && (f = e.apply(this, f) || f), (e = this.preamble) && e.apply(this, f));
        a && a.apply(this, b);
        (e = this.postscript) && e.apply(this, b)
      }
    }
    function r(a) {
      return function() {
        var d = arguments, b = 0, f, e;
        if(!(this instanceof d.callee)) {
          return t(d)
        }
        for(;f = a[b];++b) {
          if(f = (e = f._meta) ? e.ctor : f) {
            f.apply(this, d);
            break
          }
        }
        (f = this.postscript) && f.apply(this, d)
      }
    }
    function u(a, d, b) {
      return function() {
        var f, e, c = 0, k = 1;
        b && (c = d.length - 1, k = -1);
        for(;f = d[c];c += k) {
          e = f._meta, (f = (e ? e.hidden : f.prototype)[a]) && f.apply(this, arguments)
        }
      }
    }
    function k(a) {
      z.prototype = a.prototype;
      a = new z;
      z.prototype = null;
      return a
    }
    function t(a) {
      var d = a.callee, b = k(d);
      d.apply(b, a);
      return b
    }
    function x(c, g, n) {
      "string" != typeof c && (n = g, g = c, c = "");
      n = n || {};
      var t, z, A, B, F, C, H, N = 1, Z = g;
      if("[object Array]" == y.call(g)) {
        N = c;
        A = [];
        B = [{cls:0, refs:[]}];
        C = {};
        for(var V = 1, W = g.length, Q = 0, J, X, E, L;Q < W;++Q) {
          (J = g[Q]) ? "[object Function]" != y.call(J) && q("mixin #" + Q + " is not a callable constructor.", N) : q("mixin #" + Q + " is unknown. Did you use dojo.require to pull it in?", N);
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
        V && q("can't build consistent linearization", N);
        J = g[0];
        A[0] = J ? J._meta && J === A[A.length - J._meta.bases.length] ? J._meta.bases.length : 1 : 0;
        C = A;
        A = C[0];
        N = C.length - A;
        g = C[N]
      }else {
        C = [0], g ? "[object Function]" == y.call(g) ? (A = g._meta, C = C.concat(A ? A.bases : g)) : q("base class is not a callable constructor.", c) : null !== g && q("unknown base class. Did you use dojo.require to pull it in?", c)
      }
      if(g) {
        for(z = N - 1;;--z) {
          t = k(g);
          if(!z) {
            break
          }
          A = C[z];
          (A._meta ? l : w)(t, A.prototype);
          B = new Function;
          B.superclass = g;
          B.prototype = t;
          g = t.constructor = B
        }
      }else {
        t = {}
      }
      x.safeMixin(t, n);
      A = n.constructor;
      A !== s.constructor && (A.nom = D, t.constructor = A);
      for(z = N - 1;z;--z) {
        (A = C[z]._meta) && A.chains && (H = w(H || {}, A.chains))
      }
      t["-chains-"] && (H = w(H || {}, t["-chains-"]));
      g && (g.prototype && g.prototype["-chains-"]) && (H = w(H || {}, g.prototype["-chains-"]));
      A = !H || !H.hasOwnProperty(D);
      C[0] = B = H && "manual" === H.constructor ? r(C) : 1 == C.length ? d(n.constructor, A) : f(C, A);
      B._meta = {bases:C, hidden:n, chains:H, parents:Z, ctor:n.constructor};
      B.superclass = g && g.prototype;
      B.extend = a;
      B.createSubclass = b;
      B.prototype = t;
      t.constructor = B;
      t.getInherited = p;
      t.isInstanceOf = e;
      t.inherited = G;
      t.__inherited = m;
      c && (t.declaredClass = c, h.setObject(c, B));
      if(H) {
        for(F in H) {
          t[F] && ("string" == typeof H[F] && F != D) && (A = t[F] = u(F, C, "after" === H[F]), A.nom = F)
        }
      }
      return B
    }
    var w = h.mixin, s = Object.prototype, y = s.toString, z = new Function, v = 0, D = "constructor", G = c.config.isDebug ? g : m;
    c.safeMixin = x.safeMixin = function(a, d) {
      var b, f;
      for(b in d) {
        if(f = d[b], (f !== s[b] || !(b in s)) && b != D) {
          "[object Function]" == y.call(f) && (f.nom = b), a[b] = f
        }
      }
      if(n("bug-for-in-skips-shadowed")) {
        for(var e = h._extraNames, c = e.length;c;) {
          if(b = e[--c], f = d[b], (f !== s[b] || !(b in s)) && b != D) {
            "[object Function]" == y.call(f) && (f.nom = b), a[b] = f
          }
        }
      }
      return a
    };
    return c.declare = x
  })
}, "dojo/_base/fx":function() {
  define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function(c, n, h, q, m, p, g, e, l) {
    var a = h.mixin, b = {}, f = b._Line = function(a, d) {
      this.start = a;
      this.end = d
    };
    f.prototype.getValue = function(a) {
      return(this.end - this.start) * a + this.start
    };
    var d = b.Animation = function(d) {
      a(this, d);
      h.isArray(this.curve) && (this.curve = new f(this.curve[0], this.curve[1]))
    };
    d.prototype = new q;
    h.extend(d, {duration:350, repeat:0, rate:20, _percent:0, _startRepeatCount:0, _getStep:function() {
      var a = this._percent, d = this.easing;
      return d ? d(a) : a
    }, _fire:function(a, d) {
      var b = d || [];
      if(this[a]) {
        if(n.debugAtAllCosts) {
          this[a].apply(this, b)
        }else {
          try {
            this[a].apply(this, b)
          }catch(f) {
            console.error("exception in animation handler for:", a), console.error(f)
          }
        }
      }
      return this
    }, play:function(a, d) {
      this._delayTimer && this._clearTimer();
      if(d) {
        this._stopTimer(), this._active = this._paused = !1, this._percent = 0
      }else {
        if(this._active && !this._paused) {
          return this
        }
      }
      this._fire("beforeBegin", [this.node]);
      var b = a || this.delay, f = h.hitch(this, "_play", d);
      if(0 < b) {
        return this._delayTimer = setTimeout(f, b), this
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
    }, gotoPercent:function(a, d) {
      this._stopTimer();
      this._active = this._paused = !0;
      this._percent = a;
      d && this.play();
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
    var r = 0, u = null, k = {run:function() {
    }};
    h.extend(d, {_startTimer:function() {
      this._timer || (this._timer = p.after(k, "run", h.hitch(this, "_cycle"), !0), r++);
      u || (u = setInterval(h.hitch(k, "run"), this.rate))
    }, _stopTimer:function() {
      this._timer && (this._timer.remove(), this._timer = null, r--);
      0 >= r && (clearInterval(u), u = null, r = 0)
    }});
    var t = g("ie") ? function(a) {
      var d = a.style;
      !d.width.length && "auto" == l.get(a, "width") && (d.width = "auto")
    } : function() {
    };
    b._fade = function(d) {
      d.node = e.byId(d.node);
      var f = a({properties:{}}, d);
      d = f.properties.opacity = {};
      d.start = !("start" in f) ? function() {
        return+l.get(f.node, "opacity") || 0
      } : f.start;
      d.end = f.end;
      d = b.animateProperty(f);
      p.after(d, "beforeBegin", h.partial(t, f.node), !0);
      return d
    };
    b.fadeIn = function(d) {
      return b._fade(a({end:1}, d))
    };
    b.fadeOut = function(d) {
      return b._fade(a({end:0}, d))
    };
    b._defaultEasing = function(a) {
      return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2
    };
    var x = function(a) {
      this._properties = a;
      for(var d in a) {
        var b = a[d];
        b.start instanceof m && (b.tempColor = new m)
      }
    };
    x.prototype.getValue = function(a) {
      var d = {}, b;
      for(b in this._properties) {
        var f = this._properties[b], e = f.start;
        e instanceof m ? d[b] = m.blendColors(e, f.end, a, f.tempColor).toCss() : h.isArray(e) || (d[b] = (f.end - e) * a + e + ("opacity" != b ? f.units || "px" : 0))
      }
      return d
    };
    b.animateProperty = function(b) {
      var f = b.node = e.byId(b.node);
      b.easing || (b.easing = c._defaultEasing);
      b = new d(b);
      p.after(b, "beforeBegin", h.hitch(b, function() {
        var d = {}, b;
        for(b in this.properties) {
          if("width" == b || "height" == b) {
            this.node.display = "block"
          }
          var e = this.properties[b];
          h.isFunction(e) && (e = e(f));
          e = d[b] = a({}, h.isObject(e) ? e : {end:e});
          h.isFunction(e.start) && (e.start = e.start(f));
          h.isFunction(e.end) && (e.end = e.end(f));
          var c = 0 <= b.toLowerCase().indexOf("color"), k = function(a, d) {
            var b = {height:a.offsetHeight, width:a.offsetWidth}[d];
            if(void 0 !== b) {
              return b
            }
            b = l.get(a, d);
            return"opacity" == d ? +b : c ? b : parseFloat(b)
          };
          "end" in e ? "start" in e || (e.start = k(f, b)) : e.end = k(f, b);
          c ? (e.start = new m(e.start), e.end = new m(e.end)) : e.start = "opacity" == b ? +e.start : parseFloat(e.start)
        }
        this.curve = new x(d)
      }), !0);
      p.after(b, "onAnimate", h.hitch(l, "set", b.node), !0);
      return b
    };
    b.anim = function(a, f, e, c, k, g) {
      return b.animateProperty({node:a, duration:e || d.prototype.duration, properties:f, easing:c, onEnd:k}).play(g || 0)
    };
    a(c, b);
    c._Animation = d;
    return b
  })
}, "dojo/Evented":function() {
  define(["./aspect", "./on"], function(c, n) {
    function h() {
    }
    var q = c.after;
    h.prototype = {on:function(c, h) {
      return n.parse(this, c, h, function(c, e) {
        return q(c, "on" + e, h, !0)
      })
    }, emit:function(c, h) {
      var g = [this];
      g.push.apply(g, arguments);
      return n.emit.apply(n, g)
    }};
    return h
  })
}, "dojo/aspect":function() {
  define([], function() {
    function c(c, e, l, a) {
      var b = c[e], f = "around" == e, d;
      if(f) {
        var h = l(function() {
          return b.advice(this, arguments)
        });
        d = {remove:function() {
          h && (h = c = l = null)
        }, advice:function(a, d) {
          return h ? h.apply(a, d) : b.advice(a, d)
        }}
      }else {
        d = {remove:function() {
          if(d.advice) {
            var a = d.previous, b = d.next;
            !b && !a ? delete c[e] : (a ? a.next = b : c[e] = b, b && (b.previous = a));
            c = l = d.advice = null
          }
        }, id:c.nextId++, advice:l, receiveArguments:a}
      }
      if(b && !f) {
        if("after" == e) {
          for(;b.next && (b = b.next);) {
          }
          b.next = d;
          d.previous = b
        }else {
          "before" == e && (c[e] = d, d.next = b, b.previous = d)
        }
      }else {
        c[e] = d
      }
      return d
    }
    function n(g) {
      return function(e, l, a, b) {
        var f = e[l], d;
        if(!f || f.target != e) {
          e[l] = d = function() {
            for(var a = d.nextId, b = arguments, f = d.before;f;) {
              f.advice && (b = f.advice.apply(this, b) || b), f = f.next
            }
            if(d.around) {
              var e = d.around.advice(this, b)
            }
            for(f = d.after;f && f.id < a;) {
              if(f.advice) {
                if(f.receiveArguments) {
                  var c = f.advice.apply(this, b), e = c === h ? e : c
                }else {
                  e = f.advice.call(this, e, b)
                }
              }
              f = f.next
            }
            return e
          }, f && (d.around = {advice:function(a, d) {
            return f.apply(a, d)
          }}), d.target = e, d.nextId = d.nextId || 0
        }
        e = c(d || f, g, a, b);
        a = null;
        return e
      }
    }
    var h, q = n("after"), m = n("before"), p = n("around");
    return{before:m, around:p, after:q}
  })
}, "dojo/_base/Color":function() {
  define(["./kernel", "./lang", "./array", "./config"], function(c, n, h, q) {
    var m = c.Color = function(c) {
      c && this.setColor(c)
    };
    m.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:q.transparentColor || [0, 0, 0, 0]};
    n.extend(m, {r:255, g:255, b:255, a:1, _set:function(c, g, e, l) {
      this.r = c;
      this.g = g;
      this.b = e;
      this.a = l
    }, setColor:function(c) {
      n.isString(c) ? m.fromString(c, this) : n.isArray(c) ? m.fromArray(c, this) : (this._set(c.r, c.g, c.b, c.a), c instanceof m || this.sanitize());
      return this
    }, sanitize:function() {
      return this
    }, toRgb:function() {
      return[this.r, this.g, this.b]
    }, toRgba:function() {
      return[this.r, this.g, this.b, this.a]
    }, toHex:function() {
      return"#" + h.map(["r", "g", "b"], function(c) {
        c = this[c].toString(16);
        return 2 > c.length ? "0" + c : c
      }, this).join("")
    }, toCss:function(c) {
      var g = this.r + ", " + this.g + ", " + this.b;
      return(c ? "rgba(" + g + ", " + this.a : "rgb(" + g) + ")"
    }, toString:function() {
      return this.toCss(!0)
    }});
    m.blendColors = c.blendColors = function(c, g, e, l) {
      var a = l || new m;
      h.forEach(["r", "g", "b", "a"], function(b) {
        a[b] = c[b] + (g[b] - c[b]) * e;
        "a" != b && (a[b] = Math.round(a[b]))
      });
      return a.sanitize()
    };
    m.fromRgb = c.colorFromRgb = function(c, g) {
      var e = c.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
      return e && m.fromArray(e[1].split(/\s*,\s*/), g)
    };
    m.fromHex = c.colorFromHex = function(c, g) {
      var e = g || new m, l = 4 == c.length ? 4 : 8, a = (1 << l) - 1;
      c = Number("0x" + c.substr(1));
      if(isNaN(c)) {
        return null
      }
      h.forEach(["b", "g", "r"], function(b) {
        var f = c & a;
        c >>= l;
        e[b] = 4 == l ? 17 * f : f
      });
      e.a = 1;
      return e
    };
    m.fromArray = c.colorFromArray = function(c, g) {
      var e = g || new m;
      e._set(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]));
      isNaN(e.a) && (e.a = 1);
      return e.sanitize()
    };
    m.fromString = c.colorFromString = function(c, g) {
      var e = m.named[c];
      return e && m.fromArray(e, g) || m.fromRgb(c, g) || m.fromHex(c, g)
    };
    return m
  })
}, "dojo/dom-style":function() {
  define(["./sniff", "./dom"], function(c, n) {
    function h(d, f, e) {
      f = f.toLowerCase();
      if("auto" == e) {
        if("height" == f) {
          return d.offsetHeight
        }
        if("width" == f) {
          return d.offsetWidth
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
      f in a || (a[f] = b.test(f));
      return a[f] ? p(d, e) : e
    }
    var q, m = {};
    q = c("webkit") ? function(a) {
      var b;
      if(1 == a.nodeType) {
        var f = a.ownerDocument.defaultView;
        b = f.getComputedStyle(a, null);
        !b && a.style && (a.style.display = "", b = f.getComputedStyle(a, null))
      }
      return b || {}
    } : c("ie") && (9 > c("ie") || c("quirks")) ? function(a) {
      return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
    } : function(a) {
      return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
    };
    m.getComputedStyle = q;
    var p;
    p = c("ie") ? function(a, b) {
      if(!b) {
        return 0
      }
      if("medium" == b) {
        return 4
      }
      if(b.slice && "px" == b.slice(-2)) {
        return parseFloat(b)
      }
      var f = a.style, e = a.runtimeStyle, c = f.left, g = e.left;
      e.left = a.currentStyle.left;
      try {
        f.left = b, b = f.pixelLeft
      }catch(l) {
        b = 0
      }
      f.left = c;
      e.left = g;
      return b
    } : function(a, b) {
      return parseFloat(b) || 0
    };
    m.toPixelValue = p;
    var g = function(a, b) {
      try {
        return a.filters.item("DXImageTransform.Microsoft.Alpha")
      }catch(f) {
        return b ? {} : null
      }
    }, e = 9 > c("ie") || 10 > c("ie") && c("quirks") ? function(a) {
      try {
        return g(a).Opacity / 100
      }catch(b) {
        return 1
      }
    } : function(a) {
      return q(a).opacity
    }, l = 9 > c("ie") || 10 > c("ie") && c("quirks") ? function(a, b) {
      "" === b && (b = 1);
      var f = 100 * b;
      1 === b ? (a.style.zoom = "", g(a) && (a.style.filter = a.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (a.style.zoom = 1, g(a) ? g(a, 1).Opacity = f : a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + f + ")", g(a, 1).Enabled = !0);
      if("tr" == a.tagName.toLowerCase()) {
        for(f = a.firstChild;f;f = f.nextSibling) {
          "td" == f.tagName.toLowerCase() && l(f, b)
        }
      }
      return b
    } : function(a, b) {
      return a.style.opacity = b
    }, a = {left:!0, top:!0}, b = /margin|padding|width|height|max|min|offset/, f = {cssFloat:1, styleFloat:1, "float":1};
    m.get = function(a, b) {
      var c = n.byId(a), g = arguments.length;
      if(2 == g && "opacity" == b) {
        return e(c)
      }
      b = f[b] ? "cssFloat" in c.style ? "cssFloat" : "styleFloat" : b;
      var l = m.getComputedStyle(c);
      return 1 == g ? l : h(c, b, l[b] || c.style[b])
    };
    m.set = function(a, b, e) {
      var c = n.byId(a), g = arguments.length, h = "opacity" == b;
      b = f[b] ? "cssFloat" in c.style ? "cssFloat" : "styleFloat" : b;
      if(3 == g) {
        return h ? l(c, e) : c.style[b] = e
      }
      for(var p in b) {
        m.set(a, p, b[p])
      }
      return m.getComputedStyle(c)
    };
    return m
  })
}, "dojo/dom-class":function() {
  define(["./_base/lang", "./_base/array", "./dom"], function(c, n, h) {
    function q(e) {
      if("string" == typeof e || e instanceof String) {
        if(e && !p.test(e)) {
          return g[0] = e, g
        }
        e = e.split(p);
        e.length && !e[0] && e.shift();
        e.length && !e[e.length - 1] && e.pop();
        return e
      }
      return!e ? [] : n.filter(e, function(a) {
        return a
      })
    }
    var m, p = /\s+/, g = [""], e = {};
    return m = {contains:function(e, a) {
      return 0 <= (" " + h.byId(e).className + " ").indexOf(" " + a + " ")
    }, add:function(e, a) {
      e = h.byId(e);
      a = q(a);
      var b = e.className, f, b = b ? " " + b + " " : " ";
      f = b.length;
      for(var d = 0, c = a.length, g;d < c;++d) {
        (g = a[d]) && 0 > b.indexOf(" " + g + " ") && (b += g + " ")
      }
      f < b.length && (e.className = b.substr(1, b.length - 2))
    }, remove:function(e, a) {
      e = h.byId(e);
      var b;
      if(void 0 !== a) {
        a = q(a);
        b = " " + e.className + " ";
        for(var f = 0, d = a.length;f < d;++f) {
          b = b.replace(" " + a[f] + " ", " ")
        }
        b = c.trim(b)
      }else {
        b = ""
      }
      e.className != b && (e.className = b)
    }, replace:function(c, a, b) {
      c = h.byId(c);
      e.className = c.className;
      m.remove(e, b);
      m.add(e, a);
      c.className !== e.className && (c.className = e.className)
    }, toggle:function(e, a, b) {
      e = h.byId(e);
      if(void 0 === b) {
        a = q(a);
        for(var f = 0, d = a.length, c;f < d;++f) {
          c = a[f], m[m.contains(e, c) ? "remove" : "add"](e, c)
        }
      }else {
        m[b ? "add" : "remove"](e, a)
      }
      return b
    }}
  })
}, "dojo/dom-geometry":function() {
  define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(c, n, h, q) {
    function m(a, b, f, d, e, c) {
      c = c || "px";
      a = a.style;
      isNaN(b) || (a.left = b + c);
      isNaN(f) || (a.top = f + c);
      0 <= d && (a.width = d + c);
      0 <= e && (a.height = e + c)
    }
    function p(a) {
      return"button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
    }
    function g(a) {
      return"border-box" == e.boxModel || "table" == a.tagName.toLowerCase() || p(a)
    }
    var e = {boxModel:"content-box"};
    c("ie") && (e.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
    e.getPadExtents = function(a, b) {
      a = h.byId(a);
      var f = b || q.getComputedStyle(a), d = q.toPixelValue, e = d(a, f.paddingLeft), c = d(a, f.paddingTop), g = d(a, f.paddingRight), f = d(a, f.paddingBottom);
      return{l:e, t:c, r:g, b:f, w:e + g, h:c + f}
    };
    e.getBorderExtents = function(a, b) {
      a = h.byId(a);
      var f = q.toPixelValue, d = b || q.getComputedStyle(a), e = "none" != d.borderLeftStyle ? f(a, d.borderLeftWidth) : 0, c = "none" != d.borderTopStyle ? f(a, d.borderTopWidth) : 0, g = "none" != d.borderRightStyle ? f(a, d.borderRightWidth) : 0, f = "none" != d.borderBottomStyle ? f(a, d.borderBottomWidth) : 0;
      return{l:e, t:c, r:g, b:f, w:e + g, h:c + f}
    };
    e.getPadBorderExtents = function(a, b) {
      a = h.byId(a);
      var f = b || q.getComputedStyle(a), d = e.getPadExtents(a, f), f = e.getBorderExtents(a, f);
      return{l:d.l + f.l, t:d.t + f.t, r:d.r + f.r, b:d.b + f.b, w:d.w + f.w, h:d.h + f.h}
    };
    e.getMarginExtents = function(a, b) {
      a = h.byId(a);
      var f = b || q.getComputedStyle(a), d = q.toPixelValue, e = d(a, f.marginLeft), c = d(a, f.marginTop), g = d(a, f.marginRight), f = d(a, f.marginBottom);
      return{l:e, t:c, r:g, b:f, w:e + g, h:c + f}
    };
    e.getMarginBox = function(a, b) {
      a = h.byId(a);
      var f = b || q.getComputedStyle(a), d = e.getMarginExtents(a, f), g = a.offsetLeft - d.l, l = a.offsetTop - d.t, k = a.parentNode, m = q.toPixelValue;
      if(c("mozilla")) {
        var p = parseFloat(f.left), f = parseFloat(f.top);
        !isNaN(p) && !isNaN(f) ? (g = p, l = f) : k && k.style && (k = q.getComputedStyle(k), "visible" != k.overflow && (g += "none" != k.borderLeftStyle ? m(a, k.borderLeftWidth) : 0, l += "none" != k.borderTopStyle ? m(a, k.borderTopWidth) : 0))
      }else {
        if((c("opera") || 8 == c("ie") && !c("quirks")) && k) {
          k = q.getComputedStyle(k), g -= "none" != k.borderLeftStyle ? m(a, k.borderLeftWidth) : 0, l -= "none" != k.borderTopStyle ? m(a, k.borderTopWidth) : 0
        }
      }
      return{l:g, t:l, w:a.offsetWidth + d.w, h:a.offsetHeight + d.h}
    };
    e.getContentBox = function(a, b) {
      a = h.byId(a);
      var f = b || q.getComputedStyle(a), d = a.clientWidth, g = e.getPadExtents(a, f), l = e.getBorderExtents(a, f);
      d ? (f = a.clientHeight, l.w = l.h = 0) : (d = a.offsetWidth, f = a.offsetHeight);
      c("opera") && (g.l += l.l, g.t += l.t);
      return{l:g.l, t:g.t, w:d - g.w - l.w, h:f - g.h - l.h}
    };
    e.setContentSize = function(a, b, f) {
      a = h.byId(a);
      var d = b.w;
      b = b.h;
      g(a) && (f = e.getPadBorderExtents(a, f), 0 <= d && (d += f.w), 0 <= b && (b += f.h));
      m(a, NaN, NaN, d, b)
    };
    var l = {l:0, t:0, w:0, h:0};
    e.setMarginBox = function(a, b, f) {
      a = h.byId(a);
      var d = f || q.getComputedStyle(a);
      f = b.w;
      var r = b.h, n = g(a) ? l : e.getPadBorderExtents(a, d), d = e.getMarginExtents(a, d);
      if(c("webkit") && p(a)) {
        var k = a.style;
        0 <= f && !k.width && (k.width = "4px");
        0 <= r && !k.height && (k.height = "4px")
      }
      0 <= f && (f = Math.max(f - n.w - d.w, 0));
      0 <= r && (r = Math.max(r - n.h - d.h, 0));
      m(a, b.l, b.t, f, r)
    };
    e.isBodyLtr = function(a) {
      a = a || n.doc;
      return"ltr" == (n.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
    };
    e.docScroll = function(a) {
      a = a || n.doc;
      var b = n.doc.parentWindow || n.doc.defaultView;
      return"pageXOffset" in b ? {x:b.pageXOffset, y:b.pageYOffset} : (b = c("quirks") ? n.body(a) : a.documentElement) && {x:e.fixIeBiDiScrollLeft(b.scrollLeft || 0, a), y:b.scrollTop || 0}
    };
    e.getIeDocumentElementOffset = function(a) {
      a = a || n.doc;
      a = a.documentElement;
      if(8 > c("ie")) {
        var b = a.getBoundingClientRect(), f = b.left, b = b.top;
        7 > c("ie") && (f += a.clientLeft, b += a.clientTop);
        return{x:0 > f ? 0 : f, y:0 > b ? 0 : b}
      }
      return{x:0, y:0}
    };
    e.fixIeBiDiScrollLeft = function(a, b) {
      b = b || n.doc;
      var f = c("ie");
      if(f && !e.isBodyLtr(b)) {
        var d = c("quirks"), g = d ? n.body(b) : b.documentElement, h = n.global;
        6 == f && (!d && h.frameElement && g.scrollHeight > g.clientHeight) && (a += g.clientLeft);
        return 8 > f || d ? a + g.clientWidth - g.scrollWidth : -a
      }
      return a
    };
    e.position = function(a, b) {
      a = h.byId(a);
      var f = n.body(a.ownerDocument), d = a.getBoundingClientRect(), d = {x:d.left, y:d.top, w:d.right - d.left, h:d.bottom - d.top};
      if(9 > c("ie")) {
        var g = e.getIeDocumentElementOffset(a.ownerDocument);
        d.x -= g.x + (c("quirks") ? f.clientLeft + f.offsetLeft : 0);
        d.y -= g.y + (c("quirks") ? f.clientTop + f.offsetTop : 0)
      }
      b && (f = e.docScroll(a.ownerDocument), d.x += f.x, d.y += f.y);
      return d
    };
    e.getMarginSize = function(a, b) {
      a = h.byId(a);
      var f = e.getMarginExtents(a, b || q.getComputedStyle(a)), d = a.getBoundingClientRect();
      return{w:d.right - d.left + f.w, h:d.bottom - d.top + f.h}
    };
    e.normalizeEvent = function(a) {
      "layerX" in a || (a.layerX = a.offsetX, a.layerY = a.offsetY);
      if(!c("dom-addeventlistener")) {
        var b = a.target, b = b && b.ownerDocument || document, f = c("quirks") ? b.body : b.documentElement, d = e.getIeDocumentElementOffset(b);
        a.pageX = a.clientX + e.fixIeBiDiScrollLeft(f.scrollLeft || 0, b) - d.x;
        a.pageY = a.clientY + (f.scrollTop || 0) - d.y
      }
    };
    return e
  })
}, "dojo/mouse":function() {
  define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(c, n, h, q, m) {
    function p(c, e) {
      var h = function(a, b) {
        return n(a, c, function(f) {
          if(e) {
            return e(f, b)
          }
          if(!q.isDescendant(f.relatedTarget, a)) {
            return b.call(this, f)
          }
        })
      };
      h.bubble = function(a) {
        return p(c, function(b, f) {
          var d = a(b.target), e = b.relatedTarget;
          if(d && d != (e && 1 == e.nodeType && a(e))) {
            return f.call(d, b)
          }
        })
      };
      return h
    }
    h.add("dom-quirks", m.doc && "BackCompat" == m.doc.compatMode);
    h.add("events-mouseenter", m.doc && "onmouseenter" in m.doc.createElement("div"));
    h.add("events-mousewheel", m.doc && "onmousewheel" in m.doc);
    m = h("dom-quirks") && h("ie") || !h("dom-addeventlistener") ? {LEFT:1, MIDDLE:4, RIGHT:2, isButton:function(c, e) {
      return c.button & e
    }, isLeft:function(c) {
      return c.button & 1
    }, isMiddle:function(c) {
      return c.button & 4
    }, isRight:function(c) {
      return c.button & 2
    }} : {LEFT:0, MIDDLE:1, RIGHT:2, isButton:function(c, e) {
      return c.button == e
    }, isLeft:function(c) {
      return 0 == c.button
    }, isMiddle:function(c) {
      return 1 == c.button
    }, isRight:function(c) {
      return 2 == c.button
    }};
    c.mouseButtons = m;
    c = h("events-mousewheel") ? "mousewheel" : function(c, e) {
      return n(c, "DOMMouseScroll", function(c) {
        c.wheelDelta = -c.detail;
        e.call(this, c)
      })
    };
    return{_eventHandler:p, enter:p("mouseover"), leave:p("mouseout"), wheel:c, isLeft:m.isLeft, isMiddle:m.isMiddle, isRight:m.isRight}
  })
}, "dijit/_base/manager":function() {
  define(["dojo/_base/array", "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function(c, n, h, q, m) {
    var p = {};
    c.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "), function(c) {
      p[c] = q[c]
    });
    h.mixin(p, {defaultDuration:n.defaultDuration || 200});
    h.mixin(m, p);
    return m
  })
}, "dijit/registry":function() {
  define(["dojo/_base/array", "dojo/_base/window", "./main"], function(c, n, h) {
    var q = {}, m = {}, p = {length:0, add:function(c) {
      if(m[c.id]) {
        throw Error("Tried to register widget with id\x3d\x3d" + c.id + " but that id is already registered");
      }
      m[c.id] = c;
      this.length++
    }, remove:function(c) {
      m[c] && (delete m[c], this.length--)
    }, byId:function(c) {
      return"string" == typeof c ? m[c] : c
    }, byNode:function(c) {
      return m[c.getAttribute("widgetId")]
    }, toArray:function() {
      var c = [], e;
      for(e in m) {
        c.push(m[e])
      }
      return c
    }, getUniqueId:function(c) {
      var e;
      do {
        e = c + "_" + (c in q ? ++q[c] : q[c] = 0)
      }while(m[e]);
      return"dijit" == h._scopeName ? e : h._scopeName + "_" + e
    }, findWidgets:function(c, e) {
      function h(b) {
        for(b = b.firstChild;b;b = b.nextSibling) {
          if(1 == b.nodeType) {
            var f = b.getAttribute("widgetId");
            f ? (f = m[f]) && a.push(f) : b !== e && h(b)
          }
        }
      }
      var a = [];
      h(c);
      return a
    }, _destroyAll:function() {
      h._curFocus = null;
      h._prevFocus = null;
      h._activeStack = [];
      c.forEach(p.findWidgets(n.body()), function(c) {
        c._destroyed || (c.destroyRecursive ? c.destroyRecursive() : c.destroy && c.destroy())
      })
    }, getEnclosingWidget:function(c) {
      for(;c;) {
        var e = 1 == c.nodeType && c.getAttribute("widgetId");
        if(e) {
          return m[e]
        }
        c = c.parentNode
      }
      return null
    }, _hash:m};
    return h.registry = p
  })
}, "dijit/main":function() {
  define(["dojo/_base/kernel"], function(c) {
    return c.dijit
  })
}, "dijit/place":function() {
  define("dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "), function(c, n, h, q, m, p, g) {
    function e(a, b, f, d) {
      var e = p.getEffectiveBox(a.ownerDocument);
      (!a.parentNode || "body" != String(a.parentNode.tagName).toLowerCase()) && m.body(a.ownerDocument).appendChild(a);
      var g = null;
      c.some(b, function(b) {
        var c = b.corner, k = b.pos, h = 0, l = {w:{L:e.l + e.w - k.x, R:k.x - e.l, M:e.w}[c.charAt(1)], h:{T:e.t + e.h - k.y, B:k.y - e.t, M:e.h}[c.charAt(0)]}, m = a.style;
        m.left = m.right = "auto";
        f && (h = f(a, b.aroundCorner, c, l, d), h = "undefined" == typeof h ? 0 : h);
        var p = a.style, q = p.display, t = p.visibility;
        "none" == p.display && (p.visibility = "hidden", p.display = "");
        m = n.position(a);
        p.display = q;
        p.visibility = t;
        q = {L:k.x, R:k.x - m.w, M:Math.max(e.l, Math.min(e.l + e.w, k.x + (m.w >> 1)) - m.w)}[c.charAt(1)];
        t = {T:k.y, B:k.y - m.h, M:Math.max(e.t, Math.min(e.t + e.h, k.y + (m.h >> 1)) - m.h)}[c.charAt(0)];
        k = Math.max(e.l, q);
        p = Math.max(e.t, t);
        q = Math.min(e.l + e.w, q + m.w);
        t = Math.min(e.t + e.h, t + m.h);
        q -= k;
        t -= p;
        h += m.w - q + (m.h - t);
        if(null == g || h < g.overflow) {
          g = {corner:c, aroundCorner:b.aroundCorner, x:k, y:p, w:q, h:t, overflow:h, spaceAvailable:l}
        }
        return!h
      });
      g.overflow && f && f(a, g.aroundCorner, g.corner, g.spaceAvailable, d);
      b = g.y;
      var k = g.x, l = m.body(a.ownerDocument);
      /relative|absolute/.test(h.get(l, "position")) && (b -= h.get(l, "marginTop"), k -= h.get(l, "marginLeft"));
      l = a.style;
      l.top = b + "px";
      l.left = k + "px";
      l.right = "auto";
      return g
    }
    var l = {TL:"BR", TR:"BL", BL:"TR", BR:"TL"};
    return g.place = {at:function(a, b, f, d, g) {
      f = c.map(f, function(a) {
        var f = {corner:a, aroundCorner:l[a], pos:{x:b.x, y:b.y}};
        d && (f.pos.x += "L" == a.charAt(1) ? d.x : -d.x, f.pos.y += "T" == a.charAt(0) ? d.y : -d.y);
        return f
      });
      return e(a, f, g)
    }, around:function(a, b, f, d, g) {
      function l(a, d) {
        I.push({aroundCorner:a, corner:d, pos:{x:{L:z, R:z + D, M:z + (D >> 1)}[a.charAt(1)], y:{T:v, B:v + G, M:v + (G >> 1)}[a.charAt(0)]}})
      }
      var k;
      if("string" == typeof b || "offsetWidth" in b || "ownerSVGElement" in b) {
        if(k = n.position(b, !0), /^(above|below)/.test(f[0])) {
          var m = n.getBorderExtents(b), p = b.firstChild ? n.getBorderExtents(b.firstChild) : {t:0, l:0, b:0, r:0}, w = n.getBorderExtents(a), s = a.firstChild ? n.getBorderExtents(a.firstChild) : {t:0, l:0, b:0, r:0};
          k.y += Math.min(m.t + p.t, w.t + s.t);
          k.h -= Math.min(m.t + p.t, w.t + s.t) + Math.min(m.b + p.b, w.b + s.b)
        }
      }else {
        k = b
      }
      if(b.parentNode) {
        m = "absolute" == h.getComputedStyle(b).position;
        for(b = b.parentNode;b && 1 == b.nodeType && "BODY" != b.nodeName;) {
          p = n.position(b, !0);
          w = h.getComputedStyle(b);
          /relative|absolute/.test(w.position) && (m = !1);
          if(!m && /hidden|auto|scroll/.test(w.overflow)) {
            var s = Math.min(k.y + k.h, p.y + p.h), y = Math.min(k.x + k.w, p.x + p.w);
            k.x = Math.max(k.x, p.x);
            k.y = Math.max(k.y, p.y);
            k.h = s - k.y;
            k.w = y - k.x
          }
          "absolute" == w.position && (m = !0);
          b = b.parentNode
        }
      }
      var z = k.x, v = k.y, D = "w" in k ? k.w : k.w = k.width, G = "h" in k ? k.h : (q.deprecated("place.around: dijit/place.__Rectangle: { x:" + z + ", y:" + v + ", height:" + k.height + ", width:" + D + " } has been deprecated.  Please use { x:" + z + ", y:" + v + ", h:" + k.height + ", w:" + D + " }", "", "2.0"), k.h = k.height), I = [];
      c.forEach(f, function(a) {
        var b = d;
        switch(a) {
          case "above-centered":
            l("TM", "BM");
            break;
          case "below-centered":
            l("BM", "TM");
            break;
          case "after-centered":
            b = !b;
          case "before-centered":
            l(b ? "ML" : "MR", b ? "MR" : "ML");
            break;
          case "after":
            b = !b;
          case "before":
            l(b ? "TL" : "TR", b ? "TR" : "TL");
            l(b ? "BL" : "BR", b ? "BR" : "BL");
            break;
          case "below-alt":
            b = !b;
          case "below":
            l(b ? "BL" : "BR", b ? "TL" : "TR");
            l(b ? "BR" : "BL", b ? "TR" : "TL");
            break;
          case "above-alt":
            b = !b;
          case "above":
            l(b ? "TL" : "TR", b ? "BL" : "BR");
            l(b ? "TR" : "TL", b ? "BR" : "BL");
            break;
          default:
            l(a.aroundCorner, a.corner)
        }
      });
      a = e(a, I, g, {w:D, h:G});
      a.aroundNodePos = k;
      return a
    }}
  })
}, "dijit/Viewport":function() {
  define(["dojo/Evented", "dojo/on", "dojo/domReady", "dojo/sniff", "dojo/window"], function(c, n, h, q, m) {
    var p = new c, g;
    h(function() {
      var c = m.getBox();
      p._rlh = n(window, "resize", function() {
        var a = m.getBox();
        c.h == a.h && c.w == a.w || (c = a, p.emit("resize"))
      });
      if(8 == q("ie")) {
        var h = screen.deviceXDPI;
        setInterval(function() {
          screen.deviceXDPI != h && (h = screen.deviceXDPI, p.emit("resize"))
        }, 500)
      }
      q("ios") && (n(document, "focusin", function(a) {
        g = a.target
      }), n(document, "focusout", function(a) {
        g = null
      }))
    });
    p.getEffectiveBox = function(c) {
      c = m.getBox(c);
      var h = g && g.tagName && g.tagName.toLowerCase();
      if(q("ios") && g && !g.readOnly && ("textarea" == h || "input" == h && /^(color|email|number|password|search|tel|text|url)$/.test(g.type))) {
        c.h *= 0 == orientation || 180 == orientation ? 0.66 : 0.4, h = g.getBoundingClientRect(), c.h = Math.max(c.h, h.top + h.height)
      }
      return c
    };
    return p
  })
}, "dojo/window":function() {
  define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(c, n, h, q, m, p, g) {
    n.add("rtl-adjust-position-for-verticalScrollBar", function(c, a) {
      var b = h.body(a), f = g.create("div", {style:{overflow:"scroll", overflowX:"visible", direction:"rtl", visibility:"hidden", position:"absolute", left:"0", top:"0", width:"64px", height:"64px"}}, b, "last"), d = g.create("div", {style:{overflow:"hidden", direction:"ltr"}}, f, "last"), e = 0 != m.position(d).x;
      f.removeChild(d);
      b.removeChild(f);
      return e
    });
    n.add("position-fixed-support", function(c, a) {
      var b = h.body(a), f = g.create("span", {style:{visibility:"hidden", position:"fixed", left:"1px", top:"1px"}}, b, "last"), d = g.create("span", {style:{position:"fixed", left:"0", top:"0"}}, f, "last"), e = m.position(d).x != m.position(f).x;
      f.removeChild(d);
      b.removeChild(f);
      return e
    });
    var e = {getBox:function(c) {
      c = c || h.doc;
      var a = "BackCompat" == c.compatMode ? h.body(c) : c.documentElement, b = m.docScroll(c);
      if(n("touch")) {
        var f = e.get(c);
        c = f.innerWidth || a.clientWidth;
        a = f.innerHeight || a.clientHeight
      }else {
        c = a.clientWidth, a = a.clientHeight
      }
      return{l:b.x, t:b.y, w:c, h:a}
    }, get:function(c) {
      if(n("ie") && e !== document.parentWindow) {
        c.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
        var a = c._parentWindow;
        c._parentWindow = null;
        return a
      }
      return c.parentWindow || c.defaultView
    }, scrollIntoView:function(c, a) {
      try {
        c = q.byId(c);
        var b = c.ownerDocument || h.doc, f = h.body(b), d = b.documentElement || f.parentNode, e = n("ie") || n("trident"), g = n("webkit");
        if(!(c == f || c == d)) {
          if(!n("mozilla") && (!e && !g && !n("opera") && !n("trident") && !n("edge")) && "scrollIntoView" in c) {
            c.scrollIntoView(!1)
          }else {
            var k = "BackCompat" == b.compatMode, t = Math.min(f.clientWidth || d.clientWidth, d.clientWidth || f.clientWidth), x = Math.min(f.clientHeight || d.clientHeight, d.clientHeight || f.clientHeight), b = g || k ? f : d, w = a || m.position(c), s = c.parentNode, g = function(a) {
              return 6 >= e || 7 == e && k ? !1 : n("position-fixed-support") && "fixed" == p.get(a, "position").toLowerCase()
            }, y = this, z = function(a, b, d) {
              "BODY" == a.tagName || "HTML" == a.tagName ? y.get(a.ownerDocument).scrollBy(b, d) : (b && (a.scrollLeft += b), d && (a.scrollTop += d))
            };
            if(!g(c)) {
              for(;s;) {
                s == f && (s = b);
                var v = m.position(s), D = g(s), G = "rtl" == p.getComputedStyle(s).direction.toLowerCase();
                if(s == b) {
                  v.w = t;
                  v.h = x;
                  if(b == d && (e || n("trident")) && G) {
                    v.x += b.offsetWidth - v.w
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
                  0 < M && 0 < K && (G && n("rtl-adjust-position-for-verticalScrollBar") && (v.x += K), v.w = M);
                  M = s.clientHeight;
                  K = v.h - M;
                  0 < M && 0 < K && (v.h = M)
                }
                D && (0 > v.y && (v.h += v.y, v.y = 0), 0 > v.x && (v.w += v.x, v.x = 0), v.y + v.h > x && (v.h = x - v.y), v.x + v.w > t && (v.w = t - v.x));
                var P = w.x - v.x, U = w.y - v.y, A = P + w.w - v.w, B = U + w.h - v.h, F, C;
                if(0 < A * P && (s.scrollLeft || s == b || s.scrollWidth > s.offsetHeight)) {
                  F = Math[0 > P ? "max" : "min"](P, A);
                  if(G && (8 == e && !k || 5 <= n("trident"))) {
                    F = -F
                  }
                  C = s.scrollLeft;
                  z(s, F, 0);
                  F = s.scrollLeft - C;
                  w.x -= F
                }
                if(0 < B * U && (s.scrollTop || s == b || s.scrollHeight > s.offsetHeight)) {
                  F = Math.ceil(Math[0 > U ? "max" : "min"](U, B)), C = s.scrollTop, z(s, 0, F), F = s.scrollTop - C, w.y -= F
                }
                s = s != b && !D && s.parentNode
              }
            }
          }
        }
      }catch(H) {
        console.error("scrollIntoView: " + H), c.scrollIntoView(!1)
      }
    }};
    c.setObject("dojo.window", e);
    return e
  })
}, "dojo/dom-construct":function() {
  define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function(c, n, h, q, m, p) {
    function g(a, b) {
      var d = b.parentNode;
      d && d.insertBefore(a, b)
    }
    function e(a) {
      if("innerHTML" in a) {
        try {
          a.innerHTML = "";
          return
        }catch(b) {
        }
      }
      for(var d;d = a.lastChild;) {
        a.removeChild(d)
      }
    }
    var l = {option:["select"], tbody:["table"], thead:["table"], tfoot:["table"], tr:["table", "tbody"], td:["table", "tbody", "tr"], th:["table", "thead", "tr"], legend:["fieldset"], caption:["table"], colgroup:["table"], col:["table", "colgroup"], li:["ul"]}, a = /<\s*([\w\:]+)/, b = {}, f = 0, d = "__" + n._scopeName + "ToDomId", r;
    for(r in l) {
      l.hasOwnProperty(r) && (n = l[r], n.pre = "option" == r ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + n.join("\x3e\x3c") + "\x3e", n.post = "\x3c/" + n.reverse().join("\x3e\x3c/") + "\x3e")
    }
    var u;
    8 >= h("ie") && (u = function(a) {
      a.__dojo_html5_tested = "yes";
      var b = k("div", {innerHTML:"\x3cnav\x3ea\x3c/nav\x3e", style:{visibility:"hidden"}}, a.body);
      1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g, function(b) {
        a.createElement(b)
      });
      t(b)
    });
    c.toDom = function(c, e) {
      e = e || q.doc;
      var g = e[d];
      g || (e[d] = g = ++f + "", b[g] = e.createElement("div"));
      8 >= h("ie") && !e.__dojo_html5_tested && e.body && u(e);
      c += "";
      var k = c.match(a), m = k ? k[1].toLowerCase() : "", g = b[g];
      if(k && l[m]) {
        k = l[m];
        g.innerHTML = k.pre + c + k.post;
        for(k = k.length;k;--k) {
          g = g.firstChild
        }
      }else {
        g.innerHTML = c
      }
      if(1 == g.childNodes.length) {
        return g.removeChild(g.firstChild)
      }
      for(m = e.createDocumentFragment();k = g.firstChild;) {
        m.appendChild(k)
      }
      return m
    };
    c.place = function(a, b, d) {
      b = m.byId(b);
      "string" == typeof a && (a = /^\s*</.test(a) ? c.toDom(a, b.ownerDocument) : m.byId(a));
      if("number" == typeof d) {
        var f = b.childNodes;
        !f.length || f.length <= d ? b.appendChild(a) : g(a, f[0 > d ? 0 : d])
      }else {
        switch(d) {
          case "before":
            g(a, b);
            break;
          case "after":
            d = a;
            (f = b.parentNode) && (f.lastChild == b ? f.appendChild(d) : f.insertBefore(d, b.nextSibling));
            break;
          case "replace":
            b.parentNode.replaceChild(a, b);
            break;
          case "only":
            c.empty(b);
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
    var k = c.create = function(a, b, d, f) {
      var e = q.doc;
      d && (d = m.byId(d), e = d.ownerDocument);
      "string" == typeof a && (a = e.createElement(a));
      b && p.set(a, b);
      d && c.place(a, d, f);
      return a
    };
    c.empty = function(a) {
      e(m.byId(a))
    };
    var t = c.destroy = function(a) {
      if(a = m.byId(a)) {
        var b = a;
        a = a.parentNode;
        b.firstChild && e(b);
        a && (h("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b))
      }
    }
  })
}, "dojo/dom-attr":function() {
  define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "), function(c, n, h, q, m, p) {
    function g(a, b) {
      var f = a.getAttributeNode && a.getAttributeNode(b);
      return!!f && f.specified
    }
    var e = {innerHTML:1, textContent:1, className:1, htmlFor:n("ie"), value:1}, l = {classname:"class", htmlfor:"for", tabindex:"tabIndex", readonly:"readOnly"};
    c.has = function(a, b) {
      var f = b.toLowerCase();
      return e[p.names[f] || b] || g(q.byId(a), l[f] || b)
    };
    c.get = function(a, b) {
      a = q.byId(a);
      var f = b.toLowerCase(), d = p.names[f] || b, c = a[d];
      if(e[d] && "undefined" != typeof c) {
        return c
      }
      if("textContent" == d) {
        return p.get(a, d)
      }
      if("href" != d && ("boolean" == typeof c || h.isFunction(c))) {
        return c
      }
      f = l[f] || b;
      return g(a, f) ? a.getAttribute(f) : null
    };
    c.set = function(a, b, f) {
      a = q.byId(a);
      if(2 == arguments.length) {
        for(var d in b) {
          c.set(a, d, b[d])
        }
        return a
      }
      d = b.toLowerCase();
      var g = p.names[d] || b, n = e[g];
      if("style" == g && "string" != typeof f) {
        return m.set(a, f), a
      }
      if(n || "boolean" == typeof f || h.isFunction(f)) {
        return p.set(a, b, f)
      }
      a.setAttribute(l[d] || b, f);
      return a
    };
    c.remove = function(a, b) {
      q.byId(a).removeAttribute(l[b.toLowerCase()] || b)
    };
    c.getNodeProp = function(a, b) {
      a = q.byId(a);
      var c = b.toLowerCase(), d = p.names[c] || b;
      if(d in a && "href" != d) {
        return a[d]
      }
      c = l[c] || b;
      return g(a, c) ? a.getAttribute(c) : null
    }
  })
}, "dojo/dom-prop":function() {
  define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function(c, n, h, q, m, p, g, e) {
    function l(a) {
      var b = "";
      a = a.childNodes;
      for(var c = 0, f;f = a[c];c++) {
        8 != f.nodeType && (b = 1 == f.nodeType ? b + l(f) : b + f.nodeValue)
      }
      return b
    }
    var a = {}, b = 0, f = n._scopeName + "attrid";
    h.add("dom-textContent", function(a, b, c) {
      return"textContent" in c
    });
    c.names = {"class":"className", "for":"htmlFor", tabindex:"tabIndex", readonly:"readOnly", colspan:"colSpan", frameborder:"frameBorder", rowspan:"rowSpan", textcontent:"textContent", valuetype:"valueType"};
    c.get = function(a, b) {
      a = m.byId(a);
      var f = b.toLowerCase(), f = c.names[f] || b;
      return"textContent" == f && !h("dom-textContent") ? l(a) : a[f]
    };
    c.set = function(d, l, n) {
      d = m.byId(d);
      if(2 == arguments.length && "string" != typeof l) {
        for(var k in l) {
          c.set(d, k, l[k])
        }
        return d
      }
      k = l.toLowerCase();
      k = c.names[k] || l;
      if("style" == k && "string" != typeof n) {
        return p.set(d, n), d
      }
      if("innerHTML" == k) {
        return h("ie") && d.tagName.toLowerCase() in {col:1, colgroup:1, table:1, tbody:1, tfoot:1, thead:1, tr:1, title:1} ? (g.empty(d), d.appendChild(g.toDom(n, d.ownerDocument))) : d[k] = n, d
      }
      if("textContent" == k && !h("dom-textContent")) {
        return g.empty(d), d.appendChild(d.ownerDocument.createTextNode(n)), d
      }
      if(q.isFunction(n)) {
        var t = d[f];
        t || (t = b++, d[f] = t);
        a[t] || (a[t] = {});
        var x = a[t][k];
        if(x) {
          e.disconnect(x)
        }else {
          try {
            delete d[k]
          }catch(w) {
          }
        }
        n ? a[t][k] = e.connect(d, k, n) : d[k] = null;
        return d
      }
      d[k] = n;
      return d
    }
  })
}, "dojo/_base/connect":function() {
  define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function(c, n, h, q, m, p, g, e) {
    function l(a, b, d, f, g) {
      f = e.hitch(d, f);
      if(!a || !a.addEventListener && !a.attachEvent) {
        return q.after(a || c.global, b, f, !0)
      }
      "string" == typeof b && "on" == b.substring(0, 2) && (b = b.substring(2));
      a || (a = c.global);
      if(!g) {
        switch(b) {
          case "keypress":
            b = r;
            break;
          case "mouseenter":
            b = p.enter;
            break;
          case "mouseleave":
            b = p.leave
        }
      }
      return n(a, b, f, g)
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
    var b = {106:42, 111:47, 186:59, 187:43, 188:44, 189:45, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 229:113}, f = g("mac") ? "metaKey" : "ctrlKey", d = function(b, d) {
      var c = e.mixin({}, b, d);
      a(c);
      c.preventDefault = function() {
        b.preventDefault()
      };
      c.stopPropagation = function() {
        b.stopPropagation()
      };
      return c
    }, r;
    r = g("events-keypress-typed") ? function(a, c) {
      var f = n(a, "keydown", function(a) {
        var f = a.keyCode, e = 13 != f && 32 != f && (27 != f || !g("ie")) && (48 > f || 90 < f) && (96 > f || 111 < f) && (186 > f || 192 < f) && (219 > f || 222 < f) && 229 != f;
        if(e || a.ctrlKey) {
          e = e ? 0 : f;
          if(a.ctrlKey) {
            if(3 == f || 13 == f) {
              return c.call(a.currentTarget, a)
            }
            e = 95 < e && 106 > e ? e - 48 : !a.shiftKey && 65 <= e && 90 >= e ? e + 32 : b[e] || e
          }
          f = d(a, {type:"keypress", faux:!0, charCode:e});
          c.call(a.currentTarget, f);
          if(g("ie")) {
            try {
              a.keyCode = f.keyCode
            }catch(h) {
            }
          }
        }
      }), e = n(a, "keypress", function(a) {
        var b = a.charCode;
        a = d(a, {charCode:32 <= b ? b : 0, faux:!0});
        return c.call(this, a)
      });
      return{remove:function() {
        f.remove();
        e.remove()
      }}
    } : g("opera") ? function(a, b) {
      return n(a, "keypress", function(a) {
        var f = a.which;
        3 == f && (f = 99);
        f = 32 > f && !a.shiftKey ? 0 : f;
        a.ctrlKey && (!a.shiftKey && 65 <= f && 90 >= f) && (f += 32);
        return b.call(this, d(a, {charCode:f}))
      })
    } : function(b, d) {
      return n(b, "keypress", function(b) {
        a(b);
        return d.call(this, b)
      })
    };
    var u = {_keypress:r, connect:function(a, b, d, f, c) {
      var e = arguments, g = [], h = 0;
      g.push("string" == typeof e[0] ? null : e[h++], e[h++]);
      var m = e[h + 1];
      g.push("string" == typeof m || "function" == typeof m ? e[h++] : null, e[h++]);
      for(m = e.length;h < m;h++) {
        g.push(e[h])
      }
      return l.apply(this, g)
    }, disconnect:function(a) {
      a && a.remove()
    }, subscribe:function(a, b, d) {
      return h.subscribe(a, e.hitch(b, d))
    }, publish:function(a, b) {
      return h.publish.apply(h, [a].concat(b))
    }, connectPublisher:function(a, b, d) {
      var f = function() {
        u.publish(a, arguments)
      };
      return d ? u.connect(b, d, f) : u.connect(b, f)
    }, isCopyKey:function(a) {
      return a[f]
    }};
    u.unsubscribe = u.disconnect;
    e.mixin(c, u);
    return u
  })
}, "dojo/topic":function() {
  define(["./Evented"], function(c) {
    var n = new c;
    return{publish:function(c, q) {
      return n.emit.apply(n, arguments)
    }, subscribe:function(c, q) {
      return n.on.apply(n, arguments)
    }}
  })
}, "dojo/_base/event":function() {
  define(["./kernel", "../on", "../has", "../dom-geometry"], function(c, n, h, q) {
    if(n._fixEvent) {
      var m = n._fixEvent;
      n._fixEvent = function(c, e) {
        (c = m(c, e)) && q.normalizeEvent(c);
        return c
      }
    }
    var p = {fix:function(c, e) {
      return n._fixEvent ? n._fixEvent(c, e) : c
    }, stop:function(c) {
      h("dom-addeventlistener") || c && c.preventDefault ? (c.preventDefault(), c.stopPropagation()) : (c = c || window.event, c.cancelBubble = !0, n._preventDefault.call(c))
    }};
    c.fixEvent = p.fix;
    c.stopEvent = p.stop;
    return p
  })
}, "dojo/_base/sniff":function() {
  define(["./kernel", "./lang", "../sniff"], function(c, n, h) {
    c._name = "browser";
    n.mixin(c, {isBrowser:!0, isFF:h("ff"), isIE:h("ie"), isKhtml:h("khtml"), isWebKit:h("webkit"), isMozilla:h("mozilla"), isMoz:h("mozilla"), isOpera:h("opera"), isSafari:h("safari"), isChrome:h("chrome"), isMac:h("mac"), isIos:h("ios"), isAndroid:h("android"), isWii:h("wii"), isQuirks:h("quirks"), isAir:h("air")});
    return h
  })
}, "dojo/keys":function() {
  define(["./_base/kernel", "./sniff"], function(c, n) {
    return c.keys = {BACKSPACE:8, TAB:9, CLEAR:12, ENTER:13, SHIFT:16, CTRL:17, ALT:18, META:n("webkit") ? 91 : 224, PAUSE:19, CAPS_LOCK:20, ESCAPE:27, SPACE:32, PAGE_UP:33, PAGE_DOWN:34, END:35, HOME:36, LEFT_ARROW:37, UP_ARROW:38, RIGHT_ARROW:39, DOWN_ARROW:40, INSERT:45, DELETE:46, HELP:47, LEFT_WINDOW:91, RIGHT_WINDOW:92, SELECT:93, NUMPAD_0:96, NUMPAD_1:97, NUMPAD_2:98, NUMPAD_3:99, NUMPAD_4:100, NUMPAD_5:101, NUMPAD_6:102, NUMPAD_7:103, NUMPAD_8:104, NUMPAD_9:105, NUMPAD_MULTIPLY:106, NUMPAD_PLUS:107, 
    NUMPAD_ENTER:108, NUMPAD_MINUS:109, NUMPAD_PERIOD:110, NUMPAD_DIVIDE:111, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, F13:124, F14:125, F15:126, NUM_LOCK:144, SCROLL_LOCK:145, UP_DPAD:175, DOWN_DPAD:176, LEFT_DPAD:177, RIGHT_DPAD:178, copyKey:n("mac") && !n("air") ? n("safari") ? 91 : 224 : 17}
  })
}, "dijit/_Widget":function() {
  define("dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/has dojo/_base/kernel dojo/_base/lang dojo/query dojo/ready ./registry ./_WidgetBase ./_OnDijitClickMixin ./_FocusMixin dojo/uacss ./hccss".split(" "), function(c, n, h, q, m, p, g, e, l, a, b, f, d) {
    function r() {
    }
    function u(a) {
      return function(b, d, f, c) {
        return b && "string" == typeof d && b[d] == r ? b.on(d.substring(2).toLowerCase(), g.hitch(f, c)) : a.apply(h, arguments)
      }
    }
    c.around(h, "connect", u);
    p.connect && c.around(p, "connect", u);
    c = q("dijit._Widget", [b, f, d], {onClick:r, onDblClick:r, onKeyDown:r, onKeyPress:r, onKeyUp:r, onMouseDown:r, onMouseMove:r, onMouseOut:r, onMouseOver:r, onMouseLeave:r, onMouseEnter:r, onMouseUp:r, constructor:function(a) {
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
      p.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
      this.set(a, b)
    }, attr:function(a, b) {
      return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
    }, getDescendants:function() {
      p.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
      return this.containerNode ? e("[widgetId]", this.containerNode).map(a.byNode) : []
    }, _onShow:function() {
      this.onShow()
    }, onShow:function() {
    }, onHide:function() {
    }, onClose:function() {
      return!0
    }});
    m("dijit-legacy-requires") && l(0, function() {
      require(["dijit/_base"])
    });
    return c
  })
}, "dojo/ready":function() {
  define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(c, n, h, q, m) {
    var p = 0, g = [], e = 0;
    n = function() {
      p = 1;
      c._postLoad = c.config.afterOnLoad = !0;
      l()
    };
    var l = function() {
      if(!e) {
        for(e = 1;p && (!q || 0 == q._Q.length) && (h.idle ? h.idle() : 1) && g.length;) {
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
    h.on && h.on("idle", l);
    q && (q._onQEmpty = l);
    var a = c.ready = c.addOnLoad = function(a, b, e) {
      var h = m._toArray(arguments);
      "number" != typeof a ? (e = b, b = a, a = 1E3) : h.shift();
      e = e ? m.hitch.apply(c, h) : function() {
        b()
      };
      e.priority = a;
      for(h = 0;h < g.length && a >= g[h].priority;h++) {
      }
      g.splice(h, 0, e);
      l()
    }, b = c.config.addOnLoad;
    if(b) {
      a[m.isArray(b) ? "apply" : "call"](c, b)
    }
    q ? q(n) : n();
    return a
  })
}, "dijit/_WidgetBase":function() {
  define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "), function(c, n, h, q, m, p, g, e, l, a, b, f, d, r, u, k, t, x, w, s, y, z, v) {
    function D(a) {
      return function(b) {
        e[b ? "set" : "remove"](this.domNode, a, b);
        this._set(a, b)
      }
    }
    d.add("dijit-legacy-requires", !r.isAsync);
    d.add("dojo-bidi", !1);
    d("dijit-legacy-requires") && t(0, function() {
      c(["dijit/_base/manager"])
    });
    var G = {};
    q = p("dijit._WidgetBase", [x, y], {id:"", _setIdAttr:"domNode", lang:"", _setLangAttr:D("lang"), dir:"", _setDirAttr:D("dir"), "class":"", _setClassAttr:{node:"domNode", type:"class"}, _setTypeAttr:null, style:"", title:"", tooltip:"", baseClass:"", srcNodeRef:null, domNode:null, containerNode:null, ownerDocument:null, _setOwnerDocumentAttr:function(a) {
      this._set("ownerDocument", a)
    }, attributeMap:{}, _blankGif:q.blankGif || c.toUrl("dojo/resources/blank.gif"), _introspect:function() {
      var a = this.constructor;
      if(!a._setterAttrs) {
        var b = a.prototype, d = a._setterAttrs = [], a = a._onMap = {}, c;
        for(c in b.attributeMap) {
          d.push(c)
        }
        for(c in b) {
          /^on/.test(c) && (a[c.substring(2).toLowerCase()] = c), /^_set[A-Z](.*)Attr$/.test(c) && (c = c.charAt(4).toLowerCase() + c.substr(5, c.length - 9), (!b.attributeMap || !(c in b.attributeMap)) && d.push(c))
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
      var d;
      if(this.domNode) {
        this._applyAttributes();
        var c = this.srcNodeRef;
        c && (c.parentNode && this.domNode !== c) && (c.parentNode.replaceChild(this.domNode, c), d = !0);
        this.domNode.setAttribute("widgetId", this.id)
      }
      this.postCreate();
      d && delete this.srcNodeRef;
      this._created = !0
    }, _applyAttributes:function() {
      var a = {}, b;
      for(b in this.params || {}) {
        a[b] = this._get(b)
      }
      n.forEach(this.constructor._setterAttrs, function(b) {
        if(!(b in a)) {
          var d = this._get(b);
          d && this.set(b, d)
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
        this.isLeftToRight() || (a = a.concat(n.map(a, function(a) {
          return a + "Rtl"
        })));
        l.add(this.domNode, a)
      }
    }, postCreate:function() {
    }, startup:function() {
      this._started || (this._started = !0, n.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && u.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }))
    }, destroyRecursive:function(a) {
      this._beingDestroyed = !0;
      this.destroyDescendants(a);
      this.destroy(a)
    }, destroy:function(a) {
      function b(d) {
        d.destroyRecursive ? d.destroyRecursive(a) : d.destroy && d.destroy(a)
      }
      this._beingDestroyed = !0;
      this.uninitialize();
      n.forEach(this._connects, u.hitch(this, "disconnect"));
      n.forEach(this._supportingWidgets, b);
      this.domNode && n.forEach(v.findWidgets(this.domNode, this.containerNode), b);
      this.destroyRendering(a);
      v.remove(this.id);
      this._destroyed = !0
    }, destroyRendering:function(b) {
      this.bgIframe && (this.bgIframe.destroy(b), delete this.bgIframe);
      this.domNode && (b ? e.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
      this.srcNodeRef && (b || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
    }, destroyDescendants:function(a) {
      n.forEach(this.getChildren(), function(b) {
        b.destroyRecursive && b.destroyRecursive(a)
      })
    }, uninitialize:function() {
      return!1
    }, _setStyleAttr:function(a) {
      var b = this.domNode;
      u.isObject(a) ? f.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
      this._set("style", a)
    }, _attrToDom:function(a, b, d) {
      d = 3 <= arguments.length ? d : this.attributeMap[a];
      n.forEach(u.isArray(d) ? d : [d], function(d) {
        var c = this[d.node || d || "domNode"];
        switch(d.type || "attribute") {
          case "attribute":
            u.isFunction(b) && (b = u.hitch(this, b));
            d = d.attribute ? d.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
            c.tagName ? e.set(c, d, b) : c.set(d, b);
            break;
          case "innerText":
            c.innerHTML = "";
            c.appendChild(this.ownerDocument.createTextNode(b));
            break;
          case "innerHTML":
            c.innerHTML = b;
            break;
          case "class":
            l.replace(c, b, this[a])
        }
      }, this)
    }, get:function(a) {
      var b = this._getAttrNames(a);
      return this[b.g] ? this[b.g]() : this._get(a)
    }, set:function(a, b) {
      if("object" === typeof a) {
        for(var d in a) {
          this.set(d, a[d])
        }
        return this
      }
      d = this._getAttrNames(a);
      var c = this[d.s];
      if(u.isFunction(c)) {
        var f = c.apply(this, Array.prototype.slice.call(arguments, 1))
      }else {
        var c = this.focusNode && !u.isFunction(this.focusNode) ? "focusNode" : "domNode", e = this[c] && this[c].tagName, g;
        if(g = e) {
          if(!(g = G[e])) {
            g = this[c];
            var h = {}, k;
            for(k in g) {
              h[k.toLowerCase()] = !0
            }
            g = G[e] = h
          }
        }
        k = g;
        d = a in this.attributeMap ? this.attributeMap[a] : d.s in this ? this[d.s] : k && d.l in k && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? c : null;
        null != d && this._attrToDom(a, b, d);
        this._set(a, b)
      }
      return f || this
    }, _attrPairNames:{}, _getAttrNames:function(a) {
      var b = this._attrPairNames;
      if(b[a]) {
        return b[a]
      }
      var d = a.replace(/^[a-z]|-[a-zA-Z]/g, function(a) {
        return a.charAt(a.length - 1).toUpperCase()
      });
      return b[a] = {n:a + "Node", s:"_set" + d + "Attr", g:"_get" + d + "Attr", l:d.toLowerCase()}
    }, _set:function(a, b) {
      var d = this[a];
      this[a] = b;
      if(this._created && !(d === b || d !== d && b !== b)) {
        this._watchCallbacks && this._watchCallbacks(a, d, b), this.emit("attrmodified-" + a, {detail:{prevValue:d, newValue:b}})
      }
    }, _get:function(a) {
      return this[a]
    }, emit:function(a, b, d) {
      b = b || {};
      void 0 === b.bubbles && (b.bubbles = !0);
      void 0 === b.cancelable && (b.cancelable = !0);
      b.detail || (b.detail = {});
      b.detail.widget = this;
      var c, f = this["on" + a];
      f && (c = f.apply(this, d ? d : [b]));
      this._started && !this._beingDestroyed && k.emit(this.domNode, a.toLowerCase(), b);
      return c
    }, on:function(a, b) {
      var d = this._onMap(a);
      return d ? h.after(this, d, b, !0) : this.own(k(this.domNode, a, b))[0]
    }, _onMap:function(a) {
      var b = this.constructor, d = b._onMap;
      if(!d) {
        var d = b._onMap = {}, c;
        for(c in b.prototype) {
          /^on/.test(c) && (d[c.replace(/^on/, "").toLowerCase()] = c)
        }
      }
      return d["string" == typeof a && a.toLowerCase()]
    }, toString:function() {
      return"[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]"
    }, getChildren:function() {
      return this.containerNode ? v.findWidgets(this.containerNode) : []
    }, getParent:function() {
      return v.getEnclosingWidget(this.domNode.parentNode)
    }, connect:function(a, b, d) {
      return this.own(m.connect(a, b, this, d))[0]
    }, disconnect:function(a) {
      a.remove()
    }, subscribe:function(a, b) {
      return this.own(w.subscribe(a, u.hitch(this, b)))[0]
    }, unsubscribe:function(a) {
      a.remove()
    }, isLeftToRight:function() {
      return this.dir ? "ltr" == this.dir.toLowerCase() : b.isBodyLtr(this.ownerDocument)
    }, isFocusable:function() {
      return this.focus && "none" != f.get(this.domNode, "display")
    }, placeAt:function(b, d) {
      var c = !b.tagName && v.byId(b);
      c && c.addChild && (!d || "number" === typeof d) ? c.addChild(this, d) : (c = c && "domNode" in c ? c.containerNode && !/after|before|replace/.test(d || "") ? c.containerNode : c.domNode : g.byId(b, this.ownerDocument), a.place(this.domNode, c, d), !this._started && (this.getParent() || {})._started && this.startup());
      return this
    }, defer:function(a, b) {
      var d = setTimeout(u.hitch(this, function() {
        d && (d = null, this._destroyed || u.hitch(this, a)())
      }), b || 0);
      return{remove:function() {
        d && (clearTimeout(d), d = null);
        return null
      }}
    }});
    d("dojo-bidi") && q.extend(z);
    return q
  })
}, "dojo/Stateful":function() {
  define(["./_base/declare", "./_base/lang", "./_base/array", "./when"], function(c, n, h, q) {
    return c("dojo.Stateful", null, {_attrPairNames:{}, _getAttrNames:function(c) {
      var h = this._attrPairNames;
      return h[c] ? h[c] : h[c] = {s:"_" + c + "Setter", g:"_" + c + "Getter"}
    }, postscript:function(c) {
      c && this.set(c)
    }, _get:function(c, h) {
      return"function" === typeof this[h.g] ? this[h.g]() : this[c]
    }, get:function(c) {
      return this._get(c, this._getAttrNames(c))
    }, set:function(c, h) {
      if("object" === typeof c) {
        for(var g in c) {
          c.hasOwnProperty(g) && "_watchCallbacks" != g && this.set(g, c[g])
        }
        return this
      }
      g = this._getAttrNames(c);
      var e = this._get(c, g);
      g = this[g.s];
      var l;
      "function" === typeof g ? l = g.apply(this, Array.prototype.slice.call(arguments, 1)) : this[c] = h;
      if(this._watchCallbacks) {
        var a = this;
        q(l, function() {
          a._watchCallbacks(c, e, h)
        })
      }
      return this
    }, _changeAttrValue:function(c, h) {
      var g = this.get(c);
      this[c] = h;
      this._watchCallbacks && this._watchCallbacks(c, g, h);
      return this
    }, watch:function(c, p) {
      var g = this._watchCallbacks;
      if(!g) {
        var e = this, g = this._watchCallbacks = function(a, c, d, h) {
          var l = function(g) {
            if(g) {
              g = g.slice();
              for(var h = 0, l = g.length;h < l;h++) {
                g[h].call(e, a, c, d)
              }
            }
          };
          l(g["_" + a]);
          h || l(g["*"])
        }
      }
      !p && "function" === typeof c ? (p = c, c = "*") : c = "_" + c;
      var l = g[c];
      "object" !== typeof l && (l = g[c] = []);
      l.push(p);
      var a = {};
      a.unwatch = a.remove = function() {
        var a = h.indexOf(l, p);
        -1 < a && l.splice(a, 1)
      };
      return a
    }})
  })
}, "dojo/when":function() {
  define(["./Deferred", "./promise/Promise"], function(c, n) {
    return function(h, q, m, p) {
      var g = h && "function" === typeof h.then, e = g && h instanceof n;
      if(g) {
        e || (g = new c(h.cancel), h.then(g.resolve, g.reject, g.progress), h = g.promise)
      }else {
        return 1 < arguments.length ? q ? q(h) : h : (new c).resolve(h)
      }
      return q || m || p ? h.then(q, m, p) : h
    }
  })
}, "dojo/Deferred":function() {
  define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "require"], function(c, n, h, q, m) {
    var p = Object.freeze || function() {
    }, g = function(a, b, c, g, h) {
      for(h = 0;h < a.length;h++) {
        e(a[h], b, c, g)
      }
    }, e = function(b, d, c, e) {
      e = b[d];
      var g = b.deferred;
      if(e) {
        try {
          var h = e(c);
          0 === d ? "undefined" !== typeof h && a(g, d, h) : h && "function" === typeof h.then ? (b.cancel = h.cancel, h.then(l(g, 1), l(g, 2), l(g, 0))) : a(g, 1, h)
        }catch(m) {
          a(g, 2, m)
        }
      }else {
        a(g, d, c)
      }
    }, l = function(b, d) {
      return function(c) {
        a(b, d, c)
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
    }, b = function(a) {
      var d = this.promise = new q, c = this, l, k, m = !1, n = [];
      this.isResolved = d.isResolved = function() {
        return 1 === l
      };
      this.isRejected = d.isRejected = function() {
        return 2 === l
      };
      this.isFulfilled = d.isFulfilled = function() {
        return!!l
      };
      this.isCanceled = d.isCanceled = function() {
        return m
      };
      this.progress = function(a, b) {
        if(l) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return d
        }
        g(n, 0, a, null, c);
        return d
      };
      this.resolve = function(a, b) {
        if(l) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return d
        }
        g(n, l = 1, k = a, null, c);
        n = null;
        return d
      };
      var w = this.reject = function(a, b) {
        if(l) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return d
        }
        g(n, l = 2, k = a, void 0, c);
        n = null;
        return d
      };
      this.then = d.then = function(a, c, f) {
        var g = [f, a, c];
        g.cancel = d.cancel;
        g.deferred = new b(function(a) {
          return g.cancel && g.cancel(a)
        });
        l && !n ? e(g, l, k, void 0) : n.push(g);
        return g.deferred.promise
      };
      this.cancel = d.cancel = function(b, d) {
        if(l) {
          if(!0 === d) {
            throw Error("This deferred has already been fulfilled.");
          }
        }else {
          if(a) {
            var c = a(b);
            b = "undefined" === typeof c ? b : c
          }
          m = !0;
          if(l) {
            if(2 === l && k === b) {
              return b
            }
          }else {
            return"undefined" === typeof b && (b = new h), w(b), b
          }
        }
      };
      p(d)
    };
    b.prototype.toString = function() {
      return"[object Deferred]"
    };
    m && m(b);
    return b
  })
}, "dojo/errors/CancelError":function() {
  define(["./create"], function(c) {
    return c("CancelError", null, null, {dojoType:"cancel"})
  })
}, "dojo/errors/create":function() {
  define(["../_base/lang"], function(c) {
    return function(n, h, q, m) {
      q = q || Error;
      var p = function(c) {
        if(q === Error) {
          Error.captureStackTrace && Error.captureStackTrace(this, p);
          var e = Error.call(this, c), l;
          for(l in e) {
            e.hasOwnProperty(l) && (this[l] = e[l])
          }
          this.message = c;
          this.stack = e.stack
        }else {
          q.apply(this, arguments)
        }
        h && h.apply(this, arguments)
      };
      p.prototype = c.delegate(q.prototype, m);
      p.prototype.name = n;
      return p.prototype.constructor = p
    }
  })
}, "dojo/promise/Promise":function() {
  define(["../_base/lang"], function(c) {
    function n() {
      throw new TypeError("abstract");
    }
    return c.extend(function() {
    }, {then:function(c, q, m) {
      n()
    }, cancel:function(c, q) {
      n()
    }, isResolved:function() {
      n()
    }, isRejected:function() {
      n()
    }, isFulfilled:function() {
      n()
    }, isCanceled:function() {
      n()
    }, always:function(c) {
      return this.then(c, c)
    }, otherwise:function(c) {
      return this.then(null, c)
    }, trace:function() {
      return this
    }, traceRejected:function() {
      return this
    }, toString:function() {
      return"[object Promise]"
    }})
  })
}, "dijit/Destroyable":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare"], function(c, n, h) {
    return h("dijit.Destroyable", null, {destroy:function(c) {
      this._destroyed = !0
    }, own:function() {
      var h = ["destroyRecursive", "destroy", "remove"];
      c.forEach(arguments, function(m) {
        function p() {
          e.remove();
          c.forEach(l, function(a) {
            a.remove()
          })
        }
        var g, e = n.before(this, "destroy", function(a) {
          m[g](a)
        }), l = [];
        m.then ? (g = "cancel", m.then(p, p)) : c.forEach(h, function(a) {
          "function" === typeof m[a] && (g || (g = a), l.push(n.after(m, a, p, !0)))
        })
      }, this);
      return arguments
    }})
  })
}, "dijit/_OnDijitClickMixin":function() {
  define("dojo/on dojo/_base/array dojo/keys dojo/_base/declare dojo/has ./a11yclick".split(" "), function(c, n, h, q, m, p) {
    c = q("dijit._OnDijitClickMixin", null, {connect:function(c, e, h) {
      return this.inherited(arguments, [c, "ondijitclick" == e ? p : e, h])
    }});
    c.a11yclick = p;
    return c
  })
}, "dijit/a11yclick":function() {
  define(["dojo/keys", "dojo/mouse", "dojo/on", "dojo/touch"], function(c, n, h, q) {
    function m(e) {
      if((e.keyCode === c.ENTER || e.keyCode === c.SPACE) && !/input|button|textarea/i.test(e.target.nodeName)) {
        for(e = e.target;e;e = e.parentNode) {
          if(e.dojoClick) {
            return!0
          }
        }
      }
    }
    var p;
    h(document, "keydown", function(c) {
      m(c) ? (p = c.target, c.preventDefault()) : p = null
    });
    h(document, "keyup", function(c) {
      m(c) && c.target == p && (p = null, h.emit(c.target, "click", {cancelable:!0, bubbles:!0, ctrlKey:c.ctrlKey, shiftKey:c.shiftKey, metaKey:c.metaKey, altKey:c.altKey, _origType:c.type}))
    });
    var g = function(c, g) {
      c.dojoClick = !0;
      return h(c, "click", g)
    };
    g.click = g;
    g.press = function(e, g) {
      var a = h(e, q.press, function(a) {
        ("mousedown" != a.type || n.isLeft(a)) && g(a)
      }), b = h(e, "keydown", function(a) {
        (a.keyCode === c.ENTER || a.keyCode === c.SPACE) && g(a)
      });
      return{remove:function() {
        a.remove();
        b.remove()
      }}
    };
    g.release = function(e, g) {
      var a = h(e, q.release, function(a) {
        ("mouseup" != a.type || n.isLeft(a)) && g(a)
      }), b = h(e, "keyup", function(a) {
        (a.keyCode === c.ENTER || a.keyCode === c.SPACE) && g(a)
      });
      return{remove:function() {
        a.remove();
        b.remove()
      }}
    };
    g.move = q.move;
    return g
  })
}, "dojo/touch":function() {
  define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(c, n, h, q, m, p, g, e, l, a) {
    function b(a, b, d) {
      return u && d ? function(a, b) {
        return p(a, d, b)
      } : t ? function(d, c) {
        var f = p(d, b, function(a) {
          c.call(this, a);
          M = (new Date).getTime()
        }), e = p(d, a, function(a) {
          (!M || (new Date).getTime() > M + 1E3) && c.call(this, a)
        });
        return{remove:function() {
          f.remove();
          e.remove()
        }}
      } : function(b, d) {
        return p(b, a, d)
      }
    }
    function f(a) {
      do {
        if(void 0 !== a.dojoClick) {
          return a
        }
      }while(a = a.parentNode)
    }
    function d(b, d, c) {
      if(!e.isRight(b)) {
        var g = f(b.target);
        if(w = !b.target.disabled && g && g.dojoClick) {
          if(y = (s = "useTarget" == w) ? g : b.target, s && b.preventDefault(), z = b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, v = b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY, D = ("object" == typeof w ? w.x : "number" == typeof w ? w : 0) || 4, G = ("object" == typeof w ? w.y : "number" == typeof w ? w : 0) || 4, !x) {
            x = !0;
            var l = function(b) {
              w = s ? h.isDescendant(a.doc.elementFromPoint(b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY), y) : w && (b.changedTouches ? b.changedTouches[0].target : b.target) == y && Math.abs((b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX) - z) <= D && Math.abs((b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY) - v) <= 
              G
            };
            a.doc.addEventListener(d, function(a) {
              e.isRight(a) || (l(a), s && a.preventDefault())
            }, !0);
            a.doc.addEventListener(c, function(a) {
              if(!e.isRight(a) && (l(a), w)) {
                I = (new Date).getTime();
                var b = s ? y : a.target;
                "LABEL" === b.tagName && (b = h.byId(b.getAttribute("for")) || b);
                var d = a.changedTouches ? a.changedTouches[0] : a, c = function(b) {
                  var c = document.createEvent("MouseEvents");
                  c._dojo_click = !0;
                  c.initMouseEvent(b, !0, !0, a.view, a.detail, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                  return c
                }, f = c("mousedown"), g = c("mouseup"), k = c("click");
                setTimeout(function() {
                  p.emit(b, "mousedown", f);
                  p.emit(b, "mouseup", g);
                  p.emit(b, "click", k);
                  I = (new Date).getTime()
                }, 0)
              }
            }, !0);
            b = function(b) {
              a.doc.addEventListener(b, function(a) {
                w && (!a._dojo_click && (new Date).getTime() <= I + 1E3 && !("INPUT" == a.target.tagName && q.contains(a.target, "dijitOffScreen"))) && (a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation(), "click" == b && (("INPUT" != a.target.tagName || "radio" == a.target.type || "checkbox" == a.target.type) && "TEXTAREA" != a.target.tagName && "AUDIO" != a.target.tagName && "VIDEO" != a.target.tagName) && a.preventDefault())
              }, !0)
            };
            b("click");
            b("mousedown");
            b("mouseup")
          }
        }
      }
    }
    var r = 5 > g("ios"), u = g("pointer-events") || g("MSPointer"), k = function() {
      var a = {}, b;
      for(b in{down:1, move:1, up:1, cancel:1, over:1, out:1}) {
        a[b] = g("MSPointer") ? "MSPointer" + b.charAt(0).toUpperCase() + b.slice(1) : "pointer" + b
      }
      return a
    }(), t = g("touch-events"), x, w, s = !1, y, z, v, D, G, I, M, K;
    g("touch") && (u ? l(function() {
      a.doc.addEventListener(k.down, function(a) {
        d(a, k.move, k.up)
      }, !0)
    }) : l(function() {
      function b(a) {
        var d = m.delegate(a, {bubbles:!0});
        6 <= g("ios") && (d.touches = a.touches, d.altKey = a.altKey, d.changedTouches = a.changedTouches, d.ctrlKey = a.ctrlKey, d.metaKey = a.metaKey, d.shiftKey = a.shiftKey, d.targetTouches = a.targetTouches);
        return d
      }
      K = a.body();
      a.doc.addEventListener("touchstart", function(a) {
        M = (new Date).getTime();
        var b = K;
        K = a.target;
        p.emit(b, "dojotouchout", {relatedTarget:K, bubbles:!0});
        p.emit(K, "dojotouchover", {relatedTarget:b, bubbles:!0});
        d(a, "touchmove", "touchend")
      }, !0);
      p(a.doc, "touchmove", function(d) {
        M = (new Date).getTime();
        var c = a.doc.elementFromPoint(d.pageX - (r ? 0 : a.global.pageXOffset), d.pageY - (r ? 0 : a.global.pageYOffset));
        c && (K !== c && (p.emit(K, "dojotouchout", {relatedTarget:c, bubbles:!0}), p.emit(c, "dojotouchover", {relatedTarget:K, bubbles:!0}), K = c), p.emit(c, "dojotouchmove", b(d)) || d.preventDefault())
      });
      p(a.doc, "touchend", function(d) {
        M = (new Date).getTime();
        var c = a.doc.elementFromPoint(d.pageX - (r ? 0 : a.global.pageXOffset), d.pageY - (r ? 0 : a.global.pageYOffset)) || a.body();
        p.emit(c, "dojotouchend", b(d))
      })
    }));
    n = {press:b("mousedown", "touchstart", k.down), move:b("mousemove", "dojotouchmove", k.move), release:b("mouseup", "dojotouchend", k.up), cancel:b(e.leave, "touchcancel", u ? k.cancel : null), over:b("mouseover", "dojotouchover", k.over), out:b("mouseout", "dojotouchout", k.out), enter:e._eventHandler(b("mouseover", "dojotouchover", k.over)), leave:e._eventHandler(b("mouseout", "dojotouchout", k.out))};
    return c.touch = n
  })
}, "dijit/_FocusMixin":function() {
  define(["./focus", "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function(c, n, h, q) {
    q.extend(n, {focused:!1, onFocus:function() {
    }, onBlur:function() {
    }, _onFocus:function() {
      this.onFocus()
    }, _onBlur:function() {
      this.onBlur()
    }});
    return h("dijit._FocusMixin", null, {_focusManager:c})
  })
}, "dijit/focus":function() {
  define("dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "), function(c, n, h, q, m, p, g, e, l, a, b, f, d, r, u, k, t) {
    var x, w, s = new (n([f, g], {curNode:null, activeStack:[], constructor:function() {
      var a = e.hitch(this, function(a) {
        h.isDescendant(this.curNode, a) && this.set("curNode", null);
        h.isDescendant(this.prevNode, a) && this.set("prevNode", null)
      });
      c.before(p, "empty", a);
      c.before(p, "destroy", a)
    }, registerIframe:function(a) {
      return this.registerWin(a.contentWindow, a)
    }, registerWin:function(a, d) {
      var c = this, f = a.document && a.document.body;
      if(f) {
        var e = b("pointer-events") ? "pointerdown" : b("MSPointer") ? "MSPointerDown" : b("touch-events") ? "mousedown, touchstart" : "mousedown", g = l(a.document, e, function(a) {
          if(!a || !(a.target && null == a.target.parentNode)) {
            c._onTouchNode(d || a.target, "mouse")
          }
        }), h = l(f, "focusin", function(a) {
          if(a.target.tagName) {
            var b = a.target.tagName.toLowerCase();
            "#document" == b || "body" == b || (u.isFocusable(a.target) ? c._onFocusNode(d || a.target) : c._onTouchNode(d || a.target))
          }
        }), k = l(f, "focusout", function(a) {
          c._onBlurNode(d || a.target)
        });
        return{remove:function() {
          g.remove();
          h.remove();
          k.remove();
          f = g = h = k = null
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
    }, _onTouchNode:function(a, b) {
      w = (new Date).getTime();
      this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
      m.contains(a, "dijitPopup") && (a = a.firstChild);
      var c = [];
      try {
        for(;a;) {
          var f = q.get(a, "dijitPopupParent");
          if(f) {
            a = k.byId(f).domNode
          }else {
            if(a.tagName && "body" == a.tagName.toLowerCase()) {
              if(a === d.body()) {
                break
              }
              a = r.get(a.ownerDocument).frameElement
            }else {
              var e = a.getAttribute && a.getAttribute("widgetId"), g = e && k.byId(e);
              g && !("mouse" == b && g.get("disabled")) && c.unshift(e);
              a = a.parentNode
            }
          }
        }
      }catch(h) {
      }
      this._setStack(c, b)
    }, _onFocusNode:function(a) {
      a && 9 != a.nodeType && (x = (new Date).getTime(), this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
    }, _setStack:function(a, b) {
      var d = this.activeStack, c = d.length - 1, f = a.length - 1;
      if(a[f] != d[c]) {
        this.set("activeStack", a);
        var e;
        for(e = c;0 <= e && d[e] != a[e];e--) {
          if(c = k.byId(d[e])) {
            c._hasBeenBlurred = !0, c.set("focused", !1), c._focusManager == this && c._onBlur(b), this.emit("widget-blur", c, b)
          }
        }
        for(e++;e <= f;e++) {
          if(c = k.byId(a[e])) {
            c.set("focused", !0), c._focusManager == this && c._onFocus(b), this.emit("widget-focus", c, b)
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
      b("ie") && l(window, "unload", function() {
        a && (a.remove(), a = null)
      })
    });
    t.focus = function(a) {
      s.focus(a)
    };
    for(var y in s) {
      /^_/.test(y) || (t.focus[y] = "function" == typeof s[y] ? e.hitch(s, y) : s[y])
    }
    s.watch(function(a, b, d) {
      t.focus[a] = d
    });
    return s
  })
}, "dijit/a11y":function() {
  define("dojo/_base/array dojo/dom dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/sniff ./main".split(" "), function(c, n, h, q, m, p, g) {
    var e = {_isElementShown:function(c) {
      var a = q.get(c);
      return"hidden" != a.visibility && "collapsed" != a.visibility && "none" != a.display && "hidden" != h.get(c, "type")
    }, hasDefaultTabStop:function(c) {
      switch(c.nodeName.toLowerCase()) {
        case "a":
          return h.has(c, "href");
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
            var b = c.contentDocument;
            if("designMode" in b && "on" == b.designMode) {
              return!0
            }
            a = b.body
          }catch(f) {
            try {
              a = c.contentWindow.document.body
            }catch(d) {
              return!1
            }
          }
          return a && ("true" == a.contentEditable || a.firstChild && "true" == a.firstChild.contentEditable);
        default:
          return"true" == c.contentEditable
      }
    }, effectiveTabIndex:function(c) {
      return h.get(c, "disabled") ? void 0 : h.has(c, "tabIndex") ? +h.get(c, "tabIndex") : e.hasDefaultTabStop(c) ? 0 : void 0
    }, isTabNavigable:function(c) {
      return 0 <= e.effectiveTabIndex(c)
    }, isFocusable:function(c) {
      return-1 <= e.effectiveTabIndex(c)
    }, _getTabNavigable:function(c) {
      function a(a) {
        return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
      }
      var b, f, d, g, m, k, n = {}, q = e._isElementShown, w = e.effectiveTabIndex, s = function(c) {
        for(c = c.firstChild;c;c = c.nextSibling) {
          if(!(1 != c.nodeType || 9 >= p("ie") && "HTML" !== c.scopeName || !q(c))) {
            var e = w(c);
            if(0 <= e) {
              if(0 == e) {
                b || (b = c), f = c
              }else {
                if(0 < e) {
                  if(!d || e < g) {
                    g = e, d = c
                  }
                  if(!m || e >= k) {
                    k = e, m = c
                  }
                }
              }
              e = a(c);
              h.get(c, "checked") && e && (n[e] = c)
            }
            "SELECT" != c.nodeName.toUpperCase() && s(c)
          }
        }
      };
      q(c) && s(c);
      return{first:n[a(b)] || b, last:n[a(f)] || f, lowest:n[a(d)] || d, highest:n[a(m)] || m}
    }, getFirstInTabbingOrder:function(c, a) {
      var b = e._getTabNavigable(n.byId(c, a));
      return b.lowest ? b.lowest : b.first
    }, getLastInTabbingOrder:function(c, a) {
      var b = e._getTabNavigable(n.byId(c, a));
      return b.last ? b.last : b.highest
    }};
    m.mixin(g, e);
    return e
  })
}, "dojo/uacss":function() {
  define(["./dom-geometry", "./_base/lang", "./domReady", "./sniff", "./_base/window"], function(c, n, h, q, m) {
    var p = m.doc.documentElement;
    m = q("ie");
    var g = q("trident"), e = q("opera"), l = Math.floor, a = q("ff"), b = c.boxModel.replace(/-/, ""), e = {dj_quirks:q("quirks"), dj_opera:e, dj_khtml:q("khtml"), dj_webkit:q("webkit"), dj_safari:q("safari"), dj_chrome:q("chrome"), dj_edge:q("edge"), dj_gecko:q("mozilla"), dj_ios:q("ios"), dj_android:q("android")};
    m && (e.dj_ie = !0, e["dj_ie" + l(m)] = !0, e.dj_iequirks = q("quirks"));
    g && (e.dj_trident = !0, e["dj_trident" + l(g)] = !0);
    a && (e["dj_ff" + l(a)] = !0);
    e["dj_" + b] = !0;
    var f = "", d;
    for(d in e) {
      e[d] && (f += d + " ")
    }
    p.className = n.trim(p.className + " " + f);
    h(function() {
      if(!c.isBodyLtr()) {
        var a = "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl ");
        p.className = n.trim(p.className + " " + a + "dj_rtl dijitRtl " + f.replace(/ /g, "-rtl "))
      }
    });
    return q
  })
}, "dijit/hccss":function() {
  define(["dojo/dom-class", "dojo/hccss", "dojo/domReady", "dojo/_base/window"], function(c, n, h, q) {
    h(function() {
      n("highcontrast") && c.add(q.body(), "dijit_a11y")
    });
    return n
  })
}, "dojo/hccss":function() {
  define("require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "), function(c, n, h, q, m, p, g) {
    m.add("highcontrast", function() {
      var e = g.doc.createElement("div");
      e.style.cssText = 'border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("' + (n.blankGif || c.toUrl("./resources/blank.gif")) + '");';
      g.body().appendChild(e);
      var h = q.getComputedStyle(e), a = h.backgroundImage, h = h.borderTopColor == h.borderRightColor || a && ("none" == a || "url(invalid-url:)" == a);
      8 >= m("ie") ? e.outerHTML = "" : g.body().removeChild(e);
      return h
    });
    p(function() {
      m("highcontrast") && h.add(g.body(), "dj_a11y")
    });
    return m
  })
}, "dijit/_TemplatedMixin":function() {
  define("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(c, n, h, q, m, p, g, e) {
    var l = n("dijit._TemplatedMixin", e, {templateString:null, templatePath:null, _skipNodeCache:!1, searchContainerNode:!0, _stringRepl:function(a) {
      var b = this.declaredClass, c = this;
      return g.substitute(a, this, function(a, e) {
        "!" == e.charAt(0) && (a = q.getObject(e.substr(1), !1, c));
        if("undefined" == typeof a) {
          throw Error(b + " template:" + e);
        }
        return null == a ? "" : "!" == e.charAt(0) ? a : this._escapeValue("" + a)
      }, this)
    }, _escapeValue:function(a) {
      return a.replace(/["'<>&]/g, function(a) {
        return{"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;"}[a]
      })
    }, buildRendering:function() {
      if(!this._rendered) {
        this.templateString || (this.templateString = c(this.templatePath, {sanitize:!0}));
        var a = l.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), b;
        if(q.isString(a)) {
          if(b = h.toDom(this._stringRepl(a), this.ownerDocument), 1 != b.nodeType) {
            throw Error("Invalid template: " + a);
          }
        }else {
          b = a.cloneNode(!0)
        }
        this.domNode = b
      }
      this.inherited(arguments);
      this._rendered || this._fillContent(this.srcNodeRef);
      this._rendered = !0
    }, _fillContent:function(a) {
      var b = this.containerNode;
      if(a && b) {
        for(;a.hasChildNodes();) {
          b.appendChild(a.firstChild)
        }
      }
    }});
    l._templateCache = {};
    l.getCachedTemplate = function(a, b, c) {
      var d = l._templateCache, e = a, m = d[e];
      if(m) {
        try {
          if(!m.ownerDocument || m.ownerDocument == (c || document)) {
            return m
          }
        }catch(k) {
        }
        h.destroy(m)
      }
      a = g.trim(a);
      if(b || a.match(/\$\{([^\}]+)\}/g)) {
        return d[e] = a
      }
      b = h.toDom(a, c);
      if(1 != b.nodeType) {
        throw Error("Invalid template: " + a);
      }
      return d[e] = b
    };
    p("ie") && m(window, "unload", function() {
      var a = l._templateCache, b;
      for(b in a) {
        var c = a[b];
        "object" == typeof c && h.destroy(c);
        delete a[b]
      }
    });
    return l
  })
}, "dojo/cache":function() {
  define(["./_base/kernel", "./text"], function(c) {
    return c.cache
  })
}, "dojo/text":function() {
  define(["./_base/kernel", "require", "./has", "./request"], function(c, n, h, q) {
    var m;
    m = function(a, b, c) {
      q(a, {sync:!!b, headers:{"X-Requested-With":null}}).then(c)
    };
    var p = {}, g = function(a) {
      if(a) {
        a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
        var b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        b && (a = b[1])
      }else {
        a = ""
      }
      return a
    }, e = {}, l = {};
    c.cache = function(a, b, c) {
      var d;
      "string" == typeof a ? /\//.test(a) ? (d = a, c = b) : d = n.toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "")) : (d = a + "", c = b);
      a = void 0 != c && "string" != typeof c ? c.value : c;
      c = c && c.sanitize;
      if("string" == typeof a) {
        return p[d] = a, c ? g(a) : a
      }
      if(null === a) {
        return delete p[d], null
      }
      d in p || m(d, !0, function(a) {
        p[d] = a
      });
      return c ? g(p[d]) : p[d]
    };
    return{dynamic:!0, normalize:function(a, b) {
      var c = a.split("!"), d = c[0];
      return(/^\./.test(d) ? b(d) : d) + (c[1] ? "!" + c[1] : "")
    }, load:function(a, b, c) {
      a = a.split("!");
      var d = 1 < a.length, h = a[0], n = b.toUrl(a[0]);
      a = "url:" + n;
      var k = e, q = function(a) {
        c(d ? g(a) : a)
      };
      h in p ? k = p[h] : b.cache && a in b.cache ? k = b.cache[a] : n in p && (k = p[n]);
      if(k === e) {
        if(l[n]) {
          l[n].push(q)
        }else {
          var x = l[n] = [q];
          m(n, !b.async, function(a) {
            p[h] = p[n] = a;
            for(var b = 0;b < x.length;) {
              x[b++](a)
            }
            delete l[n]
          })
        }
      }else {
        q(k)
      }
    }}
  })
}, "dojo/request":function() {
  define(["./request/default!"], function(c) {
    return c
  })
}, "dojo/request/default":function() {
  define(["exports", "require", "../has"], function(c, n, h) {
    var q = h("config-requestProvider");
    q || (q = "./xhr");
    c.getPlatformDefaultId = function() {
      return"./xhr"
    };
    c.load = function(c, h, g, e) {
      n(["platform" == c ? "./xhr" : q], function(c) {
        g(c)
      })
    }
  })
}, "dojo/string":function() {
  define(["./_base/kernel", "./_base/lang"], function(c, n) {
    var h = /[&<>'"\/]/g, q = {"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;", "/":"\x26#x2F;"}, m = {};
    n.setObject("dojo.string", m);
    m.escape = function(c) {
      return!c ? "" : c.replace(h, function(c) {
        return q[c]
      })
    };
    m.rep = function(c, g) {
      if(0 >= g || !c) {
        return""
      }
      for(var e = [];;) {
        g & 1 && e.push(c);
        if(!(g >>= 1)) {
          break
        }
        c += c
      }
      return e.join("")
    };
    m.pad = function(c, g, e, h) {
      e || (e = "0");
      c = String(c);
      g = m.rep(e, Math.ceil((g - c.length) / e.length));
      return h ? c + g : g + c
    };
    m.substitute = function(h, g, e, l) {
      l = l || c.global;
      e = e ? n.hitch(l, e) : function(a) {
        return a
      };
      return h.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(a, b, c) {
        a = n.getObject(b, !1, g);
        c && (a = n.getObject(c, !1, l).call(l, a, b));
        return e(a, b).toString()
      })
    };
    m.trim = String.prototype.trim ? n.trim : function(c) {
      c = c.replace(/^\s+/, "");
      for(var g = c.length - 1;0 <= g;g--) {
        if(/\S/.test(c.charAt(g))) {
          c = c.substring(0, g + 1);
          break
        }
      }
      return c
    };
    return m
  })
}, "dijit/_AttachMixin":function() {
  define("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "), function(c, n, h, q, m, p, g, e, l) {
    var a = m.delegate(e, {mouseenter:p.enter, mouseleave:p.leave, keypress:h._keypress}), b;
    h = q("dijit._AttachMixin", null, {constructor:function() {
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
      var e = !0, g = this.attachScope || this, h = b(a, "dojoAttachPoint") || b(a, "data-dojo-attach-point");
      if(h) {
        for(var l = h.split(/\s*,\s*/);h = l.shift();) {
          m.isArray(g[h]) ? g[h].push(a) : g[h] = a, e = "containerNode" != h, this._attachPoints.push(h)
        }
      }
      if(b = b(a, "dojoAttachEvent") || b(a, "data-dojo-attach-event")) {
        h = b.split(/\s*,\s*/);
        for(l = m.trim;b = h.shift();) {
          if(b) {
            var n = null;
            -1 != b.indexOf(":") ? (n = b.split(":"), b = l(n[0]), n = l(n[1])) : b = l(b);
            n || (n = b);
            this._attachEvents.push(c(a, b, m.hitch(g, n)))
          }
        }
      }
      return e
    }, _attach:function(e, d, h) {
      d = d.replace(/^on/, "").toLowerCase();
      d = "dijitclick" == d ? b || (b = c("./a11yclick")) : a[d] || d;
      return g(e, d, h)
    }, _detachTemplateNodes:function() {
      var a = this.attachScope || this;
      n.forEach(this._attachPoints, function(b) {
        delete a[b]
      });
      this._attachPoints = [];
      n.forEach(this._attachEvents, function(a) {
        a.remove()
      });
      this._attachEvents = []
    }, destroyRendering:function() {
      this._detachTemplateNodes();
      this.inherited(arguments)
    }});
    m.extend(l, {dojoAttachEvent:"", dojoAttachPoint:""});
    return h
  })
}, "dijit/BackgroundIframe":function() {
  define("require ./main dojo/_base/config dojo/dom-construct dojo/dom-style dojo/_base/lang dojo/on dojo/sniff".split(" "), function(c, n, h, q, m, p, g, e) {
    e.add("config-bgIframe", (e("ie") || e("trident")) && !/IEMobile\/10\.0/.test(navigator.userAgent));
    var l = new function() {
      var a = [];
      this.pop = function() {
        var b;
        a.length ? (b = a.pop(), b.style.display = "") : (9 > e("ie") ? (b = "\x3ciframe src\x3d'" + (h.dojoBlankHtmlUrl || c.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role\x3d'presentation' style\x3d'position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity\x3d\"0\");'\x3e", b = document.createElement(b)) : (b = q.create("iframe"), b.src = 'javascript:""', b.className = "dijitBackgroundIframe", b.setAttribute("role", "presentation"), m.set(b, "opacity", 0.1)), b.tabIndex = 
        -1);
        return b
      };
      this.push = function(b) {
        b.style.display = "none";
        a.push(b)
      }
    };
    n.BackgroundIframe = function(a) {
      if(!a.id) {
        throw Error("no id");
      }
      if(e("config-bgIframe")) {
        var b = this.iframe = l.pop();
        a.appendChild(b);
        7 > e("ie") || e("quirks") ? (this.resize(a), this._conn = g(a, "resize", p.hitch(this, "resize", a))) : m.set(b, {width:"100%", height:"100%"})
      }
    };
    p.extend(n.BackgroundIframe, {resize:function(a) {
      this.iframe && m.set(this.iframe, {width:a.offsetWidth + "px", height:a.offsetHeight + "px"})
    }, destroy:function() {
      this._conn && (this._conn.remove(), this._conn = null);
      this.iframe && (this.iframe.parentNode.removeChild(this.iframe), l.push(this.iframe), delete this.iframe)
    }});
    return n.BackgroundIframe
  })
}, "url:dijit/templates/Tooltip.html":'\x3cdiv class\x3d"dijitTooltip dijitTooltipLeft" id\x3d"dojoTooltip" data-dojo-attach-event\x3d"mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t\x3e\x3cdiv class\x3d"dijitTooltipConnector" data-dojo-attach-point\x3d"connectorNode"\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point\x3d"containerNode" role\x3d\'alert\'\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
(function() {
  var c = this.require;
  c({cache:{}});
  !c.async && c(["dojo"]);
  c.boot && c.apply(null, c.boot)
})();

//# sourceMappingURL=dojo.js.map