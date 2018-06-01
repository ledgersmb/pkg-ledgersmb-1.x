//>>built
require({cache:{"dojo/parser":function() {
  define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t) {
    function q(a) {
      return eval("(" + a + ")")
    }
    function r(a) {
      var h = a._nameCaseMap, c = a.prototype;
      if(!h || h._extendCnt < v) {
        var h = a._nameCaseMap = {}, b;
        for(b in c) {
          "_" !== b.charAt(0) && (h[b.toLowerCase()] = b)
        }
        h._extendCnt = v
      }
      return h
    }
    function y(a, h) {
      var c = a.join();
      if(!x[c]) {
        for(var b = [], r = 0, e = a.length;r < e;r++) {
          var q = a[r];
          b[b.length] = x[q] = x[q] || l.getObject(q) || ~q.indexOf("/") && (h ? h(q) : f(q))
        }
        r = b.shift();
        x[c] = b.length ? r.createSubclass ? r.createSubclass(b) : r.extend.apply(r, b) : r
      }
      return x[c]
    }
    new Date("X");
    var v = 0;
    a.after(l, "extend", function() {
      v++
    }, !0);
    var x = {}, w = {_clearCache:function() {
      v++;
      x = {}
    }, _functionFromScript:function(a, h) {
      var c = "", b = "", r = a.getAttribute(h + "args") || a.getAttribute("args"), q = a.getAttribute("with"), r = (r || "").split(/\s*,\s*/);
      q && q.length && g.forEach(q.split(/\s*,\s*/), function(a) {
        c += "with(" + a + "){";
        b += "}"
      });
      return new Function(r, c + a.innerHTML + b)
    }, instantiate:function(a, h, c) {
      h = h || {};
      c = c || {};
      var b = (c.scope || m._scopeName) + "Type", r = "data-" + (c.scope || m._scopeName) + "-", q = r + "type", e = r + "mixins", d = [];
      g.forEach(a, function(a) {
        var c = b in h ? h[b] : a.getAttribute(q) || a.getAttribute(b);
        if(c) {
          var r = a.getAttribute(e), c = r ? [c].concat(r.split(/\s*,\s*/)) : [c];
          d.push({node:a, types:c})
        }
      });
      return this._instantiate(d, h, c)
    }, _instantiate:function(a, h, b, r) {
      function q(a) {
        !h._started && !b.noStart && g.forEach(a, function(a) {
          "function" === typeof a.startup && !a._started && a.startup()
        });
        return a
      }
      a = g.map(a, function(a) {
        var c = a.ctor || y(a.types, b.contextRequire);
        if(!c) {
          throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
        }
        return this.construct(c, a.node, h, b, a.scripts, a.inherited)
      }, this);
      return r ? c(a).then(q) : q(a)
    }, construct:function(c, b, e, p, y, k) {
      function f(c) {
        N && l.setObject(N, c);
        for(C = 0;C < J.length;C++) {
          a[J[C].advice || "after"](c, J[C].method, l.hitch(c, J[C].func), !0)
        }
        for(C = 0;C < S.length;C++) {
          S[C].call(c)
        }
        for(C = 0;C < Q.length;C++) {
          c.watch(Q[C].prop, Q[C].func)
        }
        for(C = 0;C < R.length;C++) {
          u(c, R[C].event, R[C].func)
        }
        return c
      }
      var t = c && c.prototype;
      p = p || {};
      var v = {};
      p.defaults && l.mixin(v, p.defaults);
      k && l.mixin(v, k);
      var w;
      s("dom-attributes-explicit") ? w = b.attributes : s("dom-attributes-specified-flag") ? w = g.filter(b.attributes, function(a) {
        return a.specified
      }) : (k = (/^input$|^img$/i.test(b.nodeName) ? b : b.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), w = g.map(k.split(/\s+/), function(a) {
        var c = a.toLowerCase();
        return{name:a, value:"LI" == b.nodeName && "value" == a || "enctype" == c ? b.getAttribute(c) : b.getAttributeNode(c).value}
      }));
      var x = p.scope || m._scopeName;
      k = "data-" + x + "-";
      var A = {};
      "dojo" !== x && (A[k + "props"] = "data-dojo-props", A[k + "type"] = "data-dojo-type", A[k + "mixins"] = "data-dojo-mixins", A[x + "type"] = "dojoType", A[k + "id"] = "data-dojo-id");
      for(var C = 0, z, x = [], N, K;z = w[C++];) {
        var E = z.name, F = E.toLowerCase();
        z = z.value;
        switch(A[F] || F) {
          case "data-dojo-type":
          ;
          case "dojotype":
          ;
          case "data-dojo-mixins":
            break;
          case "data-dojo-props":
            K = z;
            break;
          case "data-dojo-id":
          ;
          case "jsid":
            N = z;
            break;
          case "data-dojo-attach-point":
          ;
          case "dojoattachpoint":
            v.dojoAttachPoint = z;
            break;
          case "data-dojo-attach-event":
          ;
          case "dojoattachevent":
            v.dojoAttachEvent = z;
            break;
          case "class":
            v["class"] = b.className;
            break;
          case "style":
            v.style = b.style && b.style.cssText;
            break;
          default:
            if(E in t || (E = r(c)[F] || E), E in t) {
              switch(typeof t[E]) {
                case "string":
                  v[E] = z;
                  break;
                case "number":
                  v[E] = z.length ? Number(z) : NaN;
                  break;
                case "boolean":
                  v[E] = "false" != z.toLowerCase();
                  break;
                case "function":
                  "" === z || -1 != z.search(/[^\w\.]+/i) ? v[E] = new Function(z) : v[E] = l.getObject(z, !1) || new Function(z);
                  x.push(E);
                  break;
                default:
                  F = t[E], v[E] = F && "length" in F ? z ? z.split(/\s*,\s*/) : [] : F instanceof Date ? "" == z ? new Date("") : "now" == z ? new Date : h.fromISOString(z) : F instanceof d ? m.baseUrl + z : q(z)
              }
            }else {
              v[E] = z
            }
        }
      }
      for(w = 0;w < x.length;w++) {
        A = x[w].toLowerCase(), b.removeAttribute(A), b[A] = null
      }
      if(K) {
        try {
          K = q.call(p.propsThis, "{" + K + "}"), l.mixin(v, K)
        }catch(T) {
          throw Error(T.toString() + " in data-dojo-props\x3d'" + K + "'");
        }
      }
      l.mixin(v, e);
      y || (y = c && (c._noScript || t._noScript) ? [] : n("\x3e script[type^\x3d'dojo/']", b));
      var J = [], S = [], Q = [], R = [];
      if(y) {
        for(C = 0;C < y.length;C++) {
          A = y[C], b.removeChild(A), e = A.getAttribute(k + "event") || A.getAttribute("event"), p = A.getAttribute(k + "prop"), K = A.getAttribute(k + "method"), x = A.getAttribute(k + "advice"), w = A.getAttribute("type"), A = this._functionFromScript(A, k), e ? "dojo/connect" == w ? J.push({method:e, func:A}) : "dojo/on" == w ? R.push({event:e, func:A}) : v[e] = A : "dojo/aspect" == w ? J.push({method:K, advice:x, func:A}) : "dojo/watch" == w ? Q.push({prop:p, func:A}) : S.push(A)
        }
      }
      c = (y = c.markupFactory || t.markupFactory) ? y(v, b, c) : new c(v, b);
      return c.then ? c.then(f) : f(c)
    }, scan:function(a, c) {
      function h(a) {
        if(!a.inherited) {
          a.inherited = {};
          var c = a.node, b = h(a.parent), c = {dir:c.getAttribute("dir") || b.dir, lang:c.getAttribute("lang") || b.lang, textDir:c.getAttribute(k) || b.textDir}, r;
          for(r in c) {
            c[r] && (a.inherited[r] = c[r])
          }
        }
        return a.inherited
      }
      var b = [], r = [], q = {}, e = (c.scope || m._scopeName) + "Type", d = "data-" + (c.scope || m._scopeName) + "-", s = d + "type", k = d + "textdir", d = d + "mixins", n = a.firstChild, t = c.inherited;
      if(!t) {
        var v = function(a, c) {
          return a.getAttribute && a.getAttribute(c) || a.parentNode && v(a.parentNode, c)
        }, t = {dir:v(a, "dir"), lang:v(a, "lang"), textDir:v(a, k)}, w;
        for(w in t) {
          t[w] || delete t[w]
        }
      }
      for(var t = {inherited:t}, x, l;;) {
        if(n) {
          if(1 != n.nodeType) {
            n = n.nextSibling
          }else {
            if(x && "script" == n.nodeName.toLowerCase()) {
              (u = n.getAttribute("type")) && /^dojo\/\w/i.test(u) && x.push(n), n = n.nextSibling
            }else {
              if(l) {
                n = n.nextSibling
              }else {
                var u = n.getAttribute(s) || n.getAttribute(e);
                w = n.firstChild;
                if(!u && (!w || 3 == w.nodeType && !w.nextSibling)) {
                  n = n.nextSibling
                }else {
                  l = null;
                  if(u) {
                    var F = n.getAttribute(d);
                    x = F ? [u].concat(F.split(/\s*,\s*/)) : [u];
                    try {
                      l = y(x, c.contextRequire)
                    }catch(T) {
                    }
                    l || g.forEach(x, function(a) {
                      ~a.indexOf("/") && !q[a] && (q[a] = !0, r[r.length] = a)
                    });
                    F = l && !l.prototype._noScript ? [] : null;
                    t = {types:x, ctor:l, parent:t, node:n, scripts:F};
                    t.inherited = h(t);
                    b.push(t)
                  }else {
                    t = {node:n, scripts:x, parent:t}
                  }
                  x = F;
                  l = n.stopParser || l && l.prototype.stopParser && !c.template;
                  n = w
                }
              }
            }
          }
        }else {
          if(!t || !t.node) {
            break
          }
          n = t.node.nextSibling;
          l = !1;
          t = t.parent;
          x = t.scripts
        }
      }
      var J = new p;
      r.length ? (c.contextRequire || f)(r, function() {
        J.resolve(g.filter(b, function(a) {
          if(!a.ctor) {
            try {
              a.ctor = y(a.types, c.contextRequire)
            }catch(h) {
            }
          }
          for(var b = a.parent;b && !b.types;) {
            b = b.parent
          }
          var r = a.ctor && a.ctor.prototype;
          a.instantiateChildren = !(r && r.stopParser && !c.template);
          a.instantiate = !b || b.instantiate && b.instantiateChildren;
          return a.instantiate
        }))
      }) : J.resolve(b);
      return J.promise
    }, _require:function(a, c) {
      var h = q("{" + a.innerHTML + "}"), b = [], r = [], e = new p, d = c && c.contextRequire || f, s;
      for(s in h) {
        b.push(s), r.push(h[s])
      }
      d(r, function() {
        for(var a = 0;a < b.length;a++) {
          l.setObject(b[a], arguments[a])
        }
        e.resolve(arguments)
      });
      return e.promise
    }, _scanAmd:function(a, c) {
      var h = new p, b = h.promise;
      h.resolve(!0);
      var r = this;
      n("script[type\x3d'dojo/require']", a).forEach(function(a) {
        b = b.then(function() {
          return r._require(a, c)
        });
        a.parentNode.removeChild(a)
      });
      return b
    }, parse:function(a, c) {
      a && ("string" != typeof a && !("nodeType" in a)) && (c = a, a = c.rootNode);
      var h = a ? e.byId(a) : k.body();
      c = c || {};
      var b = c.template ? {template:!0} : {}, r = [], q = this, d = this._scanAmd(h, c).then(function() {
        return q.scan(h, c)
      }).then(function(a) {
        return q._instantiate(a, b, c, !0)
      }).then(function(a) {
        return r = r.concat(a)
      }).otherwise(function(a) {
        console.error("dojo/parser::parse() error", a);
        throw a;
      });
      l.mixin(r, d);
      return r
    }};
    m.parser = w;
    b.parseOnLoad && t(100, w, "parse");
    return w
  })
}, "dojo/_base/url":function() {
  define(["./kernel"], function(f) {
    var m = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, l = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, g = function() {
      for(var b = arguments, e = [b[0]], k = 1;k < b.length;k++) {
        if(b[k]) {
          var d = new g(b[k] + ""), e = new g(e[0] + "");
          if("" == d.path && !d.scheme && !d.authority && !d.query) {
            null != d.fragment && (e.fragment = d.fragment), d = e
          }else {
            if(!d.scheme && (d.scheme = e.scheme, !d.authority && (d.authority = e.authority, "/" != d.path.charAt(0)))) {
              for(var e = (e.path.substring(0, e.path.lastIndexOf("/") + 1) + d.path).split("/"), a = 0;a < e.length;a++) {
                "." == e[a] ? a == e.length - 1 ? e[a] = "" : (e.splice(a, 1), a--) : 0 < a && (!(1 == a && "" == e[0]) && ".." == e[a] && ".." != e[a - 1]) && (a == e.length - 1 ? (e.splice(a, 1), e[a - 1] = "") : (e.splice(a - 1, 2), a -= 2))
              }
              d.path = e.join("/")
            }
          }
          e = [];
          d.scheme && e.push(d.scheme, ":");
          d.authority && e.push("//", d.authority);
          e.push(d.path);
          d.query && e.push("?", d.query);
          d.fragment && e.push("#", d.fragment)
        }
      }
      this.uri = e.join("");
      b = this.uri.match(m);
      this.scheme = b[2] || (b[1] ? "" : null);
      this.authority = b[4] || (b[3] ? "" : null);
      this.path = b[5];
      this.query = b[7] || (b[6] ? "" : null);
      this.fragment = b[9] || (b[8] ? "" : null);
      null != this.authority && (b = this.authority.match(l), this.user = b[3] || null, this.password = b[4] || null, this.host = b[6] || b[7], this.port = b[9] || null)
    };
    g.prototype.toString = function() {
      return this.uri
    };
    return f._Url = g
  })
}, "dojo/promise/all":function() {
  define(["../_base/array", "../Deferred", "../when"], function(f, m, l) {
    var g = f.some;
    return function(b) {
      var e, k;
      b instanceof Array ? k = b : b && "object" === typeof b && (e = b);
      var d, a = [];
      if(e) {
        k = [];
        for(var c in e) {
          Object.hasOwnProperty.call(e, c) && (a.push(c), k.push(e[c]))
        }
        d = {}
      }else {
        k && (d = [])
      }
      if(!k || !k.length) {
        return(new m).resolve(d)
      }
      var h = new m;
      h.promise.always(function() {
        d = a = null
      });
      var p = k.length;
      g(k, function(c, b) {
        e || a.push(b);
        l(c, function(c) {
          h.isFulfilled() || (d[a[b]] = c, 0 === --p && h.resolve(d))
        }, h.reject);
        return h.isFulfilled()
      });
      return h.promise
    }
  })
}, "dojo/date/stamp":function() {
  define(["../_base/lang", "../_base/array"], function(f, m) {
    var l = {};
    f.setObject("dojo.date.stamp", l);
    l.fromISOString = function(g, b) {
      l._isoRegExp || (l._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
      var e = l._isoRegExp.exec(g), k = null;
      if(e) {
        e.shift();
        e[1] && e[1]--;
        e[6] && (e[6] *= 1E3);
        b && (b = new Date(b), m.forEach(m.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "), function(a) {
          return b["get" + a]()
        }), function(a, h) {
          e[h] = e[h] || a
        }));
        k = new Date(e[0] || 1970, e[1] || 0, e[2] || 1, e[3] || 0, e[4] || 0, e[5] || 0, e[6] || 0);
        100 > e[0] && k.setFullYear(e[0] || 1970);
        var d = 0, a = e[7] && e[7].charAt(0);
        "Z" != a && (d = 60 * (e[8] || 0) + (Number(e[9]) || 0), "-" != a && (d *= -1));
        a && (d -= k.getTimezoneOffset());
        d && k.setTime(k.getTime() + 6E4 * d)
      }
      return k
    };
    l.toISOString = function(g, b) {
      var e = function(a) {
        return 10 > a ? "0" + a : a
      };
      b = b || {};
      var k = [], d = b.zulu ? "getUTC" : "get", a = "";
      "time" != b.selector && (a = g[d + "FullYear"](), a = ["0000".substr((a + "").length) + a, e(g[d + "Month"]() + 1), e(g[d + "Date"]())].join("-"));
      k.push(a);
      if("date" != b.selector) {
        a = [e(g[d + "Hours"]()), e(g[d + "Minutes"]()), e(g[d + "Seconds"]())].join(":");
        d = g[d + "Milliseconds"]();
        b.milliseconds && (a += "." + (100 > d ? "0" : "") + e(d));
        if(b.zulu) {
          a += "Z"
        }else {
          if("time" != b.selector) {
            var d = g.getTimezoneOffset(), c = Math.abs(d), a = a + ((0 < d ? "-" : "+") + e(Math.floor(c / 60)) + ":" + e(c % 60))
          }
        }
        k.push(a)
      }
      return k.join("T")
    };
    return l
  })
}, "dojo/hash":function() {
  define("./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "), function(f, m, l, g, b, e, k, d) {
    function a(a, c) {
      var h = a.indexOf(c);
      return 0 <= h ? a.substring(h + 1) : ""
    }
    function c() {
      return a(location.href, "#")
    }
    function h() {
      e.publish("/dojo/hashchange", c())
    }
    function p() {
      c() !== u && (u = c(), h())
    }
    function s(a) {
      if(t) {
        if(t.isTransitioning()) {
          setTimeout(b.hitch(null, s, a), r)
        }else {
          var c = t.iframe.location.href, h = c.indexOf("?");
          t.iframe.location.replace(c.substring(0, h) + "?" + a)
        }
      }else {
        location.replace("#" + a), !q && p()
      }
    }
    function n() {
      function q() {
        u = c();
        p = n ? u : a(t.href, "?");
        s = !1;
        k = null
      }
      var e = document.createElement("iframe"), d = l.dojoBlankHtmlUrl || m.toUrl("./resources/blank.html");
      e.id = "dojo-hash-iframe";
      e.src = d + "?" + c();
      e.style.display = "none";
      document.body.appendChild(e);
      this.iframe = f.global["dojo-hash-iframe"];
      var p, s, k, g, n, t = this.iframe.location;
      this.isTransitioning = function() {
        return s
      };
      this.pollLocation = function() {
        if(!n) {
          try {
            var f = a(t.href, "?");
            document.title != g && (g = this.iframe.document.title = document.title)
          }catch(l) {
            n = !0, console.error("dojo/hash: Error adding history entry. Server unreachable.")
          }
        }
        var m = c();
        if(s && u === m) {
          if(n || f === k) {
            q(), h()
          }else {
            setTimeout(b.hitch(this, this.pollLocation), 0);
            return
          }
        }else {
          if(!(u === m && (n || p === f))) {
            if(u !== m) {
              u = m;
              s = !0;
              k = m;
              e.src = d + "?" + k;
              n = !1;
              setTimeout(b.hitch(this, this.pollLocation), 0);
              return
            }
            n || (location.href = "#" + t.search.substring(1), q(), h())
          }
        }
        setTimeout(b.hitch(this, this.pollLocation), r)
      };
      q();
      setTimeout(b.hitch(this, this.pollLocation), r)
    }
    f.hash = function(a, h) {
      if(!arguments.length) {
        return c()
      }
      "#" == a.charAt(0) && (a = a.substring(1));
      h ? s(a) : location.href = "#" + a;
      return a
    };
    var u, t, q, r = l.hashPollFrequency || 100;
    k(function() {
      "onhashchange" in f.global && (!d("ie") || 8 <= d("ie") && "BackCompat" != document.compatMode) ? q = g.after(f.global, "onhashchange", h, !0) : document.addEventListener ? (u = c(), setInterval(p, r)) : document.attachEvent && (t = new n)
    });
    return f.hash
  })
}, "lsmb/DateTextBox":function() {
  define(["dijit/form/DateTextBox", "dojo/date/locale", "dojo/_base/declare"], function(f, m, l) {
    var g = /^\d\d\d\d-\d\d-\d\d$/;
    return l("lsmb/DateTextBox", [f], {_formattedValue:null, constructor:function(b, e) {
      this._formattedValue = e.value;
      b.constraints || (b.constraints = {});
      b.constraints.datePattern || (b.constraints.datePattern = lsmbConfig.dateformat.replace(/mm/, "MM"));
      b.placeholder || (b.placeholder = lsmbConfig.dateformat);
      this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      if(this._formattedValue && (!this.value || !g.test(this.value))) {
        this.value = this.parse(this._formattedValue, this.constraints)
      }
    }, parse:function(b, e) {
      return!g.test(b) ? this.inherited(arguments) : m.parse(b, {datePattern:"yyyy-MM-dd", selector:"date"})
    }})
  })
}, "dijit/form/DateTextBox":function() {
  define(["dojo/_base/declare", "../Calendar", "./_DateTimeTextBox"], function(f, m, l) {
    return f("dijit.form.DateTextBox", l, {baseClass:"dijitTextBox dijitComboBox dijitDateTextBox", popupClass:m, _selector:"date", maxHeight:Infinity, value:new Date("")})
  })
}, "dijit/Calendar":function() {
  define("dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t, q) {
    var r = g("dijit.Calendar", [s, n, u], {baseClass:"dijitCalendar", cssStateNodes:{decrementMonth:"dijitCalendarArrow", incrementMonth:"dijitCalendarArrow", previousYearLabelNode:"dijitCalendarPreviousYear", nextYearLabelNode:"dijitCalendarNextYear"}, setValue:function(a) {
      d.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
      this.set("value", a)
    }, _createMonthWidget:function() {
      return new r._MonthDropDownButton({id:this.id + "_mddb", tabIndex:-1, onMonthSelect:c.hitch(this, "_onMonthSelect"), lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(h(this.domNode, "keydown", c.hitch(this, "_onKeyDown")), h(this.dateRowsNode, "mouseover", c.hitch(this, "_onDayMouseOver")), h(this.dateRowsNode, "mouseout", c.hitch(this, "_onDayMouseOut")), h(this.dateRowsNode, "mousedown", c.hitch(this, "_onDayMouseDown")), h(this.dateRowsNode, "mouseup", c.hitch(this, "_onDayMouseUp")))
    }, _onMonthSelect:function(a) {
      var c = new this.dateClassObj(this.currentFocus);
      c.setDate(1);
      c.setMonth(a);
      a = this.dateModule.getDaysInMonth(c);
      var h = this.currentFocus.getDate();
      c.setDate(Math.min(h, a));
      this._setCurrentFocusAttr(c)
    }, _onDayMouseOver:function(a) {
      if((a = e.contains(a.target, "dijitCalendarDateLabel") ? a.target.parentNode : a.target) && (a.dijitDateValue && !e.contains(a, "dijitCalendarDisabledDate") || a == this.previousYearLabelNode || a == this.nextYearLabelNode)) {
        e.add(a, "dijitCalendarHoveredDate"), this._currentNode = a
      }
    }, _onDayMouseOut:function(a) {
      this._currentNode && !(a.relatedTarget && a.relatedTarget.parentNode == this._currentNode) && (a = "dijitCalendarHoveredDate", e.contains(this._currentNode, "dijitCalendarActiveDate") && (a += " dijitCalendarActiveDate"), e.remove(this._currentNode, a), this._currentNode = null)
    }, _onDayMouseDown:function(a) {
      if((a = a.target.parentNode) && a.dijitDateValue && !e.contains(a, "dijitCalendarDisabledDate")) {
        e.add(a, "dijitCalendarActiveDate"), this._currentNode = a
      }
    }, _onDayMouseUp:function(a) {
      (a = a.target.parentNode) && a.dijitDateValue && e.remove(a, "dijitCalendarActiveDate")
    }, handleKey:function(c) {
      var h = -1, b, r = this.currentFocus;
      switch(c.keyCode) {
        case a.RIGHT_ARROW:
          h = 1;
        case a.LEFT_ARROW:
          b = "day";
          this.isLeftToRight() || (h *= -1);
          break;
        case a.DOWN_ARROW:
          h = 1;
        case a.UP_ARROW:
          b = "week";
          break;
        case a.PAGE_DOWN:
          h = 1;
        case a.PAGE_UP:
          b = c.ctrlKey || c.altKey ? "year" : "month";
          break;
        case a.END:
          r = this.dateModule.add(r, "month", 1), b = "day";
        case a.HOME:
          r = new this.dateClassObj(r);
          r.setDate(1);
          break;
        default:
          return!0
      }
      b && (r = this.dateModule.add(r, b, h));
      this._setCurrentFocusAttr(r);
      return!1
    }, _onKeyDown:function(a) {
      this.handleKey(a) || (a.stopPropagation(), a.preventDefault())
    }, onValueSelected:function() {
    }, onChange:function(a) {
      this.onValueSelected(a)
    }, getClassForDate:function() {
    }});
    r._MonthDropDownButton = g("dijit.Calendar._MonthDropDownButton", q, {onMonthSelect:function() {
    }, postCreate:function() {
      this.inherited(arguments);
      this.dropDown = new r._MonthDropDown({id:this.id + "_mdd", onChange:this.onMonthSelect})
    }, _setMonthAttr:function(a) {
      var c = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
      this.dropDown.set("months", c);
      this.containerNode.innerHTML = (6 == p("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + this.dropDown.domNode.innerHTML + "\x3c/div\x3e") + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + c[a.getMonth()] + "\x3c/div\x3e"
    }});
    r._MonthDropDown = g("dijit.Calendar._MonthDropDown", [n, t, u], {months:[], baseClass:"dijitCalendarMonthMenu dijitMenu", templateString:"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onClick'\x3e\x3c/div\x3e", _setMonthsAttr:function(a) {
      this.domNode.innerHTML = "";
      f.forEach(a, function(a, c) {
        k.create("div", {className:"dijitCalendarMonthLabel", month:c, innerHTML:a}, this.domNode)._cssState = "dijitCalendarMonthLabel"
      }, this)
    }, _onClick:function(a) {
      this.onChange(b.get(a.target, "month"))
    }, onChange:function() {
    }});
    return r
  })
}, "dojo/date":function() {
  define(["./has", "./_base/lang"], function(f, m) {
    var l = {getDaysInMonth:function(g) {
      var b = g.getMonth();
      return 1 == b && l.isLeapYear(g) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }, isLeapYear:function(g) {
      g = g.getFullYear();
      return!(g % 400) || !(g % 4) && !!(g % 100)
    }, getTimezoneName:function(g) {
      var b = g.toString(), e = "", k = b.indexOf("(");
      if(-1 < k) {
        e = b.substring(++k, b.indexOf(")"))
      }else {
        if(k = /([A-Z\/]+) \d{4}$/, b = b.match(k)) {
          e = b[1]
        }else {
          if(b = g.toLocaleString(), k = / ([A-Z\/]+)$/, b = b.match(k)) {
            e = b[1]
          }
        }
      }
      return"AM" == e || "PM" == e ? "" : e
    }, compare:function(g, b, e) {
      g = new Date(+g);
      b = new Date(+(b || new Date));
      "date" == e ? (g.setHours(0, 0, 0, 0), b.setHours(0, 0, 0, 0)) : "time" == e && (g.setFullYear(0, 0, 0), b.setFullYear(0, 0, 0));
      return g > b ? 1 : g < b ? -1 : 0
    }, add:function(g, b, e) {
      var k = new Date(+g), d = !1, a = "Date";
      switch(b) {
        case "day":
          break;
        case "weekday":
          var c;
          (b = e % 5) ? c = parseInt(e / 5) : (b = 0 < e ? 5 : -5, c = 0 < e ? (e - 5) / 5 : (e + 5) / 5);
          var h = g.getDay(), p = 0;
          6 == h && 0 < e ? p = 1 : 0 == h && 0 > e && (p = -1);
          h += b;
          if(0 == h || 6 == h) {
            p = 0 < e ? 2 : -2
          }
          e = 7 * c + b + p;
          break;
        case "year":
          a = "FullYear";
          d = !0;
          break;
        case "week":
          e *= 7;
          break;
        case "quarter":
          e *= 3;
        case "month":
          d = !0;
          a = "Month";
          break;
        default:
          a = "UTC" + b.charAt(0).toUpperCase() + b.substring(1) + "s"
      }
      if(a) {
        k["set" + a](k["get" + a]() + e)
      }
      d && k.getDate() < g.getDate() && k.setDate(0);
      return k
    }, difference:function(g, b, e) {
      b = b || new Date;
      e = e || "day";
      var k = b.getFullYear() - g.getFullYear(), d = 1;
      switch(e) {
        case "quarter":
          g = g.getMonth();
          b = b.getMonth();
          g = Math.floor(g / 3) + 1;
          b = Math.floor(b / 3) + 1;
          d = b + 4 * k - g;
          break;
        case "weekday":
          k = Math.round(l.difference(g, b, "day"));
          e = parseInt(l.difference(g, b, "week"));
          d = k % 7;
          if(0 == d) {
            k = 5 * e
          }else {
            var a = 0, c = g.getDay();
            b = b.getDay();
            e = parseInt(k / 7);
            d = k % 7;
            g = new Date(g);
            g.setDate(g.getDate() + 7 * e);
            g = g.getDay();
            if(0 < k) {
              switch(!0) {
                case 6 == c:
                  a = -1;
                  break;
                case 0 == c:
                  a = 0;
                  break;
                case 6 == b:
                  a = -1;
                  break;
                case 0 == b:
                  a = -2;
                  break;
                case 5 < g + d:
                  a = -2
              }
            }else {
              if(0 > k) {
                switch(!0) {
                  case 6 == c:
                    a = 0;
                    break;
                  case 0 == c:
                    a = 1;
                    break;
                  case 6 == b:
                    a = 2;
                    break;
                  case 0 == b:
                    a = 1;
                    break;
                  case 0 > g + d:
                    a = 2
                }
              }
            }
            k = k + a - 2 * e
          }
          d = k;
          break;
        case "year":
          d = k;
          break;
        case "month":
          d = b.getMonth() - g.getMonth() + 12 * k;
          break;
        case "week":
          d = parseInt(l.difference(g, b, "day") / 7);
          break;
        case "day":
          d /= 24;
        case "hour":
          d /= 60;
        case "minute":
          d /= 60;
        case "second":
          d /= 1E3;
        case "millisecond":
          d *= b.getTime() - g.getTime()
      }
      return Math.round(d)
    }};
    m.mixin(m.getObject("dojo.date", !0), l);
    return l
  })
}, "dojo/date/locale":function() {
  define("../_base/lang ../_base/array ../date ../cldr/supplemental ../i18n ../regexp ../string ../i18n!../cldr/nls/gregorian module".split(" "), function(f, m, l, g, b, e, k, d, a) {
    function c(a, c, h, b) {
      return b.replace(/([a-z])\1*/ig, function(e) {
        var d, p, n = e.charAt(0);
        e = e.length;
        var f = ["abbr", "wide", "narrow"];
        switch(n) {
          case "G":
            d = c[4 > e ? "eraAbbr" : "eraNames"][0 > a.getFullYear() ? 0 : 1];
            break;
          case "y":
            d = a.getFullYear();
            switch(e) {
              case 1:
                break;
              case 2:
                if(!h.fullYear) {
                  d = String(d);
                  d = d.substr(d.length - 2);
                  break
                }
              ;
              default:
                p = !0
            }
            break;
          case "Q":
          ;
          case "q":
            d = Math.ceil((a.getMonth() + 1) / 3);
            p = !0;
            break;
          case "M":
          ;
          case "L":
            d = a.getMonth();
            3 > e ? (d += 1, p = !0) : (n = ["months", "L" == n ? "standAlone" : "format", f[e - 3]].join("-"), d = c[n][d]);
            break;
          case "w":
            d = s._getWeekOfYear(a, 0);
            p = !0;
            break;
          case "d":
            d = a.getDate();
            p = !0;
            break;
          case "D":
            d = s._getDayOfYear(a);
            p = !0;
            break;
          case "e":
          ;
          case "c":
            if(d = a.getDay(), 2 > e) {
              d = (d - g.getFirstDayOfWeek(h.locale) + 8) % 7;
              break
            }
          ;
          case "E":
            d = a.getDay();
            3 > e ? (d += 1, p = !0) : (n = ["days", "c" == n ? "standAlone" : "format", f[e - 3]].join("-"), d = c[n][d]);
            break;
          case "a":
            n = 12 > a.getHours() ? "am" : "pm";
            d = h[n] || c["dayPeriods-format-wide-" + n];
            break;
          case "h":
          ;
          case "H":
          ;
          case "K":
          ;
          case "k":
            p = a.getHours();
            switch(n) {
              case "h":
                d = p % 12 || 12;
                break;
              case "H":
                d = p;
                break;
              case "K":
                d = p % 12;
                break;
              case "k":
                d = p || 24
            }
            p = !0;
            break;
          case "m":
            d = a.getMinutes();
            p = !0;
            break;
          case "s":
            d = a.getSeconds();
            p = !0;
            break;
          case "S":
            d = Math.round(a.getMilliseconds() * Math.pow(10, e - 3));
            p = !0;
            break;
          case "v":
          ;
          case "z":
            if(d = s._getZone(a, !0, h)) {
              break
            }
            e = 4;
          case "Z":
            n = s._getZone(a, !1, h);
            n = [0 >= n ? "+" : "-", k.pad(Math.floor(Math.abs(n) / 60), 2), k.pad(Math.abs(n) % 60, 2)];
            4 == e && (n.splice(0, 0, "GMT"), n.splice(3, 0, ":"));
            d = n.join("");
            break;
          default:
            throw Error("dojo.date.locale.format: invalid pattern char: " + b);
        }
        p && (d = k.pad(d, e));
        return d
      })
    }
    function h(a, c, h, b) {
      var d = function(a) {
        return a
      };
      c = c || d;
      h = h || d;
      b = b || d;
      var e = a.match(/(''|[^'])+/g), p = "'" == a.charAt(0);
      m.forEach(e, function(a, b) {
        a ? (e[b] = (p ? h : c)(a.replace(/''/g, "'")), p = !p) : e[b] = ""
      });
      return b(e.join(""))
    }
    function p(a, c, h, b) {
      b = e.escapeString(b);
      h.strict || (b = b.replace(" a", " ?a"));
      return b.replace(/([a-z])\1*/ig, function(b) {
        var d;
        d = b.charAt(0);
        var e = b.length, p = "", s = "";
        h.strict ? (1 < e && (p = "0{" + (e - 1) + "}"), 2 < e && (s = "0{" + (e - 2) + "}")) : (p = "0?", s = "0{0,2}");
        switch(d) {
          case "y":
            d = "\\d{2,4}";
            break;
          case "M":
          ;
          case "L":
            2 < e ? (d = c["months-" + ("L" == d ? "standAlone" : "format") + "-" + n[e - 3]].slice(0).join("|"), h.strict || (d = d.replace(/\./g, ""), d = "(?:" + d + ")\\.?")) : d = "1[0-2]|" + p + "[1-9]";
            break;
          case "D":
            d = "[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|" + p + "[1-9][0-9]|" + s + "[1-9]";
            break;
          case "d":
            d = "3[01]|[12]\\d|" + p + "[1-9]";
            break;
          case "w":
            d = "[1-4][0-9]|5[0-3]|" + p + "[1-9]";
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            d = ".+?";
            break;
          case "h":
            d = "1[0-2]|" + p + "[1-9]";
            break;
          case "k":
            d = "1[01]|" + p + "\\d";
            break;
          case "H":
            d = "1\\d|2[0-3]|" + p + "\\d";
            break;
          case "K":
            d = "1\\d|2[0-4]|" + p + "[1-9]";
            break;
          case "m":
          ;
          case "s":
            d = "[0-5]\\d";
            break;
          case "S":
            d = "\\d{" + e + "}";
            break;
          case "a":
            e = h.am || c["dayPeriods-format-wide-am"];
            p = h.pm || c["dayPeriods-format-wide-pm"];
            d = e + "|" + p;
            h.strict || (e != e.toLowerCase() && (d += "|" + e.toLowerCase()), p != p.toLowerCase() && (d += "|" + p.toLowerCase()), -1 != d.indexOf(".") && (d += "|" + d.replace(/\./g, "")));
            d = d.replace(/\./g, "\\.");
            break;
          default:
            d = ".*"
        }
        a && a.push(b);
        return"(" + d + ")"
      }).replace(/[\xa0 ]/g, "[\\s\\xa0]")
    }
    var s = {};
    f.setObject(a.id.replace(/\//g, "."), s);
    s._getZone = function(a, c, h) {
      return c ? l.getTimezoneName(a) : a.getTimezoneOffset()
    };
    s.format = function(a, d) {
      d = d || {};
      var e = b.normalizeLocale(d.locale), p = d.formatLength || "short", e = s._getGregorianBundle(e), n = [], k = f.hitch(this, c, a, e, d);
      if("year" == d.selector) {
        return h(e["dateFormatItem-yyyy"] || "yyyy", k)
      }
      var g;
      "date" != d.selector && (g = d.timePattern || e["timeFormat-" + p]) && n.push(h(g, k));
      "time" != d.selector && (g = d.datePattern || e["dateFormat-" + p]) && n.push(h(g, k));
      return 1 == n.length ? n[0] : e["dateTimeFormat-" + p].replace(/\'/g, "").replace(/\{(\d+)\}/g, function(a, c) {
        return n[c]
      })
    };
    s.regexp = function(a) {
      return s._parseInfo(a).regexp
    };
    s._parseInfo = function(a) {
      a = a || {};
      var c = b.normalizeLocale(a.locale), c = s._getGregorianBundle(c), d = a.formatLength || "short", e = a.datePattern || c["dateFormat-" + d], n = a.timePattern || c["timeFormat-" + d], d = "date" == a.selector ? e : "time" == a.selector ? n : c["dateTimeFormat-" + d].replace(/\{(\d+)\}/g, function(a, c) {
        return[n, e][c]
      }), k = [];
      return{regexp:h(d, f.hitch(this, p, k, c, a)), tokens:k, bundle:c}
    };
    s.parse = function(a, c) {
      var h = /[\u200E\u200F\u202A\u202E]/g, b = s._parseInfo(c), d = b.tokens, e = b.bundle, h = RegExp("^" + b.regexp.replace(h, "") + "$", b.strict ? "" : "i").exec(a && a.replace(h, ""));
      if(!h) {
        return null
      }
      var p = ["abbr", "wide", "narrow"], n = [1970, 0, 1, 0, 0, 0, 0], k = "", h = m.every(h, function(a, h) {
        if(!h) {
          return!0
        }
        var b = d[h - 1], q = b.length, b = b.charAt(0);
        switch(b) {
          case "y":
            if(2 != q && c.strict) {
              n[0] = a
            }else {
              if(100 > a) {
                a = Number(a), b = "" + (new Date).getFullYear(), q = 100 * b.substring(0, 2), b = Math.min(Number(b.substring(2, 4)) + 20, 99), n[0] = a < b ? q + a : q - 100 + a
              }else {
                if(c.strict) {
                  return!1
                }
                n[0] = a
              }
            }
            break;
          case "M":
          ;
          case "L":
            if(2 < q) {
              if(q = e["months-" + ("L" == b ? "standAlone" : "format") + "-" + p[q - 3]].concat(), c.strict || (a = a.replace(".", "").toLowerCase(), q = m.map(q, function(a) {
                return a.replace(".", "").toLowerCase()
              })), a = m.indexOf(q, a), -1 == a) {
                return!1
              }
            }else {
              a--
            }
            n[1] = a;
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            q = e["days-" + ("c" == b ? "standAlone" : "format") + "-" + p[q - 3]].concat();
            c.strict || (a = a.toLowerCase(), q = m.map(q, function(a) {
              return a.toLowerCase()
            }));
            a = m.indexOf(q, a);
            if(-1 == a) {
              return!1
            }
            break;
          case "D":
            n[1] = 0;
          case "d":
            n[2] = a;
            break;
          case "a":
            q = c.am || e["dayPeriods-format-wide-am"];
            b = c.pm || e["dayPeriods-format-wide-pm"];
            if(!c.strict) {
              var s = /\./g;
              a = a.replace(s, "").toLowerCase();
              q = q.replace(s, "").toLowerCase();
              b = b.replace(s, "").toLowerCase()
            }
            if(c.strict && a != q && a != b) {
              return!1
            }
            k = a == b ? "p" : a == q ? "a" : "";
            break;
          case "K":
            24 == a && (a = 0);
          case "h":
          ;
          case "H":
          ;
          case "k":
            if(23 < a) {
              return!1
            }
            n[3] = a;
            break;
          case "m":
            n[4] = a;
            break;
          case "s":
            n[5] = a;
            break;
          case "S":
            n[6] = a
        }
        return!0
      }), b = +n[3];
      "p" === k && 12 > b ? n[3] = b + 12 : "a" === k && 12 == b && (n[3] = 0);
      b = new Date(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
      c.strict && b.setFullYear(n[0]);
      var g = d.join(""), f = -1 != g.indexOf("d"), g = -1 != g.indexOf("M");
      if(!h || g && b.getMonth() > n[1] || f && b.getDate() > n[2]) {
        return null
      }
      if(g && b.getMonth() < n[1] || f && b.getDate() < n[2]) {
        b = l.add(b, "hour", 1)
      }
      return b
    };
    var n = ["abbr", "wide", "narrow"], u = [], t = {};
    s.addCustomFormats = function(a, c) {
      u.push({pkg:a, name:c});
      t = {}
    };
    s._getGregorianBundle = function(a) {
      if(t[a]) {
        return t[a]
      }
      var c = {};
      m.forEach(u, function(h) {
        h = b.getLocalization(h.pkg, h.name, a);
        c = f.mixin(c, h)
      }, this);
      return t[a] = c
    };
    s.addCustomFormats(a.id.replace(/\/date\/locale$/, ".cldr"), "gregorian");
    s.getNames = function(a, c, h, b) {
      var d;
      b = s._getGregorianBundle(b);
      a = [a, h, c];
      "standAlone" == h && (h = a.join("-"), d = b[h], 1 == d[0] && (d = void 0));
      a[1] = "format";
      return(d || b[a.join("-")]).concat()
    };
    s.isWeekend = function(a, c) {
      var h = g.getWeekend(c), b = (a || new Date).getDay();
      h.end < h.start && (h.end += 7, b < h.start && (b += 7));
      return b >= h.start && b <= h.end
    };
    s._getDayOfYear = function(a) {
      return l.difference(new Date(a.getFullYear(), 0, 1, a.getHours()), a) + 1
    };
    s._getWeekOfYear = function(a, c) {
      1 == arguments.length && (c = 0);
      var h = (new Date(a.getFullYear(), 0, 1)).getDay(), b = Math.floor((s._getDayOfYear(a) + (h - c + 7) % 7 - 1) / 7);
      h == c && b++;
      return b
    };
    return s
  })
}, "dojo/cldr/supplemental":function() {
  define(["../_base/lang", "../i18n"], function(f, m) {
    var l = {};
    f.setObject("dojo.cldr.supplemental", l);
    l.getFirstDayOfWeek = function(g) {
      g = {bd:5, mv:5, ae:6, af:6, bh:6, dj:6, dz:6, eg:6, iq:6, ir:6, jo:6, kw:6, ly:6, ma:6, om:6, qa:6, sa:6, sd:6, sy:6, ye:6, ag:0, ar:0, as:0, au:0, br:0, bs:0, bt:0, bw:0, by:0, bz:0, ca:0, cn:0, co:0, dm:0, "do":0, et:0, gt:0, gu:0, hk:0, hn:0, id:0, ie:0, il:0, "in":0, jm:0, jp:0, ke:0, kh:0, kr:0, la:0, mh:0, mm:0, mo:0, mt:0, mx:0, mz:0, ni:0, np:0, nz:0, pa:0, pe:0, ph:0, pk:0, pr:0, py:0, sg:0, sv:0, th:0, tn:0, tt:0, tw:0, um:0, us:0, ve:0, vi:0, ws:0, za:0, zw:0}[l._region(g)];
      return void 0 === g ? 1 : g
    };
    l._region = function(g) {
      g = m.normalizeLocale(g);
      g = g.split("-");
      var b = g[1];
      b ? 4 == b.length && (b = g[2]) : b = {aa:"et", ab:"ge", af:"za", ak:"gh", am:"et", ar:"eg", as:"in", av:"ru", ay:"bo", az:"az", ba:"ru", be:"by", bg:"bg", bi:"vu", bm:"ml", bn:"bd", bo:"cn", br:"fr", bs:"ba", ca:"es", ce:"ru", ch:"gu", co:"fr", cr:"ca", cs:"cz", cv:"ru", cy:"gb", da:"dk", de:"de", dv:"mv", dz:"bt", ee:"gh", el:"gr", en:"us", es:"es", et:"ee", eu:"es", fa:"ir", ff:"sn", fi:"fi", fj:"fj", fo:"fo", fr:"fr", fy:"nl", ga:"ie", gd:"gb", gl:"es", gn:"py", gu:"in", gv:"gb", ha:"ng", 
      he:"il", hi:"in", ho:"pg", hr:"hr", ht:"ht", hu:"hu", hy:"am", ia:"fr", id:"id", ig:"ng", ii:"cn", ik:"us", "in":"id", is:"is", it:"it", iu:"ca", iw:"il", ja:"jp", ji:"ua", jv:"id", jw:"id", ka:"ge", kg:"cd", ki:"ke", kj:"na", kk:"kz", kl:"gl", km:"kh", kn:"in", ko:"kr", ks:"in", ku:"tr", kv:"ru", kw:"gb", ky:"kg", la:"va", lb:"lu", lg:"ug", li:"nl", ln:"cd", lo:"la", lt:"lt", lu:"cd", lv:"lv", mg:"mg", mh:"mh", mi:"nz", mk:"mk", ml:"in", mn:"mn", mo:"ro", mr:"in", ms:"my", mt:"mt", my:"mm", 
      na:"nr", nb:"no", nd:"zw", ne:"np", ng:"na", nl:"nl", nn:"no", no:"no", nr:"za", nv:"us", ny:"mw", oc:"fr", om:"et", or:"in", os:"ge", pa:"in", pl:"pl", ps:"af", pt:"br", qu:"pe", rm:"ch", rn:"bi", ro:"ro", ru:"ru", rw:"rw", sa:"in", sd:"in", se:"no", sg:"cf", si:"lk", sk:"sk", sl:"si", sm:"ws", sn:"zw", so:"so", sq:"al", sr:"rs", ss:"za", st:"za", su:"id", sv:"se", sw:"tz", ta:"in", te:"in", tg:"tj", th:"th", ti:"et", tk:"tm", tl:"ph", tn:"za", to:"to", tr:"tr", ts:"za", tt:"ru", ty:"pf", 
      ug:"cn", uk:"ua", ur:"pk", uz:"uz", ve:"za", vi:"vn", wa:"be", wo:"sn", xh:"za", yi:"il", yo:"ng", za:"cn", zh:"cn", zu:"za", ace:"id", ady:"ru", agq:"cm", alt:"ru", amo:"ng", asa:"tz", ast:"es", awa:"in", bal:"pk", ban:"id", bas:"cm", bax:"cm", bbc:"id", bem:"zm", bez:"tz", bfq:"in", bft:"pk", bfy:"in", bhb:"in", bho:"in", bik:"ph", bin:"ng", bjj:"in", bku:"ph", bqv:"ci", bra:"in", brx:"in", bss:"cm", btv:"pk", bua:"ru", buc:"yt", bug:"id", bya:"id", byn:"er", cch:"ng", ccp:"in", ceb:"ph", 
      cgg:"ug", chk:"fm", chm:"ru", chp:"ca", chr:"us", cja:"kh", cjm:"vn", ckb:"iq", crk:"ca", csb:"pl", dar:"ru", dav:"ke", den:"ca", dgr:"ca", dje:"ne", doi:"in", dsb:"de", dua:"cm", dyo:"sn", dyu:"bf", ebu:"ke", efi:"ng", ewo:"cm", fan:"gq", fil:"ph", fon:"bj", fur:"it", gaa:"gh", gag:"md", gbm:"in", gcr:"gf", gez:"et", gil:"ki", gon:"in", gor:"id", grt:"in", gsw:"ch", guz:"ke", gwi:"ca", haw:"us", hil:"ph", hne:"in", hnn:"ph", hoc:"in", hoj:"in", ibb:"ng", ilo:"ph", inh:"ru", jgo:"cm", jmc:"tz", 
      kaa:"uz", kab:"dz", kaj:"ng", kam:"ke", kbd:"ru", kcg:"ng", kde:"tz", kdt:"th", kea:"cv", ken:"cm", kfo:"ci", kfr:"in", kha:"in", khb:"cn", khq:"ml", kht:"in", kkj:"cm", kln:"ke", kmb:"ao", koi:"ru", kok:"in", kos:"fm", kpe:"lr", krc:"ru", kri:"sl", krl:"ru", kru:"in", ksb:"tz", ksf:"cm", ksh:"de", kum:"ru", lag:"tz", lah:"pk", lbe:"ru", lcp:"cn", lep:"in", lez:"ru", lif:"np", lis:"cn", lki:"ir", lmn:"in", lol:"cd", lua:"cd", luo:"ke", luy:"ke", lwl:"th", mad:"id", mag:"in", mai:"in", mak:"id", 
      man:"gn", mas:"ke", mdf:"ru", mdh:"ph", mdr:"id", men:"sl", mer:"ke", mfe:"mu", mgh:"mz", mgo:"cm", min:"id", mni:"in", mnk:"gm", mnw:"mm", mos:"bf", mua:"cm", mwr:"in", myv:"ru", nap:"it", naq:"na", nds:"de", "new":"np", niu:"nu", nmg:"cm", nnh:"cm", nod:"th", nso:"za", nus:"sd", nym:"tz", nyn:"ug", pag:"ph", pam:"ph", pap:"bq", pau:"pw", pon:"fm", prd:"ir", raj:"in", rcf:"re", rej:"id", rjs:"np", rkt:"in", rof:"tz", rwk:"tz", saf:"gh", sah:"ru", saq:"ke", sas:"id", sat:"in", saz:"in", sbp:"tz", 
      scn:"it", sco:"gb", sdh:"ir", seh:"mz", ses:"ml", shi:"ma", shn:"mm", sid:"et", sma:"se", smj:"se", smn:"fi", sms:"fi", snk:"ml", srn:"sr", srr:"sn", ssy:"er", suk:"tz", sus:"gn", swb:"yt", swc:"cd", syl:"bd", syr:"sy", tbw:"ph", tcy:"in", tdd:"cn", tem:"sl", teo:"ug", tet:"tl", tig:"er", tiv:"ng", tkl:"tk", tmh:"ne", tpi:"pg", trv:"tw", tsg:"ph", tts:"th", tum:"mw", tvl:"tv", twq:"ne", tyv:"ru", tzm:"ma", udm:"ru", uli:"fm", umb:"ao", unr:"in", unx:"in", vai:"lr", vun:"tz", wae:"ch", wal:"et", 
      war:"ph", xog:"ug", xsr:"np", yao:"mz", yap:"fm", yav:"cm", zza:"tr"}[g[0]];
      return b
    };
    l.getWeekend = function(g) {
      var b = l._region(g);
      g = {"in":0, af:4, dz:4, ir:4, om:4, sa:4, ye:4, ae:5, bh:5, eg:5, il:5, iq:5, jo:5, kw:5, ly:5, ma:5, qa:5, sd:5, sy:5, tn:5}[b];
      b = {af:5, dz:5, ir:5, om:5, sa:5, ye:5, ae:6, bh:5, eg:6, il:6, iq:6, jo:6, kw:6, ly:6, ma:6, qa:6, sd:6, sy:6, tn:6}[b];
      void 0 === g && (g = 6);
      void 0 === b && (b = 0);
      return{start:g, end:b}
    };
    return l
  })
}, "dojo/i18n":function() {
  define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "), function(f, m, l, g, b, e, k, d, a) {
    l.add("dojo-preload-i18n-Api", 1);
    k = f.i18n = {};
    var c = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, h = function(a, c, h, b) {
      var d = [h + b];
      c = c.split("-");
      for(var e = "", p = 0;p < c.length;p++) {
        if(e += (e ? "-" : "") + c[p], !a || a[e]) {
          d.push(h + e + "/" + b), d.specificity = e
        }
      }
      return d
    }, p = {}, s = function(a, c, h) {
      h = h ? h.toLowerCase() : f.locale;
      a = a.replace(/\./g, "/");
      c = c.replace(/\./g, "/");
      return/root/i.test(h) ? a + "/nls/" + c : a + "/nls/" + h + "/" + c
    }, n = f.getL10nName = function(c, h, b) {
      return a.id + "!" + s(c, h, b)
    }, u = function(a, c, b, d, r, q) {
      a([c], function(n) {
        var s = e.clone(n.root || n.ROOT), k = h(!n._v1x && n, r, b, d);
        a(k, function() {
          for(var a = 1;a < k.length;a++) {
            s = e.mixin(e.clone(s), arguments[a])
          }
          p[c + "/" + r] = s;
          s.$locale = k.specificity;
          q()
        })
      })
    }, t = function(a) {
      var c = b.extraLocale || [], c = e.isArray(c) ? c : [c];
      c.push(a);
      return c
    }, q = function(a, h, b) {
      var r = c.exec(a), q = r[1] + "/", n = r[5] || r[4], s = q + n, k = (r = r[5] && r[4]) || f.locale || "", m = s + "/" + k, r = r ? [k] : t(k), y = r.length, B = function() {
        --y || b(e.delegate(p[m]))
      }, k = a.split("*"), z = "preload" == k[1];
      if(l("dojo-preload-i18n-Api")) {
        z && (p[a] || (p[a] = 1, w(k[2], d.parse(k[3]), 1, h)), b(1));
        if(!(k = z)) {
          v && x.push([a, h, b]), k = v && !p[m]
        }
        if(k) {
          return
        }
      }else {
        if(z) {
          b(1);
          return
        }
      }
      g.forEach(r, function(a) {
        var c = s + "/" + a;
        l("dojo-preload-i18n-Api") && G(c);
        p[c] ? B() : u(h, s, q, n, a, B)
      })
    };
    if(l("dojo-unit-tests")) {
      var r = k.unitTests = []
    }
    l("dojo-preload-i18n-Api");
    var y = k.normalizeLocale = function(a) {
      a = a ? a.toLowerCase() : f.locale;
      return"root" == a ? "ROOT" : a
    }, v = 0, x = [], w = k._preloadLocalizations = function(a, c, h, b) {
      function d(a, c) {
        b([a], c)
      }
      function r(a, c) {
        for(var h = a.split("-");h.length;) {
          if(c(h.join("-"))) {
            return
          }
          h.pop()
        }
        c("ROOT")
      }
      function n() {
        for(--v;!v && x.length;) {
          q.apply(null, x.shift())
        }
      }
      function s(h) {
        h = y(h);
        r(h, function(q) {
          if(0 <= g.indexOf(c, q)) {
            var s = a.replace(/\./g, "/") + "_" + q;
            v++;
            d(s, function(a) {
              for(var c in a) {
                var d = a[c], s = c.match(/(.+)\/([^\/]+)$/), k;
                if(s && (k = s[2], s = s[1] + "/", d._localized)) {
                  var g;
                  if("ROOT" === q) {
                    var f = g = d._localized;
                    delete d._localized;
                    f.root = d;
                    p[m.toAbsMid(c)] = f
                  }else {
                    g = d._localized, p[m.toAbsMid(s + k + "/" + q)] = d
                  }
                  q !== h && function(a, c, d, q) {
                    var s = [], k = [];
                    r(h, function(h) {
                      q[h] && (s.push(m.toAbsMid(a + h + "/" + c)), k.push(m.toAbsMid(a + c + "/" + h)))
                    });
                    s.length ? (v++, b(s, function() {
                      for(var b = s.length - 1;0 <= b;b--) {
                        d = e.mixin(e.clone(d), arguments[b]), p[k[b]] = d
                      }
                      p[m.toAbsMid(a + c + "/" + h)] = e.clone(d);
                      n()
                    })) : p[m.toAbsMid(a + c + "/" + h)] = d
                  }(s, k, d, g)
                }
              }
              n()
            });
            return!0
          }
          return!1
        })
      }
      b = b || m;
      s();
      g.forEach(f.config.extraLocale, s)
    }, G = function() {
    }, B = {}, G = function(a) {
      for(var c, h = a.split("/"), b = f.global[h[0]], d = 1;b && d < h.length - 1;b = b[h[d++]]) {
      }
      b && ((c = b[h[d]]) || (c = b[h[d].replace(/-/g, "_")]), c && (p[a] = c));
      return c
    };
    k.getLocalization = function(a, c, h) {
      var b;
      a = s(a, c, h);
      q(a, m, function(a) {
        b = a
      });
      return b
    };
    l("dojo-unit-tests") && r.push(function(a) {
      a.register("tests.i18n.unit", function(a) {
        var c;
        c = (void 0)("{prop:1}", G, "nonsense", B);
        a.is({prop:1}, c);
        a.is(void 0, c[1]);
        c = (void 0)("({prop:1})", G, "nonsense", B);
        a.is({prop:1}, c);
        a.is(void 0, c[1]);
        c = (void 0)("{'prop-x':1}", G, "nonsense", B);
        a.is({"prop-x":1}, c);
        a.is(void 0, c[1]);
        c = (void 0)("({'prop-x':1})", G, "nonsense", B);
        a.is({"prop-x":1}, c);
        a.is(void 0, c[1]);
        c = (void 0)("define({'prop-x':1})", G, "nonsense", B);
        a.is(B, c);
        a.is({"prop-x":1}, B.result);
        c = (void 0)("define('some/module', {'prop-x':1})", G, "nonsense", B);
        a.is(B, c);
        a.is({"prop-x":1}, B.result);
        c = (void 0)("this is total nonsense and should throw an error", G, "nonsense", B);
        a.is(c instanceof Error, !0)
      })
    });
    return e.mixin(k, {dynamic:!0, normalize:function(a, c) {
      return/^\./.test(a) ? c(a) : a
    }, load:q, cache:p, getL10nName:n})
  })
}, "dojo/_base/xhr":function() {
  define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t) {
    f._xhrObj = u._create;
    var q = f.config;
    f.objectToQuery = g.objectToQuery;
    f.queryToObject = g.queryToObject;
    f.fieldToObject = e.fieldToObject;
    f.formToObject = e.toObject;
    f.formToQuery = e.toQuery;
    f.formToJson = e.toJson;
    f._blockAsync = !1;
    var r = f._contentHandlers = f.contentHandlers = {text:function(a) {
      return a.responseText
    }, json:function(c) {
      return a.fromJson(c.responseText || null)
    }, "json-comment-filtered":function(c) {
      c = c.responseText;
      var h = c.indexOf("/*"), b = c.lastIndexOf("*/");
      if(-1 == h || -1 == b) {
        throw Error("JSON was not comment filtered");
      }
      return a.fromJson(c.substring(h + 2, b))
    }, javascript:function(a) {
      return f.eval(a.responseText)
    }, xml:function(a) {
      var c = a.responseXML;
      c && (m("dom-qsa2.1") && !c.querySelectorAll && m("dom-parser")) && (c = (new DOMParser).parseFromString(a.responseText, "application/xml"));
      if(m("ie") && (!c || !c.documentElement)) {
        var b = function(a) {
          return"MSXML" + a + ".DOMDocument"
        }, b = ["Microsoft.XMLDOM", b(6), b(4), b(3), b(2)];
        h.some(b, function(h) {
          try {
            var b = new ActiveXObject(h);
            b.async = !1;
            b.loadXML(a.responseText);
            c = b
          }catch(d) {
            return!1
          }
          return!0
        })
      }
      return c
    }, "json-comment-optional":function(a) {
      return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? r["json-comment-filtered"](a) : r.json(a)
    }};
    f._ioSetArgs = function(a, h, d, p) {
      var r = {args:a, url:a.url}, s = null;
      if(a.form) {
        var s = b.byId(a.form), n = s.getAttributeNode("action");
        r.url = r.url || (n ? n.value : null);
        s = e.toObject(s)
      }
      n = [{}];
      s && n.push(s);
      a.content && n.push(a.content);
      a.preventCache && n.push({"dojo.preventCache":(new Date).valueOf()});
      r.query = g.objectToQuery(c.mixin.apply(null, n));
      r.handleAs = a.handleAs || "text";
      var t = new k(function(a) {
        a.canceled = !0;
        h && h(a);
        var c = a.ioArgs.error;
        c || (c = Error("request cancelled"), c.dojoType = "cancel", a.ioArgs.error = c);
        return c
      });
      t.addCallback(d);
      var l = a.load;
      l && c.isFunction(l) && t.addCallback(function(c) {
        return l.call(a, c, r)
      });
      var u = a.error;
      u && c.isFunction(u) && t.addErrback(function(c) {
        return u.call(a, c, r)
      });
      var m = a.handle;
      m && c.isFunction(m) && t.addBoth(function(c) {
        return m.call(a, c, r)
      });
      t.addErrback(function(a) {
        return p(a, t)
      });
      q.ioPublish && (f.publish && !1 !== r.args.ioPublish) && (t.addCallbacks(function(a) {
        f.publish("/dojo/io/load", [t, a]);
        return a
      }, function(a) {
        f.publish("/dojo/io/error", [t, a]);
        return a
      }), t.addBoth(function(a) {
        f.publish("/dojo/io/done", [t, a]);
        return a
      }));
      t.ioArgs = r;
      return t
    };
    var y = function(a) {
      a = r[a.ioArgs.handleAs](a.ioArgs.xhr);
      return void 0 === a ? null : a
    }, v = function(a, c) {
      c.ioArgs.args.failOk || console.error(a);
      return a
    }, x = function(a) {
      0 >= w && (w = 0, q.ioPublish && (f.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish)) && f.publish("/dojo/io/stop"))
    }, w = 0;
    s.after(n, "_onAction", function() {
      w -= 1
    });
    s.after(n, "_onInFlight", x);
    f._ioCancelAll = n.cancelAll;
    f._ioNotifyStart = function(a) {
      q.ioPublish && (f.publish && !1 !== a.ioArgs.args.ioPublish) && (w || f.publish("/dojo/io/start"), w += 1, f.publish("/dojo/io/send", [a]))
    };
    f._ioWatch = function(a, h, b, d) {
      a.ioArgs.options = a.ioArgs.args;
      c.mixin(a, {response:a.ioArgs, isValid:function(c) {
        return h(a)
      }, isReady:function(c) {
        return b(a)
      }, handleResponse:function(c) {
        return d(a)
      }});
      n(a);
      x(a)
    };
    f._ioAddQueryToUrl = function(a) {
      a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null)
    };
    f.xhr = function(a, c, h) {
      var b, d = f._ioSetArgs(c, function(a) {
        b && b.cancel()
      }, y, v), e = d.ioArgs;
      "postData" in c ? e.query = c.postData : "putData" in c ? e.query = c.putData : "rawBody" in c ? e.query = c.rawBody : (2 < arguments.length && !h || -1 === "POST|PUT".indexOf(a.toUpperCase())) && f._ioAddQueryToUrl(e);
      var p = {method:a, handleAs:"text", timeout:c.timeout, withCredentials:c.withCredentials, ioArgs:e};
      "undefined" !== typeof c.headers && (p.headers = c.headers);
      "undefined" !== typeof c.contentType && (p.headers || (p.headers = {}), p.headers["Content-Type"] = c.contentType);
      "undefined" !== typeof e.query && (p.data = e.query);
      "undefined" !== typeof c.sync && (p.sync = c.sync);
      f._ioNotifyStart(d);
      try {
        b = u(e.url, p, !0)
      }catch(r) {
        return d.cancel(), d
      }
      d.ioArgs.xhr = b.response.xhr;
      b.then(function() {
        d.resolve(d)
      }).otherwise(function(a) {
        e.error = a;
        a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
        d.reject(a)
      });
      return d
    };
    f.xhrGet = function(a) {
      return f.xhr("GET", a)
    };
    f.rawXhrPost = f.xhrPost = function(a) {
      return f.xhr("POST", a, !0)
    };
    f.rawXhrPut = f.xhrPut = function(a) {
      return f.xhr("PUT", a, !0)
    };
    f.xhrDelete = function(a) {
      return f.xhr("DELETE", a)
    };
    f._isDocumentOk = function(a) {
      return t.checkStatus(a.status)
    };
    f._getText = function(a) {
      var c;
      f.xhrGet({url:a, sync:!0, load:function(a) {
        c = a
      }});
      return c
    };
    c.mixin(f.xhr, {_xhrObj:f._xhrObj, fieldToObject:e.fieldToObject, formToObject:e.toObject, objectToQuery:g.objectToQuery, formToQuery:e.toQuery, formToJson:e.toJson, queryToObject:g.queryToObject, contentHandlers:r, _ioSetArgs:f._ioSetArgs, _ioCancelAll:f._ioCancelAll, _ioNotifyStart:f._ioNotifyStart, _ioWatch:f._ioWatch, _ioAddQueryToUrl:f._ioAddQueryToUrl, _isDocumentOk:f._isDocumentOk, _getText:f._getText, get:f.xhrGet, post:f.xhrPost, put:f.xhrPut, del:f.xhrDelete});
    return f.xhr
  })
}, "dojo/io-query":function() {
  define(["./_base/lang"], function(f) {
    var m = {};
    return{objectToQuery:function(l) {
      var g = encodeURIComponent, b = [], e;
      for(e in l) {
        var k = l[e];
        if(k != m[e]) {
          var d = g(e) + "\x3d";
          if(f.isArray(k)) {
            for(var a = 0, c = k.length;a < c;++a) {
              b.push(d + g(k[a]))
            }
          }else {
            b.push(d + g(k))
          }
        }
      }
      return b.join("\x26")
    }, queryToObject:function(l) {
      var g = decodeURIComponent;
      l = l.split("\x26");
      for(var b = {}, e, k, d = 0, a = l.length;d < a;++d) {
        if(k = l[d], k.length) {
          var c = k.indexOf("\x3d");
          0 > c ? (e = g(k), k = "") : (e = g(k.slice(0, c)), k = g(k.slice(c + 1)));
          "string" == typeof b[e] && (b[e] = [b[e]]);
          f.isArray(b[e]) ? b[e].push(k) : b[e] = k
        }
      }
      return b
    }}
  })
}, "dojo/dom-form":function() {
  define(["./_base/lang", "./dom", "./io-query", "./json"], function(f, m, l, g) {
    var b = {fieldToObject:function(b) {
      var k = null;
      if(b = m.byId(b)) {
        var d = b.name, a = (b.type || "").toLowerCase();
        if(d && a && !b.disabled) {
          if("radio" == a || "checkbox" == a) {
            b.checked && (k = b.value)
          }else {
            if(b.multiple) {
              k = [];
              for(b = [b.firstChild];b.length;) {
                for(d = b.pop();d;d = d.nextSibling) {
                  if(1 == d.nodeType && "option" == d.tagName.toLowerCase()) {
                    d.selected && k.push(d.value)
                  }else {
                    d.nextSibling && b.push(d.nextSibling);
                    d.firstChild && b.push(d.firstChild);
                    break
                  }
                }
              }
            }else {
              k = b.value
            }
          }
        }
      }
      return k
    }, toObject:function(e) {
      var k = {};
      e = m.byId(e).elements;
      for(var d = 0, a = e.length;d < a;++d) {
        var c = e[d], h = c.name, p = (c.type || "").toLowerCase();
        if(h && p && 0 > "file|submit|image|reset|button".indexOf(p) && !c.disabled) {
          var s = k, n = h, c = b.fieldToObject(c);
          if(null !== c) {
            var g = s[n];
            "string" == typeof g ? s[n] = [g, c] : f.isArray(g) ? g.push(c) : s[n] = c
          }
          "image" == p && (k[h + ".x"] = k[h + ".y"] = k[h].x = k[h].y = 0)
        }
      }
      return k
    }, toQuery:function(e) {
      return l.objectToQuery(b.toObject(e))
    }, toJson:function(e, k) {
      return g.stringify(b.toObject(e), null, k ? 4 : 0)
    }};
    return b
  })
}, "dojo/json":function() {
  define(["./has"], function(f) {
    var m = "undefined" != typeof JSON;
    f.add("json-parse", m);
    f.add("json-stringify", m && '{"a":1}' == JSON.stringify({a:0}, function(g, b) {
      return b || 1
    }));
    if(f("json-stringify")) {
      return JSON
    }
    var l = function(g) {
      return('"' + g.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
    };
    return{parse:f("json-parse") ? JSON.parse : function(g, b) {
      if(b && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(g)) {
        throw new SyntaxError("Invalid characters in JSON");
      }
      return eval("(" + g + ")")
    }, stringify:function(g, b, e) {
      function k(a, c, h) {
        b && (a = b(h, a));
        var p;
        p = typeof a;
        if("number" == p) {
          return isFinite(a) ? a + "" : "null"
        }
        if("boolean" == p) {
          return a + ""
        }
        if(null === a) {
          return"null"
        }
        if("string" == typeof a) {
          return l(a)
        }
        if("function" == p || "undefined" == p) {
          return d
        }
        if("function" == typeof a.toJSON) {
          return k(a.toJSON(h), c, h)
        }
        if(a instanceof Date) {
          return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(c, b, h) {
            c = a["getUTC" + b]() + (h ? 1 : 0);
            return 10 > c ? "0" + c : c
          })
        }
        if(a.valueOf() !== a) {
          return k(a.valueOf(), c, h)
        }
        var s = e ? c + e : "", n = e ? " " : "", g = e ? "\n" : "";
        if(a instanceof Array) {
          var n = a.length, f = [];
          for(h = 0;h < n;h++) {
            p = k(a[h], s, h), "string" != typeof p && (p = "null"), f.push(g + s + p)
          }
          return"[" + f.join(",") + g + c + "]"
        }
        f = [];
        for(h in a) {
          var q;
          if(a.hasOwnProperty(h)) {
            if("number" == typeof h) {
              q = '"' + h + '"'
            }else {
              if("string" == typeof h) {
                q = l(h)
              }else {
                continue
              }
            }
            p = k(a[h], s, h);
            "string" == typeof p && f.push(g + s + q + ":" + n + p)
          }
        }
        return"{" + f.join(",") + g + c + "}"
      }
      var d;
      "string" == typeof b && (e = b, b = null);
      return k(g, "", "")
    }}
  })
}, "dojo/_base/Deferred":function() {
  define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(f, m, l, g, b, e, k) {
    var d = function() {
    }, a = Object.freeze || function() {
    }, c = f.Deferred = function(h) {
      function p(a) {
        if(k) {
          throw Error("This deferred has already been resolved");
        }
        n = a;
        k = !0;
        s()
      }
      function s() {
        for(var a;!a && v;) {
          var c = v;
          v = v.next;
          if(a = c.progress == d) {
            k = !1
          }
          var h = r ? c.error : c.resolved;
          b("config-useDeferredInstrumentation") && r && m.instrumentRejected && m.instrumentRejected(n, !!h);
          if(h) {
            try {
              var p = h(n);
              p && "function" === typeof p.then ? p.then(e.hitch(c.deferred, "resolve"), e.hitch(c.deferred, "reject"), e.hitch(c.deferred, "progress")) : (h = a && void 0 === p, a && !h && (r = p instanceof Error), c.deferred[h && r ? "reject" : "resolve"](h ? n : p))
            }catch(q) {
              c.deferred.reject(q)
            }
          }else {
            r ? c.deferred.reject(n) : c.deferred.resolve(n)
          }
        }
      }
      var n, k, f, q, r, y, v, x = this.promise = new l;
      this.isResolved = x.isResolved = function() {
        return 0 == q
      };
      this.isRejected = x.isRejected = function() {
        return 1 == q
      };
      this.isFulfilled = x.isFulfilled = function() {
        return 0 <= q
      };
      this.isCanceled = x.isCanceled = function() {
        return f
      };
      this.resolve = this.callback = function(a) {
        this.fired = q = 0;
        this.results = [a, null];
        p(a)
      };
      this.reject = this.errback = function(a) {
        r = !0;
        this.fired = q = 1;
        b("config-useDeferredInstrumentation") && m.instrumentRejected && m.instrumentRejected(a, !!v);
        p(a);
        this.results = [null, a]
      };
      this.progress = function(a) {
        for(var c = v;c;) {
          var h = c.progress;
          h && h(a);
          c = c.next
        }
      };
      this.addCallbacks = function(a, c) {
        this.then(a, c, d);
        return this
      };
      x.then = this.then = function(a, h, b) {
        var e = b == d ? this : new c(x.cancel);
        a = {resolved:a, error:h, progress:b, deferred:e};
        v ? y = y.next = a : v = y = a;
        k && s();
        return e.promise
      };
      var w = this;
      x.cancel = this.cancel = function() {
        if(!k) {
          var a = h && h(w);
          k || (a instanceof Error || (a = new g(a)), a.log = !1, w.reject(a))
        }
        f = !0
      };
      a(x)
    };
    e.extend(c, {addCallback:function(a) {
      return this.addCallbacks(e.hitch.apply(f, arguments))
    }, addErrback:function(a) {
      return this.addCallbacks(null, e.hitch.apply(f, arguments))
    }, addBoth:function(a) {
      var c = e.hitch.apply(f, arguments);
      return this.addCallbacks(c, c)
    }, fired:-1});
    c.when = f.when = k;
    return c
  })
}, "dojo/_base/json":function() {
  define(["./kernel", "../json"], function(f, m) {
    f.fromJson = function(f) {
      return eval("(" + f + ")")
    };
    f._escapeString = m.stringify;
    f.toJsonIndentStr = "\t";
    f.toJson = function(l, g) {
      return m.stringify(l, function(b, e) {
        if(e) {
          var k = e.__json__ || e.json;
          if("function" == typeof k) {
            return k.call(e)
          }
        }
        return e
      }, g && f.toJsonIndentStr)
    };
    return f
  })
}, "dojo/request/watch":function() {
  define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(f, m, l, g, b, e) {
    function k() {
      for(var h = +new Date, b = 0, e;b < c.length && (e = c[b]);b++) {
        var n = e.response, k = n.options;
        if(e.isCanceled && e.isCanceled() || e.isValid && !e.isValid(n)) {
          c.splice(b--, 1), d._onAction && d._onAction()
        }else {
          if(e.isReady && e.isReady(n)) {
            c.splice(b--, 1), e.handleResponse(n), d._onAction && d._onAction()
          }else {
            if(e.startTime && e.startTime + (k.timeout || 0) < h) {
              c.splice(b--, 1), e.cancel(new m("Timeout exceeded", n)), d._onAction && d._onAction()
            }
          }
        }
      }
      d._onInFlight && d._onInFlight(e);
      c.length || (clearInterval(a), a = null)
    }
    function d(b) {
      b.response.options.timeout && (b.startTime = +new Date);
      b.isFulfilled() || (c.push(b), a || (a = setInterval(k, 50)), b.response.options.sync && k())
    }
    var a = null, c = [];
    d.cancelAll = function() {
      try {
        g.forEach(c, function(a) {
          try {
            a.cancel(new l("All requests canceled."))
          }catch(c) {
          }
        })
      }catch(a) {
      }
    };
    b && (e && b.doc.attachEvent) && e(b.global, "unload", function() {
      d.cancelAll()
    });
    return d
  })
}, "dojo/request/util":function() {
  define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(f, m, l, g, b, e, k, d) {
    function a(a) {
      return h(a)
    }
    function c(a) {
      return void 0 !== a.data ? a.data : a.text
    }
    f.deepCopy = function(a, c) {
      for(var b in c) {
        var h = a[b], d = c[b];
        h !== d && (h && "object" === typeof h && d && "object" === typeof d ? f.deepCopy(h, d) : a[b] = d)
      }
      return a
    };
    f.deepCreate = function(a, c) {
      c = c || {};
      var b = k.delegate(a), h, d;
      for(h in a) {
        (d = a[h]) && "object" === typeof d && (b[h] = f.deepCreate(d, c[h]))
      }
      return f.deepCopy(b, c)
    };
    var h = Object.freeze || function(a) {
      return a
    };
    f.deferred = function(b, e, n, u, t, q) {
      var r = new g(function(a) {
        e && e(r, b);
        return!a || !(a instanceof m) && !(a instanceof l) ? new l("Request canceled", b) : a
      });
      r.response = b;
      r.isValid = n;
      r.isReady = u;
      r.handleResponse = t;
      n = r.then(a).otherwise(function(a) {
        a.response = b;
        throw a;
      });
      f.notify && n.then(k.hitch(f.notify, "emit", "load"), k.hitch(f.notify, "emit", "error"));
      u = n.then(c);
      t = new d;
      for(var y in u) {
        u.hasOwnProperty(y) && (t[y] = u[y])
      }
      t.response = n;
      h(t);
      q && r.then(function(a) {
        q.call(r, a)
      }, function(a) {
        q.call(r, b, a)
      });
      r.promise = t;
      r.then = t.then;
      return r
    };
    f.addCommonMethods = function(a, c) {
      e.forEach(c || ["GET", "POST", "PUT", "DELETE"], function(c) {
        a[("DELETE" === c ? "DEL" : c).toLowerCase()] = function(b, h) {
          h = k.delegate(h || {});
          h.method = c;
          return a(b, h)
        }
      })
    };
    f.parseArgs = function(a, c, h) {
      var d = c.data, e = c.query;
      d && !h && "object" === typeof d && (c.data = b.objectToQuery(d));
      e ? ("object" === typeof e && (e = b.objectToQuery(e)), c.preventCache && (e += (e ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : c.preventCache && (e = "request.preventCache\x3d" + +new Date);
      a && e && (a += (~a.indexOf("?") ? "\x26" : "?") + e);
      return{url:a, options:c, getHeader:function(a) {
        return null
      }}
    };
    f.checkStatus = function(a) {
      a = a || 0;
      return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
    }
  })
}, "dojo/errors/RequestError":function() {
  define(["./create"], function(f) {
    return f("RequestError", function(f, l) {
      this.response = l
    })
  })
}, "dojo/errors/RequestTimeoutError":function() {
  define(["./create", "./RequestError"], function(f, m) {
    return f("RequestTimeoutError", null, m, {dojoType:"timeout"})
  })
}, "dojo/request/xhr":function() {
  define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(f, m, l, g, b) {
    function e(a, c) {
      var b = a.xhr;
      a.status = a.xhr.status;
      try {
        a.text = b.responseText
      }catch(h) {
      }
      "xml" === a.options.handleAs && (a.data = b.responseXML);
      if(!c) {
        try {
          l(a)
        }catch(d) {
          c = d
        }
      }
      c ? this.reject(c) : g.checkStatus(b.status) ? this.resolve(a) : (c = new f("Unable to load " + a.url + " status: " + b.status, a), this.reject(c))
    }
    function k(a) {
      return this.xhr.getResponseHeader(a)
    }
    function d(r, q, t) {
      var l = b("native-formdata") && q && q.data && q.data instanceof FormData, w = g.parseArgs(r, g.deepCreate(u, q), l);
      r = w.url;
      q = w.options;
      var G, B = g.deferred(w, s, c, h, e, function() {
        G && G()
      }), D = w.xhr = d._create();
      if(!D) {
        return B.cancel(new f("XHR was not created")), t ? B : B.promise
      }
      w.getHeader = k;
      p && (G = p(D, B, w));
      var I = "undefined" === typeof q.data ? null : q.data, L = !q.sync, O = q.method;
      try {
        D.open(O, r, L, q.user || n, q.password || n);
        q.withCredentials && (D.withCredentials = q.withCredentials);
        b("native-response-type") && q.handleAs in a && (D.responseType = a[q.handleAs]);
        var H = q.headers;
        r = l ? !1 : "application/x-www-form-urlencoded";
        if(H) {
          for(var P in H) {
            "content-type" === P.toLowerCase() ? r = H[P] : H[P] && D.setRequestHeader(P, H[P])
          }
        }
        r && !1 !== r && D.setRequestHeader("Content-Type", r);
        (!H || !("X-Requested-With" in H)) && D.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        g.notify && g.notify.emit("send", w, B.promise.cancel);
        D.send(I)
      }catch(U) {
        B.reject(U)
      }
      m(B);
      D = null;
      return t ? B : B.promise
    }
    b.add("native-xhr", function() {
      return"undefined" !== typeof XMLHttpRequest
    });
    b.add("dojo-force-activex-xhr", function() {
      return b("activex") && "file:" === window.location.protocol
    });
    b.add("native-xhr2", function() {
      if(b("native-xhr") && !b("dojo-force-activex-xhr")) {
        var a = new XMLHttpRequest;
        return"undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload)
      }
    });
    b.add("native-formdata", function() {
      return"undefined" !== typeof FormData
    });
    b.add("native-response-type", function() {
      return b("native-xhr") && "undefined" !== typeof(new XMLHttpRequest).responseType
    });
    b.add("native-xhr2-blob", function() {
      if(b("native-response-type")) {
        var a = new XMLHttpRequest;
        a.open("GET", "/", !0);
        a.responseType = "blob";
        var c = a.responseType;
        a.abort();
        return"blob" === c
      }
    });
    var a = {blob:b("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, c, h, p, s;
    b("native-xhr2") ? (c = function(a) {
      return!this.isFulfilled()
    }, s = function(a, c) {
      c.xhr.abort()
    }, p = function(a, c, b) {
      function h(a) {
        c.handleResponse(b)
      }
      function d(a) {
        a = new f("Unable to load " + b.url + " status: " + a.target.status, b);
        c.handleResponse(b, a)
      }
      function e(a) {
        a.lengthComputable ? (b.loaded = a.loaded, b.total = a.total, c.progress(b)) : 3 === b.xhr.readyState && (b.loaded = "loaded" in a ? a.loaded : a.position, c.progress(b))
      }
      a.addEventListener("load", h, !1);
      a.addEventListener("error", d, !1);
      a.addEventListener("progress", e, !1);
      return function() {
        a.removeEventListener("load", h, !1);
        a.removeEventListener("error", d, !1);
        a.removeEventListener("progress", e, !1);
        a = null
      }
    }) : (c = function(a) {
      return a.xhr.readyState
    }, h = function(a) {
      return 4 === a.xhr.readyState
    }, s = function(a, c) {
      var b = c.xhr, h = typeof b.abort;
      ("function" === h || "object" === h || "unknown" === h) && b.abort()
    });
    var n, u = {data:null, query:null, sync:!1, method:"GET"};
    d._create = function() {
      throw Error("XMLHTTP not available");
    };
    if(b("native-xhr") && !b("dojo-force-activex-xhr")) {
      d._create = function() {
        return new XMLHttpRequest
      }
    }else {
      if(b("activex")) {
        try {
          new ActiveXObject("Msxml2.XMLHTTP"), d._create = function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
          }
        }catch(t) {
          try {
            new ActiveXObject("Microsoft.XMLHTTP"), d._create = function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
            }
          }catch(q) {
          }
        }
      }
    }
    g.addCommonMethods(d);
    return d
  })
}, "dojo/request/handlers":function() {
  define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(f, m, l, g) {
    function b(a) {
      var b = c[a.options.handleAs];
      a.data = b ? b(a) : a.data || a.text;
      return a
    }
    g.add("activex", "undefined" !== typeof ActiveXObject);
    g.add("dom-parser", function(a) {
      return"DOMParser" in a
    });
    var e;
    if(g("activex")) {
      var k = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], d;
      e = function(a) {
        function c(a) {
          try {
            var h = new ActiveXObject(a);
            h.async = !1;
            h.loadXML(e);
            b = h;
            d = a
          }catch(p) {
            return!1
          }
          return!0
        }
        var b = a.data, e = a.text;
        b && (g("dom-qsa2.1") && !b.querySelectorAll && g("dom-parser")) && (b = (new DOMParser).parseFromString(e, "application/xml"));
        if(!b || !b.documentElement) {
          (!d || !c(d)) && l.some(k, c)
        }
        return b
      }
    }
    var a = function(a) {
      return!g("native-xhr2-blob") && "blob" === a.options.handleAs && "undefined" !== typeof Blob ? new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")}) : a.xhr.response
    }, c = {javascript:function(a) {
      return m.eval(a.text || "")
    }, json:function(a) {
      return f.parse(a.text || null)
    }, xml:e, blob:a, arraybuffer:a, document:a};
    b.register = function(a, b) {
      c[a] = b
    };
    return b
  })
}, "dojo/regexp":function() {
  define(["./_base/kernel", "./_base/lang"], function(f, m) {
    var l = {};
    m.setObject("dojo.regexp", l);
    l.escapeString = function(g, b) {
      return g.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g, function(e) {
        return b && -1 != b.indexOf(e) ? e : "\\" + e
      })
    };
    l.buildGroupRE = function(g, b, e) {
      if(!(g instanceof Array)) {
        return b(g)
      }
      for(var k = [], d = 0;d < g.length;d++) {
        k.push(b(g[d]))
      }
      return l.group(k.join("|"), e)
    };
    l.group = function(g, b) {
      return"(" + (b ? "?:" : "") + g + ")"
    };
    return l
  })
}, "dijit/CalendarLite":function() {
  define("dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u) {
    var t = m("dijit.CalendarLite", [s, n], {templateString:u, dowTemplateString:'\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader" scope\x3d"col"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e${d}\x3c/span\x3e\x3c/th\x3e', dateTemplateString:'\x3ctd class\x3d"dijitReset" role\x3d"gridcell" data-dojo-attach-point\x3d"dateCells"\x3e\x3cspan class\x3d"dijitCalendarDateLabel" data-dojo-attach-point\x3d"dateLabels"\x3e\x3c/span\x3e\x3c/td\x3e', weekTemplateString:'\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e${d}${d}${d}${d}${d}${d}${d}\x3c/tr\x3e', 
    value:new Date(""), datePackage:"", dayWidth:"narrow", tabIndex:"0", currentFocus:new Date, _setSummaryAttr:"gridNode", baseClass:"dijitCalendar dijitCalendarLite", _isValidDate:function(a) {
      return a && !isNaN(a) && "object" == typeof a && a.toString() != this.constructor.prototype.value.toString()
    }, _getValueAttr:function() {
      var a = this._get("value");
      if(a && !isNaN(a)) {
        var c = new this.dateClassObj(a);
        c.setHours(0, 0, 0, 0);
        c.getDate() < a.getDate() && (c = this.dateModule.add(c, "hour", 1));
        return c
      }
      return null
    }, _setValueAttr:function(a, c) {
      "string" == typeof a && (a = e.fromISOString(a));
      a = this._patchDate(a);
      if(this._isValidDate(a) && !this.isDisabledDate(a, this.lang)) {
        if(this._set("value", a), this.set("currentFocus", a), this._markSelectedDates([a]), this._created && (c || "undefined" == typeof c)) {
          this.onChange(this.get("value"))
        }
      }else {
        this._set("value", null), this._markSelectedDates([])
      }
    }, _patchDate:function(a) {
      if(a || 0 === a) {
        a = new this.dateClassObj(a), a.setHours(1, 0, 0, 0)
      }
      return a
    }, _setText:function(a, c) {
      for(;a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      a.appendChild(a.ownerDocument.createTextNode(c))
    }, _populateGrid:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      var a = this._patchDate(a), c = a.getDay(), b = this.dateModule.getDaysInMonth(a), h = this.dateModule.getDaysInMonth(this.dateModule.add(a, "month", -1)), d = new this.dateClassObj, e = l.getFirstDayOfWeek(this.lang);
      e > c && (e -= 7);
      if(!this.summary) {
        var p = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
        this.gridNode.setAttribute("summary", p[a.getMonth()])
      }
      this._date2cell = {};
      f.forEach(this.dateCells, function(p, n) {
        var k = n + e, g = new this.dateClassObj(a), s = "dijitCalendar", f = 0;
        k < c ? (k = h - c + k + 1, f = -1, s += "Previous") : k >= c + b ? (k = k - c - b + 1, f = 1, s += "Next") : (k = k - c + 1, s += "Current");
        f && (g = this.dateModule.add(g, "month", f));
        g.setDate(k);
        this.dateModule.compare(g, d, "date") || (s = "dijitCalendarCurrentDate " + s);
        this.isDisabledDate(g, this.lang) ? (s = "dijitCalendarDisabledDate " + s, p.setAttribute("aria-disabled", "true")) : (s = "dijitCalendarEnabledDate " + s, p.removeAttribute("aria-disabled"), p.setAttribute("aria-selected", "false"));
        (f = this.getClassForDate(g, this.lang)) && (s = f + " " + s);
        p.className = s + "Month dijitCalendarDateTemplate";
        s = g.valueOf();
        this._date2cell[s] = p;
        p.dijitDateValue = s;
        this._setText(this.dateLabels[n], g.getDateLocalized ? g.getDateLocalized(this.lang) : g.getDate())
      }, this)
    }, _populateControls:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      this.monthWidget.set("month", a);
      var c = a.getFullYear() - 1, b = new this.dateClassObj;
      f.forEach(["previous", "current", "next"], function(a) {
        b.setFullYear(c++);
        this._setText(this[a + "YearLabelNode"], this.dateLocaleModule.format(b, {selector:"year", locale:this.lang}))
      }, this)
    }, goToToday:function() {
      this.set("value", new this.dateClassObj)
    }, constructor:function(c) {
      this.dateModule = c.datePackage ? a.getObject(c.datePackage, !1) : g;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateLocaleModule = c.datePackage ? a.getObject(c.datePackage + ".locale", !1) : b
    }, _createMonthWidget:function() {
      return t._MonthWidget({id:this.id + "_mddb", lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, buildRendering:function() {
      var a = this.dowTemplateString, c = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang), b = l.getFirstDayOfWeek(this.lang);
      this.dayCellsHtml = p.substitute([a, a, a, a, a, a, a].join(""), {d:""}, function() {
        return c[b++ % 7]
      });
      a = p.substitute(this.weekTemplateString, {d:this.dateTemplateString});
      this.dateRowsHtml = [a, a, a, a, a, a].join("");
      this.dateCells = [];
      this.dateLabels = [];
      this.inherited(arguments);
      k.setSelectable(this.domNode, !1);
      a = new this.dateClassObj(this.currentFocus);
      this.monthWidget = this._createMonthWidget();
      this.set("currentFocus", a, !1)
    }, postCreate:function() {
      this.inherited(arguments);
      this._connectControls()
    }, _connectControls:function() {
      var b = a.hitch(this, function(b, h, d) {
        this[b].dojoClick = !0;
        return c(this[b], "click", a.hitch(this, function() {
          this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus, h, d))
        }))
      });
      this.own(b("incrementMonth", "month", 1), b("decrementMonth", "month", -1), b("nextYearLabelNode", "year", 1), b("previousYearLabelNode", "year", -1))
    }, _setCurrentFocusAttr:function(a, c) {
      var b = this.currentFocus, d = this._getNodeByDate(b);
      a = this._patchDate(a);
      this._set("currentFocus", a);
      if(!this._date2cell || 0 != this.dateModule.difference(b, a, "month")) {
        this._populateGrid(), this._populateControls(), this._markSelectedDates([this.value])
      }
      b = this._getNodeByDate(a);
      b.setAttribute("tabIndex", this.tabIndex);
      (this.focused || c) && b.focus();
      d && d != b && (h("webkit") ? d.setAttribute("tabIndex", "-1") : d.removeAttribute("tabIndex"))
    }, focus:function() {
      this._setCurrentFocusAttr(this.currentFocus, !0)
    }, _onDayClick:function(a) {
      a.stopPropagation();
      a.preventDefault();
      for(a = a.target;a && !a.dijitDateValue && 0 !== a.dijitDateValue;a = a.parentNode) {
      }
      a && !d.contains(a, "dijitCalendarDisabledDate") && this.set("value", a.dijitDateValue)
    }, _getNodeByDate:function(a) {
      return(a = this._patchDate(a)) && this._date2cell ? this._date2cell[a.valueOf()] : null
    }, _markSelectedDates:function(c) {
      function b(a, c) {
        d.toggle(c, "dijitCalendarSelectedDate", a);
        c.setAttribute("aria-selected", a ? "true" : "false")
      }
      f.forEach(this._selectedCells || [], a.partial(b, !1));
      this._selectedCells = f.filter(f.map(c, this._getNodeByDate, this), function(a) {
        return a
      });
      f.forEach(this._selectedCells, a.partial(b, !0))
    }, onChange:function() {
    }, isDisabledDate:function() {
    }, getClassForDate:function() {
    }});
    t._MonthWidget = m("dijit.CalendarLite._MonthWidget", s, {_setMonthAttr:function(a) {
      var c = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a), b = 6 == h("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + f.map(c, function(a) {
        return"\x3cdiv\x3e" + a + "\x3c/div\x3e"
      }).join("") + "\x3c/div\x3e";
      this.domNode.innerHTML = b + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + c[a.getMonth()] + "\x3c/div\x3e"
    }});
    return t
  })
}, "dijit/_CssStateMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p) {
    m = m("dijit._CssStateMixin", [], {hovering:!1, active:!1, _applyAttributes:function() {
      this.inherited(arguments);
      f.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "), function(a) {
        this.watch(a, e.hitch(this, "_setStateClass"))
      }, this);
      for(var a in this.cssStateNodes || {}) {
        this._trackMouseState(this[a], this.cssStateNodes[a])
      }
      this._trackMouseState(this.domNode, this.baseClass);
      this._setStateClass()
    }, _cssMouseEvent:function(a) {
      if(!this.disabled) {
        switch(a.type) {
          case "mouseover":
          ;
          case "MSPointerOver":
          ;
          case "pointerover":
            this._set("hovering", !0);
            this._set("active", this._mouseDown);
            break;
          case "mouseout":
          ;
          case "MSPointerOut":
          ;
          case "pointerout":
            this._set("hovering", !1);
            this._set("active", !1);
            break;
          case "mousedown":
          ;
          case "touchstart":
          ;
          case "MSPointerDown":
          ;
          case "pointerdown":
          ;
          case "keydown":
            this._set("active", !0);
            break;
          case "mouseup":
          ;
          case "dojotouchend":
          ;
          case "MSPointerUp":
          ;
          case "pointerup":
          ;
          case "keyup":
            this._set("active", !1)
        }
      }
    }, _setStateClass:function() {
      function a(b) {
        c = c.concat(f.map(c, function(a) {
          return a + b
        }), "dijit" + b)
      }
      var c = this.baseClass.split(" ");
      this.isLeftToRight() || a("Rtl");
      var b = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
      this.checked && a(b);
      this.state && a(this.state);
      this.selected && a("Selected");
      this._opened && a("Opened");
      this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
      this.focused && a("Focused");
      var b = this.stateNode || this.domNode, h = {};
      f.forEach(b.className.split(" "), function(a) {
        h[a] = !0
      });
      "_stateClasses" in this && f.forEach(this._stateClasses, function(a) {
        delete h[a]
      });
      f.forEach(c, function(a) {
        h[a] = !0
      });
      var d = [], e;
      for(e in h) {
        d.push(e)
      }
      b.className = d.join(" ");
      this._stateClasses = c
    }, _subnodeCssMouseEvent:function(a, c, b) {
      function h(b) {
        g.toggle(a, c + "Active", b)
      }
      if(!this.disabled && !this.readOnly) {
        switch(b.type) {
          case "mouseover":
          ;
          case "MSPointerOver":
          ;
          case "pointerover":
            g.toggle(a, c + "Hover", !0);
            break;
          case "mouseout":
          ;
          case "MSPointerOut":
          ;
          case "pointerout":
            g.toggle(a, c + "Hover", !1);
            h(!1);
            break;
          case "mousedown":
          ;
          case "touchstart":
          ;
          case "MSPointerDown":
          ;
          case "pointerdown":
          ;
          case "keydown":
            h(!0);
            break;
          case "mouseup":
          ;
          case "MSPointerUp":
          ;
          case "pointerup":
          ;
          case "dojotouchend":
          ;
          case "keyup":
            h(!1);
            break;
          case "focus":
          ;
          case "focusin":
            g.toggle(a, c + "Focused", !0);
            break;
          case "blur":
          ;
          case "focusout":
            g.toggle(a, c + "Focused", !1)
        }
      }
    }, _trackMouseState:function(a, c) {
      a._cssState = c
    }});
    d(function() {
      function b(a, c, h) {
        if(!h || !l.isDescendant(h, c)) {
          for(;c && c != h;c = c.parentNode) {
            if(c._cssState) {
              var d = p.getEnclosingWidget(c);
              d && (c == d.domNode ? d._cssMouseEvent(a) : d._subnodeCssMouseEvent(c, c._cssState, a))
            }
          }
        }
      }
      var d = c.body(), e;
      k(d, a.over, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      k(d, a.out, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      k(d, h.press, function(a) {
        e = a.target;
        b(a, e)
      });
      k(d, h.release, function(a) {
        b(a, e);
        e = null
      });
      k(d, "focusin, focusout", function(a) {
        var c = a.target;
        if(c._cssState && !c.getAttribute("widgetId")) {
          var b = p.getEnclosingWidget(c);
          b && b._subnodeCssMouseEvent(c, c._cssState, a)
        }
      })
    });
    return m
  })
}, "dijit/form/DropDownButton":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/query ../registry ../popup ./Button ../_Container ../_HasDropDown dojo/text!./templates/DropDownButton.html ../a11yclick".split(" "), function(f, m, l, g, b, e, k, d, a) {
    return f("dijit.form.DropDownButton", [e, k, d], {baseClass:"dijitDropDownButton", templateString:a, _fillContent:function() {
      if(this.srcNodeRef) {
        var a = l("*", this.srcNodeRef);
        this.inherited(arguments, [a[0]]);
        this.dropDownContainer = this.srcNodeRef
      }
    }, startup:function() {
      if(!this._started) {
        if(!this.dropDown && this.dropDownContainer) {
          var a = l("[widgetId]", this.dropDownContainer)[0];
          a && (this.dropDown = g.byNode(a));
          delete this.dropDownContainer
        }
        this.dropDown && b.hide(this.dropDown);
        this.inherited(arguments)
      }
    }, isLoaded:function() {
      var a = this.dropDown;
      return!!a && (!a.href || a.isLoaded)
    }, loadDropDown:function(a) {
      var b = this.dropDown, d = b.on("load", m.hitch(this, function() {
        d.remove();
        a()
      }));
      b.refresh()
    }, isFocusable:function() {
      return this.inherited(arguments) && !this._mouseDown
    }})
  })
}, "dijit/popup":function() {
  define("dojo/_base/array dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on ./place ./BackgroundIframe ./Viewport ./main dojo/touch".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t) {
    function q() {
      this._popupWrapper && (e.destroy(this._popupWrapper), delete this._popupWrapper)
    }
    l = l(null, {_stack:[], _beginZIndex:1E3, _idGen:1, _repositionAll:function() {
      if(this._firstAroundNode) {
        var a = this._firstAroundPosition, c = k.position(this._firstAroundNode, !0), b = c.x - a.x, a = c.y - a.y;
        if(b || a) {
          this._firstAroundPosition = c;
          for(c = 0;c < this._stack.length;c++) {
            var d = this._stack[c].wrapper.style;
            d.top = parseFloat(d.top) + a + "px";
            "auto" == d.right ? d.left = parseFloat(d.left) + b + "px" : d.right = parseFloat(d.right) - b + "px"
          }
        }
        this._aroundMoveListener = setTimeout(h.hitch(this, "_repositionAll"), b || a ? 10 : 50)
      }
    }, _createWrapper:function(a) {
      var c = a._popupWrapper, b = a.domNode;
      c || (c = e.create("div", {"class":"dijitPopup", style:{display:"none"}, role:"region", "aria-label":a["aria-label"] || a.label || a.name || a.id}, a.ownerDocumentBody), c.appendChild(b), b = b.style, b.display = "", b.visibility = "", b.position = "", b.top = "0px", a._popupWrapper = c, m.after(a, "destroy", q, !0), "ontouchend" in document && p(c, "touchend", function(a) {
        /^(input|button|textarea)$/i.test(a.target.tagName) || a.preventDefault()
      }), c.dojoClick = !0);
      return c
    }, moveOffScreen:function(a) {
      var c = this._createWrapper(a);
      a = k.isBodyLtr(a.ownerDocument);
      var b = {visibility:"hidden", top:"-9999px", display:""};
      b[a ? "left" : "right"] = "-9999px";
      b[a ? "right" : "left"] = "auto";
      d.set(c, b);
      return c
    }, hide:function(a) {
      var c = this._createWrapper(a);
      d.set(c, {display:"none", height:"auto", overflowY:"visible", border:""});
      a = a.domNode;
      "_originalStyle" in a && (a.style.cssText = a._originalStyle)
    }, getTopPopup:function() {
      for(var a = this._stack, c = a.length - 1;0 < c && a[c].parent === a[c - 1].widget;c--) {
      }
      return a[c]
    }, open:function(e) {
      for(var f = this._stack, q = e.popup, l = q.domNode, t = e.orient || ["below", "below-alt", "above", "above-alt"], m = e.parent ? e.parent.isLeftToRight() : k.isBodyLtr(q.ownerDocument), B = e.around, D = e.around && e.around.id ? e.around.id + "_dropdown" : "popup_" + this._idGen++;f.length && (!e.parent || !g.isDescendant(e.parent.domNode, f[f.length - 1].widget.domNode));) {
        this.close(f[f.length - 1].widget)
      }
      var I = this.moveOffScreen(q);
      q.startup && !q._started && q.startup();
      var L, O = k.position(l);
      if("maxHeight" in e && -1 != e.maxHeight) {
        L = e.maxHeight || Infinity
      }else {
        L = u.getEffectiveBox(this.ownerDocument);
        var H = B ? k.position(B, !1) : {y:e.y - (e.padding || 0), h:2 * (e.padding || 0)};
        L = Math.floor(Math.max(H.y, L.h - (H.y + H.h)))
      }
      O.h > L && (O = d.getComputedStyle(l), d.set(I, {overflowY:"scroll", height:L + "px", border:O.borderLeftWidth + " " + O.borderLeftStyle + " " + O.borderLeftColor}), l._originalStyle = l.style.cssText, l.style.border = "none");
      b.set(I, {id:D, style:{zIndex:this._beginZIndex + f.length}, "class":"dijitPopup " + (q.baseClass || q["class"] || "").split(" ")[0] + "Popup", dijitPopupParent:e.parent ? e.parent.id : ""});
      0 == f.length && B && (this._firstAroundNode = B, this._firstAroundPosition = k.position(B, !0), this._aroundMoveListener = setTimeout(h.hitch(this, "_repositionAll"), 50));
      a("config-bgIframe") && !q.bgIframe && (q.bgIframe = new n(I));
      D = q.orient ? h.hitch(q, "orient") : null;
      t = B ? s.around(I, B, t, m, D) : s.at(I, e, "R" == t ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], e.padding, D);
      I.style.visibility = "visible";
      l.style.visibility = "visible";
      l = [];
      l.push(p(I, "keydown", h.hitch(this, function(a) {
        if(a.keyCode == c.ESCAPE && e.onCancel) {
          a.stopPropagation(), a.preventDefault(), e.onCancel()
        }else {
          if(a.keyCode == c.TAB && (a.stopPropagation(), a.preventDefault(), (a = this.getTopPopup()) && a.onCancel)) {
            a.onCancel()
          }
        }
      })));
      q.onCancel && e.onCancel && l.push(q.on("cancel", e.onCancel));
      l.push(q.on(q.onExecute ? "execute" : "change", h.hitch(this, function() {
        var a = this.getTopPopup();
        if(a && a.onExecute) {
          a.onExecute()
        }
      })));
      f.push({widget:q, wrapper:I, parent:e.parent, onExecute:e.onExecute, onCancel:e.onCancel, onClose:e.onClose, handlers:l});
      if(q.onOpen) {
        q.onOpen(t)
      }
      return t
    }, close:function(a) {
      for(var c = this._stack;a && f.some(c, function(c) {
        return c.widget == a
      }) || !a && c.length;) {
        var b = c.pop(), h = b.widget, d = b.onClose;
        h.bgIframe && (h.bgIframe.destroy(), delete h.bgIframe);
        if(h.onClose) {
          h.onClose()
        }
        for(var e;e = b.handlers.pop();) {
          e.remove()
        }
        h && h.domNode && this.hide(h);
        d && d()
      }
      0 == c.length && this._aroundMoveListener && (clearTimeout(this._aroundMoveListener), this._firstAroundNode = this._firstAroundPosition = this._aroundMoveListener = null)
    }});
    return t.popup = new l
  })
}, "dijit/form/Button":function() {
  define("require dojo/_base/declare dojo/dom-class dojo/has dojo/_base/kernel dojo/_base/lang dojo/ready ./_FormWidget ./_ButtonMixin dojo/text!./templates/Button.html ../a11yclick".split(" "), function(f, m, l, g, b, e, k, d, a, c) {
    g("dijit-legacy-requires") && k(0, function() {
      f(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
    });
    k = m("dijit.form.Button" + (g("dojo-bidi") ? "_NoBidi" : ""), [d, a], {showLabel:!0, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, baseClass:"dijitButton", templateString:c, _setValueAttr:"valueNode", _setNameAttr:function(a) {
      this.valueNode && this.valueNode.setAttribute("name", a)
    }, _fillContent:function(a) {
      if(a && (!this.params || !("label" in this.params))) {
        if(a = e.trim(a.innerHTML)) {
          this.label = a
        }
      }
    }, _setShowLabelAttr:function(a) {
      this.containerNode && l.toggle(this.containerNode, "dijitDisplayNone", !a);
      this._set("showLabel", a)
    }, setLabel:function(a) {
      b.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
      this.set("label", a)
    }, _setLabelAttr:function(a) {
      this.inherited(arguments);
      !this.showLabel && !("title" in this.params) && (this.titleNode.title = e.trim(this.containerNode.innerText || this.containerNode.textContent || ""))
    }});
    g("dojo-bidi") && (k = m("dijit.form.Button", k, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      this.titleNode.title && this.applyTextDir(this.titleNode, this.titleNode.title)
    }, _setTextDirAttr:function(a) {
      this._created && this.textDir != a && (this._set("textDir", a), this._setLabelAttr(this.label))
    }}));
    return k
  })
}, "dijit/form/_FormWidget":function() {
  define("dojo/_base/declare dojo/sniff dojo/_base/kernel dojo/ready ../_Widget ../_CssStateMixin ../_TemplatedMixin ./_FormWidgetMixin".split(" "), function(f, m, l, g, b, e, k, d) {
    m("dijit-legacy-requires") && g(0, function() {
      require(["dijit/form/_FormValueWidget"])
    });
    return f("dijit.form._FormWidget", [b, k, e, d], {setDisabled:function(a) {
      l.deprecated("setDisabled(" + a + ") is deprecated. Use set('disabled'," + a + ") instead.", "", "2.0");
      this.set("disabled", a)
    }, setValue:function(a) {
      l.deprecated("dijit.form._FormWidget:setValue(" + a + ") is deprecated.  Use set('value'," + a + ") instead.", "", "2.0");
      this.set("value", a)
    }, getValue:function() {
      l.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, postMixInProperties:function() {
      this.nameAttrSetting = this.name && !m("msapp") ? 'name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "";
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_FormWidgetMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff dojo/window ../a11y".split(" "), function(f, m, l, g, b, e, k, d, a, c) {
    return m("dijit.form._FormWidgetMixin", null, {name:"", alt:"", value:"", type:"text", "aria-label":"focusNode", tabIndex:"0", _setTabIndexAttr:"focusNode", disabled:!1, intermediateChanges:!1, scrollOnFocus:!0, _setIdAttr:"focusNode", _setDisabledAttr:function(a) {
      this._set("disabled", a);
      /^(button|input|select|textarea|optgroup|option|fieldset)$/i.test(this.focusNode.tagName) ? l.set(this.focusNode, "disabled", a) : this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
      this.valueNode && l.set(this.valueNode, "disabled", a);
      a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "_setTabIndexAttr" in this ? this._setTabIndexAttr : "focusNode", f.forEach(b.isArray(a) ? a : [a], function(a) {
        a = this[a];
        d("webkit") || c.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
      }, this)) : "" != this.tabIndex && this.set("tabIndex", this.tabIndex)
    }, _onFocus:function(c) {
      if("mouse" == c && this.isFocusable()) {
        var e = this.own(k(this.focusNode, "focus", function() {
          n.remove();
          e.remove()
        }))[0], g = d("pointer-events") ? "pointerup" : d("MSPointer") ? "MSPointerUp" : d("touch-events") ? "touchend, mouseup" : "mouseup", n = this.own(k(this.ownerDocumentBody, g, b.hitch(this, function(a) {
          n.remove();
          e.remove();
          this.focused && ("touchend" == a.type ? this.defer("focus") : this.focus())
        })))[0]
      }
      this.scrollOnFocus && this.defer(function() {
        a.scrollIntoView(this.domNode)
      });
      this.inherited(arguments)
    }, isFocusable:function() {
      return!this.disabled && this.focusNode && "none" != g.get(this.domNode, "display")
    }, focus:function() {
      if(!this.disabled && this.focusNode.focus) {
        try {
          this.focusNode.focus()
        }catch(a) {
        }
      }
    }, compare:function(a, c) {
      return"number" == typeof a && "number" == typeof c ? isNaN(a) && isNaN(c) ? 0 : a - c : a > c ? 1 : a < c ? -1 : 0
    }, onChange:function() {
    }, _onChangeActive:!1, _handleOnChange:function(a, c) {
      if(void 0 == this._lastValueReported && (null === c || !this._onChangeActive)) {
        this._resetValue = this._lastValueReported = a
      }
      this._pendingOnChange = this._pendingOnChange || typeof a != typeof this._lastValueReported || 0 != this.compare(a, this._lastValueReported);
      if((this.intermediateChanges || c || void 0 === c) && this._pendingOnChange) {
        this._lastValueReported = a, this._pendingOnChange = !1, this._onChangeActive && (this._onChangeHandle && this._onChangeHandle.remove(), this._onChangeHandle = this.defer(function() {
          this._onChangeHandle = null;
          this.onChange(a)
        }))
      }
    }, create:function() {
      this.inherited(arguments);
      this._onChangeActive = !0
    }, destroy:function() {
      this._onChangeHandle && (this._onChangeHandle.remove(), this.onChange(this._lastValueReported));
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_ButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/has", "../registry"], function(f, m, l, g) {
    var b = f("dijit.form._ButtonMixin" + (l("dojo-bidi") ? "_NoBidi" : ""), null, {label:"", type:"button", __onClick:function(b) {
      b.stopPropagation();
      b.preventDefault();
      this.disabled || this.valueNode.click(b);
      return!1
    }, _onClick:function(b) {
      if(this.disabled) {
        return b.stopPropagation(), b.preventDefault(), !1
      }
      !1 === this.onClick(b) && b.preventDefault();
      var k = b.defaultPrevented;
      if(!k && "submit" == this.type && !(this.valueNode || this.focusNode).form) {
        for(var d = this.domNode;d.parentNode;d = d.parentNode) {
          var a = g.byNode(d);
          if(a && "function" == typeof a._onSubmit) {
            a._onSubmit(b);
            b.preventDefault();
            k = !0;
            break
          }
        }
      }
      return!k
    }, postCreate:function() {
      this.inherited(arguments);
      m.setSelectable(this.focusNode, !1)
    }, onClick:function() {
      return!0
    }, _setLabelAttr:function(b) {
      this._set("label", b);
      (this.containerNode || this.focusNode).innerHTML = b
    }});
    l("dojo-bidi") && (b = f("dijit.form._ButtonMixin", b, {_setLabelAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode || this.focusNode)
    }}));
    return b
  })
}, "dijit/_Container":function() {
  define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct", "dojo/_base/kernel"], function(f, m, l, g) {
    return m("dijit._Container", null, {buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode)
    }, addChild:function(b, e) {
      var k = this.containerNode;
      if(0 < e) {
        for(k = k.firstChild;0 < e;) {
          1 == k.nodeType && e--, k = k.nextSibling
        }
        k ? e = "before" : (k = this.containerNode, e = "last")
      }
      l.place(b.domNode, k, e);
      this._started && !b._started && b.startup()
    }, removeChild:function(b) {
      "number" == typeof b && (b = this.getChildren()[b]);
      b && (b = b.domNode) && b.parentNode && b.parentNode.removeChild(b)
    }, hasChildren:function() {
      return 0 < this.getChildren().length
    }, _getSiblingOfChild:function(b, e) {
      var k = this.getChildren(), d = f.indexOf(k, b);
      return k[d + e]
    }, getIndexOfChild:function(b) {
      return f.indexOf(this.getChildren(), b)
    }})
  })
}, "dijit/_HasDropDown":function() {
  define("dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on dojo/touch ./registry ./focus ./popup ./_FocusMixin".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t) {
    return f("dijit._HasDropDown", t, {_buttonNode:null, _arrowWrapperNode:null, _popupStateNode:null, _aroundNode:null, dropDown:null, autoWidth:!0, forceWidth:!1, maxHeight:-1, dropDownPosition:["below", "above"], _stopClickEvents:!0, _onDropDownMouseDown:function(a) {
      !this.disabled && !this.readOnly && ("MSPointerDown" != a.type && a.preventDefault(), this.own(h.once(this.ownerDocument, p.release, c.hitch(this, "_onDropDownMouseUp"))), this.toggleDropDown())
    }, _onDropDownMouseUp:function(a) {
      var c = this.dropDown, h = !1;
      if(a && this._opened) {
        var d = e.position(this._buttonNode, !0);
        if(!(a.pageX >= d.x && a.pageX <= d.x + d.w) || !(a.pageY >= d.y && a.pageY <= d.y + d.h)) {
          for(d = a.target;d && !h;) {
            b.contains(d, "dijitPopup") ? h = !0 : d = d.parentNode
          }
          if(h) {
            d = a.target;
            if(c.onItemClick) {
              for(var p;d && !(p = s.byNode(d));) {
                d = d.parentNode
              }
              if(p && p.onClick && p.getParent) {
                p.getParent().onItemClick(p, a)
              }
            }
            return
          }
        }
      }
      if(this._opened) {
        if(c.focus && (!1 !== c.autoFocus || "mouseup" == a.type && !this.hovering)) {
          this._focusDropDownTimer = this.defer(function() {
            c.focus();
            delete this._focusDropDownTimer
          })
        }
      }else {
        this.focus && this.defer("focus")
      }
    }, _onDropDownClick:function(a) {
      this._stopClickEvents && (a.stopPropagation(), a.preventDefault())
    }, buildRendering:function() {
      this.inherited(arguments);
      this._buttonNode = this._buttonNode || this.focusNode || this.domNode;
      this._popupStateNode = this._popupStateNode || this.focusNode || this._buttonNode;
      var a = {after:this.isLeftToRight() ? "Right" : "Left", before:this.isLeftToRight() ? "Left" : "Right", above:"Up", below:"Down", left:"Left", right:"Right"}[this.dropDownPosition[0]] || this.dropDownPosition[0] || "Down";
      b.add(this._arrowWrapperNode || this._buttonNode, "dijit" + a + "ArrowButton")
    }, postCreate:function() {
      this.inherited(arguments);
      var a = this.focusNode || this.domNode;
      this.own(h(this._buttonNode, p.press, c.hitch(this, "_onDropDownMouseDown")), h(this._buttonNode, "click", c.hitch(this, "_onDropDownClick")), h(a, "keydown", c.hitch(this, "_onKey")), h(a, "keyup", c.hitch(this, "_onKeyUp")))
    }, destroy:function() {
      this._opened && this.closeDropDown(!0);
      this.dropDown && (this.dropDown._destroyed || this.dropDown.destroyRecursive(), delete this.dropDown);
      this.inherited(arguments)
    }, _onKey:function(c) {
      if(!this.disabled && !this.readOnly) {
        var b = this.dropDown, h = c.target;
        if(b && (this._opened && b.handleKey) && !1 === b.handleKey(c)) {
          c.stopPropagation(), c.preventDefault()
        }else {
          if(b && this._opened && c.keyCode == a.ESCAPE) {
            this.closeDropDown(), c.stopPropagation(), c.preventDefault()
          }else {
            if(!this._opened && (c.keyCode == a.DOWN_ARROW || (c.keyCode == a.ENTER || c.keyCode == a.SPACE && (!this._searchTimer || c.ctrlKey || c.altKey || c.metaKey)) && ("input" !== (h.tagName || "").toLowerCase() || h.type && "text" !== h.type.toLowerCase()))) {
              this._toggleOnKeyUp = !0, c.stopPropagation(), c.preventDefault()
            }
          }
        }
      }
    }, _onKeyUp:function() {
      if(this._toggleOnKeyUp) {
        delete this._toggleOnKeyUp;
        this.toggleDropDown();
        var a = this.dropDown;
        a && a.focus && this.defer(c.hitch(a, "focus"), 1)
      }
    }, _onBlur:function() {
      this.closeDropDown(!1);
      this.inherited(arguments)
    }, isLoaded:function() {
      return!0
    }, loadDropDown:function(a) {
      a()
    }, loadAndOpenDropDown:function() {
      var a = new m, b = c.hitch(this, function() {
        this.openDropDown();
        a.resolve(this.dropDown)
      });
      this.isLoaded() ? b() : this.loadDropDown(b);
      return a
    }, toggleDropDown:function() {
      !this.disabled && !this.readOnly && (this._opened ? this.closeDropDown(!0) : this.loadAndOpenDropDown())
    }, openDropDown:function() {
      var a = this.dropDown, h = a.domNode, d = this._aroundNode || this.domNode, p = this, k = u.open({parent:this, popup:a, around:d, orient:this.dropDownPosition, maxHeight:this.maxHeight, onExecute:function() {
        p.closeDropDown(!0)
      }, onCancel:function() {
        p.closeDropDown(!0)
      }, onClose:function() {
        g.set(p._popupStateNode, "popupActive", !1);
        b.remove(p._popupStateNode, "dijitHasDropDownOpen");
        p._set("_opened", !1)
      }});
      if(this.forceWidth || this.autoWidth && d.offsetWidth > a._popupWrapper.offsetWidth) {
        var d = d.offsetWidth - a._popupWrapper.offsetWidth, n = {w:a.domNode.offsetWidth + d};
        this._origStyle = h.style.cssText;
        c.isFunction(a.resize) ? a.resize(n) : e.setMarginBox(h, n);
        "R" == k.corner[1] && (a._popupWrapper.style.left = a._popupWrapper.style.left.replace("px", "") - d + "px")
      }
      g.set(this._popupStateNode, "popupActive", "true");
      b.add(this._popupStateNode, "dijitHasDropDownOpen");
      this._set("_opened", !0);
      this._popupStateNode.setAttribute("aria-expanded", "true");
      this._popupStateNode.setAttribute("aria-owns", a.id);
      "presentation" !== h.getAttribute("role") && !h.getAttribute("aria-labelledby") && h.setAttribute("aria-labelledby", this.id);
      return k
    }, closeDropDown:function(a) {
      this._focusDropDownTimer && (this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
      this._opened && (this._popupStateNode.setAttribute("aria-expanded", "false"), a && this.focus && this.focus(), u.close(this.dropDown), this._opened = !1);
      this._origStyle && (this.dropDown.domNode.style.cssText = this._origStyle, delete this._origStyle)
    }})
  })
}, "dijit/form/_DateTimeTextBox":function() {
  define("dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(f, m, l, g, b, e, k, d) {
    new Date("X");
    return g("dijit.form._DateTimeTextBox", [e, k], {templateString:d, hasDownArrow:!0, cssStateNodes:{_buttonNode:"dijitDownArrowButton"}, _unboundedConstraints:{}, pattern:m.regexp, datePackage:"", postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, compare:function(a, c) {
      var b = this._isInvalidDate(a), d = this._isInvalidDate(c);
      if(b || d) {
        return b && d ? 0 : !b ? 1 : -1
      }
      var b = this.format(a, this._unboundedConstraints), d = this.format(c, this._unboundedConstraints), e = this.parse(b, this._unboundedConstraints), k = this.parse(d, this._unboundedConstraints);
      return b == d ? 0 : f.compare(e, k, this._selector)
    }, autoWidth:!0, format:function(a, c) {
      return!a ? "" : this.dateLocaleModule.format(a, c)
    }, parse:function(a, c) {
      return this.dateLocaleModule.parse(a, c) || (this._isEmpty(a) ? null : void 0)
    }, serialize:function(a, c) {
      a.toGregorian && (a = a.toGregorian());
      return l.toISOString(a, c)
    }, dropDownDefaultValue:new Date, value:new Date(""), _blankValue:null, popupClass:"", _selector:"", constructor:function(a) {
      a = a || {};
      this.dateModule = a.datePackage ? b.getObject(a.datePackage, !1) : f;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateClassObj instanceof Date || (this.value = new this.dateClassObj(this.value));
      this.dateLocaleModule = a.datePackage ? b.getObject(a.datePackage + ".locale", !1) : m;
      this._set("pattern", this.dateLocaleModule.regexp);
      this._invalidDate = this.constructor.prototype.value.toString()
    }, buildRendering:function() {
      this.inherited(arguments);
      this.hasDownArrow || (this._buttonNode.style.display = "none");
      this.hasDownArrow || (this._buttonNode = this.domNode, this.baseClass += " dijitComboBoxOpenOnClick")
    }, _setConstraintsAttr:function(a) {
      a.selector = this._selector;
      a.fullYear = !0;
      var c = l.fromISOString;
      "string" == typeof a.min && (a.min = c(a.min), this.dateClassObj instanceof Date || (a.min = new this.dateClassObj(a.min)));
      "string" == typeof a.max && (a.max = c(a.max), this.dateClassObj instanceof Date || (a.max = new this.dateClassObj(a.max)));
      this.inherited(arguments);
      this._unboundedConstraints = b.mixin({}, this.constraints, {min:null, max:null})
    }, _isInvalidDate:function(a) {
      return!a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate
    }, _setValueAttr:function(a, c, b) {
      void 0 !== a && ("string" == typeof a && (a = l.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
      this.inherited(arguments, [a, c, b]);
      this.value instanceof Date && (this.filterString = "");
      this.dropDown && this.dropDown.set("value", a, !1)
    }, _set:function(a, c) {
      if("value" == a) {
        c instanceof Date && !(this.dateClassObj instanceof Date) && (c = new this.dateClassObj(c));
        var b = this._get("value");
        if(b instanceof this.dateClassObj && 0 == this.compare(c, b)) {
          return
        }
      }
      this.inherited(arguments)
    }, _setDropDownDefaultValueAttr:function(a) {
      this._isInvalidDate(a) && (a = new this.dateClassObj);
      this._set("dropDownDefaultValue", a)
    }, openDropDown:function(a) {
      this.dropDown && this.dropDown.destroy();
      var c = b.isString(this.popupClass) ? b.getObject(this.popupClass, !1) : this.popupClass, h = this, d = this.get("value");
      this.dropDown = new c({onChange:function(a) {
        h.set("value", a, !0)
      }, id:this.id + "_popup", dir:h.dir, lang:h.lang, value:d, textDir:h.textDir, currentFocus:!this._isInvalidDate(d) ? d : this.dropDownDefaultValue, constraints:h.constraints, filterString:h.filterString, datePackage:h.datePackage, isDisabledDate:function(a) {
        return!h.rangeCheck(a, h.constraints)
      }});
      this.inherited(arguments)
    }, _getDisplayedValueAttr:function() {
      return this.textbox.value
    }, _setDisplayedValueAttr:function(a, c) {
      this._setValueAttr(this.parse(a, this.constraints), c, a)
    }})
  })
}, "dijit/form/RangeBoundTextBox":function() {
  define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox", "dojo/i18n!./nls/validate"], function(f, m, l) {
    return f("dijit.form.RangeBoundTextBox", l, {rangeMessage:"", rangeCheck:function(g, b) {
      return("min" in b ? 0 <= this.compare(g, b.min) : !0) && ("max" in b ? 0 >= this.compare(g, b.max) : !0)
    }, isInRange:function() {
      return this.rangeCheck(this.get("value"), this.constraints)
    }, _isDefinitelyOutOfRange:function() {
      var g = this.get("value");
      if(null == g) {
        return!1
      }
      var b = !1;
      "min" in this.constraints && (b = this.constraints.min, b = 0 > this.compare(g, "number" == typeof b && 0 <= b && 0 != g ? 0 : b));
      !b && "max" in this.constraints && (b = this.constraints.max, b = 0 < this.compare(g, "number" != typeof b || 0 < b ? b : 0));
      return b
    }, _isValidSubset:function() {
      return this.inherited(arguments) && !this._isDefinitelyOutOfRange()
    }, isValid:function(g) {
      return this.inherited(arguments) && (this._isEmpty(this.textbox.value) && !this.required || this.isInRange(g))
    }, getErrorMessage:function(g) {
      var b = this.get("value");
      return null != b && "" !== b && ("number" != typeof b || !isNaN(b)) && !this.isInRange(g) ? this.rangeMessage : this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this.rangeMessage || (this.messages = m.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage)
    }})
  })
}, "dijit/form/MappedTextBox":function() {
  define(["dojo/_base/declare", "dojo/sniff", "dojo/dom-construct", "./ValidationTextBox"], function(f, m, l, g) {
    return f("dijit.form.MappedTextBox", g, {postMixInProperties:function() {
      this.inherited(arguments);
      this.nameAttrSetting = ""
    }, _setNameAttr:"valueNode", serialize:function(b) {
      return b.toString ? b.toString() : ""
    }, toString:function() {
      var b = this.filter(this.get("value"));
      return null != b ? "string" == typeof b ? b : this.serialize(b, this.constraints) : ""
    }, validate:function() {
      this.valueNode.value = this.toString();
      return this.inherited(arguments)
    }, buildRendering:function() {
      this.inherited(arguments);
      this.valueNode = l.place("\x3cinput type\x3d'hidden'" + (this.name && !m("msapp") ? ' name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "") + "/\x3e", this.textbox, "after")
    }, reset:function() {
      this.valueNode.value = "";
      this.inherited(arguments)
    }})
  })
}, "dijit/form/ValidationTextBox":function() {
  define("dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/i18n ./TextBox ../Tooltip dojo/text!./templates/ValidationTextBox.html dojo/i18n!./nls/validate".split(" "), function(f, m, l, g, b, e, k) {
    var d = f("dijit.form.ValidationTextBox", b, {templateString:k, required:!1, promptMessage:"", invalidMessage:"$_unset_$", missingMessage:"$_unset_$", message:"", constraints:{}, pattern:".*", regExp:"", regExpGen:function() {
    }, state:"", tooltipPosition:[], _deprecateRegExp:function(a, c) {
      c != d.prototype[a] && (m.deprecated("ValidationTextBox id\x3d" + this.id + ", set('" + a + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", c))
    }, _setRegExpGenAttr:function(a) {
      this._deprecateRegExp("regExpGen", a);
      this._set("regExpGen", this._computeRegexp)
    }, _setRegExpAttr:function(a) {
      this._deprecateRegExp("regExp", a)
    }, _setValueAttr:function() {
      this.inherited(arguments);
      this._refreshState()
    }, validator:function(a, c) {
      return RegExp("^(?:" + this._computeRegexp(c) + ")" + (this.required ? "" : "?") + "$").test(a) && (!this.required || !this._isEmpty(a)) && (this._isEmpty(a) || void 0 !== this.parse(a, c))
    }, _isValidSubset:function() {
      return 0 == this.textbox.value.search(this._partialre)
    }, isValid:function() {
      return this.validator(this.textbox.value, this.get("constraints"))
    }, _isEmpty:function(a) {
      return(this.trim ? /^\s*$/ : /^$/).test(a)
    }, getErrorMessage:function() {
      var a = "$_unset_$" == this.invalidMessage ? this.messages.invalidMessage : !this.invalidMessage ? this.promptMessage : this.invalidMessage, c = "$_unset_$" == this.missingMessage ? this.messages.missingMessage : !this.missingMessage ? a : this.missingMessage;
      return this.required && this._isEmpty(this.textbox.value) ? c : a
    }, getPromptMessage:function() {
      return this.promptMessage
    }, _maskValidSubsetError:!0, validate:function(a) {
      var c = "", b = this.disabled || this.isValid(a);
      b && (this._maskValidSubsetError = !0);
      var d = this._isEmpty(this.textbox.value), e = !b && a && this._isValidSubset();
      this._set("state", b ? "" : ((!this._hasBeenBlurred || a) && d || e) && (this._maskValidSubsetError || e && !this._hasBeenBlurred && a) ? "Incomplete" : "Error");
      this.focusNode.setAttribute("aria-invalid", "Error" == this.state ? "true" : "false");
      "Error" == this.state ? (this._maskValidSubsetError = a && e, c = this.getErrorMessage(a)) : "Incomplete" == this.state ? (c = this.getPromptMessage(a), this._maskValidSubsetError = !this._hasBeenBlurred || a) : d && (c = this.getPromptMessage(a));
      this.set("message", c);
      return b
    }, displayMessage:function(a) {
      a && this.focused ? e.show(a, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : e.hide(this.domNode)
    }, _refreshState:function() {
      this._created && this.validate(this.focused);
      this.inherited(arguments)
    }, constructor:function(a) {
      this.constraints = l.clone(this.constraints);
      this.baseClass += " dijitValidationTextBox"
    }, startup:function() {
      this.inherited(arguments);
      this._refreshState()
    }, _setConstraintsAttr:function(a) {
      !a.locale && this.lang && (a.locale = this.lang);
      this._set("constraints", a);
      this._refreshState()
    }, _setPatternAttr:function(a) {
      this._set("pattern", a);
      this._refreshState()
    }, _computeRegexp:function(a) {
      var c = this.pattern;
      "function" == typeof c && (c = c.call(this, a));
      if(c != this._lastRegExp) {
        var b = "";
        this._lastRegExp = c;
        ".*" != c && c.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function(a) {
          switch(a.charAt(0)) {
            case "{":
            ;
            case "+":
            ;
            case "?":
            ;
            case "*":
            ;
            case "^":
            ;
            case "$":
            ;
            case "|":
            ;
            case "(":
              b += a;
              break;
            case ")":
              b += "|$)";
              break;
            default:
              b += "(?:" + a + "|$)"
          }
        });
        try {
          "".search(b)
        }catch(d) {
          b = this.pattern
        }
        this._partialre = "^(?:" + b + ")$"
      }
      return c
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this.messages = g.getLocalization("dijit.form", "validate", this.lang);
      this._setConstraintsAttr(this.constraints)
    }, _setDisabledAttr:function(a) {
      this.inherited(arguments);
      this._refreshState()
    }, _setRequiredAttr:function(a) {
      this._set("required", a);
      this.focusNode.setAttribute("aria-required", a);
      this._refreshState()
    }, _setMessageAttr:function(a) {
      this._set("message", a);
      this.displayMessage(a)
    }, reset:function() {
      this._maskValidSubsetError = !0;
      this.inherited(arguments)
    }, _onBlur:function() {
      this.displayMessage("");
      this.inherited(arguments)
    }, destroy:function() {
      e.hide(this.domNode);
      this.inherited(arguments)
    }});
    return d
  })
}, "dijit/form/TextBox":function() {
  define("dojo/_base/declare dojo/dom-construct dojo/dom-style dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ./_FormValueWidget ./_TextBoxMixin dojo/text!./templates/TextBox.html ../main".split(" "), function(f, m, l, g, b, e, k, d, a, c, h) {
    d = f("dijit.form.TextBox" + (k("dojo-bidi") ? "_NoBidi" : ""), [d, a], {templateString:c, _singleNodeTemplate:'\x3cinput class\x3d"dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point\x3d"textbox,focusNode" autocomplete\x3d"off" type\x3d"${type}" ${!nameAttrSetting} /\x3e', _buttonInputDisabled:k("ie") ? "disabled" : "", baseClass:"dijitTextBox", postMixInProperties:function() {
      var a = this.type.toLowerCase();
      if(this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString == this.constructor.prototype.templateString) {
        this.templateString = this._singleNodeTemplate
      }
      this.inherited(arguments)
    }, postCreate:function() {
      this.inherited(arguments);
      9 > k("ie") && this.defer(function() {
        try {
          var a = l.getComputedStyle(this.domNode);
          if(a) {
            var c = a.fontFamily;
            if(c) {
              var b = this.domNode.getElementsByTagName("INPUT");
              if(b) {
                for(a = 0;a < b.length;a++) {
                  b[a].style.fontFamily = c
                }
              }
            }
          }
        }catch(d) {
        }
      })
    }, _setPlaceHolderAttr:function(a) {
      this._set("placeHolder", a);
      this._phspan || (this._attachPoints.push("_phspan"), this._phspan = m.create("span", {className:"dijitPlaceHolder dijitInputField"}, this.textbox, "after"), this.own(e(this._phspan, "mousedown", function(a) {
        a.preventDefault()
      }), e(this._phspan, "touchend, pointerup, MSPointerUp", b.hitch(this, function() {
        this.focus()
      }))));
      this._phspan.innerHTML = "";
      this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(a));
      this._updatePlaceHolder()
    }, _onInput:function(a) {
      this.inherited(arguments);
      this._updatePlaceHolder()
    }, _updatePlaceHolder:function() {
      this._phspan && (this._phspan.style.display = this.placeHolder && !this.textbox.value ? "" : "none")
    }, _setValueAttr:function(a, c, b) {
      this.inherited(arguments);
      this._updatePlaceHolder()
    }, getDisplayedValue:function() {
      g.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
      return this.get("displayedValue")
    }, setDisplayedValue:function(a) {
      g.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
      this.set("displayedValue", a)
    }, _onBlur:function(a) {
      this.disabled || (this.inherited(arguments), this._updatePlaceHolder(), k("mozilla") && this.selectOnClick && (this.textbox.selectionStart = this.textbox.selectionEnd = void 0))
    }, _onFocus:function(a) {
      !this.disabled && !this.readOnly && (this.inherited(arguments), this._updatePlaceHolder())
    }});
    9 > k("ie") && (d.prototype._isTextSelected = function() {
      var a = this.ownerDocument.selection.createRange();
      return a.parentElement() == this.textbox && 0 < a.text.length
    }, h._setSelectionRange = a._setSelectionRange = function(a, c, b) {
      a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveStart("character", -99999), a.moveStart("character", c), a.moveEnd("character", b - c), a.select())
    });
    k("dojo-bidi") && (d = f("dijit.form.TextBox", d, {_setPlaceHolderAttr:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this._phspan)
    }}));
    return d
  })
}, "dijit/form/_FormValueWidget":function() {
  define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function(f, m, l, g) {
    return f("dijit.form._FormValueWidget", [l, g], {_layoutHackIE7:function() {
      if(7 == m("ie")) {
        for(var b = this.domNode, e = b.parentNode, k = b.firstChild || b, d = k.style.filter, a = this;e && 0 == e.clientHeight;) {
          (function() {
            var c = a.connect(e, "onscroll", function() {
              a.disconnect(c);
              k.style.filter = (new Date).getMilliseconds();
              a.defer(function() {
                k.style.filter = d
              })
            })
          })(), e = e.parentNode
        }
      }
    }})
  })
}, "dijit/form/_FormValueMixin":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on ./_FormWidgetMixin".split(" "), function(f, m, l, g, b, e) {
    return f("dijit.form._FormValueMixin", e, {readOnly:!1, _setReadOnlyAttr:function(b) {
      m.set(this.focusNode, "readOnly", b);
      this._set("readOnly", b)
    }, postCreate:function() {
      this.inherited(arguments);
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.value)
    }, _setValueAttr:function(b, d) {
      this._handleOnChange(b, d)
    }, _handleOnChange:function(b, d) {
      this._set("value", b);
      this.inherited(arguments)
    }, undo:function() {
      this._setValueAttr(this._lastValueReported, !1)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this._setValueAttr(this._resetValue, !0)
    }})
  })
}, "dijit/form/_TextBoxMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/sniff dojo/keys dojo/_base/lang dojo/on ../main".split(" "), function(f, m, l, g, b, e, k, d) {
    var a = m("dijit.form._TextBoxMixin" + (g("dojo-bidi") ? "_NoBidi" : ""), null, {trim:!1, uppercase:!1, lowercase:!1, propercase:!1, maxLength:"", selectOnClick:!1, placeHolder:"", _getValueAttr:function() {
      return this.parse(this.get("displayedValue"), this.constraints)
    }, _setValueAttr:function(a, b, d) {
      var e;
      void 0 !== a && (e = this.filter(a), "string" != typeof d && (d = null !== e && ("number" != typeof e || !isNaN(e)) ? this.filter(this.format(e, this.constraints)) : "", 0 != this.compare(e, this.filter(this.parse(d, this.constraints))) && (d = null)));
      if(null != d && ("number" != typeof d || !isNaN(d)) && this.textbox.value != d) {
        this.textbox.value = d, this._set("displayedValue", this.get("displayedValue"))
      }
      this.inherited(arguments, [e, b])
    }, displayedValue:"", _getDisplayedValueAttr:function() {
      return this.filter(this.textbox.value)
    }, _setDisplayedValueAttr:function(a) {
      null == a ? a = "" : "string" != typeof a && (a = String(a));
      this.textbox.value = a;
      this._setValueAttr(this.get("value"), void 0);
      this._set("displayedValue", this.get("displayedValue"))
    }, format:function(a) {
      return null == a ? "" : a.toString ? a.toString() : a
    }, parse:function(a) {
      return a
    }, _refreshState:function() {
    }, onInput:function() {
    }, _onInput:function(a) {
      this._lastInputEventValue = this.textbox.value;
      this._processInput(this._lastInputProducingEvent || a);
      delete this._lastInputProducingEvent;
      this.intermediateChanges && this._handleOnChange(this.get("value"), !1)
    }, _processInput:function() {
      this._refreshState();
      this._set("displayedValue", this.get("displayedValue"))
    }, postCreate:function() {
      this.textbox.setAttribute("value", this.textbox.value);
      this.inherited(arguments);
      this.own(k(this.textbox, "keydown, keypress, paste, cut, compositionend", e.hitch(this, function(a) {
        var d;
        if("keydown" == a.type && 229 != a.keyCode) {
          d = a.keyCode;
          switch(d) {
            case b.SHIFT:
            ;
            case b.ALT:
            ;
            case b.CTRL:
            ;
            case b.META:
            ;
            case b.CAPS_LOCK:
            ;
            case b.NUM_LOCK:
            ;
            case b.SCROLL_LOCK:
              return
          }
          if(!a.ctrlKey && !a.metaKey && !a.altKey) {
            switch(d) {
              case b.NUMPAD_0:
              ;
              case b.NUMPAD_1:
              ;
              case b.NUMPAD_2:
              ;
              case b.NUMPAD_3:
              ;
              case b.NUMPAD_4:
              ;
              case b.NUMPAD_5:
              ;
              case b.NUMPAD_6:
              ;
              case b.NUMPAD_7:
              ;
              case b.NUMPAD_8:
              ;
              case b.NUMPAD_9:
              ;
              case b.NUMPAD_MULTIPLY:
              ;
              case b.NUMPAD_PLUS:
              ;
              case b.NUMPAD_ENTER:
              ;
              case b.NUMPAD_MINUS:
              ;
              case b.NUMPAD_PERIOD:
              ;
              case b.NUMPAD_DIVIDE:
                return
            }
            if(65 <= d && 90 >= d || 48 <= d && 57 >= d || d == b.SPACE) {
              return
            }
            d = !1;
            for(var p in b) {
              if(b[p] === a.keyCode) {
                d = !0;
                break
              }
            }
            if(!d) {
              return
            }
          }
        }
        (d = 32 <= a.charCode ? String.fromCharCode(a.charCode) : a.charCode) || (d = 65 <= a.keyCode && 90 >= a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || a.keyCode == b.SPACE ? String.fromCharCode(a.keyCode) : a.keyCode);
        d || (d = 229);
        if("keypress" == a.type) {
          if("string" != typeof d) {
            return
          }
          if("a" <= d && "z" >= d || "A" <= d && "Z" >= d || "0" <= d && "9" >= d || " " === d) {
            if(a.ctrlKey || a.metaKey || a.altKey) {
              return
            }
          }
        }
        var f = {faux:!0}, n;
        for(n in a) {
          /^(layer[XY]|returnValue|keyLocation)$/.test(n) || (p = a[n], "function" != typeof p && "undefined" != typeof p && (f[n] = p))
        }
        e.mixin(f, {charOrCode:d, _wasConsumed:!1, preventDefault:function() {
          f._wasConsumed = !0;
          a.preventDefault()
        }, stopPropagation:function() {
          a.stopPropagation()
        }});
        this._lastInputProducingEvent = f;
        !1 === this.onInput(f) && (f.preventDefault(), f.stopPropagation());
        if(!f._wasConsumed && 9 >= g("ie")) {
          switch(a.keyCode) {
            case b.TAB:
            ;
            case b.ESCAPE:
            ;
            case b.DOWN_ARROW:
            ;
            case b.UP_ARROW:
            ;
            case b.LEFT_ARROW:
            ;
            case b.RIGHT_ARROW:
              break;
            default:
              if(a.keyCode == b.ENTER && "textarea" != this.textbox.tagName.toLowerCase()) {
                break
              }
              this.defer(function() {
                this.textbox.value !== this._lastInputEventValue && k.emit(this.textbox, "input", {bubbles:!0})
              })
          }
        }
      })), k(this.textbox, "input", e.hitch(this, "_onInput")), k(this.domNode, "keypress", function(a) {
        a.stopPropagation()
      }))
    }, _blankValue:"", filter:function(a) {
      if(null === a) {
        return this._blankValue
      }
      if("string" != typeof a) {
        return a
      }
      this.trim && (a = e.trim(a));
      this.uppercase && (a = a.toUpperCase());
      this.lowercase && (a = a.toLowerCase());
      this.propercase && (a = a.replace(/[^\s]+/g, function(a) {
        return a.substring(0, 1).toUpperCase() + a.substring(1)
      }));
      return a
    }, _setBlurValue:function() {
      this._setValueAttr(this.get("value"), !0)
    }, _onBlur:function(a) {
      this.disabled || (this._setBlurValue(), this.inherited(arguments))
    }, _isTextSelected:function() {
      return this.textbox.selectionStart != this.textbox.selectionEnd
    }, _onFocus:function(c) {
      !this.disabled && !this.readOnly && (this.selectOnClick && "mouse" == c && (this._selectOnClickHandle = k.once(this.domNode, "mouseup, touchend", e.hitch(this, function(c) {
        this._isTextSelected() || a.selectInputText(this.textbox)
      })), this.own(this._selectOnClickHandle), this.defer(function() {
        this._selectOnClickHandle && (this._selectOnClickHandle.remove(), this._selectOnClickHandle = null)
      }, 500)), this.inherited(arguments), this._refreshState())
    }, reset:function() {
      this.textbox.value = "";
      this.inherited(arguments)
    }});
    g("dojo-bidi") && (a = m("dijit.form._TextBoxMixin", a, {_setValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _setDisplayedValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _onInput:function() {
      this.applyTextDir(this.focusNode);
      this.inherited(arguments)
    }}));
    a._setSelectionRange = d._setSelectionRange = function(a, b, d) {
      a.setSelectionRange && a.setSelectionRange(b, d)
    };
    a.selectInputText = d.selectInputText = function(c, b, d) {
      c = l.byId(c);
      isNaN(b) && (b = 0);
      isNaN(d) && (d = c.value ? c.value.length : 0);
      try {
        c.focus(), a._setSelectionRange(c, b, d)
      }catch(e) {
      }
    };
    return a
  })
}, "lsmb/Form":function() {
  define("dijit/form/Form dojo/_base/declare dojo/_base/event dojo/on dojo/hash dojo/dom-attr dojo/dom-form dojo/query dijit/registry".split(" "), function(f, m, l, g, b, e, k, d, a) {
    var c = 0;
    return m("lsmb/Form", [f], {clickedAction:null, startup:function() {
      var a = this;
      this.inherited(arguments);
      d('input[type\x3d"submit"]', this.domNode).forEach(function(c) {
        g(c, "click", function() {
          a.clickedAction = e.get(c, "value")
        })
      })
    }, onSubmit:function(a) {
      l.stop(a);
      this.submit()
    }, submit:function() {
      if(this.validate()) {
        var d = "undefined" === typeof this.method ? "GET" : this.method, e = this.action, g = {handleAs:"text"};
        "get" === d.toLowerCase() ? (c++, d = k.toQuery(this.domNode), d = "action\x3d" + this.clickedAction + "\x26" + d, e = e + "?" + d + "#" + c.toString(16), b(e)) : (g.method = d, "multipart/form-data" == this.domNode.enctype ? (g.data = new FormData(this.domNode), g.data.append("action", this.clickedAction)) : g.data = "action\x3d" + this.clickedAction + "\x26" + k.toQuery(this.domNode), a.byId("maindiv").load_form(e, g))
      }
    }})
  })
}, "dijit/form/Form":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/sniff ../_Widget ../_TemplatedMixin ./_FormMixin ../layout/_ContentPaneResizeMixin".split(" "), function(f, m, l, g, b, e, k, d) {
    return f("dijit.form.Form", [b, e, k, d], {name:"", action:"", method:"", encType:"", "accept-charset":"", accept:"", target:"", templateString:"\x3cform data-dojo-attach-point\x3d'containerNode' data-dojo-attach-event\x3d'onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}\x3e\x3c/form\x3e", postMixInProperties:function() {
      this.nameAttrSetting = this.name ? "name\x3d'" + this.name + "'" : "";
      this.inherited(arguments)
    }, execute:function() {
    }, onExecute:function() {
    }, _setEncTypeAttr:function(a) {
      m.set(this.domNode, "encType", a);
      g("ie") && (this.domNode.encoding = a);
      this._set("encType", a)
    }, reset:function(a) {
      var c = {returnValue:!0, preventDefault:function() {
        this.returnValue = !1
      }, stopPropagation:function() {
      }, currentTarget:a ? a.target : this.domNode, target:a ? a.target : this.domNode};
      !1 !== this.onReset(c) && c.returnValue && this.inherited(arguments, [])
    }, onReset:function() {
      return!0
    }, _onReset:function(a) {
      this.reset(a);
      a.stopPropagation();
      a.preventDefault();
      return!1
    }, _onSubmit:function(a) {
      var c = this.constructor.prototype;
      if(this.execute != c.execute || this.onExecute != c.onExecute) {
        l.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0"), this.onExecute(), this.execute(this.getValues())
      }
      !1 === this.onSubmit(a) && (a.stopPropagation(), a.preventDefault())
    }, onSubmit:function() {
      return this.isValid()
    }, submit:function() {
      !1 !== this.onSubmit() && this.containerNode.submit()
    }})
  })
}, "dijit/form/_FormMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/on dojo/window".split(" "), function(f, m, l, g, b, e) {
    return m("dijit.form._FormMixin", null, {state:"", _getDescendantFormWidgets:function(b) {
      var d = [];
      f.forEach(b || this.getChildren(), function(a) {
        "value" in a ? d.push(a) : d = d.concat(this._getDescendantFormWidgets(a.getChildren()))
      }, this);
      return d
    }, reset:function() {
      f.forEach(this._getDescendantFormWidgets(), function(b) {
        b.reset && b.reset()
      })
    }, validate:function() {
      var b = !1;
      return f.every(f.map(this._getDescendantFormWidgets(), function(d) {
        d._hasBeenBlurred = !0;
        var a = d.disabled || !d.validate || d.validate();
        !a && !b && (e.scrollIntoView(d.containerNode || d.domNode), d.focus(), b = !0);
        return a
      }), function(b) {
        return b
      })
    }, setValues:function(b) {
      l.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
      return this.set("value", b)
    }, _setValueAttr:function(b) {
      var d = {};
      f.forEach(this._getDescendantFormWidgets(), function(a) {
        a.name && (d[a.name] || (d[a.name] = [])).push(a)
      });
      for(var a in d) {
        if(d.hasOwnProperty(a)) {
          var c = d[a], h = g.getObject(a, !1, b);
          void 0 !== h && (h = [].concat(h), "boolean" == typeof c[0].checked ? f.forEach(c, function(a) {
            a.set("value", -1 != f.indexOf(h, a._get("value")))
          }) : c[0].multiple ? c[0].set("value", h) : f.forEach(c, function(a, c) {
            a.set("value", h[c])
          }))
        }
      }
    }, getValues:function() {
      l.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, _getValueAttr:function() {
      var b = {};
      f.forEach(this._getDescendantFormWidgets(), function(d) {
        var a = d.name;
        if(a && !d.disabled) {
          var c = d.get("value");
          "boolean" == typeof d.checked ? /Radio/.test(d.declaredClass) ? !1 !== c ? g.setObject(a, c, b) : (c = g.getObject(a, !1, b), void 0 === c && g.setObject(a, null, b)) : (d = g.getObject(a, !1, b), d || (d = [], g.setObject(a, d, b)), !1 !== c && d.push(c)) : (d = g.getObject(a, !1, b), "undefined" != typeof d ? g.isArray(d) ? d.push(c) : g.setObject(a, [d, c], b) : g.setObject(a, c, b))
        }
      });
      return b
    }, isValid:function() {
      return"" == this.state
    }, onValidStateChange:function() {
    }, _getState:function() {
      var b = f.map(this._descendants, function(b) {
        return b.get("state") || ""
      });
      return 0 <= f.indexOf(b, "Error") ? "Error" : 0 <= f.indexOf(b, "Incomplete") ? "Incomplete" : ""
    }, disconnectChildren:function() {
    }, connectChildren:function(b) {
      this._descendants = this._getDescendantFormWidgets();
      f.forEach(this._descendants, function(b) {
        b._started || b.startup()
      });
      b || this._onChildChange()
    }, _onChildChange:function(b) {
      (!b || "state" == b || "disabled" == b) && this._set("state", this._getState());
      if(!b || "value" == b || "disabled" == b || "checked" == b) {
        this._onChangeDelayTimer && this._onChangeDelayTimer.remove(), this._onChangeDelayTimer = this.defer(function() {
          delete this._onChangeDelayTimer;
          this._set("value", this.get("value"))
        }, 10)
      }
    }, startup:function() {
      this.inherited(arguments);
      this._descendants = this._getDescendantFormWidgets();
      this.value = this.get("value");
      this.state = this._getState();
      var e = this;
      this.own(b(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function(b) {
        b.target != e.domNode && e._onChildChange(b.type.replace("attrmodified-", ""))
      }));
      this.watch("state", function(b, a, c) {
        this.onValidStateChange("" == c)
      })
    }, destroy:function() {
      this.inherited(arguments)
    }})
  })
}, "dijit/layout/_ContentPaneResizeMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/query ../registry ../Viewport ./utils".split(" "), function(f, m, l, g, b, e, k, d, a, c) {
    return m("dijit.layout._ContentPaneResizeMixin", null, {doLayout:!0, isLayoutContainer:!0, startup:function() {
      if(!this._started) {
        var b = this.getParent();
        this._childOfLayoutWidget = b && b.isLayoutContainer;
        this._needLayout = !this._childOfLayoutWidget;
        this.inherited(arguments);
        this._isShown() && this._onShow();
        this._childOfLayoutWidget || this.own(a.on("resize", e.hitch(this, "resize")))
      }
    }, _checkIfSingleChild:function() {
      if(this.doLayout) {
        var a = [], b = !1;
        k("\x3e *", this.containerNode).some(function(c) {
          var e = d.byNode(c);
          e && e.resize ? a.push(e) : !/script|link|style/i.test(c.nodeName) && c.offsetHeight && (b = !0)
        });
        this._singleChild = 1 == a.length && !b ? a[0] : null;
        l.toggle(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild)
      }
    }, resize:function(a, b) {
      this._resizeCalled = !0;
      this._scheduleLayout(a, b)
    }, _scheduleLayout:function(a, b) {
      this._isShown() ? this._layout(a, b) : (this._needLayout = !0, this._changeSize = a, this._resultSize = b)
    }, _layout:function(a, b) {
      delete this._needLayout;
      !this._wasShown && !1 !== this.open && this._onShow();
      a && g.setMarginBox(this.domNode, a);
      var d = this.containerNode;
      if(d === this.domNode) {
        var f = b || {};
        e.mixin(f, a || {});
        if(!("h" in f) || !("w" in f)) {
          f = e.mixin(g.getMarginBox(d), f)
        }
        this._contentBox = c.marginBox2contentBox(d, f)
      }else {
        this._contentBox = g.getContentBox(d)
      }
      this._layoutChildren()
    }, _layoutChildren:function() {
      this._checkIfSingleChild();
      if(this._singleChild && this._singleChild.resize) {
        var a = this._contentBox || g.getContentBox(this.containerNode);
        this._singleChild.resize({w:a.w, h:a.h})
      }else {
        for(var a = this.getChildren(), b, c = 0;b = a[c++];) {
          b.resize && b.resize()
        }
      }
    }, _isShown:function() {
      if(this._childOfLayoutWidget) {
        return this._resizeCalled && "open" in this ? this.open : this._resizeCalled
      }
      if("open" in this) {
        return this.open
      }
      var a = this.domNode, b = this.domNode.parentNode;
      return"none" != a.style.display && "hidden" != a.style.visibility && !l.contains(a, "dijitHidden") && b && b.style && "none" != b.style.display
    }, _onShow:function() {
      this._wasShown = !0;
      this._needLayout && this._layout(this._changeSize, this._resultSize);
      this.inherited(arguments)
    }})
  })
}, "dijit/layout/utils":function() {
  define(["dojo/_base/array", "dojo/dom-class", "dojo/dom-geometry", "dojo/dom-style", "dojo/_base/lang"], function(f, m, l, g, b) {
    function e(d, a) {
      var c = d.resize ? d.resize(a) : l.setMarginBox(d.domNode, a);
      c ? b.mixin(d, c) : (b.mixin(d, l.getMarginBox(d.domNode)), b.mixin(d, a))
    }
    var k = {marginBox2contentBox:function(b, a) {
      var c = g.getComputedStyle(b), e = l.getMarginExtents(b, c), f = l.getPadBorderExtents(b, c);
      return{l:g.toPixelValue(b, c.paddingLeft), t:g.toPixelValue(b, c.paddingTop), w:a.w - (e.w + f.w), h:a.h - (e.h + f.h)}
    }, layoutChildren:function(d, a, c, h, g) {
      a = b.mixin({}, a);
      m.add(d, "dijitLayoutContainer");
      c = f.filter(c, function(a) {
        return"center" != a.region && "client" != a.layoutAlign
      }).concat(f.filter(c, function(a) {
        return"center" == a.region || "client" == a.layoutAlign
      }));
      f.forEach(c, function(b) {
        var c = b.domNode, d = b.region || b.layoutAlign;
        if(!d) {
          throw Error("No region setting for " + b.id);
        }
        var f = c.style;
        f.left = a.l + "px";
        f.top = a.t + "px";
        f.position = "absolute";
        m.add(c, "dijitAlign" + (d.substring(0, 1).toUpperCase() + d.substring(1)));
        c = {};
        h && h == b.id && (c["top" == b.region || "bottom" == b.region ? "h" : "w"] = g);
        "leading" == d && (d = b.isLeftToRight() ? "left" : "right");
        "trailing" == d && (d = b.isLeftToRight() ? "right" : "left");
        "top" == d || "bottom" == d ? (c.w = a.w, e(b, c), a.h -= b.h, "top" == d ? a.t += b.h : f.top = a.t + a.h + "px") : "left" == d || "right" == d ? (c.h = a.h, e(b, c), a.w -= b.w, "left" == d ? a.l += b.w : f.left = a.l + a.w + "px") : ("client" == d || "center" == d) && e(b, a)
      })
    }};
    b.setObject("dijit.layout.utils", k);
    return k
  })
}, "lsmb/Invoice":function() {
  require(["dojo/_base/declare", "dijit/registry", "dojo/on", "lsmb/Form", "dijit/_Container"], function(f, m, l, g, b) {
    return f("lsmb/Invoice", [g, b], {_update:function() {
      this.clickedAction = "update";
      this.submit()
    }, startup:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l(m.byId("invoice-lines"), "changed", function() {
        b._update()
      }))
    }})
  })
}, "lsmb/InvoiceLine":function() {
  require(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dijit/_Container"], function(f, m, l, g, b) {
    return f("lsmb/InvoiceLine", [m, b], {})
  })
}, "dijit/_WidgetsInTemplateMixin":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare", "dojo/_base/lang", "dojo/parser"], function(f, m, l, g, b) {
    return l("dijit._WidgetsInTemplateMixin", null, {_earlyTemplatedStartup:!1, widgetsInTemplate:!0, contextRequire:null, _beforeFillContent:function() {
      if(this.widgetsInTemplate) {
        var e = this.domNode;
        this.containerNode && !this.searchContainerNode && (this.containerNode.stopParser = !0);
        b.parse(e, {noStart:!this._earlyTemplatedStartup, template:!0, inherited:{dir:this.dir, lang:this.lang, textDir:this.textDir}, propsThis:this, contextRequire:this.contextRequire, scope:"dojo"}).then(g.hitch(this, function(b) {
          this._startupWidgets = b;
          for(var d = 0;d < b.length;d++) {
            this._processTemplateNode(b[d], function(a, b) {
              return a[b]
            }, function(a, b, d) {
              return b in a ? a.connect(a, b, d) : a.on(b, d, !0)
            })
          }
          this.containerNode && this.containerNode.stopParser && delete this.containerNode.stopParser
        }));
        if(!this._startupWidgets) {
          throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
        }
      }
    }, _processTemplateNode:function(b, f, d) {
      return f(b, "dojoType") || f(b, "data-dojo-type") ? !0 : this.inherited(arguments)
    }, startup:function() {
      f.forEach(this._startupWidgets, function(b) {
        b && (!b._started && b.startup) && b.startup()
      });
      this._startupWidgets = null;
      this.inherited(arguments)
    }})
  })
}, "lsmb/InvoiceLines":function() {
  require(["dojo/_base/declare", "dijit/registry", "dijit/_WidgetBase", "dijit/_Container"], function(f, m, l, g) {
    return f("lsmb/InvoiceLines", [l, g], {removeLine:function(b) {
      this.removeChild(m.byId(b));
      this.emit("changed", {action:"removed"})
    }})
  })
}, "lsmb/MainContentPane":function() {
  define("dijit/layout/ContentPane dojo/_base/declare dojo/_base/event dijit/registry dojo/dom-style dojo/_base/lang dojo/promise/Promise dojo/on dojo/hash dojo/promise/all dojo/request/xhr dojo/query dojo/request/iframe dojo/dom-class".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n) {
    return m("lsmb/MainContentPane", [f], {last_page:null, interceptClick:null, report_request_error:function(a) {
      var b = g.byId("errorDialog");
      0 === a.response.status ? b.set("content", "Could not connect to server") : b.set("content", a.response.data);
      b.show()
    }, report_error:function(a) {
      var b = g.byId("errorDialog");
      b.set("content", a);
      b.show()
    }, set_main_div:function(a) {
      var b = this;
      if(a = a.match(/<body[^>]*>([\s\S]*)(<\/body>)?/i)) {
        return this.set("content", a ? a[1] : "").then(function() {
          b.show_main_div()
        }, function() {
          b.report_error("Server return value invalid")
        })
      }
      this.report_error("Invalid server response: document lacks BODY tag")
    }, load_form:function(a, b) {
      var c = this;
      c.fade_main_div();
      return h(a, b).then(function(a) {
        c.hide_main_div();
        c.set_main_div(a)
      }, function(a) {
        c.show_main_div();
        c.report_request_error(a)
      })
    }, download_link:function(a) {
    }, load_link:function(a) {
      if(this.last_page != a) {
        return this.last_page = a, this.load_form(a, {handlesAs:"text"})
      }
    }, fade_main_div:function() {
      n.replace(this.domNode, "parsing", "done-parsing");
      b.set(this.domNode, "opacity", "0.3")
    }, hide_main_div:function() {
      b.set(this.domNode, "visibility", "hidden")
    }, show_main_div:function() {
      b.set(this.domNode, "visibility", "visible");
      b.set(this.domNode, "opacity", "1");
      n.replace(this.domNode, "done-parsing", "parsing")
    }, set:function() {
      var a = null, b = 0, d = null, h = this;
      1 === arguments.length && e.isObject(arguments[0]) && null !== arguments[0].content ? (a = arguments[0].content, delete arguments[0].content) : 1 === arguments.length && e.isString(arguments[0]) ? (a = arguments[0], b = !0) : 2 === arguments.length && "content" == arguments[0] && (a = arguments[1], b = !0);
      null !== a && (d = this.inherited("set", arguments, ["content", a]).then(function() {
        p("a", h.domNode).forEach(h.interceptClick);
        h.show_main_div()
      }));
      if(b) {
        return d
      }
      a = this.inherited(arguments);
      return null !== d && d instanceof k && null !== a && a instanceof k ? c([d, a]) : null !== d && d instanceof k ? d : a
    }})
  })
}, "dijit/layout/ContentPane":function() {
  define("dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/i18n!../nls/loading dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t, q) {
    return c("dijit.layout.ContentPane", [l, g, b], {href:"", content:"", extractContent:!1, parseOnLoad:!0, parserScope:f._scopeName, preventCache:!1, preload:!1, refreshOnShow:!1, loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e", errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e", isLoaded:!1, 
    baseClass:"dijitContentPane", ioArgs:{}, onLoadDeferred:null, _setTitleAttr:null, stopParser:!0, template:!1, markupFactory:function(a, b, c) {
      var d = new c(a, b);
      return!d.href && d._contentSetter && d._contentSetter.parseDeferred && !d._contentSetter.parseDeferred.isFulfilled() ? d._contentSetter.parseDeferred.then(function() {
        return d
      }) : d
    }, create:function(a, b) {
      if((!a || !a.template) && b && !("href" in a) && !("content" in a)) {
        b = p.byId(b);
        for(var c = b.ownerDocument.createDocumentFragment();b.firstChild;) {
          c.appendChild(b.firstChild)
        }
        a = m.delegate(a, {content:c})
      }
      this.inherited(arguments, [a, b])
    }, postMixInProperties:function() {
      this.inherited(arguments);
      var a = t.getLocalization("dijit", "loading", this.lang);
      this.loadingMessage = e.substitute(this.loadingMessage, a);
      this.errorMessage = e.substitute(this.errorMessage, a)
    }, buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode);
      this.domNode.removeAttribute("title")
    }, startup:function() {
      this.inherited(arguments);
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && m.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, _startChildren:function() {
      a.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && m.isFunction(a.startup)) && (a.startup(), a._started = !0)
      });
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && m.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, setHref:function(a) {
      f.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
      return this.set("href", a)
    }, _setHrefAttr:function(a) {
      this.cancel();
      this.onLoadDeferred = new h(m.hitch(this, "cancel"));
      this.onLoadDeferred.then(m.hitch(this, "onLoad"));
      this._set("href", a);
      this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
      return this.onLoadDeferred
    }, setContent:function(a) {
      f.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
      this.set("content", a)
    }, _setContentAttr:function(a) {
      this._set("href", "");
      this.cancel();
      this.onLoadDeferred = new h(m.hitch(this, "cancel"));
      this._created && this.onLoadDeferred.then(m.hitch(this, "onLoad"));
      this._setContent(a || "");
      this._isDownloaded = !1;
      return this.onLoadDeferred
    }, _getContentAttr:function() {
      return this.containerNode.innerHTML
    }, cancel:function() {
      this._xhrDfd && -1 == this._xhrDfd.fired && this._xhrDfd.cancel();
      delete this._xhrDfd;
      this.onLoadDeferred = null
    }, destroy:function() {
      this.cancel();
      this.inherited(arguments)
    }, destroyRecursive:function(a) {
      this._beingDestroyed || this.inherited(arguments)
    }, _onShow:function() {
      this.inherited(arguments);
      if(this.href && !this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow)) {
        return this.refresh()
      }
    }, refresh:function() {
      this.cancel();
      this.onLoadDeferred = new h(m.hitch(this, "cancel"));
      this.onLoadDeferred.then(m.hitch(this, "onLoad"));
      this._load();
      return this.onLoadDeferred
    }, _load:function() {
      this._setContent(this.onDownloadStart(), !0);
      var a = this, b = {preventCache:this.preventCache || this.refreshOnShow, url:this.href, handleAs:"text"};
      m.isObject(this.ioArgs) && m.mixin(b, this.ioArgs);
      var c = this._xhrDfd = (this.ioMethod || u.get)(b), d;
      c.then(function(b) {
        d = b;
        try {
          return a._isDownloaded = !0, a._setContent(b, !1)
        }catch(c) {
          a._onError("Content", c)
        }
      }, function(b) {
        c.canceled || a._onError("Download", b);
        delete a._xhrDfd;
        return b
      }).then(function() {
        a.onDownloadEnd();
        delete a._xhrDfd;
        return d
      });
      delete this._hrefChanged
    }, _onLoadHandler:function(a) {
      this._set("isLoaded", !0);
      try {
        this.onLoadDeferred.resolve(a)
      }catch(b) {
        console.error("Error " + this.widgetId + " running custom onLoad code: " + b.message)
      }
    }, _onUnloadHandler:function() {
      this._set("isLoaded", !1);
      try {
        this.onUnload()
      }catch(a) {
        console.error("Error " + this.widgetId + " running custom onUnload code: " + a.message)
      }
    }, destroyDescendants:function(b) {
      this.isLoaded && this._onUnloadHandler();
      var c = this._contentSetter;
      a.forEach(this.getChildren(), function(a) {
        a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b);
        a._destroyed = !0
      });
      c && (a.forEach(c.parseResults, function(a) {
        a._destroyed || (a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b), a._destroyed = !0)
      }), delete c.parseResults);
      b || n.empty(this.containerNode);
      delete this._singleChild
    }, _setContent:function(a, b) {
      this.destroyDescendants();
      var c = this._contentSetter;
      c && c instanceof k._ContentSetter || (c = this._contentSetter = new k._ContentSetter({node:this.containerNode, _onError:m.hitch(this, this._onError), onContentError:m.hitch(this, function(a) {
        a = this.onContentError(a);
        try {
          this.containerNode.innerHTML = a
        }catch(b) {
          console.error("Fatal " + this.id + " could not change content due to " + b.message, b)
        }
      })}));
      var d = m.mixin({cleanContent:this.cleanContent, extractContent:this.extractContent, parseContent:!a.domNode && this.parseOnLoad, parserScope:this.parserScope, startup:!1, dir:this.dir, lang:this.lang, textDir:this.textDir}, this._contentSetterParams || {}), d = c.set(m.isObject(a) && a.domNode ? a.domNode : a, d), h = this;
      return q(d && d.then ? d : c.parseDeferred, function() {
        delete h._contentSetterParams;
        b || (h._started && (h._startChildren(), h._scheduleLayout()), h._onLoadHandler(a))
      })
    }, _onError:function(a, b, c) {
      this.onLoadDeferred.reject(b);
      a = this["on" + a + "Error"].call(this, b);
      c ? console.error(c, b) : a && this._setContent(a, !0)
    }, onLoad:function() {
    }, onUnload:function() {
    }, onDownloadStart:function() {
      return this.loadingMessage
    }, onContentError:function() {
    }, onDownloadError:function() {
      return this.errorMessage
    }, onDownloadEnd:function() {
    }})
  })
}, "dojo/html":function() {
  define("./_base/kernel ./_base/lang ./_base/array ./_base/declare ./dom ./dom-construct ./parser".split(" "), function(f, m, l, g, b, e, k) {
    var d = 0, a = {_secureForInnerHtml:function(a) {
      return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
    }, _emptyNode:e.empty, _setNodeContent:function(a, b) {
      e.empty(a);
      if(b) {
        if("string" == typeof b && (b = e.toDom(b, a.ownerDocument)), !b.nodeType && m.isArrayLike(b)) {
          for(var d = b.length, f = 0;f < b.length;f = d == b.length ? f + 1 : 0) {
            e.place(b[f], a, "last")
          }
        }else {
          e.place(b, a, "last")
        }
      }
      return a
    }, _ContentSetter:g("dojo.html._ContentSetter", null, {node:"", content:"", id:"", cleanContent:!1, extractContent:!1, parseContent:!1, parserScope:f._scopeName, startup:!0, constructor:function(a, e) {
      m.mixin(this, a || {});
      e = this.node = b.byId(this.node || e);
      this.id || (this.id = ["Setter", e ? e.id || e.tagName : "", d++].join("_"))
    }, set:function(a, b) {
      void 0 !== a && (this.content = a);
      b && this._mixin(b);
      this.onBegin();
      this.setContent();
      var d = this.onEnd();
      return d && d.then ? d : this.node
    }, setContent:function() {
      var b = this.node;
      if(!b) {
        throw Error(this.declaredClass + ": setContent given no node");
      }
      try {
        b = a._setNodeContent(b, this.content)
      }catch(d) {
        var e = this.onContentError(d);
        try {
          b.innerHTML = e
        }catch(f) {
          console.error("Fatal " + this.declaredClass + ".setContent could not change content due to " + f.message, f)
        }
      }
      this.node = b
    }, empty:function() {
      this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
      this.parseResults && this.parseResults.length && (l.forEach(this.parseResults, function(a) {
        a.destroy && a.destroy()
      }), delete this.parseResults);
      e.empty(this.node)
    }, onBegin:function() {
      var b = this.content;
      if(m.isString(b) && (this.cleanContent && (b = a._secureForInnerHtml(b)), this.extractContent)) {
        var d = b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        d && (b = d[1])
      }
      this.empty();
      this.content = b;
      return this.node
    }, onEnd:function() {
      this.parseContent && this._parse();
      return this.node
    }, tearDown:function() {
      delete this.parseResults;
      delete this.parseDeferred;
      delete this.node;
      delete this.content
    }, onContentError:function(a) {
      return"Error occurred setting content: " + a
    }, onExecError:function(a) {
      return"Error occurred executing scripts: " + a
    }, _mixin:function(a) {
      var b = {}, d;
      for(d in a) {
        d in b || (this[d] = a[d])
      }
    }, _parse:function() {
      var a = this.node;
      try {
        var b = {};
        l.forEach(["dir", "lang", "textDir"], function(a) {
          this[a] && (b[a] = this[a])
        }, this);
        var d = this;
        this.parseDeferred = k.parse({rootNode:a, noStart:!this.startup, inherited:b, scope:this.parserScope}).then(function(a) {
          return d.parseResults = a
        }, function(a) {
          d._onError("Content", a, "Error parsing in _ContentSetter#" + this.id)
        })
      }catch(e) {
        this._onError("Content", e, "Error parsing in _ContentSetter#" + this.id)
      }
    }, _onError:function(b, d, e) {
      b = this["on" + b + "Error"].call(this, d);
      e ? console.error(e, d) : b && a._setNodeContent(this.node, b, !0)
    }}), set:function(b, d, e) {
      void 0 == d && (d = "");
      return e ? (new a._ContentSetter(m.mixin(e, {content:d, node:b}))).set() : a._setNodeContent(b, d, !0)
    }};
    m.setObject("dojo.html", a);
    return a
  })
}, "dojo/request/iframe":function() {
  define("module require ./watch ./util ./handlers ../_base/lang ../io-query ../query ../has ../dom ../dom-construct ../_base/window ../NodeList-dom".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p) {
    function s(a) {
      return!this.isFulfilled()
    }
    function n(a) {
      return!!this._finished
    }
    function u(a, c) {
      if(!c) {
        try {
          var h = a.options, f = q.doc(q._frame), g = h.handleAs;
          if("html" !== g) {
            if("xml" === g) {
              if("html" === f.documentElement.tagName.toLowerCase()) {
                d("a", f.documentElement).orphan();
                var k = f.documentElement.innerText || f.documentElement.textContent, k = k.replace(/>\s+</g, "\x3e\x3c");
                a.text = e.trim(k)
              }else {
                a.data = f
              }
            }else {
              a.text = f.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = f
          }
        }catch(n) {
          c = n
        }
      }
      c ? this.reject(c) : this._finished ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function t(a) {
      this._callNext()
    }
    function q(a, b, c) {
      var d = g.parseArgs(a, g.deepCreate(v, b), !0);
      a = d.url;
      b = d.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      q._frame || (q._frame = q.create(q._iframeName, y + "();"));
      a = g.deferred(d, null, s, n, u, t);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, q._currentDfd = null, q._fireNextRequest())
      };
      a._legacy = c;
      q._dfdQueue.push(a);
      q._fireNextRequest();
      l(a);
      return c ? a : a.promise
    }
    var r = f.id.replace(/[\/\.\-]/g, "_"), y = r + "_onload";
    p.global[y] || (p.global[y] = function() {
      var a = q._currentDfd;
      if(a) {
        var b = c.byId(a.response.options.form) || a._tmpForm;
        if(b) {
          for(var d = a._contentToClean, e = 0;e < d.length;e++) {
            for(var f = d[e], g = 0;g < b.childNodes.length;g++) {
              var k = b.childNodes[g];
              if(k.name === f) {
                h.destroy(k);
                break
              }
            }
          }
          a._originalAction && b.setAttribute("action", a._originalAction);
          a._originalMethod && (b.setAttribute("method", a._originalMethod), b.method = a._originalMethod);
          a._originalTarget && (b.setAttribute("target", a._originalTarget), b.target = a._originalTarget)
        }
        a._tmpForm && (h.destroy(a._tmpForm), delete a._tmpForm);
        a._finished = !0
      }else {
        q._fireNextRequest()
      }
    });
    var v = {method:"POST"};
    q.create = function(b, c, d) {
      if(p.global[b]) {
        return p.global[b]
      }
      if(p.global.frames[b]) {
        return p.global.frames[b]
      }
      d || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), d = a("config-dojoBlankHtmlUrl") || m.toUrl("dojo/resources/blank.html"));
      c = h.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + d + '" onload\x3d"' + c + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', p.body());
      return p.global[b] = c
    };
    q.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var c = p.doc.getElementsByTagName("iframe");
        if(a.document && c[b].contentWindow && c[b].contentWindow.document) {
          return c[b].contentWindow.document
        }
        if(p.doc.frames[b] && p.doc.frames[b].document) {
          return p.doc.frames[b].document
        }
      }
      return null
    };
    q.setSrc = function(a, b, c) {
      a = p.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        c ? a.location.replace(b) : a.location = b
      }catch(d) {
      }
    };
    q._iframeName = r + "_IoIframe";
    q._notifyStart = function() {
    };
    q._dfdQueue = [];
    q._currentDfd = null;
    q._fireNextRequest = function() {
      var a;
      try {
        if(!q._currentDfd && q._dfdQueue.length) {
          do {
            a = q._currentDfd = q._dfdQueue.shift()
          }while(a && (a.canceled || a.isCanceled && a.isCanceled()) && q._dfdQueue.length);
          if(!a || a.canceled || a.isCanceled && a.isCanceled()) {
            q._currentDfd = null
          }else {
            var b = a.response, d = b.options, f = a._contentToClean = [], n = c.byId(d.form), l = g.notify, s = d.data || null, t;
            !a._legacy && "POST" === d.method && !n ? n = a._tmpForm = h.create("form", {name:r + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, p.body()) : "GET" === d.method && (n && -1 < b.url.indexOf("?")) && (t = b.url.slice(b.url.indexOf("?") + 1), s = e.mixin(k.queryToObject(t), s));
            if(n) {
              if(!a._legacy) {
                var m = n;
                do {
                  m = m.parentNode
                }while(m && m !== p.doc.documentElement);
                m || (n.style.position = "absolute", n.style.left = "-1000px", n.style.top = "-1000px", p.body().appendChild(n));
                n.name || (n.name = r + "_form")
              }
              if(s) {
                var m = function(a, b) {
                  h.create("input", {type:"hidden", name:a, value:b}, n);
                  f.push(a)
                }, u;
                for(u in s) {
                  var v = s[u];
                  if(e.isArray(v) && 1 < v.length) {
                    for(t = 0;t < v.length;t++) {
                      m(u, v[t])
                    }
                  }else {
                    n[u] ? n[u].value = v : m(u, v)
                  }
                }
              }
              var y = n.getAttributeNode("action"), M = n.getAttributeNode("method"), A = n.getAttributeNode("target");
              b.url && (a._originalAction = y ? y.value : null, y ? y.value = b.url : n.setAttribute("action", b.url));
              if(a._legacy) {
                if(!M || !M.value) {
                  M ? M.value = d.method : n.setAttribute("method", d.method)
                }
              }else {
                a._originalMethod = M ? M.value : null, M ? M.value = d.method : n.setAttribute("method", d.method)
              }
              a._originalTarget = A ? A.value : null;
              A ? A.value = q._iframeName : n.setAttribute("target", q._iframeName);
              n.target = q._iframeName;
              l && l.emit("send", b, a.promise.cancel);
              q._notifyStart(b);
              n.submit()
            }else {
              d = "", b.options.data && (d = b.options.data, "string" !== typeof d && (d = k.objectToQuery(d))), m = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + d, l && l.emit("send", b, a.promise.cancel), q._notifyStart(b), q.setSrc(q._frame, m, !0)
            }
          }
        }
      }catch(C) {
        a.reject(C)
      }
    };
    g.addCommonMethods(q, ["GET", "POST"]);
    return q
  })
}, "dojo/NodeList-dom":function() {
  define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function(f, m, l, g, b, e, k, d, a) {
    function c(a) {
      return function(b, c, d) {
        return 2 == arguments.length ? a["string" == typeof c ? "get" : "set"](b, c) : a.set(b, c, d)
      }
    }
    var h = function(a) {
      return 1 == a.length && "string" == typeof a[0]
    }, p = function(a) {
      var b = a.parentNode;
      b && b.removeChild(a)
    }, s = m.NodeList, n = s._adaptWithCondition, u = s._adaptAsForEach, t = s._adaptAsMap;
    g.extend(s, {_normalize:function(a, b) {
      var c = !0 === a.parse;
      if("string" == typeof a.template) {
        var d = a.templateFunc || f.string && f.string.substitute;
        a = d ? d(a.template, a) : a
      }
      d = typeof a;
      "string" == d || "number" == d ? (a = e.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? g._toArray(a.childNodes) : [a]) : g.isArrayLike(a) ? g.isArray(a) || (a = g._toArray(a)) : a = [a];
      c && (a._runParse = !0);
      return a
    }, _cloneNode:function(a) {
      return a.cloneNode(!0)
    }, _place:function(a, b, c, d) {
      if(!(1 != b.nodeType && "only" == c)) {
        for(var h, g = a.length, n = g - 1;0 <= n;n--) {
          var k = d ? this._cloneNode(a[n]) : a[n];
          if(a._runParse && f.parser && f.parser.parse) {
            h || (h = b.ownerDocument.createElement("div"));
            h.appendChild(k);
            f.parser.parse(h);
            for(k = h.firstChild;h.firstChild;) {
              h.removeChild(h.firstChild)
            }
          }
          n == g - 1 ? e.place(k, b, c) : b.parentNode.insertBefore(k, b);
          b = k
        }
      }
    }, position:t(k.position), attr:n(c(d), h), style:n(c(a), h), addClass:u(b.add), removeClass:u(b.remove), toggleClass:u(b.toggle), replaceClass:u(b.replace), empty:u(e.empty), removeAttr:u(d.remove), marginBox:t(k.getMarginBox), place:function(a, b) {
      var c = m(a)[0];
      return this.forEach(function(a) {
        e.place(a, c, b)
      })
    }, orphan:function(a) {
      return(a ? m._filterResult(this, a) : this).forEach(p)
    }, adopt:function(a, b) {
      return m(a).place(this[0], b)._stash(this)
    }, query:function(a) {
      if(!a) {
        return this
      }
      var b = new s;
      this.map(function(c) {
        m(a, c).forEach(function(a) {
          void 0 !== a && b.push(a)
        })
      });
      return b._stash(this)
    }, filter:function(a) {
      var b = arguments, c = this, d = 0;
      if("string" == typeof a) {
        c = m._filterResult(this, b[0]);
        if(1 == b.length) {
          return c._stash(this)
        }
        d = 1
      }
      return this._wrap(l.filter(c, b[d], b[d + 1]), this)
    }, addContent:function(a, b) {
      a = this._normalize(a, this[0]);
      for(var c = 0, d;d = this[c];c++) {
        a.length ? this._place(a, d, b, 0 < c) : e.empty(d)
      }
      return this
    }});
    return s
  })
}, "lsmb/MaximizeMinimize":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/dom-style", "dojo/on", "dijit/_WidgetBase"], function(f, m, l, g, b) {
    return f("lsmb/MaximizeMinimize", [b], {state:"min", stateData:{max:{nextState:"min", imgURL:"payments/img/up.gif", display:"block"}, min:{nextState:"max", imgURL:"payments/img/down.gif", display:"none"}}, mmNodeId:null, setState:function(b) {
      var f = this.stateData[b];
      this.domNode.src = f.imgURL;
      this.state = b;
      l.set(m.byId(this.mmNodeId), "display", f.display)
    }, toggle:function() {
      this.setState(this.stateData[this.state].nextState)
    }, postCreate:function() {
      var b = this.domNode, f = this;
      this.inherited(arguments);
      this.own(g(b, "click", function() {
        f.toggle()
      }));
      this.setState(this.state)
    }})
  })
}, "lsmb/PrintButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/dom-attr dijit/form/Button lsmb/iframe dojo/dom-form dijit/registry".split(" "), function(f, m, l, g, b, e, k) {
    return f("lsmb/PrintButton", [g], {minimalGET:!0, onClick:function(d) {
      var a = this.valueNode.form;
      if("screen" == a.media.value) {
        var c;
        this.minimalGET ? (c = {action:this.get("value"), type:a.type.value, id:a.id.value, formname:a.formname.value, language_code:a.language_code.value, media:"screen", format:a.format.value}, a.vc && (c.vc = a.vc.value)) : (c = e.toObject(a), c.action = this.get("value"));
        b(l.get(a, "action"), {data:c}).then(function() {
        }, function(a) {
          k.byId("maindiv").report_request_error(a)
        });
        m.stop(d)
      }else {
        return this.inherited(arguments)
      }
    }})
  })
}, "lsmb/iframe":function() {
  define("module require dojo/request/watch dojo/request/util dojo/request/handlers dojo/_base/lang dojo/io-query dojo/query dojo/has dojo/dom dojo/dom-construct dojo/cookie dojo/_base/window dojo/NodeList-manipulate dojo/NodeList-dom".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s) {
    function n(a) {
      return!this.isFulfilled()
    }
    function u(a) {
      return!!this._finished || "requested" !== p(x)
    }
    function t(a, f) {
      var g = a.options, n = c.byId(g.form) || this._tmpForm;
      if(n) {
        for(var k = this._contentToClean, l = 0;l < k.length;l++) {
          for(var s = k[l], t = 0;t < n.childNodes.length;t++) {
            var m = n.childNodes[t];
            if(m.name === s) {
              h.destroy(m);
              break
            }
          }
        }
        this._originalAction && n.setAttribute("action", this._originalAction);
        this._originalMethod && (n.setAttribute("method", this._originalMethod), n.method = this._originalMethod);
        this._originalTarget && (n.setAttribute("target", this._originalTarget), n.target = this._originalTarget)
      }
      this._tmpForm && (h.destroy(this._tmpForm), delete this._tmpForm);
      if(!f && "requested" === p(x)) {
        try {
          var q = r.doc(r._frame), u = g.handleAs;
          if("html" !== u) {
            if("xml" === u) {
              if("html" === q.documentElement.tagName.toLowerCase()) {
                d("a", q.documentElement).orphan();
                var w = q.documentElement.innerText || q.documentElement.textContent, w = w.replace(/>\s+</g, "\x3e\x3c");
                a.text = e.trim(w)
              }else {
                a.data = q
              }
            }else {
              a.text = q.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = q
          }
        }catch(v) {
          f = v
        }
      }
      f ? this.reject(f) : this._finished || "requested" !== p(x) ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function q(a) {
      this._callNext()
    }
    function r(a, b, c) {
      var d = g.parseArgs(a, g.deepCreate(w, b), !0);
      a = d.url;
      b = d.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      r._frame || (r._frame = r.create(r._iframeName, v + "();"));
      a = g.deferred(d, null, n, u, t, q);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, r._currentDfd = null, r._fireNextRequest())
      };
      a._legacy = c;
      r._dfdQueue.push(a);
      r._fireNextRequest();
      l(a);
      return c ? a : a.promise
    }
    var y = f.id.replace(/[\/\.\-]/g, "_"), v = y + "_onload", x = "request-download." + (new Date).getTime();
    s.global[v] || (s.global[v] = function() {
      var a = r._currentDfd;
      a ? a._finished = !0 : r._fireNextRequest()
    });
    var w = {method:"POST"};
    r.create = function(b, c, d) {
      if(s.global[b]) {
        return s.global[b]
      }
      if(s.global.frames[b]) {
        return s.global.frames[b]
      }
      d || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), d = a("config-dojoBlankHtmlUrl") || m.toUrl("dojo/resources/blank.html"));
      c = h.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + d + '" onload\x3d"' + c + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', s.body());
      return s.global[b] = c
    };
    r.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var c = s.doc.getElementsByTagName("iframe");
        if(a.document && c[b].contentWindow && c[b].contentWindow.document) {
          return c[b].contentWindow.document
        }
        if(s.doc.frames[b] && s.doc.frames[b].document) {
          return s.doc.frames[b].document
        }
      }
      return null
    };
    r.setSrc = function(a, b, c) {
      a = s.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        c ? a.location.replace(b) : a.location = b
      }catch(d) {
      }
    };
    r._iframeName = y + "_IoIframe";
    r._notifyStart = function() {
    };
    r._dfdQueue = [];
    r._currentDfd = null;
    r._fireNextRequest = function() {
      var a;
      try {
        if(!r._currentDfd && r._dfdQueue.length) {
          do {
            a = r._currentDfd = r._dfdQueue.shift()
          }while(a && (a.canceled || a.isCanceled && a.isCanceled()) && r._dfdQueue.length);
          if(!a || a.canceled || a.isCanceled && a.isCanceled()) {
            r._currentDfd = null
          }else {
            var b = a.response, f = b.options, n = a._contentToClean = [], l = c.byId(f.form), t = g.notify, m = f.data || null, q;
            m["request.download-cookie"] = x;
            p(x, "requested");
            !a._legacy && "POST" === f.method && !l ? l = a._tmpForm = h.create("form", {name:y + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, s.body()) : "GET" === f.method && (l && -1 < b.url.indexOf("?")) && (q = b.url.slice(b.url.indexOf("?") + 1), m = e.mixin(k.queryToObject(q), m));
            if(l) {
              if(!a._legacy) {
                var u = l;
                do {
                  u = u.parentNode
                }while(u && u !== s.doc.documentElement);
                u || (l.style.position = "absolute", l.style.left = "-1000px", l.style.top = "-1000px", s.body().appendChild(l));
                l.name || (l.name = y + "_form")
              }
              if(m) {
                var u = function(a, b) {
                  h.create("input", {type:"hidden", name:a, value:b}, l);
                  n.push(a)
                }, w;
                for(w in m) {
                  var v = m[w];
                  if(e.isArray(v) && 1 < v.length) {
                    for(q = 0;q < v.length;q++) {
                      u(w, v[q])
                    }
                  }else {
                    var A = d("input[name\x3d'" + w + "']", l);
                    -1 == A.indexOf() ? u(w, v) : A.val(v)
                  }
                }
              }
              var C = l.getAttributeNode("action"), z = l.getAttributeNode("method"), N = l.getAttributeNode("target");
              b.url && (a._originalAction = C ? C.value : null, C ? C.value = b.url : l.setAttribute("action", b.url));
              if(a._legacy) {
                if(!z || !z.value) {
                  z ? z.value = f.method : l.setAttribute("method", f.method)
                }
              }else {
                a._originalMethod = z ? z.value : null, z ? z.value = f.method : l.setAttribute("method", f.method)
              }
              a._originalTarget = N ? N.value : null;
              N ? N.value = r._iframeName : l.setAttribute("target", r._iframeName);
              l.target = r._iframeName;
              t && t.emit("send", b, a.promise.cancel);
              r._notifyStart(b);
              l.submit()
            }else {
              f = "", b.options.data && (f = b.options.data, "string" !== typeof f && (f = k.objectToQuery(f))), u = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + f, t && t.emit("send", b, a.promise.cancel), r._notifyStart(b), r.setSrc(r._frame, u, !0)
            }
          }
        }
      }catch(K) {
        a.reject(K)
      }
    };
    g.addCommonMethods(r, ["GET", "POST"]);
    return r
  })
}, "dojo/cookie":function() {
  define(["./_base/kernel", "./regexp"], function(f, m) {
    f.cookie = function(f, g, b) {
      var e = document.cookie, k;
      if(1 == arguments.length) {
        k = (k = e.match(RegExp("(?:^|; )" + m.escapeString(f) + "\x3d([^;]*)"))) ? decodeURIComponent(k[1]) : void 0
      }else {
        b = b || {};
        e = b.expires;
        if("number" == typeof e) {
          var d = new Date;
          d.setTime(d.getTime() + 864E5 * e);
          e = b.expires = d
        }
        e && e.toUTCString && (b.expires = e.toUTCString());
        g = encodeURIComponent(g);
        var e = f + "\x3d" + g, a;
        for(a in b) {
          e += "; " + a, d = b[a], !0 !== d && (e += "\x3d" + d)
        }
        document.cookie = e
      }
      return k
    };
    f.cookie.isSupported = function() {
      "cookieEnabled" in navigator || (this("__djCookieTest__", "CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" == this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {expires:-1}));
      return navigator.cookieEnabled
    };
    return f.cookie
  })
}, "dojo/NodeList-manipulate":function() {
  define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "), function(f, m, l, g, b) {
    function e(a) {
      for(;a.childNodes[0] && 1 == a.childNodes[0].nodeType;) {
        a = a.childNodes[0]
      }
      return a
    }
    function k(a, b) {
      "string" == typeof a ? (a = g.toDom(a, b && b.ownerDocument), 11 == a.nodeType && (a = a.childNodes[0])) : 1 == a.nodeType && a.parentNode && (a = a.cloneNode(!1));
      return a
    }
    var d = f.NodeList;
    m.extend(d, {_placeMultiple:function(a, b) {
      for(var d = "string" == typeof a || a.nodeType ? f(a) : a, e = [], k = 0;k < d.length;k++) {
        for(var n = d[k], l = this.length, t = l - 1, m;m = this[t];t--) {
          0 < k && (m = this._cloneNode(m), e.unshift(m)), t == l - 1 ? g.place(m, n, b) : n.parentNode.insertBefore(m, n), n = m
        }
      }
      e.length && (e.unshift(0), e.unshift(this.length - 1), Array.prototype.splice.apply(this, e));
      return this
    }, innerHTML:function(a) {
      return arguments.length ? this.addContent(a, "only") : this[0].innerHTML
    }, text:function(a) {
      if(arguments.length) {
        for(var c = 0, d;d = this[c];c++) {
          1 == d.nodeType && b.set(d, "textContent", a)
        }
        return this
      }
      for(var e = "", c = 0;d = this[c];c++) {
        e += b.get(d, "textContent")
      }
      return e
    }, val:function(a) {
      if(arguments.length) {
        for(var b = m.isArray(a), d = 0, e;e = this[d];d++) {
          var f = e.nodeName.toUpperCase(), g = e.type, k = b ? a[d] : a;
          if("SELECT" == f) {
            f = e.options;
            for(g = 0;g < f.length;g++) {
              var t = f[g];
              t.selected = e.multiple ? -1 != l.indexOf(a, t.value) : t.value == k
            }
          }else {
            "checkbox" == g || "radio" == g ? e.checked = e.value == k : e.value = k
          }
        }
        return this
      }
      if((e = this[0]) && 1 == e.nodeType) {
        a = e.value || "";
        if("SELECT" == e.nodeName.toUpperCase() && e.multiple) {
          a = [];
          f = e.options;
          for(g = 0;g < f.length;g++) {
            t = f[g], t.selected && a.push(t.value)
          }
          a.length || (a = null)
        }
        return a
      }
    }, append:function(a) {
      return this.addContent(a, "last")
    }, appendTo:function(a) {
      return this._placeMultiple(a, "last")
    }, prepend:function(a) {
      return this.addContent(a, "first")
    }, prependTo:function(a) {
      return this._placeMultiple(a, "first")
    }, after:function(a) {
      return this.addContent(a, "after")
    }, insertAfter:function(a) {
      return this._placeMultiple(a, "after")
    }, before:function(a) {
      return this.addContent(a, "before")
    }, insertBefore:function(a) {
      return this._placeMultiple(a, "before")
    }, remove:d.prototype.orphan, wrap:function(a) {
      if(this[0]) {
        a = k(a, this[0]);
        for(var b = 0, d;d = this[b];b++) {
          var f = this._cloneNode(a);
          d.parentNode && d.parentNode.replaceChild(f, d);
          e(f).appendChild(d)
        }
      }
      return this
    }, wrapAll:function(a) {
      if(this[0]) {
        a = k(a, this[0]);
        this[0].parentNode.replaceChild(a, this[0]);
        a = e(a);
        for(var b = 0, d;d = this[b];b++) {
          a.appendChild(d)
        }
      }
      return this
    }, wrapInner:function(a) {
      if(this[0]) {
        a = k(a, this[0]);
        for(var b = 0;b < this.length;b++) {
          var d = this._cloneNode(a);
          this._wrap(m._toArray(this[b].childNodes), null, this._NodeListCtor).wrapAll(d)
        }
      }
      return this
    }, replaceWith:function(a) {
      a = this._normalize(a, this[0]);
      for(var b = 0, d;d = this[b];b++) {
        this._place(a, d, "before", 0 < b), d.parentNode.removeChild(d)
      }
      return this
    }, replaceAll:function(a) {
      a = f(a);
      for(var b = this._normalize(this, this[0]), d = 0, e;e = a[d];d++) {
        this._place(b, e, "before", 0 < d), e.parentNode.removeChild(e)
      }
      return this
    }, clone:function() {
      for(var a = [], b = 0;b < this.length;b++) {
        a.push(this._cloneNode(this[b]))
      }
      return this._wrap(a, this, this._NodeListCtor)
    }});
    d.prototype.html || (d.prototype.html = d.prototype.innerHTML);
    return d
  })
}, "lsmb/PublishCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(f, m, l, g) {
    return f("lsmb/PublishCheckbox", [g], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(m(this, "change", function(e) {
        b.publish(e)
      }))
    }})
  })
}, "dijit/form/CheckBox":function() {
  define("require dojo/_base/declare dojo/dom-attr dojo/has dojo/query dojo/ready ./ToggleButton ./_CheckBoxMixin dojo/text!./templates/CheckBox.html dojo/NodeList-dom ../a11yclick".split(" "), function(f, m, l, g, b, e, k, d, a) {
    g("dijit-legacy-requires") && e(0, function() {
      f(["dijit/form/RadioButton"])
    });
    return m("dijit.form.CheckBox", [k, d], {templateString:a, baseClass:"dijitCheckBox", _setValueAttr:function(a, b) {
      "string" == typeof a && (this.inherited(arguments), a = !0);
      this._created && this.set("checked", a, b)
    }, _getValueAttr:function() {
      return this.checked && this._get("value")
    }, _setIconClassAttr:null, _setNameAttr:"focusNode", postMixInProperties:function() {
      this.inherited(arguments);
      this.checkedAttrSetting = ""
    }, _fillContent:function() {
    }, _onFocus:function() {
      this.id && b("label[for\x3d'" + this.id + "']").addClass("dijitFocusedLabel");
      this.inherited(arguments)
    }, _onBlur:function() {
      this.id && b("label[for\x3d'" + this.id + "']").removeClass("dijitFocusedLabel");
      this.inherited(arguments)
    }})
  })
}, "dijit/form/ToggleButton":function() {
  define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function(f, m, l, g) {
    return f("dijit.form.ToggleButton", [l, g], {baseClass:"dijitToggleButton", setChecked:function(b) {
      m.deprecated("setChecked(" + b + ") is deprecated. Use set('checked'," + b + ") instead.", "", "2.0");
      this.set("checked", b)
    }})
  })
}, "dijit/form/_ToggleButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(f, m) {
    return f("dijit.form._ToggleButtonMixin", null, {checked:!1, _aria_attr:"aria-pressed", _onClick:function(f) {
      var g = this.checked;
      this._set("checked", !g);
      var b = this.inherited(arguments);
      this.set("checked", b ? this.checked : g);
      return b
    }, _setCheckedAttr:function(f, g) {
      this._set("checked", f);
      var b = this.focusNode || this.domNode;
      this._created && m.get(b, "checked") != !!f && m.set(b, "checked", !!f);
      b.setAttribute(this._aria_attr, String(f));
      this._handleOnChange(f, g)
    }, postCreate:function() {
      this.inherited(arguments);
      var f = this.focusNode || this.domNode;
      this.checked && f.setAttribute("checked", "checked");
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.checked)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this.set("checked", this.params.checked || !1)
    }})
  })
}, "dijit/form/_CheckBoxMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(f, m) {
    return f("dijit.form._CheckBoxMixin", null, {type:"checkbox", value:"on", readOnly:!1, _aria_attr:"aria-checked", _setReadOnlyAttr:function(f) {
      this._set("readOnly", f);
      m.set(this.focusNode, "readOnly", f)
    }, _setLabelAttr:void 0, _getSubmitValue:function(f) {
      return null == f || "" === f ? "on" : f
    }, _setValueAttr:function(f) {
      f = this._getSubmitValue(f);
      this._set("value", f);
      m.set(this.focusNode, "value", f)
    }, reset:function() {
      this.inherited(arguments);
      this._set("value", this._getSubmitValue(this.params.value));
      m.set(this.focusNode, "value", this.value)
    }, _onClick:function(f) {
      return this.readOnly ? (f.stopPropagation(), f.preventDefault(), !1) : this.inherited(arguments)
    }})
  })
}, "lsmb/PublishNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(f, m, l, g) {
    return f("lsmb/PublishNumberTextBox", g, {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.own(m(this, "change", function(e) {
        b.publish(e)
      }))
    }})
  })
}, "dijit/form/NumberTextBox":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/i18n dojo/string dojo/number ./RangeBoundTextBox".split(" "), function(f, m, l, g, b, e) {
    var k = function(a) {
      a = a || {};
      var b = l.getLocalization("dojo.cldr", "number", l.normalizeLocale(a.locale)), d = a.pattern ? a.pattern : b[(a.type || "decimal") + "Format"];
      a = "number" == typeof a.places ? a.places : "string" === typeof a.places && 0 < a.places.length ? a.places.replace(/.*,/, "") : -1 != d.indexOf(".") ? d.split(".")[1].replace(/[^#0]/g, "").length : 0;
      return{sep:b.decimal, places:a}
    }, d = f("dijit.form.NumberTextBoxMixin", null, {pattern:function(a) {
      return"(" + (this.focused && this.editOptions ? this._regExpGenerator(m.delegate(a, this.editOptions)) + "|" : "") + this._regExpGenerator(a) + ")"
    }, value:NaN, editOptions:{pattern:"#.######"}, _formatter:b.format, _regExpGenerator:b.regexp, _decimalInfo:k(), postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, _setConstraintsAttr:function(a) {
      var b = "number" == typeof a.places ? a.places : 0;
      b && b++;
      "number" != typeof a.max && (a.max = 9 * Math.pow(10, 15 - b));
      "number" != typeof a.min && (a.min = -9 * Math.pow(10, 15 - b));
      this.inherited(arguments, [a]);
      this.focusNode && (this.focusNode.value && !isNaN(this.value)) && this.set("value", this.value);
      this._decimalInfo = k(a)
    }, _onFocus:function() {
      if(!this.disabled && !this.readOnly) {
        var a = this.get("value");
        "number" == typeof a && !isNaN(a) && (a = this.format(a, this.constraints), void 0 !== a && (this.textbox.value = a));
        this.inherited(arguments)
      }
    }, format:function(a, b) {
      var d = String(a);
      if("number" != typeof a) {
        return d
      }
      if(isNaN(a)) {
        return""
      }
      if(!("rangeCheck" in this && this.rangeCheck(a, b)) && !1 !== b.exponent && /\de[-+]?\d/i.test(d)) {
        return d
      }
      this.editOptions && this.focused && (b = m.mixin({}, b, this.editOptions));
      return this._formatter(a, b)
    }, _parser:b.parse, parse:function(a, b) {
      var d = this._parser(a, m.mixin({}, b, this.editOptions && this.focused ? this.editOptions : {}));
      this.editOptions && (this.focused && isNaN(d)) && (d = this._parser(a, b));
      return d
    }, _getDisplayedValueAttr:function() {
      var a = this.inherited(arguments);
      return isNaN(a) ? this.textbox.value : a
    }, filter:function(a) {
      if(null == a || "string" == typeof a && "" == a) {
        return NaN
      }
      "number" == typeof a && (!isNaN(a) && 0 != a) && (a = b.round(a, this._decimalInfo.places));
      return this.inherited(arguments, [a])
    }, serialize:function(a, b) {
      return"number" != typeof a || isNaN(a) ? "" : this.inherited(arguments)
    }, _setBlurValue:function() {
      var a = m.hitch(m.delegate(this, {focused:!0}), "get")("value");
      this._setValueAttr(a, !0)
    }, _setValueAttr:function(a, b, d) {
      if(void 0 !== a && void 0 === d) {
        if(d = String(a), "number" == typeof a) {
          if(isNaN(a)) {
            d = ""
          }else {
            if("rangeCheck" in this && this.rangeCheck(a, this.constraints) || !1 === this.constraints.exponent || !/\de[-+]?\d/i.test(d)) {
              d = void 0
            }
          }
        }else {
          a ? a = void 0 : (d = "", a = NaN)
        }
      }
      this.inherited(arguments, [a, b, d])
    }, _getValueAttr:function() {
      var a = this.inherited(arguments);
      if(isNaN(a) && "" !== this.textbox.value) {
        if(!1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) && RegExp("^" + b._realNumberRegexp(m.delegate(this.constraints)) + "$").test(this.textbox.value)) {
          return a = Number(this.textbox.value), isNaN(a) ? void 0 : a
        }
      }else {
        return a
      }
    }, isValid:function(a) {
      if(!this.focused || this._isEmpty(this.textbox.value)) {
        return this.inherited(arguments)
      }
      var b = this.get("value");
      return!isNaN(b) && this.rangeCheck(b, this.constraints) ? !1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) ? !0 : this.inherited(arguments) : !1
    }, _isValidSubset:function() {
      var a = "number" == typeof this.constraints.min, b = "number" == typeof this.constraints.max, d = this.get("value");
      if(isNaN(d) || !a && !b) {
        return this.inherited(arguments)
      }
      var e = d | 0, f = 0 > d, k = -1 != this.textbox.value.indexOf(this._decimalInfo.sep), l = (this.maxLength || 20) - this.textbox.value.length, m = k ? this.textbox.value.split(this._decimalInfo.sep)[1].replace(/[^0-9]/g, "") : "", e = k ? e + "." + m : e + "", l = g.rep("9", l), k = d;
      f ? k = Number(e + l) : d = Number(e + l);
      return!(a && d < this.constraints.min || b && k > this.constraints.max)
    }});
    f = f("dijit.form.NumberTextBox", [e, d], {baseClass:"dijitTextBox dijitNumberTextBox"});
    f.Mixin = d;
    return f
  })
}, "dojo/number":function() {
  define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function(f, m, l, g, b) {
    var e = {};
    f.setObject("dojo.number", e);
    e.format = function(b, a) {
      a = f.mixin({}, a || {});
      var c = m.normalizeLocale(a.locale), c = m.getLocalization("dojo.cldr", "number", c);
      a.customs = c;
      c = a.pattern || c[(a.type || "decimal") + "Format"];
      return isNaN(b) || Infinity == Math.abs(b) ? null : e._applyPattern(b, c, a)
    };
    e._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
    e._applyPattern = function(b, a, c) {
      c = c || {};
      var h = c.customs.group, f = c.customs.decimal;
      a = a.split(";");
      var g = a[0];
      a = a[0 > b ? 1 : 0] || "-" + g;
      if(-1 != a.indexOf("%")) {
        b *= 100
      }else {
        if(-1 != a.indexOf("\u2030")) {
          b *= 1E3
        }else {
          if(-1 != a.indexOf("\u00a4")) {
            h = c.customs.currencyGroup || h, f = c.customs.currencyDecimal || f, a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/, function(a, b, d, e) {
              a = c[["symbol", "currency", "displayName"][d.length - 1]] || c.currency || "";
              return!a ? "" : b + a + e
            })
          }else {
            if(-1 != a.indexOf("E")) {
              throw Error("exponential notation not supported");
            }
          }
        }
      }
      var k = e._numberPatternRE, g = g.match(k);
      if(!g) {
        throw Error("unable to find a number expression in pattern: " + a);
      }
      !1 === c.fractional && (c.places = 0);
      return a.replace(k, e._formatAbsolute(b, g[0], {decimal:f, group:h, places:c.places, round:c.round}))
    };
    e.round = function(b, a, c) {
      c = 10 / (c || 10);
      return(c * +b).toFixed(a) / c
    };
    if(0 == (0.9).toFixed()) {
      var k = e.round;
      e.round = function(b, a, c) {
        var e = Math.pow(10, -a || 0), f = Math.abs(b);
        if(!b || f >= e) {
          e = 0
        }else {
          if(f /= e, 0.5 > f || 0.95 <= f) {
            e = 0
          }
        }
        return k(b, a, c) + (0 < b ? e : -e)
      }
    }
    e._formatAbsolute = function(b, a, c) {
      c = c || {};
      !0 === c.places && (c.places = 0);
      Infinity === c.places && (c.places = 6);
      a = a.split(".");
      var h = "string" == typeof c.places && c.places.indexOf(","), f = c.places;
      h ? f = c.places.substring(h + 1) : 0 <= f || (f = (a[1] || []).length);
      0 > c.round || (b = e.round(b, f, c.round));
      b = String(Math.abs(b)).split(".");
      var k = b[1] || "";
      a[1] || c.places ? (h && (c.places = c.places.substring(0, h)), h = void 0 !== c.places ? c.places : a[1] && a[1].lastIndexOf("0") + 1, h > k.length && (b[1] = g.pad(k, h, "0", !0)), f < k.length && (b[1] = k.substr(0, f))) : b[1] && b.pop();
      f = a[0].replace(",", "");
      h = f.indexOf("0");
      -1 != h && (h = f.length - h, h > b[0].length && (b[0] = g.pad(b[0], h)), -1 == f.indexOf("#") && (b[0] = b[0].substr(b[0].length - h)));
      var f = a[0].lastIndexOf(","), n, l;
      -1 != f && (n = a[0].length - f - 1, a = a[0].substr(0, f), f = a.lastIndexOf(","), -1 != f && (l = a.length - f - 1));
      a = [];
      for(f = b[0];f;) {
        h = f.length - n, a.push(0 < h ? f.substr(h) : f), f = 0 < h ? f.slice(0, h) : "", l && (n = l, l = void 0)
      }
      b[0] = a.reverse().join(c.group || ",");
      return b.join(c.decimal || ".")
    };
    e.regexp = function(b) {
      return e._parseInfo(b).regexp
    };
    e._parseInfo = function(d) {
      d = d || {};
      var a = m.normalizeLocale(d.locale), a = m.getLocalization("dojo.cldr", "number", a), c = d.pattern || a[(d.type || "decimal") + "Format"], f = a.group, g = a.decimal, k = 1;
      if(-1 != c.indexOf("%")) {
        k /= 100
      }else {
        if(-1 != c.indexOf("\u2030")) {
          k /= 1E3
        }else {
          var n = -1 != c.indexOf("\u00a4");
          n && (f = a.currencyGroup || f, g = a.currencyDecimal || g)
        }
      }
      a = c.split(";");
      1 == a.length && a.push("-" + a[0]);
      a = b.buildGroupRE(a, function(a) {
        a = "(?:" + b.escapeString(a, ".") + ")";
        return a.replace(e._numberPatternRE, function(a) {
          var b = {signed:!1, separator:d.strict ? f : [f, ""], fractional:d.fractional, decimal:g, exponent:!1};
          a = a.split(".");
          var c = d.places;
          1 == a.length && 1 != k && (a[1] = "###");
          1 == a.length || 0 === c ? b.fractional = !1 : (void 0 === c && (c = d.pattern ? a[1].lastIndexOf("0") + 1 : Infinity), c && void 0 == d.fractional && (b.fractional = !0), !d.places && c < a[1].length && (c += "," + a[1].length), b.places = c);
          a = a[0].split(",");
          1 < a.length && (b.groupSize = a.pop().length, 1 < a.length && (b.groupSize2 = a.pop().length));
          return"(" + e._realNumberRegexp(b) + ")"
        })
      }, !0);
      n && (a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function(a, c, e, f) {
        a = b.escapeString(d[["symbol", "currency", "displayName"][e.length - 1]] || d.currency || "");
        if(!a) {
          return""
        }
        c = c ? "[\\s\\xa0]" : "";
        f = f ? "[\\s\\xa0]" : "";
        return!d.strict ? (c && (c += "*"), f && (f += "*"), "(?:" + c + a + f + ")?") : c + a + f
      }));
      return{regexp:a.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group:f, decimal:g, factor:k}
    };
    e.parse = function(b, a) {
      var c = e._parseInfo(a), f = RegExp("^" + c.regexp + "$").exec(b);
      if(!f) {
        return NaN
      }
      var g = f[1];
      if(!f[1]) {
        if(!f[2]) {
          return NaN
        }
        g = f[2];
        c.factor *= -1
      }
      g = g.replace(RegExp("[" + c.group + "\\s\\xa0]", "g"), "").replace(c.decimal, ".");
      return g * c.factor
    };
    e._realNumberRegexp = function(d) {
      d = d || {};
      "places" in d || (d.places = Infinity);
      "string" != typeof d.decimal && (d.decimal = ".");
      if(!("fractional" in d) || /^0/.test(d.places)) {
        d.fractional = [!0, !1]
      }
      "exponent" in d || (d.exponent = [!0, !1]);
      "eSigned" in d || (d.eSigned = [!0, !1]);
      var a = e._integerRegexp(d), c = b.buildGroupRE(d.fractional, function(a) {
        var b = "";
        a && 0 !== d.places && (b = "\\" + d.decimal, b = Infinity == d.places ? "(?:" + b + "\\d+)?" : b + ("\\d{" + d.places + "}"));
        return b
      }, !0), f = b.buildGroupRE(d.exponent, function(a) {
        return a ? "([eE]" + e._integerRegexp({signed:d.eSigned}) + ")" : ""
      }), a = a + c;
      c && (a = "(?:(?:" + a + ")|(?:" + c + "))");
      return a + f
    };
    e._integerRegexp = function(d) {
      d = d || {};
      "signed" in d || (d.signed = [!0, !1]);
      "separator" in d ? "groupSize" in d || (d.groupSize = 3) : d.separator = "";
      var a = b.buildGroupRE(d.signed, function(a) {
        return a ? "[-+]" : ""
      }, !0), c = b.buildGroupRE(d.separator, function(a) {
        if(!a) {
          return"(?:\\d+)"
        }
        a = b.escapeString(a);
        " " == a ? a = "\\s" : "\u00a0" == a && (a = "\\s\\xa0");
        var c = d.groupSize, e = d.groupSize2;
        return e ? (a = "(?:0|[1-9]\\d{0," + (e - 1) + "}(?:[" + a + "]\\d{" + e + "})*[" + a + "]\\d{" + c + "})", 0 < c - e ? "(?:" + a + "|(?:0|[1-9]\\d{0," + (c - 1) + "}))" : a) : "(?:0|[1-9]\\d{0," + (c - 1) + "}(?:[" + a + "]\\d{" + c + "})*)"
      }, !0);
      return a + c
    };
    return e
  })
}, "lsmb/PublishRadioButton":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/RadioButton"], function(f, m, l, g) {
    return f("lsmb/PublishRadioButton", [g], {topic:"", publish:function() {
      l.publish(this.topic, this.value)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(m(this.domNode, "change", function() {
        b.publish()
      }))
    }})
  })
}, "dijit/form/RadioButton":function() {
  define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(f, m, l) {
    return f("dijit.form.RadioButton", [m, l], {baseClass:"dijitRadio"})
  })
}, "dijit/form/_RadioButtonMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(f, m, l, g, b, e) {
    return m("dijit.form._RadioButtonMixin", null, {type:"radio", _getRelatedWidgets:function() {
      var f = [];
      b("input[type\x3dradio]", this.focusNode.form || this.ownerDocument).forEach(g.hitch(this, function(b) {
        b.name == this.name && b.form == this.focusNode.form && (b = e.getEnclosingWidget(b)) && f.push(b)
      }));
      return f
    }, _setCheckedAttr:function(b) {
      this.inherited(arguments);
      this._created && b && f.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        b != this && b.checked && b.set("checked", !1)
      }))
    }, _getSubmitValue:function(b) {
      return null == b ? "on" : b
    }, _onClick:function(b) {
      return this.checked || this.disabled ? (b.stopPropagation(), b.preventDefault(), !1) : this.readOnly ? (b.stopPropagation(), b.preventDefault(), f.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        l.set(this.focusNode || this.domNode, "checked", b.checked)
      })), !1) : this.inherited(arguments)
    }})
  })
}, "lsmb/PublishSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(f, m, l, g) {
    return f("lsmb/PublishSelect", [g], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(m(this, "change", function(e) {
        b.publish(e)
      }))
    }})
  })
}, "dijit/form/Select":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormSelectWidget ../_HasDropDown ../DropDownMenu ../MenuItem ../MenuSeparator ../Tooltip ../_KeyNavMixin ../registry dojo/text!./templates/Select.html dojo/i18n!./nls/validate".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u, t, q, r, y) {
    function v(a) {
      return function(b) {
        this._isLoaded ? this.inherited(a, arguments) : this.loadDropDown(d.hitch(this, a, b))
      }
    }
    var x = m("dijit.form._SelectMenu", s, {autoFocus:!0, buildRendering:function() {
      this.inherited(arguments);
      this.domNode.setAttribute("role", "listbox")
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(a(this.domNode, "selectstart", function(a) {
        a.preventDefault();
        a.stopPropagation()
      }))
    }, focus:function() {
      var a = !1, b = this.parentWidget.value;
      d.isArray(b) && (b = b[b.length - 1]);
      b && f.forEach(this.parentWidget._getChildren(), function(c) {
        c.option && b === c.option.value && (a = !0, this.focusChild(c, !1))
      }, this);
      a || this.inherited(arguments)
    }});
    b = m("dijit.form.Select" + (c("dojo-bidi") ? "_NoBidi" : ""), [h, p, q], {baseClass:"dijitSelect dijitValidationTextBox", templateString:y, _buttonInputDisabled:c("ie") ? "disabled" : "", required:!1, state:"", message:"", tooltipPosition:[], emptyLabel:"\x26#160;", _isLoaded:!1, _childrenLoaded:!1, labelType:"html", _fillContent:function() {
      this.inherited(arguments);
      if(this.options.length && !this.value && this.srcNodeRef) {
        var a = this.srcNodeRef.selectedIndex || 0;
        this._set("value", this.options[0 <= a ? a : 0].value)
      }
      this.dropDown = new x({id:this.id + "_menu", parentWidget:this});
      g.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g, "Menu "))
    }, _getMenuItemForOption:function(a) {
      if(!a.value && !a.label) {
        return new u({ownerDocument:this.ownerDocument})
      }
      var b = d.hitch(this, "_setValueAttr", a);
      a = new n({option:a, label:("text" === this.labelType ? (a.label || "").toString().replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;") : a.label) || this.emptyLabel, onClick:b, ownerDocument:this.ownerDocument, dir:this.dir, textDir:this.textDir, disabled:a.disabled || !1});
      a.focusNode.setAttribute("role", "option");
      return a
    }, _addOptionItem:function(a) {
      this.dropDown && this.dropDown.addChild(this._getMenuItemForOption(a))
    }, _getChildren:function() {
      return!this.dropDown ? [] : this.dropDown.getChildren()
    }, focus:function() {
      if(!this.disabled && this.focusNode.focus) {
        try {
          this.focusNode.focus()
        }catch(a) {
        }
      }
    }, focusChild:function(a) {
      a && this.set("value", a.option)
    }, _getFirst:function() {
      var a = this._getChildren();
      return a.length ? a[0] : null
    }, _getLast:function() {
      var a = this._getChildren();
      return a.length ? a[a.length - 1] : null
    }, childSelector:function(a) {
      return(a = r.byNode(a)) && a.getParent() == this.dropDown
    }, onKeyboardSearch:function(a, b, c, d) {
      a && this.focusChild(a)
    }, _loadChildren:function(a) {
      if(!0 === a) {
        if(this.dropDown && (delete this.dropDown.focusedChild, this.focusedChild = null), this.options.length) {
          this.inherited(arguments)
        }else {
          f.forEach(this._getChildren(), function(a) {
            a.destroyRecursive()
          });
          var b = new n({ownerDocument:this.ownerDocument, label:this.emptyLabel});
          this.dropDown.addChild(b)
        }
      }else {
        this._updateSelection()
      }
      this._isLoaded = !1;
      this._childrenLoaded = !0;
      this._loadingStore || this._setValueAttr(this.value, !1)
    }, _refreshState:function() {
      this._started && this.validate(this.focused)
    }, startup:function() {
      this.inherited(arguments);
      this._refreshState()
    }, _setValueAttr:function(a) {
      this.inherited(arguments);
      l.set(this.valueNode, "value", this.get("value"));
      this._refreshState()
    }, _setNameAttr:"valueNode", _setDisabledAttr:function(a) {
      this.inherited(arguments);
      this._refreshState()
    }, _setRequiredAttr:function(a) {
      this._set("required", a);
      this.focusNode.setAttribute("aria-required", a);
      this._refreshState()
    }, _setOptionsAttr:function(a) {
      this._isLoaded = !1;
      this._set("options", a)
    }, _setDisplay:function(a) {
      a = ("text" === this.labelType ? (a || "").replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;") : a) || this.emptyLabel;
      this.containerNode.innerHTML = '\x3cspan role\x3d"option" aria-selected\x3d"true" class\x3d"dijitReset dijitInline ' + this.baseClass.replace(/\s+|$/g, "Label ") + '"\x3e' + a + "\x3c/span\x3e"
    }, validate:function(a) {
      a = this.disabled || this.isValid(a);
      this._set("state", a ? "" : this._hasBeenBlurred ? "Error" : "Incomplete");
      this.focusNode.setAttribute("aria-invalid", a ? "false" : "true");
      var b = a ? "" : this._missingMsg;
      b && this.focused && this._hasBeenBlurred ? t.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : t.hide(this.domNode);
      this._set("message", b);
      return a
    }, isValid:function() {
      return!this.required || 0 === this.value || !/^\s*$/.test(this.value || "")
    }, reset:function() {
      this.inherited(arguments);
      t.hide(this.domNode);
      this._refreshState()
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this._missingMsg = e.getLocalization("dijit.form", "validate", this.lang).missingMessage
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(a(this.domNode, "selectstart", function(a) {
        a.preventDefault();
        a.stopPropagation()
      }));
      this.domNode.setAttribute("aria-expanded", "false");
      var b = this._keyNavCodes;
      delete b[k.LEFT_ARROW];
      delete b[k.RIGHT_ARROW]
    }, _setStyleAttr:function(a) {
      this.inherited(arguments);
      g.toggle(this.domNode, this.baseClass.replace(/\s+|$/g, "FixedWidth "), !!this.domNode.style.width)
    }, isLoaded:function() {
      return this._isLoaded
    }, loadDropDown:function(a) {
      this._loadChildren(!0);
      this._isLoaded = !0;
      a()
    }, destroy:function(a) {
      this.dropDown && !this.dropDown._destroyed && (this.dropDown.destroyRecursive(a), delete this.dropDown);
      t.hide(this.domNode);
      this.inherited(arguments)
    }, _onFocus:function() {
      this.validate(!0)
    }, _onBlur:function() {
      t.hide(this.domNode);
      this.inherited(arguments);
      this.validate(!1)
    }});
    c("dojo-bidi") && (b = m("dijit.form.Select", b, {_setDisplay:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode)
    }}));
    b._Menu = x;
    b.prototype._onContainerKeydown = v("_onContainerKeydown");
    b.prototype._onContainerKeypress = v("_onContainerKeypress");
    return b
  })
}, "dijit/form/_FormSelectWidget":function() {
  define("dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/data/util/sorter dojo/_base/declare dojo/dom dojo/dom-class dojo/_base/kernel dojo/_base/lang dojo/query dojo/when dojo/store/util/QueryResults ./_FormValueWidget".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s) {
    return b("dijit.form._FormSelectWidget", s, {multiple:!1, options:null, store:null, _setStoreAttr:function(a) {
      this._created && this._deprecatedSetStore(a)
    }, query:null, _setQueryAttr:function(a) {
      this._created && this._deprecatedSetStore(this.store, this.selectedValue, {query:a})
    }, queryOptions:null, _setQueryOptionsAttr:function(a) {
      this._created && this._deprecatedSetStore(this.store, this.selectedValue, {queryOptions:a})
    }, labelAttr:"", onFetch:null, sortByLabel:!0, loadChildrenOnOpen:!1, onLoadDeferred:null, getOptions:function(b) {
      var c = this.options || [];
      if(null == b) {
        return c
      }
      if(a.isArrayLike(b)) {
        return f.map(b, "return this.getOptions(item);", this)
      }
      a.isString(b) && (b = {value:b});
      a.isObject(b) && (f.some(c, function(a, c) {
        for(var d in b) {
          if(!(d in a) || a[d] != b[d]) {
            return!1
          }
        }
        b = c;
        return!0
      }) || (b = -1));
      return 0 <= b && b < c.length ? c[b] : null
    }, addOption:function(b) {
      f.forEach(a.isArrayLike(b) ? b : [b], function(b) {
        b && a.isObject(b) && this.options.push(b)
      }, this);
      this._loadChildren()
    }, removeOption:function(b) {
      b = this.getOptions(a.isArrayLike(b) ? b : [b]);
      f.forEach(b, function(a) {
        a && (this.options = f.filter(this.options, function(b) {
          return b.value !== a.value || b.label !== a.label
        }), this._removeOptionItem(a))
      }, this);
      this._loadChildren()
    }, updateOption:function(b) {
      f.forEach(a.isArrayLike(b) ? b : [b], function(a) {
        var b = this.getOptions({value:a.value}), c;
        if(b) {
          for(c in a) {
            b[c] = a[c]
          }
        }
      }, this);
      this._loadChildren()
    }, setStore:function(a, b, c) {
      d.deprecated(this.declaredClass + "::setStore(store, selectedValue, fetchArgs) is deprecated. Use set('query', fetchArgs.query), set('queryOptions', fetchArgs.queryOptions), set('store', store), or set('value', selectedValue) instead.", "", "2.0");
      this._deprecatedSetStore(a, b, c)
    }, _deprecatedSetStore:function(b, c, d) {
      var e = this.store;
      d = d || {};
      if(e !== b) {
        for(var k;k = this._notifyConnections.pop();) {
          k.remove()
        }
        b.get || (a.mixin(b, {_oldAPI:!0, get:function(a) {
          var b = new m;
          this.fetchItemByIdentity({identity:a, onItem:function(a) {
            b.resolve(a)
          }, onError:function(a) {
            b.reject(a)
          }});
          return b.promise
        }, query:function(b, c) {
          var d = new m(function() {
            e.abort && e.abort()
          });
          d.total = new m;
          var e = this.fetch(a.mixin({query:b, onBegin:function(a) {
            d.total.resolve(a)
          }, onComplete:function(a) {
            d.resolve(a)
          }, onError:function(a) {
            d.reject(a)
          }}, c));
          return new p(d)
        }}), b.getFeatures()["dojo.data.api.Notification"] && (this._notifyConnections = [l.after(b, "onNew", a.hitch(this, "_onNewItem"), !0), l.after(b, "onDelete", a.hitch(this, "_onDeleteItem"), !0), l.after(b, "onSet", a.hitch(this, "_onSetItem"), !0)]));
        this._set("store", b)
      }
      this.options && this.options.length && this.removeOption(this.options);
      this._queryRes && this._queryRes.close && this._queryRes.close();
      this._observeHandle && this._observeHandle.remove && (this._observeHandle.remove(), this._observeHandle = null);
      d.query && this._set("query", d.query);
      d.queryOptions && this._set("queryOptions", d.queryOptions);
      b && b.query && (this._loadingStore = !0, this.onLoadDeferred = new m, this._queryRes = b.query(this.query, this.queryOptions), h(this._queryRes, a.hitch(this, function(e) {
        if(this.sortByLabel && !d.sort && e.length) {
          if(b.getValue) {
            e.sort(g.createSortFunction([{attribute:b.getLabelAttributes(e[0])[0]}], b))
          }else {
            var h = this.labelAttr;
            e.sort(function(a, b) {
              return a[h] > b[h] ? 1 : b[h] > a[h] ? -1 : 0
            })
          }
        }
        d.onFetch && (e = d.onFetch.call(this, e, d));
        f.forEach(e, function(a) {
          this._addOptionForItem(a)
        }, this);
        this._queryRes.observe && (this._observeHandle = this._queryRes.observe(a.hitch(this, function(a, b, c) {
          b == c ? this._onSetItem(a) : (-1 != b && this._onDeleteItem(a), -1 != c && this._onNewItem(a))
        }), !0));
        this._loadingStore = !1;
        this.set("value", "_pendingValue" in this ? this._pendingValue : c);
        delete this._pendingValue;
        this.loadChildrenOnOpen ? this._pseudoLoadChildren(e) : this._loadChildren();
        this.onLoadDeferred.resolve(!0);
        this.onSetStore()
      }), function(a) {
        console.error("dijit.form.Select: " + a.toString());
        this.onLoadDeferred.reject(a)
      }));
      return e
    }, _setValueAttr:function(b, c) {
      this._onChangeActive || (c = null);
      if(this._loadingStore) {
        this._pendingValue = b
      }else {
        if(null != b) {
          b = a.isArrayLike(b) ? f.map(b, function(b) {
            return a.isObject(b) ? b : {value:b}
          }) : a.isObject(b) ? [b] : [{value:b}];
          b = f.filter(this.getOptions(b), function(a) {
            return a && a.value
          });
          var d = this.getOptions() || [];
          if(!this.multiple && (!b[0] || !b[0].value) && d.length) {
            b[0] = d[0]
          }
          f.forEach(d, function(a) {
            a.selected = f.some(b, function(b) {
              return b.value === a.value
            })
          });
          d = f.map(b, function(a) {
            return a.value
          });
          if(!("undefined" == typeof d || "undefined" == typeof d[0])) {
            var e = f.map(b, function(a) {
              return a.label
            });
            this._setDisplay(this.multiple ? e : e[0]);
            this.inherited(arguments, [this.multiple ? d : d[0], c]);
            this._updateSelection()
          }
        }
      }
    }, _getDisplayedValueAttr:function() {
      var a = f.map([].concat(this.get("selectedOptions")), function(a) {
        return a && "label" in a ? a.label : a ? a.value : null
      }, this);
      return this.multiple ? a : a[0]
    }, _setDisplayedValueAttr:function(a) {
      this.set("value", this.getOptions("string" == typeof a ? {label:a} : a))
    }, _loadChildren:function() {
      this._loadingStore || (f.forEach(this._getChildren(), function(a) {
        a.destroyRecursive()
      }), f.forEach(this.options, this._addOptionItem, this), this._updateSelection())
    }, _updateSelection:function() {
      this.focusedChild = null;
      this._set("value", this._getValueFromOpts());
      var a = [].concat(this.value);
      if(a && a[0]) {
        var b = this;
        f.forEach(this._getChildren(), function(c) {
          var d = f.some(a, function(a) {
            return c.option && a === c.option.value
          });
          d && !b.multiple && (b.focusedChild = c);
          k.toggle(c.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), d);
          c.domNode.setAttribute("aria-selected", d ? "true" : "false")
        }, this)
      }
    }, _getValueFromOpts:function() {
      var a = this.getOptions() || [];
      if(!this.multiple && a.length) {
        var b = f.filter(a, function(a) {
          return a.selected
        })[0];
        if(b && b.value) {
          return b.value
        }
        a[0].selected = !0;
        return a[0].value
      }
      return this.multiple ? f.map(f.filter(a, function(a) {
        return a.selected
      }), function(a) {
        return a.value
      }) || [] : ""
    }, _onNewItem:function(a, b) {
      (!b || !b.parent) && this._addOptionForItem(a)
    }, _onDeleteItem:function(a) {
      this.removeOption({value:this.store.getIdentity(a)})
    }, _onSetItem:function(a) {
      this.updateOption(this._getOptionObjForItem(a))
    }, _getOptionObjForItem:function(a) {
      var b = this.store, c = this.labelAttr && this.labelAttr in a ? a[this.labelAttr] : b.getLabel(a);
      return{value:c ? b.getIdentity(a) : null, label:c, item:a}
    }, _addOptionForItem:function(a) {
      var b = this.store;
      b.isItemLoaded && !b.isItemLoaded(a) ? b.loadItem({item:a, onItem:function(a) {
        this._addOptionForItem(a)
      }, scope:this}) : (a = this._getOptionObjForItem(a), this.addOption(a))
    }, constructor:function(a) {
      this._oValue = (a || {}).value || null;
      this._notifyConnections = []
    }, buildRendering:function() {
      this.inherited(arguments);
      e.setSelectable(this.focusNode, !1)
    }, _fillContent:function() {
      this.options || (this.options = this.srcNodeRef ? c("\x3e *", this.srcNodeRef).map(function(a) {
        return"separator" === a.getAttribute("type") ? {value:"", label:"", selected:!1, disabled:!1} : {value:a.getAttribute("data-" + d._scopeName + "-value") || a.getAttribute("value"), label:String(a.innerHTML), selected:a.getAttribute("selected") || !1, disabled:a.getAttribute("disabled") || !1}
      }, this) : []);
      this.value ? this.multiple && "string" == typeof this.value && this._set("value", this.value.split(",")) : this._set("value", this._getValueFromOpts())
    }, postCreate:function() {
      this.inherited(arguments);
      l.after(this, "onChange", a.hitch(this, "_updateSelection"));
      var b = this.store;
      if(b && (b.getIdentity || b.getFeatures()["dojo.data.api.Identity"])) {
        this.store = null, this._deprecatedSetStore(b, this._oValue, {query:this.query, queryOptions:this.queryOptions})
      }
      this._storeInitialized = !0
    }, startup:function() {
      this._loadChildren();
      this.inherited(arguments)
    }, destroy:function() {
      for(var a;a = this._notifyConnections.pop();) {
        a.remove()
      }
      this._queryRes && this._queryRes.close && this._queryRes.close();
      this._observeHandle && this._observeHandle.remove && (this._observeHandle.remove(), this._observeHandle = null);
      this.inherited(arguments)
    }, _addOptionItem:function() {
    }, _removeOptionItem:function() {
    }, _setDisplay:function() {
    }, _getChildren:function() {
      return[]
    }, _getSelectedOptionsAttr:function() {
      return this.getOptions({selected:!0})
    }, _pseudoLoadChildren:function() {
    }, onSetStore:function() {
    }})
  })
}, "dojo/data/util/sorter":function() {
  define(["../../_base/lang"], function(f) {
    var m = {};
    f.setObject("dojo.data.util.sorter", m);
    m.basicComparator = function(f, g) {
      var b = -1;
      null === f && (f = void 0);
      null === g && (g = void 0);
      if(f == g) {
        b = 0
      }else {
        if(f > g || null == f) {
          b = 1
        }
      }
      return b
    };
    m.createSortFunction = function(f, g) {
      function b(a, b, c, d) {
        return function(e, f) {
          var h = d.getValue(e, a), g = d.getValue(f, a);
          return b * c(h, g)
        }
      }
      for(var e = [], k, d = g.comparatorMap, a = m.basicComparator, c = 0;c < f.length;c++) {
        k = f[c];
        var h = k.attribute;
        if(h) {
          k = k.descending ? -1 : 1;
          var p = a;
          d && ("string" !== typeof h && "toString" in h && (h = h.toString()), p = d[h] || a);
          e.push(b(h, k, p, g))
        }
      }
      return function(a, b) {
        for(var c = 0;c < e.length;) {
          var d = e[c++](a, b);
          if(0 !== d) {
            return d
          }
        }
        return 0
      }
    };
    return m
  })
}, "dojo/store/util/QueryResults":function() {
  define(["../../_base/array", "../../_base/lang", "../../when"], function(f, m, l) {
    var g = function(b) {
      function e(d) {
        b[d] = function() {
          var a = arguments, c = l(b, function(b) {
            Array.prototype.unshift.call(a, b);
            return g(f[d].apply(f, a))
          });
          if("forEach" !== d || k) {
            return c
          }
        }
      }
      if(!b) {
        return b
      }
      var k = !!b.then;
      k && (b = m.delegate(b));
      e("forEach");
      e("filter");
      e("map");
      null == b.total && (b.total = l(b, function(b) {
        return b.length
      }));
      return b
    };
    m.setObject("dojo.store.util.QueryResults", g);
    return g
  })
}, "dijit/DropDownMenu":function() {
  define(["dojo/_base/declare", "dojo/keys", "dojo/text!./templates/Menu.html", "./_MenuBase"], function(f, m, l, g) {
    return f("dijit.DropDownMenu", g, {templateString:l, baseClass:"dijitMenu", _onUpArrow:function() {
      this.focusPrev()
    }, _onDownArrow:function() {
      this.focusNext()
    }, _onRightArrow:function(b) {
      this._moveToPopup(b);
      b.stopPropagation();
      b.preventDefault()
    }, _onLeftArrow:function(b) {
      if(this.parentMenu) {
        if(this.parentMenu._isMenuBar) {
          this.parentMenu.focusPrev()
        }else {
          this.onCancel(!1)
        }
      }else {
        b.stopPropagation(), b.preventDefault()
      }
    }})
  })
}, "dijit/_MenuBase":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/lang dojo/mouse dojo/on dojo/window ./a11yclick ./registry ./_Widget ./_CssStateMixin ./_KeyNavContainer ./_TemplatedMixin".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p, s, n, u) {
    return m("dijit._MenuBase", [p, u, n, s], {selected:null, _setSelectedAttr:function(a) {
      this.selected != a && (this.selected && (this.selected._setSelected(!1), this._onChildDeselect(this.selected)), a && a._setSelected(!0), this._set("selected", a))
    }, activated:!1, _setActivatedAttr:function(a) {
      b.toggle(this.domNode, "dijitMenuActive", a);
      b.toggle(this.domNode, "dijitMenuPassive", !a);
      this._set("activated", a)
    }, parentMenu:null, popupDelay:500, passivePopupDelay:Infinity, autoFocus:!1, childSelector:function(a) {
      var b = h.byNode(a);
      return a.parentNode == this.containerNode && b && b.focus
    }, postCreate:function() {
      var a = this, b = "string" == typeof this.childSelector ? this.childSelector : e.hitch(this, "childSelector");
      this.own(d(this.containerNode, d.selector(b, k.enter), function() {
        a.onItemHover(h.byNode(this))
      }), d(this.containerNode, d.selector(b, k.leave), function() {
        a.onItemUnhover(h.byNode(this))
      }), d(this.containerNode, d.selector(b, c), function(b) {
        a.onItemClick(h.byNode(this), b);
        b.stopPropagation()
      }), d(this.containerNode, d.selector(b, "focusin"), function() {
        a._onItemFocus(h.byNode(this))
      }));
      this.inherited(arguments)
    }, onKeyboardSearch:function(a, b, c, d) {
      this.inherited(arguments);
      if(a && (-1 == d || a.popup && 1 == d)) {
        this.onItemClick(a, b)
      }
    }, _keyboardSearchCompare:function(a, b) {
      return a.shortcutKey ? b == a.shortcutKey.toLowerCase() ? -1 : 0 : this.inherited(arguments) ? 1 : 0
    }, onExecute:function() {
    }, onCancel:function() {
    }, _moveToPopup:function(a) {
      if(this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled) {
        this.onItemClick(this.focusedChild, a)
      }else {
        (a = this._getTopMenu()) && a._isMenuBar && a.focusNext()
      }
    }, _onPopupHover:function() {
      this.set("selected", this.currentPopupItem);
      this._stopPendingCloseTimer()
    }, onItemHover:function(a) {
      this.activated ? (this.set("selected", a), a.popup && (!a.disabled && !this.hover_timer) && (this.hover_timer = this.defer(function() {
        this._openItemPopup(a)
      }, this.popupDelay))) : Infinity > this.passivePopupDelay && (this.passive_hover_timer && this.passive_hover_timer.remove(), this.passive_hover_timer = this.defer(function() {
        this.onItemClick(a, {type:"click"})
      }, this.passivePopupDelay));
      this._hoveredChild = a;
      a._set("hovering", !0)
    }, _onChildDeselect:function(a) {
      this._stopPopupTimer();
      this.currentPopupItem == a && (this._stopPendingCloseTimer(), this._pendingClose_timer = this.defer(function() {
        this.currentPopupItem = this._pendingClose_timer = null;
        a._closePopup()
      }, this.popupDelay))
    }, onItemUnhover:function(a) {
      this._hoveredChild == a && (this._hoveredChild = null);
      this.passive_hover_timer && (this.passive_hover_timer.remove(), this.passive_hover_timer = null);
      a._set("hovering", !1)
    }, _stopPopupTimer:function() {
      this.hover_timer && (this.hover_timer = this.hover_timer.remove())
    }, _stopPendingCloseTimer:function() {
      this._pendingClose_timer && (this._pendingClose_timer = this._pendingClose_timer.remove())
    }, _getTopMenu:function() {
      for(var a = this;a.parentMenu;a = a.parentMenu) {
      }
      return a
    }, onItemClick:function(a, b) {
      this.passive_hover_timer && this.passive_hover_timer.remove();
      this.focusChild(a);
      if(a.disabled) {
        return!1
      }
      if(a.popup) {
        this.set("selected", a);
        this.set("activated", !0);
        var c = /^key/.test(b._origType || b.type) || 0 == b.clientX && 0 == b.clientY;
        this._openItemPopup(a, c)
      }else {
        this.onExecute(), a._onClick ? a._onClick(b) : a.onClick(b)
      }
    }, _openItemPopup:function(a, b) {
      if(a != this.currentPopupItem) {
        this.currentPopupItem && (this._stopPendingCloseTimer(), this.currentPopupItem._closePopup());
        this._stopPopupTimer();
        var c = a.popup;
        c.parentMenu = this;
        this.own(this._mouseoverHandle = d.once(c.domNode, "mouseover", e.hitch(this, "_onPopupHover")));
        var f = this;
        a._openPopup({parent:this, orient:this._orient || ["after", "before"], onCancel:function() {
          b && f.focusChild(a);
          f._cleanUp()
        }, onExecute:e.hitch(this, "_cleanUp", !0), onClose:function() {
          f._mouseoverHandle && (f._mouseoverHandle.remove(), delete f._mouseoverHandle)
        }}, b);
        this.currentPopupItem = a
      }
    }, onOpen:function() {
      this.isShowingNow = !0;
      this.set("activated", !0)
    }, onClose:function() {
      this.set("activated", !1);
      this.set("selected", null);
      this.isShowingNow = !1;
      this.parentMenu = null
    }, _closeChild:function() {
      this._stopPopupTimer();
      this.currentPopupItem && (this.focused && (g.set(this.selected.focusNode, "tabIndex", this.tabIndex), this.selected.focusNode.focus()), this.currentPopupItem._closePopup(), this.currentPopupItem = null)
    }, _onItemFocus:function(a) {
      if(this._hoveredChild && this._hoveredChild != a) {
        this.onItemUnhover(this._hoveredChild)
      }
      this.set("selected", a)
    }, _onBlur:function() {
      this._cleanUp(!0);
      this.inherited(arguments)
    }, _cleanUp:function(a) {
      this._closeChild();
      "undefined" == typeof this.isShowingNow && this.set("activated", !1);
      a && this.set("selected", null)
    }})
  })
}, "dijit/_KeyNavContainer":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/keys dojo/_base/lang ./registry ./_Container ./_FocusMixin ./_KeyNavMixin".split(" "), function(f, m, l, g, b, e, k, d, a, c) {
    return m("dijit._KeyNavContainer", [a, c, d], {connectKeyNavHandlers:function(a, c) {
      var d = this._keyNavCodes = {}, g = e.hitch(this, "focusPrev"), k = e.hitch(this, "focusNext");
      f.forEach(a, function(a) {
        d[a] = g
      });
      f.forEach(c, function(a) {
        d[a] = k
      });
      d[b.HOME] = e.hitch(this, "focusFirstChild");
      d[b.END] = e.hitch(this, "focusLastChild")
    }, startupKeyNavChildren:function() {
      g.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
    }, startup:function() {
      this.inherited(arguments);
      f.forEach(this.getChildren(), e.hitch(this, "_startupChild"))
    }, addChild:function(a, b) {
      this.inherited(arguments);
      this._startupChild(a)
    }, _startupChild:function(a) {
      a.set("tabIndex", "-1")
    }, _getFirst:function() {
      var a = this.getChildren();
      return a.length ? a[0] : null
    }, _getLast:function() {
      var a = this.getChildren();
      return a.length ? a[a.length - 1] : null
    }, focusNext:function() {
      this.focusChild(this._getNextFocusableChild(this.focusedChild, 1))
    }, focusPrev:function() {
      this.focusChild(this._getNextFocusableChild(this.focusedChild, -1), !0)
    }, childSelector:function(a) {
      return(a = k.byNode(a)) && a.getParent() == this
    }})
  })
}, "dijit/_KeyNavMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dijit/registry dijit/_FocusMixin".split(" "), function(f, m, l, g, b, e, k, d) {
    return m("dijit._KeyNavMixin", d, {tabIndex:"0", childSelector:null, postCreate:function() {
      this.inherited(arguments);
      l.set(this.domNode, "tabIndex", this.tabIndex);
      if(!this._keyNavCodes) {
        var a = this._keyNavCodes = {};
        a[g.HOME] = b.hitch(this, "focusFirstChild");
        a[g.END] = b.hitch(this, "focusLastChild");
        a[this.isLeftToRight() ? g.LEFT_ARROW : g.RIGHT_ARROW] = b.hitch(this, "_onLeftArrow");
        a[this.isLeftToRight() ? g.RIGHT_ARROW : g.LEFT_ARROW] = b.hitch(this, "_onRightArrow");
        a[g.UP_ARROW] = b.hitch(this, "_onUpArrow");
        a[g.DOWN_ARROW] = b.hitch(this, "_onDownArrow")
      }
      var c = this, a = "string" == typeof this.childSelector ? this.childSelector : b.hitch(this, "childSelector");
      this.own(e(this.domNode, "keypress", b.hitch(this, "_onContainerKeypress")), e(this.domNode, "keydown", b.hitch(this, "_onContainerKeydown")), e(this.domNode, "focus", b.hitch(this, "_onContainerFocus")), e(this.containerNode, e.selector(a, "focusin"), function(a) {
        c._onChildFocus(k.getEnclosingWidget(this), a)
      }))
    }, _onLeftArrow:function() {
    }, _onRightArrow:function() {
    }, _onUpArrow:function() {
    }, _onDownArrow:function() {
    }, focus:function() {
      this.focusFirstChild()
    }, _getFirstFocusableChild:function() {
      return this._getNextFocusableChild(null, 1)
    }, _getLastFocusableChild:function() {
      return this._getNextFocusableChild(null, -1)
    }, focusFirstChild:function() {
      this.focusChild(this._getFirstFocusableChild())
    }, focusLastChild:function() {
      this.focusChild(this._getLastFocusableChild())
    }, focusChild:function(a, b) {
      a && (this.focusedChild && a !== this.focusedChild && this._onChildBlur(this.focusedChild), a.set("tabIndex", this.tabIndex), a.focus(b ? "end" : "start"))
    }, _onContainerFocus:function(a) {
      a.target !== this.domNode || this.focusedChild || this.focus()
    }, _onFocus:function() {
      l.set(this.domNode, "tabIndex", "-1");
      this.inherited(arguments)
    }, _onBlur:function(a) {
      l.set(this.domNode, "tabIndex", this.tabIndex);
      this.focusedChild && (this.focusedChild.set("tabIndex", "-1"), this.lastFocusedChild = this.focusedChild, this._set("focusedChild", null));
      this.inherited(arguments)
    }, _onChildFocus:function(a) {
      a && a != this.focusedChild && (this.focusedChild && !this.focusedChild._destroyed && this.focusedChild.set("tabIndex", "-1"), a.set("tabIndex", this.tabIndex), this.lastFocused = a, this._set("focusedChild", a))
    }, _searchString:"", multiCharSearchDuration:1E3, onKeyboardSearch:function(a, b, d, e) {
      a && this.focusChild(a)
    }, _keyboardSearchCompare:function(a, b) {
      var d = a.domNode, d = (a.label || (d.focusNode ? d.focusNode.label : "") || d.innerText || d.textContent || "").replace(/^\s+/, "").substr(0, b.length).toLowerCase();
      return b.length && d == b ? -1 : 0
    }, _onContainerKeydown:function(a) {
      var b = this._keyNavCodes[a.keyCode];
      b ? (b(a, this.focusedChild), a.stopPropagation(), a.preventDefault(), this._searchString = "") : a.keyCode == g.SPACE && (this._searchTimer && !a.ctrlKey && !a.altKey && !a.metaKey) && (a.stopImmediatePropagation(), a.preventDefault(), this._keyboardSearch(a, " "))
    }, _onContainerKeypress:function(a) {
      a.charCode <= g.SPACE || (a.ctrlKey || a.altKey || a.metaKey) || (a.preventDefault(), a.stopPropagation(), this._keyboardSearch(a, String.fromCharCode(a.charCode).toLowerCase()))
    }, _keyboardSearch:function(a, c) {
      var d = null, e, f = 0;
      b.hitch(this, function() {
        this._searchTimer && this._searchTimer.remove();
        this._searchString += c;
        var a = /^(.)\1*$/.test(this._searchString) ? 1 : this._searchString.length;
        e = this._searchString.substr(0, a);
        this._searchTimer = this.defer(function() {
          this._searchTimer = null;
          this._searchString = ""
        }, this.multiCharSearchDuration);
        var b = this.focusedChild || null;
        if(1 == a || !b) {
          if(b = this._getNextFocusableChild(b, 1), !b) {
            return
          }
        }
        a = b;
        do {
          var g = this._keyboardSearchCompare(b, e);
          g && 0 == f++ && (d = b);
          if(-1 == g) {
            f = -1;
            break
          }
          b = this._getNextFocusableChild(b, 1)
        }while(b && b != a)
      })();
      this.onKeyboardSearch(d, a, e, f)
    }, _onChildBlur:function() {
    }, _getNextFocusableChild:function(a, b) {
      var d = a;
      do {
        if(a) {
          a = this._getNext(a, b)
        }else {
          if(a = this[0 < b ? "_getFirst" : "_getLast"](), !a) {
            break
          }
        }
        if(null != a && a != d && a.isFocusable()) {
          return a
        }
      }while(a != d);
      return null
    }, _getFirst:function() {
      return null
    }, _getLast:function() {
      return null
    }, _getNext:function(a, b) {
      if(a) {
        for(a = a.domNode;a;) {
          if((a = a[0 > b ? "previousSibling" : "nextSibling"]) && "getAttribute" in a) {
            var d = k.byNode(a);
            if(d) {
              return d
            }
          }
        }
      }
      return null
    }})
  })
}, "dijit/MenuItem":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/kernel dojo/sniff dojo/_base/lang ./_Widget ./_TemplatedMixin ./_Contained ./_CssStateMixin dojo/text!./templates/MenuItem.html".split(" "), function(f, m, l, g, b, e, k, d, a, c, h, p) {
    k = f("dijit.MenuItem" + (e("dojo-bidi") ? "_NoBidi" : ""), [d, a, c, h], {templateString:p, baseClass:"dijitMenuItem", label:"", _setLabelAttr:function(a) {
      this._set("label", a);
      var b = "", c;
      c = a.search(/{\S}/);
      if(0 <= c) {
        var b = a.charAt(c + 1), d = a.substr(0, c);
        a = a.substr(c + 3);
        c = d + b + a;
        a = d + '\x3cspan class\x3d"dijitMenuItemShortcutKey"\x3e' + b + "\x3c/span\x3e" + a
      }else {
        c = a
      }
      this.domNode.setAttribute("aria-label", c + " " + this.accelKey);
      this.containerNode.innerHTML = a;
      this._set("shortcutKey", b)
    }, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, accelKey:"", disabled:!1, _fillContent:function(a) {
      a && !("label" in this.params) && this._set("label", a.innerHTML)
    }, buildRendering:function() {
      this.inherited(arguments);
      l.set(this.containerNode, "id", this.id + "_text");
      this.accelKeyNode && l.set(this.accelKeyNode, "id", this.id + "_accel");
      m.setSelectable(this.domNode, !1)
    }, onClick:function() {
    }, focus:function() {
      try {
        8 == e("ie") && this.containerNode.focus(), this.focusNode.focus()
      }catch(a) {
      }
    }, _setSelected:function(a) {
      g.toggle(this.domNode, "dijitMenuItemSelected", a)
    }, setLabel:function(a) {
      b.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
      this.set("label", a)
    }, setDisabled:function(a) {
      b.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
      this.set("disabled", a)
    }, _setDisabledAttr:function(a) {
      this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
      this._set("disabled", a)
    }, _setAccelKeyAttr:function(a) {
      this.accelKeyNode && (this.accelKeyNode.style.display = a ? "" : "none", this.accelKeyNode.innerHTML = a, l.set(this.containerNode, "colSpan", a ? "1" : "2"));
      this._set("accelKey", a)
    }});
    e("dojo-bidi") && (k = f("dijit.MenuItem", k, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      "auto" === this.textDir && this.applyTextDir(this.textDirNode)
    }}));
    return k
  })
}, "dijit/_Contained":function() {
  define(["dojo/_base/declare", "./registry"], function(f, m) {
    return f("dijit._Contained", null, {_getSibling:function(f) {
      var g = this.getParent();
      return g && g._getSiblingOfChild && g._getSiblingOfChild(this, "previous" == f ? -1 : 1) || null
    }, getPreviousSibling:function() {
      return this._getSibling("previous")
    }, getNextSibling:function() {
      return this._getSibling("next")
    }, getIndexInParent:function() {
      var f = this.getParent();
      return!f || !f.getIndexOfChild ? -1 : f.getIndexOfChild(this)
    }})
  })
}, "dijit/MenuSeparator":function() {
  define("dojo/_base/declare dojo/dom ./_WidgetBase ./_TemplatedMixin ./_Contained dojo/text!./templates/MenuSeparator.html".split(" "), function(f, m, l, g, b, e) {
    return f("dijit.MenuSeparator", [l, g, b], {templateString:e, buildRendering:function() {
      this.inherited(arguments);
      m.setSelectable(this.domNode, !1)
    }, isFocusable:function() {
      return!1
    }})
  })
}, "lsmb/SetupLoginButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/request/xhr dojo/dom dojo/dom-style dijit/form/Button".split(" "), function(f, m, l, g, b, e) {
    return f("lsmb/SetupLoginButton", [e], {action:null, onClick:function(b) {
      var d = this, a = g.byId("s-user").value, c = g.byId("s-password").value, e = encodeURIComponent(g.byId("database").value);
      m.stop(b);
      l("login.pl?action\x3dauthenticate\x26company\x3dpostgres\x26dbonly\x3d1", {user:a, password:c}).then(function(a) {
        window.location.href = "setup.pl?action\x3d" + d.action + "\x26database\x3d" + e
      }, function(a) {
        a = a.response.status;
        "454" == a ? alert("Company does not exist") : alert("Access denied (" + a + "): Bad username/password")
      })
    }})
  })
}, "lsmb/SubscribeCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(f, m, l, g) {
    return f("lsmb/SubscribeCheckBox", [g], {topic:"", update:function(b) {
      this.set("checked", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(e) {
        b.update(e)
      }))
    }})
  })
}, "lsmb/SubscribeNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(f, m, l, g) {
    return f("lsmb/SubscribeNumberTextBox", g, {topic:"", update:function(b) {
      this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(e) {
        b.update(e)
      }))
    }})
  })
}, "lsmb/SubscribeSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(f, m, l, g) {
    return f("lsmb/SubscribeSelect", [g], {topic:"", topicMap:{}, update:function(b) {
      (b = this.topicMap[b]) && this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(e) {
        b.update(e)
      }))
    }})
  })
}, "lsmb/SubscribeShowHide":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-style dojo/on dojo/topic dijit/_WidgetBase".split(" "), function(f, m, l, g, b, e) {
    return f("lsmb/SubscribeShowHide", [e], {topic:"", showValues:null, hideValues:null, show:function() {
      l.set(this.domNode, "display", "block")
    }, hide:function() {
      l.set(this.domNode, "display", "none")
    }, update:function(b) {
      this.showValues && -1 !== this.showValues.indexOf(b) ? this.show() : this.hideValues && -1 !== this.hideValues.indexOf(b) ? this.hide() : this.showValues ? this.hideValues || this.hide() : this.show()
    }, postCreate:function() {
      var e = this;
      this.inherited(arguments);
      this.own(b.subscribe(e.topic, function(b) {
        e.update(b)
      }))
    }})
  })
}, "lsmb/TabularForm":function() {
  define("lsmb/layout/TableContainer dojo/dom dojo/dom-class dijit/registry dijit/layout/ContentPane dojo/query dojo/window dojo/_base/declare dijit/form/TextBox".split(" "), function(f, m, l, g, b, e, k, d, a) {
    return d("lsmb/TabularForm", [f], {vertsize:"mobile", vertlabelsize:"mobile", maxCols:1, initOrient:"horiz", constructor:function(a, b) {
      if(void 0 !== b) {
        var d = " " + b.className + " ", f = d.match(/ col-\d+ /);
        f && (this.cols = f[0].replace(/ col-(\d+) /, "$1"));
        if(f = d.match("/ virtsize-w+ /")) {
          this.vertsize = f[0].replace(/ virtsize-(\w+) /, "$1")
        }
        if(f = d.match("/ virtlabel-w+ /")) {
          this.vertlabelsize = f[0].replace(/ virtlabel-(\w+) /, "$1")
        }
      }
      var g = this;
      e("*", g.domNode).forEach(function(a) {
        g.TFRenderElement(a)
      });
      this.maxCols = this.cols;
      this.initOrient = this.orientation
    }, TFRenderElement:function(a) {
      g.byId(a.id) || l.contains(a, "input-row") && TFRenderRow(a)
    }, TFRenderRow:function(a) {
      var d = 0;
      e("*", a).forEach(function(a) {
        TFRenderElement(a);
        ++d
      });
      for(a = d %= this.cols;a < this.cols;++a) {
        var f = new b({content:"\x26nbsp;"});
        this.addChild(f)
      }
    }, resize:function() {
      var a = k.getBox(), b = this.orientation;
      switch(this.vertlabelsize) {
        case "mobile":
          if(480 <= a.w) {
            this.cols = this.maxCols;
            this.orientation = this.initOrient;
            break
          }
        ;
        case "small":
          if(768 <= a.w) {
            this.cols = this.maxCols;
            this.orientation = this.initOrient;
            break
          }
        ;
        case "med":
          if(992 <= a.w) {
            this.cols = this.maxCols;
            this.orientation = this.initOrient;
            break
          }
        ;
        default:
          this.cols = 1, this.orientation = "vert"
      }
      switch(this.vertsize) {
        case "mobile":
          if(480 <= a.w) {
            break
          }
        ;
        case "small":
          if(768 <= a.w) {
            break
          }
        ;
        case "med":
          if(992 <= a.w) {
            break
          }
        ;
        default:
          this.cols = 1
      }
      this.orientation !== b && this.startup();
      return this.inherited(arguments)
    }})
  })
}, "lsmb/layout/TableContainer":function() {
  define("lsmb/layout/TableContainer", "dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/_base/array dojo/dom-prop dojo/dom-style dijit/_WidgetBase dijit/layout/_LayoutWidget".split(" "), function(f, m, l, g, b, e, k, d, a, c) {
    f = l("lsmb.layout.TableContainer", c, {cols:1, labelWidth:"100", showLabels:!0, orientation:"horiz", spacing:1, customClass:"", postCreate:function() {
      this.inherited(arguments);
      this._children = [];
      this.connect(this, "set", function(a, b) {
        b && ("orientation" == a || "customClass" == a || "cols" == a) && this.layout()
      })
    }, startup:function() {
      if(!this._started && (this.inherited(arguments), !this._initialized)) {
        var a = this.getChildren();
        1 > a.length || (this._initialized = !0, g.add(this.domNode, "dijitTableLayout"), e.forEach(a, function(a) {
          !a.started && !a._started && a.startup()
        }), this.layout(), this.resize())
      }
    }, resize:function() {
      e.forEach(this.getChildren(), function(a) {
        "function" == typeof a.resize && a.resize()
      })
    }, layout:function() {
      function a(b, c, d) {
        if("" != l.customClass) {
          var e = l.customClass + "-" + (c || b.tagName.toLowerCase());
          g.add(b, e);
          2 < arguments.length && g.add(b, e + "-" + d)
        }
      }
      if(this._initialized) {
        var c = this.getChildren(), f = {}, l = this;
        e.forEach(this._children, m.hitch(this, function(a) {
          f[a.id] = a
        }));
        e.forEach(c, m.hitch(this, function(a, b) {
          f[a.id] || this._children.push(a)
        }));
        var u = b.create("table", {width:"100%", "class":"tableContainer-table tableContainer-table-" + this.orientation, cellspacing:this.spacing}, this.domNode), t = b.create("tbody");
        u.appendChild(t);
        a(u, "table", this.orientation);
        var q = b.create("tr", {}, t), r = !this.showLabels || "horiz" == this.orientation ? q : b.create("tr", {}, t), y = this.cols * (this.showLabels ? 2 : 1), v = 0;
        e.forEach(this._children, m.hitch(this, function(c, e) {
          var f = c.colspan || 1;
          1 < f && (f = this.showLabels ? Math.min(y - 1, 2 * f - 1) : Math.min(y, f));
          if(v + f - 1 + (this.showLabels ? 1 : 0) >= y) {
            v = 0, q = b.create("tr", {}, t), r = "horiz" == this.orientation ? q : b.create("tr", {}, t)
          }
          var g;
          if(this.showLabels) {
            if(g = b.create("td", {"class":"tableContainer-labelCell"}, q), c.spanLabel) {
              k.set(g, "vert" == this.orientation ? "rowspan" : "colspan", 2)
            }else {
              a(g, "labelCell");
              var l = {"for":c.get("id")}, l = b.create("label", l, g);
              if(-1 < Number(this.labelWidth) || -1 < String(this.labelWidth).indexOf("%")) {
                d.set(g, "width", 0 > String(this.labelWidth).indexOf("%") ? this.labelWidth + "px" : this.labelWidth)
              }
              l.innerHTML = c.get("label") || c.get("title")
            }
          }
          g = c.spanLabel && g ? g : b.create("td", {"class":"tableContainer-valueCell"}, r);
          1 < f && k.set(g, "colspan", f);
          a(g, "valueCell", e);
          g.appendChild(c.domNode);
          v += f + (this.showLabels ? 1 : 0)
        }));
        this.table && this.table.parentNode.removeChild(this.table);
        e.forEach(c, function(a) {
          "function" == typeof a.layout && a.layout()
        });
        this.table = u;
        this.resize()
      }
    }, destroyDescendants:function(a) {
      e.forEach(this._children, function(b) {
        b.destroyRecursive(a)
      })
    }, _setSpacingAttr:function(a) {
      this.spacing = a;
      this.table && (this.table.cellspacing = Number(a))
    }});
    f.ChildWidgetProperties = {label:"", title:"", spanLabel:!1, colspan:1};
    m.extend(a, f.ChildWidgetProperties);
    return f
  })
}, "dijit/layout/_LayoutWidget":function() {
  define("dojo/_base/lang ../_Widget ../_Container ../_Contained ../Viewport dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style".split(" "), function(f, m, l, g, b, e, k, d, a) {
    return e("dijit.layout._LayoutWidget", [m, l, g], {baseClass:"dijitLayoutContainer", isLayoutContainer:!0, _setTitleAttr:null, buildRendering:function() {
      this.inherited(arguments);
      k.add(this.domNode, "dijitContainer")
    }, startup:function() {
      if(!this._started) {
        this.inherited(arguments);
        var a = this.getParent && this.getParent();
        if(!a || !a.isLayoutContainer) {
          this.resize(), this.own(b.on("resize", f.hitch(this, "resize")))
        }
      }
    }, resize:function(b, e) {
      var g = this.domNode;
      b && d.setMarginBox(g, b);
      var k = e || {};
      f.mixin(k, b || {});
      if(!("h" in k) || !("w" in k)) {
        k = f.mixin(d.getMarginBox(g), k)
      }
      var l = a.getComputedStyle(g), m = d.getMarginExtents(g, l), t = d.getBorderExtents(g, l), k = this._borderBox = {w:k.w - (m.w + t.w), h:k.h - (m.h + t.h)}, m = d.getPadExtents(g, l);
      this._contentBox = {l:a.toPixelValue(g, l.paddingLeft), t:a.toPixelValue(g, l.paddingTop), w:k.w - m.w, h:k.h - m.h};
      this.layout()
    }, layout:function() {
    }, _setupChild:function(a) {
      k.add(a.domNode, this.baseClass + "-child " + (a.baseClass ? this.baseClass + "-" + a.baseClass : ""))
    }, addChild:function(a, b) {
      this.inherited(arguments);
      this._started && this._setupChild(a)
    }, removeChild:function(a) {
      k.remove(a.domNode, this.baseClass + "-child" + (a.baseClass ? " " + this.baseClass + "-" + a.baseClass : ""));
      this.inherited(arguments)
    }})
  })
}, "url:dijit/templates/Calendar.html":'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"dijitCalendarContainer" role\x3d"grid" aria-labelledby\x3d"${id}_mddb ${id}_year" data-dojo-attach-point\x3d"gridNode"\x3e\n\t\x3cthead\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarMonthContainer" valign\x3d"top"\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' data-dojo-attach-point\x3d"decrementMonth" scope\x3d"col"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarDecrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"decreaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e-\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset\' colspan\x3d"5" scope\x3d"col"\x3e\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"monthNode"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' scope\x3d"col" data-dojo-attach-point\x3d"incrementMonth"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarIncrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"increaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e+\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr role\x3d"row"\x3e\n\t\t\t${!dayCellsHtml}\n\t\t\x3c/tr\x3e\n\t\x3c/thead\x3e\n\t\x3ctbody data-dojo-attach-point\x3d"dateRowsNode" data-dojo-attach-event\x3d"ondijitclick: _onDayClick" class\x3d"dijitReset dijitCalendarBodyContainer"\x3e\n\t\t\t${!dateRowsHtml}\n\t\x3c/tbody\x3e\n\t\x3ctfoot class\x3d"dijitReset dijitCalendarYearContainer"\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd class\x3d\'dijitReset\' valign\x3d"top" colspan\x3d"7" role\x3d"presentation"\x3e\n\t\t\t\t\x3cdiv class\x3d"dijitCalendarYearLabel"\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"previousYearLabelNode" class\x3d"dijitInline dijitCalendarPreviousYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"currentYearLabelNode" class\x3d"dijitInline dijitCalendarSelectedYear" role\x3d"button" id\x3d"${id}_year"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"nextYearLabelNode" class\x3d"dijitInline dijitCalendarNextYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tfoot\x3e\n\x3c/table\x3e\n', 
"url:dijit/form/templates/Button.html":'\x3cspan class\x3d"dijit dijitReset dijitInline" role\x3d"presentation"\n\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonNode"\n\t\tdata-dojo-attach-event\x3d"ondijitclick:__onClick" role\x3d"presentation"\n\t\t\x3e\x3cspan class\x3d"dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point\x3d"titleNode,focusNode"\n\t\t\trole\x3d"button" aria-labelledby\x3d"${id}_label"\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitToggleButtonIconChar"\x3e\x26#x25CF;\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonText"\n\t\t\t\tid\x3d"${id}_label"\n\t\t\t\tdata-dojo-attach-point\x3d"containerNode"\n\t\t\t\x3e\x3c/span\n\t\t\x3e\x3c/span\n\t\x3e\x3c/span\n\t\x3e\x3cinput ${!nameAttrSetting} type\x3d"${type}" value\x3d"${value}" class\x3d"dijitOffScreen"\n\t\tdata-dojo-attach-event\x3d"onclick:_onClick"\n\t\ttabIndex\x3d"-1" aria-hidden\x3d"true" data-dojo-attach-point\x3d"valueNode"\n/\x3e\x3c/span\x3e\n', 
"url:dijit/form/templates/DropDownButton.html":'\x3cspan class\x3d"dijit dijitReset dijitInline"\n\t\x3e\x3cspan class\x3d\'dijitReset dijitInline dijitButtonNode\'\n\t\tdata-dojo-attach-event\x3d"ondijitclick:__onClick" data-dojo-attach-point\x3d"_buttonNode"\n\t\t\x3e\x3cspan class\x3d"dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point\x3d"focusNode,titleNode,_arrowWrapperNode,_popupStateNode"\n\t\t\trole\x3d"button" aria-haspopup\x3d"true" aria-labelledby\x3d"${id}_label"\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitIcon"\n\t\t\t\tdata-dojo-attach-point\x3d"iconNode"\n\t\t\t\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonText"\n\t\t\t\tdata-dojo-attach-point\x3d"containerNode"\n\t\t\t\tid\x3d"${id}_label"\n\t\t\t\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitArrowButtonInner"\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitArrowButtonChar"\x3e\x26#9660;\x3c/span\n\t\t\x3e\x3c/span\n\t\x3e\x3c/span\n\t\x3e\x3cinput ${!nameAttrSetting} type\x3d"${type}" value\x3d"${value}" class\x3d"dijitOffScreen" tabIndex\x3d"-1"\n\t\tdata-dojo-attach-event\x3d"onclick:_onClick" data-dojo-attach-point\x3d"valueNode" aria-hidden\x3d"true"\n/\x3e\x3c/span\x3e\n', 
"url:dijit/form/templates/TextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft" id\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', "url:dijit/form/templates/ValidationTextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', 
"url:dijit/form/templates/DropDownBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}"\n\trole\x3d"combobox"\n\taria-haspopup\x3d"true"\n\tdata-dojo-attach-point\x3d"_popupStateNode"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n\t\tdata-dojo-attach-point\x3d"_buttonNode" role\x3d"presentation"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"button presentation" aria-hidden\x3d"true"\n\t\t\t${_buttonInputDisabled}\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' ${!nameAttrSetting} type\x3d"text" autocomplete\x3d"off"\n\t\t\tdata-dojo-attach-point\x3d"textbox,focusNode" role\x3d"textbox"\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', 
"url:dijit/form/templates/CheckBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline" role\x3d"presentation"\n\t\x3e\x3cinput\n\t \t${!nameAttrSetting} type\x3d"${type}" role\x3d"${type}" aria-checked\x3d"false" ${checkedAttrSetting}\n\t\tclass\x3d"dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point\x3d"focusNode"\n\t \tdata-dojo-attach-event\x3d"ondijitclick:_onClick"\n/\x3e\x3c/div\x3e\n', "url:dijit/templates/Menu.html":'\x3ctable class\x3d"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role\x3d"menu" tabIndex\x3d"${tabIndex}"\n\t   cellspacing\x3d"0"\x3e\n\t\x3ctbody class\x3d"dijitReset" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/tbody\x3e\n\x3c/table\x3e\n', 
"url:dijit/templates/MenuItem.html":'\x3ctr class\x3d"dijitReset" data-dojo-attach-point\x3d"focusNode" role\x3d"menuitem" tabIndex\x3d"-1"\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemIconCell" role\x3d"presentation"\x3e\n\t\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitMenuItemIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\n\t\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemLabel" colspan\x3d"2" data-dojo-attach-point\x3d"containerNode,textDirNode"\n\t\trole\x3d"presentation"\x3e\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemAccelKey" style\x3d"display: none" data-dojo-attach-point\x3d"accelKeyNode"\x3e\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuArrowCell" role\x3d"presentation"\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"arrowWrapper" style\x3d"visibility: hidden"\x3e\n\t\t\t\x3cspan class\x3d"dijitInline dijitIcon dijitMenuExpand"\x3e\x3c/span\x3e\n\t\t\t\x3cspan class\x3d"dijitMenuExpandA11y"\x3e+\x3c/span\x3e\n\t\t\x3c/span\x3e\n\t\x3c/td\x3e\n\x3c/tr\x3e\n', 
"url:dijit/templates/MenuSeparator.html":'\x3ctr class\x3d"dijitMenuSeparator" role\x3d"separator"\x3e\n\t\x3ctd class\x3d"dijitMenuSeparatorIconCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3ctd colspan\x3d"3" class\x3d"dijitMenuSeparatorLabelCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop dijitMenuSeparatorLabel"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\x3c/tr\x3e\n', 
"url:dijit/form/templates/Select.html":'\x3ctable class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point\x3d"_buttonNode,tableNode,focusNode,_popupStateNode" cellspacing\x3d\'0\' cellpadding\x3d\'0\'\n\trole\x3d"listbox" aria-haspopup\x3d"true"\n\t\x3e\x3ctbody role\x3d"presentation"\x3e\x3ctr role\x3d"presentation"\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitStretch dijitButtonContents" role\x3d"presentation"\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point\x3d"containerNode,textDirNode" role\x3d"presentation"\x3e\x3c/div\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitValidationContainer"\n\t\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t/\x3e\x3c/div\n\t\t\t\x3e\x3cinput type\x3d"hidden" ${!nameAttrSetting} data-dojo-attach-point\x3d"valueNode" value\x3d"${value}" aria-hidden\x3d"true"\n\t\t/\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point\x3d"titleNode" role\x3d"presentation"\n\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/\x3e\x3c/td\n\t\x3e\x3c/tr\x3e\x3c/tbody\n\x3e\x3c/table\x3e\n', 
"*now":function(f) {
  f(['dojo/i18n!*preload*lsmb/nls/main*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
}}});
require("dojo/parser dojo/query dojo/on dijit/registry dojo/_base/event dojo/hash dojo/topic dojo/dom-class dojo/ready dojo/domReady!".split(" "), function(f, m, l, g, b, e, k, d, a) {
  f.parse().then(function() {
    var c = g.byId("maindiv"), f = 0, p = function(a) {
      if(!a.target && a.href) {
        var c = a.href + "#s";
        l(a, "click", function(a) {
          !a.ctrlKey && (!a.shiftKey && 0 != !a.button) && (b.stop(a), f++, e(c + f.toString(16)))
        });
        var d = window.location;
        a.href = d.origin + d.pathname + d.search + "#" + a.href
      }
    };
    null != c && (c.interceptClick = p, window.location.hash && c.load_link(e()), k.subscribe("/dojo/hashchange", function(a) {
      c.load_link(a)
    }));
    m("a.menu-terminus").forEach(p);
    a(999, function() {
      m("#console-container").forEach(function(a) {
        d.add(a, "done-parsing")
      });
      m("body").forEach(function(a) {
        d.add(a, "done-parsing")
      })
    })
  })
});
require(["dojo/on", "dojo/query", "dojo/dom-class", "dojo/_base/event", "dojo/domReady!"], function(f, m, l, g) {
  m("a.t-submenu").forEach(function(b) {
    f(b, "click", function(e) {
      !e.ctrlKey && (!e.shiftKey && 0 != !e.button) && (g.stop(e), e = b.parentNode, l.contains(e, "menu_closed") ? l.replace(e, "menu_open", "menu_closed") : l.replace(e, "menu_closed", "menu_open"))
    })
  })
});

//# sourceMappingURL=main.js.map