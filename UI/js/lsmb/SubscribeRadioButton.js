//>>built
define("lsmb/SubscribeRadioButton",["dojo/_base/declare","dojo/on","dojo/topic","dijit/form/RadioButton"],function(e,t,a,i){return e("lsmb/SubscribeRadioButton",[i],{topic:"",update:function(e){this.set("checked",e)},postCreate:function(){var e=this;this.inherited(arguments),this.own(a.subscribe(e.topic,function(t){e.update(t)}))}})});//# sourceMappingURL=SubscribeRadioButton.js.map