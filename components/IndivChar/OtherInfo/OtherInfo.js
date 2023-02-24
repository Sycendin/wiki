import { Fragment } from "react";

import styles from "../../../styles/otherinfo.module.css";
const OtherInfo = ({ data }) => {
  const { name, manufacturer, squad } = data;

  return (
    <Fragment>
      <div className={`${styles.otherDiv}`}>
        <div className={`${styles.otherRowDiv}`}>
          <p className={`${styles.otherLeftText} white`}>Name</p>{" "}
          <p className={`${styles.otherLeftText} white`}>Manufacturer</p>{" "}
          <p className={`${styles.otherLeftText} white`}>Squad</p>
        </div>
        <div className={`${styles.otherRowDiv}`}>
          <p className={`${styles.otherRightText} white`}>{name}</p>
          <p className={`${styles.otherRightText} white`}>{manufacturer}</p>
          <p className={`${styles.otherRightText} white`}>{squad}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default OtherInfo;
