import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const CharInfo = ({ data, size }) => {
  return (
    <Fragment>
      <InfoHelper data={data} size={size} section={"Info"} />
    </Fragment>
  );
};

export default CharInfo;
