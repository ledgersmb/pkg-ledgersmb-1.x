//>>built
define("dijit/_Container",["dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/_base/kernel"],function(e,t,a){return t("dijit._Container",null,{buildRendering:function(){this.inherited(arguments),this.containerNode||(this.containerNode=this.domNode)},addChild:function(e,t){var r=this.containerNode;if(t>0){for(r=r.firstChild;t>0;)1==r.nodeType&&t--,r=r.nextSibling;r?t="before":(r=this.containerNode,t="last")}a.place(e.domNode,r,t),this._started&&!e._started&&e.startup()},removeChild:function(e){if("number"==typeof e&&(e=this.getChildren()[e]),e){var t=e.domNode;t&&t.parentNode&&t.parentNode.removeChild(t)}},hasChildren:function(){return this.getChildren().length>0},_getSiblingOfChild:function(t,a){var r=this.getChildren(),i=e.indexOf(r,t);return r[i+a]},getIndexOfChild:function(t){return e.indexOf(this.getChildren(),t)}})});//# sourceMappingURL=_Container.js.map