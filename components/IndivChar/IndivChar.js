import { Fragment, useEffect, useState } from "react";
import CombatInfo from "./CombatInfo/CombatInfo";
import CharInfo from "./CharInfo/CharInfo";
import OtherInfo from "./OtherInfo/OtherInfo";
import Skills from "./Skills/Skills";
import FullImage from "./FullImage/FullImage";
import CharProfile from "./CharProfile/CharProfile";
import styles from "../../styles/indivchar.module.css";
import useWindowSize from "./SSRWindowSize";
const IndivChar = ({ data }) => {
  const size = useWindowSize();
  return (
    <Fragment>
      <div>
        {size.width}px / {size.height}px
      </div>
      <div className={`${styles.indivCharHeader} white`}>
        <CharProfile data={data} />
        <p className={`${styles.indivCharHeaderText} white`}>Info</p>
        <div className={`${styles.indivCharDiv}`}>
          <CharInfo data={data} size={size} />
          <CombatInfo data={data} size={size} />
          <OtherInfo data={data} size={size} />
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
