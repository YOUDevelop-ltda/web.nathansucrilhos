// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs_gvGfmpmU3FMQsoCL5L3S4xc262x2Hc",
  authDomain: "natan-sucrilhos.firebaseapp.com",
  databaseURL: "https://natan-sucrilhos-default-rtdb.firebaseio.com",
  projectId: "natan-sucrilhos",
  storageBucket: "natan-sucrilhos.appspot.com",
  messagingSenderId: "859835795200",
  appId: "1:859835795200:web:1eac1a876fbbc3d1cc15e5",
  measurementId: "G-C26X1VBXFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
