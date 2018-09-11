//>>built
define("dojo/window",["./_base/lang","./sniff","./_base/window","./dom","./dom-geometry","./dom-style","./dom-construct"],function(e,t,n,r,o,i,a){t.add("rtl-adjust-position-for-verticalScrollBar",function(e,t){var r=n.body(t),i=a.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},r,"last"),s=a.create("div",{style:{overflow:"hidden",direction:"ltr"}},i,"last"),c=0!=o.position(s).x;return i.removeChild(s),r.removeChild(i),c}),t.add("position-fixed-support",function(e,t){var r=n.body(t),i=a.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},r,"last"),s=a.create("span",{style:{position:"fixed",left:"0",top:"0"}},i,"last"),c=o.position(s).x!=o.position(i).x;return i.removeChild(s),r.removeChild(i),c});var s={getBox:function(e){e=e||n.doc;var r,i,a="BackCompat"==e.compatMode?n.body(e):e.documentElement,c=o.docScroll(e);if(t("touch")){var u=s.get(e);r=u.innerWidth||a.clientWidth,i=u.innerHeight||a.clientHeight}else r=a.clientWidth,i=a.clientHeight;return{l:c.x,t:c.y,w:r,h:i}},get:function(e){if(t("ie")&&s!==document.parentWindow){e.parentWindow.execScript("document._parentWindow = window;","Javascript");var n=e._parentWindow;return e._parentWindow=null,n}return e.parentWindow||e.defaultView},scrollIntoView:function(e,a){try{e=r.byId(e);var s=e.ownerDocument||n.doc,c=n.body(s),u=s.documentElement||c.parentNode,d=t("ie")||t("trident"),l=t("webkit");if(e==c||e==u)return;if(!(t("mozilla")||d||l||t("opera")||t("trident")||t("edge"))&&"scrollIntoView"in e)return void e.scrollIntoView(!1);var f="BackCompat"==s.compatMode,h=Math.min(c.clientWidth||u.clientWidth,u.clientWidth||c.clientWidth),p=Math.min(c.clientHeight||u.clientHeight,u.clientHeight||c.clientHeight),g=l||f?c:u,m=a||o.position(e),v=e.parentNode,y=function(e){return 6>=d||7==d&&f?!1:t("position-fixed-support")&&"fixed"==i.get(e,"position").toLowerCase()},b=this,_=function(e,t,n){"BODY"==e.tagName||"HTML"==e.tagName?b.get(e.ownerDocument).scrollBy(t,n):(t&&(e.scrollLeft+=t),n&&(e.scrollTop+=n))};if(y(e))return;for(;v;){v==c&&(v=g);var w=o.position(v),x=y(v),j="rtl"==i.getComputedStyle(v).direction.toLowerCase();if(v==g)w.w=h,w.h=p,g==u&&(d||t("trident"))&&j&&(w.x+=g.offsetWidth-w.w),w.x=0,w.y=0;else{var C=o.getPadBorderExtents(v);w.w-=C.w,w.h-=C.h,w.x+=C.l,w.y+=C.t;var N=v.clientWidth,T=w.w-N;N>0&&T>0&&(j&&t("rtl-adjust-position-for-verticalScrollBar")&&(w.x+=T),w.w=N),N=v.clientHeight,T=w.h-N,N>0&&T>0&&(w.h=N)}x&&(w.y<0&&(w.h+=w.y,w.y=0),w.x<0&&(w.w+=w.x,w.x=0),w.y+w.h>p&&(w.h=p-w.y),w.x+w.w>h&&(w.w=h-w.x));var E,k,A=m.x-w.x,L=m.y-w.y,S=A+m.w-w.w,M=L+m.h-w.h;S*A>0&&(v.scrollLeft||v==g||v.scrollWidth>v.offsetHeight)&&(E=Math[0>A?"max":"min"](A,S),j&&(8==d&&!f||t("trident")>=5)&&(E=-E),k=v.scrollLeft,_(v,E,0),E=v.scrollLeft-k,m.x-=E),M*L>0&&(v.scrollTop||v==g||v.scrollHeight>v.offsetHeight)&&(E=Math.ceil(Math[0>L?"max":"min"](L,M)),k=v.scrollTop,_(v,0,E),E=v.scrollTop-k,m.y-=E),v=v!=g&&!x&&v.parentNode}}catch(D){console.error("scrollIntoView: "+D),e.scrollIntoView(!1)}}};return 1&&e.setObject("dojo.window",s),s});//# sourceMappingURL=window.js.map