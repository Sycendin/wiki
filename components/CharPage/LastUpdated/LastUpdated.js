import { Fragment } from "react";
import { lastUpdatedData } from "../../../chardata";
import styles from "../../../styles/lastupdated.module.css";
const LastUpdated = () => {
  return (
    <Fragment>
      <div className={`${styles.updateDiv}`}>
        <span className={`${styles.updateSpan}`}>
          <p className={`${styles.updateText}`}>
            Character Page last updated: {lastUpdatedData}
          </p>
        </span>
      </div>
    </Fragment>
  );
};

export default LastUpdated;
