import react, { Fragment } from "react";

import styles from "../../../styles/skill.module.css";
const SkillTextFormat = ({ firstLetter }) => {
  console.log(firstLetter);
  // Check if the first letter of the string is ■ and apply needed css to <p>
  if (firstLetter[0] === "■") {
    return (
      <Fragment>
        <p className={`${styles.skillTextEnd}`}>{firstLetter} </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p className={`${styles.skillText}`}>{firstLetter}</p>
      </Fragment>
    );
  }
};

export default SkillTextFormat;
