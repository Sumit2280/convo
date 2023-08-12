import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZqSnjPO2Z0RJXETiNU6gz9qo0s5vxsWw",
  authDomain: "chat-web-app-c4e74.firebaseapp.com",
  projectId: "chat-web-app-c4e74",
  storageBucket: "chat-web-app-c4e74.appspot.com",
  messagingSenderId: "484433277692",
  appId: "1:484433277692:web:8cad9890deefa5d93e1d79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
