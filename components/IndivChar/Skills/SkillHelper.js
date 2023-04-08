import react, { Fragment } from "react";

const SkillTextFormat = (firstLetter) => {
  if (firstLetter[0] === "■") {
    return (
      <Fragment key={index}>
        <p className={`${styles.skillTextEnd}`}> {firstLetter}</p>
      </Fragment>
    );
  } else {
    return (
      <Fragment key={index}>
        <p className={`${styles.skillText}`}> {firstLetter}</p>
      </Fragment>
    );
  }
};

export default SkillTextFormat;
