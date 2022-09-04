import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAGBeUhrzzT-68kroIN5G62mBqU-b-5so0",
    authDomain: "foodapp-6e162.firebaseapp.com",
    databaseURL: "https://foodapp-6e162-default-rtdb.firebaseio.com",
    projectId: "foodapp-6e162",
    storageBucket: "foodapp-6e162.appspot.com",
    messagingSenderId: "875229452645",
    appId: "1:875229452645:web:13552ebbe293467d7f698c"
  };

const app = getApp.length>0 