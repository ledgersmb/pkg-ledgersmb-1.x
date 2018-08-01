//>>built
require({cache:{"url:lsmb/users/templates/PasswordChange.html":'<div>\n  <div id="pwtitle" style="width:100%" class="listheading"></div>\n  <div id="pwfeedback" data-dojo-type="dijit/layout/ContentPane" data-dojo-attach-point="feedback">&#xA0;</div>\n  <div data-dojo-type="lsmb/TabularForm" id="pwcontainer" data-dojo-props="cols:1">\n    <div class="input-line">\n      <input id="old-pw" data-dojo-type="dijit/form/TextBox" type="password" data-dojo-attach-point="oldpw" />\n    </div>\n    <div class="input-line">\n      <input id="new-pw" data-dojo-type="dijit/form/TextBox" type="password" data-dojo-attach-point="newpw" />\n    </div>\n    <div class="input-line" id="pw-strength-container">\n        <div id="pw-strength" data-dojo-type="dijit/layout/ContentPane">0</div>\n    </div>\n    <div class="input-line">\n      <input id="verify-pw" data-dojo-type="dijit/form/TextBox" type="password" data-dojo-attach-point="verified"/>\n    </div>\n    <div class="input-line">\n      <button data-dojo-type="dijit/form/Button" id="pw-change" data-dojo-attach-point="submitbutton"></button>\n    </div>\n    <div class="input-line"></div>\n  </div>\n</div>\n'}}),define("lsmb/users/ChangePassword",["lsmb/TabularForm","dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/layout/ContentPane","dijit/registry","dojo/on","dijit/form/TextBox","dijit/form/Button","dojo/text!./templates/PasswordChange.html","dojo/request","dijit/_Container"],function(e,t,a,i,r,o,d,n,l,s,m,u){return t("lsmb/users/ChangePassword",[a,i,r],{templateString:m,_lstrings:{title:"Change Password","old password":"Old Password","new password":"New password",verify:"Verify",change:"Change Password","no-oldpw":"No Old Password",strength:"Strength"},lstrings:{},text:function(e){return void 0===this.lstrings[e]?e:this.lstrings[e]},startup:function(){for(str in this._lstrings)this.lstrings[str]||(this.lstrings[str]=this._lstrings[str]);document.getElementById("pwtitle").innerHTML=this.lstrings.title,I=this,n(this.newpw,"keypress",function(){I.setStrengthClass()}),d.byId("old-pw").set("title",this.text("old password")),d.byId("new-pw").set("title",this.text("new password")),d.byId("verify-pw").set("title",this.text("verify")),d.byId("pw-change").set("innerHTML",this.text("change")),d.byId("pw-strength").set("title",this.text("strength")),n(this.submitbutton,"click",function(){I.submit_form()}),this.inherited(arguments)},scorePassword:function(){var e=d.byId("new-pw").get("value"),t=0;if(!e)return t;for(var a=new Object,i=0;i<e.length;i++)a[e[i]]=(a[e[i]]||0)+1,t+=5/a[e[i]];var r={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)};variationCount=0;for(var o in r)variationCount+=r[o]===!0?1:0;return t+=10*(variationCount-1),parseInt(t)},setStrengthClass:function(){var e=this.scorePassword(),t="";e>80?t="strong":e>60?t="good":e>=30&&(t="weak");var a=d.byId("pw-strength");a.set("class",t),a.set("innerHTML",e)},submit_form:function(){var e=this,t=u,a=(document.getElementById("username").value,e.oldpw.get("value")),i=e.newpw.get("value"),r=e.verified.get("value");return""===a||""===i?e.setFeedback(0,e.text("Password Required")):i!==r?e.setFeedback(0,e.text("Confirmation did not match")):void t("user.pl",{data:{action:"change_password",old_password:a,new_password:i,confirm_password:r},method:"POST"}).then(function(){e.setFeedback(1,e.text("Password Changed"))}).otherwise(function(t){200!=t.response.status&&("500"!=t.response.status?e.setFeedback(0,e.text("Bad username/Password")):e.setFeedback(0,e.text("Error changing password.")))})},setFeedback:function(e,t){e?this.feedback.set("class","success"):this.feedback.set("class","failure"),this.feedback.set("innerHTML",t)}})});//# sourceMappingURL=ChangePassword.js.map