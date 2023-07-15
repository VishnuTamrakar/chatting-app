
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjaRbYe2vdHUw41urhoVvQdkWtoALSKXk",
  authDomain: "chatting-app-bd53e.firebaseapp.com",
  projectId: "chatting-app-bd53e",
  storageBucket: "chatting-app-bd53e.appspot.com",
  messagingSenderId: "268029794591",
  appId: "1:268029794591:web:28b9ee187d4a4fb9d3382a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();