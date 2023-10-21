import react, { Fragment, useState, useEffect } from "react";
import Countdown, {
  zeroPad,
  calcTimeDelta,
  formatTimeDelta,
} from "react-countdown";
import styles from "../../../styles/eventcountdown.module.css";
const PickupCountDown = () => {
  const date = "2023-08-01T01:02:03";
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
          src="https://static.wikia.nocookie.net/nikke-goddess-of-victory-international/images/5/52/Pick_Up_2_Laplace.jpg"
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
    </Fragment>
  );
};
export default PickupCountDown;
