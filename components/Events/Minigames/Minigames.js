import react, { Fragment } from "react";

import { minigames } from "../../../eventdata";
import styles from "../../../styles/event.module.css";
const Minigames = () => {
  return (
    <Fragment>
      <div className={`${styles.minigamesDiv}`}>
        {minigames.map((element, index) => (
          <Fragment>
            <div key={index} className={`${styles.minigamesInnerDiv}  white`}>
              <img
                key={index}
                src={element.logo}
                className={`${styles.minigamesLogo}  white`}
              ></img>

              <p key={index} className={`${styles.minigamesText}  white`}>
                {element.name}
              </p>
              <p key={index} className={`${styles.minigamesText}  white`}>
                {element.event}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Minigames;
