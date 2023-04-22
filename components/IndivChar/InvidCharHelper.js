import react, { Fragment } from "react";
import { infoChar, infoOther, infoCombat } from "../../chardata";
import styles from "../../styles/combatinfo.module.css";
const InfoHelper = ({ data, section }) => {
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
      <div className={`${styles.combatWholeDiv}`}>
        <h2 className={`${styles.combatTitle} ${styles.combatText}  white`}>
          {section} Info
        </h2>
        {/* Render different'y depending on if data is array or string */}
        {section === "Other" ? (
          <div className={`${styles.otherRoles}`}>
            {role.map((eachRole, index) => (
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

export default InfoHelper;
