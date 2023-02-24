import { Fragment } from "react";
import CombatInfo from "./CombatInfo/CombatInfo";
import CharInfo from "./CharInfo/CharInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import styles from "../../styles/indivchar.module.css";
const IndivChar = ({ data }) => {
  return (
    <Fragment>
      <div className={`${styles.indivCharHeader} white`}>
        <p className={`${styles.indivCharHeaderText} white`}>Info</p>
        <div className={`${styles.indivCharDiv}`}>
          <CharInfo data={data} />
          <CombatInfo data={data} />
          <OtherInfo data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default IndivChar;
