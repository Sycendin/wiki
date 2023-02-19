import { Fragment } from "react";

import styles from "../../../styles/combatinfo.module.css";
const CombatInfo = ({ data }) => {
  const { rarity, unitClass, weapon, element, burst } = data;

  return (
    <Fragment>
      <div className={`${styles.combatDiv}`}>
        <p className={`${styles.combatText} white`}>{rarity}</p>
      </div>
    </Fragment>
  );
};

export default CombatInfo;
