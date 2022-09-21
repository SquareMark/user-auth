// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import {
  addDoc, 
  collection, 
  deleteDoc,  
  doc,
  getDoc, 
  getDocs,
  getFirestore,
  limit,
  query,
  setDoc,
  updateDoc,
  writeBatch,
  where
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuchJ0FhCxz-0ey45UoOUj7IfuhEy2sJY",
  authDomain: "square-mark.firebaseapp.com",
  projectId: "square-mark",
  storageBucket: "square-mark.appspot.com",
  messagingSenderId: "41127161318",
  appId: "1:41127161318:web:c806516e5d9da04ab8ba27"
};

export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

// Firestore wrapper
export const fireStore = {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  writeBatch,
  where
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore();