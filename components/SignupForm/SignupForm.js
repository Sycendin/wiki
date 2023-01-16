// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31138942#questions/17648170

import { useState } from "react";
import { Fragment } from "react";
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
  console.log(formFields);
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
        await createUserDocumentFromAuth(user, { displayName });
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
      <div>
        <h1 className="white">Sign up with email/password</h1>
        <form onSubmit={handleSubmit}>
          <label className="white">Display Name</label>
          <input
            required
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
          ></input>
          <label className="white">Email</label>
          <input
            required
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
          ></input>
          <label className="white">Password</label>
          <input
            required
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          ></input>
          <label className="white">Confirm Password</label>
          <input
            required
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          ></input>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignupForm;
