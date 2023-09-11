import react, { Fragment } from "react";

import { minigames } from "../../../eventdata";
import styles from "../../../styles/event.module.css";
const Minigames = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {minigames.map((element, index) => (
          <Fragment>
            <p key={index} className={`${styles.pasEventsText}  white`}>
              {element.logo}
            </p>
            <p key={index} className={`${styles.pasEventsText}  white`}>
              {element.event}
            </p>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default Minigames;
