//>>built
define("dijit/_base/place",["dojo/_base/array","dojo/_base/lang","dojo/window","../place","../main"],function(e,t,a,r,i){var d={};return d.getViewport=function(){return a.getBox()},d.placeOnScreen=r.at,d.placeOnScreenAroundElement=function(e,a,i,d){var o;if(t.isArray(i))o=i;else{o=[];for(var n in i)o.push({aroundCorner:n,corner:i[n]})}return r.around(e,a,o,!0,d)},d.placeOnScreenAroundNode=d.placeOnScreenAroundElement,d.placeOnScreenAroundRectangle=d.placeOnScreenAroundElement,d.getPopupAroundAlignment=function(t,a){var r={};return e.forEach(t,function(e){var t=a;switch(e){case"after":r[a?"BR":"BL"]=a?"BL":"BR";break;case"before":r[a?"BL":"BR"]=a?"BR":"BL";break;case"below-alt":t=!t;case"below":r[t?"BL":"BR"]=t?"TL":"TR",r[t?"BR":"BL"]=t?"TR":"TL";break;case"above-alt":t=!t;case"above":default:r[t?"TL":"TR"]=t?"BL":"BR",r[t?"TR":"TL"]=t?"BR":"BL"}}),r},t.mixin(i,d),i});//# sourceMappingURL=place.js.map