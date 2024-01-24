// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsite-naveen.firebaseapp.com",
  projectId: "blogsite-naveen",
  storageBucket: "blogsite-naveen.appspot.com",
  messagingSenderId: "1019731057530",
  appId: "1:1019731057530:web:9855c29149096a3701d4c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);