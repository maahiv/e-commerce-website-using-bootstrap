import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApMwJ-bCfOKF3AwiTHdoVqTMmCtNzCQHE",
  authDomain: "ecommerce-website-9c26e.firebaseapp.com",
  databaseURL: "https://ecommerce-website-9c26e-default-rtdb.firebaseio.com",
  projectId: "ecommerce-website-9c26e",
  storageBucket: "ecommerce-website-9c26e.firebasestorage.app",
  messagingSenderId: "55975858021",
  appId: "1:55975858021:web:9edb293862e7a2e3991b8c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
