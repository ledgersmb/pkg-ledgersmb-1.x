//>>built
define("lsmb/layout/TableContainer",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/array","dojo/dom-prop","dojo/dom-style","dijit/_WidgetBase","dijit/layout/_LayoutWidget"],function(e,t,a,i,r,o,d,n,l,s){var m=a("lsmb.layout.TableContainer",s,{cols:1,labelWidth:"100",showLabels:!0,orientation:"horiz",spacing:1,customClass:"",postCreate:function(){this.inherited(arguments),this._children=[],this.connect(this,"set",function(e,t){!t||"orientation"!=e&&"customClass"!=e&&"cols"!=e||this.layout()})},startup:function(){if(!this._started&&(this.inherited(arguments),!this._initialized)){var e=this.getChildren();e.length<1||(this._initialized=!0,i.add(this.domNode,"dijitTableLayout"),o.forEach(e,function(e){e.started||e._started||e.startup()}),this.layout(),this.resize())}},resize:function(){o.forEach(this.getChildren(),function(e){"function"==typeof e.resize&&e.resize()})},layout:function(){function e(e,t,a){if(""!=s.customClass){var r=s.customClass+"-"+(t||e.tagName.toLowerCase());i.add(e,r),arguments.length>2&&i.add(e,r+"-"+a)}}if(this._initialized){var a=this.getChildren(),l={},s=this;o.forEach(this._children,t.hitch(this,function(e){l[e.id]=e})),o.forEach(a,t.hitch(this,function(e){l[e.id]||this._children.push(e)}));var m=r.create("table",{width:"100%","class":"tableContainer-table tableContainer-table-"+this.orientation,cellspacing:this.spacing},this.domNode),u=r.create("tbody");m.appendChild(u),e(m,"table",this.orientation);var f=(Math.floor(100/this.cols)+"%",r.create("tr",{},u)),h=this.showLabels&&"horiz"!=this.orientation?r.create("tr",{},u):f,c=this.cols*(this.showLabels?2:1),y=0;o.forEach(this._children,t.hitch(this,function(t,a){var i=t.colspan||1;i>1&&(i=this.showLabels?Math.min(c-1,2*i-1):Math.min(c,i)),y+i-1+(this.showLabels?1:0)>=c&&(y=0,f=r.create("tr",{},u),h="horiz"==this.orientation?f:r.create("tr",{},u));var o;if(this.showLabels)if(o=r.create("td",{"class":"tableContainer-labelCell"},f),t.spanLabel)d.set(o,"vert"==this.orientation?"rowspan":"colspan",2);else{e(o,"labelCell");var l={"for":t.get("id")},s=r.create("label",l,o);(Number(this.labelWidth)>-1||String(this.labelWidth).indexOf("%")>-1)&&n.set(o,"width",String(this.labelWidth).indexOf("%")<0?this.labelWidth+"px":this.labelWidth),s.innerHTML=t.get("label")||t.get("title")}var m;m=t.spanLabel&&o?o:r.create("td",{"class":"tableContainer-valueCell"},h),i>1&&d.set(m,"colspan",i),e(m,"valueCell",a),m.appendChild(t.domNode),y+=i+(this.showLabels?1:0)})),this.table&&this.table.parentNode.removeChild(this.table),o.forEach(a,function(e){"function"==typeof e.layout&&e.layout()}),this.table=m,this.resize()}},destroyDescendants:function(e){o.forEach(this._children,function(t){t.destroyRecursive(e)})},_setSpacingAttr:function(e){this.spacing=e,this.table&&(this.table.cellspacing=Number(e))}});return m.ChildWidgetProperties={label:"",title:"",spanLabel:!1,colspan:1},t.extend(l,m.ChildWidgetProperties),m});//# sourceMappingURL=TableContainer.js.map