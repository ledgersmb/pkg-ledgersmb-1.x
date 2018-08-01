//>>built
define("dijit/form/NumberTextBox",["dojo/_base/declare","dojo/_base/lang","dojo/i18n","dojo/string","dojo/number","./RangeBoundTextBox"],function(e,t,a,i,r,d){var o=function(e){var t,e=e||{},i=a.getLocalization("dojo.cldr","number",a.normalizeLocale(e.locale)),r=e.pattern?e.pattern:i[(e.type||"decimal")+"Format"];return t="number"==typeof e.places?e.places:"string"==typeof e.places&&e.places.length>0?e.places.replace(/.*,/,""):-1!=r.indexOf(".")?r.split(".")[1].replace(/[^#0]/g,"").length:0,{sep:i.decimal,places:t}},n=e("dijit.form.NumberTextBoxMixin",null,{pattern:function(e){return"("+(this.focused&&this.editOptions?this._regExpGenerator(t.delegate(e,this.editOptions))+"|":"")+this._regExpGenerator(e)+")"},value:0/0,editOptions:{pattern:"#.######"},_formatter:r.format,_regExpGenerator:r.regexp,_decimalInfo:o(),postMixInProperties:function(){this.inherited(arguments),this._set("type","text")},_setConstraintsAttr:function(e){var t="number"==typeof e.places?e.places:0;t&&t++,"number"!=typeof e.max&&(e.max=9*Math.pow(10,15-t)),"number"!=typeof e.min&&(e.min=-9*Math.pow(10,15-t)),this.inherited(arguments,[e]),this.focusNode&&this.focusNode.value&&!isNaN(this.value)&&this.set("value",this.value),this._decimalInfo=o(e)},_onFocus:function(){if(!this.disabled&&!this.readOnly){var e=this.get("value");if("number"==typeof e&&!isNaN(e)){var t=this.format(e,this.constraints);void 0!==t&&(this.textbox.value=t)}this.inherited(arguments)}},format:function(e,a){var i=String(e);return"number"!=typeof e?i:isNaN(e)?"":"rangeCheck"in this&&this.rangeCheck(e,a)||a.exponent===!1||!/\de[-+]?\d/i.test(i)?(this.editOptions&&this.focused&&(a=t.mixin({},a,this.editOptions)),this._formatter(e,a)):i},_parser:r.parse,parse:function(e,a){var i=t.mixin({},a,this.editOptions&&this.focused?this.editOptions:{});if(this.focused&&null!=i.places){var r=i.places,d="number"==typeof r?r:Number(r.split(",").pop());i.places="0,"+d}var o=this._parser(e,i);return this.editOptions&&this.focused&&isNaN(o)&&(o=this._parser(e,a)),o},_getDisplayedValueAttr:function(){var e=this.inherited(arguments);return isNaN(e)?this.textbox.value:e},filter:function(e){return null==e||"string"==typeof e&&""==e?0/0:("number"!=typeof e||isNaN(e)||0==e||(e=r.round(e,this._decimalInfo.places)),this.inherited(arguments,[e]))},serialize:function(e){return"number"!=typeof e||isNaN(e)?"":this.inherited(arguments)},_setBlurValue:function(){var e=t.hitch(t.delegate(this,{focused:!0}),"get")("value");this._setValueAttr(e,!0)},_setValueAttr:function(e,t,a){void 0!==e&&void 0===a&&(a=String(e),"number"==typeof e?isNaN(e)?a="":("rangeCheck"in this&&this.rangeCheck(e,this.constraints)||this.constraints.exponent===!1||!/\de[-+]?\d/i.test(a))&&(a=void 0):e?e=void 0:(a="",e=0/0)),this.inherited(arguments,[e,t,a])},_getValueAttr:function(){var e=this.inherited(arguments);if(isNaN(e)&&""!==this.textbox.value){if(this.constraints.exponent!==!1&&/\de[-+]?\d/i.test(this.textbox.value)&&new RegExp("^"+r._realNumberRegexp(t.delegate(this.constraints))+"$").test(this.textbox.value)){var a=Number(this.textbox.value);return isNaN(a)?void 0:a}return void 0}return e},isValid:function(){if(!this.focused||this._isEmpty(this.textbox.value))return this.inherited(arguments);var e=this.get("value");return!isNaN(e)&&this.rangeCheck(e,this.constraints)?this.constraints.exponent!==!1&&/\de[-+]?\d/i.test(this.textbox.value)?!0:this.inherited(arguments):!1},_isValidSubset:function(){var e="number"==typeof this.constraints.min,t="number"==typeof this.constraints.max,a=this.get("value");if(isNaN(a)||!e&&!t)return this.inherited(arguments);var r=0|a,d=0>a,o=-1!=this.textbox.value.indexOf(this._decimalInfo.sep),n=this.maxLength||20,l=n-this.textbox.value.length,s=o?this.textbox.value.split(this._decimalInfo.sep)[1].replace(/[^0-9]/g,""):"",m=o?r+"."+s:r+"",f=i.rep("9",l),u=a,y=a;return d?u=Number(m+f):y=Number(m+f),!(e&&y<this.constraints.min||t&&u>this.constraints.max)}}),l=e("dijit.form.NumberTextBox",[d,n],{baseClass:"dijitTextBox dijitNumberTextBox"});return l.Mixin=n,l});//# sourceMappingURL=NumberTextBox.js.map