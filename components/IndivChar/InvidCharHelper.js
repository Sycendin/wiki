import react, { Fragment } from "react";
import styles from "../../styles/combatinfo.module.css";
const InfoHelper = ({ data, section }) => {
  let temp = [];
  let temp2 = [];
  if (section === "Combat") {
    const { rarity, unitClass, weapon, element, position } = data;
    temp = [rarity, unitClass, weapon, element, position];
    temp2 = ["Rarity", "Class", "Weapon", "Element", "Burst Type"];
  } else if (section === "info") {
    const { name, manufacturer, squad } = data;
    temp = [name, manufacturer, squad];
  } else {
    const { role } = data;
    temp = [role];
  }
  return (
    <Fragment>
      <div className={`${styles.combatWholeDiv}`}>
        <h2 className={`${styles.combatTitle} ${styles.combatText}  white`}>
          {section} Info
        </h2>
        <div className={`${styles.combatDiv}`}>
          {desc.map((element, index) => {
            return (
              <div className={`${styles.combatRowDiv}`}>
                <p
                  className={`${styles.combatLeftText} ${styles.combatText} white`}
                >
                  {temp2[index]}
                </p>
                <p
                  className={`${styles.combatRightText} ${styles.combatText}  white`}
                >
                  {element}
                </p>
              </div>
            );
          })}
        </div>
        =
      </div>
    </Fragment>
  );
};

export default InfoHelper;
