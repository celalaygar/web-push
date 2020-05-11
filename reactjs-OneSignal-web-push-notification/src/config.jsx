
var OneSignal = null;
if( 'function' === typeof importScripts) {
    importScripts("https://cdn.onesignal.com/sdks/OneSignalSDK.js");
    var OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        appId: "8a2fa55a-cb87-4719-95e1-9ed0bca76275",
      });
    });
 }
 
 export default OneSignal;