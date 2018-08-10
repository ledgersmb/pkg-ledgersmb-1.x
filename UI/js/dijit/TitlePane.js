//>>built
require({cache:{"url:dijit/templates/TitlePane.html":'<div>\n	<div data-dojo-attach-event="ondijitclick:_onTitleClick, onkeydown:_onTitleKey"\n			class="dijitTitlePaneTitle" data-dojo-attach-point="titleBarNode" id="${id}_titleBarNode">\n		<div class="dijitTitlePaneTitleFocus" data-dojo-attach-point="focusNode">\n			<span data-dojo-attach-point="arrowNode" class="dijitInline dijitArrowNode" role="presentation"></span\n			><span data-dojo-attach-point="arrowNodeInner" class="dijitArrowNodeInner"></span\n			><span data-dojo-attach-point="titleNode" class="dijitTitlePaneTextNode"></span>\n		</div>\n	</div>\n	<div class="dijitTitlePaneContentOuter" data-dojo-attach-point="hideNode" role="presentation">\n		<div class="dijitReset" data-dojo-attach-point="wipeNode" role="presentation">\n			<div class="dijitTitlePaneContentInner" data-dojo-attach-point="containerNode" role="region" id="${id}_pane" aria-labelledby="${id}_titleBarNode">\n				<!-- nested divs because wipeIn()/wipeOut() doesn\'t work right on node w/padding etc.  Put padding on inner div. -->\n			</div>\n		</div>\n	</div>\n</div>\n'}}),define("dijit/TitlePane",["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/fx","dojo/has","dojo/_base/kernel","dojo/keys","./_CssStateMixin","./_TemplatedMixin","./layout/ContentPane","dojo/text!./templates/TitlePane.html","./_base/manager","./a11yclick"],function(e,a,t,r,i,d,o,l,n,s,m,f,u,y,M){var h=a("dijit.TitlePane",[u,f,m],{title:"",_setTitleAttr:{node:"titleNode",type:"innerHTML"},open:!0,toggleable:!0,tabIndex:"0",duration:M.defaultDuration,baseClass:"dijitTitlePane",templateString:y,doLayout:!1,_setTooltipAttr:{node:"focusNode",type:"attribute",attribute:"title"},buildRendering:function(){this.inherited(arguments),t.setSelectable(this.titleNode,!1)},postCreate:function(){this.inherited(arguments),this.toggleable&&this._trackMouseState(this.titleBarNode,this.baseClass+"Title");var e=this.hideNode,a=this.wipeNode;this._wipeIn=o.wipeIn({node:a,duration:this.duration,beforeBegin:function(){e.style.display=""}}),this._wipeOut=o.wipeOut({node:a,duration:this.duration,onEnd:function(){e.style.display="none"}})},_setOpenAttr:function(a,t){if(e.forEach([this._wipeIn,this._wipeOut],function(e){e&&"playing"==e.status()&&e.stop()}),t){var r=this[a?"_wipeIn":"_wipeOut"];r.play()}else this.hideNode.style.display=this.wipeNode.style.display=a?"":"none";this._started&&(a?this._onShow():this.onHide()),this.containerNode.setAttribute("aria-hidden",a?"false":"true"),this.focusNode.setAttribute("aria-pressed",a?"true":"false"),this._set("open",a),this._setCss()},_setToggleableAttr:function(e){this.focusNode.setAttribute("role",e?"button":"heading"),e?(this.focusNode.setAttribute("aria-controls",this.id+"_pane"),this.focusNode.setAttribute("tabIndex",this.tabIndex),this.focusNode.setAttribute("aria-pressed",this.open)):(r.remove(this.focusNode,"aria-controls"),r.remove(this.focusNode,"tabIndex"),r.remove(this.focusNode,"aria-pressed")),this._set("toggleable",e),this._setCss()},_setContentAttr:function(){this.open&&this._wipeOut&&"playing"!=this._wipeOut.status()?(this._wipeIn&&"playing"==this._wipeIn.status()&&this._wipeIn.stop(),d.setMarginBox(this.wipeNode,{h:d.getMarginBox(this.wipeNode).h}),this.inherited(arguments),this._wipeIn?this._wipeIn.play():this.hideNode.style.display=""):this.inherited(arguments)},toggle:function(){this._setOpenAttr(!this.open,!0)},_setCss:function(){var e=this.titleBarNode||this.focusNode,a=this._titleBarClass;this._titleBarClass=this.baseClass+"Title"+(this.toggleable?"":"Fixed")+(this.open?"Open":"Closed"),i.replace(e,this._titleBarClass,a||""),i.replace(e,this._titleBarClass.replace("TitlePaneTitle",""),(a||"").replace("TitlePaneTitle","")),this.arrowNodeInner.innerHTML=this.open?"-":"+"},_onTitleKey:function(e){e.keyCode==s.DOWN_ARROW&&this.open&&(this.containerNode.focus(),e.preventDefault())},_onTitleClick:function(){this.toggleable&&this.toggle()},setTitle:function(e){n.deprecated("dijit.TitlePane.setTitle() is deprecated.  Use set('title', ...) instead.","","2.0"),this.set("title",e)}});return l("dojo-bidi")&&h.extend({_setTitleAttr:function(e){this._set("title",e),this.titleNode.innerHTML=e,this.applyTextDir(this.titleNode)},_setTooltipAttr:function(e){this._set("tooltip",e),this.textDir&&(e=this.enforceTextDirWithUcc(null,e)),r.set(this.focusNode,"title",e)},_setTextDirAttr:function(e){this._created&&this.textDir!=e&&(this._set("textDir",e),this.set("title",this.title),this.set("tooltip",this.tooltip))}}),h});//# sourceMappingURL=TitlePane.js.map