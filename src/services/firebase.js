import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLw6p7Ih6AhGKFRQk5ptblsmD2NluNGJs",
  authDomain: "react-app-b54dd.firebaseapp.com",
  projectId: "react-app-b54dd",
  storageBucket: "react-app-b54dd.appspot.com",
  messagingSenderId: "532041874353",
  appId: "1:532041874353:web:e237975d99452411319b90",
  measurementId: "G-JHRTJNTTQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database


