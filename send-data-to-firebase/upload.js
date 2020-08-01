
// type          npm init
// type          npm install --save-dev firestore-export-import

const firestoreService = require("firestore-export-import");
const config = {

    
    apiKey: "AIzaSyAkpEpo5F0_V37IMZ_iLKG4y7e-YLVbofY",
    authDomain: "deneme3-3de5c.firebaseapp.com",
    databaseURL: "https://deneme3-3de5c.firebaseio.com", 
    storageBucket: "deneme3-3de5c.appspot.com",
    messagingSenderId: "1071847383078",
    appId: "1:1071847383078:web:ed2c619b209f7f257e86e7",


    "type": "service_account",
    "project_id": "deneme3-3de5c",
    "private_key_id": "1ecddcd54c7fdf9ff6d8268e196978707ab677d7",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCg8YQY9ckpb2WW\n/5F/nnM551kc/NZ/5AmajueIZx9xOc68RTaBPu6YSSP0PWXbB7rIUjlB6QjIYg+8\nVk5nAR8ujkjIxjvVZXwWT5a4ZZtJ+UrqUh/Sw9t9j8X35P03KJN2j8VDw/O/+n12\np2gytFtTgXM1OrMZB1MpfBLiF6kQa0oeKvWJ/MhWtRt8/w5XosAaoSQEpr9ynsyC\nTeIVW9uz09L7PDtd3ZIV/HkxsljXzVxr3A9qDf+N/1EUgThOa5xszj8MAbQWR9Zt\n6+hcZ0nmcTPe7u0SUIa9xhRdzGIzybQ8eAzp/4dJKtiG2MsFHmqZL7KlUuTSf3Qi\neoiWVEYLAgMBAAECggEAD9HttC5kyafjioYwnSTMGsL85XaM9yFJOGIXrDbGxnBy\nO9tp0iaHeXynBhkK7A7Ec3BxpGLttBS/iznIlyNrFz5xNRsXQpCpM+A65oFGVG0m\nygWsjyElcCAzy3w8z7EzXZIgR9r5GMPclU87VNCZsYml83ODq1AnAorpqEO/IJfj\nSwTm6Wri2MBDE9Up1X9Kkshho9MwEVviK6TEZ9j3+Z02kP+S5dvivqhIMexC7CxG\n30MbztwcFwdLmVyzYfpbr0bQZTjwxLsNO/1XiZcEkSGtAvJH1E0LjdFUeQvPQuT0\njIW6vvDMsPBY2XNN4UGueRktzOmliswO/Rn0MgnrcQKBgQDVSB7DBSob4KY4CGgs\nQ17bm+BqSpConPZ5xgqy4oMXINoyuvX7MRqIxN5dh2gpVn3+X3JVK6h+Gj+PiKgX\nkM+rn4icFVjFZCIArAxCJKE1LwO01LLtfLrsNTIy6yf3s5HYtHrJInZ9nZuksgB8\nzYTzWYmxIUQV+flk8jpK/A4s3wKBgQDBLci5ECgaPDu4nOAYkzodKQmCzJJl0H5M\nPKmM9W9OmuAvitHRpJWM/bQ1fM9bmS90es8tzn6A7hc8odoNUiokFHcBdj/IZn3R\nqZwchjJnXj5HxxptethKs/AQZ5Vh46MYl2WmJafj2Uw15+nlme6Eup2LpU1CjHqL\nIPQg1OygVQKBgFdzkul0HKgBnSYsjEpZ9XMmnwX2PQpmEcosogZnSkkZd16Fuoac\nw7yAvIytENCiXlcG2+KAXD4YlSdNaV8ASaada25Ucmm9fRO5d+1HB7K+7E4hSJyI\nIDzqMwMd2O1/+7VXi2EdeGhZT5BgTELgIjuF4yd19GzuaowxpiVI5KcRAoGBAIY+\ncdmhT60DpKDja5vIXD89cF2UGjxkyg/irBTHzqT6XcbMGoksbbz/5YayCEtoRaEV\nYvo7IJAqZL1+4FAXhC90hUrfyO1TxCW6T0FHRKmuxWsOAuCH2Nz49GACC75t+b4y\nH7J5QpXFQP/I/TLQaP+Vy7vqkKkphFNBAEX8kb/NAoGAWnaCGUPnfeQrwyeXCUND\nDMmimxeFrHTrIy5OK2OyKRJqPeVx8lnB4jomn3d6n28Cfvl+UBdjJ7H8i2UWZ1F/\n9IcoNlf65mDkbFH51JNxxpiW5MmWaNG/1nAz1YiDdoQl036kXuVF5AQJmokPj2TQ\nxYggf7shb+Brd/QcJUc8gq4=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-o6s1p@deneme3-3de5c.iam.gserviceaccount.com",
    "client_id": "100748281609262056243",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-o6s1p%40deneme3-3de5c.iam.gserviceaccount.com"



};
var data = {
    spell: [
        { name: "Ankara ", desc: "Capital City", page: "ank 111"} ,
        { name: "Istanbul", desc: "Biggest City", page: "ist 222" } 
    ]
};
firestoreService.initializeApp(config);
firestoreService.restore(data);
//  firestoreService.restore("data.json");