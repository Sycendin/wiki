import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.css";

const HomeButton = (link, text) => {
  // const onClick = () => {
  //   window.location.href = "/chars";
  // };

  return (
    <Fragment>
      <div className={`${styles.homeButtonDiv}`}>
        <a href={link}>
          <button className="button is-primary">
            {text ? text : "Go Home"}
          </button>
        </a>{" "}
      </div>
    </Fragment>
  );
};

export default HomeButton;
