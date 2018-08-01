//>>built
define("dijit/_editor/plugins/LinkDialog",["require","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/query","dojo/string","../_Plugin","../../form/DropDownButton","../range"],function(e,t,a,r,i,d,o,n,l,s,m,f){var u=t("dijit._editor.plugins.LinkDialog",s,{buttonClass:m,useDefaultCommand:!1,urlRegExp:"((https?|ftps?|file)\\://|./|../|/|)(/[a-zA-Z]{1,1}:/|)(((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)*(?:[a-zA-Z](?:[-\\da-zA-Z]{0,80}[\\da-zA-Z])?)\\.?)|(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])|(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]|(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]|(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])|0[xX]0*[\\da-fA-F]{1,8}|([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}|([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])))(\\:\\d+)?(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]{0,}(?:\\?[^?#\\s/]*)?(?:#.*)?)?)?",emailRegExp:"<?(mailto\\:)([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+@((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)|localhost|^[^-][a-zA-Z0-9_-]*>?",htmlTemplate:'<a href="${urlInput}" _djrealurl="${urlInput}" target="${targetSelect}">${textInput}</a>',tag:"a",_hostRxp:/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,_userAtRxp:/^([!#-'*+\-\/-9=?A-Z^-~]+[.])*[!#-'*+\-\/-9=?A-Z^-~]+@/i,linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='true' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_targetSelect'>${target}</label>","</td><td>","<select id='${id}_targetSelect' name='targetSelect' data-dojo-type='dijit.form.Select'>","<option selected='selected' value='_self'>${currentWindow}</option>","<option value='_blank'>${newWindow}</option>","<option value='_top'>${topWindow}</option>","<option value='_parent'>${parentWindow}</option>","</select>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),_initButton:function(){this.inherited(arguments),this.button.loadDropDown=i.hitch(this,"_loadDropDown"),this._connectTagEvents()},_loadDropDown:function(t){e(["dojo/i18n","../../TooltipDialog","../../registry","../../form/Button","../../form/Select","../../form/ValidationTextBox","dojo/i18n!../../nls/common","dojo/i18n!../nls/LinkDialog"],i.hitch(this,function(e,a,o){var n=this;this.tag="insertImage"==this.command?"img":"a";var s=i.delegate(e.getLocalization("dijit","common",this.lang),e.getLocalization("dijit._editor","LinkDialog",this.lang)),m=this.dropDown=this.button.dropDown=new a({title:s[this.command+"Title"],ownerDocument:this.editor.ownerDocument,dir:this.editor.dir,execute:i.hitch(this,"setValue"),onOpen:function(){n._onOpenDialog(),a.prototype.onOpen.apply(this,arguments)},onCancel:function(){setTimeout(i.hitch(n,"_onCloseDialog"),0)}});s.urlRegExp=this.urlRegExp,s.id=o.getUniqueId(this.editor.id),this._uniqueId=s.id,this._setContent(m.title+"<div style='border-bottom: 1px black solid;padding-bottom:2pt;margin-bottom:4pt'></div>"+l.substitute(this.linkDialogTemplate,s)),m.startup(),this._urlInput=o.byId(this._uniqueId+"_urlInput"),this._textInput=o.byId(this._uniqueId+"_textInput"),this._setButton=o.byId(this._uniqueId+"_setButton"),this.own(o.byId(this._uniqueId+"_cancelButton").on("click",i.hitch(this.dropDown,"onCancel"))),this._urlInput&&this.own(this._urlInput.on("change",i.hitch(this,"_checkAndFixInput"))),this._textInput&&this.own(this._textInput.on("change",i.hitch(this,"_checkAndFixInput"))),this._urlRegExp=new RegExp("^"+this.urlRegExp+"$","i"),this._emailRegExp=new RegExp("^"+this.emailRegExp+"$","i"),this._urlInput.isValid=i.hitch(this,function(){var e=this._urlInput.get("value");return this._urlRegExp.test(e)||this._emailRegExp.test(e)}),this.own(d(m.domNode,"keydown",i.hitch(this,i.hitch(this,function(e){!e||e.keyCode!=r.ENTER||e.shiftKey||e.metaKey||e.ctrlKey||e.altKey||this._setButton.get("disabled")||(m.onExecute(),m.execute(m.get("value")))})))),t()}))},_checkAndFixInput:function(){var e=this,t=this._urlInput.get("value"),a=function(t){var a=!1,r=!1;t&&t.length>1&&(t=i.trim(t),0!==t.indexOf("mailto:")&&(t.indexOf("/")>0?-1===t.indexOf("://")&&"/"!==t.charAt(0)&&t.indexOf("./")&&0!==t.indexOf("../")&&e._hostRxp.test(t)&&(a=!0):e._userAtRxp.test(t)&&(r=!0))),a&&e._urlInput.set("value","http://"+t),r&&e._urlInput.set("value","mailto:"+t),e._setButton.set("disabled",!e._isValid())};this._delayedCheck&&(clearTimeout(this._delayedCheck),this._delayedCheck=null),this._delayedCheck=setTimeout(function(){a(t)},250)},_connectTagEvents:function(){this.editor.onLoadDeferred.then(i.hitch(this,function(){this.own(d(this.editor.editNode,"dblclick",i.hitch(this,"_onDblClick")))}))},_isValid:function(){return this._urlInput.isValid()&&this._textInput.isValid()},_setContent:function(e){this.dropDown.set({parserScope:"dojo",content:e})},_checkValues:function(e){return e&&e.urlInput&&(e.urlInput=e.urlInput.replace(/"/g,"&quot;")),e},setValue:function(e){if(this._onCloseDialog(),o("ie")<9){var t=f.getSelection(this.editor.window),r=t.getRangeAt(0),i=r.endContainer;3===i.nodeType&&(i=i.parentNode),i&&i.nodeName&&i.nodeName.toLowerCase()!==this.tag&&(i=this.editor.selection.getSelectedElement(this.tag)),i&&i.nodeName&&i.nodeName.toLowerCase()===this.tag&&this.editor.queryCommandEnabled("unlink")&&(this.editor.selection.selectElementChildren(i),this.editor.execCommand("unlink"))}e=this._checkValues(e),this.editor.execCommand("inserthtml",l.substitute(this.htmlTemplate,e)),n("a",this.editor.document).forEach(function(e){e.innerHTML||a.has(e,"name")||e.parentNode.removeChild(e)},this)},_onCloseDialog:function(){this.editor.focused&&this.editor.focus()},_getCurrentValues:function(e){var t,a,r;return e&&e.tagName.toLowerCase()===this.tag?(t=e.getAttribute("_djrealurl")||e.getAttribute("href"),r=e.getAttribute("target")||"_self",a=e.textContent||e.innerText,this.editor.selection.selectElement(e,!0)):a=this.editor.selection.getSelectedText(),{urlInput:t||"",textInput:a||"",targetSelect:r||""}},_onOpenDialog:function(){var e,t,a;if(o("ie")){var r=f.getSelection(this.editor.window);if(r.rangeCount){var i=r.getRangeAt(0);e=i.endContainer,3===e.nodeType&&(e=e.parentNode),e&&e.nodeName&&e.nodeName.toLowerCase()!==this.tag&&(e=this.editor.selection.getSelectedElement(this.tag)),(!e||e.nodeName&&e.nodeName.toLowerCase()!==this.tag)&&(t=this.editor.selection.getAncestorElement(this.tag),t&&t.nodeName&&t.nodeName.toLowerCase()==this.tag?(e=t,this.editor.selection.selectElement(e)):i.startContainer===i.endContainer&&(a=i.startContainer.firstChild,a&&a.nodeName&&a.nodeName.toLowerCase()==this.tag&&(e=a,this.editor.selection.selectElement(e))))}}else e=this.editor.selection.getAncestorElement(this.tag);this.dropDown.reset(),this._setButton.set("disabled",!0),this.dropDown.set("value",this._getCurrentValues(e))},_onDblClick:function(e){if(e&&e.target){var t=e.target,r=t.tagName?t.tagName.toLowerCase():"";if(r===this.tag&&a.get(t,"href")){var i=this.editor;this.editor.selection.selectElement(t),i.onDisplayChanged(),i._updateTimer&&(i._updateTimer.remove(),delete i._updateTimer),i.onNormalizedDisplayChanged();var d=this.button;setTimeout(function(){d.set("disabled",!1),d.loadAndOpenDropDown().then(function(){d.dropDown.focus&&d.dropDown.focus()})},10)}}}}),y=t("dijit._editor.plugins.ImgLinkDialog",[u],{linkDialogTemplate:["<table role='presentation'><tr><td>","<label for='${id}_urlInput'>${url}</label>","</td><td>","<input dojoType='dijit.form.ValidationTextBox' regExp='${urlRegExp}' required='true' id='${id}_urlInput' name='urlInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","<label for='${id}_textInput'>${text}</label>","</td><td>","<input data-dojo-type='dijit.form.ValidationTextBox' required='false' id='${id}_textInput' name='textInput' data-dojo-props='intermediateChanges:true'/>","</td></tr><tr><td>","</td><td>","</td></tr><tr><td colspan='2'>","<button data-dojo-type='dijit.form.Button' type='submit' id='${id}_setButton'>${set}</button>","<button data-dojo-type='dijit.form.Button' type='button' id='${id}_cancelButton'>${buttonCancel}</button>","</td></tr></table>"].join(""),htmlTemplate:'<img src="${urlInput}" _djrealurl="${urlInput}" alt="${textInput}" />',tag:"img",_getCurrentValues:function(e){var t,a;return e&&e.tagName.toLowerCase()===this.tag?(t=e.getAttribute("_djrealurl")||e.getAttribute("src"),a=e.getAttribute("alt"),this.editor.selection.selectElement(e,!0)):a=this.editor.selection.getSelectedText(),{urlInput:t||"",textInput:a||""}},_isValid:function(){return this._urlInput.isValid()},_connectTagEvents:function(){this.inherited(arguments),this.editor.onLoadDeferred.then(i.hitch(this,function(){this.own(d(this.editor.editNode,"mousedown",i.hitch(this,"_selectTag")))}))},_selectTag:function(e){if(e&&e.target){var t=e.target,a=t.tagName?t.tagName.toLowerCase():"";a===this.tag&&this.editor.selection.selectElement(t)}},_checkValues:function(e){return e&&e.urlInput&&(e.urlInput=e.urlInput.replace(/"/g,"&quot;")),e&&e.textInput&&(e.textInput=e.textInput.replace(/"/g,"&quot;")),e},_onDblClick:function(e){if(e&&e.target){var t=e.target,r=t.tagName?t.tagName.toLowerCase():"";if(r===this.tag&&a.get(t,"src")){var i=this.editor;this.editor.selection.selectElement(t),i.onDisplayChanged(),i._updateTimer&&(i._updateTimer.remove(),delete i._updateTimer),i.onNormalizedDisplayChanged();var d=this.button;setTimeout(function(){d.set("disabled",!1),d.loadAndOpenDropDown().then(function(){d.dropDown.focus&&d.dropDown.focus()})},10)}}}});return s.registry.createLink=function(){return new u({command:"createLink"})},s.registry.insertImage=function(){return new y({command:"insertImage"})},u.ImgLinkDialog=y,u});//# sourceMappingURL=LinkDialog.js.map