// src/firebase.js
// import React from "react"; // Add this line
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnsRvM9osN5Q8HINY1eFbFiWsA9ge4cSg",
    authDomain: "fir-project-6858f.firebaseapp.com",
    projectId: "fir-project-6858f",
    storageBucket: "fir-project-6858f.appspot.com",
    messagingSenderId: "158136256585",
    appId: "1:158136256585:web:45ae2cf57ee600fcb91798",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
