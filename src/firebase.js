import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA3WsRVhuY3HUeuYhdKeUu_jRUr24wtdfA",
    authDomain: "login-d8e1a.firebaseapp.com",
    databaseURL: "https://login-d8e1a.firebaseio.com",
    projectId: "login-d8e1a",
    storageBucket: "login-d8e1a.appspot.com",
    messagingSenderId: "218447368631",
    appId: "1:218447368631:web:0c4bd8de1a2a7b569c5832",
    measurementId: "G-GDHPHQ777H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;