import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDcuFDdS9vytugkUvHvX3icW2Fo4ZlrwN4",
  authDomain: "flutter-chat-app-v1-fd9de.firebaseapp.com",
  projectId: "flutter-chat-app-v1-fd9de",
  storageBucket: "flutter-chat-app-v1-fd9de.appspot.com",
  messagingSenderId: "963484424213",
  appId: "1:963484424213:web:3c7e70fdd7fc24d25c161c",
  measurementId: "G-WLLSLJ99F3",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { auth, db };
