import { Fragment } from "react";
import CombatInfo from "./CombatInfo/CombatInfo";
import CharInfo from "./CharInfo/CharInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import Skills from "./Skills/Skills";
import FullImage from "./FullImage/FullImage";
import CharProfile from "./CharProfile/CharProfile";
import styles from "../../styles/indivchar.module.css";
const IndivChar = ({ data }) => {
  return (
    <Fragment>
      <div className={`${styles.indivCharHeader} white`}>
        <CharProfile data={data} />
        <p className={`${styles.indivCharHeaderText} white`}>Info</p>
        <div className={`${styles.indivCharDiv}`}>
          <CharInfo data={data} />
          <CombatInfo data={data} />
          <OtherInfo data={data} />
        </div>
        <p className={`${styles.indivCharHeaderText} white`}>Skills</p>
        <Skills data={data} />
        <p className={`${styles.indivCharHeaderText} white`}>Full Image</p>
        <FullImage data={data} />
      </div>
    </Fragment>
  );
};

export default IndivChar;
