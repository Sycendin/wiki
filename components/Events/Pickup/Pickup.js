import { Fragment } from "react";
import { pickup } from "../../../eventdata";

const Pickup = () => {
  return (
    <Fragment>
      <div className={`${styles.pickupDiv}`}>
        <div className={`${styles.pickupInnerDiv}`}>
          {pickup.map((element, index) => {
            return (
              <Fragment>
                <div className={`${styles.pickupRowDiv}`}>
                  <div className={`${styles.pickupImageDiv}`}>
                    <img src={pickup.img}></img>
                  </div>
                  <div className={`${styles.pickupNameDiv}`}>
                    <p>{pickup.name}</p>{" "}
                  </div>
                  <div className={`${styles.pickupDateDiv}`}>
                    {" "}
                    <p>{pickup.date}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Pickup;
