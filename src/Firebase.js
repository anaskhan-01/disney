import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBb3xZx5Im6CGyAAqV7esoPSUoVUVi_qWw",
  authDomain: "disney-clone-e4e8c.firebaseapp.com",
  projectId: "disney-clone-e4e8c",
  storageBucket: "disney-clone-e4e8c.appspot.com",
  messagingSenderId: "1097060322575",
  appId: "1:1097060322575:web:5eb6b150cbd078e619827a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};

export default db;