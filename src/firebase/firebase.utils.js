import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-fJIvXBhWUo4MWzEwWSdt433E8x_3y-g",
    authDomain: "crwn-db-nous.firebaseapp.com",
    databaseURL: "https://crwn-db-nous.firebaseio.com",
    projectId: "crwn-db-nous",
    storageBucket: "crwn-db-nous.appspot.com",
    messagingSenderId: "131574285958",
    appId: "1:131574285958:web:75eb9ccc58ec95aba43307",
    measurementId: "G-P5G8GY0H9B"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
