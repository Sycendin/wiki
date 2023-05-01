import { Fragment } from "react";
import { infoChar, infoOther, infoCombat } from "../../chardata";
// import useWindowDimensions from "./hooks/useWindowDimensions";
import styles from "../../styles/combatinfo.module.css";
import mobileStyles from "../../styles/profilemobile.module.css";

// Refactor of code to determine which data to use for infoHelper/Mobile functions
// Below
const getDataInfo = (data, section) => {
  // LeftData is the static string eg, class, weapon
  // Rightdata is the dynamic string eg for weapon smg or sg
  let leftData,
    rightData = [];
  // Set data according to which section of charinfo we are on
  if (section === "Info") {
    const { name, manufacturer, squad } = data;
    leftData = infoChar;
    rightData = [name, manufacturer, squad];
  } else if (section === "Combat") {
    const { rarity, unitClass, weapon, element, position } = data;
    leftData = infoCombat;
    rightData = [rarity, unitClass, weapon, element, position];
  } else if (section === "Other") {
    const { role } = data;
    leftData = infoOther;
    rightData = [role];
  }

  return { leftData, rightData };
};
const InfoHelper = ({ data, size, section }) => {
  let { leftData, rightData } = getDataInfo(data, section);

  // Get window height/width from parent SSRWindowSize in IdivChar
  const { width, height } = size;

  return (
    <Fragment>
      <div className={`${styles.combatWholeDiv}`}>
        <h2 className={`${styles.combatTitle} ${styles.combatText}  white`}>
          {section} Info
        </h2>
        {/* Render depending on if data is array or string */}
        {section === "Other" ? (
          <div className={`${styles.otherRoles}`}>
            {rightData.map((eachRole, index) => (
              <p
                key={index}
                className={`${styles.otherRoleText} ${styles.otherText} white`}
              >
                {eachRole}
              </p>
            ))}
          </div>
        ) : (
          <div className={`${styles.combatDiv}`}>
            {rightData.map((element, index) => {
              return (
                <div className={`${styles.combatRowDiv}`}>
                  <p
                    className={`${styles.combatLeftText} ${styles.combatText} white`}
                  >
                    {leftData[index]}
                  </p>
                  <p
                    className={`${styles.combatRightText} ${styles.combatText}  white`}
                  >
                    {element}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export const InfoHelperMobile = ({ data, section }) => {
  // LeftData is the static string eg, class, weapon
  // Rightdata is the dynamic string eg for weapon smg or sg
  let leftData,
    rightData = [];
  // Set data according to which section of charinfo we are on
  if (section === "Info") {
    const { name, manufacturer, squad } = data;
    leftData = infoChar;
    rightData = [name, manufacturer, squad];
  } else if (section === "Combat") {
    const { rarity, unitClass, weapon, element, position } = data;
    leftData = infoCombat;
    rightData = [rarity, unitClass, weapon, element, position];
  } else if (section === "Other") {
    const { role } = data;
    leftData = infoOther;
    rightData = [role];
  }
  return (
    <Fragment>
      <div className={`${mobileStyles.combatWholeDiv}`}>
        <h2
          className={`${mobileStyles.combatTitle} ${mobileStyles.combatText}  white`}
        >
          {section} Info
        </h2>
        {/* Render depending on if data is array or string */}
        {section === "Other" ? (
          <div className={`${mobileStyles.otherRoles}`}>
            {rightData.map((eachRole, index) => (
              <p
                key={index}
                className={`${mobileStyles.otherRoleText} ${mobileStyles.otherText} white`}
              >
                {eachRole}
              </p>
            ))}
          </div>
        ) : (
          <div className={`${mobileStyles.combatDiv}`}>
            {rightData.map((element, index) => {
              return (
                <div className={`${mobileStyles.combatRowDiv}`}>
                  <p
                    className={`${mobileStyles.combatLeftText} ${mobileStyles.combatText} white`}
                  >
                    {leftData[index]}
                  </p>
                  <p
                    className={`${mobileStyles.combatRightText} ${mobileStyles.combatText}  white`}
                  >
                    {element}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default InfoHelper;
