import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import { InfoHelperMobile } from "../InvidCharHelper";
const CharInfo = ({ data, size }) => {
  return (
    <Fragment>
      {size.width < 800 ? (
        <InfoHelperMobile data={data} size={size} section={"Character"} />
      ) : (
        <InfoHelper data={data} size={size} section={"Character"} />
      )}
    </Fragment>
  );
};

export default CharInfo;
