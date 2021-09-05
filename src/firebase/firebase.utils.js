import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const config = {
    apiKey: "AIzaSyBQ1ZiLUnOJx-nlt5jN9cJXxVnpA52Z6mM",
    authDomain: "crown-db-59546.firebaseapp.com",
    projectId: "crown-db-59546",
    storageBucket: "crown-db-59546.appspot.com",
    messagingSenderId: "22345632122",
    appId: "1:22345632122:web:33a8888c16831c8d4eaec3",
    measurementId: "G-NYPF38SF3B"
}

initializeApp(config);

export const firestore = getFirestore();
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
