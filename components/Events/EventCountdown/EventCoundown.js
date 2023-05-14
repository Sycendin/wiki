import react, { Fragment, useState, useEffect } from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import styles from "../../../styles/eventcountdown.module.css";
const EventCountDown = () => {
  const [count, setCount] = useState(0);
  const date = "2023-06-01T01:02:03";
  const { days, hours, minutes, seconds } = calcTimeDelta(date);
  useEffect(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <Fragment>
      <div className={`${styles.eventMainDiv} white`}>
        <span className={`${styles.eventNum} white`}>{days} </span>
        <span className={`${styles.eventDiv} white`}>{hours} </span>
        <span className={`${styles.eventNum} white`}>{minutes} </span>
        <span className={`${styles.eventNum} white`}>{seconds} </span>
      </div>
      <Countdown
        date={Date.now() + 10000}
        className={`${styles.eventNum} white`}
      />
    </Fragment>
  );
};
export default EventCountDown;
