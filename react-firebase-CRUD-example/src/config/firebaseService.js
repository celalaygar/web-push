
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkpEpo5F0_V37IMZ_iLKG4y7e-YLVbofY",
    authDomain: "deneme3-3de5c.firebaseapp.com",
    databaseURL: "https://deneme3-3de5c.firebaseio.com",
    projectId: "deneme3-3de5c",
    storageBucket: "deneme3-3de5c.appspot.com",
    messagingSenderId: "1071847383078",
    appId: "1:1071847383078:web:ed2c619b209f7f257e86e7"
  };
class FirebaseService {


    constructor(){
        this.init = this.init.bind(this);
    }
    
    init(){
        firebase.initializeApp(firebaseConfig);
    }

}
export default new FirebaseService();