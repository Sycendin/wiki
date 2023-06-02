import { Fragment } from "react";
import { pickup } from "../../../eventdata";

const Pickup = () => {
  return (
    <Fragment>
      <div className={`${styles.pickupDiv}`}>
        <div className={`${styles.pickupInnerDiv}`}>
          {pastEvents.map((element, index) => {
            return (
              <Fragment>
                <div className={`${styles.pickupImageDiv}`}> </div>
                <div className={`${styles.pickupNameDiv}`}> </div>
                <div className={`${styles.pickupDateDiv}`}> </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Pickup;
