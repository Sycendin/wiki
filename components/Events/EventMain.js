import react, { Fragment } from "react";
import dynamic from "next/dynamic";
import EventCountDown from "./EventCountdown/EventCoundown";
import PickupCountDown from "./EventCountdown/PickupCountdown";
import PastEvents from "./PastEvents/PastEvents";
import MissionPassList from "./MissionPass/MissionPass";
import Minigames from "./Minigames/Minigames";
// import Pickup from "./Pickup/Pickup";
import styles from "../../styles/event.module.css";
import { minigames } from "../../eventdata";
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
      </div>
      <div className={`${styles.pickupMainDiv}`}>
        <Pickup />
      </div>
      <div className={`${styles.pickupMainDiv}`}>
        <MissionPassList />
      </div>
      <div className={`${styles.pickupMainDiv}`}>
        <Minigames />
      </div>
    </Fragment>
  );
};
export default EventMain;
