import { useEffect } from "react";
import SignupForm from "../components/SignupForm/SignupForm";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../components/Utils/firebase/firebase";

const Authentication = () => {
  // get response for redirect that just happened based on the auth
  useEffect(() => {
    const unsubscribe = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };

    return () => unsubscribe();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await siginInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  // redirect redirects page and stops code from running os need use effect
  return (
    <div>
      <h1 className="white">Sign in</h1>
      <button onClick={logGoogleUser}>Sign in to google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
      <SignupForm />
    </div>
  );
};

export default Authentication;
