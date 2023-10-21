import react, { Fragment } from "react";

import { skins } from "../../../eventdata";
import styles from "../../../styles/skins.module.css";
const PastSkin = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {skins.map((element, index) => (
          <Fragment>
            {/* <p key={index} className={`${styles.pasEventsText}  white`}>
              {element[index]}
            </p> */}
            {/* {element[1].map((element, index) => (
              <p key={index} className={`${styles.pasEventsText}  white`}>
                {element[1]}
              </p>
            ))} */}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default PastSkin;
