$(document).ready(function(){function m(b){var a=WiziCore_AppContext.getInstance().inputParameters(),c=function(b){var c=b[0],b=b[1];a[c]!=void 0?(a[c]instanceof Array||(a[c]=[a[c]]),a[c].push(b)):a[c]=b},e=b[0],d=b[1];if(d==void 0)c([e]);else if(e!=""&&d!="")try{if(e=="inputParams"&&(d=unescape(d),d=JSON.parse(d),typeof d=="string"&&n(d,m)),typeof d=="object")for(var h in d)c([h,d[h]]);else c(b)}catch(i){acDebugger.systemLog("setInputParameters error",i),c([e,d])}}function n(b,a){for(var c=b.split("&"),
e=0,d=c.length;e<d;e++){var h=c[e].split("=");if(a(h)===!0)break}}function s(){var b=null;return b=AC.Core.cookie().cookie("swirlSession")}function o(b){var a=WiziCore_Helper.getPrintData();if(a&&typeof a.instance=="object"&&typeof a.instance!="string")b.instance=a.instance;WiziCore_AppContext.getInstance().forms()._populateFormResult(b,t)}function p(b){function a(a,c,g){if(a.sessionId!=void 0)try{l!=null&&l.stop();var f=h;g==f&&(f=c!=void 0&&c!=""?c:f);b.loadFullForm(a.sessionId,f,e,function(a){a.error==
!1?o(a.object.result):(WiziCore_Helper.enableInterface(),a=AC.Core.lang().tr("live_load_error"),j(AC.Core.lang().tr("live_create_sess"),a,18))},d)}catch(i){acDebugger.systemLog1("onSessionFullLogin :: error",i)}else WiziCore_Helper.enableInterface(),a=AC.Core.lang().tr("live_create_sess_error"),j(AC.Core.lang().tr("live_create_sess"),a,19)}var c=s(),e=k("instanceId"),d=k("roleId"),h=window.WiziFormId?window.WiziFormId:k("formId"),g=WiziCore_AppContext.getInstance(),f=WiziCore_Helper.getPrintData();
$(b).bind(WiziCore_Api_SessionRequester.onLiveLogin,function(b,c,e,d){a(c,e,d)});if(window.formObject)typeof window.formObject.formResult=="string"?(c=window.formObject.formResult,c=WiziCore_AppContext.getInstance().config().localAppsPath()+c+".json",$.ajax({url:c,dataType:"json",success:function(a){window.formObject.formResult=a;g.widgetScripts().getScripts(window.formObject.formResult.widgetScripts,function(){i({error:!1,object:{result:window.formObject}})},!1)},error:function(){i({error:!0})}})):
g.widgetScripts().getScripts(window.formObject.formResult.widgetScripts,function(){i({error:!1,object:{result:window.formObject}})},!1);else{if(f&&typeof f.instanceId=="string")e=f.instanceId;c==void 0||c==null?q(h,e,d):b.loginAndLoadFormWithSession(c,h,e,function(a){a.error?q(h,e,d):i(a)},d)}}function q(b,a,c){g.loginAndLoadForm(null,null,b,a,function(a){i(a)},c)}function i(b){var a=b.object.result;b.error?(f.empty(),a=AC.Core.lang().tr("live_create_sess_error"),a+=b.object.message!=void 0?"<br>"+
b.object.message:"",j(AC.Core.lang().tr("live_create_sess"),a,20)):(g.populateLoginResult(a.loginResult),o(a.formResult))}function k(b){for(var a=window.location.search.substring(1).split("&"),c=null,e=0,d=a.length;e<d;e++){var f=a[e].split("=");f[0]==b&&f.length>1&&(c=f[1])}return c}function t(b,a,c,e){b?(f.empty(),j(AC.Core.lang().tr("live_load_inst"),a,17)):(window.swirlDebugger!=void 0&&typeof window.swirlDebugger.openMode=="function"&&swirlDebugger.openMode(WiziCore_Api_Debugger.MODE_USER_OPEN),
f.empty(),b={session:g,pageId:k("pageId")},a=new WiziCore_UI_FormRuntime(WiziCore_UI_FormRuntime.LIVE_MODE),a.show(c,e,f,b),WiziCore_Helper.enableInterface(),l=a)}function j(b,a,c){b=WiziCore_Helper.showError(b,a,c);$(b).one(WiziCore_UI_MessageBoxWidget.onDialogClose,function(a,b){switch(b){case WiziCore_UI_MessageBoxWidget.IDOK:setTimeout(function(){},200)}});WiziCore_Helper.callPrint()}WiziCore_OnErrorEvent.initOnError();n(window.location.search.substring(1),m);AC.Core.lang(AC.Lng.ENGLISH).lang(SwirlLangObjectEn);
var r=WiziCore_AppContext.getInstance(),g=r.getSession();r.widgetScripts().initList();var f=$("#wiziLiveMode");window.PhoneGap?document.addEventListener("deviceready",function(){p(g)},!1):p(g);var l=null});
