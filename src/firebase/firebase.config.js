// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4vjlkRfdUjSUOYF-iGEzVDPxuPLj0zbM",
    authDomain: "assignmentb9a10.firebaseapp.com",
    projectId: "assignmentb9a10",
    storageBucket: "assignmentb9a10.appspot.com",
    messagingSenderId: "379471343496",
    appId: "1:379471343496:web:c89d02fa0fa1b5be65143d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
