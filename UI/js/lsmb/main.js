//>>built
require({cache:{"dojo/_base/Deferred":function() {
  define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function(e, l, k, g, b, d, m) {
    var c = function() {
    }, a = Object.freeze || function() {
    }, h = e.Deferred = function(f) {
      function r(a) {
        if(e) {
          throw Error("This deferred has already been resolved");
        }
        m = a;
        e = !0;
        s()
      }
      function s() {
        for(var a;!a && u;) {
          var h = u;
          u = u.next;
          if(a = h.progress == c) {
            e = !1
          }
          var f = p ? h.error : h.resolved;
          b("config-useDeferredInstrumentation") && p && l.instrumentRejected && l.instrumentRejected(m, !!f);
          if(f) {
            try {
              var q = f(m);
              q && "function" === typeof q.then ? q.then(d.hitch(h.deferred, "resolve"), d.hitch(h.deferred, "reject"), d.hitch(h.deferred, "progress")) : (f = a && void 0 === q, a && !f && (p = q instanceof Error), h.deferred[f && p ? "reject" : "resolve"](f ? m : q))
            }catch(r) {
              h.deferred.reject(r)
            }
          }else {
            p ? h.deferred.reject(m) : h.deferred.resolve(m)
          }
        }
      }
      var m, e, n, q, p, y, u, w = this.promise = new k;
      this.isResolved = w.isResolved = function() {
        return 0 == q
      };
      this.isRejected = w.isRejected = function() {
        return 1 == q
      };
      this.isFulfilled = w.isFulfilled = function() {
        return 0 <= q
      };
      this.isCanceled = w.isCanceled = function() {
        return n
      };
      this.resolve = this.callback = function(a) {
        this.fired = q = 0;
        this.results = [a, null];
        r(a)
      };
      this.reject = this.errback = function(a) {
        p = !0;
        this.fired = q = 1;
        b("config-useDeferredInstrumentation") && l.instrumentRejected && l.instrumentRejected(a, !!u);
        r(a);
        this.results = [null, a]
      };
      this.progress = function(a) {
        for(var h = u;h;) {
          var f = h.progress;
          f && f(a);
          h = h.next
        }
      };
      this.addCallbacks = function(a, h) {
        this.then(a, h, c);
        return this
      };
      w.then = this.then = function(a, f, b) {
        var p = b == c ? this : new h(w.cancel);
        a = {resolved:a, error:f, progress:b, deferred:p};
        u ? y = y.next = a : u = y = a;
        e && s();
        return p.promise
      };
      var x = this;
      w.cancel = this.cancel = function() {
        if(!e) {
          var a = f && f(x);
          e || (a instanceof Error || (a = new g(a)), a.log = !1, x.reject(a))
        }
        n = !0
      };
      a(w)
    };
    d.extend(h, {addCallback:function(a) {
      return this.addCallbacks(d.hitch.apply(e, arguments))
    }, addErrback:function(a) {
      return this.addCallbacks(null, d.hitch.apply(e, arguments))
    }, addBoth:function(a) {
      var h = d.hitch.apply(e, arguments);
      return this.addCallbacks(h, h)
    }, fired:-1});
    h.when = e.when = m;
    return h
  })
}, "dojo/request/watch":function() {
  define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "), function(e, l, k, g, b, d) {
    function m() {
      for(var f = +new Date, b = 0, d;b < h.length && (d = h[b]);b++) {
        var g = d.response, m = g.options;
        if(d.isCanceled && d.isCanceled() || d.isValid && !d.isValid(g)) {
          h.splice(b--, 1), c._onAction && c._onAction()
        }else {
          if(d.isReady && d.isReady(g)) {
            h.splice(b--, 1), d.handleResponse(g), c._onAction && c._onAction()
          }else {
            if(d.startTime && d.startTime + (m.timeout || 0) < f) {
              h.splice(b--, 1), d.cancel(new l("Timeout exceeded", g)), c._onAction && c._onAction()
            }
          }
        }
      }
      c._onInFlight && c._onInFlight(d);
      h.length || (clearInterval(a), a = null)
    }
    function c(f) {
      f.response.options.timeout && (f.startTime = +new Date);
      f.isFulfilled() || (h.push(f), a || (a = setInterval(m, 50)), f.response.options.sync && m())
    }
    var a = null, h = [];
    c.cancelAll = function() {
      try {
        g.forEach(h, function(a) {
          try {
            a.cancel(new k("All requests canceled."))
          }catch(h) {
          }
        })
      }catch(a) {
      }
    };
    b && (d && b.doc.attachEvent) && d(b.global, "unload", function() {
      c.cancelAll()
    });
    return c
  })
}, "dijit/form/RangeBoundTextBox":function() {
  define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox", "dojo/i18n!./nls/validate"], function(e, l, k) {
    return e("dijit.form.RangeBoundTextBox", k, {rangeMessage:"", rangeCheck:function(g, b) {
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
      this.rangeMessage || (this.messages = l.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage)
    }})
  })
}, "dijit/_Contained":function() {
  define(["dojo/_base/declare", "./registry"], function(e, l) {
    return e("dijit._Contained", null, {_getSibling:function(e) {
      var g = this.getParent();
      return g && g._getSiblingOfChild && g._getSiblingOfChild(this, "previous" == e ? -1 : 1) || null
    }, getPreviousSibling:function() {
      return this._getSibling("previous")
    }, getNextSibling:function() {
      return this._getSibling("next")
    }, getIndexInParent:function() {
      var e = this.getParent();
      return!e || !e.getIndexOfChild ? -1 : e.getIndexOfChild(this)
    }})
  })
}, "dojo/dom-form":function() {
  define(["./_base/lang", "./dom", "./io-query", "./json"], function(e, l, k, g) {
    var b = {fieldToObject:function(b) {
      var g = null;
      if(b = l.byId(b)) {
        var c = b.name, a = (b.type || "").toLowerCase();
        if(c && a && !b.disabled) {
          if("radio" == a || "checkbox" == a) {
            b.checked && (g = b.value)
          }else {
            if(b.multiple) {
              g = [];
              for(b = [b.firstChild];b.length;) {
                for(c = b.pop();c;c = c.nextSibling) {
                  if(1 == c.nodeType && "option" == c.tagName.toLowerCase()) {
                    c.selected && g.push(c.value)
                  }else {
                    c.nextSibling && b.push(c.nextSibling);
                    c.firstChild && b.push(c.firstChild);
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
    }, toObject:function(d) {
      var g = {};
      d = l.byId(d).elements;
      for(var c = 0, a = d.length;c < a;++c) {
        var h = d[c], f = h.name, r = (h.type || "").toLowerCase();
        if(f && r && 0 > "file|submit|image|reset|button".indexOf(r) && !h.disabled) {
          var s = g, t = f, h = b.fieldToObject(h);
          if(null !== h) {
            var k = s[t];
            "string" == typeof k ? s[t] = [k, h] : e.isArray(k) ? k.push(h) : s[t] = h
          }
          "image" == r && (g[f + ".x"] = g[f + ".y"] = g[f].x = g[f].y = 0)
        }
      }
      return g
    }, toQuery:function(d) {
      return k.objectToQuery(b.toObject(d))
    }, toJson:function(d, e) {
      return g.stringify(b.toObject(d), null, e ? 4 : 0)
    }};
    return b
  })
}, "dijit/form/_TextBoxMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/sniff dojo/keys dojo/_base/lang dojo/on ../main".split(" "), function(e, l, k, g, b, d, m, c) {
    var a = l("dijit.form._TextBoxMixin" + (g("dojo-bidi") ? "_NoBidi" : ""), null, {trim:!1, uppercase:!1, lowercase:!1, propercase:!1, maxLength:"", selectOnClick:!1, placeHolder:"", _getValueAttr:function() {
      return this.parse(this.get("displayedValue"), this.constraints)
    }, _setValueAttr:function(a, f, b) {
      var c;
      void 0 !== a && (c = this.filter(a), "string" != typeof b && (b = null !== c && ("number" != typeof c || !isNaN(c)) ? this.filter(this.format(c, this.constraints)) : "", 0 != this.compare(c, this.filter(this.parse(b, this.constraints))) && (b = null)));
      if(null != b && ("number" != typeof b || !isNaN(b)) && this.textbox.value != b) {
        this.textbox.value = b, this._set("displayedValue", this.get("displayedValue"))
      }
      this.inherited(arguments, [c, f])
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
      this.own(m(this.textbox, "keydown, keypress, paste, cut, compositionend", d.hitch(this, function(a) {
        var f;
        if("keydown" == a.type && 229 != a.keyCode) {
          f = a.keyCode;
          switch(f) {
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
            switch(f) {
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
            if(65 <= f && 90 >= f || 48 <= f && 57 >= f || f == b.SPACE) {
              return
            }
            f = !1;
            for(var c in b) {
              if(b[c] === a.keyCode) {
                f = !0;
                break
              }
            }
            if(!f) {
              return
            }
          }
        }
        (f = 32 <= a.charCode ? String.fromCharCode(a.charCode) : a.charCode) || (f = 65 <= a.keyCode && 90 >= a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || a.keyCode == b.SPACE ? String.fromCharCode(a.keyCode) : a.keyCode);
        f || (f = 229);
        if("keypress" == a.type) {
          if("string" != typeof f) {
            return
          }
          if("a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f || " " === f) {
            if(a.ctrlKey || a.metaKey || a.altKey) {
              return
            }
          }
        }
        var e = {faux:!0}, t;
        for(t in a) {
          /^(layer[XY]|returnValue|keyLocation)$/.test(t) || (c = a[t], "function" != typeof c && "undefined" != typeof c && (e[t] = c))
        }
        d.mixin(e, {charOrCode:f, _wasConsumed:!1, preventDefault:function() {
          e._wasConsumed = !0;
          a.preventDefault()
        }, stopPropagation:function() {
          a.stopPropagation()
        }});
        this._lastInputProducingEvent = e;
        !1 === this.onInput(e) && (e.preventDefault(), e.stopPropagation());
        if(!e._wasConsumed && 9 >= g("ie")) {
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
      })), m(this.textbox, "input", d.hitch(this, "_onInput")), m(this.domNode, "keypress", function(a) {
        a.stopPropagation()
      }))
    }, _blankValue:"", filter:function(a) {
      if(null === a) {
        return this._blankValue
      }
      if("string" != typeof a) {
        return a
      }
      this.trim && (a = d.trim(a));
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
      !this.disabled && !this.readOnly && (this.selectOnClick && "mouse" == b && (this._selectOnClickHandle = m.once(this.domNode, "mouseup, touchend", d.hitch(this, function(b) {
        this._isTextSelected() || a.selectInputText(this.textbox)
      })), this.own(this._selectOnClickHandle), this.defer(function() {
        this._selectOnClickHandle && (this._selectOnClickHandle.remove(), this._selectOnClickHandle = null)
      }, 500)), this.inherited(arguments), this._refreshState())
    }, reset:function() {
      this.textbox.value = "";
      this.inherited(arguments)
    }});
    g("dojo-bidi") && (a = l("dijit.form._TextBoxMixin", a, {_setValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _setDisplayedValueAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.focusNode)
    }, _onInput:function() {
      this.applyTextDir(this.focusNode);
      this.inherited(arguments)
    }}));
    a._setSelectionRange = c._setSelectionRange = function(a, b, c) {
      a.setSelectionRange && a.setSelectionRange(b, c)
    };
    a.selectInputText = c.selectInputText = function(b, f, c) {
      b = k.byId(b);
      isNaN(f) && (f = 0);
      isNaN(c) && (c = b.value ? b.value.length : 0);
      try {
        b.focus(), a._setSelectionRange(b, f, c)
      }catch(d) {
      }
    };
    return a
  })
}, "dijit/form/ToggleButton":function() {
  define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function(e, l, k, g) {
    return e("dijit.form.ToggleButton", [k, g], {baseClass:"dijitToggleButton", setChecked:function(b) {
      l.deprecated("setChecked(" + b + ") is deprecated. Use set('checked'," + b + ") instead.", "", "2.0");
      this.set("checked", b)
    }})
  })
}, "dojo/parser":function() {
  define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n) {
    function q(a) {
      return eval("(" + a + ")")
    }
    function p(a) {
      var b = a._nameCaseMap, f = a.prototype;
      if(!b || b._extendCnt < u) {
        var b = a._nameCaseMap = {}, c;
        for(c in f) {
          "_" !== c.charAt(0) && (b[c.toLowerCase()] = c)
        }
        b._extendCnt = u
      }
      return b
    }
    function y(a, b) {
      var f = a.join();
      if(!w[f]) {
        for(var c = [], h = 0, p = a.length;h < p;h++) {
          var d = a[h];
          c[c.length] = w[d] = w[d] || k.getObject(d) || ~d.indexOf("/") && (b ? b(d) : e(d))
        }
        h = c.shift();
        w[f] = c.length ? h.createSubclass ? h.createSubclass(c) : h.extend.apply(h, c) : h
      }
      return w[f]
    }
    new Date("X");
    var u = 0;
    a.after(k, "extend", function() {
      u++
    }, !0);
    var w = {}, x = {_clearCache:function() {
      u++;
      w = {}
    }, _functionFromScript:function(a, b) {
      var f = "", c = "", h = a.getAttribute(b + "args") || a.getAttribute("args"), p = a.getAttribute("with"), h = (h || "").split(/\s*,\s*/);
      p && p.length && g.forEach(p.split(/\s*,\s*/), function(a) {
        f += "with(" + a + "){";
        c += "}"
      });
      return new Function(h, f + a.innerHTML + c)
    }, instantiate:function(a, b, f) {
      b = b || {};
      f = f || {};
      var c = (f.scope || l._scopeName) + "Type", h = "data-" + (f.scope || l._scopeName) + "-", p = h + "type", d = h + "mixins", q = [];
      g.forEach(a, function(a) {
        var f = c in b ? b[c] : a.getAttribute(p) || a.getAttribute(c);
        if(f) {
          var h = a.getAttribute(d), f = h ? [f].concat(h.split(/\s*,\s*/)) : [f];
          q.push({node:a, types:f})
        }
      });
      return this._instantiate(q, b, f)
    }, _instantiate:function(a, b, f, c) {
      function p(a) {
        !b._started && !f.noStart && g.forEach(a, function(a) {
          "function" === typeof a.startup && !a._started && a.startup()
        });
        return a
      }
      a = g.map(a, function(a) {
        var c = a.ctor || y(a.types, f.contextRequire);
        if(!c) {
          throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
        }
        return this.construct(c, a.node, b, f, a.scripts, a.inherited)
      }, this);
      return c ? h(a).then(p) : p(a)
    }, construct:function(b, h, d, r, e, n) {
      function y(b) {
        P && k.setObject(P, b);
        for(z = 0;z < J.length;z++) {
          a[J[z].advice || "after"](b, J[z].method, k.hitch(b, J[z].func), !0)
        }
        for(z = 0;z < S.length;z++) {
          S[z].call(b)
        }
        for(z = 0;z < Q.length;z++) {
          b.watch(Q[z].prop, Q[z].func)
        }
        for(z = 0;z < R.length;z++) {
          v(b, R[z].event, R[z].func)
        }
        return b
      }
      var m = b && b.prototype;
      r = r || {};
      var w = {};
      r.defaults && k.mixin(w, r.defaults);
      n && k.mixin(w, n);
      var u;
      s("dom-attributes-explicit") ? u = h.attributes : s("dom-attributes-specified-flag") ? u = g.filter(h.attributes, function(a) {
        return a.specified
      }) : (n = (/^input$|^img$/i.test(h.nodeName) ? h : h.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), u = g.map(n.split(/\s+/), function(a) {
        var b = a.toLowerCase();
        return{name:a, value:"LI" == h.nodeName && "value" == a || "enctype" == b ? h.getAttribute(b) : h.getAttributeNode(b).value}
      }));
      var x = r.scope || l._scopeName;
      n = "data-" + x + "-";
      var B = {};
      "dojo" !== x && (B[n + "props"] = "data-dojo-props", B[n + "type"] = "data-dojo-type", B[n + "mixins"] = "data-dojo-mixins", B[x + "type"] = "dojoType", B[n + "id"] = "data-dojo-id");
      for(var z = 0, C, x = [], P, M;C = u[z++];) {
        var E = C.name, F = E.toLowerCase();
        C = C.value;
        switch(B[F] || F) {
          case "data-dojo-type":
          ;
          case "dojotype":
          ;
          case "data-dojo-mixins":
            break;
          case "data-dojo-props":
            M = C;
            break;
          case "data-dojo-id":
          ;
          case "jsid":
            P = C;
            break;
          case "data-dojo-attach-point":
          ;
          case "dojoattachpoint":
            w.dojoAttachPoint = C;
            break;
          case "data-dojo-attach-event":
          ;
          case "dojoattachevent":
            w.dojoAttachEvent = C;
            break;
          case "class":
            w["class"] = h.className;
            break;
          case "style":
            w.style = h.style && h.style.cssText;
            break;
          default:
            if(E in m || (E = p(b)[F] || E), E in m) {
              switch(typeof m[E]) {
                case "string":
                  w[E] = C;
                  break;
                case "number":
                  w[E] = C.length ? Number(C) : NaN;
                  break;
                case "boolean":
                  w[E] = "false" != C.toLowerCase();
                  break;
                case "function":
                  "" === C || -1 != C.search(/[^\w\.]+/i) ? w[E] = new Function(C) : w[E] = k.getObject(C, !1) || new Function(C);
                  x.push(E);
                  break;
                default:
                  F = m[E], w[E] = F && "length" in F ? C ? C.split(/\s*,\s*/) : [] : F instanceof Date ? "" == C ? new Date("") : "now" == C ? new Date : f.fromISOString(C) : F instanceof c ? l.baseUrl + C : q(C)
              }
            }else {
              w[E] = C
            }
        }
      }
      for(u = 0;u < x.length;u++) {
        B = x[u].toLowerCase(), h.removeAttribute(B), h[B] = null
      }
      if(M) {
        try {
          M = q.call(r.propsThis, "{" + M + "}"), k.mixin(w, M)
        }catch(T) {
          throw Error(T.toString() + " in data-dojo-props\x3d'" + M + "'");
        }
      }
      k.mixin(w, d);
      e || (e = b && (b._noScript || m._noScript) ? [] : t("\x3e script[type^\x3d'dojo/']", h));
      var J = [], S = [], Q = [], R = [];
      if(e) {
        for(z = 0;z < e.length;z++) {
          B = e[z], h.removeChild(B), d = B.getAttribute(n + "event") || B.getAttribute("event"), r = B.getAttribute(n + "prop"), M = B.getAttribute(n + "method"), x = B.getAttribute(n + "advice"), u = B.getAttribute("type"), B = this._functionFromScript(B, n), d ? "dojo/connect" == u ? J.push({method:d, func:B}) : "dojo/on" == u ? R.push({event:d, func:B}) : w[d] = B : "dojo/aspect" == u ? J.push({method:M, advice:x, func:B}) : "dojo/watch" == u ? Q.push({prop:r, func:B}) : S.push(B)
        }
      }
      b = (e = b.markupFactory || m.markupFactory) ? e(w, h, b) : new b(w, h);
      return b.then ? b.then(y) : y(b)
    }, scan:function(a, b) {
      function f(a) {
        if(!a.inherited) {
          a.inherited = {};
          var b = a.node, c = f(a.parent), b = {dir:b.getAttribute("dir") || c.dir, lang:b.getAttribute("lang") || c.lang, textDir:b.getAttribute(m) || c.textDir}, h;
          for(h in b) {
            b[h] && (a.inherited[h] = b[h])
          }
        }
        return a.inherited
      }
      var c = [], h = [], p = {}, d = (b.scope || l._scopeName) + "Type", q = "data-" + (b.scope || l._scopeName) + "-", n = q + "type", m = q + "textdir", q = q + "mixins", w = a.firstChild, s = b.inherited;
      if(!s) {
        var t = function(a, b) {
          return a.getAttribute && a.getAttribute(b) || a.parentNode && t(a.parentNode, b)
        }, s = {dir:t(a, "dir"), lang:t(a, "lang"), textDir:t(a, m)}, u;
        for(u in s) {
          s[u] || delete s[u]
        }
      }
      for(var s = {inherited:s}, k, x;;) {
        if(w) {
          if(1 != w.nodeType) {
            w = w.nextSibling
          }else {
            if(k && "script" == w.nodeName.toLowerCase()) {
              (v = w.getAttribute("type")) && /^dojo\/\w/i.test(v) && k.push(w), w = w.nextSibling
            }else {
              if(x) {
                w = w.nextSibling
              }else {
                var v = w.getAttribute(n) || w.getAttribute(d);
                u = w.firstChild;
                if(!v && (!u || 3 == u.nodeType && !u.nextSibling)) {
                  w = w.nextSibling
                }else {
                  x = null;
                  if(v) {
                    var F = w.getAttribute(q);
                    k = F ? [v].concat(F.split(/\s*,\s*/)) : [v];
                    try {
                      x = y(k, b.contextRequire)
                    }catch(T) {
                    }
                    x || g.forEach(k, function(a) {
                      ~a.indexOf("/") && !p[a] && (p[a] = !0, h[h.length] = a)
                    });
                    F = x && !x.prototype._noScript ? [] : null;
                    s = {types:k, ctor:x, parent:s, node:w, scripts:F};
                    s.inherited = f(s);
                    c.push(s)
                  }else {
                    s = {node:w, scripts:k, parent:s}
                  }
                  k = F;
                  x = w.stopParser || x && x.prototype.stopParser && !b.template;
                  w = u
                }
              }
            }
          }
        }else {
          if(!s || !s.node) {
            break
          }
          w = s.node.nextSibling;
          x = !1;
          s = s.parent;
          k = s.scripts
        }
      }
      var J = new r;
      h.length ? (b.contextRequire || e)(h, function() {
        J.resolve(g.filter(c, function(a) {
          if(!a.ctor) {
            try {
              a.ctor = y(a.types, b.contextRequire)
            }catch(f) {
            }
          }
          for(var c = a.parent;c && !c.types;) {
            c = c.parent
          }
          var h = a.ctor && a.ctor.prototype;
          a.instantiateChildren = !(h && h.stopParser && !b.template);
          a.instantiate = !c || c.instantiate && c.instantiateChildren;
          return a.instantiate
        }))
      }) : J.resolve(c);
      return J.promise
    }, _require:function(a, b) {
      var f = q("{" + a.innerHTML + "}"), c = [], h = [], p = new r, d = b && b.contextRequire || e, g;
      for(g in f) {
        c.push(g), h.push(f[g])
      }
      d(h, function() {
        for(var a = 0;a < c.length;a++) {
          k.setObject(c[a], arguments[a])
        }
        p.resolve(arguments)
      });
      return p.promise
    }, _scanAmd:function(a, b) {
      var f = new r, c = f.promise;
      f.resolve(!0);
      var h = this;
      t("script[type\x3d'dojo/require']", a).forEach(function(a) {
        c = c.then(function() {
          return h._require(a, b)
        });
        a.parentNode.removeChild(a)
      });
      return c
    }, parse:function(a, b) {
      a && ("string" != typeof a && !("nodeType" in a)) && (b = a, a = b.rootNode);
      var f = a ? d.byId(a) : m.body();
      b = b || {};
      var c = b.template ? {template:!0} : {}, h = [], p = this, q = this._scanAmd(f, b).then(function() {
        return p.scan(f, b)
      }).then(function(a) {
        return p._instantiate(a, c, b, !0)
      }).then(function(a) {
        return h = h.concat(a)
      }).otherwise(function(a) {
        console.error("dojo/parser::parse() error", a);
        throw a;
      });
      k.mixin(h, q);
      return h
    }};
    l.parser = x;
    b.parseOnLoad && n(100, x, "parse");
    return x
  })
}, "dijit/form/_FormMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/on dojo/window".split(" "), function(e, l, k, g, b, d) {
    return l("dijit.form._FormMixin", null, {state:"", _getDescendantFormWidgets:function(b) {
      var c = [];
      e.forEach(b || this.getChildren(), function(a) {
        "value" in a ? c.push(a) : c = c.concat(this._getDescendantFormWidgets(a.getChildren()))
      }, this);
      return c
    }, reset:function() {
      e.forEach(this._getDescendantFormWidgets(), function(b) {
        b.reset && b.reset()
      })
    }, validate:function() {
      var b = !1;
      return e.every(e.map(this._getDescendantFormWidgets(), function(c) {
        c._hasBeenBlurred = !0;
        var a = c.disabled || !c.validate || c.validate();
        !a && !b && (d.scrollIntoView(c.containerNode || c.domNode), c.focus(), b = !0);
        return a
      }), function(b) {
        return b
      })
    }, setValues:function(b) {
      k.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
      return this.set("value", b)
    }, _setValueAttr:function(b) {
      var c = {};
      e.forEach(this._getDescendantFormWidgets(), function(a) {
        a.name && (c[a.name] || (c[a.name] = [])).push(a)
      });
      for(var a in c) {
        if(c.hasOwnProperty(a)) {
          var h = c[a], f = g.getObject(a, !1, b);
          void 0 !== f && (f = [].concat(f), "boolean" == typeof h[0].checked ? e.forEach(h, function(a) {
            a.set("value", -1 != e.indexOf(f, a._get("value")))
          }) : h[0].multiple ? h[0].set("value", f) : e.forEach(h, function(a, b) {
            a.set("value", f[b])
          }))
        }
      }
    }, getValues:function() {
      k.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, _getValueAttr:function() {
      var b = {};
      e.forEach(this._getDescendantFormWidgets(), function(c) {
        var a = c.name;
        if(a && !c.disabled) {
          var h = c.get("value");
          "boolean" == typeof c.checked ? /Radio/.test(c.declaredClass) ? !1 !== h ? g.setObject(a, h, b) : (h = g.getObject(a, !1, b), void 0 === h && g.setObject(a, null, b)) : (c = g.getObject(a, !1, b), c || (c = [], g.setObject(a, c, b)), !1 !== h && c.push(h)) : (c = g.getObject(a, !1, b), "undefined" != typeof c ? g.isArray(c) ? c.push(h) : g.setObject(a, [c, h], b) : g.setObject(a, h, b))
        }
      });
      return b
    }, isValid:function() {
      return"" == this.state
    }, onValidStateChange:function() {
    }, _getState:function() {
      var b = e.map(this._descendants, function(b) {
        return b.get("state") || ""
      });
      return 0 <= e.indexOf(b, "Error") ? "Error" : 0 <= e.indexOf(b, "Incomplete") ? "Incomplete" : ""
    }, disconnectChildren:function() {
    }, connectChildren:function(b) {
      this._descendants = this._getDescendantFormWidgets();
      e.forEach(this._descendants, function(b) {
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
      var d = this;
      this.own(b(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function(b) {
        b.target != d.domNode && d._onChildChange(b.type.replace("attrmodified-", ""))
      }));
      this.watch("state", function(b, a, h) {
        this.onValidStateChange("" == h)
      })
    }, destroy:function() {
      this.inherited(arguments)
    }})
  })
}, "dojo/request/iframe":function() {
  define("module require ./watch ./util ./handlers ../_base/lang ../io-query ../query ../has ../dom ../dom-construct ../_base/window ../NodeList-dom".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r) {
    function s(a) {
      return!this.isFulfilled()
    }
    function t(a) {
      return!!this._finished
    }
    function v(a, f) {
      if(!f) {
        try {
          var h = a.options, p = q.doc(q._frame), r = h.handleAs;
          if("html" !== r) {
            if("xml" === r) {
              if("html" === p.documentElement.tagName.toLowerCase()) {
                c("a", p.documentElement).orphan();
                var g = p.documentElement.innerText || p.documentElement.textContent, g = g.replace(/>\s+</g, "\x3e\x3c");
                a.text = d.trim(g)
              }else {
                a.data = p
              }
            }else {
              a.text = p.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = p
          }
        }catch(e) {
          f = e
        }
      }
      f ? this.reject(f) : this._finished ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function n(a) {
      this._callNext()
    }
    function q(a, b, f) {
      var h = g.parseArgs(a, g.deepCreate(u, b), !0);
      a = h.url;
      b = h.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      q._frame || (q._frame = q.create(q._iframeName, y + "();"));
      a = g.deferred(h, null, s, t, v, n);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, q._currentDfd = null, q._fireNextRequest())
      };
      a._legacy = f;
      q._dfdQueue.push(a);
      q._fireNextRequest();
      k(a);
      return f ? a : a.promise
    }
    var p = e.id.replace(/[\/\.\-]/g, "_"), y = p + "_onload";
    r.global[y] || (r.global[y] = function() {
      var a = q._currentDfd;
      if(a) {
        var b = h.byId(a.response.options.form) || a._tmpForm;
        if(b) {
          for(var c = a._contentToClean, p = 0;p < c.length;p++) {
            for(var d = c[p], r = 0;r < b.childNodes.length;r++) {
              var g = b.childNodes[r];
              if(g.name === d) {
                f.destroy(g);
                break
              }
            }
          }
          a._originalAction && b.setAttribute("action", a._originalAction);
          a._originalMethod && (b.setAttribute("method", a._originalMethod), b.method = a._originalMethod);
          a._originalTarget && (b.setAttribute("target", a._originalTarget), b.target = a._originalTarget)
        }
        a._tmpForm && (f.destroy(a._tmpForm), delete a._tmpForm);
        a._finished = !0
      }else {
        q._fireNextRequest()
      }
    });
    var u = {method:"POST"};
    q.create = function(b, h, c) {
      if(r.global[b]) {
        return r.global[b]
      }
      if(r.global.frames[b]) {
        return r.global.frames[b]
      }
      c || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), c = a("config-dojoBlankHtmlUrl") || l.toUrl("dojo/resources/blank.html"));
      h = f.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + c + '" onload\x3d"' + h + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', r.body());
      return r.global[b] = h
    };
    q.doc = function(a) {
      if(a.contentDocument) {
        return a.contentDocument
      }
      var b = a.name;
      if(b) {
        var f = r.doc.getElementsByTagName("iframe");
        if(a.document && f[b].contentWindow && f[b].contentWindow.document) {
          return f[b].contentWindow.document
        }
        if(r.doc.frames[b] && r.doc.frames[b].document) {
          return r.doc.frames[b].document
        }
      }
      return null
    };
    q.setSrc = function(a, b, f) {
      a = r.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        f ? a.location.replace(b) : a.location = b
      }catch(h) {
      }
    };
    q._iframeName = p + "_IoIframe";
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
            var b = a.response, c = b.options, e = a._contentToClean = [], n = h.byId(c.form), y = g.notify, s = c.data || null, t;
            !a._legacy && "POST" === c.method && !n ? n = a._tmpForm = f.create("form", {name:p + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, r.body()) : "GET" === c.method && (n && -1 < b.url.indexOf("?")) && (t = b.url.slice(b.url.indexOf("?") + 1), s = d.mixin(m.queryToObject(t), s));
            if(n) {
              if(!a._legacy) {
                var u = n;
                do {
                  u = u.parentNode
                }while(u && u !== r.doc.documentElement);
                u || (n.style.position = "absolute", n.style.left = "-1000px", n.style.top = "-1000px", r.body().appendChild(n));
                n.name || (n.name = p + "_form")
              }
              if(s) {
                var u = function(a, b) {
                  f.create("input", {type:"hidden", name:a, value:b}, n);
                  e.push(a)
                }, k;
                for(k in s) {
                  var l = s[k];
                  if(d.isArray(l) && 1 < l.length) {
                    for(t = 0;t < l.length;t++) {
                      u(k, l[t])
                    }
                  }else {
                    n[k] ? n[k].value = l : u(k, l)
                  }
                }
              }
              var v = n.getAttributeNode("action"), L = n.getAttributeNode("method"), B = n.getAttributeNode("target");
              b.url && (a._originalAction = v ? v.value : null, v ? v.value = b.url : n.setAttribute("action", b.url));
              if(a._legacy) {
                if(!L || !L.value) {
                  L ? L.value = c.method : n.setAttribute("method", c.method)
                }
              }else {
                a._originalMethod = L ? L.value : null, L ? L.value = c.method : n.setAttribute("method", c.method)
              }
              a._originalTarget = B ? B.value : null;
              B ? B.value = q._iframeName : n.setAttribute("target", q._iframeName);
              n.target = q._iframeName;
              y && y.emit("send", b, a.promise.cancel);
              q._notifyStart(b);
              n.submit()
            }else {
              c = "", b.options.data && (c = b.options.data, "string" !== typeof c && (c = m.objectToQuery(c))), u = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + c, y && y.emit("send", b, a.promise.cancel), q._notifyStart(b), q.setSrc(q._frame, u, !0)
            }
          }
        }
      }catch(z) {
        a.reject(z)
      }
    };
    g.addCommonMethods(q, ["GET", "POST"]);
    return q
  })
}, "dojo/request/handlers":function() {
  define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function(e, l, k, g) {
    function b(a) {
      var b = h[a.options.handleAs];
      a.data = b ? b(a) : a.data || a.text;
      return a
    }
    g.add("activex", "undefined" !== typeof ActiveXObject);
    g.add("dom-parser", function(a) {
      return"DOMParser" in a
    });
    var d;
    if(g("activex")) {
      var m = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], c;
      d = function(a) {
        function b(a) {
          try {
            var f = new ActiveXObject(a);
            f.async = !1;
            f.loadXML(d);
            h = f;
            c = a
          }catch(q) {
            return!1
          }
          return!0
        }
        var h = a.data, d = a.text;
        h && (g("dom-qsa2.1") && !h.querySelectorAll && g("dom-parser")) && (h = (new DOMParser).parseFromString(d, "application/xml"));
        if(!h || !h.documentElement) {
          (!c || !b(c)) && k.some(m, b)
        }
        return h
      }
    }
    var a = function(a) {
      return!g("native-xhr2-blob") && "blob" === a.options.handleAs && "undefined" !== typeof Blob ? new Blob([a.xhr.response], {type:a.xhr.getResponseHeader("Content-Type")}) : a.xhr.response
    }, h = {javascript:function(a) {
      return l.eval(a.text || "")
    }, json:function(a) {
      return e.parse(a.text || null)
    }, xml:d, blob:a, arraybuffer:a, document:a};
    b.register = function(a, b) {
      h[a] = b
    };
    return b
  })
}, "dijit/_Container":function() {
  define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct", "dojo/_base/kernel"], function(e, l, k, g) {
    return l("dijit._Container", null, {buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode)
    }, addChild:function(b, d) {
      var g = this.containerNode;
      if(0 < d) {
        for(g = g.firstChild;0 < d;) {
          1 == g.nodeType && d--, g = g.nextSibling
        }
        g ? d = "before" : (g = this.containerNode, d = "last")
      }
      k.place(b.domNode, g, d);
      this._started && !b._started && b.startup()
    }, removeChild:function(b) {
      "number" == typeof b && (b = this.getChildren()[b]);
      b && (b = b.domNode) && b.parentNode && b.parentNode.removeChild(b)
    }, hasChildren:function() {
      return 0 < this.getChildren().length
    }, _getSiblingOfChild:function(b, d) {
      var g = this.getChildren(), c = e.indexOf(g, b);
      return g[c + d]
    }, getIndexOfChild:function(b) {
      return e.indexOf(this.getChildren(), b)
    }})
  })
}, "dojo/cldr/supplemental":function() {
  define(["../_base/lang", "../i18n"], function(e, l) {
    var k = {};
    e.setObject("dojo.cldr.supplemental", k);
    k.getFirstDayOfWeek = function(g) {
      g = {bd:5, mv:5, ae:6, af:6, bh:6, dj:6, dz:6, eg:6, iq:6, ir:6, jo:6, kw:6, ly:6, ma:6, om:6, qa:6, sa:6, sd:6, sy:6, ye:6, ag:0, ar:0, as:0, au:0, br:0, bs:0, bt:0, bw:0, by:0, bz:0, ca:0, cn:0, co:0, dm:0, "do":0, et:0, gt:0, gu:0, hk:0, hn:0, id:0, ie:0, il:0, "in":0, jm:0, jp:0, ke:0, kh:0, kr:0, la:0, mh:0, mm:0, mo:0, mt:0, mx:0, mz:0, ni:0, np:0, nz:0, pa:0, pe:0, ph:0, pk:0, pr:0, py:0, sg:0, sv:0, th:0, tn:0, tt:0, tw:0, um:0, us:0, ve:0, vi:0, ws:0, za:0, zw:0}[k._region(g)];
      return void 0 === g ? 1 : g
    };
    k._region = function(g) {
      g = l.normalizeLocale(g);
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
    k.getWeekend = function(g) {
      var b = k._region(g);
      g = {"in":0, af:4, dz:4, ir:4, om:4, sa:4, ye:4, ae:5, bh:5, eg:5, il:5, iq:5, jo:5, kw:5, ly:5, ma:5, qa:5, sd:5, sy:5, tn:5}[b];
      b = {af:5, dz:5, ir:5, om:5, sa:5, ye:5, ae:6, bh:5, eg:6, il:6, iq:6, jo:6, kw:6, ly:6, ma:6, qa:6, sd:6, sy:6, tn:6}[b];
      void 0 === g && (g = 6);
      void 0 === b && (b = 0);
      return{start:g, end:b}
    };
    return k
  })
}, "lsmb/TabularForm":function() {
  define("lsmb/layout/TableContainer dojo/dom dojo/dom-class dijit/registry dijit/layout/ContentPane dojo/query dojo/window dojo/_base/declare dijit/form/TextBox".split(" "), function(e, l, k, g, b, d, m, c, a) {
    return c("lsmb/TabularForm", [e], {vertsize:"mobile", vertlabelsize:"mobile", maxCols:1, initOrient:"horiz", constructor:function(a, b) {
      if(void 0 !== b) {
        var c = " " + b.className + " ", g = c.match(/ col-\d+ /);
        g && (this.cols = g[0].replace(/ col-(\d+) /, "$1"));
        if(g = c.match("/ virtsize-w+ /")) {
          this.vertsize = g[0].replace(/ virtsize-(\w+) /, "$1")
        }
        if(g = c.match("/ virtlabel-w+ /")) {
          this.vertlabelsize = g[0].replace(/ virtlabel-(\w+) /, "$1")
        }
      }
      var e = this;
      d("*", e.domNode).forEach(function(a) {
        e.TFRenderElement(a)
      });
      this.maxCols = this.cols;
      this.initOrient = this.orientation
    }, TFRenderElement:function(a) {
      g.byId(a.id) || k.contains(a, "input-row") && TFRenderRow(a)
    }, TFRenderRow:function(a) {
      var c = 0;
      d("*", a).forEach(function(a) {
        TFRenderElement(a);
        ++c
      });
      for(a = c %= this.cols;a < this.cols;++a) {
        var g = new b({content:"\x26nbsp;"});
        this.addChild(g)
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
  define(["./_base/kernel", "./regexp"], function(e, l) {
    e.cookie = function(e, g, b) {
      var d = document.cookie, m;
      if(1 == arguments.length) {
        m = (m = d.match(RegExp("(?:^|; )" + l.escapeString(e) + "\x3d([^;]*)"))) ? decodeURIComponent(m[1]) : void 0
      }else {
        b = b || {};
        d = b.expires;
        if("number" == typeof d) {
          var c = new Date;
          c.setTime(c.getTime() + 864E5 * d);
          d = b.expires = c
        }
        d && d.toUTCString && (b.expires = d.toUTCString());
        g = encodeURIComponent(g);
        var d = e + "\x3d" + g, a;
        for(a in b) {
          d += "; " + a, c = b[a], !0 !== c && (d += "\x3d" + c)
        }
        document.cookie = d
      }
      return m
    };
    e.cookie.isSupported = function() {
      "cookieEnabled" in navigator || (this("__djCookieTest__", "CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" == this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {expires:-1}));
      return navigator.cookieEnabled
    };
    return e.cookie
  })
}, "dijit/form/TextBox":function() {
  define("dojo/_base/declare dojo/dom-construct dojo/dom-style dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ./_FormValueWidget ./_TextBoxMixin dojo/text!./templates/TextBox.html ../main".split(" "), function(e, l, k, g, b, d, m, c, a, h, f) {
    c = e("dijit.form.TextBox" + (m("dojo-bidi") ? "_NoBidi" : ""), [c, a], {templateString:h, _singleNodeTemplate:'\x3cinput class\x3d"dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point\x3d"textbox,focusNode" autocomplete\x3d"off" type\x3d"${type}" ${!nameAttrSetting} /\x3e', _buttonInputDisabled:m("ie") ? "disabled" : "", baseClass:"dijitTextBox", postMixInProperties:function() {
      var a = this.type.toLowerCase();
      if(this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString == this.constructor.prototype.templateString) {
        this.templateString = this._singleNodeTemplate
      }
      this.inherited(arguments)
    }, postCreate:function() {
      this.inherited(arguments);
      9 > m("ie") && this.defer(function() {
        try {
          var a = k.getComputedStyle(this.domNode);
          if(a) {
            var b = a.fontFamily;
            if(b) {
              var c = this.domNode.getElementsByTagName("INPUT");
              if(c) {
                for(a = 0;a < c.length;a++) {
                  c[a].style.fontFamily = b
                }
              }
            }
          }
        }catch(h) {
        }
      })
    }, _setPlaceHolderAttr:function(a) {
      this._set("placeHolder", a);
      this._phspan || (this._attachPoints.push("_phspan"), this._phspan = l.create("span", {className:"dijitPlaceHolder dijitInputField"}, this.textbox, "after"), this.own(d(this._phspan, "mousedown", function(a) {
        a.preventDefault()
      }), d(this._phspan, "touchend, pointerup, MSPointerUp", b.hitch(this, function() {
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
    }, _setValueAttr:function(a, b, c) {
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
    9 > m("ie") && (c.prototype._isTextSelected = function() {
      var a = this.ownerDocument.selection.createRange();
      return a.parentElement() == this.textbox && 0 < a.text.length
    }, f._setSelectionRange = a._setSelectionRange = function(a, b, c) {
      a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveStart("character", -99999), a.moveStart("character", b), a.moveEnd("character", c - b), a.select())
    });
    m("dojo-bidi") && (c = e("dijit.form.TextBox", c, {_setPlaceHolderAttr:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this._phspan)
    }}));
    return c
  })
}, "dojo/NodeList-dom":function() {
  define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function(e, l, k, g, b, d, m, c, a) {
    function h(a) {
      return function(b, c, h) {
        return 2 == arguments.length ? a["string" == typeof c ? "get" : "set"](b, c) : a.set(b, c, h)
      }
    }
    var f = function(a) {
      return 1 == a.length && "string" == typeof a[0]
    }, r = function(a) {
      var b = a.parentNode;
      b && b.removeChild(a)
    }, s = l.NodeList, t = s._adaptWithCondition, v = s._adaptAsForEach, n = s._adaptAsMap;
    g.extend(s, {_normalize:function(a, b) {
      var c = !0 === a.parse;
      if("string" == typeof a.template) {
        var h = a.templateFunc || e.string && e.string.substitute;
        a = h ? h(a.template, a) : a
      }
      h = typeof a;
      "string" == h || "number" == h ? (a = d.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? g._toArray(a.childNodes) : [a]) : g.isArrayLike(a) ? g.isArray(a) || (a = g._toArray(a)) : a = [a];
      c && (a._runParse = !0);
      return a
    }, _cloneNode:function(a) {
      return a.cloneNode(!0)
    }, _place:function(a, b, c, h) {
      if(!(1 != b.nodeType && "only" == c)) {
        for(var f, g = a.length, n = g - 1;0 <= n;n--) {
          var r = h ? this._cloneNode(a[n]) : a[n];
          if(a._runParse && e.parser && e.parser.parse) {
            f || (f = b.ownerDocument.createElement("div"));
            f.appendChild(r);
            e.parser.parse(f);
            for(r = f.firstChild;f.firstChild;) {
              f.removeChild(f.firstChild)
            }
          }
          n == g - 1 ? d.place(r, b, c) : b.parentNode.insertBefore(r, b);
          b = r
        }
      }
    }, position:n(m.position), attr:t(h(c), f), style:t(h(a), f), addClass:v(b.add), removeClass:v(b.remove), toggleClass:v(b.toggle), replaceClass:v(b.replace), empty:v(d.empty), removeAttr:v(c.remove), marginBox:n(m.getMarginBox), place:function(a, b) {
      var c = l(a)[0];
      return this.forEach(function(a) {
        d.place(a, c, b)
      })
    }, orphan:function(a) {
      return(a ? l._filterResult(this, a) : this).forEach(r)
    }, adopt:function(a, b) {
      return l(a).place(this[0], b)._stash(this)
    }, query:function(a) {
      if(!a) {
        return this
      }
      var b = new s;
      this.map(function(c) {
        l(a, c).forEach(function(a) {
          void 0 !== a && b.push(a)
        })
      });
      return b._stash(this)
    }, filter:function(a) {
      var b = arguments, c = this, h = 0;
      if("string" == typeof a) {
        c = l._filterResult(this, b[0]);
        if(1 == b.length) {
          return c._stash(this)
        }
        h = 1
      }
      return this._wrap(k.filter(c, b[h], b[h + 1]), this)
    }, addContent:function(a, b) {
      a = this._normalize(a, this[0]);
      for(var c = 0, h;h = this[c];c++) {
        a.length ? this._place(a, h, b, 0 < c) : d.empty(h)
      }
      return this
    }});
    return s
  })
}, "dijit/layout/_LayoutWidget":function() {
  define("dojo/_base/lang ../_Widget ../_Container ../_Contained ../Viewport dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style".split(" "), function(e, l, k, g, b, d, m, c, a) {
    return d("dijit.layout._LayoutWidget", [l, k, g], {baseClass:"dijitLayoutContainer", isLayoutContainer:!0, _setTitleAttr:null, buildRendering:function() {
      this.inherited(arguments);
      m.add(this.domNode, "dijitContainer")
    }, startup:function() {
      if(!this._started) {
        this.inherited(arguments);
        var a = this.getParent && this.getParent();
        if(!a || !a.isLayoutContainer) {
          this.resize(), this.own(b.on("resize", e.hitch(this, "resize")))
        }
      }
    }, resize:function(b, f) {
      var d = this.domNode;
      b && c.setMarginBox(d, b);
      var g = f || {};
      e.mixin(g, b || {});
      if(!("h" in g) || !("w" in g)) {
        g = e.mixin(c.getMarginBox(d), g)
      }
      var t = a.getComputedStyle(d), k = c.getMarginExtents(d, t), n = c.getBorderExtents(d, t), g = this._borderBox = {w:g.w - (k.w + n.w), h:g.h - (k.h + n.h)}, k = c.getPadExtents(d, t);
      this._contentBox = {l:a.toPixelValue(d, t.paddingLeft), t:a.toPixelValue(d, t.paddingTop), w:g.w - k.w, h:g.h - k.h};
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
  define("dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/sniff ../_Widget ../_TemplatedMixin ./_FormMixin ../layout/_ContentPaneResizeMixin".split(" "), function(e, l, k, g, b, d, m, c) {
    return e("dijit.form.Form", [b, d, m, c], {name:"", action:"", method:"", encType:"", "accept-charset":"", accept:"", target:"", templateString:"\x3cform data-dojo-attach-point\x3d'containerNode' data-dojo-attach-event\x3d'onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}\x3e\x3c/form\x3e", postMixInProperties:function() {
      this.nameAttrSetting = this.name ? "name\x3d'" + this.name + "'" : "";
      this.inherited(arguments)
    }, execute:function() {
    }, onExecute:function() {
    }, _setEncTypeAttr:function(a) {
      l.set(this.domNode, "encType", a);
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
        k.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0"), this.onExecute(), this.execute(this.getValues())
      }
      !1 === this.onSubmit(a) && (a.stopPropagation(), a.preventDefault())
    }, onSubmit:function() {
      return this.isValid()
    }, submit:function() {
      !1 !== this.onSubmit() && this.containerNode.submit()
    }})
  })
}, "lsmb/iframe":function() {
  define("module require dojo/request/watch dojo/request/util dojo/request/handlers dojo/_base/lang dojo/io-query dojo/query dojo/has dojo/dom dojo/dom-construct dojo/cookie dojo/_base/window dojo/NodeList-dom".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s) {
    function t(a) {
      return!this.isFulfilled()
    }
    function v(a) {
      return!!this._finished || "requested" !== r(w)
    }
    function n(a, g) {
      var n = a.options, q = h.byId(n.form) || this._tmpForm;
      if(q) {
        for(var e = this._contentToClean, y = 0;y < e.length;y++) {
          for(var k = e[y], s = 0;s < q.childNodes.length;s++) {
            var t = q.childNodes[s];
            if(t.name === k) {
              f.destroy(t);
              break
            }
          }
        }
        this._originalAction && q.setAttribute("action", this._originalAction);
        this._originalMethod && (q.setAttribute("method", this._originalMethod), q.method = this._originalMethod);
        this._originalTarget && (q.setAttribute("target", this._originalTarget), q.target = this._originalTarget)
      }
      this._tmpForm && (f.destroy(this._tmpForm), delete this._tmpForm);
      if(!g && "requested" === r(w)) {
        try {
          var m = p.doc(p._frame), u = n.handleAs;
          if("html" !== u) {
            if("xml" === u) {
              if("html" === m.documentElement.tagName.toLowerCase()) {
                c("a", m.documentElement).orphan();
                var l = m.documentElement.innerText || m.documentElement.textContent, l = l.replace(/>\s+</g, "\x3e\x3c");
                a.text = d.trim(l)
              }else {
                a.data = m
              }
            }else {
              a.text = m.getElementsByTagName("textarea")[0].value
            }
            b(a)
          }else {
            a.data = m
          }
        }catch(v) {
          g = v
        }
      }
      g ? this.reject(g) : this._finished || "requested" !== r(w) ? this.resolve(a) : this.reject(Error("Invalid dojo/request/iframe request state"))
    }
    function q(a) {
      this._callNext()
    }
    function p(a, b, c) {
      var f = g.parseArgs(a, g.deepCreate(x, b), !0);
      a = f.url;
      b = f.options;
      if("GET" !== b.method && "POST" !== b.method) {
        throw Error(b.method + " not supported by dojo/request/iframe");
      }
      p._frame || (p._frame = p.create(p._iframeName, u + "();"));
      a = g.deferred(f, null, t, v, n, q);
      a._callNext = function() {
        this._calledNext || (this._calledNext = !0, p._currentDfd = null, p._fireNextRequest())
      };
      a._legacy = c;
      p._dfdQueue.push(a);
      p._fireNextRequest();
      k(a);
      return c ? a : a.promise
    }
    var y = e.id.replace(/[\/\.\-]/g, "_"), u = y + "_onload", w = "request-download." + (new Date).getTime();
    s.global[u] || (s.global[u] = function() {
      var a = p._currentDfd;
      a ? a._finished = !0 : p._fireNextRequest()
    });
    var x = {method:"POST"};
    p.create = function(b, c, h) {
      if(s.global[b]) {
        return s.global[b]
      }
      if(s.global.frames[b]) {
        return s.global.frames[b]
      }
      h || (a("config-useXDomain") && a("config-dojoBlankHtmlUrl"), h = a("config-dojoBlankHtmlUrl") || l.toUrl("dojo/resources/blank.html"));
      c = f.place('\x3ciframe id\x3d"' + b + '" name\x3d"' + b + '" src\x3d"' + h + '" onload\x3d"' + c + '" style\x3d"position: absolute; left: 1px; top: 1px; height: 1px; width: 1px; visibility: hidden"\x3e', s.body());
      return s.global[b] = c
    };
    p.doc = function(a) {
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
    p.setSrc = function(a, b, c) {
      a = s.global.frames[a.name];
      a.contentWindow && (a = a.contentWindow);
      try {
        c ? a.location.replace(b) : a.location = b
      }catch(f) {
      }
    };
    p._iframeName = y + "_IoIframe";
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
            var b = a.response, c = b.options, q = a._contentToClean = [], n = h.byId(c.form), e = g.notify, k = c.data || null, t;
            k["request.download-cookie"] = w;
            r(w, "requested");
            !a._legacy && "POST" === c.method && !n ? n = a._tmpForm = f.create("form", {name:y + "_form", style:{position:"absolute", top:"-1000px", left:"-1000px"}}, s.body()) : "GET" === c.method && (n && -1 < b.url.indexOf("?")) && (t = b.url.slice(b.url.indexOf("?") + 1), k = d.mixin(m.queryToObject(t), k));
            if(n) {
              if(!a._legacy) {
                var u = n;
                do {
                  u = u.parentNode
                }while(u && u !== s.doc.documentElement);
                u || (n.style.position = "absolute", n.style.left = "-1000px", n.style.top = "-1000px", s.body().appendChild(n));
                n.name || (n.name = y + "_form")
              }
              if(k) {
                var u = function(a, b) {
                  f.create("input", {type:"hidden", name:a, value:b}, n);
                  q.push(a)
                }, l;
                for(l in k) {
                  var v = k[l];
                  if(d.isArray(v) && 1 < v.length) {
                    for(t = 0;t < v.length;t++) {
                      u(l, v[t])
                    }
                  }else {
                    n[l] ? n[l].value = v : u(l, v)
                  }
                }
              }
              var x = n.getAttributeNode("action"), z = n.getAttributeNode("method"), C = n.getAttributeNode("target");
              b.url && (a._originalAction = x ? x.value : null, x ? x.value = b.url : n.setAttribute("action", b.url));
              if(a._legacy) {
                if(!z || !z.value) {
                  z ? z.value = c.method : n.setAttribute("method", c.method)
                }
              }else {
                a._originalMethod = z ? z.value : null, z ? z.value = c.method : n.setAttribute("method", c.method)
              }
              a._originalTarget = C ? C.value : null;
              C ? C.value = p._iframeName : n.setAttribute("target", p._iframeName);
              n.target = p._iframeName;
              e && e.emit("send", b, a.promise.cancel);
              p._notifyStart(b);
              n.submit()
            }else {
              c = "", b.options.data && (c = b.options.data, "string" !== typeof c && (c = m.objectToQuery(c))), u = b.url + (-1 < b.url.indexOf("?") ? "\x26" : "?") + c, e && e.emit("send", b, a.promise.cancel), p._notifyStart(b), p.setSrc(p._frame, u, !0)
            }
          }
        }
      }catch(P) {
        a.reject(P)
      }
    };
    g.addCommonMethods(p, ["GET", "POST"]);
    return p
  })
}, "dijit/layout/utils":function() {
  define(["dojo/_base/array", "dojo/dom-class", "dojo/dom-geometry", "dojo/dom-style", "dojo/_base/lang"], function(e, l, k, g, b) {
    function d(c, a) {
      var h = c.resize ? c.resize(a) : k.setMarginBox(c.domNode, a);
      h ? b.mixin(c, h) : (b.mixin(c, k.getMarginBox(c.domNode)), b.mixin(c, a))
    }
    var m = {marginBox2contentBox:function(b, a) {
      var h = g.getComputedStyle(b), f = k.getMarginExtents(b, h), d = k.getPadBorderExtents(b, h);
      return{l:g.toPixelValue(b, h.paddingLeft), t:g.toPixelValue(b, h.paddingTop), w:a.w - (f.w + d.w), h:a.h - (f.h + d.h)}
    }, layoutChildren:function(c, a, h, f, g) {
      a = b.mixin({}, a);
      l.add(c, "dijitLayoutContainer");
      h = e.filter(h, function(a) {
        return"center" != a.region && "client" != a.layoutAlign
      }).concat(e.filter(h, function(a) {
        return"center" == a.region || "client" == a.layoutAlign
      }));
      e.forEach(h, function(b) {
        var c = b.domNode, h = b.region || b.layoutAlign;
        if(!h) {
          throw Error("No region setting for " + b.id);
        }
        var n = c.style;
        n.left = a.l + "px";
        n.top = a.t + "px";
        n.position = "absolute";
        l.add(c, "dijitAlign" + (h.substring(0, 1).toUpperCase() + h.substring(1)));
        c = {};
        f && f == b.id && (c["top" == b.region || "bottom" == b.region ? "h" : "w"] = g);
        "leading" == h && (h = b.isLeftToRight() ? "left" : "right");
        "trailing" == h && (h = b.isLeftToRight() ? "right" : "left");
        "top" == h || "bottom" == h ? (c.w = a.w, d(b, c), a.h -= b.h, "top" == h ? a.t += b.h : n.top = a.t + a.h + "px") : "left" == h || "right" == h ? (c.h = a.h, d(b, c), a.w -= b.w, "left" == h ? a.l += b.w : n.left = a.l + a.w + "px") : ("client" == h || "center" == h) && d(b, a)
      })
    }};
    b.setObject("dijit.layout.utils", m);
    return m
  })
}, "dijit/layout/ContentPane":function() {
  define("dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/i18n!../nls/loading dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n, q) {
    return h("dijit.layout.ContentPane", [k, g, b], {href:"", content:"", extractContent:!1, parseOnLoad:!0, parserScope:e._scopeName, preventCache:!1, preload:!1, refreshOnShow:!1, loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e", errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e", isLoaded:!1, 
    baseClass:"dijitContentPane", ioArgs:{}, onLoadDeferred:null, _setTitleAttr:null, stopParser:!0, template:!1, markupFactory:function(a, b, c) {
      var h = new c(a, b);
      return!h.href && h._contentSetter && h._contentSetter.parseDeferred && !h._contentSetter.parseDeferred.isFulfilled() ? h._contentSetter.parseDeferred.then(function() {
        return h
      }) : h
    }, create:function(a, b) {
      if((!a || !a.template) && b && !("href" in a) && !("content" in a)) {
        b = r.byId(b);
        for(var c = b.ownerDocument.createDocumentFragment();b.firstChild;) {
          c.appendChild(b.firstChild)
        }
        a = l.delegate(a, {content:c})
      }
      this.inherited(arguments, [a, b])
    }, postMixInProperties:function() {
      this.inherited(arguments);
      var a = n.getLocalization("dijit", "loading", this.lang);
      this.loadingMessage = d.substitute(this.loadingMessage, a);
      this.errorMessage = d.substitute(this.errorMessage, a)
    }, buildRendering:function() {
      this.inherited(arguments);
      this.containerNode || (this.containerNode = this.domNode);
      this.domNode.removeAttribute("title")
    }, startup:function() {
      this.inherited(arguments);
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && l.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, _startChildren:function() {
      a.forEach(this.getChildren(), function(a) {
        !a._started && (!a._destroyed && l.isFunction(a.startup)) && (a.startup(), a._started = !0)
      });
      this._contentSetter && a.forEach(this._contentSetter.parseResults, function(a) {
        !a._started && (!a._destroyed && l.isFunction(a.startup)) && (a.startup(), a._started = !0)
      }, this)
    }, setHref:function(a) {
      e.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
      return this.set("href", a)
    }, _setHrefAttr:function(a) {
      this.cancel();
      this.onLoadDeferred = new f(l.hitch(this, "cancel"));
      this.onLoadDeferred.then(l.hitch(this, "onLoad"));
      this._set("href", a);
      this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
      return this.onLoadDeferred
    }, setContent:function(a) {
      e.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
      this.set("content", a)
    }, _setContentAttr:function(a) {
      this._set("href", "");
      this.cancel();
      this.onLoadDeferred = new f(l.hitch(this, "cancel"));
      this._created && this.onLoadDeferred.then(l.hitch(this, "onLoad"));
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
      this.onLoadDeferred = new f(l.hitch(this, "cancel"));
      this.onLoadDeferred.then(l.hitch(this, "onLoad"));
      this._load();
      return this.onLoadDeferred
    }, _load:function() {
      this._setContent(this.onDownloadStart(), !0);
      var a = this, b = {preventCache:this.preventCache || this.refreshOnShow, url:this.href, handleAs:"text"};
      l.isObject(this.ioArgs) && l.mixin(b, this.ioArgs);
      var c = this._xhrDfd = (this.ioMethod || v.get)(b), h;
      c.then(function(b) {
        h = b;
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
        return h
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
      b || t.empty(this.containerNode);
      delete this._singleChild
    }, _setContent:function(a, b) {
      this.destroyDescendants();
      var c = this._contentSetter;
      c && c instanceof m._ContentSetter || (c = this._contentSetter = new m._ContentSetter({node:this.containerNode, _onError:l.hitch(this, this._onError), onContentError:l.hitch(this, function(a) {
        a = this.onContentError(a);
        try {
          this.containerNode.innerHTML = a
        }catch(b) {
          console.error("Fatal " + this.id + " could not change content due to " + b.message, b)
        }
      })}));
      var h = l.mixin({cleanContent:this.cleanContent, extractContent:this.extractContent, parseContent:!a.domNode && this.parseOnLoad, parserScope:this.parserScope, startup:!1, dir:this.dir, lang:this.lang, textDir:this.textDir}, this._contentSetterParams || {}), h = c.set(l.isObject(a) && a.domNode ? a.domNode : a, h), f = this;
      return q(h && h.then ? h : c.parseDeferred, function() {
        delete f._contentSetterParams;
        b || (f._started && (f._startChildren(), f._scheduleLayout()), f._onLoadHandler(a))
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
}, "dojo/date/locale":function() {
  define("../_base/lang ../_base/array ../date ../cldr/supplemental ../i18n ../regexp ../string ../i18n!../cldr/nls/gregorian module".split(" "), function(e, l, k, g, b, d, m, c, a) {
    function h(a, b, c, h) {
      return h.replace(/([a-z])\1*/ig, function(f) {
        var d, e, r = f.charAt(0);
        f = f.length;
        var k = ["abbr", "wide", "narrow"];
        switch(r) {
          case "G":
            d = b[4 > f ? "eraAbbr" : "eraNames"][0 > a.getFullYear() ? 0 : 1];
            break;
          case "y":
            d = a.getFullYear();
            switch(f) {
              case 1:
                break;
              case 2:
                if(!c.fullYear) {
                  d = String(d);
                  d = d.substr(d.length - 2);
                  break
                }
              ;
              default:
                e = !0
            }
            break;
          case "Q":
          ;
          case "q":
            d = Math.ceil((a.getMonth() + 1) / 3);
            e = !0;
            break;
          case "M":
          ;
          case "L":
            d = a.getMonth();
            3 > f ? (d += 1, e = !0) : (r = ["months", "L" == r ? "standAlone" : "format", k[f - 3]].join("-"), d = b[r][d]);
            break;
          case "w":
            d = s._getWeekOfYear(a, 0);
            e = !0;
            break;
          case "d":
            d = a.getDate();
            e = !0;
            break;
          case "D":
            d = s._getDayOfYear(a);
            e = !0;
            break;
          case "e":
          ;
          case "c":
            if(d = a.getDay(), 2 > f) {
              d = (d - g.getFirstDayOfWeek(c.locale) + 8) % 7;
              break
            }
          ;
          case "E":
            d = a.getDay();
            3 > f ? (d += 1, e = !0) : (r = ["days", "c" == r ? "standAlone" : "format", k[f - 3]].join("-"), d = b[r][d]);
            break;
          case "a":
            r = 12 > a.getHours() ? "am" : "pm";
            d = c[r] || b["dayPeriods-format-wide-" + r];
            break;
          case "h":
          ;
          case "H":
          ;
          case "K":
          ;
          case "k":
            e = a.getHours();
            switch(r) {
              case "h":
                d = e % 12 || 12;
                break;
              case "H":
                d = e;
                break;
              case "K":
                d = e % 12;
                break;
              case "k":
                d = e || 24
            }
            e = !0;
            break;
          case "m":
            d = a.getMinutes();
            e = !0;
            break;
          case "s":
            d = a.getSeconds();
            e = !0;
            break;
          case "S":
            d = Math.round(a.getMilliseconds() * Math.pow(10, f - 3));
            e = !0;
            break;
          case "v":
          ;
          case "z":
            if(d = s._getZone(a, !0, c)) {
              break
            }
            f = 4;
          case "Z":
            r = s._getZone(a, !1, c);
            r = [0 >= r ? "+" : "-", m.pad(Math.floor(Math.abs(r) / 60), 2), m.pad(Math.abs(r) % 60, 2)];
            4 == f && (r.splice(0, 0, "GMT"), r.splice(3, 0, ":"));
            d = r.join("");
            break;
          default:
            throw Error("dojo.date.locale.format: invalid pattern char: " + h);
        }
        e && (d = m.pad(d, f));
        return d
      })
    }
    function f(a, b, c, h) {
      var f = function(a) {
        return a
      };
      b = b || f;
      c = c || f;
      h = h || f;
      var d = a.match(/(''|[^'])+/g), g = "'" == a.charAt(0);
      l.forEach(d, function(a, h) {
        a ? (d[h] = (g ? c : b)(a.replace(/''/g, "'")), g = !g) : d[h] = ""
      });
      return h(d.join(""))
    }
    function r(a, b, c, h) {
      h = d.escapeString(h);
      c.strict || (h = h.replace(" a", " ?a"));
      return h.replace(/([a-z])\1*/ig, function(h) {
        var f;
        f = h.charAt(0);
        var d = h.length, g = "", e = "";
        c.strict ? (1 < d && (g = "0{" + (d - 1) + "}"), 2 < d && (e = "0{" + (d - 2) + "}")) : (g = "0?", e = "0{0,2}");
        switch(f) {
          case "y":
            f = "\\d{2,4}";
            break;
          case "M":
          ;
          case "L":
            f = 2 < d ? "\\S+?" : "1[0-2]|" + g + "[1-9]";
            break;
          case "D":
            f = "[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|" + g + "[1-9][0-9]|" + e + "[1-9]";
            break;
          case "d":
            f = "3[01]|[12]\\d|" + g + "[1-9]";
            break;
          case "w":
            f = "[1-4][0-9]|5[0-3]|" + g + "[1-9]";
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            f = ".+?";
            break;
          case "h":
            f = "1[0-2]|" + g + "[1-9]";
            break;
          case "k":
            f = "1[01]|" + g + "\\d";
            break;
          case "H":
            f = "1\\d|2[0-3]|" + g + "\\d";
            break;
          case "K":
            f = "1\\d|2[0-4]|" + g + "[1-9]";
            break;
          case "m":
          ;
          case "s":
            f = "[0-5]\\d";
            break;
          case "S":
            f = "\\d{" + d + "}";
            break;
          case "a":
            d = c.am || b["dayPeriods-format-wide-am"];
            g = c.pm || b["dayPeriods-format-wide-pm"];
            f = d + "|" + g;
            c.strict || (d != d.toLowerCase() && (f += "|" + d.toLowerCase()), g != g.toLowerCase() && (f += "|" + g.toLowerCase()), -1 != f.indexOf(".") && (f += "|" + f.replace(/\./g, "")));
            f = f.replace(/\./g, "\\.");
            break;
          default:
            f = ".*"
        }
        a && a.push(h);
        return"(" + f + ")"
      }).replace(/[\xa0 ]/g, "[\\s\\xa0]")
    }
    var s = {};
    e.setObject(a.id.replace(/\//g, "."), s);
    s._getZone = function(a, b, c) {
      return b ? k.getTimezoneName(a) : a.getTimezoneOffset()
    };
    s.format = function(a, c) {
      c = c || {};
      var d = b.normalizeLocale(c.locale), g = c.formatLength || "short", d = s._getGregorianBundle(d), r = [], k = e.hitch(this, h, a, d, c);
      if("year" == c.selector) {
        return f(d["dateFormatItem-yyyy"] || "yyyy", k)
      }
      var m;
      "date" != c.selector && (m = c.timePattern || d["timeFormat-" + g]) && r.push(f(m, k));
      "time" != c.selector && (m = c.datePattern || d["dateFormat-" + g]) && r.push(f(m, k));
      return 1 == r.length ? r[0] : d["dateTimeFormat-" + g].replace(/\'/g, "").replace(/\{(\d+)\}/g, function(a, b) {
        return r[b]
      })
    };
    s.regexp = function(a) {
      return s._parseInfo(a).regexp
    };
    s._parseInfo = function(a) {
      a = a || {};
      var c = b.normalizeLocale(a.locale), c = s._getGregorianBundle(c), h = a.formatLength || "short", d = a.datePattern || c["dateFormat-" + h], g = a.timePattern || c["timeFormat-" + h], h = "date" == a.selector ? d : "time" == a.selector ? g : c["dateTimeFormat-" + h].replace(/\{(\d+)\}/g, function(a, b) {
        return[g, d][b]
      }), k = [];
      return{regexp:f(h, e.hitch(this, r, k, c, a)), tokens:k, bundle:c}
    };
    s.parse = function(a, b) {
      var c = /[\u200E\u200F\u202A\u202E]/g, f = s._parseInfo(b), h = f.tokens, d = f.bundle, c = RegExp("^" + f.regexp.replace(c, "") + "$", f.strict ? "" : "i").exec(a && a.replace(c, ""));
      if(!c) {
        return null
      }
      var g = ["abbr", "wide", "narrow"], e = [1970, 0, 1, 0, 0, 0, 0], r = "", c = l.every(c, function(a, c) {
        if(!c) {
          return!0
        }
        var f = h[c - 1], n = f.length, f = f.charAt(0);
        switch(f) {
          case "y":
            if(2 != n && b.strict) {
              e[0] = a
            }else {
              if(100 > a) {
                a = Number(a), f = "" + (new Date).getFullYear(), n = 100 * f.substring(0, 2), f = Math.min(Number(f.substring(2, 4)) + 20, 99), e[0] = a < f ? n + a : n - 100 + a
              }else {
                if(b.strict) {
                  return!1
                }
                e[0] = a
              }
            }
            break;
          case "M":
          ;
          case "L":
            if(2 < n) {
              if(n = d["months-" + ("L" == f ? "standAlone" : "format") + "-" + g[n - 3]].concat(), b.strict || (a = a.replace(".", "").toLowerCase(), n = l.map(n, function(a) {
                return a.replace(".", "").toLowerCase()
              })), a = l.indexOf(n, a), -1 == a) {
                return!1
              }
            }else {
              a--
            }
            e[1] = a;
            break;
          case "E":
          ;
          case "e":
          ;
          case "c":
            n = d["days-" + ("c" == f ? "standAlone" : "format") + "-" + g[n - 3]].concat();
            b.strict || (a = a.toLowerCase(), n = l.map(n, function(a) {
              return a.toLowerCase()
            }));
            a = l.indexOf(n, a);
            if(-1 == a) {
              return!1
            }
            break;
          case "D":
            e[1] = 0;
          case "d":
            e[2] = a;
            break;
          case "a":
            n = b.am || d["dayPeriods-format-wide-am"];
            f = b.pm || d["dayPeriods-format-wide-pm"];
            if(!b.strict) {
              var p = /\./g;
              a = a.replace(p, "").toLowerCase();
              n = n.replace(p, "").toLowerCase();
              f = f.replace(p, "").toLowerCase()
            }
            if(b.strict && a != n && a != f) {
              return!1
            }
            r = a == f ? "p" : a == n ? "a" : "";
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
            e[3] = a;
            break;
          case "m":
            e[4] = a;
            break;
          case "s":
            e[5] = a;
            break;
          case "S":
            e[6] = a
        }
        return!0
      }), f = +e[3];
      "p" === r && 12 > f ? e[3] = f + 12 : "a" === r && 12 == f && (e[3] = 0);
      f = new Date(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
      b.strict && f.setFullYear(e[0]);
      var m = h.join(""), t = -1 != m.indexOf("d"), m = -1 != m.indexOf("M");
      if(!c || m && f.getMonth() > e[1] || t && f.getDate() > e[2]) {
        return null
      }
      if(m && f.getMonth() < e[1] || t && f.getDate() < e[2]) {
        f = k.add(f, "hour", 1)
      }
      return f
    };
    var t = [], v = {};
    s.addCustomFormats = function(a, b) {
      t.push({pkg:a, name:b});
      v = {}
    };
    s._getGregorianBundle = function(a) {
      if(v[a]) {
        return v[a]
      }
      var c = {};
      l.forEach(t, function(f) {
        f = b.getLocalization(f.pkg, f.name, a);
        c = e.mixin(c, f)
      }, this);
      return v[a] = c
    };
    s.addCustomFormats(a.id.replace(/\/date\/locale$/, ".cldr"), "gregorian");
    s.getNames = function(a, b, c, f) {
      var h;
      f = s._getGregorianBundle(f);
      a = [a, c, b];
      "standAlone" == c && (c = a.join("-"), h = f[c], 1 == h[0] && (h = void 0));
      a[1] = "format";
      return(h || f[a.join("-")]).concat()
    };
    s.isWeekend = function(a, b) {
      var c = g.getWeekend(b), f = (a || new Date).getDay();
      c.end < c.start && (c.end += 7, f < c.start && (f += 7));
      return f >= c.start && f <= c.end
    };
    s._getDayOfYear = function(a) {
      return k.difference(new Date(a.getFullYear(), 0, 1, a.getHours()), a) + 1
    };
    s._getWeekOfYear = function(a, b) {
      1 == arguments.length && (b = 0);
      var c = (new Date(a.getFullYear(), 0, 1)).getDay(), f = Math.floor((s._getDayOfYear(a) + (c - b + 7) % 7 - 1) / 7);
      c == b && f++;
      return f
    };
    return s
  })
}, "dojo/errors/RequestTimeoutError":function() {
  define(["./create", "./RequestError"], function(e, l) {
    return e("RequestTimeoutError", null, l, {dojoType:"timeout"})
  })
}, "dijit/form/DateTextBox":function() {
  define(["dojo/_base/declare", "../Calendar", "./_DateTimeTextBox"], function(e, l, k) {
    return e("dijit.form.DateTextBox", k, {baseClass:"dijitTextBox dijitComboBox dijitDateTextBox", popupClass:l, _selector:"date", maxHeight:Infinity, value:new Date("")})
  })
}, "dojo/json":function() {
  define(["./has"], function(e) {
    var l = "undefined" != typeof JSON;
    e.add("json-parse", l);
    e.add("json-stringify", l && '{"a":1}' == JSON.stringify({a:0}, function(g, b) {
      return b || 1
    }));
    if(e("json-stringify")) {
      return JSON
    }
    var k = function(g) {
      return('"' + g.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
    };
    return{parse:e("json-parse") ? JSON.parse : function(g, b) {
      if(b && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(g)) {
        throw new SyntaxError("Invalid characters in JSON");
      }
      return eval("(" + g + ")")
    }, stringify:function(g, b, d) {
      function e(a, h, f) {
        b && (a = b(f, a));
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
          return k(a)
        }
        if("function" == g || "undefined" == g) {
          return c
        }
        if("function" == typeof a.toJSON) {
          return e(a.toJSON(f), h, f)
        }
        if(a instanceof Date) {
          return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(b, c, f) {
            b = a["getUTC" + c]() + (f ? 1 : 0);
            return 10 > b ? "0" + b : b
          })
        }
        if(a.valueOf() !== a) {
          return e(a.valueOf(), h, f)
        }
        var s = d ? h + d : "", t = d ? " " : "", l = d ? "\n" : "";
        if(a instanceof Array) {
          var t = a.length, n = [];
          for(f = 0;f < t;f++) {
            g = e(a[f], s, f), "string" != typeof g && (g = "null"), n.push(l + s + g)
          }
          return"[" + n.join(",") + l + h + "]"
        }
        n = [];
        for(f in a) {
          var q;
          if(a.hasOwnProperty(f)) {
            if("number" == typeof f) {
              q = '"' + f + '"'
            }else {
              if("string" == typeof f) {
                q = k(f)
              }else {
                continue
              }
            }
            g = e(a[f], s, f);
            "string" == typeof g && n.push(l + s + q + ":" + t + g)
          }
        }
        return"{" + n.join(",") + l + h + "}"
      }
      var c;
      "string" == typeof b && (d = b, b = null);
      return e(g, "", "")
    }}
  })
}, "dojo/_base/json":function() {
  define(["./kernel", "../json"], function(e, l) {
    e.fromJson = function(e) {
      return eval("(" + e + ")")
    };
    e._escapeString = l.stringify;
    e.toJsonIndentStr = "\t";
    e.toJson = function(k, g) {
      return l.stringify(k, function(b, d) {
        if(d) {
          var g = d.__json__ || d.json;
          if("function" == typeof g) {
            return g.call(d)
          }
        }
        return d
      }, g && e.toJsonIndentStr)
    };
    return e
  })
}, "dijit/form/_FormWidgetMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/mouse dojo/on dojo/sniff dojo/window ../a11y".split(" "), function(e, l, k, g, b, d, m, c, a, h) {
    return l("dijit.form._FormWidgetMixin", null, {name:"", alt:"", value:"", type:"text", "aria-label":"focusNode", tabIndex:"0", _setTabIndexAttr:"focusNode", disabled:!1, intermediateChanges:!1, scrollOnFocus:!0, _setIdAttr:"focusNode", _setDisabledAttr:function(a) {
      this._set("disabled", a);
      /^(button|input|select|textarea|optgroup|option|fieldset)$/i.test(this.focusNode.tagName) ? k.set(this.focusNode, "disabled", a) : this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
      this.valueNode && k.set(this.valueNode, "disabled", a);
      a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex" in this.attributeMap ? this.attributeMap.tabIndex : "_setTabIndexAttr" in this ? this._setTabIndexAttr : "focusNode", e.forEach(b.isArray(a) ? a : [a], function(a) {
        a = this[a];
        c("webkit") || h.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
      }, this)) : "" != this.tabIndex && this.set("tabIndex", this.tabIndex)
    }, _onFocus:function(f) {
      if("mouse" == f && this.isFocusable()) {
        var h = this.own(m(this.focusNode, "focus", function() {
          g.remove();
          h.remove()
        }))[0], d = c("pointer-events") ? "pointerup" : c("MSPointer") ? "MSPointerUp" : c("touch-events") ? "touchend, mouseup" : "mouseup", g = this.own(m(this.ownerDocumentBody, d, b.hitch(this, function(a) {
          g.remove();
          h.remove();
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
  define("./_base/kernel require ./has ./_base/array ./_base/config ./_base/lang ./_base/xhr ./json module".split(" "), function(e, l, k, g, b, d, m, c, a) {
    k.add("dojo-preload-i18n-Api", 1);
    m = e.i18n = {};
    var h = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, f = function(a, b, c, f) {
      var h = [c + f];
      b = b.split("-");
      for(var d = "", g = 0;g < b.length;g++) {
        if(d += (d ? "-" : "") + b[g], !a || a[d]) {
          h.push(c + d + "/" + f), h.specificity = d
        }
      }
      return h
    }, r = {}, s = function(a, b, c) {
      c = c ? c.toLowerCase() : e.locale;
      a = a.replace(/\./g, "/");
      b = b.replace(/\./g, "/");
      return/root/i.test(c) ? a + "/nls/" + b : a + "/nls/" + c + "/" + b
    }, t = e.getL10nName = function(b, c, f) {
      return a.id + "!" + s(b, c, f)
    }, v = function(a, b, c, h, g, e) {
      a([b], function(n) {
        var p = d.clone(n.root || n.ROOT), q = f(!n._v1x && n, g, c, h);
        a(q, function() {
          for(var a = 1;a < q.length;a++) {
            p = d.mixin(d.clone(p), arguments[a])
          }
          r[b + "/" + g] = p;
          p.$locale = q.specificity;
          e()
        })
      })
    }, n = function(a) {
      var c = b.extraLocale || [], c = d.isArray(c) ? c : [c];
      c.push(a);
      return c
    }, q = function(a, b, f) {
      if(k("dojo-preload-i18n-Api")) {
        var p = a.split("*"), q = "preload" == p[1];
        q && (r[a] || (r[a] = 1, x(p[2], c.parse(p[3]), 1, b)), f(1));
        if(!(p = q)) {
          u && w.push([a, b, f]), p = u
        }
        if(p) {
          return
        }
      }
      a = h.exec(a);
      var m = a[1] + "/", t = a[5] || a[4], s = m + t, p = (a = a[5] && a[4]) || e.locale || "", l = s + "/" + p;
      a = a ? [p] : n(p);
      var y = a.length, A = function() {
        --y || f(d.delegate(r[l]))
      };
      g.forEach(a, function(a) {
        var c = s + "/" + a;
        k("dojo-preload-i18n-Api") && G(c);
        r[c] ? A() : v(b, s, m, t, a, A)
      })
    };
    if(k("dojo-unit-tests")) {
      var p = m.unitTests = []
    }
    k("dojo-preload-i18n-Api");
    var y = m.normalizeLocale = function(a) {
      a = a ? a.toLowerCase() : e.locale;
      return"root" == a ? "ROOT" : a
    }, u = 0, w = [], x = m._preloadLocalizations = function(a, b, c, f) {
      function h(a, b) {
        f([a], b)
      }
      function n(a, b) {
        for(var c = a.split("-");c.length;) {
          if(b(c.join("-"))) {
            return
          }
          c.pop()
        }
        b("ROOT")
      }
      function p() {
        for(--u;!u && w.length;) {
          q.apply(null, w.shift())
        }
      }
      function k(c) {
        c = y(c);
        n(c, function(e) {
          if(0 <= g.indexOf(b, e)) {
            var q = a.replace(/\./g, "/") + "_" + e;
            u++;
            h(q, function(a) {
              for(var b in a) {
                var h = a[b], g = b.match(/(.+)\/([^\/]+)$/), q;
                if(g && (q = g[2], g = g[1] + "/", h._localized)) {
                  var k;
                  if("ROOT" === e) {
                    var m = k = h._localized;
                    delete h._localized;
                    m.root = h;
                    r[l.toAbsMid(b)] = m
                  }else {
                    k = h._localized, r[l.toAbsMid(g + q + "/" + e)] = h
                  }
                  e !== c && function(a, b, h, g) {
                    var e = [], q = [];
                    n(c, function(c) {
                      g[c] && (e.push(l.toAbsMid(a + c + "/" + b)), q.push(l.toAbsMid(a + b + "/" + c)))
                    });
                    e.length ? (u++, f(e, function() {
                      for(var f = e.length - 1;0 <= f;f--) {
                        h = d.mixin(d.clone(h), arguments[f]), r[q[f]] = h
                      }
                      r[l.toAbsMid(a + b + "/" + c)] = d.clone(h);
                      p()
                    })) : r[l.toAbsMid(a + b + "/" + c)] = h
                  }(g, q, h, k)
                }
              }
              p()
            });
            return!0
          }
          return!1
        })
      }
      f = f || l;
      k();
      g.forEach(e.config.extraLocale, k)
    }, G = function() {
    }, A = {}, D = new Function("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define \x3d function(mid, factory){define.called \x3d 1; __amdValue.result \x3d factory || mid;},\t   require \x3d function(){define.called \x3d 1;};try{define.called \x3d 0;eval(__bundle);if(define.called\x3d\x3d1)return __amdValue;if((__checkForLegacyModules \x3d __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"), G = 
    function(a) {
      for(var b, c = a.split("/"), f = e.global[c[0]], h = 1;f && h < c.length - 1;f = f[c[h++]]) {
      }
      f && ((b = f[c[h]]) || (b = f[c[h].replace(/-/g, "_")]), b && (r[a] = b));
      return b
    };
    m.getLocalization = function(a, b, c) {
      var f;
      a = s(a, b, c);
      q(a, l, function(a) {
        f = a
      });
      return f
    };
    k("dojo-unit-tests") && p.push(function(a) {
      a.register("tests.i18n.unit", function(a) {
        var b;
        b = D("{prop:1}", G, "nonsense", A);
        a.is({prop:1}, b);
        a.is(void 0, b[1]);
        b = D("({prop:1})", G, "nonsense", A);
        a.is({prop:1}, b);
        a.is(void 0, b[1]);
        b = D("{'prop-x':1}", G, "nonsense", A);
        a.is({"prop-x":1}, b);
        a.is(void 0, b[1]);
        b = D("({'prop-x':1})", G, "nonsense", A);
        a.is({"prop-x":1}, b);
        a.is(void 0, b[1]);
        b = D("define({'prop-x':1})", G, "nonsense", A);
        a.is(A, b);
        a.is({"prop-x":1}, A.result);
        b = D("define('some/module', {'prop-x':1})", G, "nonsense", A);
        a.is(A, b);
        a.is({"prop-x":1}, A.result);
        b = D("this is total nonsense and should throw an error", G, "nonsense", A);
        a.is(b instanceof Error, !0)
      })
    });
    return d.mixin(m, {dynamic:!0, normalize:function(a, b) {
      return/^\./.test(a) ? b(a) : a
    }, load:q, cache:r, getL10nName:t})
  })
}, "dijit/form/ValidationTextBox":function() {
  define("dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/i18n ./TextBox ../Tooltip dojo/text!./templates/ValidationTextBox.html dojo/i18n!./nls/validate".split(" "), function(e, l, k, g, b, d, m) {
    var c = e("dijit.form.ValidationTextBox", b, {templateString:m, required:!1, promptMessage:"", invalidMessage:"$_unset_$", missingMessage:"$_unset_$", message:"", constraints:{}, pattern:".*", regExp:"", regExpGen:function() {
    }, state:"", tooltipPosition:[], _deprecateRegExp:function(a, b) {
      b != c.prototype[a] && (l.deprecated("ValidationTextBox id\x3d" + this.id + ", set('" + a + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", b))
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
      var b = "", c = this.disabled || this.isValid(a);
      c && (this._maskValidSubsetError = !0);
      var d = this._isEmpty(this.textbox.value), g = !c && a && this._isValidSubset();
      this._set("state", c ? "" : ((!this._hasBeenBlurred || a) && d || g) && (this._maskValidSubsetError || g && !this._hasBeenBlurred && a) ? "Incomplete" : "Error");
      this.focusNode.setAttribute("aria-invalid", "Error" == this.state ? "true" : "false");
      "Error" == this.state ? (this._maskValidSubsetError = a && g, b = this.getErrorMessage(a)) : "Incomplete" == this.state ? (b = this.getPromptMessage(a), this._maskValidSubsetError = !this._hasBeenBlurred || a) : d && (b = this.getPromptMessage(a));
      this.set("message", b);
      return c
    }, displayMessage:function(a) {
      a && this.focused ? d.show(a, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : d.hide(this.domNode)
    }, _refreshState:function() {
      this._created && this.validate(this.focused);
      this.inherited(arguments)
    }, constructor:function(a) {
      this.constraints = k.clone(this.constraints);
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
        var c = "";
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
              c += a;
              break;
            case ")":
              c += "|$)";
              break;
            default:
              c += "(?:" + a + "|$)"
          }
        });
        try {
          "".search(c)
        }catch(d) {
          c = this.pattern
        }
        this._partialre = "^(?:" + c + ")$"
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
      d.hide(this.domNode);
      this.inherited(arguments)
    }});
    return c
  })
}, "dijit/_WidgetsInTemplateMixin":function() {
  define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare", "dojo/_base/lang", "dojo/parser"], function(e, l, k, g, b) {
    return k("dijit._WidgetsInTemplateMixin", null, {_earlyTemplatedStartup:!1, widgetsInTemplate:!0, contextRequire:null, _beforeFillContent:function() {
      if(this.widgetsInTemplate) {
        var d = this.domNode;
        this.containerNode && !this.searchContainerNode && (this.containerNode.stopParser = !0);
        b.parse(d, {noStart:!this._earlyTemplatedStartup, template:!0, inherited:{dir:this.dir, lang:this.lang, textDir:this.textDir}, propsThis:this, contextRequire:this.contextRequire, scope:"dojo"}).then(g.hitch(this, function(b) {
          this._startupWidgets = b;
          for(var c = 0;c < b.length;c++) {
            this._processTemplateNode(b[c], function(a, b) {
              return a[b]
            }, function(a, b, c) {
              return b in a ? a.connect(a, b, c) : a.on(b, c, !0)
            })
          }
          this.containerNode && this.containerNode.stopParser && delete this.containerNode.stopParser
        }));
        if(!this._startupWidgets) {
          throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
        }
      }
    }, _processTemplateNode:function(b, g, c) {
      return g(b, "dojoType") || g(b, "data-dojo-type") ? !0 : this.inherited(arguments)
    }, startup:function() {
      e.forEach(this._startupWidgets, function(b) {
        b && (!b._started && b.startup) && b.startup()
      });
      this._startupWidgets = null;
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_FormValueMixin":function() {
  define("dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on ./_FormWidgetMixin".split(" "), function(e, l, k, g, b, d) {
    return e("dijit.form._FormValueMixin", d, {readOnly:!1, _setReadOnlyAttr:function(b) {
      l.set(this.focusNode, "readOnly", b);
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
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(e, l, k, g) {
    return e("lsmb/SubscribeSelect", [g], {topic:"", topicMap:{}, update:function(b) {
      (b = this.topicMap[b]) && this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k.subscribe(b.topic, function(d) {
        b.update(d)
      }))
    }})
  })
}, "lsmb/MaximizeMinimize":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/dom-style", "dojo/on", "dijit/_WidgetBase"], function(e, l, k, g, b) {
    return e("lsmb/MaximizeMinimize", [b], {state:"min", stateData:{max:{nextState:"min", imgURL:"payments/img/up.gif", display:"block"}, min:{nextState:"max", imgURL:"payments/img/down.gif", display:"none"}}, mmNodeId:null, setState:function(b) {
      var g = this.stateData[b];
      this.domNode.src = g.imgURL;
      this.state = b;
      k.set(l.byId(this.mmNodeId), "display", g.display)
    }, toggle:function() {
      this.setState(this.stateData[this.state].nextState)
    }, postCreate:function() {
      var b = this.domNode, e = this;
      this.inherited(arguments);
      this.own(g(b, "click", function() {
        e.toggle()
      }));
      this.setState(this.state)
    }})
  })
}, "dijit/form/_DateTimeTextBox":function() {
  define("dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(e, l, k, g, b, d, m, c) {
    new Date("X");
    return g("dijit.form._DateTimeTextBox", [d, m], {templateString:c, hasDownArrow:!0, cssStateNodes:{_buttonNode:"dijitDownArrowButton"}, _unboundedConstraints:{}, pattern:l.regexp, datePackage:"", postMixInProperties:function() {
      this.inherited(arguments);
      this._set("type", "text")
    }, compare:function(a, b) {
      var c = this._isInvalidDate(a), d = this._isInvalidDate(b);
      if(c || d) {
        return c && d ? 0 : !c ? 1 : -1
      }
      var c = this.format(a, this._unboundedConstraints), d = this.format(b, this._unboundedConstraints), g = this.parse(c, this._unboundedConstraints), k = this.parse(d, this._unboundedConstraints);
      return c == d ? 0 : e.compare(g, k, this._selector)
    }, autoWidth:!0, format:function(a, b) {
      return!a ? "" : this.dateLocaleModule.format(a, b)
    }, parse:function(a, b) {
      return this.dateLocaleModule.parse(a, b) || (this._isEmpty(a) ? null : void 0)
    }, serialize:function(a, b) {
      a.toGregorian && (a = a.toGregorian());
      return k.toISOString(a, b)
    }, dropDownDefaultValue:new Date, value:new Date(""), _blankValue:null, popupClass:"", _selector:"", constructor:function(a) {
      a = a || {};
      this.dateModule = a.datePackage ? b.getObject(a.datePackage, !1) : e;
      this.dateClassObj = this.dateModule.Date || Date;
      this.dateClassObj instanceof Date || (this.value = new this.dateClassObj(this.value));
      this.dateLocaleModule = a.datePackage ? b.getObject(a.datePackage + ".locale", !1) : l;
      this._set("pattern", this.dateLocaleModule.regexp);
      this._invalidDate = this.constructor.prototype.value.toString()
    }, buildRendering:function() {
      this.inherited(arguments);
      this.hasDownArrow || (this._buttonNode.style.display = "none");
      this.hasDownArrow || (this._buttonNode = this.domNode, this.baseClass += " dijitComboBoxOpenOnClick")
    }, _setConstraintsAttr:function(a) {
      a.selector = this._selector;
      a.fullYear = !0;
      var c = k.fromISOString;
      "string" == typeof a.min && (a.min = c(a.min), this.dateClassObj instanceof Date || (a.min = new this.dateClassObj(a.min)));
      "string" == typeof a.max && (a.max = c(a.max), this.dateClassObj instanceof Date || (a.max = new this.dateClassObj(a.max)));
      this.inherited(arguments);
      this._unboundedConstraints = b.mixin({}, this.constraints, {min:null, max:null})
    }, _isInvalidDate:function(a) {
      return!a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate
    }, _setValueAttr:function(a, b, c) {
      void 0 !== a && ("string" == typeof a && (a = k.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
      this.inherited(arguments, [a, b, c]);
      this.value instanceof Date && (this.filterString = "");
      this.dropDown && this.dropDown.set("value", a, !1)
    }, _set:function(a, b) {
      if("value" == a) {
        b instanceof Date && !(this.dateClassObj instanceof Date) && (b = new this.dateClassObj(b));
        var c = this._get("value");
        if(c instanceof this.dateClassObj && 0 == this.compare(b, c)) {
          return
        }
      }
      this.inherited(arguments)
    }, _setDropDownDefaultValueAttr:function(a) {
      this._isInvalidDate(a) && (a = new this.dateClassObj);
      this._set("dropDownDefaultValue", a)
    }, openDropDown:function(a) {
      this.dropDown && this.dropDown.destroy();
      var c = b.isString(this.popupClass) ? b.getObject(this.popupClass, !1) : this.popupClass, f = this, d = this.get("value");
      this.dropDown = new c({onChange:function(a) {
        f.set("value", a, !0)
      }, id:this.id + "_popup", dir:f.dir, lang:f.lang, value:d, textDir:f.textDir, currentFocus:!this._isInvalidDate(d) ? d : this.dropDownDefaultValue, constraints:f.constraints, filterString:f.filterString, datePackage:f.datePackage, isDisabledDate:function(a) {
        return!f.rangeCheck(a, f.constraints)
      }});
      this.inherited(arguments)
    }, _getDisplayedValueAttr:function() {
      return this.textbox.value
    }, _setDisplayedValueAttr:function(a, b) {
      this._setValueAttr(this.parse(a, this.constraints), b, a)
    }})
  })
}, "lsmb/Invoice":function() {
  require(["dojo/_base/declare", "dijit/registry", "dojo/on", "lsmb/Form", "dijit/_Container"], function(e, l, k, g, b) {
    return e("lsmb/Invoice", [g, b], {_update:function() {
      this.clickedAction = "update";
      this.submit()
    }, startup:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k(l.byId("invoice-lines"), "changed", function() {
        b._update()
      }))
    }})
  })
}, "dojo/hash":function() {
  define("./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "), function(e, l, k, g, b, d, m, c) {
    function a(a, b) {
      var c = a.indexOf(b);
      return 0 <= c ? a.substring(c + 1) : ""
    }
    function h() {
      return a(location.href, "#")
    }
    function f() {
      d.publish("/dojo/hashchange", h())
    }
    function r() {
      h() !== v && (v = h(), f())
    }
    function s(a) {
      if(n) {
        if(n.isTransitioning()) {
          setTimeout(b.hitch(null, s, a), p)
        }else {
          var c = n.iframe.location.href, f = c.indexOf("?");
          n.iframe.location.replace(c.substring(0, f) + "?" + a)
        }
      }else {
        location.replace("#" + a), !q && r()
      }
    }
    function t() {
      function c() {
        v = h();
        n = m ? v : a(s.href, "?");
        q = !1;
        r = null
      }
      var d = document.createElement("iframe"), g = k.dojoBlankHtmlUrl || l.toUrl("./resources/blank.html");
      d.id = "dojo-hash-iframe";
      d.src = g + "?" + h();
      d.style.display = "none";
      document.body.appendChild(d);
      this.iframe = e.global["dojo-hash-iframe"];
      var n, q, r, t, m, s = this.iframe.location;
      this.isTransitioning = function() {
        return q
      };
      this.pollLocation = function() {
        if(!m) {
          try {
            var e = a(s.href, "?");
            document.title != t && (t = this.iframe.document.title = document.title)
          }catch(k) {
            m = !0, console.error("dojo/hash: Error adding history entry. Server unreachable.")
          }
        }
        var l = h();
        if(q && v === l) {
          if(m || e === r) {
            c(), f()
          }else {
            setTimeout(b.hitch(this, this.pollLocation), 0);
            return
          }
        }else {
          if(!(v === l && (m || n === e))) {
            if(v !== l) {
              v = l;
              q = !0;
              r = l;
              d.src = g + "?" + r;
              m = !1;
              setTimeout(b.hitch(this, this.pollLocation), 0);
              return
            }
            m || (location.href = "#" + s.search.substring(1), c(), f())
          }
        }
        setTimeout(b.hitch(this, this.pollLocation), p)
      };
      c();
      setTimeout(b.hitch(this, this.pollLocation), p)
    }
    e.hash = function(a, b) {
      if(!arguments.length) {
        return h()
      }
      "#" == a.charAt(0) && (a = a.substring(1));
      b ? s(a) : location.href = "#" + a;
      return a
    };
    var v, n, q, p = k.hashPollFrequency || 100;
    m(function() {
      "onhashchange" in e.global && (!c("ie") || 8 <= c("ie") && "BackCompat" != document.compatMode) ? q = g.after(e.global, "onhashchange", f, !0) : document.addEventListener ? (v = h(), setInterval(r, p)) : document.attachEvent && (n = new t)
    });
    return e.hash
  })
}, "dojo/data/util/sorter":function() {
  define(["../../_base/lang"], function(e) {
    var l = {};
    e.setObject("dojo.data.util.sorter", l);
    l.basicComparator = function(e, g) {
      var b = -1;
      null === e && (e = void 0);
      null === g && (g = void 0);
      if(e == g) {
        b = 0
      }else {
        if(e > g || null == e) {
          b = 1
        }
      }
      return b
    };
    l.createSortFunction = function(e, g) {
      function b(a, b, c, f) {
        return function(h, d) {
          var g = f.getValue(h, a), e = f.getValue(d, a);
          return b * c(g, e)
        }
      }
      for(var d = [], m, c = g.comparatorMap, a = l.basicComparator, h = 0;h < e.length;h++) {
        m = e[h];
        var f = m.attribute;
        if(f) {
          m = m.descending ? -1 : 1;
          var r = a;
          c && ("string" !== typeof f && "toString" in f && (f = f.toString()), r = c[f] || a);
          d.push(b(f, m, r, g))
        }
      }
      return function(a, b) {
        for(var c = 0;c < d.length;) {
          var f = d[c++](a, b);
          if(0 !== f) {
            return f
          }
        }
        return 0
      }
    };
    return l
  })
}, "dojo/store/util/QueryResults":function() {
  define(["../../_base/array", "../../_base/lang", "../../when"], function(e, l, k) {
    var g = function(b) {
      function d(c) {
        b[c] = function() {
          var a = arguments, h = k(b, function(b) {
            Array.prototype.unshift.call(a, b);
            return g(e[c].apply(e, a))
          });
          if("forEach" !== c || m) {
            return h
          }
        }
      }
      if(!b) {
        return b
      }
      var m = !!b.then;
      m && (b = l.delegate(b));
      d("forEach");
      d("filter");
      d("map");
      null == b.total && (b.total = k(b, function(b) {
        return b.length
      }));
      return b
    };
    l.setObject("dojo.store.util.QueryResults", g);
    return g
  })
}, "dijit/_CssStateMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r) {
    l = l("dijit._CssStateMixin", [], {hovering:!1, active:!1, _applyAttributes:function() {
      this.inherited(arguments);
      e.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "), function(a) {
        this.watch(a, d.hitch(this, "_setStateClass"))
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
      function a(c) {
        b = b.concat(e.map(b, function(a) {
          return a + c
        }), "dijit" + c)
      }
      var b = this.baseClass.split(" ");
      this.isLeftToRight() || a("Rtl");
      var c = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
      this.checked && a(c);
      this.state && a(this.state);
      this.selected && a("Selected");
      this._opened && a("Opened");
      this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
      this.focused && a("Focused");
      var c = this.stateNode || this.domNode, f = {};
      e.forEach(c.className.split(" "), function(a) {
        f[a] = !0
      });
      "_stateClasses" in this && e.forEach(this._stateClasses, function(a) {
        delete f[a]
      });
      e.forEach(b, function(a) {
        f[a] = !0
      });
      var h = [], d;
      for(d in f) {
        h.push(d)
      }
      c.className = h.join(" ");
      this._stateClasses = b
    }, _subnodeCssMouseEvent:function(a, b, c) {
      function f(c) {
        g.toggle(a, b + "Active", c)
      }
      if(!this.disabled && !this.readOnly) {
        switch(c.type) {
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
    c(function() {
      function b(a, c, f) {
        if(!f || !k.isDescendant(f, c)) {
          for(;c && c != f;c = c.parentNode) {
            if(c._cssState) {
              var h = r.getEnclosingWidget(c);
              h && (c == h.domNode ? h._cssMouseEvent(a) : h._subnodeCssMouseEvent(c, c._cssState, a))
            }
          }
        }
      }
      var c = h.body(), d;
      m(c, a.over, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      m(c, a.out, function(a) {
        b(a, a.target, a.relatedTarget)
      });
      m(c, f.press, function(a) {
        d = a.target;
        b(a, d)
      });
      m(c, f.release, function(a) {
        b(a, d);
        d = null
      });
      m(c, "focusin, focusout", function(a) {
        var b = a.target;
        if(b._cssState && !b.getAttribute("widgetId")) {
          var c = r.getEnclosingWidget(b);
          c && c._subnodeCssMouseEvent(b, b._cssState, a)
        }
      })
    });
    return l
  })
}, "dojo/_base/url":function() {
  define(["./kernel"], function(e) {
    var l = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, k = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, g = function() {
      for(var b = arguments, d = [b[0]], e = 1;e < b.length;e++) {
        if(b[e]) {
          var c = new g(b[e] + ""), d = new g(d[0] + "");
          if("" == c.path && !c.scheme && !c.authority && !c.query) {
            null != c.fragment && (d.fragment = c.fragment), c = d
          }else {
            if(!c.scheme && (c.scheme = d.scheme, !c.authority && (c.authority = d.authority, "/" != c.path.charAt(0)))) {
              for(var d = (d.path.substring(0, d.path.lastIndexOf("/") + 1) + c.path).split("/"), a = 0;a < d.length;a++) {
                "." == d[a] ? a == d.length - 1 ? d[a] = "" : (d.splice(a, 1), a--) : 0 < a && (!(1 == a && "" == d[0]) && ".." == d[a] && ".." != d[a - 1]) && (a == d.length - 1 ? (d.splice(a, 1), d[a - 1] = "") : (d.splice(a - 1, 2), a -= 2))
              }
              c.path = d.join("/")
            }
          }
          d = [];
          c.scheme && d.push(c.scheme, ":");
          c.authority && d.push("//", c.authority);
          d.push(c.path);
          c.query && d.push("?", c.query);
          c.fragment && d.push("#", c.fragment)
        }
      }
      this.uri = d.join("");
      b = this.uri.match(l);
      this.scheme = b[2] || (b[1] ? "" : null);
      this.authority = b[4] || (b[3] ? "" : null);
      this.path = b[5];
      this.query = b[7] || (b[6] ? "" : null);
      this.fragment = b[9] || (b[8] ? "" : null);
      null != this.authority && (b = this.authority.match(k), this.user = b[3] || null, this.password = b[4] || null, this.host = b[6] || b[7], this.port = b[9] || null)
    };
    g.prototype.toString = function() {
      return this.uri
    };
    return e._Url = g
  })
}, "dijit/form/_FormValueWidget":function() {
  define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function(e, l, k, g) {
    return e("dijit.form._FormValueWidget", [k, g], {_layoutHackIE7:function() {
      if(7 == l("ie")) {
        for(var b = this.domNode, d = b.parentNode, g = b.firstChild || b, c = g.style.filter, a = this;d && 0 == d.clientHeight;) {
          (function() {
            var b = a.connect(d, "onscroll", function() {
              a.disconnect(b);
              g.style.filter = (new Date).getMilliseconds();
              a.defer(function() {
                g.style.filter = c
              })
            })
          })(), d = d.parentNode
        }
      }
    }})
  })
}, "lsmb/Form":function() {
  define("dijit/form/Form dojo/_base/declare dojo/_base/event dojo/on dojo/hash dojo/dom-attr dojo/dom-form dojo/query dijit/registry".split(" "), function(e, l, k, g, b, d, m, c, a) {
    return l("lsmb/Form", [e], {clickedAction:null, startup:function() {
      var a = this;
      this.inherited(arguments);
      c('input[type\x3d"submit"]', this.domNode).forEach(function(b) {
        g(b, "click", function() {
          a.clickedAction = d.get(b, "value")
        })
      })
    }, onSubmit:function(a) {
      k.stop(a);
      this.submit()
    }, submit:function() {
      if(this.validate()) {
        var c = "undefined" === typeof this.method ? "GET" : this.method, f = this.action, d = {handleAs:"text"};
        "get" === c.toLowerCase() ? (c = m.toQuery(this.domNode), c = "action\x3d" + this.clickedAction + "\x26" + c, b(f + "?" + c)) : (d.method = c, "multipart/form-data" == this.domNode.enctype ? (d.data = new FormData(this.domNode), d.data.append("action", this.clickedAction)) : d.data = "action\x3d" + this.clickedAction + "\x26" + m.toQuery(this.domNode), a.byId("maindiv").load_form(f, d))
      }
    }})
  })
}, "dijit/form/Button":function() {
  define("require dojo/_base/declare dojo/dom-class dojo/has dojo/_base/kernel dojo/_base/lang dojo/ready ./_FormWidget ./_ButtonMixin dojo/text!./templates/Button.html ../a11yclick".split(" "), function(e, l, k, g, b, d, m, c, a, h) {
    g("dijit-legacy-requires") && m(0, function() {
      e(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
    });
    m = l("dijit.form.Button" + (g("dojo-bidi") ? "_NoBidi" : ""), [c, a], {showLabel:!0, iconClass:"dijitNoIcon", _setIconClassAttr:{node:"iconNode", type:"class"}, baseClass:"dijitButton", templateString:h, _setValueAttr:"valueNode", _setNameAttr:function(a) {
      this.valueNode && this.valueNode.setAttribute("name", a)
    }, _fillContent:function(a) {
      if(a && (!this.params || !("label" in this.params))) {
        if(a = d.trim(a.innerHTML)) {
          this.label = a
        }
      }
    }, _setShowLabelAttr:function(a) {
      this.containerNode && k.toggle(this.containerNode, "dijitDisplayNone", !a);
      this._set("showLabel", a)
    }, setLabel:function(a) {
      b.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
      this.set("label", a)
    }, _setLabelAttr:function(a) {
      this.inherited(arguments);
      !this.showLabel && !("title" in this.params) && (this.titleNode.title = d.trim(this.containerNode.innerText || this.containerNode.textContent || ""))
    }});
    g("dojo-bidi") && (m = l("dijit.form.Button", m, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      this.titleNode.title && this.applyTextDir(this.titleNode, this.titleNode.title)
    }, _setTextDirAttr:function(a) {
      this._created && this.textDir != a && (this._set("textDir", a), this._setLabelAttr(this.label))
    }}));
    return m
  })
}, "dijit/_KeyNavContainer":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/kernel dojo/keys dojo/_base/lang ./registry ./_Container ./_FocusMixin ./_KeyNavMixin".split(" "), function(e, l, k, g, b, d, m, c, a, h) {
    return l("dijit._KeyNavContainer", [a, h, c], {connectKeyNavHandlers:function(a, c) {
      var h = this._keyNavCodes = {}, g = d.hitch(this, "focusPrev"), k = d.hitch(this, "focusNext");
      e.forEach(a, function(a) {
        h[a] = g
      });
      e.forEach(c, function(a) {
        h[a] = k
      });
      h[b.HOME] = d.hitch(this, "focusFirstChild");
      h[b.END] = d.hitch(this, "focusLastChild")
    }, startupKeyNavChildren:function() {
      g.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
    }, startup:function() {
      this.inherited(arguments);
      e.forEach(this.getChildren(), d.hitch(this, "_startupChild"))
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
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/keys dojo/_base/lang dojo/on dijit/registry dijit/_FocusMixin".split(" "), function(e, l, k, g, b, d, m, c) {
    return l("dijit._KeyNavMixin", c, {tabIndex:"0", childSelector:null, postCreate:function() {
      this.inherited(arguments);
      k.set(this.domNode, "tabIndex", this.tabIndex);
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
      this.own(d(this.domNode, "keypress", b.hitch(this, "_onContainerKeypress")), d(this.domNode, "keydown", b.hitch(this, "_onContainerKeydown")), d(this.domNode, "focus", b.hitch(this, "_onContainerFocus")), d(this.containerNode, d.selector(a, "focusin"), function(a) {
        c._onChildFocus(m.getEnclosingWidget(this), a)
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
      k.set(this.domNode, "tabIndex", "-1");
      this.inherited(arguments)
    }, _onBlur:function(a) {
      k.set(this.domNode, "tabIndex", this.tabIndex);
      this.focusedChild && (this.focusedChild.set("tabIndex", "-1"), this.lastFocusedChild = this.focusedChild, this._set("focusedChild", null));
      this.inherited(arguments)
    }, _onChildFocus:function(a) {
      a && a != this.focusedChild && (this.focusedChild && !this.focusedChild._destroyed && this.focusedChild.set("tabIndex", "-1"), a.set("tabIndex", this.tabIndex), this.lastFocused = a, this._set("focusedChild", a))
    }, _searchString:"", multiCharSearchDuration:1E3, onKeyboardSearch:function(a, b, c, d) {
      a && this.focusChild(a)
    }, _keyboardSearchCompare:function(a, b) {
      var c = a.domNode, c = (a.label || (c.focusNode ? c.focusNode.label : "") || c.innerText || c.textContent || "").replace(/^\s+/, "").substr(0, b.length).toLowerCase();
      return b.length && c == b ? -1 : 0
    }, _onContainerKeydown:function(a) {
      var b = this._keyNavCodes[a.keyCode];
      b ? (b(a, this.focusedChild), a.stopPropagation(), a.preventDefault(), this._searchString = "") : a.keyCode == g.SPACE && (this._searchTimer && !a.ctrlKey && !a.altKey && !a.metaKey) && (a.stopImmediatePropagation(), a.preventDefault(), this._keyboardSearch(a, " "))
    }, _onContainerKeypress:function(a) {
      a.charCode <= g.SPACE || (a.ctrlKey || a.altKey || a.metaKey) || (a.preventDefault(), a.stopPropagation(), this._keyboardSearch(a, String.fromCharCode(a.charCode).toLowerCase()))
    }, _keyboardSearch:function(a, c) {
      var f = null, d, g = 0;
      b.hitch(this, function() {
        this._searchTimer && this._searchTimer.remove();
        this._searchString += c;
        var a = /^(.)\1*$/.test(this._searchString) ? 1 : this._searchString.length;
        d = this._searchString.substr(0, a);
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
          var e = this._keyboardSearchCompare(b, d);
          e && 0 == g++ && (f = b);
          if(-1 == e) {
            g = -1;
            break
          }
          b = this._getNextFocusableChild(b, 1)
        }while(b && b != a)
      })();
      this.onKeyboardSearch(f, a, d, g)
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
            var c = m.byNode(a);
            if(c) {
              return c
            }
          }
        }
      }
      return null
    }})
  })
}, "dijit/form/RadioButton":function() {
  define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(e, l, k) {
    return e("dijit.form.RadioButton", [l, k], {baseClass:"dijitRadio"})
  })
}, "lsmb/SetupLoginButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/request/xhr dojo/dom dojo/dom-style dijit/form/Button".split(" "), function(e, l, k, g, b, d) {
    return e("lsmb/SetupLoginButton", [d], {action:null, onClick:function(b) {
      var c = this, a = g.byId("s-user").value, d = g.byId("s-password").value, f = encodeURIComponent(g.byId("database").value);
      l.stop(b);
      k("login.pl?action\x3dauthenticate\x26company\x3dpostgres\x26dbonly\x3d1", {user:a, password:d}).then(function(a) {
        window.location.href = "setup.pl?action\x3d" + c.action + "\x26database\x3d" + f
      }, function(a) {
        a = a.response.status;
        "454" == a ? alert("Company does not exist") : alert("Access denied (" + a + "): Bad username/password")
      })
    }})
  })
}, "dijit/form/DropDownButton":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/query ../registry ../popup ./Button ../_Container ../_HasDropDown dojo/text!./templates/DropDownButton.html ../a11yclick".split(" "), function(e, l, k, g, b, d, m, c, a) {
    return e("dijit.form.DropDownButton", [d, m, c], {baseClass:"dijitDropDownButton", templateString:a, _fillContent:function() {
      if(this.srcNodeRef) {
        var a = k("*", this.srcNodeRef);
        this.inherited(arguments, [a[0]]);
        this.dropDownContainer = this.srcNodeRef
      }
    }, startup:function() {
      if(!this._started) {
        if(!this.dropDown && this.dropDownContainer) {
          var a = k("[widgetId]", this.dropDownContainer)[0];
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
      var b = this.dropDown, c = b.on("load", l.hitch(this, function() {
        c.remove();
        a()
      }));
      b.refresh()
    }, isFocusable:function() {
      return this.inherited(arguments) && !this._mouseDown
    }})
  })
}, "lsmb/SubscribeShowHide":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-style dojo/on dojo/topic dijit/_WidgetBase".split(" "), function(e, l, k, g, b, d) {
    return e("lsmb/SubscribeShowHide", [d], {topic:"", showValues:null, hideValues:null, show:function() {
      k.set(this.domNode, "display", "block")
    }, hide:function() {
      k.set(this.domNode, "display", "none")
    }, update:function(b) {
      this.showValues && -1 !== this.showValues.indexOf(b) ? this.show() : this.hideValues && -1 !== this.hideValues.indexOf(b) ? this.hide() : this.showValues ? this.hideValues || this.hide() : this.show()
    }, postCreate:function() {
      var d = this;
      this.inherited(arguments);
      this.own(b.subscribe(d.topic, function(b) {
        d.update(b)
      }))
    }})
  })
}, "dojo/request/xhr":function() {
  define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(e, l, k, g, b) {
    function d(a, b) {
      var c = a.xhr;
      a.status = a.xhr.status;
      try {
        a.text = c.responseText
      }catch(f) {
      }
      "xml" === a.options.handleAs && (a.data = c.responseXML);
      if(!b) {
        try {
          k(a)
        }catch(d) {
          b = d
        }
      }
      b ? this.reject(b) : g.checkStatus(c.status) ? this.resolve(a) : (b = new e("Unable to load " + a.url + " status: " + c.status, a), this.reject(b))
    }
    function m(a) {
      return this.xhr.getResponseHeader(a)
    }
    function c(n, q, k) {
      var w = b("native-formdata") && q && q.data && q.data instanceof FormData, x = g.parseArgs(n, g.deepCreate(v, q), w);
      n = x.url;
      q = x.options;
      var G, A = g.deferred(x, s, h, f, d, function() {
        G && G()
      }), D = x.xhr = c._create();
      if(!D) {
        return A.cancel(new e("XHR was not created")), k ? A : A.promise
      }
      x.getHeader = m;
      r && (G = r(D, A, x));
      var I = q.data, K = !q.sync, N = q.method;
      try {
        D.open(N, n, K, q.user || t, q.password || t);
        q.withCredentials && (D.withCredentials = q.withCredentials);
        b("native-response-type") && q.handleAs in a && (D.responseType = a[q.handleAs]);
        var H = q.headers;
        n = w ? !1 : "application/x-www-form-urlencoded";
        if(H) {
          for(var O in H) {
            "content-type" === O.toLowerCase() ? n = H[O] : H[O] && D.setRequestHeader(O, H[O])
          }
        }
        n && !1 !== n && D.setRequestHeader("Content-Type", n);
        (!H || !("X-Requested-With" in H)) && D.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        g.notify && g.notify.emit("send", x, A.promise.cancel);
        D.send(I)
      }catch(U) {
        A.reject(U)
      }
      l(A);
      D = null;
      return k ? A : A.promise
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
    var a = {blob:b("native-xhr2-blob") ? "blob" : "arraybuffer", document:"document", arraybuffer:"arraybuffer"}, h, f, r, s;
    b("native-xhr2") ? (h = function(a) {
      return!this.isFulfilled()
    }, s = function(a, b) {
      b.xhr.abort()
    }, r = function(a, b, c) {
      function f(a) {
        b.handleResponse(c)
      }
      function d(a) {
        a = new e("Unable to load " + c.url + " status: " + a.target.status, c);
        b.handleResponse(c, a)
      }
      function h(a) {
        a.lengthComputable ? (c.loaded = a.loaded, c.total = a.total, b.progress(c)) : 3 === c.xhr.readyState && (c.loaded = "loaded" in a ? a.loaded : a.position, b.progress(c))
      }
      a.addEventListener("load", f, !1);
      a.addEventListener("error", d, !1);
      a.addEventListener("progress", h, !1);
      return function() {
        a.removeEventListener("load", f, !1);
        a.removeEventListener("error", d, !1);
        a.removeEventListener("progress", h, !1);
        a = null
      }
    }) : (h = function(a) {
      return a.xhr.readyState
    }, f = function(a) {
      return 4 === a.xhr.readyState
    }, s = function(a, b) {
      var c = b.xhr, f = typeof c.abort;
      ("function" === f || "object" === f || "unknown" === f) && c.abort()
    });
    var t, v = {data:null, query:null, sync:!1, method:"GET"};
    c._create = function() {
      throw Error("XMLHTTP not available");
    };
    if(b("native-xhr") && !b("dojo-force-activex-xhr")) {
      c._create = function() {
        return new XMLHttpRequest
      }
    }else {
      if(b("activex")) {
        try {
          new ActiveXObject("Msxml2.XMLHTTP"), c._create = function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
          }
        }catch(n) {
          try {
            new ActiveXObject("Microsoft.XMLHTTP"), c._create = function() {
              return new ActiveXObject("Microsoft.XMLHTTP")
            }
          }catch(q) {
          }
        }
      }
    }
    g.addCommonMethods(c);
    return c
  })
}, "lsmb/ComparisonSelectionBalance":function() {
  define("lsmb/ComparisonSelectionBalance", "dijit/layout/ContentPane dojo/_base/declare dojo/dom dojo/topic dojo/dom-style dijit/registry dojo/_base/array".split(" "), function(e, l, k, g, b, d, m) {
    return l("lsmb/ComparisonSelectionBalance", e, {topic:"", type:"", comparisons:0, container:"", _show:function(c) {
      c && k.byId(c) && b.set(c, "display", "block")
    }, _hide:function(c) {
      c && k.byId(c) && b.set(c, "display", "none")
    }, _interval:function(b) {
      var a = d.byId("interval");
      a.set("required", b).set("disabled", !b);
      b && a.focus()
    }, _toggles:function(b, a) {
      for(var h = 1;9 >= h;h++) {
        var f = k.byId(b + "_" + h), g = h <= this.comparisons && a;
        d.byId("to_date_" + h).set("required", g);
        d.byId("to_date_" + h).set("disabled", !g);
        (g ? this._show : this._hide)(f)
      }
    }, _setTypeAttr:function(b) {
      this.type = b
    }, _getTypeAttr:function(b) {
      return this.type
    }, _setComparisonsAttr:function(b) {
      this.comparisons = b;
      this._toggles("comparison_dates", "by_dates" == this.get("type"))
    }, _getComparisonsAttr:function(b) {
      return this.comparisons
    }, update:function(b) {
      k.byId(this.id);
      "by_dates" === b ? (this.set("type", b), this._show(this.container), this._hide("date_period_id"), this._toggles("comparison_dates", 1)) : "by_periods" === b ? (this.set("type", b), this._hide(this.container), this._show("date_period_id"), this._toggles("comparison_dates", 0)) : 0 <= b && 9 >= b && this.set("comparisons", b);
      this._interval(0 <= this.get("comparisons") && "by_periods" == this.get("type"))
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.container = this.id;
      this.own(g.subscribe(b.topic, function(a) {
        b.update(a)
      }));
      var a = m.filter(d.findWidgets(k.byId("comparison_type_radios")), function(a) {
        return a.get("checked")
      }).pop();
      a || (a = d.byId("comparison_by_periods"));
      a && (a.set("checked", !0), this.update(a.get("value")));
      a = d.byId("comparison_periods");
      this.update(a.get("value") || 0)
    }})
  })
}, "lsmb/SubscribeNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(e, l, k, g) {
    return e("lsmb/SubscribeNumberTextBox", g, {topic:"", update:function(b) {
      this.set("value", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k.subscribe(b.topic, function(d) {
        b.update(d)
      }))
    }})
  })
}, "lsmb/SubscribeCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(e, l, k, g) {
    return e("lsmb/SubscribeCheckBox", [g], {topic:"", update:function(b) {
      this.set("checked", b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(k.subscribe(b.topic, function(d) {
        b.update(d)
      }))
    }})
  })
}, "lsmb/MainContentPane":function() {
  define("dijit/layout/ContentPane dojo/_base/declare dojo/_base/event dijit/registry dojo/dom-style dojo/_base/lang dojo/promise/Promise dojo/on dojo/hash dojo/promise/all dojo/request/xhr dojo/query dojo/request/iframe dojo/dom-class".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t) {
    return l("lsmb/MainContentPane", [e], {last_page:null, interceptClick:null, report_request_error:function(a) {
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
      return f(a, b).then(function(a) {
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
      t.replace(this.domNode, "parsing", "done-parsing");
      b.set(this.domNode, "opacity", "30%")
    }, hide_main_div:function() {
      b.set(this.domNode, "visibility", "hidden")
    }, show_main_div:function() {
      b.set(this.domNode, "visibility", "visible");
      t.replace(this.domNode, "done-parsing", "parsing")
    }, set:function() {
      var a = null, b = 0, c = null, f = this;
      1 === arguments.length && d.isObject(arguments[0]) && null !== arguments[0].content ? (a = arguments[0].content, delete arguments[0].content) : 1 === arguments.length && d.isString(arguments[0]) ? (a = arguments[0], b = !0) : 2 === arguments.length && "content" == arguments[0] && (a = arguments[1], b = !0);
      null !== a && (c = this.inherited("set", arguments, ["content", a]).then(function() {
        r("a", f.domNode).forEach(f.interceptClick);
        f.show_main_div()
      }));
      if(b) {
        return c
      }
      a = this.inherited(arguments);
      return null !== c && c instanceof m && null !== a && a instanceof m ? h([c, a]) : null !== c && c instanceof m ? c : a
    }})
  })
}, "dijit/form/CheckBox":function() {
  define("require dojo/_base/declare dojo/dom-attr dojo/has dojo/query dojo/ready ./ToggleButton ./_CheckBoxMixin dojo/text!./templates/CheckBox.html dojo/NodeList-dom ../a11yclick".split(" "), function(e, l, k, g, b, d, m, c, a) {
    g("dijit-legacy-requires") && d(0, function() {
      e(["dijit/form/RadioButton"])
    });
    return l("dijit.form.CheckBox", [m, c], {templateString:a, baseClass:"dijitCheckBox", _setValueAttr:function(a, b) {
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
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/sniff ./_FormSelectWidget ../_HasDropDown ../DropDownMenu ../MenuItem ../MenuSeparator ../Tooltip ../_KeyNavMixin ../registry dojo/text!./templates/Select.html dojo/i18n!./nls/validate".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n, q, p, y) {
    function u(a) {
      return function(b) {
        this._isLoaded ? this.inherited(a, arguments) : this.loadDropDown(c.hitch(this, a, b))
      }
    }
    var w = l("dijit.form._SelectMenu", s, {autoFocus:!0, buildRendering:function() {
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
      c.isArray(b) && (b = b[b.length - 1]);
      b && e.forEach(this.parentWidget._getChildren(), function(c) {
        c.option && b === c.option.value && (a = !0, this.focusChild(c, !1))
      }, this);
      a || this.inherited(arguments)
    }});
    b = l("dijit.form.Select" + (h("dojo-bidi") ? "_NoBidi" : ""), [f, r, q], {baseClass:"dijitSelect dijitValidationTextBox", templateString:y, _buttonInputDisabled:h("ie") ? "disabled" : "", required:!1, state:"", message:"", tooltipPosition:[], emptyLabel:"\x26#160;", _isLoaded:!1, _childrenLoaded:!1, labelType:"html", _fillContent:function() {
      this.inherited(arguments);
      if(this.options.length && !this.value && this.srcNodeRef) {
        var a = this.srcNodeRef.selectedIndex || 0;
        this._set("value", this.options[0 <= a ? a : 0].value)
      }
      this.dropDown = new w({id:this.id + "_menu", parentWidget:this});
      g.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g, "Menu "))
    }, _getMenuItemForOption:function(a) {
      if(!a.value && !a.label) {
        return new v({ownerDocument:this.ownerDocument})
      }
      var b = c.hitch(this, "_setValueAttr", a);
      a = new t({option:a, label:("text" === this.labelType ? (a.label || "").toString().replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;") : a.label) || this.emptyLabel, onClick:b, ownerDocument:this.ownerDocument, dir:this.dir, textDir:this.textDir, disabled:a.disabled || !1});
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
      return(a = p.byNode(a)) && a.getParent() == this.dropDown
    }, onKeyboardSearch:function(a, b, c, f) {
      a && this.focusChild(a)
    }, _loadChildren:function(a) {
      if(!0 === a) {
        if(this.dropDown && (delete this.dropDown.focusedChild, this.focusedChild = null), this.options.length) {
          this.inherited(arguments)
        }else {
          e.forEach(this._getChildren(), function(a) {
            a.destroyRecursive()
          });
          var b = new t({ownerDocument:this.ownerDocument, label:this.emptyLabel});
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
      k.set(this.valueNode, "value", this.get("value"));
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
      b && this.focused && this._hasBeenBlurred ? n.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : n.hide(this.domNode);
      this._set("message", b);
      return a
    }, isValid:function() {
      return!this.required || 0 === this.value || !/^\s*$/.test(this.value || "")
    }, reset:function() {
      this.inherited(arguments);
      n.hide(this.domNode);
      this._refreshState()
    }, postMixInProperties:function() {
      this.inherited(arguments);
      this._missingMsg = d.getLocalization("dijit.form", "validate", this.lang).missingMessage
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
      n.hide(this.domNode);
      this.inherited(arguments)
    }, _onFocus:function() {
      this.validate(!0)
    }, _onBlur:function() {
      n.hide(this.domNode);
      this.inherited(arguments);
      this.validate(!1)
    }});
    h("dojo-bidi") && (b = l("dijit.form.Select", b, {_setDisplay:function(a) {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode)
    }}));
    b._Menu = w;
    b.prototype._onContainerKeydown = u("_onContainerKeydown");
    b.prototype._onContainerKeypress = u("_onContainerKeypress");
    return b
  })
}, "dojo/regexp":function() {
  define(["./_base/kernel", "./_base/lang"], function(e, l) {
    var k = {};
    l.setObject("dojo.regexp", k);
    k.escapeString = function(g, b) {
      return g.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g, function(d) {
        return b && -1 != b.indexOf(d) ? d : "\\" + d
      })
    };
    k.buildGroupRE = function(g, b, d) {
      if(!(g instanceof Array)) {
        return b(g)
      }
      for(var e = [], c = 0;c < g.length;c++) {
        e.push(b(g[c]))
      }
      return k.group(e.join("|"), d)
    };
    k.group = function(g, b) {
      return"(" + (b ? "?:" : "") + g + ")"
    };
    return k
  })
}, "dijit/MenuSeparator":function() {
  define("dojo/_base/declare dojo/dom ./_WidgetBase ./_TemplatedMixin ./_Contained dojo/text!./templates/MenuSeparator.html".split(" "), function(e, l, k, g, b, d) {
    return e("dijit.MenuSeparator", [k, g, b], {templateString:d, buildRendering:function() {
      this.inherited(arguments);
      l.setSelectable(this.domNode, !1)
    }, isFocusable:function() {
      return!1
    }})
  })
}, "dojo/date":function() {
  define(["./has", "./_base/lang"], function(e, l) {
    var k = {getDaysInMonth:function(g) {
      var b = g.getMonth();
      return 1 == b && k.isLeapYear(g) ? 29 : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }, isLeapYear:function(g) {
      g = g.getFullYear();
      return!(g % 400) || !(g % 4) && !!(g % 100)
    }, getTimezoneName:function(g) {
      var b = g.toString(), d = "", e = b.indexOf("(");
      if(-1 < e) {
        d = b.substring(++e, b.indexOf(")"))
      }else {
        if(e = /([A-Z\/]+) \d{4}$/, b = b.match(e)) {
          d = b[1]
        }else {
          if(b = g.toLocaleString(), e = / ([A-Z\/]+)$/, b = b.match(e)) {
            d = b[1]
          }
        }
      }
      return"AM" == d || "PM" == d ? "" : d
    }, compare:function(g, b, d) {
      g = new Date(+g);
      b = new Date(+(b || new Date));
      "date" == d ? (g.setHours(0, 0, 0, 0), b.setHours(0, 0, 0, 0)) : "time" == d && (g.setFullYear(0, 0, 0), b.setFullYear(0, 0, 0));
      return g > b ? 1 : g < b ? -1 : 0
    }, add:function(g, b, d) {
      var e = new Date(+g), c = !1, a = "Date";
      switch(b) {
        case "day":
          break;
        case "weekday":
          var h;
          (b = d % 5) ? h = parseInt(d / 5) : (b = 0 < d ? 5 : -5, h = 0 < d ? (d - 5) / 5 : (d + 5) / 5);
          var f = g.getDay(), k = 0;
          6 == f && 0 < d ? k = 1 : 0 == f && 0 > d && (k = -1);
          f += b;
          if(0 == f || 6 == f) {
            k = 0 < d ? 2 : -2
          }
          d = 7 * h + b + k;
          break;
        case "year":
          a = "FullYear";
          c = !0;
          break;
        case "week":
          d *= 7;
          break;
        case "quarter":
          d *= 3;
        case "month":
          c = !0;
          a = "Month";
          break;
        default:
          a = "UTC" + b.charAt(0).toUpperCase() + b.substring(1) + "s"
      }
      if(a) {
        e["set" + a](e["get" + a]() + d)
      }
      c && e.getDate() < g.getDate() && e.setDate(0);
      return e
    }, difference:function(g, b, d) {
      b = b || new Date;
      d = d || "day";
      var e = b.getFullYear() - g.getFullYear(), c = 1;
      switch(d) {
        case "quarter":
          g = g.getMonth();
          b = b.getMonth();
          g = Math.floor(g / 3) + 1;
          b = Math.floor(b / 3) + 1;
          c = b + 4 * e - g;
          break;
        case "weekday":
          e = Math.round(k.difference(g, b, "day"));
          d = parseInt(k.difference(g, b, "week"));
          c = e % 7;
          if(0 == c) {
            e = 5 * d
          }else {
            var a = 0, h = g.getDay();
            b = b.getDay();
            d = parseInt(e / 7);
            c = e % 7;
            g = new Date(g);
            g.setDate(g.getDate() + 7 * d);
            g = g.getDay();
            if(0 < e) {
              switch(!0) {
                case 6 == h:
                  a = -1;
                  break;
                case 0 == h:
                  a = 0;
                  break;
                case 6 == b:
                  a = -1;
                  break;
                case 0 == b:
                  a = -2;
                  break;
                case 5 < g + c:
                  a = -2
              }
            }else {
              if(0 > e) {
                switch(!0) {
                  case 6 == h:
                    a = 0;
                    break;
                  case 0 == h:
                    a = 1;
                    break;
                  case 6 == b:
                    a = 2;
                    break;
                  case 0 == b:
                    a = 1;
                    break;
                  case 0 > g + c:
                    a = 2
                }
              }
            }
            e = e + a - 2 * d
          }
          c = e;
          break;
        case "year":
          c = e;
          break;
        case "month":
          c = b.getMonth() - g.getMonth() + 12 * e;
          break;
        case "week":
          c = parseInt(k.difference(g, b, "day") / 7);
          break;
        case "day":
          c /= 24;
        case "hour":
          c /= 60;
        case "minute":
          c /= 60;
        case "second":
          c /= 1E3;
        case "millisecond":
          c *= b.getTime() - g.getTime()
      }
      return Math.round(c)
    }};
    l.mixin(l.getObject("dojo.date", !0), k);
    return k
  })
}, "lsmb/PublishNumberTextBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/NumberTextBox"], function(e, l, k, g) {
    return e("lsmb/PublishNumberTextBox", g, {topic:"", publish:function(b) {
      k.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.own(l(this, "change", function(d) {
        b.publish(d)
      }))
    }})
  })
}, "dijit/form/NumberTextBox":function() {
  define("dojo/_base/declare dojo/_base/lang dojo/i18n dojo/string dojo/number ./RangeBoundTextBox".split(" "), function(e, l, k, g, b, d) {
    var m = function(a) {
      a = a || {};
      var b = k.getLocalization("dojo.cldr", "number", k.normalizeLocale(a.locale)), c = a.pattern ? a.pattern : b[(a.type || "decimal") + "Format"];
      a = "number" == typeof a.places ? a.places : "string" === typeof a.places && 0 < a.places.length ? a.places.replace(/.*,/, "") : -1 != c.indexOf(".") ? c.split(".")[1].replace(/[^#0]/g, "").length : 0;
      return{sep:b.decimal, places:a}
    }, c = e("dijit.form.NumberTextBoxMixin", null, {pattern:function(a) {
      return"(" + (this.focused && this.editOptions ? this._regExpGenerator(l.delegate(a, this.editOptions)) + "|" : "") + this._regExpGenerator(a) + ")"
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
      var c = String(a);
      if("number" != typeof a) {
        return c
      }
      if(isNaN(a)) {
        return""
      }
      if(!("rangeCheck" in this && this.rangeCheck(a, b)) && !1 !== b.exponent && /\de[-+]?\d/i.test(c)) {
        return c
      }
      this.editOptions && this.focused && (b = l.mixin({}, b, this.editOptions));
      return this._formatter(a, b)
    }, _parser:b.parse, parse:function(a, b) {
      var c = this._parser(a, l.mixin({}, b, this.editOptions && this.focused ? this.editOptions : {}));
      this.editOptions && (this.focused && isNaN(c)) && (c = this._parser(a, b));
      return c
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
      var a = l.hitch(l.delegate(this, {focused:!0}), "get")("value");
      this._setValueAttr(a, !0)
    }, _setValueAttr:function(a, b, c) {
      if(void 0 !== a && void 0 === c) {
        if(c = String(a), "number" == typeof a) {
          if(isNaN(a)) {
            c = ""
          }else {
            if("rangeCheck" in this && this.rangeCheck(a, this.constraints) || !1 === this.constraints.exponent || !/\de[-+]?\d/i.test(c)) {
              c = void 0
            }
          }
        }else {
          a ? a = void 0 : (c = "", a = NaN)
        }
      }
      this.inherited(arguments, [a, b, c])
    }, _getValueAttr:function() {
      var a = this.inherited(arguments);
      if(isNaN(a) && "" !== this.textbox.value) {
        if(!1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) && RegExp("^" + b._realNumberRegexp(l.delegate(this.constraints)) + "$").test(this.textbox.value)) {
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
      var a = "number" == typeof this.constraints.min, b = "number" == typeof this.constraints.max, c = this.get("value");
      if(isNaN(c) || !a && !b) {
        return this.inherited(arguments)
      }
      var d = c | 0, e = 0 > c, k = -1 != this.textbox.value.indexOf(this._decimalInfo.sep), l = (this.maxLength || 20) - this.textbox.value.length, n = k ? this.textbox.value.split(this._decimalInfo.sep)[1].replace(/[^0-9]/g, "") : "", d = k ? d + "." + n : d + "", l = g.rep("9", l), k = c;
      e ? k = Number(d + l) : c = Number(d + l);
      return!(a && c < this.constraints.min || b && k > this.constraints.max)
    }});
    e = e("dijit.form.NumberTextBox", [d, c], {baseClass:"dijitTextBox dijitNumberTextBox"});
    e.Mixin = c;
    return e
  })
}, "dijit/form/_CheckBoxMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(e, l) {
    return e("dijit.form._CheckBoxMixin", null, {type:"checkbox", value:"on", readOnly:!1, _aria_attr:"aria-checked", _setReadOnlyAttr:function(e) {
      this._set("readOnly", e);
      l.set(this.focusNode, "readOnly", e)
    }, _setLabelAttr:void 0, _getSubmitValue:function(e) {
      return null == e || "" === e ? "on" : e
    }, _setValueAttr:function(e) {
      e = this._getSubmitValue(e);
      this._set("value", e);
      l.set(this.focusNode, "value", e)
    }, reset:function() {
      this.inherited(arguments);
      this._set("value", this._getSubmitValue(this.params.value));
      l.set(this.focusNode, "value", this.value)
    }, _onClick:function(e) {
      return this.readOnly ? (e.stopPropagation(), e.preventDefault(), !1) : this.inherited(arguments)
    }})
  })
}, "dijit/DropDownMenu":function() {
  define(["dojo/_base/declare", "dojo/keys", "dojo/text!./templates/Menu.html", "./_MenuBase"], function(e, l, k, g) {
    return e("dijit.DropDownMenu", g, {templateString:k, baseClass:"dijitMenu", _onUpArrow:function() {
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
  define(["dijit/form/DateTextBox", "dojo/date/locale", "dojo/_base/declare"], function(e, l, k) {
    var g = /^\d\d\d\d-\d\d-\d\d$/;
    return k("lsmb/DateTextBox", [e], {_formattedValue:null, constructor:function(b, d) {
      this._formattedValue = d.value;
      b.constraints || (b.constraints = {});
      b.constraints.datePattern || (b.constraints.datePattern = lsmbConfig.dateformat.replace(/mm/, "MM"));
      b.placeholder || (b.placeholder = lsmbConfig.dateformat);
      this.inherited(arguments)
    }, postMixInProperties:function() {
      this.inherited(arguments);
      if(this._formattedValue && (!this.value || !g.test(this.value))) {
        this.value = this.parse(this._formattedValue, this.constraints)
      }
    }, parse:function(b, d) {
      return!g.test(b) ? this.inherited(arguments) : l.parse(b, {datePattern:"yyyy-MM-dd", selector:"date"})
    }})
  })
}, "lsmb/layout/TableContainer":function() {
  define("lsmb/layout/TableContainer", "dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/_base/array dojo/dom-prop dojo/dom-style dijit/_WidgetBase dijit/layout/_LayoutWidget".split(" "), function(e, l, k, g, b, d, m, c, a, h) {
    e = k("lsmb.layout.TableContainer", h, {cols:1, labelWidth:"100", showLabels:!0, orientation:"horiz", spacing:1, customClass:"", postCreate:function() {
      this.inherited(arguments);
      this._children = [];
      this.connect(this, "set", function(a, b) {
        b && ("orientation" == a || "customClass" == a || "cols" == a) && this.layout()
      })
    }, startup:function() {
      if(!this._started && (this.inherited(arguments), !this._initialized)) {
        var a = this.getChildren();
        1 > a.length || (this._initialized = !0, g.add(this.domNode, "dijitTableLayout"), d.forEach(a, function(a) {
          !a.started && !a._started && a.startup()
        }), this.layout(), this.resize())
      }
    }, resize:function() {
      d.forEach(this.getChildren(), function(a) {
        "function" == typeof a.resize && a.resize()
      })
    }, layout:function() {
      function a(b, c, d) {
        if("" != k.customClass) {
          var f = k.customClass + "-" + (c || b.tagName.toLowerCase());
          g.add(b, f);
          2 < arguments.length && g.add(b, f + "-" + d)
        }
      }
      if(this._initialized) {
        var h = this.getChildren(), e = {}, k = this;
        d.forEach(this._children, l.hitch(this, function(a) {
          e[a.id] = a
        }));
        d.forEach(h, l.hitch(this, function(a, b) {
          e[a.id] || this._children.push(a)
        }));
        var v = b.create("table", {width:"100%", "class":"tableContainer-table tableContainer-table-" + this.orientation, cellspacing:this.spacing}, this.domNode), n = b.create("tbody");
        v.appendChild(n);
        a(v, "table", this.orientation);
        var q = b.create("tr", {}, n), p = !this.showLabels || "horiz" == this.orientation ? q : b.create("tr", {}, n), y = this.cols * (this.showLabels ? 2 : 1), u = 0;
        d.forEach(this._children, l.hitch(this, function(d, h) {
          var e = d.colspan || 1;
          1 < e && (e = this.showLabels ? Math.min(y - 1, 2 * e - 1) : Math.min(y, e));
          if(u + e - 1 + (this.showLabels ? 1 : 0) >= y) {
            u = 0, q = b.create("tr", {}, n), p = "horiz" == this.orientation ? q : b.create("tr", {}, n)
          }
          var g;
          if(this.showLabels) {
            if(g = b.create("td", {"class":"tableContainer-labelCell"}, q), d.spanLabel) {
              m.set(g, "vert" == this.orientation ? "rowspan" : "colspan", 2)
            }else {
              a(g, "labelCell");
              var k = {"for":d.get("id")}, k = b.create("label", k, g);
              if(-1 < Number(this.labelWidth) || -1 < String(this.labelWidth).indexOf("%")) {
                c.set(g, "width", 0 > String(this.labelWidth).indexOf("%") ? this.labelWidth + "px" : this.labelWidth)
              }
              k.innerHTML = d.get("label") || d.get("title")
            }
          }
          g = d.spanLabel && g ? g : b.create("td", {"class":"tableContainer-valueCell"}, p);
          1 < e && m.set(g, "colspan", e);
          a(g, "valueCell", h);
          g.appendChild(d.domNode);
          u += e + (this.showLabels ? 1 : 0)
        }));
        this.table && this.table.parentNode.removeChild(this.table);
        d.forEach(h, function(a) {
          "function" == typeof a.layout && a.layout()
        });
        this.table = v;
        this.resize()
      }
    }, destroyDescendants:function(a) {
      d.forEach(this._children, function(b) {
        b.destroyRecursive(a)
      })
    }, _setSpacingAttr:function(a) {
      this.spacing = a;
      this.table && (this.table.cellspacing = Number(a))
    }});
    e.ChildWidgetProperties = {label:"", title:"", spanLabel:!1, colspan:1};
    l.extend(a, e.ChildWidgetProperties);
    return e
  })
}, "dijit/form/_ToggleButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom-attr"], function(e, l) {
    return e("dijit.form._ToggleButtonMixin", null, {checked:!1, _aria_attr:"aria-pressed", _onClick:function(e) {
      var g = this.checked;
      this._set("checked", !g);
      var b = this.inherited(arguments);
      this.set("checked", b ? this.checked : g);
      return b
    }, _setCheckedAttr:function(e, g) {
      this._set("checked", e);
      var b = this.focusNode || this.domNode;
      this._created && l.get(b, "checked") != !!e && l.set(b, "checked", !!e);
      b.setAttribute(this._aria_attr, String(e));
      this._handleOnChange(e, g)
    }, postCreate:function() {
      this.inherited(arguments);
      var e = this.focusNode || this.domNode;
      this.checked && e.setAttribute("checked", "checked");
      void 0 === this._resetValue && (this._lastValueReported = this._resetValue = this.checked)
    }, reset:function() {
      this._hasBeenBlurred = !1;
      this.set("checked", this.params.checked || !1)
    }})
  })
}, "lsmb/InvoiceLine":function() {
  require(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dijit/_Container"], function(e, l, k, g, b) {
    return e("lsmb/InvoiceLine", [l, b], {})
  })
}, "dojo/date/stamp":function() {
  define(["../_base/lang", "../_base/array"], function(e, l) {
    var k = {};
    e.setObject("dojo.date.stamp", k);
    k.fromISOString = function(e, b) {
      k._isoRegExp || (k._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
      var d = k._isoRegExp.exec(e), m = null;
      if(d) {
        d.shift();
        d[1] && d[1]--;
        d[6] && (d[6] *= 1E3);
        b && (b = new Date(b), l.forEach(l.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "), function(a) {
          return b["get" + a]()
        }), function(a, b) {
          d[b] = d[b] || a
        }));
        m = new Date(d[0] || 1970, d[1] || 0, d[2] || 1, d[3] || 0, d[4] || 0, d[5] || 0, d[6] || 0);
        100 > d[0] && m.setFullYear(d[0] || 1970);
        var c = 0, a = d[7] && d[7].charAt(0);
        "Z" != a && (c = 60 * (d[8] || 0) + (Number(d[9]) || 0), "-" != a && (c *= -1));
        a && (c -= m.getTimezoneOffset());
        c && m.setTime(m.getTime() + 6E4 * c)
      }
      return m
    };
    k.toISOString = function(e, b) {
      var d = function(a) {
        return 10 > a ? "0" + a : a
      };
      b = b || {};
      var k = [], c = b.zulu ? "getUTC" : "get", a = "";
      "time" != b.selector && (a = e[c + "FullYear"](), a = ["0000".substr((a + "").length) + a, d(e[c + "Month"]() + 1), d(e[c + "Date"]())].join("-"));
      k.push(a);
      if("date" != b.selector) {
        a = [d(e[c + "Hours"]()), d(e[c + "Minutes"]()), d(e[c + "Seconds"]())].join(":");
        c = e[c + "Milliseconds"]();
        b.milliseconds && (a += "." + (100 > c ? "0" : "") + d(c));
        if(b.zulu) {
          a += "Z"
        }else {
          if("time" != b.selector) {
            var c = e.getTimezoneOffset(), h = Math.abs(c), a = a + ((0 < c ? "-" : "+") + d(Math.floor(h / 60)) + ":" + d(h % 60))
          }
        }
        k.push(a)
      }
      return k.join("T")
    };
    return k
  })
}, "lsmb/PublishCheckBox":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/CheckBox"], function(e, l, k, g) {
    return e("lsmb/PublishCheckbox", [g], {topic:"", publish:function(b) {
      k.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l(this, "change", function(d) {
        b.publish(d)
      }))
    }})
  })
}, "lsmb/PublishSelect":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/Select"], function(e, l, k, g) {
    return e("lsmb/PublishSelect", [g], {topic:"", publish:function(b) {
      k.publish(this.topic, b)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l(this, "change", function(d) {
        b.publish(d)
      }))
    }})
  })
}, "lsmb/PublishRadioButton":function() {
  define(["dojo/_base/declare", "dojo/on", "dojo/topic", "dijit/form/RadioButton"], function(e, l, k, g) {
    return e("lsmb/PublishRadioButton", [g], {topic:"", publish:function() {
      k.publish(this.topic, this.value)
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.own(l(this.domNode, "change", function() {
        b.publish()
      }))
    }})
  })
}, "dojo/number":function() {
  define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function(e, l, k, g, b) {
    var d = {};
    e.setObject("dojo.number", d);
    d.format = function(b, a) {
      a = e.mixin({}, a || {});
      var h = l.normalizeLocale(a.locale), h = l.getLocalization("dojo.cldr", "number", h);
      a.customs = h;
      h = a.pattern || h[(a.type || "decimal") + "Format"];
      return isNaN(b) || Infinity == Math.abs(b) ? null : d._applyPattern(b, h, a)
    };
    d._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
    d._applyPattern = function(b, a, e) {
      e = e || {};
      var f = e.customs.group, g = e.customs.decimal;
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
            f = e.customs.currencyGroup || f, g = e.customs.currencyDecimal || g, a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/, function(a, b, c, d) {
              a = e[["symbol", "currency", "displayName"][c.length - 1]] || e.currency || "";
              return!a ? "" : b + a + d
            })
          }else {
            if(-1 != a.indexOf("E")) {
              throw Error("exponential notation not supported");
            }
          }
        }
      }
      var l = d._numberPatternRE, k = k.match(l);
      if(!k) {
        throw Error("unable to find a number expression in pattern: " + a);
      }
      !1 === e.fractional && (e.places = 0);
      return a.replace(l, d._formatAbsolute(b, k[0], {decimal:g, group:f, places:e.places, round:e.round}))
    };
    d.round = function(b, a, d) {
      d = 10 / (d || 10);
      return(d * +b).toFixed(a) / d
    };
    if(0 == (0.9).toFixed()) {
      var m = d.round;
      d.round = function(b, a, d) {
        var f = Math.pow(10, -a || 0), e = Math.abs(b);
        if(!b || e >= f) {
          f = 0
        }else {
          if(e /= f, 0.5 > e || 0.95 <= e) {
            f = 0
          }
        }
        return m(b, a, d) + (0 < b ? f : -f)
      }
    }
    d._formatAbsolute = function(b, a, e) {
      e = e || {};
      !0 === e.places && (e.places = 0);
      Infinity === e.places && (e.places = 6);
      a = a.split(".");
      var f = "string" == typeof e.places && e.places.indexOf(","), k = e.places;
      f ? k = e.places.substring(f + 1) : 0 <= k || (k = (a[1] || []).length);
      0 > e.round || (b = d.round(b, k, e.round));
      b = String(Math.abs(b)).split(".");
      var l = b[1] || "";
      a[1] || e.places ? (f && (e.places = e.places.substring(0, f)), f = void 0 !== e.places ? e.places : a[1] && a[1].lastIndexOf("0") + 1, f > l.length && (b[1] = g.pad(l, f, "0", !0)), k < l.length && (b[1] = l.substr(0, k))) : b[1] && b.pop();
      k = a[0].replace(",", "");
      f = k.indexOf("0");
      -1 != f && (f = k.length - f, f > b[0].length && (b[0] = g.pad(b[0], f)), -1 == k.indexOf("#") && (b[0] = b[0].substr(b[0].length - f)));
      var k = a[0].lastIndexOf(","), t, m;
      -1 != k && (t = a[0].length - k - 1, a = a[0].substr(0, k), k = a.lastIndexOf(","), -1 != k && (m = a.length - k - 1));
      a = [];
      for(k = b[0];k;) {
        f = k.length - t, a.push(0 < f ? k.substr(f) : k), k = 0 < f ? k.slice(0, f) : "", m && (t = m, delete m)
      }
      b[0] = a.reverse().join(e.group || ",");
      return b.join(e.decimal || ".")
    };
    d.regexp = function(b) {
      return d._parseInfo(b).regexp
    };
    d._parseInfo = function(c) {
      c = c || {};
      var a = l.normalizeLocale(c.locale), a = l.getLocalization("dojo.cldr", "number", a), e = c.pattern || a[(c.type || "decimal") + "Format"], f = a.group, g = a.decimal, k = 1;
      if(-1 != e.indexOf("%")) {
        k /= 100
      }else {
        if(-1 != e.indexOf("\u2030")) {
          k /= 1E3
        }else {
          var t = -1 != e.indexOf("\u00a4");
          t && (f = a.currencyGroup || f, g = a.currencyDecimal || g)
        }
      }
      a = e.split(";");
      1 == a.length && a.push("-" + a[0]);
      a = b.buildGroupRE(a, function(a) {
        a = "(?:" + b.escapeString(a, ".") + ")";
        return a.replace(d._numberPatternRE, function(a) {
          var b = {signed:!1, separator:c.strict ? f : [f, ""], fractional:c.fractional, decimal:g, exponent:!1};
          a = a.split(".");
          var e = c.places;
          1 == a.length && 1 != k && (a[1] = "###");
          1 == a.length || 0 === e ? b.fractional = !1 : (void 0 === e && (e = c.pattern ? a[1].lastIndexOf("0") + 1 : Infinity), e && void 0 == c.fractional && (b.fractional = !0), !c.places && e < a[1].length && (e += "," + a[1].length), b.places = e);
          a = a[0].split(",");
          1 < a.length && (b.groupSize = a.pop().length, 1 < a.length && (b.groupSize2 = a.pop().length));
          return"(" + d._realNumberRegexp(b) + ")"
        })
      }, !0);
      t && (a = a.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function(a, d, e, f) {
        a = b.escapeString(c[["symbol", "currency", "displayName"][e.length - 1]] || c.currency || "");
        if(!a) {
          return""
        }
        d = d ? "[\\s\\xa0]" : "";
        f = f ? "[\\s\\xa0]" : "";
        return!c.strict ? (d && (d += "*"), f && (f += "*"), "(?:" + d + a + f + ")?") : d + a + f
      }));
      return{regexp:a.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group:f, decimal:g, factor:k}
    };
    d.parse = function(b, a) {
      var e = d._parseInfo(a), f = RegExp("^" + e.regexp + "$").exec(b);
      if(!f) {
        return NaN
      }
      var g = f[1];
      if(!f[1]) {
        if(!f[2]) {
          return NaN
        }
        g = f[2];
        e.factor *= -1
      }
      g = g.replace(RegExp("[" + e.group + "\\s\\xa0]", "g"), "").replace(e.decimal, ".");
      return g * e.factor
    };
    d._realNumberRegexp = function(c) {
      c = c || {};
      "places" in c || (c.places = Infinity);
      "string" != typeof c.decimal && (c.decimal = ".");
      if(!("fractional" in c) || /^0/.test(c.places)) {
        c.fractional = [!0, !1]
      }
      "exponent" in c || (c.exponent = [!0, !1]);
      "eSigned" in c || (c.eSigned = [!0, !1]);
      var a = d._integerRegexp(c), e = b.buildGroupRE(c.fractional, function(a) {
        var b = "";
        a && 0 !== c.places && (b = "\\" + c.decimal, b = Infinity == c.places ? "(?:" + b + "\\d+)?" : b + ("\\d{" + c.places + "}"));
        return b
      }, !0), f = b.buildGroupRE(c.exponent, function(a) {
        return a ? "([eE]" + d._integerRegexp({signed:c.eSigned}) + ")" : ""
      }), a = a + e;
      e && (a = "(?:(?:" + a + ")|(?:" + e + "))");
      return a + f
    };
    d._integerRegexp = function(c) {
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
        var d = c.groupSize, e = c.groupSize2;
        return e ? (a = "(?:0|[1-9]\\d{0," + (e - 1) + "}(?:[" + a + "]\\d{" + e + "})*[" + a + "]\\d{" + d + "})", 0 < d - e ? "(?:" + a + "|(?:0|[1-9]\\d{0," + (d - 1) + "}))" : a) : "(?:0|[1-9]\\d{0," + (d - 1) + "}(?:[" + a + "]\\d{" + d + "})*)"
      }, !0);
      return a + d
    };
    return d
  })
}, "dijit/form/MappedTextBox":function() {
  define(["dojo/_base/declare", "dojo/sniff", "dojo/dom-construct", "./ValidationTextBox"], function(e, l, k, g) {
    return e("dijit.form.MappedTextBox", g, {postMixInProperties:function() {
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
      this.valueNode = k.place("\x3cinput type\x3d'hidden'" + (this.name && !l("msapp") ? ' name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "") + "/\x3e", this.textbox, "after")
    }, reset:function() {
      this.valueNode.value = "";
      this.inherited(arguments)
    }})
  })
}, "dijit/form/_ButtonMixin":function() {
  define(["dojo/_base/declare", "dojo/dom", "dojo/has", "../registry"], function(e, l, k, g) {
    var b = e("dijit.form._ButtonMixin" + (k("dojo-bidi") ? "_NoBidi" : ""), null, {label:"", type:"button", __onClick:function(b) {
      b.stopPropagation();
      b.preventDefault();
      this.disabled || this.valueNode.click(b);
      return!1
    }, _onClick:function(b) {
      if(this.disabled) {
        return b.stopPropagation(), b.preventDefault(), !1
      }
      !1 === this.onClick(b) && b.preventDefault();
      var e = b.defaultPrevented;
      if(!e && "submit" == this.type && !(this.valueNode || this.focusNode).form) {
        for(var c = this.domNode;c.parentNode;c = c.parentNode) {
          var a = g.byNode(c);
          if(a && "function" == typeof a._onSubmit) {
            a._onSubmit(b);
            b.preventDefault();
            e = !0;
            break
          }
        }
      }
      return!e
    }, postCreate:function() {
      this.inherited(arguments);
      l.setSelectable(this.focusNode, !1)
    }, onClick:function() {
      return!0
    }, _setLabelAttr:function(b) {
      this._set("label", b);
      (this.containerNode || this.focusNode).innerHTML = b
    }});
    k("dojo-bidi") && (b = e("dijit.form._ButtonMixin", b, {_setLabelAttr:function() {
      this.inherited(arguments);
      this.applyTextDir(this.containerNode || this.focusNode)
    }}));
    return b
  })
}, "dijit/form/_FormWidget":function() {
  define("dojo/_base/declare dojo/sniff dojo/_base/kernel dojo/ready ../_Widget ../_CssStateMixin ../_TemplatedMixin ./_FormWidgetMixin".split(" "), function(e, l, k, g, b, d, m, c) {
    l("dijit-legacy-requires") && g(0, function() {
      require(["dijit/form/_FormValueWidget"])
    });
    return e("dijit.form._FormWidget", [b, m, d, c], {setDisabled:function(a) {
      k.deprecated("setDisabled(" + a + ") is deprecated. Use set('disabled'," + a + ") instead.", "", "2.0");
      this.set("disabled", a)
    }, setValue:function(a) {
      k.deprecated("dijit.form._FormWidget:setValue(" + a + ") is deprecated.  Use set('value'," + a + ") instead.", "", "2.0");
      this.set("value", a)
    }, getValue:function() {
      k.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
      return this.get("value")
    }, postMixInProperties:function() {
      this.nameAttrSetting = this.name && !l("msapp") ? 'name\x3d"' + this.name.replace(/"/g, "\x26quot;") + '"' : "";
      this.inherited(arguments)
    }})
  })
}, "dijit/MenuItem":function() {
  define("dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/kernel dojo/sniff dojo/_base/lang ./_Widget ./_TemplatedMixin ./_Contained ./_CssStateMixin dojo/text!./templates/MenuItem.html".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r) {
    m = e("dijit.MenuItem" + (d("dojo-bidi") ? "_NoBidi" : ""), [c, a, h, f], {templateString:r, baseClass:"dijitMenuItem", label:"", _setLabelAttr:function(a) {
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
      k.set(this.containerNode, "id", this.id + "_text");
      this.accelKeyNode && k.set(this.accelKeyNode, "id", this.id + "_accel");
      l.setSelectable(this.domNode, !1)
    }, onClick:function() {
    }, focus:function() {
      try {
        8 == d("ie") && this.containerNode.focus(), this.focusNode.focus()
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
      this.accelKeyNode && (this.accelKeyNode.style.display = a ? "" : "none", this.accelKeyNode.innerHTML = a, k.set(this.containerNode, "colSpan", a ? "1" : "2"));
      this._set("accelKey", a)
    }});
    d("dojo-bidi") && (m = e("dijit.MenuItem", m, {_setLabelAttr:function(a) {
      this.inherited(arguments);
      "auto" === this.textDir && this.applyTextDir(this.textDirNode)
    }}));
    return m
  })
}, "dojo/request/util":function() {
  define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "), function(e, l, k, g, b, d, m, c) {
    function a(a) {
      return f(a)
    }
    function h(a) {
      return void 0 !== a.data ? a.data : a.text
    }
    e.deepCopy = function(a, b) {
      for(var c in b) {
        var d = a[c], f = b[c];
        d !== f && (d && "object" === typeof d && f && "object" === typeof f ? e.deepCopy(d, f) : a[c] = f)
      }
      return a
    };
    e.deepCreate = function(a, b) {
      b = b || {};
      var c = m.delegate(a), d, f;
      for(d in a) {
        (f = a[d]) && "object" === typeof f && (c[d] = e.deepCreate(f, b[d]))
      }
      return e.deepCopy(c, b)
    };
    var f = Object.freeze || function(a) {
      return a
    };
    e.deferred = function(b, d, t, v, n, q) {
      var p = new g(function(a) {
        d && d(p, b);
        return!a || !(a instanceof l) && !(a instanceof k) ? new k("Request canceled", b) : a
      });
      p.response = b;
      p.isValid = t;
      p.isReady = v;
      p.handleResponse = n;
      t = p.then(a).otherwise(function(a) {
        a.response = b;
        throw a;
      });
      e.notify && t.then(m.hitch(e.notify, "emit", "load"), m.hitch(e.notify, "emit", "error"));
      v = t.then(h);
      n = new c;
      for(var y in v) {
        v.hasOwnProperty(y) && (n[y] = v[y])
      }
      n.response = t;
      f(n);
      q && p.then(function(a) {
        q.call(p, a)
      }, function(a) {
        q.call(p, b, a)
      });
      p.promise = n;
      p.then = n.then;
      return p
    };
    e.addCommonMethods = function(a, b) {
      d.forEach(b || ["GET", "POST", "PUT", "DELETE"], function(b) {
        a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function(c, d) {
          d = m.delegate(d || {});
          d.method = b;
          return a(c, d)
        }
      })
    };
    e.parseArgs = function(a, c, d) {
      var e = c.data, f = c.query;
      e && !d && "object" === typeof e && (c.data = b.objectToQuery(e));
      f ? ("object" === typeof f && (f = b.objectToQuery(f)), c.preventCache && (f += (f ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : c.preventCache && (f = "request.preventCache\x3d" + +new Date);
      a && f && (a += (~a.indexOf("?") ? "\x26" : "?") + f);
      return{url:a, options:c, getHeader:function(a) {
        return null
      }}
    };
    e.checkStatus = function(a) {
      a = a || 0;
      return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
    }
  })
}, "dojo/io-query":function() {
  define(["./_base/lang"], function(e) {
    var l = {};
    return{objectToQuery:function(k) {
      var g = encodeURIComponent, b = [], d;
      for(d in k) {
        var m = k[d];
        if(m != l[d]) {
          var c = g(d) + "\x3d";
          if(e.isArray(m)) {
            for(var a = 0, h = m.length;a < h;++a) {
              b.push(c + g(m[a]))
            }
          }else {
            b.push(c + g(m))
          }
        }
      }
      return b.join("\x26")
    }, queryToObject:function(k) {
      var g = decodeURIComponent;
      k = k.split("\x26");
      for(var b = {}, d, l, c = 0, a = k.length;c < a;++c) {
        if(l = k[c], l.length) {
          var h = l.indexOf("\x3d");
          0 > h ? (d = g(l), l = "") : (d = g(l.slice(0, h)), l = g(l.slice(h + 1)));
          "string" == typeof b[d] && (b[d] = [b[d]]);
          e.isArray(b[d]) ? b[d].push(l) : b[d] = l
        }
      }
      return b
    }}
  })
}, "lsmb/ComparisonSelectionIncome":function() {
  define("lsmb/ComparisonSelectionIncome", "dijit/layout/ContentPane dojo/_base/declare dojo/dom dojo/topic dojo/dom-style dijit/registry dojo/_base/array".split(" "), function(e, l, k, g, b, d, m) {
    return l("lsmb/ComparisonSelectionIncome", e, {topic:"", type:"", comparisons:0, container:"", _show:function(c) {
      c && k.byId(c) && b.set(c, "display", "block")
    }, _hide:function(c) {
      c && k.byId(c) && b.set(c, "display", "none")
    }, _interval:function(b) {
      var a = d.byId("interval");
      a.set("required", b).set("disabled", !b);
      b && a.focus()
    }, _toggles:function(b, a) {
      for(var e = 1;9 >= e;e++) {
        var f = k.byId(b + "_" + e), g = e <= this.comparisons && a;
        d.byId("from_date_" + e).set("required", g);
        d.byId("from_date_" + e).set("disabled", !g);
        d.byId("to_date_" + e).set("required", g);
        d.byId("to_date_" + e).set("disabled", !g);
        (g ? this._show : this._hide)(f)
      }
    }, _setTypeAttr:function(b) {
      this.type = b
    }, _getTypeAttr:function(b) {
      return this.type
    }, _setComparisonsAttr:function(b) {
      this.comparisons = b;
      this._toggles("comparison_dates", "by_dates" === this.type);
      this._toggles("comparison_dates_to", "by_dates" === this.type)
    }, _getComparisonsAttr:function(b) {
      return this.comparisons
    }, update:function(b) {
      k.byId(this.id);
      "by_dates" === b ? (this.set("type", b), this._show(this.container), this._hide("date_period_id"), this._show("comparison_dates_to"), d.byId("to_date").set("required", !0), d.byId("to_date").set("disabled", !1), this._toggles("comparison_dates", 1), this._toggles("comparison_dates_to", 1)) : "by_periods" === b ? (this.set("type", b), this._hide(this.container), this._show("date_period_id"), this._hide("comparison_dates_to"), d.byId("to_date").set("required", !1), d.byId("to_date").set("disabled", 
      !0), this._toggles("comparison_dates", 0), this._toggles("comparison_dates_to", 0)) : 0 <= b && 9 >= b && this.set("comparisons", b);
      this._interval(0 <= b && "by_periods" === this.get("type"))
    }, postCreate:function() {
      var b = this;
      this.inherited(arguments);
      this.container = this.id;
      this.own(g.subscribe(b.topic, function(a) {
        b.update(a)
      }));
      var a = m.filter(d.findWidgets(k.byId("comparison_type_radios")), function(a) {
        return a.get("checked")
      }).pop();
      a || (a = d.byId("comparison_by_periods"));
      a && (a.set("checked", !0), this.update(a.get("value")));
      a = d.byId("comparison_periods");
      this.update(a.get("value") || 0)
    }})
  })
}, "dijit/_MenuBase":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/_base/lang dojo/mouse dojo/on dojo/window ./a11yclick ./registry ./_Widget ./_CssStateMixin ./_KeyNavContainer ./_TemplatedMixin".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v) {
    return l("dijit._MenuBase", [r, v, t, s], {selected:null, _setSelectedAttr:function(a) {
      this.selected != a && (this.selected && (this.selected._setSelected(!1), this._onChildDeselect(this.selected)), a && a._setSelected(!0), this._set("selected", a))
    }, activated:!1, _setActivatedAttr:function(a) {
      b.toggle(this.domNode, "dijitMenuActive", a);
      b.toggle(this.domNode, "dijitMenuPassive", !a);
      this._set("activated", a)
    }, parentMenu:null, popupDelay:500, passivePopupDelay:Infinity, autoFocus:!1, childSelector:function(a) {
      var b = f.byNode(a);
      return a.parentNode == this.containerNode && b && b.focus
    }, postCreate:function() {
      var a = this, b = "string" == typeof this.childSelector ? this.childSelector : d.hitch(this, "childSelector");
      this.own(c(this.containerNode, c.selector(b, m.enter), function() {
        a.onItemHover(f.byNode(this))
      }), c(this.containerNode, c.selector(b, m.leave), function() {
        a.onItemUnhover(f.byNode(this))
      }), c(this.containerNode, c.selector(b, h), function(b) {
        a.onItemClick(f.byNode(this), b);
        b.stopPropagation()
      }), c(this.containerNode, c.selector(b, "focusin"), function() {
        a._onItemFocus(f.byNode(this))
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
        var e = a.popup;
        e.parentMenu = this;
        this.own(this._mouseoverHandle = c.once(e.domNode, "mouseover", d.hitch(this, "_onPopupHover")));
        var f = this;
        a._openPopup({parent:this, orient:this._orient || ["after", "before"], onCancel:function() {
          b && f.focusChild(a);
          f._cleanUp()
        }, onExecute:d.hitch(this, "_cleanUp", !0), onClose:function() {
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
}, "dojo/promise/all":function() {
  define(["../_base/array", "../Deferred", "../when"], function(e, l, k) {
    var g = e.some;
    return function(b) {
      var d, e;
      b instanceof Array ? e = b : b && "object" === typeof b && (d = b);
      var c, a = [];
      if(d) {
        e = [];
        for(var h in d) {
          Object.hasOwnProperty.call(d, h) && (a.push(h), e.push(d[h]))
        }
        c = {}
      }else {
        e && (c = [])
      }
      if(!e || !e.length) {
        return(new l).resolve(c)
      }
      var f = new l;
      f.promise.always(function() {
        c = a = null
      });
      var r = e.length;
      g(e, function(b, e) {
        d || a.push(e);
        k(b, function(b) {
          f.isFulfilled() || (c[a[e]] = b, 0 === --r && f.resolve(c))
        }, f.reject);
        return f.isFulfilled()
      });
      return f.promise
    }
  })
}, "lsmb/InvoiceLines":function() {
  require(["dojo/_base/declare", "dijit/registry", "dijit/_WidgetBase", "dijit/_Container"], function(e, l, k, g) {
    return e("lsmb/InvoiceLines", [k, g], {removeLine:function(b) {
      this.removeChild(l.byId(b));
      this.emit("changed", {action:"removed"})
    }})
  })
}, "dojo/_base/xhr":function() {
  define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n) {
    e._xhrObj = v._create;
    var q = e.config;
    e.objectToQuery = g.objectToQuery;
    e.queryToObject = g.queryToObject;
    e.fieldToObject = d.fieldToObject;
    e.formToObject = d.toObject;
    e.formToQuery = d.toQuery;
    e.formToJson = d.toJson;
    e._blockAsync = !1;
    var p = e._contentHandlers = e.contentHandlers = {text:function(a) {
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
      return e.eval(a.responseText)
    }, xml:function(a) {
      var b = a.responseXML;
      b && (l("dom-qsa2.1") && !b.querySelectorAll && l("dom-parser")) && (b = (new DOMParser).parseFromString(a.responseText, "application/xml"));
      if(l("ie") && (!b || !b.documentElement)) {
        var c = function(a) {
          return"MSXML" + a + ".DOMDocument"
        }, c = ["Microsoft.XMLDOM", c(6), c(4), c(3), c(2)];
        f.some(c, function(c) {
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
      return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? p["json-comment-filtered"](a) : p.json(a)
    }};
    e._ioSetArgs = function(a, c, f, k) {
      var l = {args:a, url:a.url}, p = null;
      if(a.form) {
        var p = b.byId(a.form), t = p.getAttributeNode("action");
        l.url = l.url || (t ? t.value : null);
        p = d.toObject(p)
      }
      t = [{}];
      p && t.push(p);
      a.content && t.push(a.content);
      a.preventCache && t.push({"dojo.preventCache":(new Date).valueOf()});
      l.query = g.objectToQuery(h.mixin.apply(null, t));
      l.handleAs = a.handleAs || "text";
      var n = new m(function(a) {
        a.canceled = !0;
        c && c(a);
        var b = a.ioArgs.error;
        b || (b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b);
        return b
      });
      n.addCallback(f);
      var r = a.load;
      r && h.isFunction(r) && n.addCallback(function(b) {
        return r.call(a, b, l)
      });
      var y = a.error;
      y && h.isFunction(y) && n.addErrback(function(b) {
        return y.call(a, b, l)
      });
      var u = a.handle;
      u && h.isFunction(u) && n.addBoth(function(b) {
        return u.call(a, b, l)
      });
      n.addErrback(function(a) {
        return k(a, n)
      });
      q.ioPublish && (e.publish && !1 !== l.args.ioPublish) && (n.addCallbacks(function(a) {
        e.publish("/dojo/io/load", [n, a]);
        return a
      }, function(a) {
        e.publish("/dojo/io/error", [n, a]);
        return a
      }), n.addBoth(function(a) {
        e.publish("/dojo/io/done", [n, a]);
        return a
      }));
      n.ioArgs = l;
      return n
    };
    var y = function(a) {
      a = p[a.ioArgs.handleAs](a.ioArgs.xhr);
      return void 0 === a ? null : a
    }, u = function(a, b) {
      b.ioArgs.args.failOk || console.error(a);
      return a
    }, w = function(a) {
      0 >= x && (x = 0, q.ioPublish && (e.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish)) && e.publish("/dojo/io/stop"))
    }, x = 0;
    s.after(t, "_onAction", function() {
      x -= 1
    });
    s.after(t, "_onInFlight", w);
    e._ioCancelAll = t.cancelAll;
    e._ioNotifyStart = function(a) {
      q.ioPublish && (e.publish && !1 !== a.ioArgs.args.ioPublish) && (x || e.publish("/dojo/io/start"), x += 1, e.publish("/dojo/io/send", [a]))
    };
    e._ioWatch = function(a, b, c, d) {
      a.ioArgs.options = a.ioArgs.args;
      h.mixin(a, {response:a.ioArgs, isValid:function(c) {
        return b(a)
      }, isReady:function(b) {
        return c(a)
      }, handleResponse:function(b) {
        return d(a)
      }});
      t(a);
      w(a)
    };
    e._ioAddQueryToUrl = function(a) {
      a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null)
    };
    e.xhr = function(a, b, c) {
      var d, f = e._ioSetArgs(b, function(a) {
        d && d.cancel()
      }, y, u), g = f.ioArgs;
      "postData" in b ? g.query = b.postData : "putData" in b ? g.query = b.putData : "rawBody" in b ? g.query = b.rawBody : (2 < arguments.length && !c || -1 === "POST|PUT".indexOf(a.toUpperCase())) && e._ioAddQueryToUrl(g);
      var h = {method:a, handleAs:"text", timeout:b.timeout, withCredentials:b.withCredentials, ioArgs:g};
      "undefined" !== typeof b.headers && (h.headers = b.headers);
      "undefined" !== typeof b.contentType && (h.headers || (h.headers = {}), h.headers["Content-Type"] = b.contentType);
      "undefined" !== typeof g.query && (h.data = g.query);
      "undefined" !== typeof b.sync && (h.sync = b.sync);
      e._ioNotifyStart(f);
      try {
        d = v(g.url, h, !0)
      }catch(k) {
        return f.cancel(), f
      }
      f.ioArgs.xhr = d.response.xhr;
      d.then(function() {
        f.resolve(f)
      }).otherwise(function(a) {
        g.error = a;
        a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
        f.reject(a)
      });
      return f
    };
    e.xhrGet = function(a) {
      return e.xhr("GET", a)
    };
    e.rawXhrPost = e.xhrPost = function(a) {
      return e.xhr("POST", a, !0)
    };
    e.rawXhrPut = e.xhrPut = function(a) {
      return e.xhr("PUT", a, !0)
    };
    e.xhrDelete = function(a) {
      return e.xhr("DELETE", a)
    };
    e._isDocumentOk = function(a) {
      return n.checkStatus(a.status)
    };
    e._getText = function(a) {
      var b;
      e.xhrGet({url:a, sync:!0, load:function(a) {
        b = a
      }});
      return b
    };
    h.mixin(e.xhr, {_xhrObj:e._xhrObj, fieldToObject:d.fieldToObject, formToObject:d.toObject, objectToQuery:g.objectToQuery, formToQuery:d.toQuery, formToJson:d.toJson, queryToObject:g.queryToObject, contentHandlers:p, _ioSetArgs:e._ioSetArgs, _ioCancelAll:e._ioCancelAll, _ioNotifyStart:e._ioNotifyStart, _ioWatch:e._ioWatch, _ioAddQueryToUrl:e._ioAddQueryToUrl, _isDocumentOk:e._isDocumentOk, _getText:e._getText, get:e.xhrGet, post:e.xhrPost, put:e.xhrPut, del:e.xhrDelete});
    return e.xhr
  })
}, "dijit/_HasDropDown":function() {
  define("dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on dojo/touch ./registry ./focus ./popup ./_FocusMixin".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n) {
    return e("dijit._HasDropDown", n, {_buttonNode:null, _arrowWrapperNode:null, _popupStateNode:null, _aroundNode:null, dropDown:null, autoWidth:!0, forceWidth:!1, maxHeight:-1, dropDownPosition:["below", "above"], _stopClickEvents:!0, _onDropDownMouseDown:function(a) {
      !this.disabled && !this.readOnly && ("MSPointerDown" != a.type && "pointerdown" != a.type && a.preventDefault(), this.own(f.once(this.ownerDocument, r.release, h.hitch(this, "_onDropDownMouseUp"))), this.toggleDropDown())
    }, _onDropDownMouseUp:function(a) {
      var c = this.dropDown, e = !1;
      if(a && this._opened) {
        var f = d.position(this._buttonNode, !0);
        if(!(a.pageX >= f.x && a.pageX <= f.x + f.w) || !(a.pageY >= f.y && a.pageY <= f.y + f.h)) {
          for(f = a.target;f && !e;) {
            b.contains(f, "dijitPopup") ? e = !0 : f = f.parentNode
          }
          if(e) {
            f = a.target;
            if(c.onItemClick) {
              for(var g;f && !(g = s.byNode(f));) {
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
      this.own(f(this._buttonNode, r.press, h.hitch(this, "_onDropDownMouseDown")), f(this._buttonNode, "click", h.hitch(this, "_onDropDownClick")), f(a, "keydown", h.hitch(this, "_onKey")), f(a, "keyup", h.hitch(this, "_onKeyUp")))
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
        a && a.focus && this.defer(h.hitch(a, "focus"), 1)
      }
    }, _onBlur:function() {
      this.closeDropDown(!1);
      this.inherited(arguments)
    }, isLoaded:function() {
      return!0
    }, loadDropDown:function(a) {
      a()
    }, loadAndOpenDropDown:function() {
      var a = new l, b = h.hitch(this, function() {
        this.openDropDown();
        a.resolve(this.dropDown)
      });
      this.isLoaded() ? b() : this.loadDropDown(b);
      return a
    }, toggleDropDown:function() {
      !this.disabled && !this.readOnly && (this._opened ? this.closeDropDown(!0) : this.loadAndOpenDropDown())
    }, openDropDown:function() {
      var a = this.dropDown, c = a.domNode, e = this._aroundNode || this.domNode, f = this, k = v.open({parent:this, popup:a, around:e, orient:this.dropDownPosition, maxHeight:this.maxHeight, onExecute:function() {
        f.closeDropDown(!0)
      }, onCancel:function() {
        f.closeDropDown(!0)
      }, onClose:function() {
        g.set(f._popupStateNode, "popupActive", !1);
        b.remove(f._popupStateNode, "dijitHasDropDownOpen");
        f._set("_opened", !1)
      }});
      if(this.forceWidth || this.autoWidth && e.offsetWidth > a._popupWrapper.offsetWidth) {
        var e = e.offsetWidth - a._popupWrapper.offsetWidth, l = {w:a.domNode.offsetWidth + e};
        this._origStyle = c.style.cssText;
        h.isFunction(a.resize) ? a.resize(l) : d.setMarginBox(c, l);
        "R" == k.corner[1] && (a._popupWrapper.style.left = a._popupWrapper.style.left.replace("px", "") - e + "px")
      }
      g.set(this._popupStateNode, "popupActive", "true");
      b.add(this._popupStateNode, "dijitHasDropDownOpen");
      this._set("_opened", !0);
      this._popupStateNode.setAttribute("aria-expanded", "true");
      this._popupStateNode.setAttribute("aria-owns", a.id);
      "presentation" !== c.getAttribute("role") && !c.getAttribute("aria-labelledby") && c.setAttribute("aria-labelledby", this.id);
      return k
    }, closeDropDown:function(a) {
      this._focusDropDownTimer && (this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
      this._opened && (this._popupStateNode.setAttribute("aria-expanded", "false"), a && this.focus && this.focus(), v.close(this.dropDown), this._opened = !1);
      this._origStyle && (this.dropDown.domNode.style.cssText = this._origStyle, delete this._origStyle)
    }})
  })
}, "dijit/Calendar":function() {
  define("dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n, q) {
    var p = g("dijit.Calendar", [s, t, v], {baseClass:"dijitCalendar", cssStateNodes:{decrementMonth:"dijitCalendarArrow", incrementMonth:"dijitCalendarArrow", previousYearLabelNode:"dijitCalendarPreviousYear", nextYearLabelNode:"dijitCalendarNextYear"}, setValue:function(a) {
      c.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
      this.set("value", a)
    }, _createMonthWidget:function() {
      return new p._MonthDropDownButton({id:this.id + "_mddb", tabIndex:-1, onMonthSelect:h.hitch(this, "_onMonthSelect"), lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, postCreate:function() {
      this.inherited(arguments);
      this.own(f(this.domNode, "keydown", h.hitch(this, "_onKeyDown")), f(this.dateRowsNode, "mouseover", h.hitch(this, "_onDayMouseOver")), f(this.dateRowsNode, "mouseout", h.hitch(this, "_onDayMouseOut")), f(this.dateRowsNode, "mousedown", h.hitch(this, "_onDayMouseDown")), f(this.dateRowsNode, "mouseup", h.hitch(this, "_onDayMouseUp")))
    }, _onMonthSelect:function(a) {
      var b = new this.dateClassObj(this.currentFocus);
      b.setDate(1);
      b.setMonth(a);
      a = this.dateModule.getDaysInMonth(b);
      var c = this.currentFocus.getDate();
      b.setDate(Math.min(c, a));
      this._setCurrentFocusAttr(b)
    }, _onDayMouseOver:function(a) {
      if((a = d.contains(a.target, "dijitCalendarDateLabel") ? a.target.parentNode : a.target) && (a.dijitDateValue && !d.contains(a, "dijitCalendarDisabledDate") || a == this.previousYearLabelNode || a == this.nextYearLabelNode)) {
        d.add(a, "dijitCalendarHoveredDate"), this._currentNode = a
      }
    }, _onDayMouseOut:function(a) {
      this._currentNode && !(a.relatedTarget && a.relatedTarget.parentNode == this._currentNode) && (a = "dijitCalendarHoveredDate", d.contains(this._currentNode, "dijitCalendarActiveDate") && (a += " dijitCalendarActiveDate"), d.remove(this._currentNode, a), this._currentNode = null)
    }, _onDayMouseDown:function(a) {
      if((a = a.target.parentNode) && a.dijitDateValue && !d.contains(a, "dijitCalendarDisabledDate")) {
        d.add(a, "dijitCalendarActiveDate"), this._currentNode = a
      }
    }, _onDayMouseUp:function(a) {
      (a = a.target.parentNode) && a.dijitDateValue && d.remove(a, "dijitCalendarActiveDate")
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
    p._MonthDropDownButton = g("dijit.Calendar._MonthDropDownButton", q, {onMonthSelect:function() {
    }, postCreate:function() {
      this.inherited(arguments);
      this.dropDown = new p._MonthDropDown({id:this.id + "_mdd", onChange:this.onMonthSelect})
    }, _setMonthAttr:function(a) {
      var b = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
      this.dropDown.set("months", b);
      this.containerNode.innerHTML = (6 == r("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + this.dropDown.domNode.innerHTML + "\x3c/div\x3e") + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + b[a.getMonth()] + "\x3c/div\x3e"
    }});
    p._MonthDropDown = g("dijit.Calendar._MonthDropDown", [t, n, v], {months:[], baseClass:"dijitCalendarMonthMenu dijitMenu", templateString:"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onClick'\x3e\x3c/div\x3e", _setMonthsAttr:function(a) {
      this.domNode.innerHTML = "";
      e.forEach(a, function(a, b) {
        m.create("div", {className:"dijitCalendarMonthLabel", month:b, innerHTML:a}, this.domNode)._cssState = "dijitCalendarMonthLabel"
      }, this)
    }, _onClick:function(a) {
      this.onChange(b.get(a.target, "month"))
    }, onChange:function() {
    }});
    return p
  })
}, "dijit/form/_FormSelectWidget":function() {
  define("dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/data/util/sorter dojo/_base/declare dojo/dom dojo/dom-class dojo/_base/kernel dojo/_base/lang dojo/query dojo/when dojo/store/util/QueryResults ./_FormValueWidget".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s) {
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
        return e.map(b, "return this.getOptions(item);", this)
      }
      a.isString(b) && (b = {value:b});
      a.isObject(b) && (e.some(c, function(a, c) {
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
      e.forEach(a.isArrayLike(b) ? b : [b], function(b) {
        b && a.isObject(b) && this.options.push(b)
      }, this);
      this._loadChildren()
    }, removeOption:function(b) {
      b = this.getOptions(a.isArrayLike(b) ? b : [b]);
      e.forEach(b, function(a) {
        a && (this.options = e.filter(this.options, function(b) {
          return b.value !== a.value || b.label !== a.label
        }), this._removeOptionItem(a))
      }, this);
      this._loadChildren()
    }, updateOption:function(b) {
      e.forEach(a.isArrayLike(b) ? b : [b], function(a) {
        var b = this.getOptions({value:a.value}), c;
        if(b) {
          for(c in a) {
            b[c] = a[c]
          }
        }
      }, this);
      this._loadChildren()
    }, setStore:function(a, b, d) {
      c.deprecated(this.declaredClass + "::setStore(store, selectedValue, fetchArgs) is deprecated. Use set('query', fetchArgs.query), set('queryOptions', fetchArgs.queryOptions), set('store', store), or set('value', selectedValue) instead.", "", "2.0");
      this._deprecatedSetStore(a, b, d)
    }, _deprecatedSetStore:function(b, c, d) {
      var h = this.store;
      d = d || {};
      if(h !== b) {
        for(var p;p = this._notifyConnections.pop();) {
          p.remove()
        }
        b.get || (a.mixin(b, {_oldAPI:!0, get:function(a) {
          var b = new l;
          this.fetchItemByIdentity({identity:a, onItem:function(a) {
            b.resolve(a)
          }, onError:function(a) {
            b.reject(a)
          }});
          return b.promise
        }, query:function(b, c) {
          var d = new l(function() {
            e.abort && e.abort()
          });
          d.total = new l;
          var e = this.fetch(a.mixin({query:b, onBegin:function(a) {
            d.total.resolve(a)
          }, onComplete:function(a) {
            d.resolve(a)
          }, onError:function(a) {
            d.reject(a)
          }}, c));
          return new r(d)
        }}), b.getFeatures()["dojo.data.api.Notification"] && (this._notifyConnections = [k.after(b, "onNew", a.hitch(this, "_onNewItem"), !0), k.after(b, "onDelete", a.hitch(this, "_onDeleteItem"), !0), k.after(b, "onSet", a.hitch(this, "_onSetItem"), !0)]));
        this._set("store", b)
      }
      this.options && this.options.length && this.removeOption(this.options);
      this._queryRes && this._queryRes.close && this._queryRes.close();
      this._observeHandle && this._observeHandle.remove && (this._observeHandle.remove(), this._observeHandle = null);
      d.query && this._set("query", d.query);
      d.queryOptions && this._set("queryOptions", d.queryOptions);
      b && b.query && (this._loadingStore = !0, this.onLoadDeferred = new l, this._queryRes = b.query(this.query, this.queryOptions), f(this._queryRes, a.hitch(this, function(f) {
        if(this.sortByLabel && !d.sort && f.length) {
          if(b.getValue) {
            f.sort(g.createSortFunction([{attribute:b.getLabelAttributes(f[0])[0]}], b))
          }else {
            var h = this.labelAttr;
            f.sort(function(a, b) {
              return a[h] > b[h] ? 1 : b[h] > a[h] ? -1 : 0
            })
          }
        }
        d.onFetch && (f = d.onFetch.call(this, f, d));
        e.forEach(f, function(a) {
          this._addOptionForItem(a)
        }, this);
        this._queryRes.observe && (this._observeHandle = this._queryRes.observe(a.hitch(this, function(a, b, c) {
          b == c ? this._onSetItem(a) : (-1 != b && this._onDeleteItem(a), -1 != c && this._onNewItem(a))
        }), !0));
        this._loadingStore = !1;
        this.set("value", "_pendingValue" in this ? this._pendingValue : c);
        delete this._pendingValue;
        this.loadChildrenOnOpen ? this._pseudoLoadChildren(f) : this._loadChildren();
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
          b = a.isArrayLike(b) ? e.map(b, function(b) {
            return a.isObject(b) ? b : {value:b}
          }) : a.isObject(b) ? [b] : [{value:b}];
          b = e.filter(this.getOptions(b), function(a) {
            return a && a.value
          });
          var d = this.getOptions() || [];
          if(!this.multiple && (!b[0] || !b[0].value) && d.length) {
            b[0] = d[0]
          }
          e.forEach(d, function(a) {
            a.selected = e.some(b, function(b) {
              return b.value === a.value
            })
          });
          d = e.map(b, function(a) {
            return a.value
          });
          if(!("undefined" == typeof d || "undefined" == typeof d[0])) {
            var f = e.map(b, function(a) {
              return a.label
            });
            this._setDisplay(this.multiple ? f : f[0]);
            this.inherited(arguments, [this.multiple ? d : d[0], c]);
            this._updateSelection()
          }
        }
      }
    }, _getDisplayedValueAttr:function() {
      var a = e.map([].concat(this.get("selectedOptions")), function(a) {
        return a && "label" in a ? a.label : a ? a.value : null
      }, this);
      return this.multiple ? a : a[0]
    }, _setDisplayedValueAttr:function(a) {
      this.set("value", this.getOptions("string" == typeof a ? {label:a} : a))
    }, _loadChildren:function() {
      this._loadingStore || (e.forEach(this._getChildren(), function(a) {
        a.destroyRecursive()
      }), e.forEach(this.options, this._addOptionItem, this), this._updateSelection())
    }, _updateSelection:function() {
      this.focusedChild = null;
      this._set("value", this._getValueFromOpts());
      var a = [].concat(this.value);
      if(a && a[0]) {
        var b = this;
        e.forEach(this._getChildren(), function(c) {
          var d = e.some(a, function(a) {
            return c.option && a === c.option.value
          });
          d && !b.multiple && (b.focusedChild = c);
          m.toggle(c.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), d);
          c.domNode.setAttribute("aria-selected", d ? "true" : "false")
        }, this)
      }
    }, _getValueFromOpts:function() {
      var a = this.getOptions() || [];
      if(!this.multiple && a.length) {
        var b = e.filter(a, function(a) {
          return a.selected
        })[0];
        if(b && b.value) {
          return b.value
        }
        a[0].selected = !0;
        return a[0].value
      }
      return this.multiple ? e.map(e.filter(a, function(a) {
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
      d.setSelectable(this.focusNode, !1)
    }, _fillContent:function() {
      this.options || (this.options = this.srcNodeRef ? h("\x3e *", this.srcNodeRef).map(function(a) {
        return"separator" === a.getAttribute("type") ? {value:"", label:"", selected:!1, disabled:!1} : {value:a.getAttribute("data-" + c._scopeName + "-value") || a.getAttribute("value"), label:String(a.innerHTML), selected:a.getAttribute("selected") || !1, disabled:a.getAttribute("disabled") || !1}
      }, this) : []);
      this.value ? this.multiple && "string" == typeof this.value && this._set("value", this.value.split(",")) : this._set("value", this._getValueFromOpts())
    }, postCreate:function() {
      this.inherited(arguments);
      k.after(this, "onChange", a.hitch(this, "_updateSelection"));
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
  define(["./create"], function(e) {
    return e("RequestError", function(e, k) {
      this.response = k
    })
  })
}, "dijit/popup":function() {
  define("dojo/_base/array dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/keys dojo/_base/lang dojo/on ./place ./BackgroundIframe ./Viewport ./main dojo/touch".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v, n) {
    function q() {
      this._popupWrapper && (d.destroy(this._popupWrapper), delete this._popupWrapper)
    }
    k = k(null, {_stack:[], _beginZIndex:1E3, _idGen:1, _repositionAll:function() {
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
        this._aroundMoveListener = setTimeout(f.hitch(this, "_repositionAll"), c || a ? 10 : 50)
      }
    }, _createWrapper:function(a) {
      var b = a._popupWrapper, c = a.domNode;
      b || (b = d.create("div", {"class":"dijitPopup", style:{display:"none"}, role:"region", "aria-label":a["aria-label"] || a.label || a.name || a.id}, a.ownerDocumentBody), b.appendChild(c), c = c.style, c.display = "", c.visibility = "", c.position = "", c.top = "0px", a._popupWrapper = b, l.after(a, "destroy", q, !0), "ontouchend" in document && r(b, "touchend", function(a) {
        /^(input|button|textarea)$/i.test(a.target.tagName) || a.preventDefault()
      }), b.dojoClick = !0);
      return b
    }, moveOffScreen:function(a) {
      var b = this._createWrapper(a);
      a = m.isBodyLtr(a.ownerDocument);
      var d = {visibility:"hidden", top:"-9999px", display:""};
      d[a ? "left" : "right"] = "-9999px";
      d[a ? "right" : "left"] = "auto";
      c.set(b, d);
      return b
    }, hide:function(a) {
      var b = this._createWrapper(a);
      c.set(b, {display:"none", height:"auto", overflowY:"visible", border:""});
      a = a.domNode;
      "_originalStyle" in a && (a.style.cssText = a._originalStyle)
    }, getTopPopup:function() {
      for(var a = this._stack, b = a.length - 1;0 < b && a[b].parent === a[b - 1].widget;b--) {
      }
      return a[b]
    }, open:function(d) {
      for(var e = this._stack, k = d.popup, l = k.domNode, q = d.orient || ["below", "below-alt", "above", "above-alt"], n = d.parent ? d.parent.isLeftToRight() : m.isBodyLtr(k.ownerDocument), A = d.around, D = d.around && d.around.id ? d.around.id + "_dropdown" : "popup_" + this._idGen++;e.length && (!d.parent || !g.isDescendant(d.parent.domNode, e[e.length - 1].widget.domNode));) {
        this.close(e[e.length - 1].widget)
      }
      var I = this.moveOffScreen(k);
      k.startup && !k._started && k.startup();
      var K, N = m.position(l);
      if("maxHeight" in d && -1 != d.maxHeight) {
        K = d.maxHeight || Infinity
      }else {
        K = v.getEffectiveBox(this.ownerDocument);
        var H = A ? m.position(A, !1) : {y:d.y - (d.padding || 0), h:2 * (d.padding || 0)};
        K = Math.floor(Math.max(H.y, K.h - (H.y + H.h)))
      }
      N.h > K && (N = c.getComputedStyle(l), c.set(I, {overflowY:"scroll", height:K + "px", border:N.borderLeftWidth + " " + N.borderLeftStyle + " " + N.borderLeftColor}), l._originalStyle = l.style.cssText, l.style.border = "none");
      b.set(I, {id:D, style:{zIndex:this._beginZIndex + e.length}, "class":"dijitPopup " + (k.baseClass || k["class"] || "").split(" ")[0] + "Popup", dijitPopupParent:d.parent ? d.parent.id : ""});
      0 == e.length && A && (this._firstAroundNode = A, this._firstAroundPosition = m.position(A, !0), this._aroundMoveListener = setTimeout(f.hitch(this, "_repositionAll"), 50));
      a("config-bgIframe") && !k.bgIframe && (k.bgIframe = new t(I));
      D = k.orient ? f.hitch(k, "orient") : null;
      q = A ? s.around(I, A, q, n, D) : s.at(I, d, "R" == q ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], d.padding, D);
      I.style.visibility = "visible";
      l.style.visibility = "visible";
      l = [];
      l.push(r(I, "keydown", f.hitch(this, function(a) {
        if(a.keyCode == h.ESCAPE && d.onCancel) {
          a.stopPropagation(), a.preventDefault(), d.onCancel()
        }else {
          if(a.keyCode == h.TAB && (a.stopPropagation(), a.preventDefault(), (a = this.getTopPopup()) && a.onCancel)) {
            a.onCancel()
          }
        }
      })));
      k.onCancel && d.onCancel && l.push(k.on("cancel", d.onCancel));
      l.push(k.on(k.onExecute ? "execute" : "change", f.hitch(this, function() {
        var a = this.getTopPopup();
        if(a && a.onExecute) {
          a.onExecute()
        }
      })));
      e.push({widget:k, wrapper:I, parent:d.parent, onExecute:d.onExecute, onCancel:d.onCancel, onClose:d.onClose, handlers:l});
      if(k.onOpen) {
        k.onOpen(q)
      }
      return q
    }, close:function(a) {
      for(var b = this._stack;a && e.some(b, function(b) {
        return b.widget == a
      }) || !a && b.length;) {
        var c = b.pop(), d = c.widget, f = c.onClose;
        d.bgIframe && (d.bgIframe.destroy(), delete d.bgIframe);
        if(d.onClose) {
          d.onClose()
        }
        for(var g;g = c.handlers.pop();) {
          g.remove()
        }
        d && d.domNode && this.hide(d);
        f && f()
      }
      0 == b.length && this._aroundMoveListener && (clearTimeout(this._aroundMoveListener), this._firstAroundNode = this._firstAroundPosition = this._aroundMoveListener = null)
    }});
    return n.popup = new k
  })
}, "dijit/form/_RadioButtonMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(e, l, k, g, b, d) {
    return l("dijit.form._RadioButtonMixin", null, {type:"radio", _getRelatedWidgets:function() {
      var e = [];
      b("input[type\x3dradio]", this.focusNode.form || this.ownerDocument).forEach(g.hitch(this, function(b) {
        b.name == this.name && b.form == this.focusNode.form && (b = d.getEnclosingWidget(b)) && e.push(b)
      }));
      return e
    }, _setCheckedAttr:function(b) {
      this.inherited(arguments);
      this._created && b && e.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        b != this && b.checked && b.set("checked", !1)
      }))
    }, _getSubmitValue:function(b) {
      return null == b ? "on" : b
    }, _onClick:function(b) {
      return this.checked || this.disabled ? (b.stopPropagation(), b.preventDefault(), !1) : this.readOnly ? (b.stopPropagation(), b.preventDefault(), e.forEach(this._getRelatedWidgets(), g.hitch(this, function(b) {
        k.set(this.focusNode || this.domNode, "checked", b.checked)
      })), !1) : this.inherited(arguments)
    }})
  })
}, "dijit/layout/_ContentPaneResizeMixin":function() {
  define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/lang dojo/query ../registry ../Viewport ./utils".split(" "), function(e, l, k, g, b, d, m, c, a, h) {
    return l("dijit.layout._ContentPaneResizeMixin", null, {doLayout:!0, isLayoutContainer:!0, startup:function() {
      if(!this._started) {
        var b = this.getParent();
        this._childOfLayoutWidget = b && b.isLayoutContainer;
        this._needLayout = !this._childOfLayoutWidget;
        this.inherited(arguments);
        this._isShown() && this._onShow();
        this._childOfLayoutWidget || this.own(a.on("resize", d.hitch(this, "resize")))
      }
    }, _checkIfSingleChild:function() {
      if(this.doLayout) {
        var a = [], b = !1;
        m("\x3e *", this.containerNode).some(function(d) {
          var e = c.byNode(d);
          e && e.resize ? a.push(e) : !/script|link|style/i.test(d.nodeName) && d.offsetHeight && (b = !0)
        });
        this._singleChild = 1 == a.length && !b ? a[0] : null;
        k.toggle(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild)
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
      var c = this.containerNode;
      if(c === this.domNode) {
        var e = b || {};
        d.mixin(e, a || {});
        if(!("h" in e) || !("w" in e)) {
          e = d.mixin(g.getMarginBox(c), e)
        }
        this._contentBox = h.marginBox2contentBox(c, e)
      }else {
        this._contentBox = g.getContentBox(c)
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
      return"none" != a.style.display && "hidden" != a.style.visibility && !k.contains(a, "dijitHidden") && b && b.style && "none" != b.style.display
    }, _onShow:function() {
      this._wasShown = !0;
      this._needLayout && this._layout(this._changeSize, this._resultSize);
      this.inherited(arguments)
    }})
  })
}, "dijit/CalendarLite":function() {
  define("dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "), function(e, l, k, g, b, d, m, c, a, h, f, r, s, t, v) {
    var n = l("dijit.CalendarLite", [s, t], {templateString:v, dowTemplateString:'\x3cth class\x3d"dijitReset dijitCalendarDayLabelTemplate" role\x3d"columnheader" scope\x3d"col"\x3e\x3cspan class\x3d"dijitCalendarDayLabel"\x3e${d}\x3c/span\x3e\x3c/th\x3e', dateTemplateString:'\x3ctd class\x3d"dijitReset" role\x3d"gridcell" data-dojo-attach-point\x3d"dateCells"\x3e\x3cspan class\x3d"dijitCalendarDateLabel" data-dojo-attach-point\x3d"dateLabels"\x3e\x3c/span\x3e\x3c/td\x3e', weekTemplateString:'\x3ctr class\x3d"dijitReset dijitCalendarWeekTemplate" role\x3d"row"\x3e${d}${d}${d}${d}${d}${d}${d}\x3c/tr\x3e', 
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
      "string" == typeof a && (a = d.fromISOString(a));
      a = this._patchDate(a);
      if(this._isValidDate(a) && !this.isDisabledDate(a, this.lang)) {
        if(this._set("value", a), this.set("currentFocus", a), this._markSelectedDates([a]), this._created && (b || "undefined" == typeof b)) {
          this.onChange(this.get("value"))
        }
      }else {
        this._set("value", null), this._markSelectedDates([])
      }
    }, _patchDate:function(a) {
      a && (a = new this.dateClassObj(a), a.setHours(1, 0, 0, 0));
      return a
    }, _setText:function(a, b) {
      for(;a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      a.appendChild(a.ownerDocument.createTextNode(b))
    }, _populateGrid:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      var a = this._patchDate(a), b = a.getDay(), c = this.dateModule.getDaysInMonth(a), d = this.dateModule.getDaysInMonth(this.dateModule.add(a, "month", -1)), f = new this.dateClassObj, g = k.getFirstDayOfWeek(this.lang);
      g > b && (g -= 7);
      if(!this.summary) {
        var h = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a);
        this.gridNode.setAttribute("summary", h[a.getMonth()])
      }
      this._date2cell = {};
      e.forEach(this.dateCells, function(e, h) {
        var k = h + g, l = new this.dateClassObj(a), m = "dijitCalendar", n = 0;
        k < b ? (k = d - b + k + 1, n = -1, m += "Previous") : k >= b + c ? (k = k - b - c + 1, n = 1, m += "Next") : (k = k - b + 1, m += "Current");
        n && (l = this.dateModule.add(l, "month", n));
        l.setDate(k);
        this.dateModule.compare(l, f, "date") || (m = "dijitCalendarCurrentDate " + m);
        this.isDisabledDate(l, this.lang) ? (m = "dijitCalendarDisabledDate " + m, e.setAttribute("aria-disabled", "true")) : (m = "dijitCalendarEnabledDate " + m, e.removeAttribute("aria-disabled"), e.setAttribute("aria-selected", "false"));
        (n = this.getClassForDate(l, this.lang)) && (m = n + " " + m);
        e.className = m + "Month dijitCalendarDateTemplate";
        m = l.valueOf();
        this._date2cell[m] = e;
        e.dijitDateValue = m;
        this._setText(this.dateLabels[h], l.getDateLocalized ? l.getDateLocalized(this.lang) : l.getDate())
      }, this)
    }, _populateControls:function() {
      var a = new this.dateClassObj(this.currentFocus);
      a.setDate(1);
      this.monthWidget.set("month", a);
      var b = a.getFullYear() - 1, c = new this.dateClassObj;
      e.forEach(["previous", "current", "next"], function(a) {
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
      return n._MonthWidget({id:this.id + "_mddb", lang:this.lang, dateLocaleModule:this.dateLocaleModule}, this.monthNode)
    }, buildRendering:function() {
      var a = this.dowTemplateString, b = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang), c = k.getFirstDayOfWeek(this.lang);
      this.dayCellsHtml = r.substitute([a, a, a, a, a, a, a].join(""), {d:""}, function() {
        return b[c++ % 7]
      });
      a = r.substitute(this.weekTemplateString, {d:this.dateTemplateString});
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
        return h(this[b], "click", a.hitch(this, function() {
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
      d && d != c && (f("webkit") ? d.setAttribute("tabIndex", "-1") : d.removeAttribute("tabIndex"))
    }, focus:function() {
      this._setCurrentFocusAttr(this.currentFocus, !0)
    }, _onDayClick:function(a) {
      a.stopPropagation();
      a.preventDefault();
      for(a = a.target;a && !a.dijitDateValue;a = a.parentNode) {
      }
      a && !c.contains(a, "dijitCalendarDisabledDate") && this.set("value", a.dijitDateValue)
    }, _getNodeByDate:function(a) {
      return(a = this._patchDate(a)) && this._date2cell ? this._date2cell[a.valueOf()] : null
    }, _markSelectedDates:function(b) {
      function d(a, b) {
        c.toggle(b, "dijitCalendarSelectedDate", a);
        b.setAttribute("aria-selected", a ? "true" : "false")
      }
      e.forEach(this._selectedCells || [], a.partial(d, !1));
      this._selectedCells = e.filter(e.map(b, this._getNodeByDate, this), function(a) {
        return a
      });
      e.forEach(this._selectedCells, a.partial(d, !0))
    }, onChange:function() {
    }, isDisabledDate:function() {
    }, getClassForDate:function() {
    }});
    n._MonthWidget = l("dijit.CalendarLite._MonthWidget", s, {_setMonthAttr:function(a) {
      var b = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, a), c = 6 == f("ie") ? "" : "\x3cdiv class\x3d'dijitSpacer'\x3e" + e.map(b, function(a) {
        return"\x3cdiv\x3e" + a + "\x3c/div\x3e"
      }).join("") + "\x3c/div\x3e";
      this.domNode.innerHTML = c + "\x3cdiv class\x3d'dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'\x3e" + b[a.getMonth()] + "\x3c/div\x3e"
    }});
    return n
  })
}, "dojo/html":function() {
  define("./_base/kernel ./_base/lang ./_base/array ./_base/declare ./dom ./dom-construct ./parser".split(" "), function(e, l, k, g, b, d, m) {
    var c = 0, a = {_secureForInnerHtml:function(a) {
      return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
    }, _emptyNode:d.empty, _setNodeContent:function(a, b) {
      d.empty(a);
      if(b) {
        if("string" == typeof b && (b = d.toDom(b, a.ownerDocument)), !b.nodeType && l.isArrayLike(b)) {
          for(var c = b.length, e = 0;e < b.length;e = c == b.length ? e + 1 : 0) {
            d.place(b[e], a, "last")
          }
        }else {
          d.place(b, a, "last")
        }
      }
      return a
    }, _ContentSetter:g("dojo.html._ContentSetter", null, {node:"", content:"", id:"", cleanContent:!1, extractContent:!1, parseContent:!1, parserScope:e._scopeName, startup:!0, constructor:function(a, d) {
      l.mixin(this, a || {});
      d = this.node = b.byId(this.node || d);
      this.id || (this.id = ["Setter", d ? d.id || d.tagName : "", c++].join("_"))
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
        }catch(e) {
          console.error("Fatal " + this.declaredClass + ".setContent could not change content due to " + e.message, e)
        }
      }
      this.node = b
    }, empty:function() {
      this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
      this.parseResults && this.parseResults.length && (k.forEach(this.parseResults, function(a) {
        a.destroy && a.destroy()
      }), delete this.parseResults);
      d.empty(this.node)
    }, onBegin:function() {
      var b = this.content;
      if(l.isString(b) && (this.cleanContent && (b = a._secureForInnerHtml(b)), this.extractContent)) {
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
        k.forEach(["dir", "lang", "textDir"], function(a) {
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
      return d ? (new a._ContentSetter(l.mixin(d, {content:c, node:b}))).set() : a._setNodeContent(b, c, !0)
    }};
    l.setObject("dojo.html", a);
    return a
  })
}, "lsmb/PrintButton":function() {
  define("dojo/_base/declare dojo/_base/event dojo/dom-attr dijit/form/Button lsmb/iframe dojo/dom-form dijit/registry".split(" "), function(e, l, k, g, b, d, m) {
    return e("lsmb/PrintButton", [g], {minimalGET:!0, onClick:function(c) {
      var a = this.valueNode.form;
      if("screen" == a.media.value) {
        var e;
        this.minimalGET ? e = {action:this.get("value"), type:a.type.value, id:a.id.value, vc:a.vc.value, formname:a.formname.value, language_code:a.language_code.value, media:"screen", format:a.format.value} : (e = d.toObject(a), e.action = this.get("value"));
        b(k.get(a, "action"), {data:e}).then(function() {
        }, function(a) {
          m.byId("maindiv").report_request_error(a)
        });
        l.stop(c)
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
"*now":function(e) {
  e(['dojo/i18n!*preload*lsmb/nls/main*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
}}});
require("dojo/parser dojo/query dojo/on dijit/registry dojo/_base/event dojo/hash dojo/topic dojo/dom-class dojo/domReady!".split(" "), function(e, l, k, g, b, d, m, c) {
  e.parse().then(function() {
    var a = g.byId("maindiv"), e = 0, f = function(a) {
      if(!a.target && a.href) {
        var c = a.href + "#s";
        k(a, "click", function(a) {
          !a.ctrlKey && (!a.shiftKey && 0 != !a.button) && (b.stop(a), e++, d(c + e.toString(16)))
        });
        var f = window.location;
        a.href = f.origin + f.pathname + f.search + "#" + a.href
      }
    };
    null != a && (a.interceptClick = f, window.location.hash && a.load_link(d()), m.subscribe("/dojo/hashchange", function(b) {
      a.load_link(b)
    }));
    l("a.menu-terminus").forEach(f);
    l("#console-container").forEach(function(a) {
      c.add(a, "done-parsing")
    });
    l("body").forEach(function(a) {
      c.add(a, "done-parsing")
    })
  })
});
require(["dojo/on", "dojo/query", "dojo/dom-class", "dojo/_base/event", "dojo/domReady!"], function(e, l, k, g) {
  l("a.t-submenu").forEach(function(b) {
    e(b, "click", function(d) {
      !d.ctrlKey && (!d.shiftKey && 0 != !d.button) && (g.stop(d), d = b.parentNode, k.contains(d, "menu_closed") ? k.replace(d, "menu_open", "menu_closed") : k.replace(d, "menu_closed", "menu_open"))
    })
  })
});

//# sourceMappingURL=main.js.map