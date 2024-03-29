import { Fragment } from "react";
import SkillTextFormat from "../SkillHelper";
import styles from "../../../../styles/skill.module.css";
const SkillAttack = ({ data, skillIcons }) => {
  // Split string with skill description into array
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
            <p className={`${styles.skillName}`}>{data.skill[0].name}</p>
            <div className={`${styles.skillInfoDivInner}`}>
              <div className={`${styles.skillIconDiv}`}>
                <img
                  width={100}
                  height={100}
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
                  width={100}
                  height={100}
                  className={`${styles.setIcon}`}
                  src={skillIcons.ammo}
                ></img>
                <p className={`${styles.skillOtherText} `}>
                  {data.skill[0].ammo}
                </p>
              </div>
              <div className={`${styles.skillIconDiv}`}>
                <img
                  width={100}
                  height={100}
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
        {/* Return the skill description */}
        <div>
          {desc.map((element, index) => {
            // Return helper function for applying appropiate css on each <p>
            return <SkillTextFormat key={index} firstLetter={element} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default SkillAttack;
