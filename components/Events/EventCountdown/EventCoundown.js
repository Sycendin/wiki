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
      <span className={`${styles.eventDiv} white`}>{days} </span>
      <span className={`${styles.eventDiv} white`}>{hours} </span>
      <span className={`${styles.eventDiv} white`}>{minutes} </span>
      <span className={`${styles.eventDiv} white`}>{seconds} </span>
      <Countdown
        date={Date.now() + 10000}
        className={`${styles.eventDiv} white`}
      />
    </Fragment>
  );
};
export default EventCountDown;
