import { Fragment } from "react";
import { pickup } from "../../../eventdata";

const Pickup = () => {
  return (
    <Fragment>
      <div className={`${styles.PickupDiv}`}>
        <div className={`${styles.PickupDiv}`}> </div>
        <div className={`${styles.PickupDiv}`}> </div>
        <div className={`${styles.PickupDiv}`}> </div>
      </div>
    </Fragment>
  );
};

export default Pickup;
