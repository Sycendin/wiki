import { Fragment } from "react";
import SkillAttack from "./SkillAttack/SkillAttack";
import SkillOne from "./SkillOne/SkillOne";
import SkillTwo from "./SkillTwo/SkillTwo";
import SkillBurst from "./SkillBurst/SkillBurst";
import { skillIcons } from "../../../chardata";
import styles from "../../../styles/skill.module.css";
const Skills = ({ data }) => {
  return (
    <Fragment>
      <div className={`${styles.skillDiv}`}>
        <SkillAttack data={data} skillIcons={skillIcons} />
        <SkillOne data={data} skillIcons={skillIcons} />
        <SkillTwo data={data} skillIcons={skillIcons} />
        <SkillBurst data={data} skillIcons={skillIcons} />
      </div>
    </Fragment>
  );
};
export default Skills;
