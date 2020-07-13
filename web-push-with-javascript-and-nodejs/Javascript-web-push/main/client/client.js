const publicVapidKey = "BO5S3m8VxV7JmPDzMxkZ1PPoaKRkWm4Zu2H1zzNJE7YVAqJzGlb-X6tD2vhwC469s8HD1OsY2hLd1GSfVSf7ETY";

if ('serviceWorker' in navigator) {
    send().catch(err => console.error(err));
}


async function send(){
    console.log('Registering service worker');
    // rest request api key
    const register = await navigator.serviceWorker.register('/custom-service-worker.js');
    console.log('Service worker is registired');

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array (publicVapidKey)
    });




    console.log("push registired");
    await fetch('/subscribe',{
      method:'POST',
      body:JSON.stringify({
        extrainfo:"extra",
        subscription: subscription}),
      headers:{ 'content-type': 'application/json' }
    });
    console.log('Push sent..')
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }