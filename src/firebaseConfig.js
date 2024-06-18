// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvb9xPkZR2Vu3PRKbYNKtx3dMNUYHn1qQ",
  authDomain: "listafilmesapp.firebaseapp.com",
  projectId: "listafilmesapp",
  storageBucket: "listafilmesapp.appspot.com",
  messagingSenderId: "914715088369",
  appId: "1:914715088369:web:465659d89e0875844b6050",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { firestore, storage, collection, getDocs, addDoc, deleteDoc, doc };
