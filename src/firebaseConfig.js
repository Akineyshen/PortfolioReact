// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-SfmeyO6UKmsxC8p3LSy72A1AYmKpwY4",
    authDomain: "portfolio-react-78a83.firebaseapp.com",
    projectId: "portfolio-react-78a83",
    storageBucket: "portfolio-react-78a83.firebasestorage.app",
    messagingSenderId: "872858194711",
    appId: "1:872858194711:web:3718c4dc1115539b3a5d52",
    measurementId: "G-R7DW50TVWT"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore
const db = getFirestore(app);

export { db };