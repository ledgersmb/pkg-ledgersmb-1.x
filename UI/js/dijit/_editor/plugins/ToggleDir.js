//>>built
define("dijit/_editor/plugins/ToggleDir",["dojo/_base/declare","dojo/dom-style","dojo/_base/kernel","dojo/_base/lang","dojo/on","../_Plugin","../../form/ToggleButton"],function(e,t,a,r,i,d,o){var n=e("dijit._editor.plugins.ToggleDir",d,{useDefaultCommand:!1,command:"toggleDir",buttonClass:o,_initButton:function(){function e(e){t.set("checked",e&&e!==i,!1)}this.inherited(arguments);var t=this.button,a=this.editor.isLeftToRight();this.own(this.button.on("change",r.hitch(this,function(e){this.editor.set("textDir",a^e?"ltr":"rtl")})));var i=a?"ltr":"rtl";e(this.editor.get("textDir")),this.editor.watch("textDir",function(t,a,r){e(r)})},updateState:function(){this.button.set("disabled",this.get("disabled"))}});return d.registry.toggleDir=function(){return new n({command:"toggleDir"})},n});//# sourceMappingURL=ToggleDir.js.map