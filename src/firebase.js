import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4U6IQmohquzHrRCfDV2eJhvwAw_xlOM",
  authDomain: "challenge-cfcc3.firebaseapp.com",
  databaseURL: "https://challenge-cfcc3.firebaseio.com",
  projectId: "challenge-cfcc3",
  storageBucket: "challenge-cfcc3.appspot.com",
  messagingSenderId: "81328407112",
  appId: "1:81328407112:web:fb72900332e6042c5f8e7d",
  measurementId: "G-JGXC8QDTQC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };