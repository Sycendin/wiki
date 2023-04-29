import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import { InfoHelperMobile } from "../InvidCharHelper";
const OtherInfo = ({ data, size }) => {
  return (
    <Fragment>
      {size.width < 800 ? (
        <InfoHelper data={data} size={size} section={"Other"} />
      ) : (
        <InfoHelperMobile data={data} size={size} section={"Other"} />
      )}
    </Fragment>
  );
};

export default OtherInfo;
