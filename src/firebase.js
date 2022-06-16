// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBirSiY6_HnqweUgXiOpGj5Ng9k_pQHAPg",
    authDomain: "mydclone.firebaseapp.com",
    projectId: "mydclone",
    storageBucket: "mydclone.appspot.com",
    messagingSenderId: "662438351672",
    appId: "1:662438351672:web:48894a93de02c6182be7cd",
    measurementId: "G-DH6153EHLM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;