import { Fragment } from "react";

import styles from "../../../styles/combatinfo.module.css";
const CombatInfo = ({ data }) => {
  const { rarity, unitClass, weapon, element, position } = data;

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
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {rarity}
            </p>
          </div>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Class
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {unitClass}
            </p>
          </div>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Weapon
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {weapon}
            </p>
          </div>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Element
            </p>
            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {element}
            </p>
          </div>
          <div className={`${styles.combatRowDiv}`}>
            <p
              className={`${styles.combatLeftText} ${styles.combatText}  white`}
            >
              Burst Type
            </p>

            <p
              className={`${styles.combatRightText} ${styles.combatText}  white`}
            >
              {position}
            </p>
          </div>
        </div>
        <div className={`${styles.combatRowDiv}`}></div>
      </div>
    </Fragment>
  );
};

export default CombatInfo;
