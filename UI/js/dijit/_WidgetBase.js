//>>built
define("dijit/_WidgetBase",["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./Destroyable","dojo/has!dojo-bidi?./_BidiMixin","./registry"],function(e,t,a,r,i,d,o,l,n,s,m,f,u,y,h,M,v,c,g,p,b,w,F){function k(e){var t={};for(var a in e)t[a.toLowerCase()]=!0;return t}function I(e){return function(t){l[t?"set":"remove"](this.domNode,e,t),this._set(e,t)}}function E(e,t){return e===t||e!==e&&t!==t}u.add("dijit-legacy-requires",!y.isAsync),u.add("dojo-bidi",!1),u("dijit-legacy-requires")&&v(0,function(){var t=["dijit/_base/manager"];e(t)});var G={},j=d("dijit._WidgetBase",[c,b],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:I("lang"),dir:"",_setDirAttr:I("dir"),"class":"",_setClassAttr:{node:"domNode",type:"class"},_setTypeAttr:null,style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(e){this._set("ownerDocument",e)},attributeMap:{},_blankGif:r.blankGif||e.toUrl("dojo/resources/blank.gif"),textDir:"",_introspect:function(){var e=this.constructor;if(!e._setterAttrs){var t=e.prototype,a=e._setterAttrs=[],r=e._onMap={};for(var i in t.attributeMap)a.push(i);for(i in t)/^on/.test(i)&&(r[i.substring(2).toLowerCase()]=i),/^_set[A-Z](.*)Attr$/.test(i)&&(i=i.charAt(4).toLowerCase()+i.substr(5,i.length-9),t.attributeMap&&i in t.attributeMap||a.push(i))}},postscript:function(e,t){this.create(e,t)},create:function(e,t){this._introspect(),this.srcNodeRef=o.byId(t),this._connects=[],this._supportingWidgets=[],this.srcNodeRef&&this.srcNodeRef.id&&"string"==typeof this.srcNodeRef.id&&(this.id=this.srcNodeRef.id),e&&(this.params=e,h.mixin(this,e)),this.postMixInProperties(),this.id||(this.id=F.getUniqueId(this.declaredClass.replace(/\./g,"_")),this.params&&delete this.params.id),this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:document),this.ownerDocumentBody=p.body(this.ownerDocument),F.add(this),this.buildRendering();var a;if(this.domNode){this._applyAttributes();var r=this.srcNodeRef;r&&r.parentNode&&this.domNode!==r&&(r.parentNode.replaceChild(this.domNode,r),a=!0),this.domNode.setAttribute("widgetId",this.id)}this.postCreate(),a&&delete this.srcNodeRef,this._created=!0},_applyAttributes:function(){var e={};for(var a in this.params||{})e[a]=this._get(a);t.forEach(this.constructor._setterAttrs,function(t){if(!(t in e)){var a=this._get(t);a&&this.set(t,a)}},this);for(a in e)this.set(a,e[a])},postMixInProperties:function(){},buildRendering:function(){if(this.domNode||(this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div")),this.baseClass){var e=this.baseClass.split(" ");this.isLeftToRight()||(e=e.concat(t.map(e,function(e){return e+"Rtl"}))),n.add(this.domNode,e)}},postCreate:function(){},startup:function(){this._started||(this._started=!0,t.forEach(this.getChildren(),function(e){e._started||e._destroyed||!h.isFunction(e.startup)||(e.startup(),e._started=!0)}))},destroyRecursive:function(e){this._beingDestroyed=!0,this.destroyDescendants(e),this.destroy(e)},destroy:function(e){function a(t){t.destroyRecursive?t.destroyRecursive(e):t.destroy&&t.destroy(e)}this._beingDestroyed=!0,this.uninitialize(),t.forEach(this._connects,h.hitch(this,"disconnect")),t.forEach(this._supportingWidgets,a),this.domNode&&t.forEach(F.findWidgets(this.domNode,this.containerNode),a),this.destroyRendering(e),F.remove(this.id),this._destroyed=!0},destroyRendering:function(e){this.bgIframe&&(this.bgIframe.destroy(e),delete this.bgIframe),this.domNode&&(e?l.remove(this.domNode,"widgetId"):s.destroy(this.domNode),delete this.domNode),this.srcNodeRef&&(e||s.destroy(this.srcNodeRef),delete this.srcNodeRef)},destroyDescendants:function(e){t.forEach(this.getChildren(),function(t){t.destroyRecursive&&t.destroyRecursive(e)})},uninitialize:function(){return!1},_setStyleAttr:function(e){var t=this.domNode;h.isObject(e)?f.set(t,e):t.style.cssText?t.style.cssText+="; "+e:t.style.cssText=e,this._set("style",e)},_attrToDom:function(e,a,r){r=arguments.length>=3?r:this.attributeMap[e],t.forEach(h.isArray(r)?r:[r],function(t){var r=this[t.node||t||"domNode"],i=t.type||"attribute";switch(i){case"attribute":h.isFunction(a)&&(a=h.hitch(this,a));var d=t.attribute?t.attribute:/^on[A-Z][a-zA-Z]*$/.test(e)?e.toLowerCase():e;r.tagName?l.set(r,d,a):r.set(d,a);break;case"innerText":r.innerHTML="",r.appendChild(this.ownerDocument.createTextNode(a));break;case"innerHTML":r.innerHTML=a;break;case"class":n.replace(r,a,this[e]);break;case"toggleClass":n.toggle(r,t.className||e,a)}},this)},get:function(e){var t=this._getAttrNames(e);return this[t.g]?this[t.g]():this._get(e)},set:function(e,t){if("object"==typeof e){for(var a in e)this.set(a,e[a]);return this}var r=this._getAttrNames(e),i=this[r.s];if(h.isFunction(i))var d=i.apply(this,Array.prototype.slice.call(arguments,1));else{var o=this.focusNode&&!h.isFunction(this.focusNode)?"focusNode":"domNode",l=this[o]&&this[o].tagName,n=l&&(G[l]||(G[l]=k(this[o]))),s=e in this.attributeMap?this.attributeMap[e]:r.s in this?this[r.s]:n&&r.l in n&&"function"!=typeof t||/^aria-|^data-|^role$/.test(e)?o:null;null!=s&&this._attrToDom(e,t,s),this._set(e,t)}return d||this},_attrPairNames:{},_getAttrNames:function(e){var t=this._attrPairNames;if(t[e])return t[e];var a=e.replace(/^[a-z]|-[a-zA-Z]/g,function(e){return e.charAt(e.length-1).toUpperCase()});return t[e]={n:e+"Node",s:"_set"+a+"Attr",g:"_get"+a+"Attr",l:a.toLowerCase()}},_set:function(e,t){var a=this[e];this[e]=t,this._created&&!E(a,t)&&(this._watchCallbacks&&this._watchCallbacks(e,a,t),this.emit("attrmodified-"+e,{detail:{prevValue:a,newValue:t}}))},_get:function(e){return this[e]},emit:function(e,t,a){t=t||{},void 0===t.bubbles&&(t.bubbles=!0),void 0===t.cancelable&&(t.cancelable=!0),t.detail||(t.detail={}),t.detail.widget=this;var r,i=this["on"+e];return i&&(r=i.apply(this,a?a:[t])),this._started&&!this._beingDestroyed&&M.emit(this.domNode,e.toLowerCase(),t),r},on:function(e,t){var r=this._onMap(e);return r?a.after(this,r,t,!0):this.own(M(this.domNode,e,t))[0]},_onMap:function(e){var t=this.constructor,a=t._onMap;if(!a){a=t._onMap={};for(var r in t.prototype)/^on/.test(r)&&(a[r.replace(/^on/,"").toLowerCase()]=r)}return a["string"==typeof e&&e.toLowerCase()]},toString:function(){return"[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]"},getChildren:function(){return this.containerNode?F.findWidgets(this.containerNode):[]},getParent:function(){return F.getEnclosingWidget(this.domNode.parentNode)},connect:function(e,t,a){return this.own(i.connect(e,t,this,a))[0]},disconnect:function(e){e.remove()},subscribe:function(e,t){return this.own(g.subscribe(e,h.hitch(this,t)))[0]},unsubscribe:function(e){e.remove()},isLeftToRight:function(){return this.dir?"ltr"==this.dir.toLowerCase():m.isBodyLtr(this.ownerDocument)},isFocusable:function(){return this.focus&&"none"!=f.get(this.domNode,"display")},placeAt:function(e,t){var a=!e.tagName&&F.byId(e);if(!a||!a.addChild||t&&"number"!=typeof t){var r=a&&"domNode"in a?a.containerNode&&!/after|before|replace/.test(t||"")?a.containerNode:a.domNode:o.byId(e,this.ownerDocument);s.place(this.domNode,r,t),!this._started&&(this.getParent()||{})._started&&this.startup()}else a.addChild(this,t);return this},defer:function(e,t){var a=setTimeout(h.hitch(this,function(){a&&(a=null,this._destroyed||h.hitch(this,e)())}),t||0);return{remove:function(){return a&&(clearTimeout(a),a=null),null}}}});return u("dojo-bidi")&&j.extend(w),j});//# sourceMappingURL=_WidgetBase.js.map