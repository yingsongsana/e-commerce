import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCkYEAEPHYbTwFSWsqjGWlaIdoZHavW_d8",
  authDomain: "crwn-db-cd2c3.firebaseapp.com",
  projectId: "crwn-db-cd2c3",
  storageBucket: "crwn-db-cd2c3.appspot.com",
  messagingSenderId: "942892398755",
  appId: "1:942892398755:web:51265dcb7db117e75ba716",
  measurementId: "G-RE2EJ11B9R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;