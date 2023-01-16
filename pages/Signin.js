import {
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../components/Utils/firebase/firebase";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await siginInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1 className="white">Sign in</h1>
      <button onClick={logGoogleUser}>Sign in to google popup</button>
    </div>
  );
};

export default SignIn;
