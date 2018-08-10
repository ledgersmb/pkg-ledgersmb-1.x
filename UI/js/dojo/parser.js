//>>built
define("dojo/parser",["require","./_base/kernel","./_base/lang","./_base/array","./_base/config","./dom","./_base/window","./_base/url","./aspect","./promise/all","./date/stamp","./Deferred","./has","./query","./on","./ready"],function(require,dojo,dlang,darray,config,dom,dwindow,_Url,aspect,all,dates,Deferred,has,query,don,ready){function myEval(text){return eval("("+text+")")}function getNameMap(e){var t=e._nameCaseMap,n=e.prototype;if(!t||t._extendCnt<extendCnt){t=e._nameCaseMap={};for(var r in n)"_"!==r.charAt(0)&&(t[r.toLowerCase()]=r);t._extendCnt=extendCnt}return t}function getCtor(e,t){t||(t=require);var n=t._dojoParserCtorMap||(t._dojoParserCtorMap={}),r=e.join();if(!n[r]){for(var o=[],i=0,a=e.length;a>i;i++){var s=e[i];o[o.length]=n[s]=n[s]||dlang.getObject(s)||~s.indexOf("/")&&t(s)}var c=o.shift();n[r]=o.length?c.createSubclass?c.createSubclass(o):c.extend.apply(c,o):c}return n[r]}new Date("X");var extendCnt=0;aspect.after(dlang,"extend",function(){extendCnt++},!0);var parser={_clearCache:function(){extendCnt++,_ctorMap={}},_functionFromScript:function(e,t){var n="",r="",o=e.getAttribute(t+"args")||e.getAttribute("args"),i=e.getAttribute("with"),a=(o||"").split(/\s*,\s*/);return i&&i.length&&darray.forEach(i.split(/\s*,\s*/),function(e){n+="with("+e+"){",r+="}"}),new Function(a,n+e.innerHTML+r)},instantiate:function(e,t,n){t=t||{},n=n||{};var r=(n.scope||dojo._scopeName)+"Type",o="data-"+(n.scope||dojo._scopeName)+"-",i=o+"type",a=o+"mixins",s=[];return darray.forEach(e,function(e){var n=r in t?t[r]:e.getAttribute(i)||e.getAttribute(r);if(n){var o=e.getAttribute(a),c=o?[n].concat(o.split(/\s*,\s*/)):[n];s.push({node:e,types:c})}}),this._instantiate(s,t,n)},_instantiate:function(e,t,n,r){function o(e){return t._started||n.noStart||darray.forEach(e,function(e){"function"!=typeof e.startup||e._started||e.startup()}),e}var i=darray.map(e,function(e){var r=e.ctor||getCtor(e.types,n.contextRequire);if(!r)throw new Error("Unable to resolve constructor for: '"+e.types.join()+"'");return this.construct(r,e.node,t,n,e.scripts,e.inherited)},this);return r?all(i).then(o):o(i)},construct:function(e,t,n,r,o,i){function a(e){for(m&&dlang.setObject(m,e),y=0;y<k.length;y++)aspect[k[y].advice||"after"](e,k[y].method,dlang.hitch(e,k[y].func),!0);for(y=0;y<A.length;y++)A[y].call(e);for(y=0;y<L.length;y++)e.watch(L[y].prop,L[y].func);for(y=0;y<S.length;y++)don(e,S[y].event,S[y].func);return e}var s=e&&e.prototype;r=r||{};var c={};r.defaults&&dlang.mixin(c,r.defaults),i&&dlang.mixin(c,i);var u;if(has("dom-attributes-explicit"))u=t.attributes;else if(has("dom-attributes-specified-flag"))u=darray.filter(t.attributes,function(e){return e.specified});else{var d=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),l=d.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,"");u=darray.map(l.split(/\s+/),function(e){var n=e.toLowerCase();return{name:e,value:"LI"==t.nodeName&&"value"==e||"enctype"==n?t.getAttribute(n):t.getAttributeNode(n).value}})}var f=r.scope||dojo._scopeName,h="data-"+f+"-",p={};"dojo"!==f&&(p[h+"props"]="data-dojo-props",p[h+"type"]="data-dojo-type",p[h+"mixins"]="data-dojo-mixins",p[f+"type"]="dojotype",p[h+"id"]="data-dojo-id");for(var g,m,v,y=0,b=[];g=u[y++];){var _=g.name,w=_.toLowerCase(),x=g.value;switch(p[w]||w){case"data-dojo-type":case"dojotype":case"data-dojo-mixins":break;case"data-dojo-props":v=x;break;case"data-dojo-id":case"jsid":m=x;break;case"data-dojo-attach-point":case"dojoattachpoint":c.dojoAttachPoint=x;break;case"data-dojo-attach-event":case"dojoattachevent":c.dojoAttachEvent=x;break;case"class":c["class"]=t.className;break;case"style":c.style=t.style&&t.style.cssText;break;default:if(!(_ in s)){var j=getNameMap(e);_=j[w]||_}if(_ in s)switch(typeof s[_]){case"string":c[_]=x;break;case"number":c[_]=x.length?Number(x):0/0;break;case"boolean":c[_]="false"!=x.toLowerCase();break;case"function":c[_]=""===x||-1!=x.search(/[^\w\.]+/i)?new Function(x):dlang.getObject(x,!1)||new Function(x),b.push(_);break;default:var C=s[_];c[_]=C&&"length"in C?x?x.split(/\s*,\s*/):[]:C instanceof Date?""==x?new Date(""):"now"==x?new Date:dates.fromISOString(x):C instanceof _Url?dojo.baseUrl+x:myEval(x)}else c[_]=x}}for(var N=0;N<b.length;N++){var E=b[N].toLowerCase();t.removeAttribute(E),t[E]=null}if(v)try{v=myEval.call(r.propsThis,"{"+v+"}"),dlang.mixin(c,v)}catch(T){throw new Error(T.toString()+" in data-dojo-props='"+v+"'")}dlang.mixin(c,n),o||(o=e&&(e._noScript||s._noScript)?[]:query("> script[type^='dojo/']",t));var k=[],A=[],L=[],S=[];if(o)for(y=0;y<o.length;y++){var D=o[y];t.removeChild(D);var M=D.getAttribute(h+"event")||D.getAttribute("event"),I=D.getAttribute(h+"prop"),R=D.getAttribute(h+"method"),P=D.getAttribute(h+"advice"),O=D.getAttribute("type"),B=this._functionFromScript(D,h);M?"dojo/connect"==O?k.push({method:M,func:B}):"dojo/on"==O?S.push({event:M,func:B}):c[M]=B:"dojo/aspect"==O?k.push({method:R,advice:P,func:B}):"dojo/watch"==O?L.push({prop:I,func:B}):A.push(B)}var F=e.markupFactory||s.markupFactory,q=F?F(c,t,e):new e(c,t);return q.then?q.then(a):a(q)},scan:function(e,t){function n(e,t){return e.getAttribute&&e.getAttribute(t)||e.parentNode&&n(e.parentNode,t)}function r(e){if(!e.inherited){e.inherited={};var t=e.node,n=r(e.parent),o={dir:t.getAttribute("dir")||n.dir,lang:t.getAttribute("lang")||n.lang,textDir:t.getAttribute(d)||n.textDir};for(var i in o)o[i]&&(e.inherited[i]=o[i])}return e.inherited}var o=[],i=[],a={},s=(t.scope||dojo._scopeName)+"Type",c="data-"+(t.scope||dojo._scopeName)+"-",u=c+"type",d=c+"textdir",l=c+"mixins",f=e.firstChild,h=t.inherited;if(!h){h={dir:n(e,"dir"),lang:n(e,"lang"),textDir:n(e,d)};for(var p in h)h[p]||delete h[p]}for(var g,m,v={inherited:h};;)if(f)if(1==f.nodeType)if(g&&"script"==f.nodeName.toLowerCase())y=f.getAttribute("type"),y&&/^dojo\/\w/i.test(y)&&g.push(f),f=f.nextSibling;else if(m)f=f.nextSibling;else{var y=f.getAttribute(u)||f.getAttribute(s),b=f.firstChild;if(y||b&&(3!=b.nodeType||b.nextSibling)){var _,w=null;if(y){var x=f.getAttribute(l),j=x?[y].concat(x.split(/\s*,\s*/)):[y];try{w=getCtor(j,t.contextRequire)}catch(C){}w||darray.forEach(j,function(e){~e.indexOf("/")&&!a[e]&&(a[e]=!0,i[i.length]=e)});var N=w&&!w.prototype._noScript?[]:null;_={types:j,ctor:w,parent:v,node:f,scripts:N},_.inherited=r(_),o.push(_)}else _={node:f,scripts:g,parent:v};g=N,m=f.stopParser||w&&w.prototype.stopParser&&!t.template,v=_,f=b}else f=f.nextSibling}else f=f.nextSibling;else{if(!v||!v.node)break;f=v.node.nextSibling,m=!1,v=v.parent,g=v.scripts}var E=new Deferred;if(i.length){var T=t.contextRequire||require;T(i,function(){E.resolve(darray.filter(o,function(e){if(!e.ctor)try{e.ctor=getCtor(e.types,t.contextRequire)}catch(n){}for(var r=e.parent;r&&!r.types;)r=r.parent;var o=e.ctor&&e.ctor.prototype;return e.instantiateChildren=!(o&&o.stopParser&&!t.template),e.instantiate=!r||r.instantiate&&r.instantiateChildren,e.instantiate}))})}else E.resolve(o);return E.promise},_require:function(e,t){var n=myEval("{"+e.innerHTML+"}"),r=[],o=[],i=new Deferred,a=t&&t.contextRequire||require;for(var s in n)r.push(s),o.push(n[s]);return a(o,function(){for(var e=0;e<r.length;e++)dlang.setObject(r[e],arguments[e]);i.resolve(arguments)}),i.promise},_scanAmd:function(e,t){var n=new Deferred,r=n.promise;n.resolve(!0);var o=this;return query("script[type='dojo/require']",e).forEach(function(e){r=r.then(function(){return o._require(e,t)}),e.parentNode.removeChild(e)}),r},parse:function(e,t){!e||"string"==typeof e||"nodeType"in e||(t=e,e=t.rootNode);var n=e?dom.byId(e):dwindow.body();t=t||{};var r=t.template?{template:!0}:{},o=[],i=this,a=this._scanAmd(n,t).then(function(){return i.scan(n,t)}).then(function(e){return i._instantiate(e,r,t,!0)}).then(function(e){return o=o.concat(e)}).otherwise(function(e){throw console.error("dojo/parser::parse() error",e),e});return dlang.mixin(o,a),o}};return dojo.parser=parser,config.parseOnLoad&&ready(100,parser,"parse"),parser});//# sourceMappingURL=parser.js.map