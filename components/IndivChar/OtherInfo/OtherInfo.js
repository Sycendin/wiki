import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import styles from "../../../styles/otherinfo.module.css";
const OtherInfo = ({ data }) => {
  const { role } = data;

  return (
    <Fragment>
      <InfoHelper data={data} section={"Other"} />
    </Fragment>
  );
};

export default OtherInfo;
