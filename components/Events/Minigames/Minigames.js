import react, { Fragment } from "react";

import { minigames } from "../../../eventdata";
import styles from "../../../styles/minigames.module.css";
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
                className={`${styles.minigamesLogoDiv}  white`}
              ></img>
              <div className={`${styles.space}  white`}>
                <div className={`${styles.miniTextDiv}  white`}>
                  <p key={index} className={`${styles.minigamesText}  white`}>
                    {element.name}
                  </p>
                </div>
                <div className={`${styles.miniTextDiv}  white`}>
                  <p key={index} className={`${styles.minigamesText}  white`}>
                    {element.event}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Minigames;
