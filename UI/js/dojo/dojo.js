//>>built
(function(d, q) {
  var m, r = function() {
    return"undefined" !== typeof v && "function" !== typeof v ? v : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  }(), p = function() {
  }, l = function(a) {
    for(var c in a) {
      return 0
    }
    return 1
  }, k = {}.toString, f = function(a) {
    return"[object Function]" == k.call(a)
  }, h = function(a) {
    return"[object String]" == k.call(a)
  }, a = function(a) {
    return"[object Array]" == k.call(a)
  }, b = function(a, c) {
    if(a) {
      for(var b = 0;b < a.length;) {
        c(a[b++])
      }
    }
  }, e = function(a, c) {
    for(var b in c) {
      a[b] = c[b]
    }
    return a
  }, c = function(a, c) {
    return e(Error(a), {src:"dojoLoader", info:c})
  }, g = 1, u = function() {
    return"_" + g++
  }, n = function(a, c, b) {
    return wa(a, c, b, 0, n)
  }, v = r, x = v.document, w = x && x.createElement("DiV"), s = n.has = function(a) {
    return f(y[a]) ? y[a] = y[a](v, x, w) : y[a]
  }, y = s.cache = q.hasCache;
  f(d) && (d = d(r));
  s.add = function(a, c, b, e) {
    (void 0 === y[a] || e) && (y[a] = c);
    return b && s(a)
  };
  s.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
  s("host-webworker") && (e(q.hasCache, {"host-browser":0, dom:0, "dojo-dom-ready-api":0, "dojo-sniff":0, "dojo-inject-api":1, "host-webworker":1, "dojo-guarantee-console":0}), q.loaderPatch = {injectUrl:function(a, c) {
    try {
      importScripts(a), c()
    }catch(b) {
      console.error(b)
    }
  }});
  for(var z in d.has) {
    s.add(z, d.has[z], 0, 1)
  }
  n.async = 1;
  var t = new Function("return eval(arguments[0]);");
  n.eval = function(a, c) {
    return t(a + "\r\n//# sourceURL\x3d" + c)
  };
  var D = {}, G = n.signal = function(c, e) {
    var n = D[c];
    b(n && n.slice(0), function(c) {
      c.apply(null, a(e) ? e : [e])
    })
  };
  z = n.on = function(a, c) {
    var b = D[a] || (D[a] = []);
    b.push(c);
    return{remove:function() {
      for(var a = 0;a < b.length;a++) {
        if(b[a] === c) {
          b.splice(a, 1);
          break
        }
      }
    }}
  };
  var I = [], M = {}, K = [], P = {}, U = n.map = {}, A = [], B = {}, F = "", C = {}, H = {}, r = {}, N = 0, Z = function(a) {
    var c, b, e, n;
    for(c in H) {
      b = H[c], (e = c.match(/^url\:(.+)/)) ? C["url:" + xa(e[1], a)] = b : "*now" == c ? n = b : "*noref" != c && (e = ba(c, a, !0), C[e.mid] = C["url:" + e.url] = b)
    }
    n && n(ka(a));
    H = {}
  }, V = function(a) {
    return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(a) {
      return"\\" + a
    })
  }, W = function(a, c) {
    c.splice(0, c.length);
    for(var b in a) {
      c.push([b, a[b], RegExp("^" + V(b) + "(/|$)"), b.length])
    }
    c.sort(function(a, c) {
      return c[3] - a[3]
    });
    return c
  }, Q = function(a, c) {
    b(a, function(a) {
      c.push([h(a[0]) ? RegExp("^" + V(a[0]) + "$") : a[0], a[1]])
    })
  }, J = function(a) {
    var c = a.name;
    c || (c = a, a = {name:c});
    a = e({main:"main"}, a);
    a.location = a.location ? a.location : c;
    a.packageMap && (U[c] = a.packageMap);
    a.main.indexOf("./") || (a.main = a.main.substring(2));
    P[c] = a
  }, X = [], E = function(a, c, f) {
    for(var g in a) {
      "waitSeconds" == g && (n.waitms = 1E3 * (a[g] || 0));
      "cacheBust" == g && (F = a[g] ? h(a[g]) ? a[g] : (new Date).getTime() + "" : "");
      if("baseUrl" == g || "combo" == g) {
        n[g] = a[g]
      }
      a[g] !== y && (n.rawConfig[g] = a[g], "has" != g && s.add("config-" + g, a[g], 0, c))
    }
    n.baseUrl || (n.baseUrl = "./");
    /\/$/.test(n.baseUrl) || (n.baseUrl += "/");
    for(g in a.has) {
      s.add(g, a.has[g], 0, c)
    }
    b(a.packages, J);
    for(var k in a.packagePaths) {
      b(a.packagePaths[k], function(a) {
        var c = k + "/" + a;
        h(a) && (a = {name:a});
        a.location = c;
        J(a)
      })
    }
    W(e(U, a.map), A);
    b(A, function(a) {
      a[1] = W(a[1], []);
      "*" == a[0] && (A.star = a)
    });
    W(e(M, a.paths), K);
    Q(a.aliases, I);
    if(c) {
      X.push({config:a.config})
    }else {
      for(g in a.config) {
        c = Y(g, f), c.config = e(c.config || {}, a.config[g])
      }
    }
    a.cache && (Z(), H = a.cache, a.cache["*noref"] && Z());
    G("config", [a, n.rawConfig])
  };
  s("dojo-cdn");
  var L = x.getElementsByTagName("script");
  m = 0;
  for(var O, R, ca, $;m < L.length;) {
    O = L[m++];
    if((ca = O.getAttribute("src")) && ($ = ca.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
      R = $[3] || "", q.baseUrl = q.baseUrl || R, N = O
    }
    if(ca = O.getAttribute("data-dojo-config") || O.getAttribute("djConfig")) {
      r = n.eval("({ " + ca + " })", "data-dojo-config"), N = O
    }
  }
  n.rawConfig = {};
  E(q, 1);
  s("dojo-cdn") && ((P.dojo.location = R) && (R += "/"), P.dijit.location = R + "../dijit/", P.dojox.location = R + "../dojox/");
  E(d, 1);
  E(r, 1);
  var da = function(a) {
    la(function() {
      b(a.deps, ya)
    })
  }, wa = function(b, g, f, k, d) {
    var l;
    if(h(b)) {
      if((l = Y(b, k, !0)) && l.executed) {
        return l.result
      }
      throw c("undefinedModule", b);
    }
    a(b) || (E(b, 0, k), b = g, g = f);
    if(a(b)) {
      if(b.length) {
        f = "require*" + u();
        for(var w, s = [], m = 0;m < b.length;) {
          w = b[m++], s.push(Y(w, k))
        }
        l = e(ea("", f, 0, ""), {injected:2, deps:s, def:g || p, require:k ? k.require : n, gc:1});
        B[l.mid] = l;
        da(l);
        var I = aa && 0 != "sync";
        la(function() {
          ma(l, I)
        });
        l.executed || T.push(l);
        fa()
      }else {
        g && g()
      }
    }
    return d
  }, ka = function(a) {
    if(!a) {
      return n
    }
    var c = a.require;
    c || (c = function(b, e, g) {
      return wa(b, e, g, a, c)
    }, a.require = e(c, n), c.module = a, c.toUrl = function(c) {
      return xa(c, a)
    }, c.toAbsMid = function(c) {
      return na(c, a)
    });
    return c
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
  }, Ja = n.idle = function() {
    return!ga.length && l(S) && !T.length && !aa
  }, oa = function(a, c) {
    if(c) {
      for(var b = 0;b < c.length;b++) {
        if(c[b][2].test(a)) {
          return c[b]
        }
      }
    }
    return 0
  }, za = function(a) {
    var c = [], b, e;
    for(a = a.replace(/\\/g, "/").split("/");a.length;) {
      b = a.shift(), ".." == b && c.length && ".." != e ? (c.pop(), e = c[c.length - 1]) : "." != b && c.push(e = b)
    }
    return c.join("/")
  }, ea = function(a, c, b, e) {
    return{pid:a, mid:c, pack:b, url:e, executed:0, def:0}
  }, Aa = function(a, e, g, n, k, h, l, d, w) {
    var s, u, p, m;
    m = /^\./.test(a);
    if(/(^\/)|(\:)|(\.js$)/.test(a) || m && !e) {
      return ea(0, a, 0, a)
    }
    a = za(m ? e.mid + "/../" + a : a);
    if(/^\./.test(a)) {
      throw c("irrationalPath", a);
    }
    e && (p = oa(e.mid, h));
    (p = (p = p || h.star) && oa(a, p[1])) && (a = p[1] + a.substring(p[3]));
    e = ($ = a.match(/^([^\/]+)(\/(.+))?$/)) ? $[1] : "";
    (s = g[e]) ? a = e + "/" + (u = $[3] || s.main) : e = "";
    var I = 0;
    b(d, function(c) {
      var b = a.match(c[0]);
      b && 0 < b.length && (I = f(c[1]) ? a.replace(c[0], c[1]) : c[1])
    });
    if(I) {
      return Aa(I, 0, g, n, k, h, l, d, w)
    }
    if(g = n[a]) {
      return w ? ea(g.pid, g.mid, g.pack, g.url) : n[a]
    }
    n = (p = oa(a, l)) ? p[1] + a.substring(p[3]) : e ? ("/" === s.location.slice(-1) ? s.location.slice(0, -1) : s.location) + "/" + u : a;
    /(^\/)|(\:)/.test(n) || (n = k + n);
    return ea(e, a, s, za(n + ".js"))
  }, ba = function(a, c, b) {
    return Aa(a, c, P, B, n.baseUrl, b ? [] : A, b ? [] : K, b ? [] : I)
  }, Ba = function(a, c, b) {
    return a.normalize ? a.normalize(c, function(a) {
      return na(a, b)
    }) : na(c, b)
  }, Ca = 0, Y = function(a, c, b) {
    var e, g;
    (e = a.match(/^(.+?)\!(.*)$/)) ? (g = Y(e[1], c, b), 5 === g.executed && !g.load && pa(g), g.load ? (e = Ba(g, e[2], c), a = g.mid + "!" + (g.dynamic ? ++Ca + "!" : "") + e) : (e = e[2], a = g.mid + "!" + ++Ca + "!waitingForPlugin"), a = {plugin:g, mid:a, req:ka(c), prid:e}) : a = ba(a, c);
    return B[a.mid] || !b && (B[a.mid] = a)
  }, na = n.toAbsMid = function(a, c) {
    return ba(a, c).mid
  }, xa = n.toUrl = function(a, c) {
    var b = ba(a + "/x", c), e = b.url;
    return Da(0 === b.pid ? a : e.substring(0, e.length - 5))
  }, Ea = {injected:2, executed:5, def:3, result:3};
  R = function(a) {
    return B[a] = e({mid:a}, Ea)
  };
  var Ka = R("require"), La = R("exports"), Ma = R("module"), ia = {}, qa = 0, pa = function(a) {
    var c = a.result;
    a.dynamic = c.dynamic;
    a.normalize = c.normalize;
    a.load = c.load;
    return a
  }, Na = function(a) {
    var c = {};
    b(a.loadQ, function(b) {
      var g = Ba(a, b.prid, b.req.module), n = a.dynamic ? b.mid.replace(/waitingForPlugin$/, g) : a.mid + "!" + g, g = e(e({}, b), {mid:n, prid:g, injected:0});
      B[n] || Fa(B[n] = g);
      c[b.mid] = B[n];
      ha(b);
      delete B[b.mid]
    });
    a.loadQ = 0;
    var g = function(a) {
      for(var b = a.deps || [], e = 0;e < b.length;e++) {
        (a = c[b[e].mid]) && (b[e] = a)
      }
    }, n;
    for(n in B) {
      g(B[n])
    }
    b(T, g)
  }, ra = function(a) {
    n.trace("loader-finish-exec", [a.mid]);
    a.executed = 5;
    a.defOrder = qa++;
    a.loadQ && (pa(a), Na(a));
    for(m = 0;m < T.length;) {
      T[m] === a ? T.splice(m, 1) : m++
    }
    /^require\*/.test(a.mid) && delete B[a.mid]
  }, Oa = [], ma = function(a, c) {
    if(4 === a.executed) {
      return n.trace("loader-circular-dependency", [Oa.concat(a.mid).join("-\x3e")]), !a.def || c ? ia : a.cjs && a.cjs.exports
    }
    if(!a.executed) {
      if(!a.def) {
        return ia
      }
      var b = a.mid, e = a.deps || [], g, h = [], k = 0;
      for(a.executed = 4;g = e[k++];) {
        g = g === Ka ? ka(a) : g === La ? a.cjs.exports : g === Ma ? a.cjs : ma(g, c);
        if(g === ia) {
          return a.executed = 0, n.trace("loader-exec-module", ["abort", b]), ia
        }
        h.push(g)
      }
      n.trace("loader-run-factory", [a.mid]);
      b = a.def;
      h = f(b) ? b.apply(null, h) : b;
      a.result = void 0 === h && a.cjs ? a.cjs.exports : h;
      ra(a)
    }
    return a.result
  }, aa = 0, la = function(a) {
    try {
      aa++, a()
    }catch(c) {
      throw c;
    }finally {
      aa--
    }
    Ja() && G("idle", [])
  }, fa = function() {
    aa || la(function() {
      for(var a, c, b = 0;b < T.length;) {
        a = qa, c = T[b], ma(c), a != qa ? b = 0 : b++
      }
    })
  }, Da = "function" == typeof d.fixupUrl ? d.fixupUrl : function(a) {
    a += "";
    return a + (F ? (/\?/.test(a) ? "\x26" : "?") + F : "")
  };
  void 0 === s("dojo-loader-eval-hint-url") && s.add("dojo-loader-eval-hint-url", 1);
  var Fa = function(a) {
    var c = a.plugin;
    5 === c.executed && !c.load && pa(c);
    var b = function(c) {
      a.result = c;
      ha(a);
      ra(a);
      fa()
    };
    c.load ? c.load(a.prid, a.req, b) : c.loadQ ? c.loadQ.push(a) : (c.loadQ = [a], T.unshift(c), ya(c))
  }, ja = 0, sa = 0, ta = 0, Pa = function(a, c) {
    s("config-stripStrict") && (a = a.replace(/(["'])use strict\1/g, ""));
    ta = 1;
    a === ja ? ja.call(null) : n.eval(a, s("dojo-loader-eval-hint-url") ? c.url : c.mid);
    ta = 0
  }, ya = function(a) {
    var b = a.mid, g = a.url;
    if(!a.executed && !a.injected && !(S[b] || a.url && (a.pack && S[a.url] === a.pack || 1 == S[a.url]))) {
      if(Ha(a), a.plugin) {
        Fa(a)
      }else {
        var f = function() {
          Qa(a);
          if(2 !== a.injected) {
            if(s("dojo-enforceDefine")) {
              G("error", c("noDefine", a));
              return
            }
            ha(a);
            e(a, Ea);
            n.trace("loader-define-nonmodule", [a.url])
          }
          fa()
        };
        (ja = C[b] || C["url:" + a.url]) ? (n.trace("loader-inject", ["cache", a.mid, g]), Pa(ja, a), f()) : (n.trace("loader-inject", ["script", a.mid, g]), sa = a, n.injectUrl(Da(g), f, a), sa = 0)
      }
    }
  }, ua = function(a, b, g) {
    n.trace("loader-define-module", [a.mid, b]);
    if(2 === a.injected) {
      return G("error", c("multipleDefine", a)), a
    }
    e(a, {deps:b, def:g, cjs:{id:a.mid, uri:a.url, exports:a.result = {}, setExports:function(c) {
      a.cjs.exports = c
    }, config:function() {
      return a.config
    }}});
    for(var h = 0;b[h];h++) {
      b[h] = Y(b[h], a)
    }
    ha(a);
    !f(g) && !b.length && (a.result = g, ra(a));
    return a
  }, Qa = function(a, c) {
    for(var e = [], g, n;ga.length;) {
      n = ga.shift(), c && (n[0] = c.shift()), g = n[0] && Y(n[0]) || a, e.push([g, n[1], n[2]])
    }
    Z(a);
    b(e, function(a) {
      da(ua.apply(null, a))
    })
  }, Ia = p, Ga = p;
  s.add("ie-event-behavior", x.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
  var va = function(a, c, b, e) {
    if(s("ie-event-behavior")) {
      return a.attachEvent(b, e), function() {
        a.detachEvent(b, e)
      }
    }
    a.addEventListener(c, e, !1);
    return function() {
      a.removeEventListener(c, e, !1)
    }
  }, Ra = va(window, "load", "onload", function() {
    n.pageLoaded = 1;
    try {
      "complete" != x.readyState && (x.readyState = "complete")
    }catch(a) {
    }
    Ra()
  }), L = x.getElementsByTagName("script");
  for(m = 0;!N;) {
    if(!/^dojo/.test((O = L[m++]) && O.type)) {
      N = O
    }
  }
  n.injectUrl = function(a, b, e) {
    e = e.node = x.createElement("script");
    var g = va(e, "load", "onreadystatechange", function(a) {
      a = a || window.event;
      var c = a.target || a.srcElement;
      if("load" === a.type || /complete|loaded/.test(c.readyState)) {
        g(), n(), b && b()
      }
    }), n = va(e, "error", "onerror", function(b) {
      g();
      n();
      G("error", c("scriptError", [a, b]))
    });
    e.type = "text/javascript";
    e.charset = "utf-8";
    e.src = a;
    N.parentNode.insertBefore(e, N);
    return e
  };
  n.log = p;
  n.trace = p;
  O = function(a, b, e) {
    var g = arguments.length, k = ["require", "exports", "module"], l = [0, a, b];
    1 == g ? l = [0, f(a) ? k : [], a] : 2 == g && h(a) ? l = [a, f(b) ? k : [], b] : 3 == g && (l = [a, b, e]);
    n.trace("loader-define", l.slice(0, 2));
    if((g = l[0] && Y(l[0])) && !S[g.mid]) {
      da(ua(g, l[1], l[2]))
    }else {
      if(!s("ie-event-behavior") || ta) {
        ga.push(l)
      }else {
        g = g || sa;
        if(!g) {
          for(a in S) {
            if((k = B[a]) && k.node && "interactive" === k.node.readyState) {
              g = k;
              break
            }
          }
        }
        g ? (Z(g), da(ua(g, l[1], l[2]))) : G("error", c("ieDefineFailed", l[0]));
        fa()
      }
    }
  };
  O.amd = {vendor:"dojotoolkit.org"};
  e(e(n, q.loaderPatch), d.loaderPatch);
  z("error", function(a) {
    try {
      if(console.error(a), a instanceof Error) {
        for(var c in a) {
        }
      }
    }catch(b) {
    }
  });
  e(n, {uid:u, cache:C, packs:P});
  v.define || (v.define = O, v.require = n, b(X, function(a) {
    E(a)
  }), O = r.deps || d.deps || q.deps, r = r.callback || d.callback || q.callback, n.boot = O || r ? [O || [], r] : 0)
})(function(d) {
  return d.dojoConfig || d.djConfig || d.require || {}
}, {async:1, hasCache:{"config-selectorEngine":"lite", "config-tlmSiblingOfDojo":1, "dojo-built":1, "dojo-loader":1, dom:1, "host-browser":1}, packages:[{location:".", name:"dojo"}, {location:"../dijit", name:"dijit"}, {location:"../lsmb", main:"src", name:"lsmb"}]});
require({cache:{"dojo/query":function() {
  define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function(d, q, m, r, p, l, k, f) {
    function h(a, c) {
      var b = function(b, e) {
        if("string" == typeof e && (e = m.byId(e), !e)) {
          return new c([])
        }
        var g = "string" == typeof b ? a(b, e) : b ? b.end && b.on ? b : [b] : [];
        return g.end && g.on ? g : new c(g)
      };
      b.matches = a.match || function(a, c, e) {
        return 0 < b.filter([a], c, e).length
      };
      b.filter = a.filter || function(a, c, e) {
        return b(c, e).filter(function(c) {
          return-1 < p.indexOf(a, c)
        })
      };
      if("function" != typeof a) {
        var e = a.search;
        a = function(a, c) {
          return e(c || document, a)
        }
      }
      return b
    }
    q.add("array-extensible", function() {
      return 1 == l.delegate([], {length:1}).length && !q("bug-for-in-skips-shadowed")
    });
    var a = Array.prototype, b = a.slice, e = a.concat, c = p.forEach, g = function(a, c, e) {
      c = [0].concat(b.call(c, 0));
      e = e || d.global;
      return function(b) {
        c[0] = b;
        return a.apply(e, c)
      }
    }, u = function(a) {
      var c = this instanceof n && q("array-extensible");
      "number" == typeof a && (a = Array(a));
      var b = a && "length" in a ? a : arguments;
      if(c || !b.sort) {
        for(var e = c ? this : [], g = e.length = b.length, f = 0;f < g;f++) {
          e[f] = b[f]
        }
        if(c) {
          return e
        }
        b = e
      }
      l._mixin(b, v);
      b._NodeListCtor = function(a) {
        return n(a)
      };
      return b
    }, n = u, v = n.prototype = q("array-extensible") ? [] : {};
    n._wrap = v._wrap = function(a, c, b) {
      a = new (b || this._NodeListCtor || n)(a);
      return c ? a._stash(c) : a
    };
    n._adaptAsMap = function(a, c) {
      return function() {
        return this.map(g(a, arguments, c))
      }
    };
    n._adaptAsForEach = function(a, c) {
      return function() {
        this.forEach(g(a, arguments, c));
        return this
      }
    };
    n._adaptAsFilter = function(a, c) {
      return function() {
        return this.filter(g(a, arguments, c))
      }
    };
    n._adaptWithCondition = function(a, c, b) {
      return function() {
        var e = arguments, n = g(a, e, b);
        if(c.call(b || d.global, e)) {
          return this.map(n)
        }
        this.forEach(n);
        return this
      }
    };
    c(["slice", "splice"], function(c) {
      var b = a[c];
      v[c] = function() {
        return this._wrap(b.apply(this, arguments), "slice" == c ? this : null)
      }
    });
    c(["indexOf", "lastIndexOf", "every", "some"], function(a) {
      var c = p[a];
      v[a] = function() {
        return c.apply(d, [this].concat(b.call(arguments, 0)))
      }
    });
    l.extend(u, {constructor:n, _NodeListCtor:n, toString:function() {
      return this.join(",")
    }, _stash:function(a) {
      this._parent = a;
      return this
    }, on:function(a, c) {
      var b = this.map(function(b) {
        return r(b, a, c)
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
      var c = b.call(this, 0), g = p.map(arguments, function(a) {
        return b.call(a, 0)
      });
      return this._wrap(e.apply(c, g), this)
    }, map:function(a, c) {
      return this._wrap(p.map(this, a, c), this)
    }, forEach:function(a, b) {
      c(this, a, b);
      return this
    }, filter:function(a) {
      var c = arguments, b = this, e = 0;
      if("string" == typeof a) {
        b = x._filterResult(this, c[0]);
        if(1 == c.length) {
          return b._stash(this)
        }
        e = 1
      }
      return this._wrap(p.filter(b, c[e], c[e + 1]), this)
    }, instantiate:function(a, c) {
      var b = l.isFunction(a) ? a : l.getObject(a);
      c = c || {};
      return this.forEach(function(a) {
        new b(c, a)
      })
    }, at:function() {
      var a = new this._NodeListCtor(0);
      c(arguments, function(c) {
        0 > c && (c = this.length + c);
        this[c] && a.push(this[c])
      }, this);
      return a._stash(this)
    }});
    var x = h(f, u);
    d.query = h(f, function(a) {
      return u(a)
    });
    x.load = function(a, c, b) {
      k.load(a, c, function(a) {
        b(h(a, u))
      })
    };
    d._filterQueryResult = x._filterResult = function(a, c, b) {
      return new u(x.filter(a, c, b))
    };
    d.NodeList = x.NodeList = u;
    return x
  })
}, "dojo/_base/kernel":function() {
  define(["../global", "../has", "./config", "require", "module"], function(d, q, m, r, p) {
    var l, k = {}, f = {}, h = {config:m, global:d, dijit:k, dojox:f}, k = {dojo:["dojo", h], dijit:["dijit", k], dojox:["dojox", f]};
    p = r.map && r.map[p.id.match(/[^\/]+/)[0]];
    for(l in p) {
      k[l] ? k[l][0] = p[l] : k[l] = [p[l], {}]
    }
    for(l in k) {
      p = k[l], p[1]._scopeName = p[0], m.noGlobals || (d[p[0]] = p[1])
    }
    h.scopeMap = k;
    h.baseUrl = h.config.baseUrl = r.baseUrl;
    h.isAsync = r.async;
    h.locale = m.locale;
    d = "$Rev: 48cb00f2 $".match(/[0-9a-f]{7,}/);
    h.version = {major:1, minor:10, patch:10, flag:"", revision:d ? d[0] : NaN, toString:function() {
      var a = h.version;
      return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
    }};
    Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(h);
    h.exit = function() {
    };
    q("host-webworker");
    q.add("console-as-object", function() {
      return Function.prototype.bind && console && "object" === typeof console.log
    });
    "undefined" != typeof console || (console = {});
    m = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
    var a;
    for(d = 0;a = m[d++];) {
      console[a] ? q("console-as-object") && (console[a] = Function.prototype.bind.call(console[a], console)) : function() {
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
    h.deprecated = h.experimental = function() {
    };
    h._hasResource = {};
    return h
  })
}, "dojo/global":function() {
  define(function() {
    return"undefined" !== typeof global && "function" !== typeof global ? global : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : this
  })
}, "dojo/has":function() {
  define(["./global", "require", "module"], function(d, q, m) {
    var r = q.has || function() {
    };
    r.add("dom-addeventlistener", !!document.addEventListener);
    r.add("touch", "ontouchstart" in document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints);
    r.add("touch-events", "ontouchstart" in document);
    r.add("pointer-events", "pointerEnabled" in window.navigator ? window.navigator.pointerEnabled : "PointerEvent" in window);
    r.add("MSPointer", window.navigator.msPointerEnabled);
    r.add("touch-action", r("touch") && r("pointer-events"));
    r.add("device-width", screen.availWidth || innerWidth);
    d = document.createElement("form");
    r.add("dom-attributes-explicit", 0 == d.attributes.length);
    r.add("dom-attributes-specified-flag", 0 < d.attributes.length && 40 > d.attributes.length);
    r.clearElement = function(d) {
      d.innerHTML = "";
      return d
    };
    r.normalize = function(d, l) {
      var k = d.match(/[\?:]|[^:\?]*/g), f = 0, h = function(a) {
        var b = k[f++];
        if(":" == b) {
          return 0
        }
        if("?" == k[f++]) {
          if(!a && r(b)) {
            return h()
          }
          h(!0);
          return h(a)
        }
        return b || 0
      };
      return(d = h()) && l(d)
    };
    r.load = function(d, l, k) {
      d ? l([d], k) : k()
    };
    return r
  })
}, "dojo/_base/config":function() {
  define(["../global", "../has", "require"], function(d, q, m) {
    d = {};
    m = m.rawConfig;
    for(var r in m) {
      d[r] = m[r]
    }
    if(!d.locale && "undefined" != typeof navigator && (r = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage)) {
      d.locale = r.toLowerCase()
    }
    return d
  })
}, "dojo/dom":function() {
  define(["./sniff", "./_base/window"], function(d, q) {
    if(7 >= d("ie")) {
      try {
        document.execCommand("BackgroundImageCache", !1, !0)
      }catch(m) {
      }
    }
    var r = {};
    d("ie") ? r.byId = function(l, k) {
      if("string" != typeof l) {
        return l
      }
      var f = k || q.doc, h = l && f.getElementById(l);
      if(h && (h.attributes.id.value == l || h.id == l)) {
        return h
      }
      f = f.all[l];
      if(!f || f.nodeName) {
        f = [f]
      }
      for(var a = 0;h = f[a++];) {
        if(h.attributes && h.attributes.id && h.attributes.id.value == l || h.id == l) {
          return h
        }
      }
    } : r.byId = function(l, k) {
      return("string" == typeof l ? (k || q.doc).getElementById(l) : l) || null
    };
    r.isDescendant = function(l, k) {
      try {
        l = r.byId(l);
        for(k = r.byId(k);l;) {
          if(l == k) {
            return!0
          }
          l = l.parentNode
        }
      }catch(f) {
      }
      return!1
    };
    d.add("css-user-select", function(l, k, f) {
      if(!f) {
        return!1
      }
      l = f.style;
      k = ["Khtml", "O", "Moz", "Webkit"];
      f = k.length;
      var h = "userSelect";
      do {
        if("undefined" !== typeof l[h]) {
          return h
        }
      }while(f-- && (h = k[f] + "UserSelect"));
      return!1
    });
    var p = d("css-user-select");
    r.setSelectable = p ? function(l, k) {
      r.byId(l).style[p] = k ? "" : "none"
    } : function(l, k) {
      l = r.byId(l);
      var f = l.getElementsByTagName("*"), h = f.length;
      if(k) {
        for(l.removeAttribute("unselectable");h--;) {
          f[h].removeAttribute("unselectable")
        }
      }else {
        for(l.setAttribute("unselectable", "on");h--;) {
          f[h].setAttribute("unselectable", "on")
        }
      }
    };
    return r
  })
}, "dojo/sniff":function() {
  define(["./has"], function(d) {
    var q = navigator, m = q.userAgent, q = q.appVersion, r = parseFloat(q);
    d.add("air", 0 <= m.indexOf("AdobeAIR"));
    d.add("wp", parseFloat(m.split("Windows Phone")[1]) || void 0);
    d.add("msapp", parseFloat(m.split("MSAppHost/")[1]) || void 0);
    d.add("khtml", 0 <= q.indexOf("Konqueror") ? r : void 0);
    d.add("edge", parseFloat(m.split("Edge/")[1]) || void 0);
    d.add("opr", parseFloat(m.split("OPR/")[1]) || void 0);
    d.add("webkit", !d("wp") && !d("edge") && parseFloat(m.split("WebKit/")[1]) || void 0);
    d.add("chrome", !d("edge") && !d("opr") && parseFloat(m.split("Chrome/")[1]) || void 0);
    d.add("android", !d("wp") && parseFloat(m.split("Android ")[1]) || void 0);
    d.add("safari", 0 <= q.indexOf("Safari") && !d("wp") && !d("chrome") && !d("android") && !d("edge") && !d("opr") ? parseFloat(q.split("Version/")[1]) : void 0);
    d.add("mac", 0 <= q.indexOf("Macintosh"));
    d.add("quirks", "BackCompat" == document.compatMode);
    if(!d("wp") && m.match(/(iPhone|iPod|iPad)/)) {
      var p = RegExp.$1.replace(/P/, "p"), l = m.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", l = parseFloat(l.replace(/_/, ".").replace(/_/g, ""));
      d.add(p, l);
      d.add("ios", l)
    }
    d.add("bb", (0 <= m.indexOf("BlackBerry") || 0 <= m.indexOf("BB10")) && parseFloat(m.split("Version/")[1]) || void 0);
    d.add("trident", parseFloat(q.split("Trident/")[1]) || void 0);
    d.add("svg", "undefined" !== typeof SVGAngle);
    d("webkit") || (0 <= m.indexOf("Opera") && d.add("opera", 9.8 <= r ? parseFloat(m.split("Version/")[1]) || r : r), 0 <= m.indexOf("Gecko") && (!d("wp") && !d("khtml") && !d("trident") && !d("edge")) && d.add("mozilla", r), d("mozilla") && d.add("ff", parseFloat(m.split("Firefox/")[1] || m.split("Minefield/")[1]) || void 0), document.all && !d("opera") && (m = parseFloat(q.split("MSIE ")[1]) || void 0, (q = document.documentMode) && (5 != q && Math.floor(m) != q) && (m = q), d.add("ie", m)), d.add("wii", 
    "undefined" != typeof opera && opera.wiiremote));
    return d
  })
}, "dojo/_base/window":function() {
  define(["./kernel", "./lang", "../sniff"], function(d, q, m) {
    var r = {global:d.global, doc:d.global.document || null, body:function(m) {
      m = m || d.doc;
      return m.body || m.getElementsByTagName("body")[0]
    }, setContext:function(m, l) {
      d.global = r.global = m;
      d.doc = r.doc = l
    }, withGlobal:function(m, l, k, f) {
      var h = d.global;
      try {
        return d.global = r.global = m, r.withDoc.call(null, m.document, l, k, f)
      }finally {
        d.global = r.global = h
      }
    }, withDoc:function(p, l, k, f) {
      var h = r.doc, a = m("quirks"), b = m("ie"), e, c, g;
      try {
        d.doc = r.doc = p;
        d.isQuirks = m.add("quirks", "BackCompat" == d.doc.compatMode, !0, !0);
        if(m("ie") && (g = p.parentWindow) && g.navigator) {
          e = parseFloat(g.navigator.appVersion.split("MSIE ")[1]) || void 0, (c = p.documentMode) && (5 != c && Math.floor(e) != c) && (e = c), d.isIE = m.add("ie", e, !0, !0)
        }
        k && "string" == typeof l && (l = k[l]);
        return l.apply(k, f || [])
      }finally {
        d.doc = r.doc = h, d.isQuirks = m.add("quirks", a, !0, !0), d.isIE = m.add("ie", b, !0, !0)
      }
    }};
    q.mixin(d, r);
    return r
  })
}, "dojo/_base/lang":function() {
  define(["./kernel", "../has", "../sniff"], function(d, q) {
    q.add("bug-for-in-skips-shadowed", function() {
      for(var a in{toString:1}) {
        return 0
      }
      return 1
    });
    var m = q("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], r = m.length, p = function(a, b, e) {
      e || (e = a[0] && d.scopeMap[a[0]] ? d.scopeMap[a.shift()][1] : d.global);
      try {
        for(var c = 0;c < a.length;c++) {
          var g = a[c];
          if(!(g in e)) {
            if(b) {
              e[g] = {}
            }else {
              return
            }
          }
          e = e[g]
        }
        return e
      }catch(f) {
      }
    }, l = Object.prototype.toString, k = function(a, b, e) {
      return(e || []).concat(Array.prototype.slice.call(a, b || 0))
    }, f = /\{([^\}]+)\}/g, h = {_extraNames:m, _mixin:function(a, b, e) {
      var c, g, f, n = {};
      for(c in b) {
        if(g = b[c], !(c in a) || a[c] !== g && (!(c in n) || n[c] !== g)) {
          a[c] = e ? e(g) : g
        }
      }
      if(q("bug-for-in-skips-shadowed") && b) {
        for(f = 0;f < r;++f) {
          if(c = m[f], g = b[c], !(c in a) || a[c] !== g && (!(c in n) || n[c] !== g)) {
            a[c] = e ? e(g) : g
          }
        }
      }
      return a
    }, mixin:function(a, b) {
      a || (a = {});
      for(var e = 1, c = arguments.length;e < c;e++) {
        h._mixin(a, arguments[e])
      }
      return a
    }, setObject:function(a, b, e) {
      var c = a.split(".");
      a = c.pop();
      return(e = p(c, !0, e)) && a ? e[a] = b : void 0
    }, getObject:function(a, b, e) {
      return!a ? e : p(a.split("."), b, e)
    }, exists:function(a, b) {
      return void 0 !== h.getObject(a, !1, b)
    }, isString:function(a) {
      return"string" == typeof a || a instanceof String
    }, isArray:function(a) {
      return a && (a instanceof Array || "array" == typeof a)
    }, isFunction:function(a) {
      return"[object Function]" === l.call(a)
    }, isObject:function(a) {
      return void 0 !== a && (null === a || "object" == typeof a || h.isArray(a) || h.isFunction(a))
    }, isArrayLike:function(a) {
      return a && void 0 !== a && !h.isString(a) && !h.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) && (h.isArray(a) || isFinite(a.length))
    }, isAlien:function(a) {
      return a && !h.isFunction(a) && /\{\s*\[native code\]\s*\}/.test(String(a))
    }, extend:function(a, b) {
      for(var e = 1, c = arguments.length;e < c;e++) {
        h._mixin(a.prototype, arguments[e])
      }
      return a
    }, _hitchArgs:function(a, b) {
      var e = h._toArray(arguments, 2), c = h.isString(b);
      return function() {
        var g = h._toArray(arguments), f = c ? (a || d.global)[b] : b;
        return f && f.apply(a || this, e.concat(g))
      }
    }, hitch:function(a, b) {
      if(2 < arguments.length) {
        return h._hitchArgs.apply(d, arguments)
      }
      b || (b = a, a = null);
      if(h.isString(b)) {
        a = a || d.global;
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
      return function(b, e) {
        a.prototype = b;
        var c = new a;
        a.prototype = null;
        e && h._mixin(c, e);
        return c
      }
    }(), _toArray:q("ie") ? function() {
      function a(a, e, c) {
        c = c || [];
        for(e = e || 0;e < a.length;e++) {
          c.push(a[e])
        }
        return c
      }
      return function(b) {
        return(b.item ? a : k).apply(this, arguments)
      }
    }() : k, partial:function(a) {
      return h.hitch.apply(d, [null].concat(h._toArray(arguments)))
    }, clone:function(a) {
      if(!a || "object" != typeof a || h.isFunction(a)) {
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
      var b, e, c;
      if(h.isArray(a)) {
        b = [];
        e = 0;
        for(c = a.length;e < c;++e) {
          e in a && b.push(h.clone(a[e]))
        }
      }else {
        b = a.constructor ? new a.constructor : {}
      }
      return h._mixin(b, a, h.clone)
    }, trim:String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }, replace:function(a, b, e) {
      return a.replace(e || f, h.isFunction(b) ? b : function(a, e) {
        return h.getObject(e, !1, b)
      })
    }};
    h.mixin(d, h);
    return h
  })
}, "dojo/on":function() {
  define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function(d, q, m) {
    function r(a, c, b, n, k) {
      if(n = c.match(/(.*):(.*)/)) {
        return c = n[2], n = n[1], f.selector(n, c).call(k, a, b)
      }
      m("touch") && (h.test(c) && (b = t(b)), !m("event-orientationchange") && "orientationchange" == c && (c = "resize", a = window, b = t(b)));
      g && (b = g(b));
      if(a.addEventListener) {
        var l = c in e, d = l ? e[c] : c;
        a.addEventListener(d, b, l);
        return{remove:function() {
          a.removeEventListener(d, b, l)
        }}
      }
      if(x && a.attachEvent) {
        return x(a, "on" + c, b)
      }
      throw Error("Target must be an event emitter");
    }
    function p() {
      this.cancelable = !1;
      this.defaultPrevented = !0
    }
    function l() {
      this.bubbles = !1
    }
    var k = window.ScriptEngineMajorVersion;
    m.add("jscript", k && k() + ScriptEngineMinorVersion() / 10);
    m.add("event-orientationchange", m("touch") && !m("android"));
    m.add("event-stopimmediatepropagation", window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
    m.add("event-focusin", function(a, c, b) {
      return"onfocusin" in b
    });
    m("touch") && m.add("touch-can-modify-event-delegate", function() {
      var a = function() {
      };
      a.prototype = document.createEvent("MouseEvents");
      try {
        var c = new a;
        c.target = null;
        return null === c.target
      }catch(b) {
        return!1
      }
    });
    var f = function(a, c, b, e) {
      return"function" == typeof a.on && "function" != typeof c && !a.nodeType ? a.on(c, b) : f.parse(a, c, b, r, e, this)
    };
    f.pausable = function(a, c, b, e) {
      var g;
      a = f(a, c, function() {
        if(!g) {
          return b.apply(this, arguments)
        }
      }, e);
      a.pause = function() {
        g = !0
      };
      a.resume = function() {
        g = !1
      };
      return a
    };
    f.once = function(a, c, b, e) {
      var g = f(a, c, function() {
        g.remove();
        return b.apply(this, arguments)
      });
      return g
    };
    f.parse = function(a, c, b, e, g, n) {
      var h;
      if(c.call) {
        return c.call(n, a, b)
      }
      c instanceof Array ? h = c : -1 < c.indexOf(",") && (h = c.split(/\s*,\s*/));
      if(h) {
        var k = [];
        c = 0;
        for(var l;l = h[c++];) {
          k.push(f.parse(a, l, b, e, g, n))
        }
        k.remove = function() {
          for(var a = 0;a < k.length;a++) {
            k[a].remove()
          }
        };
        return k
      }
      return e(a, c, b, g, n)
    };
    var h = /^touch/;
    f.matches = function(a, c, b, e, g) {
      g = g && "function" == typeof g.matches ? g : q.query;
      e = !1 !== e;
      1 != a.nodeType && (a = a.parentNode);
      for(;!g.matches(a, c, b);) {
        if(a == b || !1 === e || !(a = a.parentNode) || 1 != a.nodeType) {
          return!1
        }
      }
      return a
    };
    f.selector = function(a, c, b) {
      return function(e, g) {
        function n(c) {
          return f.matches(c, a, e, b, k)
        }
        var k = "function" == typeof a ? {matches:a} : this, h = c.bubble;
        return h ? f(e, h(n), g) : f(e, c, function(a) {
          var c = n(a.target);
          if(c) {
            return g.call(c, a)
          }
        })
      }
    };
    var a = [].slice, b = f.emit = function(c, b, e) {
      var g = a.call(arguments, 2), n = "on" + b;
      if("parentNode" in c) {
        var f = g[0] = {}, h;
        for(h in e) {
          f[h] = e[h]
        }
        f.preventDefault = p;
        f.stopPropagation = l;
        f.target = c;
        f.type = b;
        e = f
      }
      do {
        c[n] && c[n].apply(c, g)
      }while(e && e.bubbles && (c = c.parentNode));
      return e && e.cancelable && e
    }, e = m("event-focusin") ? {} : {focusin:"focus", focusout:"blur"};
    if(!m("event-stopimmediatepropagation")) {
      var c = function() {
        this.modified = this.immediatelyStopped = !0
      }, g = function(a) {
        return function(b) {
          if(!b.immediatelyStopped) {
            return b.stopImmediatePropagation = c, a.apply(this, arguments)
          }
        }
      }
    }
    if(m("dom-addeventlistener")) {
      f.emit = function(a, c, e) {
        if(a.dispatchEvent && document.createEvent) {
          var g = (a.ownerDocument || document).createEvent("HTMLEvents");
          g.initEvent(c, !!e.bubbles, !!e.cancelable);
          for(var n in e) {
            n in g || (g[n] = e[n])
          }
          return a.dispatchEvent(g) && g
        }
        return b.apply(f, arguments)
      }
    }else {
      f._fixEvent = function(a, c) {
        a || (a = (c && (c.ownerDocument || c.document || c).parentWindow || window).event);
        if(!a) {
          return a
        }
        try {
          u && (a.type == u.type && a.srcElement == u.target) && (a = u)
        }catch(b) {
        }
        if(!a.target) {
          switch(a.target = a.srcElement, a.currentTarget = c || a.srcElement, "mouseover" == a.type && (a.relatedTarget = a.fromElement), "mouseout" == a.type && (a.relatedTarget = a.toElement), a.stopPropagation || (a.stopPropagation = w, a.preventDefault = s), a.type) {
            case "keypress":
              var e = "charCode" in a ? a.charCode : a.keyCode;
              10 == e ? (e = 0, a.keyCode = 13) : 13 == e || 27 == e ? e = 0 : 3 == e && (e = 99);
              a.charCode = e;
              e = a;
              e.keyChar = e.charCode ? String.fromCharCode(e.charCode) : "";
              e.charOrCode = e.keyChar || e.keyCode
          }
        }
        return a
      };
      var u, n = function(a) {
        this.handle = a
      };
      n.prototype.remove = function() {
        delete _dojoIEListeners_[this.handle]
      };
      var v = function(a) {
        return function(c) {
          c = f._fixEvent(c, this);
          var b = a.call(this, c);
          c.modified && (u || setTimeout(function() {
            u = null
          }), u = c);
          return b
        }
      }, x = function(a, c, b) {
        b = v(b);
        if(((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > m("jscript")) && !m("config-_allow_leaks")) {
          "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
          var e = a[c];
          if(!e || !e.listeners) {
            var g = e, e = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
            e.listeners = [];
            a[c] = e;
            e.global = this;
            g && e.listeners.push(_dojoIEListeners_.push(g) - 1)
          }
          e.listeners.push(a = e.global._dojoIEListeners_.push(b) - 1);
          return new n(a)
        }
        return d.after(a, c, b, !0)
      }, w = function() {
        this.cancelBubble = !0
      }, s = f._preventDefault = function() {
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
    if(m("touch")) {
      var y = function() {
      }, z = window.orientation, t = function(a) {
        return function(c) {
          var b = c.corrected;
          if(!b) {
            var e = c.type;
            try {
              delete c.type
            }catch(g) {
            }
            if(c.type) {
              if(m("touch-can-modify-event-delegate")) {
                y.prototype = c, b = new y
              }else {
                var b = {}, n;
                for(n in c) {
                  b[n] = c[n]
                }
              }
              b.preventDefault = function() {
                c.preventDefault()
              };
              b.stopPropagation = function() {
                c.stopPropagation()
              }
            }else {
              b = c, b.type = e
            }
            c.corrected = b;
            if("resize" == e) {
              if(z == window.orientation) {
                return null
              }
              z = window.orientation;
              b.type = "orientationchange";
              return a.call(this, b)
            }
            "rotation" in b || (b.rotation = 0, b.scale = 1);
            if(window.TouchEvent && c instanceof TouchEvent) {
              var e = b.changedTouches[0], f;
              for(f in e) {
                delete b[f], b[f] = e[f]
              }
            }
          }
          return a.call(this, b)
        }
      }
    }
    return f
  })
}, "dojo/_base/array":function() {
  define(["./kernel", "../has", "./lang"], function(d, q, m) {
    function r(a) {
      return k[a] = new Function("item", "index", "array", a)
    }
    function p(a) {
      var b = !a;
      return function(e, c, g) {
        var f = 0, n = e && e.length || 0, h;
        n && "string" == typeof e && (e = e.split(""));
        "string" == typeof c && (c = k[c] || r(c));
        if(g) {
          for(;f < n;++f) {
            if(h = !c.call(g, e[f], f, e), a ^ h) {
              return!h
            }
          }
        }else {
          for(;f < n;++f) {
            if(h = !c(e[f], f, e), a ^ h) {
              return!h
            }
          }
        }
        return b
      }
    }
    function l(a) {
      var b = 1, e = 0, c = 0;
      a || (b = e = c = -1);
      return function(g, k, n, l) {
        if(l && 0 < b) {
          return h.lastIndexOf(g, k, n)
        }
        l = g && g.length || 0;
        var d = a ? l + c : e;
        n === f ? n = a ? e : l + c : 0 > n ? (n = l + n, 0 > n && (n = e)) : n = n >= l ? l + c : n;
        for(l && "string" == typeof g && (g = g.split(""));n != d;n += b) {
          if(g[n] == k) {
            return n
          }
        }
        return-1
      }
    }
    var k = {}, f, h = {every:p(!1), some:p(!0), indexOf:l(!0), lastIndexOf:l(!1), forEach:function(a, b, e) {
      var c = 0, g = a && a.length || 0;
      g && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = k[b] || r(b));
      if(e) {
        for(;c < g;++c) {
          b.call(e, a[c], c, a)
        }
      }else {
        for(;c < g;++c) {
          b(a[c], c, a)
        }
      }
    }, map:function(a, b, e, c) {
      var g = 0, f = a && a.length || 0;
      c = new (c || Array)(f);
      f && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = k[b] || r(b));
      if(e) {
        for(;g < f;++g) {
          c[g] = b.call(e, a[g], g, a)
        }
      }else {
        for(;g < f;++g) {
          c[g] = b(a[g], g, a)
        }
      }
      return c
    }, filter:function(a, b, e) {
      var c = 0, g = a && a.length || 0, f = [], n;
      g && "string" == typeof a && (a = a.split(""));
      "string" == typeof b && (b = k[b] || r(b));
      if(e) {
        for(;c < g;++c) {
          n = a[c], b.call(e, n, c, a) && f.push(n)
        }
      }else {
        for(;c < g;++c) {
          n = a[c], b(n, c, a) && f.push(n)
        }
      }
      return f
    }, clearCache:function() {
      k = {}
    }};
    m.mixin(d, h);
    return h
  })
}, "dojo/selector/_loader":function() {
  define(["../has", "require"], function(d, q) {
    if("undefined" !== typeof document) {
      var m = document.createElement("div");
      d.add("dom-qsa2.1", !!m.querySelectorAll);
      d.add("dom-qsa3", function() {
        try {
          return m.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == m.querySelectorAll(".TEST:empty").length
        }catch(d) {
        }
      })
    }
    var r;
    return{load:function(m, l, k, f) {
      if(f && f.isBuild) {
        k()
      }else {
        f = q;
        m = "default" == m ? d("config-selectorEngine") || "css3" : m;
        m = "css2" == m || "lite" == m ? "./lite" : "css2.1" == m ? d("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == m ? d("dom-qsa3") ? "./lite" : "./acme" : "acme" == m ? "./acme" : (f = l) && m;
        if("?" == m.charAt(m.length - 1)) {
          m = m.substring(0, m.length - 1);
          var h = !0
        }
        if(h && (d("dom-compliant-qsa") || r)) {
          return k(r)
        }
        f([m], function(a) {
          "./lite" != m && (r = a);
          k(a)
        })
      }
    }}
  })
}, "dojo/selector/lite":function() {
  define(["../has", "../_base/kernel"], function(d, q) {
    var m = document.createElement("div"), r = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.msMatchesSelector || m.oMatchesSelector, p = m.querySelectorAll, l = /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g;
    d.add("dom-matches-selector", !!r);
    d.add("dom-qsa", !!p);
    var k = function(b, e) {
      if(a && -1 < b.indexOf(",")) {
        return a(b, e)
      }
      var c = e ? e.ownerDocument || e : q.doc || document, g = (p ? /^([\w]*)#([\w\-]+$)|^(\.)([\w\-\*]+$)|^(\w+$)/ : /^([\w]*)#([\w\-]+)(?:\s+(.*))?$|(?:^|(>|.+\s+))([\w\-\*]+)(\S*$)/).exec(b);
      e = e || c;
      if(g) {
        if(g[2]) {
          var l = q.byId ? q.byId(g[2], c) : c.getElementById(g[2]);
          if(!l || g[1] && g[1] != l.tagName.toLowerCase()) {
            return[]
          }
          if(e != c) {
            for(c = l;c != e;) {
              if(c = c.parentNode, !c) {
                return[]
              }
            }
          }
          return g[3] ? k(g[3], l) : [l]
        }
        if(g[3] && e.getElementsByClassName) {
          return e.getElementsByClassName(g[4])
        }
        if(g[5]) {
          if(l = e.getElementsByTagName(g[5]), g[4] || g[6]) {
            b = (g[4] || "") + g[6]
          }else {
            return l
          }
        }
      }
      if(p) {
        return 1 === e.nodeType && "object" !== e.nodeName.toLowerCase() ? f(e, b, e.querySelectorAll) : e.querySelectorAll(b)
      }
      l || (l = e.getElementsByTagName("*"));
      for(var g = [], c = 0, n = l.length;c < n;c++) {
        var d = l[c];
        1 == d.nodeType && h(d, b, e) && g.push(d)
      }
      return g
    }, f = function(a, e, c) {
      var g = a, f = a.getAttribute("id"), n = f || "__dojo__", h = a.parentNode, k = /^\s*[+~]/.test(e);
      if(k && !h) {
        return[]
      }
      f ? n = n.replace(/'/g, "\\$\x26") : a.setAttribute("id", n);
      k && h && (a = a.parentNode);
      e = e.match(l);
      for(h = 0;h < e.length;h++) {
        e[h] = "[id\x3d'" + n + "'] " + e[h]
      }
      e = e.join(",");
      try {
        return c.call(a, e)
      }finally {
        f || g.removeAttribute("id")
      }
    };
    if(!d("dom-matches-selector")) {
      var h = function() {
        function a(c, b, e) {
          var g = b.charAt(0);
          if('"' == g || "'" == g) {
            b = b.slice(1, -1)
          }
          b = b.replace(/\\/g, "");
          var n = h[e || ""];
          return function(a) {
            return(a = a.getAttribute(c)) && n(a, b)
          }
        }
        function e(a) {
          return function(c, b) {
            for(;(c = c.parentNode) != b;) {
              if(a(c, b)) {
                return!0
              }
            }
          }
        }
        function c(a) {
          return function(c, b) {
            c = c.parentNode;
            return a ? c != b && a(c, b) : c == b
          }
        }
        function g(a, c) {
          return a ? function(b, e) {
            return c(b) && a(b, e)
          } : c
        }
        var f = "div" == m.tagName ? "toLowerCase" : "toUpperCase", n = {"":function(a) {
          a = a[f]();
          return function(c) {
            return c.tagName == a
          }
        }, ".":function(a) {
          var c = " " + a + " ";
          return function(b) {
            return-1 < b.className.indexOf(a) && -1 < (" " + b.className + " ").indexOf(c)
          }
        }, "#":function(a) {
          return function(c) {
            return c.id == a
          }
        }}, h = {"^\x3d":function(a, c) {
          return 0 == a.indexOf(c)
        }, "*\x3d":function(a, c) {
          return-1 < a.indexOf(c)
        }, "$\x3d":function(a, c) {
          return a.substring(a.length - c.length, a.length) == c
        }, "~\x3d":function(a, c) {
          return-1 < (" " + a + " ").indexOf(" " + c + " ")
        }, "|\x3d":function(a, c) {
          return 0 == (a + "-").indexOf(c + "-")
        }, "\x3d":function(a, c) {
          return a == c
        }, "":function(a, c) {
          return!0
        }}, k = {};
        return function(f, h, l) {
          var d = k[h];
          if(!d) {
            if(h.replace(/(?:\s*([> ])\s*)|(#|\.)?((?:\\.|[\w-])+)|\[\s*([\w-]+)\s*(.?=)?\s*("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|(?:\\.|[^\]])*)\s*\]/g, function(f, h, k, l, m, p, u) {
              l ? d = g(d, n[k || ""](l.replace(/\\/g, ""))) : h ? d = (" " == h ? e : c)(d) : m && (d = g(d, a(m, u, p)));
              return""
            })) {
              throw Error("Syntax error in query");
            }
            if(!d) {
              return!0
            }
            k[h] = d
          }
          return d(f, l)
        }
      }()
    }
    if(!d("dom-qsa")) {
      var a = function(a, e) {
        for(var c = a.match(l), g = [], f = 0;f < c.length;f++) {
          a = new String(c[f].replace(/\s*$/, ""));
          a.indexOf = escape;
          for(var n = k(a, e), h = 0, d = n.length;h < d;h++) {
            var m = n[h];
            g[m.sourceIndex] = m
          }
        }
        c = [];
        for(f in g) {
          c.push(g[f])
        }
        return c
      }
    }
    k.match = r ? function(a, e, c) {
      return c && 9 != c.nodeType ? f(c, e, function(c) {
        return r.call(a, c)
      }) : r.call(a, e)
    } : h;
    return k
  })
}, "dojo/domReady":function() {
  define(["./global", "./has"], function(d, q) {
    function m(a) {
      h.push(a);
      f && r()
    }
    function r() {
      if(!a) {
        for(a = !0;h.length;) {
          try {
            h.shift()(p)
          }catch(c) {
            console.error(c, "in domReady callback", c.stack)
          }
        }
        a = !1;
        m._onQEmpty()
      }
    }
    var p = document, l = {loaded:1, complete:1}, k = "string" != typeof p.readyState, f = !!l[p.readyState], h = [], a;
    m.load = function(a, c, b) {
      m(b)
    };
    m._Q = h;
    m._onQEmpty = function() {
    };
    k && (p.readyState = "loading");
    if(!f) {
      var b = [], e = function(a) {
        a = a || d.event;
        f || "readystatechange" == a.type && !l[p.readyState] || (k && (p.readyState = "complete"), f = 1, r())
      }, c = function(a, c) {
        a.addEventListener(c, e, !1);
        h.push(function() {
          a.removeEventListener(c, e, !1)
        })
      };
      if(!q("dom-addeventlistener")) {
        var c = function(a, c) {
          c = "on" + c;
          a.attachEvent(c, e);
          h.push(function() {
            a.detachEvent(c, e)
          })
        }, g = p.createElement("div");
        try {
          g.doScroll && null === d.frameElement && b.push(function() {
            try {
              return g.doScroll("left"), 1
            }catch(a) {
            }
          })
        }catch(u) {
        }
      }
      c(p, "DOMContentLoaded");
      c(d, "load");
      "onreadystatechange" in p ? c(p, "readystatechange") : k || b.push(function() {
        return l[p.readyState]
      });
      if(b.length) {
        var n = function() {
          if(!f) {
            for(var a = b.length;a--;) {
              if(b[a]()) {
                e("poller");
                return
              }
            }
            setTimeout(n, 30)
          }
        };
        n()
      }
    }
    return m
  })
}, "dijit/Tooltip":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff ./_base/manager ./place ./_Widget ./_TemplatedMixin ./BackgroundIframe dojo/text!./templates/Tooltip.html ./main".split(" "), function(d, q, m, r, p, l, k, f, h, a, b, e, c, g, u, n, v, x) {
    function w() {
    }
    var s = q("dijit._MasterTooltip", [g, u], {duration:e.defaultDuration, templateString:v, postCreate:function() {
      this.ownerDocumentBody.appendChild(this.domNode);
      this.bgIframe = new n(this.domNode);
      this.fadeIn = m.fadeIn({node:this.domNode, duration:this.duration, onEnd:f.hitch(this, "_onShow")});
      this.fadeOut = m.fadeOut({node:this.domNode, duration:this.duration, onEnd:f.hitch(this, "_onHide")})
    }, show:function(a, b, e, g, n, h, l) {
      if(!this.aroundNode || !(this.aroundNode === b && this.containerNode.innerHTML == a)) {
        if("playing" == this.fadeOut.status()) {
          this._onDeck = arguments
        }else {
          this.containerNode.innerHTML = a;
          n && this.set("textDir", n);
          this.containerNode.align = g ? "right" : "left";
          var d = c.around(this.domNode, b, e && e.length ? e : y.defaultPosition, !g, f.hitch(this, "orient")), m = d.aroundNodePos;
          "M" == d.corner.charAt(0) && "M" == d.aroundCorner.charAt(0) ? (this.connectorNode.style.top = m.y + (m.h - this.connectorNode.offsetHeight >> 1) - d.y + "px", this.connectorNode.style.left = "") : "M" == d.corner.charAt(1) && "M" == d.aroundCorner.charAt(1) ? this.connectorNode.style.left = m.x + (m.w - this.connectorNode.offsetWidth >> 1) - d.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
          k.set(this.domNode, "opacity", 0);
          this.fadeIn.play();
          this.isShowingNow = !0;
          this.aroundNode = b;
          this.onMouseEnter = h || w;
          this.onMouseLeave = l || w
        }
      }
    }, orient:function(a, c, e, g, n) {
      this.connectorNode.style.top = "";
      var f = g.h;
      g = g.w;
      a.className = "dijitTooltip " + {"MR-ML":"dijitTooltipRight", "ML-MR":"dijitTooltipLeft", "TM-BM":"dijitTooltipAbove", "BM-TM":"dijitTooltipBelow", "BL-TL":"dijitTooltipBelow dijitTooltipABLeft", "TL-BL":"dijitTooltipAbove dijitTooltipABLeft", "BR-TR":"dijitTooltipBelow dijitTooltipABRight", "TR-BR":"dijitTooltipAbove dijitTooltipABRight", "BR-BL":"dijitTooltipRight", "BL-BR":"dijitTooltipLeft"}[c + "-" + e];
      this.domNode.style.width = "auto";
      var h = l.position(this.domNode);
      if(b("ie") || b("trident")) {
        h.w += 2
      }
      var k = Math.min(Math.max(g, 1), h.w);
      l.setMarginBox(this.domNode, {w:k});
      "B" == e.charAt(0) && "B" == c.charAt(0) ? (a = l.position(a), c = this.connectorNode.offsetHeight, a.h > f ? (this.connectorNode.style.top = f - (n.h + c >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(n.h / 2 - c / 2, 0), a.h - c) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom = "");
      return Math.max(0, h.w - g)
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
      d.forEach(a.children, function(a) {
        this._setAutoTextDir(a)
      }, this)
    }, _setTextDirAttr:function(a) {
      this._set("textDir", a);
      "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
    }});
    x.showTooltip = function(a, c, b, e, g, n, f) {
      b && (b = d.map(b, function(a) {
        return{after:"after-centered", before:"before-centered"}[a] || a
      }));
      y._masterTT || (x._masterTT = y._masterTT = new s);
      return y._masterTT.show(a, c, b, e, g, n, f)
    };
    x.hideTooltip = function(a) {
      return y._masterTT && y._masterTT.hide(a)
    };
    var y = q("dijit.Tooltip", g, {label:"", showDelay:400, hideDelay:400, connectId:[], position:[], selector:"", _setConnectIdAttr:function(c) {
      d.forEach(this._connections || [], function(a) {
        d.forEach(a, function(a) {
          a.remove()
        })
      }, this);
      this._connectIds = d.filter(f.isArrayLike(c) ? c : c ? [c] : [], function(a) {
        return r.byId(a, this.ownerDocument)
      }, this);
      this._connections = d.map(this._connectIds, function(c) {
        c = r.byId(c, this.ownerDocument);
        var b = this.selector, e = b ? function(c) {
          return a.selector(b, c)
        } : function(a) {
          return a
        }, g = this;
        return[a(c, e(h.enter), function() {
          g._onHover(this)
        }), a(c, e("focusin"), function() {
          g._onHover(this)
        }), a(c, e(h.leave), f.hitch(g, "_onUnHover")), a(c, e("focusout"), f.hitch(g, "set", "state", "DORMANT"))]
      }, this);
      this._set("connectId", c)
    }, addTarget:function(a) {
      a = a.id || a;
      -1 == d.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
    }, removeTarget:function(a) {
      a = d.indexOf(this._connectIds, a.id || a);
      0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
    }, buildRendering:function() {
      this.inherited(arguments);
      p.add(this.domNode, "dijitTooltipData")
    }, startup:function() {
      this.inherited(arguments);
      var a = this.connectId;
      d.forEach(f.isArrayLike(a) ? a : [a], this.addTarget, this)
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
            var c = this.getContent(this._connectNode);
            if(!c) {
              this.set("state", "DORMANT");
              return
            }
            y.show(c, this._connectNode, this.position, !this.isLeftToRight(), this.textDir, f.hitch(this, "set", "state", "SHOWING"), f.hitch(this, "set", "state", "HIDE TIMER"));
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
}, "dojo/_base/declare":function() {
  define(["./kernel", "../has", "./lang"], function(d, q, m) {
    function r(a, c) {
      throw Error("declare" + (c ? " " + c : "") + ": " + a);
    }
    function p(a, c, b) {
      var e, g, n, f, h, k, l, d = this._inherited = this._inherited || {};
      "string" == typeof a && (e = a, a = c, c = b);
      b = 0;
      f = a.callee;
      (e = e || f.nom) || r("can't deduce a name to call inherited()", this.declaredClass);
      h = this.constructor._meta;
      n = h.bases;
      l = d.p;
      if(e != D) {
        if(d.c !== f && (l = 0, k = n[0], h = k._meta, h.hidden[e] !== f)) {
          (g = h.chains) && "string" == typeof g[e] && r("calling chained method with inherited: " + e, this.declaredClass);
          do {
            if(h = k._meta, g = k.prototype, h && (g[e] === f && g.hasOwnProperty(e) || h.hidden[e] === f)) {
              break
            }
          }while(k = n[++l]);
          l = k ? l : -1
        }
        if(k = n[++l]) {
          if(g = k.prototype, k._meta && g.hasOwnProperty(e)) {
            b = g[e]
          }else {
            f = s[e];
            do {
              if(g = k.prototype, (b = g[e]) && (k._meta ? g.hasOwnProperty(e) : b !== f)) {
                break
              }
            }while(k = n[++l])
          }
        }
        b = k && b || s[e]
      }else {
        if(d.c !== f && (l = 0, (h = n[0]._meta) && h.ctor !== f)) {
          g = h.chains;
          for((!g || "manual" !== g.constructor) && r("calling chained constructor with inherited", this.declaredClass);(k = n[++l]) && !((h = k._meta) && h.ctor === f);) {
          }
          l = k ? l : -1
        }
        for(;(k = n[++l]) && !(b = (h = k._meta) ? h.ctor : k);) {
        }
        b = k && b
      }
      d.c = b;
      d.p = l;
      if(b) {
        return!0 === c ? b : b.apply(this, c || a)
      }
    }
    function l(a, c) {
      return"string" == typeof a ? this.__inherited(a, c, !0) : this.__inherited(a, !0)
    }
    function k(a, c, b) {
      var e = this.getInherited(a, c);
      if(e) {
        return e.apply(this, b || c || a)
      }
    }
    function f(a) {
      for(var c = this.constructor._meta.bases, b = 0, e = c.length;b < e;++b) {
        if(c[b] === a) {
          return!0
        }
      }
      return this instanceof a
    }
    function h(a, c) {
      for(var b in c) {
        b != D && c.hasOwnProperty(b) && (a[b] = c[b])
      }
      if(q("bug-for-in-skips-shadowed")) {
        for(var e = m._extraNames, g = e.length;g;) {
          b = e[--g], b != D && c.hasOwnProperty(b) && (a[b] = c[b])
        }
      }
    }
    function a(a) {
      x.safeMixin(this.prototype, a);
      return this
    }
    function b(a, c) {
      a instanceof Array || "function" == typeof a || (c = a, a = void 0);
      c = c || {};
      a = a || [];
      return x([this].concat(a), c)
    }
    function e(a, c) {
      return function() {
        var b = arguments, e = b, g = b[0], n, f;
        f = a.length;
        var h;
        if(!(this instanceof b.callee)) {
          return v(b)
        }
        if(c && (g && g.preamble || this.preamble)) {
          h = Array(a.length);
          h[0] = b;
          for(n = 0;;) {
            if(g = b[0]) {
              (g = g.preamble) && (b = g.apply(this, b) || b)
            }
            g = a[n].prototype;
            (g = g.hasOwnProperty("preamble") && g.preamble) && (b = g.apply(this, b) || b);
            if(++n == f) {
              break
            }
            h[n] = b
          }
        }
        for(n = f - 1;0 <= n;--n) {
          g = a[n], (g = (f = g._meta) ? f.ctor : g) && g.apply(this, h ? h[n] : b)
        }
        (g = this.postscript) && g.apply(this, e)
      }
    }
    function c(a, c) {
      return function() {
        var b = arguments, e = b, g = b[0];
        if(!(this instanceof b.callee)) {
          return v(b)
        }
        c && (g && (g = g.preamble) && (e = g.apply(this, e) || e), (g = this.preamble) && g.apply(this, e));
        a && a.apply(this, b);
        (g = this.postscript) && g.apply(this, b)
      }
    }
    function g(a) {
      return function() {
        var c = arguments, b = 0, e, g;
        if(!(this instanceof c.callee)) {
          return v(c)
        }
        for(;e = a[b];++b) {
          if(e = (g = e._meta) ? g.ctor : e) {
            e.apply(this, c);
            break
          }
        }
        (e = this.postscript) && e.apply(this, c)
      }
    }
    function u(a, c, b) {
      return function() {
        var e, g, n = 0, f = 1;
        b && (n = c.length - 1, f = -1);
        for(;e = c[n];n += f) {
          g = e._meta, (e = (g ? g.hidden : e.prototype)[a]) && e.apply(this, arguments)
        }
      }
    }
    function n(a) {
      z.prototype = a.prototype;
      a = new z;
      z.prototype = null;
      return a
    }
    function v(a) {
      var c = a.callee, b = n(c);
      c.apply(b, a);
      return b
    }
    function x(k, d, q) {
      "string" != typeof k && (q = d, d = k, k = "");
      q = q || {};
      var v, z, A, B, F, C, H, N = 1, Z = d;
      if("[object Array]" == y.call(d)) {
        N = k;
        A = [];
        B = [{cls:0, refs:[]}];
        C = {};
        for(var V = 1, W = d.length, Q = 0, J, X, E, L;Q < W;++Q) {
          (J = d[Q]) ? "[object Function]" != y.call(J) && r("mixin #" + Q + " is not a callable constructor.", N) : r("mixin #" + Q + " is unknown. Did you use dojo.require to pull it in?", N);
          X = J._meta ? J._meta.bases : [J];
          E = 0;
          for(J = X.length - 1;0 <= J;--J) {
            L = X[J].prototype, L.hasOwnProperty("declaredClass") || (L.declaredClass = "uniqName_" + t++), L = L.declaredClass, C.hasOwnProperty(L) || (C[L] = {count:0, refs:[], cls:X[J]}, ++V), L = C[L], E && E !== L && (L.refs.push(E), ++E.count), E = L
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
        V && r("can't build consistent linearization", N);
        J = d[0];
        A[0] = J ? J._meta && J === A[A.length - J._meta.bases.length] ? J._meta.bases.length : 1 : 0;
        C = A;
        A = C[0];
        N = C.length - A;
        d = C[N]
      }else {
        C = [0], d ? "[object Function]" == y.call(d) ? (A = d._meta, C = C.concat(A ? A.bases : d)) : r("base class is not a callable constructor.", k) : null !== d && r("unknown base class. Did you use dojo.require to pull it in?", k)
      }
      if(d) {
        for(z = N - 1;;--z) {
          v = n(d);
          if(!z) {
            break
          }
          A = C[z];
          (A._meta ? h : w)(v, A.prototype);
          B = new Function;
          B.superclass = d;
          B.prototype = v;
          d = v.constructor = B
        }
      }else {
        v = {}
      }
      x.safeMixin(v, q);
      A = q.constructor;
      A !== s.constructor && (A.nom = D, v.constructor = A);
      for(z = N - 1;z;--z) {
        (A = C[z]._meta) && A.chains && (H = w(H || {}, A.chains))
      }
      v["-chains-"] && (H = w(H || {}, v["-chains-"]));
      d && (d.prototype && d.prototype["-chains-"]) && (H = w(H || {}, d.prototype["-chains-"]));
      A = !H || !H.hasOwnProperty(D);
      C[0] = B = H && "manual" === H.constructor ? g(C) : 1 == C.length ? c(q.constructor, A) : e(C, A);
      B._meta = {bases:C, hidden:q, chains:H, parents:Z, ctor:q.constructor};
      B.superclass = d && d.prototype;
      B.extend = a;
      B.createSubclass = b;
      B.prototype = v;
      v.constructor = B;
      v.getInherited = l;
      v.isInstanceOf = f;
      v.inherited = G;
      v.__inherited = p;
      k && (v.declaredClass = k, m.setObject(k, B));
      if(H) {
        for(F in H) {
          v[F] && ("string" == typeof H[F] && F != D) && (A = v[F] = u(F, C, "after" === H[F]), A.nom = F)
        }
      }
      return B
    }
    var w = m.mixin, s = Object.prototype, y = s.toString, z = new Function, t = 0, D = "constructor", G = d.config.isDebug ? k : p;
    d.safeMixin = x.safeMixin = function(a, c) {
      var b, e;
      for(b in c) {
        if(e = c[b], (e !== s[b] || !(b in s)) && b != D) {
          "[object Function]" == y.call(e) && (e.nom = b), a[b] = e
        }
      }
      if(q("bug-for-in-skips-shadowed")) {
        for(var g = m._extraNames, n = g.length;n;) {
          if(b = g[--n], e = c[b], (e !== s[b] || !(b in s)) && b != D) {
            "[object Function]" == y.call(e) && (e.nom = b), a[b] = e
          }
        }
      }
      return a
    };
    return d.declare = x
  })
}, "dojo/_base/fx":function() {
  define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function(d, q, m, r, p, l, k, f, h) {
    var a = m.mixin, b = {}, e = b._Line = function(a, c) {
      this.start = a;
      this.end = c
    };
    e.prototype.getValue = function(a) {
      return(this.end - this.start) * a + this.start
    };
    var c = b.Animation = function(c) {
      a(this, c);
      m.isArray(this.curve) && (this.curve = new e(this.curve[0], this.curve[1]))
    };
    c.prototype = new r;
    m.extend(c, {duration:350, repeat:0, rate:20, _percent:0, _startRepeatCount:0, _getStep:function() {
      var a = this._percent, c = this.easing;
      return c ? c(a) : a
    }, _fire:function(a, c) {
      var b = c || [];
      if(this[a]) {
        if(q.debugAtAllCosts) {
          this[a].apply(this, b)
        }else {
          try {
            this[a].apply(this, b)
          }catch(e) {
            console.error("exception in animation handler for:", a), console.error(e)
          }
        }
      }
      return this
    }, play:function(a, c) {
      this._delayTimer && this._clearTimer();
      if(c) {
        this._stopTimer(), this._active = this._paused = !1, this._percent = 0
      }else {
        if(this._active && !this._paused) {
          return this
        }
      }
      this._fire("beforeBegin", [this.node]);
      var b = a || this.delay, e = m.hitch(this, "_play", c);
      if(0 < b) {
        return this._delayTimer = setTimeout(e, b), this
      }
      e();
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
    }, gotoPercent:function(a, c) {
      this._stopTimer();
      this._active = this._paused = !0;
      this._percent = a;
      c && this.play();
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
    var g = 0, u = null, n = {run:function() {
    }};
    m.extend(c, {_startTimer:function() {
      this._timer || (this._timer = l.after(n, "run", m.hitch(this, "_cycle"), !0), g++);
      u || (u = setInterval(m.hitch(n, "run"), this.rate))
    }, _stopTimer:function() {
      this._timer && (this._timer.remove(), this._timer = null, g--);
      0 >= g && (clearInterval(u), u = null, g = 0)
    }});
    var v = k("ie") ? function(a) {
      var c = a.style;
      !c.width.length && "auto" == h.get(a, "width") && (c.width = "auto")
    } : function() {
    };
    b._fade = function(c) {
      c.node = f.byId(c.node);
      var e = a({properties:{}}, c);
      c = e.properties.opacity = {};
      c.start = !("start" in e) ? function() {
        return+h.get(e.node, "opacity") || 0
      } : e.start;
      c.end = e.end;
      c = b.animateProperty(e);
      l.after(c, "beforeBegin", m.partial(v, e.node), !0);
      return c
    };
    b.fadeIn = function(c) {
      return b._fade(a({end:1}, c))
    };
    b.fadeOut = function(c) {
      return b._fade(a({end:0}, c))
    };
    b._defaultEasing = function(a) {
      return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2
    };
    var x = function(a) {
      this._properties = a;
      for(var c in a) {
        var b = a[c];
        b.start instanceof p && (b.tempColor = new p)
      }
    };
    x.prototype.getValue = function(a) {
      var c = {}, b;
      for(b in this._properties) {
        var e = this._properties[b], g = e.start;
        g instanceof p ? c[b] = p.blendColors(g, e.end, a, e.tempColor).toCss() : m.isArray(g) || (c[b] = (e.end - g) * a + g + ("opacity" != b ? e.units || "px" : 0))
      }
      return c
    };
    b.animateProperty = function(b) {
      var e = b.node = f.byId(b.node);
      b.easing || (b.easing = d._defaultEasing);
      b = new c(b);
      l.after(b, "beforeBegin", m.hitch(b, function() {
        var c = {}, b;
        for(b in this.properties) {
          if("width" == b || "height" == b) {
            this.node.display = "block"
          }
          var g = this.properties[b];
          m.isFunction(g) && (g = g(e));
          g = c[b] = a({}, m.isObject(g) ? g : {end:g});
          m.isFunction(g.start) && (g.start = g.start(e));
          m.isFunction(g.end) && (g.end = g.end(e));
          var n = 0 <= b.toLowerCase().indexOf("color"), f = function(a, c) {
            var b = {height:a.offsetHeight, width:a.offsetWidth}[c];
            if(void 0 !== b) {
              return b
            }
            b = h.get(a, c);
            return"opacity" == c ? +b : n ? b : parseFloat(b)
          };
          "end" in g ? "start" in g || (g.start = f(e, b)) : g.end = f(e, b);
          n ? (g.start = new p(g.start), g.end = new p(g.end)) : g.start = "opacity" == b ? +g.start : parseFloat(g.start)
        }
        this.curve = new x(c)
      }), !0);
      l.after(b, "onAnimate", m.hitch(h, "set", b.node), !0);
      return b
    };
    b.anim = function(a, e, g, n, f, h) {
      return b.animateProperty({node:a, duration:g || c.prototype.duration, properties:e, easing:n, onEnd:f}).play(h || 0)
    };
    a(d, b);
    d._Animation = c;
    return b
  })
}, "dojo/Evented":function() {
  define(["./aspect", "./on"], function(d, q) {
    function m() {
    }
    var r = d.after;
    m.prototype = {on:function(d, l) {
      return q.parse(this, d, l, function(k, f) {
        return r(k, "on" + f, l, !0)
      })
    }, emit:function(d, l) {
      var k = [this];
      k.push.apply(k, arguments);
      return q.emit.apply(q, k)
    }};
    return m
  })
}, "dojo/aspect":function() {
  define([], function() {
    function d(k, f, h, a) {
      var b = k[f], e = "around" == f, c;
      if(e) {
        var g = h(function() {
          return b.advice(this, arguments)
        });
        c = {remove:function() {
          g && (g = k = h = null)
        }, advice:function(a, c) {
          return g ? g.apply(a, c) : b.advice(a, c)
        }}
      }else {
        c = {remove:function() {
          if(c.advice) {
            var a = c.previous, b = c.next;
            !b && !a ? delete k[f] : (a ? a.next = b : k[f] = b, b && (b.previous = a));
            k = h = c.advice = null
          }
        }, id:k.nextId++, advice:h, receiveArguments:a}
      }
      if(b && !e) {
        if("after" == f) {
          for(;b.next && (b = b.next);) {
          }
          b.next = c;
          c.previous = b
        }else {
          "before" == f && (k[f] = c, c.next = b, b.previous = c)
        }
      }else {
        k[f] = c
      }
      return c
    }
    function q(k) {
      return function(f, h, a, b) {
        var e = f[h], c;
        if(!e || e.target != f) {
          f[h] = c = function() {
            for(var a = c.nextId, b = arguments, e = c.before;e;) {
              e.advice && (b = e.advice.apply(this, b) || b), e = e.next
            }
            if(c.around) {
              var f = c.around.advice(this, b)
            }
            for(e = c.after;e && e.id < a;) {
              if(e.advice) {
                if(e.receiveArguments) {
                  var h = e.advice.apply(this, b), f = h === m ? f : h
                }else {
                  f = e.advice.call(this, f, b)
                }
              }
              e = e.next
            }
            return f
          }, e && (c.around = {advice:function(a, c) {
            return e.apply(a, c)
          }}), c.target = f, c.nextId = c.nextId || 0
        }
        f = d(c || e, k, a, b);
        a = null;
        return f
      }
    }
    var m, r = q("after"), p = q("before"), l = q("around");
    return{before:p, around:l, after:r}
  })
}, "dojo/_base/Color":function() {
  define(["./kernel", "./lang", "./array", "./config"], function(d, q, m, r) {
    var p = d.Color = function(d) {
      d && this.setColor(d)
    };
    p.named = {black:[0, 0, 0], silver:[192, 192, 192], gray:[128, 128, 128], white:[255, 255, 255], maroon:[128, 0, 0], red:[255, 0, 0], purple:[128, 0, 128], fuchsia:[255, 0, 255], green:[0, 128, 0], lime:[0, 255, 0], olive:[128, 128, 0], yellow:[255, 255, 0], navy:[0, 0, 128], blue:[0, 0, 255], teal:[0, 128, 128], aqua:[0, 255, 255], transparent:r.transparentColor || [0, 0, 0, 0]};
    q.extend(p, {r:255, g:255, b:255, a:1, _set:function(d, k, f, h) {
      this.r = d;
      this.g = k;
      this.b = f;
      this.a = h
    }, setColor:function(d) {
      q.isString(d) ? p.fromString(d, this) : q.isArray(d) ? p.fromArray(d, this) : (this._set(d.r, d.g, d.b, d.a), d instanceof p || this.sanitize());
      return this
    }, sanitize:function() {
      return this
    }, toRgb:function() {
      return[this.r, this.g, this.b]
    }, toRgba:function() {
      return[this.r, this.g, this.b, this.a]
    }, toHex:function() {
      return"#" + m.map(["r", "g", "b"], function(d) {
        d = this[d].toString(16);
        return 2 > d.length ? "0" + d : d
      }, this).join("")
    }, toCss:function(d) {
      var k = this.r + ", " + this.g + ", " + this.b;
      return(d ? "rgba(" + k + ", " + this.a : "rgb(" + k) + ")"
    }, toString:function() {
      return this.toCss(!0)
    }});
    p.blendColors = d.blendColors = function(d, k, f, h) {
      h = h || new p;
      h.r = Math.round(d.r + (k.r - d.r) * f);
      h.g = Math.round(d.g + (k.g - d.g) * f);
      h.b = Math.round(d.b + (k.b - d.b) * f);
      h.a = d.a + (k.a - d.a) * f;
      return h.sanitize()
    };
    p.fromRgb = d.colorFromRgb = function(d, k) {
      var f = d.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
      return f && p.fromArray(f[1].split(/\s*,\s*/), k)
    };
    p.fromHex = d.colorFromHex = function(d, k) {
      var f = k || new p, h = 4 == d.length ? 4 : 8, a = (1 << h) - 1;
      d = Number("0x" + d.substr(1));
      if(isNaN(d)) {
        return null
      }
      m.forEach(["b", "g", "r"], function(b) {
        var e = d & a;
        d >>= h;
        f[b] = 4 == h ? 17 * e : e
      });
      f.a = 1;
      return f
    };
    p.fromArray = d.colorFromArray = function(d, k) {
      var f = k || new p;
      f._set(Number(d[0]), Number(d[1]), Number(d[2]), Number(d[3]));
      isNaN(f.a) && (f.a = 1);
      return f.sanitize()
    };
    p.fromString = d.colorFromString = function(d, k) {
      var f = p.named[d];
      return f && p.fromArray(f, k) || p.fromRgb(d, k) || p.fromHex(d, k)
    };
    return p
  })
}, "dojo/dom-style":function() {
  define(["./sniff", "./dom"], function(d, q) {
    function m(c, e, f) {
      e = e.toLowerCase();
      if("auto" == f) {
        if("height" == e) {
          return c.offsetHeight
        }
        if("width" == e) {
          return c.offsetWidth
        }
      }
      if("fontweight" == e) {
        switch(f) {
          case 700:
            return"bold";
          default:
            return"normal"
        }
      }
      e in a || (a[e] = b.test(e));
      return a[e] ? l(c, f) : f
    }
    var r, p = {};
    r = d("webkit") ? function(a) {
      var b;
      if(1 == a.nodeType) {
        var e = a.ownerDocument.defaultView;
        b = e.getComputedStyle(a, null);
        !b && a.style && (a.style.display = "", b = e.getComputedStyle(a, null))
      }
      return b || {}
    } : d("ie") && (9 > d("ie") || d("quirks")) ? function(a) {
      return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
    } : function(a) {
      return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
    };
    p.getComputedStyle = r;
    var l;
    l = d("ie") ? function(a, b) {
      if(!b) {
        return 0
      }
      if("medium" == b) {
        return 4
      }
      if(b.slice && "px" == b.slice(-2)) {
        return parseFloat(b)
      }
      var e = a.style, f = a.runtimeStyle, d = e.left, h = f.left;
      f.left = a.currentStyle.left;
      try {
        e.left = b, b = e.pixelLeft
      }catch(k) {
        b = 0
      }
      e.left = d;
      f.left = h;
      return b
    } : function(a, b) {
      return parseFloat(b) || 0
    };
    p.toPixelValue = l;
    var k = function(a, b) {
      try {
        return a.filters.item("DXImageTransform.Microsoft.Alpha")
      }catch(e) {
        return b ? {} : null
      }
    }, f = 9 > d("ie") || 10 > d("ie") && d("quirks") ? function(a) {
      try {
        return k(a).Opacity / 100
      }catch(b) {
        return 1
      }
    } : function(a) {
      return r(a).opacity
    }, h = 9 > d("ie") || 10 > d("ie") && d("quirks") ? function(a, b) {
      "" === b && (b = 1);
      var e = 100 * b;
      1 === b ? (a.style.zoom = "", k(a) && (a.style.filter = a.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (a.style.zoom = 1, k(a) ? k(a, 1).Opacity = e : a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + e + ")", k(a, 1).Enabled = !0);
      if("tr" == a.tagName.toLowerCase()) {
        for(e = a.firstChild;e;e = e.nextSibling) {
          "td" == e.tagName.toLowerCase() && h(e, b)
        }
      }
      return b
    } : function(a, b) {
      return a.style.opacity = b
    }, a = {left:!0, top:!0}, b = /margin|padding|width|height|max|min|offset/, e = {cssFloat:1, styleFloat:1, "float":1};
    p.get = function(a, b) {
      var d = q.byId(a), h = arguments.length;
      if(2 == h && "opacity" == b) {
        return f(d)
      }
      b = e[b] ? "cssFloat" in d.style ? "cssFloat" : "styleFloat" : b;
      var k = p.getComputedStyle(d);
      return 1 == h ? k : m(d, b, k[b] || d.style[b])
    };
    p.set = function(a, b, f) {
      var d = q.byId(a), k = arguments.length, m = "opacity" == b;
      b = e[b] ? "cssFloat" in d.style ? "cssFloat" : "styleFloat" : b;
      if(3 == k) {
        return m ? h(d, f) : d.style[b] = f
      }
      for(var l in b) {
        p.set(a, l, b[l])
      }
      return p.getComputedStyle(d)
    };
    return p
  })
}, "dojo/dom-class":function() {
  define(["./_base/lang", "./_base/array", "./dom"], function(d, q, m) {
    function r(f) {
      if("string" == typeof f || f instanceof String) {
        if(f && !l.test(f)) {
          return k[0] = f, k
        }
        f = f.split(l);
        f.length && !f[0] && f.shift();
        f.length && !f[f.length - 1] && f.pop();
        return f
      }
      return!f ? [] : q.filter(f, function(a) {
        return a
      })
    }
    var p, l = /\s+/, k = [""], f = {};
    return p = {contains:function(f, a) {
      return 0 <= (" " + m.byId(f).className + " ").indexOf(" " + a + " ")
    }, add:function(f, a) {
      f = m.byId(f);
      a = r(a);
      var b = f.className, e, b = b ? " " + b + " " : " ";
      e = b.length;
      for(var c = 0, g = a.length, d;c < g;++c) {
        (d = a[c]) && 0 > b.indexOf(" " + d + " ") && (b += d + " ")
      }
      e < b.length && (f.className = b.substr(1, b.length - 2))
    }, remove:function(f, a) {
      f = m.byId(f);
      var b;
      if(void 0 !== a) {
        a = r(a);
        b = " " + f.className + " ";
        for(var e = 0, c = a.length;e < c;++e) {
          b = b.replace(" " + a[e] + " ", " ")
        }
        b = d.trim(b)
      }else {
        b = ""
      }
      f.className != b && (f.className = b)
    }, replace:function(d, a, b) {
      d = m.byId(d);
      f.className = d.className;
      p.remove(f, b);
      p.add(f, a);
      d.className !== f.className && (d.className = f.className)
    }, toggle:function(f, a, b) {
      f = m.byId(f);
      if(void 0 === b) {
        a = r(a);
        for(var e = 0, c = a.length, g;e < c;++e) {
          g = a[e], p[p.contains(f, g) ? "remove" : "add"](f, g)
        }
      }else {
        p[b ? "add" : "remove"](f, a)
      }
      return b
    }}
  })
}, "dojo/dom-geometry":function() {
  define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(d, q, m, r) {
    function p(a, b, e, c, g, f) {
      f = f || "px";
      a = a.style;
      isNaN(b) || (a.left = b + f);
      isNaN(e) || (a.top = e + f);
      0 <= c && (a.width = c + f);
      0 <= g && (a.height = g + f)
    }
    function l(a) {
      return"button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
    }
    function k(a) {
      return"border-box" == f.boxModel || "table" == a.tagName.toLowerCase() || l(a)
    }
    var f = {boxModel:"content-box"};
    d("ie") && (f.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box");
    f.getPadExtents = function(a, b) {
      a = m.byId(a);
      var e = b || r.getComputedStyle(a), c = r.toPixelValue, g = c(a, e.paddingLeft), f = c(a, e.paddingTop), d = c(a, e.paddingRight), e = c(a, e.paddingBottom);
      return{l:g, t:f, r:d, b:e, w:g + d, h:f + e}
    };
    f.getBorderExtents = function(a, b) {
      a = m.byId(a);
      var e = r.toPixelValue, c = b || r.getComputedStyle(a), g = "none" != c.borderLeftStyle ? e(a, c.borderLeftWidth) : 0, f = "none" != c.borderTopStyle ? e(a, c.borderTopWidth) : 0, d = "none" != c.borderRightStyle ? e(a, c.borderRightWidth) : 0, e = "none" != c.borderBottomStyle ? e(a, c.borderBottomWidth) : 0;
      return{l:g, t:f, r:d, b:e, w:g + d, h:f + e}
    };
    f.getPadBorderExtents = function(a, b) {
      a = m.byId(a);
      var e = b || r.getComputedStyle(a), c = f.getPadExtents(a, e), e = f.getBorderExtents(a, e);
      return{l:c.l + e.l, t:c.t + e.t, r:c.r + e.r, b:c.b + e.b, w:c.w + e.w, h:c.h + e.h}
    };
    f.getMarginExtents = function(a, b) {
      a = m.byId(a);
      var e = b || r.getComputedStyle(a), c = r.toPixelValue, g = c(a, e.marginLeft), f = c(a, e.marginTop), d = c(a, e.marginRight), e = c(a, e.marginBottom);
      return{l:g, t:f, r:d, b:e, w:g + d, h:f + e}
    };
    f.getMarginBox = function(a, b) {
      a = m.byId(a);
      var e = b || r.getComputedStyle(a), c = f.getMarginExtents(a, e), g = a.offsetLeft - c.l, k = a.offsetTop - c.t, n = a.parentNode, h = r.toPixelValue;
      if(d("mozilla")) {
        var l = parseFloat(e.left), e = parseFloat(e.top);
        !isNaN(l) && !isNaN(e) ? (g = l, k = e) : n && n.style && (n = r.getComputedStyle(n), "visible" != n.overflow && (g += "none" != n.borderLeftStyle ? h(a, n.borderLeftWidth) : 0, k += "none" != n.borderTopStyle ? h(a, n.borderTopWidth) : 0))
      }else {
        if((d("opera") || 8 == d("ie") && !d("quirks")) && n) {
          n = r.getComputedStyle(n), g -= "none" != n.borderLeftStyle ? h(a, n.borderLeftWidth) : 0, k -= "none" != n.borderTopStyle ? h(a, n.borderTopWidth) : 0
        }
      }
      return{l:g, t:k, w:a.offsetWidth + c.w, h:a.offsetHeight + c.h}
    };
    f.getContentBox = function(a, b) {
      a = m.byId(a);
      var e = b || r.getComputedStyle(a), c = a.clientWidth, g = f.getPadExtents(a, e), k = f.getBorderExtents(a, e);
      c ? (e = a.clientHeight, k.w = k.h = 0) : (c = a.offsetWidth, e = a.offsetHeight);
      d("opera") && (g.l += k.l, g.t += k.t);
      return{l:g.l, t:g.t, w:c - g.w - k.w, h:e - g.h - k.h}
    };
    f.setContentSize = function(a, b, e) {
      a = m.byId(a);
      var c = b.w;
      b = b.h;
      k(a) && (e = f.getPadBorderExtents(a, e), 0 <= c && (c += e.w), 0 <= b && (b += e.h));
      p(a, NaN, NaN, c, b)
    };
    var h = {l:0, t:0, w:0, h:0};
    f.setMarginBox = function(a, b, e) {
      a = m.byId(a);
      var c = e || r.getComputedStyle(a);
      e = b.w;
      var g = b.h, q = k(a) ? h : f.getPadBorderExtents(a, c), c = f.getMarginExtents(a, c);
      if(d("webkit") && l(a)) {
        var n = a.style;
        0 <= e && !n.width && (n.width = "4px");
        0 <= g && !n.height && (n.height = "4px")
      }
      0 <= e && (e = Math.max(e - q.w - c.w, 0));
      0 <= g && (g = Math.max(g - q.h - c.h, 0));
      p(a, b.l, b.t, e, g)
    };
    f.isBodyLtr = function(a) {
      a = a || q.doc;
      return"ltr" == (q.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
    };
    f.docScroll = function(a) {
      a = a || q.doc;
      var b = q.doc.parentWindow || q.doc.defaultView;
      return"pageXOffset" in b ? {x:b.pageXOffset, y:b.pageYOffset} : (b = d("quirks") ? q.body(a) : a.documentElement) && {x:f.fixIeBiDiScrollLeft(b.scrollLeft || 0, a), y:b.scrollTop || 0}
    };
    f.getIeDocumentElementOffset = function(a) {
      a = a || q.doc;
      a = a.documentElement;
      if(8 > d("ie")) {
        var b = a.getBoundingClientRect(), e = b.left, b = b.top;
        7 > d("ie") && (e += a.clientLeft, b += a.clientTop);
        return{x:0 > e ? 0 : e, y:0 > b ? 0 : b}
      }
      return{x:0, y:0}
    };
    f.fixIeBiDiScrollLeft = function(a, b) {
      b = b || q.doc;
      var e = d("ie");
      if(e && !f.isBodyLtr(b)) {
        var c = d("quirks"), g = c ? q.body(b) : b.documentElement, k = q.global;
        6 == e && (!c && k.frameElement && g.scrollHeight > g.clientHeight) && (a += g.clientLeft);
        return 8 > e || c ? a + g.clientWidth - g.scrollWidth : -a
      }
      return a
    };
    f.position = function(a, b) {
      a = m.byId(a);
      var e = q.body(a.ownerDocument), c = a.getBoundingClientRect(), c = {x:c.left, y:c.top, w:c.right - c.left, h:c.bottom - c.top};
      if(9 > d("ie")) {
        var g = f.getIeDocumentElementOffset(a.ownerDocument);
        c.x -= g.x + (d("quirks") ? e.clientLeft + e.offsetLeft : 0);
        c.y -= g.y + (d("quirks") ? e.clientTop + e.offsetTop : 0)
      }
      b && (e = f.docScroll(a.ownerDocument), c.x += e.x, c.y += e.y);
      return c
    };
    f.getMarginSize = function(a, b) {
      a = m.byId(a);
      var e = f.getMarginExtents(a, b || r.getComputedStyle(a)), c = a.getBoundingClientRect();
      return{w:c.right - c.left + e.w, h:c.bottom - c.top + e.h}
    };
    f.normalizeEvent = function(a) {
      "layerX" in a || (a.layerX = a.offsetX, a.layerY = a.offsetY);
      if(!d("dom-addeventlistener")) {
        var b = a.target, b = b && b.ownerDocument || document, e = d("quirks") ? b.body : b.documentElement, c = f.getIeDocumentElementOffset(b);
        a.pageX = a.clientX + f.fixIeBiDiScrollLeft(e.scrollLeft || 0, b) - c.x;
        a.pageY = a.clientY + (e.scrollTop || 0) - c.y
      }
    };
    return f
  })
}, "dojo/mouse":function() {
  define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(d, q, m, r, p) {
    function l(d, f) {
      var h = function(a, b) {
        return q(a, d, function(e) {
          if(f) {
            return f(e, b)
          }
          if(!r.isDescendant(e.relatedTarget, a)) {
            return b.call(this, e)
          }
        })
      };
      h.bubble = function(a) {
        return l(d, function(b, e) {
          var c = a(b.target), g = b.relatedTarget;
          if(c && c != (g && 1 == g.nodeType && a(g))) {
            return e.call(c, b)
          }
        })
      };
      return h
    }
    m.add("dom-quirks", p.doc && "BackCompat" == p.doc.compatMode);
    m.add("events-mouseenter", p.doc && "onmouseenter" in p.doc.createElement("div"));
    m.add("events-mousewheel", p.doc && "onmousewheel" in p.doc);
    p = m("dom-quirks") && m("ie") || !m("dom-addeventlistener") ? {LEFT:1, MIDDLE:4, RIGHT:2, isButton:function(d, f) {
      return d.button & f
    }, isLeft:function(d) {
      return d.button & 1
    }, isMiddle:function(d) {
      return d.button & 4
    }, isRight:function(d) {
      return d.button & 2
    }} : {LEFT:0, MIDDLE:1, RIGHT:2, isButton:function(d, f) {
      return d.button == f
    }, isLeft:function(d) {
      return 0 == d.button
    }, isMiddle:function(d) {
      return 1 == d.button
    }, isRight:function(d) {
      return 2 == d.button
    }};
    d.mouseButtons = p;
    d = m("events-mousewheel") ? "mousewheel" : function(d, f) {
      return q(d, "DOMMouseScroll", function(d) {
        d.wheelDelta = -d.detail;
        f.call(this, d)
      })
    };
    return{_eventHandler:l, enter:l("mouseover"), leave:l("mouseout"), wheel:d, isLeft:p.isLeft, isMiddle:p.isMiddle, isRight:p.isRight}
  })
}, "dijit/_base/manager":function() {
  define(["dojo/_base/array", "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function(d, q, m, r, p) {
    var l = {};
    d.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "), function(d) {
      l[d] = r[d]
    });
    m.mixin(l, {defaultDuration:q.defaultDuration || 200});
    m.mixin(p, l);
    return p
  })
}, "dijit/registry":function() {
  define(["dojo/_base/array", "dojo/_base/window", "./main"], function(d, q, m) {
    var r = {}, p = {}, l = {length:0, add:function(d) {
      if(p[d.id]) {
        throw Error("Tried to register widget with id\x3d\x3d" + d.id + " but that id is already registered");
      }
      p[d.id] = d;
      this.length++
    }, remove:function(d) {
      p[d] && (delete p[d], this.length--)
    }, byId:function(d) {
      return"string" == typeof d ? p[d] : d
    }, byNode:function(d) {
      return p[d.getAttribute("widgetId")]
    }, toArray:function() {
      var d = [], f;
      for(f in p) {
        d.push(p[f])
      }
      return d
    }, getUniqueId:function(d) {
      var f;
      do {
        f = d + "_" + (d in r ? ++r[d] : r[d] = 0)
      }while(p[f]);
      return"dijit" == m._scopeName ? f : m._scopeName + "_" + f
    }, findWidgets:function(d, f) {
      function h(b) {
        for(b = b.firstChild;b;b = b.nextSibling) {
          if(1 == b.nodeType) {
            var e = b.getAttribute("widgetId");
            e ? (e = p[e]) && a.push(e) : b !== f && h(b)
          }
        }
      }
      var a = [];
      h(d);
      return a
    }, _destroyAll:function() {
      m._curFocus = null;
      m._prevFocus = null;
      m._activeStack = [];
      d.forEach(l.findWidgets(q.body()), function(d) {
        d._destroyed || (d.destroyRecursive ? d.destroyRecursive() : d.destroy && d.destroy())
      })
    }, getEnclosingWidget:function(d) {
      for(;d;) {
        var f = 1 == d.nodeType && d.getAttribute("widgetId");
        if(f) {
          return p[f]
        }
        d = d.parentNode
      }
      return null
    }, _hash:p};
    return m.registry = l
  })
}, "dijit/main":function() {
  define(["dojo/_base/kernel"], function(d) {
    return d.dijit
  })
}, "dijit/place":function() {
  define("dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/_base/kernel dojo/_base/window ./Viewport ./main".split(" "), function(d, q, m, r, p, l, k) {
    function f(a, b, e, c) {
      var g = l.getEffectiveBox(a.ownerDocument);
      (!a.parentNode || "body" != String(a.parentNode.tagName).toLowerCase()) && p.body(a.ownerDocument).appendChild(a);
      var f = null;
      d.some(b, function(b) {
        var d = b.corner, n = b.pos, h = 0, k = {w:{L:g.l + g.w - n.x, R:n.x - g.l, M:g.w}[d.charAt(1)], h:{T:g.t + g.h - n.y, B:n.y - g.t, M:g.h}[d.charAt(0)]}, l = a.style;
        l.left = l.right = "auto";
        e && (h = e(a, b.aroundCorner, d, k, c), h = "undefined" == typeof h ? 0 : h);
        var m = a.style, p = m.display, r = m.visibility;
        "none" == m.display && (m.visibility = "hidden", m.display = "");
        l = q.position(a);
        m.display = p;
        m.visibility = r;
        p = {L:n.x, R:n.x - l.w, M:Math.max(g.l, Math.min(g.l + g.w, n.x + (l.w >> 1)) - l.w)}[d.charAt(1)];
        r = {T:n.y, B:n.y - l.h, M:Math.max(g.t, Math.min(g.t + g.h, n.y + (l.h >> 1)) - l.h)}[d.charAt(0)];
        n = Math.max(g.l, p);
        m = Math.max(g.t, r);
        p = Math.min(g.l + g.w, p + l.w);
        r = Math.min(g.t + g.h, r + l.h);
        p -= n;
        r -= m;
        h += l.w - p + (l.h - r);
        if(null == f || h < f.overflow) {
          f = {corner:d, aroundCorner:b.aroundCorner, x:n, y:m, w:p, h:r, overflow:h, spaceAvailable:k}
        }
        return!h
      });
      f.overflow && e && e(a, f.aroundCorner, f.corner, f.spaceAvailable, c);
      b = f.y;
      var n = f.x, h = p.body(a.ownerDocument);
      /relative|absolute/.test(m.get(h, "position")) && (b -= m.get(h, "marginTop"), n -= m.get(h, "marginLeft"));
      h = a.style;
      h.top = b + "px";
      h.left = n + "px";
      h.right = "auto";
      return f
    }
    var h = {TL:"BR", TR:"BL", BL:"TR", BR:"TL"};
    return k.place = {at:function(a, b, e, c, g) {
      e = d.map(e, function(a) {
        var e = {corner:a, aroundCorner:h[a], pos:{x:b.x, y:b.y}};
        c && (e.pos.x += "L" == a.charAt(1) ? c.x : -c.x, e.pos.y += "T" == a.charAt(0) ? c.y : -c.y);
        return e
      });
      return f(a, e, g)
    }, around:function(a, b, e, c, g) {
      function h(a, c) {
        I.push({aroundCorner:a, corner:c, pos:{x:{L:z, R:z + D, M:z + (D >> 1)}[a.charAt(1)], y:{T:t, B:t + G, M:t + (G >> 1)}[a.charAt(0)]}})
      }
      var n;
      if("string" == typeof b || "offsetWidth" in b || "ownerSVGElement" in b) {
        if(n = q.position(b, !0), /^(above|below)/.test(e[0])) {
          var k = q.getBorderExtents(b), l = b.firstChild ? q.getBorderExtents(b.firstChild) : {t:0, l:0, b:0, r:0}, p = q.getBorderExtents(a), s = a.firstChild ? q.getBorderExtents(a.firstChild) : {t:0, l:0, b:0, r:0};
          n.y += Math.min(k.t + l.t, p.t + s.t);
          n.h -= Math.min(k.t + l.t, p.t + s.t) + Math.min(k.b + l.b, p.b + s.b)
        }
      }else {
        n = b
      }
      if(b.parentNode) {
        k = "absolute" == m.getComputedStyle(b).position;
        for(b = b.parentNode;b && 1 == b.nodeType && "BODY" != b.nodeName;) {
          l = q.position(b, !0);
          p = m.getComputedStyle(b);
          /relative|absolute/.test(p.position) && (k = !1);
          if(!k && /hidden|auto|scroll/.test(p.overflow)) {
            var s = Math.min(n.y + n.h, l.y + l.h), y = Math.min(n.x + n.w, l.x + l.w);
            n.x = Math.max(n.x, l.x);
            n.y = Math.max(n.y, l.y);
            n.h = s - n.y;
            n.w = y - n.x
          }
          "absolute" == p.position && (k = !0);
          b = b.parentNode
        }
      }
      var z = n.x, t = n.y, D = "w" in n ? n.w : n.w = n.width, G = "h" in n ? n.h : (r.deprecated("place.around: dijit/place.__Rectangle: { x:" + z + ", y:" + t + ", height:" + n.height + ", width:" + D + " } has been deprecated.  Please use { x:" + z + ", y:" + t + ", h:" + n.height + ", w:" + D + " }", "", "2.0"), n.h = n.height), I = [];
      d.forEach(e, function(a) {
        var b = c;
        switch(a) {
          case "above-centered":
            h("TM", "BM");
            break;
          case "below-centered":
            h("BM", "TM");
            break;
          case "after-centered":
            b = !b;
          case "before-centered":
            h(b ? "ML" : "MR", b ? "MR" : "ML");
            break;
          case "after":
            b = !b;
          case "before":
            h(b ? "TL" : "TR", b ? "TR" : "TL");
            h(b ? "BL" : "BR", b ? "BR" : "BL");
            break;
          case "below-alt":
            b = !b;
          case "below":
            h(b ? "BL" : "BR", b ? "TL" : "TR");
            h(b ? "BR" : "BL", b ? "TR" : "TL");
            break;
          case "above-alt":
            b = !b;
          case "above":
            h(b ? "TL" : "TR", b ? "BL" : "BR");
            h(b ? "TR" : "TL", b ? "BR" : "BL");
            break;
          default:
            h(a.aroundCorner, a.corner)
        }
      });
      a = f(a, I, g, {w:D, h:G});
      a.aroundNodePos = n;
      return a
    }}
  })
}, "dijit/Viewport":function() {
  define(["dojo/Evented", "dojo/on", "dojo/domReady", "dojo/sniff", "dojo/window"], function(d, q, m, r, p) {
    var l = new d, k;
    m(function() {
      var d = p.getBox();
      l._rlh = q(window, "resize", function() {
        var a = p.getBox();
        d.h == a.h && d.w == a.w || (d = a, l.emit("resize"))
      });
      if(8 == r("ie")) {
        var h = screen.deviceXDPI;
        setInterval(function() {
          screen.deviceXDPI != h && (h = screen.deviceXDPI, l.emit("resize"))
        }, 500)
      }
      r("ios") && (q(document, "focusin", function(a) {
        k = a.target
      }), q(document, "focusout", function(a) {
        k = null
      }))
    });
    l.getEffectiveBox = function(d) {
      d = p.getBox(d);
      var h = k && k.tagName && k.tagName.toLowerCase();
      if(r("ios") && k && !k.readOnly && ("textarea" == h || "input" == h && /^(color|email|number|password|search|tel|text|url)$/.test(k.type))) {
        d.h *= 0 == orientation || 180 == orientation ? 0.66 : 0.4, h = k.getBoundingClientRect(), d.h = Math.max(d.h, h.top + h.height)
      }
      return d
    };
    return l
  })
}, "dojo/window":function() {
  define("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(d, q, m, r, p, l, k) {
    q.add("rtl-adjust-position-for-verticalScrollBar", function(d, a) {
      var b = m.body(a), e = k.create("div", {style:{overflow:"scroll", overflowX:"visible", direction:"rtl", visibility:"hidden", position:"absolute", left:"0", top:"0", width:"64px", height:"64px"}}, b, "last"), c = k.create("div", {style:{overflow:"hidden", direction:"ltr"}}, e, "last"), g = 0 != p.position(c).x;
      e.removeChild(c);
      b.removeChild(e);
      return g
    });
    q.add("position-fixed-support", function(d, a) {
      var b = m.body(a), e = k.create("span", {style:{visibility:"hidden", position:"fixed", left:"1px", top:"1px"}}, b, "last"), c = k.create("span", {style:{position:"fixed", left:"0", top:"0"}}, e, "last"), g = p.position(c).x != p.position(e).x;
      e.removeChild(c);
      b.removeChild(e);
      return g
    });
    var f = {getBox:function(d) {
      d = d || m.doc;
      var a = "BackCompat" == d.compatMode ? m.body(d) : d.documentElement, b = p.docScroll(d);
      if(q("touch")) {
        var e = f.get(d);
        d = e.innerWidth || a.clientWidth;
        a = e.innerHeight || a.clientHeight
      }else {
        d = a.clientWidth, a = a.clientHeight
      }
      return{l:b.x, t:b.y, w:d, h:a}
    }, get:function(d) {
      if(q("ie") && f !== document.parentWindow) {
        d.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
        var a = d._parentWindow;
        d._parentWindow = null;
        return a
      }
      return d.parentWindow || d.defaultView
    }, scrollIntoView:function(d, a) {
      try {
        d = r.byId(d);
        var b = d.ownerDocument || m.doc, e = m.body(b), c = b.documentElement || e.parentNode, g = q("ie") || q("trident"), f = q("webkit");
        if(!(d == e || d == c)) {
          if(!q("mozilla") && (!g && !f && !q("opera") && !q("trident") && !q("edge")) && "scrollIntoView" in d) {
            d.scrollIntoView(!1)
          }else {
            var n = "BackCompat" == b.compatMode, k = Math.min(e.clientWidth || c.clientWidth, c.clientWidth || e.clientWidth), x = Math.min(e.clientHeight || c.clientHeight, c.clientHeight || e.clientHeight), b = f || n ? e : c, w = a || p.position(d), s = d.parentNode, f = function(a) {
              return 6 >= g || 7 == g && n ? !1 : q("position-fixed-support") && "fixed" == l.get(a, "position").toLowerCase()
            }, y = this, z = function(a, c, b) {
              "BODY" == a.tagName || "HTML" == a.tagName ? y.get(a.ownerDocument).scrollBy(c, b) : (c && (a.scrollLeft += c), b && (a.scrollTop += b))
            };
            if(!f(d)) {
              for(;s;) {
                s == e && (s = b);
                var t = p.position(s), D = f(s), G = "rtl" == l.getComputedStyle(s).direction.toLowerCase();
                if(s == b) {
                  t.w = k;
                  t.h = x;
                  if(b == c && (g || q("trident")) && G) {
                    t.x += b.offsetWidth - t.w
                  }
                  t.x = 0;
                  t.y = 0
                }else {
                  var I = p.getPadBorderExtents(s);
                  t.w -= I.w;
                  t.h -= I.h;
                  t.x += I.l;
                  t.y += I.t;
                  var M = s.clientWidth, K = t.w - M;
                  0 < M && 0 < K && (G && q("rtl-adjust-position-for-verticalScrollBar") && (t.x += K), t.w = M);
                  M = s.clientHeight;
                  K = t.h - M;
                  0 < M && 0 < K && (t.h = M)
                }
                D && (0 > t.y && (t.h += t.y, t.y = 0), 0 > t.x && (t.w += t.x, t.x = 0), t.y + t.h > x && (t.h = x - t.y), t.x + t.w > k && (t.w = k - t.x));
                var P = w.x - t.x, U = w.y - t.y, A = P + w.w - t.w, B = U + w.h - t.h, F, C;
                if(0 < A * P && (s.scrollLeft || s == b || s.scrollWidth > s.offsetHeight)) {
                  F = Math[0 > P ? "max" : "min"](P, A);
                  if(G && (8 == g && !n || 5 <= q("trident"))) {
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
        console.error("scrollIntoView: " + H), d.scrollIntoView(!1)
      }
    }};
    d.setObject("dojo.window", f);
    return f
  })
}, "dojo/dom-construct":function() {
  define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function(d, q, m, r, p, l) {
    function k(a, c) {
      var b = c.parentNode;
      b && b.insertBefore(a, c)
    }
    function f(a) {
      if("innerHTML" in a) {
        try {
          a.innerHTML = "";
          return
        }catch(c) {
        }
      }
      for(var b;b = a.lastChild;) {
        a.removeChild(b)
      }
    }
    var h = {option:["select"], tbody:["table"], thead:["table"], tfoot:["table"], tr:["table", "tbody"], td:["table", "tbody", "tr"], th:["table", "thead", "tr"], legend:["fieldset"], caption:["table"], colgroup:["table"], col:["table", "colgroup"], li:["ul"]}, a = /<\s*([\w\:]+)/, b = {}, e = 0, c = "__" + q._scopeName + "ToDomId", g;
    for(g in h) {
      h.hasOwnProperty(g) && (q = h[g], q.pre = "option" == g ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + q.join("\x3e\x3c") + "\x3e", q.post = "\x3c/" + q.reverse().join("\x3e\x3c/") + "\x3e")
    }
    var u;
    8 >= m("ie") && (u = function(a) {
      a.__dojo_html5_tested = "yes";
      var b = n("div", {innerHTML:"\x3cnav\x3ea\x3c/nav\x3e", style:{visibility:"hidden"}}, a.body);
      1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g, function(b) {
        a.createElement(b)
      });
      v(b)
    });
    d.toDom = function(d, g) {
      g = g || r.doc;
      var f = g[c];
      f || (g[c] = f = ++e + "", b[f] = g.createElement("div"));
      8 >= m("ie") && !g.__dojo_html5_tested && g.body && u(g);
      d += "";
      var n = d.match(a), k = n ? n[1].toLowerCase() : "", f = b[f];
      if(n && h[k]) {
        n = h[k];
        f.innerHTML = n.pre + d + n.post;
        for(n = n.length;n;--n) {
          f = f.firstChild
        }
      }else {
        f.innerHTML = d
      }
      if(1 == f.childNodes.length) {
        return f.removeChild(f.firstChild)
      }
      for(k = g.createDocumentFragment();n = f.firstChild;) {
        k.appendChild(n)
      }
      return k
    };
    d.place = function(a, b, c) {
      b = p.byId(b);
      "string" == typeof a && (a = /^\s*</.test(a) ? d.toDom(a, b.ownerDocument) : p.byId(a));
      if("number" == typeof c) {
        var e = b.childNodes;
        !e.length || e.length <= c ? b.appendChild(a) : k(a, e[0 > c ? 0 : c])
      }else {
        switch(c) {
          case "before":
            k(a, b);
            break;
          case "after":
            c = a;
            (e = b.parentNode) && (e.lastChild == b ? e.appendChild(c) : e.insertBefore(c, b.nextSibling));
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
    var n = d.create = function(a, b, c, e) {
      var g = r.doc;
      c && (c = p.byId(c), g = c.ownerDocument);
      "string" == typeof a && (a = g.createElement(a));
      b && l.set(a, b);
      c && d.place(a, c, e);
      return a
    };
    d.empty = function(a) {
      f(p.byId(a))
    };
    var v = d.destroy = function(a) {
      if(a = p.byId(a)) {
        var b = a;
        a = a.parentNode;
        b.firstChild && f(b);
        a && (m("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b))
      }
    }
  })
}, "dojo/dom-attr":function() {
  define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "), function(d, q, m, r, p, l) {
    function k(a, b) {
      var e = a.getAttributeNode && a.getAttributeNode(b);
      return!!e && e.specified
    }
    var f = {innerHTML:1, textContent:1, className:1, htmlFor:q("ie"), value:1}, h = {classname:"class", htmlfor:"for", tabindex:"tabIndex", readonly:"readOnly"};
    d.has = function(a, b) {
      var e = b.toLowerCase();
      return f[l.names[e] || b] || k(r.byId(a), h[e] || b)
    };
    d.get = function(a, b) {
      a = r.byId(a);
      var e = b.toLowerCase(), c = l.names[e] || b, d = a[c];
      if(f[c] && "undefined" != typeof d) {
        return d
      }
      if("textContent" == c) {
        return l.get(a, c)
      }
      if("href" != c && ("boolean" == typeof d || m.isFunction(d))) {
        return d
      }
      e = h[e] || b;
      return k(a, e) ? a.getAttribute(e) : null
    };
    d.set = function(a, b, e) {
      a = r.byId(a);
      if(2 == arguments.length) {
        for(var c in b) {
          d.set(a, c, b[c])
        }
        return a
      }
      c = b.toLowerCase();
      var g = l.names[c] || b, k = f[g];
      if("style" == g && "string" != typeof e) {
        return p.set(a, e), a
      }
      if(k || "boolean" == typeof e || m.isFunction(e)) {
        return l.set(a, b, e)
      }
      a.setAttribute(h[c] || b, e);
      return a
    };
    d.remove = function(a, b) {
      r.byId(a).removeAttribute(h[b.toLowerCase()] || b)
    };
    d.getNodeProp = function(a, b) {
      a = r.byId(a);
      var e = b.toLowerCase(), c = l.names[e] || b;
      if(c in a && "href" != c) {
        return a[c]
      }
      e = h[e] || b;
      return k(a, e) ? a.getAttribute(e) : null
    }
  })
}, "dojo/dom-prop":function() {
  define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function(d, q, m, r, p, l, k, f) {
    function h(a) {
      var b = "";
      a = a.childNodes;
      for(var e = 0, d;d = a[e];e++) {
        8 != d.nodeType && (b = 1 == d.nodeType ? b + h(d) : b + d.nodeValue)
      }
      return b
    }
    var a = {}, b = 0, e = q._scopeName + "attrid";
    m.add("dom-textContent", function(a, b, e) {
      return"textContent" in e
    });
    d.names = {"class":"className", "for":"htmlFor", tabindex:"tabIndex", readonly:"readOnly", colspan:"colSpan", frameborder:"frameBorder", rowspan:"rowSpan", textcontent:"textContent", valuetype:"valueType"};
    d.get = function(a, b) {
      a = p.byId(a);
      var e = b.toLowerCase(), e = d.names[e] || b;
      return"textContent" == e && !m("dom-textContent") ? h(a) : a[e]
    };
    d.set = function(c, g, h) {
      c = p.byId(c);
      if(2 == arguments.length && "string" != typeof g) {
        for(var n in g) {
          d.set(c, n, g[n])
        }
        return c
      }
      n = g.toLowerCase();
      n = d.names[n] || g;
      if("style" == n && "string" != typeof h) {
        return l.set(c, h), c
      }
      if("innerHTML" == n) {
        return m("ie") && c.tagName.toLowerCase() in {col:1, colgroup:1, table:1, tbody:1, tfoot:1, thead:1, tr:1, title:1} ? (k.empty(c), c.appendChild(k.toDom(h, c.ownerDocument))) : c[n] = h, c
      }
      if("textContent" == n && !m("dom-textContent")) {
        return k.empty(c), c.appendChild(c.ownerDocument.createTextNode(h)), c
      }
      if(r.isFunction(h)) {
        var q = c[e];
        q || (q = b++, c[e] = q);
        a[q] || (a[q] = {});
        var x = a[q][n];
        if(x) {
          f.disconnect(x)
        }else {
          try {
            delete c[n]
          }catch(w) {
          }
        }
        h ? a[q][n] = f.connect(c, n, h) : c[n] = null;
        return c
      }
      c[n] = h;
      return c
    }
  })
}, "dojo/_base/connect":function() {
  define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function(d, q, m, r, p, l, k, f) {
    function h(a, b, c, e, h) {
      e = f.hitch(c, e);
      if(!a || !a.addEventListener && !a.attachEvent) {
        return r.after(a || d.global, b, e, !0)
      }
      "string" == typeof b && "on" == b.substring(0, 2) && (b = b.substring(2));
      a || (a = d.global);
      if(!h) {
        switch(b) {
          case "keypress":
            b = g;
            break;
          case "mouseenter":
            b = l.enter;
            break;
          case "mouseleave":
            b = l.leave
        }
      }
      return q(a, b, e, h)
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
    var b = {106:42, 111:47, 186:59, 187:43, 188:44, 189:45, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 229:113}, e = k("mac") ? "metaKey" : "ctrlKey", c = function(b, c) {
      var e = f.mixin({}, b, c);
      a(e);
      e.preventDefault = function() {
        b.preventDefault()
      };
      e.stopPropagation = function() {
        b.stopPropagation()
      };
      return e
    }, g;
    g = k("events-keypress-typed") ? function(a, e) {
      var d = q(a, "keydown", function(a) {
        var d = a.keyCode, f = 13 != d && 32 != d && (27 != d || !k("ie")) && (48 > d || 90 < d) && (96 > d || 111 < d) && (186 > d || 192 < d) && (219 > d || 222 < d) && 229 != d;
        if(f || a.ctrlKey) {
          f = f ? 0 : d;
          if(a.ctrlKey) {
            if(3 == d || 13 == d) {
              return e.call(a.currentTarget, a)
            }
            f = 95 < f && 106 > f ? f - 48 : !a.shiftKey && 65 <= f && 90 >= f ? f + 32 : b[f] || f
          }
          d = c(a, {type:"keypress", faux:!0, charCode:f});
          e.call(a.currentTarget, d);
          if(k("ie")) {
            try {
              a.keyCode = d.keyCode
            }catch(g) {
            }
          }
        }
      }), f = q(a, "keypress", function(a) {
        var b = a.charCode;
        a = c(a, {charCode:32 <= b ? b : 0, faux:!0});
        return e.call(this, a)
      });
      return{remove:function() {
        d.remove();
        f.remove()
      }}
    } : k("opera") ? function(a, b) {
      return q(a, "keypress", function(a) {
        var e = a.which;
        3 == e && (e = 99);
        e = 32 > e && !a.shiftKey ? 0 : e;
        a.ctrlKey && (!a.shiftKey && 65 <= e && 90 >= e) && (e += 32);
        return b.call(this, c(a, {charCode:e}))
      })
    } : function(b, c) {
      return q(b, "keypress", function(b) {
        a(b);
        return c.call(this, b)
      })
    };
    var u = {_keypress:g, connect:function(a, b, c, e, d) {
      var f = arguments, g = [], k = 0;
      g.push("string" == typeof f[0] ? null : f[k++], f[k++]);
      var l = f[k + 1];
      g.push("string" == typeof l || "function" == typeof l ? f[k++] : null, f[k++]);
      for(l = f.length;k < l;k++) {
        g.push(f[k])
      }
      return h.apply(this, g)
    }, disconnect:function(a) {
      a && a.remove()
    }, subscribe:function(a, b, c) {
      return m.subscribe(a, f.hitch(b, c))
    }, publish:function(a, b) {
      return m.publish.apply(m, [a].concat(b))
    }, connectPublisher:function(a, b, c) {
      var e = function() {
        u.publish(a, arguments)
      };
      return c ? u.connect(b, c, e) : u.connect(b, e)
    }, isCopyKey:function(a) {
      return a[e]
    }};
    u.unsubscribe = u.disconnect;
    f.mixin(d, u);
    return u
  })
}, "dojo/topic":function() {
  define(["./Evented"], function(d) {
    var q = new d;
    return{publish:function(d, r) {
      return q.emit.apply(q, arguments)
    }, subscribe:function(d, r) {
      return q.on.apply(q, arguments)
    }}
  })
}, "dojo/_base/event":function() {
  define(["./kernel", "../on", "../has", "../dom-geometry"], function(d, q, m, r) {
    if(q._fixEvent) {
      var p = q._fixEvent;
      q._fixEvent = function(d, f) {
        (d = p(d, f)) && r.normalizeEvent(d);
        return d
      }
    }
    var l = {fix:function(d, f) {
      return q._fixEvent ? q._fixEvent(d, f) : d
    }, stop:function(d) {
      m("dom-addeventlistener") || d && d.preventDefault ? (d.preventDefault(), d.stopPropagation()) : (d = d || window.event, d.cancelBubble = !0, q._preventDefault.call(d))
    }};
    d.fixEvent = l.fix;
    d.stopEvent = l.stop;
    return l
  })
}, "dojo/_base/sniff":function() {
  define(["./kernel", "./lang", "../sniff"], function(d, q, m) {
    d._name = "browser";
    q.mixin(d, {isBrowser:!0, isFF:m("ff"), isIE:m("ie"), isKhtml:m("khtml"), isWebKit:m("webkit"), isMozilla:m("mozilla"), isMoz:m("mozilla"), isOpera:m("opera"), isSafari:m("safari"), isChrome:m("chrome"), isMac:m("mac"), isIos:m("ios"), isAndroid:m("android"), isWii:m("wii"), isQuirks:m("quirks"), isAir:m("air")});
    return m
  })
}, "dojo/keys":function() {
  define(["./_base/kernel", "./sniff"], function(d, q) {
    return d.keys = {BACKSPACE:8, TAB:9, CLEAR:12, ENTER:13, SHIFT:16, CTRL:17, ALT:18, META:q("webkit") ? 91 : 224, PAUSE:19, CAPS_LOCK:20, ESCAPE:27, SPACE:32, PAGE_UP:33, PAGE_DOWN:34, END:35, HOME:36, LEFT_ARROW:37, UP_ARROW:38, RIGHT_ARROW:39, DOWN_ARROW:40, INSERT:45, DELETE:46, HELP:47, LEFT_WINDOW:91, RIGHT_WINDOW:92, SELECT:93, NUMPAD_0:96, NUMPAD_1:97, NUMPAD_2:98, NUMPAD_3:99, NUMPAD_4:100, NUMPAD_5:101, NUMPAD_6:102, NUMPAD_7:103, NUMPAD_8:104, NUMPAD_9:105, NUMPAD_MULTIPLY:106, NUMPAD_PLUS:107, 
    NUMPAD_ENTER:108, NUMPAD_MINUS:109, NUMPAD_PERIOD:110, NUMPAD_DIVIDE:111, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, F13:124, F14:125, F15:126, NUM_LOCK:144, SCROLL_LOCK:145, UP_DPAD:175, DOWN_DPAD:176, LEFT_DPAD:177, RIGHT_DPAD:178, copyKey:q("mac") && !q("air") ? q("safari") ? 91 : 224 : 17}
  })
}, "dijit/_Widget":function() {
  define("dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/has dojo/_base/kernel dojo/_base/lang dojo/query dojo/ready ./registry ./_WidgetBase ./_OnDijitClickMixin ./_FocusMixin dojo/uacss ./hccss".split(" "), function(d, q, m, r, p, l, k, f, h, a, b, e, c) {
    function g() {
    }
    function u(a) {
      return function(b, c, e, d) {
        return b && "string" == typeof c && b[c] == g ? b.on(c.substring(2).toLowerCase(), k.hitch(e, d)) : a.apply(m, arguments)
      }
    }
    d.around(m, "connect", u);
    l.connect && d.around(l, "connect", u);
    d = r("dijit._Widget", [b, e, c], {onClick:g, onDblClick:g, onKeyDown:g, onKeyPress:g, onKeyUp:g, onMouseDown:g, onMouseMove:g, onMouseOut:g, onMouseOver:g, onMouseLeave:g, onMouseEnter:g, onMouseUp:g, constructor:function(a) {
      this._toConnect = {};
      for(var b in a) {
        this[b] === g && (this._toConnect[b.replace(/^on/, "").toLowerCase()] = a[b], delete a[b])
      }
    }, postCreate:function() {
      this.inherited(arguments);
      for(var a in this._toConnect) {
        this.on(a, this._toConnect[a])
      }
      delete this._toConnect
    }, on:function(a, b) {
      return this[this._onMap(a)] === g ? m.connect(this.domNode, a.toLowerCase(), this, b) : this.inherited(arguments)
    }, _setFocusedAttr:function(a) {
      this._focused = a;
      this._set("focused", a)
    }, setAttribute:function(a, b) {
      l.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
      this.set(a, b)
    }, attr:function(a, b) {
      return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
    }, getDescendants:function() {
      l.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
      return this.containerNode ? f("[widgetId]", this.containerNode).map(a.byNode) : []
    }, _onShow:function() {
      this.onShow()
    }, onShow:function() {
    }, onHide:function() {
    }, onClose:function() {
      return!0
    }});
    p("dijit-legacy-requires") && h(0, function() {
      require(["dijit/_base"])
    });
    return d
  })
}, "dojo/ready":function() {
  define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(d, q, m, r, p) {
    var l = 0, k = [], f = 0;
    q = function() {
      l = 1;
      d._postLoad = d.config.afterOnLoad = !0;
      h()
    };
    var h = function() {
      if(!f) {
        for(f = 1;l && (!r || 0 == r._Q.length) && (m.idle ? m.idle() : 1) && k.length;) {
          var a = k.shift();
          try {
            a()
          }catch(b) {
            if(b.info = b.message, m.signal) {
              m.signal("error", b)
            }else {
              throw b;
            }
          }
        }
        f = 0
      }
    };
    m.on && m.on("idle", h);
    r && (r._onQEmpty = h);
    var a = d.ready = d.addOnLoad = function(a, b, f) {
      var l = p._toArray(arguments);
      "number" != typeof a ? (f = b, b = a, a = 1E3) : l.shift();
      f = f ? p.hitch.apply(d, l) : function() {
        b()
      };
      f.priority = a;
      for(l = 0;l < k.length && a >= k[l].priority;l++) {
      }
      k.splice(l, 0, f);
      h()
    }, b = d.config.addOnLoad;
    if(b) {
      a[p.isArray(b) ? "apply" : "call"](d, b)
    }
    r ? r(q) : q();
    return a
  })
}, "dijit/_WidgetBase":function() {
  define("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "), function(d, q, m, r, p, l, k, f, h, a, b, e, c, g, u, n, v, x, w, s, y, z, t) {
    function D(a) {
      return function(b) {
        f[b ? "set" : "remove"](this.domNode, a, b);
        this._set(a, b)
      }
    }
    c.add("dijit-legacy-requires", !g.isAsync);
    c.add("dojo-bidi", !1);
    c("dijit-legacy-requires") && v(0, function() {
      d(["dijit/_base/manager"])
    });
    var G = {};
    r = l("dijit._WidgetBase", [x, y], {id:"", _setIdAttr:"domNode", lang:"", _setLangAttr:D("lang"), dir:"", _setDirAttr:D("dir"), "class":"", _setClassAttr:{node:"domNode", type:"class"}, _setTypeAttr:null, style:"", title:"", tooltip:"", baseClass:"", srcNodeRef:null, domNode:null, containerNode:null, ownerDocument:null, _setOwnerDocumentAttr:function(a) {
      this._set("ownerDocument", a)
    }, attributeMap:{}, _blankGif:r.blankGif || d.toUrl("dojo/resources/blank.gif"), _introspect:function() {
      var a = this.constructor;
      if(!a._setterAttrs) {
        var b = a.prototype, c = a._setterAttrs = [], a = a._onMap = {}, e;
        for(e in b.attributeMap) {
          c.push(e)
        }
        for(e in b) {
          /^on/.test(e) && (a[e.substring(2).toLowerCase()] = e), /^_set[A-Z](.*)Attr$/.test(e) && (e = e.charAt(4).toLowerCase() + e.substr(5, e.length - 9), (!b.attributeMap || !(e in b.attributeMap)) && c.push(e))
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
      a && (this.params = a, u.mixin(this, a));
      this.postMixInProperties();
      this.id || (this.id = t.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id);
      this.ownerDocument = this.ownerDocument || (this.srcNodeRef ? this.srcNodeRef.ownerDocument : document);
      this.ownerDocumentBody = s.body(this.ownerDocument);
      t.add(this);
      this.buildRendering();
      var c;
      if(this.domNode) {
        this._applyAttributes();
        var e = this.srcNodeRef;
        e && (e.parentNode && this.domNode !== e) && (e.parentNode.replaceChild(this.domNode, e), c = !0);
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
      q.forEach(this.constructor._setterAttrs, function(b) {
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
        this.isLeftToRight() || (a = a.concat(q.map(a, function(a) {
          return a + "Rtl"
        })));
        h.add(this.domNode, a)
      }
    }, postCreate:function() {
    }, startup:function() {
      this._started || (this._started = !0, q.forEach(this.getChildren(), function(a) {
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
      q.forEach(this._connects, u.hitch(this, "disconnect"));
      q.forEach(this._supportingWidgets, b);
      this.domNode && q.forEach(t.findWidgets(this.domNode, this.containerNode), b);
      this.destroyRendering(a);
      t.remove(this.id);
      this._destroyed = !0
    }, destroyRendering:function(b) {
      this.bgIframe && (this.bgIframe.destroy(b), delete this.bgIframe);
      this.domNode && (b ? f.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
      this.srcNodeRef && (b || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
    }, destroyDescendants:function(a) {
      q.forEach(this.getChildren(), function(b) {
        b.destroyRecursive && b.destroyRecursive(a)
      })
    }, uninitialize:function() {
      return!1
    }, _setStyleAttr:function(a) {
      var b = this.domNode;
      u.isObject(a) ? e.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
      this._set("style", a)
    }, _attrToDom:function(a, b, c) {
      c = 3 <= arguments.length ? c : this.attributeMap[a];
      q.forEach(u.isArray(c) ? c : [c], function(c) {
        var e = this[c.node || c || "domNode"];
        switch(c.type || "attribute") {
          case "attribute":
            u.isFunction(b) && (b = u.hitch(this, b));
            c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
            e.tagName ? f.set(e, c, b) : e.set(c, b);
            break;
          case "innerText":
            e.innerHTML = "";
            e.appendChild(this.ownerDocument.createTextNode(b));
            break;
          case "innerHTML":
            e.innerHTML = b;
            break;
          case "class":
            h.replace(e, b, this[a])
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
      var e = this[c.s];
      if(u.isFunction(e)) {
        var d = e.apply(this, Array.prototype.slice.call(arguments, 1))
      }else {
        var e = this.focusNode && !u.isFunction(this.focusNode) ? "focusNode" : "domNode", f = this[e] && this[e].tagName, g;
        if(g = f) {
          if(!(g = G[f])) {
            g = this[e];
            var h = {}, k;
            for(k in g) {
              h[k.toLowerCase()] = !0
            }
            g = G[f] = h
          }
        }
        k = g;
        c = a in this.attributeMap ? this.attributeMap[a] : c.s in this ? this[c.s] : k && c.l in k && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? e : null;
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
      var e, d = this["on" + a];
      d && (e = d.apply(this, c ? c : [b]));
      this._started && !this._beingDestroyed && n.emit(this.domNode, a.toLowerCase(), b);
      return e
    }, on:function(a, b) {
      var c = this._onMap(a);
      return c ? m.after(this, c, b, !0) : this.own(n(this.domNode, a, b))[0]
    }, _onMap:function(a) {
      var b = this.constructor, c = b._onMap;
      if(!c) {
        var c = b._onMap = {}, e;
        for(e in b.prototype) {
          /^on/.test(e) && (c[e.replace(/^on/, "").toLowerCase()] = e)
        }
      }
      return c["string" == typeof a && a.toLowerCase()]
    }, toString:function() {
      return"[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]"
    }, getChildren:function() {
      return this.containerNode ? t.findWidgets(this.containerNode) : []
    }, getParent:function() {
      return t.getEnclosingWidget(this.domNode.parentNode)
    }, connect:function(a, b, c) {
      return this.own(p.connect(a, b, this, c))[0]
    }, disconnect:function(a) {
      a.remove()
    }, subscribe:function(a, b) {
      return this.own(w.subscribe(a, u.hitch(this, b)))[0]
    }, unsubscribe:function(a) {
      a.remove()
    }, isLeftToRight:function() {
      return this.dir ? "ltr" == this.dir.toLowerCase() : b.isBodyLtr(this.ownerDocument)
    }, isFocusable:function() {
      return this.focus && "none" != e.get(this.domNode, "display")
    }, placeAt:function(b, c) {
      var e = !b.tagName && t.byId(b);
      e && e.addChild && (!c || "number" === typeof c) ? e.addChild(this, c) : (e = e && "domNode" in e ? e.containerNode && !/after|before|replace/.test(c || "") ? e.containerNode : e.domNode : k.byId(b, this.ownerDocument), a.place(this.domNode, e, c), !this._started && (this.getParent() || {})._started && this.startup());
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
    c("dojo-bidi") && r.extend(z);
    return r
  })
}, "dojo/Stateful":function() {
  define(["./_base/declare", "./_base/lang", "./_base/array", "./when"], function(d, q, m, r) {
    return d("dojo.Stateful", null, {_attrPairNames:{}, _getAttrNames:function(d) {
      var l = this._attrPairNames;
      return l[d] ? l[d] : l[d] = {s:"_" + d + "Setter", g:"_" + d + "Getter"}
    }, postscript:function(d) {
      d && this.set(d)
    }, _get:function(d, l) {
      return"function" === typeof this[l.g] ? this[l.g]() : this[d]
    }, get:function(d) {
      return this._get(d, this._getAttrNames(d))
    }, set:function(d, l) {
      if("object" === typeof d) {
        for(var k in d) {
          d.hasOwnProperty(k) && "_watchCallbacks" != k && this.set(k, d[k])
        }
        return this
      }
      k = this._getAttrNames(d);
      var f = this._get(d, k);
      k = this[k.s];
      var h;
      "function" === typeof k ? h = k.apply(this, Array.prototype.slice.call(arguments, 1)) : this[d] = l;
      if(this._watchCallbacks) {
        var a = this;
        r(h, function() {
          a._watchCallbacks(d, f, l)
        })
      }
      return this
    }, _changeAttrValue:function(d, l) {
      var k = this.get(d);
      this[d] = l;
      this._watchCallbacks && this._watchCallbacks(d, k, l);
      return this
    }, watch:function(d, l) {
      var k = this._watchCallbacks;
      if(!k) {
        var f = this, k = this._watchCallbacks = function(a, e, c, d) {
          var h = function(d) {
            if(d) {
              d = d.slice();
              for(var g = 0, h = d.length;g < h;g++) {
                d[g].call(f, a, e, c)
              }
            }
          };
          h(k["_" + a]);
          d || h(k["*"])
        }
      }
      !l && "function" === typeof d ? (l = d, d = "*") : d = "_" + d;
      var h = k[d];
      "object" !== typeof h && (h = k[d] = []);
      h.push(l);
      var a = {};
      a.unwatch = a.remove = function() {
        var a = m.indexOf(h, l);
        -1 < a && h.splice(a, 1)
      };
      return a
    }})
  })
}, "dojo/when":function() {
  define(["./Deferred", "./promise/Promise"], function(d, q) {
    return function(m, r, p, l) {
      var k = m && "function" === typeof m.then, f = k && m instanceof q;
      if(k) {
        f || (k = new d(m.cancel), m.then(k.resolve, k.reject, k.progress), m = k.promise)
      }else {
        return 1 < arguments.length ? r ? r(m) : m : (new d).resolve(m)
      }
      return r || p || l ? m.then(r, p, l) : m
    }
  })
}, "dojo/Deferred":function() {
  define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "require"], function(d, q, m, r, p) {
    var l = Object.freeze || function() {
    }, k = function(a, b, d, h, k) {
      for(k = 0;k < a.length;k++) {
        f(a[k], b, d, h)
      }
    }, f = function(b, c, d, f) {
      f = b[c];
      var k = b.deferred;
      if(f) {
        try {
          var l = f(d);
          0 === c ? "undefined" !== typeof l && a(k, c, l) : l && "function" === typeof l.then ? (b.cancel = l.cancel, l.then(h(k, 1), h(k, 2), h(k, 0))) : a(k, 1, l)
        }catch(m) {
          a(k, 2, m)
        }
      }else {
        a(k, c, d)
      }
    }, h = function(b, c) {
      return function(d) {
        a(b, c, d)
      }
    }, a = function(a, b, d) {
      if(!a.isCanceled()) {
        switch(b) {
          case 0:
            a.progress(d);
            break;
          case 1:
            a.resolve(d);
            break;
          case 2:
            a.reject(d)
        }
      }
    }, b = function(a) {
      var c = this.promise = new r, d = this, h, n, p = !1, q = [];
      this.isResolved = c.isResolved = function() {
        return 1 === h
      };
      this.isRejected = c.isRejected = function() {
        return 2 === h
      };
      this.isFulfilled = c.isFulfilled = function() {
        return!!h
      };
      this.isCanceled = c.isCanceled = function() {
        return p
      };
      this.progress = function(a, b) {
        if(h) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return c
        }
        k(q, 0, a, null, d);
        return c
      };
      this.resolve = function(a, b) {
        if(h) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return c
        }
        k(q, h = 1, n = a, null, d);
        q = null;
        return c
      };
      var w = this.reject = function(a, b) {
        if(h) {
          if(!0 === b) {
            throw Error("This deferred has already been fulfilled.");
          }
          return c
        }
        k(q, h = 2, n = a, void 0, d);
        q = null;
        return c
      };
      this.then = c.then = function(a, e, d) {
        var g = [d, a, e];
        g.cancel = c.cancel;
        g.deferred = new b(function(a) {
          return g.cancel && g.cancel(a)
        });
        h && !q ? f(g, h, n, void 0) : q.push(g);
        return g.deferred.promise
      };
      this.cancel = c.cancel = function(b, c) {
        if(h) {
          if(!0 === c) {
            throw Error("This deferred has already been fulfilled.");
          }
        }else {
          if(a) {
            var d = a(b);
            b = "undefined" === typeof d ? b : d
          }
          p = !0;
          if(h) {
            if(2 === h && n === b) {
              return b
            }
          }else {
            return"undefined" === typeof b && (b = new m), w(b), b
          }
        }
      };
      l(c)
    };
    b.prototype.toString = function() {
      return"[object Deferred]"
    };
    p && p(b);
    return b
  })
}, "dojo/errors/CancelError":function() {
  define(["./create"], function(d) {
    return d("CancelError", null, null, {dojoType:"cancel"})
  })
}, "dojo/errors/create":function() {
  define(["../_base/lang"], function(d) {
    return function(q, m, r, p) {
      r = r || Error;
      var l = function(d) {
        if(r === Error) {
          Error.captureStackTrace && Error.captureStackTrace(this, l);
          var f = Error.call(this, d), h;
          for(h in f) {
            f.hasOwnProperty(h) && (this[h] = f[h])
          }
          this.message = d;
          this.stack = f.stack
        }else {
          r.apply(this, arguments)
        }
        m && m.apply(this, arguments)
      };
      l.prototype = d.delegate(r.prototype, p);
      l.prototype.name = q;
      return l.prototype.constructor = l
    }
  })
}, "dojo/promise/Promise":function() {
  define(["../_base/lang"], function(d) {
    function q() {
      throw new TypeError("abstract");
    }
    return d.extend(function() {
    }, {then:function(d, r, p) {
      q()
    }, cancel:function(d, r) {
      q()
    }, isResolved:function() {
      q()
    }, isRejected:function() {
      q()
    }, isFulfilled:function() {
      q()
    }, isCanceled:function() {
      q()
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
}, "dijit/Destroyable":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare"], function(d, q, m) {
    return m("dijit.Destroyable", null, {destroy:function(d) {
      this._destroyed = !0
    }, own:function() {
      var m = ["destroyRecursive", "destroy", "remove"];
      d.forEach(arguments, function(p) {
        function l() {
          f.remove();
          d.forEach(h, function(a) {
            a.remove()
          })
        }
        var k, f = q.before(this, "destroy", function(a) {
          p[k](a)
        }), h = [];
        p.then ? (k = "cancel", p.then(l, l)) : d.forEach(m, function(a) {
          "function" === typeof p[a] && (k || (k = a), h.push(q.after(p, a, l, !0)))
        })
      }, this);
      return arguments
    }})
  })
}, "dijit/_OnDijitClickMixin":function() {
  define("dojo/on dojo/_base/array dojo/keys dojo/_base/declare dojo/has ./a11yclick".split(" "), function(d, q, m, r, p, l) {
    d = r("dijit._OnDijitClickMixin", null, {connect:function(d, f, h) {
      return this.inherited(arguments, [d, "ondijitclick" == f ? l : f, h])
    }});
    d.a11yclick = l;
    return d
  })
}, "dijit/a11yclick":function() {
  define(["dojo/keys", "dojo/mouse", "dojo/on", "dojo/touch"], function(d, q, m, r) {
    function p(f) {
      if((f.keyCode === d.ENTER || f.keyCode === d.SPACE) && !/input|button|textarea/i.test(f.target.nodeName)) {
        for(f = f.target;f;f = f.parentNode) {
          if(f.dojoClick) {
            return!0
          }
        }
      }
    }
    var l;
    m(document, "keydown", function(d) {
      p(d) ? (l = d.target, d.preventDefault()) : l = null
    });
    m(document, "keyup", function(d) {
      p(d) && d.target == l && (l = null, m.emit(d.target, "click", {cancelable:!0, bubbles:!0, ctrlKey:d.ctrlKey, shiftKey:d.shiftKey, metaKey:d.metaKey, altKey:d.altKey, _origType:d.type}))
    });
    var k = function(d, h) {
      d.dojoClick = !0;
      return m(d, "click", h)
    };
    k.click = k;
    k.press = function(f, h) {
      var a = m(f, r.press, function(a) {
        ("mousedown" != a.type || q.isLeft(a)) && h(a)
      }), b = m(f, "keydown", function(a) {
        (a.keyCode === d.ENTER || a.keyCode === d.SPACE) && h(a)
      });
      return{remove:function() {
        a.remove();
        b.remove()
      }}
    };
    k.release = function(f, h) {
      var a = m(f, r.release, function(a) {
        ("mouseup" != a.type || q.isLeft(a)) && h(a)
      }), b = m(f, "keyup", function(a) {
        (a.keyCode === d.ENTER || a.keyCode === d.SPACE) && h(a)
      });
      return{remove:function() {
        a.remove();
        b.remove()
      }}
    };
    k.move = r.move;
    return k
  })
}, "dojo/touch":function() {
  define("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(d, q, m, r, p, l, k, f, h, a) {
    function b(a, b, c) {
      return u && c ? function(a, b) {
        return l(a, c, b)
      } : v ? function(c, e) {
        var d = l(c, b, function(a) {
          e.call(this, a);
          M = (new Date).getTime()
        }), f = l(c, a, function(a) {
          (!M || (new Date).getTime() > M + 1E3) && e.call(this, a)
        });
        return{remove:function() {
          d.remove();
          f.remove()
        }}
      } : function(b, c) {
        return l(b, a, c)
      }
    }
    function e(a) {
      do {
        if(void 0 !== a.dojoClick) {
          return a
        }
      }while(a = a.parentNode)
    }
    function c(b, c, d) {
      if(!f.isRight(b)) {
        var g = e(b.target);
        if(w = !b.target.disabled && g && g.dojoClick) {
          if(y = (s = "useTarget" == w) ? g : b.target, s && b.preventDefault(), z = b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, t = b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY, D = ("object" == typeof w ? w.x : "number" == typeof w ? w : 0) || 4, G = ("object" == typeof w ? w.y : "number" == typeof w ? w : 0) || 4, !x) {
            x = !0;
            var h = function(b) {
              w = s ? m.isDescendant(a.doc.elementFromPoint(b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX, b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY), y) : w && (b.changedTouches ? b.changedTouches[0].target : b.target) == y && Math.abs((b.changedTouches ? b.changedTouches[0].pageX - a.global.pageXOffset : b.clientX) - z) <= D && Math.abs((b.changedTouches ? b.changedTouches[0].pageY - a.global.pageYOffset : b.clientY) - t) <= 
              G
            };
            a.doc.addEventListener(c, function(a) {
              f.isRight(a) || (h(a), s && a.preventDefault())
            }, !0);
            a.doc.addEventListener(d, function(a) {
              if(!f.isRight(a) && (h(a), w)) {
                I = (new Date).getTime();
                var b = s ? y : a.target;
                "LABEL" === b.tagName && (b = m.byId(b.getAttribute("for")) || b);
                var c = a.changedTouches ? a.changedTouches[0] : a, e = function(b) {
                  var e = document.createEvent("MouseEvents");
                  e._dojo_click = !0;
                  e.initMouseEvent(b, !0, !0, a.view, a.detail, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                  return e
                }, d = e("mousedown"), g = e("mouseup"), k = e("click");
                setTimeout(function() {
                  l.emit(b, "mousedown", d);
                  l.emit(b, "mouseup", g);
                  l.emit(b, "click", k);
                  I = (new Date).getTime()
                }, 0)
              }
            }, !0);
            b = function(b) {
              a.doc.addEventListener(b, function(a) {
                w && (!a._dojo_click && (new Date).getTime() <= I + 1E3 && !("INPUT" == a.target.tagName && r.contains(a.target, "dijitOffScreen"))) && (a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation(), "click" == b && (("INPUT" != a.target.tagName || "radio" == a.target.type || "checkbox" == a.target.type) && "TEXTAREA" != a.target.tagName && "AUDIO" != a.target.tagName && "VIDEO" != a.target.tagName) && a.preventDefault())
              }, !0)
            };
            b("click");
            b("mousedown");
            b("mouseup")
          }
        }
      }
    }
    var g = 5 > k("ios"), u = k("pointer-events") || k("MSPointer"), n = function() {
      var a = {}, b;
      for(b in{down:1, move:1, up:1, cancel:1, over:1, out:1}) {
        a[b] = k("MSPointer") ? "MSPointer" + b.charAt(0).toUpperCase() + b.slice(1) : "pointer" + b
      }
      return a
    }(), v = k("touch-events"), x, w, s = !1, y, z, t, D, G, I, M, K;
    k("touch") && (u ? h(function() {
      a.doc.addEventListener(n.down, function(a) {
        c(a, n.move, n.up)
      }, !0)
    }) : h(function() {
      function b(a) {
        var c = p.delegate(a, {bubbles:!0});
        6 <= k("ios") && (c.touches = a.touches, c.altKey = a.altKey, c.changedTouches = a.changedTouches, c.ctrlKey = a.ctrlKey, c.metaKey = a.metaKey, c.shiftKey = a.shiftKey, c.targetTouches = a.targetTouches);
        return c
      }
      K = a.body();
      a.doc.addEventListener("touchstart", function(a) {
        M = (new Date).getTime();
        var b = K;
        K = a.target;
        l.emit(b, "dojotouchout", {relatedTarget:K, bubbles:!0});
        l.emit(K, "dojotouchover", {relatedTarget:b, bubbles:!0});
        c(a, "touchmove", "touchend")
      }, !0);
      l(a.doc, "touchmove", function(c) {
        M = (new Date).getTime();
        var e = a.doc.elementFromPoint(c.pageX - (g ? 0 : a.global.pageXOffset), c.pageY - (g ? 0 : a.global.pageYOffset));
        e && (K !== e && (l.emit(K, "dojotouchout", {relatedTarget:e, bubbles:!0}), l.emit(e, "dojotouchover", {relatedTarget:K, bubbles:!0}), K = e), l.emit(e, "dojotouchmove", b(c)) || c.preventDefault())
      });
      l(a.doc, "touchend", function(c) {
        M = (new Date).getTime();
        var e = a.doc.elementFromPoint(c.pageX - (g ? 0 : a.global.pageXOffset), c.pageY - (g ? 0 : a.global.pageYOffset)) || a.body();
        l.emit(e, "dojotouchend", b(c))
      })
    }));
    q = {press:b("mousedown", "touchstart", n.down), move:b("mousemove", "dojotouchmove", n.move), release:b("mouseup", "dojotouchend", n.up), cancel:b(f.leave, "touchcancel", u ? n.cancel : null), over:b("mouseover", "dojotouchover", n.over), out:b("mouseout", "dojotouchout", n.out), enter:f._eventHandler(b("mouseover", "dojotouchover", n.over)), leave:f._eventHandler(b("mouseout", "dojotouchout", n.out))};
    return d.touch = q
  })
}, "dijit/_FocusMixin":function() {
  define(["./focus", "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function(d, q, m, r) {
    r.extend(q, {focused:!1, onFocus:function() {
    }, onBlur:function() {
    }, _onFocus:function() {
      this.onFocus()
    }, _onBlur:function() {
      this.onBlur()
    }});
    return m("dijit._FocusMixin", null, {_focusManager:d})
  })
}, "dijit/focus":function() {
  define("dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "), function(d, q, m, r, p, l, k, f, h, a, b, e, c, g, u, n, v) {
    var x, w, s = new (q([e, k], {curNode:null, activeStack:[], constructor:function() {
      var a = f.hitch(this, function(a) {
        m.isDescendant(this.curNode, a) && this.set("curNode", null);
        m.isDescendant(this.prevNode, a) && this.set("prevNode", null)
      });
      d.before(l, "empty", a);
      d.before(l, "destroy", a)
    }, registerIframe:function(a) {
      return this.registerWin(a.contentWindow, a)
    }, registerWin:function(a, c) {
      var e = this, d = a.document && a.document.body;
      if(d) {
        var f = b("pointer-events") ? "pointerdown" : b("MSPointer") ? "MSPointerDown" : b("touch-events") ? "mousedown, touchstart" : "mousedown", g = h(a.document, f, function(a) {
          if(!a || !(a.target && null == a.target.parentNode)) {
            e._onTouchNode(c || a.target, "mouse")
          }
        }), k = h(d, "focusin", function(a) {
          if(a.target.tagName) {
            var b = a.target.tagName.toLowerCase();
            "#document" == b || "body" == b || (u.isFocusable(a.target) ? e._onFocusNode(c || a.target) : e._onTouchNode(c || a.target))
          }
        }), l = h(d, "focusout", function(a) {
          e._onBlurNode(c || a.target)
        });
        return{remove:function() {
          g.remove();
          k.remove();
          l.remove();
          d = g = k = l = null
        }}
      }
    }, _onBlurNode:function(a) {
      a = (new Date).getTime();
      a < x + 100 || (this._clearFocusTimer && clearTimeout(this._clearFocusTimer), this._clearFocusTimer = setTimeout(f.hitch(this, function() {
        this.set("prevNode", this.curNode);
        this.set("curNode", null)
      }), 0), this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), a < w + 100 || (this._clearActiveWidgetsTimer = setTimeout(f.hitch(this, function() {
        delete this._clearActiveWidgetsTimer;
        this._setStack([])
      }), 0)))
    }, _onTouchNode:function(a, b) {
      w = (new Date).getTime();
      this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
      p.contains(a, "dijitPopup") && (a = a.firstChild);
      var e = [];
      try {
        for(;a;) {
          var d = r.get(a, "dijitPopupParent");
          if(d) {
            a = n.byId(d).domNode
          }else {
            if(a.tagName && "body" == a.tagName.toLowerCase()) {
              if(a === c.body()) {
                break
              }
              a = g.get(a.ownerDocument).frameElement
            }else {
              var f = a.getAttribute && a.getAttribute("widgetId"), h = f && n.byId(f);
              h && !("mouse" == b && h.get("disabled")) && e.unshift(f);
              a = a.parentNode
            }
          }
        }
      }catch(k) {
      }
      this._setStack(e, b)
    }, _onFocusNode:function(a) {
      a && 9 != a.nodeType && (x = (new Date).getTime(), this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
    }, _setStack:function(a, b) {
      var c = this.activeStack, e = c.length - 1, d = a.length - 1;
      if(a[d] != c[e]) {
        this.set("activeStack", a);
        var f;
        for(f = e;0 <= f && c[f] != a[f];f--) {
          if(e = n.byId(c[f])) {
            e._hasBeenBlurred = !0, e.set("focused", !1), e._focusManager == this && e._onBlur(b), this.emit("widget-blur", e, b)
          }
        }
        for(f++;f <= d;f++) {
          if(e = n.byId(a[f])) {
            e.set("focused", !0), e._focusManager == this && e._onFocus(b), this.emit("widget-focus", e, b)
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
      var a = s.registerWin(g.get(document));
      b("ie") && h(window, "unload", function() {
        a && (a.remove(), a = null)
      })
    });
    v.focus = function(a) {
      s.focus(a)
    };
    for(var y in s) {
      /^_/.test(y) || (v.focus[y] = "function" == typeof s[y] ? f.hitch(s, y) : s[y])
    }
    s.watch(function(a, b, c) {
      v.focus[a] = c
    });
    return s
  })
}, "dijit/a11y":function() {
  define("dojo/_base/array dojo/dom dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/sniff ./main".split(" "), function(d, q, m, r, p, l, k) {
    var f = {_isElementShown:function(d) {
      var a = r.get(d);
      return"hidden" != a.visibility && "collapsed" != a.visibility && "none" != a.display && "hidden" != m.get(d, "type")
    }, hasDefaultTabStop:function(d) {
      switch(d.nodeName.toLowerCase()) {
        case "a":
          return m.has(d, "href");
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
            var b = d.contentDocument;
            if("designMode" in b && "on" == b.designMode) {
              return!0
            }
            a = b.body
          }catch(e) {
            try {
              a = d.contentWindow.document.body
            }catch(c) {
              return!1
            }
          }
          return a && ("true" == a.contentEditable || a.firstChild && "true" == a.firstChild.contentEditable);
        default:
          return"true" == d.contentEditable
      }
    }, effectiveTabIndex:function(d) {
      return m.get(d, "disabled") ? void 0 : m.has(d, "tabIndex") ? +m.get(d, "tabIndex") : f.hasDefaultTabStop(d) ? 0 : void 0
    }, isTabNavigable:function(d) {
      return 0 <= f.effectiveTabIndex(d)
    }, isFocusable:function(d) {
      return-1 <= f.effectiveTabIndex(d)
    }, _getTabNavigable:function(d) {
      function a(a) {
        return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
      }
      var b, e, c, g, k, n, p = {}, q = f._isElementShown, r = f.effectiveTabIndex, s = function(d) {
        for(d = d.firstChild;d;d = d.nextSibling) {
          if(!(1 != d.nodeType || 9 >= l("ie") && "HTML" !== d.scopeName || !q(d))) {
            var f = r(d);
            if(0 <= f) {
              if(0 == f) {
                b || (b = d), e = d
              }else {
                if(0 < f) {
                  if(!c || f < g) {
                    g = f, c = d
                  }
                  if(!k || f >= n) {
                    n = f, k = d
                  }
                }
              }
              f = a(d);
              m.get(d, "checked") && f && (p[f] = d)
            }
            "SELECT" != d.nodeName.toUpperCase() && s(d)
          }
        }
      };
      q(d) && s(d);
      return{first:p[a(b)] || b, last:p[a(e)] || e, lowest:p[a(c)] || c, highest:p[a(k)] || k}
    }, getFirstInTabbingOrder:function(d, a) {
      var b = f._getTabNavigable(q.byId(d, a));
      return b.lowest ? b.lowest : b.first
    }, getLastInTabbingOrder:function(d, a) {
      var b = f._getTabNavigable(q.byId(d, a));
      return b.last ? b.last : b.highest
    }};
    p.mixin(k, f);
    return f
  })
}, "dojo/uacss":function() {
  define(["./dom-geometry", "./_base/lang", "./domReady", "./sniff", "./_base/window"], function(d, q, m, r, p) {
    var l = p.doc.documentElement;
    p = r("ie");
    var k = r("trident"), f = r("opera"), h = Math.floor, a = r("ff"), b = d.boxModel.replace(/-/, ""), f = {dj_quirks:r("quirks"), dj_opera:f, dj_khtml:r("khtml"), dj_webkit:r("webkit"), dj_safari:r("safari"), dj_chrome:r("chrome"), dj_edge:r("edge"), dj_gecko:r("mozilla"), dj_ios:r("ios"), dj_android:r("android")};
    p && (f.dj_ie = !0, f["dj_ie" + h(p)] = !0, f.dj_iequirks = r("quirks"));
    k && (f.dj_trident = !0, f["dj_trident" + h(k)] = !0);
    a && (f["dj_ff" + h(a)] = !0);
    f["dj_" + b] = !0;
    var e = "", c;
    for(c in f) {
      f[c] && (e += c + " ")
    }
    l.className = q.trim(l.className + " " + e);
    m(function() {
      if(!d.isBodyLtr()) {
        var a = "dj_rtl dijitRtl " + e.replace(/ /g, "-rtl ");
        l.className = q.trim(l.className + " " + a + "dj_rtl dijitRtl " + e.replace(/ /g, "-rtl "))
      }
    });
    return r
  })
}, "dijit/hccss":function() {
  define(["dojo/dom-class", "dojo/hccss", "dojo/domReady", "dojo/_base/window"], function(d, q, m, r) {
    m(function() {
      q("highcontrast") && d.add(r.body(), "dijit_a11y")
    });
    return q
  })
}, "dojo/hccss":function() {
  define("require ./_base/config ./dom-class ./dom-style ./has ./domReady ./_base/window".split(" "), function(d, q, m, r, p, l, k) {
    p.add("highcontrast", function() {
      var f = k.doc.createElement("div");
      f.style.cssText = 'border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("' + (q.blankGif || d.toUrl("./resources/blank.gif")) + '");';
      k.body().appendChild(f);
      var h = r.getComputedStyle(f), a = h.backgroundImage, h = h.borderTopColor == h.borderRightColor || a && ("none" == a || "url(invalid-url:)" == a);
      8 >= p("ie") ? f.outerHTML = "" : k.body().removeChild(f);
      return h
    });
    l(function() {
      p("highcontrast") && m.add(k.body(), "dj_a11y")
    });
    return p
  })
}, "dijit/_TemplatedMixin":function() {
  define("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(d, q, m, r, p, l, k, f) {
    var h = q("dijit._TemplatedMixin", f, {templateString:null, templatePath:null, _skipNodeCache:!1, searchContainerNode:!0, _stringRepl:function(a) {
      var b = this.declaredClass, e = this;
      return k.substitute(a, this, function(a, d) {
        "!" == d.charAt(0) && (a = r.getObject(d.substr(1), !1, e));
        if("undefined" == typeof a) {
          throw Error(b + " template:" + d);
        }
        return null == a ? "" : "!" == d.charAt(0) ? a : this._escapeValue("" + a)
      }, this)
    }, _escapeValue:function(a) {
      return a.replace(/["'<>&]/g, function(a) {
        return{"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;"}[a]
      })
    }, buildRendering:function() {
      if(!this._rendered) {
        this.templateString || (this.templateString = d(this.templatePath, {sanitize:!0}));
        var a = h.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), b;
        if(r.isString(a)) {
          if(b = m.toDom(this._stringRepl(a), this.ownerDocument), 1 != b.nodeType) {
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
    h._templateCache = {};
    h.getCachedTemplate = function(a, b, e) {
      var c = h._templateCache, d = a, f = c[d];
      if(f) {
        try {
          if(!f.ownerDocument || f.ownerDocument == (e || document)) {
            return f
          }
        }catch(l) {
        }
        m.destroy(f)
      }
      a = k.trim(a);
      if(b || a.match(/\$\{([^\}]+)\}/g)) {
        return c[d] = a
      }
      b = m.toDom(a, e);
      if(1 != b.nodeType) {
        throw Error("Invalid template: " + a);
      }
      return c[d] = b
    };
    l("ie") && p(window, "unload", function() {
      var a = h._templateCache, b;
      for(b in a) {
        var e = a[b];
        "object" == typeof e && m.destroy(e);
        delete a[b]
      }
    });
    return h
  })
}, "dojo/cache":function() {
  define(["./_base/kernel", "./text"], function(d) {
    return d.cache
  })
}, "dojo/text":function() {
  define(["./_base/kernel", "require", "./has", "./request"], function(d, q, m, r) {
    var p;
    p = function(a, b, e) {
      r(a, {sync:!!b, headers:{"X-Requested-With":null}}).then(e)
    };
    var l = {}, k = function(a) {
      if(a) {
        a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
        var b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        b && (a = b[1])
      }else {
        a = ""
      }
      return a
    }, f = {}, h = {};
    d.cache = function(a, b, e) {
      var c;
      "string" == typeof a ? /\//.test(a) ? (c = a, e = b) : c = q.toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "")) : (c = a + "", e = b);
      a = void 0 != e && "string" != typeof e ? e.value : e;
      e = e && e.sanitize;
      if("string" == typeof a) {
        return l[c] = a, e ? k(a) : a
      }
      if(null === a) {
        return delete l[c], null
      }
      c in l || p(c, !0, function(a) {
        l[c] = a
      });
      return e ? k(l[c]) : l[c]
    };
    return{dynamic:!0, normalize:function(a, b) {
      var e = a.split("!"), c = e[0];
      return(/^\./.test(c) ? b(c) : c) + (e[1] ? "!" + e[1] : "")
    }, load:function(a, b, e) {
      a = a.split("!");
      var c = 1 < a.length, d = a[0], m = b.toUrl(a[0]);
      a = "url:" + m;
      var n = f, q = function(a) {
        e(c ? k(a) : a)
      };
      d in l ? n = l[d] : b.cache && a in b.cache ? n = b.cache[a] : m in l && (n = l[m]);
      if(n === f) {
        if(h[m]) {
          h[m].push(q)
        }else {
          var r = h[m] = [q];
          p(m, !b.async, function(a) {
            l[d] = l[m] = a;
            for(var b = 0;b < r.length;) {
              r[b++](a)
            }
            delete h[m]
          })
        }
      }else {
        q(n)
      }
    }}
  })
}, "dojo/request":function() {
  define(["./request/default!"], function(d) {
    return d
  })
}, "dojo/request/default":function() {
  define(["exports", "require", "../has"], function(d, q, m) {
    var r = m("config-requestProvider");
    r || (r = "./xhr");
    d.getPlatformDefaultId = function() {
      return"./xhr"
    };
    d.load = function(d, l, k, f) {
      q(["platform" == d ? "./xhr" : r], function(d) {
        k(d)
      })
    }
  })
}, "dojo/string":function() {
  define(["./_base/kernel", "./_base/lang"], function(d, q) {
    var m = /[&<>'"\/]/g, r = {"\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#x27;", "/":"\x26#x2F;"}, p = {};
    q.setObject("dojo.string", p);
    p.escape = function(d) {
      return!d ? "" : d.replace(m, function(d) {
        return r[d]
      })
    };
    p.rep = function(d, k) {
      if(0 >= k || !d) {
        return""
      }
      for(var f = [];;) {
        k & 1 && f.push(d);
        if(!(k >>= 1)) {
          break
        }
        d += d
      }
      return f.join("")
    };
    p.pad = function(d, k, f, h) {
      f || (f = "0");
      d = String(d);
      k = p.rep(f, Math.ceil((k - d.length) / f.length));
      return h ? d + k : k + d
    };
    p.substitute = function(l, k, f, h) {
      h = h || d.global;
      f = f ? q.hitch(h, f) : function(a) {
        return a
      };
      return l.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(a, b, e) {
        a = q.getObject(b, !1, k);
        e && (a = q.getObject(e, !1, h).call(h, a, b));
        return f(a, b).toString()
      })
    };
    p.trim = String.prototype.trim ? q.trim : function(d) {
      d = d.replace(/^\s+/, "");
      for(var k = d.length - 1;0 <= k;k--) {
        if(/\S/.test(d.charAt(k))) {
          d = d.substring(0, k + 1);
          break
        }
      }
      return d
    };
    return p
  })
}, "dijit/_AttachMixin":function() {
  define("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "), function(d, q, m, r, p, l, k, f, h) {
    var a = p.delegate(f, {mouseenter:l.enter, mouseleave:l.leave, keypress:m._keypress}), b;
    m = r("dijit._AttachMixin", null, {constructor:function() {
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
    }, _processTemplateNode:function(a, b, d) {
      var f = !0, k = this.attachScope || this, h = b(a, "dojoAttachPoint") || b(a, "data-dojo-attach-point");
      if(h) {
        for(var l = h.split(/\s*,\s*/);h = l.shift();) {
          p.isArray(k[h]) ? k[h].push(a) : k[h] = a, f = "containerNode" != h, this._attachPoints.push(h)
        }
      }
      if(b = b(a, "dojoAttachEvent") || b(a, "data-dojo-attach-event")) {
        h = b.split(/\s*,\s*/);
        for(l = p.trim;b = h.shift();) {
          if(b) {
            var m = null;
            -1 != b.indexOf(":") ? (m = b.split(":"), b = l(m[0]), m = l(m[1])) : b = l(b);
            m || (m = b);
            this._attachEvents.push(d(a, b, p.hitch(k, m)))
          }
        }
      }
      return f
    }, _attach:function(e, c, f) {
      c = c.replace(/^on/, "").toLowerCase();
      c = "dijitclick" == c ? b || (b = d("./a11yclick")) : a[c] || c;
      return k(e, c, f)
    }, _detachTemplateNodes:function() {
      var a = this.attachScope || this;
      q.forEach(this._attachPoints, function(b) {
        delete a[b]
      });
      this._attachPoints = [];
      q.forEach(this._attachEvents, function(a) {
        a.remove()
      });
      this._attachEvents = []
    }, destroyRendering:function() {
      this._detachTemplateNodes();
      this.inherited(arguments)
    }});
    p.extend(h, {dojoAttachEvent:"", dojoAttachPoint:""});
    return m
  })
}, "dijit/BackgroundIframe":function() {
  define("require ./main dojo/_base/config dojo/dom-construct dojo/dom-style dojo/_base/lang dojo/on dojo/sniff".split(" "), function(d, q, m, r, p, l, k, f) {
    f.add("config-bgIframe", (f("ie") || f("trident")) && !/IEMobile\/10\.0/.test(navigator.userAgent));
    var h = new function() {
      var a = [];
      this.pop = function() {
        var b;
        a.length ? (b = a.pop(), b.style.display = "") : (9 > f("ie") ? (b = "\x3ciframe src\x3d'" + (m.dojoBlankHtmlUrl || d.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role\x3d'presentation' style\x3d'position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity\x3d\"0\");'\x3e", b = document.createElement(b)) : (b = r.create("iframe"), b.src = 'javascript:""', b.className = "dijitBackgroundIframe", b.setAttribute("role", "presentation"), p.set(b, "opacity", 0.1)), b.tabIndex = 
        -1);
        return b
      };
      this.push = function(b) {
        b.style.display = "none";
        a.push(b)
      }
    };
    q.BackgroundIframe = function(a) {
      if(!a.id) {
        throw Error("no id");
      }
      if(f("config-bgIframe")) {
        var b = this.iframe = h.pop();
        a.appendChild(b);
        7 > f("ie") || f("quirks") ? (this.resize(a), this._conn = k(a, "resize", l.hitch(this, "resize", a))) : p.set(b, {width:"100%", height:"100%"})
      }
    };
    l.extend(q.BackgroundIframe, {resize:function(a) {
      this.iframe && p.set(this.iframe, {width:a.offsetWidth + "px", height:a.offsetHeight + "px"})
    }, destroy:function() {
      this._conn && (this._conn.remove(), this._conn = null);
      this.iframe && (this.iframe.parentNode.removeChild(this.iframe), h.push(this.iframe), delete this.iframe)
    }});
    return q.BackgroundIframe
  })
}, "url:dijit/templates/Tooltip.html":'\x3cdiv class\x3d"dijitTooltip dijitTooltipLeft" id\x3d"dojoTooltip" data-dojo-attach-event\x3d"mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t\x3e\x3cdiv class\x3d"dijitTooltipConnector" data-dojo-attach-point\x3d"connectorNode"\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point\x3d"containerNode" role\x3d\'alert\'\x3e\x3c/div\n\x3e\x3c/div\x3e\n'}});
(function() {
  var d = this.require;
  d({cache:{}});
  !d.async && d(["dojo"]);
  d.boot && d.apply(null, d.boot)
})();

//# sourceMappingURL=dojo.js.map