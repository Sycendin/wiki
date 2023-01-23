// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138942#questions/17648170
import styles from "../../styles/signup.module.scss";
import { useState, Fragment } from "react";
import FormInput from "../forminput/FormInput";
import Button from "../Button/Button";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../Utils/firebase/firebase";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  let profilePic =
    "https://www.prydwen.gg/static/d2182bea4a3c35b721a4bd55d5690239/60b4d/rapi_icon.webp";
  // console.log(formFields);
  // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31159534#questions
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevData) => ({ ...prevData, [name]: value }));
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138944#questions
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocumentFromAuth(user, { displayName, profilePic });
        resetFormFields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("email already in use");
        } else {
          console.log("error making user", error.message);
        }
      }
    }
  };

  return (
    <Fragment>
      <div className={`${styles.signUpContainer}`}>
        <h2>Don't have an account?</h2>
        <span className="white">Sign up with email/password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            required
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            // inputOptions = {{
            //   required: true,
            //   type:"text",
            //   onChange:handleChange,
            //   name:"displayName",
            //   value:displayName
            //   }}
          ></FormInput>

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

          <FormInput
            label="Confirm Password"
            required
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          ></FormInput>
          <Button buttonType="inverted" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignupForm;
