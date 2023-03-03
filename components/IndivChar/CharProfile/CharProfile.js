import { Fragment } from "react";

import styles from "../../../styles/charprofile.module.css";
const CharProfile = ({ data }) => {
  const [name, art] = data;
  return (
    <Fragment>
      <div className={`${styles.charProfile}`}>
        <img className={`${styles.charImage}`} src={art}></img>
        <div className={`${styles.charInfoDiv}`}>
          <p className={`${styles.charName}`}>{name}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default CharProfile;
