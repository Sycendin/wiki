import { Fragment } from "react";

import styles from "../../../styles/lastupdated.module.css";
const LastUpdated = () => {
  return (
    <Fragment>
      <div className={`${styles.updateDiv}`}>
        <span className={`${styles.updateSpan}`}>
          <p className={`${styles.updateText}`}>
            Characters last updated February 11th, 2023
          </p>
        </span>
      </div>
    </Fragment>
  );
};

export default LastUpdated;
