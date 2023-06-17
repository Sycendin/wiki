import react, { Fragment } from "react";
import Link from "next/link";
import styles from "../../styles/button.module.scss";
const HomeButton = () => {
  return (
    <Fragment>
      <Link href="/">
        <button className="button is-primary">Go home</button>
      </Link>
    </Fragment>
  );
};

export default HomeButton;
