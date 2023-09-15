import react, { Fragment } from "react";

import { minigames } from "../../../eventdata";
import styles from "../../../styles/event.module.css";
const Minigames = () => {
  return (
    <Fragment>
      <div className={`${styles.minigamesDiv}`}>
        {minigames.map((element, index) => (
          <Fragment>
            <p key={index} className={`${styles.minigamesLogo}  white`}>
              {element.logo}
            </p>
            <p key={index} className={`${styles.minigamesText}  white`}>
              {element.event}
            </p>
            <p key={index} className={`${styles.minigamesText}  white`}>
              {element.name}
            </p>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Minigames;
