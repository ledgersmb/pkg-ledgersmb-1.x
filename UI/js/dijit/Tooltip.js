//>>built
require({cache:{"url:dijit/templates/Tooltip.html":'<div class="dijitTooltip dijitTooltipLeft" id="dojoTooltip" data-dojo-attach-event="mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n	><div class="dijitTooltipConnector" data-dojo-attach-point="connectorNode"></div\n	><div class="dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point="containerNode" role=\'alert\'></div\n></div>\n'}}),define("dijit/Tooltip",["dojo/_base/array","dojo/_base/declare","dojo/_base/fx","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/on","dojo/sniff","./_base/manager","./place","./_Widget","./_TemplatedMixin","./BackgroundIframe","dojo/text!./templates/Tooltip.html","./main"],function(e,a,t,r,i,d,o,l,n,s,m,f,u,y,M,h,v,c){function g(){}var p=a("dijit._MasterTooltip",[y,M],{duration:f.defaultDuration,templateString:v,postCreate:function(){this.ownerDocumentBody.appendChild(this.domNode),this.bgIframe=new h(this.domNode),this.fadeIn=t.fadeIn({node:this.domNode,duration:this.duration,onEnd:l.hitch(this,"_onShow")}),this.fadeOut=t.fadeOut({node:this.domNode,duration:this.duration,onEnd:l.hitch(this,"_onHide")})},show:function(e,a,t,r,i,d,n){if(!this.aroundNode||this.aroundNode!==a||this.containerNode.innerHTML!=e){if("playing"==this.fadeOut.status())return void(this._onDeck=arguments);this.containerNode.innerHTML=e,i&&this.set("textDir",i),this.containerNode.align=r?"right":"left";var s=u.around(this.domNode,a,t&&t.length?t:I.defaultPosition,!r,l.hitch(this,"orient")),m=s.aroundNodePos;"M"==s.corner.charAt(0)&&"M"==s.aroundCorner.charAt(0)?(this.connectorNode.style.top=m.y+(m.h-this.connectorNode.offsetHeight>>1)-s.y+"px",this.connectorNode.style.left=""):"M"==s.corner.charAt(1)&&"M"==s.aroundCorner.charAt(1)?this.connectorNode.style.left=m.x+(m.w-this.connectorNode.offsetWidth>>1)-s.x+"px":(this.connectorNode.style.left="",this.connectorNode.style.top=""),o.set(this.domNode,"opacity",0),this.fadeIn.play(),this.isShowingNow=!0,this.aroundNode=a,this.onMouseEnter=d||g,this.onMouseLeave=n||g}},orient:function(e,a,t,r,i){this.connectorNode.style.top="";var o=r.h,l=r.w;e.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft","TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[a+"-"+t],this.domNode.style.width="auto";var n=d.position(this.domNode);(m("ie")||m("trident"))&&(n.w+=2);var s=Math.min(Math.max(l,1),n.w);if(d.setMarginBox(this.domNode,{w:s}),"B"==t.charAt(0)&&"B"==a.charAt(0)){var f=d.position(e),u=this.connectorNode.offsetHeight;if(f.h>o){var y=o-(i.h+u>>1);this.connectorNode.style.top=y+"px",this.connectorNode.style.bottom=""}else this.connectorNode.style.bottom=Math.min(Math.max(i.h/2-u/2,0),f.h-u)+"px",this.connectorNode.style.top=""}else this.connectorNode.style.top="",this.connectorNode.style.bottom="";return Math.max(0,n.w-l)},_onShow:function(){m("ie")&&(this.domNode.style.filter="")},hide:function(e){this._onDeck&&this._onDeck[1]==e?this._onDeck=null:this.aroundNode===e&&(this.fadeIn.stop(),this.isShowingNow=!1,this.aroundNode=null,this.fadeOut.play()),this.onMouseEnter=this.onMouseLeave=g},_onHide:function(){this.domNode.style.cssText="",this.containerNode.innerHTML="",this._onDeck&&(this.show.apply(this,this._onDeck),this._onDeck=null)}});m("dojo-bidi")&&p.extend({_setAutoTextDir:function(a){this.applyTextDir(a),e.forEach(a.children,function(e){this._setAutoTextDir(e)},this)},_setTextDirAttr:function(e){this._set("textDir",e),"auto"==e?this._setAutoTextDir(this.containerNode):this.containerNode.dir=this.textDir}}),c.showTooltip=function(a,t,r,i,d,o,l){return r&&(r=e.map(r,function(e){return{after:"after-centered",before:"before-centered"}[e]||e})),I._masterTT||(c._masterTT=I._masterTT=new p),I._masterTT.show(a,t,r,i,d,o,l)},c.hideTooltip=function(e){return I._masterTT&&I._masterTT.hide(e)};var b="DORMANT",w="SHOW TIMER",F="SHOWING",k="HIDE TIMER",I=a("dijit.Tooltip",y,{label:"",showDelay:400,hideDelay:400,connectId:[],position:[],selector:"",_setConnectIdAttr:function(a){e.forEach(this._connections||[],function(a){e.forEach(a,function(e){e.remove()})},this),this._connectIds=e.filter(l.isArrayLike(a)?a:a?[a]:[],function(e){return r.byId(e,this.ownerDocument)},this),this._connections=e.map(this._connectIds,function(e){var a=r.byId(e,this.ownerDocument),t=this.selector,i=t?function(e){return s.selector(t,e)}:function(e){return e},d=this;return[s(a,i(n.enter),function(){d._onHover(this)}),s(a,i("focusin"),function(){d._onHover(this)}),s(a,i(n.leave),l.hitch(d,"_onUnHover")),s(a,i("focusout"),l.hitch(d,"set","state",b))]},this),this._set("connectId",a)},addTarget:function(a){var t=a.id||a;-1==e.indexOf(this._connectIds,t)&&this.set("connectId",this._connectIds.concat(t))},removeTarget:function(a){var t=a.id||a,r=e.indexOf(this._connectIds,t);r>=0&&(this._connectIds.splice(r,1),this.set("connectId",this._connectIds))},buildRendering:function(){this.inherited(arguments),i.add(this.domNode,"dijitTooltipData")},startup:function(){this.inherited(arguments);var a=this.connectId;e.forEach(l.isArrayLike(a)?a:[a],this.addTarget,this)},getContent:function(){return this.label||this.domNode.innerHTML},state:b,_setStateAttr:function(e){if(!(this.state==e||e==w&&this.state==F||e==k&&this.state==b)){switch(this._hideTimer&&(this._hideTimer.remove(),delete this._hideTimer),this._showTimer&&(this._showTimer.remove(),delete this._showTimer),e){case b:this._connectNode&&(I.hide(this._connectNode),delete this._connectNode,this.onHide());break;case w:this.state!=F&&(this._showTimer=this.defer(function(){this.set("state",F)},this.showDelay));break;case F:var a=this.getContent(this._connectNode);if(!a)return void this.set("state",b);I.show(a,this._connectNode,this.position,!this.isLeftToRight(),this.textDir,l.hitch(this,"set","state",F),l.hitch(this,"set","state",k)),this.onShow(this._connectNode,this.position);break;case k:this._hideTimer=this.defer(function(){this.set("state",b)},this.hideDelay)}this._set("state",e)}},_onHover:function(e){this._connectNode&&e!=this._connectNode&&this.set("state",b),this._connectNode=e,this.set("state",w)},_onUnHover:function(){this.set("state",k)},open:function(e){this.set("state",b),this._connectNode=e,this.set("state",F)},close:function(){this.set("state",b)},onShow:function(){},onHide:function(){},destroy:function(){this.set("state",b),e.forEach(this._connections||[],function(a){e.forEach(a,function(e){e.remove()})},this),this.inherited(arguments)}});return I._MasterTooltip=p,I.show=c.showTooltip,I.hide=c.hideTooltip,I.defaultPosition=["after-centered","before-centered"],I});//# sourceMappingURL=Tooltip.js.map