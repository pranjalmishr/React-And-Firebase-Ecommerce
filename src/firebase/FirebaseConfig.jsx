// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2DNrQSKwwYj-x0pImdoflVcchQfLfm_Q",
  authDomain: "myecom-5c396.firebaseapp.com",
  projectId: "myecom-5c396",
  storageBucket: "myecom-5c396.appspot.com",
  messagingSenderId: "757952476698",
  appId: "1:757952476698:web:b83f827091d402d8b443a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }