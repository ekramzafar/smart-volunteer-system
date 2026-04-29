// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Agddhfhjf",
  authDomain: "smart-volunteer-system-62c51.firebaseapp.com",
  projectId: "smart-volunteer-system-62c51",
  storageBucket: "smart-volunteer-system-62c51.firebasestorage.app",
  messagingSenderId: "3fhhfjft",
  appId: "1:3497875yuy166:web:76117fghhtjfjtjc8f12c6b9ab3d7",
  measurementId: "G-MCQGgfdhdfX13Y1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ THIS IS IMPORTANT
export const db = getFirestore(app);
