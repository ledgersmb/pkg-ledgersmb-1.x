//>>built
define("dojo/io/script",["../_base/connect","../_base/kernel","../_base/lang","../sniff","../_base/window","../_base/xhr","../dom","../dom-construct","../request/script","../aspect"],function(connect,kernel,lang,has,win,xhr,dom,domConstruct,_script,aspect){kernel.deprecated("dojo/io/script","Use dojo/request/script.","2.0");var script={get:function(e){var a,t=this._makeScriptDeferred(e,function(){a&&a.cancel()}),r=t.ioArgs;return xhr._ioAddQueryToUrl(r),xhr._ioNotifyStart(t),a=_script.get(r.url,{timeout:e.timeout,jsonp:r.jsonp,checkString:e.checkString,ioArgs:r,frameDoc:e.frameDoc,canAttach:function(e){return r.requestId=e.id,r.scriptId=e.scriptId,r.canDelete=e.canDelete,script._canAttach(r)}},!0),aspect.around(a,"isValid",function(e){return function(a){return script._validCheck(t),e.call(this,a)}}),a.then(function(){t.resolve(t)}).otherwise(function(e){t.ioArgs.error=e,t.reject(e)}),t},attach:_script._attach,remove:_script._remove,_makeScriptDeferred:function(e,a){var t=xhr._ioSetArgs(e,a||this._deferredCancel,this._deferredOk,this._deferredError),r=t.ioArgs;return r.id=kernel._scopeName+"IoScript"+this._counter++,r.canDelete=!1,r.jsonp=e.callbackParamName||e.jsonp,r.jsonp&&(r.query=r.query||"",r.query.length>0&&(r.query+="&"),r.query+=r.jsonp+"="+(e.frameDoc?"parent.":"")+kernel._scopeName+".io.script.jsonp_"+r.id+"._jsonpCallback",r.frameDoc=e.frameDoc,r.canDelete=!0,t._jsonpCallback=this._jsonpCallback,this["jsonp_"+r.id]=t),t.addBoth(function(e){r.canDelete&&(e instanceof Error?script["jsonp_"+r.id]._jsonpCallback=function(){delete script["jsonp_"+r.id],r.requestId&&kernel.global[_script._callbacksProperty][r.requestId]()}:script._addDeadScript(r))}),t},_deferredCancel:function(e){e.canceled=!0},_deferredOk:function(e){var a=e.ioArgs;return a.json||a.scriptLoaded||a},_deferredError:function(e){return e},_deadScripts:[],_counter:1,_addDeadScript:function(e){script._deadScripts.push({id:e.id,frameDoc:e.frameDoc}),e.frameDoc=null},_validCheck:function(){var e=script._deadScripts;if(e&&e.length>0){for(var a=0;a<e.length;a++)script.remove(e[a].id,e[a].frameDoc),delete script["jsonp_"+e[a].id],e[a].frameDoc=null;script._deadScripts=[]}return!0},_ioCheck:function(dfd){var ioArgs=dfd.ioArgs;if(ioArgs.json||ioArgs.scriptLoaded&&!ioArgs.args.checkString)return!0;var checkString=ioArgs.args.checkString;return checkString&&eval("typeof("+checkString+") != 'undefined'")},_resHandle:function(e){script._ioCheck(e)?e.callback(e):e.errback(new Error("inconceivable dojo.io.script._resHandle error"))},_canAttach:function(){return!0},_jsonpCallback:function(e){this.ioArgs.json=e,this.ioArgs.requestId&&kernel.global[_script._callbacksProperty][this.ioArgs.requestId](e)}};return lang.setObject("dojo.io.script",script),script});//# sourceMappingURL=script.js.map