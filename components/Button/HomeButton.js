import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.scss";
const HomeButton = (link) => {
  return (
    <Fragment>
      <Link href={link}>
        <button className="button is-primary">Go home</button>
      </Link>
    </Fragment>
  );
};

export default HomeButton;
