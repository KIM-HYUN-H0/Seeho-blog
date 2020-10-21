import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB6LGiEnLvj0YNVfrf3KdKGyAzxWlcUw30",
    authDomain: "seeho-ab0f3.firebaseapp.com",
    databaseURL: "https://seeho-ab0f3.firebaseio.com",
    projectId: "seeho-ab0f3",
    storageBucket: "seeho-ab0f3.appspot.com",
    messagingSenderId: "174205844089",
    appId: "1:174205844089:web:1fbdbed3f09fbb702872a8",
    measurementId: "G-5B2MNL7W3T"
  };

  firebase.initializeApp(config);
  export const db = firebase.firestore();