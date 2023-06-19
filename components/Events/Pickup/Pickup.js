import { Fragment } from "react";
import { pickup } from "../../../eventdata";
import styles from "../../../styles/pickup.module.css";
import HomeButton from "../../Button/HomeButton";
const Pickup = () => {
  return (
    <Fragment>
      <HomeButton link={"/"}></HomeButton>
      <div className={`${styles.pickupDiv}`}>
        <div className={`${styles.pickupInnerDiv}`}>
          {pickup.map((element, index) => {
            const { name, enddate, image } = pickup[index];
            return (
              <Fragment>
                <div className={`${styles.pickupRowDiv}`}>
                  <div className={`${styles.pickupImageDiv}`}>
                    <img src={image}></img>
                  </div>
                  <div className={`${styles.pickupNameDiv} white`}>
                    <p>{name}</p>{" "}
                  </div>
                  <div className={`${styles.pickupDateDiv} white`}>
                    {" "}
                    <p>{enddate}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <HomeButton link={"/"}></HomeButton>
    </Fragment>
  );
};

export default Pickup;
