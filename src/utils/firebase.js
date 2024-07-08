// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvVwNllTLbdQBAG4YODbAuDAso57FxnTs",
  authDomain: "netflixgpt-3cbc0.firebaseapp.com",
  projectId: "netflixgpt-3cbc0",
  storageBucket: "netflixgpt-3cbc0.appspot.com",
  messagingSenderId: "349626279820",
  appId: "1:349626279820:web:1363c729d8a23189b458a9",
  measurementId: "G-SK1MJCEB1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
