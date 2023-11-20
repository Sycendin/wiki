import react, { Fragment } from "react";

import { skins } from "../../../eventdata";
import styles from "../../../styles/skins.module.css";
const PastSkin = () => {
  return (
    <Fragment>
      <div className={`${styles.skinsDiv}`}>
        {skins.map((element, index) => (
          <Fragment key={index}>
            {console.log(element)}
            <p key={index} className={`${styles.pasEventsText}  white`}>
              {element[0]}
            </p>
            <div className={`${styles.skins2Div}  white`}>
              {element[1].map((data, index) => (
                // console.log(data.name)
                <Fragment>
                  <div className={`${styles.leftDiv}  white`}>
                    <img
                      className={`${styles.pastSkins} white`}
                      src={data.skin}
                    ></img>
                    <p key={index} className={`${styles.textDiv}  white`}>
                      {data.skinName}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
export default PastSkin;
