import react, { Fragment, useState, useEffect } from "react";

import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import styles from "../../../styles/eventcountdown.module.css";
const EventCountDown = () => {
  // const [count, setCount] = useState(0);
  const date = "2023-12-01T01:02:03";

  const { days, hours, minutes, seconds } = calcTimeDelta(date);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
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
