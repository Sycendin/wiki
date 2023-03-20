import { Fragment } from "react";
import styles from "../../../../styles/skill.module.css";
const SkillAttack = ({ data, skillIcons }) => {
  return (
    <Fragment>
      {" "}
      {/* <div className={`${styles.skillDiv}`}>
        <img src={skillIcons.normal}></img>
      </div> */}
      <div className={`${styles.charProfile}`}>
        <img className={`${styles.charImage}`} src={skillIcons.normal}></img>
        <div className={`${styles.charInfoDiv}`}>
          <p className={`${styles.charName}`}>Normal Attack</p>
          <div className={`${styles.charInfoDivInner}`}>
            <div className={`${styles.charIconDiv}`}>
              <img
                className={`${styles.setIcon}`}
                src={skillIcons.control}
              ></img>
              <p className={`${styles.charOtherText}`}> {data.skill[0].type}</p>
            </div>
            <div className={`${styles.charIconDiv}`}>
              <img className={`${styles.setIcon}`} src={skillIcons.ammo}></img>
              <p className={`${styles.charOtherText} `}>{data.skill[0].ammo}</p>
            </div>
            <div className={`${styles.charIconDiv}`}>
              <img
                className={`${styles.setIcon}`}
                src={skillIcons.reload}
              ></img>
              <p className={`${styles.charOtherText} `}>
                {data.skill[0].reload}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SkillAttack;
