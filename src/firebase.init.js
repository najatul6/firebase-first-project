// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJELaP4ApBDbVa1UG86BUOV8F18YJ0Zs",
  authDomain: "fir-first-project-2d8db.firebaseapp.com",
  projectId: "fir-first-project-2d8db",
  storageBucket: "fir-first-project-2d8db.appspot.com",
  messagingSenderId: "543683839537",
  appId: "1:543683839537:web:f4dcdffa96645e4d80f710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app