//>>built
define("dojo/_base/array",["./kernel","../has","./lang"],function(e,t,n){function r(e){return s[e]=new Function("item","index","array",e)}function o(e){var t=!e;return function(n,o,i){var a,c=0,u=n&&n.length||0;if(u&&"string"==typeof n&&(n=n.split("")),"string"==typeof o&&(o=s[o]||r(o)),i){for(;u>c;++c)if(a=!o.call(i,n[c],c,n),e^a)return!a}else for(;u>c;++c)if(a=!o(n[c],c,n),e^a)return!a;return t}}function i(e){var t=1,n=0,r=0;return e||(t=n=r=-1),function(o,i,s,u){if(u&&t>0)return c.lastIndexOf(o,i,s);var d,l=o&&o.length||0,f=e?l+r:n;for(s===a?d=e?n:l+r:0>s?(d=l+s,0>d&&(d=n)):d=s>=l?l+r:s,l&&"string"==typeof o&&(o=o.split(""));d!=f;d+=t)if(o[d]==i)return d;return-1}}var a,s={},c={every:o(!1),some:o(!0),indexOf:i(!0),lastIndexOf:i(!1),forEach:function(e,t,n){var o=0,i=e&&e.length||0;if(i&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||r(t)),n)for(;i>o;++o)t.call(n,e[o],o,e);else for(;i>o;++o)t(e[o],o,e)},map:function(e,t,n,o){var i=0,a=e&&e.length||0,c=new(o||Array)(a);if(a&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||r(t)),n)for(;a>i;++i)c[i]=t.call(n,e[i],i,e);else for(;a>i;++i)c[i]=t(e[i],i,e);return c},filter:function(e,t,n){var o,i=0,a=e&&e.length||0,c=[];if(a&&"string"==typeof e&&(e=e.split("")),"string"==typeof t&&(t=s[t]||r(t)),n)for(;a>i;++i)o=e[i],t.call(n,o,i,e)&&c.push(o);else for(;a>i;++i)o=e[i],t(o,i,e)&&c.push(o);return c},clearCache:function(){s={}}};return 1&&n.mixin(e,c),c});//# sourceMappingURL=array.js.map