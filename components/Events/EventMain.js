import react, { Fragment } from "react";
import EventCountDown from "./EventCountdown/EventCoundown";
import styles from "../../styles/event.module.css";
const EventMain = () => {
  return (
    <Fragment>
      <div className={`${styles.eventMainDiv}`}>
        <EventCountDown />
      </div>
    </Fragment>
  );
};
export default EventMain;
