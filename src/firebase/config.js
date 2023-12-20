// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxEr-wFs0iTRi_9XSh11obs2HDMVCtUcA",
  authDomain: "twitterclone-2dd81.firebaseapp.com",
  projectId: "twitterclone-2dd81",
  storageBucket: "twitterclone-2dd81.appspot.com",
  messagingSenderId: "1038101952315",
  appId: "1:1038101952315:web:ef44e5a488bc74c3b8291e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);
