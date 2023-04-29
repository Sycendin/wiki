import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import { InfoHelperMobile } from "../InvidCharHelper";
const CombatInfo = ({ data, size }) => {
  return (
    <Fragment>
      {size.width < 800 ? (
        <InfoHelperMobile data={data} size={size} section={"Combat"} />
      ) : (
        <InfoHelper data={data} size={size} section={"Combat"} />
      )}
    </Fragment>
  );
};

export default CombatInfo;
