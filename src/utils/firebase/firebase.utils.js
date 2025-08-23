import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5BssVa2kbjqf11i0xHRT1iHxNEBSLlZM",
    authDomain: "crwn-clothing-db-83dcb.firebaseapp.com",
    projectId: "crwn-clothing-db-83dcb",
    storageBucket: "crwn-clothing-db-83dcb.firebasestorage.app",
    messagingSenderId: "200383117061",
    appId: "1:200383117061:web:96b265f4b3fecca5f7e96c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        }
        catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}