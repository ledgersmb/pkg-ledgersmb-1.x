//>>built
define("dojo/dom-class",["./_base/lang","./_base/array","./dom"],function(e,t,n){function r(e){if("string"==typeof e||e instanceof String){if(e&&!a.test(e))return s[0]=e,s;var n=e.split(a);return n.length&&!n[0]&&n.shift(),n.length&&!n[n.length-1]&&n.pop(),n}return e?t.filter(e,function(e){return e}):[]}var o,i="className",a=/\s+/,s=[""],c={};return o={contains:function(e,t){return(" "+n.byId(e)[i]+" ").indexOf(" "+t+" ")>=0},add:function(e,t){e=n.byId(e),t=r(t);var o,a=e[i];a=a?" "+a+" ":" ",o=a.length;for(var s,c=0,u=t.length;u>c;++c)s=t[c],s&&a.indexOf(" "+s+" ")<0&&(a+=s+" ");o<a.length&&(e[i]=a.substr(1,a.length-2))},remove:function(t,o){t=n.byId(t);var a;if(void 0!==o){o=r(o),a=" "+t[i]+" ";for(var s=0,c=o.length;c>s;++s)a=a.replace(" "+o[s]+" "," ");a=e.trim(a)}else a="";t[i]!=a&&(t[i]=a)},replace:function(e,t,r){e=n.byId(e),c[i]=e[i],o.remove(c,r),o.add(c,t),e[i]!==c[i]&&(e[i]=c[i])},toggle:function(e,t,i){if(e=n.byId(e),void 0===i){t=r(t);for(var a,s=0,c=t.length;c>s;++s)a=t[s],o[o.contains(e,a)?"remove":"add"](e,a)}else o[i?"add":"remove"](e,t);return i}}});//# sourceMappingURL=dom-class.js.map