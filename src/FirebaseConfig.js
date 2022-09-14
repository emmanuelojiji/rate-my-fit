import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OpRCUbUhvCMIUfs3fQjEekSYXeVuG2Q",
  authDomain: "rate-my-meal-deal-new.firebaseapp.com",
  projectId: "rate-my-meal-deal-new",
  storageBucket: "rate-my-meal-deal-new.appspot.com",
  messagingSenderId: "366984589635",
  appId: "1:366984589635:web:189678960eeb6d42b9fff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
