//>>built
define("dijit/_editor/plugins/FullScreen",["dojo/aspect","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/i18n","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","../../focus","../_Plugin","../../form/ToggleButton","../../registry","dojo/i18n!../nls/commands"],function(e,t,a,r,i,d,o,n,l,s,m,f,u,y,h,c){var v=t("dijit._editor.plugins.FullScreen",y,{zIndex:500,_origState:null,_origiFrameState:null,_resizeHandle:null,isFullscreen:!1,toggle:function(){this.button.set("checked",!this.button.get("checked"))},_initButton:function(){var e=d.getLocalization("dijit._editor","commands"),t=this.editor;this.button=new h({label:e.fullScreen,ownerDocument:t.ownerDocument,dir:t.dir,lang:t.lang,showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"FullScreen",tabIndex:"-1",onChange:n.hitch(this,"_setFullScreen")})},setEditor:function(e){this.editor=e,this._initButton(),this.editor.addKeyHandler(o.F11,!0,!0,n.hitch(this,function(e){return this.toggle(),e.stopPropagation(),e.preventDefault(),this.editor.defer("focus",250),!0})),this.own(l(this.editor.domNode,"keydown",n.hitch(this,"_containFocus")))},_containFocus:function(e){if(this.isFullscreen){var t=this.editor;if(!t.isTabIndent&&t._fullscreen_oldOnKeyDown&&e.keyCode===o.TAB){var a=u.curNode,r=this._getAltViewNode();a==t.iframe||r&&a===r?setTimeout(n.hitch(this,function(){t.toolbar.focus()}),10):r&&"none"===i.get(t.iframe,"display")?setTimeout(n.hitch(this,function(){u.focus(r)}),10):setTimeout(n.hitch(this,function(){t.focus()}),10),event.stopPropagation(),event.preventDefault()}else t._fullscreen_oldOnKeyDown&&t._fullscreen_oldOnKeyDown(e)}},_resizeEditor:function(){var e=f.getBox(this.editor.ownerDocument);r.setMarginBox(this.editor.domNode,{w:e.w,h:e.h});var t=this.editor.getHeaderHeight(),a=this.editor.getFooterHeight(),i=r.getPadBorderExtents(this.editor.domNode),d=r.getPadBorderExtents(this.editor.iframe.parentNode),o=r.getMarginExtents(this.editor.iframe.parentNode),n=e.h-(t+i.h+a);r.setMarginBox(this.editor.iframe.parentNode,{h:n,w:e.w}),r.setMarginBox(this.editor.iframe,{h:n-(d.h+o.h)})},_getAltViewNode:function(){},_setFullScreen:function(t){var d=this.editor,o=d.ownerDocumentBody,m=d.domNode.parentNode,u=f.getBox(d.ownerDocument);if(this.isFullscreen=t,t){for(;m&&m!==o;)a.add(m,"dijitForceStatic"),m=m.parentNode;this._editorResizeHolder=this.editor.resize,d.resize=function(){},d._fullscreen_oldOnKeyDown=d.onKeyDown,d.onKeyDown=n.hitch(this,this._containFocus),this._origState={},this._origiFrameState={};var y=d.domNode,h=y&&y.style||{};this._origState={width:h.width||"",height:h.height||"",top:i.get(y,"top")||"",left:i.get(y,"left")||"",position:i.get(y,"position")||"static",marginBox:r.getMarginBox(d.domNode)};var v=d.iframe,M=v&&v.style||{},g=i.get(d.iframe,"backgroundColor");if(this._origiFrameState={backgroundColor:g||"transparent",width:M.width||"auto",height:M.height||"auto",zIndex:M.zIndex||""},i.set(d.domNode,{position:"absolute",top:"0px",left:"0px",zIndex:this.zIndex,width:u.w+"px",height:u.h+"px"}),i.set(d.iframe,{height:"100%",width:"100%",zIndex:this.zIndex,backgroundColor:"transparent"!==g&&"rgba(0, 0, 0, 0)"!==g?g:"white"}),i.set(d.iframe.parentNode,{height:"95%",width:"100%"}),this._oldOverflow=o.style&&o.style.overflow?i.get(o,"overflow"):"",s("ie")&&!s("quirks")){if(o.parentNode&&o.parentNode.style&&o.parentNode.style.overflow)this._oldBodyParentOverflow=o.parentNode.style.overflow;else try{this._oldBodyParentOverflow=i.get(o.parentNode,"overflow")}catch(p){this._oldBodyParentOverflow="scroll"}i.set(o.parentNode,"overflow","hidden")}i.set(o,"overflow","hidden");var b=function(){var e=f.getBox(d.ownerDocument);if("_prevW"in this&&"_prevH"in this){if(e.w===this._prevW&&e.h===this._prevH)return}else this._prevW=e.w,this._prevH=e.h;this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(n.hitch(this,function(){delete this._resizer,this._resizeEditor()}),10)};this._resizeHandle=l(window,"resize",n.hitch(this,b)),this._resizeHandle2=e.after(d,"onResize",n.hitch(this,function(){this._resizer&&(clearTimeout(this._resizer),delete this._resizer),this._resizer=setTimeout(n.hitch(this,function(){delete this._resizer,this._resizeEditor()}),10)})),this._resizeEditor();var w=this.editor.toolbar.domNode;setTimeout(function(){f.scrollIntoView(w)},250)}else{for(this._resizeHandle&&(this._resizeHandle.remove(),this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),this._rst&&(clearTimeout(this._rst),this._rst=null);m&&m!==o;)a.remove(m,"dijitForceStatic"),m=m.parentNode;if(this._editorResizeHolder&&(this.editor.resize=this._editorResizeHolder),!this._origState&&!this._origiFrameState)return;d._fullscreen_oldOnKeyDown&&(d.onKeyDown=d._fullscreen_oldOnKeyDown,delete d._fullscreen_oldOnKeyDown);var k=this;setTimeout(function(){var e=k._origState.marginBox,t=k._origState.height;s("ie")&&!s("quirks")&&(o.parentNode.style.overflow=k._oldBodyParentOverflow,delete k._oldBodyParentOverflow),i.set(o,"overflow",k._oldOverflow),delete k._oldOverflow,i.set(d.domNode,k._origState),i.set(d.iframe.parentNode,{height:"",width:""}),i.set(d.iframe,k._origiFrameState),delete k._origState,delete k._origiFrameState;var a=c.getEnclosingWidget(d.domNode.parentNode);a&&a.resize?a.resize():(!t||t.indexOf("%")<0)&&setTimeout(n.hitch(this,function(){d.resize({h:e.h})}),0),f.scrollIntoView(k.editor.toolbar.domNode)},100)}},updateState:function(){this.button.set("disabled",this.get("disabled"))},destroy:function(){this._resizeHandle&&(this._resizeHandle.remove(),this._resizeHandle=null),this._resizeHandle2&&(this._resizeHandle2.remove(),this._resizeHandle2=null),this._resizer&&(clearTimeout(this._resizer),this._resizer=null),this.inherited(arguments)}});return y.registry.fullScreen=y.registry.fullscreen=function(e){return new v({zIndex:"zIndex"in e?e.zIndex:500})},v});//# sourceMappingURL=FullScreen.js.map