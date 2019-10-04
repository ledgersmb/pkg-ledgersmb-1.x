//>>built
define("dijit/tree/ObjectStoreModel",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","dojo/when","../Destroyable"],function(e,t,a,i,r,d,o){return a("dijit.tree.ObjectStoreModel",o,{store:null,labelAttr:"name",labelType:"text",root:null,query:null,constructor:function(e){r.mixin(this,e),this.childrenCache={}},getRoot:function(e,t){if(this.root)e(this.root);else{var a=this.store.query(this.query);a.then&&this.own(a),d(a,r.hitch(this,function(t){if(1!=t.length)throw new Error("dijit.tree.ObjectStoreModel: root query returned "+t.length+" items, but must return exactly one");this.root=t[0],e(this.root),a.observe&&a.observe(r.hitch(this,function(e){this.onChange(e)}),!0)}),t)}},mayHaveChildren:function(){return!0},getChildren:function(e,t,a){var i=this.store.getIdentity(e);if(this.childrenCache[i])return void d(this.childrenCache[i],t,a);var o=this.childrenCache[i]=this.store.getChildren(e);o.then&&this.own(o),o.observe&&this.own(o.observe(r.hitch(this,function(t,a,i){this.onChange(t),a!=i&&d(o,r.hitch(this,"onChildrenChange",e))}),!0)),d(o,t,a)},isItem:function(){return!0},getIdentity:function(e){return this.store.getIdentity(e)},getLabel:function(e){return e[this.labelAttr]},newItem:function(e,t,a,i){return this.store.put(e,{parent:t,before:i})},pasteItem:function(t,a,d,o,n,l){var s=new i;return a!==d||o||l?(a&&!o?this.getChildren(a,r.hitch(this,function(i){i=[].concat(i);var r=e.indexOf(i,t);i.splice(r,1),this.onChildrenChange(a,i),s.resolve(this.store.put(t,{overwrite:!0,parent:d,oldParent:a,before:l,isCopy:!1}))})):s.resolve(this.store.put(t,{overwrite:!0,parent:d,oldParent:a,before:l,isCopy:!0})),s):(s.resolve(!0),s)},onChange:function(){},onChildrenChange:function(){},onDelete:function(){}})});//# sourceMappingURL=ObjectStoreModel.js.map