import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBNoKQoKt_lvFJbDTCHtc7LZ-3LWHTJVmk",
  authDomain: "own-app-supreme.firebaseapp.com",
  projectId: "own-app-supreme",
  storageBucket: "own-app-supreme.appspot.com",
  messagingSenderId: "67396982370",
  appId: "1:67396982370:web:83f37c56ba011988e2633b"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
