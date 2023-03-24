import { Fragment } from "react";
import styles from "../../../../styles/skill.module.css";
const SkillAttack = ({ data, skillIcons }) => {
  let desc = data.skill[0].effect.split("##");

  return (
    <Fragment>
      {" "}
      {/* <div className={`${styles.skillDiv}`}>
        <img src={skillIcons.normal}></img>
      </div> */}
      <div className={`${styles.skillProfileWhole}`}>
        <div className={`${styles.skillProfile}`}>
          <img className={`${styles.skillImage}`} src={skillIcons.normal}></img>
          <div className={`${styles.skillInfoDiv}`}>
            <p className={`${styles.skillName}`}>Normal Attack</p>
            <div className={`${styles.skillInfoDivInner}`}>
              <div className={`${styles.skillIconDiv}`}>
                <img
                  className={`${styles.setIcon}`}
                  src={skillIcons.control}
                ></img>
                <p className={`${styles.skillOtherText}`}>
                  {" "}
                  {data.skill[0].type}
                </p>
              </div>
              <div className={`${styles.skillIconDiv}`}>
                <img
                  className={`${styles.setIcon}`}
                  src={skillIcons.ammo}
                ></img>
                <p className={`${styles.skillOtherText} `}>
                  {data.skill[0].ammo}
                </p>
              </div>
              <div className={`${styles.skillIconDiv}`}>
                <img
                  className={`${styles.setIcon}`}
                  src={skillIcons.reload}
                ></img>
                <p className={`${styles.skillOtherText} `}>
                  {data.skill[0].reload}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {desc.map((element, index) => {
            return (
              <Fragment key={index}>
                <p> {element}</p>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default SkillAttack;
