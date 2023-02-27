import { Fragment } from "react";
import SkillAttack from "./SkillAttack/SkillAttack";
import SkillOne from "./SkillOne/SkillOne";
import SkillTwo from "./SkillTwo/SkillTwo";
import SkillBurst from "./SkillBurst/SkillBurst";
import styles from "../../../styles/skill.module.css";
const Skills = ({ data }) => {
  return (
    <Fragment>
      <div className={`${styles.skillDiv}`}>
        <SkillAttack data={data} />
        <SkillOne data={data} />
        <SkillTwo data={data} />
        <SkillBurst data={data} />
      </div>
    </Fragment>
  );
};
export default Skills;
