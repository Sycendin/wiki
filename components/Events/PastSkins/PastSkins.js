import react, { Fragment } from "react";
import { pastEvents } from "../../../eventdata";

import { skins } from "../../../eventdata";
import styles from "../../../styles/skins.module.css";
const PastSkinList = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {skins.map((element, index) => (
          <Fragment>
            <p key={index} className={`${styles.pasEventsText}  white`}>
              {element[0]}
            </p>
            {element[1].map((element, index) => (
              <p key={index} className={`${styles.pasEventsText}  white`}>
                {}
              </p>
            ))}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default PastSkinList;
