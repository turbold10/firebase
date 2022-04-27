import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0mJJFPK621ZW3Ki6Hxa5TDN7WE0PuZ38",
  authDomain: "chat-3b449.firebaseapp.com",
  projectId: "chat-3b449",
  storageBucket: "chat-3b449.appspot.com",
  messagingSenderId: "181379371738",
  appId: "1:181379371738:web:d2fef205df0bece1360be3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);