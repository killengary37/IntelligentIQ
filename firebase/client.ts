import {initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA60sfPJ4bEcI3zn_IhHBPRgWO6aOt0YCk",
    authDomain: "intelligentiq-cccb1.firebaseapp.com",
    projectId: "intelligentiq-cccb1",
    storageBucket: "intelligentiq-cccb1.firebasestorage.app",
    messagingSenderId: "183196488248",
    appId: "1:183196488248:web:d0c9da1fcfc2cc17e94ccd",
    measurementId: "G-88BBY0517T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
