import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqqoBpI1PoFMa1LWolQEmFFSqerXmnUxA",
    authDomain: "ics4u-5b839.firebaseapp.com",
    projectId: "ics4u-5b839",
    storageBucket: "ics4u-5b839.appspot.com",
    messagingSenderId: "929623143125",
    appId: "1:929623143125:web:946d901b4b986d64bd685c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(firestore, 'localhost', 8080);
connectStorageEmulator(storage, "localhost", 9199);

export { auth, firestore, storage }