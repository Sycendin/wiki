import react, { Fragment } from "react";
import EventCountDown from "./EventCountdown/EventCoundown";
import PastEvents from "./PastEvents/PastEvents";
import styles from "../../styles/event.module.css";
const EventMain = () => {
  return (
    <Fragment>
      <div className={`${styles.eventMainDiv}`}>
        <EventCountDown />
        <PastEvents />
      </div>
    </Fragment>
  );
};
export default EventMain;
