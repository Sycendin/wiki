import { Fragment } from "react";

import styles from "../../../styles/otherinfo.module.css";
const OtherInfo = ({ data }) => {
  const { role } = data;

  return (
    <Fragment>
      <div className={`${styles.otherWholeDiv}`}>
        <h2 className={`${styles.otherTitle} ${styles.otherText}  white`}>
          Other Info
        </h2>
        <div className={`${styles.otherDiv}`}>
          <div className={`${styles.otherRowDiv}`}>
            <p className={`${styles.otherLeftText} white`}>Role</p>{" "}
          </div>
          <div className={`${styles.otherRowDiv}`}>
            <div className={`${styles.otherRoles}`}>
              {role.map((eachRole, index) => (
                <p
                  className={`${styles.otherRoleText} ${styles.otherText} white`}
                >
                  {eachRole}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OtherInfo;
