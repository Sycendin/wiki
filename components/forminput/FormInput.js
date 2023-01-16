import { Fragment } from "react";

import styles from "../../styles/form-input.styles.module.scss";

// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31139998#questions
// replace input with forminput with props of lbel and other input props
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Fragment>
      <div className={`${styles.group} ${styles.projectsPdSubdetail}`}>
        <input className={`${styles.formInput}`} {...otherProps}></input>
        {label ? (
          <label
            className={`${
              otherProps.value.length ? `${styles.shrink}` : "null"
            } white ${styles.formInputLabel}`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </Fragment>
  );
};
export default FormInput;
