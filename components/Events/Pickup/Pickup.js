import { Fragment } from "react";
import { pickup } from "../../../eventdata";

const Pickup = () => {
  return (
    <Fragment>
      <div className={`${styles.pickupDiv}`}>
        <div className={`${styles.pickupInnerDiv}`}>
          <div className={`${styles.pickupImageDiv}`}> </div>
          <div className={`${styles.pickupNameDiv}`}> </div>
          <div className={`${styles.pickupDateDiv}`}> </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pickup;
