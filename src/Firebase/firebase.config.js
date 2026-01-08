// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgwf7u75sg97QW19BqLoGALSW1IlwqOQo",
  authDomain: "dragon-news-portal-fbbf3.firebaseapp.com",
  projectId: "dragon-news-portal-fbbf3",
  storageBucket: "dragon-news-portal-fbbf3.firebasestorage.app",
  messagingSenderId: "175236766056",
  appId: "1:175236766056:web:84e9c0bddc268200511edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;