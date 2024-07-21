// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA98X4uyE9qmUaEOQ6Gu8XDv7oMBgpUugc",
  authDomain: "fir-auth-311ee.firebaseapp.com",
  projectId: "fir-auth-311ee",
  storageBucket: "fir-auth-311ee.appspot.com",
  messagingSenderId: "907423465149",
  appId: "1:907423465149:web:c2f583300e53fcb7a041d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
