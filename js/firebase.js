// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged   } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChdUnxg5Qq_SHH9fWccQrWycGeGNLKxzE",
  authDomain: "rage-run-5ba4c.firebaseapp.com",
  projectId: "rage-run-5ba4c",
  storageBucket: "rage-run-5ba4c.firebasestorage.app",
  messagingSenderId: "357304331415",
  appId: "1:357304331415:web:96fab61ed7faaac42e4dd2",
  measurementId: "G-9LNW9B7VGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const authReady = new Promise((resolve) => {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      await signInAnonymously(auth).catch(console.error);;
      console.log("Signed in anonymously");
    }
    resolve();
  });
});
