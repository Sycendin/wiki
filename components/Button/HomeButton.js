import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.css";
import defaultBackButtonText from "../../miscData.js";
const HomeButton = (link, text) => {
  // const onClick = () => {
  //   window.location.href = "/chars";
  // };

  return (
    <Fragment>
      <div className={`${styles.homeButtonDiv}`}>
        <a href={link}>
          <button className="button is-primary">
            {/* Display text depending on text value passed through if it doesn't exist return default phrase
            that is stored */}
            {text ? text : defaultBackButtonText}
          </button>
        </a>{" "}
      </div>
    </Fragment>
  );
};

export default HomeButton;
