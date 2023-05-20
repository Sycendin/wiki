import react, { Fragment } from "react";
import PastEventsList from "./PastEventsList/PastEventsList";
const PastEvents = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsDiv}`}>
        <PastEventsList />
      </div>
    </Fragment>
  );
};
export default PastEvents;
