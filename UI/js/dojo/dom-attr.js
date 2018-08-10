//>>built
define("dojo/dom-attr",["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(e,t,n,r,o,i){function a(e,t){var n=e.getAttributeNode&&e.getAttributeNode(t);return!!n&&n.specified}var s={innerHTML:1,textContent:1,className:1,htmlFor:t("ie"),value:1},c={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};e.has=function(e,t){var n=t.toLowerCase();return s[i.names[n]||t]||a(r.byId(e),c[n]||t)},e.get=function(e,t){e=r.byId(e);var o=t.toLowerCase(),u=i.names[o]||t,d=s[u],l=e[u];if(d&&"undefined"!=typeof l)return l;if("textContent"==u)return i.get(e,u);if("href"!=u&&("boolean"==typeof l||n.isFunction(l)))return l;var f=c[o]||t;return a(e,f)?e.getAttribute(f):null},e.set=function(t,a,u){if(t=r.byId(t),2==arguments.length){for(var d in a)e.set(t,d,a[d]);return t}var l=a.toLowerCase(),f=i.names[l]||a,h=s[f];return"style"==f&&"string"!=typeof u?(o.set(t,u),t):h||"boolean"==typeof u||n.isFunction(u)?i.set(t,a,u):(t.setAttribute(c[l]||a,u),t)},e.remove=function(e,t){r.byId(e).removeAttribute(c[t.toLowerCase()]||t)},e.getNodeProp=function(e,t){e=r.byId(e);var n=t.toLowerCase(),o=i.names[n]||t;if(o in e&&"href"!=o)return e[o];var s=c[n]||t;return a(e,s)?e.getAttribute(s):null}});//# sourceMappingURL=dom-attr.js.map