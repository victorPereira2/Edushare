import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIDOgn-gdT2HR8CbWwOAnskH3oXAA0wCQ",
  authDomain: "edushare-2024.firebaseapp.com",
  projectId: "edushare-2024",
  storageBucket: "edushare-2024.appspot.com",
  messagingSenderId: "230818567693",
  appId: "1:230818567693:web:1001a75ad9096e47a16744"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };