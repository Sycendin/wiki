import react, { Fragment, useState, useEffect } from "react";

import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import styles from "../../../styles/eventcountdown.module.css";
const EventCountDown = () => {
  // const [count, setCount] = useState(0);
  const date = "2024-05-01T01:02:03";

  const { days, hours, minutes, seconds } = calcTimeDelta(date);
  // Create state that will update this component
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // Use setInterval to make call back
    const interval = setInterval(() => setTime(Date.now()), 1000);
    // Clear setInterval to stop memory leak/too many re-renders
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Fragment>
      <div className={`${styles.eventMainDiv} white`}>
        <img
          className={`${styles.eventMainImage} white`}
          src="https://i0.wp.com/nikke.gg/wp-content/uploads/image-112.png?resize=1024%2C576&ssl=1"
        ></img>
        <div className={`${styles.eventCountdownDiv} white`}>
          <p className={`${styles.eventCountdownTitle} white`}>Ends in:</p>
          <span className={`${styles.eventNum} white`}>Days: {days} </span>
          <span className={`${styles.eventDiv} white`}> Hours: {hours} </span>
          <span className={`${styles.eventNum} white`}>
            {" "}
            Minutes: {minutes}{" "}
          </span>
          <span className={`${styles.eventNum} white`}>
            Seconds: {seconds}{" "}
          </span>
        </div>
      </div>
      {/* <Countdown
        date={Date.now() + 10000}
        className={`${styles.eventNum} white`}
      /> */}
    </Fragment>
  );
};
export default EventCountDown;
