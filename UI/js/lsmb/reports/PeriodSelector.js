//>>built
define("lsmb/reports/PeriodSelector","dojo/_base/declare dojo/on dojo/dom dojo/dom-style dojo/topic dijit/registry dijit/_WidgetBase dijit/_Container".split(" "),function(h,d,e,f,b,g,k,l){return h("lsmb/reports/PeriodSelector",[k,l],{channel:"",postCreate:function(){this.inherited(arguments);this.own(b.subscribe("ui/reports/period-selection",function(a){}))},startup:function(){var a=this;this.inherited(arguments);this._by_dates=g.byId("comparison_by_dates");this._by_periods=g.byId("comparison_by_periods");
this.own(d(this._by_dates,"change",function(c){c&&(a._update_display(),b.publish(a.channel,"changed-period-type","by-dates"))}));this.own(d(this._by_periods,"change",function(c){c&&(a._update_display(),b.publish(a.channel,"changed-period-type","by-periods"))}));this._update_display()},_update_display:function(){f.set(e.byId("date_to_date_id"),"display",this._by_dates.get("checked")?"":"none");f.set(e.byId("date_period_id"),"display",this._by_periods.get("checked")?"":"none")}})});
//# sourceMappingURL=PeriodSelector.js.map