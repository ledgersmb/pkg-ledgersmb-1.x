//>>built
define("lsmb/journal/fx_checkbox",["dijit/form/CheckBox","dojo/_base/declare","dojo/on","dojo/dom","dojo/dom-class"],function(e,t,a,i,r){return t("lsmb/journal/fx_checkbox",[e],{postCreate:function(){var e=this;this.inherited(arguments),a(this.domNode,"click",function(){e.checked?(r.add("transaction-table","fx-transaction"),r.remove("transaction-table","no-fx-transaction")):(r.add("transaction-table","no-fx-transaction"),r.remove("transaction-table","fx-transaction"))})}})});//# sourceMappingURL=fx_checkbox.js.map