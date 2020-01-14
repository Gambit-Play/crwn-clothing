import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQKq9Jy_GB5YS3lT20JRFypxzRkabpXk0",
    authDomain: "crwn-db-e586b.firebaseapp.com",
    databaseURL: "https://crwn-db-e586b.firebaseio.com",
    projectId: "crwn-db-e586b",
    storageBucket: "crwn-db-e586b.appspot.com",
    messagingSenderId: "473663577580",
    appId: "1:473663577580:web:744a466e4b89107cccf4c9",
    measurementId: "G-7E2T68SVDH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;