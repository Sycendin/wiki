import react, { Fragment } from "react";
import Countdown from "react-countdown";
import styles from "../../../styles/eventcountdown.module.css";
const EventCountDown = () => {
  return (
    <Fragment>
      <Countdown
        date={Date.now() + 10000}
        className={`${styles.eventDiv} white`}
      />
    </Fragment>
  );
};
export default EventCountDown;
