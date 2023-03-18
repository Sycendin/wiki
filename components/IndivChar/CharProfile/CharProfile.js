import { Fragment } from "react";

import styles from "../../../styles/charprofile.module.css";
import { elementIcons } from "../../../chardata";
import { weaponIcons } from "../../../chardata";
const CharProfile = ({ data }) => {
  const { name, art, weapon, element, squad } = data;
  const { fire, water, wind, electric, earth } = elementIcons;
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
  let setWeaponIcon = "";
  let setElementIcon = "";
  // Set class to appropriate type
  switch (element) {
    case "Fire":
      setElement = charElementFire;
      setElementIcon = fire;
      break;
    case "Wind":
      setElement = charElementWind;
      setElementIcon = wind;
      break;
    case "Earth":
      setElement = charElementEarth;
      setElementIcon = earth;
      break;
    case "Electric":
      setElement = charElementElectric;
      setElementIcon = electric;
      break;
    case "Water":
      setElement = charElementWater;
      setElementIcon = water;
      break;
    default:
    // code block
  }
  switch (weapon) {
    case "Assault Rifle":
      setWeaponIcon = assaultRifle;
      break;
    case "Machine Gun":
      setWeaponIcon = machinegun;
      break;
    case "SMG":
      setWeaponIcon = submachinegun;
      break;
    case "Sniper":
      setWeaponIcon = sniperRifle;
      break;
    case "Rocket Launcher":
      setWeaponIcon = rocketLauncher;
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
            <div className={`${styles.charIconDiv}`}>
              <img className={`${styles.setIcon}`} src={setWeaponIcon}></img>
              <p className={`${styles.charOtherText}`}>{weapon}</p>
            </div>
            <div className={`${styles.charIconDiv}`}>
              <img className={`${styles.setIcon}`} src={setElementIcon}></img>
              <p
                className={`${styles.charOtherText} ${setElement} ${styles.border}`}
              >
                {element}
              </p>
            </div>
            <div className={`${styles.nonIconDiv}`}>
              <p className={`${styles.charOtherText}`}>{squad}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CharProfile;
