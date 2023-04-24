import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const CombatInfo = ({ data }) => {
  return (
    <Fragment>
      <InfoHelper data={data} section={"Combat"} />
    </Fragment>
  );
};

export default CombatInfo;
