import { Fragment } from "react";

import styles from "../../../styles/charprofile.module.css";
import { elementIcons } from "../../../chardata";
import { weaponIcons } from "../../../chardata";
const CharProfile = ({ data }) => {
  const { name, art, weapon, element, squad } = data;
  const { fire, water, wind, electic, earth } = elementIcons;
  const {
    sniperRifle,
    shotgun,
    machinegun,
    submachinegun,
    rocketLauncher,
    assaultRifle,
  } = weaponIcons;
  // Import class types for background of element color
  const {
    charElementEarth,
    charElementFire,
    charElementWind,
    charElementWater,
    charElementElectric,
  } = styles;
  let setElement = "";
  let setWeapon = "";
  // Set class to appropriate type
  switch (element) {
    case "Fire":
      setElement = charElementFire;
      break;
    case "Wind":
      setElement = charElementWind;
      break;
    case "Earth":
      setElement = charElementEarth;
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
  switch (weapon) {
    case "Assault Rifle":
      setWeapon = assaultRifle;
      break;
    case "Machine Gun":
      setWeapon = machinegun;
      break;
    case "SMG":
      setWeapon = submachinegun;
      break;
    case "Sniper":
      setWeapon = sniperRifle;
      break;
    case "Rocket Launcher":
      setWeapon = rocketLauncher;
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
