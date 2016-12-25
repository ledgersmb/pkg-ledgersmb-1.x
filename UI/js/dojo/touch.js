//>>built
define("dojo/touch","./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "),function(E,v,w,F,G,g,m,n,x,e){function l(a,d,b){return t&&b?function(a,d){return g(a,b,d)}:H?function(b,e){var c=g(b,d,function(c){e.call(this,c);p=(new Date).getTime()}),I=g(b,a,function(c){(!p||(new Date).getTime()>p+1E3)&&e.call(this,c)});return{remove:function(){c.remove();I.remove()}}}:function(d,b){return g(d,a,b)}}function J(a){do if(void 0!==a.dojoClick)return a;
while(a=a.parentNode)}function y(a,d,b){if(!n.isRight(a)){var f=J(a.target);if(h=!a.target.disabled&&f&&f.dojoClick)if(r=(q="useTarget"==h)?f:a.target,q&&a.preventDefault(),z=a.changedTouches?a.changedTouches[0].pageX-e.global.pageXOffset:a.clientX,A=a.changedTouches?a.changedTouches[0].pageY-e.global.pageYOffset:a.clientY,B=("object"==typeof h?h.x:"number"==typeof h?h:0)||4,C=("object"==typeof h?h.y:"number"==typeof h?h:0)||4,!D){D=!0;var k=function(c){h=q?w.isDescendant(e.doc.elementFromPoint(c.changedTouches?
c.changedTouches[0].pageX-e.global.pageXOffset:c.clientX,c.changedTouches?c.changedTouches[0].pageY-e.global.pageYOffset:c.clientY),r):h&&(c.changedTouches?c.changedTouches[0].target:c.target)==r&&Math.abs((c.changedTouches?c.changedTouches[0].pageX-e.global.pageXOffset:c.clientX)-z)<=B&&Math.abs((c.changedTouches?c.changedTouches[0].pageY-e.global.pageYOffset:c.clientY)-A)<=C};e.doc.addEventListener(d,function(c){n.isRight(c)||(k(c),q&&c.preventDefault())},!0);e.doc.addEventListener(b,function(c){if(!n.isRight(c)&&
(k(c),h)){u=(new Date).getTime();var d=q?r:c.target;"LABEL"===d.tagName&&(d=w.byId(d.getAttribute("for"))||d);var a=c.changedTouches?c.changedTouches[0]:c,b=function(d){var b=document.createEvent("MouseEvents");b._dojo_click=!0;b.initMouseEvent(d,!0,!0,c.view,c.detail,a.screenX,a.screenY,a.clientX,a.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,0,null);return b},e=b("mousedown"),f=b("mouseup"),l=b("click");setTimeout(function(){g.emit(d,"mousedown",e);g.emit(d,"mouseup",f);g.emit(d,"click",l);u=
(new Date).getTime()},0)}},!0);a=function(d){e.doc.addEventListener(d,function(a){h&&(!a._dojo_click&&(new Date).getTime()<=u+1E3&&!("INPUT"==a.target.tagName&&F.contains(a.target,"dijitOffScreen")))&&(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),"click"==d&&(("INPUT"!=a.target.tagName||"radio"==a.target.type||"checkbox"==a.target.type)&&"TEXTAREA"!=a.target.tagName&&"AUDIO"!=a.target.tagName&&"VIDEO"!=a.target.tagName)&&a.preventDefault())},!0)};a("click");a("mousedown");
a("mouseup")}}}var s=5>m("ios"),t=m("pointer-events")||m("MSPointer"),f=function(){var a={},d;for(d in{down:1,move:1,up:1,cancel:1,over:1,out:1})a[d]=m("MSPointer")?"MSPointer"+d.charAt(0).toUpperCase()+d.slice(1):"pointer"+d;return a}(),H=m("touch-events"),D,h,q=!1,r,z,A,B,C,u,p,k;m("touch")&&(t?x(function(){e.doc.addEventListener(f.down,function(a){y(a,f.move,f.up)},!0)}):x(function(){function a(a){var b=G.delegate(a,{bubbles:!0});6<=m("ios")&&(b.touches=a.touches,b.altKey=a.altKey,b.changedTouches=
a.changedTouches,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.targetTouches=a.targetTouches);return b}k=e.body();e.doc.addEventListener("touchstart",function(a){p=(new Date).getTime();var b=k;k=a.target;g.emit(b,"dojotouchout",{relatedTarget:k,bubbles:!0});g.emit(k,"dojotouchover",{relatedTarget:b,bubbles:!0});y(a,"touchmove","touchend")},!0);g(e.doc,"touchmove",function(d){p=(new Date).getTime();var b=e.doc.elementFromPoint(d.pageX-(s?0:e.global.pageXOffset),d.pageY-(s?0:e.global.pageYOffset));
b&&(k!==b&&(g.emit(k,"dojotouchout",{relatedTarget:b,bubbles:!0}),g.emit(b,"dojotouchover",{relatedTarget:k,bubbles:!0}),k=b),g.emit(b,"dojotouchmove",a(d))||d.preventDefault())});g(e.doc,"touchend",function(d){p=(new Date).getTime();var b=e.doc.elementFromPoint(d.pageX-(s?0:e.global.pageXOffset),d.pageY-(s?0:e.global.pageYOffset))||e.body();g.emit(b,"dojotouchend",a(d))})}));v={press:l("mousedown","touchstart",f.down),move:l("mousemove","dojotouchmove",f.move),release:l("mouseup","dojotouchend",
f.up),cancel:l(n.leave,"touchcancel",t?f.cancel:null),over:l("mouseover","dojotouchover",f.over),out:l("mouseout","dojotouchout",f.out),enter:n._eventHandler(l("mouseover","dojotouchover",f.over)),leave:n._eventHandler(l("mouseout","dojotouchout",f.out))};return E.touch=v});
//# sourceMappingURL=touch.js.map