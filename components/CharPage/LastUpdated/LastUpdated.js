import { Fragment } from "react";

import styles from "../../../styles/lastupdated.module.css";
const LastUpdated = () => {
  return (
    <Fragment>
      <div className={`${styles.updateDiv}`}>
        <span className={`${styles.updateSpan}`}>
          <p className={`${styles.updateText}`}></p>
        </span>
      </div>
    </Fragment>
  );
};

export default LastUpdated;
