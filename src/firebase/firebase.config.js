// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMXlel9h7esOqDZ_3TciqgSxAaFqmnlAs",
  authDomain: "yumpies-ee151.firebaseapp.com",
  projectId: "yumpies-ee151",
  storageBucket: "yumpies-ee151.appspot.com",
  messagingSenderId: "976306499825",
  appId: "1:976306499825:web:f27c28348fbc55f547f950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;