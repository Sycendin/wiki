import { Fragment } from "react";
import InfoHelper from "../InvidCharHelper";
import styles from "../../../styles/charinfo.module.css";
const CharInfo = ({ data }) => {
  const { name, manufacturer, squad } = data;

  return (
    <Fragment>
      <InfoHelper data={data} section={"Info"} />
    </Fragment>
  );
};

export default CharInfo;
