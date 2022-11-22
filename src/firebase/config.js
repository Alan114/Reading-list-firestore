import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_32BR5uJXV42aX3xBAcujDd-cGKeEufs",
  authDomain: "employees-test-b73d8.firebaseapp.com",
  databaseURL:
    "https://employees-test-b73d8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "employees-test-b73d8",
  storageBucket: "employees-test-b73d8.appspot.com",
  messagingSenderId: "294112412541",
  appId: "1:294112412541:web:8e77f16622f289712a0214",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
