// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGDIvPzTSnwnMycJxWrznQ4MLyuJyP4xY",
  authDomain: "todo-app-fb-7d61e.firebaseapp.com",
  projectId: "todo-app-fb-7d61e",
  storageBucket: "todo-app-fb-7d61e.appspot.com",
  messagingSenderId: "1047049065825",
  appId: "1:1047049065825:web:2f9c596b5e96db35dc2120"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp)

export default db

