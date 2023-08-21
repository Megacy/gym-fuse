// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthEmailProvider } from "@/types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe9nXqtGv281oCGd7mrpfjhzqW6DGcf0k",
  authDomain: "gym-fuse.firebaseapp.com",
  projectId: "gym-fuse",
  storageBucket: "gym-fuse.appspot.com",
  messagingSenderId: "104306488092",
  appId: "1:104306488092:web:970b49ab8f3dbfd19f80d9",
  measurementId: "G-8Y3FD7M369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export const signUpUserWithEmailAndPassWord = async ({ email, password }: AuthEmailProvider) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassWord = async ({ email, password }: AuthEmailProvider) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutAuthUser = async () => await signOut(auth);

export const onAuthStageChangedListener = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);
