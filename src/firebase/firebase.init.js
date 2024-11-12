import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIPRWTIpHXD1MT2egPpXi95EWwtExOtoY",
  authDomain: "simple-firebase-two-bd854.firebaseapp.com",
  projectId: "simple-firebase-two-bd854",
  storageBucket: "simple-firebase-two-bd854.firebasestorage.app",
  messagingSenderId: "471957903284",
  appId: "1:471957903284:web:18d3ce39f26562522244e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const  auth = getAuth(app);
 export default auth;
