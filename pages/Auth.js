import SignupForm from "../components/SignupForm/SignupForm";
import SignInForm from "../components/SignIn/SignInForm";

import { Wrapper } from "../components/Wrapper/Wrapper";
import { Fragment } from "react";
const Authentication = () => {
  // redirect redirects page and stops code from running os need use effect
  return (
    <Wrapper>
      <div>
        <h1 className="white">Sign in</h1>

        <SignupForm />
        <SignInForm />
      </div>
    </Wrapper>
  );
};

export default Authentication;
