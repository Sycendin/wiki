import SignupForm from "../components/SignupForm/SignupForm";
import SignInForm from "../components/SignIn/SignInForm";
import Nav from "../components/Nav";
import { Fragment } from "react";
const Authentication = () => {
  // redirect redirects page and stops code from running os need use effect
  return (
    <Fragment>
      <Nav />
      <div>
        <h1 className="white">Sign in</h1>

        <SignupForm />
        <SignInForm />
      </div>
    </Fragment>
  );
};

export default Authentication;
