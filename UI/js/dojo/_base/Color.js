//>>built
define("dojo/_base/Color",["./kernel","./lang","./array","./config"],function(e,t,n,r){var o=e.Color=function(e){e&&this.setColor(e)};return o.named={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:r.transparentColor||[0,0,0,0]},t.extend(o,{r:255,g:255,b:255,a:1,_set:function(e,t,n,r){var o=this;o.r=e,o.g=t,o.b=n,o.a=r},setColor:function(e){return t.isString(e)?o.fromString(e,this):t.isArray(e)?o.fromArray(e,this):(this._set(e.r,e.g,e.b,e.a),e instanceof o||this.sanitize()),this},sanitize:function(){return this},toRgb:function(){var e=this;return[e.r,e.g,e.b]},toRgba:function(){var e=this;return[e.r,e.g,e.b,e.a]},toHex:function(){var e=n.map(["r","g","b"],function(e){var t=this[e].toString(16);return t.length<2?"0"+t:t},this);return"#"+e.join("")},toCss:function(e){var t=this,n=t.r+", "+t.g+", "+t.b;return(e?"rgba("+n+", "+t.a:"rgb("+n)+")"},toString:function(){return this.toCss(!0)}}),o.blendColors=e.blendColors=function(e,t,r,i){var a=i||new o;return n.forEach(["r","g","b","a"],function(n){a[n]=e[n]+(t[n]-e[n])*r,"a"!=n&&(a[n]=Math.round(a[n]))}),a.sanitize()},o.fromRgb=e.colorFromRgb=function(e,t){var n=e.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);return n&&o.fromArray(n[1].split(/\s*,\s*/),t)},o.fromHex=e.colorFromHex=function(e,t){var r=t||new o,i=4==e.length?4:8,a=(1<<i)-1;return e=Number("0x"+e.substr(1)),isNaN(e)?null:(n.forEach(["b","g","r"],function(t){var n=e&a;e>>=i,r[t]=4==i?17*n:n}),r.a=1,r)},o.fromArray=e.colorFromArray=function(e,t){var n=t||new o;return n._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(n.a)&&(n.a=1),n.sanitize()},o.fromString=e.colorFromString=function(e,t){var n=o.named[e];return n&&o.fromArray(n,t)||o.fromRgb(e,t)||o.fromHex(e,t)},o});//# sourceMappingURL=Color.js.map