import react, { Children, Fragment } from "react";
// import Link from "next/link";
import styles from "../../styles/button.module.css";
// import defaultBackButtonText from "../../miscData.js";
const HomeButtonDiv = (children) => {
  // const onClick = () => {
  //   window.location.href = "/chars";
  // };

  return (
    <Fragment>
      <div className={`${styles.homeButtonDiv}`}>{children}</div>
    </Fragment>
  );
};

export default HomeButtonDiv;
