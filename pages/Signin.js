import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../components/Utils/firebase/firebase";

const SignIn = () => {
  useEffect(
    // get response for redirect that just happened based on the auth
    () => async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    },
    []
  );

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
    </div>
  );
};

export default SignIn;
