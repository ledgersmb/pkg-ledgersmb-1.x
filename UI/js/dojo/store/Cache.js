//>>built
define("dojo/store/Cache",["../_base/lang","../when"],function(e,a){var t=function(t,r,i){return i=i||{},e.delegate(t,{query:function(e,a){var d=t.query(e,a);return d.forEach(function(e){(!i.isLoaded||i.isLoaded(e))&&r.put(e)}),d},queryEngine:t.queryEngine||r.queryEngine,get:function(e,i){return a(r.get(e),function(d){return d||a(t.get(e,i),function(a){return a&&r.put(a,{id:e}),a})})},add:function(e,i){return a(t.add(e,i),function(a){return r.add(a&&"object"==typeof a?a:e,i),a})},put:function(e,i){return r.remove(i&&i.id||this.getIdentity(e)),a(t.put(e,i),function(a){return r.put(a&&"object"==typeof a?a:e,i),a})},remove:function(e,i){return a(t.remove(e,i),function(){return r.remove(e,i)})},evict:function(e){return r.remove(e)}})};return e.setObject("dojo.store.Cache",t),t});//# sourceMappingURL=Cache.js.map