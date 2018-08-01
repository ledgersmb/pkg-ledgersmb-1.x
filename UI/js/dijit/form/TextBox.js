//>>built
require({cache:{"url:dijit/form/templates/TextBox.html":'<div class="dijit dijitReset dijitInline dijitLeft" id="widget_${id}" role="presentation"\n	><div class="dijitReset dijitInputField dijitInputContainer"\n		><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n			${!nameAttrSetting} type=\'${type}\'\n	/></div\n></div>\n'}}),define("dijit/form/TextBox",["dojo/_base/declare","dojo/dom-construct","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/sniff","./_FormValueWidget","./_TextBoxMixin","dojo/text!./templates/TextBox.html","../main"],function(e,t,a,i,r,d,o,n,l,s,m){var f=e("dijit.form.TextBox"+(o("dojo-bidi")?"_NoBidi":""),[n,l],{templateString:s,_singleNodeTemplate:'<input class="dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',_buttonInputDisabled:o("ie")?"disabled":"",baseClass:"dijitTextBox",postMixInProperties:function(){var e=this.type.toLowerCase();(this.templateString&&"input"==this.templateString.toLowerCase()||("hidden"==e||"file"==e)&&this.templateString==this.constructor.prototype.templateString)&&(this.templateString=this._singleNodeTemplate),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),o("ie")<9&&this.defer(function(){try{var e=a.getComputedStyle(this.domNode);if(e){var t=e.fontFamily;if(t){var i=this.domNode.getElementsByTagName("INPUT");if(i)for(var r=0;r<i.length;r++)i[r].style.fontFamily=t}}}catch(d){}})},_setPlaceHolderAttr:function(e){this._set("placeHolder",e),this._phspan||(this._attachPoints.push("_phspan"),this._phspan=t.create("span",{className:"dijitPlaceHolder dijitInputField"},this.textbox,"after"),this.own(d(this._phspan,"mousedown",function(e){e.preventDefault()}),d(this._phspan,"touchend, pointerup, MSPointerUp",r.hitch(this,function(){this.focus()})))),this._phspan.innerHTML="",this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(e)),this._updatePlaceHolder()},_onInput:function(){this.inherited(arguments),this._updatePlaceHolder()},_updatePlaceHolder:function(){this._phspan&&(this._phspan.style.display=this.placeHolder&&!this.textbox.value?"":"none")},_setValueAttr:function(){this.inherited(arguments),this._updatePlaceHolder()},getDisplayedValue:function(){return i.deprecated(this.declaredClass+"::getDisplayedValue() is deprecated. Use get('displayedValue') instead.","","2.0"),this.get("displayedValue")},setDisplayedValue:function(e){i.deprecated(this.declaredClass+"::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.","","2.0"),this.set("displayedValue",e)},_onBlur:function(){this.disabled||(this.inherited(arguments),this._updatePlaceHolder(),o("mozilla")&&this.selectOnClick&&(this.textbox.selectionStart=this.textbox.selectionEnd=void 0))},_onFocus:function(){this.disabled||this.readOnly||(this.inherited(arguments),this._updatePlaceHolder())}});return o("ie")<9&&(f.prototype._isTextSelected=function(){var e=this.ownerDocument.selection.createRange(),t=e.parentElement();return t==this.textbox&&e.text.length>0},m._setSelectionRange=l._setSelectionRange=function(e,t,a){if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",-99999),i.moveStart("character",t),i.moveEnd("character",a-t),i.select()}}),o("dojo-bidi")&&(f=e("dijit.form.TextBox",f,{_setPlaceHolderAttr:function(){this.inherited(arguments),this.applyTextDir(this._phspan)}})),f});//# sourceMappingURL=TextBox.js.map