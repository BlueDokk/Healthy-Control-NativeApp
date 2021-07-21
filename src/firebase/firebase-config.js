import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCNrK4BZLOuPkMIlXL-pW9rJTpxfK1f_7I",
    authDomain: "healthy-control-native.firebaseapp.com",
    projectId: "healthy-control-native",
    storageBucket: "healthy-control-native.appspot.com",
    messagingSenderId: "666048200087",
    appId: "1:666048200087:web:efa309e49c2ea4361f98d2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {
      db,
      firebase
  }