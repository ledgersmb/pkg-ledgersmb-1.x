//>>built
define("dijit/_KeyNavMixin",["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dijit/registry","dijit/_FocusMixin"],function(e,t,a,r,i,d,o,l){return t("dijit._KeyNavMixin",l,{tabIndex:"0",childSelector:null,postCreate:function(){if(this.inherited(arguments),a.set(this.domNode,"tabIndex",this.tabIndex),!this._keyNavCodes){var e=this._keyNavCodes={};e[r.HOME]=i.hitch(this,"focusFirstChild"),e[r.END]=i.hitch(this,"focusLastChild"),e[this.isLeftToRight()?r.LEFT_ARROW:r.RIGHT_ARROW]=i.hitch(this,"_onLeftArrow"),e[this.isLeftToRight()?r.RIGHT_ARROW:r.LEFT_ARROW]=i.hitch(this,"_onRightArrow"),e[r.UP_ARROW]=i.hitch(this,"_onUpArrow"),e[r.DOWN_ARROW]=i.hitch(this,"_onDownArrow")}var t=this,l="string"==typeof this.childSelector?this.childSelector:i.hitch(this,"childSelector");this.own(d(this.domNode,"keypress",i.hitch(this,"_onContainerKeypress")),d(this.domNode,"keydown",i.hitch(this,"_onContainerKeydown")),d(this.domNode,"focus",i.hitch(this,"_onContainerFocus")),d(this.containerNode,d.selector(l,"focusin"),function(e){t._onChildFocus(o.getEnclosingWidget(this),e)}))},_onLeftArrow:function(){},_onRightArrow:function(){},_onUpArrow:function(){},_onDownArrow:function(){},focus:function(){this.focusFirstChild()},_getFirstFocusableChild:function(){return this._getNextFocusableChild(null,1)},_getLastFocusableChild:function(){return this._getNextFocusableChild(null,-1)},focusFirstChild:function(){this.focusChild(this._getFirstFocusableChild())},focusLastChild:function(){this.focusChild(this._getLastFocusableChild())},focusChild:function(e,t){e&&(this.focusedChild&&e!==this.focusedChild&&this._onChildBlur(this.focusedChild),e.set("tabIndex",this.tabIndex),e.focus(t?"end":"start"))},_onContainerFocus:function(e){e.target!==this.domNode||this.focusedChild||this.focus()},_onFocus:function(){a.set(this.domNode,"tabIndex","-1"),this.inherited(arguments)},_onBlur:function(){a.set(this.domNode,"tabIndex",this.tabIndex),this.focusedChild&&(this.focusedChild.set("tabIndex","-1"),this.lastFocusedChild=this.focusedChild,this._set("focusedChild",null)),this.inherited(arguments)},_onChildFocus:function(e){e&&e!=this.focusedChild&&(this.focusedChild&&!this.focusedChild._destroyed&&this.focusedChild.set("tabIndex","-1"),e.set("tabIndex",this.tabIndex),this.lastFocused=e,this._set("focusedChild",e))},_searchString:"",multiCharSearchDuration:1e3,onKeyboardSearch:function(e){e&&this.focusChild(e)},_keyboardSearchCompare:function(e,t){var a=e.domNode,r=e.label||(a.focusNode?a.focusNode.label:"")||a.innerText||a.textContent||"",i=r.replace(/^\s+/,"").substr(0,t.length).toLowerCase();return t.length&&i==t?-1:0},_onContainerKeydown:function(e){var t=this._keyNavCodes[e.keyCode];t?(t(e,this.focusedChild),e.stopPropagation(),e.preventDefault(),this._searchString=""):e.keyCode==r.SPACE&&this._searchTimer&&!(e.ctrlKey||e.altKey||e.metaKey)&&(e.stopImmediatePropagation(),e.preventDefault(),this._keyboardSearch(e," "))},_onContainerKeypress:function(e){e.charCode<=r.SPACE||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),e.stopPropagation(),this._keyboardSearch(e,String.fromCharCode(e.charCode).toLowerCase()))},_keyboardSearch:function(e,t){var a,r=null,d=0,o=i.hitch(this,function(){this._searchTimer&&this._searchTimer.remove(),this._searchString+=t;var e=/^(.)\1*$/.test(this._searchString),i=e?1:this._searchString.length;a=this._searchString.substr(0,i),this._searchTimer=this.defer(function(){this._searchTimer=null,this._searchString=""},this.multiCharSearchDuration);var o=this.focusedChild||null;if(1!=i&&o||(o=this._getNextFocusableChild(o,1))){var l=o;do{var n=this._keyboardSearchCompare(o,a);if(n&&0==d++&&(r=o),-1==n){d=-1;break}o=this._getNextFocusableChild(o,1)}while(o&&o!=l)}});o(),this.onKeyboardSearch(r,e,a,d)},_onChildBlur:function(){},_getNextFocusableChild:function(e,t){var a=e;do{if(e)e=this._getNext(e,t);else if(e=this[t>0?"_getFirst":"_getLast"](),!e)break;if(null!=e&&e!=a&&e.isFocusable())return e}while(e!=a);return null},_getFirst:function(){return null},_getLast:function(){return null},_getNext:function(e,t){if(e)for(e=e.domNode;e;)if(e=e[0>t?"previousSibling":"nextSibling"],e&&"getAttribute"in e){var a=o.byNode(e);if(a)return a}return null}})});//# sourceMappingURL=_KeyNavMixin.js.map