// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsDDU2tuy6K-dDQ0kIv5HiXqrQ9UgJTsE",
    authDomain: "getcar-4321f.firebaseapp.com",
    projectId: "getcar-4321f",
    storageBucket: "getcar-4321f.appspot.com",
    messagingSenderId: "1010866047216",
    appId: "1:1010866047216:web:7a72e12e3a77d3ff621a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
