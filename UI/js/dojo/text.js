//>>built
define("dojo/text",["./_base/kernel","require","./has","./request"],function(e,t,n,r){var o;o=function(e,t,n){r(e,{sync:!!t,headers:{"X-Requested-With":null}}).then(n)};var i={},a=function(e){if(e){e=e.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");var t=e.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);t&&(e=t[1])}else e="";return e},s={},u={};return e.cache=function(e,n,r){var s;"string"==typeof e?/\//.test(e)?(s=e,r=n):s=t.toUrl(e.replace(/\./g,"/")+(n?"/"+n:"")):(s=e+"",r=n);var u=void 0!=r&&"string"!=typeof r?r.value:r,c=r&&r.sanitize;return"string"==typeof u?(i[s]=u,c?a(u):u):null===u?(delete i[s],null):(s in i||o(s,!0,function(e){i[s]=e}),c?a(i[s]):i[s])},{dynamic:!0,normalize:function(e,t){var n=e.split("!"),r=n[0];return(/^\./.test(r)?t(r):r)+(n[1]?"!"+n[1]:"")},load:function(e,t,n){var r=e.split("!"),c=r.length>1,d=r[0],l=t.toUrl(r[0]),f="url:"+l,h=s,p=function(e){n(c?a(e):e)};if(d in i?h=i[d]:t.cache&&f in t.cache?h=t.cache[f]:l in i&&(h=i[l]),h===s)if(u[l])u[l].push(p);else{var g=u[l]=[p];o(l,!t.async,function(e){i[d]=i[l]=e;for(var t=0;t<g.length;)g[t++](e);delete u[l]})}else p(h)}}});//# sourceMappingURL=text.js.map