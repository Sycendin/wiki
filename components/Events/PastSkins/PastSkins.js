import react, { Fragment } from "react";
import { pastEvents } from "../../../eventdata";

import { skins } from "../../../eventdata";
import styles from "../../../styles/skins.module.css";
const PastSkinList = () => {
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
export default PastSkinList;
