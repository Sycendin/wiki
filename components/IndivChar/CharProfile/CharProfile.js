import { Fragment } from "react";

import styles from "../../../styles/charprofile.module.css";

const CharProfile = ({ data }) => {
  const { name, art, weapon, element, squad } = data;
  const {
    charElementEarth,
    charElementFire,
    charElementWind,
    charElementWater,
    charElementElectric,
  } = styles;
  let setElement = "";
  switch (element) {
    case "Fire":
      setElement = charElementFire;
      break;
    case "Wind":
      setElement = charElementWind;
      break;
    case "Earth":
      setElement = charElementEarth;
      console.log("sdsd");
      break;
    case "Electric":
      setElement = charElementElectric;
      break;
    case "Water":
      setElement = charElementWater;
      break;
    default:
    // code block
  }
  return (
    <Fragment>
      <div className={`${styles.charProfile}`}>
        <img className={`${styles.charImage}`} src={art}></img>
        <div className={`${styles.charInfoDiv}`}>
          <p className={`${styles.charName}`}>{name}</p>
          <div className={`${styles.charInfoDivInner}`}>
            <p className={`${styles.charOtherText}`}>{weapon}</p>
            <p
              className={`${styles.charOtherText} ${setElement} ${styles.border}`}
            >
              {element}
            </p>
            <p className={`${styles.charOtherText}`}>{squad}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CharProfile;
