import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import { InfoHelperMobile } from "../InvidCharHelper";
const CharInfo = ({ data, size }) => {
  return (
    <Fragment>
      {size.width < 800 ? (
        <InfoHelperMobile data={data} size={size} section={"Info"} />
      ) : (
        <InfoHelper data={data} size={size} section={"Info"} />
      )}
    </Fragment>
  );
};

export default CharInfo;
