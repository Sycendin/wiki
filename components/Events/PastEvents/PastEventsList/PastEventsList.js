import react, { Fragment } from "react";
import { pastEvents } from "../../../../eventdata";
const PastEventsList = () => {
  return (
    <Fragment>
      <div className={`${styles.pastEventsListDiv}`}>
        {pastEvents.map((element, index) => (
          <p key={index} className={`${styles.pasEventsText}  white`}>
            {/* {eachRole} */}
          </p>
        ))}
      </div>
    </Fragment>
  );
};
export default PastEventsList;
