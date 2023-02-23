import { Fragment } from "react";
import CombatInfo from "./CombatInfo/CombatInfo";
import CharInfo from "./CharInfo/CharInfo";
import styles from "../../styles/indivchar.module.css";
const IndivChar = ({ data }) => {
  return (
    <Fragment>
      <div className={`${styles.indivCharDiv}`}>
        <CharInfo data={data} />
        <CombatInfo data={data} />
      </div>
    </Fragment>
  );
};

export default IndivChar;
