//>>built
require({cache:{"url:dijit/form/templates/Spinner.html":'<div class="dijit dijitReset dijitInline dijitLeft"\n	id="widget_${id}" role="presentation"\n	><div class="dijitReset dijitButtonNode dijitSpinnerButtonContainer"\n		><input class="dijitReset dijitInputField dijitSpinnerButtonInner" type="text" tabIndex="-1" readonly="readonly" role="presentation"\n		/><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton"\n			data-dojo-attach-point="upArrowNode"\n			><div class="dijitArrowButtonInner"\n				><input class="dijitReset dijitInputField" value="&#9650; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n					${_buttonInputDisabled}\n			/></div\n		></div\n		><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton"\n			data-dojo-attach-point="downArrowNode"\n			><div class="dijitArrowButtonInner"\n				><input class="dijitReset dijitInputField" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n					${_buttonInputDisabled}\n			/></div\n		></div\n	></div\n	><div class=\'dijitReset dijitValidationContainer\'\n		><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n	/></div\n	><div class="dijitReset dijitInputField dijitInputContainer"\n		><input class=\'dijitReset dijitInputInner\' data-dojo-attach-point="textbox,focusNode" type="${type}" data-dojo-attach-event="onkeydown:_onKeyDown"\n			role="spinbutton" autocomplete="off" ${!nameAttrSetting}\n	/></div\n></div>\n'}}),define("dijit/form/_Spinner",["dojo/_base/declare","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/mouse","dojo/on","../typematic","./RangeBoundTextBox","dojo/text!./templates/Spinner.html","./_TextBoxMixin"],function(e,t,a,i,r,d,o,n,l,s){return e("dijit.form._Spinner",n,{defaultTimeout:500,minimumTimeout:10,timeoutChangeRate:.9,smallDelta:1,largeDelta:10,templateString:l,baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{upArrowNode:"dijitUpArrowButton",downArrowNode:"dijitDownArrowButton"},adjust:function(e){return e},_arrowPressed:function(e,t,a){this.disabled||this.readOnly||(this._setValueAttr(this.adjust(this.get("value"),t*a),!1),s.selectInputText(this.textbox,this.textbox.value.length))},_arrowReleased:function(){this._wheelTimer=null},_typematicCallback:function(e,a,i){var r=this.smallDelta;if(a==this.textbox){var d=i.keyCode;r=d==t.PAGE_UP||d==t.PAGE_DOWN?this.largeDelta:this.smallDelta,a=d==t.UP_ARROW||d==t.PAGE_UP?this.upArrowNode:this.downArrowNode}-1==e?this._arrowReleased(a):this._arrowPressed(a,a==this.upArrowNode?1:-1,r)},_wheelTimer:null,_mouseWheeled:function(e){if(this.focused){e.stopPropagation(),e.preventDefault();var t=e.wheelDelta/120;Math.floor(t)!=t&&(t=e.wheelDelta>0?1:-1);var a=e.detail?-1*e.detail:t;if(0!==a){var i=this[a>0?"upArrowNode":"downArrowNode"];this._arrowPressed(i,a,this.smallDelta),this._wheelTimer&&this._wheelTimer.remove(),this._wheelTimer=this.defer(function(){this._arrowReleased(i)},50)}}},_setConstraintsAttr:function(){this.inherited(arguments),this.focusNode&&(void 0!==this.constraints.min?this.focusNode.setAttribute("aria-valuemin",this.constraints.min):this.focusNode.removeAttribute("aria-valuemin"),void 0!==this.constraints.max?this.focusNode.setAttribute("aria-valuemax",this.constraints.max):this.focusNode.removeAttribute("aria-valuemax"))},_setValueAttr:function(e){this.focusNode.setAttribute("aria-valuenow",e),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.own(d(this.domNode,r.wheel,a.hitch(this,"_mouseWheeled")),o.addListener(this.upArrowNode,this.textbox,{keyCode:t.UP_ARROW,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),o.addListener(this.downArrowNode,this.textbox,{keyCode:t.DOWN_ARROW,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),o.addListener(this.upArrowNode,this.textbox,{keyCode:t.PAGE_UP,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),o.addListener(this.downArrowNode,this.textbox,{keyCode:t.PAGE_DOWN,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout))}})});//# sourceMappingURL=_Spinner.js.map