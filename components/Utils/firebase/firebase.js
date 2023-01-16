// utll file for firebase db
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// for firebase db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { userAgent } from "next/server";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeLi8Oczmt-b2dYwhd9aRiparVPF1aEU8",
  authDomain: "wiki-db-dc30b.firebaseapp.com",
  projectId: "wiki-db-dc30b",
  storageBucket: "wiki-db-dc30b.appspot.com",
  messagingSenderId: "943990437657",
  appId: "1:943990437657:web:a73afb9e3c89b0c89cb788",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// instialize provider for googleauth ( cam have mult provideers so use new GoogleAuthProvider())
// only need one auth but might need many providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const siginInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //  db, collection, identifyer
  // use uid from google auth
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exist
  if (!userSnapshot.exists()) {
    // get displayname and email from userAuth obj
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // try and create doc
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exists
  // return userdocref
  return userDocRef;
};
