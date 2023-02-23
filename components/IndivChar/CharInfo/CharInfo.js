import { Fragment } from "react";

import styles from "../../../styles/charinfo.module.css";
const CharInfo = ({ data }) => {
  const { name, manufacturer, squad } = data;

  return (
    <Fragment>
      <div className={`${styles.charDiv}`}>
        <div className={`${styles.charRowDiv}`}>
          <p className={`${styles.charLeftText} white`}>Name</p>{" "}
          <p className={`${styles.charLeftText} white`}>Manufacturer</p>{" "}
          <p className={`${styles.charLeftText} white`}>Squad</p>
        </div>
        <div className={`${styles.charRowDiv}`}>
          <p className={`${styles.charRightText} white`}>{name}</p>
          <p className={`${styles.charRightText} white`}>{manufacturer}</p>
          <p className={`${styles.charRightText} white`}>{squad}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CharInfo;
