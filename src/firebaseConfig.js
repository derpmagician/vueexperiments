import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore/lite'


// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",
    authDomain: "vue3-2c548.firebaseapp.com",
    projectId: "vue3-2c548",
    storageBucket: "vue3-2c548.appspot.com",
    messagingSenderId: "975447172434",
    appId: "1:975447172434:web:d7afa045c68a84b2df468b"
};


initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };