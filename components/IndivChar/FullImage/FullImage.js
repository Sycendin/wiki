import { Fragment, useState } from "react";
import styles from "../../../styles/fullimage.module.css";
const FullImage = ({ data }) => {
  const { full } = data;
  const [reveal, setReveal] = useState(false);
  const revealDiv = () => {
    setReveal(!reveal);
  };
  return (
    <Fragment>
      {" "}
      <div className={`${styles.wholeImageDiv}`}>
        <button
          className={`${styles.imageButton} button is-primary`}
          onClick={revealDiv}
        >
          Full Image
        </button>
        {reveal ? (
          <div className={`${styles.imageDiv}`}>
            <img className={`${styles.image}`} src={full} />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
export default FullImage;
