import { Fragment } from "react";

import styles from "../../../styles/charinfo.module.css";
const CharInfo = ({ data }) => {
  const { name, manufacturer, squad } = data;

  return (
    <Fragment>
      <div className={`${styles.charWholeDiv}`}>
        <h2 className={`${styles.charTitle} ${styles.charText}  white`}>
          Character Info
        </h2>

        <div className={`${styles.charRowDiv} `}>
          <div className={`${styles.char} `}>
            <p className={`${styles.charLeftText}  ${styles.charText} white`}>
              Name
            </p>
            <p className={`${styles.charRightText}  ${styles.charText} white`}>
              {name}
            </p>
          </div>
          <div className={`${styles.char} `}>
            <p className={`${styles.charLeftText}  ${styles.charText} white`}>
              Manufacturer
            </p>{" "}
            <p className={`${styles.charRightText} ${styles.charText} white`}>
              {manufacturer}
            </p>
          </div>
          <div className={`${styles.char} `}>
            <p className={`${styles.charLeftText}  ${styles.charText} white`}>
              Squad
            </p>

            <p className={`${styles.charRightText}  ${styles.charText} white`}>
              {squad}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CharInfo;
