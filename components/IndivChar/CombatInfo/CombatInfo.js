import { Fragment } from "react";

import styles from "../../../styles/combatinfo.module.css";
const CombatInfo = ({ data }) => {
  const { rarity, unitClass, weapon, element, burst } = data;

  return (
    <Fragment>
      <div className={`${styles.combatWholeDiv}`}>
        <h2 className={`${styles.combatTitle} ${styles.combatText}  white`}>
          Combat Info
        </h2>
        <div className={`${styles.combatDiv}`}>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatLeftText} ${styles.combatText} white`}
            >
              Rarity
            </p>

            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Class
            </p>

            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Weapon
            </p>

            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              element
            </p>

            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Burst Type
            </p>
          </div>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {rarity}
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {unitClass}
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {weapon}
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {element}
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {burst}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CombatInfo;
