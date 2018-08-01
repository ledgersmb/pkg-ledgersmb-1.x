//>>built
define("dijit/form/NumberSpinner",["dojo/_base/declare","dojo/keys","./_Spinner","./NumberTextBox"],function(e,t,a,i){return e("dijit.form.NumberSpinner",[a,i.Mixin],{baseClass:"dijitTextBox dijitSpinner dijitNumberTextBox",adjust:function(e,t){var a=this.constraints,i=isNaN(e),r=!isNaN(a.max),d=!isNaN(a.min);i&&0!=t&&(e=t>0?d?a.min:r?a.max:0:r?this.constraints.max:d?a.min:0);var o=e+t;return i||isNaN(o)?e:(r&&o>a.max&&(o=a.max),d&&o<a.min&&(o=a.min),o)},_onKeyDown:function(e){if(!(this.disabled||this.readOnly||e.keyCode!=t.HOME&&e.keyCode!=t.END||e.ctrlKey||e.altKey||e.metaKey||"undefined"==typeof this.get("value"))){var a=this.constraints[e.keyCode==t.HOME?"min":"max"];"number"==typeof a&&this._setValueAttr(a,!1),e.stopPropagation(),e.preventDefault()}}})});//# sourceMappingURL=NumberSpinner.js.map