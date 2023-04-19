import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import styles from "../../../styles/combatinfo.module.css";
const CombatInfo = ({ data }) => {
  const { rarity, unitClass, weapon, element, position } = data;

  return (
    <Fragment>
      <InfoHelper data={data} section={"Combat"} />
    </Fragment>
  );
};

export default CombatInfo;
