//>>built
require({cache:{"dojo/_base/Deferred":function() {
  define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(d, k, l, g, b, c, m) {
    var h = function() {
    }, a = Object.freeze || function() {
    }, f = d.Deferred = function(e) {
      function q(a) {
        if(d) {
          throw Error("This deferred has already been resolved");
        }
        m = a;
        d = !0;
        t()
      }
      function t() {
        for(var a;!a && v;) {
          var e = v;
          v = v.next;
          if(a = e.progress == h) {
            d = !1
          }
          var f = n ? e.error : e.resolved;
          b("config-useDeferredInstrumentation") && n && k.instrumentRejected && k.instrumentRejected(m, !!f);
          if(f) {
            try {
              var p = f(m);
              p && "function" === typeof p.then ? p.then(c.hitch(e.deferred, "resolve"), c.hitch(e.deferred, "reject"), c.hitch(e.deferred, "progress")) : (f = a && void 0 === p, a && !f && (n = p instanceof Error), e.deferred[f && n ? "reject" : "resolve"](f ? m : p))
            }catch(q) {
              e.deferred.reject(q)
            }
          }else {
            n ? e.deferred.reject(m) : e.deferred.resolve(m)
          }
        }
      }
      var m, d, r, p, n, u, v, y = this.promise = new l;
      this.isResolved = y.isResolved = function() {
        return 0 == p
      };
      this.isRejected = y.isRejected = function() {
        return 1 == p
      };
      this.isFulfilled = y.isFulfilled = function() {
        return 0 <= p
      };
      this.isCanceled = y.isCanceled = function() {
        return r
      };
      this.resolve = this.callback = function(a) {
        this.fired = p = 0;
        this.results = [a, null];
        q(a)
      };
      this.reject = this.errback = function(a) {
        n = !0;
        this.fired = p = 1;
        b("config-useDeferredInstrumentation") && k.instrumentRejected && k.instrumentRejected(a, !!v);
        q(a);
        this.results = [null, a]
      };
      this.progress = function(a) {
        for(var e = v;e;) {
          var f = e.progress;
          f && f(a);
          e = e.next
        }
      };
      this.addCallbacks = function(a, e) {
        this.then(a, e, h);
        return this
      };
      y.then = this.then = function(a, e, b) {
        var n = b == h ? this : new f(y.cancel);
        a = {resolved:a, error:e, progress:b, deferred:n};
        v ? u = u.next = a : v = u = a;
        d && t();
        return n.promise
      };
      var x = this;
      y.cancel = this.cancel = function() {
        if(!d) {
          var a = e && e(x);
          d || (a instanceof Error || (a = new g(a)), a.log = !1, x.reject(a))
        }
        r = !0
      };
      a(y)
    };
    c.extend(f, {addCallback:function(a) {
      return this.addCallbacks(c.hitch.apply(d, arguments))
    }, addErrback:function(a) {
      return this.addCallbacks(null, c.hitch.apply(d, arguments))
    }, addBoth:function(a) {
      var f = c.hitch.apply(d, arguments);
      return this.addCallbacks(f, f)
    }, fired:-1});
    f.when = d.when = m;
    return f
  })
}, "dojo/request/watch":function() {
  define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(d, k, l, g, b, c) {
    function m() {
      for(var e = +new Date, b = 0, c;b < f.length && (c = f[b]);b++) {
        var g = c.response, m = g.options;
        if(c.isCanceled && c.isCanceled() || c.isValid && !c.isValid(g)) {
          f.splice(b--, 1), h._onAction && h._onAction()
        }else {
          if(c.isReady && c.isReady(g)) {
            f.splice(b--, 1), c.handleResponse(g), h._onAction && h._onAction()
          }else {
            if(c.startTime && c.startTime + (m.timeout || 0) < e) {
              f.splice(b--, 1), c.cancel(new k("Timeout exceeded", g)), h._onAction && h._onAction()
            }
          }
        }
      }
      h._onInFlight && h._onInFlight(c);
      f.length || (clearInterval(a), a = null)
    }
    function h(e) {
      e.response.options.timeout && (e.startTime = +new Date);
      e.isFulfilled() || (f.push(e), a || (a = setInterval(m, 50)), e.response.options.sync && m())
    }
    var a = null, f = [];
    h.cancelAll = function() {
      try {
        g.forEach(f, function(a) {
          try {
            a.cancel(new l("All requests canceled."))
          }catch(e) {
          }
        })
      }catch(a) {
      }
    };
    b && (c && b.doc.attachEvent) && c(b.global, "unload", function() {
      h.cancelAll()
    });
    return h
  })
}, "dijit/form/RangeBoundTextBox":function() {
  define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox", "dojo/i18n!./nls/validate"], function(d, k, l) {
    return d("dijit.form.RangeBoundTextBox", l, {rangeMessage:"", rangeCheck:function(g, b) {
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
      this.rangeMessage || (this.messages = k.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage)
    }})
  })
}, "dijit/_Contained":function() {
  define(["dojo/_base/declare", "./registry"], function(d, k) {
    return d("dijit._Contained", null, {_getSibling:function(d) {
      var g = this.getParent();
      return g && g._getSiblingOfChild && g._getSiblingOfChild(this, "previous" == d ? -1 : 1) || null
    }, getPreviousSibling:function() {
      return this._getSibling("previous")
    }, getNextSibling:function() {
      return this._getSibling("next")
    }, getIndexInParent:function() {
      var d = this.getParent();
      return!d || !d.getIndexOfChild ? -1 : d.getIndexOfChild(this)
    }})
  })
}, "dojo/dom-form":function() {
  define(["./_base/lang", "./dom", "./io-query", "./json"], function(d, k, l, g) {
    var b = {fieldToObject:function(b) {
      var g = null;
      if(b = k.byId(b)) {
        var h = b.name, a = (b.type || "").toLowerCase();
        if(h && a && !b.disabled) {
          if("radio" == a || "checkbox" == a) {
            b.checked && (g = b.value)
          }else {
            if(b.multiple) {
              g = [];
              for(b = [b.firstChild];b.length;) {
                for(h = b.pop();h;h = h.nextSibling) {
                  if(1 == h.nodeType && "option" == h.tagName.toLowerCase()) {
                    h.selected && g.push(h.value)
                  }else {
                    h.nextSibling && b.push(h.nextSibling);
                    h.firstChild && b.push(h.firstChild);
                    break
                  }
                }
              }
            }else {
              g = b.value
            }
          }
        }
      }
      return g
    }, toObject:function(c) {
      var g = {};
      c = k.byId(c).elements;
      for(var h = 0, a = c.length;h < a;++h) {
        var f = c[h], e = f.name, q = (f.type || "").toLowerCase();
        if(e && q && 0 > "file|submit|image|reset|button".indexOf(q) && !f.disabled) {
          var t = g, s = e, f = b.fieldToObject(f);
          if(null !== f) {
            var l = t[s];
            "string" == typeof l ? t[s] = [l, f] : d.isArray(l) ? l.push(f) : t[s] = f
          }
          "image" == q && (g[e + ".x"] = g[e + ".y"] = g[e].x = g[e].y = 0)
        }
      }
      return g
    }, toQuery:function(c) {
      return l.objectToQuery(b.toObject(c))
    }, toJson:function(c, d) {
      return g.stringify(b.toObject(c), null, d ? 4 : 0)
    }};
    return b
  })
}, "dijit/form/_TextBoxMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/sniff dojo/keys dojo/_base/lang dojo/on ../main".split(" "), function(d, k, l, g, b, c, m, h) {
    var a = k("dijit.form._TextBoxMixin" + (g("dojo-bidi") ? "_NoBidi" : ""), null, {trim:!1, uppercase:!1, lowercase:!1, propercase:!1, maxLength:"", selectOnClick:!1, placeHolder:"", _getValueAttr:function() {
      return this.parse(this.get("displayedValue"), this.constraints)
    }, _setValueAttr:function(a, e, b) {
      var c;
      void 0 !== a && (c = this.filter(a), "string" != typeof b && (b = null !== c && ("number" != typeof c || !isNaN(c)) ? this.filter(this.format(c, this.constraints)) : "", 0 != this.compare(c, this.filter(this.parse(b, this.constraints))) && (b = null)));
      if(null != b && ("number" != typeof b || !isNaN(b)) && this.textbox.value != b) {
        this.textbox.value = b, this._set("displayedValue", this.get("displayedValue"))
      }
      this.inherited(arguments, [c, e])
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
      this.own(m(this.textbox, "keydown, keypress, paste, cut, compositionend", c.hitch(this, function(a) {
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
            for(var h in b) {
              if(b[h] === a.keyCode) {
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
        var d = {faux:!0}, s;
        for(s in a) {
          /^(layer[XY]|returnValue|keyLocation)$/.test(s) || (h = a[s], "function" != typeof h && "undefined" != typeof h && (d[s] = h))
        }
        c.mixin(d, {charOrCode:e, _wasConsumed:!1, preventDefault:function() {
          d._wasConsumed = !0;
          a.preventDefault()
        }, stopPropagation:function() {
          a.stopPropagation()
        }});
        this._lastInputProducingEvent = d;
        !1 === this.onInput(d) && (d.preventDefault(), d.stopPropagation());
        if(!d._wasConsumed && 9 >= g("ie")) {
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
                this.textbox.value !== this._lastInputEventValue && m.emit(this.textbox, "input", {bubbles:!0})
              })
          }
        }
      })), m(this.textbox, "input", c.hitch(this, "_onInput")), m(this.domNode, "keypress", function(a) {
        a.stopPropagation()
      }))
    }, _blankValue:"", filter:function(a) {
      if(null === a) {
        return this._blankValue
      }
      if("string" != typeof a) {
        return a
      }
      this.trim && (a = c.trim(a));
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
    }, _onFocus:function(b) {
      !this.disabled && !this.readOnly && (this.selectOnClick && "mouse" == b && (this._selectOnClickHandle = m.once(this.domNode, "mouseup, touchend", c.hitch(this, function(e) {
        this._isTextSelected() || a.selectInputText(this.textbox)
      })), this.own(this._selectOnClickHandle), this.defer(function() {
        this._selectOnClickHandle && (this._selectOnClickHandle.remove(), this._selectOnClickHandle = null)
      }, 500)), this.inherited(arguments), this._refreshState())
    }, reset:function() {
      this.textbox.value = "";
      this.inherited(arguments)
    }});
    g("dojo-bidi") && (a = k("dijit.form._TextBoxMixin", a, {_setValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _setDisplayedValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _onInput:function() {
      this.applyTextDir(this.focusNode);
      this.inherited(arguments)
    }}));
    a._setSelectionRange = h._setSelectionRange = function(a, e, b) {
      a.setSelectionRange && a.setSelectionRange(e, b)
    };
    a.selectInputText = h.selectInputText = function(b, e, c) {
      b = l.byId(b);
      isNaN(e) && (e = 0);
      isNaN(c) && (c = b.value ? b.value.length : 0);
      try {
        b.focus(), a._setSelectionRange(b, e, c)
      }catch(h) {
      }
    };
    return a
  })
}, "dijit/form/ToggleButton":function() {
  define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function(d, k, l, g) {
    return d("dijit.form.ToggleButton", [l, g], {baseClass:"dijitToggleButton", setChecked:function(b) {
      k.deprecated("setChecked(" + b + ") is deprecated. Use set('checked'," + b + ") instead.", "", "2.0");
      this.set("checked", b)
    }})
  })
}, "dojo/parser":function() {
  define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r) {
    function p(a) {
      return eval("(" + a + ")")
    }
    function n(a) {
      var e = a._nameCaseMap, b = a.prototype;
      if(!e || e._extendCnt < v) {
        var e = a._nameCaseMap = {}, n;
        for(n in b) {
          "_" !== n.charAt(0) && (e[n.toLowerCase()] = n)
        }
        e._extendCnt = v
      }
      return e
    }
    function u(a, e) {
      var b = a.join();
      if(!y[b]) {
        for(var n = [], f = 0, c = a.length;f < c;f++) {
          var p = a[f];
          n[n.length] = y[p] = y[p] || l.getObject(p) || ~p.indexOf("/") && (e ? e(p) : d(p))
        }
        f = n.shift();
        y[b] = n.length ? f.createSubclass ? f.createSubclass(n) : f.extend.apply(f, n) : f
      }
      return y[b]
    }
    new Date("X");
    var v = 0;
    a.after(l, "extend", function() {
      v++
    }, !0);
    var y = {}, x = {_clearCache:function() {
      v++;
      y = {}
    }, _functionFromScript:function(a, e) {
      var b = "", n = "", f = a.getAttribute(e + "args") || a.getAttribute("args"), c = a.getAttribute("with"), f = (f || "").split(/\s*,\s*/);
      c && c.length && g.forEach(c.split(/\s*,\s*/), function(a) {
        b += "with(" + a + "){";
        n += "}"
      });
      return new Function(f, b + a.innerHTML + n)
    }, instantiate:function(a, e, b) {
      e = e || {};
      b = b || {};
      var n = (b.scope || k._scopeName) + "Type", f = "data-" + (b.scope || k._scopeName) + "-", c = f + "type", p = f + "mixins", h = [];
      g.forEach(a, function(a) {
        var b = n in e ? e[n] : a.getAttribute(c) || a.getAttribute(n);
        if(b) {
          var f = a.getAttribute(p), b = f ? [b].concat(f.split(/\s*,\s*/)) : [b];
          h.push({node:a, types:b})
        }
      });
      return this._instantiate(h, e, b)
    }, _instantiate:function(a, b, e, n) {
      function c(a) {
        !b._started && !e.noStart && g.forEach(a, function(a) {
          "function" === typeof a.startup && !a._started && a.startup()
        });
        return a
      }
      a = g.map(a, function(a) {
        var n = a.ctor || u(a.types, e.contextRequire);
        if(!n) {
          throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
        }
        return this.construct(n, a.node, b, e, a.scripts, a.inherited)
      }, this);
      return n ? f(a).then(c) : c(a)
    }, construct:function(b, f, c, q, d, u) {
      function m(b) {
        P && l.setObject(P, b);
        for(z = 0;z < J.length;z++) {
          a[J[z].advice || "after"](b, J[z].method, l.hitch(b, J[z].func), !0)
        }
        for(z = 0;z < S.length;z++) {
          S[z].call(b)
        }
        for(z = 0;z < Q.length;z++) {
          b.watch(Q[z].prop, Q[z].func)
        }
        for(z = 0;z < R.length;z++) {
          w(b, R[z].event, R[z].func)
        }
        return b
      }
      var r = b && b.prototype;
      q = q || {};
      var v = {};
      q.defaults && l.mixin(v, q.defaults);
      u && l.mixin(v, u);
      var x;
      t("dom-attributes-explicit") ? x = f.attributes : t("dom-attributes-specified-flag") ? x = g.filter(f.attributes, function(a) {
        return a.specified
      }) : (u = (/^input$|^img$/i.test(f.nodeName) ? f : f.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), x = g.map(u.split(/\s+/), function(a) {
        var b = a.toLowerCase();
        return{name:a, value:"LI" == f.nodeName && "value" == a || "enctype" == b ? f.getAttribute(b) : f.getAttributeNode(b).value}
      }));
      var y = q.scope || k._scopeName;
      u = "data-" + y + "-";
      var C = {};
      "dojo" !== y && (C[u + "props"] = "data-dojo-props", C[u + "type"] = "data-dojo-type", C[u + "mixins"] = "data-dojo-mixins", C[y + "type"] = "dojoType", C[u + "id"] = "data-dojo-id");
      for(var z = 0, A, y = [], P, M;A = x[z++];) {
        var E = A.name, F = E.toLowerCase();
        A = A.value;
        switch(C[F] || F) {
          case "data-dojo-type":
          ;
          case "dojotype":
          ;
          case "data-dojo-mixins":
            break;
          case "data-dojo-props":
            M = A;
            break;
          case "data-dojo-id":
          ;
          case "jsid":
            P = A;
            break;
          case "data-dojo-attach-point":
          ;
          case "dojoattachpoint":
            v.dojoAttachPoint = A;
            break;
          case "data-dojo-attach-event":
          ;
          case "dojoattachevent":
            v.dojoAttachEvent = A;
            break;
          case "class":
            v["class"] = f.className;
            break;
          case "style":
            v.style = f.style && f.style.cssText;
            break;
          default:
            if(E in r || (E = n(b)[F] || E), E in r) {
              switch(typeof r[E]) {
                case "string":
                  v[E] = A;
                  break;
                case "number":
                  v[E] = A.length ? Number(A) : NaN;
                  break;
                case "boolean":
                  v[E] = "false" != A.toLowerCase();
                  break;
                case "function":
                  "" === A || -1 != A.search(/[^\w\.]+/i) ? v[E] = new Function(A) : v[E] = l.getObject(A, !1) || new Function(A);
                  y.push(E);
                  break;
                default:
                  F = r[E], v[E] = F && "length" in F ? A ? A.split(/\s*,\s*/) : [] : F instanceof Date ? "" == A ? new Date("") : "now" == A ? new Date : e.fromISOString(A) : F instanceof h ? k.baseUrl + A : p(A)
              }
            }else {
              v[E] = A
            }
        }
      }
      for(x = 0;x < y.length;x++) {
        C = y[x].toLowerCase(), f.removeAttribute(C), f[C] = null
      }
      if(M) {
        try {
          M = p.call(q.propsThis, "{" + M + "}"), l.mixin(v, M)
        }catch(T) {
          throw Error(T.toString() + " in data-dojo-props\x3d'" + M + "'");
        }
      }
      l.mixin(v, c);
      d || (d = b && (b._noScript || r._noScript) ? [] : s("\x3e script[type^\x3d'dojo/']", f));
      var J = [], S = [], Q = [], R = [];
      if(d) {
        for(z = 0;z < d.length;z++) {
          C = d[z], f.removeChild(C), c = C.getAttribute(u + "event") || C.getAttribute("event"), q = C.getAttribute(u + "prop"), M = C.getAttribute(u + "method"), y = C.getAttribute(u + "advice"), x = C.getAttribute("type"), C = this._functionFromScript(C, u), c ? "dojo/connect" == x ? J.push({method:c, func:C}) : "dojo/on" == x ? R.push({event:c, func:C}) : v[c] = C : "dojo/aspect" == x ? J.push({method:M, advice:y, func:C}) : "dojo/watch" == x ? Q.push({prop:q, func:C}) : S.push(C)
        }
      }
      b = (d = b.markupFactory || r.markupFactory) ? d(v, f, b) : new b(v, f);
      return b.then ? b.then(m) : m(b)
    }, scan:function(a, b) {
      function e(a) {
        if(!a.inherited) {
          a.inherited = {};
          var b = a.node, n = e(a.parent), b = {dir:b.getAttribute("dir") || n.dir, lang:b.getAttribute("lang") || n.lang, textDir:b.getAttribute(t) || n.textDir}, f;
          for(f in b) {
            b[f] && (a.inherited[f] = b[f])
          }
        }
        return a.inherited
      }
      var n = [], f = [], c = {}, p = (b.scope || k._scopeName) + "Type", h = "data-" + (b.scope || k._scopeName) + "-", m = h + "type", t = h + "textdir", h = h + "mixins", v = a.firstChild, x = b.inherited;
      if(!x) {
        var r = function(a, b) {
          return a.getAttribute && a.getAttribute(b) || a.parentNode && r(a.parentNode, b)
        }, x = {dir:r(a, "dir"), lang:r(a, "lang"), textDir:r(a, t)}, s;
        for(s in x) {
          x[s] || delete x[s]
        }
      }
      for(var x = {inherited:x}, y, l;;) {
        if(v) {
          if(1 != v.nodeType) {
            v = v.nextSibling
          }else {
            if(y && "script" == v.nodeName.toLowerCase()) {
              (w = v.getAttribute("type")) && /^dojo\/\w/i.test(w) && y.push(v), v = v.nextSibling
            }else {
              if(l) {
                v = v.nextSibling
              }else {
                var w = v.getAttribute(m) || v.getAttribute(p);
                s = v.firstChild;
                if(!w && (!s || 3 == s.nodeType && !s.nextSibling)) {
                  v = v.nextSibling
                }else {
                  l = null;
                  if(w) {
                    var F = v.getAttribute(h);
                    y = F ? [w].concat(F.split(/\s*,\s*/)) : [w];
                    try {
                      l = u(y, b.contextRequire)
                    }catch(T) {
                    }
                    l || g.forEach(y, function(a) {
                      ~a.indexOf("/") && !c[a] && (c[a] = !0, f[f.length] = a)
                    });
                    F = l && !l.prototype._noScript ? [] : null;
                    x = {types:y, ctor:l, parent:x, node:v, scripts:F};
                    x.inherited = e(x);
                    n.push(x)
                  }else {
                    x = {node:v, scripts:y, parent:x}
                  }
                  y = F;
                  l = v.stopParser || l && l.prototype.stopParser && !b.template;
                  v = s
                }
              }
            }
          }
        }else {
          if(!x || !x.node) {
            break
          }
          v = x.node.nextSibling;
          l = !1;
          x = x.parent;
          y = x.scripts
        }
      }
      var J = new q;
      f.length ? (b.contextRequire || d)(f, function() {
        J.resolve(g.filter(n, function(a) {
          if(!a.ctor) {
            try {
              a.ctor = u(a.types, b.contextRequire)
            }catch(e) {
            }
          }
          for(var n = a.parent;n && !n.types;) {
            n = n.parent
          }
          var f = a.ctor && a.ctor.prototype;
          a.instantiateChildren = !(f && f.stopParser && !b.template);
          a.instantiate = !n || n.instantiate && n.instantiateChildren;
          return a.instantiate
        }))
      }) : J.resolve(n);
      return J.promise
    }, _require:function(a, b) {
      var e = p("{" + a.innerHTML + "}"), n = [], f = [], c = new q, h = b && b.contextRequire || d, g;
      for(g in e) {
        n.push(g), f.push(e[g])
      }
      h(f, function() {
        for(var a = 0;a < n.length;a++) {
          l.setObject(n[a], arguments[a])
        }
        c.resolve(arguments)
      });
      return c.promise
    }, _scanAmd:function(a, b) {
      var e = new q, n = e.promise;
      e.resolve(!0);
      var f = this;
      s("script[type\x3d'dojo/require']", a).forEach(function(a) {
        n = n.then(function() {
          return f._require(a, b)
        });
        a.parentNode.removeChild(a)
      });
      return n
    }, parse:function(a, b) {
      a && ("string" != typeof a && !("nodeType" in a)) && (b = a, a = b.rootNode);
      var e = a ? c.byId(a) : m.body();
      b = b || {};
      var n = b.template ? {template:!0} : {}, f = [], p = this, h = this._scanAmd(e, b).then(function() {
        return p.scan(e, b)
      }).then(function(a) {
        return p._instantiate(a, n, b, !0)
      }).then(function(a) {
        return f = f.concat(a)
      }).otherwise(function(a) {
        console.error("dojo/parser::parse() error", a);
        throw a;
      });
      l.mixin(f, h);
      return f
    }};
    k.parser = x;
    b.parseOnLoad && r(100, x, "parse");
    return x
  })
}, "dijit/form/_FormMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/on dojo/window".split(" "), function(d, k, l, g, b, c) {
    return k("dijit.form._FormMixin", null, {state:"", _getDescendantFormWidgets:function(b) {
      var c = [];
      d.forEach(b || this.getChildren(), function(a) {
        "value" in a ? c.push(a) : c = c.concat(this._getDescendantFormWidgets(a.getChildren()))
      }, this);
      return c
    }, reset:function() {
      d.forEach(this._getDescendantFormWidgets(), function(b) {
        b.reset && b.reset()
      })
    }, validate:function() {
      var b = !1;
      return d.every(d.map(this._getDescendantFormWidgets(), function(h) {
        h._hasBeenBlurred = !0;
        var a = h.disabled || !h.validate || h.validate();
        !a && !b && (c.scrollIntoView(h.containerNode || h.domNode), h.focus(), b = !0);
        return a
      }), function(b) {
        return b
      })
    }, setValues:function(b) {
      l.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
      return this.set("value", b)
    }, _setValueAttr:function(b) {
      var c = {};
      d.forEach(this._getDescendantFormWidgets(), function(a) {
        a.name && (c[a.name] || (c[a.name] = [])).push(a)
      });
      for(var a in c) {
        if(c.hasOwnProperty(a)) {
          var f = c[a], e = g.getObject(a, !1, b);
          void 0 !== e && (e = [].concat(e), "boolean" == typeof f[0].checked ? d.forEach(f, function(a) {
            a.set("value", -1 != d.indexOf(e, a._get("value")))
          }) : f[0].multiple ? f[0].set("value", e) : d.forEach(f, function(a, b) {
            a.set("value", e[b])
          }))
        }
      }
    }, getValues:function() {
      l.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, _getValueAttr:function() {
      var b = {};
      d.forEach(this._getDescendantFormWidgets(), function(c) {
        var a = c.name;
        if(a && !c.disabled) {
          var f = c.get("value");
          "boolean" == typeof c.checked ? /Radio/.test(c.declaredClass) ? !1 !== f ? g.setObject(a, f, b) : (f = g.getObject(a, !1, b), void 0 === f && g.setObject(a, null, b)) : (c = g.getObject(a, !1, b), c || (c = [], g.setObject(a, c, b)), !1 !== f && c.push(f)) : (c = g.getObject(a, !1, b), "undefined" != typeof c ? g.isArray(c) ? c.push(f) : g.setObject(a, [c, f], b) : g.setObject(a, f, b))
        }
      });
      return b
    }, isValid:function() {
      return"" == this.state
    }, onValidStateChange:function() {
    }, _getState:function() {
      var b = d.map(this._descendants, function(b) {
        return b.get("state") || ""
      });
      return 0 <= d.indexOf(b, "Error") ? "Error" : 0 <= d.indexOf(b, "Incomplete") ? "Incomplete" : ""
    }, disconnectChildren:function() {
    }, connectChildren:function(b) {
      this._descendants = this._getDescendantFormWidgets();
      d.forEach(this._descendants, function(b) {
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
      this.watch("state", function(b, a, f) {
        this.onValidStateChange("" == f)
      })
    }, destroy:function() {
      this.inherited(arguments)
    }})
  })
}, "dojo/request/iframe":function() {
  define("module require ./watch ./util ./handlers ../_base/lang ../io-query ../query ../has ../dom ../dom-construct ../_base/window ../NodeList-dom".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q) {
    function t(a) {
      return!this.isFulfilled()
    }
    function s(a) {
      return!!this._finished
    }
    function w(a, e) {
      if(!e) {
        try {
          var n = a.options, f = p.doc(p._frame), q = n.handleAs;
          if("html" !== q) {
            if("xml" === q) {
              if("html" === f.documentElement.tagName.toLowerCase()) {
                h("a", f.documentElement).orphan();
                var g = f.documentElement.innerText || f.documentElement.textContent, g = g.replace(/>\s+</g, "\x3e\x3c");
                a.text = c.trim(g)
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
        }catch(d) {
          e = d
        }
      }
      e ? this.reject(e) : this._finished ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function r(a) {
      this._callNext()
    }
    function p(a, b, e) {
      var f = g.parseArgs(a, g.deepCreate(v, b), !0);
      a = f.url;
      b = f.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      p._frame || (p._frame = p.create(p._iframeName, u + "();"));
      a = g.deferred(f, null, t, s, w, r);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, p._currentDfd = null, p._fireNextRequest())
      };
      a._legacy = e;
      p._dfdQueue.push(a);
      p._fireNextRequest();
      l(a);
      return e ? a : a.promise
    }
    var n = d.id.replace(/[\/\.\-]/g, "_"), u = n + "_onload";
    q.global[u] || (q.global[u] = function() {
      var a = p._currentDfd;
      if(a) {
        var b = f.byId(a.response.options.form) || a._tmpForm;
        if(b) {
          for(var n = a._contentToClean, c = 0;c < n.length;c++) {
            for(var h = n[c], q = 0;q < b.childNodes.length;q++) {
              var g = b.childNodes[q];
              if(g.name === h) {
                e.destroy(g);
                break
              }
            }
          }
          a._originalAction && b.setAttribute("action", a._originalAction);
          a._originalMethod && (b.setAttribute("method", a._originalMethod), b.method = a._originalMethod);
          a._originalTarget && (b.setAttribute("target", a._originalTarget), b.target = a._originalTarget)
        }
        a._tmpForm && (e.destroy(a._tmpForm), delete a._tmpForm);
        a._finished = !0
      }else {
        p._fireNextRequest()
      }
    });
    var v = {method:"POST"};
    p.create = function(b, f, n) {
      if(q.global[b]) {
        return q.global[b]
      }
      if(q.global.frames[b]) {
        return q.global.frames[b]
      }
      n || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), n = a("config-dojoBlankHtmlUrl") || k.toUrl("dojo/resources/blank.html"));
      f = e.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + n + '" onload\x3d"' + f + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', q.body());
      return q.global[b] = f
    };
    p.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var e = q.doc.getElementsByTagName("iframe");
        if(a.document && e[b].contentWindow && e[b].contentWindow.document) {
          return e[b].contentWindow.document
        }
        if(q.doc.frames[b] && q.doc.frames[b].document) {
          return q.doc.frames[b].document
        }
      }
      return null
    };
    p.setSrc = function(a, b, e) {
      a = q.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        e ? a.location.replace(b) : a.location = b
      }catch(f) {
      }
    };
    p._iframeName = n + "_IoIframe";
    p._notifyStart = function() {
    };
    p._dfdQueue = [];
    p._currentDfd = null;
    p._fireNextRequest = function() {
      var a;
      try {
        if(!p._currentDfd && p._dfdQueue.length) {
          do {
            a = p._currentDfd = p._dfdQueue.shift()
          }while(a && (a.canceled || a.isCanceled && a.isCanceled()) && p._dfdQueue.length);
          if(!a || a.canceled || a.isCanceled && a.isCanceled()) {
            p._currentDfd = null
          }else {
            var b = a.response, h = b.options, d = a._contentToClean = [], u = f.byId(h.form), v = g.notify, t = h.data || null, s;
            !a._legacy && "POST" === h.method && !u ? u = a._tmpForm = e.create("form", {name:n + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, q.body()) : "GET" === h.method && (u && -1 < b.url.indexOf("?")) && (s = b.url.slice(b.url.indexOf("?") + 1), t = c.mixin(m.queryToObject(s), t));
            if(u) {
              if(!a._legacy) {
                var r = u;
                do {
                  r = r.parentNode
                }while(r && r !== q.doc.documentElement);
                r || (u.style.position = "absolute", u.style.left = "-1000px", u.style.top = "-1000px", q.body().appendChild(u));
                u.name || (u.name = n + "_form")
              }
              if(t) {
                var r = function(a, b) {
                  e.create("input", {type:"hidden", name:a, value:b}, u);
                  d.push(a)
                }, l;
                for(l in t) {
                  var k = t[l];
                  if(c.isArray(k) && 1 < k.length) {
                    for(s = 0;s < k.length;s++) {
                      r(l, k[s])
                    }
                  }else {
                    u[l] ? u[l].value = k : r(l, k)
                  }
                }
              }
              var w = u.getAttributeNode("action"), L = u.getAttributeNode("method"), C = u.getAttributeNode("target");
              b.url && (a._originalAction = w ? w.value : null, w ? w.value = b.url : u.setAttribute("action", b.url));
              if(a._legacy) {
                if(!L || !L.value) {
                  L ? L.value = h.method : u.setAttribute("method", h.method)
                }
              }else {
                a._originalMethod = L ? L.value : null, L ? L.value = h.method : u.setAttribute("method", h.method)
              }
              a._originalTarget = C ? C.value : null;
              C ? C.value = p._iframeName : u.setAttribute("target", p._iframeName);
              u.target = p._iframeName;
              v && v.emit("send", b, a.promise.cancel);
              p._notifyStart(b);
              u.submit()
            }else {
              h = "", b.options.data && (h = b.options.data, "string" !== typeof h && (h = m.objectToQuery(h))), r = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + h, v && v.emit("send", b, a.promise.cancel), p._notifyStart(b), p.setSrc(p._frame, r, !0)
            }
          }
        }
      }catch(z) {
        a.reject(z)
      }
    };
    g.addCommonMethods(p, ["GET", "POST"]);
    return p
  })
}, "dojo/request/handlers":function() {
  define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(d, k, l, g) {
    function b(a) {
      var b = f[a.options.handleAs];
      a.data = b ? b(a) : a.data || a.text;
      return a
    }
    g.add("activex", "undefined" !== typeof ActiveXObject);
    g.add("dom-parser", function(a) {
      return"DOMParser" in a
    });
    var c;
    if(g("activex")) {
      var m = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], h;
      c = function(a) {
        function b(a) {
          try {
            var e = new ActiveXObject(a);
            e.async = !1;
            e.loadXML(c);
            f = e;
            h = a
          }catch(p) {
            return!1
          }
          return!0
        }
        var f = a.data, c = a.text;
        f && (g("dom-qsa2.1") && !f.querySelectorAll && g("dom-parser")) && (f = (new DOMParser).parseFromString(c, "application/xml"));
        if(!f || !f.documentElement) {
          (!h || !b(h)) && l.some(m, b)
        }
        return f
      }
    }
    var a = function(a) {
      return!g("native-xhr2-blob") && "blob" === a.options.handleAs && "undefined" !== typeof Blob ? new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")}) : a.xhr.response
    }, f = {javascript:function(a) {
      return k.eval(a.text || "")
    }, json:function(a) {
      return d.parse(a.text || null)
    }, xml:c, blob:a, arraybuffer:a, document:a};
    b.register = function(a, b) {
      f[a] = b
    };
    return b
  })
}, "dijit/_Container":function() {
  define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct", "dojo/_base/kernel"], function(d, k, l, g) {
    return k("dijit._Container", null, {buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode)
    }, addChild:function(b, c) {
      var g = this.containerNode;
      if(0 < c) {
        for(g = g.firstChild;0 < c;) {
          1 == g.nodeType && c--, g = g.nextSibling
        }
        g ? c = "before" : (g = this.containerNode, c = "last")
      }
      l.place(b.domNode, g, c);
      this._started && !b._started && b.startup()
    }, removeChild:function(b) {
      "number" == typeof b && (b = this.getChildren()[b]);
      b && (b = b.domNode) && b.parentNode && b.parentNode.removeChild(b)
    }, hasChildren:function() {
      return 0 < this.getChildren().length
    }, _getSiblingOfChild:function(b, c) {
      var g = this.getChildren(), h = d.indexOf(g, b);
      return g[h + c]
    }, getIndexOfChild:function(b) {
      return d.indexOf(this.getChildren(), b)
    }})
  })
}, "dojo/cldr/supplemental":function() {
  define(["../_base/lang", "../i18n"], function(d, k) {
    var l = {};
    d.setObject("dojo.cldr.supplemental", l);
    l.getFirstDayOfWeek = function(g) {
      g = {bd:5, mv:5, ae:6, af:6, bh:6, dj:6, dz:6, eg:6, iq:6, ir:6, jo:6, kw:6, ly:6, ma:6, om:6, qa:6, sa:6, sd:6, sy:6, ye:6, ag:0, ar:0, as:0, au:0, br:0, bs:0, bt:0, bw:0, by:0, bz:0, ca:0, cn:0, co:0, dm:0, "do":0, et:0, gt:0, gu:0, hk:0, hn:0, id:0, ie:0, il:0, "in":0, jm:0, jp:0, ke:0, kh:0, kr:0, la:0, mh:0, mm:0, mo:0, mt:0, mx:0, mz:0, ni:0, np:0, nz:0, pa:0, pe:0, ph:0, pk:0, pr:0, py:0, sg:0, sv:0, th:0, tn:0, tt:0, tw:0, um:0, us:0, ve:0, vi:0, ws:0, za:0, zw:0}[l._region(g)];
      return void 0 === g ? 1 : g
    };
    l._region = function(g) {
      g = k.normalizeLocale(g);
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
}, "lsmb/TabularForm":function() {
  define("lsmb/layout/TableContainer dojo/dom dojo/dom-class dijit/registry dijit/layout/ContentPane dojo/query dojo/window dojo/_base/declare dijit/form/TextBox".split(" "), function(d, k, l, g, b, c, m, h, a) {
    return h("lsmb/TabularForm", [d], {vertsize:"mobile", vertlabelsize:"mobile", maxCols:1, initOrient:"horiz", constructor:function(a, b) {
      if(void 0 !== b) {
        var h = " " + b.className + " ", g = h.match(/ col-\d+ /);
        g && (this.cols = g[0].replace(/ col-(\d+) /, "$1"));
        if(g = h.match("/ virtsize-w+ /")) {
          this.vertsize = g[0].replace(/ virtsize-(\w+) /, "$1")
        }
        if(g = h.match("/ virtlabel-w+ /")) {
          this.vertlabelsize = g[0].replace(/ virtlabel-(\w+) /, "$1")
        }
      }
      var d = this;
      c("*", d.domNode).forEach(function(a) {
        d.TFRenderElement(a)
      });
      this.maxCols = this.cols;
      this.initOrient = this.orientation
    }, TFRenderElement:function(a) {
      g.byId(a.id) || l.contains(a, "input-row") && TFRenderRow(a)
    }, TFRenderRow:function(a) {
      var e = 0;
      c("*", a).forEach(function(a) {
        TFRenderElement(a);
        ++e
      });
      for(a = e %= this.cols;a < this.cols;++a) {
        var h = new b({content:"\x26nbsp;"});
        this.addChild(h)
      }
    }, resize:function() {
      var a = m.getBox(), b = this.orientation;
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
}, "dojo/cookie":function() {
  define(["./_base/kernel", "./regexp"], function(d, k) {
    d.cookie = function(d, g, b) {
      var c = document.cookie, m;
      if(1 == arguments.length) {
        m = (m = c.match(RegExp("(?:^|; )" + k.escapeString(d) + "\x3d([^;]*)"))) ? decodeURIComponent(m[1]) : void 0
      }else {
        b = b || {};
        c = b.expires;
        if("number" == typeof c) {
          var h = new Date;
          h.setTime(h.getTime() + 864E5 * c);
          c = b.expires = h
        }
        c && c.toUTCString && (b.expires = c.toUTCString());
        g = encodeURIComponent(g);
        var c = d + "\x3d" + g, a;
        for(a in b) {
          c += "; " + a, h = b[a], !0 !== h && (c += "\x3d" + h)
        }
        document.cookie = c
      }
      return m
    };
    d.cookie.isSupported = function() {
      "cookieEnabled" in navigator || (this("__djCookieTest__", "CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" == this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {expires:-1}));
      return navigator.cookieEnabled
    };
    return d.cookie
  })
}, "dijit/form/TextBox":function() {
  define("dojo/_base/declare dojo/dom-construct dojo/dom-style dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ./_FormValueWidget ./_TextBoxMixin dojo/text!./templates/TextBox.html ../main".split(" "), function(d, k, l, g, b, c, m, h, a, f, e) {
    h = d("dijit.form.TextBox" + (m("dojo-bidi") ? "_NoBidi" : ""), [h, a], {templateString:f, _singleNodeTemplate:'\x3cinput class\x3d"dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point\x3d"textbox,focusNode" autocomplete\x3d"off" type\x3d"${type}" ${!nameAttrSetting} /\x3e', _buttonInputDisabled:m("ie") ? "disabled" : "", baseClass:"dijitTextBox", postMixInProperties:function() {
      var a = this.type.toLowerCase();
      if(this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString == this.constructor.prototype.templateString) {
        this.templateString = this._singleNodeTemplate
      }
      this.inherited(arguments)
    }, postCreate:function() {
      this.inherited(arguments);
      9 > m("ie") && this.defer(function() {
        try {
          var a = l.getComputedStyle(this.domNode);
          if(a) {
            var b = a.fontFamily;
            if(b) {
              var e = this.domNode.getElementsByTagName("INPUT");
              if(e) {
                for(a = 0;a < e.length;a++) {
                  e[a].style.fontFamily = b
                }
              }
            }
          }
        }catch(f) {
        }
      })
    }, _setPlaceHolderAttr:function(a) {
      this._set("placeHolder", a);
      this._phspan || (this._attachPoints.push("_phspan"), this._phspan = k.create("span", {className:"dijitPlaceHolder dijitInputField"}, this.textbox, "after"), this.own(c(this._phspan, "mousedown", function(a) {
        a.preventDefault()
      }), c(this._phspan, "touchend, pointerup, MSPointerUp", b.hitch(this, function() {
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
    }, _setValueAttr:function(a, b, e) {
      this.inherited(arguments);
      this._updatePlaceHolder()
    }, getDisplayedValue:function() {
      g.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
      return this.get("displayedValue")
    }, setDisplayedValue:function(a) {
      g.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
      this.set("displayedValue", a)
    }, _onBlur:function(a) {
      this.disabled || (this.inherited(arguments), this._updatePlaceHolder(), m("mozilla") && this.selectOnClick && (this.textbox.selectionStart = this.textbox.selectionEnd = void 0))
    }, _onFocus:function(a) {
      !this.disabled && !this.readOnly && (this.inherited(arguments), this._updatePlaceHolder())
    }});
    9 > m("ie") && (h.prototype._isTextSelected = function() {
      var a = this.ownerDocument.selection.createRange();
      return a.parentElement() == this.textbox && 0 < a.text.length
    }, e._setSelectionRange = a._setSelectionRange = function(a, b, e) {
      a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveStart("character", -99999), a.moveStart("character", b), a.moveEnd("character", e - b), a.select())
    });
    m("dojo-bidi") && (h = d("dijit.form.TextBox", h, {_setPlaceHolderAttr:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this._phspan)
    }}));
    return h
  })
}, "dojo/NodeList-dom":function() {
  define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function(d, k, l, g, b, c, m, h, a) {
    function f(a) {
      return function(b, e, f) {
        return 2 == arguments.length ? a["string" == typeof e ? "get" : "set"](b, e) : a.set(b, e, f)
      }
    }
    var e = function(a) {
      return 1 == a.length && "string" == typeof a[0]
    }, q = function(a) {
      var b = a.parentNode;
      b && b.removeChild(a)
    }, t = k.NodeList, s = t._adaptWithCondition, w = t._adaptAsForEach, r = t._adaptAsMap;
    g.extend(t, {_normalize:function(a, b) {
      var e = !0 === a.parse;
      if("string" == typeof a.template) {
        var f = a.templateFunc || d.string && d.string.substitute;
        a = f ? f(a.template, a) : a
      }
      f = typeof a;
      "string" == f || "number" == f ? (a = c.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? g._toArray(a.childNodes) : [a]) : g.isArrayLike(a) ? g.isArray(a) || (a = g._toArray(a)) : a = [a];
      e && (a._runParse = !0);
      return a
    }, _cloneNode:function(a) {
      return a.cloneNode(!0)
    }, _place:function(a, b, e, f) {
      if(!(1 != b.nodeType && "only" == e)) {
        for(var h, g = a.length, q = g - 1;0 <= q;q--) {
          var r = f ? this._cloneNode(a[q]) : a[q];
          if(a._runParse && d.parser && d.parser.parse) {
            h || (h = b.ownerDocument.createElement("div"));
            h.appendChild(r);
            d.parser.parse(h);
            for(r = h.firstChild;h.firstChild;) {
              h.removeChild(h.firstChild)
            }
          }
          q == g - 1 ? c.place(r, b, e) : b.parentNode.insertBefore(r, b);
          b = r
        }
      }
    }, position:r(m.position), attr:s(f(h), e), style:s(f(a), e), addClass:w(b.add), removeClass:w(b.remove), toggleClass:w(b.toggle), replaceClass:w(b.replace), empty:w(c.empty), removeAttr:w(h.remove), marginBox:r(m.getMarginBox), place:function(a, b) {
      var e = k(a)[0];
      return this.forEach(function(a) {
        c.place(a, e, b)
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
      this.map(function(e) {
        k(a, e).forEach(function(a) {
          void 0 !== a && b.push(a)
        })
      });
      return b._stash(this)
    }, filter:function(a) {
      var b = arguments, e = this, f = 0;
      if("string" == typeof a) {
        e = k._filterResult(this, b[0]);
        if(1 == b.length) {
          return e._stash(this)
        }
        f = 1
      }
      return this._wrap(l.filter(e, b[f], b[f + 1]), this)
    }, addContent:function(a, b) {
      a = this._normalize(a, this[0]);
      for(var e = 0, f;f = this[e];e++) {
        a.length ? this._place(a, f, b, 0 < e) : c.empty(f)
      }
      return this
    }});
    return t
  })
}, "dijit/layout/_LayoutWidget":function() {
  define("dojo/_base/lang ../_Widget ../_Container ../_Contained ../Viewport dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style".split(" "), function(d, k, l, g, b, c, m, h, a) {
    return c("dijit.layout._LayoutWidget", [k, l, g], {baseClass:"dijitLayoutContainer", isLayoutContainer:!0, _setTitleAttr:null, buildRendering:function() {
      this.inherited(arguments);
      m.add(this.domNode, "dijitContainer")
    }, startup:function() {
      if(!this._started) {
        this.inherited(arguments);
        var a = this.getParent && this.getParent();
        if(!a || !a.isLayoutContainer) {
          this.resize(), this.own(b.on("resize", d.hitch(this, "resize")))
        }
      }
    }, resize:function(b, e) {
      var c = this.domNode;
      b && h.setMarginBox(c, b);
      var g = e || {};
      d.mixin(g, b || {});
      if(!("h" in g) || !("w" in g)) {
        g = d.mixin(h.getMarginBox(c), g)
      }
      var s = a.getComputedStyle(c), m = h.getMarginExtents(c, s), r = h.getBorderExtents(c, s), g = this._borderBox = {w:g.w - (m.w + r.w), h:g.h - (m.h + r.h)}, m = h.getPadExtents(c, s);
      this._contentBox = {l:a.toPixelValue(c, s.paddingLeft), t:a.toPixelValue(c, s.paddingTop), w:g.w - m.w, h:g.h - m.h};
      this.layout()
    }, layout:function() {
    }, _setupChild:function(a) {
      m.add(a.domNode, this.baseClass + "-child " + (a.baseClass ? this.baseClass + "-" + a.baseClass : ""))
    }, addChild:function(a, b) {
      this.inherited(arguments);
      this._started && this._setupChild(a)
    }, removeChild:function(a) {
      m.remove(a.domNode, this.baseClass + "-child" + (a.baseClass ? " " + this.baseClass + "-" + a.baseClass : ""));
      this.inherited(arguments)
    }})
  })
}, "dijit/form/Form":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/sniff ../_Widget ../_TemplatedMixin ./_FormMixin ../layout/_ContentPaneResizeMixin".split(" "), function(d, k, l, g, b, c, m, h) {
    return d("dijit.form.Form", [b, c, m, h], {name:"", action:"", method:"", encType:"", "accept-charset":"", accept:"", target:"", templateString:"\x3cform data-dojo-attach-point\x3d'containerNode' data-dojo-attach-event\x3d'onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}\x3e\x3c/form\x3e", postMixInProperties:function() {
      this.nameAttrSetting = this.name ? "name\x3d'" + this.name + "'" : "";
      this.inherited(arguments)
    }, execute:function() {
    }, onExecute:function() {
    }, _setEncTypeAttr:function(a) {
      k.set(this.domNode, "encType", a);
      g("ie") && (this.domNode.encoding = a);
      this._set("encType", a)
    }, reset:function(a) {
      var b = {returnValue:!0, preventDefault:function() {
        this.returnValue = !1
      }, stopPropagation:function() {
      }, currentTarget:a ? a.target : this.domNode, target:a ? a.target : this.domNode};
      !1 !== this.onReset(b) && b.returnValue && this.inherited(arguments, [])
    }, onReset:function() {
      return!0
    }, _onReset:function(a) {
      this.reset(a);
      a.stopPropagation();
      a.preventDefault();
      return!1
    }, _onSubmit:function(a) {
      var b = this.constructor.prototype;
      if(this.execute != b.execute || this.onExecute != b.onExecute) {
        l.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0"), this.onExecute(), this.execute(this.getValues())
      }
      !1 === this.onSubmit(a) && (a.stopPropagation(), a.preventDefault())
    }, onSubmit:function() {
      return this.isValid()
    }, submit:function() {
      !1 !== this.onSubmit() && this.containerNode.submit()
    }})
  })
}, "lsmb/iframe":function() {
  define("module require dojo/request/watch dojo/request/util dojo/request/handlers dojo/_base/lang dojo/io-query dojo/query dojo/has dojo/dom dojo/dom-construct dojo/cookie dojo/_base/window dojo/NodeList-dom".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t) {
    function s(a) {
      return!this.isFulfilled()
    }
    function w(a) {
      return!!this._finished || "requested" !== q(y)
    }
    function r(a, g) {
      var p = a.options, d = f.byId(p.form) || this._tmpForm;
      if(d) {
        for(var u = this._contentToClean, r = 0;r < u.length;r++) {
          for(var v = u[r], s = 0;s < d.childNodes.length;s++) {
            var m = d.childNodes[s];
            if(m.name === v) {
              e.destroy(m);
              break
            }
          }
        }
        this._originalAction && d.setAttribute("action", this._originalAction);
        this._originalMethod && (d.setAttribute("method", this._originalMethod), d.method = this._originalMethod);
        this._originalTarget && (d.setAttribute("target", this._originalTarget), d.target = this._originalTarget)
      }
      this._tmpForm && (e.destroy(this._tmpForm), delete this._tmpForm);
      if(!g && "requested" === q(y)) {
        try {
          var t = n.doc(n._frame), l = p.handleAs;
          if("html" !== l) {
            if("xml" === l) {
              if("html" === t.documentElement.tagName.toLowerCase()) {
                h("a", t.documentElement).orphan();
                var x = t.documentElement.innerText || t.documentElement.textContent, x = x.replace(/>\s+</g, "\x3e\x3c");
                a.text = c.trim(x)
              }else {
                a.data = t
              }
            }else {
              a.text = t.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = t
          }
        }catch(k) {
          g = k
        }
      }
      g ? this.reject(g) : this._finished || "requested" !== q(y) ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function p(a) {
      this._callNext()
    }
    function n(a, b, e) {
      var c = g.parseArgs(a, g.deepCreate(x, b), !0);
      a = c.url;
      b = c.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      n._frame || (n._frame = n.create(n._iframeName, v + "();"));
      a = g.deferred(c, null, s, w, r, p);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, n._currentDfd = null, n._fireNextRequest())
      };
      a._legacy = e;
      n._dfdQueue.push(a);
      n._fireNextRequest();
      l(a);
      return e ? a : a.promise
    }
    var u = d.id.replace(/[\/\.\-]/g, "_"), v = u + "_onload", y = "request-download." + (new Date).getTime();
    t.global[v] || (t.global[v] = function() {
      var a = n._currentDfd;
      a ? a._finished = !0 : n._fireNextRequest()
    });
    var x = {method:"POST"};
    n.create = function(b, c, f) {
      if(t.global[b]) {
        return t.global[b]
      }
      if(t.global.frames[b]) {
        return t.global.frames[b]
      }
      f || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), f = a("config-dojoBlankHtmlUrl") || k.toUrl("dojo/resources/blank.html"));
      c = e.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + f + '" onload\x3d"' + c + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', t.body());
      return t.global[b] = c
    };
    n.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var e = t.doc.getElementsByTagName("iframe");
        if(a.document && e[b].contentWindow && e[b].contentWindow.document) {
          return e[b].contentWindow.document
        }
        if(t.doc.frames[b] && t.doc.frames[b].document) {
          return t.doc.frames[b].document
        }
      }
      return null
    };
    n.setSrc = function(a, b, e) {
      a = t.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        e ? a.location.replace(b) : a.location = b
      }catch(c) {
      }
    };
    n._iframeName = u + "_IoIframe";
    n._notifyStart = function() {
    };
    n._dfdQueue = [];
    n._currentDfd = null;
    n._fireNextRequest = function() {
      var a;
      try {
        if(!n._currentDfd && n._dfdQueue.length) {
          do {
            a = n._currentDfd = n._dfdQueue.shift()
          }while(a && (a.canceled || a.isCanceled && a.isCanceled()) && n._dfdQueue.length);
          if(!a || a.canceled || a.isCanceled && a.isCanceled()) {
            n._currentDfd = null
          }else {
            var b = a.response, h = b.options, p = a._contentToClean = [], d = f.byId(h.form), r = g.notify, v = h.data || null, s;
            v["request.download-cookie"] = y;
            q(y, "requested");
            !a._legacy && "POST" === h.method && !d ? d = a._tmpForm = e.create("form", {name:u + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, t.body()) : "GET" === h.method && (d && -1 < b.url.indexOf("?")) && (s = b.url.slice(b.url.indexOf("?") + 1), v = c.mixin(m.queryToObject(s), v));
            if(d) {
              if(!a._legacy) {
                var l = d;
                do {
                  l = l.parentNode
                }while(l && l !== t.doc.documentElement);
                l || (d.style.position = "absolute", d.style.left = "-1000px", d.style.top = "-1000px", t.body().appendChild(d));
                d.name || (d.name = u + "_form")
              }
              if(v) {
                var l = function(a, b) {
                  e.create("input", {type:"hidden", name:a, value:b}, d);
                  p.push(a)
                }, x;
                for(x in v) {
                  var k = v[x];
                  if(c.isArray(k) && 1 < k.length) {
                    for(s = 0;s < k.length;s++) {
                      l(x, k[s])
                    }
                  }else {
                    d[x] ? d[x].value = k : l(x, k)
                  }
                }
              }
              var w = d.getAttributeNode("action"), z = d.getAttributeNode("method"), A = d.getAttributeNode("target");
              b.url && (a._originalAction = w ? w.value : null, w ? w.value = b.url : d.setAttribute("action", b.url));
              if(a._legacy) {
                if(!z || !z.value) {
                  z ? z.value = h.method : d.setAttribute("method", h.method)
                }
              }else {
                a._originalMethod = z ? z.value : null, z ? z.value = h.method : d.setAttribute("method", h.method)
              }
              a._originalTarget = A ? A.value : null;
              A ? A.value = n._iframeName : d.setAttribute("target", n._iframeName);
              d.target = n._iframeName;
              r && r.emit("send", b, a.promise.cancel);
              n._notifyStart(b);
              d.submit()
            }else {
              h = "", b.options.data && (h = b.options.data, "string" !== typeof h && (h = m.objectToQuery(h))), l = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + h, r && r.emit("send", b, a.promise.cancel), n._notifyStart(b), n.setSrc(n._frame, l, !0)
            }
          }
        }
      }catch(P) {
        a.reject(P)
      }
    };
    g.addCommonMethods(n, ["GET", "POST"]);
    return n
  })
}, "dijit/layout/utils":function() {
  define(["dojo/_base/array", "dojo/dom-class", "dojo/dom-geometry", "dojo/dom-style", "dojo/_base/lang"], function(d, k, l, g, b) {
    function c(c, a) {
      var f = c.resize ? c.resize(a) : l.setMarginBox(c.domNode, a);
      f ? b.mixin(c, f) : (b.mixin(c, l.getMarginBox(c.domNode)), b.mixin(c, a))
    }
    var m = {marginBox2contentBox:function(b, a) {
      var c = g.getComputedStyle(b), e = l.getMarginExtents(b, c), d = l.getPadBorderExtents(b, c);
      return{l:g.toPixelValue(b, c.paddingLeft), t:g.toPixelValue(b, c.paddingTop), w:a.w - (e.w + d.w), h:a.h - (e.h + d.h)}
    }, layoutChildren:function(h, a, f, e, g) {
      a = b.mixin({}, a);
      k.add(h, "dijitLayoutContainer");
      f = d.filter(f, function(a) {
        return"center" != a.region && "client" != a.layoutAlign
      }).concat(d.filter(f, function(a) {
        return"center" == a.region || "client" == a.layoutAlign
      }));
      d.forEach(f, function(b) {
        var f = b.domNode, h = b.region || b.layoutAlign;
        if(!h) {
          throw Error("No region setting for " + b.id);
        }
        var d = f.style;
        d.left = a.l + "px";
        d.top = a.t + "px";
        d.position = "absolute";
        k.add(f, "dijitAlign" + (h.substring(0, 1).toUpperCase() + h.substring(1)));
        f = {};
        e && e == b.id && (f["top" == b.region || "bottom" == b.region ? "h" : "w"] = g);
        "leading" == h && (h = b.isLeftToRight() ? "left" : "right");
        "trailing" == h && (h = b.isLeftToRight() ? "right" : "left");
        "top" == h || "bottom" == h ? (f.w = a.w, c(b, f), a.h -= b.h, "top" == h ? a.t += b.h : d.top = a.t + a.h + "px") : "left" == h || "right" == h ? (f.h = a.h, c(b, f), a.w -= b.w, "left" == h ? a.l += b.w : d.left = a.l + a.w + "px") : ("client" == h || "center" == h) && c(b, a)
      })
    }};
    b.setObject("dijit.layout.utils", m);
    return m
  })
}, "dijit/layout/ContentPane":function() {
  define("dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/i18n!../nls/loading dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r, p) {
    return f("dijit.layout.ContentPane", [l, g, b], {href:"", content:"", extractContent:!1, parseOnLoad:!0, parserScope:d._scopeName, preventCache:!1, preload:!1, refreshOnShow:!1, loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e", errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e", isLoaded:!1, 
    baseClass:"dijitContentPane", ioArgs:{}, onLoadDeferred:null, _setTitleAttr:null, stopParser:!0, template:!1, markupFactory:function(a, b, e) {
      var c = new e(a, b);
      return!c.href && c._contentSetter && c._contentSetter.parseDeferred && !c._contentSetter.parseDeferred.isFulfilled() ? c._contentSetter.parseDeferred.then(function() {
        return c
      }) : c
    }, create:function(a, b) {
      if((!a || !a.template) && b && !("href" in a) && !("content" in a)) {
        b = q.byId(b);
        for(var e = b.ownerDocument.createDocumentFragment();b.firstChild;) {
          e.appendChild(b.firstChild)
        }
        a = k.delegate(a, {content:e})
      }
      this.inherited(arguments, [a, b])
    }, postMixInProperties:function() {
      this.inherited(arguments);
      var a = r.getLocalization("dijit", "loading", this.lang);
      this.loadingMessage = c.substitute(this.loadingMessage, a);
      this.errorMessage = c.substitute(this.errorMessage, a)
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
      d.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
      return this.set("href", a)
    }, _setHrefAttr:function(a) {
      this.cancel();
      this.onLoadDeferred = new e(k.hitch(this, "cancel"));
      this.onLoadDeferred.then(k.hitch(this, "onLoad"));
      this._set("href", a);
      this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
      return this.onLoadDeferred
    }, setContent:function(a) {
      d.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
      this.set("content", a)
    }, _setContentAttr:function(a) {
      this._set("href", "");
      this.cancel();
      this.onLoadDeferred = new e(k.hitch(this, "cancel"));
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
      this.onLoadDeferred = new e(k.hitch(this, "cancel"));
      this.onLoadDeferred.then(k.hitch(this, "onLoad"));
      this._load();
      return this.onLoadDeferred
    }, _load:function() {
      this._setContent(this.onDownloadStart(), !0);
      var a = this, b = {preventCache:this.preventCache || this.refreshOnShow, url:this.href, handleAs:"text"};
      k.isObject(this.ioArgs) && k.mixin(b, this.ioArgs);
      var e = this._xhrDfd = (this.ioMethod || w.get)(b), c;
      e.then(function(b) {
        c = b;
        try {
          return a._isDownloaded = !0, a._setContent(b, !1)
        }catch(e) {
          a._onError("Content", e)
        }
      }, function(b) {
        e.canceled || a._onError("Download", b);
        delete a._xhrDfd;
        return b
      }).then(function() {
        a.onDownloadEnd();
        delete a._xhrDfd;
        return c
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
      var e = this._contentSetter;
      a.forEach(this.getChildren(), function(a) {
        a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b);
        a._destroyed = !0
      });
      e && (a.forEach(e.parseResults, function(a) {
        a._destroyed || (a.destroyRecursive ? a.destroyRecursive(b) : a.destroy && a.destroy(b), a._destroyed = !0)
      }), delete e.parseResults);
      b || s.empty(this.containerNode);
      delete this._singleChild
    }, _setContent:function(a, b) {
      this.destroyDescendants();
      var e = this._contentSetter;
      e && e instanceof m._ContentSetter || (e = this._contentSetter = new m._ContentSetter({node:this.containerNode, _onError:k.hitch(this, this._onError), onContentError:k.hitch(this, function(a) {
        a = this.onContentError(a);
        try {
          this.containerNode.innerHTML = a
        }catch(b) {
          console.error("Fatal " + this.id + " could not change content due to " + b.message, b)
        }
      })}));
      var c = k.mixin({cleanContent:this.cleanContent, extractContent:this.extractContent, parseContent:!a.domNode && this.parseOnLoad, parserScope:this.parserScope, startup:!1, dir:this.dir, lang:this.lang, textDir:this.textDir}, this._contentSetterParams || {}), c = e.set(k.isObject(a) && a.domNode ? a.domNode : a, c), f = this;
      return p(c && c.then ? c : e.parseDeferred, function() {
        delete f._contentSetterParams;
        b || (f._started && (f._startChildren(), f._scheduleLayout()), f._onLoadHandler(a))
      })
    }, _onError:function(a, b, e) {
      this.onLoadDeferred.reject(b);
      a = this["on" + a + "Error"].call(this, b);
      e ? console.error(e, b) : a && this._setContent(a, !0)
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
}, "dojo/date/locale":function() {
  define("../_base/lang ../_base/array ../date ../cldr/supplemental ../i18n ../regexp ../string ../i18n!../cldr/nls/gregorian module".split(" "), function(d, k, l, g, b, c, m, h, a) {
    function f(a, b, e, c) {
      return c.replace(/([a-z])\1*/ig, function(f) {
        var h, d, q = f.charAt(0);
        f = f.length;
        var r = ["abbr", "wide", "narrow"];
        switch(q) {
          case "G":
            h = b[4 > f ? "eraAbbr" : "eraNames"][0 > a.getFullYear() ? 0 : 1];
            break;
          case "y":
            h = a.getFullYear();
            switch(f) {
              case 1:
                break;
              case 2:
                if(!e.fullYear) {
                  h = String(h);
                  h = h.substr(h.length - 2);
                  break
                }
              ;
              default:
                d = !0
            }
            break;
          case "Q":
          ;
          case "q":
            h = Math.ceil((a.getMonth() + 1) / 3);
            d = !0;
            break;
          case "M":
          ;
          case "L":
            h = a.getMonth();
            3 > f ? (h += 1, d = !0) : (q = ["months", "L" == q ? "standAlone" : "format", r[f - 3]].join("-"), h = b[q][h]);
            break;
          case "w":
            h = t._getWeekOfYear(a, 0);
            d = !0;
            break;
          case "d":
            h = a.getDate();
            d = !0;
            break;
          case "D":
            h = t._getDayOfYear(a);
            d = !0;
            break;
          case "e":
          ;
          case "c":
            if(h = a.getDay(), 2 > f) {
              h = (h - g.getFirstDayOfWeek(e.locale) + 8) % 7;
              break
            }
          ;
          case "E":
            h = a.getDay();
            3 > f ? (h += 1, d = !0) : (q = ["days", "c" == q ? "standAlone" : "format", r[f - 3]].join("-"), h = b[q][h]);
            break;
          case "a":
            q = 12 > a.getHours() ? "am" : "pm";
            h = e[q] || b["dayPeriods-format-wide-" + q];
            break;
          case "h":
          ;
          case "H":
          ;
          case "K":
          ;
          case "k":
            d = a.getHours();
            switch(q) {
              case "h":
                h = d % 12 || 12;
                break;
              case "H":
                h = d;
                break;
              case "K":
                h = d % 12;
                break;
              case "k":
                h = d || 24
            }
            d = !0;
            break;
          case "m":
            h = a.getMinutes();
            d = !0;
            break;
          case "s":
            h = a.getSeconds();
            d = !0;
            break;
          case "S":
            h = Math.round(a.getMilliseconds() * Math.pow(10, f - 3));
            d = !0;
            break;
          case "v":
          ;
          case "z":
            if(h = t._getZone(a, !0, e)) {
              break
            }
            f = 4;
          case "Z":
            q = t._getZone(a, !1, e);
            q = [0 >= q ? "+" : "-", m.pad(Math.floor(Math.abs(q) / 60), 2), m.pad(Math.abs(q) % 60, 2)];
            4 == f && (q.splice(0, 0, "GMT"), q.splice(3, 0, ":"));
            h = q.join("");
            break;
          default:
            throw Error("dojo.date.locale.format: invalid pattern char: " + c);
        }
        d && (h = m.pad(h, f));
        return h
      })
    }
    function e(a, b, e, c) {
      var f = function(a) {
        return a
      };
      b = b || f;
      e = e || f;
      c = c || f;
      var h = a.match(/(''|[^'])+/g), d = "'" == a.charAt(0);
      k.forEach(h, function(a, c) {
        a ? (h[c] = (d ? e : b)(a.replace(/''/g, "'")), d = !d) : h[c] = ""
      });
      return c(h.join(""))
    }
    function q(a, b, e, f) {
      f = c.escapeString(f);
      e.strict || (f = f.replace(" a", " ?a"));
      return f.replace(/([a-z])\1*/ig, function(c) {
        var f;
        f = c.charAt(0);
        var h = c.length, d = "", g = "";
        e.strict ? (1 < h && (d = "0{" + (h - 1) + "}"), 2 < h && (g = "0{" + (h - 2) + "}")) : (d = "0?", g = "0{0,2}");
        switch(f) {
          case "y":
            f = "\\d{2,4}";
            break;
          case "M":
          ;
          case "L":
            2 < h ? (f = b["months-" + ("L" == f ? "standAlone" : "format") + "-" + s[h - 3]].slice(0).join("|"), e.strict || (f = f.replace(/\./g, ""), f = "(?:" + f + ")\\.?")) : f = "1[0-2]|" + d + "[1-9]";
            break;
          case "D":
            f = "[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|" + d + "[1-9][0-9]|" + g + "[1-9]";
            break;
          case "d":
            f = "3[01]|[12]\\d|" + d + "[1-9]";
            break;
          case "w":
            f = "[1-4][0-9]|5[0-3]|" + d + "[1-9]";
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            f = ".+?";
            break;
          case "h":
            f = "1[0-2]|" + d + "[1-9]";
            break;
          case "k":
            f = "1[01]|" + d + "\\d";
            break;
          case "H":
            f = "1\\d|2[0-3]|" + d + "\\d";
            break;
          case "K":
            f = "1\\d|2[0-4]|" + d + "[1-9]";
            break;
          case "m":
          ;
          case "s":
            f = "[0-5]\\d";
            break;
          case "S":
            f = "\\d{" + h + "}";
            break;
          case "a":
            h = e.am || b["dayPeriods-format-wide-am"];
            d = e.pm || b["dayPeriods-format-wide-pm"];
            f = h + "|" + d;
            e.strict || (h != h.toLowerCase() && (f += "|" + h.toLowerCase()), d != d.toLowerCase() && (f += "|" + d.toLowerCase()), -1 != f.indexOf(".") && (f += "|" + f.replace(/\./g, "")));
            f = f.replace(/\./g, "\\.");
            break;
          default:
            f = ".*"
        }
        a && a.push(c);
        return"(" + f + ")"
      }).replace(/[\xa0 ]/g, "[\\s\\xa0]")
    }
    var t = {};
    d.setObject(a.id.replace(/\//g, "."), t);
    t._getZone = function(a, b, e) {
      return b ? l.getTimezoneName(a) : a.getTimezoneOffset()
    };
    t.format = function(a, c) {
      c = c || {};
      var h = b.normalizeLocale(c.locale), g = c.formatLength || "short", h = t._getGregorianBundle(h), q = [], r = d.hitch(this, f, a, h, c);
      if("year" == c.selector) {
        return e(h["dateFormatItem-yyyy"] || "yyyy", r)
      }
      var s;
      "date" != c.selector && (s = c.timePattern || h["timeFormat-" + g]) && q.push(e(s, r));
      "time" != c.selector && (s = c.datePattern || h["dateFormat-" + g]) && q.push(e(s, r));
      return 1 == q.length ? q[0] : h["dateTimeFormat-" + g].replace(/\'/g, "").replace(/\{(\d+)\}/g, function(a, b) {
        return q[b]
      })
    };
    t.regexp = function(a) {
      return t._parseInfo(a).regexp
    };
    t._parseInfo = function(a) {
      a = a || {};
      var f = b.normalizeLocale(a.locale), f = t._getGregorianBundle(f), c = a.formatLength || "short", h = a.datePattern || f["dateFormat-" + c], g = a.timePattern || f["timeFormat-" + c], c = "date" == a.selector ? h : "time" == a.selector ? g : f["dateTimeFormat-" + c].replace(/\{(\d+)\}/g, function(a, b) {
        return[g, h][b]
      }), r = [];
      return{regexp:e(c, d.hitch(this, q, r, f, a)), tokens:r, bundle:f}
    };
    t.parse = function(a, b) {
      var e = /[\u200E\u200F\u202A\u202E]/g, f = t._parseInfo(b), c = f.tokens, h = f.bundle, e = RegExp("^" + f.regexp.replace(e, "") + "$", f.strict ? "" : "i").exec(a && a.replace(e, ""));
      if(!e) {
        return null
      }
      var d = ["abbr", "wide", "narrow"], g = [1970, 0, 1, 0, 0, 0, 0], q = "", e = k.every(e, function(a, e) {
        if(!e) {
          return!0
        }
        var f = c[e - 1], p = f.length, f = f.charAt(0);
        switch(f) {
          case "y":
            if(2 != p && b.strict) {
              g[0] = a
            }else {
              if(100 > a) {
                a = Number(a), f = "" + (new Date).getFullYear(), p = 100 * f.substring(0, 2), f = Math.min(Number(f.substring(2, 4)) + 20, 99), g[0] = a < f ? p + a : p - 100 + a
              }else {
                if(b.strict) {
                  return!1
                }
                g[0] = a
              }
            }
            break;
          case "M":
          ;
          case "L":
            if(2 < p) {
              if(p = h["months-" + ("L" == f ? "standAlone" : "format") + "-" + d[p - 3]].concat(), b.strict || (a = a.replace(".", "").toLowerCase(), p = k.map(p, function(a) {
                return a.replace(".", "").toLowerCase()
              })), a = k.indexOf(p, a), -1 == a) {
                return!1
              }
            }else {
              a--
            }
            g[1] = a;
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            p = h["days-" + ("c" == f ? "standAlone" : "format") + "-" + d[p - 3]].concat();
            b.strict || (a = a.toLowerCase(), p = k.map(p, function(a) {
              return a.toLowerCase()
            }));
            a = k.indexOf(p, a);
            if(-1 == a) {
              return!1
            }
            break;
          case "D":
            g[1] = 0;
          case "d":
            g[2] = a;
            break;
          case "a":
            p = b.am || h["dayPeriods-format-wide-am"];
            f = b.pm || h["dayPeriods-format-wide-pm"];
            if(!b.strict) {
              var r = /\./g;
              a = a.replace(r, "").toLowerCase();
              p = p.replace(r, "").toLowerCase();
              f = f.replace(r, "").toLowerCase()
            }
            if(b.strict && a != p && a != f) {
              return!1
            }
            q = a == f ? "p" : a == p ? "a" : "";
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
            g[3] = a;
            break;
          case "m":
            g[4] = a;
            break;
          case "s":
            g[5] = a;
            break;
          case "S":
            g[6] = a
        }
        return!0
      }), f = +g[3];
      "p" === q && 12 > f ? g[3] = f + 12 : "a" === q && 12 == f && (g[3] = 0);
      f = new Date(g[0], g[1], g[2], g[3], g[4], g[5], g[6]);
      b.strict && f.setFullYear(g[0]);
      var r = c.join(""), s = -1 != r.indexOf("d"), r = -1 != r.indexOf("M");
      if(!e || r && f.getMonth() > g[1] || s && f.getDate() > g[2]) {
        return null
      }
      if(r && f.getMonth() < g[1] || s && f.getDate() < g[2]) {
        f = l.add(f, "hour", 1)
      }
      return f
    };
    var s = ["abbr", "wide", "narrow"], w = [], r = {};
    t.addCustomFormats = function(a, b) {
      w.push({pkg:a, name:b});
      r = {}
    };
    t._getGregorianBundle = function(a) {
      if(r[a]) {
        return r[a]
      }
      var e = {};
      k.forEach(w, function(f) {
        f = b.getLocalization(f.pkg, f.name, a);
        e = d.mixin(e, f)
      }, this);
      return r[a] = e
    };
    t.addCustomFormats(a.id.replace(/\/date\/locale$/, ".cldr"), "gregorian");
    t.getNames = function(a, b, e, f) {
      var c;
      f = t._getGregorianBundle(f);
      a = [a, e, b];
      "standAlone" == e && (e = a.join("-"), c = f[e], 1 == c[0] && (c = void 0));
      a[1] = "format";
      return(c || f[a.join("-")]).concat()
    };
    t.isWeekend = function(a, b) {
      var e = g.getWeekend(b), f = (a || new Date).getDay();
      e.end < e.start && (e.end += 7, f < e.start && (f += 7));
      return f >= e.start && f <= e.end
    };
    t._getDayOfYear = function(a) {
      return l.difference(new Date(a.getFullYear(), 0, 1, a.getHours()), a) + 1
    };
    t._getWeekOfYear = function(a, b) {
      1 == arguments.length && (b = 0);
      var e = (new Date(a.getFullYear(), 0, 1)).getDay(), f = Math.floor((t._getDayOfYear(a) + (e - b + 7) % 7 - 1) / 7);
      e == b && f++;
      return f
    };
    return t
  })
}, "dojo/errors/RequestTimeoutError":function() {
  define(["./create", "./RequestError"], function(d, k) {
    return d("RequestTimeoutError", null, k, {dojoType:"timeout"})
  })
}, "dijit/form/DateTextBox":function() {
  define(["dojo/_base/declare", "../Calendar", "./_DateTimeTextBox"], function(d, k, l) {
    return d("dijit.form.DateTextBox", l, {baseClass:"dijitTextBox dijitComboBox dijitDateTextBox", popupClass:k, _selector:"date", maxHeight:Infinity, value:new Date("")})
  })
}, "dojo/json":function() {
  define(["./has"], function(d) {
    var k = "undefined" != typeof JSON;
    d.add("json-parse", k);
    d.add("json-stringify", k && '{"a":1}' == JSON.stringify({a:0}, function(g, b) {
      return b || 1
    }));
    if(d("json-stringify")) {
      return JSON
    }
    var l = function(g) {
      return('"' + g.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
    };
    return{parse:d("json-parse") ? JSON.parse : function(g, b) {
      if(b && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(g)) {
        throw new SyntaxError("Invalid characters in JSON");
      }
      return eval("(" + g + ")")
    }, stringify:function(g, b, c) {
      function d(a, f, e) {
        b && (a = b(e, a));
        var g;
        g = typeof a;
        if("number" == g) {
          return isFinite(a) ? a + "" : "null"
        }
        if("boolean" == g) {
          return a + ""
        }
        if(null === a) {
          return"null"
        }
        if("string" == typeof a) {
          return l(a)
        }
        if("function" == g || "undefined" == g) {
          return h
        }
        if("function" == typeof a.toJSON) {
          return d(a.toJSON(e), f, e)
        }
        if(a instanceof Date) {
          return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(b, e, f) {
            b = a["getUTC" + e]() + (f ? 1 : 0);
            return 10 > b ? "0" + b : b
          })
        }
        if(a.valueOf() !== a) {
          return d(a.valueOf(), f, e)
        }
        var t = c ? f + c : "", s = c ? " " : "", k = c ? "\n" : "";
        if(a instanceof Array) {
          var s = a.length, r = [];
          for(e = 0;e < s;e++) {
            g = d(a[e], t, e), "string" != typeof g && (g = "null"), r.push(k + t + g)
          }
          return"[" + r.join(",") + k + f + "]"
        }
        r = [];
        for(e in a) {
          var p;
          if(a.hasOwnProperty(e)) {
            if("number" == typeof e) {
              p = '"' + e + '"'
            }else {
              if("string" == typeof e) {
                p = l(e)
              }else {
                continue
              }
            }
            g = d(a[e], t, e);
            "string" == typeof g && r.push(k + t + p + ":" + s + g)
          }
        }
        return"{" + r.join(",") + k + f + "}"
      }
      var h;
      "string" == typeof b && (c = b, b = null);
      return d(g, "", "")
    }}
  })
}, "dojo/_base/json":function() {
  define(["./kernel", "../json"], function(d, k) {
    d.fromJson = function(d) {
      return eval("(" + d + ")")
    };
    d._escapeString = k.stringify;
    d.toJsonIndentStr = "\t";
    d.toJson = function(l, g) {
      return k.stringify(l, function(b, c) {
        if(c) {
          var g = c.__json__ || c.json;
          if("function" == typeof g) {
            return g.call(c)
          }
        }
        return c
      }, g && d.toJsonIndentStr)
    };
    return d
  })
}, "dijit/form/_FormWidgetMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff dojo/window ../a11y".split(" "), function(d, k, l, g, b, c, m, h, a, f) {
    return k("dijit.form._FormWidgetMixin", null, {name:"", alt:"", value:"", type:"text", "aria-label":"focusNode", tabIndex:"0", _setTabIndexAttr:"focusNode", disabled:!1, intermediateChanges:!1, scrollOnFocus:!0, _setIdAttr:"focusNode", _setDisabledAttr:function(a) {
      this._set("disabled", a);
      /^(button|input|select|textarea|optgroup|option|fieldset)$/i.test(this.focusNode.tagName) ? l.set(this.focusNode, "disabled", a) : this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
      this.valueNode && l.set(this.valueNode, "disabled", a);
      a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "_setTabIndexAttr" in this ? this._setTabIndexAttr : "focusNode", d.forEach(b.isArray(a) ? a : [a], function(a) {
        a = this[a];
        h("webkit") || f.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
      }, this)) : "" != this.tabIndex && this.set("tabIndex", this.tabIndex)
    }, _onFocus:function(e) {
      if("mouse" == e && this.isFocusable()) {
        var f = this.own(m(this.focusNode, "focus", function() {
          g.remove();
          f.remove()
        }))[0], c = h("pointer-events") ? "pointerup" : h("MSPointer") ? "MSPointerUp" : h("touch-events") ? "touchend, mouseup" : "mouseup", g = this.own(m(this.ownerDocumentBody, c, b.hitch(this, function(a) {
          g.remove();
          f.remove();
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
    }, compare:function(a, b) {
      return"number" == typeof a && "number" == typeof b ? isNaN(a) && isNaN(b) ? 0 : a - b : a > b ? 1 : a < b ? -1 : 0
    }, onChange:function() {
    }, _onChangeActive:!1, _handleOnChange:function(a, b) {
      if(void 0 == this._lastValueReported && (null === b || !this._onChangeActive)) {
        this._resetValue = this._lastValueReported = a
      }
      this._pendingOnChange = this._pendingOnChange || typeof a != typeof this._lastValueReported || 0 != this.compare(a, this._lastValueReported);
      if((this.intermediateChanges || b || void 0 === b) && this._pendingOnChange) {
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
}, "dojo/i18n":function() {
  define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "), function(d, k, l, g, b, c, m, h, a) {
    l.add("dojo-preload-i18n-Api", 1);
    m = d.i18n = {};
    var f = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, e = function(a, b, f, e) {
      var c = [f + e];
      b = b.split("-");
      for(var h = "", g = 0;g < b.length;g++) {
        if(h += (h ? "-" : "") + b[g], !a || a[h]) {
          c.push(f + h + "/" + e), c.specificity = h
        }
      }
      return c
    }, q = {}, t = function(a, b, f) {
      f = f ? f.toLowerCase() : d.locale;
      a = a.replace(/\./g, "/");
      b = b.replace(/\./g, "/");
      return/root/i.test(f) ? a + "/nls/" + b : a + "/nls/" + f + "/" + b
    }, s = d.getL10nName = function(b, f, e) {
      return a.id + "!" + t(b, f, e)
    }, w = function(a, b, f, h, g, d) {
      a([b], function(n) {
        var p = c.clone(n.root || n.ROOT), r = e(!n._v1x && n, g, f, h);
        a(r, function() {
          for(var a = 1;a < r.length;a++) {
            p = c.mixin(c.clone(p), arguments[a])
          }
          q[b + "/" + g] = p;
          p.$locale = r.specificity;
          d()
        })
      })
    }, r = function(a) {
      var f = b.extraLocale || [], f = c.isArray(f) ? f : [f];
      f.push(a);
      return f
    }, p = function(a, b, e) {
      var n = f.exec(a), p = n[1] + "/", s = n[5] || n[4], m = p + s, u = (n = n[5] && n[4]) || d.locale || "", k = m + "/" + u, n = n ? [u] : r(u), t = n.length, B = function() {
        --t || e(c.delegate(q[k]))
      }, u = a.split("*"), A = "preload" == u[1];
      if(l("dojo-preload-i18n-Api")) {
        A && (q[a] || (q[a] = 1, x(u[2], h.parse(u[3]), 1, b)), e(1));
        if(!(u = A)) {
          v && y.push([a, b, e]), u = v && !q[k]
        }
        if(u) {
          return
        }
      }else {
        if(A) {
          e(1);
          return
        }
      }
      g.forEach(n, function(a) {
        var f = m + "/" + a;
        l("dojo-preload-i18n-Api") && G(f);
        q[f] ? B() : w(b, m, p, s, a, B)
      })
    };
    if(l("dojo-unit-tests")) {
      var n = m.unitTests = []
    }
    l("dojo-preload-i18n-Api");
    var u = m.normalizeLocale = function(a) {
      a = a ? a.toLowerCase() : d.locale;
      return"root" == a ? "ROOT" : a
    }, v = 0, y = [], x = m._preloadLocalizations = function(a, b, f, e) {
      function h(a, b) {
        e([a], b)
      }
      function n(a, b) {
        for(var f = a.split("-");f.length;) {
          if(b(f.join("-"))) {
            return
          }
          f.pop()
        }
        b("ROOT")
      }
      function r() {
        for(--v;!v && y.length;) {
          p.apply(null, y.shift())
        }
      }
      function s(f) {
        f = u(f);
        n(f, function(d) {
          if(0 <= g.indexOf(b, d)) {
            var p = a.replace(/\./g, "/") + "_" + d;
            v++;
            h(p, function(a) {
              for(var b in a) {
                var h = a[b], g = b.match(/(.+)\/([^\/]+)$/), p;
                if(g && (p = g[2], g = g[1] + "/", h._localized)) {
                  var s;
                  if("ROOT" === d) {
                    var l = s = h._localized;
                    delete h._localized;
                    l.root = h;
                    q[k.toAbsMid(b)] = l
                  }else {
                    s = h._localized, q[k.toAbsMid(g + p + "/" + d)] = h
                  }
                  d !== f && function(a, b, h, g) {
                    var d = [], p = [];
                    n(f, function(f) {
                      g[f] && (d.push(k.toAbsMid(a + f + "/" + b)), p.push(k.toAbsMid(a + b + "/" + f)))
                    });
                    d.length ? (v++, e(d, function() {
                      for(var e = d.length - 1;0 <= e;e--) {
                        h = c.mixin(c.clone(h), arguments[e]), q[p[e]] = h
                      }
                      q[k.toAbsMid(a + b + "/" + f)] = c.clone(h);
                      r()
                    })) : q[k.toAbsMid(a + b + "/" + f)] = h
                  }(g, p, h, s)
                }
              }
              r()
            });
            return!0
          }
          return!1
        })
      }
      e = e || k;
      s();
      g.forEach(d.config.extraLocale, s)
    }, G = function() {
    }, B = {}, G = function(a) {
      for(var b, f = a.split("/"), e = d.global[f[0]], c = 1;e && c < f.length - 1;e = e[f[c++]]) {
      }
      e && ((b = e[f[c]]) || (b = e[f[c].replace(/-/g, "_")]), b && (q[a] = b));
      return b
    };
    m.getLocalization = function(a, b, f) {
      var e;
      a = t(a, b, f);
      p(a, k, function(a) {
        e = a
      });
      return e
    };
    l("dojo-unit-tests") && n.push(function(a) {
      a.register("tests.i18n.unit", function(a) {
        var b;
        b = (void 0)("{prop:1}", G, "nonsense", B);
        a.is({prop:1}, b);
        a.is(void 0, b[1]);
        b = (void 0)("({prop:1})", G, "nonsense", B);
        a.is({prop:1}, b);
        a.is(void 0, b[1]);
        b = (void 0)("{'prop-x':1}", G, "nonsense", B);
        a.is({"prop-x":1}, b);
        a.is(void 0, b[1]);
        b = (void 0)("({'prop-x':1})", G, "nonsense", B);
        a.is({"prop-x":1}, b);
        a.is(void 0, b[1]);
        b = (void 0)("define({'prop-x':1})", G, "nonsense", B);
        a.is(B, b);
        a.is({"prop-x":1}, B.result);
        b = (void 0)("define('some/module', {'prop-x':1})", G, "nonsense", B);
        a.is(B, b);
        a.is({"prop-x":1}, B.result);
        b = (void 0)("this is total nonsense and should throw an error", G, "nonsense", B);
        a.is(b instanceof Error, !0)
      })
    });
    return c.mixin(m, {dynamic:!0, normalize:function(a, b) {
      return/^\./.test(a) ? b(a) : a
    }, load:p, cache:q, getL10nName:s})
  })
}, "dijit/form/ValidationTextBox":function() {
  define("dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/i18n ./TextBox ../Tooltip dojo/text!./templates/ValidationTextBox.html dojo/i18n!./nls/validate".split(" "), function(d, k, l, g, b, c, m) {
    var h = d("dijit.form.ValidationTextBox", b, {templateString:m, required:!1, promptMessage:"", invalidMessage:"$_unset_$", missingMessage:"$_unset_$", message:"", constraints:{}, pattern:".*", regExp:"", regExpGen:function() {
    }, state:"", tooltipPosition:[], _deprecateRegExp:function(a, b) {
      b != h.prototype[a] && (k.deprecated("ValidationTextBox id\x3d" + this.id + ", set('" + a + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", b))
    }, _setRegExpGenAttr:function(a) {
      this._deprecateRegExp("regExpGen", a);
      this._set("regExpGen", this._computeRegexp)
    }, _setRegExpAttr:function(a) {
      this._deprecateRegExp("regExp", a)
    }, _setValueAttr:function() {
      this.inherited(arguments);
      this._refreshState()
    }, validator:function(a, b) {
      return RegExp("^(?:" + this._computeRegexp(b) + ")" + (this.required ? "" : "?") + "$").test(a) && (!this.required || !this._isEmpty(a)) && (this._isEmpty(a) || void 0 !== this.parse(a, b))
    }, _isValidSubset:function() {
      return 0 == this.textbox.value.search(this._partialre)
    }, isValid:function() {
      return this.validator(this.textbox.value, this.get("constraints"))
    }, _isEmpty:function(a) {
      return(this.trim ? /^\s*$/ : /^$/).test(a)
    }, getErrorMessage:function() {
      var a = "$_unset_$" == this.invalidMessage ? this.messages.invalidMessage : !this.invalidMessage ? this.promptMessage : this.invalidMessage, b = "$_unset_$" == this.missingMessage ? this.messages.missingMessage : !this.missingMessage ? a : this.missingMessage;
      return this.required && this._isEmpty(this.textbox.value) ? b : a
    }, getPromptMessage:function() {
      return this.promptMessage
    }, _maskValidSubsetError:!0, validate:function(a) {
      var b = "", e = this.disabled || this.isValid(a);
      e && (this._maskValidSubsetError = !0);
      var c = this._isEmpty(this.textbox.value), h = !e && a && this._isValidSubset();
      this._set("state", e ? "" : ((!this._hasBeenBlurred || a) && c || h) && (this._maskValidSubsetError || h && !this._hasBeenBlurred && a) ? "Incomplete" : "Error");
      this.focusNode.setAttribute("aria-invalid", "Error" == this.state ? "true" : "false");
      "Error" == this.state ? (this._maskValidSubsetError = a && h, b = this.getErrorMessage(a)) : "Incomplete" == this.state ? (b = this.getPromptMessage(a), this._maskValidSubsetError = !this._hasBeenBlurred || a) : c && (b = this.getPromptMessage(a));
      this.set("message", b);
      return e
    }, displayMessage:function(a) {
      a && this.focused ? c.show(a, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : c.hide(this.domNode)
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
      var b = this.pattern;
      "function" == typeof b && (b = b.call(this, a));
      if(b != this._lastRegExp) {
        var e = "";
        this._lastRegExp = b;
        ".*" != b && b.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function(a) {
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
              e += a;
              break;
            case ")":
              e += "|$)";
              break;
            default:
              e += "(?:" + a + "|$)"
          }
        });
        try {
          "".search(e)
        }catch(c) {
          e = this.pattern
        }
        this._partialre = "^(?:" + e + ")$"
      }
      return b
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
      c.hide(this.domNode);
      this.inherited(arguments)
    }});
    return h
  })
}, "dijit/_WidgetsInTemplateMixin":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare", "dojo/_base/lang", "dojo/parser"], function(d, k, l, g, b) {
    return l("dijit._WidgetsInTemplateMixin", null, {_earlyTemplatedStartup:!1, widgetsInTemplate:!0, contextRequire:null, _beforeFillContent:function() {
      if(this.widgetsInTemplate) {
        var c = this.domNode;
        this.containerNode && !this.searchContainerNode && (this.containerNode.stopParser = !0);
        b.parse(c, {noStart:!this._earlyTemplatedStartup, template:!0, inherited:{dir:this.dir, lang:this.lang, textDir:this.textDir}, propsThis:this, contextRequire:this.contextRequire, scope:"dojo"}).then(g.hitch(this, function(b) {
          this._startupWidgets = b;
          for(var c = 0;c < b.length;c++) {
            this._processTemplateNode(b[c], function(a, b) {
              return a[b]
            }, function(a, b, e) {
              return b in a ? a.connect(a, b, e) : a.on(b, e, !0)
            })
          }
          this.containerNode && this.containerNode.stopParser && delete this.containerNode.stopParser
        }));
        if(!this._startupWidgets) {
          throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
        }
      }
    }, _processTemplateNode:function(b, g, h) {
      return g(b, "dojoType") || g(b, "data-dojo-type") ? !0 : this.inherited(arguments)
    }, startup:function() {
      d.forEach(this._startupWidgets, function(b) {
        b && (!b._started && b.startup) && b.startup()
      });
      this._startupWidgets = null;
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_FormValueMixin":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on ./_FormWidgetMixin".split(" "), function(d, k, l, g, b, c) {
    return d("dijit.form._FormValueMixin", c, {readOnly:!1, _setReadOnlyAttr:function(b) {
      k.set(this.focusNode, "readOnly", b);
      this._set("readOnly", b)
    }, postCreate:function() {
      this.inherited(arguments);
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.value)
    }, _setValueAttr:function(b, c) {
      this._handleOnChange(b, c)
    }, _handleOnChange:function(b, c) {
      this._set("value", b);
      this.inherited(arguments)
    }, undo:function() {
      this._setValueAttr(this._lastValueReported, !1)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this._setValueAttr(this._resetValue, !0)
    }})
  })
}, "lsmb/SubscribeSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(d, k, l, g) {
    return d("lsmb/SubscribeSelect", [g], {topic:"", topicMap:{}, update:function(b) {
      (b = this.topicMap[b]) && this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/MaximizeMinimize":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/dom-style", "dojo/on", "dijit/_WidgetBase"], function(d, k, l, g, b) {
    return d("lsmb/MaximizeMinimize", [b], {state:"min", stateData:{max:{nextState:"min", imgURL:"payments/img/up.gif", display:"block"}, min:{nextState:"max", imgURL:"payments/img/down.gif", display:"none"}}, mmNodeId:null, setState:function(b) {
      var g = this.stateData[b];
      this.domNode.src = g.imgURL;
      this.state = b;
      l.set(k.byId(this.mmNodeId), "display", g.display)
    }, toggle:function() {
      this.setState(this.stateData[this.state].nextState)
    }, postCreate:function() {
      var b = this.domNode, d = this;
      this.inherited(arguments);
      this.own(g(b, "click", function() {
        d.toggle()
      }));
      this.setState(this.state)
    }})
  })
}, "dijit/form/_DateTimeTextBox":function() {
  define("dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(d, k, l, g, b, c, m, h) {
    new Date("X");
    return g("dijit.form._DateTimeTextBox", [c, m], {templateString:h, hasDownArrow:!0, cssStateNodes:{_buttonNode:"dijitDownArrowButton"}, _unboundedConstraints:{}, pattern:k.regexp, datePackage:"", postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, compare:function(a, b) {
      var e = this._isInvalidDate(a), c = this._isInvalidDate(b);
      if(e || c) {
        return e && c ? 0 : !e ? 1 : -1
      }
      var e = this.format(a, this._unboundedConstraints), c = this.format(b, this._unboundedConstraints), h = this.parse(e, this._unboundedConstraints), g = this.parse(c, this._unboundedConstraints);
      return e == c ? 0 : d.compare(h, g, this._selector)
    }, autoWidth:!0, format:function(a, b) {
      return!a ? "" : this.dateLocaleModule.format(a, b)
    }, parse:function(a, b) {
      return this.dateLocaleModule.parse(a, b) || (this._isEmpty(a) ? null : void 0)
    }, serialize:function(a, b) {
      a.toGregorian && (a = a.toGregorian());
      return l.toISOString(a, b)
    }, dropDownDefaultValue:new Date, value:new Date(""), _blankValue:null, popupClass:"", _selector:"", constructor:function(a) {
      a = a || {};
      this.dateModule = a.datePackage ? b.getObject(a.datePackage, !1) : d;
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
      var f = l.fromISOString;
      "string" == typeof a.min && (a.min = f(a.min), this.dateClassObj instanceof Date || (a.min = new this.dateClassObj(a.min)));
      "string" == typeof a.max && (a.max = f(a.max), this.dateClassObj instanceof Date || (a.max = new this.dateClassObj(a.max)));
      this.inherited(arguments);
      this._unboundedConstraints = b.mixin({}, this.constraints, {min:null, max:null})
    }, _isInvalidDate:function(a) {
      return!a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate
    }, _setValueAttr:function(a, b, e) {
      void 0 !== a && ("string" == typeof a && (a = l.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
      this.inherited(arguments, [a, b, e]);
      this.value instanceof Date && (this.filterString = "");
      this.dropDown && this.dropDown.set("value", a, !1)
    }, _set:function(a, b) {
      if("value" == a) {
        b instanceof Date && !(this.dateClassObj instanceof Date) && (b = new this.dateClassObj(b));
        var e = this._get("value");
        if(e instanceof this.dateClassObj && 0 == this.compare(b, e)) {
          return
        }
      }
      this.inherited(arguments)
    }, _setDropDownDefaultValueAttr:function(a) {
      this._isInvalidDate(a) && (a = new this.dateClassObj);
      this._set("dropDownDefaultValue", a)
    }, openDropDown:function(a) {
      this.dropDown && this.dropDown.destroy();
      var f = b.isString(this.popupClass) ? b.getObject(this.popupClass, !1) : this.popupClass, e = this, c = this.get("value");
      this.dropDown = new f({onChange:function(a) {
        e.set("value", a, !0)
      }, id:this.id + "_popup", dir:e.dir, lang:e.lang, value:c, textDir:e.textDir, currentFocus:!this._isInvalidDate(c) ? c : this.dropDownDefaultValue, constraints:e.constraints, filterString:e.filterString, datePackage:e.datePackage, isDisabledDate:function(a) {
        return!e.rangeCheck(a, e.constraints)
      }});
      this.inherited(arguments)
    }, _getDisplayedValueAttr:function() {
      return this.textbox.value
    }, _setDisplayedValueAttr:function(a, b) {
      this._setValueAttr(this.parse(a, this.constraints), b, a)
    }})
  })
}, "lsmb/Invoice":function() {
  require(["dojo/_base/declare", "dijit/registry", "dojo/on", "lsmb/Form", "dijit/_Container"], function(d, k, l, g, b) {
    return d("lsmb/Invoice", [g, b], {_update:function() {
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
}, "dojo/hash":function() {
  define("./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "), function(d, k, l, g, b, c, m, h) {
    function a(a, b) {
      var e = a.indexOf(b);
      return 0 <= e ? a.substring(e + 1) : ""
    }
    function f() {
      return a(location.href, "#")
    }
    function e() {
      c.publish("/dojo/hashchange", f())
    }
    function q() {
      f() !== w && (w = f(), e())
    }
    function t(a) {
      if(r) {
        if(r.isTransitioning()) {
          setTimeout(b.hitch(null, t, a), n)
        }else {
          var e = r.iframe.location.href, f = e.indexOf("?");
          r.iframe.location.replace(e.substring(0, f) + "?" + a)
        }
      }else {
        location.replace("#" + a), !p && q()
      }
    }
    function s() {
      function c() {
        w = f();
        p = m ? w : a(t.href, "?");
        r = !1;
        q = null
      }
      var h = document.createElement("iframe"), g = l.dojoBlankHtmlUrl || k.toUrl("./resources/blank.html");
      h.id = "dojo-hash-iframe";
      h.src = g + "?" + f();
      h.style.display = "none";
      document.body.appendChild(h);
      this.iframe = d.global["dojo-hash-iframe"];
      var p, r, q, s, m, t = this.iframe.location;
      this.isTransitioning = function() {
        return r
      };
      this.pollLocation = function() {
        if(!m) {
          try {
            var d = a(t.href, "?");
            document.title != s && (s = this.iframe.document.title = document.title)
          }catch(l) {
            m = !0, console.error("dojo/hash: Error adding history entry. Server unreachable.")
          }
        }
        var k = f();
        if(r && w === k) {
          if(m || d === q) {
            c(), e()
          }else {
            setTimeout(b.hitch(this, this.pollLocation), 0);
            return
          }
        }else {
          if(!(w === k && (m || p === d))) {
            if(w !== k) {
              w = k;
              r = !0;
              q = k;
              h.src = g + "?" + q;
              m = !1;
              setTimeout(b.hitch(this, this.pollLocation), 0);
              return
            }
            m || (location.href = "#" + t.search.substring(1), c(), e())
          }
        }
        setTimeout(b.hitch(this, this.pollLocation), n)
      };
      c();
      setTimeout(b.hitch(this, this.pollLocation), n)
    }
    d.hash = function(a, b) {
      if(!arguments.length) {
        return f()
      }
      "#" == a.charAt(0) && (a = a.substring(1));
      b ? t(a) : location.href = "#" + a;
      return a
    };
    var w, r, p, n = l.hashPollFrequency || 100;
    m(function() {
      "onhashchange" in d.global && (!h("ie") || 8 <= h("ie") && "BackCompat" != document.compatMode) ? p = g.after(d.global, "onhashchange", e, !0) : document.addEventListener ? (w = f(), setInterval(q, n)) : document.attachEvent && (r = new s)
    });
    return d.hash
  })
}, "dojo/data/util/sorter":function() {
  define(["../../_base/lang"], function(d) {
    var k = {};
    d.setObject("dojo.data.util.sorter", k);
    k.basicComparator = function(d, g) {
      var b = -1;
      null === d && (d = void 0);
      null === g && (g = void 0);
      if(d == g) {
        b = 0
      }else {
        if(d > g || null == d) {
          b = 1
        }
      }
      return b
    };
    k.createSortFunction = function(d, g) {
      function b(a, b, e, f) {
        return function(c, h) {
          var g = f.getValue(c, a), d = f.getValue(h, a);
          return b * e(g, d)
        }
      }
      for(var c = [], m, h = g.comparatorMap, a = k.basicComparator, f = 0;f < d.length;f++) {
        m = d[f];
        var e = m.attribute;
        if(e) {
          m = m.descending ? -1 : 1;
          var q = a;
          h && ("string" !== typeof e && "toString" in e && (e = e.toString()), q = h[e] || a);
          c.push(b(e, m, q, g))
        }
      }
      return function(a, b) {
        for(var e = 0;e < c.length;) {
          var f = c[e++](a, b);
          if(0 !== f) {
            return f
          }
        }
        return 0
      }
    };
    return k
  })
}, "dojo/store/util/QueryResults":function() {
  define(["../../_base/array", "../../_base/lang", "../../when"], function(d, k, l) {
    var g = function(b) {
      function c(c) {
        b[c] = function() {
          var a = arguments, f = l(b, function(b) {
            Array.prototype.unshift.call(a, b);
            return g(d[c].apply(d, a))
          });
          if("forEach" !== c || m) {
            return f
          }
        }
      }
      if(!b) {
        return b
      }
      var m = !!b.then;
      m && (b = k.delegate(b));
      c("forEach");
      c("filter");
      c("map");
      null == b.total && (b.total = l(b, function(b) {
        return b.length
      }));
      return b
    };
    k.setObject("dojo.store.util.QueryResults", g);
    return g
  })
}, "dijit/_CssStateMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q) {
    k = k("dijit._CssStateMixin", [], {hovering:!1, active:!1, _applyAttributes:function() {
      this.inherited(arguments);
      d.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "), function(a) {
        this.watch(a, c.hitch(this, "_setStateClass"))
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
      function a(e) {
        b = b.concat(d.map(b, function(a) {
          return a + e
        }), "dijit" + e)
      }
      var b = this.baseClass.split(" ");
      this.isLeftToRight() || a("Rtl");
      var e = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
      this.checked && a(e);
      this.state && a(this.state);
      this.selected && a("Selected");
      this._opened && a("Opened");
      this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
      this.focused && a("Focused");
      var e = this.stateNode || this.domNode, f = {};
      d.forEach(e.className.split(" "), function(a) {
        f[a] = !0
      });
      "_stateClasses" in this && d.forEach(this._stateClasses, function(a) {
        delete f[a]
      });
      d.forEach(b, function(a) {
        f[a] = !0
      });
      var c = [], h;
      for(h in f) {
        c.push(h)
      }
      e.className = c.join(" ");
      this._stateClasses = b
    }, _subnodeCssMouseEvent:function(a, b, e) {
      function f(e) {
        g.toggle(a, b + "Active", e)
      }
      if(!this.disabled && !this.readOnly) {
        switch(e.type) {
          case "mouseover":
          ;
          case "MSPointerOver":
          ;
          case "pointerover":
            g.toggle(a, b + "Hover", !0);
            break;
          case "mouseout":
          ;
          case "MSPointerOut":
          ;
          case "pointerout":
            g.toggle(a, b + "Hover", !1);
            f(!1);
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
            f(!0);
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
            f(!1);
            break;
          case "focus":
          ;
          case "focusin":
            g.toggle(a, b + "Focused", !0);
            break;
          case "blur":
          ;
          case "focusout":
            g.toggle(a, b + "Focused", !1)
        }
      }
    }, _trackMouseState:function(a, b) {
      a._cssState = b
    }});
    h(function() {
      function b(a, e, f) {
        if(!f || !l.isDescendant(f, e)) {
          for(;e && e != f;e = e.parentNode) {
            if(e._cssState) {
              var c = q.getEnclosingWidget(e);
              c && (e == c.domNode ? c._cssMouseEvent(a) : c._subnodeCssMouseEvent(e, e._cssState, a))
            }
          }
        }
      }
      var c = f.body(), h;
      m(c, a.over, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      m(c, a.out, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      m(c, e.press, function(a) {
        h = a.target;
        b(a, h)
      });
      m(c, e.release, function(a) {
        b(a, h);
        h = null
      });
      m(c, "focusin, focusout", function(a) {
        var b = a.target;
        if(b._cssState && !b.getAttribute("widgetId")) {
          var e = q.getEnclosingWidget(b);
          e && e._subnodeCssMouseEvent(b, b._cssState, a)
        }
      })
    });
    return k
  })
}, "dojo/_base/url":function() {
  define(["./kernel"], function(d) {
    var k = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, l = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, g = function() {
      for(var b = arguments, c = [b[0]], d = 1;d < b.length;d++) {
        if(b[d]) {
          var h = new g(b[d] + ""), c = new g(c[0] + "");
          if("" == h.path && !h.scheme && !h.authority && !h.query) {
            null != h.fragment && (c.fragment = h.fragment), h = c
          }else {
            if(!h.scheme && (h.scheme = c.scheme, !h.authority && (h.authority = c.authority, "/" != h.path.charAt(0)))) {
              for(var c = (c.path.substring(0, c.path.lastIndexOf("/") + 1) + h.path).split("/"), a = 0;a < c.length;a++) {
                "." == c[a] ? a == c.length - 1 ? c[a] = "" : (c.splice(a, 1), a--) : 0 < a && (!(1 == a && "" == c[0]) && ".." == c[a] && ".." != c[a - 1]) && (a == c.length - 1 ? (c.splice(a, 1), c[a - 1] = "") : (c.splice(a - 1, 2), a -= 2))
              }
              h.path = c.join("/")
            }
          }
          c = [];
          h.scheme && c.push(h.scheme, ":");
          h.authority && c.push("//", h.authority);
          c.push(h.path);
          h.query && c.push("?", h.query);
          h.fragment && c.push("#", h.fragment)
        }
      }
      this.uri = c.join("");
      b = this.uri.match(k);
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
    return d._Url = g
  })
}, "dijit/form/_FormValueWidget":function() {
  define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function(d, k, l, g) {
    return d("dijit.form._FormValueWidget", [l, g], {_layoutHackIE7:function() {
      if(7 == k("ie")) {
        for(var b = this.domNode, c = b.parentNode, g = b.firstChild || b, h = g.style.filter, a = this;c && 0 == c.clientHeight;) {
          (function() {
            var b = a.connect(c, "onscroll", function() {
              a.disconnect(b);
              g.style.filter = (new Date).getMilliseconds();
              a.defer(function() {
                g.style.filter = h
              })
            })
          })(), c = c.parentNode
        }
      }
    }})
  })
}, "lsmb/Form":function() {
  define("dijit/form/Form dojo/_base/declare dojo/_base/event dojo/on dojo/hash dojo/dom-attr dojo/dom-form dojo/query dijit/registry".split(" "), function(d, k, l, g, b, c, m, h, a) {
    var f = 0;
    return k("lsmb/Form", [d], {clickedAction:null, startup:function() {
      var a = this;
      this.inherited(arguments);
      h('input[type\x3d"submit"]', this.domNode).forEach(function(b) {
        g(b, "click", function() {
          a.clickedAction = c.get(b, "value")
        })
      })
    }, onSubmit:function(a) {
      l.stop(a);
      this.submit()
    }, submit:function() {
      if(this.validate()) {
        var e = "undefined" === typeof this.method ? "GET" : this.method, c = this.action, h = {handleAs:"text"};
        "get" === e.toLowerCase() ? (f++, e = m.toQuery(this.domNode), e = "action\x3d" + this.clickedAction + "\x26" + e, c = c + "?" + e + "#" + f.toString(16), b(c)) : (h.method = e, "multipart/form-data" == this.domNode.enctype ? (h.data = new FormData(this.domNode), h.data.append("action", this.clickedAction)) : h.data = "action\x3d" + this.clickedAction + "\x26" + m.toQuery(this.domNode), a.byId("maindiv").load_form(c, h))
      }
    }})
  })
}, "dijit/form/Button":function() {
  define("require dojo/_base/declare dojo/dom-class dojo/has dojo/_base/kernel dojo/_base/lang dojo/ready ./_FormWidget ./_ButtonMixin dojo/text!./templates/Button.html ../a11yclick".split(" "), function(d, k, l, g, b, c, m, h, a, f) {
    g("dijit-legacy-requires") && m(0, function() {
      d(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
    });
    m = k("dijit.form.Button" + (g("dojo-bidi") ? "_NoBidi" : ""), [h, a], {showLabel:!0, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, baseClass:"dijitButton", templateString:f, _setValueAttr:"valueNode", _setNameAttr:function(a) {
      this.valueNode && this.valueNode.setAttribute("name", a)
    }, _fillContent:function(a) {
      if(a && (!this.params || !("label" in this.params))) {
        if(a = c.trim(a.innerHTML)) {
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
      !this.showLabel && !("title" in this.params) && (this.titleNode.title = c.trim(this.containerNode.innerText || this.containerNode.textContent || ""))
    }});
    g("dojo-bidi") && (m = k("dijit.form.Button", m, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      this.titleNode.title && this.applyTextDir(this.titleNode, this.titleNode.title)
    }, _setTextDirAttr:function(a) {
      this._created && this.textDir != a && (this._set("textDir", a), this._setLabelAttr(this.label))
    }}));
    return m
  })
}, "dijit/_KeyNavContainer":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/keys dojo/_base/lang ./registry ./_Container ./_FocusMixin ./_KeyNavMixin".split(" "), function(d, k, l, g, b, c, m, h, a, f) {
    return k("dijit._KeyNavContainer", [a, f, h], {connectKeyNavHandlers:function(a, f) {
      var h = this._keyNavCodes = {}, g = c.hitch(this, "focusPrev"), l = c.hitch(this, "focusNext");
      d.forEach(a, function(a) {
        h[a] = g
      });
      d.forEach(f, function(a) {
        h[a] = l
      });
      h[b.HOME] = c.hitch(this, "focusFirstChild");
      h[b.END] = c.hitch(this, "focusLastChild")
    }, startupKeyNavChildren:function() {
      g.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
    }, startup:function() {
      this.inherited(arguments);
      d.forEach(this.getChildren(), c.hitch(this, "_startupChild"))
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
      return(a = m.byNode(a)) && a.getParent() == this
    }})
  })
}, "dijit/_KeyNavMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dijit/registry dijit/_FocusMixin".split(" "), function(d, k, l, g, b, c, m, h) {
    return k("dijit._KeyNavMixin", h, {tabIndex:"0", childSelector:null, postCreate:function() {
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
      var f = this, a = "string" == typeof this.childSelector ? this.childSelector : b.hitch(this, "childSelector");
      this.own(c(this.domNode, "keypress", b.hitch(this, "_onContainerKeypress")), c(this.domNode, "keydown", b.hitch(this, "_onContainerKeydown")), c(this.domNode, "focus", b.hitch(this, "_onContainerFocus")), c(this.containerNode, c.selector(a, "focusin"), function(a) {
        f._onChildFocus(m.getEnclosingWidget(this), a)
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
    }, _searchString:"", multiCharSearchDuration:1E3, onKeyboardSearch:function(a, b, e, c) {
      a && this.focusChild(a)
    }, _keyboardSearchCompare:function(a, b) {
      var e = a.domNode, e = (a.label || (e.focusNode ? e.focusNode.label : "") || e.innerText || e.textContent || "").replace(/^\s+/, "").substr(0, b.length).toLowerCase();
      return b.length && e == b ? -1 : 0
    }, _onContainerKeydown:function(a) {
      var b = this._keyNavCodes[a.keyCode];
      b ? (b(a, this.focusedChild), a.stopPropagation(), a.preventDefault(), this._searchString = "") : a.keyCode == g.SPACE && (this._searchTimer && !a.ctrlKey && !a.altKey && !a.metaKey) && (a.stopImmediatePropagation(), a.preventDefault(), this._keyboardSearch(a, " "))
    }, _onContainerKeypress:function(a) {
      a.charCode <= g.SPACE || (a.ctrlKey || a.altKey || a.metaKey) || (a.preventDefault(), a.stopPropagation(), this._keyboardSearch(a, String.fromCharCode(a.charCode).toLowerCase()))
    }, _keyboardSearch:function(a, f) {
      var e = null, c, h = 0;
      b.hitch(this, function() {
        this._searchTimer && this._searchTimer.remove();
        this._searchString += f;
        var a = /^(.)\1*$/.test(this._searchString) ? 1 : this._searchString.length;
        c = this._searchString.substr(0, a);
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
          var g = this._keyboardSearchCompare(b, c);
          g && 0 == h++ && (e = b);
          if(-1 == g) {
            h = -1;
            break
          }
          b = this._getNextFocusableChild(b, 1)
        }while(b && b != a)
      })();
      this.onKeyboardSearch(e, a, c, h)
    }, _onChildBlur:function() {
    }, _getNextFocusableChild:function(a, b) {
      var e = a;
      do {
        if(a) {
          a = this._getNext(a, b)
        }else {
          if(a = this[0 < b ? "_getFirst" : "_getLast"](), !a) {
            break
          }
        }
        if(null != a && a != e && a.isFocusable()) {
          return a
        }
      }while(a != e);
      return null
    }, _getFirst:function() {
      return null
    }, _getLast:function() {
      return null
    }, _getNext:function(a, b) {
      if(a) {
        for(a = a.domNode;a;) {
          if((a = a[0 > b ? "previousSibling" : "nextSibling"]) && "getAttribute" in a) {
            var e = m.byNode(a);
            if(e) {
              return e
            }
          }
        }
      }
      return null
    }})
  })
}, "dijit/form/RadioButton":function() {
  define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(d, k, l) {
    return d("dijit.form.RadioButton", [k, l], {baseClass:"dijitRadio"})
  })
}, "lsmb/SetupLoginButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/request/xhr dojo/dom dojo/dom-style dijit/form/Button".split(" "), function(d, k, l, g, b, c) {
    return d("lsmb/SetupLoginButton", [c], {action:null, onClick:function(b) {
      var c = this, a = g.byId("s-user").value, f = g.byId("s-password").value, e = encodeURIComponent(g.byId("database").value);
      k.stop(b);
      l("login.pl?action\x3dauthenticate\x26company\x3dpostgres\x26dbonly\x3d1", {user:a, password:f}).then(function(a) {
        window.location.href = "setup.pl?action\x3d" + c.action + "\x26database\x3d" + e
      }, function(a) {
        a = a.response.status;
        "454" == a ? alert("Company does not exist") : alert("Access denied (" + a + "): Bad username/password")
      })
    }})
  })
}, "dijit/form/DropDownButton":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/query ../registry ../popup ./Button ../_Container ../_HasDropDown dojo/text!./templates/DropDownButton.html ../a11yclick".split(" "), function(d, k, l, g, b, c, m, h, a) {
    return d("dijit.form.DropDownButton", [c, m, h], {baseClass:"dijitDropDownButton", templateString:a, _fillContent:function() {
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
      var b = this.dropDown, c = b.on("load", k.hitch(this, function() {
        c.remove();
        a()
      }));
      b.refresh()
    }, isFocusable:function() {
      return this.inherited(arguments) && !this._mouseDown
    }})
  })
}, "lsmb/SubscribeShowHide":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-style dojo/on dojo/topic dijit/_WidgetBase".split(" "), function(d, k, l, g, b, c) {
    return d("lsmb/SubscribeShowHide", [c], {topic:"", showValues:null, hideValues:null, show:function() {
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
}, "dojo/request/xhr":function() {
  define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(d, k, l, g, b) {
    function c(a, b) {
      var e = a.xhr;
      a.status = a.xhr.status;
      try {
        a.text = e.responseText
      }catch(c) {
      }
      "xml" === a.options.handleAs && (a.data = e.responseXML);
      if(!b) {
        try {
          l(a)
        }catch(f) {
          b = f
        }
      }
      b ? this.reject(b) : g.checkStatus(e.status) ? this.resolve(a) : (b = new d("Unable to load " + a.url + " status: " + e.status, a), this.reject(b))
    }
    function m(a) {
      return this.xhr.getResponseHeader(a)
    }
    function h(n, p, r) {
      var l = b("native-formdata") && p && p.data && p.data instanceof FormData, x = g.parseArgs(n, g.deepCreate(w, p), l);
      n = x.url;
      p = x.options;
      var G, B = g.deferred(x, t, f, e, c, function() {
        G && G()
      }), D = x.xhr = h._create();
      if(!D) {
        return B.cancel(new d("XHR was not created")), r ? B : B.promise
      }
      x.getHeader = m;
      q && (G = q(D, B, x));
      var I = "undefined" === typeof p.data ? null : p.data, K = !p.sync, N = p.method;
      try {
        D.open(N, n, K, p.user || s, p.password || s);
        p.withCredentials && (D.withCredentials = p.withCredentials);
        b("native-response-type") && p.handleAs in a && (D.responseType = a[p.handleAs]);
        var H = p.headers;
        n = l ? !1 : "application/x-www-form-urlencoded";
        if(H) {
          for(var O in H) {
            "content-type" === O.toLowerCase() ? n = H[O] : H[O] && D.setRequestHeader(O, H[O])
          }
        }
        n && !1 !== n && D.setRequestHeader("Content-Type", n);
        (!H || !("X-Requested-With" in H)) && D.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        g.notify && g.notify.emit("send", x, B.promise.cancel);
        D.send(I)
      }catch(U) {
        B.reject(U)
      }
      k(B);
      D = null;
      return r ? B : B.promise
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
        var e = a.responseType;
        a.abort();
        return"blob" === e
      }
    });
    var a = {blob:b("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, f, e, q, t;
    b("native-xhr2") ? (f = function(a) {
      return!this.isFulfilled()
    }, t = function(a, b) {
      b.xhr.abort()
    }, q = function(a, b, e) {
      function c(a) {
        b.handleResponse(e)
      }
      function f(a) {
        a = new d("Unable to load " + e.url + " status: " + a.target.status, e);
        b.handleResponse(e, a)
      }
      function h(a) {
        a.lengthComputable ? (e.loaded = a.loaded, e.total = a.total, b.progress(e)) : 3 === e.xhr.readyState && (e.loaded = "loaded" in a ? a.loaded : a.position, b.progress(e))
      }
      a.addEventListener("load", c, !1);
      a.addEventListener("error", f, !1);
      a.addEventListener("progress", h, !1);
      return function() {
        a.removeEventListener("load", c, !1);
        a.removeEventListener("error", f, !1);
        a.removeEventListener("progress", h, !1);
        a = null
      }
    }) : (f = function(a) {
      return a.xhr.readyState
    }, e = function(a) {
      return 4 === a.xhr.readyState
    }, t = function(a, b) {
      var e = b.xhr, c = typeof e.abort;
      ("function" === c || "object" === c || "unknown" === c) && e.abort()
    });
    var s, w = {data:null, query:null, sync:!1, method:"GET"};
    h._create = function() {
      throw Error("XMLHTTP not available");
    };
    if(b("native-xhr") && !b("dojo-force-activex-xhr")) {
      h._create = function() {
        return new XMLHttpRequest
      }
    }else {
      if(b("activex")) {
        try {
          new ActiveXObject("Msxml2.XMLHTTP"), h._create = function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
          }
        }catch(r) {
          try {
            new ActiveXObject("Microsoft.XMLHTTP"), h._create = function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
            }
          }catch(p) {
          }
        }
      }
    }
    g.addCommonMethods(h);
    return h
  })
}, "lsmb/SubscribeNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(d, k, l, g) {
    return d("lsmb/SubscribeNumberTextBox", g, {topic:"", update:function(b) {
      this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/SubscribeCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(d, k, l, g) {
    return d("lsmb/SubscribeCheckBox", [g], {topic:"", update:function(b) {
      this.set("checked", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l.subscribe(b.topic, function(c) {
        b.update(c)
      }))
    }})
  })
}, "lsmb/MainContentPane":function() {
  define("dijit/layout/ContentPane dojo/_base/declare dojo/_base/event dijit/registry dojo/dom-style dojo/_base/lang dojo/promise/Promise dojo/on dojo/hash dojo/promise/all dojo/request/xhr dojo/query dojo/request/iframe dojo/dom-class".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s) {
    return k("lsmb/MainContentPane", [d], {last_page:null, interceptClick:null, report_request_error:function(a) {
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
      return e(a, b).then(function(a) {
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
      s.replace(this.domNode, "parsing", "done-parsing");
      b.set(this.domNode, "opacity", "30%")
    }, hide_main_div:function() {
      b.set(this.domNode, "visibility", "hidden")
    }, show_main_div:function() {
      b.set(this.domNode, "visibility", "visible");
      s.replace(this.domNode, "done-parsing", "parsing")
    }, set:function() {
      var a = null, b = 0, e = null, h = this;
      1 === arguments.length && c.isObject(arguments[0]) && null !== arguments[0].content ? (a = arguments[0].content, delete arguments[0].content) : 1 === arguments.length && c.isString(arguments[0]) ? (a = arguments[0], b = !0) : 2 === arguments.length && "content" == arguments[0] && (a = arguments[1], b = !0);
      null !== a && (e = this.inherited("set", arguments, ["content", a]).then(function() {
        q("a", h.domNode).forEach(h.interceptClick);
        h.show_main_div()
      }));
      if(b) {
        return e
      }
      a = this.inherited(arguments);
      return null !== e && e instanceof m && null !== a && a instanceof m ? f([e, a]) : null !== e && e instanceof m ? e : a
    }})
  })
}, "dijit/form/CheckBox":function() {
  define("require dojo/_base/declare dojo/dom-attr dojo/has dojo/query dojo/ready ./ToggleButton ./_CheckBoxMixin dojo/text!./templates/CheckBox.html dojo/NodeList-dom ../a11yclick".split(" "), function(d, k, l, g, b, c, m, h, a) {
    g("dijit-legacy-requires") && c(0, function() {
      d(["dijit/form/RadioButton"])
    });
    return k("dijit.form.CheckBox", [m, h], {templateString:a, baseClass:"dijitCheckBox", _setValueAttr:function(a, b) {
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
}, "dijit/form/Select":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormSelectWidget ../_HasDropDown ../DropDownMenu ../MenuItem ../MenuSeparator ../Tooltip ../_KeyNavMixin ../registry dojo/text!./templates/Select.html dojo/i18n!./nls/validate".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r, p, n, u) {
    function v(a) {
      return function(b) {
        this._isLoaded ? this.inherited(a, arguments) : this.loadDropDown(h.hitch(this, a, b))
      }
    }
    var y = k("dijit.form._SelectMenu", t, {autoFocus:!0, buildRendering:function() {
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
      h.isArray(b) && (b = b[b.length - 1]);
      b && d.forEach(this.parentWidget._getChildren(), function(e) {
        e.option && b === e.option.value && (a = !0, this.focusChild(e, !1))
      }, this);
      a || this.inherited(arguments)
    }});
    b = k("dijit.form.Select" + (f("dojo-bidi") ? "_NoBidi" : ""), [e, q, p], {baseClass:"dijitSelect dijitValidationTextBox", templateString:u, _buttonInputDisabled:f("ie") ? "disabled" : "", required:!1, state:"", message:"", tooltipPosition:[], emptyLabel:"\x26#160;", _isLoaded:!1, _childrenLoaded:!1, labelType:"html", _fillContent:function() {
      this.inherited(arguments);
      if(this.options.length && !this.value && this.srcNodeRef) {
        var a = this.srcNodeRef.selectedIndex || 0;
        this._set("value", this.options[0 <= a ? a : 0].value)
      }
      this.dropDown = new y({id:this.id + "_menu", parentWidget:this});
      g.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g, "Menu "))
    }, _getMenuItemForOption:function(a) {
      if(!a.value && !a.label) {
        return new w({ownerDocument:this.ownerDocument})
      }
      var b = h.hitch(this, "_setValueAttr", a);
      a = new s({option:a, label:("text" === this.labelType ? (a.label || "").toString().replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;") : a.label) || this.emptyLabel, onClick:b, ownerDocument:this.ownerDocument, dir:this.dir, textDir:this.textDir, disabled:a.disabled || !1});
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
      return(a = n.byNode(a)) && a.getParent() == this.dropDown
    }, onKeyboardSearch:function(a, b, e, c) {
      a && this.focusChild(a)
    }, _loadChildren:function(a) {
      if(!0 === a) {
        if(this.dropDown && (delete this.dropDown.focusedChild, this.focusedChild = null), this.options.length) {
          this.inherited(arguments)
        }else {
          d.forEach(this._getChildren(), function(a) {
            a.destroyRecursive()
          });
          var b = new s({ownerDocument:this.ownerDocument, label:this.emptyLabel});
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
      b && this.focused && this._hasBeenBlurred ? r.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : r.hide(this.domNode);
      this._set("message", b);
      return a
    }, isValid:function() {
      return!this.required || 0 === this.value || !/^\s*$/.test(this.value || "")
    }, reset:function() {
      this.inherited(arguments);
      r.hide(this.domNode);
      this._refreshState()
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this._missingMsg = c.getLocalization("dijit.form", "validate", this.lang).missingMessage
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(a(this.domNode, "selectstart", function(a) {
        a.preventDefault();
        a.stopPropagation()
      }));
      this.domNode.setAttribute("aria-expanded", "false");
      var b = this._keyNavCodes;
      delete b[m.LEFT_ARROW];
      delete b[m.RIGHT_ARROW]
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
      r.hide(this.domNode);
      this.inherited(arguments)
    }, _onFocus:function() {
      this.validate(!0)
    }, _onBlur:function() {
      r.hide(this.domNode);
      this.inherited(arguments);
      this.validate(!1)
    }});
    f("dojo-bidi") && (b = k("dijit.form.Select", b, {_setDisplay:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode)
    }}));
    b._Menu = y;
    b.prototype._onContainerKeydown = v("_onContainerKeydown");
    b.prototype._onContainerKeypress = v("_onContainerKeypress");
    return b
  })
}, "dojo/regexp":function() {
  define(["./_base/kernel", "./_base/lang"], function(d, k) {
    var l = {};
    k.setObject("dojo.regexp", l);
    l.escapeString = function(g, b) {
      return g.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g, function(c) {
        return b && -1 != b.indexOf(c) ? c : "\\" + c
      })
    };
    l.buildGroupRE = function(g, b, c) {
      if(!(g instanceof Array)) {
        return b(g)
      }
      for(var d = [], h = 0;h < g.length;h++) {
        d.push(b(g[h]))
      }
      return l.group(d.join("|"), c)
    };
    l.group = function(g, b) {
      return"(" + (b ? "?:" : "") + g + ")"
    };
    return l
  })
}, "dijit/MenuSeparator":function() {
  define("dojo/_base/declare dojo/dom ./_WidgetBase ./_TemplatedMixin ./_Contained dojo/text!./templates/MenuSeparator.html".split(" "), function(d, k, l, g, b, c) {
    return d("dijit.MenuSeparator", [l, g, b], {templateString:c, buildRendering:function() {
      this.inherited(arguments);
      k.setSelectable(this.domNode, !1)
    }, isFocusable:function() {
      return!1
    }})
  })
}, "dojo/date":function() {
  define(["./has", "./_base/lang"], function(d, k) {
    var l = {getDaysInMonth:function(g) {
      var b = g.getMonth();
      return 1 == b && l.isLeapYear(g) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }, isLeapYear:function(g) {
      g = g.getFullYear();
      return!(g % 400) || !(g % 4) && !!(g % 100)
    }, getTimezoneName:function(g) {
      var b = g.toString(), c = "", d = b.indexOf("(");
      if(-1 < d) {
        c = b.substring(++d, b.indexOf(")"))
      }else {
        if(d = /([A-Z\/]+) \d{4}$/, b = b.match(d)) {
          c = b[1]
        }else {
          if(b = g.toLocaleString(), d = / ([A-Z\/]+)$/, b = b.match(d)) {
            c = b[1]
          }
        }
      }
      return"AM" == c || "PM" == c ? "" : c
    }, compare:function(g, b, c) {
      g = new Date(+g);
      b = new Date(+(b || new Date));
      "date" == c ? (g.setHours(0, 0, 0, 0), b.setHours(0, 0, 0, 0)) : "time" == c && (g.setFullYear(0, 0, 0), b.setFullYear(0, 0, 0));
      return g > b ? 1 : g < b ? -1 : 0
    }, add:function(g, b, c) {
      var d = new Date(+g), h = !1, a = "Date";
      switch(b) {
        case "day":
          break;
        case "weekday":
          var f;
          (b = c % 5) ? f = parseInt(c / 5) : (b = 0 < c ? 5 : -5, f = 0 < c ? (c - 5) / 5 : (c + 5) / 5);
          var e = g.getDay(), q = 0;
          6 == e && 0 < c ? q = 1 : 0 == e && 0 > c && (q = -1);
          e += b;
          if(0 == e || 6 == e) {
            q = 0 < c ? 2 : -2
          }
          c = 7 * f + b + q;
          break;
        case "year":
          a = "FullYear";
          h = !0;
          break;
        case "week":
          c *= 7;
          break;
        case "quarter":
          c *= 3;
        case "month":
          h = !0;
          a = "Month";
          break;
        default:
          a = "UTC" + b.charAt(0).toUpperCase() + b.substring(1) + "s"
      }
      if(a) {
        d["set" + a](d["get" + a]() + c)
      }
      h && d.getDate() < g.getDate() && d.setDate(0);
      return d
    }, difference:function(d, b, c) {
      b = b || new Date;
      c = c || "day";
      var k = b.getFullYear() - d.getFullYear(), h = 1;
      switch(c) {
        case "quarter":
          d = d.getMonth();
          b = b.getMonth();
          d = Math.floor(d / 3) + 1;
          b = Math.floor(b / 3) + 1;
          h = b + 4 * k - d;
          break;
        case "weekday":
          k = Math.round(l.difference(d, b, "day"));
          c = parseInt(l.difference(d, b, "week"));
          h = k % 7;
          if(0 == h) {
            k = 5 * c
          }else {
            var a = 0, f = d.getDay();
            b = b.getDay();
            c = parseInt(k / 7);
            h = k % 7;
            d = new Date(d);
            d.setDate(d.getDate() + 7 * c);
            d = d.getDay();
            if(0 < k) {
              switch(!0) {
                case 6 == f:
                  a = -1;
                  break;
                case 0 == f:
                  a = 0;
                  break;
                case 6 == b:
                  a = -1;
                  break;
                case 0 == b:
                  a = -2;
                  break;
                case 5 < d + h:
                  a = -2
              }
            }else {
              if(0 > k) {
                switch(!0) {
                  case 6 == f:
                    a = 0;
                    break;
                  case 0 == f:
                    a = 1;
                    break;
                  case 6 == b:
                    a = 2;
                    break;
                  case 0 == b:
                    a = 1;
                    break;
                  case 0 > d + h:
                    a = 2
                }
              }
            }
            k = k + a - 2 * c
          }
          h = k;
          break;
        case "year":
          h = k;
          break;
        case "month":
          h = b.getMonth() - d.getMonth() + 12 * k;
          break;
        case "week":
          h = parseInt(l.difference(d, b, "day") / 7);
          break;
        case "day":
          h /= 24;
        case "hour":
          h /= 60;
        case "minute":
          h /= 60;
        case "second":
          h /= 1E3;
        case "millisecond":
          h *= b.getTime() - d.getTime()
      }
      return Math.round(h)
    }};
    k.mixin(k.getObject("dojo.date", !0), l);
    return l
  })
}, "lsmb/PublishNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(d, k, l, g) {
    return d("lsmb/PublishNumberTextBox", g, {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "dijit/form/NumberTextBox":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/i18n dojo/string dojo/number ./RangeBoundTextBox".split(" "), function(d, k, l, g, b, c) {
    var m = function(a) {
      a = a || {};
      var b = l.getLocalization("dojo.cldr", "number", l.normalizeLocale(a.locale)), e = a.pattern ? a.pattern : b[(a.type || "decimal") + "Format"];
      a = "number" == typeof a.places ? a.places : "string" === typeof a.places && 0 < a.places.length ? a.places.replace(/.*,/, "") : -1 != e.indexOf(".") ? e.split(".")[1].replace(/[^#0]/g, "").length : 0;
      return{sep:b.decimal, places:a}
    }, h = d("dijit.form.NumberTextBoxMixin", null, {pattern:function(a) {
      return"(" + (this.focused && this.editOptions ? this._regExpGenerator(k.delegate(a, this.editOptions)) + "|" : "") + this._regExpGenerator(a) + ")"
    }, value:NaN, editOptions:{pattern:"#.######"}, _formatter:b.format, _regExpGenerator:b.regexp, _decimalInfo:m(), postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, _setConstraintsAttr:function(a) {
      var b = "number" == typeof a.places ? a.places : 0;
      b && b++;
      "number" != typeof a.max && (a.max = 9 * Math.pow(10, 15 - b));
      "number" != typeof a.min && (a.min = -9 * Math.pow(10, 15 - b));
      this.inherited(arguments, [a]);
      this.focusNode && (this.focusNode.value && !isNaN(this.value)) && this.set("value", this.value);
      this._decimalInfo = m(a)
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
      var c = e | 0, h = 0 > e, d = -1 != this.textbox.value.indexOf(this._decimalInfo.sep), l = (this.maxLength || 20) - this.textbox.value.length, r = d ? this.textbox.value.split(this._decimalInfo.sep)[1].replace(/[^0-9]/g, "") : "", c = d ? c + "." + r : c + "", l = g.rep("9", l), d = e;
      h ? d = Number(c + l) : e = Number(c + l);
      return!(a && e < this.constraints.min || b && d > this.constraints.max)
    }});
    d = d("dijit.form.NumberTextBox", [c, h], {baseClass:"dijitTextBox dijitNumberTextBox"});
    d.Mixin = h;
    return d
  })
}, "dijit/form/_CheckBoxMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(d, k) {
    return d("dijit.form._CheckBoxMixin", null, {type:"checkbox", value:"on", readOnly:!1, _aria_attr:"aria-checked", _setReadOnlyAttr:function(d) {
      this._set("readOnly", d);
      k.set(this.focusNode, "readOnly", d)
    }, _setLabelAttr:void 0, _getSubmitValue:function(d) {
      return null == d || "" === d ? "on" : d
    }, _setValueAttr:function(d) {
      d = this._getSubmitValue(d);
      this._set("value", d);
      k.set(this.focusNode, "value", d)
    }, reset:function() {
      this.inherited(arguments);
      this._set("value", this._getSubmitValue(this.params.value));
      k.set(this.focusNode, "value", this.value)
    }, _onClick:function(d) {
      return this.readOnly ? (d.stopPropagation(), d.preventDefault(), !1) : this.inherited(arguments)
    }})
  })
}, "dijit/DropDownMenu":function() {
  define(["dojo/_base/declare", "dojo/keys", "dojo/text!./templates/Menu.html", "./_MenuBase"], function(d, k, l, g) {
    return d("dijit.DropDownMenu", g, {templateString:l, baseClass:"dijitMenu", _onUpArrow:function() {
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
}, "lsmb/DateTextBox":function() {
  define(["dijit/form/DateTextBox", "dojo/date/locale", "dojo/_base/declare"], function(d, k, l) {
    var g = /^\d\d\d\d-\d\d-\d\d$/;
    return l("lsmb/DateTextBox", [d], {_formattedValue:null, constructor:function(b, c) {
      this._formattedValue = c.value;
      b.constraints || (b.constraints = {});
      b.constraints.datePattern || (b.constraints.datePattern = lsmbConfig.dateformat.replace(/mm/, "MM"));
      b.placeholder || (b.placeholder = lsmbConfig.dateformat);
      this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      if(this._formattedValue && (!this.value || !g.test(this.value))) {
        this.value = this.parse(this._formattedValue, this.constraints)
      }
    }, parse:function(b, c) {
      return!g.test(b) ? this.inherited(arguments) : k.parse(b, {datePattern:"yyyy-MM-dd", selector:"date"})
    }})
  })
}, "lsmb/layout/TableContainer":function() {
  define("lsmb/layout/TableContainer", "dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/_base/array dojo/dom-prop dojo/dom-style dijit/_WidgetBase dijit/layout/_LayoutWidget".split(" "), function(d, k, l, g, b, c, m, h, a, f) {
    d = l("lsmb.layout.TableContainer", f, {cols:1, labelWidth:"100", showLabels:!0, orientation:"horiz", spacing:1, customClass:"", postCreate:function() {
      this.inherited(arguments);
      this._children = [];
      this.connect(this, "set", function(a, b) {
        b && ("orientation" == a || "customClass" == a || "cols" == a) && this.layout()
      })
    }, startup:function() {
      if(!this._started && (this.inherited(arguments), !this._initialized)) {
        var a = this.getChildren();
        1 > a.length || (this._initialized = !0, g.add(this.domNode, "dijitTableLayout"), c.forEach(a, function(a) {
          !a.started && !a._started && a.startup()
        }), this.layout(), this.resize())
      }
    }, resize:function() {
      c.forEach(this.getChildren(), function(a) {
        "function" == typeof a.resize && a.resize()
      })
    }, layout:function() {
      function a(b, e, c) {
        if("" != l.customClass) {
          var f = l.customClass + "-" + (e || b.tagName.toLowerCase());
          g.add(b, f);
          2 < arguments.length && g.add(b, f + "-" + c)
        }
      }
      if(this._initialized) {
        var f = this.getChildren(), d = {}, l = this;
        c.forEach(this._children, k.hitch(this, function(a) {
          d[a.id] = a
        }));
        c.forEach(f, k.hitch(this, function(a, b) {
          d[a.id] || this._children.push(a)
        }));
        var w = b.create("table", {width:"100%", "class":"tableContainer-table tableContainer-table-" + this.orientation, cellspacing:this.spacing}, this.domNode), r = b.create("tbody");
        w.appendChild(r);
        a(w, "table", this.orientation);
        var p = b.create("tr", {}, r), n = !this.showLabels || "horiz" == this.orientation ? p : b.create("tr", {}, r), u = this.cols * (this.showLabels ? 2 : 1), v = 0;
        c.forEach(this._children, k.hitch(this, function(c, f) {
          var d = c.colspan || 1;
          1 < d && (d = this.showLabels ? Math.min(u - 1, 2 * d - 1) : Math.min(u, d));
          if(v + d - 1 + (this.showLabels ? 1 : 0) >= u) {
            v = 0, p = b.create("tr", {}, r), n = "horiz" == this.orientation ? p : b.create("tr", {}, r)
          }
          var g;
          if(this.showLabels) {
            if(g = b.create("td", {"class":"tableContainer-labelCell"}, p), c.spanLabel) {
              m.set(g, "vert" == this.orientation ? "rowspan" : "colspan", 2)
            }else {
              a(g, "labelCell");
              var k = {"for":c.get("id")}, k = b.create("label", k, g);
              if(-1 < Number(this.labelWidth) || -1 < String(this.labelWidth).indexOf("%")) {
                h.set(g, "width", 0 > String(this.labelWidth).indexOf("%") ? this.labelWidth + "px" : this.labelWidth)
              }
              k.innerHTML = c.get("label") || c.get("title")
            }
          }
          g = c.spanLabel && g ? g : b.create("td", {"class":"tableContainer-valueCell"}, n);
          1 < d && m.set(g, "colspan", d);
          a(g, "valueCell", f);
          g.appendChild(c.domNode);
          v += d + (this.showLabels ? 1 : 0)
        }));
        this.table && this.table.parentNode.removeChild(this.table);
        c.forEach(f, function(a) {
          "function" == typeof a.layout && a.layout()
        });
        this.table = w;
        this.resize()
      }
    }, destroyDescendants:function(a) {
      c.forEach(this._children, function(b) {
        b.destroyRecursive(a)
      })
    }, _setSpacingAttr:function(a) {
      this.spacing = a;
      this.table && (this.table.cellspacing = Number(a))
    }});
    d.ChildWidgetProperties = {label:"", title:"", spanLabel:!1, colspan:1};
    k.extend(a, d.ChildWidgetProperties);
    return d
  })
}, "dijit/form/_ToggleButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(d, k) {
    return d("dijit.form._ToggleButtonMixin", null, {checked:!1, _aria_attr:"aria-pressed", _onClick:function(d) {
      var g = this.checked;
      this._set("checked", !g);
      var b = this.inherited(arguments);
      this.set("checked", b ? this.checked : g);
      return b
    }, _setCheckedAttr:function(d, g) {
      this._set("checked", d);
      var b = this.focusNode || this.domNode;
      this._created && k.get(b, "checked") != !!d && k.set(b, "checked", !!d);
      b.setAttribute(this._aria_attr, String(d));
      this._handleOnChange(d, g)
    }, postCreate:function() {
      this.inherited(arguments);
      var d = this.focusNode || this.domNode;
      this.checked && d.setAttribute("checked", "checked");
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.checked)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this.set("checked", this.params.checked || !1)
    }})
  })
}, "lsmb/InvoiceLine":function() {
  require(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dijit/_Container"], function(d, k, l, g, b) {
    return d("lsmb/InvoiceLine", [k, b], {})
  })
}, "dojo/date/stamp":function() {
  define(["../_base/lang", "../_base/array"], function(d, k) {
    var l = {};
    d.setObject("dojo.date.stamp", l);
    l.fromISOString = function(d, b) {
      l._isoRegExp || (l._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
      var c = l._isoRegExp.exec(d), m = null;
      if(c) {
        c.shift();
        c[1] && c[1]--;
        c[6] && (c[6] *= 1E3);
        b && (b = new Date(b), k.forEach(k.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "), function(a) {
          return b["get" + a]()
        }), function(a, b) {
          c[b] = c[b] || a
        }));
        m = new Date(c[0] || 1970, c[1] || 0, c[2] || 1, c[3] || 0, c[4] || 0, c[5] || 0, c[6] || 0);
        100 > c[0] && m.setFullYear(c[0] || 1970);
        var h = 0, a = c[7] && c[7].charAt(0);
        "Z" != a && (h = 60 * (c[8] || 0) + (Number(c[9]) || 0), "-" != a && (h *= -1));
        a && (h -= m.getTimezoneOffset());
        h && m.setTime(m.getTime() + 6E4 * h)
      }
      return m
    };
    l.toISOString = function(d, b) {
      var c = function(a) {
        return 10 > a ? "0" + a : a
      };
      b = b || {};
      var k = [], h = b.zulu ? "getUTC" : "get", a = "";
      "time" != b.selector && (a = d[h + "FullYear"](), a = ["0000".substr((a + "").length) + a, c(d[h + "Month"]() + 1), c(d[h + "Date"]())].join("-"));
      k.push(a);
      if("date" != b.selector) {
        a = [c(d[h + "Hours"]()), c(d[h + "Minutes"]()), c(d[h + "Seconds"]())].join(":");
        h = d[h + "Milliseconds"]();
        b.milliseconds && (a += "." + (100 > h ? "0" : "") + c(h));
        if(b.zulu) {
          a += "Z"
        }else {
          if("time" != b.selector) {
            var h = d.getTimezoneOffset(), f = Math.abs(h), a = a + ((0 < h ? "-" : "+") + c(Math.floor(f / 60)) + ":" + c(f % 60))
          }
        }
        k.push(a)
      }
      return k.join("T")
    };
    return l
  })
}, "lsmb/PublishCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(d, k, l, g) {
    return d("lsmb/PublishCheckbox", [g], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "lsmb/PublishSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(d, k, l, g) {
    return d("lsmb/PublishSelect", [g], {topic:"", publish:function(b) {
      l.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this, "change", function(c) {
        b.publish(c)
      }))
    }})
  })
}, "lsmb/PublishRadioButton":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/RadioButton"], function(d, k, l, g) {
    return d("lsmb/PublishRadioButton", [g], {topic:"", publish:function() {
      l.publish(this.topic, this.value)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(this.domNode, "change", function() {
        b.publish()
      }))
    }})
  })
}, "dojo/number":function() {
  define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function(d, k, l, g, b) {
    var c = {};
    d.setObject("dojo.number", c);
    c.format = function(b, a) {
      a = d.mixin({}, a || {});
      var f = k.normalizeLocale(a.locale), f = k.getLocalization("dojo.cldr", "number", f);
      a.customs = f;
      f = a.pattern || f[(a.type || "decimal") + "Format"];
      return isNaN(b) || Infinity == Math.abs(b) ? null : c._applyPattern(b, f, a)
    };
    c._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
    c._applyPattern = function(b, a, f) {
      f = f || {};
      var e = f.customs.group, d = f.customs.decimal;
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
            e = f.customs.currencyGroup || e, d = f.customs.currencyDecimal || d, a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/, function(a, b, c, e) {
              a = f[["symbol", "currency", "displayName"][c.length - 1]] || f.currency || "";
              return!a ? "" : b + a + e
            })
          }else {
            if(-1 != a.indexOf("E")) {
              throw Error("exponential notation not supported");
            }
          }
        }
      }
      var k = c._numberPatternRE, g = g.match(k);
      if(!g) {
        throw Error("unable to find a number expression in pattern: " + a);
      }
      !1 === f.fractional && (f.places = 0);
      return a.replace(k, c._formatAbsolute(b, g[0], {decimal:d, group:e, places:f.places, round:f.round}))
    };
    c.round = function(b, a, c) {
      c = 10 / (c || 10);
      return(c * +b).toFixed(a) / c
    };
    if(0 == (0.9).toFixed()) {
      var m = c.round;
      c.round = function(b, a, c) {
        var e = Math.pow(10, -a || 0), d = Math.abs(b);
        if(!b || d >= e) {
          e = 0
        }else {
          if(d /= e, 0.5 > d || 0.95 <= d) {
            e = 0
          }
        }
        return m(b, a, c) + (0 < b ? e : -e)
      }
    }
    c._formatAbsolute = function(b, a, f) {
      f = f || {};
      !0 === f.places && (f.places = 0);
      Infinity === f.places && (f.places = 6);
      a = a.split(".");
      var e = "string" == typeof f.places && f.places.indexOf(","), d = f.places;
      e ? d = f.places.substring(e + 1) : 0 <= d || (d = (a[1] || []).length);
      0 > f.round || (b = c.round(b, d, f.round));
      b = String(Math.abs(b)).split(".");
      var k = b[1] || "";
      a[1] || f.places ? (e && (f.places = f.places.substring(0, e)), e = void 0 !== f.places ? f.places : a[1] && a[1].lastIndexOf("0") + 1, e > k.length && (b[1] = g.pad(k, e, "0", !0)), d < k.length && (b[1] = k.substr(0, d))) : b[1] && b.pop();
      d = a[0].replace(",", "");
      e = d.indexOf("0");
      -1 != e && (e = d.length - e, e > b[0].length && (b[0] = g.pad(b[0], e)), -1 == d.indexOf("#") && (b[0] = b[0].substr(b[0].length - e)));
      var d = a[0].lastIndexOf(","), l, m;
      -1 != d && (l = a[0].length - d - 1, a = a[0].substr(0, d), d = a.lastIndexOf(","), -1 != d && (m = a.length - d - 1));
      a = [];
      for(d = b[0];d;) {
        e = d.length - l, a.push(0 < e ? d.substr(e) : d), d = 0 < e ? d.slice(0, e) : "", m && (l = m, m = void 0)
      }
      b[0] = a.reverse().join(f.group || ",");
      return b.join(f.decimal || ".")
    };
    c.regexp = function(b) {
      return c._parseInfo(b).regexp
    };
    c._parseInfo = function(d) {
      d = d || {};
      var a = k.normalizeLocale(d.locale), a = k.getLocalization("dojo.cldr", "number", a), f = d.pattern || a[(d.type || "decimal") + "Format"], e = a.group, g = a.decimal, l = 1;
      if(-1 != f.indexOf("%")) {
        l /= 100
      }else {
        if(-1 != f.indexOf("\u2030")) {
          l /= 1E3
        }else {
          var s = -1 != f.indexOf("\u00a4");
          s && (e = a.currencyGroup || e, g = a.currencyDecimal || g)
        }
      }
      a = f.split(";");
      1 == a.length && a.push("-" + a[0]);
      a = b.buildGroupRE(a, function(a) {
        a = "(?:" + b.escapeString(a, ".") + ")";
        return a.replace(c._numberPatternRE, function(a) {
          var b = {signed:!1, separator:d.strict ? e : [e, ""], fractional:d.fractional, decimal:g, exponent:!1};
          a = a.split(".");
          var f = d.places;
          1 == a.length && 1 != l && (a[1] = "###");
          1 == a.length || 0 === f ? b.fractional = !1 : (void 0 === f && (f = d.pattern ? a[1].lastIndexOf("0") + 1 : Infinity), f && void 0 == d.fractional && (b.fractional = !0), !d.places && f < a[1].length && (f += "," + a[1].length), b.places = f);
          a = a[0].split(",");
          1 < a.length && (b.groupSize = a.pop().length, 1 < a.length && (b.groupSize2 = a.pop().length));
          return"(" + c._realNumberRegexp(b) + ")"
        })
      }, !0);
      s && (a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function(a, c, e, f) {
        a = b.escapeString(d[["symbol", "currency", "displayName"][e.length - 1]] || d.currency || "");
        if(!a) {
          return""
        }
        c = c ? "[\\s\\xa0]" : "";
        f = f ? "[\\s\\xa0]" : "";
        return!d.strict ? (c && (c += "*"), f && (f += "*"), "(?:" + c + a + f + ")?") : c + a + f
      }));
      return{regexp:a.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group:e, decimal:g, factor:l}
    };
    c.parse = function(b, a) {
      var f = c._parseInfo(a), e = RegExp("^" + f.regexp + "$").exec(b);
      if(!e) {
        return NaN
      }
      var d = e[1];
      if(!e[1]) {
        if(!e[2]) {
          return NaN
        }
        d = e[2];
        f.factor *= -1
      }
      d = d.replace(RegExp("[" + f.group + "\\s\\xa0]", "g"), "").replace(f.decimal, ".");
      return d * f.factor
    };
    c._realNumberRegexp = function(d) {
      d = d || {};
      "places" in d || (d.places = Infinity);
      "string" != typeof d.decimal && (d.decimal = ".");
      if(!("fractional" in d) || /^0/.test(d.places)) {
        d.fractional = [!0, !1]
      }
      "exponent" in d || (d.exponent = [!0, !1]);
      "eSigned" in d || (d.eSigned = [!0, !1]);
      var a = c._integerRegexp(d), f = b.buildGroupRE(d.fractional, function(a) {
        var b = "";
        a && 0 !== d.places && (b = "\\" + d.decimal, b = Infinity == d.places ? "(?:" + b + "\\d+)?" : b + ("\\d{" + d.places + "}"));
        return b
      }, !0), e = b.buildGroupRE(d.exponent, function(a) {
        return a ? "([eE]" + c._integerRegexp({signed:d.eSigned}) + ")" : ""
      }), a = a + f;
      f && (a = "(?:(?:" + a + ")|(?:" + f + "))");
      return a + e
    };
    c._integerRegexp = function(c) {
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
    return c
  })
}, "dijit/form/MappedTextBox":function() {
  define(["dojo/_base/declare", "dojo/sniff", "dojo/dom-construct", "./ValidationTextBox"], function(d, k, l, g) {
    return d("dijit.form.MappedTextBox", g, {postMixInProperties:function() {
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
}, "dijit/form/_ButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/has", "../registry"], function(d, k, l, g) {
    var b = d("dijit.form._ButtonMixin" + (l("dojo-bidi") ? "_NoBidi" : ""), null, {label:"", type:"button", __onClick:function(b) {
      b.stopPropagation();
      b.preventDefault();
      this.disabled || this.valueNode.click(b);
      return!1
    }, _onClick:function(b) {
      if(this.disabled) {
        return b.stopPropagation(), b.preventDefault(), !1
      }
      !1 === this.onClick(b) && b.preventDefault();
      var d = b.defaultPrevented;
      if(!d && "submit" == this.type && !(this.valueNode || this.focusNode).form) {
        for(var h = this.domNode;h.parentNode;h = h.parentNode) {
          var a = g.byNode(h);
          if(a && "function" == typeof a._onSubmit) {
            a._onSubmit(b);
            b.preventDefault();
            d = !0;
            break
          }
        }
      }
      return!d
    }, postCreate:function() {
      this.inherited(arguments);
      k.setSelectable(this.focusNode, !1)
    }, onClick:function() {
      return!0
    }, _setLabelAttr:function(b) {
      this._set("label", b);
      (this.containerNode || this.focusNode).innerHTML = b
    }});
    l("dojo-bidi") && (b = d("dijit.form._ButtonMixin", b, {_setLabelAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode || this.focusNode)
    }}));
    return b
  })
}, "dijit/form/_FormWidget":function() {
  define("dojo/_base/declare dojo/sniff dojo/_base/kernel dojo/ready ../_Widget ../_CssStateMixin ../_TemplatedMixin ./_FormWidgetMixin".split(" "), function(d, k, l, g, b, c, m, h) {
    k("dijit-legacy-requires") && g(0, function() {
      require(["dijit/form/_FormValueWidget"])
    });
    return d("dijit.form._FormWidget", [b, m, c, h], {setDisabled:function(a) {
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
}, "dijit/MenuItem":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/kernel dojo/sniff dojo/_base/lang ./_Widget ./_TemplatedMixin ./_Contained ./_CssStateMixin dojo/text!./templates/MenuItem.html".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q) {
    m = d("dijit.MenuItem" + (c("dojo-bidi") ? "_NoBidi" : ""), [h, a, f, e], {templateString:q, baseClass:"dijitMenuItem", label:"", _setLabelAttr:function(a) {
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
      k.setSelectable(this.domNode, !1)
    }, onClick:function() {
    }, focus:function() {
      try {
        8 == c("ie") && this.containerNode.focus(), this.focusNode.focus()
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
    c("dojo-bidi") && (m = d("dijit.MenuItem", m, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      "auto" === this.textDir && this.applyTextDir(this.textDirNode)
    }}));
    return m
  })
}, "dojo/request/util":function() {
  define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(d, k, l, g, b, c, m, h) {
    function a(a) {
      return e(a)
    }
    function f(a) {
      return void 0 !== a.data ? a.data : a.text
    }
    d.deepCopy = function(a, b) {
      for(var c in b) {
        var e = a[c], f = b[c];
        e !== f && (e && "object" === typeof e && f && "object" === typeof f ? d.deepCopy(e, f) : a[c] = f)
      }
      return a
    };
    d.deepCreate = function(a, b) {
      b = b || {};
      var c = m.delegate(a), e, f;
      for(e in a) {
        (f = a[e]) && "object" === typeof f && (c[e] = d.deepCreate(f, b[e]))
      }
      return d.deepCopy(c, b)
    };
    var e = Object.freeze || function(a) {
      return a
    };
    d.deferred = function(b, c, s, w, r, p) {
      var n = new g(function(a) {
        c && c(n, b);
        return!a || !(a instanceof k) && !(a instanceof l) ? new l("Request canceled", b) : a
      });
      n.response = b;
      n.isValid = s;
      n.isReady = w;
      n.handleResponse = r;
      s = n.then(a).otherwise(function(a) {
        a.response = b;
        throw a;
      });
      d.notify && s.then(m.hitch(d.notify, "emit", "load"), m.hitch(d.notify, "emit", "error"));
      w = s.then(f);
      r = new h;
      for(var u in w) {
        w.hasOwnProperty(u) && (r[u] = w[u])
      }
      r.response = s;
      e(r);
      p && n.then(function(a) {
        p.call(n, a)
      }, function(a) {
        p.call(n, b, a)
      });
      n.promise = r;
      n.then = r.then;
      return n
    };
    d.addCommonMethods = function(a, b) {
      c.forEach(b || ["GET", "POST", "PUT", "DELETE"], function(b) {
        a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function(c, e) {
          e = m.delegate(e || {});
          e.method = b;
          return a(c, e)
        }
      })
    };
    d.parseArgs = function(a, c, e) {
      var d = c.data, f = c.query;
      d && !e && "object" === typeof d && (c.data = b.objectToQuery(d));
      f ? ("object" === typeof f && (f = b.objectToQuery(f)), c.preventCache && (f += (f ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : c.preventCache && (f = "request.preventCache\x3d" + +new Date);
      a && f && (a += (~a.indexOf("?") ? "\x26" : "?") + f);
      return{url:a, options:c, getHeader:function(a) {
        return null
      }}
    };
    d.checkStatus = function(a) {
      a = a || 0;
      return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
    }
  })
}, "dojo/io-query":function() {
  define(["./_base/lang"], function(d) {
    var k = {};
    return{objectToQuery:function(l) {
      var g = encodeURIComponent, b = [], c;
      for(c in l) {
        var m = l[c];
        if(m != k[c]) {
          var h = g(c) + "\x3d";
          if(d.isArray(m)) {
            for(var a = 0, f = m.length;a < f;++a) {
              b.push(h + g(m[a]))
            }
          }else {
            b.push(h + g(m))
          }
        }
      }
      return b.join("\x26")
    }, queryToObject:function(k) {
      var g = decodeURIComponent;
      k = k.split("\x26");
      for(var b = {}, c, m, h = 0, a = k.length;h < a;++h) {
        if(m = k[h], m.length) {
          var f = m.indexOf("\x3d");
          0 > f ? (c = g(m), m = "") : (c = g(m.slice(0, f)), m = g(m.slice(f + 1)));
          "string" == typeof b[c] && (b[c] = [b[c]]);
          d.isArray(b[c]) ? b[c].push(m) : b[c] = m
        }
      }
      return b
    }}
  })
}, "dijit/_MenuBase":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/lang dojo/mouse dojo/on dojo/window ./a11yclick ./registry ./_Widget ./_CssStateMixin ./_KeyNavContainer ./_TemplatedMixin".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w) {
    return k("dijit._MenuBase", [q, w, s, t], {selected:null, _setSelectedAttr:function(a) {
      this.selected != a && (this.selected && (this.selected._setSelected(!1), this._onChildDeselect(this.selected)), a && a._setSelected(!0), this._set("selected", a))
    }, activated:!1, _setActivatedAttr:function(a) {
      b.toggle(this.domNode, "dijitMenuActive", a);
      b.toggle(this.domNode, "dijitMenuPassive", !a);
      this._set("activated", a)
    }, parentMenu:null, popupDelay:500, passivePopupDelay:Infinity, autoFocus:!1, childSelector:function(a) {
      var b = e.byNode(a);
      return a.parentNode == this.containerNode && b && b.focus
    }, postCreate:function() {
      var a = this, b = "string" == typeof this.childSelector ? this.childSelector : c.hitch(this, "childSelector");
      this.own(h(this.containerNode, h.selector(b, m.enter), function() {
        a.onItemHover(e.byNode(this))
      }), h(this.containerNode, h.selector(b, m.leave), function() {
        a.onItemUnhover(e.byNode(this))
      }), h(this.containerNode, h.selector(b, f), function(b) {
        a.onItemClick(e.byNode(this), b);
        b.stopPropagation()
      }), h(this.containerNode, h.selector(b, "focusin"), function() {
        a._onItemFocus(e.byNode(this))
      }));
      this.inherited(arguments)
    }, onKeyboardSearch:function(a, b, c, e) {
      this.inherited(arguments);
      if(a && (-1 == e || a.popup && 1 == e)) {
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
        var e = a.popup;
        e.parentMenu = this;
        this.own(this._mouseoverHandle = h.once(e.domNode, "mouseover", c.hitch(this, "_onPopupHover")));
        var d = this;
        a._openPopup({parent:this, orient:this._orient || ["after", "before"], onCancel:function() {
          b && d.focusChild(a);
          d._cleanUp()
        }, onExecute:c.hitch(this, "_cleanUp", !0), onClose:function() {
          d._mouseoverHandle && (d._mouseoverHandle.remove(), delete d._mouseoverHandle)
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
}, "dojo/promise/all":function() {
  define(["../_base/array", "../Deferred", "../when"], function(d, k, l) {
    var g = d.some;
    return function(b) {
      var c, d;
      b instanceof Array ? d = b : b && "object" === typeof b && (c = b);
      var h, a = [];
      if(c) {
        d = [];
        for(var f in c) {
          Object.hasOwnProperty.call(c, f) && (a.push(f), d.push(c[f]))
        }
        h = {}
      }else {
        d && (h = [])
      }
      if(!d || !d.length) {
        return(new k).resolve(h)
      }
      var e = new k;
      e.promise.always(function() {
        h = a = null
      });
      var q = d.length;
      g(d, function(b, d) {
        c || a.push(d);
        l(b, function(b) {
          e.isFulfilled() || (h[a[d]] = b, 0 === --q && e.resolve(h))
        }, e.reject);
        return e.isFulfilled()
      });
      return e.promise
    }
  })
}, "lsmb/InvoiceLines":function() {
  require(["dojo/_base/declare", "dijit/registry", "dijit/_WidgetBase", "dijit/_Container"], function(d, k, l, g) {
    return d("lsmb/InvoiceLines", [l, g], {removeLine:function(b) {
      this.removeChild(k.byId(b));
      this.emit("changed", {action:"removed"})
    }})
  })
}, "dojo/_base/xhr":function() {
  define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r) {
    d._xhrObj = w._create;
    var p = d.config;
    d.objectToQuery = g.objectToQuery;
    d.queryToObject = g.queryToObject;
    d.fieldToObject = c.fieldToObject;
    d.formToObject = c.toObject;
    d.formToQuery = c.toQuery;
    d.formToJson = c.toJson;
    d._blockAsync = !1;
    var n = d._contentHandlers = d.contentHandlers = {text:function(a) {
      return a.responseText
    }, json:function(b) {
      return a.fromJson(b.responseText || null)
    }, "json-comment-filtered":function(b) {
      b = b.responseText;
      var c = b.indexOf("/*"), d = b.lastIndexOf("*/");
      if(-1 == c || -1 == d) {
        throw Error("JSON was not comment filtered");
      }
      return a.fromJson(b.substring(c + 2, d))
    }, javascript:function(a) {
      return d.eval(a.responseText)
    }, xml:function(a) {
      var b = a.responseXML;
      b && (k("dom-qsa2.1") && !b.querySelectorAll && k("dom-parser")) && (b = (new DOMParser).parseFromString(a.responseText, "application/xml"));
      if(k("ie") && (!b || !b.documentElement)) {
        var c = function(a) {
          return"MSXML" + a + ".DOMDocument"
        }, c = ["Microsoft.XMLDOM", c(6), c(4), c(3), c(2)];
        e.some(c, function(c) {
          try {
            var d = new ActiveXObject(c);
            d.async = !1;
            d.loadXML(a.responseText);
            b = d
          }catch(e) {
            return!1
          }
          return!0
        })
      }
      return b
    }, "json-comment-optional":function(a) {
      return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? n["json-comment-filtered"](a) : n.json(a)
    }};
    d._ioSetArgs = function(a, e, h, k) {
      var n = {args:a, url:a.url}, l = null;
      if(a.form) {
        var l = b.byId(a.form), s = l.getAttributeNode("action");
        n.url = n.url || (s ? s.value : null);
        l = c.toObject(l)
      }
      s = [{}];
      l && s.push(l);
      a.content && s.push(a.content);
      a.preventCache && s.push({"dojo.preventCache":(new Date).valueOf()});
      n.query = g.objectToQuery(f.mixin.apply(null, s));
      n.handleAs = a.handleAs || "text";
      var u = new m(function(a) {
        a.canceled = !0;
        e && e(a);
        var b = a.ioArgs.error;
        b || (b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b);
        return b
      });
      u.addCallback(h);
      var q = a.load;
      q && f.isFunction(q) && u.addCallback(function(b) {
        return q.call(a, b, n)
      });
      var v = a.error;
      v && f.isFunction(v) && u.addErrback(function(b) {
        return v.call(a, b, n)
      });
      var r = a.handle;
      r && f.isFunction(r) && u.addBoth(function(b) {
        return r.call(a, b, n)
      });
      u.addErrback(function(a) {
        return k(a, u)
      });
      p.ioPublish && (d.publish && !1 !== n.args.ioPublish) && (u.addCallbacks(function(a) {
        d.publish("/dojo/io/load", [u, a]);
        return a
      }, function(a) {
        d.publish("/dojo/io/error", [u, a]);
        return a
      }), u.addBoth(function(a) {
        d.publish("/dojo/io/done", [u, a]);
        return a
      }));
      u.ioArgs = n;
      return u
    };
    var u = function(a) {
      a = n[a.ioArgs.handleAs](a.ioArgs.xhr);
      return void 0 === a ? null : a
    }, v = function(a, b) {
      b.ioArgs.args.failOk || console.error(a);
      return a
    }, y = function(a) {
      0 >= x && (x = 0, p.ioPublish && (d.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish)) && d.publish("/dojo/io/stop"))
    }, x = 0;
    t.after(s, "_onAction", function() {
      x -= 1
    });
    t.after(s, "_onInFlight", y);
    d._ioCancelAll = s.cancelAll;
    d._ioNotifyStart = function(a) {
      p.ioPublish && (d.publish && !1 !== a.ioArgs.args.ioPublish) && (x || d.publish("/dojo/io/start"), x += 1, d.publish("/dojo/io/send", [a]))
    };
    d._ioWatch = function(a, b, c, d) {
      a.ioArgs.options = a.ioArgs.args;
      f.mixin(a, {response:a.ioArgs, isValid:function(c) {
        return b(a)
      }, isReady:function(b) {
        return c(a)
      }, handleResponse:function(b) {
        return d(a)
      }});
      s(a);
      y(a)
    };
    d._ioAddQueryToUrl = function(a) {
      a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null)
    };
    d.xhr = function(a, b, c) {
      var e, f = d._ioSetArgs(b, function(a) {
        e && e.cancel()
      }, u, v), g = f.ioArgs;
      "postData" in b ? g.query = b.postData : "putData" in b ? g.query = b.putData : "rawBody" in b ? g.query = b.rawBody : (2 < arguments.length && !c || -1 === "POST|PUT".indexOf(a.toUpperCase())) && d._ioAddQueryToUrl(g);
      var h = {method:a, handleAs:"text", timeout:b.timeout, withCredentials:b.withCredentials, ioArgs:g};
      "undefined" !== typeof b.headers && (h.headers = b.headers);
      "undefined" !== typeof b.contentType && (h.headers || (h.headers = {}), h.headers["Content-Type"] = b.contentType);
      "undefined" !== typeof g.query && (h.data = g.query);
      "undefined" !== typeof b.sync && (h.sync = b.sync);
      d._ioNotifyStart(f);
      try {
        e = w(g.url, h, !0)
      }catch(p) {
        return f.cancel(), f
      }
      f.ioArgs.xhr = e.response.xhr;
      e.then(function() {
        f.resolve(f)
      }).otherwise(function(a) {
        g.error = a;
        a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
        f.reject(a)
      });
      return f
    };
    d.xhrGet = function(a) {
      return d.xhr("GET", a)
    };
    d.rawXhrPost = d.xhrPost = function(a) {
      return d.xhr("POST", a, !0)
    };
    d.rawXhrPut = d.xhrPut = function(a) {
      return d.xhr("PUT", a, !0)
    };
    d.xhrDelete = function(a) {
      return d.xhr("DELETE", a)
    };
    d._isDocumentOk = function(a) {
      return r.checkStatus(a.status)
    };
    d._getText = function(a) {
      var b;
      d.xhrGet({url:a, sync:!0, load:function(a) {
        b = a
      }});
      return b
    };
    f.mixin(d.xhr, {_xhrObj:d._xhrObj, fieldToObject:c.fieldToObject, formToObject:c.toObject, objectToQuery:g.objectToQuery, formToQuery:c.toQuery, formToJson:c.toJson, queryToObject:g.queryToObject, contentHandlers:n, _ioSetArgs:d._ioSetArgs, _ioCancelAll:d._ioCancelAll, _ioNotifyStart:d._ioNotifyStart, _ioWatch:d._ioWatch, _ioAddQueryToUrl:d._ioAddQueryToUrl, _isDocumentOk:d._isDocumentOk, _getText:d._getText, get:d.xhrGet, post:d.xhrPost, put:d.xhrPut, del:d.xhrDelete});
    return d.xhr
  })
}, "dijit/_HasDropDown":function() {
  define("dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on dojo/touch ./registry ./focus ./popup ./_FocusMixin".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r) {
    return d("dijit._HasDropDown", r, {_buttonNode:null, _arrowWrapperNode:null, _popupStateNode:null, _aroundNode:null, dropDown:null, autoWidth:!0, forceWidth:!1, maxHeight:-1, dropDownPosition:["below", "above"], _stopClickEvents:!0, _onDropDownMouseDown:function(a) {
      !this.disabled && !this.readOnly && ("MSPointerDown" != a.type && a.preventDefault(), this.own(e.once(this.ownerDocument, q.release, f.hitch(this, "_onDropDownMouseUp"))), this.toggleDropDown())
    }, _onDropDownMouseUp:function(a) {
      var d = this.dropDown, e = !1;
      if(a && this._opened) {
        var f = c.position(this._buttonNode, !0);
        if(!(a.pageX >= f.x && a.pageX <= f.x + f.w) || !(a.pageY >= f.y && a.pageY <= f.y + f.h)) {
          for(f = a.target;f && !e;) {
            b.contains(f, "dijitPopup") ? e = !0 : f = f.parentNode
          }
          if(e) {
            f = a.target;
            if(d.onItemClick) {
              for(var g;f && !(g = t.byNode(f));) {
                f = f.parentNode
              }
              if(g && g.onClick && g.getParent) {
                g.getParent().onItemClick(g, a)
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
      this.own(e(this._buttonNode, q.press, f.hitch(this, "_onDropDownMouseDown")), e(this._buttonNode, "click", f.hitch(this, "_onDropDownClick")), e(a, "keydown", f.hitch(this, "_onKey")), e(a, "keyup", f.hitch(this, "_onKeyUp")))
    }, destroy:function() {
      this._opened && this.closeDropDown(!0);
      this.dropDown && (this.dropDown._destroyed || this.dropDown.destroyRecursive(), delete this.dropDown);
      this.inherited(arguments)
    }, _onKey:function(b) {
      if(!this.disabled && !this.readOnly) {
        var c = this.dropDown, d = b.target;
        if(c && (this._opened && c.handleKey) && !1 === c.handleKey(b)) {
          b.stopPropagation(), b.preventDefault()
        }else {
          if(c && this._opened && b.keyCode == a.ESCAPE) {
            this.closeDropDown(), b.stopPropagation(), b.preventDefault()
          }else {
            if(!this._opened && (b.keyCode == a.DOWN_ARROW || (b.keyCode == a.ENTER || b.keyCode == a.SPACE && (!this._searchTimer || b.ctrlKey || b.altKey || b.metaKey)) && ("input" !== (d.tagName || "").toLowerCase() || d.type && "text" !== d.type.toLowerCase()))) {
              this._toggleOnKeyUp = !0, b.stopPropagation(), b.preventDefault()
            }
          }
        }
      }
    }, _onKeyUp:function() {
      if(this._toggleOnKeyUp) {
        delete this._toggleOnKeyUp;
        this.toggleDropDown();
        var a = this.dropDown;
        a && a.focus && this.defer(f.hitch(a, "focus"), 1)
      }
    }, _onBlur:function() {
      this.closeDropDown(!1);
      this.inherited(arguments)
    }, isLoaded:function() {
      return!0
    }, loadDropDown:function(a) {
      a()
    }, loadAndOpenDropDown:function() {
      var a = new k, b = f.hitch(this, function() {
        this.openDropDown();
        a.resolve(this.dropDown)
      });
      this.isLoaded() ? b() : this.loadDropDown(b);
      return a
    }, toggleDropDown:function() {
      !this.disabled && !this.readOnly && (this._opened ? this.closeDropDown(!0) : this.loadAndOpenDropDown())
    }, openDropDown:function() {
      var a = this.dropDown, d = a.domNode, e = this._aroundNode || this.domNode, h = this, k = w.open({parent:this, popup:a, around:e, orient:this.dropDownPosition, maxHeight:this.maxHeight, onExecute:function() {
        h.closeDropDown(!0)
      }, onCancel:function() {
        h.closeDropDown(!0)
      }, onClose:function() {
        g.set(h._popupStateNode, "popupActive", !1);
        b.remove(h._popupStateNode, "dijitHasDropDownOpen");
        h._set("_opened", !1)
      }});
      if(this.forceWidth || this.autoWidth && e.offsetWidth > a._popupWrapper.offsetWidth) {
        var e = e.offsetWidth - a._popupWrapper.offsetWidth, l = {w:a.domNode.offsetWidth + e};
        this._origStyle = d.style.cssText;
        f.isFunction(a.resize) ? a.resize(l) : c.setMarginBox(d, l);
        "R" == k.corner[1] && (a._popupWrapper.style.left = a._popupWrapper.style.left.replace("px", "") - e + "px")
      }
      g.set(this._popupStateNode, "popupActive", "true");
      b.add(this._popupStateNode, "dijitHasDropDownOpen");
      this._set("_opened", !0);
      this._popupStateNode.setAttribute("aria-expanded", "true");
      this._popupStateNode.setAttribute("aria-owns", a.id);
      "presentation" !== d.getAttribute("role") && !d.getAttribute("aria-labelledby") && d.setAttribute("aria-labelledby", this.id);
      return k
    }, closeDropDown:function(a) {
      this._focusDropDownTimer && (this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
      this._opened && (this._popupStateNode.setAttribute("aria-expanded", "false"), a && this.focus && this.focus(), w.close(this.dropDown), this._opened = !1);
      this._origStyle && (this.dropDown.domNode.style.cssText = this._origStyle, delete this._origStyle)
    }})
  })
}, "dijit/Calendar":function() {
  define("dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r, p) {
    var n = g("dijit.Calendar", [t, s, w], {baseClass:"dijitCalendar", cssStateNodes:{decrementMonth:"dijitCalendarArrow", incrementMonth:"dijitCalendarArrow", previousYearLabelNode:"dijitCalendarPreviousYear", nextYearLabelNode:"dijitCalendarNextYear"}, setValue:function(a) {
      h.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
      this.set("value", a)
    }, _createMonthWidget:function() {
      return new n._MonthDropDownButton({id:this.id + "_mddb", tabIndex:-1, onMonthSelect:f.hitch(this, "_onMonthSelect"), lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(e(this.domNode, "keydown", f.hitch(this, "_onKeyDown")), e(this.dateRowsNode, "mouseover", f.hitch(this, "_onDayMouseOver")), e(this.dateRowsNode, "mouseout", f.hitch(this, "_onDayMouseOut")), e(this.dateRowsNode, "mousedown", f.hitch(this, "_onDayMouseDown")), e(this.dateRowsNode, "mouseup", f.hitch(this, "_onDayMouseUp")))
    }, _onMonthSelect:function(a) {
      var b = new this.dateClassObj(this.currentFocus);
      b.setDate(1);
      b.setMonth(a);
      a = this.dateModule.getDaysInMonth(b);
      var c = this.currentFocus.getDate();
      b.setDate(Math.min(c, a));
      this._setCurrentFocusAttr(b)
    }, _onDayMouseOver:function(a) {
      if((a = c.contains(a.target, "dijitCalendarDateLabel") ? a.target.parentNode : a.target) && (a.dijitDateValue && !c.contains(a, "dijitCalendarDisabledDate") || a == this.previousYearLabelNode || a == this.nextYearLabelNode)) {
        c.add(a, "dijitCalendarHoveredDate"), this._currentNode = a
      }
    }, _onDayMouseOut:function(a) {
      this._currentNode && !(a.relatedTarget && a.relatedTarget.parentNode == this._currentNode) && (a = "dijitCalendarHoveredDate", c.contains(this._currentNode, "dijitCalendarActiveDate") && (a += " dijitCalendarActiveDate"), c.remove(this._currentNode, a), this._currentNode = null)
    }, _onDayMouseDown:function(a) {
      if((a = a.target.parentNode) && a.dijitDateValue && !c.contains(a, "dijitCalendarDisabledDate")) {
        c.add(a, "dijitCalendarActiveDate"), this._currentNode = a
      }
    }, _onDayMouseUp:function(a) {
      (a = a.target.parentNode) && a.dijitDateValue && c.remove(a, "dijitCalendarActiveDate")
    }, handleKey:function(b) {
      var c = -1, d, e = this.currentFocus;
      switch(b.keyCode) {
        case a.RIGHT_ARROW:
          c = 1;
        case a.LEFT_ARROW:
          d = "day";
          this.isLeftToRight() || (c *= -1);
          break;
        case a.DOWN_ARROW:
          c = 1;
        case a.UP_ARROW:
          d = "week";
          break;
        case a.PAGE_DOWN:
          c = 1;
        case a.PAGE_UP:
          d = b.ctrlKey || b.altKey ? "year" : "month";
          break;
        case a.END:
          e = this.dateModule.add(e, "month", 1), d = "day";
        case a.HOME:
          e = new this.dateClassObj(e);
          e.setDate(1);
          break;
        default:
          return!0
      }
      d && (e = this.dateModule.add(e, d, c));
      this._setCurrentFocusAttr(e);
      return!1
    }, _onKeyDown:function(a) {
      this.handleKey(a) || (a.stopPropagation(), a.preventDefault())
    }, onValueSelected:function() {
    }, onChange:function(a) {
      this.onValueSelected(a)
    }, getClassForDate:function() {
    }});
    n._MonthDropDownButton = g("dijit.Calendar._MonthDropDownButton", p, {onMonthSelect:function() {
    }, postCreate:function() {
      this.inherited(arguments);
      this.dropDown = new n._MonthDropDown({id:this.id + "_mdd", onChange:this.onMonthSelect})
    }, _setMonthAttr:function(a) {
      var b = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
      this.dropDown.set("months", b);
      this.containerNode.innerHTML = (6 == q("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + this.dropDown.domNode.innerHTML + "\x3c/div\x3e") + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + b[a.getMonth()] + "\x3c/div\x3e"
    }});
    n._MonthDropDown = g("dijit.Calendar._MonthDropDown", [s, r, w], {months:[], baseClass:"dijitCalendarMonthMenu dijitMenu", templateString:"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onClick'\x3e\x3c/div\x3e", _setMonthsAttr:function(a) {
      this.domNode.innerHTML = "";
      d.forEach(a, function(a, b) {
        m.create("div", {className:"dijitCalendarMonthLabel", month:b, innerHTML:a}, this.domNode)._cssState = "dijitCalendarMonthLabel"
      }, this)
    }, _onClick:function(a) {
      this.onChange(b.get(a.target, "month"))
    }, onChange:function() {
    }});
    return n
  })
}, "dijit/form/_FormSelectWidget":function() {
  define("dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/data/util/sorter dojo/_base/declare dojo/dom dojo/dom-class dojo/_base/kernel dojo/_base/lang dojo/query dojo/when dojo/store/util/QueryResults ./_FormValueWidget".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t) {
    return b("dijit.form._FormSelectWidget", t, {multiple:!1, options:null, store:null, _setStoreAttr:function(a) {
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
        return d.map(b, "return this.getOptions(item);", this)
      }
      a.isString(b) && (b = {value:b});
      a.isObject(b) && (d.some(c, function(a, c) {
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
      d.forEach(a.isArrayLike(b) ? b : [b], function(b) {
        b && a.isObject(b) && this.options.push(b)
      }, this);
      this._loadChildren()
    }, removeOption:function(b) {
      b = this.getOptions(a.isArrayLike(b) ? b : [b]);
      d.forEach(b, function(a) {
        a && (this.options = d.filter(this.options, function(b) {
          return b.value !== a.value || b.label !== a.label
        }), this._removeOptionItem(a))
      }, this);
      this._loadChildren()
    }, updateOption:function(b) {
      d.forEach(a.isArrayLike(b) ? b : [b], function(a) {
        var b = this.getOptions({value:a.value}), c;
        if(b) {
          for(c in a) {
            b[c] = a[c]
          }
        }
      }, this);
      this._loadChildren()
    }, setStore:function(a, b, c) {
      h.deprecated(this.declaredClass + "::setStore(store, selectedValue, fetchArgs) is deprecated. Use set('query', fetchArgs.query), set('queryOptions', fetchArgs.queryOptions), set('store', store), or set('value', selectedValue) instead.", "", "2.0");
      this._deprecatedSetStore(a, b, c)
    }, _deprecatedSetStore:function(b, c, f) {
      var h = this.store;
      f = f || {};
      if(h !== b) {
        for(var n;n = this._notifyConnections.pop();) {
          n.remove()
        }
        b.get || (a.mixin(b, {_oldAPI:!0, get:function(a) {
          var b = new k;
          this.fetchItemByIdentity({identity:a, onItem:function(a) {
            b.resolve(a)
          }, onError:function(a) {
            b.reject(a)
          }});
          return b.promise
        }, query:function(b, c) {
          var d = new k(function() {
            e.abort && e.abort()
          });
          d.total = new k;
          var e = this.fetch(a.mixin({query:b, onBegin:function(a) {
            d.total.resolve(a)
          }, onComplete:function(a) {
            d.resolve(a)
          }, onError:function(a) {
            d.reject(a)
          }}, c));
          return new q(d)
        }}), b.getFeatures()["dojo.data.api.Notification"] && (this._notifyConnections = [l.after(b, "onNew", a.hitch(this, "_onNewItem"), !0), l.after(b, "onDelete", a.hitch(this, "_onDeleteItem"), !0), l.after(b, "onSet", a.hitch(this, "_onSetItem"), !0)]));
        this._set("store", b)
      }
      this.options && this.options.length && this.removeOption(this.options);
      this._queryRes && this._queryRes.close && this._queryRes.close();
      this._observeHandle && this._observeHandle.remove && (this._observeHandle.remove(), this._observeHandle = null);
      f.query && this._set("query", f.query);
      f.queryOptions && this._set("queryOptions", f.queryOptions);
      b && b.query && (this._loadingStore = !0, this.onLoadDeferred = new k, this._queryRes = b.query(this.query, this.queryOptions), e(this._queryRes, a.hitch(this, function(e) {
        if(this.sortByLabel && !f.sort && e.length) {
          if(b.getValue) {
            e.sort(g.createSortFunction([{attribute:b.getLabelAttributes(e[0])[0]}], b))
          }else {
            var h = this.labelAttr;
            e.sort(function(a, b) {
              return a[h] > b[h] ? 1 : b[h] > a[h] ? -1 : 0
            })
          }
        }
        f.onFetch && (e = f.onFetch.call(this, e, f));
        d.forEach(e, function(a) {
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
      return h
    }, _setValueAttr:function(b, c) {
      this._onChangeActive || (c = null);
      if(this._loadingStore) {
        this._pendingValue = b
      }else {
        if(null != b) {
          b = a.isArrayLike(b) ? d.map(b, function(b) {
            return a.isObject(b) ? b : {value:b}
          }) : a.isObject(b) ? [b] : [{value:b}];
          b = d.filter(this.getOptions(b), function(a) {
            return a && a.value
          });
          var e = this.getOptions() || [];
          if(!this.multiple && (!b[0] || !b[0].value) && e.length) {
            b[0] = e[0]
          }
          d.forEach(e, function(a) {
            a.selected = d.some(b, function(b) {
              return b.value === a.value
            })
          });
          e = d.map(b, function(a) {
            return a.value
          });
          if(!("undefined" == typeof e || "undefined" == typeof e[0])) {
            var f = d.map(b, function(a) {
              return a.label
            });
            this._setDisplay(this.multiple ? f : f[0]);
            this.inherited(arguments, [this.multiple ? e : e[0], c]);
            this._updateSelection()
          }
        }
      }
    }, _getDisplayedValueAttr:function() {
      var a = d.map([].concat(this.get("selectedOptions")), function(a) {
        return a && "label" in a ? a.label : a ? a.value : null
      }, this);
      return this.multiple ? a : a[0]
    }, _setDisplayedValueAttr:function(a) {
      this.set("value", this.getOptions("string" == typeof a ? {label:a} : a))
    }, _loadChildren:function() {
      this._loadingStore || (d.forEach(this._getChildren(), function(a) {
        a.destroyRecursive()
      }), d.forEach(this.options, this._addOptionItem, this), this._updateSelection())
    }, _updateSelection:function() {
      this.focusedChild = null;
      this._set("value", this._getValueFromOpts());
      var a = [].concat(this.value);
      if(a && a[0]) {
        var b = this;
        d.forEach(this._getChildren(), function(c) {
          var e = d.some(a, function(a) {
            return c.option && a === c.option.value
          });
          e && !b.multiple && (b.focusedChild = c);
          m.toggle(c.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), e);
          c.domNode.setAttribute("aria-selected", e ? "true" : "false")
        }, this)
      }
    }, _getValueFromOpts:function() {
      var a = this.getOptions() || [];
      if(!this.multiple && a.length) {
        var b = d.filter(a, function(a) {
          return a.selected
        })[0];
        if(b && b.value) {
          return b.value
        }
        a[0].selected = !0;
        return a[0].value
      }
      return this.multiple ? d.map(d.filter(a, function(a) {
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
      c.setSelectable(this.focusNode, !1)
    }, _fillContent:function() {
      this.options || (this.options = this.srcNodeRef ? f("\x3e *", this.srcNodeRef).map(function(a) {
        return"separator" === a.getAttribute("type") ? {value:"", label:"", selected:!1, disabled:!1} : {value:a.getAttribute("data-" + h._scopeName + "-value") || a.getAttribute("value"), label:String(a.innerHTML), selected:a.getAttribute("selected") || !1, disabled:a.getAttribute("disabled") || !1}
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
}, "dojo/errors/RequestError":function() {
  define(["./create"], function(d) {
    return d("RequestError", function(d, l) {
      this.response = l
    })
  })
}, "dijit/popup":function() {
  define("dojo/_base/array dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on ./place ./BackgroundIframe ./Viewport ./main dojo/touch".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w, r) {
    function p() {
      this._popupWrapper && (c.destroy(this._popupWrapper), delete this._popupWrapper)
    }
    l = l(null, {_stack:[], _beginZIndex:1E3, _idGen:1, _repositionAll:function() {
      if(this._firstAroundNode) {
        var a = this._firstAroundPosition, b = m.position(this._firstAroundNode, !0), c = b.x - a.x, a = b.y - a.y;
        if(c || a) {
          this._firstAroundPosition = b;
          for(b = 0;b < this._stack.length;b++) {
            var d = this._stack[b].wrapper.style;
            d.top = parseFloat(d.top) + a + "px";
            "auto" == d.right ? d.left = parseFloat(d.left) + c + "px" : d.right = parseFloat(d.right) - c + "px"
          }
        }
        this._aroundMoveListener = setTimeout(e.hitch(this, "_repositionAll"), c || a ? 10 : 50)
      }
    }, _createWrapper:function(a) {
      var b = a._popupWrapper, d = a.domNode;
      b || (b = c.create("div", {"class":"dijitPopup", style:{display:"none"}, role:"region", "aria-label":a["aria-label"] || a.label || a.name || a.id}, a.ownerDocumentBody), b.appendChild(d), d = d.style, d.display = "", d.visibility = "", d.position = "", d.top = "0px", a._popupWrapper = b, k.after(a, "destroy", p, !0), "ontouchend" in document && q(b, "touchend", function(a) {
        /^(input|button|textarea)$/i.test(a.target.tagName) || a.preventDefault()
      }), b.dojoClick = !0);
      return b
    }, moveOffScreen:function(a) {
      var b = this._createWrapper(a);
      a = m.isBodyLtr(a.ownerDocument);
      var c = {visibility:"hidden", top:"-9999px", display:""};
      c[a ? "left" : "right"] = "-9999px";
      c[a ? "right" : "left"] = "auto";
      h.set(b, c);
      return b
    }, hide:function(a) {
      var b = this._createWrapper(a);
      h.set(b, {display:"none", height:"auto", overflowY:"visible", border:""});
      a = a.domNode;
      "_originalStyle" in a && (a.style.cssText = a._originalStyle)
    }, getTopPopup:function() {
      for(var a = this._stack, b = a.length - 1;0 < b && a[b].parent === a[b - 1].widget;b--) {
      }
      return a[b]
    }, open:function(c) {
      for(var d = this._stack, k = c.popup, l = k.domNode, p = c.orient || ["below", "below-alt", "above", "above-alt"], r = c.parent ? c.parent.isLeftToRight() : m.isBodyLtr(k.ownerDocument), B = c.around, D = c.around && c.around.id ? c.around.id + "_dropdown" : "popup_" + this._idGen++;d.length && (!c.parent || !g.isDescendant(c.parent.domNode, d[d.length - 1].widget.domNode));) {
        this.close(d[d.length - 1].widget)
      }
      var I = this.moveOffScreen(k);
      k.startup && !k._started && k.startup();
      var K, N = m.position(l);
      if("maxHeight" in c && -1 != c.maxHeight) {
        K = c.maxHeight || Infinity
      }else {
        K = w.getEffectiveBox(this.ownerDocument);
        var H = B ? m.position(B, !1) : {y:c.y - (c.padding || 0), h:2 * (c.padding || 0)};
        K = Math.floor(Math.max(H.y, K.h - (H.y + H.h)))
      }
      N.h > K && (N = h.getComputedStyle(l), h.set(I, {overflowY:"scroll", height:K + "px", border:N.borderLeftWidth + " " + N.borderLeftStyle + " " + N.borderLeftColor}), l._originalStyle = l.style.cssText, l.style.border = "none");
      b.set(I, {id:D, style:{zIndex:this._beginZIndex + d.length}, "class":"dijitPopup " + (k.baseClass || k["class"] || "").split(" ")[0] + "Popup", dijitPopupParent:c.parent ? c.parent.id : ""});
      0 == d.length && B && (this._firstAroundNode = B, this._firstAroundPosition = m.position(B, !0), this._aroundMoveListener = setTimeout(e.hitch(this, "_repositionAll"), 50));
      a("config-bgIframe") && !k.bgIframe && (k.bgIframe = new s(I));
      D = k.orient ? e.hitch(k, "orient") : null;
      p = B ? t.around(I, B, p, r, D) : t.at(I, c, "R" == p ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], c.padding, D);
      I.style.visibility = "visible";
      l.style.visibility = "visible";
      l = [];
      l.push(q(I, "keydown", e.hitch(this, function(a) {
        if(a.keyCode == f.ESCAPE && c.onCancel) {
          a.stopPropagation(), a.preventDefault(), c.onCancel()
        }else {
          if(a.keyCode == f.TAB && (a.stopPropagation(), a.preventDefault(), (a = this.getTopPopup()) && a.onCancel)) {
            a.onCancel()
          }
        }
      })));
      k.onCancel && c.onCancel && l.push(k.on("cancel", c.onCancel));
      l.push(k.on(k.onExecute ? "execute" : "change", e.hitch(this, function() {
        var a = this.getTopPopup();
        if(a && a.onExecute) {
          a.onExecute()
        }
      })));
      d.push({widget:k, wrapper:I, parent:c.parent, onExecute:c.onExecute, onCancel:c.onCancel, onClose:c.onClose, handlers:l});
      if(k.onOpen) {
        k.onOpen(p)
      }
      return p
    }, close:function(a) {
      for(var b = this._stack;a && d.some(b, function(b) {
        return b.widget == a
      }) || !a && b.length;) {
        var c = b.pop(), e = c.widget, f = c.onClose;
        e.bgIframe && (e.bgIframe.destroy(), delete e.bgIframe);
        if(e.onClose) {
          e.onClose()
        }
        for(var g;g = c.handlers.pop();) {
          g.remove()
        }
        e && e.domNode && this.hide(e);
        f && f()
      }
      0 == b.length && this._aroundMoveListener && (clearTimeout(this._aroundMoveListener), this._firstAroundNode = this._firstAroundPosition = this._aroundMoveListener = null)
    }});
    return r.popup = new l
  })
}, "dijit/form/_RadioButtonMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(d, k, l, g, b, c) {
    return k("dijit.form._RadioButtonMixin", null, {type:"radio", _getRelatedWidgets:function() {
      var d = [];
      b("input[type\x3dradio]", this.focusNode.form || this.ownerDocument).forEach(g.hitch(this, function(b) {
        b.name == this.name && b.form == this.focusNode.form && (b = c.getEnclosingWidget(b)) && d.push(b)
      }));
      return d
    }, _setCheckedAttr:function(b) {
      this.inherited(arguments);
      this._created && b && d.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        b != this && b.checked && b.set("checked", !1)
      }))
    }, _getSubmitValue:function(b) {
      return null == b ? "on" : b
    }, _onClick:function(b) {
      return this.checked || this.disabled ? (b.stopPropagation(), b.preventDefault(), !1) : this.readOnly ? (b.stopPropagation(), b.preventDefault(), d.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        l.set(this.focusNode || this.domNode, "checked", b.checked)
      })), !1) : this.inherited(arguments)
    }})
  })
}, "dijit/layout/_ContentPaneResizeMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/query ../registry ../Viewport ./utils".split(" "), function(d, k, l, g, b, c, m, h, a, f) {
    return k("dijit.layout._ContentPaneResizeMixin", null, {doLayout:!0, isLayoutContainer:!0, startup:function() {
      if(!this._started) {
        var b = this.getParent();
        this._childOfLayoutWidget = b && b.isLayoutContainer;
        this._needLayout = !this._childOfLayoutWidget;
        this.inherited(arguments);
        this._isShown() && this._onShow();
        this._childOfLayoutWidget || this.own(a.on("resize", c.hitch(this, "resize")))
      }
    }, _checkIfSingleChild:function() {
      if(this.doLayout) {
        var a = [], b = !1;
        m("\x3e *", this.containerNode).some(function(c) {
          var d = h.byNode(c);
          d && d.resize ? a.push(d) : !/script|link|style/i.test(c.nodeName) && c.offsetHeight && (b = !0)
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
        var h = b || {};
        c.mixin(h, a || {});
        if(!("h" in h) || !("w" in h)) {
          h = c.mixin(g.getMarginBox(d), h)
        }
        this._contentBox = f.marginBox2contentBox(d, h)
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
}, "dijit/CalendarLite":function() {
  define("dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "), function(d, k, l, g, b, c, m, h, a, f, e, q, t, s, w) {
    var r = k("dijit.CalendarLite", [t, s], {templateString:w, dowTemplateString:'\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader" scope\x3d"col"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e${d}\x3c/span\x3e\x3c/th\x3e', dateTemplateString:'\x3ctd class\x3d"dijitReset" role\x3d"gridcell" data-dojo-attach-point\x3d"dateCells"\x3e\x3cspan class\x3d"dijitCalendarDateLabel" data-dojo-attach-point\x3d"dateLabels"\x3e\x3c/span\x3e\x3c/td\x3e', weekTemplateString:'\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e${d}${d}${d}${d}${d}${d}${d}\x3c/tr\x3e', 
    value:new Date(""), datePackage:"", dayWidth:"narrow", tabIndex:"0", currentFocus:new Date, _setSummaryAttr:"gridNode", baseClass:"dijitCalendar dijitCalendarLite", _isValidDate:function(a) {
      return a && !isNaN(a) && "object" == typeof a && a.toString() != this.constructor.prototype.value.toString()
    }, _getValueAttr:function() {
      var a = this._get("value");
      if(a && !isNaN(a)) {
        var b = new this.dateClassObj(a);
        b.setHours(0, 0, 0, 0);
        b.getDate() < a.getDate() && (b = this.dateModule.add(b, "hour", 1));
        return b
      }
      return null
    }, _setValueAttr:function(a, b) {
      "string" == typeof a && (a = c.fromISOString(a));
      a = this._patchDate(a);
      if(this._isValidDate(a) && !this.isDisabledDate(a, this.lang)) {
        if(this._set("value", a), this.set("currentFocus", a), this._markSelectedDates([a]), this._created && (b || "undefined" == typeof b)) {
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
    }, _setText:function(a, b) {
      for(;a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      a.appendChild(a.ownerDocument.createTextNode(b))
    }, _populateGrid:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      var a = this._patchDate(a), b = a.getDay(), c = this.dateModule.getDaysInMonth(a), e = this.dateModule.getDaysInMonth(this.dateModule.add(a, "month", -1)), f = new this.dateClassObj, g = l.getFirstDayOfWeek(this.lang);
      g > b && (g -= 7);
      if(!this.summary) {
        var h = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
        this.gridNode.setAttribute("summary", h[a.getMonth()])
      }
      this._date2cell = {};
      d.forEach(this.dateCells, function(d, h) {
        var k = h + g, l = new this.dateClassObj(a), m = "dijitCalendar", q = 0;
        k < b ? (k = e - b + k + 1, q = -1, m += "Previous") : k >= b + c ? (k = k - b - c + 1, q = 1, m += "Next") : (k = k - b + 1, m += "Current");
        q && (l = this.dateModule.add(l, "month", q));
        l.setDate(k);
        this.dateModule.compare(l, f, "date") || (m = "dijitCalendarCurrentDate " + m);
        this.isDisabledDate(l, this.lang) ? (m = "dijitCalendarDisabledDate " + m, d.setAttribute("aria-disabled", "true")) : (m = "dijitCalendarEnabledDate " + m, d.removeAttribute("aria-disabled"), d.setAttribute("aria-selected", "false"));
        (q = this.getClassForDate(l, this.lang)) && (m = q + " " + m);
        d.className = m + "Month dijitCalendarDateTemplate";
        m = l.valueOf();
        this._date2cell[m] = d;
        d.dijitDateValue = m;
        this._setText(this.dateLabels[h], l.getDateLocalized ? l.getDateLocalized(this.lang) : l.getDate())
      }, this)
    }, _populateControls:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      this.monthWidget.set("month", a);
      var b = a.getFullYear() - 1, c = new this.dateClassObj;
      d.forEach(["previous", "current", "next"], function(a) {
        c.setFullYear(b++);
        this._setText(this[a + "YearLabelNode"], this.dateLocaleModule.format(c, {selector:"year", locale:this.lang}))
      }, this)
    }, goToToday:function() {
      this.set("value", new this.dateClassObj)
    }, constructor:function(c) {
      this.dateModule = c.datePackage ? a.getObject(c.datePackage, !1) : g;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateLocaleModule = c.datePackage ? a.getObject(c.datePackage + ".locale", !1) : b
    }, _createMonthWidget:function() {
      return r._MonthWidget({id:this.id + "_mddb", lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, buildRendering:function() {
      var a = this.dowTemplateString, b = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang), c = l.getFirstDayOfWeek(this.lang);
      this.dayCellsHtml = q.substitute([a, a, a, a, a, a, a].join(""), {d:""}, function() {
        return b[c++ % 7]
      });
      a = q.substitute(this.weekTemplateString, {d:this.dateTemplateString});
      this.dateRowsHtml = [a, a, a, a, a, a].join("");
      this.dateCells = [];
      this.dateLabels = [];
      this.inherited(arguments);
      m.setSelectable(this.domNode, !1);
      a = new this.dateClassObj(this.currentFocus);
      this.monthWidget = this._createMonthWidget();
      this.set("currentFocus", a, !1)
    }, postCreate:function() {
      this.inherited(arguments);
      this._connectControls()
    }, _connectControls:function() {
      var b = a.hitch(this, function(b, c, d) {
        this[b].dojoClick = !0;
        return f(this[b], "click", a.hitch(this, function() {
          this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus, c, d))
        }))
      });
      this.own(b("incrementMonth", "month", 1), b("decrementMonth", "month", -1), b("nextYearLabelNode", "year", 1), b("previousYearLabelNode", "year", -1))
    }, _setCurrentFocusAttr:function(a, b) {
      var c = this.currentFocus, d = this._getNodeByDate(c);
      a = this._patchDate(a);
      this._set("currentFocus", a);
      if(!this._date2cell || 0 != this.dateModule.difference(c, a, "month")) {
        this._populateGrid(), this._populateControls(), this._markSelectedDates([this.value])
      }
      c = this._getNodeByDate(a);
      c.setAttribute("tabIndex", this.tabIndex);
      (this.focused || b) && c.focus();
      d && d != c && (e("webkit") ? d.setAttribute("tabIndex", "-1") : d.removeAttribute("tabIndex"))
    }, focus:function() {
      this._setCurrentFocusAttr(this.currentFocus, !0)
    }, _onDayClick:function(a) {
      a.stopPropagation();
      a.preventDefault();
      for(a = a.target;a && !a.dijitDateValue && 0 !== a.dijitDateValue;a = a.parentNode) {
      }
      a && !h.contains(a, "dijitCalendarDisabledDate") && this.set("value", a.dijitDateValue)
    }, _getNodeByDate:function(a) {
      return(a = this._patchDate(a)) && this._date2cell ? this._date2cell[a.valueOf()] : null
    }, _markSelectedDates:function(b) {
      function c(a, b) {
        h.toggle(b, "dijitCalendarSelectedDate", a);
        b.setAttribute("aria-selected", a ? "true" : "false")
      }
      d.forEach(this._selectedCells || [], a.partial(c, !1));
      this._selectedCells = d.filter(d.map(b, this._getNodeByDate, this), function(a) {
        return a
      });
      d.forEach(this._selectedCells, a.partial(c, !0))
    }, onChange:function() {
    }, isDisabledDate:function() {
    }, getClassForDate:function() {
    }});
    r._MonthWidget = k("dijit.CalendarLite._MonthWidget", t, {_setMonthAttr:function(a) {
      var b = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a), c = 6 == e("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + d.map(b, function(a) {
        return"\x3cdiv\x3e" + a + "\x3c/div\x3e"
      }).join("") + "\x3c/div\x3e";
      this.domNode.innerHTML = c + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + b[a.getMonth()] + "\x3c/div\x3e"
    }});
    return r
  })
}, "dojo/html":function() {
  define("./_base/kernel ./_base/lang ./_base/array ./_base/declare ./dom ./dom-construct ./parser".split(" "), function(d, k, l, g, b, c, m) {
    var h = 0, a = {_secureForInnerHtml:function(a) {
      return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
    }, _emptyNode:c.empty, _setNodeContent:function(a, b) {
      c.empty(a);
      if(b) {
        if("string" == typeof b && (b = c.toDom(b, a.ownerDocument)), !b.nodeType && k.isArrayLike(b)) {
          for(var d = b.length, g = 0;g < b.length;g = d == b.length ? g + 1 : 0) {
            c.place(b[g], a, "last")
          }
        }else {
          c.place(b, a, "last")
        }
      }
      return a
    }, _ContentSetter:g("dojo.html._ContentSetter", null, {node:"", content:"", id:"", cleanContent:!1, extractContent:!1, parseContent:!1, parserScope:d._scopeName, startup:!0, constructor:function(a, c) {
      k.mixin(this, a || {});
      c = this.node = b.byId(this.node || c);
      this.id || (this.id = ["Setter", c ? c.id || c.tagName : "", h++].join("_"))
    }, set:function(a, b) {
      void 0 !== a && (this.content = a);
      b && this._mixin(b);
      this.onBegin();
      this.setContent();
      var c = this.onEnd();
      return c && c.then ? c : this.node
    }, setContent:function() {
      var b = this.node;
      if(!b) {
        throw Error(this.declaredClass + ": setContent given no node");
      }
      try {
        b = a._setNodeContent(b, this.content)
      }catch(c) {
        var d = this.onContentError(c);
        try {
          b.innerHTML = d
        }catch(g) {
          console.error("Fatal " + this.declaredClass + ".setContent could not change content due to " + g.message, g)
        }
      }
      this.node = b
    }, empty:function() {
      this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
      this.parseResults && this.parseResults.length && (l.forEach(this.parseResults, function(a) {
        a.destroy && a.destroy()
      }), delete this.parseResults);
      c.empty(this.node)
    }, onBegin:function() {
      var b = this.content;
      if(k.isString(b) && (this.cleanContent && (b = a._secureForInnerHtml(b)), this.extractContent)) {
        var c = b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
        c && (b = c[1])
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
      var b = {}, c;
      for(c in a) {
        c in b || (this[c] = a[c])
      }
    }, _parse:function() {
      var a = this.node;
      try {
        var b = {};
        l.forEach(["dir", "lang", "textDir"], function(a) {
          this[a] && (b[a] = this[a])
        }, this);
        var c = this;
        this.parseDeferred = m.parse({rootNode:a, noStart:!this.startup, inherited:b, scope:this.parserScope}).then(function(a) {
          return c.parseResults = a
        }, function(a) {
          c._onError("Content", a, "Error parsing in _ContentSetter#" + this.id)
        })
      }catch(d) {
        this._onError("Content", d, "Error parsing in _ContentSetter#" + this.id)
      }
    }, _onError:function(b, c, d) {
      b = this["on" + b + "Error"].call(this, c);
      d ? console.error(d, c) : b && a._setNodeContent(this.node, b, !0)
    }}), set:function(b, c, d) {
      void 0 == c && (c = "");
      return d ? (new a._ContentSetter(k.mixin(d, {content:c, node:b}))).set() : a._setNodeContent(b, c, !0)
    }};
    k.setObject("dojo.html", a);
    return a
  })
}, "lsmb/PrintButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/dom-attr dijit/form/Button lsmb/iframe dojo/dom-form dijit/registry".split(" "), function(d, k, l, g, b, c, m) {
    return d("lsmb/PrintButton", [g], {minimalGET:!0, onClick:function(d) {
      var a = this.valueNode.form;
      if("screen" == a.media.value) {
        var f;
        this.minimalGET ? (f = {action:this.get("value"), type:a.type.value, id:a.id.value, formname:a.formname.value, language_code:a.language_code.value, media:"screen", format:a.format.value}, a.vc && (f.vc = a.vc.value)) : (f = c.toObject(a), f.action = this.get("value"));
        b(l.get(a, "action"), {data:f}).then(function() {
        }, function(a) {
          m.byId("maindiv").report_request_error(a)
        });
        k.stop(d)
      }else {
        return this.inherited(arguments)
      }
    }})
  })
}, "url:dijit/form/templates/Button.html":'\x3cspan class\x3d"dijit dijitReset dijitInline" role\x3d"presentation"\n\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonNode"\n\t\tdata-dojo-attach-event\x3d"ondijitclick:__onClick" role\x3d"presentation"\n\t\t\x3e\x3cspan class\x3d"dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point\x3d"titleNode,focusNode"\n\t\t\trole\x3d"button" aria-labelledby\x3d"${id}_label"\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitToggleButtonIconChar"\x3e\x26#x25CF;\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonText"\n\t\t\t\tid\x3d"${id}_label"\n\t\t\t\tdata-dojo-attach-point\x3d"containerNode"\n\t\t\t\x3e\x3c/span\n\t\t\x3e\x3c/span\n\t\x3e\x3c/span\n\t\x3e\x3cinput ${!nameAttrSetting} type\x3d"${type}" value\x3d"${value}" class\x3d"dijitOffScreen"\n\t\tdata-dojo-attach-event\x3d"onclick:_onClick"\n\t\ttabIndex\x3d"-1" aria-hidden\x3d"true" data-dojo-attach-point\x3d"valueNode"\n/\x3e\x3c/span\x3e\n', 
"url:dijit/templates/MenuItem.html":'\x3ctr class\x3d"dijitReset" data-dojo-attach-point\x3d"focusNode" role\x3d"menuitem" tabIndex\x3d"-1"\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemIconCell" role\x3d"presentation"\x3e\n\t\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitMenuItemIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\n\t\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemLabel" colspan\x3d"2" data-dojo-attach-point\x3d"containerNode,textDirNode"\n\t\trole\x3d"presentation"\x3e\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuItemAccelKey" style\x3d"display: none" data-dojo-attach-point\x3d"accelKeyNode"\x3e\x3c/td\x3e\n\t\x3ctd class\x3d"dijitReset dijitMenuArrowCell" role\x3d"presentation"\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"arrowWrapper" style\x3d"visibility: hidden"\x3e\n\t\t\t\x3cspan class\x3d"dijitInline dijitIcon dijitMenuExpand"\x3e\x3c/span\x3e\n\t\t\t\x3cspan class\x3d"dijitMenuExpandA11y"\x3e+\x3c/span\x3e\n\t\t\x3c/span\x3e\n\t\x3c/td\x3e\n\x3c/tr\x3e\n', 
"url:dijit/form/templates/TextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft" id\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', "url:dijit/form/templates/ValidationTextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}" role\x3d"presentation"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', 
"url:dijit/form/templates/CheckBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline" role\x3d"presentation"\n\t\x3e\x3cinput\n\t \t${!nameAttrSetting} type\x3d"${type}" role\x3d"${type}" aria-checked\x3d"false" ${checkedAttrSetting}\n\t\tclass\x3d"dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point\x3d"focusNode"\n\t \tdata-dojo-attach-event\x3d"ondijitclick:_onClick"\n/\x3e\x3c/div\x3e\n', "url:dijit/form/templates/Select.html":'\x3ctable class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point\x3d"_buttonNode,tableNode,focusNode,_popupStateNode" cellspacing\x3d\'0\' cellpadding\x3d\'0\'\n\trole\x3d"listbox" aria-haspopup\x3d"true"\n\t\x3e\x3ctbody role\x3d"presentation"\x3e\x3ctr role\x3d"presentation"\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitStretch dijitButtonContents" role\x3d"presentation"\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point\x3d"containerNode,textDirNode" role\x3d"presentation"\x3e\x3c/div\n\t\t\t\x3e\x3cdiv class\x3d"dijitReset dijitValidationContainer"\n\t\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t/\x3e\x3c/div\n\t\t\t\x3e\x3cinput type\x3d"hidden" ${!nameAttrSetting} data-dojo-attach-point\x3d"valueNode" value\x3d"${value}" aria-hidden\x3d"true"\n\t\t/\x3e\x3c/td\n\t\t\x3e\x3ctd class\x3d"dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point\x3d"titleNode" role\x3d"presentation"\n\t\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/\x3e\x3c/td\n\t\x3e\x3c/tr\x3e\x3c/tbody\n\x3e\x3c/table\x3e\n', 
"url:dijit/form/templates/DropDownBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\n\tid\x3d"widget_${id}"\n\trole\x3d"combobox"\n\taria-haspopup\x3d"true"\n\tdata-dojo-attach-point\x3d"_popupStateNode"\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n\t\tdata-dojo-attach-point\x3d"_buttonNode" role\x3d"presentation"\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"button presentation" aria-hidden\x3d"true"\n\t\t\t${_buttonInputDisabled}\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\n\t/\x3e\x3c/div\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\n\t\t\x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' ${!nameAttrSetting} type\x3d"text" autocomplete\x3d"off"\n\t\t\tdata-dojo-attach-point\x3d"textbox,focusNode" role\x3d"textbox"\n\t/\x3e\x3c/div\n\x3e\x3c/div\x3e\n', 
"url:dijit/templates/Menu.html":'\x3ctable class\x3d"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role\x3d"menu" tabIndex\x3d"${tabIndex}"\n\t   cellspacing\x3d"0"\x3e\n\t\x3ctbody class\x3d"dijitReset" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/tbody\x3e\n\x3c/table\x3e\n', "url:dijit/form/templates/DropDownButton.html":'\x3cspan class\x3d"dijit dijitReset dijitInline"\n\t\x3e\x3cspan class\x3d\'dijitReset dijitInline dijitButtonNode\'\n\t\tdata-dojo-attach-event\x3d"ondijitclick:__onClick" data-dojo-attach-point\x3d"_buttonNode"\n\t\t\x3e\x3cspan class\x3d"dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point\x3d"focusNode,titleNode,_arrowWrapperNode,_popupStateNode"\n\t\t\trole\x3d"button" aria-haspopup\x3d"true" aria-labelledby\x3d"${id}_label"\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitIcon"\n\t\t\t\tdata-dojo-attach-point\x3d"iconNode"\n\t\t\t\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitButtonText"\n\t\t\t\tdata-dojo-attach-point\x3d"containerNode"\n\t\t\t\tid\x3d"${id}_label"\n\t\t\t\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitArrowButtonInner"\x3e\x3c/span\n\t\t\t\x3e\x3cspan class\x3d"dijitReset dijitInline dijitArrowButtonChar"\x3e\x26#9660;\x3c/span\n\t\t\x3e\x3c/span\n\t\x3e\x3c/span\n\t\x3e\x3cinput ${!nameAttrSetting} type\x3d"${type}" value\x3d"${value}" class\x3d"dijitOffScreen" tabIndex\x3d"-1"\n\t\tdata-dojo-attach-event\x3d"onclick:_onClick" data-dojo-attach-point\x3d"valueNode" aria-hidden\x3d"true"\n/\x3e\x3c/span\x3e\n', 
"url:dijit/templates/Calendar.html":'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"dijitCalendarContainer" role\x3d"grid" aria-labelledby\x3d"${id}_mddb ${id}_year" data-dojo-attach-point\x3d"gridNode"\x3e\n\t\x3cthead\x3e\n\t\t\x3ctr class\x3d"dijitReset dijitCalendarMonthContainer" valign\x3d"top"\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' data-dojo-attach-point\x3d"decrementMonth" scope\x3d"col"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarDecrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"decreaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e-\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset\' colspan\x3d"5" scope\x3d"col"\x3e\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"monthNode"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/th\x3e\n\t\t\t\x3cth class\x3d\'dijitReset dijitCalendarArrow\' scope\x3d"col" data-dojo-attach-point\x3d"incrementMonth"\x3e\n\t\t\t\t\x3cspan class\x3d"dijitInline dijitCalendarIncrementControl dijitCalendarIncrease" role\x3d"presentation"\x3e\x3c/span\x3e\n\t\t\t\t\x3cspan data-dojo-attach-point\x3d"increaseArrowNode" class\x3d"dijitA11ySideArrow"\x3e+\x3c/span\x3e\n\t\t\t\x3c/th\x3e\n\t\t\x3c/tr\x3e\n\t\t\x3ctr role\x3d"row"\x3e\n\t\t\t${!dayCellsHtml}\n\t\t\x3c/tr\x3e\n\t\x3c/thead\x3e\n\t\x3ctbody data-dojo-attach-point\x3d"dateRowsNode" data-dojo-attach-event\x3d"ondijitclick: _onDayClick" class\x3d"dijitReset dijitCalendarBodyContainer"\x3e\n\t\t\t${!dateRowsHtml}\n\t\x3c/tbody\x3e\n\t\x3ctfoot class\x3d"dijitReset dijitCalendarYearContainer"\x3e\n\t\t\x3ctr\x3e\n\t\t\t\x3ctd class\x3d\'dijitReset\' valign\x3d"top" colspan\x3d"7" role\x3d"presentation"\x3e\n\t\t\t\t\x3cdiv class\x3d"dijitCalendarYearLabel"\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"previousYearLabelNode" class\x3d"dijitInline dijitCalendarPreviousYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"currentYearLabelNode" class\x3d"dijitInline dijitCalendarSelectedYear" role\x3d"button" id\x3d"${id}_year"\x3e\x3c/span\x3e\n\t\t\t\t\t\x3cspan data-dojo-attach-point\x3d"nextYearLabelNode" class\x3d"dijitInline dijitCalendarNextYear" role\x3d"button"\x3e\x3c/span\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/td\x3e\n\t\t\x3c/tr\x3e\n\t\x3c/tfoot\x3e\n\x3c/table\x3e\n', 
"url:dijit/templates/MenuSeparator.html":'\x3ctr class\x3d"dijitMenuSeparator" role\x3d"separator"\x3e\n\t\x3ctd class\x3d"dijitMenuSeparatorIconCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\t\x3ctd colspan\x3d"3" class\x3d"dijitMenuSeparatorLabelCell"\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorTop dijitMenuSeparatorLabel"\x3e\x3c/div\x3e\n\t\t\x3cdiv class\x3d"dijitMenuSeparatorBottom"\x3e\x3c/div\x3e\n\t\x3c/td\x3e\n\x3c/tr\x3e\n', 
"*now":function(d) {
  d(['dojo/i18n!*preload*lsmb/nls/main*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
}}});
require("dojo/parser dojo/query dojo/on dijit/registry dojo/_base/event dojo/hash dojo/topic dojo/dom-class dojo/domReady!".split(" "), function(d, k, l, g, b, c, m, h) {
  d.parse().then(function() {
    var a = g.byId("maindiv"), d = 0, e = function(a) {
      if(!a.target && a.href) {
        var e = a.href + "#s";
        l(a, "click", function(a) {
          !a.ctrlKey && (!a.shiftKey && 0 != !a.button) && (b.stop(a), d++, c(e + d.toString(16)))
        });
        var g = window.location;
        a.href = g.origin + g.pathname + g.search + "#" + a.href
      }
    };
    null != a && (a.interceptClick = e, window.location.hash && a.load_link(c()), m.subscribe("/dojo/hashchange", function(b) {
      a.load_link(b)
    }));
    k("a.menu-terminus").forEach(e);
    k("#console-container").forEach(function(a) {
      h.add(a, "done-parsing")
    });
    k("body").forEach(function(a) {
      h.add(a, "done-parsing")
    })
  })
});
require(["dojo/on", "dojo/query", "dojo/dom-class", "dojo/_base/event", "dojo/domReady!"], function(d, k, l, g) {
  k("a.t-submenu").forEach(function(b) {
    d(b, "click", function(c) {
      !c.ctrlKey && (!c.shiftKey && 0 != !c.button) && (g.stop(c), c = b.parentNode, l.contains(c, "menu_closed") ? l.replace(c, "menu_open", "menu_closed") : l.replace(c, "menu_closed", "menu_open"))
    })
  })
});

//# sourceMappingURL=main.js.map