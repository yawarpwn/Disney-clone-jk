// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWIXNiaDV4r7SuV7BK4ho0TR8pFWICF-c",
  authDomain: "disney-clone-jk.firebaseapp.com",
  projectId: "disney-clone-jk",
  storageBucket: "disney-clone-jk.appspot.com",
  messagingSenderId: "908272679914",
  appId: "1:908272679914:web:db3bca37bd145b821e5093"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !firebase.apps.length
? initializeApp(firebaseConfig)
: firebase.app()

const db = app.firestore()

export { db}
