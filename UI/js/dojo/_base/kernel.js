//>>built
define("dojo/_base/kernel",["../has","./config","require","module"],function(h,d,f,a){var e,k=function(){return this}(),c={},l={},b={config:d,global:k,dijit:c,dojox:l},c={dojo:["dojo",b],dijit:["dijit",c],dojox:["dojox",l]};a=f.map&&f.map[a.id.match(/[^\/]+/)[0]];for(e in a)c[e]?c[e][0]=a[e]:c[e]=[a[e],{}];for(e in c)a=c[e],a[1]._scopeName=a[0],d.noGlobals||(k[a[0]]=a[1]);b.scopeMap=c;b.baseUrl=b.config.baseUrl=f.baseUrl;b.isAsync=f.async;b.locale=d.locale;d="$Rev: 00f5aea $".match(/[0-9a-f]{7,}/);
b.version={major:1,minor:10,patch:7,flag:"",revision:d?d[0]:NaN,toString:function(){var a=b.version;return a.major+"."+a.minor+"."+a.patch+a.flag+" ("+a.revision+")"}};Function("d","d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(b);b.exit=function(){};h("host-webworker");h.add("console-as-object",function(){return Function.prototype.bind&&console&&"object"===typeof console.log});"undefined"!=typeof console||(console={});f="assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" ");
var g;for(d=0;g=f[d++];)console[g]?h("console-as-object")&&(console[g]=Function.prototype.bind.call(console[g],console)):function(){var a=g+"";console[a]="log"in console?function(){var b=Array.prototype.slice.call(arguments);b.unshift(a+":");console.log(b.join(" "))}:function(){};console[a]._fake=!0}();b.deprecated=b.experimental=function(){};b._hasResource={};return b});
//# sourceMappingURL=kernel.js.map