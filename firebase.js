// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXhHtsGXOesDxprMEEi5b7buv3fJj4GWQ",
    authDomain: "twitter-clone-a47b9.firebaseapp.com",
    projectId: "twitter-clone-a47b9",
    storageBucket: "twitter-clone-a47b9.appspot.com",
    messagingSenderId: "18973253139",
    appId: "1:18973253139:web:c240579c5fc97580f929e6"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };