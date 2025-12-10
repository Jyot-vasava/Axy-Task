import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB06wZ22wXnS-9XjH481aM1EGUmwpYFvHI",
  authDomain: "axy-gif.firebaseapp.com",
  projectId: "axy-gif",
  storageBucket: "axy-gif.firebasestorage.app",
  messagingSenderId: "67676281086",
  appId: "1:67676281086:web:d8478468e10f1702e1adaf",
  measurementId: "G-7WFQ3LFEK5",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
