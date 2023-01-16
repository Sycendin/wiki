import SignupForm from "../components/SignupForm/SignupForm";
import SignInForm from "../components/SignIn/SignInForm";

const Authentication = () => {
  // redirect redirects page and stops code from running os need use effect
  return (
    <div>
      <h1 className="white">Sign in</h1>

      <SignupForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
