import react, { Fragment } from "react";

import { skins } from "../../../eventdata";
import styles from "../../../styles/skins.module.css";
const PastSkin = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {skins.map((element, index) => (
          <Fragment key={index}>
            {console.log(element)}
            <p key={index} className={`${styles.pasEventsText}  white`}>
              {element[0]}
            </p>
            {element[1].map((data, index) => (
              // console.log(data.name)
              <Fragment>
                <div className={`${styles.pastEventsText}  white`}>
                  <div className={`${styles.pastSkinDiv}  white`}>
                    <img
                      className={`${styles.pastSkins} white`}
                      src={data.skin}
                    ></img>
                    <p key={index} className={`${styles.pasEventsText}  white`}>
                      {data.skinName}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default PastSkin;
