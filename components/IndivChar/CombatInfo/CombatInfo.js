import { Fragment } from "react";

import styles from "../../../styles/combatinfo.module.css";
const CombatInfo = ({ data }) => {
  const { rarity, unitClass, weapon, element, burst } = data;

  return (
    <Fragment>
      <div className={`${styles.combatDiv}`}>
        <div className={`${styles.combatRowDiv}`}>
          {" "}
          <p className={`${styles.combatLeftText} white`}>Rarity</p>
          <p className={`${styles.combatRightText} white`}>{rarity}</p>
        </div>
        <div className={`${styles.combatRowDiv}`}>
          {" "}
          <p className={`${styles.combatLeftText} white`}>Class</p>
          <p className={`${styles.combatRightText} white`}>{unitClass}</p>
        </div>
        <div className={`${styles.combatRowDiv}`}>
          {" "}
          <p className={`${styles.combatLeftText} white`}>Weapon</p>
          <p className={`${styles.combatRightText} white`}>{weapon}</p>
        </div>
        <div className={`${styles.combatRowDiv}`}>
          {" "}
          <p className={`${styles.combatLeftText} white`}>element</p>
          <p className={`${styles.combatRightText} white`}>{element}</p>
        </div>
        <div className={`${styles.combatRowDiv}`}>
          {" "}
          <p className={`${styles.combatLeftText} white`}>Burst Type</p>
          <p className={`${styles.combatRightText} white`}>{burst}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CombatInfo;
