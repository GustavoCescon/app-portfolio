import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBbNyHvMs8ehkRcSGns3vaGMYSJMuKsvVk",
  authDomain: "app-portfolio-3c91b.firebaseapp.com",
  projectId: "app-portfolio-3c91b",
  storageBucket: "app-portfolio-3c91b.appspot.com",
  messagingSenderId: "1043460980689",
  appId: "1:1043460980689:web:14658f2d50d21aace5aaf0",
};

const app = initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
