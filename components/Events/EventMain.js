import react, { Fragment } from "react";
import dynamic from "next/dynamic";
import EventCountDown from "./EventCountdown/EventCoundown";
import PickupCountDown from "./EventCountdown/PickupCountdown";
import PastEvents from "./PastEvents/PastEvents";
// import Pickup from "./Pickup/Pickup";
import styles from "../../styles/event.module.css";
const EventMain = () => {
  const Pickup = dynamic(() => import("./Pickup/Pickup"), { ssr: false });
  return (
    <Fragment>
      <div className={`${styles.eventMainDiv}`}>
        <div className={`${styles.eventPickupDiv}`}>
          <EventCountDown />
          <PickupCountDown />
        </div>
        <PastEvents />
        <Pickup />
      </div>
    </Fragment>
  );
};
export default EventMain;
