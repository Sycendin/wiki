// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31141856#questions
import styles from "../../styles/button.module.scss";
const BUTTON_TYPE_CLASSES = {
  google: "googleSignIn",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${styles.buttonContainer} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
