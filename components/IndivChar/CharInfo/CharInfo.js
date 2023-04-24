import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";

const CharInfo = ({ data }) => {
  return (
    <Fragment>
      <InfoHelper data={data} section={"Info"} />
    </Fragment>
  );
};

export default CharInfo;
