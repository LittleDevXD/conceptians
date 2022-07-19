import { initializeApp } from 'firebase/app';
import { 
    GoogleAuthProvider, 
    getAuth, 
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYQCN0iVfqasqwyI14yoqePN8mTmBJgTk",
    authDomain: "conceptians-67005.firebaseapp.com",
    projectId: "conceptians-67005",
    storageBucket: "conceptians-67005.appspot.com",
    messagingSenderId: "563084677054",
    appId: "1:563084677054:web:97a377ecec93960f6ab3ef"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// auth 
const auth = getAuth();

// google provider
const googleProvider = new GoogleAuthProvider();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// db
const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    const { displayName, email } = userAuth;
    const userDocRef = doc(db, 'users', userAuth.uid);

    // fetch user
    const userSnapshot = await getDoc(userDocRef);
    
    const createdAt = new Date();

    if (!userSnapshot.exists()) {
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log(error);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email && !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email && !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedHandler = (callback) => {
    return onAuthStateChanged(auth, callback);
}



