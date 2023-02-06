import { Fragment, useEffect, useContext } from "react";
import { Slide, Fade, Bounce, AttentionSeeker } from "react-awesome-reveal";
import { VisitContext } from "../../contexts/VisitContext";
import styles from "../../styles/visit.module.css";
const NewVisit = () => {
  const { visit, timeCheck, changeVisit, changeTimeCheck } =
    useContext(VisitContext);

  const setVisited = () => {
    localStorage.setItem("visit", "True");
    changeVisit("True");
  };
  useEffect(() => {
    const vistedFunc = () => {
      const visited = localStorage.getItem("visit");
      if (visited !== "True") {
        changeVisit("False");
        changeTimeCheck(true);
      }
    };
    setTimeout(() => {
      vistedFunc();
    }, 1000);
  }, []);
  return (
    <Fragment>
      {visit !== "True" && timeCheck === true ? (
        <div className={`${styles.messageBackgroundDiv}`}>
          <AttentionSeeker effect="pulse">
            <div className={` ${styles.messageBig}`}>
              <div className={` ${styles.messageDiv}`}>
                <div className={` ${styles.buttonDiv}`}>
                  <button className="button is-primary" onClick={setVisited}>
                    Ok.
                  </button>
                </div>
              </div>
            </div>
          </AttentionSeeker>
        </div>
      ) : null}
    </Fragment>
  );
};
export default NewVisit;
