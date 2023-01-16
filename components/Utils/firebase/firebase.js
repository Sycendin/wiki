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
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// for firebase db
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
//udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138944#questions
//additionalInformation
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // If no arguments then return
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exists
  // return userdocref
  return userDocRef;
};

// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138942#questions
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31147830#questions/17606432
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31159534#questions
export const signOutUser = () => signOut(auth);
