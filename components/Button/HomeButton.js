import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.css";

const HomeButton = (link) => {
  const onClick = () => {
    window.location.href = "/chars";
  };

  return (
    <Fragment>
      <div className={`${styles.homeButtonDiv}`}>
        <a href="/chars">
          <button className="button is-primary">Go home</button>
        </a>{" "}
      </div>
    </Fragment>
  );
};

export default HomeButton;
