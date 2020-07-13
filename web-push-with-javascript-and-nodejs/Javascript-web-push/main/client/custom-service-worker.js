console.log("custom service worker loaded.")

self.addEventListener('push', e=>{
    const data = e.data.json();
    console.log('Push received...'+data);
    
    self.registration.showNotification(data.title, {
        body:data.body,
        icon:'http://image.ibb.co/frYOFd/tmlogo.png'
    })
});



