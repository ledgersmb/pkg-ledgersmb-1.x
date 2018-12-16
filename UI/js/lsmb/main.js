//>>built
require({cache:{"dojo/parser":function() {
  define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p) {
    function r(a) {
      return eval("(" + a + ")")
    }
    function s(a) {
      var g = a._nameCaseMap, d = a.prototype;
      if(!g || g._extendCnt < v) {
        var g = a._nameCaseMap = {}, b;
        for(b in d) {
          "_" !== b.charAt(0) && (g[b.toLowerCase()] = b)
        }
        g._extendCnt = v
      }
      return g
    }
    function y(a, g) {
      var d = a.join();
      if(!x[d]) {
        for(var b = [], s = 0, e = a.length;s < e;s++) {
          var f = a[s];
          b[b.length] = x[f] = x[f] || l.getObject(f) || ~f.indexOf("/") && (g ? g(f) : c(f))
        }
        s = b.shift();
        x[d] = b.length ? s.createSubclass ? s.createSubclass(b) : s.extend.apply(s, b) : s
      }
      return x[d]
    }
    new Date("X");
    var v = 0;
    a.after(l, "extend", function() {
      v++
    }, !0);
    var x = {}, w = {_clearCache:function() {
      v++;
      x = {}
    }, _functionFromScript:function(a, g) {
      var d = "", b = "", s = a.getAttribute(g + "args") || a.getAttribute("args"), f = a.getAttribute("with"), s = (s || "").split(/\s*,\s*/);
      f && f.length && m.forEach(f.split(/\s*,\s*/), function(a) {
        d += "with(" + a + "){";
        b += "}"
      });
      return new Function(s, d + a.innerHTML + b)
    }, instantiate:function(a, g, d) {
      g = g || {};
      d = d || {};
      var b = (d.scope || k._scopeName) + "Type", s = "data-" + (d.scope || k._scopeName) + "-", f = s + "type", e = s + "mixins", q = [];
      m.forEach(a, function(a) {
        var d = b in g ? g[b] : a.getAttribute(f) || a.getAttribute(b);
        if(d) {
          var s = a.getAttribute(e), d = s ? [d].concat(s.split(/\s*,\s*/)) : [d];
          q.push({node:a, types:d})
        }
      });
      return this._instantiate(q, g, d)
    }, _instantiate:function(a, g, b, s) {
      function f(a) {
        !g._started && !b.noStart && m.forEach(a, function(a) {
          "function" === typeof a.startup && !a._started && a.startup()
        });
        return a
      }
      a = m.map(a, function(a) {
        var d = a.ctor || y(a.types, b.contextRequire);
        if(!d) {
          throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
        }
        return this.construct(d, a.node, g, b, a.scripts, a.inherited)
      }, this);
      return s ? d(a).then(f) : f(a)
    }, construct:function(d, b, f, q, y, c) {
      function h(d) {
        M && l.setObject(M, d);
        for(B = 0;B < J.length;B++) {
          a[J[B].advice || "after"](d, J[B].method, l.hitch(d, J[B].func), !0)
        }
        for(B = 0;B < S.length;B++) {
          S[B].call(d)
        }
        for(B = 0;B < Q.length;B++) {
          d.watch(Q[B].prop, Q[B].func)
        }
        for(B = 0;B < R.length;B++) {
          u(d, R[B].event, R[B].func)
        }
        return d
      }
      var p = d && d.prototype;
      q = q || {};
      var v = {};
      q.defaults && l.mixin(v, q.defaults);
      c && l.mixin(v, c);
      var w;
      t("dom-attributes-explicit") ? w = b.attributes : t("dom-attributes-specified-flag") ? w = m.filter(b.attributes, function(a) {
        return a.specified
      }) : (c = (/^input$|^img$/i.test(b.nodeName) ? b : b.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), w = m.map(c.split(/\s+/), function(a) {
        var d = a.toLowerCase();
        return{name:a, value:"LI" == b.nodeName && "value" == a || "enctype" == d ? b.getAttribute(d) : b.getAttributeNode(d).value}
      }));
      var x = q.scope || k._scopeName;
      c = "data-" + x + "-";
      var A = {};
      "dojo" !== x && (A[c + "props"] = "data-dojo-props", A[c + "type"] = "data-dojo-type", A[c + "mixins"] = "data-dojo-mixins", A[x + "type"] = "dojoType", A[c + "id"] = "data-dojo-id");
      for(var B = 0, z, x = [], M, K;z = w[B++];) {
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
            M = z;
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
            if(E in p || (E = s(d)[F] || E), E in p) {
              switch(typeof p[E]) {
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
                  F = p[E], v[E] = F && "length" in F ? z ? z.split(/\s*,\s*/) : [] : F instanceof Date ? "" == z ? new Date("") : "now" == z ? new Date : g.fromISOString(z) : F instanceof e ? k.baseUrl + z : r(z)
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
          K = r.call(q.propsThis, "{" + K + "}"), l.mixin(v, K)
        }catch(U) {
          throw Error(U.toString() + " in data-dojo-props\x3d'" + K + "'");
        }
      }
      l.mixin(v, f);
      y || (y = d && (d._noScript || p._noScript) ? [] : n("\x3e script[type^\x3d'dojo/']", b));
      var J = [], S = [], Q = [], R = [];
      if(y) {
        for(B = 0;B < y.length;B++) {
          A = y[B], b.removeChild(A), f = A.getAttribute(c + "event") || A.getAttribute("event"), q = A.getAttribute(c + "prop"), K = A.getAttribute(c + "method"), x = A.getAttribute(c + "advice"), w = A.getAttribute("type"), A = this._functionFromScript(A, c), f ? "dojo/connect" == w ? J.push({method:f, func:A}) : "dojo/on" == w ? R.push({event:f, func:A}) : v[f] = A : "dojo/aspect" == w ? J.push({method:K, advice:x, func:A}) : "dojo/watch" == w ? Q.push({prop:q, func:A}) : S.push(A)
        }
      }
      d = (y = d.markupFactory || p.markupFactory) ? y(v, b, d) : new d(v, b);
      return d.then ? d.then(h) : h(d)
    }, scan:function(a, d) {
      function g(a) {
        if(!a.inherited) {
          a.inherited = {};
          var d = a.node, b = g(a.parent), d = {dir:d.getAttribute("dir") || b.dir, lang:d.getAttribute("lang") || b.lang, textDir:d.getAttribute(h) || b.textDir}, s;
          for(s in d) {
            d[s] && (a.inherited[s] = d[s])
          }
        }
        return a.inherited
      }
      var b = [], s = [], f = {}, e = (d.scope || k._scopeName) + "Type", r = "data-" + (d.scope || k._scopeName) + "-", t = r + "type", h = r + "textdir", r = r + "mixins", n = a.firstChild, p = d.inherited;
      if(!p) {
        var v = function(a, d) {
          return a.getAttribute && a.getAttribute(d) || a.parentNode && v(a.parentNode, d)
        }, p = {dir:v(a, "dir"), lang:v(a, "lang"), textDir:v(a, h)}, w;
        for(w in p) {
          p[w] || delete p[w]
        }
      }
      for(var p = {inherited:p}, x, l;;) {
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
                var u = n.getAttribute(t) || n.getAttribute(e);
                w = n.firstChild;
                if(!u && (!w || 3 == w.nodeType && !w.nextSibling)) {
                  n = n.nextSibling
                }else {
                  l = null;
                  if(u) {
                    var F = n.getAttribute(r);
                    x = F ? [u].concat(F.split(/\s*,\s*/)) : [u];
                    try {
                      l = y(x, d.contextRequire)
                    }catch(U) {
                    }
                    l || m.forEach(x, function(a) {
                      ~a.indexOf("/") && !f[a] && (f[a] = !0, s[s.length] = a)
                    });
                    F = l && !l.prototype._noScript ? [] : null;
                    p = {types:x, ctor:l, parent:p, node:n, scripts:F};
                    p.inherited = g(p);
                    b.push(p)
                  }else {
                    p = {node:n, scripts:x, parent:p}
                  }
                  x = F;
                  l = n.stopParser || l && l.prototype.stopParser && !d.template;
                  n = w
                }
              }
            }
          }
        }else {
          if(!p || !p.node) {
            break
          }
          n = p.node.nextSibling;
          l = !1;
          p = p.parent;
          x = p.scripts
        }
      }
      var J = new q;
      s.length ? (d.contextRequire || c)(s, function() {
        J.resolve(m.filter(b, function(a) {
          if(!a.ctor) {
            try {
              a.ctor = y(a.types, d.contextRequire)
            }catch(g) {
            }
          }
          for(var b = a.parent;b && !b.types;) {
            b = b.parent
          }
          var s = a.ctor && a.ctor.prototype;
          a.instantiateChildren = !(s && s.stopParser && !d.template);
          a.instantiate = !b || b.instantiate && b.instantiateChildren;
          return a.instantiate
        }))
      }) : J.resolve(b);
      return J.promise
    }, _require:function(a, d) {
      var g = r("{" + a.innerHTML + "}"), b = [], s = [], f = new q, e = d && d.contextRequire || c, t;
      for(t in g) {
        b.push(t), s.push(g[t])
      }
      e(s, function() {
        for(var a = 0;a < b.length;a++) {
          l.setObject(b[a], arguments[a])
        }
        f.resolve(arguments)
      });
      return f.promise
    }, _scanAmd:function(a, d) {
      var g = new q, b = g.promise;
      g.resolve(!0);
      var s = this;
      n("script[type\x3d'dojo/require']", a).forEach(function(a) {
        b = b.then(function() {
          return s._require(a, d)
        });
        a.parentNode.removeChild(a)
      });
      return b
    }, parse:function(a, d) {
      a && ("string" != typeof a && !("nodeType" in a)) && (d = a, a = d.rootNode);
      var g = a ? f.byId(a) : h.body();
      d = d || {};
      var b = d.template ? {template:!0} : {}, s = [], e = this, q = this._scanAmd(g, d).then(function() {
        return e.scan(g, d)
      }).then(function(a) {
        return e._instantiate(a, b, d, !0)
      }).then(function(a) {
        return s = s.concat(a)
      }).otherwise(function(a) {
        console.error("dojo/parser::parse() error", a);
        throw a;
      });
      l.mixin(s, q);
      return s
    }};
    k.parser = w;
    b.parseOnLoad && p(100, w, "parse");
    return w
  })
}, "dojo/_base/url":function() {
  define(["./kernel"], function(c) {
    var k = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, l = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, m = function() {
      for(var b = arguments, f = [b[0]], c = 1;c < b.length;c++) {
        if(b[c]) {
          var e = new m(b[c] + ""), f = new m(f[0] + "");
          if("" == e.path && !e.scheme && !e.authority && !e.query) {
            null != e.fragment && (f.fragment = e.fragment), e = f
          }else {
            if(!e.scheme && (e.scheme = f.scheme, !e.authority && (e.authority = f.authority, "/" != e.path.charAt(0)))) {
              for(var f = (f.path.substring(0, f.path.lastIndexOf("/") + 1) + e.path).split("/"), a = 0;a < f.length;a++) {
                "." == f[a] ? a == f.length - 1 ? f[a] = "" : (f.splice(a, 1), a--) : 0 < a && (!(1 == a && "" == f[0]) && ".." == f[a] && ".." != f[a - 1]) && (a == f.length - 1 ? (f.splice(a, 1), f[a - 1] = "") : (f.splice(a - 1, 2), a -= 2))
              }
              e.path = f.join("/")
            }
          }
          f = [];
          e.scheme && f.push(e.scheme, ":");
          e.authority && f.push("//", e.authority);
          f.push(e.path);
          e.query && f.push("?", e.query);
          e.fragment && f.push("#", e.fragment)
        }
      }
      this.uri = f.join("");
      b = this.uri.match(k);
      this.scheme = b[2] || (b[1] ? "" : null);
      this.authority = b[4] || (b[3] ? "" : null);
      this.path = b[5];
      this.query = b[7] || (b[6] ? "" : null);
      this.fragment = b[9] || (b[8] ? "" : null);
      null != this.authority && (b = this.authority.match(l), this.user = b[3] || null, this.password = b[4] || null, this.host = b[6] || b[7], this.port = b[9] || null)
    };
    m.prototype.toString = function() {
      return this.uri
    };
    return c._Url = m
  })
}, "dojo/promise/all":function() {
  define(["../_base/array", "../_base/lang", "../Deferred", "../when"], function(c, k, l, m) {
    var b = c.some;
    return function(f) {
      var c, e;
      k.isArray(f) ? e = f : f && "object" === typeof f && (c = f);
      var a, d = [];
      if(c) {
        e = [];
        for(var g in c) {
          Object.hasOwnProperty.call(c, g) && (d.push(g), e.push(c[g]))
        }
        a = {}
      }else {
        e && (a = [])
      }
      if(!e || !e.length) {
        return(new l).resolve(a)
      }
      var q = new l;
      q.promise.always(function() {
        a = d = null
      });
      var t = e.length;
      b(e, function(g, b) {
        c || d.push(b);
        m(g, function(g) {
          q.isFulfilled() || (a[d[b]] = g, 0 === --t && q.resolve(a))
        }, q.reject);
        return q.isFulfilled()
      });
      return q.promise
    }
  })
}, "dojo/date/stamp":function() {
  define(["../_base/lang", "../_base/array"], function(c, k) {
    var l = {};
    c.setObject("dojo.date.stamp", l);
    l.fromISOString = function(c, b) {
      l._isoRegExp || (l._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
      var f = l._isoRegExp.exec(c), h = null;
      if(f) {
        f.shift();
        f[1] && f[1]--;
        f[6] && (f[6] *= 1E3);
        b && (b = new Date(b), k.forEach(k.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "), function(a) {
          return b["get" + a]()
        }), function(a, g) {
          f[g] = f[g] || a
        }));
        h = new Date(f[0] || 1970, f[1] || 0, f[2] || 1, f[3] || 0, f[4] || 0, f[5] || 0, f[6] || 0);
        100 > f[0] && h.setFullYear(f[0] || 1970);
        var e = 0, a = f[7] && f[7].charAt(0);
        "Z" != a && (e = 60 * (f[8] || 0) + (Number(f[9]) || 0), "-" != a && (e *= -1));
        a && (e -= h.getTimezoneOffset());
        e && h.setTime(h.getTime() + 6E4 * e)
      }
      return h
    };
    l.toISOString = function(c, b) {
      var f = function(a) {
        return 10 > a ? "0" + a : a
      };
      b = b || {};
      var h = [], e = b.zulu ? "getUTC" : "get", a = "";
      "time" != b.selector && (a = c[e + "FullYear"](), a = ["0000".substr((a + "").length) + a, f(c[e + "Month"]() + 1), f(c[e + "Date"]())].join("-"));
      h.push(a);
      if("date" != b.selector) {
        a = [f(c[e + "Hours"]()), f(c[e + "Minutes"]()), f(c[e + "Seconds"]())].join(":");
        e = c[e + "Milliseconds"]();
        b.milliseconds && (a += "." + (100 > e ? "0" : "") + f(e));
        if(b.zulu) {
          a += "Z"
        }else {
          if("time" != b.selector) {
            var e = c.getTimezoneOffset(), d = Math.abs(e), a = a + ((0 < e ? "-" : "+") + f(Math.floor(d / 60)) + ":" + f(d % 60))
          }
        }
        h.push(a)
      }
      return h.join("T")
    };
    return l
  })
}, "dojo/hash":function() {
  define("./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "), function(c, k, l, m, b, f, h, e) {
    function a(a, d) {
      var g = a.indexOf(d);
      return 0 <= g ? a.substring(g + 1) : ""
    }
    function d() {
      return a(location.href, "#")
    }
    function g() {
      f.publish("/dojo/hashchange", d())
    }
    function q() {
      d() !== u && (u = d(), g())
    }
    function t(a) {
      if(p) {
        if(p.isTransitioning()) {
          setTimeout(b.hitch(null, t, a), s)
        }else {
          var d = p.iframe.location.href, g = d.indexOf("?");
          p.iframe.location.replace(d.substring(0, g) + "?" + a)
        }
      }else {
        location.replace("#" + a), !r && q()
      }
    }
    function n() {
      function f() {
        u = d();
        r = p ? u : a(h.href, "?");
        t = !1;
        m = null
      }
      var e = document.createElement("iframe"), q = l.dojoBlankHtmlUrl || k.toUrl("./resources/blank.html");
      e.id = "dojo-hash-iframe";
      e.src = q + "?" + d();
      e.style.display = "none";
      document.body.appendChild(e);
      this.iframe = c.global["dojo-hash-iframe"];
      var r, t, m, n, p, h = this.iframe.location;
      this.isTransitioning = function() {
        return t
      };
      this.pollLocation = function() {
        if(!p) {
          try {
            var c = a(h.href, "?");
            document.title != n && (n = this.iframe.document.title = document.title)
          }catch(l) {
            p = !0, console.error("dojo/hash: Error adding history entry. Server unreachable.")
          }
        }
        var k = d();
        if(t && u === k) {
          if(p || c === m) {
            f(), g()
          }else {
            setTimeout(b.hitch(this, this.pollLocation), 0);
            return
          }
        }else {
          if(!(u === k && (p || r === c))) {
            if(u !== k) {
              u = k;
              t = !0;
              m = k;
              e.src = q + "?" + m;
              p = !1;
              setTimeout(b.hitch(this, this.pollLocation), 0);
              return
            }
            p || (location.href = "#" + h.search.substring(1), f(), g())
          }
        }
        setTimeout(b.hitch(this, this.pollLocation), s)
      };
      f();
      setTimeout(b.hitch(this, this.pollLocation), s)
    }
    c.hash = function(a, g) {
      if(!arguments.length) {
        return d()
      }
      "#" == a.charAt(0) && (a = a.substring(1));
      g ? t(a) : location.href = "#" + a;
      return a
    };
    var u, p, r, s = l.hashPollFrequency || 100;
    h(function() {
      "onhashchange" in c.global && (!e("ie") || 8 <= e("ie") && "BackCompat" != document.compatMode) ? r = m.after(c.global, "onhashchange", g, !0) : document.addEventListener ? (u = d(), setInterval(q, s)) : document.attachEvent && (p = new n)
    });
    return c.hash
  })
}, "lsmb/DateTextBox":function() {
  define(["dijit/form/DateTextBox", "dojo/date/locale", "dojo/_base/declare"], function(c, k, l) {
    var m = /^\d\d\d\d-\d\d-\d\d$/;
    return l("lsmb/DateTextBox", [c], {_formattedValue:null, constructor:function(b, f) {
      this._formattedValue = f.value;
      b.constraints || (b.constraints = {});
      b.constraints.datePattern || (b.constraints.datePattern = lsmbConfig.dateformat.replace(/mm/, "MM"));
      b.placeholder || (b.placeholder = lsmbConfig.dateformat);
      this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      if(this._formattedValue && (!this.value || !m.test(this.value))) {
        this.value = this.parse(this._formattedValue, this.constraints)
      }
    }, parse:function(b, f) {
      return!m.test(b) ? this.inherited(arguments) : k.parse(b, {datePattern:"yyyy-MM-dd", selector:"date"})
    }})
  })
}, "dijit/form/DateTextBox":function() {
  define(["dojo/_base/declare", "../Calendar", "./_DateTimeTextBox"], function(c, k, l) {
    return c("dijit.form.DateTextBox", l, {baseClass:"dijitTextBox dijitComboBox dijitDateTextBox", popupClass:k, _selector:"date", maxHeight:Infinity, value:new Date("")})
  })
}, "dijit/Calendar":function() {
  define("dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p, r) {
    var s = m("dijit.Calendar", [t, n, u], {baseClass:"dijitCalendar", cssStateNodes:{decrementMonth:"dijitCalendarArrow", incrementMonth:"dijitCalendarArrow", previousYearLabelNode:"dijitCalendarPreviousYear", nextYearLabelNode:"dijitCalendarNextYear"}, setValue:function(a) {
      e.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
      this.set("value", a)
    }, _createMonthWidget:function() {
      return new s._MonthDropDownButton({id:this.id + "_mddb", tabIndex:-1, onMonthSelect:d.hitch(this, "_onMonthSelect"), lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(g(this.domNode, "keydown", d.hitch(this, "_onKeyDown")), g(this.dateRowsNode, "mouseover", d.hitch(this, "_onDayMouseOver")), g(this.dateRowsNode, "mouseout", d.hitch(this, "_onDayMouseOut")), g(this.dateRowsNode, "mousedown", d.hitch(this, "_onDayMouseDown")), g(this.dateRowsNode, "mouseup", d.hitch(this, "_onDayMouseUp")))
    }, _onMonthSelect:function(a) {
      var d = new this.dateClassObj(this.currentFocus);
      d.setDate(1);
      d.setMonth(a);
      a = this.dateModule.getDaysInMonth(d);
      var g = this.currentFocus.getDate();
      d.setDate(Math.min(g, a));
      this._setCurrentFocusAttr(d)
    }, _onDayMouseOver:function(a) {
      if((a = f.contains(a.target, "dijitCalendarDateLabel") ? a.target.parentNode : a.target) && (a.dijitDateValue && !f.contains(a, "dijitCalendarDisabledDate") || a == this.previousYearLabelNode || a == this.nextYearLabelNode)) {
        f.add(a, "dijitCalendarHoveredDate"), this._currentNode = a
      }
    }, _onDayMouseOut:function(a) {
      this._currentNode && !(a.relatedTarget && a.relatedTarget.parentNode == this._currentNode) && (a = "dijitCalendarHoveredDate", f.contains(this._currentNode, "dijitCalendarActiveDate") && (a += " dijitCalendarActiveDate"), f.remove(this._currentNode, a), this._currentNode = null)
    }, _onDayMouseDown:function(a) {
      if((a = a.target.parentNode) && a.dijitDateValue && !f.contains(a, "dijitCalendarDisabledDate")) {
        f.add(a, "dijitCalendarActiveDate"), this._currentNode = a
      }
    }, _onDayMouseUp:function(a) {
      (a = a.target.parentNode) && a.dijitDateValue && f.remove(a, "dijitCalendarActiveDate")
    }, handleKey:function(d) {
      var g = -1, b, s = this.currentFocus;
      switch(d.keyCode) {
        case a.RIGHT_ARROW:
          g = 1;
        case a.LEFT_ARROW:
          b = "day";
          this.isLeftToRight() || (g *= -1);
          break;
        case a.DOWN_ARROW:
          g = 1;
        case a.UP_ARROW:
          b = "week";
          break;
        case a.PAGE_DOWN:
          g = 1;
        case a.PAGE_UP:
          b = d.ctrlKey || d.altKey ? "year" : "month";
          break;
        case a.END:
          s = this.dateModule.add(s, "month", 1), b = "day";
        case a.HOME:
          s = new this.dateClassObj(s);
          s.setDate(1);
          break;
        default:
          return!0
      }
      b && (s = this.dateModule.add(s, b, g));
      this._setCurrentFocusAttr(s);
      return!1
    }, _onKeyDown:function(a) {
      this.handleKey(a) || (a.stopPropagation(), a.preventDefault())
    }, onValueSelected:function() {
    }, onChange:function(a) {
      this.onValueSelected(a)
    }, getClassForDate:function() {
    }});
    s._MonthDropDownButton = m("dijit.Calendar._MonthDropDownButton", r, {onMonthSelect:function() {
    }, postCreate:function() {
      this.inherited(arguments);
      this.dropDown = new s._MonthDropDown({id:this.id + "_mdd", onChange:this.onMonthSelect})
    }, _setMonthAttr:function(a) {
      var d = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
      this.dropDown.set("months", d);
      this.containerNode.innerHTML = (6 == q("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + this.dropDown.domNode.innerHTML + "\x3c/div\x3e") + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + d[a.getMonth()] + "\x3c/div\x3e"
    }});
    s._MonthDropDown = m("dijit.Calendar._MonthDropDown", [n, p, u], {months:[], baseClass:"dijitCalendarMonthMenu dijitMenu", templateString:"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onClick'\x3e\x3c/div\x3e", _setMonthsAttr:function(a) {
      this.domNode.innerHTML = "";
      c.forEach(a, function(a, d) {
        h.create("div", {className:"dijitCalendarMonthLabel", month:d, innerHTML:a}, this.domNode)._cssState = "dijitCalendarMonthLabel"
      }, this)
    }, _onClick:function(a) {
      this.onChange(b.get(a.target, "month"))
    }, onChange:function() {
    }});
    return s
  })
}, "dojo/date":function() {
  define(["./has", "./_base/lang"], function(c, k) {
    var l = {getDaysInMonth:function(c) {
      var b = c.getMonth();
      return 1 == b && l.isLeapYear(c) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }, isLeapYear:function(c) {
      c = c.getFullYear();
      return!(c % 400) || !(c % 4) && !!(c % 100)
    }, getTimezoneName:function(c) {
      var b = c.toString(), f = "", h = b.indexOf("(");
      if(-1 < h) {
        f = b.substring(++h, b.indexOf(")"))
      }else {
        if(h = /([A-Z\/]+) \d{4}$/, b = b.match(h)) {
          f = b[1]
        }else {
          if(b = c.toLocaleString(), h = / ([A-Z\/]+)$/, b = b.match(h)) {
            f = b[1]
          }
        }
      }
      return"AM" == f || "PM" == f ? "" : f
    }, compare:function(c, b, f) {
      c = new Date(+c);
      b = new Date(+(b || new Date));
      "date" == f ? (c.setHours(0, 0, 0, 0), b.setHours(0, 0, 0, 0)) : "time" == f && (c.setFullYear(0, 0, 0), b.setFullYear(0, 0, 0));
      return c > b ? 1 : c < b ? -1 : 0
    }, add:function(c, b, f) {
      var h = new Date(+c), e = !1, a = "Date";
      switch(b) {
        case "day":
          break;
        case "weekday":
          var d;
          (b = f % 5) ? d = parseInt(f / 5) : (b = 0 < f ? 5 : -5, d = 0 < f ? (f - 5) / 5 : (f + 5) / 5);
          var g = c.getDay(), q = 0;
          6 == g && 0 < f ? q = 1 : 0 == g && 0 > f && (q = -1);
          g += b;
          if(0 == g || 6 == g) {
            q = 0 < f ? 2 : -2
          }
          f = 7 * d + b + q;
          break;
        case "year":
          a = "FullYear";
          e = !0;
          break;
        case "week":
          f *= 7;
          break;
        case "quarter":
          f *= 3;
        case "month":
          e = !0;
          a = "Month";
          break;
        default:
          a = "UTC" + b.charAt(0).toUpperCase() + b.substring(1) + "s"
      }
      if(a) {
        h["set" + a](h["get" + a]() + f)
      }
      e && h.getDate() < c.getDate() && h.setDate(0);
      return h
    }, difference:function(c, b, f) {
      b = b || new Date;
      f = f || "day";
      var h = b.getFullYear() - c.getFullYear(), e = 1;
      switch(f) {
        case "quarter":
          c = c.getMonth();
          b = b.getMonth();
          c = Math.floor(c / 3) + 1;
          b = Math.floor(b / 3) + 1;
          e = b + 4 * h - c;
          break;
        case "weekday":
          h = Math.round(l.difference(c, b, "day"));
          f = parseInt(l.difference(c, b, "week"));
          e = h % 7;
          if(0 == e) {
            h = 5 * f
          }else {
            var a = 0, d = c.getDay();
            b = b.getDay();
            f = parseInt(h / 7);
            e = h % 7;
            c = new Date(c);
            c.setDate(c.getDate() + 7 * f);
            c = c.getDay();
            if(0 < h) {
              switch(!0) {
                case 6 == d:
                  a = -1;
                  break;
                case 0 == d:
                  a = 0;
                  break;
                case 6 == b:
                  a = -1;
                  break;
                case 0 == b:
                  a = -2;
                  break;
                case 5 < c + e:
                  a = -2
              }
            }else {
              if(0 > h) {
                switch(!0) {
                  case 6 == d:
                    a = 0;
                    break;
                  case 0 == d:
                    a = 1;
                    break;
                  case 6 == b:
                    a = 2;
                    break;
                  case 0 == b:
                    a = 1;
                    break;
                  case 0 > c + e:
                    a = 2
                }
              }
            }
            h = h + a - 2 * f
          }
          e = h;
          break;
        case "year":
          e = h;
          break;
        case "month":
          e = b.getMonth() - c.getMonth() + 12 * h;
          break;
        case "week":
          e = parseInt(l.difference(c, b, "day") / 7);
          break;
        case "day":
          e /= 24;
        case "hour":
          e /= 60;
        case "minute":
          e /= 60;
        case "second":
          e /= 1E3;
        case "millisecond":
          e *= b.getTime() - c.getTime()
      }
      return Math.round(e)
    }};
    k.mixin(k.getObject("dojo.date", !0), l);
    return l
  })
}, "dojo/date/locale":function() {
  define("../_base/lang ../_base/array ../date ../cldr/supplemental ../i18n ../regexp ../string ../i18n!../cldr/nls/gregorian module".split(" "), function(c, k, l, m, b, f, h, e, a) {
    function d(a, d, g, b) {
      return b.replace(/([a-z])\1*/ig, function(f) {
        var e, q, c = f.charAt(0);
        f = f.length;
        var n = ["abbr", "wide", "narrow"];
        switch(c) {
          case "G":
            e = d[4 > f ? "eraAbbr" : "eraNames"][0 > a.getFullYear() ? 0 : 1];
            break;
          case "y":
            e = a.getFullYear();
            switch(f) {
              case 1:
                break;
              case 2:
                if(!g.fullYear) {
                  e = String(e);
                  e = e.substr(e.length - 2);
                  break
                }
              ;
              default:
                q = !0
            }
            break;
          case "Q":
          ;
          case "q":
            e = Math.ceil((a.getMonth() + 1) / 3);
            q = !0;
            break;
          case "M":
          ;
          case "L":
            e = a.getMonth();
            3 > f ? (e += 1, q = !0) : (c = ["months", "L" == c ? "standAlone" : "format", n[f - 3]].join("-"), e = d[c][e]);
            break;
          case "w":
            e = t._getWeekOfYear(a, 0);
            q = !0;
            break;
          case "d":
            e = a.getDate();
            q = !0;
            break;
          case "D":
            e = t._getDayOfYear(a);
            q = !0;
            break;
          case "e":
          ;
          case "c":
            if(e = a.getDay(), 2 > f) {
              e = (e - m.getFirstDayOfWeek(g.locale) + 8) % 7;
              break
            }
          ;
          case "E":
            e = a.getDay();
            3 > f ? (e += 1, q = !0) : (c = ["days", "c" == c ? "standAlone" : "format", n[f - 3]].join("-"), e = d[c][e]);
            break;
          case "a":
            c = 12 > a.getHours() ? "am" : "pm";
            e = g[c] || d["dayPeriods-format-wide-" + c];
            break;
          case "h":
          ;
          case "H":
          ;
          case "K":
          ;
          case "k":
            q = a.getHours();
            switch(c) {
              case "h":
                e = q % 12 || 12;
                break;
              case "H":
                e = q;
                break;
              case "K":
                e = q % 12;
                break;
              case "k":
                e = q || 24
            }
            q = !0;
            break;
          case "m":
            e = a.getMinutes();
            q = !0;
            break;
          case "s":
            e = a.getSeconds();
            q = !0;
            break;
          case "S":
            e = Math.round(a.getMilliseconds() * Math.pow(10, f - 3));
            q = !0;
            break;
          case "v":
          ;
          case "z":
            if(e = t._getZone(a, !0, g)) {
              break
            }
            f = 4;
          case "Z":
            c = t._getZone(a, !1, g);
            c = [0 >= c ? "+" : "-", h.pad(Math.floor(Math.abs(c) / 60), 2), h.pad(Math.abs(c) % 60, 2)];
            4 == f && (c.splice(0, 0, "GMT"), c.splice(3, 0, ":"));
            e = c.join("");
            break;
          default:
            throw Error("dojo.date.locale.format: invalid pattern char: " + b);
        }
        q && (e = h.pad(e, f));
        return e
      })
    }
    function g(a, d, g, b) {
      var e = function(a) {
        return a
      };
      d = d || e;
      g = g || e;
      b = b || e;
      var f = a.match(/(''|[^'])+/g), q = "'" == a.charAt(0);
      k.forEach(f, function(a, b) {
        a ? (f[b] = (q ? g : d)(a.replace(/''/g, "'")), q = !q) : f[b] = ""
      });
      return b(f.join(""))
    }
    function q(a, d, g, b) {
      b = f.escapeString(b);
      g.strict || (b = b.replace(" a", " ?a"));
      return b.replace(/([a-z])\1*/ig, function(b) {
        var e;
        e = b.charAt(0);
        var f = b.length, q = "", c = "";
        g.strict ? (1 < f && (q = "0{" + (f - 1) + "}"), 2 < f && (c = "0{" + (f - 2) + "}")) : (q = "0?", c = "0{0,2}");
        switch(e) {
          case "y":
            e = "\\d{2,4}";
            break;
          case "M":
          ;
          case "L":
            2 < f ? (e = d["months-" + ("L" == e ? "standAlone" : "format") + "-" + n[f - 3]].slice(0).join("|"), g.strict || (e = e.replace(/\./g, ""), e = "(?:" + e + ")\\.?")) : e = "1[0-2]|" + q + "[1-9]";
            break;
          case "D":
            e = "[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|" + q + "[1-9][0-9]|" + c + "[1-9]";
            break;
          case "d":
            e = "3[01]|[12]\\d|" + q + "[1-9]";
            break;
          case "w":
            e = "[1-4][0-9]|5[0-3]|" + q + "[1-9]";
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            e = ".+?";
            break;
          case "h":
            e = "1[0-2]|" + q + "[1-9]";
            break;
          case "k":
            e = "1[01]|" + q + "\\d";
            break;
          case "H":
            e = "1\\d|2[0-3]|" + q + "\\d";
            break;
          case "K":
            e = "1\\d|2[0-4]|" + q + "[1-9]";
            break;
          case "m":
          ;
          case "s":
            e = "[0-5]\\d";
            break;
          case "S":
            e = "\\d{" + f + "}";
            break;
          case "a":
            f = g.am || d["dayPeriods-format-wide-am"];
            q = g.pm || d["dayPeriods-format-wide-pm"];
            e = f + "|" + q;
            g.strict || (f != f.toLowerCase() && (e += "|" + f.toLowerCase()), q != q.toLowerCase() && (e += "|" + q.toLowerCase()), -1 != e.indexOf(".") && (e += "|" + e.replace(/\./g, "")));
            e = e.replace(/\./g, "\\.");
            break;
          default:
            e = ".*"
        }
        a && a.push(b);
        return"(" + e + ")"
      }).replace(/[\xa0 ]/g, "[\\s\\xa0]")
    }
    var t = {};
    c.setObject(a.id.replace(/\//g, "."), t);
    t._getZone = function(a, d, g) {
      return d ? l.getTimezoneName(a) : a.getTimezoneOffset()
    };
    t.format = function(a, e) {
      e = e || {};
      var f = b.normalizeLocale(e.locale), q = e.formatLength || "short", f = t._getGregorianBundle(f), n = [], p = c.hitch(this, d, a, f, e);
      if("year" == e.selector) {
        return g(f["dateFormatItem-yyyy"] || "yyyy", p)
      }
      var h;
      "date" != e.selector && (h = e.timePattern || f["timeFormat-" + q]) && n.push(g(h, p));
      "time" != e.selector && (h = e.datePattern || f["dateFormat-" + q]) && n.push(g(h, p));
      return 1 == n.length ? n[0] : f["dateTimeFormat-" + q].replace(/\'/g, "").replace(/\{(\d+)\}/g, function(a, d) {
        return n[d]
      })
    };
    t.regexp = function(a) {
      return t._parseInfo(a).regexp
    };
    t._parseInfo = function(a) {
      a = a || {};
      var d = b.normalizeLocale(a.locale), d = t._getGregorianBundle(d), e = a.formatLength || "short", f = a.datePattern || d["dateFormat-" + e], n = a.timePattern || d["timeFormat-" + e], e = "date" == a.selector ? f : "time" == a.selector ? n : d["dateTimeFormat-" + e].replace(/\{(\d+)\}/g, function(a, d) {
        return[n, f][d]
      }), p = [];
      return{regexp:g(e, c.hitch(this, q, p, d, a)), tokens:p, bundle:d}
    };
    t.parse = function(a, d) {
      var g = /[\u200E\u200F\u202A\u202E]/g, b = t._parseInfo(d), e = b.tokens, f = b.bundle, g = RegExp("^" + b.regexp.replace(g, "") + "$", b.strict ? "" : "i").exec(a && a.replace(g, ""));
      if(!g) {
        return null
      }
      var q = ["abbr", "wide", "narrow"], c = [1970, 0, 1, 0, 0, 0, 0], n = "", g = k.every(g, function(a, g) {
        if(!g) {
          return!0
        }
        var b = e[g - 1], r = b.length, b = b.charAt(0);
        switch(b) {
          case "y":
            if(2 != r && d.strict) {
              c[0] = a
            }else {
              if(100 > a) {
                a = Number(a), b = "" + (new Date).getFullYear(), r = 100 * b.substring(0, 2), b = Math.min(Number(b.substring(2, 4)) + 20, 99), c[0] = a < b ? r + a : r - 100 + a
              }else {
                if(d.strict) {
                  return!1
                }
                c[0] = a
              }
            }
            break;
          case "M":
          ;
          case "L":
            if(2 < r) {
              if(r = f["months-" + ("L" == b ? "standAlone" : "format") + "-" + q[r - 3]].concat(), d.strict || (a = a.replace(".", "").toLowerCase(), r = k.map(r, function(a) {
                return a.replace(".", "").toLowerCase()
              })), a = k.indexOf(r, a), -1 == a) {
                return!1
              }
            }else {
              a--
            }
            c[1] = a;
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            r = f["days-" + ("c" == b ? "standAlone" : "format") + "-" + q[r - 3]].concat();
            d.strict || (a = a.toLowerCase(), r = k.map(r, function(a) {
              return a.toLowerCase()
            }));
            a = k.indexOf(r, a);
            if(-1 == a) {
              return!1
            }
            break;
          case "D":
            c[1] = 0;
          case "d":
            c[2] = a;
            break;
          case "a":
            r = d.am || f["dayPeriods-format-wide-am"];
            b = d.pm || f["dayPeriods-format-wide-pm"];
            if(!d.strict) {
              var t = /\./g;
              a = a.replace(t, "").toLowerCase();
              r = r.replace(t, "").toLowerCase();
              b = b.replace(t, "").toLowerCase()
            }
            if(d.strict && a != r && a != b) {
              return!1
            }
            n = a == b ? "p" : a == r ? "a" : "";
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
            c[3] = a;
            break;
          case "m":
            c[4] = a;
            break;
          case "s":
            c[5] = a;
            break;
          case "S":
            c[6] = a
        }
        return!0
      }), b = +c[3];
      "p" === n && 12 > b ? c[3] = b + 12 : "a" === n && 12 == b && (c[3] = 0);
      b = new Date(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
      d.strict && b.setFullYear(c[0]);
      var p = e.join(""), h = -1 != p.indexOf("d"), p = -1 != p.indexOf("M");
      if(!g || p && b.getMonth() > c[1] || h && b.getDate() > c[2]) {
        return null
      }
      if(p && b.getMonth() < c[1] || h && b.getDate() < c[2]) {
        b = l.add(b, "hour", 1)
      }
      return b
    };
    var n = ["abbr", "wide", "narrow"], u = [], p = {};
    t.addCustomFormats = function(a, d) {
      u.push({pkg:a, name:d});
      p = {}
    };
    t._getGregorianBundle = function(a) {
      if(p[a]) {
        return p[a]
      }
      var d = {};
      k.forEach(u, function(g) {
        g = b.getLocalization(g.pkg, g.name, a);
        d = c.mixin(d, g)
      }, this);
      return p[a] = d
    };
    t.addCustomFormats(a.id.replace(/\/date\/locale$/, ".cldr"), "gregorian");
    t.getNames = function(a, d, g, b) {
      var e;
      b = t._getGregorianBundle(b);
      a = [a, g, d];
      "standAlone" == g && (g = a.join("-"), e = b[g], 1 == e[0] && (e = void 0));
      a[1] = "format";
      return(e || b[a.join("-")]).concat()
    };
    t.isWeekend = function(a, d) {
      var g = m.getWeekend(d), b = (a || new Date).getDay();
      g.end < g.start && (g.end += 7, b < g.start && (b += 7));
      return b >= g.start && b <= g.end
    };
    t._getDayOfYear = function(a) {
      return l.difference(new Date(a.getFullYear(), 0, 1, a.getHours()), a) + 1
    };
    t._getWeekOfYear = function(a, d) {
      1 == arguments.length && (d = 0);
      var g = (new Date(a.getFullYear(), 0, 1)).getDay(), b = Math.floor((t._getDayOfYear(a) + (g - d + 7) % 7 - 1) / 7);
      g == d && b++;
      return b
    };
    return t
  })
}, "dojo/cldr/supplemental":function() {
  define(["../_base/lang", "../i18n"], function(c, k) {
    var l = {};
    c.setObject("dojo.cldr.supplemental", l);
    l.getFirstDayOfWeek = function(c) {
      c = {bd:5, mv:5, ae:6, af:6, bh:6, dj:6, dz:6, eg:6, iq:6, ir:6, jo:6, kw:6, ly:6, ma:6, om:6, qa:6, sa:6, sd:6, sy:6, ye:6, ag:0, ar:0, as:0, au:0, br:0, bs:0, bt:0, bw:0, by:0, bz:0, ca:0, cn:0, co:0, dm:0, "do":0, et:0, gt:0, gu:0, hk:0, hn:0, id:0, ie:0, il:0, "in":0, jm:0, jp:0, ke:0, kh:0, kr:0, la:0, mh:0, mm:0, mo:0, mt:0, mx:0, mz:0, ni:0, np:0, nz:0, pa:0, pe:0, ph:0, pk:0, pr:0, py:0, sg:0, sv:0, th:0, tn:0, tt:0, tw:0, um:0, us:0, ve:0, vi:0, ws:0, za:0, zw:0}[l._region(c)];
      return void 0 === c ? 1 : c
    };
    l._region = function(c) {
      c = k.normalizeLocale(c);
      c = c.split("-");
      var b = c[1];
      b ? 4 == b.length && (b = c[2]) : b = {aa:"et", ab:"ge", af:"za", ak:"gh", am:"et", ar:"eg", as:"in", av:"ru", ay:"bo", az:"az", ba:"ru", be:"by", bg:"bg", bi:"vu", bm:"ml", bn:"bd", bo:"cn", br:"fr", bs:"ba", ca:"es", ce:"ru", ch:"gu", co:"fr", cr:"ca", cs:"cz", cv:"ru", cy:"gb", da:"dk", de:"de", dv:"mv", dz:"bt", ee:"gh", el:"gr", en:"us", es:"es", et:"ee", eu:"es", fa:"ir", ff:"sn", fi:"fi", fj:"fj", fo:"fo", fr:"fr", fy:"nl", ga:"ie", gd:"gb", gl:"es", gn:"py", gu:"in", gv:"gb", ha:"ng", 
      he:"il", hi:"in", ho:"pg", hr:"hr", ht:"ht", hu:"hu", hy:"am", ia:"fr", id:"id", ig:"ng", ii:"cn", ik:"us", "in":"id", is:"is", it:"it", iu:"ca", iw:"il", ja:"jp", ji:"ua", jv:"id", jw:"id", ka:"ge", kg:"cd", ki:"ke", kj:"na", kk:"kz", kl:"gl", km:"kh", kn:"in", ko:"kr", ks:"in", ku:"tr", kv:"ru", kw:"gb", ky:"kg", la:"va", lb:"lu", lg:"ug", li:"nl", ln:"cd", lo:"la", lt:"lt", lu:"cd", lv:"lv", mg:"mg", mh:"mh", mi:"nz", mk:"mk", ml:"in", mn:"mn", mo:"ro", mr:"in", ms:"my", mt:"mt", my:"mm", 
      na:"nr", nb:"no", nd:"zw", ne:"np", ng:"na", nl:"nl", nn:"no", no:"no", nr:"za", nv:"us", ny:"mw", oc:"fr", om:"et", or:"in", os:"ge", pa:"in", pl:"pl", ps:"af", pt:"br", qu:"pe", rm:"ch", rn:"bi", ro:"ro", ru:"ru", rw:"rw", sa:"in", sd:"in", se:"no", sg:"cf", si:"lk", sk:"sk", sl:"si", sm:"ws", sn:"zw", so:"so", sq:"al", sr:"rs", ss:"za", st:"za", su:"id", sv:"se", sw:"tz", ta:"in", te:"in", tg:"tj", th:"th", ti:"et", tk:"tm", tl:"ph", tn:"za", to:"to", tr:"tr", ts:"za", tt:"ru", ty:"pf", 
      ug:"cn", uk:"ua", ur:"pk", uz:"uz", ve:"za", vi:"vn", wa:"be", wo:"sn", xh:"za", yi:"il", yo:"ng", za:"cn", zh:"cn", zu:"za", ace:"id", ady:"ru", agq:"cm", alt:"ru", amo:"ng", asa:"tz", ast:"es", awa:"in", bal:"pk", ban:"id", bas:"cm", bax:"cm", bbc:"id", bem:"zm", bez:"tz", bfq:"in", bft:"pk", bfy:"in", bhb:"in", bho:"in", bik:"ph", bin:"ng", bjj:"in", bku:"ph", bqv:"ci", bra:"in", brx:"in", bss:"cm", btv:"pk", bua:"ru", buc:"yt", bug:"id", bya:"id", byn:"er", cch:"ng", ccp:"in", ceb:"ph", 
      cgg:"ug", chk:"fm", chm:"ru", chp:"ca", chr:"us", cja:"kh", cjm:"vn", ckb:"iq", crk:"ca", csb:"pl", dar:"ru", dav:"ke", den:"ca", dgr:"ca", dje:"ne", doi:"in", dsb:"de", dua:"cm", dyo:"sn", dyu:"bf", ebu:"ke", efi:"ng", ewo:"cm", fan:"gq", fil:"ph", fon:"bj", fur:"it", gaa:"gh", gag:"md", gbm:"in", gcr:"gf", gez:"et", gil:"ki", gon:"in", gor:"id", grt:"in", gsw:"ch", guz:"ke", gwi:"ca", haw:"us", hil:"ph", hne:"in", hnn:"ph", hoc:"in", hoj:"in", ibb:"ng", ilo:"ph", inh:"ru", jgo:"cm", jmc:"tz", 
      kaa:"uz", kab:"dz", kaj:"ng", kam:"ke", kbd:"ru", kcg:"ng", kde:"tz", kdt:"th", kea:"cv", ken:"cm", kfo:"ci", kfr:"in", kha:"in", khb:"cn", khq:"ml", kht:"in", kkj:"cm", kln:"ke", kmb:"ao", koi:"ru", kok:"in", kos:"fm", kpe:"lr", krc:"ru", kri:"sl", krl:"ru", kru:"in", ksb:"tz", ksf:"cm", ksh:"de", kum:"ru", lag:"tz", lah:"pk", lbe:"ru", lcp:"cn", lep:"in", lez:"ru", lif:"np", lis:"cn", lki:"ir", lmn:"in", lol:"cd", lua:"cd", luo:"ke", luy:"ke", lwl:"th", mad:"id", mag:"in", mai:"in", mak:"id", 
      man:"gn", mas:"ke", mdf:"ru", mdh:"ph", mdr:"id", men:"sl", mer:"ke", mfe:"mu", mgh:"mz", mgo:"cm", min:"id", mni:"in", mnk:"gm", mnw:"mm", mos:"bf", mua:"cm", mwr:"in", myv:"ru", nap:"it", naq:"na", nds:"de", "new":"np", niu:"nu", nmg:"cm", nnh:"cm", nod:"th", nso:"za", nus:"sd", nym:"tz", nyn:"ug", pag:"ph", pam:"ph", pap:"bq", pau:"pw", pon:"fm", prd:"ir", raj:"in", rcf:"re", rej:"id", rjs:"np", rkt:"in", rof:"tz", rwk:"tz", saf:"gh", sah:"ru", saq:"ke", sas:"id", sat:"in", saz:"in", sbp:"tz", 
      scn:"it", sco:"gb", sdh:"ir", seh:"mz", ses:"ml", shi:"ma", shn:"mm", sid:"et", sma:"se", smj:"se", smn:"fi", sms:"fi", snk:"ml", srn:"sr", srr:"sn", ssy:"er", suk:"tz", sus:"gn", swb:"yt", swc:"cd", syl:"bd", syr:"sy", tbw:"ph", tcy:"in", tdd:"cn", tem:"sl", teo:"ug", tet:"tl", tig:"er", tiv:"ng", tkl:"tk", tmh:"ne", tpi:"pg", trv:"tw", tsg:"ph", tts:"th", tum:"mw", tvl:"tv", twq:"ne", tyv:"ru", tzm:"ma", udm:"ru", uli:"fm", umb:"ao", unr:"in", unx:"in", vai:"lr", vun:"tz", wae:"ch", wal:"et", 
      war:"ph", xog:"ug", xsr:"np", yao:"mz", yap:"fm", yav:"cm", zza:"tr"}[c[0]];
      return b
    };
    l.getWeekend = function(c) {
      var b = l._region(c);
      c = {"in":0, af:4, dz:4, ir:4, om:4, sa:4, ye:4, ae:5, bh:5, eg:5, il:5, iq:5, jo:5, kw:5, ly:5, ma:5, qa:5, sd:5, sy:5, tn:5}[b];
      b = {af:5, dz:5, ir:5, om:5, sa:5, ye:5, ae:6, bh:5, eg:6, il:6, iq:6, jo:6, kw:6, ly:6, ma:6, qa:6, sd:6, sy:6, tn:6}[b];
      void 0 === c && (c = 6);
      void 0 === b && (b = 0);
      return{start:c, end:b}
    };
    return l
  })
}, "dojo/i18n":function() {
  define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "), function(c, k, l, m, b, f, h, e, a) {
    l.add("dojo-preload-i18n-Api", 1);
    h = c.i18n = {};
    var d = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, g = function(a, d, g, b) {
      var e = [g + b];
      d = d.split("-");
      for(var f = "", q = 0;q < d.length;q++) {
        if(f += (f ? "-" : "") + d[q], !a || a[f]) {
          e.push(g + f + "/" + b), e.specificity = f
        }
      }
      return e
    }, q = {}, t = function(a, d, g) {
      g = g ? g.toLowerCase() : c.locale;
      a = a.replace(/\./g, "/");
      d = d.replace(/\./g, "/");
      return/root/i.test(g) ? a + "/nls/" + d : a + "/nls/" + g + "/" + d
    }, n = c.getL10nName = function(d, g, b) {
      return a.id + "!" + t(d, g, b)
    }, u = function(a, d, b, e, c, s) {
      a([d], function(r) {
        var t = f.clone(r.root || r.ROOT), n = g(!r._v1x && r, c, b, e);
        a(n, function() {
          for(var a = 1;a < n.length;a++) {
            t = f.mixin(f.clone(t), arguments[a])
          }
          q[d + "/" + c] = t;
          t.$locale = n.specificity;
          s()
        })
      })
    }, p = function(a) {
      var d = b.extraLocale || [], d = f.isArray(d) ? d : [d];
      d.push(a);
      return d
    }, r = function(a, g, b) {
      var s = d.exec(a), r = s[1] + "/", t = s[5] || s[4], n = r + t, h = (s = s[5] && s[4]) || c.locale || "", k = n + "/" + h, s = s ? [h] : p(h), y = s.length, C = function() {
        --y || b(f.delegate(q[k]))
      }, h = a.split("*"), z = "preload" == h[1];
      if(l("dojo-preload-i18n-Api")) {
        z && (q[a] || (q[a] = 1, w(h[2], e.parse(h[3]), 1, g)), b(1));
        if(!(h = z)) {
          v && x.push([a, g, b]), h = v && !q[k]
        }
        if(h) {
          return
        }
      }else {
        if(z) {
          b(1);
          return
        }
      }
      m.forEach(s, function(a) {
        var d = n + "/" + a;
        l("dojo-preload-i18n-Api") && G(d);
        q[d] ? C() : u(g, n, r, t, a, C)
      })
    };
    if(l("dojo-unit-tests")) {
      var s = h.unitTests = []
    }
    l("dojo-preload-i18n-Api");
    var y = h.normalizeLocale = function(a) {
      a = a ? a.toLowerCase() : c.locale;
      return"root" == a ? "ROOT" : a
    }, v = 0, x = [], w = h._preloadLocalizations = function(a, d, g, b) {
      function e(a, d) {
        b([a], d)
      }
      function s(a, d) {
        for(var g = a.split("-");g.length;) {
          if(d(g.join("-"))) {
            return
          }
          g.pop()
        }
        d("ROOT")
      }
      function t() {
        for(--v;!v && x.length;) {
          r.apply(null, x.shift())
        }
      }
      function n(g) {
        g = y(g);
        s(g, function(c) {
          if(0 <= m.indexOf(d, c)) {
            var r = a.replace(/\./g, "/") + "_" + c;
            v++;
            e(r, function(a) {
              for(var d in a) {
                var e = a[d], r = d.match(/(.+)\/([^\/]+)$/), n;
                if(r && (n = r[2], r = r[1] + "/", e._localized)) {
                  var p;
                  if("ROOT" === c) {
                    var h = p = e._localized;
                    delete e._localized;
                    h.root = e;
                    q[k.toAbsMid(d)] = h
                  }else {
                    p = e._localized, q[k.toAbsMid(r + n + "/" + c)] = e
                  }
                  c !== g && function(a, d, e, c) {
                    var r = [], n = [];
                    s(g, function(g) {
                      c[g] && (r.push(k.toAbsMid(a + g + "/" + d)), n.push(k.toAbsMid(a + d + "/" + g)))
                    });
                    r.length ? (v++, b(r, function() {
                      for(var b = r.length - 1;0 <= b;b--) {
                        e = f.mixin(f.clone(e), arguments[b]), q[n[b]] = e
                      }
                      q[k.toAbsMid(a + d + "/" + g)] = f.clone(e);
                      t()
                    })) : q[k.toAbsMid(a + d + "/" + g)] = e
                  }(r, n, e, p)
                }
              }
              t()
            });
            return!0
          }
          return!1
        })
      }
      b = b || k;
      n();
      m.forEach(c.config.extraLocale, n)
    }, G = function() {
    }, C = {}, G = function(a) {
      for(var d, g = a.split("/"), b = c.global[g[0]], e = 1;b && e < g.length - 1;b = b[g[e++]]) {
      }
      b && ((d = b[g[e]]) || (d = b[g[e].replace(/-/g, "_")]), d && (q[a] = d));
      return d
    };
    h.getLocalization = function(a, d, g) {
      var b;
      a = t(a, d, g);
      r(a, k, function(a) {
        b = a
      });
      return b
    };
    l("dojo-unit-tests") && s.push(function(a) {
      a.register("tests.i18n.unit", function(a) {
        var d;
        d = (void 0)("{prop:1}", G, "nonsense", C);
        a.is({prop:1}, d);
        a.is(void 0, d[1]);
        d = (void 0)("({prop:1})", G, "nonsense", C);
        a.is({prop:1}, d);
        a.is(void 0, d[1]);
        d = (void 0)("{'prop-x':1}", G, "nonsense", C);
        a.is({"prop-x":1}, d);
        a.is(void 0, d[1]);
        d = (void 0)("({'prop-x':1})", G, "nonsense", C);
        a.is({"prop-x":1}, d);
        a.is(void 0, d[1]);
        d = (void 0)("define({'prop-x':1})", G, "nonsense", C);
        a.is(C, d);
        a.is({"prop-x":1}, C.result);
        d = (void 0)("define('some/module', {'prop-x':1})", G, "nonsense", C);
        a.is(C, d);
        a.is({"prop-x":1}, C.result);
        d = (void 0)("this is total nonsense and should throw an error", G, "nonsense", C);
        a.is(d instanceof Error, !0)
      })
    });
    return f.mixin(h, {dynamic:!0, normalize:function(a, d) {
      return/^\./.test(a) ? d(a) : a
    }, load:r, cache:q, getL10nName:n})
  })
}, "dojo/_base/xhr":function() {
  define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p) {
    c._xhrObj = u._create;
    var r = c.config;
    c.objectToQuery = m.objectToQuery;
    c.queryToObject = m.queryToObject;
    c.fieldToObject = f.fieldToObject;
    c.formToObject = f.toObject;
    c.formToQuery = f.toQuery;
    c.formToJson = f.toJson;
    c._blockAsync = !1;
    var s = c._contentHandlers = c.contentHandlers = {text:function(a) {
      return a.responseText
    }, json:function(d) {
      return a.fromJson(d.responseText || null)
    }, "json-comment-filtered":function(d) {
      d = d.responseText;
      var g = d.indexOf("/*"), b = d.lastIndexOf("*/");
      if(-1 == g || -1 == b) {
        throw Error("JSON was not comment filtered");
      }
      return a.fromJson(d.substring(g + 2, b))
    }, javascript:function(a) {
      return c.eval(a.responseText)
    }, xml:function(a) {
      var d = a.responseXML;
      d && (k("dom-qsa2.1") && !d.querySelectorAll && k("dom-parser")) && (d = (new DOMParser).parseFromString(a.responseText, "application/xml"));
      if(k("ie") && (!d || !d.documentElement)) {
        var b = function(a) {
          return"MSXML" + a + ".DOMDocument"
        }, b = ["Microsoft.XMLDOM", b(6), b(4), b(3), b(2)];
        g.some(b, function(g) {
          try {
            var b = new ActiveXObject(g);
            b.async = !1;
            b.loadXML(a.responseText);
            d = b
          }catch(e) {
            return!1
          }
          return!0
        })
      }
      return d
    }, "json-comment-optional":function(a) {
      return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? s["json-comment-filtered"](a) : s.json(a)
    }};
    c._ioSetArgs = function(a, g, e, q) {
      var s = {args:a, url:a.url}, t = null;
      if(a.form) {
        var t = b.byId(a.form), n = t.getAttributeNode("action");
        s.url = s.url || (n ? n.value : null);
        t = f.toObject(t)
      }
      n = {};
      t && d.mixin(n, t);
      a.content && d.mixin(n, a.content);
      a.preventCache && (n["dojo.preventCache"] = (new Date).valueOf());
      s.query = m.objectToQuery(n);
      s.handleAs = a.handleAs || "text";
      var p = new h(function(a) {
        a.canceled = !0;
        g && g(a);
        var d = a.ioArgs.error;
        d || (d = Error("request cancelled"), d.dojoType = "cancel", a.ioArgs.error = d);
        return d
      });
      p.addCallback(e);
      var l = a.load;
      l && d.isFunction(l) && p.addCallback(function(d) {
        return l.call(a, d, s)
      });
      var u = a.error;
      u && d.isFunction(u) && p.addErrback(function(d) {
        return u.call(a, d, s)
      });
      var k = a.handle;
      k && d.isFunction(k) && p.addBoth(function(d) {
        return k.call(a, d, s)
      });
      p.addErrback(function(a) {
        return q(a, p)
      });
      r.ioPublish && (c.publish && !1 !== s.args.ioPublish) && (p.addCallbacks(function(a) {
        c.publish("/dojo/io/load", [p, a]);
        return a
      }, function(a) {
        c.publish("/dojo/io/error", [p, a]);
        return a
      }), p.addBoth(function(a) {
        c.publish("/dojo/io/done", [p, a]);
        return a
      }));
      p.ioArgs = s;
      return p
    };
    var y = function(a) {
      a = s[a.ioArgs.handleAs](a.ioArgs.xhr);
      return void 0 === a ? null : a
    }, v = function(a, d) {
      d.ioArgs.args.failOk || console.error(a);
      return a
    }, x = function(a) {
      0 >= w && (w = 0, r.ioPublish && (c.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish)) && c.publish("/dojo/io/stop"))
    }, w = 0;
    t.after(n, "_onAction", function() {
      w -= 1
    });
    t.after(n, "_onInFlight", x);
    c._ioCancelAll = n.cancelAll;
    c._ioNotifyStart = function(a) {
      r.ioPublish && (c.publish && !1 !== a.ioArgs.args.ioPublish) && (w || c.publish("/dojo/io/start"), w += 1, c.publish("/dojo/io/send", [a]))
    };
    c._ioWatch = function(a, g, b, e) {
      a.ioArgs.options = a.ioArgs.args;
      d.mixin(a, {response:a.ioArgs, isValid:function(d) {
        return g(a)
      }, isReady:function(d) {
        return b(a)
      }, handleResponse:function(d) {
        return e(a)
      }});
      n(a);
      x(a)
    };
    c._ioAddQueryToUrl = function(a) {
      a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null)
    };
    c.xhr = function(a, d, g) {
      var b, e = c._ioSetArgs(d, function(a) {
        b && b.cancel()
      }, y, v), f = e.ioArgs;
      "postData" in d ? f.query = d.postData : "putData" in d ? f.query = d.putData : "rawBody" in d ? f.query = d.rawBody : (2 < arguments.length && !g || -1 === "POST|PUT".indexOf(a.toUpperCase())) && c._ioAddQueryToUrl(f);
      var q = {method:a, handleAs:"text", timeout:d.timeout, withCredentials:d.withCredentials, ioArgs:f};
      "undefined" !== typeof d.headers && (q.headers = d.headers);
      "undefined" !== typeof d.contentType && (q.headers || (q.headers = {}), q.headers["Content-Type"] = d.contentType);
      "undefined" !== typeof f.query && (q.data = f.query);
      "undefined" !== typeof d.sync && (q.sync = d.sync);
      c._ioNotifyStart(e);
      try {
        b = u(f.url, q, !0)
      }catch(s) {
        return e.cancel(), e
      }
      e.ioArgs.xhr = b.response.xhr;
      b.then(function() {
        e.resolve(e)
      }).otherwise(function(a) {
        f.error = a;
        a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
        e.reject(a)
      });
      return e
    };
    c.xhrGet = function(a) {
      return c.xhr("GET", a)
    };
    c.rawXhrPost = c.xhrPost = function(a) {
      return c.xhr("POST", a, !0)
    };
    c.rawXhrPut = c.xhrPut = function(a) {
      return c.xhr("PUT", a, !0)
    };
    c.xhrDelete = function(a) {
      return c.xhr("DELETE", a)
    };
    c._isDocumentOk = function(a) {
      return p.checkStatus(a.status)
    };
    c._getText = function(a) {
      var d;
      c.xhrGet({url:a, sync:!0, load:function(a) {
        d = a
      }});
      return d
    };
    d.mixin(c.xhr, {_xhrObj:c._xhrObj, fieldToObject:f.fieldToObject, formToObject:f.toObject, objectToQuery:m.objectToQuery, formToQuery:f.toQuery, formToJson:f.toJson, queryToObject:m.queryToObject, contentHandlers:s, _ioSetArgs:c._ioSetArgs, _ioCancelAll:c._ioCancelAll, _ioNotifyStart:c._ioNotifyStart, _ioWatch:c._ioWatch, _ioAddQueryToUrl:c._ioAddQueryToUrl, _isDocumentOk:c._isDocumentOk, _getText:c._getText, get:c.xhrGet, post:c.xhrPost, put:c.xhrPut, del:c.xhrDelete});
    return c.xhr
  })
}, "dojo/io-query":function() {
  define(["./_base/lang"], function(c) {
    var k = {};
    return{objectToQuery:function(l) {
      var m = encodeURIComponent, b = [], f;
      for(f in l) {
        var h = l[f];
        if(h != k[f]) {
          var e = m(f) + "\x3d";
          if(c.isArray(h)) {
            for(var a = 0, d = h.length;a < d;++a) {
              b.push(e + m(h[a]))
            }
          }else {
            b.push(e + m(h))
          }
        }
      }
      return b.join("\x26")
    }, queryToObject:function(l) {
      var m = decodeURIComponent;
      l = l.split("\x26");
      for(var b = {}, f, h, e = 0, a = l.length;e < a;++e) {
        if(h = l[e], h.length) {
          var d = h.indexOf("\x3d");
          0 > d ? (f = m(h), h = "") : (f = m(h.slice(0, d)), h = m(h.slice(d + 1)));
          "string" == typeof b[f] && (b[f] = [b[f]]);
          c.isArray(b[f]) ? b[f].push(h) : b[f] = h
        }
      }
      return b
    }}
  })
}, "dojo/dom-form":function() {
  define(["./_base/lang", "./dom", "./io-query", "./json"], function(c, k, l, m) {
    var b = {fieldToObject:function(b) {
      var c = null;
      if(b = k.byId(b)) {
        var e = b.name, a = (b.type || "").toLowerCase();
        if(e && a && !b.disabled) {
          if("radio" == a || "checkbox" == a) {
            b.checked && (c = b.value)
          }else {
            if(b.multiple) {
              c = [];
              for(b = [b.firstChild];b.length;) {
                for(e = b.pop();e;e = e.nextSibling) {
                  if(1 == e.nodeType && "option" == e.tagName.toLowerCase()) {
                    e.selected && c.push(e.value)
                  }else {
                    e.nextSibling && b.push(e.nextSibling);
                    e.firstChild && b.push(e.firstChild);
                    break
                  }
                }
              }
            }else {
              c = b.value
            }
          }
        }
      }
      return c
    }, toObject:function(f) {
      var h = {};
      f = k.byId(f).elements;
      for(var e = 0, a = f.length;e < a;++e) {
        var d = f[e], g = d.name, q = (d.type || "").toLowerCase();
        if(g && q && 0 > "file|submit|image|reset|button".indexOf(q) && !d.disabled) {
          var t = h, n = g, d = b.fieldToObject(d);
          if(null !== d) {
            var l = t[n];
            "string" == typeof l ? t[n] = [l, d] : c.isArray(l) ? l.push(d) : t[n] = d
          }
          "image" == q && (h[g + ".x"] = h[g + ".y"] = h[g].x = h[g].y = 0)
        }
      }
      return h
    }, toQuery:function(f) {
      return l.objectToQuery(b.toObject(f))
    }, toJson:function(f, c) {
      return m.stringify(b.toObject(f), null, c ? 4 : 0)
    }};
    return b
  })
}, "dojo/json":function() {
  define(["./has"], function(c) {
    var k = "undefined" != typeof JSON;
    c.add("json-parse", k);
    c.add("json-stringify", k && '{"a":1}' == JSON.stringify({a:0}, function(c, b) {
      return b || 1
    }));
    if(c("json-stringify")) {
      return JSON
    }
    var l = function(c) {
      return('"' + c.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
    };
    return{parse:c("json-parse") ? JSON.parse : function(c, b) {
      if(b && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(c)) {
        throw new SyntaxError("Invalid characters in JSON");
      }
      return eval("(" + c + ")")
    }, stringify:function(c, b, f) {
      function h(a, d, g) {
        b && (a = b(g, a));
        var q;
        q = typeof a;
        if("number" == q) {
          return isFinite(a) ? a + "" : "null"
        }
        if("boolean" == q) {
          return a + ""
        }
        if(null === a) {
          return"null"
        }
        if("string" == typeof a) {
          return l(a)
        }
        if("function" == q || "undefined" == q) {
          return e
        }
        if("function" == typeof a.toJSON) {
          return h(a.toJSON(g), d, g)
        }
        if(a instanceof Date) {
          return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(d, g, b) {
            d = a["getUTC" + g]() + (b ? 1 : 0);
            return 10 > d ? "0" + d : d
          })
        }
        if(a.valueOf() !== a) {
          return h(a.valueOf(), d, g)
        }
        var c = f ? d + f : "", n = f ? " " : "", m = f ? "\n" : "";
        if(a instanceof Array) {
          var n = a.length, p = [];
          for(g = 0;g < n;g++) {
            q = h(a[g], c, g), "string" != typeof q && (q = "null"), p.push(m + c + q)
          }
          return"[" + p.join(",") + m + d + "]"
        }
        p = [];
        for(g in a) {
          var r;
          if(a.hasOwnProperty(g)) {
            if("number" == typeof g) {
              r = '"' + g + '"'
            }else {
              if("string" == typeof g) {
                r = l(g)
              }else {
                continue
              }
            }
            q = h(a[g], c, g);
            "string" == typeof q && p.push(m + c + r + ":" + n + q)
          }
        }
        return"{" + p.join(",") + m + d + "}"
      }
      var e;
      "string" == typeof b && (f = b, b = null);
      return h(c, "", "")
    }}
  })
}, "dojo/_base/Deferred":function() {
  define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(c, k, l, m, b, f, h) {
    var e = function() {
    }, a = Object.freeze || function() {
    }, d = c.Deferred = function(g) {
      function c(a) {
        if(h) {
          throw Error("This deferred has already been resolved");
        }
        n = a;
        h = !0;
        t()
      }
      function t() {
        for(var a;!a && v;) {
          var d = v;
          v = v.next;
          if(a = d.progress == e) {
            h = !1
          }
          var g = s ? d.error : d.resolved;
          b("config-useDeferredInstrumentation") && s && k.instrumentRejected && k.instrumentRejected(n, !!g);
          if(g) {
            try {
              var c = g(n);
              c && "function" === typeof c.then ? c.then(f.hitch(d.deferred, "resolve"), f.hitch(d.deferred, "reject"), f.hitch(d.deferred, "progress")) : (g = a && void 0 === c, a && !g && (s = c instanceof Error), d.deferred[g && s ? "reject" : "resolve"](g ? n : c))
            }catch(q) {
              d.deferred.reject(q)
            }
          }else {
            s ? d.deferred.reject(n) : d.deferred.resolve(n)
          }
        }
      }
      var n, h, p, r, s, y, v, x = this.promise = new l;
      this.isResolved = x.isResolved = function() {
        return 0 == r
      };
      this.isRejected = x.isRejected = function() {
        return 1 == r
      };
      this.isFulfilled = x.isFulfilled = function() {
        return 0 <= r
      };
      this.isCanceled = x.isCanceled = function() {
        return p
      };
      this.resolve = this.callback = function(a) {
        this.fired = r = 0;
        this.results = [a, null];
        c(a)
      };
      this.reject = this.errback = function(a) {
        s = !0;
        this.fired = r = 1;
        b("config-useDeferredInstrumentation") && k.instrumentRejected && k.instrumentRejected(a, !!v);
        c(a);
        this.results = [null, a]
      };
      this.progress = function(a) {
        for(var d = v;d;) {
          var g = d.progress;
          g && g(a);
          d = d.next
        }
      };
      this.addCallbacks = function(a, d) {
        this.then(a, d, e);
        return this
      };
      x.then = this.then = function(a, g, b) {
        var c = b == e ? this : new d(x.cancel);
        a = {resolved:a, error:g, progress:b, deferred:c};
        v ? y = y.next = a : v = y = a;
        h && t();
        return c.promise
      };
      var w = this;
      x.cancel = this.cancel = function() {
        if(!h) {
          var a = g && g(w);
          h || (a instanceof Error || (a = new m(a)), a.log = !1, w.reject(a))
        }
        p = !0
      };
      a(x)
    };
    f.extend(d, {addCallback:function(a) {
      return this.addCallbacks(f.hitch.apply(c, arguments))
    }, addErrback:function(a) {
      return this.addCallbacks(null, f.hitch.apply(c, arguments))
    }, addBoth:function(a) {
      var d = f.hitch.apply(c, arguments);
      return this.addCallbacks(d, d)
    }, fired:-1});
    d.when = c.when = h;
    return d
  })
}, "dojo/_base/json":function() {
  define(["./kernel", "../json"], function(c, k) {
    c.fromJson = function(c) {
      return eval("(" + c + ")")
    };
    c._escapeString = k.stringify;
    c.toJsonIndentStr = "\t";
    c.toJson = function(l, m) {
      return k.stringify(l, function(b, c) {
        if(c) {
          var h = c.__json__ || c.json;
          if("function" == typeof h) {
            return h.call(c)
          }
        }
        return c
      }, m && c.toJsonIndentStr)
    };
    return c
  })
}, "dojo/request/watch":function() {
  define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(c, k, l, m, b, f) {
    function h() {
      for(var g = +new Date, b = 0, c;b < d.length && (c = d[b]);b++) {
        var f = c.response, h = f.options;
        if(c.isCanceled && c.isCanceled() || c.isValid && !c.isValid(f)) {
          d.splice(b--, 1), e._onAction && e._onAction()
        }else {
          if(c.isReady && c.isReady(f)) {
            d.splice(b--, 1), c.handleResponse(f), e._onAction && e._onAction()
          }else {
            if(c.startTime && c.startTime + (h.timeout || 0) < g) {
              d.splice(b--, 1), c.cancel(new k("Timeout exceeded", f)), e._onAction && e._onAction()
            }
          }
        }
      }
      e._onInFlight && e._onInFlight(c);
      d.length || (clearInterval(a), a = null)
    }
    function e(g) {
      g.response.options.timeout && (g.startTime = +new Date);
      g.isFulfilled() || (d.push(g), a || (a = setInterval(h, 50)), g.response.options.sync && h())
    }
    var a = null, d = [];
    e.cancelAll = function() {
      try {
        m.forEach(d, function(a) {
          try {
            a.cancel(new l("All requests canceled."))
          }catch(d) {
          }
        })
      }catch(a) {
      }
    };
    b && (f && b.doc.attachEvent) && f(b.global, "unload", function() {
      e.cancelAll()
    });
    return e
  })
}, "dojo/request/util":function() {
  define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(c, k, l, m, b, f, h, e) {
    function a(a) {
      return g(a)
    }
    function d(a) {
      return void 0 !== a.data ? a.data : a.text
    }
    c.deepCopy = function(a, d) {
      for(var b in d) {
        var g = a[b], e = d[b];
        g !== e && (g && "object" === typeof g && e && "object" === typeof e ? c.deepCopy(g, e) : a[b] = e)
      }
      return a
    };
    c.deepCreate = function(a, d) {
      d = d || {};
      var g = h.delegate(a), b, e;
      for(b in a) {
        (e = a[b]) && "object" === typeof e && (g[b] = c.deepCreate(e, d[b]))
      }
      return c.deepCopy(g, d)
    };
    var g = Object.freeze || function(a) {
      return a
    };
    c.deferred = function(b, f, n, u, p, r) {
      var s = new m(function(a) {
        f && f(s, b);
        return!a || !(a instanceof k) && !(a instanceof l) ? new l("Request canceled", b) : a
      });
      s.response = b;
      s.isValid = n;
      s.isReady = u;
      s.handleResponse = p;
      n = s.then(a).otherwise(function(a) {
        a.response = b;
        throw a;
      });
      c.notify && n.then(h.hitch(c.notify, "emit", "load"), h.hitch(c.notify, "emit", "error"));
      u = n.then(d);
      p = new e;
      for(var y in u) {
        u.hasOwnProperty(y) && (p[y] = u[y])
      }
      p.response = n;
      g(p);
      r && s.then(function(a) {
        r.call(s, a)
      }, function(a) {
        r.call(s, b, a)
      });
      s.promise = p;
      s.then = p.then;
      return s
    };
    c.addCommonMethods = function(a, d) {
      f.forEach(d || ["GET", "POST", "PUT", "DELETE"], function(d) {
        a[("DELETE" === d ? "DEL" : d).toLowerCase()] = function(b, g) {
          g = h.delegate(g || {});
          g.method = d;
          return a(b, g)
        }
      })
    };
    c.parseArgs = function(a, d, g) {
      var e = d.data, c = d.query;
      e && !g && "object" === typeof e && (d.data = b.objectToQuery(e));
      c ? ("object" === typeof c && (c = b.objectToQuery(c)), d.preventCache && (c += (c ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : d.preventCache && (c = "request.preventCache\x3d" + +new Date);
      a && c && (a += (~a.indexOf("?") ? "\x26" : "?") + c);
      return{url:a, options:d, getHeader:function(a) {
        return null
      }}
    };
    c.checkStatus = function(a) {
      a = a || 0;
      return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
    }
  })
}, "dojo/errors/RequestError":function() {
  define(["./create"], function(c) {
    return c("RequestError", function(c, l) {
      this.response = l
    })
  })
}, "dojo/errors/RequestTimeoutError":function() {
  define(["./create", "./RequestError"], function(c, k) {
    return c("RequestTimeoutError", null, k, {dojoType:"timeout"})
  })
}, "dojo/request/xhr":function() {
  define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(c, k, l, m, b) {
    function f(a, d) {
      var b = a.xhr;
      a.status = a.xhr.status;
      try {
        a.text = b.responseText
      }catch(g) {
      }
      "xml" === a.options.handleAs && (a.data = b.responseXML);
      if(!d) {
        try {
          l(a)
        }catch(e) {
          d = e
        }
      }
      d ? this.reject(d) : m.checkStatus(b.status) ? this.resolve(a) : (d = new c("Unable to load " + a.url + " status: " + b.status, a), this.reject(d))
    }
    function h(a) {
      return this.xhr.getResponseHeader(a)
    }
    function e(s, r, p) {
      var l = b("native-formdata") && r && r.data && r.data instanceof FormData, w = m.parseArgs(s, m.deepCreate(u, r), l);
      s = w.url;
      r = w.options;
      var G, C = m.deferred(w, t, d, g, f, function() {
        G && G()
      }), D = w.xhr = e._create();
      if(!D) {
        return C.cancel(new c("XHR was not created")), p ? C : C.promise
      }
      w.getHeader = h;
      q && (G = q(D, C, w));
      var I = "undefined" === typeof r.data ? null : r.data, L = !r.sync, N = r.method;
      try {
        D.open(N, s, L, r.user || n, r.password || n);
        r.withCredentials && (D.withCredentials = r.withCredentials);
        b("native-response-type") && r.handleAs in a && (D.responseType = a[r.handleAs]);
        var H = r.headers;
        s = l ? !1 : "application/x-www-form-urlencoded";
        if(H) {
          for(var O in H) {
            "content-type" === O.toLowerCase() ? s = H[O] : H[O] && D.setRequestHeader(O, H[O])
          }
        }
        s && !1 !== s && D.setRequestHeader("Content-Type", s);
        (!H || !("X-Requested-With" in H)) && D.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        m.notify && m.notify.emit("send", w, C.promise.cancel);
        D.send(I)
      }catch(V) {
        C.reject(V)
      }
      k(C);
      D = null;
      return p ? C : C.promise
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
        var d = a.responseType;
        a.abort();
        return"blob" === d
      }
    });
    var a = {blob:b("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, d, g, q, t;
    b("native-xhr2") ? (d = function(a) {
      return!this.isFulfilled()
    }, t = function(a, d) {
      d.xhr.abort()
    }, q = function(a, d, b) {
      function g(a) {
        d.handleResponse(b)
      }
      function e(a) {
        a = new c("Unable to load " + b.url + " status: " + a.target.status, b);
        d.handleResponse(b, a)
      }
      function f(a) {
        a.lengthComputable ? (b.loaded = a.loaded, b.total = a.total, d.progress(b)) : 3 === b.xhr.readyState && (b.loaded = "loaded" in a ? a.loaded : a.position, d.progress(b))
      }
      a.addEventListener("load", g, !1);
      a.addEventListener("error", e, !1);
      a.addEventListener("progress", f, !1);
      return function() {
        a.removeEventListener("load", g, !1);
        a.removeEventListener("error", e, !1);
        a.removeEventListener("progress", f, !1);
        a = null
      }
    }) : (d = function(a) {
      return a.xhr.readyState
    }, g = function(a) {
      return 4 === a.xhr.readyState
    }, t = function(a, d) {
      var b = d.xhr, g = typeof b.abort;
      ("function" === g || "object" === g || "unknown" === g) && b.abort()
    });
    var n, u = {data:null, query:null, sync:!1, method:"GET"};
    e._create = function() {
      throw Error("XMLHTTP not available");
    };
    if(b("native-xhr") && !b("dojo-force-activex-xhr")) {
      e._create = function() {
        return new XMLHttpRequest
      }
    }else {
      if(b("activex")) {
        try {
          new ActiveXObject("Msxml2.XMLHTTP"), e._create = function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
          }
        }catch(p) {
          try {
            new ActiveXObject("Microsoft.XMLHTTP"), e._create = function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
            }
          }catch(r) {
          }
        }
      }
    }
    m.addCommonMethods(e);
    return e
  })
}, "dojo/request/handlers":function() {
  define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(c, k, l, m) {
    function b(a) {
      var b = d[a.options.handleAs];
      a.data = b ? b(a) : a.data || a.text;
      return a
    }
    m.add("activex", "undefined" !== typeof ActiveXObject);
    m.add("dom-parser", function(a) {
      return"DOMParser" in a
    });
    var f;
    if(m("activex")) {
      var h = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], e;
      f = function(a) {
        function d(a) {
          try {
            var g = new ActiveXObject(a);
            g.async = !1;
            g.loadXML(c);
            b = g;
            e = a
          }catch(f) {
            return!1
          }
          return!0
        }
        var b = a.data, c = a.text;
        b && (m("dom-qsa2.1") && !b.querySelectorAll && m("dom-parser")) && (b = (new DOMParser).parseFromString(c, "application/xml"));
        if(!b || !b.documentElement) {
          (!e || !d(e)) && l.some(h, d)
        }
        return b
      }
    }
    var a = function(a) {
      return!m("native-xhr2-blob") && "blob" === a.options.handleAs && "undefined" !== typeof Blob ? new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")}) : a.xhr.response
    }, d = {javascript:function(a) {
      return k.eval(a.text || "")
    }, json:function(a) {
      return c.parse(a.text || null)
    }, xml:f, blob:a, arraybuffer:a, document:a};
    b.register = function(a, b) {
      d[a] = b
    };
    return b
  })
}, "dojo/regexp":function() {
  define(["./_base/kernel", "./_base/lang"], function(c, k) {
    var l = {};
    k.setObject("dojo.regexp", l);
    l.escapeString = function(c, b) {
      return c.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g, function(c) {
        return b && -1 != b.indexOf(c) ? c : "\\" + c
      })
    };
    l.buildGroupRE = function(c, b, f) {
      if(!(c instanceof Array)) {
        return b(c)
      }
      for(var h = [], e = 0;e < c.length;e++) {
        h.push(b(c[e]))
      }
      return l.group(h.join("|"), f)
    };
    l.group = function(c, b) {
      return"(" + (b ? "?:" : "") + c + ")"
    };
    return l
  })
}, "dijit/CalendarLite":function() {
  define("dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u) {
    var p = k("dijit.CalendarLite", [t, n], {templateString:u, dowTemplateString:'\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader" scope\x3d"col"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e${d}\x3c/span\x3e\x3c/th\x3e', dateTemplateString:'\x3ctd class\x3d"dijitReset" role\x3d"gridcell" data-dojo-attach-point\x3d"dateCells"\x3e\x3cspan class\x3d"dijitCalendarDateLabel" data-dojo-attach-point\x3d"dateLabels"\x3e\x3c/span\x3e\x3c/td\x3e', weekTemplateString:'\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e${d}${d}${d}${d}${d}${d}${d}\x3c/tr\x3e', 
    value:new Date(""), datePackage:"", dayWidth:"narrow", tabIndex:"0", currentFocus:new Date, _setSummaryAttr:"gridNode", baseClass:"dijitCalendar dijitCalendarLite", _isValidDate:function(a) {
      return a && !isNaN(a) && "object" == typeof a && a.toString() != this.constructor.prototype.value.toString()
    }, _getValueAttr:function() {
      var a = this._get("value");
      if(a && !isNaN(a)) {
        var d = new this.dateClassObj(a);
        d.setHours(0, 0, 0, 0);
        d.getDate() < a.getDate() && (d = this.dateModule.add(d, "hour", 1));
        return d
      }
      return null
    }, _setValueAttr:function(a, d) {
      "string" == typeof a && (a = f.fromISOString(a));
      a = this._patchDate(a);
      if(this._isValidDate(a) && !this.isDisabledDate(a, this.lang)) {
        if(this._set("value", a), this.set("currentFocus", a), this._markSelectedDates([a]), this._created && (d || "undefined" == typeof d)) {
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
    }, _setText:function(a, d) {
      for(;a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      a.appendChild(a.ownerDocument.createTextNode(d))
    }, _populateGrid:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      var a = this._patchDate(a), d = a.getDay(), b = this.dateModule.getDaysInMonth(a), g = this.dateModule.getDaysInMonth(this.dateModule.add(a, "month", -1)), e = new this.dateClassObj, f = l.getFirstDayOfWeek(this.lang);
      f > d && (f -= 7);
      if(!this.summary) {
        var q = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
        this.gridNode.setAttribute("summary", q[a.getMonth()])
      }
      this._date2cell = {};
      c.forEach(this.dateCells, function(c, q) {
        var n = q + f, t = new this.dateClassObj(a), h = "dijitCalendar", p = 0;
        n < d ? (n = g - d + n + 1, p = -1, h += "Previous") : n >= d + b ? (n = n - d - b + 1, p = 1, h += "Next") : (n = n - d + 1, h += "Current");
        p && (t = this.dateModule.add(t, "month", p));
        t.setDate(n);
        this.dateModule.compare(t, e, "date") || (h = "dijitCalendarCurrentDate " + h);
        this.isDisabledDate(t, this.lang) ? (h = "dijitCalendarDisabledDate " + h, c.setAttribute("aria-disabled", "true")) : (h = "dijitCalendarEnabledDate " + h, c.removeAttribute("aria-disabled"), c.setAttribute("aria-selected", "false"));
        (p = this.getClassForDate(t, this.lang)) && (h = p + " " + h);
        c.className = h + "Month dijitCalendarDateTemplate";
        h = t.valueOf();
        this._date2cell[h] = c;
        c.dijitDateValue = h;
        this._setText(this.dateLabels[q], t.getDateLocalized ? t.getDateLocalized(this.lang) : t.getDate())
      }, this)
    }, _populateControls:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      this.monthWidget.set("month", a);
      var d = a.getFullYear() - 1, b = new this.dateClassObj;
      c.forEach(["previous", "current", "next"], function(a) {
        b.setFullYear(d++);
        this._setText(this[a + "YearLabelNode"], this.dateLocaleModule.format(b, {selector:"year", locale:this.lang}))
      }, this)
    }, goToToday:function() {
      this.set("value", new this.dateClassObj)
    }, constructor:function(d) {
      this.dateModule = d.datePackage ? a.getObject(d.datePackage, !1) : m;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateLocaleModule = d.datePackage ? a.getObject(d.datePackage + ".locale", !1) : b
    }, _createMonthWidget:function() {
      return p._MonthWidget({id:this.id + "_mddb", lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, buildRendering:function() {
      var a = this.dowTemplateString, d = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang), b = l.getFirstDayOfWeek(this.lang);
      this.dayCellsHtml = q.substitute([a, a, a, a, a, a, a].join(""), {d:""}, function() {
        return d[b++ % 7]
      });
      a = q.substitute(this.weekTemplateString, {d:this.dateTemplateString});
      this.dateRowsHtml = [a, a, a, a, a, a].join("");
      this.dateCells = [];
      this.dateLabels = [];
      this.inherited(arguments);
      h.setSelectable(this.domNode, !1);
      a = new this.dateClassObj(this.currentFocus);
      this.monthWidget = this._createMonthWidget();
      this.set("currentFocus", a, !1)
    }, postCreate:function() {
      this.inherited(arguments);
      this._connectControls()
    }, _connectControls:function() {
      var b = a.hitch(this, function(b, g, e) {
        this[b].dojoClick = !0;
        return d(this[b], "click", a.hitch(this, function() {
          this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus, g, e))
        }))
      });
      this.own(b("incrementMonth", "month", 1), b("decrementMonth", "month", -1), b("nextYearLabelNode", "year", 1), b("previousYearLabelNode", "year", -1))
    }, _setCurrentFocusAttr:function(a, d) {
      var b = this.currentFocus, e = this._getNodeByDate(b);
      a = this._patchDate(a);
      this._set("currentFocus", a);
      if(!this._date2cell || 0 != this.dateModule.difference(b, a, "month")) {
        this._populateGrid(), this._populateControls(), this._markSelectedDates([this.value])
      }
      b = this._getNodeByDate(a);
      b.setAttribute("tabIndex", this.tabIndex);
      (this.focused || d) && b.focus();
      e && e != b && (g("webkit") ? e.setAttribute("tabIndex", "-1") : e.removeAttribute("tabIndex"))
    }, focus:function() {
      this._setCurrentFocusAttr(this.currentFocus, !0)
    }, _onDayClick:function(a) {
      a.stopPropagation();
      a.preventDefault();
      for(a = a.target;a && !a.dijitDateValue && 0 !== a.dijitDateValue;a = a.parentNode) {
      }
      a && !e.contains(a, "dijitCalendarDisabledDate") && this.set("value", a.dijitDateValue)
    }, _getNodeByDate:function(a) {
      return(a = this._patchDate(a)) && this._date2cell ? this._date2cell[a.valueOf()] : null
    }, _markSelectedDates:function(d) {
      function b(a, d) {
        e.toggle(d, "dijitCalendarSelectedDate", a);
        d.setAttribute("aria-selected", a ? "true" : "false")
      }
      c.forEach(this._selectedCells || [], a.partial(b, !1));
      this._selectedCells = c.filter(c.map(d, this._getNodeByDate, this), function(a) {
        return a
      });
      c.forEach(this._selectedCells, a.partial(b, !0))
    }, onChange:function() {
    }, isDisabledDate:function() {
    }, getClassForDate:function() {
    }});
    p._MonthWidget = k("dijit.CalendarLite._MonthWidget", t, {_setMonthAttr:function(a) {
      var d = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a), b = 6 == g("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + c.map(d, function(a) {
        return"\x3cdiv\x3e" + a + "\x3c/div\x3e"
      }).join("") + "\x3c/div\x3e";
      this.domNode.innerHTML = b + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + d[a.getMonth()] + "\x3c/div\x3e"
    }});
    return p
  })
}, "dijit/_CssStateMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q) {
    k = k("dijit._CssStateMixin", [], {hovering:!1, active:!1, _applyAttributes:function() {
      this.inherited(arguments);
      c.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "), function(a) {
        this.watch(a, f.hitch(this, "_setStateClass"))
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
        d = d.concat(c.map(d, function(a) {
          return a + b
        }), "dijit" + b)
      }
      var d = this.baseClass.split(" ");
      this.isLeftToRight() || a("Rtl");
      var b = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
      this.checked && a(b);
      this.state && a(this.state);
      this.selected && a("Selected");
      this._opened && a("Opened");
      this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
      this.focused && a("Focused");
      var b = this.stateNode || this.domNode, g = {};
      c.forEach(b.className.split(" "), function(a) {
        g[a] = !0
      });
      "_stateClasses" in this && c.forEach(this._stateClasses, function(a) {
        delete g[a]
      });
      c.forEach(d, function(a) {
        g[a] = !0
      });
      var e = [], f;
      for(f in g) {
        e.push(f)
      }
      b.className = e.join(" ");
      this._stateClasses = d
    }, _subnodeCssMouseEvent:function(a, d, b) {
      function g(b) {
        m.toggle(a, d + "Active", b)
      }
      if(!this.disabled && !this.readOnly) {
        switch(b.type) {
          case "mouseover":
          ;
          case "MSPointerOver":
          ;
          case "pointerover":
            m.toggle(a, d + "Hover", !0);
            break;
          case "mouseout":
          ;
          case "MSPointerOut":
          ;
          case "pointerout":
            m.toggle(a, d + "Hover", !1);
            g(!1);
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
            g(!0);
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
            g(!1);
            break;
          case "focus":
          ;
          case "focusin":
            m.toggle(a, d + "Focused", !0);
            break;
          case "blur":
          ;
          case "focusout":
            m.toggle(a, d + "Focused", !1)
        }
      }
    }, _trackMouseState:function(a, d) {
      a._cssState = d
    }});
    e(function() {
      function b(a, d, g) {
        if(!g || !l.isDescendant(g, d)) {
          for(;d && d != g;d = d.parentNode) {
            if(d._cssState) {
              var e = q.getEnclosingWidget(d);
              e && (d == e.domNode ? e._cssMouseEvent(a) : e._subnodeCssMouseEvent(d, d._cssState, a))
            }
          }
        }
      }
      var e = d.body(), c;
      h(e, a.over, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      h(e, a.out, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      h(e, g.press, function(a) {
        c = a.target;
        b(a, c)
      });
      h(e, g.release, function(a) {
        b(a, c);
        c = null
      });
      h(e, "focusin, focusout", function(a) {
        var d = a.target;
        if(d._cssState && !d.getAttribute("widgetId")) {
          var b = q.getEnclosingWidget(d);
          b && b._subnodeCssMouseEvent(d, d._cssState, a)
        }
      })
    });
    return k
  })
}, "dijit/form/DropDownButton":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/query ../registry ../popup ./Button ../_Container ../_HasDropDown dojo/text!./templates/DropDownButton.html ../a11yclick".split(" "), function(c, k, l, m, b, f, h, e, a) {
    return c("dijit.form.DropDownButton", [f, h, e], {baseClass:"dijitDropDownButton", templateString:a, _fillContent:function() {
      if(this.srcNodeRef) {
        var a = l("*", this.srcNodeRef);
        this.inherited(arguments, [a[0]]);
        this.dropDownContainer = this.srcNodeRef
      }
    }, startup:function() {
      if(!this._started) {
        if(!this.dropDown && this.dropDownContainer) {
          var a = l("[widgetId]", this.dropDownContainer)[0];
          a && (this.dropDown = m.byNode(a));
          delete this.dropDownContainer
        }
        this.dropDown && b.hide(this.dropDown);
        this.inherited(arguments)
      }
    }, isLoaded:function() {
      var a = this.dropDown;
      return!!a && (!a.href || a.isLoaded)
    }, loadDropDown:function(a) {
      var b = this.dropDown, e = b.on("load", k.hitch(this, function() {
        e.remove();
        a()
      }));
      b.refresh()
    }, isFocusable:function() {
      return this.inherited(arguments) && !this._mouseDown
    }})
  })
}, "dijit/popup":function() {
  define("dojo/_base/array dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on ./place ./BackgroundIframe ./Viewport ./main dojo/touch".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p) {
    function r() {
      this._popupWrapper && (f.destroy(this._popupWrapper), delete this._popupWrapper)
    }
    l = l(null, {_stack:[], _beginZIndex:1E3, _idGen:1, _repositionAll:function() {
      if(this._firstAroundNode) {
        var a = this._firstAroundPosition, d = h.position(this._firstAroundNode, !0), b = d.x - a.x, a = d.y - a.y;
        if(b || a) {
          this._firstAroundPosition = d;
          for(d = 0;d < this._stack.length;d++) {
            var e = this._stack[d].wrapper.style;
            e.top = parseFloat(e.top) + a + "px";
            "auto" == e.right ? e.left = parseFloat(e.left) + b + "px" : e.right = parseFloat(e.right) - b + "px"
          }
        }
        this._aroundMoveListener = setTimeout(g.hitch(this, "_repositionAll"), b || a ? 10 : 50)
      }
    }, _createWrapper:function(a) {
      var d = a._popupWrapper, b = a.domNode;
      d || (d = f.create("div", {"class":"dijitPopup", style:{display:"none"}, role:"region", "aria-label":a["aria-label"] || a.label || a.name || a.id}, a.ownerDocumentBody), d.appendChild(b), b = b.style, b.display = "", b.visibility = "", b.position = "", b.top = "0px", a._popupWrapper = d, k.after(a, "destroy", r, !0), "ontouchend" in document && q(d, "touchend", function(a) {
        /^(input|button|textarea)$/i.test(a.target.tagName) || a.preventDefault()
      }), d.dojoClick = !0);
      return d
    }, moveOffScreen:function(a) {
      var d = this._createWrapper(a);
      a = h.isBodyLtr(a.ownerDocument);
      var b = {visibility:"hidden", top:"-9999px", display:""};
      b[a ? "left" : "right"] = "-9999px";
      b[a ? "right" : "left"] = "auto";
      e.set(d, b);
      return d
    }, hide:function(a) {
      var d = this._createWrapper(a);
      e.set(d, {display:"none", height:"auto", overflowY:"visible", border:""});
      a = a.domNode;
      "_originalStyle" in a && (a.style.cssText = a._originalStyle)
    }, getTopPopup:function() {
      for(var a = this._stack, d = a.length - 1;0 < d && a[d].parent === a[d - 1].widget;d--) {
      }
      return a[d]
    }, open:function(c) {
      for(var f = this._stack, p = c.popup, r = p.domNode, l = c.orient || ["below", "below-alt", "above", "above-alt"], k = c.parent ? c.parent.isLeftToRight() : h.isBodyLtr(p.ownerDocument), C = c.around, D = c.around && c.around.id ? c.around.id + "_dropdown" : "popup_" + this._idGen++;f.length && (!c.parent || !m.isDescendant(c.parent.domNode, f[f.length - 1].widget.domNode));) {
        this.close(f[f.length - 1].widget)
      }
      var I = this.moveOffScreen(p);
      p.startup && !p._started && p.startup();
      var L, N = h.position(r);
      if("maxHeight" in c && -1 != c.maxHeight) {
        L = c.maxHeight || Infinity
      }else {
        L = u.getEffectiveBox(this.ownerDocument);
        var H = C ? h.position(C, !1) : {y:c.y - (c.padding || 0), h:2 * (c.padding || 0)};
        L = Math.floor(Math.max(H.y, L.h - (H.y + H.h)))
      }
      N.h > L && (N = e.getComputedStyle(r), e.set(I, {overflowY:"scroll", height:L + "px", border:N.borderLeftWidth + " " + N.borderLeftStyle + " " + N.borderLeftColor}), r._originalStyle = r.style.cssText, r.style.border = "none");
      b.set(I, {id:D, style:{zIndex:this._beginZIndex + f.length}, "class":"dijitPopup " + (p.baseClass || p["class"] || "").split(" ")[0] + "Popup", dijitPopupParent:c.parent ? c.parent.id : ""});
      0 == f.length && C && (this._firstAroundNode = C, this._firstAroundPosition = h.position(C, !0), this._aroundMoveListener = setTimeout(g.hitch(this, "_repositionAll"), 50));
      a("config-bgIframe") && !p.bgIframe && (p.bgIframe = new n(I));
      D = p.orient ? g.hitch(p, "orient") : null;
      l = C ? t.around(I, C, l, k, D) : t.at(I, c, "R" == l ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], c.padding, D);
      I.style.visibility = "visible";
      r.style.visibility = "visible";
      r = [];
      r.push(q(I, "keydown", g.hitch(this, function(a) {
        if(a.keyCode == d.ESCAPE && c.onCancel) {
          a.stopPropagation(), a.preventDefault(), c.onCancel()
        }else {
          if(a.keyCode == d.TAB && (a.stopPropagation(), a.preventDefault(), (a = this.getTopPopup()) && a.onCancel)) {
            a.onCancel()
          }
        }
      })));
      p.onCancel && c.onCancel && r.push(p.on("cancel", c.onCancel));
      r.push(p.on(p.onExecute ? "execute" : "change", g.hitch(this, function() {
        var a = this.getTopPopup();
        if(a && a.onExecute) {
          a.onExecute()
        }
      })));
      f.push({widget:p, wrapper:I, parent:c.parent, onExecute:c.onExecute, onCancel:c.onCancel, onClose:c.onClose, handlers:r});
      if(p.onOpen) {
        p.onOpen(l)
      }
      return l
    }, close:function(a) {
      for(var d = this._stack;a && c.some(d, function(d) {
        return d.widget == a
      }) || !a && d.length;) {
        var b = d.pop(), g = b.widget, e = b.onClose;
        g.bgIframe && (g.bgIframe.destroy(), delete g.bgIframe);
        if(g.onClose) {
          g.onClose()
        }
        for(var f;f = b.handlers.pop();) {
          f.remove()
        }
        g && g.domNode && this.hide(g);
        e && e()
      }
      0 == d.length && this._aroundMoveListener && (clearTimeout(this._aroundMoveListener), this._firstAroundNode = this._firstAroundPosition = this._aroundMoveListener = null)
    }});
    return p.popup = new l
  })
}, "dijit/form/Button":function() {
  define("require dojo/_base/declare dojo/dom-class dojo/has dojo/_base/kernel dojo/_base/lang dojo/ready ./_FormWidget ./_ButtonMixin dojo/text!./templates/Button.html ../a11yclick".split(" "), function(c, k, l, m, b, f, h, e, a, d) {
    m("dijit-legacy-requires") && h(0, function() {
      c(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
    });
    h = k("dijit.form.Button" + (m("dojo-bidi") ? "_NoBidi" : ""), [e, a], {showLabel:!0, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, baseClass:"dijitButton", templateString:d, _setValueAttr:"valueNode", _setNameAttr:function(a) {
      this.valueNode && this.valueNode.setAttribute("name", a)
    }, _fillContent:function(a) {
      if(a && (!this.params || !("label" in this.params))) {
        if(a = f.trim(a.innerHTML)) {
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
      !this.showLabel && !("title" in this.params) && (this.titleNode.title = f.trim(this.containerNode.innerText || this.containerNode.textContent || ""))
    }});
    m("dojo-bidi") && (h = k("dijit.form.Button", h, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      this.titleNode.title && this.applyTextDir(this.titleNode, this.titleNode.title)
    }, _setTextDirAttr:function(a) {
      this._created && this.textDir != a && (this._set("textDir", a), this._setLabelAttr(this.label))
    }}));
    return h
  })
}, "dijit/form/_FormWidget":function() {
  define("dojo/_base/declare dojo/sniff dojo/_base/kernel dojo/ready ../_Widget ../_CssStateMixin ../_TemplatedMixin ./_FormWidgetMixin".split(" "), function(c, k, l, m, b, f, h, e) {
    k("dijit-legacy-requires") && m(0, function() {
      require(["dijit/form/_FormValueWidget"])
    });
    return c("dijit.form._FormWidget", [b, h, f, e], {setDisabled:function(a) {
      l.deprecated("setDisabled(" + a + ") is deprecated. Use set('disabled'," + a + ") instead.", "", "2.0");
      this.set("disabled", a)
    }, setValue:function(a) {
      l.deprecated("dijit.form._FormWidget:setValue(" + a + ") is deprecated.  Use set('value'," + a + ") instead.", "", "2.0");
      this.set("value", a)
    }, getValue:function() {
      l.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, postMixInProperties:function() {
      this.nameAttrSetting = this.name && !k("msapp") ? 'name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "";
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_FormWidgetMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff dojo/window ../a11y".split(" "), function(c, k, l, m, b, f, h, e, a, d) {
    return k("dijit.form._FormWidgetMixin", null, {name:"", alt:"", value:"", type:"text", "aria-label":"focusNode", tabIndex:"0", _setTabIndexAttr:"focusNode", disabled:!1, intermediateChanges:!1, scrollOnFocus:!0, _setIdAttr:"focusNode", _setDisabledAttr:function(a) {
      this._set("disabled", a);
      /^(button|input|select|textarea|optgroup|option|fieldset)$/i.test(this.focusNode.tagName) ? (l.set(this.focusNode, "disabled", a), e("trident") && "readOnly" in this && l.set(this.focusNode, "readonly", a || this.readOnly)) : this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
      this.valueNode && l.set(this.valueNode, "disabled", a);
      a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "_setTabIndexAttr" in this ? this._setTabIndexAttr : "focusNode", c.forEach(b.isArray(a) ? a : [a], function(a) {
        a = this[a];
        e("webkit") || d.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
      }, this)) : "" != this.tabIndex && this.set("tabIndex", this.tabIndex)
    }, _onFocus:function(d) {
      if("mouse" == d && this.isFocusable()) {
        var c = this.own(h(this.focusNode, "focus", function() {
          n.remove();
          c.remove()
        }))[0], f = e("pointer-events") ? "pointerup" : e("MSPointer") ? "MSPointerUp" : e("touch-events") ? "touchend, mouseup" : "mouseup", n = this.own(h(this.ownerDocumentBody, f, b.hitch(this, function(a) {
          n.remove();
          c.remove();
          this.focused && ("touchend" == a.type ? this.defer("focus") : this.focus())
        })))[0]
      }
      this.scrollOnFocus && this.defer(function() {
        a.scrollIntoView(this.domNode)
      });
      this.inherited(arguments)
    }, isFocusable:function() {
      return!this.disabled && this.focusNode && "none" != m.get(this.domNode, "display")
    }, focus:function() {
      if(!this.disabled && this.focusNode.focus) {
        try {
          this.focusNode.focus()
        }catch(a) {
        }
      }
    }, compare:function(a, d) {
      return"number" == typeof a && "number" == typeof d ? isNaN(a) && isNaN(d) ? 0 : a - d : a > d ? 1 : a < d ? -1 : 0
    }, onChange:function() {
    }, _onChangeActive:!1, _handleOnChange:function(a, d) {
      if(void 0 == this._lastValueReported && (null === d || !this._onChangeActive)) {
        this._resetValue = this._lastValueReported = a
      }
      this._pendingOnChange = this._pendingOnChange || typeof a != typeof this._lastValueReported || 0 != this.compare(a, this._lastValueReported);
      if((this.intermediateChanges || d || void 0 === d) && this._pendingOnChange) {
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
  define(["dojo/_base/declare", "dojo/dom", "dojo/has", "../registry"], function(c, k, l, m) {
    var b = c("dijit.form._ButtonMixin" + (l("dojo-bidi") ? "_NoBidi" : ""), null, {label:"", type:"button", __onClick:function(b) {
      b.stopPropagation();
      b.preventDefault();
      this.disabled || this.valueNode.click(b);
      return!1
    }, _onClick:function(b) {
      if(this.disabled) {
        return b.stopPropagation(), b.preventDefault(), !1
      }
      !1 === this.onClick(b) && b.preventDefault();
      var c = b.defaultPrevented;
      if(!c && "submit" == this.type && !(this.valueNode || this.focusNode).form) {
        for(var e = this.domNode;e.parentNode;e = e.parentNode) {
          var a = m.byNode(e);
          if(a && "function" == typeof a._onSubmit) {
            a._onSubmit(b);
            b.preventDefault();
            c = !0;
            break
          }
        }
      }
      return!c
    }, postCreate:function() {
      this.inherited(arguments);
      k.setSelectable(this.focusNode, !1)
    }, onClick:function() {
      return!0
    }, _setLabelAttr:function(b) {
      this._set("label", b);
      (this.containerNode || this.focusNode).innerHTML = b
    }});
    l("dojo-bidi") && (b = c("dijit.form._ButtonMixin", b, {_setLabelAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode || this.focusNode)
    }}));
    return b
  })
}, "dijit/_Container":function() {
  define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct", "dojo/_base/kernel"], function(c, k, l, m) {
    return k("dijit._Container", null, {buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode)
    }, addChild:function(b, c) {
      var h = this.containerNode;
      if(0 < c) {
        for(h = h.firstChild;0 < c;) {
          1 == h.nodeType && c--, h = h.nextSibling
        }
        h ? c = "before" : (h = this.containerNode, c = "last")
      }
      l.place(b.domNode, h, c);
      this._started && !b._started && b.startup()
    }, removeChild:function(b) {
      "number" == typeof b && (b = this.getChildren()[b]);
      b && (b = b.domNode) && b.parentNode && b.parentNode.removeChild(b)
    }, hasChildren:function() {
      return 0 < this.getChildren().length
    }, _getSiblingOfChild:function(b, f) {
      var h = this.getChildren(), e = c.indexOf(h, b);
      return h[e + f]
    }, getIndexOfChild:function(b) {
      return c.indexOf(this.getChildren(), b)
    }})
  })
}, "dijit/_HasDropDown":function() {
  define("dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on dojo/touch ./registry ./focus ./popup ./_FocusMixin".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p) {
    return c("dijit._HasDropDown", p, {_buttonNode:null, _arrowWrapperNode:null, _popupStateNode:null, _aroundNode:null, dropDown:null, autoWidth:!0, forceWidth:!1, maxHeight:-1, dropDownPosition:["below", "above"], _stopClickEvents:!0, _onDropDownMouseDown:function(a) {
      !this.disabled && !this.readOnly && ("MSPointerDown" != a.type && a.preventDefault(), this.own(g.once(this.ownerDocument, q.release, d.hitch(this, "_onDropDownMouseUp"))), this.toggleDropDown())
    }, _onDropDownMouseUp:function(a) {
      var d = this.dropDown, g = !1;
      if(a && this._opened) {
        var e = f.position(this._buttonNode, !0);
        if(!(a.pageX >= e.x && a.pageX <= e.x + e.w) || !(a.pageY >= e.y && a.pageY <= e.y + e.h)) {
          for(e = a.target;e && !g;) {
            b.contains(e, "dijitPopup") ? g = !0 : e = e.parentNode
          }
          if(g) {
            e = a.target;
            if(d.onItemClick) {
              for(var c;e && !(c = t.byNode(e));) {
                e = e.parentNode
              }
              if(c && c.onClick && c.getParent) {
                c.getParent().onItemClick(c, a)
              }
            }
            return
          }
        }
      }
      if(this._opened) {
        if(d.focus && (!1 !== d.autoFocus || "mouseup" == a.type && !this.hovering)) {
          this._focusDropDownTimer = this.defer(function() {
            d.focus();
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
      this.own(g(this._buttonNode, q.press, d.hitch(this, "_onDropDownMouseDown")), g(this._buttonNode, "click", d.hitch(this, "_onDropDownClick")), g(a, "keydown", d.hitch(this, "_onKey")), g(a, "keyup", d.hitch(this, "_onKeyUp")))
    }, destroy:function() {
      this._opened && this.closeDropDown(!0);
      this.dropDown && (this.dropDown._destroyed || this.dropDown.destroyRecursive(), delete this.dropDown);
      this.inherited(arguments)
    }, _onKey:function(d) {
      if(!this.disabled && !this.readOnly) {
        var b = this.dropDown, g = d.target;
        if(b && (this._opened && b.handleKey) && !1 === b.handleKey(d)) {
          d.stopPropagation(), d.preventDefault()
        }else {
          if(b && this._opened && d.keyCode == a.ESCAPE) {
            this.closeDropDown(), d.stopPropagation(), d.preventDefault()
          }else {
            if(!this._opened && (d.keyCode == a.DOWN_ARROW || (d.keyCode == a.ENTER || d.keyCode == a.SPACE && (!this._searchTimer || d.ctrlKey || d.altKey || d.metaKey)) && ("input" !== (g.tagName || "").toLowerCase() || g.type && "text" !== g.type.toLowerCase()))) {
              this._toggleOnKeyUp = !0, d.stopPropagation(), d.preventDefault()
            }
          }
        }
      }
    }, _onKeyUp:function() {
      if(this._toggleOnKeyUp) {
        delete this._toggleOnKeyUp;
        this.toggleDropDown();
        var a = this.dropDown;
        a && a.focus && this.defer(d.hitch(a, "focus"), 1)
      }
    }, _onBlur:function() {
      this.closeDropDown(!1);
      this.inherited(arguments)
    }, isLoaded:function() {
      return!0
    }, loadDropDown:function(a) {
      a()
    }, loadAndOpenDropDown:function() {
      var a = new k, b = d.hitch(this, function() {
        this.openDropDown();
        a.resolve(this.dropDown)
      });
      this.isLoaded() ? b() : this.loadDropDown(b);
      return a
    }, toggleDropDown:function() {
      !this.disabled && !this.readOnly && (this._opened ? this.closeDropDown(!0) : this.loadAndOpenDropDown())
    }, openDropDown:function() {
      var a = this.dropDown, g = a.domNode, e = this._aroundNode || this.domNode, c = this, q = u.open({parent:this, popup:a, around:e, orient:this.dropDownPosition, maxHeight:this.maxHeight, onExecute:function() {
        c.closeDropDown(!0)
      }, onCancel:function() {
        c.closeDropDown(!0)
      }, onClose:function() {
        m.set(c._popupStateNode, "popupActive", !1);
        b.remove(c._popupStateNode, "dijitHasDropDownOpen");
        c._set("_opened", !1)
      }});
      if(this.forceWidth || this.autoWidth && e.offsetWidth > a._popupWrapper.offsetWidth) {
        var e = e.offsetWidth - a._popupWrapper.offsetWidth, h = {w:a.domNode.offsetWidth + e};
        this._origStyle = g.style.cssText;
        d.isFunction(a.resize) ? a.resize(h) : f.setMarginBox(g, h);
        "R" == q.corner[1] && (a._popupWrapper.style.left = a._popupWrapper.style.left.replace("px", "") - e + "px")
      }
      m.set(this._popupStateNode, "popupActive", "true");
      b.add(this._popupStateNode, "dijitHasDropDownOpen");
      this._set("_opened", !0);
      this._popupStateNode.setAttribute("aria-expanded", "true");
      this._popupStateNode.setAttribute("aria-owns", a.id);
      "presentation" !== g.getAttribute("role") && !g.getAttribute("aria-labelledby") && g.setAttribute("aria-labelledby", this.id);
      return q
    }, closeDropDown:function(a) {
      this._focusDropDownTimer && (this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
      this._opened && (this._popupStateNode.setAttribute("aria-expanded", "false"), a && this.focus && this.focus(), u.close(this.dropDown), this._opened = !1);
      this._origStyle && (this.dropDown.domNode.style.cssText = this._origStyle, delete this._origStyle)
    }})
  })
}, "dijit/form/_DateTimeTextBox":function() {
  define("dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(c, k, l, m, b, f, h, e) {
    new Date("X");
    return m("dijit.form._DateTimeTextBox", [f, h], {templateString:e, hasDownArrow:!0, cssStateNodes:{_buttonNode:"dijitDownArrowButton"}, _unboundedConstraints:{}, pattern:k.regexp, datePackage:"", postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, compare:function(a, d) {
      var b = this._isInvalidDate(a), e = this._isInvalidDate(d);
      if(b || e) {
        return b && e ? 0 : !b ? 1 : -1
      }
      var b = this.format(a, this._unboundedConstraints), e = this.format(d, this._unboundedConstraints), f = this.parse(b, this._unboundedConstraints), h = this.parse(e, this._unboundedConstraints);
      return b == e ? 0 : c.compare(f, h, this._selector)
    }, autoWidth:!0, format:function(a, d) {
      return!a ? "" : this.dateLocaleModule.format(a, d)
    }, parse:function(a, d) {
      return this.dateLocaleModule.parse(a, d) || (this._isEmpty(a) ? null : void 0)
    }, serialize:function(a, d) {
      a.toGregorian && (a = a.toGregorian());
      return l.toISOString(a, d)
    }, dropDownDefaultValue:new Date, value:new Date(""), _blankValue:null, popupClass:"", _selector:"", constructor:function(a) {
      a = a || {};
      this.dateModule = a.datePackage ? b.getObject(a.datePackage, !1) : c;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateClassObj instanceof Date || (this.value = new this.dateClassObj(this.value));
      this.dateLocaleModule = a.datePackage ? b.getObject(a.datePackage + ".locale", !1) : k;
      this._set("pattern", this.dateLocaleModule.regexp);
      this._invalidDate = this.constructor.prototype.value.toString()
    }, buildRendering:function() {
      this.inherited(arguments);
      this.hasDownArrow || (this._buttonNode.style.display = "none");
      this.hasDownArrow || (this._buttonNode = this.domNode, this.baseClass += " dijitComboBoxOpenOnClick")
    }, _setConstraintsAttr:function(a) {
      a.selector = this._selector;
      a.fullYear = !0;
      var d = l.fromISOString;
      "string" == typeof a.min && (a.min = d(a.min), this.dateClassObj instanceof Date || (a.min = new this.dateClassObj(a.min)));
      "string" == typeof a.max && (a.max = d(a.max), this.dateClassObj instanceof Date || (a.max = new this.dateClassObj(a.max)));
      this.inherited(arguments);
      this._unboundedConstraints = b.mixin({}, this.constraints, {min:null, max:null})
    }, _isInvalidDate:function(a) {
      return!a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate
    }, _setValueAttr:function(a, d, b) {
      void 0 !== a && ("string" == typeof a && (a = l.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
      this.inherited(arguments, [a, d, b]);
      this.value instanceof Date && (this.filterString = "");
      this.dropDown && this.dropDown.set("value", a, !1)
    }, _set:function(a, d) {
      if("value" == a) {
        d instanceof Date && !(this.dateClassObj instanceof Date) && (d = new this.dateClassObj(d));
        var b = this._get("value");
        if(b instanceof this.dateClassObj && 0 == this.compare(d, b)) {
          return
        }
      }
      this.inherited(arguments)
    }, _setDropDownDefaultValueAttr:function(a) {
      this._isInvalidDate(a) && (a = new this.dateClassObj);
      this._set("dropDownDefaultValue", a)
    }, openDropDown:function(a) {
      this.dropDown && this.dropDown.destroy();
      var d = b.isString(this.popupClass) ? b.getObject(this.popupClass, !1) : this.popupClass, g = this, e = this.get("value");
      this.dropDown = new d({onChange:function(a) {
        g.set("value", a, !0)
      }, id:this.id + "_popup", dir:g.dir, lang:g.lang, value:e, textDir:g.textDir, currentFocus:!this._isInvalidDate(e) ? e : this.dropDownDefaultValue, constraints:g.constraints, filterString:g.filterString, datePackage:g.datePackage, isDisabledDate:function(a) {
        return!g.rangeCheck(a, g.constraints)
      }});
      this.inherited(arguments)
    }, _getDisplayedValueAttr:function() {
      return this.textbox.value
    }, _setDisplayedValueAttr:function(a, d) {
      this._setValueAttr(this.parse(a, this.constraints), d, a)
    }})
  })
}, "dijit/form/RangeBoundTextBox":function() {
  define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox", "dojo/i18n!./nls/validate"], function(c, k, l) {
    return c("dijit.form.RangeBoundTextBox", l, {rangeMessage:"", rangeCheck:function(c, b) {
      return("min" in b ? 0 <= this.compare(c, b.min) : !0) && ("max" in b ? 0 >= this.compare(c, b.max) : !0)
    }, isInRange:function() {
      return this.rangeCheck(this.get("value"), this.constraints)
    }, _isDefinitelyOutOfRange:function() {
      var c = this.get("value");
      if(null == c) {
        return!1
      }
      var b = !1;
      "min" in this.constraints && (b = this.constraints.min, b = 0 > this.compare(c, "number" == typeof b && 0 <= b && 0 != c ? 0 : b));
      !b && "max" in this.constraints && (b = this.constraints.max, b = 0 < this.compare(c, "number" != typeof b || 0 < b ? b : 0));
      return b
    }, _isValidSubset:function() {
      return this.inherited(arguments) && !this._isDefinitelyOutOfRange()
    }, isValid:function(c) {
      return this.inherited(arguments) && (this._isEmpty(this.textbox.value) && !this.required || this.isInRange(c))
    }, getErrorMessage:function(c) {
      var b = this.get("value");
      return null != b && "" !== b && ("number" != typeof b || !isNaN(b)) && !this.isInRange(c) ? this.rangeMessage : this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this.rangeMessage || (this.messages = k.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage)
    }})
  })
}, "dijit/form/MappedTextBox":function() {
  define(["dojo/_base/declare", "dojo/sniff", "dojo/dom-construct", "./ValidationTextBox"], function(c, k, l, m) {
    return c("dijit.form.MappedTextBox", m, {postMixInProperties:function() {
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
      this.valueNode = l.place("\x3cinput type\x3d'hidden'" + (this.name && !k("msapp") ? ' name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "") + "/\x3e", this.textbox, "after")
    }, reset:function() {
      this.valueNode.value = "";
      this.inherited(arguments)
    }})
  })
}, "dijit/form/ValidationTextBox":function() {
  define("dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/i18n ./TextBox ../Tooltip dojo/text!./templates/ValidationTextBox.html dojo/i18n!./nls/validate".split(" "), function(c, k, l, m, b, f, h) {
    var e = c("dijit.form.ValidationTextBox", b, {templateString:h, required:!1, promptMessage:"", invalidMessage:"$_unset_$", missingMessage:"$_unset_$", message:"", constraints:{}, pattern:".*", regExp:"", regExpGen:function() {
    }, state:"", tooltipPosition:[], _deprecateRegExp:function(a, d) {
      d != e.prototype[a] && (k.deprecated("ValidationTextBox id\x3d" + this.id + ", set('" + a + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", d))
    }, _setRegExpGenAttr:function(a) {
      this._deprecateRegExp("regExpGen", a);
      this._set("regExpGen", this._computeRegexp)
    }, _setRegExpAttr:function(a) {
      this._deprecateRegExp("regExp", a)
    }, _setValueAttr:function() {
      this.inherited(arguments);
      this._refreshState()
    }, validator:function(a, d) {
      return RegExp("^(?:" + this._computeRegexp(d) + ")" + (this.required ? "" : "?") + "$").test(a) && (!this.required || !this._isEmpty(a)) && (this._isEmpty(a) || void 0 !== this.parse(a, d))
    }, _isValidSubset:function() {
      return 0 == this.textbox.value.search(this._partialre)
    }, isValid:function() {
      return this.validator(this.textbox.value, this.get("constraints"))
    }, _isEmpty:function(a) {
      return(this.trim ? /^\s*$/ : /^$/).test(a)
    }, getErrorMessage:function() {
      var a = "$_unset_$" == this.invalidMessage ? this.messages.invalidMessage : !this.invalidMessage ? this.promptMessage : this.invalidMessage, d = "$_unset_$" == this.missingMessage ? this.messages.missingMessage : !this.missingMessage ? a : this.missingMessage;
      return this.required && this._isEmpty(this.textbox.value) ? d : a
    }, getPromptMessage:function() {
      return this.promptMessage
    }, _maskValidSubsetError:!0, validate:function(a) {
      var d = "", b = this.disabled || this.isValid(a);
      b && (this._maskValidSubsetError = !0);
      var e = this._isEmpty(this.textbox.value), c = !b && a && this._isValidSubset();
      this._set("state", b ? "" : ((!this._hasBeenBlurred || a) && e || c) && (this._maskValidSubsetError || c && !this._hasBeenBlurred && a) ? "Incomplete" : "Error");
      this.focusNode.setAttribute("aria-invalid", "Error" == this.state ? "true" : "false");
      "Error" == this.state ? (this._maskValidSubsetError = a && c, d = this.getErrorMessage(a)) : "Incomplete" == this.state ? (d = this.getPromptMessage(a), this._maskValidSubsetError = !this._hasBeenBlurred || a) : e && (d = this.getPromptMessage(a));
      this.set("message", d);
      return b
    }, displayMessage:function(a) {
      a && this.focused ? f.show(a, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : f.hide(this.domNode)
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
      var d = this.pattern;
      "function" == typeof d && (d = d.call(this, a));
      if(d != this._lastRegExp) {
        var b = "";
        this._lastRegExp = d;
        ".*" != d && d.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function(a) {
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
        }catch(e) {
          b = this.pattern
        }
        this._partialre = "^(?:" + b + ")$"
      }
      return d
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this.messages = m.getLocalization("dijit.form", "validate", this.lang);
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
      f.hide(this.domNode);
      this.inherited(arguments)
    }});
    return e
  })
}, "dijit/form/TextBox":function() {
  define("dojo/_base/declare dojo/dom-construct dojo/dom-style dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ./_FormValueWidget ./_TextBoxMixin dojo/text!./templates/TextBox.html ../main".split(" "), function(c, k, l, m, b, f, h, e, a, d, g) {
    e = c("dijit.form.TextBox" + (h("dojo-bidi") ? "_NoBidi" : ""), [e, a], {templateString:d, _singleNodeTemplate:'\x3cinput class\x3d"dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point\x3d"textbox,focusNode" autocomplete\x3d"off" type\x3d"${type}" ${!nameAttrSetting} /\x3e', _buttonInputDisabled:h("ie") ? "disabled" : "", baseClass:"dijitTextBox", postMixInProperties:function() {
      var a = this.type.toLowerCase();
      if(this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString == this.constructor.prototype.templateString) {
        this.templateString = this._singleNodeTemplate
      }
      this.inherited(arguments)
    }, postCreate:function() {
      this.inherited(arguments);
      9 > h("ie") && this.defer(function() {
        try {
          var a = l.getComputedStyle(this.domNode);
          if(a) {
            var d = a.fontFamily;
            if(d) {
              var b = this.domNode.getElementsByTagName("INPUT");
              if(b) {
                for(a = 0;a < b.length;a++) {
                  b[a].style.fontFamily = d
                }
              }
            }
          }
        }catch(e) {
        }
      })
    }, _setPlaceHolderAttr:function(a) {
      this._set("placeHolder", a);
      this._phspan || (this._attachPoints.push("_phspan"), this._phspan = k.create("span", {className:"dijitPlaceHolder dijitInputField"}, this.textbox, "after"), this.own(f(this._phspan, "mousedown", function(a) {
        a.preventDefault()
      }), f(this._phspan, "touchend, pointerup, MSPointerUp", b.hitch(this, function() {
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
    }, _setValueAttr:function(a, d, b) {
      this.inherited(arguments);
      this._updatePlaceHolder()
    }, getDisplayedValue:function() {
      m.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
      return this.get("displayedValue")
    }, setDisplayedValue:function(a) {
      m.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
      this.set("displayedValue", a)
    }, _onBlur:function(a) {
      this.disabled || (this.inherited(arguments), this._updatePlaceHolder(), h("mozilla") && this.selectOnClick && (this.textbox.selectionStart = this.textbox.selectionEnd = void 0))
    }, _onFocus:function(a) {
      !this.disabled && !this.readOnly && (this.inherited(arguments), this._updatePlaceHolder())
    }});
    9 > h("ie") && (e.prototype._isTextSelected = function() {
      var a = this.ownerDocument.selection.createRange();
      return a.parentElement() == this.textbox && 0 < a.text.length
    }, g._setSelectionRange = a._setSelectionRange = function(a, d, b) {
      a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveStart("character", -99999), a.moveStart("character", d), a.moveEnd("character", b - d), a.select())
    });
    h("dojo-bidi") && (e = c("dijit.form.TextBox", e, {_setPlaceHolderAttr:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this._phspan)
    }}));
    return e
  })
}, "dijit/form/_FormValueWidget":function() {
  define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function(c, k, l, m) {
    return c("dijit.form._FormValueWidget", [l, m], {_layoutHackIE7:function() {
      if(7 == k("ie")) {
        for(var b = this.domNode, c = b.parentNode, h = b.firstChild || b, e = h.style.filter, a = this;c && 0 == c.clientHeight;) {
          (function() {
            var d = a.connect(c, "onscroll", function() {
              a.disconnect(d);
              h.style.filter = (new Date).getMilliseconds();
              a.defer(function() {
                h.style.filter = e
              })
            })
          })(), c = c.parentNode
        }
      }
    }})
  })
}, "dijit/form/_FormValueMixin":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormWidgetMixin".split(" "), function(c, k, l, m, b, f, h) {
    return c("dijit.form._FormValueMixin", h, {readOnly:!1, _setReadOnlyAttr:function(b) {
      f("trident") && "disabled" in this ? k.set(this.focusNode, "readOnly", b || this.disabled) : k.set(this.focusNode, "readOnly", b);
      this._set("readOnly", b)
    }, postCreate:function() {
      this.inherited(arguments);
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.value)
    }, _setValueAttr:function(b, a) {
      this._handleOnChange(b, a)
    }, _handleOnChange:function(b, a) {
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
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/sniff dojo/keys dojo/_base/lang dojo/on ../main".split(" "), function(c, k, l, m, b, f, h, e) {
    var a = k("dijit.form._TextBoxMixin" + (m("dojo-bidi") ? "_NoBidi" : ""), null, {trim:!1, uppercase:!1, lowercase:!1, propercase:!1, maxLength:"", selectOnClick:!1, placeHolder:"", _getValueAttr:function() {
      return this.parse(this.get("displayedValue"), this.constraints)
    }, _setValueAttr:function(a, b, e) {
      var c;
      void 0 !== a && (c = this.filter(a), "string" != typeof e && (e = null !== c && ("number" != typeof c || !isNaN(c)) ? this.filter(this.format(c, this.constraints)) : "", 0 != this.compare(c, this.filter(this.parse(e, this.constraints))) && (e = null)));
      if(null != e && ("number" != typeof e || !isNaN(e)) && this.textbox.value != e) {
        this.textbox.value = e, this._set("displayedValue", this.get("displayedValue"))
      }
      this.inherited(arguments, [c, b])
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
      this.own(h(this.textbox, "keydown, keypress, paste, cut, compositionend", f.hitch(this, function(a) {
        var e;
        if("keydown" == a.type && 229 != a.keyCode) {
          e = a.keyCode;
          switch(e) {
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
            switch(e) {
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
            if(65 <= e && 90 >= e || 48 <= e && 57 >= e || e == b.SPACE) {
              return
            }
            e = !1;
            for(var c in b) {
              if(b[c] === a.keyCode) {
                e = !0;
                break
              }
            }
            if(!e) {
              return
            }
          }
        }
        (e = 32 <= a.charCode ? String.fromCharCode(a.charCode) : a.charCode) || (e = 65 <= a.keyCode && 90 >= a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || a.keyCode == b.SPACE ? String.fromCharCode(a.keyCode) : a.keyCode);
        e || (e = 229);
        if("keypress" == a.type) {
          if("string" != typeof e) {
            return
          }
          if("a" <= e && "z" >= e || "A" <= e && "Z" >= e || "0" <= e && "9" >= e || " " === e) {
            if(a.ctrlKey || a.metaKey || a.altKey) {
              return
            }
          }
        }
        var t = {faux:!0}, n;
        for(n in a) {
          /^(layer[XY]|returnValue|keyLocation)$/.test(n) || (c = a[n], "function" != typeof c && "undefined" != typeof c && (t[n] = c))
        }
        f.mixin(t, {charOrCode:e, _wasConsumed:!1, preventDefault:function() {
          t._wasConsumed = !0;
          a.preventDefault()
        }, stopPropagation:function() {
          a.stopPropagation()
        }});
        this._lastInputProducingEvent = t;
        !1 === this.onInput(t) && (t.preventDefault(), t.stopPropagation());
        if(!t._wasConsumed && 9 >= m("ie")) {
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
                this.textbox.value !== this._lastInputEventValue && h.emit(this.textbox, "input", {bubbles:!0})
              })
          }
        }
      })), h(this.textbox, "input", f.hitch(this, "_onInput")), h(this.domNode, "keypress", function(a) {
        a.stopPropagation()
      }))
    }, _blankValue:"", filter:function(a) {
      if(null === a) {
        return this._blankValue
      }
      if("string" != typeof a) {
        return a
      }
      this.trim && (a = f.trim(a));
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
    }, _onFocus:function(d) {
      !this.disabled && !this.readOnly && (this.selectOnClick && "mouse" == d && (this._selectOnClickHandle = h.once(this.domNode, "mouseup, touchend", f.hitch(this, function(d) {
        this._isTextSelected() || a.selectInputText(this.textbox)
      })), this.own(this._selectOnClickHandle), this.defer(function() {
        this._selectOnClickHandle && (this._selectOnClickHandle.remove(), this._selectOnClickHandle = null)
      }, 500)), this.inherited(arguments), this._refreshState())
    }, reset:function() {
      this.textbox.value = "";
      this.inherited(arguments)
    }});
    m("dojo-bidi") && (a = k("dijit.form._TextBoxMixin", a, {_setValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _setDisplayedValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _onInput:function() {
      this.applyTextDir(this.focusNode);
      this.inherited(arguments)
    }}));
    a._setSelectionRange = e._setSelectionRange = function(a, b, e) {
      a.setSelectionRange && a.setSelectionRange(b, e)
    };
    a.selectInputText = e.selectInputText = function(d, b, e) {
      d = l.byId(d);
      isNaN(b) && (b = 0);
      isNaN(e) && (e = d.value ? d.value.length : 0);
      try {
        d.focus(), a._setSelectionRange(d, b, e)
      }catch(c) {
      }
    };
    return a
  })
}, "lsmb/Form":function() {
  define("dijit/form/Form dojo/_base/declare dojo/_base/event dojo/on dojo/hash dojo/dom-attr dojo/dom-form dojo/query dijit/registry".split(" "), function(c, k, l, m, b, f, h, e, a) {
    var d = 0;
    return k("lsmb/Form", [c], {clickedAction:null, startup:function() {
      var a = this;
      this.inherited(arguments);
      e('input[type\x3d"submit"]', this.domNode).forEach(function(d) {
        m(d, "click", function() {
          a.clickedAction = f.get(d, "value")
        })
      })
    }, onSubmit:function(a) {
      l.stop(a);
      this.submit()
    }, submit:function() {
      if(this.validate()) {
        var e = "undefined" === typeof this.method ? "GET" : this.method, c = this.action, f = {handleAs:"text"};
        "get" === e.toLowerCase() ? (d++, e = h.toQuery(this.domNode), e = "action\x3d" + this.clickedAction + "\x26" + e, c = c + "?" + e + "#" + d.toString(16), b(c)) : (f.method = e, "multipart/form-data" == this.domNode.enctype ? (f.data = new FormData(this.domNode), f.data.append("action", this.clickedAction)) : f.data = "action\x3d" + this.clickedAction + "\x26" + h.toQuery(this.domNode), a.byId("maindiv").load_form(c, f))
      }
    }})
  })
}, "dijit/form/Form":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/sniff ../_Widget ../_TemplatedMixin ./_FormMixin ../layout/_ContentPaneResizeMixin".split(" "), function(c, k, l, m, b, f, h, e) {
    return c("dijit.form.Form", [b, f, h, e], {name:"", action:"", method:"", encType:"", "accept-charset":"", accept:"", target:"", templateString:"\x3cform data-dojo-attach-point\x3d'containerNode' data-dojo-attach-event\x3d'onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}\x3e\x3c/form\x3e", postMixInProperties:function() {
      this.nameAttrSetting = this.name ? "name\x3d'" + this.name + "'" : "";
      this.inherited(arguments)
    }, execute:function() {
    }, onExecute:function() {
    }, _setEncTypeAttr:function(a) {
      k.set(this.domNode, "encType", a);
      m("ie") && (this.domNode.encoding = a);
      this._set("encType", a)
    }, reset:function(a) {
      var d = {returnValue:!0, preventDefault:function() {
        this.returnValue = !1
      }, stopPropagation:function() {
      }, currentTarget:a ? a.target : this.domNode, target:a ? a.target : this.domNode};
      !1 !== this.onReset(d) && d.returnValue && this.inherited(arguments, [])
    }, onReset:function() {
      return!0
    }, _onReset:function(a) {
      this.reset(a);
      a.stopPropagation();
      a.preventDefault();
      return!1
    }, _onSubmit:function(a) {
      var d = this.constructor.prototype;
      if(this.execute != d.execute || this.onExecute != d.onExecute) {
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
  define("dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/on dojo/window".split(" "), function(c, k, l, m, b, f) {
    return k("dijit.form._FormMixin", null, {state:"", _getDescendantFormWidgets:function(b) {
      var e = [];
      c.forEach(b || this.getChildren(), function(a) {
        "value" in a ? e.push(a) : e = e.concat(this._getDescendantFormWidgets(a.getChildren()))
      }, this);
      return e
    }, reset:function() {
      c.forEach(this._getDescendantFormWidgets(), function(b) {
        b.reset && b.reset()
      })
    }, validate:function() {
      var b = !1;
      return c.every(c.map(this._getDescendantFormWidgets(), function(e) {
        e._hasBeenBlurred = !0;
        var a = e.disabled || !e.validate || e.validate();
        !a && !b && (f.scrollIntoView(e.containerNode || e.domNode), e.focus(), b = !0);
        return a
      }), function(b) {
        return b
      })
    }, setValues:function(b) {
      l.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
      return this.set("value", b)
    }, _setValueAttr:function(b) {
      var e = {};
      c.forEach(this._getDescendantFormWidgets(), function(a) {
        a.name && (e[a.name] || (e[a.name] = [])).push(a)
      });
      for(var a in e) {
        if(e.hasOwnProperty(a)) {
          var d = e[a], g = m.getObject(a, !1, b);
          void 0 !== g && (g = [].concat(g), "boolean" == typeof d[0].checked ? c.forEach(d, function(a) {
            a.set("value", -1 != c.indexOf(g, a._get("value")))
          }) : d[0].multiple ? d[0].set("value", g) : c.forEach(d, function(a, d) {
            a.set("value", g[d])
          }))
        }
      }
    }, getValues:function() {
      l.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, _getValueAttr:function() {
      var b = {};
      c.forEach(this._getDescendantFormWidgets(), function(e) {
        var a = e.name;
        if(a && !e.disabled) {
          var d = e.get("value");
          "boolean" == typeof e.checked ? /Radio/.test(e.declaredClass) ? !1 !== d ? m.setObject(a, d, b) : (d = m.getObject(a, !1, b), void 0 === d && m.setObject(a, null, b)) : (e = m.getObject(a, !1, b), e || (e = [], m.setObject(a, e, b)), !1 !== d && e.push(d)) : (e = m.getObject(a, !1, b), "undefined" != typeof e ? m.isArray(e) ? e.push(d) : m.setObject(a, [e, d], b) : m.setObject(a, d, b))
        }
      });
      return b
    }, isValid:function() {
      return"" == this.state
    }, onValidStateChange:function() {
    }, _getState:function() {
      var b = c.map(this._descendants, function(b) {
        return b.get("state") || ""
      });
      return 0 <= c.indexOf(b, "Error") ? "Error" : 0 <= c.indexOf(b, "Incomplete") ? "Incomplete" : ""
    }, disconnectChildren:function() {
    }, connectChildren:function(b) {
      this._descendants = this._getDescendantFormWidgets();
      c.forEach(this._descendants, function(b) {
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
      var c = this;
      this.own(b(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function(b) {
        b.target != c.domNode && c._onChildChange(b.type.replace("attrmodified-", ""))
      }));
      this.watch("state", function(b, a, d) {
        this.onValidStateChange("" == d)
      })
    }, destroy:function() {
      this.inherited(arguments)
    }})
  })
}, "dijit/layout/_ContentPaneResizeMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/query ../registry ../Viewport ./utils".split(" "), function(c, k, l, m, b, f, h, e, a, d) {
    return k("dijit.layout._ContentPaneResizeMixin", null, {doLayout:!0, isLayoutContainer:!0, startup:function() {
      if(!this._started) {
        var d = this.getParent();
        this._childOfLayoutWidget = d && d.isLayoutContainer;
        this._needLayout = !this._childOfLayoutWidget;
        this.inherited(arguments);
        this._isShown() && this._onShow();
        this._childOfLayoutWidget || this.own(a.on("resize", f.hitch(this, "resize")))
      }
    }, _checkIfSingleChild:function() {
      if(this.doLayout) {
        var a = [], d = !1;
        h("\x3e *", this.containerNode).some(function(b) {
          var c = e.byNode(b);
          c && c.resize ? a.push(c) : !/script|link|style/i.test(b.nodeName) && b.offsetHeight && (d = !0)
        });
        this._singleChild = 1 == a.length && !d ? a[0] : null;
        l.toggle(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild)
      }
    }, resize:function(a, d) {
      this._resizeCalled = !0;
      this._scheduleLayout(a, d)
    }, _scheduleLayout:function(a, d) {
      this._isShown() ? this._layout(a, d) : (this._needLayout = !0, this._changeSize = a, this._resultSize = d)
    }, _layout:function(a, b) {
      delete this._needLayout;
      !this._wasShown && !1 !== this.open && this._onShow();
      a && m.setMarginBox(this.domNode, a);
      var e = this.containerNode;
      if(e === this.domNode) {
        var c = b || {};
        f.mixin(c, a || {});
        if(!("h" in c) || !("w" in c)) {
          c = f.mixin(m.getMarginBox(e), c)
        }
        this._contentBox = d.marginBox2contentBox(e, c)
      }else {
        this._contentBox = m.getContentBox(e)
      }
      this._layoutChildren()
    }, _layoutChildren:function() {
      this._checkIfSingleChild();
      if(this._singleChild && this._singleChild.resize) {
        var a = this._contentBox || m.getContentBox(this.containerNode);
        this._singleChild.resize({w:a.w, h:a.h})
      }else {
        for(var a = this.getChildren(), d, b = 0;d = a[b++];) {
          d.resize && d.resize()
        }
      }
    }, _isShown:function() {
      if(this._childOfLayoutWidget) {
        return this._resizeCalled && "open" in this ? this.open : this._resizeCalled
      }
      if("open" in this) {
        return this.open
      }
      var a = this.domNode, d = this.domNode.parentNode;
      return"none" != a.style.display && "hidden" != a.style.visibility && !l.contains(a, "dijitHidden") && d && d.style && "none" != d.style.display
    }, _onShow:function() {
      this._wasShown = !0;
      this._needLayout && this._layout(this._changeSize, this._resultSize);
      this.inherited(arguments)
    }})
  })
}, "dijit/layout/utils":function() {
  define(["dojo/_base/array", "dojo/dom-class", "dojo/dom-geometry", "dojo/dom-style", "dojo/_base/lang"], function(c, k, l, m, b) {
    function f(e, a) {
      var d = e.resize ? e.resize(a) : l.setMarginBox(e.domNode, a);
      d ? b.mixin(e, d) : (b.mixin(e, l.getMarginBox(e.domNode)), b.mixin(e, a))
    }
    var h = {marginBox2contentBox:function(b, a) {
      var d = m.getComputedStyle(b), c = l.getMarginExtents(b, d), f = l.getPadBorderExtents(b, d);
      return{l:m.toPixelValue(b, d.paddingLeft), t:m.toPixelValue(b, d.paddingTop), w:a.w - (c.w + f.w), h:a.h - (c.h + f.h)}
    }, layoutChildren:function(e, a, d, g, q) {
      a = b.mixin({}, a);
      k.add(e, "dijitLayoutContainer");
      d = c.filter(d, function(a) {
        return"center" != a.region && "client" != a.layoutAlign
      }).concat(c.filter(d, function(a) {
        return"center" == a.region || "client" == a.layoutAlign
      }));
      c.forEach(d, function(d) {
        var b = d.domNode, e = d.region || d.layoutAlign;
        if(!e) {
          throw Error("No region setting for " + d.id);
        }
        var c = b.style;
        c.left = a.l + "px";
        c.top = a.t + "px";
        c.position = "absolute";
        k.add(b, "dijitAlign" + (e.substring(0, 1).toUpperCase() + e.substring(1)));
        b = {};
        g && g == d.id && (b["top" == d.region || "bottom" == d.region ? "h" : "w"] = q);
        "leading" == e && (e = d.isLeftToRight() ? "left" : "right");
        "trailing" == e && (e = d.isLeftToRight() ? "right" : "left");
        "top" == e || "bottom" == e ? (b.w = a.w, f(d, b), a.h -= d.h, "top" == e ? a.t += d.h : c.top = a.t + a.h + "px") : "left" == e || "right" == e ? (b.h = a.h, f(d, b), a.w -= d.w, "left" == e ? a.l += d.w : c.left = a.l + a.w + "px") : ("client" == e || "center" == e) && f(d, a)
      })
    }};
    b.setObject("dijit.layout.utils", h);
    return h
  })
}, "lsmb/Invoice":function() {
  require(["dojo/_base/declare", "dijit/registry", "dojo/on", "lsmb/Form", "dijit/_Container"], function(c, k, l, m, b) {
    return c("lsmb/Invoice", [m, b], {_update:function() {
      this.clickedAction = "update";
      this.submit()
    }, startup:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l(k.byId("invoice-lines"), "changed", function() {
        b._update()
      }))
    }})
  })
}, "lsmb/InvoiceLine":function() {
  require(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dijit/_Container"], function(c, k, l, m, b) {
    return c("lsmb/InvoiceLine", [k, b], {})
  })
}, "dijit/_WidgetsInTemplateMixin":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare", "dojo/_base/lang", "dojo/parser"], function(c, k, l, m, b) {
    return l("dijit._WidgetsInTemplateMixin", null, {_earlyTemplatedStartup:!1, widgetsInTemplate:!0, contextRequire:null, _beforeFillContent:function() {
      if(this.widgetsInTemplate) {
        var c = this.domNode;
        this.containerNode && !this.searchContainerNode && (this.containerNode.stopParser = !0);
        b.parse(c, {noStart:!this._earlyTemplatedStartup, template:!0, inherited:{dir:this.dir, lang:this.lang, textDir:this.textDir}, propsThis:this, contextRequire:this.contextRequire, scope:"dojo"}).then(m.hitch(this, function(b) {
          this._startupWidgets = b;
          for(var e = 0;e < b.length;e++) {
            this._processTemplateNode(b[e], function(a, d) {
              return a[d]
            }, function(a, d, b) {
              return d in a ? a.connect(a, d, b) : a.on(d, b, !0)
            })
          }
          this.containerNode && this.containerNode.stopParser && delete this.containerNode.stopParser
        }));
        if(!this._startupWidgets) {
          throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
        }
      }
    }, _processTemplateNode:function(b, c, e) {
      return c(b, "dojoType") || c(b, "data-dojo-type") ? !0 : this.inherited(arguments)
    }, startup:function() {
      c.forEach(this._startupWidgets, function(b) {
        b && (!b._started && b.startup) && b.startup()
      });
      this._startupWidgets = null;
      this.inherited(arguments)
    }})
  })
}, "lsmb/InvoiceLines":function() {
  require(["dojo/_base/declare", "dijit/registry", "dijit/_WidgetBase", "dijit/_Container"], function(c, k, l, m) {
    return c("lsmb/InvoiceLines", [l, m], {removeLine:function(b) {
      this.removeChild(k.byId(b));
      this.emit("changed", {action:"removed"})
    }})
  })
}, "lsmb/MainContentPane":function() {
  define("dijit/layout/ContentPane dojo/_base/declare dojo/_base/event dijit/registry dojo/dom-style dojo/_base/lang dojo/promise/Promise dojo/on dojo/hash dojo/promise/all dojo/request/xhr dojo/query dojo/request/iframe dojo/dom-class".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n) {
    return k("lsmb/MainContentPane", [c], {last_page:null, interceptClick:null, report_request_error:function(a) {
      var b = m.byId("errorDialog");
      0 === a.response.status ? b.set("content", "Could not connect to server") : b.set("content", a.response.data);
      b.show()
    }, report_error:function(a) {
      var b = m.byId("errorDialog");
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
      var d = this;
      d.fade_main_div();
      return g(a, b).then(function(a) {
        d.hide_main_div();
        d.set_main_div(a)
      }, function(a) {
        d.show_main_div();
        d.report_request_error(a)
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
      var a = null, b = 0, e = null, c = this;
      1 === arguments.length && f.isObject(arguments[0]) && null !== arguments[0].content ? (a = arguments[0].content, delete arguments[0].content) : 1 === arguments.length && f.isString(arguments[0]) ? (a = arguments[0], b = !0) : 2 === arguments.length && "content" == arguments[0] && (a = arguments[1], b = !0);
      null !== a && (e = this.inherited("set", arguments, ["content", a]).then(function() {
        q("a", c.domNode).forEach(c.interceptClick);
        c.show_main_div()
      }));
      if(b) {
        return e
      }
      a = this.inherited(arguments);
      return null !== e && e instanceof h && null !== a && a instanceof h ? d([e, a]) : null !== e && e instanceof h ? e : a
    }})
  })
}, "dijit/layout/ContentPane":function() {
  define("dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/i18n!../nls/loading dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p, r) {
    return d("dijit.layout.ContentPane", [l, m, b], {href:"", content:"", extractContent:!1, parseOnLoad:!0, parserScope:c._scopeName, preventCache:!1, preload:!1, refreshOnShow:!1, loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e", errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e", isLoaded:!1, 
    baseClass:"dijitContentPane", ioArgs:{}, onLoadDeferred:null, _setTitleAttr:null, stopParser:!0, template:!1, markupFactory:function(a, b, d) {
      var e = new d(a, b);
      return!e.href && e._contentSetter && e._contentSetter.parseDeferred && !e._contentSetter.parseDeferred.isFulfilled() ? e._contentSetter.parseDeferred.then(function() {
        return e
      }) : e
    }, create:function(a, b) {
      if((!a || !a.template) && b && !("href" in a) && !("content" in a)) {
        b = q.byId(b);
        for(var d = b.ownerDocument.createDocumentFragment();b.firstChild;) {
          d.appendChild(b.firstChild)
        }
        a = k.delegate(a, {content:d})
      }
      this.inherited(arguments, [a, b])
    }, postMixInProperties:function() {
      this.inherited(arguments);
      var a = p.getLocalization("dijit", "loading", this.lang);
      this.loadingMessage = f.substitute(this.loadingMessage, a);
      this.errorMessage = f.substitute(this.errorMessage, a)
    }, buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode);
      this.domNode.removeAttribute("title")
    }, startup:function() {
      this.inherited(arguments);
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && k.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, _startChildren:function() {
      a.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && k.isFunction(a.startup)) && (a.startup(), a._started = !0)
      });
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && k.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, setHref:function(a) {
      c.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
      return this.set("href", a)
    }, _setHrefAttr:function(a) {
      this.cancel();
      this.onLoadDeferred = new g(k.hitch(this, "cancel"));
      this.onLoadDeferred.then(k.hitch(this, "onLoad"));
      this._set("href", a);
      this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
      return this.onLoadDeferred
    }, setContent:function(a) {
      c.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
      this.set("content", a)
    }, _setContentAttr:function(a) {
      this._set("href", "");
      this.cancel();
      this.onLoadDeferred = new g(k.hitch(this, "cancel"));
      this._created && this.onLoadDeferred.then(k.hitch(this, "onLoad"));
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
      this.onLoadDeferred = new g(k.hitch(this, "cancel"));
      this.onLoadDeferred.then(k.hitch(this, "onLoad"));
      this._load();
      return this.onLoadDeferred
    }, _load:function() {
      this._setContent(this.onDownloadStart(), !0);
      var a = this, b = {preventCache:this.preventCache || this.refreshOnShow, url:this.href, handleAs:"text"};
      k.isObject(this.ioArgs) && k.mixin(b, this.ioArgs);
      var d = this._xhrDfd = (this.ioMethod || u.get)(b), e;
      d.then(function(b) {
        e = b;
        try {
          return a._isDownloaded = !0, a._setContent(b, !1)
        }catch(d) {
          a._onError("Content", d)
        }
      }, function(b) {
        d.canceled || a._onError("Download", b);
        delete a._xhrDfd;
        return b
      }).then(function() {
        a.onDownloadEnd();
        delete a._xhrDfd;
        return e
      });
      delete this._hrefChanged
    }, _onLoadHandler:function(a) {
      this._set("isLoaded", !0);
      try {
        this.onLoadDeferred.resolve(a)
      }catch(b) {
        console.error("Error " + (this.widgetId || this.id) + " running custom onLoad code: " + b.message)
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
      var d = this._contentSetter;
      a.forEach(this.getChildren(), function(a) {
        a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b);
        a._destroyed = !0
      });
      d && (a.forEach(d.parseResults, function(a) {
        a._destroyed || (a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b), a._destroyed = !0)
      }), delete d.parseResults);
      b || n.empty(this.containerNode);
      delete this._singleChild
    }, _setContent:function(a, b) {
      this.destroyDescendants();
      var d = this._contentSetter;
      d && d instanceof h._ContentSetter || (d = this._contentSetter = new h._ContentSetter({node:this.containerNode, _onError:k.hitch(this, this._onError), onContentError:k.hitch(this, function(a) {
        a = this.onContentError(a);
        try {
          this.containerNode.innerHTML = a
        }catch(b) {
          console.error("Fatal " + this.id + " could not change content due to " + b.message, b)
        }
      })}));
      var e = k.mixin({cleanContent:this.cleanContent, extractContent:this.extractContent, parseContent:!a.domNode && this.parseOnLoad, parserScope:this.parserScope, startup:!1, dir:this.dir, lang:this.lang, textDir:this.textDir}, this._contentSetterParams || {}), e = d.set(k.isObject(a) && a.domNode ? a.domNode : a, e), c = this;
      return r(e && e.then ? e : d.parseDeferred, function() {
        delete c._contentSetterParams;
        b || (c._started && (c._startChildren(), c._scheduleLayout()), c._onLoadHandler(a))
      })
    }, _onError:function(a, b, d) {
      this.onLoadDeferred.reject(b);
      a = this["on" + a + "Error"].call(this, b);
      d ? console.error(d, b) : a && this._setContent(a, !0)
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
  define("./_base/kernel ./_base/lang ./_base/array ./_base/declare ./dom ./dom-construct ./parser".split(" "), function(c, k, l, m, b, f, h) {
    var e = 0, a = {_secureForInnerHtml:function(a) {
      return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
    }, _emptyNode:f.empty, _setNodeContent:function(a, b) {
      f.empty(a);
      if(b) {
        if("string" == typeof b && (b = f.toDom(b, a.ownerDocument)), !b.nodeType && k.isArrayLike(b)) {
          for(var e = b.length, c = 0;c < b.length;c = e == b.length ? c + 1 : 0) {
            f.place(b[c], a, "last")
          }
        }else {
          f.place(b, a, "last")
        }
      }
      return a
    }, _ContentSetter:m("dojo.html._ContentSetter", null, {node:"", content:"", id:"", cleanContent:!1, extractContent:!1, parseContent:!1, parserScope:c._scopeName, startup:!0, constructor:function(a, c) {
      k.mixin(this, a || {});
      c = this.node = b.byId(this.node || c);
      this.id || (this.id = ["Setter", c ? c.id || c.tagName : "", e++].join("_"))
    }, set:function(a, b) {
      void 0 !== a && (this.content = a);
      b && this._mixin(b);
      this.onBegin();
      this.setContent();
      var e = this.onEnd();
      return e && e.then ? e : this.node
    }, setContent:function() {
      var b = this.node;
      if(!b) {
        throw Error(this.declaredClass + ": setContent given no node");
      }
      try {
        b = a._setNodeContent(b, this.content)
      }catch(e) {
        var c = this.onContentError(e);
        try {
          b.innerHTML = c
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
      f.empty(this.node)
    }, onBegin:function() {
      var b = this.content;
      if(k.isString(b) && (this.cleanContent && (b = a._secureForInnerHtml(b)), this.extractContent)) {
        var e = b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        e && (b = e[1])
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
      var b = {}, e;
      for(e in a) {
        e in b || (this[e] = a[e])
      }
    }, _parse:function() {
      var a = this.node;
      try {
        var b = {};
        l.forEach(["dir", "lang", "textDir"], function(a) {
          this[a] && (b[a] = this[a])
        }, this);
        var e = this;
        this.parseDeferred = h.parse({rootNode:a, noStart:!this.startup, inherited:b, scope:this.parserScope}).then(function(a) {
          return e.parseResults = a
        }, function(a) {
          e._onError("Content", a, "Error parsing in _ContentSetter#" + e.id)
        })
      }catch(c) {
        this._onError("Content", c, "Error parsing in _ContentSetter#" + this.id)
      }
    }, _onError:function(b, e, c) {
      b = this["on" + b + "Error"].call(this, e);
      c ? console.error(c, e) : b && a._setNodeContent(this.node, b, !0)
    }}), set:function(b, e, c) {
      void 0 == e && (e = "");
      return c ? (new a._ContentSetter(k.mixin(c, {content:e, node:b}))).set() : a._setNodeContent(b, e, !0)
    }};
    k.setObject("dojo.html", a);
    return a
  })
}, "dojo/request/iframe":function() {
  define("module require ./watch ./util ./handlers ../_base/lang ../io-query ../query ../has ../dom ../dom-construct ../_base/window ../NodeList-dom ../NodeList-manipulate".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q) {
    function t(a) {
      return!this.isFulfilled()
    }
    function n(a) {
      return!!this._finished
    }
    function u(a, d) {
      if(!d) {
        try {
          var c = a.options, g = r.doc(r._frame), h = c.handleAs;
          if("html" !== h) {
            if("xml" === h) {
              if("html" === g.documentElement.tagName.toLowerCase()) {
                e("a", g.documentElement).orphan();
                var p = g.documentElement.innerText || g.documentElement.textContent, p = p.replace(/>\s+</g, "\x3e\x3c");
                a.text = f.trim(p)
              }else {
                a.data = g
              }
            }else {
              a.text = g.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = g
          }
        }catch(q) {
          d = q
        }
      }
      d ? this.reject(d) : this._finished ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function p(a) {
      this._callNext()
    }
    function r(a, b, d) {
      var e = m.parseArgs(a, m.deepCreate(v, b), !0);
      a = e.url;
      b = e.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      r._frame || (r._frame = r.create(r._iframeName, y + "();"));
      a = m.deferred(e, null, t, n, u, p);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, r._currentDfd = null, r._fireNextRequest())
      };
      a._legacy = d;
      r._dfdQueue.push(a);
      r._fireNextRequest();
      l(a);
      return d ? a : a.promise
    }
    var s = c.id.replace(/[\/\.\-]/g, "_"), y = s + "_onload";
    q.global[y] || (q.global[y] = function() {
      var a = r._currentDfd;
      if(a) {
        var b = d.byId(a.response.options.form) || a._tmpForm;
        if(b) {
          for(var e = a._contentToClean, c = 0;c < e.length;c++) {
            for(var f = e[c], h = 0;h < b.childNodes.length;h++) {
              var p = b.childNodes[h];
              if(p.name === f) {
                g.destroy(p);
                break
              }
            }
          }
          a._originalAction && b.setAttribute("action", a._originalAction);
          a._originalMethod && (b.setAttribute("method", a._originalMethod), b.method = a._originalMethod);
          a._originalTarget && (b.setAttribute("target", a._originalTarget), b.target = a._originalTarget)
        }
        a._tmpForm && (g.destroy(a._tmpForm), delete a._tmpForm);
        a._finished = !0
      }else {
        r._fireNextRequest()
      }
    });
    var v = {method:"POST"};
    r.create = function(b, d, e) {
      if(q.global[b]) {
        return q.global[b]
      }
      if(q.global.frames[b]) {
        return q.global.frames[b]
      }
      e || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), e = a("config-dojoBlankHtmlUrl") || k.toUrl("dojo/resources/blank.html"));
      d = g.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + e + '" onload\x3d"' + d + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', q.body());
      return q.global[b] = d
    };
    r.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var d = q.doc.getElementsByTagName("iframe");
        if(a.document && d[b].contentWindow && d[b].contentWindow.document) {
          return d[b].contentWindow.document
        }
        if(q.doc.frames[b] && q.doc.frames[b].document) {
          return q.doc.frames[b].document
        }
      }
      return null
    };
    r.setSrc = function(a, b, d) {
      a = q.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        d ? a.location.replace(b) : a.location = b
      }catch(e) {
      }
    };
    r._iframeName = s + "_IoIframe";
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
            var b = a.response, c = b.options, p = a._contentToClean = [], n = d.byId(c.form), l = m.notify, k = c.data || null, t;
            !a._legacy && "POST" === c.method && !n ? n = a._tmpForm = g.create("form", {name:s + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, q.body()) : "GET" === c.method && (n && -1 < b.url.indexOf("?")) && (t = b.url.slice(b.url.indexOf("?") + 1), k = f.mixin(h.queryToObject(t), k));
            if(n) {
              if(!a._legacy) {
                var u = n;
                do {
                  u = u.parentNode
                }while(u && u !== q.doc.documentElement);
                u || (n.style.position = "absolute", n.style.left = "-1000px", n.style.top = "-1000px", q.body().appendChild(n));
                n.name || (n.name = s + "_form")
              }
              if(k) {
                var u = function(a, b) {
                  g.create("input", {type:"hidden", name:a, value:b}, n);
                  p.push(a)
                }, v;
                for(v in k) {
                  var y = k[v];
                  if(f.isArray(y) && 1 < y.length) {
                    for(t = 0;t < y.length;t++) {
                      u(v, y[t])
                    }
                  }else {
                    var T = e("input[name\x3d'" + v + "']", n);
                    -1 == T.indexOf() ? u(v, y) : T.val(y)
                  }
                }
              }
              var P = n.getAttributeNode("action"), A = n.getAttributeNode("method"), B = n.getAttributeNode("target");
              b.url && (a._originalAction = P ? P.value : null, P ? P.value = b.url : n.setAttribute("action", b.url));
              if(a._legacy) {
                if(!A || !A.value) {
                  A ? A.value = c.method : n.setAttribute("method", c.method)
                }
              }else {
                a._originalMethod = A ? A.value : null, A ? A.value = c.method : n.setAttribute("method", c.method)
              }
              a._originalTarget = B ? B.value : null;
              B ? B.value = r._iframeName : n.setAttribute("target", r._iframeName);
              n.target = r._iframeName;
              l && l.emit("send", b, a.promise.cancel);
              r._notifyStart(b);
              n.submit()
            }else {
              c = "", b.options.data && (c = b.options.data, "string" !== typeof c && (c = h.objectToQuery(c))), u = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + c, l && l.emit("send", b, a.promise.cancel), r._notifyStart(b), r.setSrc(r._frame, u, !0)
            }
          }
        }
      }catch(z) {
        a.reject(z)
      }
    };
    m.addCommonMethods(r, ["GET", "POST"]);
    return r
  })
}, "dojo/NodeList-dom":function() {
  define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function(c, k, l, m, b, f, h, e, a) {
    function d(a) {
      return function(b, d, e) {
        return 2 == arguments.length ? a["string" == typeof d ? "get" : "set"](b, d) : a.set(b, d, e)
      }
    }
    var g = function(a) {
      return 1 == a.length && "string" == typeof a[0]
    }, q = function(a) {
      var b = a.parentNode;
      b && b.removeChild(a)
    }, t = k.NodeList, n = t._adaptWithCondition, u = t._adaptAsForEach, p = t._adaptAsMap;
    m.extend(t, {_normalize:function(a, b) {
      var d = !0 === a.parse;
      if("string" == typeof a.template) {
        var e = a.templateFunc || c.string && c.string.substitute;
        a = e ? e(a.template, a) : a
      }
      e = typeof a;
      "string" == e || "number" == e ? (a = f.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? m._toArray(a.childNodes) : [a]) : m.isArrayLike(a) ? m.isArray(a) || (a = m._toArray(a)) : a = [a];
      d && (a._runParse = !0);
      return a
    }, _cloneNode:function(a) {
      return a.cloneNode(!0)
    }, _place:function(a, b, d, e) {
      if(!(1 != b.nodeType && "only" == d)) {
        for(var g, n = a.length, h = n - 1;0 <= h;h--) {
          var p = e ? this._cloneNode(a[h]) : a[h];
          if(a._runParse && c.parser && c.parser.parse) {
            g || (g = b.ownerDocument.createElement("div"));
            g.appendChild(p);
            c.parser.parse(g);
            for(p = g.firstChild;g.firstChild;) {
              g.removeChild(g.firstChild)
            }
          }
          h == n - 1 ? f.place(p, b, d) : b.parentNode.insertBefore(p, b);
          b = p
        }
      }
    }, position:p(h.position), attr:n(d(e), g), style:n(d(a), g), addClass:u(b.add), removeClass:u(b.remove), toggleClass:u(b.toggle), replaceClass:u(b.replace), empty:u(f.empty), removeAttr:u(e.remove), marginBox:p(h.getMarginBox), place:function(a, b) {
      var d = k(a)[0];
      return this.forEach(function(a) {
        f.place(a, d, b)
      })
    }, orphan:function(a) {
      return(a ? k._filterResult(this, a) : this).forEach(q)
    }, adopt:function(a, b) {
      return k(a).place(this[0], b)._stash(this)
    }, query:function(a) {
      if(!a) {
        return this
      }
      var b = new t;
      this.map(function(d) {
        k(a, d).forEach(function(a) {
          void 0 !== a && b.push(a)
        })
      });
      return b._stash(this)
    }, filter:function(a) {
      var b = arguments, d = this, e = 0;
      if("string" == typeof a) {
        d = k._filterResult(this, b[0]);
        if(1 == b.length) {
          return d._stash(this)
        }
        e = 1
      }
      return this._wrap(l.filter(d, b[e], b[e + 1]), this)
    }, addContent:function(a, b) {
      a = this._normalize(a, this[0]);
      for(var d = 0, e;e = this[d];d++) {
        a.length ? this._place(a, e, b, 0 < d) : f.empty(e)
      }
      return this
    }});
    return t
  })
}, "dojo/NodeList-manipulate":function() {
  define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "), function(c, k, l, m, b) {
    function f(a) {
      for(;a.childNodes[0] && 1 == a.childNodes[0].nodeType;) {
        a = a.childNodes[0]
      }
      return a
    }
    function h(a, b) {
      "string" == typeof a ? (a = m.toDom(a, b && b.ownerDocument), 11 == a.nodeType && (a = a.childNodes[0])) : 1 == a.nodeType && a.parentNode && (a = a.cloneNode(!1));
      return a
    }
    var e = c.NodeList;
    k.extend(e, {_placeMultiple:function(a, b) {
      for(var e = "string" == typeof a || a.nodeType ? c(a) : a, f = [], h = 0;h < e.length;h++) {
        for(var n = e[h], l = this.length, p = l - 1, k;k = this[p];p--) {
          0 < h && (k = this._cloneNode(k), f.unshift(k)), p == l - 1 ? m.place(k, n, b) : n.parentNode.insertBefore(k, n), n = k
        }
      }
      f.length && (f.unshift(0), f.unshift(this.length - 1), Array.prototype.splice.apply(this, f));
      return this
    }, innerHTML:function(a) {
      return arguments.length ? this.addContent(a, "only") : this[0].innerHTML
    }, text:function(a) {
      if(arguments.length) {
        for(var d = 0, e;e = this[d];d++) {
          1 == e.nodeType && b.set(e, "textContent", a)
        }
        return this
      }
      for(var c = "", d = 0;e = this[d];d++) {
        c += b.get(e, "textContent")
      }
      return c
    }, val:function(a) {
      if(arguments.length) {
        for(var b = k.isArray(a), e = 0, c;c = this[e];e++) {
          var f = c.nodeName.toUpperCase(), h = c.type, m = b ? a[e] : a;
          if("SELECT" == f) {
            f = c.options;
            for(h = 0;h < f.length;h++) {
              var p = f[h];
              p.selected = c.multiple ? -1 != l.indexOf(a, p.value) : p.value == m
            }
          }else {
            "checkbox" == h || "radio" == h ? c.checked = c.value == m : c.value = m
          }
        }
        return this
      }
      if((c = this[0]) && 1 == c.nodeType) {
        a = c.value || "";
        if("SELECT" == c.nodeName.toUpperCase() && c.multiple) {
          a = [];
          f = c.options;
          for(h = 0;h < f.length;h++) {
            p = f[h], p.selected && a.push(p.value)
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
    }, remove:e.prototype.orphan, wrap:function(a) {
      if(this[0]) {
        a = h(a, this[0]);
        for(var b = 0, e;e = this[b];b++) {
          var c = this._cloneNode(a);
          e.parentNode && e.parentNode.replaceChild(c, e);
          f(c).appendChild(e)
        }
      }
      return this
    }, wrapAll:function(a) {
      if(this[0]) {
        a = h(a, this[0]);
        this[0].parentNode.replaceChild(a, this[0]);
        a = f(a);
        for(var b = 0, e;e = this[b];b++) {
          a.appendChild(e)
        }
      }
      return this
    }, wrapInner:function(a) {
      if(this[0]) {
        a = h(a, this[0]);
        for(var b = 0;b < this.length;b++) {
          var e = this._cloneNode(a);
          this._wrap(k._toArray(this[b].childNodes), null, this._NodeListCtor).wrapAll(e)
        }
      }
      return this
    }, replaceWith:function(a) {
      a = this._normalize(a, this[0]);
      for(var b = 0, e;e = this[b];b++) {
        this._place(a, e, "before", 0 < b), e.parentNode.removeChild(e)
      }
      return this
    }, replaceAll:function(a) {
      a = c(a);
      for(var b = this._normalize(this, this[0]), e = 0, f;f = a[e];e++) {
        this._place(b, f, "before", 0 < e), f.parentNode.removeChild(f)
      }
      return this
    }, clone:function() {
      for(var a = [], b = 0;b < this.length;b++) {
        a.push(this._cloneNode(this[b]))
      }
      return this._wrap(a, this, this._NodeListCtor)
    }});
    e.prototype.html || (e.prototype.html = e.prototype.innerHTML);
    return e
  })
}, "lsmb/MaximizeMinimize":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/dom-style", "dojo/on", "dijit/_WidgetBase"], function(c, k, l, m, b) {
    return c("lsmb/MaximizeMinimize", [b], {state:"min", stateData:{max:{nextState:"min", imgURL:"payments/img/up.gif", display:"block"}, min:{nextState:"max", imgURL:"payments/img/down.gif", display:"none"}}, mmNodeId:null, setState:function(b) {
      var c = this.stateData[b];
      this.domNode.src = c.imgURL;
      this.state = b;
      l.set(k.byId(this.mmNodeId), "display", c.display)
    }, toggle:function() {
      this.setState(this.stateData[this.state].nextState)
    }, postCreate:function() {
      var b = this.domNode, c = this;
      this.inherited(arguments);
      this.own(m(b, "click", function() {
        c.toggle()
      }));
      this.setState(this.state)
    }})
  })
}, "lsmb/PrintButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/dom-attr dijit/form/Button lsmb/iframe dojo/dom-form dijit/registry".split(" "), function(c, k, l, m, b, f, h) {
    return c("lsmb/PrintButton", [m], {minimalGET:!0, onClick:function(e) {
      var a = this.valueNode.form;
      if("screen" == a.media.value) {
        var d;
        this.minimalGET ? (d = {action:this.get("value"), type:a.type.value, id:a.id.value, formname:a.formname.value, language_code:a.language_code.value, media:"screen", format:a.format.value}, a.vc && (d.vc = a.vc.value)) : (d = f.toObject(a), d.action = this.get("value"));
        b(l.get(a, "action"), {data:d}).then(function() {
        }, function(a) {
          h.byId("maindiv").report_request_error(a)
        });
        k.stop(e)
      }else {
        return this.inherited(arguments)
      }
    }})
  })
}, "lsmb/iframe":function() {
  define("module require dojo/request/watch dojo/request/util dojo/request/handlers dojo/_base/lang dojo/io-query dojo/query dojo/has dojo/dom dojo/dom-construct dojo/cookie dojo/_base/window dojo/NodeList-manipulate dojo/NodeList-dom".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t) {
    function n(a) {
      return!this.isFulfilled()
    }
    function u(a) {
      return!!this._finished || "requested" !== q(x)
    }
    function p(a, c) {
      var h = a.options, p = d.byId(h.form) || this._tmpForm;
      if(p) {
        for(var n = this._contentToClean, l = 0;l < n.length;l++) {
          for(var k = n[l], m = 0;m < p.childNodes.length;m++) {
            var t = p.childNodes[m];
            if(t.name === k) {
              g.destroy(t);
              break
            }
          }
        }
        this._originalAction && p.setAttribute("action", this._originalAction);
        this._originalMethod && (p.setAttribute("method", this._originalMethod), p.method = this._originalMethod);
        this._originalTarget && (p.setAttribute("target", this._originalTarget), p.target = this._originalTarget)
      }
      this._tmpForm && (g.destroy(this._tmpForm), delete this._tmpForm);
      if(!c && "requested" === q(x)) {
        try {
          var r = s.doc(s._frame), u = h.handleAs;
          if("html" !== u) {
            if("xml" === u) {
              if("html" === r.documentElement.tagName.toLowerCase()) {
                e("a", r.documentElement).orphan();
                var w = r.documentElement.innerText || r.documentElement.textContent, w = w.replace(/>\s+</g, "\x3e\x3c");
                a.text = f.trim(w)
              }else {
                a.data = r
              }
            }else {
              a.text = r.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = r
          }
        }catch(v) {
          c = v
        }
      }
      c ? this.reject(c) : this._finished || "requested" !== q(x) ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function r(a) {
      this._callNext()
    }
    function s(a, b, d) {
      var e = m.parseArgs(a, m.deepCreate(w, b), !0);
      a = e.url;
      b = e.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      s._frame || (s._frame = s.create(s._iframeName, v + "();"));
      a = m.deferred(e, null, n, u, p, r);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, s._currentDfd = null, s._fireNextRequest())
      };
      a._legacy = d;
      s._dfdQueue.push(a);
      s._fireNextRequest();
      l(a);
      return d ? a : a.promise
    }
    var y = c.id.replace(/[\/\.\-]/g, "_"), v = y + "_onload", x = "request-download." + (new Date).getTime();
    t.global[v] || (t.global[v] = function() {
      var a = s._currentDfd;
      a ? a._finished = !0 : s._fireNextRequest()
    });
    var w = {method:"POST"};
    s.create = function(b, d, e) {
      if(t.global[b]) {
        return t.global[b]
      }
      if(t.global.frames[b]) {
        return t.global.frames[b]
      }
      e || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), e = a("config-dojoBlankHtmlUrl") || k.toUrl("dojo/resources/blank.html"));
      d = g.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + e + '" onload\x3d"' + d + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', t.body());
      return t.global[b] = d
    };
    s.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var d = t.doc.getElementsByTagName("iframe");
        if(a.document && d[b].contentWindow && d[b].contentWindow.document) {
          return d[b].contentWindow.document
        }
        if(t.doc.frames[b] && t.doc.frames[b].document) {
          return t.doc.frames[b].document
        }
      }
      return null
    };
    s.setSrc = function(a, b, d) {
      a = t.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        d ? a.location.replace(b) : a.location = b
      }catch(e) {
      }
    };
    s._iframeName = y + "_IoIframe";
    s._notifyStart = function() {
    };
    s._dfdQueue = [];
    s._currentDfd = null;
    s._fireNextRequest = function() {
      var a;
      try {
        if(!s._currentDfd && s._dfdQueue.length) {
          do {
            a = s._currentDfd = s._dfdQueue.shift()
          }while(a && (a.canceled || a.isCanceled && a.isCanceled()) && s._dfdQueue.length);
          if(!a || a.canceled || a.isCanceled && a.isCanceled()) {
            s._currentDfd = null
          }else {
            var b = a.response, c = b.options, p = a._contentToClean = [], n = d.byId(c.form), l = m.notify, k = c.data || null, r;
            k["request.download-cookie"] = x;
            q(x, "requested");
            !a._legacy && "POST" === c.method && !n ? n = a._tmpForm = g.create("form", {name:y + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, t.body()) : "GET" === c.method && (n && -1 < b.url.indexOf("?")) && (r = b.url.slice(b.url.indexOf("?") + 1), k = f.mixin(h.queryToObject(r), k));
            if(n) {
              if(!a._legacy) {
                var u = n;
                do {
                  u = u.parentNode
                }while(u && u !== t.doc.documentElement);
                u || (n.style.position = "absolute", n.style.left = "-1000px", n.style.top = "-1000px", t.body().appendChild(n));
                n.name || (n.name = y + "_form")
              }
              if(k) {
                var u = function(a, b) {
                  g.create("input", {type:"hidden", name:a, value:b}, n);
                  p.push(a)
                }, w;
                for(w in k) {
                  var v = k[w];
                  if(f.isArray(v) && 1 < v.length) {
                    for(r = 0;r < v.length;r++) {
                      u(w, v[r])
                    }
                  }else {
                    var A = e("input[name\x3d'" + w + "']", n);
                    -1 == A.indexOf() ? u(w, v) : A.val(v)
                  }
                }
              }
              var B = n.getAttributeNode("action"), z = n.getAttributeNode("method"), M = n.getAttributeNode("target");
              b.url && (a._originalAction = B ? B.value : null, B ? B.value = b.url : n.setAttribute("action", b.url));
              if(a._legacy) {
                if(!z || !z.value) {
                  z ? z.value = c.method : n.setAttribute("method", c.method)
                }
              }else {
                a._originalMethod = z ? z.value : null, z ? z.value = c.method : n.setAttribute("method", c.method)
              }
              a._originalTarget = M ? M.value : null;
              M ? M.value = s._iframeName : n.setAttribute("target", s._iframeName);
              n.target = s._iframeName;
              l && l.emit("send", b, a.promise.cancel);
              s._notifyStart(b);
              n.submit()
            }else {
              c = "", b.options.data && (c = b.options.data, "string" !== typeof c && (c = h.objectToQuery(c))), u = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + c, l && l.emit("send", b, a.promise.cancel), s._notifyStart(b), s.setSrc(s._frame, u, !0)
            }
          }
        }
      }catch(K) {
        a.reject(K)
      }
    };
    m.addCommonMethods(s, ["GET", "POST"]);
    return s
  })
}, "dojo/cookie":function() {
  define(["./_base/kernel", "./regexp"], function(c, k) {
    c.cookie = function(c, m, b) {
      var f = document.cookie, h;
      if(1 == arguments.length) {
        h = (h = f.match(RegExp("(?:^|; )" + k.escapeString(c) + "\x3d([^;]*)"))) ? decodeURIComponent(h[1]) : void 0
      }else {
        b = b || {};
        f = b.expires;
        if("number" == typeof f) {
          var e = new Date;
          e.setTime(e.getTime() + 864E5 * f);
          f = b.expires = e
        }
        f && f.toUTCString && (b.expires = f.toUTCString());
        m = encodeURIComponent(m);
        var f = c + "\x3d" + m, a;
        for(a in b) {
          f += "; " + a, e = b[a], !0 !== e && (f += "\x3d" + e)
        }
        document.cookie = f
      }
      return h
    };
    c.cookie.isSupported = function() {
      "cookieEnabled" in navigator || (this("__djCookieTest__", "CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" == this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {expires:-1}));
      return navigator.cookieEnabled
    };
    return c.cookie
  })
}, "lsmb/PublishCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(c, k, l, m) {
    return c("lsmb/PublishCheckbox", [m], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "dijit/form/CheckBox":function() {
  define("require dojo/_base/declare dojo/dom-attr dojo/has dojo/query dojo/ready ./ToggleButton ./_CheckBoxMixin dojo/text!./templates/CheckBox.html dojo/NodeList-dom ../a11yclick".split(" "), function(c, k, l, m, b, f, h, e, a) {
    m("dijit-legacy-requires") && f(0, function() {
      c(["dijit/form/RadioButton"])
    });
    return k("dijit.form.CheckBox", [h, e], {templateString:a, baseClass:"dijitCheckBox", _setValueAttr:function(a, b) {
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
  define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function(c, k, l, m) {
    return c("dijit.form.ToggleButton", [l, m], {baseClass:"dijitToggleButton", setChecked:function(b) {
      k.deprecated("setChecked(" + b + ") is deprecated. Use set('checked'," + b + ") instead.", "", "2.0");
      this.set("checked", b)
    }})
  })
}, "dijit/form/_ToggleButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(c, k) {
    return c("dijit.form._ToggleButtonMixin", null, {checked:!1, _aria_attr:"aria-pressed", _onClick:function(c) {
      var k = this.checked;
      this._set("checked", !k);
      var b = this.inherited(arguments);
      this.set("checked", b ? this.checked : k);
      return b
    }, _setCheckedAttr:function(c, m) {
      this._set("checked", c);
      var b = this.focusNode || this.domNode;
      this._created && k.get(b, "checked") != !!c && k.set(b, "checked", !!c);
      b.setAttribute(this._aria_attr, String(c));
      this._handleOnChange(c, m)
    }, postCreate:function() {
      this.inherited(arguments);
      var c = this.focusNode || this.domNode;
      this.checked && c.setAttribute("checked", "checked");
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.checked)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this.set("checked", this.params.checked || !1)
    }})
  })
}, "dijit/form/_CheckBoxMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(c, k) {
    return c("dijit.form._CheckBoxMixin", null, {type:"checkbox", value:"on", readOnly:!1, _aria_attr:"aria-checked", _setReadOnlyAttr:function(c) {
      this._set("readOnly", c);
      k.set(this.focusNode, "readOnly", c)
    }, _setLabelAttr:void 0, _getSubmitValue:function(c) {
      return null == c || "" === c ? "on" : c
    }, _setValueAttr:function(c) {
      c = this._getSubmitValue(c);
      this._set("value", c);
      k.set(this.focusNode, "value", c)
    }, reset:function() {
      this.inherited(arguments);
      this._set("value", this._getSubmitValue(this.params.value));
      k.set(this.focusNode, "value", this.value)
    }, _onClick:function(c) {
      return this.readOnly ? (c.stopPropagation(), c.preventDefault(), !1) : this.inherited(arguments)
    }})
  })
}, "lsmb/PublishNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(c, k, l, m) {
    return c("lsmb/PublishNumberTextBox", m, {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "dijit/form/NumberTextBox":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/i18n dojo/string dojo/number ./RangeBoundTextBox".split(" "), function(c, k, l, m, b, f) {
    var h = function(a) {
      a = a || {};
      var b = l.getLocalization("dojo.cldr", "number", l.normalizeLocale(a.locale)), e = a.pattern ? a.pattern : b[(a.type || "decimal") + "Format"];
      a = "number" == typeof a.places ? a.places : "string" === typeof a.places && 0 < a.places.length ? a.places.replace(/.*,/, "") : -1 != e.indexOf(".") ? e.split(".")[1].replace(/[^#0]/g, "").length : 0;
      return{sep:b.decimal, places:a}
    }, e = c("dijit.form.NumberTextBoxMixin", null, {pattern:function(a) {
      return"(" + (this.focused && this.editOptions ? this._regExpGenerator(k.delegate(a, this.editOptions)) + "|" : "") + this._regExpGenerator(a) + ")"
    }, value:NaN, editOptions:{pattern:"#.######"}, _formatter:b.format, _regExpGenerator:b.regexp, _decimalInfo:h(), postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, _setConstraintsAttr:function(a) {
      var b = "number" == typeof a.places ? a.places : 0;
      b && b++;
      "number" != typeof a.max && (a.max = 9 * Math.pow(10, 15 - b));
      "number" != typeof a.min && (a.min = -9 * Math.pow(10, 15 - b));
      this.inherited(arguments, [a]);
      this.focusNode && (this.focusNode.value && !isNaN(this.value)) && this.set("value", this.value);
      this._decimalInfo = h(a)
    }, _onFocus:function() {
      if(!this.disabled && !this.readOnly) {
        var a = this.get("value");
        "number" == typeof a && !isNaN(a) && (a = this.format(a, this.constraints), void 0 !== a && (this.textbox.value = a));
        this.inherited(arguments)
      }
    }, format:function(a, b) {
      var e = String(a);
      if("number" != typeof a) {
        return e
      }
      if(isNaN(a)) {
        return""
      }
      if(!("rangeCheck" in this && this.rangeCheck(a, b)) && !1 !== b.exponent && /\de[-+]?\d/i.test(e)) {
        return e
      }
      this.editOptions && this.focused && (b = k.mixin({}, b, this.editOptions));
      return this._formatter(a, b)
    }, _parser:b.parse, parse:function(a, b) {
      var e = this._parser(a, k.mixin({}, b, this.editOptions && this.focused ? this.editOptions : {}));
      this.editOptions && (this.focused && isNaN(e)) && (e = this._parser(a, b));
      return e
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
      var a = k.hitch(k.delegate(this, {focused:!0}), "get")("value");
      this._setValueAttr(a, !0)
    }, _setValueAttr:function(a, b, e) {
      if(void 0 !== a && void 0 === e) {
        if(e = String(a), "number" == typeof a) {
          if(isNaN(a)) {
            e = ""
          }else {
            if("rangeCheck" in this && this.rangeCheck(a, this.constraints) || !1 === this.constraints.exponent || !/\de[-+]?\d/i.test(e)) {
              e = void 0
            }
          }
        }else {
          a ? a = void 0 : (e = "", a = NaN)
        }
      }
      this.inherited(arguments, [a, b, e])
    }, _getValueAttr:function() {
      var a = this.inherited(arguments);
      if(isNaN(a) && "" !== this.textbox.value) {
        if(!1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) && RegExp("^" + b._realNumberRegexp(k.delegate(this.constraints)) + "$").test(this.textbox.value)) {
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
      var a = "number" == typeof this.constraints.min, b = "number" == typeof this.constraints.max, e = this.get("value");
      if(isNaN(e) || !a && !b) {
        return this.inherited(arguments)
      }
      var c = e | 0, f = 0 > e, n = -1 != this.textbox.value.indexOf(this._decimalInfo.sep), h = (this.maxLength || 20) - this.textbox.value.length, p = n ? this.textbox.value.split(this._decimalInfo.sep)[1].replace(/[^0-9]/g, "") : "", c = n ? c + "." + p : c + "", h = m.rep("9", h), n = e;
      f ? n = Number(c + h) : e = Number(c + h);
      return!(a && e < this.constraints.min || b && n > this.constraints.max)
    }});
    c = c("dijit.form.NumberTextBox", [f, e], {baseClass:"dijitTextBox dijitNumberTextBox"});
    c.Mixin = e;
    return c
  })
}, "dojo/number":function() {
  define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function(c, k, l, m, b) {
    var f = {};
    c.setObject("dojo.number", f);
    f.format = function(b, a) {
      a = c.mixin({}, a || {});
      var d = k.normalizeLocale(a.locale), d = k.getLocalization("dojo.cldr", "number", d);
      a.customs = d;
      d = a.pattern || d[(a.type || "decimal") + "Format"];
      return isNaN(b) || Infinity == Math.abs(b) ? null : f._applyPattern(b, d, a)
    };
    f._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
    f._applyPattern = function(b, a, d) {
      d = d || {};
      var c = d.customs.group, h = d.customs.decimal;
      a = a.split(";");
      var k = a[0];
      a = a[0 > b ? 1 : 0] || "-" + k;
      if(-1 != a.indexOf("%")) {
        b *= 100
      }else {
        if(-1 != a.indexOf("\u2030")) {
          b *= 1E3
        }else {
          if(-1 != a.indexOf("\u00a4")) {
            c = d.customs.currencyGroup || c, h = d.customs.currencyDecimal || h, a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/, function(a, b, e, c) {
              a = d[["symbol", "currency", "displayName"][e.length - 1]] || d.currency || "";
              return!a ? "" : b + a + c
            })
          }else {
            if(-1 != a.indexOf("E")) {
              throw Error("exponential notation not supported");
            }
          }
        }
      }
      var n = f._numberPatternRE, k = k.match(n);
      if(!k) {
        throw Error("unable to find a number expression in pattern: " + a);
      }
      !1 === d.fractional && (d.places = 0);
      return a.replace(n, f._formatAbsolute(b, k[0], {decimal:h, group:c, places:d.places, round:d.round}))
    };
    f.round = function(b, a, d) {
      d = 10 / (d || 10);
      return(d * +b).toFixed(a) / d
    };
    if(0 == (0.9).toFixed()) {
      var h = f.round;
      f.round = function(b, a, d) {
        var c = Math.pow(10, -a || 0), f = Math.abs(b);
        if(!b || f >= c) {
          c = 0
        }else {
          if(f /= c, 0.5 > f || 0.95 <= f) {
            c = 0
          }
        }
        return h(b, a, d) + (0 < b ? c : -c)
      }
    }
    f._formatAbsolute = function(b, a, d) {
      d = d || {};
      !0 === d.places && (d.places = 0);
      Infinity === d.places && (d.places = 6);
      a = a.split(".");
      var c = "string" == typeof d.places && d.places.indexOf(","), h = d.places;
      c ? h = d.places.substring(c + 1) : 0 <= h || (h = (a[1] || []).length);
      0 > d.round || (b = f.round(b, h, d.round));
      b = String(Math.abs(b)).split(".");
      var k = b[1] || "";
      a[1] || d.places ? (c && (d.places = d.places.substring(0, c)), c = void 0 !== d.places ? d.places : a[1] && a[1].lastIndexOf("0") + 1, c > k.length && (b[1] = m.pad(k, c, "0", !0)), h < k.length && (b[1] = k.substr(0, h))) : b[1] && b.pop();
      h = a[0].replace(",", "");
      c = h.indexOf("0");
      -1 != c && (c = h.length - c, c > b[0].length && (b[0] = m.pad(b[0], c)), -1 == h.indexOf("#") && (b[0] = b[0].substr(b[0].length - c)));
      var h = a[0].lastIndexOf(","), n, l;
      -1 != h && (n = a[0].length - h - 1, a = a[0].substr(0, h), h = a.lastIndexOf(","), -1 != h && (l = a.length - h - 1));
      a = [];
      for(h = b[0];h;) {
        c = h.length - n, a.push(0 < c ? h.substr(c) : h), h = 0 < c ? h.slice(0, c) : "", l && (n = l, l = void 0)
      }
      b[0] = a.reverse().join(d.group || ",");
      return b.join(d.decimal || ".")
    };
    f.regexp = function(b) {
      return f._parseInfo(b).regexp
    };
    f._parseInfo = function(c) {
      c = c || {};
      var a = k.normalizeLocale(c.locale), a = k.getLocalization("dojo.cldr", "number", a), d = c.pattern || a[(c.type || "decimal") + "Format"], g = a.group, h = a.decimal, l = 1;
      if(-1 != d.indexOf("%")) {
        l /= 100
      }else {
        if(-1 != d.indexOf("\u2030")) {
          l /= 1E3
        }else {
          var n = -1 != d.indexOf("\u00a4");
          n && (g = a.currencyGroup || g, h = a.currencyDecimal || h)
        }
      }
      a = d.split(";");
      1 == a.length && a.push("-" + a[0]);
      a = b.buildGroupRE(a, function(a) {
        a = "(?:" + b.escapeString(a, ".") + ")";
        return a.replace(f._numberPatternRE, function(a) {
          var b = {signed:!1, separator:c.strict ? g : [g, ""], fractional:c.fractional, decimal:h, exponent:!1};
          a = a.split(".");
          var d = c.places;
          1 == a.length && 1 != l && (a[1] = "###");
          1 == a.length || 0 === d ? b.fractional = !1 : (void 0 === d && (d = c.pattern ? a[1].lastIndexOf("0") + 1 : Infinity), d && void 0 == c.fractional && (b.fractional = !0), !c.places && d < a[1].length && (d += "," + a[1].length), b.places = d);
          a = a[0].split(",");
          1 < a.length && (b.groupSize = a.pop().length, 1 < a.length && (b.groupSize2 = a.pop().length));
          return"(" + f._realNumberRegexp(b) + ")"
        })
      }, !0);
      n && (a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function(a, d, f, g) {
        a = b.escapeString(c[["symbol", "currency", "displayName"][f.length - 1]] || c.currency || "");
        if(!a) {
          return""
        }
        d = d ? "[\\s\\xa0]" : "";
        g = g ? "[\\s\\xa0]" : "";
        return!c.strict ? (d && (d += "*"), g && (g += "*"), "(?:" + d + a + g + ")?") : d + a + g
      }));
      return{regexp:a.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group:g, decimal:h, factor:l}
    };
    f.parse = function(b, a) {
      var d = f._parseInfo(a), c = RegExp("^" + d.regexp + "$").exec(b);
      if(!c) {
        return NaN
      }
      var h = c[1];
      if(!c[1]) {
        if(!c[2]) {
          return NaN
        }
        h = c[2];
        d.factor *= -1
      }
      h = h.replace(RegExp("[" + d.group + "\\s\\xa0]", "g"), "").replace(d.decimal, ".");
      return h * d.factor
    };
    f._realNumberRegexp = function(c) {
      c = c || {};
      "places" in c || (c.places = Infinity);
      "string" != typeof c.decimal && (c.decimal = ".");
      if(!("fractional" in c) || /^0/.test(c.places)) {
        c.fractional = [!0, !1]
      }
      "exponent" in c || (c.exponent = [!0, !1]);
      "eSigned" in c || (c.eSigned = [!0, !1]);
      var a = f._integerRegexp(c), d = b.buildGroupRE(c.fractional, function(a) {
        var b = "";
        a && 0 !== c.places && (b = "\\" + c.decimal, b = Infinity == c.places ? "(?:" + b + "\\d+)?" : b + ("\\d{" + c.places + "}"));
        return b
      }, !0), g = b.buildGroupRE(c.exponent, function(a) {
        return a ? "([eE]" + f._integerRegexp({signed:c.eSigned}) + ")" : ""
      }), a = a + d;
      d && (a = "(?:(?:" + a + ")|(?:" + d + "))");
      return a + g
    };
    f._integerRegexp = function(c) {
      c = c || {};
      "signed" in c || (c.signed = [!0, !1]);
      "separator" in c ? "groupSize" in c || (c.groupSize = 3) : c.separator = "";
      var a = b.buildGroupRE(c.signed, function(a) {
        return a ? "[-+]" : ""
      }, !0), d = b.buildGroupRE(c.separator, function(a) {
        if(!a) {
          return"(?:\\d+)"
        }
        a = b.escapeString(a);
        " " == a ? a = "\\s" : "\u00a0" == a && (a = "\\s\\xa0");
        var d = c.groupSize, f = c.groupSize2;
        return f ? (a = "(?:0|[1-9]\\d{0," + (f - 1) + "}(?:[" + a + "]\\d{" + f + "})*[" + a + "]\\d{" + d + "})", 0 < d - f ? "(?:" + a + "|(?:0|[1-9]\\d{0," + (d - 1) + "}))" : a) : "(?:0|[1-9]\\d{0," + (d - 1) + "}(?:[" + a + "]\\d{" + d + "})*)"
      }, !0);
      return a + d
    };
    return f
  })
}, "lsmb/PublishRadioButton":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/RadioButton"], function(c, k, l, m) {
    return c("lsmb/PublishRadioButton", [m], {topic:"", publish:function() {
      l.publish(this.topic, this.value)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this.domNode, "change", function() {
        b.publish()
      }))
    }})
  })
}, "dijit/form/RadioButton":function() {
  define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(c, k, l) {
    return c("dijit.form.RadioButton", [k, l], {baseClass:"dijitRadio"})
  })
}, "dijit/form/_RadioButtonMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(c, k, l, m, b, f) {
    return k("dijit.form._RadioButtonMixin", null, {type:"radio", _getRelatedWidgets:function() {
      var c = [];
      b("input[type\x3dradio]", this.focusNode.form || this.ownerDocument).forEach(m.hitch(this, function(b) {
        b.name == this.name && b.form == this.focusNode.form && (b = f.getEnclosingWidget(b)) && c.push(b)
      }));
      return c
    }, _setCheckedAttr:function(b) {
      this.inherited(arguments);
      this._created && b && c.forEach(this._getRelatedWidgets(), m.hitch(this, function(b) {
        b != this && b.checked && b.set("checked", !1)
      }))
    }, _getSubmitValue:function(b) {
      return null == b ? "on" : b
    }, _onClick:function(b) {
      return this.checked || this.disabled ? (b.stopPropagation(), b.preventDefault(), !1) : this.readOnly ? (b.stopPropagation(), b.preventDefault(), c.forEach(this._getRelatedWidgets(), m.hitch(this, function(b) {
        l.set(this.focusNode || this.domNode, "checked", b.checked)
      })), !1) : this.inherited(arguments)
    }})
  })
}, "lsmb/PublishSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(c, k, l, m) {
    return c("lsmb/PublishSelect", [m], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "dijit/form/Select":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormSelectWidget ../_HasDropDown ../DropDownMenu ../MenuItem ../MenuSeparator ../Tooltip ../_KeyNavMixin ../registry dojo/text!./templates/Select.html dojo/i18n!./nls/validate".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u, p, r, s, y) {
    function v(a) {
      return function(b) {
        this._isLoaded ? this.inherited(a, arguments) : this.loadDropDown(e.hitch(this, a, b))
      }
    }
    var x = k("dijit.form._SelectMenu", t, {autoFocus:!0, buildRendering:function() {
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
      e.isArray(b) && (b = b[b.length - 1]);
      b && c.forEach(this.parentWidget._getChildren(), function(d) {
        d.option && b === d.option.value && (a = !0, this.focusChild(d, !1))
      }, this);
      a || this.inherited(arguments)
    }});
    b = k("dijit.form.Select" + (d("dojo-bidi") ? "_NoBidi" : ""), [g, q, r], {baseClass:"dijitSelect dijitValidationTextBox", templateString:y, _buttonInputDisabled:d("ie") ? "disabled" : "", required:!1, state:"", message:"", tooltipPosition:[], emptyLabel:"\x26#160;", _isLoaded:!1, _childrenLoaded:!1, labelType:"html", _fillContent:function() {
      this.inherited(arguments);
      if(this.options.length && !this.value && this.srcNodeRef) {
        var a = this.srcNodeRef.selectedIndex || 0;
        this._set("value", this.options[0 <= a ? a : 0].value)
      }
      this.dropDown = new x({id:this.id + "_menu", parentWidget:this});
      m.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g, "Menu "))
    }, _getMenuItemForOption:function(a) {
      if(!a.value && !a.label) {
        return new u({ownerDocument:this.ownerDocument})
      }
      var b = e.hitch(this, "_setValueAttr", a);
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
      return(a = s.byNode(a)) && a.getParent() == this.dropDown
    }, onKeyboardSearch:function(a, b, d, c) {
      a && this.focusChild(a)
    }, _loadChildren:function(a) {
      if(!0 === a) {
        if(this.dropDown && (delete this.dropDown.focusedChild, this.focusedChild = null), this.options.length) {
          this.inherited(arguments)
        }else {
          c.forEach(this._getChildren(), function(a) {
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
      b && this.focused && this._hasBeenBlurred ? p.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : p.hide(this.domNode);
      this._set("message", b);
      return a
    }, isValid:function() {
      return!this.required || 0 === this.value || !/^\s*$/.test(this.value || "")
    }, reset:function() {
      this.inherited(arguments);
      p.hide(this.domNode);
      this._refreshState()
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this._missingMsg = f.getLocalization("dijit.form", "validate", this.lang).missingMessage
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(a(this.domNode, "selectstart", function(a) {
        a.preventDefault();
        a.stopPropagation()
      }));
      this.domNode.setAttribute("aria-expanded", "false");
      var b = this._keyNavCodes;
      delete b[h.LEFT_ARROW];
      delete b[h.RIGHT_ARROW]
    }, _setStyleAttr:function(a) {
      this.inherited(arguments);
      m.toggle(this.domNode, this.baseClass.replace(/\s+|$/g, "FixedWidth "), !!this.domNode.style.width)
    }, isLoaded:function() {
      return this._isLoaded
    }, loadDropDown:function(a) {
      this._loadChildren(!0);
      this._isLoaded = !0;
      a()
    }, destroy:function(a) {
      this.dropDown && !this.dropDown._destroyed && (this.dropDown.destroyRecursive(a), delete this.dropDown);
      p.hide(this.domNode);
      this.inherited(arguments)
    }, _onFocus:function() {
      this.validate(!0)
    }, _onBlur:function() {
      p.hide(this.domNode);
      this.inherited(arguments);
      this.validate(!1)
    }});
    d("dojo-bidi") && (b = k("dijit.form.Select", b, {_setDisplay:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode)
    }}));
    b._Menu = x;
    b.prototype._onContainerKeydown = v("_onContainerKeydown");
    b.prototype._onContainerKeypress = v("_onContainerKeypress");
    return b
  })
}, "dijit/form/_FormSelectWidget":function() {
  define("dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/data/util/sorter dojo/_base/declare dojo/dom dojo/dom-class dojo/_base/kernel dojo/_base/lang dojo/query dojo/when dojo/store/util/QueryResults ./_FormValueWidget".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t) {
    return b("dijit.form._FormSelectWidget", t, {multiple:!1, options:null, store:null, _setStoreAttr:function(a) {
      this._created && this._deprecatedSetStore(a)
    }, query:null, _setQueryAttr:function(a) {
      this._created && this._deprecatedSetStore(this.store, this.selectedValue, {query:a})
    }, queryOptions:null, _setQueryOptionsAttr:function(a) {
      this._created && this._deprecatedSetStore(this.store, this.selectedValue, {queryOptions:a})
    }, labelAttr:"", onFetch:null, sortByLabel:!0, loadChildrenOnOpen:!1, onLoadDeferred:null, getOptions:function(b) {
      var d = this.options || [];
      if(null == b) {
        return d
      }
      if(a.isArrayLike(b)) {
        return c.map(b, "return this.getOptions(item);", this)
      }
      a.isString(b) && (b = {value:b});
      a.isObject(b) && (c.some(d, function(a, d) {
        for(var c in b) {
          if(!(c in a) || a[c] != b[c]) {
            return!1
          }
        }
        b = d;
        return!0
      }) || (b = -1));
      return 0 <= b && b < d.length ? d[b] : null
    }, addOption:function(b) {
      c.forEach(a.isArrayLike(b) ? b : [b], function(b) {
        b && a.isObject(b) && this.options.push(b)
      }, this);
      this._loadChildren()
    }, removeOption:function(b) {
      b = this.getOptions(a.isArrayLike(b) ? b : [b]);
      c.forEach(b, function(a) {
        a && (this.options = c.filter(this.options, function(b) {
          return b.value !== a.value || b.label !== a.label
        }), this._removeOptionItem(a))
      }, this);
      this._loadChildren()
    }, updateOption:function(b) {
      c.forEach(a.isArrayLike(b) ? b : [b], function(a) {
        var b = this.getOptions({value:a.value}), d;
        if(b) {
          for(d in a) {
            b[d] = a[d]
          }
        }
      }, this);
      this._loadChildren()
    }, setStore:function(a, b, d) {
      e.deprecated(this.declaredClass + "::setStore(store, selectedValue, fetchArgs) is deprecated. Use set('query', fetchArgs.query), set('queryOptions', fetchArgs.queryOptions), set('store', store), or set('value', selectedValue) instead.", "", "2.0");
      this._deprecatedSetStore(a, b, d)
    }, _deprecatedSetStore:function(b, d, e) {
      var f = this.store;
      e = e || {};
      if(f !== b) {
        for(var h;h = this._notifyConnections.pop();) {
          h.remove()
        }
        b.get || (a.mixin(b, {_oldAPI:!0, get:function(a) {
          var b = new k;
          this.fetchItemByIdentity({identity:a, onItem:function(a) {
            b.resolve(a)
          }, onError:function(a) {
            b.reject(a)
          }});
          return b.promise
        }, query:function(b, d) {
          var c = new k(function() {
            e.abort && e.abort()
          });
          c.total = new k;
          var e = this.fetch(a.mixin({query:b, onBegin:function(a) {
            c.total.resolve(a)
          }, onComplete:function(a) {
            c.resolve(a)
          }, onError:function(a) {
            c.reject(a)
          }}, d));
          return new q(c)
        }}), b.getFeatures()["dojo.data.api.Notification"] && (this._notifyConnections = [l.after(b, "onNew", a.hitch(this, "_onNewItem"), !0), l.after(b, "onDelete", a.hitch(this, "_onDeleteItem"), !0), l.after(b, "onSet", a.hitch(this, "_onSetItem"), !0)]));
        this._set("store", b)
      }
      this.options && this.options.length && this.removeOption(this.options);
      this._queryRes && this._queryRes.close && this._queryRes.close();
      this._observeHandle && this._observeHandle.remove && (this._observeHandle.remove(), this._observeHandle = null);
      e.query && this._set("query", e.query);
      e.queryOptions && this._set("queryOptions", e.queryOptions);
      b && b.query && (this._loadingStore = !0, this.onLoadDeferred = new k, this._queryRes = b.query(this.query, this.queryOptions), g(this._queryRes, a.hitch(this, function(f) {
        if(this.sortByLabel && !e.sort && f.length) {
          if(b.getValue) {
            f.sort(m.createSortFunction([{attribute:b.getLabelAttributes(f[0])[0]}], b))
          }else {
            var g = this.labelAttr;
            f.sort(function(a, b) {
              return a[g] > b[g] ? 1 : b[g] > a[g] ? -1 : 0
            })
          }
        }
        e.onFetch && (f = e.onFetch.call(this, f, e));
        c.forEach(f, function(a) {
          this._addOptionForItem(a)
        }, this);
        this._queryRes.observe && (this._observeHandle = this._queryRes.observe(a.hitch(this, function(a, b, d) {
          b == d ? this._onSetItem(a) : (-1 != b && this._onDeleteItem(a), -1 != d && this._onNewItem(a))
        }), !0));
        this._loadingStore = !1;
        this.set("value", "_pendingValue" in this ? this._pendingValue : d);
        delete this._pendingValue;
        this.loadChildrenOnOpen ? this._pseudoLoadChildren(f) : this._loadChildren();
        this.onLoadDeferred.resolve(!0);
        this.onSetStore()
      }), function(a) {
        console.error("dijit.form.Select: " + a.toString());
        this.onLoadDeferred.reject(a)
      }));
      return f
    }, _setValueAttr:function(b, d) {
      this._onChangeActive || (d = null);
      if(this._loadingStore) {
        this._pendingValue = b
      }else {
        if(null != b) {
          b = a.isArrayLike(b) ? c.map(b, function(b) {
            return a.isObject(b) ? b : {value:b}
          }) : a.isObject(b) ? [b] : [{value:b}];
          b = c.filter(this.getOptions(b), function(a) {
            return a && a.value
          });
          var e = this.getOptions() || [];
          if(!this.multiple && (!b[0] || !b[0].value) && e.length) {
            b[0] = e[0]
          }
          c.forEach(e, function(a) {
            a.selected = c.some(b, function(b) {
              return b.value === a.value
            })
          });
          e = c.map(b, function(a) {
            return a.value
          });
          if(!("undefined" == typeof e || "undefined" == typeof e[0])) {
            var f = c.map(b, function(a) {
              return a.label
            });
            this._setDisplay(this.multiple ? f : f[0]);
            this.inherited(arguments, [this.multiple ? e : e[0], d]);
            this._updateSelection()
          }
        }
      }
    }, _getDisplayedValueAttr:function() {
      var a = c.map([].concat(this.get("selectedOptions")), function(a) {
        return a && "label" in a ? a.label : a ? a.value : null
      }, this);
      return this.multiple ? a : a[0]
    }, _setDisplayedValueAttr:function(a) {
      this.set("value", this.getOptions("string" == typeof a ? {label:a} : a))
    }, _loadChildren:function() {
      this._loadingStore || (c.forEach(this._getChildren(), function(a) {
        a.destroyRecursive()
      }), c.forEach(this.options, this._addOptionItem, this), this._updateSelection())
    }, _updateSelection:function() {
      this.focusedChild = null;
      this._set("value", this._getValueFromOpts());
      var a = [].concat(this.value);
      if(a && a[0]) {
        var b = this;
        c.forEach(this._getChildren(), function(d) {
          var e = c.some(a, function(a) {
            return d.option && a === d.option.value
          });
          e && !b.multiple && (b.focusedChild = d);
          h.toggle(d.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), e);
          d.domNode.setAttribute("aria-selected", e ? "true" : "false")
        }, this)
      }
    }, _getValueFromOpts:function() {
      var a = this.getOptions() || [];
      if(!this.multiple && a.length) {
        var b = c.filter(a, function(a) {
          return a.selected
        })[0];
        if(b && b.value) {
          return b.value
        }
        a[0].selected = !0;
        return a[0].value
      }
      return this.multiple ? c.map(c.filter(a, function(a) {
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
      var b = this.store, d = this.labelAttr && this.labelAttr in a ? a[this.labelAttr] : b.getLabel(a);
      return{value:d ? b.getIdentity(a) : null, label:d, item:a}
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
      f.setSelectable(this.focusNode, !1)
    }, _fillContent:function() {
      this.options || (this.options = this.srcNodeRef ? d("\x3e *", this.srcNodeRef).map(function(a) {
        return"separator" === a.getAttribute("type") ? {value:"", label:"", selected:!1, disabled:!1} : {value:a.getAttribute("data-" + e._scopeName + "-value") || a.getAttribute("value"), label:String(a.innerHTML), selected:a.getAttribute("selected") || !1, disabled:a.getAttribute("disabled") || !1}
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
  define(["../../_base/lang"], function(c) {
    var k = {};
    c.setObject("dojo.data.util.sorter", k);
    k.basicComparator = function(c, k) {
      var b = -1;
      null === c && (c = void 0);
      null === k && (k = void 0);
      if(c == k) {
        b = 0
      }else {
        if(c > k || null == c) {
          b = 1
        }
      }
      return b
    };
    k.createSortFunction = function(c, m) {
      function b(a, b, d, c) {
        return function(e, f) {
          var g = c.getValue(e, a), h = c.getValue(f, a);
          return b * d(g, h)
        }
      }
      for(var f = [], h, e = m.comparatorMap, a = k.basicComparator, d = 0;d < c.length;d++) {
        h = c[d];
        var g = h.attribute;
        if(g) {
          h = h.descending ? -1 : 1;
          var q = a;
          e && ("string" !== typeof g && "toString" in g && (g = g.toString()), q = e[g] || a);
          f.push(b(g, h, q, m))
        }
      }
      return function(a, b) {
        for(var d = 0;d < f.length;) {
          var c = f[d++](a, b);
          if(0 !== c) {
            return c
          }
        }
        return 0
      }
    };
    return k
  })
}, "dojo/store/util/QueryResults":function() {
  define(["../../_base/array", "../../_base/lang", "../../when"], function(c, k, l) {
    var m = function(b) {
      function f(e) {
        b[e] = function() {
          var a = arguments, d = l(b, function(b) {
            Array.prototype.unshift.call(a, b);
            return m(c[e].apply(c, a))
          });
          if("forEach" !== e || h) {
            return d
          }
        }
      }
      if(!b) {
        return b
      }
      var h = !!b.then;
      h && (b = k.delegate(b));
      f("forEach");
      f("filter");
      f("map");
      null == b.total && (b.total = l(b, function(b) {
        return b.length
      }));
      return b
    };
    k.setObject("dojo.store.util.QueryResults", m);
    return m
  })
}, "dijit/DropDownMenu":function() {
  define(["dojo/_base/declare", "dojo/keys", "dojo/text!./templates/Menu.html", "./_MenuBase"], function(c, k, l, m) {
    return c("dijit.DropDownMenu", m, {templateString:l, baseClass:"dijitMenu", _onUpArrow:function() {
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
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/lang dojo/mouse dojo/on dojo/window ./a11yclick ./registry ./_Widget ./_CssStateMixin ./_KeyNavContainer ./_TemplatedMixin".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q, t, n, u) {
    return k("dijit._MenuBase", [q, u, n, t], {selected:null, _setSelectedAttr:function(a) {
      this.selected != a && (this.selected && (this.selected._setSelected(!1), this._onChildDeselect(this.selected)), a && a._setSelected(!0), this._set("selected", a))
    }, activated:!1, _setActivatedAttr:function(a) {
      b.toggle(this.domNode, "dijitMenuActive", a);
      b.toggle(this.domNode, "dijitMenuPassive", !a);
      this._set("activated", a)
    }, parentMenu:null, popupDelay:500, passivePopupDelay:Infinity, autoFocus:!1, childSelector:function(a) {
      var b = g.byNode(a);
      return a.parentNode == this.containerNode && b && b.focus
    }, postCreate:function() {
      var a = this, b = "string" == typeof this.childSelector ? this.childSelector : f.hitch(this, "childSelector");
      this.own(e(this.containerNode, e.selector(b, h.enter), function() {
        a.onItemHover(g.byNode(this))
      }), e(this.containerNode, e.selector(b, h.leave), function() {
        a.onItemUnhover(g.byNode(this))
      }), e(this.containerNode, e.selector(b, d), function(b) {
        a.onItemClick(g.byNode(this), b);
        b.stopPropagation()
      }), e(this.containerNode, e.selector(b, "focusin"), function() {
        a._onItemFocus(g.byNode(this))
      }));
      this.inherited(arguments)
    }, onKeyboardSearch:function(a, b, d, c) {
      this.inherited(arguments);
      if(a && (-1 == c || a.popup && 1 == c)) {
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
        var d = /^key/.test(b._origType || b.type) || 0 == b.clientX && 0 == b.clientY;
        this._openItemPopup(a, d)
      }else {
        this.onExecute(), a._onClick ? a._onClick(b) : a.onClick(b)
      }
    }, _openItemPopup:function(a, b) {
      if(a != this.currentPopupItem) {
        this.currentPopupItem && (this._stopPendingCloseTimer(), this.currentPopupItem._closePopup());
        this._stopPopupTimer();
        var d = a.popup;
        d.parentMenu = this;
        this.own(this._mouseoverHandle = e.once(d.domNode, "mouseover", f.hitch(this, "_onPopupHover")));
        var c = this;
        a._openPopup({parent:this, orient:this._orient || ["after", "before"], onCancel:function() {
          b && c.focusChild(a);
          c._cleanUp()
        }, onExecute:f.hitch(this, "_cleanUp", !0), onClose:function() {
          c._mouseoverHandle && (c._mouseoverHandle.remove(), delete c._mouseoverHandle)
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
      this.currentPopupItem && (this.focused && (m.set(this.selected.focusNode, "tabIndex", this.tabIndex), this.selected.focusNode.focus()), this.currentPopupItem._closePopup(), this.currentPopupItem = null)
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
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/keys dojo/_base/lang ./registry ./_Container ./_FocusMixin ./_KeyNavMixin".split(" "), function(c, k, l, m, b, f, h, e, a, d) {
    return k("dijit._KeyNavContainer", [a, d, e], {connectKeyNavHandlers:function(a, d) {
      var e = this._keyNavCodes = {}, h = f.hitch(this, "focusPrev"), k = f.hitch(this, "focusNext");
      c.forEach(a, function(a) {
        e[a] = h
      });
      c.forEach(d, function(a) {
        e[a] = k
      });
      e[b.HOME] = f.hitch(this, "focusFirstChild");
      e[b.END] = f.hitch(this, "focusLastChild")
    }, startupKeyNavChildren:function() {
      m.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
    }, startup:function() {
      this.inherited(arguments);
      c.forEach(this.getChildren(), f.hitch(this, "_startupChild"))
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
      return(a = h.byNode(a)) && a.getParent() == this
    }})
  })
}, "dijit/_KeyNavMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dijit/registry dijit/_FocusMixin".split(" "), function(c, k, l, m, b, f, h, e) {
    return k("dijit._KeyNavMixin", e, {tabIndex:"0", childSelector:null, postCreate:function() {
      this.inherited(arguments);
      l.set(this.domNode, "tabIndex", this.tabIndex);
      if(!this._keyNavCodes) {
        var a = this._keyNavCodes = {};
        a[m.HOME] = b.hitch(this, "focusFirstChild");
        a[m.END] = b.hitch(this, "focusLastChild");
        a[this.isLeftToRight() ? m.LEFT_ARROW : m.RIGHT_ARROW] = b.hitch(this, "_onLeftArrow");
        a[this.isLeftToRight() ? m.RIGHT_ARROW : m.LEFT_ARROW] = b.hitch(this, "_onRightArrow");
        a[m.UP_ARROW] = b.hitch(this, "_onUpArrow");
        a[m.DOWN_ARROW] = b.hitch(this, "_onDownArrow")
      }
      var d = this, a = "string" == typeof this.childSelector ? this.childSelector : b.hitch(this, "childSelector");
      this.own(f(this.domNode, "keypress", b.hitch(this, "_onContainerKeypress")), f(this.domNode, "keydown", b.hitch(this, "_onContainerKeydown")), f(this.domNode, "focus", b.hitch(this, "_onContainerFocus")), f(this.containerNode, f.selector(a, "focusin"), function(a) {
        d._onChildFocus(h.getEnclosingWidget(this), a)
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
    }, _searchString:"", multiCharSearchDuration:1E3, onKeyboardSearch:function(a, b, c, e) {
      a && this.focusChild(a)
    }, _keyboardSearchCompare:function(a, b) {
      var c = a.domNode, c = (a.label || (c.focusNode ? c.focusNode.label : "") || c.innerText || c.textContent || "").replace(/^\s+/, "").substr(0, b.length).toLowerCase();
      return b.length && c == b ? -1 : 0
    }, _onContainerKeydown:function(a) {
      var b = this._keyNavCodes[a.keyCode];
      b ? (b(a, this.focusedChild), a.stopPropagation(), a.preventDefault(), this._searchString = "") : a.keyCode == m.SPACE && (this._searchTimer && !a.ctrlKey && !a.altKey && !a.metaKey) && (a.stopImmediatePropagation(), a.preventDefault(), this._keyboardSearch(a, " "))
    }, _onContainerKeypress:function(a) {
      a.charCode <= m.SPACE || (a.ctrlKey || a.altKey || a.metaKey) || (a.preventDefault(), a.stopPropagation(), this._keyboardSearch(a, String.fromCharCode(a.charCode).toLowerCase()))
    }, _keyboardSearch:function(a, d) {
      var c = null, e, f = 0;
      b.hitch(this, function() {
        this._searchTimer && this._searchTimer.remove();
        this._searchString += d;
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
          var h = this._keyboardSearchCompare(b, e);
          h && 0 == f++ && (c = b);
          if(-1 == h) {
            f = -1;
            break
          }
          b = this._getNextFocusableChild(b, 1)
        }while(b && b != a)
      })();
      this.onKeyboardSearch(c, a, e, f)
    }, _onChildBlur:function() {
    }, _getNextFocusableChild:function(a, b) {
      var c = a;
      do {
        if(a) {
          a = this._getNext(a, b)
        }else {
          if(a = this[0 < b ? "_getFirst" : "_getLast"](), !a) {
            break
          }
        }
        if(null != a && a != c && a.isFocusable()) {
          return a
        }
      }while(a != c);
      return null
    }, _getFirst:function() {
      return null
    }, _getLast:function() {
      return null
    }, _getNext:function(a, b) {
      if(a) {
        for(a = a.domNode;a;) {
          if((a = a[0 > b ? "previousSibling" : "nextSibling"]) && "getAttribute" in a) {
            var c = h.byNode(a);
            if(c) {
              return c
            }
          }
        }
      }
      return null
    }})
  })
}, "dijit/MenuItem":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/kernel dojo/sniff dojo/_base/lang ./_Widget ./_TemplatedMixin ./_Contained ./_CssStateMixin dojo/text!./templates/MenuItem.html".split(" "), function(c, k, l, m, b, f, h, e, a, d, g, q) {
    h = c("dijit.MenuItem" + (f("dojo-bidi") ? "_NoBidi" : ""), [e, a, d, g], {templateString:q, baseClass:"dijitMenuItem", label:"", _setLabelAttr:function(a) {
      this._set("label", a);
      var b = "", d;
      d = a.search(/{\S}/);
      if(0 <= d) {
        var b = a.charAt(d + 1), c = a.substr(0, d);
        a = a.substr(d + 3);
        d = c + b + a;
        a = c + '\x3cspan class\x3d"dijitMenuItemShortcutKey"\x3e' + b + "\x3c/span\x3e" + a
      }else {
        d = a
      }
      this.domNode.setAttribute("aria-label", d + " " + this.accelKey);
      this.containerNode.innerHTML = a;
      this._set("shortcutKey", b)
    }, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, accelKey:"", disabled:!1, _fillContent:function(a) {
      a && !("label" in this.params) && this._set("label", a.innerHTML)
    }, buildRendering:function() {
      this.inherited(arguments);
      l.set(this.containerNode, "id", this.id + "_text");
      this.accelKeyNode && l.set(this.accelKeyNode, "id", this.id + "_accel");
      k.setSelectable(this.domNode, !1)
    }, onClick:function() {
    }, focus:function() {
      try {
        8 == f("ie") && this.containerNode.focus(), this.focusNode.focus()
      }catch(a) {
      }
    }, _setSelected:function(a) {
      m.toggle(this.domNode, "dijitMenuItemSelected", a)
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
    f("dojo-bidi") && (h = c("dijit.MenuItem", h, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      "auto" === this.textDir && this.applyTextDir(this.textDirNode)
    }}));
    return h
  })
}, "dijit/_Contained":function() {
  define(["dojo/_base/declare", "./registry"], function(c, k) {
    return c("dijit._Contained", null, {_getSibling:function(c) {
      var k = this.getParent();
      return k && k._getSiblingOfChild && k._getSiblingOfChild(this, "previous" == c ? -1 : 1) || null
    }, getPreviousSibling:function() {
      return this._getSibling("previous")
    }, getNextSibling:function() {
      return this._getSibling("next")
    }, getIndexInParent:function() {
      var c = this.getParent();
      return!c || !c.getIndexOfChild ? -1 : c.getIndexOfChild(this)
    }})
  })
}, "dijit/MenuSeparator":function() {
  define("dojo/_base/declare dojo/dom ./_WidgetBase ./_TemplatedMixin ./_Contained dojo/text!./templates/MenuSeparator.html".split(" "), function(c, k, l, m, b, f) {
    return c("dijit.MenuSeparator", [l, m, b], {templateString:f, buildRendering:function() {
      this.inherited(arguments);
      k.setSelectable(this.domNode, !1)
    }, isFocusable:function() {
      return!1
    }})
  })
}, "lsmb/SetupLoginButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/request/xhr dojo/dom dojo/dom-style dijit/form/Button".split(" "), function(c, k, l, m, b, f) {
    return c("lsmb/SetupLoginButton", [f], {action:null, onClick:function(b) {
      var c = this, a = m.byId("s-user").value, d = m.byId("s-password").value, f = encodeURIComponent(m.byId("database").value);
      k.stop(b);
      l("login.pl?action\x3dauthenticate\x26company\x3dpostgres\x26dbonly\x3d1", {user:a, password:d}).then(function(a) {
        window.location.href = "setup.pl?action\x3d" + c.action + "\x26database\x3d" + f
      }, function(a) {
        a = a.response.status;
        "454" == a ? alert("Company does not exist") : alert("Access denied (" + a + "): Bad username/password")
      })
    }})
  })
}, "lsmb/SubscribeCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(c, k, l, m) {
    return c("lsmb/SubscribeCheckBox", [m], {topic:"", update:function(b) {
      this.set("checked", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/SubscribeNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(c, k, l, m) {
    return c("lsmb/SubscribeNumberTextBox", m, {topic:"", update:function(b) {
      this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/SubscribeSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(c, k, l, m) {
    return c("lsmb/SubscribeSelect", [m], {topic:"", topicMap:{}, update:function(b) {
      (b = this.topicMap[b]) && this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/SubscribeShowHide":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-style dojo/on dojo/topic dijit/_WidgetBase".split(" "), function(c, k, l, m, b, f) {
    return c("lsmb/SubscribeShowHide", [f], {topic:"", showValues:null, hideValues:null, show:function() {
      l.set(this.domNode, "display", "block")
    }, hide:function() {
      l.set(this.domNode, "display", "none")
    }, update:function(b) {
      this.showValues && -1 !== this.showValues.indexOf(b) ? this.show() : this.hideValues && -1 !== this.hideValues.indexOf(b) ? this.hide() : this.showValues ? this.hideValues || this.hide() : this.show()
    }, postCreate:function() {
      var c = this;
      this.inherited(arguments);
      this.own(b.subscribe(c.topic, function(b) {
        c.update(b)
      }))
    }})
  })
}, "lsmb/TabularForm":function() {
  define("lsmb/layout/TableContainer dojo/dom dojo/dom-class dijit/registry dijit/layout/ContentPane dojo/query dojo/window dojo/_base/declare dijit/form/TextBox".split(" "), function(c, k, l, m, b, f, h, e, a) {
    return e("lsmb/TabularForm", [c], {vertsize:"mobile", vertlabelsize:"mobile", maxCols:1, initOrient:"horiz", constructor:function(a, b) {
      if(void 0 !== b) {
        var c = " " + b.className + " ", e = c.match(/ col-\d+ /);
        e && (this.cols = e[0].replace(/ col-(\d+) /, "$1"));
        if(e = c.match("/ virtsize-w+ /")) {
          this.vertsize = e[0].replace(/ virtsize-(\w+) /, "$1")
        }
        if(e = c.match("/ virtlabel-w+ /")) {
          this.vertlabelsize = e[0].replace(/ virtlabel-(\w+) /, "$1")
        }
      }
      var h = this;
      f("*", h.domNode).forEach(function(a) {
        h.TFRenderElement(a)
      });
      this.maxCols = this.cols;
      this.initOrient = this.orientation
    }, TFRenderElement:function(a) {
      m.byId(a.id) || l.contains(a, "input-row") && TFRenderRow(a)
    }, TFRenderRow:function(a) {
      var c = 0;
      f("*", a).forEach(function(a) {
        TFRenderElement(a);
        ++c
      });
      for(a = c %= this.cols;a < this.cols;++a) {
        var e = new b({content:"\x26nbsp;"});
        this.addChild(e)
      }
    }, resize:function() {
      var a = h.getBox(), b = this.orientation;
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
  define("lsmb/layout/TableContainer", "dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/_base/array dojo/dom-prop dojo/dom-style dijit/_WidgetBase dijit/layout/_LayoutWidget".split(" "), function(c, k, l, m, b, f, h, e, a, d) {
    c = l("lsmb.layout.TableContainer", d, {cols:1, labelWidth:"100", showLabels:!0, orientation:"horiz", spacing:1, customClass:"", postCreate:function() {
      this.inherited(arguments);
      this._children = [];
      this.connect(this, "set", function(a, b) {
        b && ("orientation" == a || "customClass" == a || "cols" == a) && this.layout()
      })
    }, startup:function() {
      if(!this._started && (this.inherited(arguments), !this._initialized)) {
        var a = this.getChildren();
        1 > a.length || (this._initialized = !0, m.add(this.domNode, "dijitTableLayout"), f.forEach(a, function(a) {
          !a.started && !a._started && a.startup()
        }), this.layout(), this.resize())
      }
    }, resize:function() {
      f.forEach(this.getChildren(), function(a) {
        "function" == typeof a.resize && a.resize()
      })
    }, layout:function() {
      function a(b, c, d) {
        if("" != l.customClass) {
          var e = l.customClass + "-" + (c || b.tagName.toLowerCase());
          m.add(b, e);
          2 < arguments.length && m.add(b, e + "-" + d)
        }
      }
      if(this._initialized) {
        var c = this.getChildren(), d = {}, l = this;
        f.forEach(this._children, k.hitch(this, function(a) {
          d[a.id] = a
        }));
        f.forEach(c, k.hitch(this, function(a, b) {
          d[a.id] || this._children.push(a)
        }));
        var u = b.create("table", {width:"100%", "class":"tableContainer-table tableContainer-table-" + this.orientation, cellspacing:this.spacing}, this.domNode), p = b.create("tbody");
        u.appendChild(p);
        a(u, "table", this.orientation);
        var r = b.create("tr", {}, p), s = !this.showLabels || "horiz" == this.orientation ? r : b.create("tr", {}, p), y = this.cols * (this.showLabels ? 2 : 1), v = 0;
        f.forEach(this._children, k.hitch(this, function(c, d) {
          var f = c.colspan || 1;
          1 < f && (f = this.showLabels ? Math.min(y - 1, 2 * f - 1) : Math.min(y, f));
          if(v + f - 1 + (this.showLabels ? 1 : 0) >= y) {
            v = 0, r = b.create("tr", {}, p), s = "horiz" == this.orientation ? r : b.create("tr", {}, p)
          }
          var k;
          if(this.showLabels) {
            if(k = b.create("td", {"class":"tableContainer-labelCell"}, r), c.spanLabel) {
              h.set(k, "vert" == this.orientation ? "rowspan" : "colspan", 2)
            }else {
              a(k, "labelCell");
              var l = {"for":c.get("id")}, l = b.create("label", l, k);
              if(-1 < Number(this.labelWidth) || -1 < String(this.labelWidth).indexOf("%")) {
                e.set(k, "width", 0 > String(this.labelWidth).indexOf("%") ? this.labelWidth + "px" : this.labelWidth)
              }
              l.innerHTML = c.get("label") || c.get("title")
            }
          }
          k = c.spanLabel && k ? k : b.create("td", {"class":"tableContainer-valueCell"}, s);
          1 < f && h.set(k, "colspan", f);
          a(k, "valueCell", d);
          k.appendChild(c.domNode);
          v += f + (this.showLabels ? 1 : 0)
        }));
        this.table && this.table.parentNode.removeChild(this.table);
        f.forEach(c, function(a) {
          "function" == typeof a.layout && a.layout()
        });
        this.table = u;
        this.resize()
      }
    }, destroyDescendants:function(a) {
      f.forEach(this._children, function(b) {
        b.destroyRecursive(a)
      })
    }, _setSpacingAttr:function(a) {
      this.spacing = a;
      this.table && (this.table.cellspacing = Number(a))
    }});
    c.ChildWidgetProperties = {label:"", title:"", spanLabel:!1, colspan:1};
    k.extend(a, c.ChildWidgetProperties);
    return c
  })
}, "dijit/layout/_LayoutWidget":function() {
  define("dojo/_base/lang ../_Widget ../_Container ../_Contained ../Viewport dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style".split(" "), function(c, k, l, m, b, f, h, e, a) {
    return f("dijit.layout._LayoutWidget", [k, l, m], {baseClass:"dijitLayoutContainer", isLayoutContainer:!0, _setTitleAttr:null, buildRendering:function() {
      this.inherited(arguments);
      h.add(this.domNode, "dijitContainer")
    }, startup:function() {
      if(!this._started) {
        this.inherited(arguments);
        var a = this.getParent && this.getParent();
        if(!a || !a.isLayoutContainer) {
          this.resize(), this.own(b.on("resize", c.hitch(this, "resize")))
        }
      }
    }, resize:function(b, f) {
      var h = this.domNode;
      b && e.setMarginBox(h, b);
      var k = f || {};
      c.mixin(k, b || {});
      if(!("h" in k) || !("w" in k)) {
        k = c.mixin(e.getMarginBox(h), k)
      }
      var l = a.getComputedStyle(h), m = e.getMarginExtents(h, l), p = e.getBorderExtents(h, l), k = this._borderBox = {w:k.w - (m.w + p.w), h:k.h - (m.h + p.h)}, m = e.getPadExtents(h, l);
      this._contentBox = {l:a.toPixelValue(h, l.paddingLeft), t:a.toPixelValue(h, l.paddingTop), w:k.w - m.w, h:k.h - m.h};
      this.layout()
    }, layout:function() {
    }, _setupChild:function(a) {
      h.add(a.domNode, this.baseClass + "-child " + (a.baseClass ? this.baseClass + "-" + a.baseClass : ""))
    }, addChild:function(a, b) {
      this.inherited(arguments);
      this._started && this._setupChild(a)
    }, removeChild:function(a) {
      h.remove(a.domNode, this.baseClass + "-child" + (a.baseClass ? " " + this.baseClass + "-" + a.baseClass : ""));
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
"*now":function(c) {
  c(['dojo/i18n!*preload*lsmb/nls/main*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
}}});
require("dojo/parser dojo/query dojo/on dijit/registry dojo/_base/event dojo/hash dojo/topic dojo/dom-class dojo/ready dojo/domReady!".split(" "), function(c, k, l, m, b, f, h, e, a) {
  c.parse().then(function() {
    var c = m.byId("maindiv"), g = 0, q = function(a) {
      if(!a.target && a.href) {
        var c = a.href + "#s";
        l(a, "click", function(a) {
          !a.ctrlKey && (!a.shiftKey && 0 != !a.button) && (b.stop(a), g++, f(c + g.toString(16)))
        });
        var d = window.location;
        a.href = d.origin + d.pathname + d.search + "#" + a.href
      }
    };
    null != c && (c.interceptClick = q, window.location.hash && c.load_link(f()), h.subscribe("/dojo/hashchange", function(a) {
      c.load_link(a)
    }));
    k("a.menu-terminus").forEach(q);
    a(999, function() {
      k("#console-container").forEach(function(a) {
        e.add(a, "done-parsing")
      });
      k("body").forEach(function(a) {
        e.add(a, "done-parsing")
      })
    })
  })
});
require(["dojo/on", "dojo/query", "dojo/dom-class", "dojo/_base/event", "dojo/domReady!"], function(c, k, l, m) {
  k("a.t-submenu").forEach(function(b) {
    c(b, "click", function(c) {
      !c.ctrlKey && (!c.shiftKey && 0 != !c.button) && (m.stop(c), c = b.parentNode, l.contains(c, "menu_closed") ? l.replace(c, "menu_open", "menu_closed") : l.replace(c, "menu_closed", "menu_open"))
    })
  })
});

//# sourceMappingURL=main.js.map