// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3R1vuqq-QZqRzuze87e-XsKaeISIRA8A",
  authDomain: "react-test-1a889.firebaseapp.com",
  projectId: "react-test-1a889",
  storageBucket: "react-test-1a889.firebasestorage.app",
  messagingSenderId: "773029337978",
  appId: "1:773029337978:web:7a699667cd85d06aa954c3",
  measurementId: "G-B8NBX7SEP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize and export auth
export const auth = getAuth(app);