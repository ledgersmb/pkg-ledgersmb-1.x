//>>built
define("dojo/_base/loader",["./kernel","../has","require","module","../json","./lang","./array"],function(dojo,has,require,thisModule,json,lang,array){var makeErrorToken=function(e){return{src:thisModule.id,id:e}},slashName=function(e){return e.replace(/\./g,"/")},buildDetectRe=/\/\/>>built/,dojoRequireCallbacks=[],dojoRequireModuleStack=[],dojoRequirePlugin=function(e,t,n){dojoRequireCallbacks.push(n),array.forEach(e.split(","),function(e){var n=getModule(e,t.module);dojoRequireModuleStack.push(n),injectModule(n)}),checkDojoRequirePlugin()},checkDojoRequirePlugin=function(){var e,t;for(t in modules)if(e=modules[t],void 0===e.noReqPluginCheck&&(e.noReqPluginCheck=/loadInit\!/.test(t)||/require\!/.test(t)?1:0),!e.executed&&!e.noReqPluginCheck&&e.injected==requested)return;guardCheckComplete(function(){var e=dojoRequireCallbacks;dojoRequireCallbacks=[],array.forEach(e,function(e){e(1)})})},dojoLoadInitPlugin=function(mid,require,loaded){require([mid],function(bundle){require(bundle.names,function(){for(var scopeText="",args=[],i=0;i<arguments.length;i++)scopeText+="var "+bundle.names[i]+"= arguments["+i+"]; ",args.push(arguments[i]);eval(scopeText);var callingModule=require.module,requireList=[],i18nDeps,syncLoaderApi={provide:function(e){e=slashName(e);var t=getModule(e,callingModule);t!==callingModule&&setArrived(t)},require:function(e,t){e=slashName(e),t&&(getModule(e,callingModule).result=nonmodule),requireList.push(e)},requireLocalization:function(e,t,n){i18nDeps||(i18nDeps=["dojo/i18n"]),n=(n||dojo.locale).toLowerCase(),e=slashName(e)+"/nls/"+(/root/i.test(n)?"":n+"/")+slashName(t),getModule(e,callingModule).isXd&&i18nDeps.push("dojo/i18n!"+e)},loadInit:function(e){e()}},hold={},p;try{for(p in syncLoaderApi)hold[p]=dojo[p],dojo[p]=syncLoaderApi[p];bundle.def.apply(null,args)}catch(e){signal("error",[makeErrorToken("failedDojoLoadInit"),e])}finally{for(p in syncLoaderApi)dojo[p]=hold[p]}i18nDeps&&(requireList=requireList.concat(i18nDeps)),requireList.length?dojoRequirePlugin(requireList.join(","),require,loaded):loaded()})})},extractApplication=function(e,t,n){var r,o=/\(|\)/g,i=1;for(o.lastIndex=t;(r=o.exec(e))&&(")"==r[0]?i-=1:i+=1,0!=i););if(0!=i)throw"unmatched paren around character "+o.lastIndex+" in: "+e;return[dojo.trim(e.substring(n,o.lastIndex))+";\n",o.lastIndex]},removeCommentRe=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm,syncLoaderApiRe=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/gm,amdLoaderApiRe=/(^|\s)(require|define)\s*\(/m,extractLegacyApiApplications=function(e,t){var n,r,o,i,a=[],s=[],c=[];for(t=t||e.replace(removeCommentRe,function(e){return syncLoaderApiRe.lastIndex=amdLoaderApiRe.lastIndex=0,syncLoaderApiRe.test(e)||amdLoaderApiRe.test(e)?"":e});n=syncLoaderApiRe.exec(t);)r=syncLoaderApiRe.lastIndex,o=r-n[0].length,i=extractApplication(t,r,o),"loadInit"==n[2]?a.push(i[0]):s.push(i[0]),syncLoaderApiRe.lastIndex=i[1];return c=a.concat(s),c.length||!amdLoaderApiRe.test(t)?[e.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),c.join(""),c]:0},transformToAmd=function(e,t){var n,r,o=[],i=[];if(buildDetectRe.test(t)||!(n=extractLegacyApiApplications(t)))return 0;r=e.mid+"-*loadInit";for(var a in getModule("dojo",e).result.scopeMap)o.push(a),i.push('"'+a+'"');return"// xdomain rewrite of "+e.mid+"\ndefine('"+r+"',{\n	names:"+json.stringify(o)+",\n	def:function("+o.join(",")+"){"+n[1]+"}});\n\ndefine("+json.stringify(o.concat(["dojo/loadInit!"+r]))+", function("+o.join(",")+"){\n"+n[0]+"});"},loaderVars=require.initSyncLoader(dojoRequirePlugin,checkDojoRequirePlugin,transformToAmd),sync=loaderVars.sync,requested=loaderVars.requested,arrived=loaderVars.arrived,nonmodule=loaderVars.nonmodule,executing=loaderVars.executing,executed=loaderVars.executed,syncExecStack=loaderVars.syncExecStack,modules=loaderVars.modules,execQ=loaderVars.execQ,getModule=loaderVars.getModule,injectModule=loaderVars.injectModule,setArrived=loaderVars.setArrived,signal=loaderVars.signal,finishExec=loaderVars.finishExec,execModule=loaderVars.execModule,getLegacyMode=loaderVars.getLegacyMode,guardCheckComplete=loaderVars.guardCheckComplete;return dojoRequirePlugin=loaderVars.dojoRequirePlugin,dojo.provide=function(e){var t=syncExecStack[0],n=lang.mixin(getModule(slashName(e),require.module),{executed:executing,result:lang.getObject(e,!0)});return setArrived(n),t&&(t.provides||(t.provides=[])).push(function(){n.result=lang.getObject(e),delete n.provides,n.executed!==executed&&finishExec(n)}),n.result},has.add("config-publishRequireResult",1,0,0),dojo.require=function(e,t){function n(e,t){var n=getModule(slashName(e),require.module);if(syncExecStack.length&&syncExecStack[0].finish)return void syncExecStack[0].finish.push(e);if(n.executed)return n.result;t&&(n.result=nonmodule);var r=getLegacyMode();return injectModule(n),r=getLegacyMode(),n.executed!==executed&&n.injected===arrived&&loaderVars.guardCheckComplete(function(){execModule(n)}),n.executed?n.result:void(r==sync?n.cjs?execQ.unshift(n):syncExecStack.length&&(syncExecStack[0].finish=[e]):execQ.push(n))}var r=n(e,t);return has("config-publishRequireResult")&&!lang.exists(e)&&void 0!==r&&lang.setObject(e,r),r},dojo.loadInit=function(e){e()},dojo.registerModulePath=function(e,t){var n={};n[e.replace(/\./g,"/")]=t,require({paths:n})},dojo.platformRequire=function(e){for(var t,n=(e.common||[]).concat(e[dojo._name]||e["default"]||[]);n.length;)lang.isArray(t=n.shift())?dojo.require.apply(dojo,t):dojo.require(t)},dojo.requireIf=dojo.requireAfterIf=function(e,t,n){e&&dojo.require(t,n)},dojo.requireLocalization=function(e,t,n){require(["../i18n"],function(r){r.getLocalization(e,t,n)})},{extractLegacyApiApplications:extractLegacyApiApplications,require:dojoRequirePlugin,loadInit:dojoLoadInitPlugin}});//# sourceMappingURL=loader.js.map