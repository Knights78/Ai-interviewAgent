// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHje5KuETO_nVWscxki6TFXjaIyvclJks",
  authDomain: "aiagent-4443f.firebaseapp.com",
  projectId: "aiagent-4443f",
  storageBucket: "aiagent-4443f.firebasestorage.app",
  messagingSenderId: "734987995194",
  appId: "1:734987995194:web:8353ea7f3a01c345744d03",
  measurementId: "G-C8BEPR5G4B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);