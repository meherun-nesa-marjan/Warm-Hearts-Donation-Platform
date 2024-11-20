// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-d2b9ww6drGLoux1K3--yUfV2K06ryho",
  authDomain: "my-new-assignment-9.firebaseapp.com",
  projectId: "my-new-assignment-9",
  storageBucket: "my-new-assignment-9.firebasestorage.app",
  messagingSenderId: "895174705400",
  appId: "1:895174705400:web:9a300df4b108211d4b3b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);