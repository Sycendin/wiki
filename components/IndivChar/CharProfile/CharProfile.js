import { Fragment } from "react";

import styles from "../../../styles/charprofile.module.css";
const CharProfile = ({ data }) => {
  const [name, art, weapon, element, squad] = data;
  return (
    <Fragment>
      <div className={`${styles.charProfile}`}>
        <img className={`${styles.charImage}`} src={art}></img>
        <div className={`${styles.charInfoDiv}`}>
          <p className={`${styles.charName}`}>{name}</p>
          <div className={`${styles.charInfoDivInner}`}>
            <p className={`${styles.charOtherText}`}>{weapon}</p>
            <p className={`${styles.charOtherText}`}>{element}</p>
            <p className={`${styles.charOtherText}`}>{squad}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CharProfile;
