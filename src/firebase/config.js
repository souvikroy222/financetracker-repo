import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkfK96h0PX7dCcF98DC0t1Uc3GK2upSis",
    authDomain: "mymoney-49feb.firebaseapp.com",
    projectId: "mymoney-49feb",
    storageBucket: "mymoney-49feb.appspot.com",
    messagingSenderId: "745867905978",
    appId: "1:745867905978:web:098b025d64b190b34deb83"
  };

 const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
 const auth = getAuth();

 export{db,auth}
