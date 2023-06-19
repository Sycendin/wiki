import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.css";

const HomeButton = (link) => {
  return (
    <Fragment>
      <div className={`${styles.homeButtonDiv}`}>
        <Link href={link}>
          <button className="button is-primary">Go home</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default HomeButton;
