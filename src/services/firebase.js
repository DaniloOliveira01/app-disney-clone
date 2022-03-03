/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsHlGal0rS2wErX90JtNh7bb42GGd-8Ck",
  authDomain: "disney-app-clone-9fb5b.firebaseapp.com",
  projectId: "disney-app-clone-9fb5b",
  storageBucket: "disney-app-clone-9fb5b.appspot.com",
  messagingSenderId: "423340103320",
  appId: "1:423340103320:web:ec4e9bf1fc938e45bca2ed",
  measurementId: "G-VH8JBYW0HC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export default db;