// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH0SwxO7BSf9LP8YvOOE7VYd2a6JHqECs",
  authDomain: "jcmapp-8ae6b.firebaseapp.com",
  projectId: "jcmapp-8ae6b",
  storageBucket: "jcmapp-8ae6b.firebasestorage.app",
  messagingSenderId: "152820142250",
  appId: "1:152820142250:web:f76bb86ddaa80da730c0d3",
  measurementId: "G-6144X59V6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);