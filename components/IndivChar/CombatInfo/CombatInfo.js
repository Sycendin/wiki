import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const CombatInfo = ({ data, size }) => {
  return (
    <Fragment>
      <InfoHelper data={data} size={size} section={"Combat"} />
    </Fragment>
  );
};

export default CombatInfo;
