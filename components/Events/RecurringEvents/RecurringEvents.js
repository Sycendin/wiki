import { Fragment } from "react";
import { pickup } from "../../../eventdata";
import styles from "../../../styles/recurr.module.css";
import HomeButton from "../../Button/HomeButton";
import Disqus from "../../Disqus";
const recurringEvents = () => {
  return (
    <Fragment>
      <div className={`${styles.HomeButtonDiv}`}>
        <HomeButton link={"/chars"}></HomeButton>
        <HomeButton link={"/chars"} text={"All Events"}></HomeButton>
      </div>
      <div className={`${styles.pickupDiv}`}>
        <div className={`${styles.pickupInnerDiv}`}>
          {pickup.map((element, index) => {
            const { name, enddate, image } = pickup[index];
            return (
              <Fragment key={index}>
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
      <Disqus identifier={"pickup"} title={"pickup"} />
    </Fragment>
  );
};

export default recurringEvents;
