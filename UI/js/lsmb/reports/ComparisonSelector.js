//>>built
define("lsmb/reports/ComparisonSelector","dojo/_base/declare dojo/on dojo/dom dojo/dom-style dojo/topic dijit/registry dijit/_WidgetBase dijit/_Container".split(" "),function(e,f,c,d,g,h,k,l){return e("lsmb/reports/ComparisonSelector",[k,l],{channel:"",mode:"by-dates",postCreate:function(){var a=this;this.inherited(arguments);this.own(g.subscribe(this.channel,function(b,c){var d="";"changed-period-type"===b&&(a.mode=c,"by-dates"===c&&(d=a._comparison_periods.get("value")));a._update_display(d)}))},
startup:function(){var a=this;this.inherited(arguments);this._comparison_periods=h.byId("comparison-periods");this.own(f(this._comparison_periods,"change",function(b){a._update_display(a._comparison_periods.get("value"))}));this._update_display("")},_update_display:function(a){if(""===a||"by-periods"===this.mode)d.set(c.byId("comparison_dates"),"display","none");else if(a=parseInt(a),!isNaN(a)){d.set(c.byId("comparison_dates"),"display","");for(var b=1;9>=b;b++)d.set(c.byId("comparison_dates_"+b),
"display",b<=a?"":"none")}}})});
//# sourceMappingURL=ComparisonSelector.js.map