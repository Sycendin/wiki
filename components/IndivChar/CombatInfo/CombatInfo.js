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
      </div>
    </Fragment>
  );
};

export default CombatInfo;
