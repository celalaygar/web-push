const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.json());

// ./node_modules/.bin/web-push generate-vapid-keys
const publicVapidKey = "BO5S3m8VxV7JmPDzMxkZ1PPoaKRkWm4Zu2H1zzNJE7YVAqJzGlb-X6tD2vhwC469s8HD1OsY2hLd1GSfVSf7ETY";
const privateVapidKey = "JKIiBU_59DOUYgtblAaKlHqX160QPkhtA1HbJ-gf53U";

const content = JSON.stringify({ title: "Push test Example", body: 'Notified by Hacı Celal' });

const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys)

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  publicVapidKey,
  privateVapidKey
);
let globalSub = [];

app.post('/subscribe', (req, res) => {
  const extrainfo = req.body.extrainfo;
  const subscription = req.body.subscription;
  globalSub.push(subscription);

  console.log("subscription : " + JSON.stringify(subscription))
  console.log("extrainfo : " + JSON.stringify(extrainfo))
  res.status(201).json({});
  const payload = JSON.stringify({ title: "Push test", body: 'Notified by Celala' });
  webpush.sendNotification(subscription, content).catch(err => console.log(err))
});

app.get("/send", home)
app.get('/cc', (req, res) => {
  res.send('Hello World! 111')
})
function home(req, res, next) {

  console.log(globalSub[0]);

  const payload = JSON.stringify({ title: "Testttt", body: 'Notified by Celala' });
  webpush.sendNotification(globalSub[0], payload).catch(err => console.log(err))
  res.send('Hello World! 111c')
}


const port = 5000;
app.listen(port, () => console.log("Server started on port : ${port}"))



// // VAPID keys should only be generated only once.
// const vapidKeys = webpush.generateVAPIDKeys();

// webpush.setGCMAPIKey('<Your GCM API Key Here>');
// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');