// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCidkdElM5p-31XPQBKHHVd8zsr_bHd2iA",
  authDomain: "jk-disney-clone.firebaseapp.com",
  projectId: "jk-disney-clone",
  storageBucket: "jk-disney-clone.appspot.com",
  messagingSenderId: "162806457110",
  appId: "1:162806457110:web:395a52d5c20bd3c2c02637"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app)

export {app, db, storage}

