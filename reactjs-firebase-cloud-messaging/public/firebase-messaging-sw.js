
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    console.log("ok")
    // .then(function(registration) {
    //   console.log('Registration successful, scope is:', registration.scope);
    // }).catch(function(err) {
    //   console.log('Service worker registration failed, error:', err);
    // });
  }

importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload){
  console.log(payload.data)
  const title = "hello world";
  const options = {
      body: 'Background Message body.' // payload.data.status
  }
  return self.registration.showNotification(title, options);
})
