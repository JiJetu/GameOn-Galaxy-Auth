// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7MVxIwH92fng25YKM68rcGEeCXAByt3s",
  authDomain: "assignment-9-3b0b4.firebaseapp.com",
  projectId: "assignment-9-3b0b4",
  storageBucket: "assignment-9-3b0b4.appspot.com",
  messagingSenderId: "359045344964",
  appId: "1:359045344964:web:e4414d5bfbaec5afe12391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);