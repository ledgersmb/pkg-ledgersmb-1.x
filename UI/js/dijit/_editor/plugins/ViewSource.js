//>>built
define("dijit/_editor/plugins/ViewSource",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../..","../../registry","dojo/i18n!../nls/commands"],function(e,t,a,i,r,d,o,n,l,s,m,f,u,y,h,c,v,M){var g=a("dijit._editor.plugins.ViewSource",h,{stripScripts:!0,stripComments:!0,stripIFrames:!0,readOnly:!1,_fsPlugin:null,toggle:function(){f("webkit")&&(this._vsFocused=!0),this.button.set("checked",!this.button.get("checked"))},_initButton:function(){var e=n.getLocalization("dijit._editor","commands"),t=this.editor;this.button=new c({label:e.viewSource,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"ViewSource",tabIndex:"-1",onChange:s.hitch(this,"_showSource")}),this.button.set("readOnly",!1)},setEditor:function(e){this.editor=e,this._initButton(),this.editor.addKeyHandler(l.F12,!0,!0,s.hitch(this,function(e){this.button.focus(),this.toggle(),e.stopPropagation(),e.preventDefault(),setTimeout(s.hitch(this,function(){this.editor.focused&&this.editor.focus()}),100)}))},_showSource:function(a){var i,r=this.editor,d=r._plugins;this._sourceShown=a;var n=this;try{if(this.sourceArea||this._createSourceView(),a){r._sourceQueryCommandEnabled=r.queryCommandEnabled,r.queryCommandEnabled=function(e){return"viewsource"===e.toLowerCase()},this.editor.onDisplayChanged(),i=r.get("value"),i=this._filter(i),r.set("value",i),e.forEach(d,function(e){!e||e instanceof g||!e.isInstanceOf(h)||e.set("disabled",!0)}),this._fsPlugin&&(this._fsPlugin._getAltViewNode=function(){return n.sourceArea}),this.sourceArea.value=i,this.sourceArea.style.height=r.iframe.style.height,this.sourceArea.style.width=r.iframe.style.width,r.iframe.parentNode.style.position="relative",o.set(r.iframe,{position:"absolute",top:0,visibility:"hidden"}),o.set(this.sourceArea,{display:"block"});var l=function(){var e=u.getBox(r.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return;this._prevW=e.w,this._prevH=e.h}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(s.hitch(this,function(){delete this._resizer,this._resize()}),10)};this._resizeHandle=m(window,"resize",s.hitch(this,l)),setTimeout(s.hitch(this,this._resize),100),this.editor.onNormalizedDisplayChanged(),this.editor.__oldGetValue=this.editor.getValue,this.editor.getValue=s.hitch(this,function(){var e=this.sourceArea.value;return e=this._filter(e)}),this._setListener=t.after(this.editor,"setValue",s.hitch(this,function(e){e=e||"",e=this._filter(e),this.sourceArea.value=e}),!0)}else{if(!r._sourceQueryCommandEnabled)return;this._setListener.remove(),delete this._setListener,this._resizeHandle.remove(),delete this._resizeHandle,this.editor.__oldGetValue&&(this.editor.getValue=this.editor.__oldGetValue,delete this.editor.__oldGetValue),r.queryCommandEnabled=r._sourceQueryCommandEnabled,this._readOnly||(i=this.sourceArea.value,i=this._filter(i),r.beginEditing(),r.set("value",i),r.endEditing()),e.forEach(d,function(e){e&&e.isInstanceOf(h)&&e.set("disabled",!1)}),o.set(this.sourceArea,"display","none"),o.set(r.iframe,{position:"relative",visibility:"visible"}),delete r._sourceQueryCommandEnabled,this.editor.onDisplayChanged()}setTimeout(s.hitch(this,function(){var e=r.domNode.parentNode;if(e){var t=M.getEnclosingWidget(e);t&&t.resize&&t.resize()}r.resize()}),300)}catch(f){}},updateState:function(){this.button.set("disabled",this.get("disabled"))},_resize:function(){var e=this.editor,t=e.getHeaderHeight(),a=e.getFooterHeight(),i=d.position(e.domNode),r=d.getPadBorderExtents(e.iframe.parentNode),o=d.getMarginExtents(e.iframe.parentNode),n=d.getPadBorderExtents(e.domNode),l={w:i.w-n.w,h:i.h-(t+n.h+a)};if(this._fsPlugin&&this._fsPlugin.isFullscreen){var s=u.getBox(e.ownerDocument);l.w=s.w-n.w,l.h=s.h-(t+n.h+a)}d.setMarginBox(this.sourceArea,{w:Math.round(l.w-(r.w+o.w)),h:Math.round(l.h-(r.h+o.h))})},_createSourceView:function(){var e=this.editor,t=e._plugins;this.sourceArea=r.create("textarea"),this.readOnly&&(i.set(this.sourceArea,"readOnly",!0),this._readOnly=!0),o.set(this.sourceArea,{padding:"0px",margin:"0px",borderWidth:"0px",borderStyle:"none"}),i.set(this.sourceArea,"aria-label",this.editor.id),r.place(this.sourceArea,e.iframe,"before"),f("ie")&&e.iframe.parentNode.lastChild!==e.iframe&&o.set(e.iframe.parentNode.lastChild,{width:"0px",height:"0px",padding:"0px",margin:"0px",borderWidth:"0px",borderStyle:"none"}),e._viewsource_oldFocus=e.focus;var a=this;e.focus=function(){if(a._sourceShown)a.setSourceAreaCaret();else try{this._vsFocused?(delete this._vsFocused,y.focus(e.editNode)):e._viewsource_oldFocus()}catch(t){}};var d,n;for(d=0;d<t.length;d++)if(n=t[d],n&&("dijit._editor.plugins.FullScreen"===n.declaredClass||n.declaredClass===v._scopeName+"._editor.plugins.FullScreen")){this._fsPlugin=n;break}this._fsPlugin&&(this._fsPlugin._viewsource_getAltViewNode=this._fsPlugin._getAltViewNode,this._fsPlugin._getAltViewNode=function(){return a._sourceShown?a.sourceArea:this._viewsource_getAltViewNode()}),this.own(m(this.sourceArea,"keydown",s.hitch(this,function(t){this._sourceShown&&t.keyCode==l.F12&&t.ctrlKey&&t.shiftKey&&(this.button.focus(),this.button.set("checked",!1),setTimeout(s.hitch(this,function(){e.focus()}),100),t.stopPropagation(),t.preventDefault())})))},_stripScripts:function(e){return e&&(e=e.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/gi,""),e=e.replace(/<\s*script\b([^<>]|\s)*>?/gi,""),e=e.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/gi,"")),e},_stripComments:function(e){return e&&(e=e.replace(/<!--(.|\s){1,}?-->/g,"")),e},_stripIFrames:function(e){return e&&(e=e.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/gi,"")),e},_filter:function(e){return e&&(this.stripScripts&&(e=this._stripScripts(e)),this.stripComments&&(e=this._stripComments(e)),this.stripIFrames&&(e=this._stripIFrames(e))),e},setSourceAreaCaret:function(){var e=this.sourceArea;if(y.focus(e),this._sourceShown&&!this.readOnly)if(e.setSelectionRange)e.setSelectionRange(0,0);else if(this.sourceArea.createTextRange){var t=e.createTextRange();t.collapse(!0),t.moveStart("character",-99999),t.moveStart("character",0),t.moveEnd("character",0),t.select()}},destroy:function(){this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizeHandle&&(this._resizeHandle.remove(),delete this._resizeHandle),this._setListener&&(this._setListener.remove(),delete this._setListener),this.inherited(arguments)}});return h.registry.viewSource=h.registry.viewsource=function(e){return new g({readOnly:"readOnly"in e?e.readOnly:!1,stripComments:"stripComments"in e?e.stripComments:!0,stripScripts:"stripScripts"in e?e.stripScripts:!0,stripIFrames:"stripIFrames"in e?e.stripIFrames:!0})},g});//# sourceMappingURL=ViewSource.js.map