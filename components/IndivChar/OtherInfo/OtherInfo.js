import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const OtherInfo = ({ data }) => {
  return (
    <Fragment>
      <InfoHelper data={data} section={"Other"} />
    </Fragment>
  );
};

export default OtherInfo;
