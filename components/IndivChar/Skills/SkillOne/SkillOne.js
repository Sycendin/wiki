import { Fragment } from "react";
import styles from "../../../../styles/skill.module.css";
import SkillTextFormat from "../SkillHelper";
const SkillOne = ({ data, skillIcons }) => {
  // Split string with skill description into array
  let desc = data.skill[1].effect.split("##");

  return (
    <Fragment>
      {" "}
      {/* <div className={`${styles.skillDiv}`}>
        <img src={skillIcons.normal}></img>
      </div> */}
      <div className={`${styles.skillProfileWhole}`}>
        <div className={`${styles.skillProfile}`}>
          <img
            className={`${styles.skillImage}`}
            src={skillIcons.skillOne}
          ></img>
          <div className={`${styles.skillInfoDiv}`}>
            <p className={`${styles.skillName}`}>{data.skill[1].name}</p>
            <div className={`${styles.skillInfoDivInner}`}>
              {"active" in data.skill[1] ? (
                <div className={`${styles.skillIconDiv}`}>
                  <img
                    width={100}
                    height={100}
                    className={`${styles.setIcon}`}
                    src={skillIcons.reload}
                  ></img>
                  <p className={`${styles.skillOtherText} `}>
                    {data.skill[1].active}
                  </p>
                </div>
              ) : (
                <div className={`${styles.skillIconDiv}`}>
                  <img
                    width={100}
                    height={100}
                    // width={62}
                    // height={70}
                    className={`${styles.setIcon}`}
                    src={skillIcons.reload}
                  ></img>
                  <p className={`${styles.skillOtherText} `}>Passive</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Return the skill description */}
        <div>
          {desc.map((element, index) => {
            return <SkillTextFormat key={index} firstLetter={element} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default SkillOne;
