import react, { Fragment } from "react";
import { pastEvents } from "../../../eventdata";

import { minigames } from "../../../eventdata";
import styles from "../../../styles/event.module.css";
const Minigames = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {pastEvents.map((element, index) => (
          <p key={index} className={`${styles.pasEventsText}  white`}>
            {/* {eachRole} */}
          </p>
        ))}
      </div>
    </Fragment>
  );
};
export default Minigames;
