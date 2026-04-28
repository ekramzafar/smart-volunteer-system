// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9C5J18Q78nUqwMiLOsujdD0wR08kFIU",
  authDomain: "smart-volunteer-system-62c51.firebaseapp.com",
  projectId: "smart-volunteer-system-62c51",
  storageBucket: "smart-volunteer-system-62c51.firebasestorage.app",
  messagingSenderId: "349787506166",
  appId: "1:349787506166:web:76117a09c8f12c6b9ab3d7",
  measurementId: "G-MCQGX13Y1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ THIS IS IMPORTANT
export const db = getFirestore(app);