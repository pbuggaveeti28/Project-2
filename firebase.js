// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbReIVS3WU9EMnT7XYVQDENmJ6dDKFVg",
  authDomain: "pantry-674f8.firebaseapp.com",
  projectId: "pantry-674f8",
  storageBucket: "pantry-674f8.appspot.com",
  messagingSenderId: "23018287990",
  appId: "1:23018287990:web:59e80471160eec0c07c057",
  measurementId: "G-6VYS9J3YL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
