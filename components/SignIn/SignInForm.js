// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138942#questions/17648170
import styles from "../../styles/signin.module.scss";
import { useState, Fragment } from "react";
import FormInput from "../forminput/FormInput";
import Button from "../Button/Button";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect,
} from "../Utils/firebase/firebase";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await siginInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevData) => ({ ...prevData, [name]: value }));
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31147830#questions/17606432
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      // https://firebase.google.com/docs/auth/admin/errors
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
        default:
          console.log(error);
          break;
      }
    }
  };
  // get response for redirect that just happened based on the auth
  useEffect(() => {
    const unsubscribe = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };

    return () => unsubscribe();
  }, []);
  return (
    <Fragment>
      <div className={`${styles.signUpContainer}`}>
        <h2>Already have an account?</h2>
        <span className="white">Sign in with email/password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            required
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
          ></FormInput>

          <FormInput
            label="Password"
            required
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          ></FormInput>
          <div className={`${styles.buttonsContainer}`}>
            <Button buttonType="inverted" type="submit">
              Sign In
            </Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType="google"
            >
              Google Sign in
            </Button>
            <Button
              type="button"
              buttonType="google"
              onClick={signInWithGoogleRedirect}
            >
              Redirect Google Signin
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignInForm;
