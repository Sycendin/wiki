import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const OtherInfo = ({ data, size }) => {
  return (
    <Fragment>
      <InfoHelper data={data} size={size} section={"Other"} />
    </Fragment>
  );
};

export default OtherInfo;
